import './App.css';
import Header from '../Header/header';
import Landing from '../landing/landing';
import { Footer } from '../location/footer';
import { CollapseMenu } from '../collapsibles/collapsible';
import { Route, BrowserRouter as Router } from "react-router-dom";
import OrderApp from '../Ordering/orderapp/orderapp';

export function App() {
    return (
        <div id="page">
            <div id="content">
                <Router>
                    <Route path="/">
                        <Header />
                        <Landing />
                        <CollapseMenu />
                        <Footer />
                    </Route>
                    <Route path="/order">
                        <OrderApp />
                    </Route>
                </Router>
            </div>
        </div>
    )
}

export default App