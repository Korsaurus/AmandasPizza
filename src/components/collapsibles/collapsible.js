import React from "react";
import Collapsible from "react-collapsible";
import { MunchiesMenu } from "../menu/munchies"
import { ExtrasMenu } from "../menu/extras"
import { SaladsMenu } from "../menu/salads"
import { DonairMenu } from "../menu/donairs"
import { BurgerMenu } from "../menu/burgers"
import { PizzaMenu } from "../menu/pizza"
import { PastaMenu } from "../menu/pasta"

import "./collapsible.css"

export function CollapseMenu() {
    return (
        <div className="outer">
            <Collapsible trigger="Menu" className="menuc" openedClassName="menuo" transitionCloseTime="1">
                <Collapsible trigger="Pizza" className="pizza" openedClassName="pizza">
                    <PizzaMenu />
                </Collapsible>
                <Collapsible trigger="Burgers" className="burger" openedClassName="burger">
                    <BurgerMenu />
                </Collapsible>
                <Collapsible trigger="Donairs" className="donair" openedClassName="donair">
                    <DonairMenu />
                </Collapsible>
                <Collapsible trigger="Pasta" className="pasta" openedClassName="pasta">
                    <PastaMenu />
                </Collapsible>
                <Collapsible trigger="Salads" className="salad" openedClassName="salad">
                    <SaladsMenu />
                </Collapsible>
                <Collapsible trigger="Extras" className="extra" openedClassName="extra">
                    <ExtrasMenu />
                </Collapsible>
                <Collapsible trigger="Munchies" className="munch" openedClassName="munch">
                    <MunchiesMenu />
                </Collapsible>
            </Collapsible>
        </div>
    );
};
