import React from "react";
import './hero-header.css';
import DomeGallery from "./DomeGallery.jsx";
import Navbar from "./nav.jsx";

function HeroHeader(){
    return(
        <section className="hero-section" id="home">
        <Navbar/>
        <DomeGallery/>
        <section className="name-artists">
            <h1>Pabllo Vittar</h1>
            <h1>Urias</h1>
            <h1>Liniker</h1>
            <h1>Majur</h1>
        </section>
        </section>
    );
}   

export default HeroHeader;
