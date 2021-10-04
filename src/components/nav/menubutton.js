import React, { Component } from "react";
import './menubutton.css';
 
class MenuButton extends Component {
  render() {
    return (
      <button id="button"
              onMouseDown={this.props.handleMouseDown}>Menu</button>
    );
  }
}
 
export default MenuButton