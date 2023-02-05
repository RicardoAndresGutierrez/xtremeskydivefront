import React from "react";
import '../styles/Galeria.css'

const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <div className="galeria">
                <img className="agrandar" src="imagenes/galeria/galeria1.jpg" alt="galeria1" />
                <img className="agrandar" src="imagenes/galeria/galeria2.jpg" alt="galeria2" />
                <img className="agrandar" src="imagenes/galeria/galeria3.jpg" alt="galeria3" />
                <img className="agrandar" src="imagenes/galeria/galeria4.jpg" alt="galeria4" />
                <img className="agrandar" src="imagenes/galeria/galeria5.jpg" alt="galeria5" />
                <img className="agrandar" src="imagenes/galeria/galeria6.jpg" alt="galeria5" />
                <img className="agrandar" src="imagenes/galeria/galeria7.jpg" alt="galeria5" />
            </div>
        </main>
    )
}

export default GaleriaPage;