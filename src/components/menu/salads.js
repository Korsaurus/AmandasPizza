import React from "react";
import "./salads.css"
import salad from "../../utils/greeksalad.webp";


export class SaladsMenu extends React.Component {

    render() {
        return (
            <div id="saladbg">
                <div id="salads"><h3>SALADS</h3>
                    Our salads are served with garlic toast<br /><br />
                    <div className="item-container">
                        <div className="item">
                            <strong>CAESAR SALAD</strong> $7.00<br />
                            <em>add chicken, cajun chicken or seafood</em> $2.50<br /><br />
                        </div>
                        <div className="item">
                            <img src={salad} alt="Menu Item" className="item-image"></img>
                            <br />
                            <strong>GREEK SALAD</strong> $7.00<br /><br />
                        </div>
                        <div className="item">
                            <strong>TOSSED SALAD</strong> $6.00
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}