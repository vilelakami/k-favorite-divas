import React from "react";
import './section-spotify.css'
import backgroundSpotify from '../images/background-cards.png'
import titleKami from '../images/kami.png'

function Spotify(){
    return(
        <section className="spotify">
            <div className="card">
                <span className="card-name">
                    <h2>
                        Spotify
                    </h2>
                    <h1>
                        Wrapped 2025
                    </h1>
                </span>
                <span className="spotify-card">
                    <a href="#" target="_blank">
                        <img src={backgroundSpotify} alt="Fundo com as artistas Pabllo Vittar, Urias, Liniker e Majur"/>
                    </a>
                </span>      
            </div>
            <a className="logo-spotify" href="https://open.spotify.com/user/31qvrtmwzpt3hkz3wdu476v6hjqq?si=51f0d4b701024fae" target="_blank">
                <img src={titleKami} alt="Logo Spotify e meu nome"/>    
            </a>
        </section>
    );
}

export default Spotify;