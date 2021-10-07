import React from "react";
import "./header.css"

class Header extends React.Component {
    render() {
        return(
            <div className="header" id="home">
                <h1>Gregori's Pizza</h1>
                <br />
                <p>Small town hospitality <br /> big city taste</p>
            </div>
        )
    }
}

export default Header;