import React from "react";
import "./salads.css"

export class SaladsMenu extends React.Component {

    render() {
        return (
            <div id="saladbg">
            <div id="salads"><h3>SALADS</h3>
                <p> <em>salads served with garlic toast</em><br /><br />

                    <strong>CAESAR SALAD</strong> $7.00<br />
                    <em>add chicken, cajun chicken or seafood</em> $2.50<br /><br />
                    <strong>GREEK SALAD</strong> $7.00<br /><br />
                    <strong>TOSSED SALAD</strong> $6.00</p></div></div>
        )
    }
}