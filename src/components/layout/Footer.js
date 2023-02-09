import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
        <footer>
            <div className="wrapper">
                <a href="https://www.facebook.com/" target="_blank" className="icon facebook" rel="noreferrer">
                    <div className="tooltip">Facebook</div>
                    <span><i className="fa-brands fa-facebook"><FontAwesomeIcon icon={faFacebook} /></i></span>
                </a>
                <a href="https://www.instagram.com/xtremeskydive/" target="_blank" className="icon instagram" rel="noreferrer">
                    <div className="tooltip">Instagram</div>
                    <span><i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i></span>
                </a>
                <a href="https://www.youtube.com/@TEEMsky" target="_blank" className="icon youtube" rel="noreferrer">
                    <div className="tooltip">Youtube</div>
                    <span><i className="fab fa-youtube"><FontAwesomeIcon icon={faYoutube} /></i></span>
                </a>
            </div>
            <p>Diseñado por Andres Gutierrez -&copy;2023</p>
        </footer>
    )
}

export default Footer;