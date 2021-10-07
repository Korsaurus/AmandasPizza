import React from "react";
import "./burgers.css"
import mushburg from "../../utils/mushburg.jpg"
import burgerpizza from "../../utils/burgerpizza.png"
import boldburger from "../../utils/boldburger.jpg"

export class BurgerMenu extends React.Component {

    render() {
        return (
            <div id="burgerbg">
                <div id="burger"><h3>BURGERS & SUBS</h3>
                    <strong>BURGERS</strong><br /><br />
                    All burgers are made with 1 1/4 pound hand pressed all-beef patties<br /><br /><br />
                    <div className="item-container">
                        <div className="item">
                        <img src={boldburger} alt="Menu Item" className="item-image"></img>
                            <strong>AMANDA'S BOLD BURGER</strong> $8.00<br />
                            <em>2 patties, bold BBQ sauce, cheddar cheese with onion rings on the burger with pickles, onions, tomato, lettuce and Amanda's special sauce.</em> <br /><br />
                        </div>
                        <div className="item">
                        <img src={mushburg} alt="Menu Item" className="item-image"></img>
                            <strong>MUSHROOM BURGER</strong> $6.50<br />
                            <em>Amanda's Famouse mushroom sauce and sauted mushrooms</em><br /><br />
                        </div>
                        <div className="item">
                        <img src={burgerpizza} alt="Menu Item" className="item-image"></img>
                            <strong>PIZZA BURGER</strong> $6.50<br />
                            <em>with pizza sauce, pepperoni and mozza cheese</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>CHEESE BURGER</strong> $6.25<br />
                            <em>cheddar, lettuce, onions, pickles, Amanda's special sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>ROCKY BURGER</strong> $7.00<br />
                            <em>bacon, cheese, ham, onions, pickles, Amanda's special sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>REGULAR BURGER</strong> $5.50<br />
                            <em>lettuce, tomato, onions, pickles, Amanda's special sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>BACON CHEESE BURGER</strong> $6.75<br />
                            <em>bacon, cheddar, lettuce, onions, pickles, Amanda's special sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>BBQ PULLED PORK BURGER</strong> $5.75<br />
                            <em>bbq pulled pork, bannana peppers and lettuce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>NITRO BURGER</strong> $6.50<br />
                            <em>hot sauce, jalapenos, lettuce and cheddar</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>CRISPY CHICKEN BURGER</strong> $6.50<br />
                            <em>breaded chicken breast, mayo, tomato and lettuce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>CHICKEN CORDON BLEU BURGER</strong> $7.00<br />
                            <em>breaded chicken breast, ham, mozza cheese and ranch dressing</em>
                        </div>
                        <div className="item">
                            <strong>SPICY CHICKEN BURGER</strong> $6.50<br />
                            <em>breaded chicken breast, FRANKS red hot and ranch</em><br /><br />
                        </div>
                    </div>
                    <br />
                    <strong>ADD an extra beef patty to your burger:</strong><br /> $2.75<br /><br />

                    <strong>SUBS</strong><br />
                    All subs are served on homemade buns choice of toasted, heated or heated at home.<br /><br />
                    <div className="item-container">
                        <div className="item">
                            <strong>DONAIR</strong> $7.50<br />
                            <em>donair meat, onions, tomatoes, cheese and garlic sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>PIZZA LOAF</strong> $7.50<br />
                            <em>pepperoni, ham, onions, cheese and pizza sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>HAM AND CHEDDAR$</strong> $7.25<br />
                            <em>ham, cheddar, mayo and mustard</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>BBQ CHICKEN</strong> $8.75<br />
                            <em>bbq chicken, onions, green peppers and cheese</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>CHICKEN CLUB</strong> $8.75<br />
                            <em>chicken, bacon, toms, lettuce and cheese</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>PHILLY CHEESE</strong> $8.75<br />
                            <em>roast beef, onions, green peppers, mayo and cheddar cheese</em>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}