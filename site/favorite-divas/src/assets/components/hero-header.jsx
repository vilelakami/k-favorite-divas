import React from "react";
import './hero-header.css';
import DomeGallery from "./DomeGallery.jsx";
import Navbar from "./nav.jsx";

function HeroHeader(){
    return(
        //seção pai (header)
        <section className="hero-section" id="home">
        {/* chamei o nav */}
        <Navbar/>
        {/* chamei o componente do react bits dome gallery */}
        <DomeGallery/>
        {/* adicionando uma div para listar o nome das artistas */}
        <div className="name-artists">
            <h1>Pabllo Vittar</h1>
            <h1>Urias</h1>
            <h1>Liniker</h1>
            <h1>Majur</h1>
        </div>
        </section>
    );
}   

export default HeroHeader;
