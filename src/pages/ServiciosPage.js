import React from "react";
import '../styles/Servicios.css'

const HomeServicios = (props) => {
    return (
        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicios">
                <div className="servicio">
                    <img src="imagenes/servicios1.jpg" alt="Saltos Tandem" />
                    <div className="info">
                        <h4>Saltos Tándem</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente quaerat numquam ea. Quasi
                            veritatis cum enim, dolores vitae asperiores consequuntur earum ex, libero odio unde reiciendis
                            deleniti! Reiciendis, ratione.</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="imagenes/servicio3.jpg" alt="Filmaciones" />
                    <div className="info">
                        <h4>Filmaciones</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente quaerat numquam ea. Quasi
                            veritatis cum enim, dolores vitae asperiores consequuntur earum ex, libero odio unde reiciendis
                            deleniti! Reiciendis, ratione.</p>
                    </div>
                </div>
                <div className="servicio">
                    <img src="imagenes/servicio4.jpg" alt="saltos de exhibicion" />
                    <div className="info">
                        <h4>Saltos de exhibición</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente quaerat numquam ea. Quasi
                            veritatis cum enim, dolores vitae asperiores consequuntur earum ex, libero odio unde reiciendis
                            deleniti! Reiciendis, ratione.</p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default HomeServicios;