import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Home.css'


const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="carrusel">
                <Carousel fade variant="dark">
                    <Carousel.Item>
                        <img className="d-block w-100" src="imagenes/carousel/carousel.jpg" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="imagenes/carousel/carousel1.jpg" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="imagenes/carousel/carousel2.jpg" alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="imagenes/carousel/carousel3.jpg" alt="fourth slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="imagenes/carousel/carousel4.jpg" alt="fifth slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="contenedor">
                <div className="bienvenido">
                    <h2>Bienvenidos</h2>
                    <hr />
                    <p>Bienvenidos a la pagina mas <span className="xdestacado">X</span>treme del mundo del paracaidismo!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa, rem dolorem veniam qui
                        dignissimos consectetur eveniet autem, recusandae odit doloremque optio, officiis deleniti
                        reprehenderit doloribus enim. Molestias, explicabo? Natus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim repellat illum rerum libero, ipsa
                        accusamus quam, architecto incidunt ipsam dignissimos dolores laboriosam ut accusantium totam harum
                        obcaecati cupiditate, nesciunt aut?</p>
                </div>
            </div>
        </main>
    )
}

export default HomePage;