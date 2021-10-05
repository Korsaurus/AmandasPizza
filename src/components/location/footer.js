import React from "react";
import "./footer.css"

export class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div id="about">
                    <img url="../../utils/amanda.png" />
                    <h2>About Us</h2>
                    <p>Amanda always dreamed of giving her local community a taste of good home made pizza in a friendly and warm local environment, and since the founding of Amanda's Pizza in XXXX,
                        she's been doing just that. We strive to capture the welcoming feeling of Morinville in every Pizza, rather than the cold taste of franchise chains. </p>
                </div>
                <div id="location">
                    <h4>Location: Amanda's Pizza 9604-100 st. Morinville, Alberta T8R 1V4<br />Located next to J.M.Turner Goldsmith.</h4>
                    <h4>Hours:</h4>
                    <h4>Phone: 780-939-4445</h4>
                    <h4>For our catering services please call 780-939-4445 and ask for Yolanda.</h4>
                </div>
            </div>
        )
    }
}