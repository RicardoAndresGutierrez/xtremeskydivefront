import React from "react";
import '../styles/Galeria.css'

const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <h2>NUESTRA GALERIA</h2>
            <hr />
            <div className="galeria">
                <img className="imagen" src="imagenes/galeria/galeria1.jpg" alt="galeria1" />
                <img className="imagen" src="imagenes/galeria/galeria2.jpg" alt="galeria2" />
                <img className="imagen" src="imagenes/galeria/galeria3.jpg" alt="galeria3" />
                <img className="imagen" src="imagenes/galeria/galeria4.jpg" alt="galeria4" />
                <img className="imagen" src="imagenes/galeria/galeria5.jpg" alt="galeria5" />
                <img className="imagen" src="imagenes/galeria/galeria6.jpg" alt="galeria6" />
                <img className="imagen" src="imagenes/galeria/galeria7.jpg" alt="galeria7" />
                <img className="imagen" src="imagenes/galeria/galeria8.jpg" alt="galeria8" />
                <img className="imagen" src="imagenes/galeria/galeria9.jpg" alt="galeria9" />
            </div>
        </main>
    )
}

export default GaleriaPage;