import React from "react";
import "./header.css"

class Header extends React.Component {
    render() {
        return(
            <div className="header" id="home">
                <h1>Amanda's Pizza</h1>
                <br />
                <p><em>Small town atmosphere, big city taste</em></p>
            </div>
        )
    }
}

export default Header;