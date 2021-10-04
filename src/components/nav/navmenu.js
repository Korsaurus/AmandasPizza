import React, { Component } from "react";
import "./menu.css";
 
class Menu2 extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2><a href="#home">Home</a></h2>
        <h2><a href="#pizza">Pizza</a></h2>
        <h2><a href="#burger">Burger</a></h2>
        <h2><a href="#donair">Donair</a></h2>
        <h2><a href="#pasta">Pasta</a></h2>
        <h2><a href="#salads">Salads</a></h2>
        <h2><a href="#extras">Extras</a></h2>
        <a href='#munchies' target="_self"><h2>Munchies</h2></a>
      </div>
    );
  }
}
 
export default Menu2;