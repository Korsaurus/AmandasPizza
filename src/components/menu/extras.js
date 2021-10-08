import React from "react";
import "./extras.css"
import onion from "../../utils/onionrings.webp"
import shrooms from "../../utils/shrooms.webp"
import pickle from "../../utils/pickles.webp"

export class ExtrasMenu extends React.Component {

    render() {
        return (
            <>
                <div id="extras"><h3>EXTRAS</h3> <br />
                    <div className="item-container">

                        <div className="item">
                        <img src={onion} alt="Menu Item" className="item-image"></img><br />
                            <strong>ONION RINGS</strong> $5.50<br /><br />
                        </div>
                        <div className="item">
                        <img src={shrooms} alt="Menu Item" className="item-image"></img><br />
                            <strong>BATTERED MUSHROOMS</strong> $9.50 <br /><br />
                        </div>
                        <div className="item">
                        <img src={pickle} alt="Menu Item" className="item-image"></img><br />
                            <strong>DEEP FRIED PICKLE SPEARS</strong> $9.50<br /><br />
                        </div>
                        <div className="item">
                            <strong>DRY GARLIC RIBS</strong> $10.50<br /><br />
                        </div>
                        <div className="item">
                            <strong>FRENCH FRIES</strong> $4.25<br /><br />
                        </div>
                        <div className="item">
                            <strong>MOZZARELLA STICKS</strong> $9.50<br /><br />
                        </div>
                        <div className="item">
                            <strong>STUFFED JALAPENOS</strong> $9.50<br /><br />
                        </div>
                        <div className="item">
                            <strong>MAC AND CHEESE BITES</strong> $9.50<br /><br />
                        </div>
                        <div className="item">
                            <strong>GARLIC TOAST</strong> $1.50<br /><br />
                        </div>
                    </div>
                </div>
                <div id="poutine">
                    <br />
                    <strong>POUTINES</strong><br /><br />
                    <div className="item-container">
                        <div className="item">
                            <strong>Regular Poutine </strong> $7.50<br /><br />
                        </div>
                        <div className="item">
                            <strong>Salsbury </strong> $8.75<br /><br />
                        </div>
                        <div className="item">
                            <strong>Bacon </strong> $8.75<br /><br />
                        </div>
                        <div className="item">
                            <strong>TBA </strong> $9.00<br /><br />
                        </div>
                        <div className="item">
                            <strong>Triple Pork </strong> $9.00<br /><br />
                        </div>
                        <div className="item">
                            <strong>Taco Poutine </strong> $9.00<br /><br />
                        </div>
                        <div className="item">
                            <strong>Italian Cheese </strong> $7.75<br /><br />
                        </div>
                        <div className="item">
                            <strong>80'S Cafeteria Style </strong> $7.00<br /><br />
                        </div>
                        <div className="item">
                            <strong>Donair Bowl </strong> $8.75<br /><br />
                        </div>
                    </div>
                    <div>
                        <strong>BEVERAGES</strong><br /><br />
                        <strong>2L Pop: </strong> $23.00<br />
                        <strong>Can Pop: </strong> $1.50<br />
                        <strong>Can 6 Pack: </strong> $7.00<br />
                        <strong>Chocolate Milk: </strong> $2.25<br />
                        <strong>Bottled Water: </strong> $1.50<br />
                        <strong>Energy Drinks: </strong> $2.75
                    </div>
                </div>
            </>
        )
    }
}