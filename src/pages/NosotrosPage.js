import React from "react";
import '../styles/Nosotros.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const NosotrosPage = (props) => {

    return (<CardGroup className="CardGroup">
        <main className="holder">


            <div className="nosotros">
                <h2>Nosotros</h2>
                <hr />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate autem veniam possimus aspernatur
                    temporibus aperiam dolore unde, quae voluptatum quasi voluptate, atque itaque labore odit mollitia
                    repellendus voluptas iure optio.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, illum quod quos eaque doloremque
                    ut, commodi ab consequuntur mollitia dolore vero aperiam sit impedit incidunt culpa expedita. Labore,
                    deserunt porro?</p>
                <hr />
            </div>
            <div className="cards">
                <Card className="cardstaff" border="warning" width="10px" >
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

            </div>
        </main >
    </CardGroup>


    )
}

export default NosotrosPage;