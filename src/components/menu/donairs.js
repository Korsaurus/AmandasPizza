import React from "react";
import "./donairs.css"
import regdonair from "../../utils/regdonair.jpg"
import chickdonair from "../../utils/chickendonair.jpg"

export class DonairMenu extends React.Component {

    render() {
        return (
            <div id="donairbg">
                <div id="donair"><h3>DONAIRS</h3>
                    <strong>Made from Amanda's own recipe - so big we don't need to call it "JUMBO"</strong><br /><br />
                    <div className="item-container-donair">
                        <div className="item">
                            <img src={regdonair} alt="Menu Item" className="item-image"></img> <br />
                            <strong>REGULAR DONAIR</strong><br /><em>100% all beef wrapped in a <strong>12"</strong> pita with tomatoes, onions and lettuce with your <br />choice of Amanda's own homemade Garlic or sweet sauce - $9.00<br /> Add Mozza Cheese $1.50</em><br /><br />
                        </div>
                        <div className="item">
                            <img src={chickdonair} alt="Menu Item" className="item-image"></img> <br />
                            <strong>CHICKEN DONAIR</strong><br />
                            <em>specially spiced all white chicken, wrapped in a fresh pita with onions, tomatoes and lettuce with your choice of garlic or sweet sauce $10.00<br />Add Mozza Cheese $1.50</em>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}