import React from "react";
import '../styles/Nosotros.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const NosotrosPage = (props) => {

    return (<CardGroup className="CardGroup">


        <div className="nosotros">
            <h2>Nosotros</h2>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate autem veniam possimus aspernatur
                temporibus aperiam dolore unde, quae voluptatum quasi voluptate, atque itaque labore odit mollitia
                repellendus voluptas iure optio.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, illum quod quos eaque doloremque
                ut, commodi ab consequuntur mollitia dolore vero aperiam sit impedit incidunt culpa expedita. Labore,
                deserunt porro?</p>
                <hr/>
        </div>
        <Card className="cardstaff" border="warning">
            <Card.Img variant="top" src="imagenes/staff/nacho.jpg" />
            <Card.Body>
                <Card.Title className="title">Ignacio</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Paracaidista</small>
            </Card.Footer>
        </Card>
        <Card className="cardstaff" border="warning">
            <Card.Img variant="top" src="imagenes/staff/robert.jpg" />
            <Card.Body>
                <Card.Title className="title">Roberto</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Paracaidista</small>
            </Card.Footer>
        </Card>

        <Card className="cardstaff" border="warning">
            <Card.Img variant="top" src="imagenes/staff/andres.jpg" />
            <Card.Body>
                <Card.Title className="title">Andrés</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Paracaidista</small>
            </Card.Footer>
        </Card>
    </CardGroup>

    )
}




// <main className="holder">
//     <div className="historia">
//         <h2>Historia</h2>
//         <hr />
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate autem veniam possimus aspernatur
//             temporibus aperiam dolore unde, quae voluptatum quasi voluptate, atque itaque labore odit mollitia
//             repellendus voluptas iure optio.</p>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, illum quod quos eaque doloremque
//             ut, commodi ab consequuntur mollitia dolore vero aperiam sit impedit incidunt culpa expedita. Labore,
//             deserunt porro?</p>
//     </div>
//     <div className="staff">
//         <h2>Staff</h2>
//         <hr />
//         <div className="personas">
//             <div className="persona">
//                 <img src="imagenes/staff/nacho.jpg" alt="Persona1" />
//                 <h5>Nacho</h5>
//                 <h6>Paracaidista</h6>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eos consectetur nostrum labore
//                     ducimus necessitatibus ratione culpa! Minima ab nulla voluptatem. Inventore amet fugiat magni
//                     dolor est ullam impedit itaque?</p>
//             </div>
//             <div className="persona">
//                 <img src="imagenes/staff/robert.jpg" alt="Persona2" />
//                 <h5>Roberto</h5>
//                 <h6>Paracaidista</h6>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eos consectetur nostrum labore
//                     ducimus necessitatibus ratione culpa! Minima ab nulla voluptatem. Inventore amet fugiat magni
//                     dolor est ullam impedit itaque?</p>
//             </div>
//             <div className="persona">
//                 <img src="imagenes/staff/andres.jpg" alt="Persona3" />
//                 <h5>Andrés</h5>
//                 <h6>Paracaidista</h6>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eos consectetur nostrum labore
//                     ducimus necessitatibus ratione culpa! Minima ab nulla voluptatem. Inventore amet fugiat magni
//                     dolor est ullam impedit itaque?</p>
//             </div>
//         </div>
//     </div>
// </main>


export default NosotrosPage;