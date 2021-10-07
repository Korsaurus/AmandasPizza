import React from "react";
import "./pasta.css"
import fettucc from "../../utils/fettucc.jpg"
import lasaga from "../../utils/lasaga.jpg"

export class PastaMenu extends React.Component {

    render() {
        return (
            <div id="pastabg">
                <div id="pasta"><h3>PASTA</h3>
                    <em>All pasta dishes made with our homemade sauces and served with garlic toast</em><br /><br />
                    <strong>BAKED WITH CHEESE: </strong>ADD $2.50<br /><br />
                    <div className="item-container">
                        <div className="item">
                        <img src={lasaga} alt="Menu Item" className="item-image"></img><br />
                            <strong>BAKED LASAGNA</strong>
                            $11.25<br />
                            <em>and old favorite and seved baked with cheese</em>
                        </div>
                        <div className="item">
                        <img src={fettucc} alt="Menu Item" className="item-image"></img><br />
                            <strong>FETTUCCINE</strong>
                            $10.75<br />
                            <em>fettuccini pasta with alfredo sauce and <br />mushrooms</em><br />
                            ADD CHICKEN: $2.50<br /><br />
                        </div>
                        <div className="item-right">
                        <br />
                            <strong>SEAFOOD FETTUCCINI</strong>
                            $11.25<br />
                            <em>fettuccini pasta with alfredo sauce, <br /> shrimp and crab meat</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>PASTA CON BROCCOLI</strong>
                            $11.25<br />
                            <em>fettuccini pasta with bacon, mushrooms, broccoli and alfredo sauce</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>SPAGHETTI</strong>
                            $9.00<br />
                            <em>another old favorite</em><br /><br />
                        </div>
                        <div className="item-right">
                            <strong>BACON CARBONARA</strong>
                            $10.75<br />
                            <em>penne with bacon, mushrooms and alfredo sauce.</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>PENNE</strong>
                            $9.00<br />
                            <em>penne with your choice of meat sauce, alfredo or rose</em><br /><br />
                        </div>
                        <div className="item">
                            <strong>ALOHA PENNE</strong>
                            $11.00<br />
                            <em>penne, pineapple chicken, alfredo and bacon</em>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}