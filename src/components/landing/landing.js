import React from "react";
import "./landing.css"

class Landing extends React.Component {

    render() {
        return (
            <div id="reeee">
                <div className="landingpage">
                    <h2 className="title">Slice of the day</h2>
                    <p>Available Monday - Friday 11AM  to 1PM<br />$3.25 per slice<br />$4.25 combo with pop</p>
                    <h2>Specials</h2>
                    <h3>Meal Special:</h3>
                    <p>Two 12" <em>Pizzas + Mac and Cheese Wedges</em> $40.00<br />Add Lemon or Apple Tarts for $3.00</p>
                    <h3>Single Special:</h3>
                    <p>10" Two Topping pizza, 10 Wings and 2 Cans of Pop $24.00</p>
                    <h3>Burger Special:</h3>
                    <p>Two Mushroom Burgers $10.00</p>
                </div>
            </div>
        )
    }
}

export default Landing;