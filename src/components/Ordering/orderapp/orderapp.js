import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

import AddProduct from '../addProducts/addProduct';
import Cart from '../cart/cart';
import Login from '../login/login';
import ProductList from '../productList/productlist';

import Context from "../../../Context";

import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default class OrderApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            cart: {},
            products: []
        };
        this.routerRef = React.createRef();
    }

    // Makes sure the user is loaded when the app starts up during the componentDidMount lifecycle of the app component and asynchronously requests product data before sticking it all to the state
    async componentDidMount() {
        let user = localStorage.getItem("user");
        let cart = localStorage.getItem("cart");

        const products = await axios.get('http://localhost:3001/products');
        user = user ? JSON.parse(user) : null;
        cart = cart ? JSON.parse(cart) : {};

        this.setState({ user, products: products.data, cart });
    }

    // Makes an Ajax request to the /login endpoint passing what the user entered into the login form. If the user's credentials were correct (200) code, it decodes the token sent in the server's response to obtain and save their email, the token, and their access level in the state.
    login = async (email, password) => {
        const res = await axios.post(
            'http://localhost:3001/login',
            { email, password },
        ).catch((res) => {
            return { status: 401, message: 'Unauthorized' }
        })

        if (res.status === 200) {
            const { email } = jwt_decode(res.data.accessToken)
            const user = {
                email,
                token: res.data.accessToken,
                accessLevel: email === 'admin@example.com' ? 0 : 1
            }

            this.setState({ user });
            localStorage.setItem("user", JSON.stringify(user));
            return true;
        } else {
            return false;
        }
    }

    logout = e => {
        e.preventDefault();
        this.setState({ user: null });
        localStorage.removeItem("user");
    };

    addProduct = (product, callback) => {
        let products = this.state.products.slice();
        products.push(product);
        this.setState({ products }, () => callback && callback());
    };

    //This method appends the item using the item ID as key for the cart object. We’re using an object rather than an array for the cart to enable easy data retrieval. This method checks the cart object to see if an item with that key exists. If it does, it increases the amount; otherwise it creates a new entry. The second if statement ensures that the user can’t add more items than are actually available. The method then saves the cart to state, which is passed to other parts of the application via the context. Finally, the method saves the updated cart to local storage for persistence.
    addToCart = cartItem => {
        let cart = this.state.cart;
        if (cart[cartItem.id]) {
            cart[cartItem.id].amount += cartItem.amount;
        } else {
            cart[cartItem.id] = cartItem;
        }
        if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
            cart[cartItem.id].amount = cart[cartItem.id].product.stock;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({ cart });
    };

    //The removeCart method removes a product using the provided product key. It then updates the app state and local storage accordingly. The clearCart method resets the cart to an empty object in state and removes the cart entry on local storage.
    removeFromCart = cartItemId => {
        let cart = this.state.cart;
        delete cart[cartItemId];
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({ cart });
      };
      
      clearCart = () => {
        let cart = {};
        localStorage.removeItem("cart");
        this.setState({ cart });
      };

      checkout = () => {
        if (!this.state.user) {
          this.routerRef.current.history.push("/login");
          return;
        }
      
        const cart = this.state.cart;
      
        const products = this.state.products.map(p => {
          if (cart[p.name]) {
            p.stock = p.stock - cart[p.name].amount;
      
            axios.put(
              `http://localhost:3001/products/${p.id}`,
              { ...p },
            )
          }
          return p;
        });
      
        this.setState({ products });
        this.clearCart();
      };

    render() {
        return (
            // pass the data and methods to manipulate it as the value property on the provider component
            <Context.Provider
                value={{
                    ...this.state,
                    removeFromCart: this.removeFromCart,
                    addToCart: this.addToCart,
                    login: this.login,
                    addProduct: this.addProduct,
                    clearCart: this.clearCart,
                    checkout: this.checkout
                }}
            >
                <Router ref={this.routerRef}>
                    <div className="App">
                        <nav
                            className="navbar container"
                            role="navigation"
                            aria-label="main navigation"
                        >
                            <div className="navbar-brand">
                                <b className="navbar-item is-size-4 ">ecommerce</b>
                                <label
                                    role="button"
                                    class="navbar-burger burger"
                                    aria-label="menu"
                                    aria-expanded="false"
                                    data-target="navbarBasicExample"
                                    onClick={e => {
                                        e.preventDefault();
                                        this.setState({ showMenu: !this.state.showMenu });
                                    }}
                                >
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </label>
                            </div>
                            <div className={`navbar-menu ${this.state.showMenu ? "is-active" : ""
                                }`}>
                                <Link to="/products" className="navbar-item">
                                    Products
                                </Link>
                                {this.state.user && this.state.user.accessLevel < 1 && (
                                    <Link to="/add-product" className="navbar-item">
                                        Add Product
                                    </Link>
                                )}
                                <Link to="/cart" className="navbar-item">
                                    Cart
                                    <span
                                        className="tag is-primary"
                                        style={{ marginLeft: "5px" }}
                                    >
                                        {Object.keys(this.state.cart).length}
                                    </span>
                                </Link>
                                {!this.state.user ? (
                                    <Link to="/login" className="navbar-item">
                                        Login
                                    </Link>
                                ) : (
                                    <Link to="/" onClick={this.logout} className="navbar-item">
                                        Logout
                                    </Link>
                                )}
                            </div>
                        </nav>
                        <Switch>
                            <Route exact path="/" component={ProductList} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/add-product" component={AddProduct} />
                            <Route exact path="/products" component={ProductList} />
                        </Switch>
                    </div>
                </Router>
            </Context.Provider>
        );
    }
}