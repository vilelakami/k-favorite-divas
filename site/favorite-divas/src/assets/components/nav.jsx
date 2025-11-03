import React from "react";
import './nav.css';

function Navbar(){
    return(
        //criando a nav
        <nav className="navbar">
            <a href="#about">ABOUT</a>
            <a href="https://instagram.com/kamivilela.s" target="_blank">CONTACT</a>
        </nav>
    );
}

export default Navbar;