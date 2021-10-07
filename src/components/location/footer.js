import React from "react";
import "./footer.css"
import amanda from "../../utils/amanda.webp"

export class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div id="about">
                    <img src={amanda} alt="Amanda" className="amanda"></img>
                    <h2>About Us</h2>
                    <p>Amanda always dreamed of giving her local community a taste of good home made pizza in a friendly and warm local environment, and since the founding of Amanda's Pizza in XXXX,
                        she's been doing just that. We strive to capture the welcoming feeling of Morinville in every Pizza. </p><br />
                </div>
                <div id="location">
                     <strong>Location:<br /> Amanda's Pizza 9604-100 st. Morinville, Alberta T8R 1V4<br />Located next to J.M.Turner Goldsmith. </strong><br />
                     <strong>Hours: </strong>< br/>
                    <p>Monday - Thursday:   11:00 am. to 10:00 pm.<br />
Friday - Saturday:    11:00 am. to 12:00 am.<br />
Sunday and Holidays: 4:00 pm. to 9:00 pm.<br />Delivery is available from 4PM until closing.<br /><br /></p>
                     <strong>Phone: 780-939-4445 </strong><br />
                     <strong>For our catering services please call 780-939-4445 and ask for Yolanda. </strong><br /><br /><br />
                    <span id="me" className="">designed and built by Gregory Korsos</span>
                </div>
            </div>
        )
    }
}