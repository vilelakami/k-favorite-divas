import React, { useState } from 'react';
import './DivaCard.css'

// Aceita o objeto 'diva' e a classe de layout 'classNameProp'
function DivaCard({ diva, classNameProp }) { 
    const [isFlipped, setIsFlipped] = useState(false);
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