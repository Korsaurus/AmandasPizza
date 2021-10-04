import React from "react";

class Landing extends React.Component {

    render() {
        return(
            <div className="Landingpage">
                <h2>Slice of the day</h2>
                <p>Available Monday - Friday 11AM  to 1PM<br />slice $3.25<br />slice + pop $4.25</p>
                <h2>Specials</h2>
                <h4>Meal Special</h4>
                <p>2 - 12" PIZZA'S MAC AND CHEESE WEDGES $40.00<br />ADD LEMON OR APPLE TARTS FOR $3.00</p>
                <h4>Single Special</h4>
                <p>1 small 2 topping pizza, 10 wings and 2 cans of pop $24.00</p>
                <h4>Burger Special</h4>
                <p>2 mushroom burgers $10.00</p>
            </div>
        )
    }
}

export default Landing;