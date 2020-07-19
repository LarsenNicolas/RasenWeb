import React, {useEffect, useState} from 'react';
import '../App.css';
import firebase from "../config/firebase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

function ProductList() {

    const [product, setProduct] = useState();
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    useEffect(
        () => {
            firebase.db.doc("productos/1")
                .get()
                .then( (product) => {

                    console.log("product : ");
                    console.log(product.data());
                    setProduct(product.data());
                })
        }, []);


    return (
        <Container>
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'relative',
                    minHeight: '100px',
                }}
            >
                <Toast  style={{
                    position: 'absolute',
                    top: '10px',
                    right: 0,
                }} show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">Gracias por su compra</strong>

                    </Toast.Header>

                </Toast>
            </div>
            <Row className="justify-content-md-center">
                <Col>
                    <Card bg="dark" text="white" border="primary" style={{ width: '18rem' }}>
                        {/*<Card.Img variant="top" src={} />*/}
                        <Card.Body>
                            {/*<Card.Title>{ product.name} </Card.Title>*/}
                            {/*<Card.Text>*/}
                            {/*    {product.micro}*/}
                            {/*    {product.ram}*/}
                            {/*</Card.Text>*/}
                            <Button onClick={toggleShowA} variant="outline-primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );


}

export default ProductList;
