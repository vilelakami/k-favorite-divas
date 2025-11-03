import React from "react";
import './footer.css'
import Profile from '../images/profile.png'
import LogoInsta from '../images/logo-insta.png'
import InstagramName from '../images/instagram.png'

function Footer(){
    return(
        <section className="footer">
            <div className="about">
                <img src={Profile} alt="ícone de 'perfil'" />
                <p>
                    Hello! My name is Kami
                    <br/>
                    I'm 21yo and I love
                    <br/>
                    brazillian Divas.
                    </p>
            </div>
            <div className="instagram-profile">
                <img src={InstagramName} alt="logo escrito 'instagram" />
                <span className="links">
                    <a href="https://instagram.com/pabllovittar">Pabllo Vittar</a>
                    <a href="https://instagram.com/uriasss">Urias</a>
                    <a href="https://instagram.com/majur">Majur</a>
                    <a href="https://instagram.com/liniker">Liniker</a>
                </span>
                <a className="meu-insta" href="https://instagram.com/kamivilela.s">
                    <img src={LogoInsta} alt="logo do instagram" />
                </a>
            </div>
            <h3>2025 &copy; Todos os direitos reservados.</h3>
        </section>
    );
}

export default Footer;