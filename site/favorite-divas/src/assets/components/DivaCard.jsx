import React, { useState } from 'react';
import './DivaCard.css'

// criando a função pra virar a carta, passando como parametro a lista, e a classe
function DivaCard({ diva, classNameProp }) { 
    //criando um dicionario 'esta virado', 'nao esta virado' e dando um booleano commo falso
    const [isFlipped, setIsFlipped] = useState(false);
    //criando uma função pra verificar se a carta nao esta virada
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        // O container externo recebe sua CLASSE DE LAYOUT (card1, card2, etc.)
        <div className={`diva-card-container ${classNameProp}`} onClick={handleFlip}>
            <div className={`diva-card-inner ${isFlipped ? 'is-flipped' : ''}`}>

                {/* Verso (Biografia) */}
                <div className="diva-card-back">
                    <p className="diva-bio">{diva.bio}</p>
                </div>
            </div>
        </div>
    );
}

export default DivaCard;