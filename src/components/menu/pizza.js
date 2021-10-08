import React from "react";
import "./pizza.css"
import meatpizza from "../../utils/meatpizza.webp"
import greekpizza from "../../utils/greekpizza.webp"
import veggiepizza from "../../utils/veggiepizzaa.webp"

export class PizzaMenu extends React.Component {

    render() {
        return (
            <div id="pizzabg">
                <div id="pizza"><h3> PIZZA</h3>
                    <h4>Build Your Own Pizza</h4>
                    <p> Start with our homemade pizza sauce and mozza cheese<br /><br />
                        <strong>&nbsp;&nbsp;10"<br />&nbsp;&nbsp;&nbsp; One Topping: </strong> $11.00
                        <strong> Two Topping: </strong> $14.50 <strong> Three Topping: </strong> $17.50<br /><br />
                        <strong>12"<br />&nbsp;&nbsp;&nbsp; One Topping :</strong> $14.50 <strong>Two Topping: </strong> 15.75<strong> Three Topping: </strong> $17.00 <br /><br />
                        <strong>&nbsp;&nbsp;14"<br />&nbsp;&nbsp;&nbsp; One Topping: </strong>$17.50 <strong> Two Topping: </strong> $18.75<strong> Three Topping:</strong> $20.00 <br /><br />
                        <strong>Extra Toppings</strong><br /> $2.00 each for <strong>10"</strong><br /> $2.50 for <strong>12"</strong><br />$3.00 for <strong>14"</strong> <br /><br />
                        <em>extra cheese, feta, cheddar, ham, pepperoni, beef,onions, olives, mushrooms, green peppers, tomatoes,<br /> bacon, pineapple, jalapeno peppers, banana peppers, italian sausage, donair meat, chicken.</em><br /><br />

                        <strong>Dippers<br /></strong> <em>hot sauce, sweet sauce, garlic sauce, ranch, chipotle cheddar, dill dip, spicy ranch</em> $0.75 each. <br /><br />
                        <strong>Keto? No Carbs? Low Carbs? We'll bake your pizza in a bowl instead of a crust!</strong><br /><br /><br />
                    </p>

                    <strong>Our Pizzas</strong> <br /><br />
                    <strong>10"</strong> $14.50  <br />  <strong>12"</strong> $18.00 <br /><strong>14"</strong> $21.75 <br /><br />
                    <div className="item-container">
                        <div className="item">
                            <img src={meatpizza} alt="Menu Item" className="item-image"></img>
                            <br />
                            <strong>ALL MEAT</strong><br />
                            <em>ham, pepperoni, beef, bacon and italian sausage</em><br /><br />
                        </div>
                        <div className="item">
                            <img src={greekpizza} alt="Menu Item" className="item-image"></img>
                            <br />
                            <strong>GREEK PIZZA</strong><br />
                            <em>onions, olives, tomatoes, green peppers and feta</em><br /><br />
                        </div>
                        <div className="item">
                            <img src={veggiepizza} alt="Menu Item" className="item-image"></img>
                            <br />
                            <strong>VEGETARIAN</strong><br />
                            <em>onions, olives, mushrooms, green peppers and fresh tomatoes</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>FIVE CHEESE</strong><br />
                            <em>parmesan, cheddar, mozza, asiago and feta</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>SIESTA</strong><br />
                            <em>beef, onions, green peppers, tomatoes, jalapeno peppers and cheddar</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>PIEROGI</strong><br />
                            <em>potato wedges, bacon, onions, sour cream and cheddar</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>DELUXE PIZZA</strong><br />
                            <em>ham, pepperoni, mushrooms and green peppers</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>SEAFOOD SPECIAL</strong><br />
                            <em>crab meat, shrimp, alfredo sauce and cheddar cheese</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>DONAIR PIZZA</strong><br />
                            <em>donair meat, onions, tomatoes, green peppers and garlic sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>HOUSE SPECIALTY</strong><br />
                            <em>ham, pepperoni, onions, mushrooms, olives, green peppers and shrimp</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>IT'S A SPICY ONE</strong><br />
                            <em>pepperoni,italian sausage, banana peppers, jalapeno peppers, roasted garlic, crushed red peppers and cayenne white sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>BCB</strong><br />
                            <em>double beef, onions, bacon and cheddar cheese on burger sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>TACO PIZZA</strong><br />
                            <em>salsa, sour cream, beef, onion and cheddar cheese</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>BBQ PULLED PORK PIZZA</strong><br />
                            <em>BBQ pulled pork with onions and banana pepper</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>PHILLY CHEESE</strong><br />
                            <em>roast beef, onions, greenpeppers and cheddar</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>ALOHA CHICKEN PIZZA</strong><br />
                            <em>chicken, ham, bacon, pineapple and a creamy white sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>SOUTHWEST CHICKEN</strong><br />
                            <em>chicken, green peppers, tomatoes, roasted garlic and cayenne white sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>BBQ CHICKEN</strong><br />
                            <em>chicken, bacon, green peppers and onions</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>THE ALBERTA RANCHER</strong><br />
                            <em>spicy ranch, beef, onions, mushrooms and bacon</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>TEXAS RANCHER</strong><br />
                            <em>just take the spicy out of the Alberta Rancher</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>CHICKEN CLUB PIZZA</strong><br />
                            <em>chicken, bacon, tomato and a creamy ranch sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>PICK-A-LICIOUS</strong><br />
                            <em>lots of pickles, dill, bacon and cheese on creamy dill sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>SPICY CHICKEN</strong><br />
                            <em>chicken, hot sauce, banana peppers, onions, cheddar and ranch</em><br /><br /><br />
                        </div>
                    </div>
                    <br />
                    <strong>CAL-ZONE</strong><br />
                    UP TO THREE TOPPINGS $15.75<br />
                    sauce, mozza, and toppings folded in our fresh made dough, sprinkled with parmesan and herbs baked golden brown<br /><br />
                    <strong>ZANY BREAD</strong><br />
                    <strong>10"</strong> $8.00<br /><strong>&nbsp;&nbsp;12"</strong> $10.50<br /><strong>&nbsp;&nbsp;14"</strong> $13.50<br />
                    <em>Add $1.50 for meat sauce Dipper</em><br />
                </div>
            </div >
        )
    }
}