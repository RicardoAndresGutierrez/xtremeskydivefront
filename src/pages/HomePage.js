import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Home.css'


const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="bienvenido">
                <p>Bienvenidos a la página más <span className="xdestacado">X</span>treme del mundo del paracaidismo!</p>
            </div>
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

                <div className="home">
                    <p>¿Cómo describir el paracaidismo?</p>
                    <p>El paracaidismo es una técnica de salto desde un avión, globo aerostático, helicóptero o plataforma fija, en el cual se salta o se deja caer desde una gran altura con un artefacto fabricado en tela llamado paracaídas.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim repellat illum rerum libero, ipsa
                        accusamus quam, architecto incidunt ipsam dignissimos dolores laboriosam ut accusantium totam harum
                        obcaecati cupiditate, nesciunt aut?</p>
                </div>
            </div>
            <div className="videos">
                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GAB89kDzCNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <div className="video2">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/28VKpQtzaPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div>
                    <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pOe0b4twWkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;