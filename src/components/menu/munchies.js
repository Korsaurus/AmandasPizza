import React from "react";
import "./munchies.css"
import extras1 from "../../utils/extras1.jpg"
import extras2 from "../../utils/extras2.jpg"
import extras3 from "../../utils/extras3.jpg"

export class MunchiesMenu extends React.Component {

    render() {
        return (
            <div id="munchies">

                <h3>MUNCHIES</h3><br />
                <div className="item-container">
                    <div className="item">
                    <img src={extras1} alt="Menu Item" className="item-image"></img><br />
                        <strong>Gregori'S FAMILY PLATTER</strong> $32.50<br />
                        <em>mozza sticks, onion rings, dry ribs, poato wedges, battered mushrooms, and wings</em><br /><br />
                    </div>
                    <div className="item">
                    <img src={extras2} alt="Menu Item" className="item-image"></img><br />
                        <strong>Gregori'S PLATTER FOR TWO</strong> $23.50<br />
                        <em>smaller version of the family platter</em><br /><br />
                    </div>
                    <div className="item">
                    <img src={extras3} alt="Menu Item" className="item-image"></img><br />
                        <strong>Gregori'S "42" PLATTER</strong> $42.00<br />
                        <em>dry ribs, mac N cheese bites, BBQ meatballs, nuggets, garlic bites, nachos and pickle spears</em><br /><br />
                    </div>
                    <div className="item">
                        <strong>CHICKEN WINGS</strong> $11.00<br />
                        <em>1 LB of wings with your choice of hot, mild, teriyaki, honey garlic, BBQ, lemon pepper, salt and pepper, cajun italian herb, Murray's extra hot, zesty gold hawaiian, dill, taco, chipotle mango and a ranch dip</em><br /><br />
                    </div>
                    <div className="item">
                        <strong>4 LB BOX OF WINGS</strong> $38.50<br />
                        <em>choice of 2 flavours with 3 ranch dippers</em><br /><br />
                    </div>
                    <div className="item">
                        <strong>NACHOS</strong> $11.50 <br />
                        <em>chips topped with onions, tomatoes, jalapenos and mixed cheese, served with salsa and sour cream</em><br />Add beef $2.50<br /><br />
                    </div>
                    <div className="item">
                        <strong>NACHOS SUPREME</strong> $13.50  <br />
                        <em>chips topped with onions, tomatoes, jalapenos, green peppers, olives, banana peppers and mixed cheese, served
                            with salsa and sour cream</em><br />Add beef $2.50<br /><br />
                    </div>
                    <div className="item">
                        <strong>CHICKEN FINGERS AND FRIES</strong> $12.00<br /><br />
                    </div>
                    <div className="item">
                        <strong>FISH AND CHIPS</strong> $12.00<br /><br />
                    </div>
                    <div className="item">
                        <strong>MEATLOAF AND FRIES</strong> $12.00<br /><br />
                    </div>
                    <div className="item">
                        <strong>SALSBURY STEAK AND FRIES</strong> $12.00<br /><br />
                    </div>
                    <div className="item">
                        <strong>SNACK BOX</strong> $9.75<br />
                        Choice of any 2 of the following: <em> pickle spears, stuffed jals, mozza sticks, dry garlic ribs, mac n' cheese bites, zucchini sticks, bbq meatballs or potato wedges</em>
                    </div>
                </div>
            </div>
        )
    }
}