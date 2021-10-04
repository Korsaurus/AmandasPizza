import React, { useState } from "react";
import MenuButton from "./menubutton";
import Menu2 from "./navmenu";

export function Nav() {
    const [visible, setVisible] = useState(false)

    function toggleVisible(){
        setVisible(!visible)
    }

    function handleMouseDown(e) {
        toggleVisible();
        e.stopPropagation();
    }

    return(
        <>
            <MenuButton handleMouseDown={handleMouseDown}/>
            <Menu2 handleMouseDown={handleMouseDown}
          menuVisibility={visible}/>
        </>
    )
}