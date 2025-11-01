import React from "react";
import './section-cards.css'
import DivaCard from "./DivaCard";

const divasData = [
    { id: 1, name: 'Pabllo Vittar', className: 'card1', bio: 'Pabllo Vittar é uma das maiores drag queens do mundo, conhecida por sua voz potente e performances energéticas.' },
    { id: 2, name: 'Majur', className: 'card2', bio: 'Majur traz uma mistura única de MPB, R&B e afrobeat, com letras que celebram a ancestralidade e a identidade baiana.' },
    { id: 3, name: 'Liniker', className: 'card3', bio: 'Liniker é reconhecida por sua voz emotiva e por ser uma figura essencial na música soul contemporânea brasileira.' },
    { id: 4, name: 'Urias', className: 'card4', bio: 'Urias domina o cenário pop com um estilo dark e dramático, abordando temas de autoconfiança e poder.' },
];
function Cards(){
    return(
        <section className="section-cards">
            <h1>BIOGRAPHY</h1>
            <span className="cards">
                {divasData.map((diva) => (
                    <DivaCard
                        // Passamos a CLASSE ORIGINAL (card1, card2, etc.)
                        classNameProp={diva.className} 
                        diva={diva}
                        key={diva.id}
                    />
                ))}
            </span>
        </section>
    );
}

export default Cards;