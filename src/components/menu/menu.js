import React from "react";
import { BurgerMenu } from "./burgers";
import { DonairMenu } from "./donairs";
import { ExtrasMenu } from "./extras";
import { MunchiesMenu } from "./munchies";
import { PastaMenu } from "./pasta";
import { PizzaMenu } from "./pizza";
import { SaladsMenu } from "./salads";

export class Menu extends React.Component {
    render() {
        return(
            <div>
                <PizzaMenu />
                <BurgerMenu />
                <DonairMenu />
                <PastaMenu />
                <SaladsMenu />
                <ExtrasMenu />
                <MunchiesMenu />                                
            </div>
        )
    }
}
