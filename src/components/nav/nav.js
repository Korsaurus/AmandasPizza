import React, { useState } from "react";
import MenuButton from "./button";
import "./menu.css"

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
            <div id="flyoutMenu" onClick={handleMouseDown} className={visible.toString()}>
                <h2><a href="#home" onClick={handleMouseDown}>Home</a></h2>
                <h2><a href="#pizza" onClick={handleMouseDown}>Pizza</a></h2>
                <h2><a href="#burger" onClick={handleMouseDown}>Burgers</a></h2>
                <h2><a href="#donair" onClick={handleMouseDown}>Donairs</a></h2>
                <h2><a href="#pasta" onClick={handleMouseDown}>Pasta</a></h2>
                <h2><a href="#salads" onClick={handleMouseDown}>Salads</a></h2>
                <h2><a href="#extras" onClick={handleMouseDown}>Extras</a></h2>
                <h2><a href='#munchies' onClick={handleMouseDown}>Munchies</a></h2>
                <h2><a href='#about' onClick={handleMouseDown}>About</a></h2>
                <h2><a href='#location' onClick={handleMouseDown}>Location</a></h2>
            </div>
        </>
    )
}