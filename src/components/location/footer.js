import React from "react";
import "./footer.css"
import gregori from "../../utils/gregori.jpg"

export class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div id="about">
                    <img src={gregori} alt="Gregori the most italian" className="gregori"></img>
                    <h2>About Us</h2>
                    <p>Gregori always dreamed of giving his local community a taste of good home made pizza in a friendly and warm local environment, and since the founding of Gregori's Pizza in 1887, he's been doing just that. We strive to capture the welcoming feeling of Gregoritown in every Pizza. </p><br />
                </div>
                <div id="location">
                    <strong>Location:<br /> Gregori's Pizza 1234-123 st. Gregoritown, Somewhere *** ***<br /></strong><br />
                    <strong>Hours: </strong>< br />
                    <p>Monday - Thursday:   11:00 am. to 10:00 pm.<br />
                        Friday - Saturday:    11:00 am. to 12:00 am.<br />
                        Sunday and Holidays: 4:00 pm. to 9:00 pm.<br />Delivery is available from 4PM until closing.<br /><br /></p>
                    <strong>Phone: 780-939-4445 </strong><br />
                    <strong>For our first class catering services please call ***-***-**** and ask for XXXXXXX. </strong><br /><br /><br />
                    <span id="me" className="">designed and built by Gregory Korsos</span>
                </div>
            </div>
        )
    }
}