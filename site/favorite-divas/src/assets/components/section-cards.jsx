import React from "react";
import './section-cards.css'

function Cards(){
    return(
        <section className="section-cards">
            <h1>BIOGRAPHY</h1>
            <span className="cards">
                <div className="card1"></div>
                <div className="card2"></div>
                <div className="card3"></div>
                <div className="card4"></div>
            </span>
        </section>
    );
}

export default Cards;