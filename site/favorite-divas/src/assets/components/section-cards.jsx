import React from "react";
import './section-cards.css'
import DivaCard from "./DivaCard";

//criando um array de listas para criar meus cards
const divasData = [
    { id: 1, name: 'Pabllo Vittar', className: 'card1', bio: 'Pabllo Vittar é uma das maiores drag queens do mundo, conhecida por sua voz potente e performances energéticas.' },
    { id: 2, name: 'Majur', className: 'card2', bio: 'Majur traz uma mistura única de MPB, R&B e afrobeat, com letras que celebram a ancestralidade e a identidade baiana.' },
    { id: 3, name: 'Liniker', className: 'card3', bio: 'Liniker é reconhecida por sua voz emotiva e por ser uma figura essencial na música soul contemporânea brasileira.' },
    { id: 4, name: 'Urias', className: 'card4', bio: 'Urias domina o cenário pop com um estilo dark e dramático, abordando temas de autoconfiança e poder.' },
];
function Cards(){
    return(
        //criando a seção pai
        <section className="section-cards">
            {/* titulo da seção */}
            <h1>BIOGRAPHY</h1>
            {/* um span que vai mapear meu array */}
            <span className="cards">
                {divasData.map((diva) => (
                    //passando os parametros pra minha função que 'vira' a carta para mostrar uma mini-bio (ajuda do gemini)
                    <DivaCard
                        // Passamos a CLASSE ORIGINAL (card1, card2, etc.)
                        //passando a classe
                        classNameProp={diva.className} 
                        //passando a lista (cantora)
                        diva={diva}
                        //passando o id da lista (da cantora)
                        key={diva.id}
                    />
                ))}
            </span>
        </section>
    );
}

export default Cards;