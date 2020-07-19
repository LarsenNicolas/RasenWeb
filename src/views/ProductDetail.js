import React, {useState} from 'react';
import '../App.css';
import firebase from '../config/firebase';

function ProductDetail() {

    const [product, setProduct] = useState();
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    useEffect(
        () => {
            firebase.db.doc("productos/1")
                .get()
                .then( (product) => {
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
                        <Card.Img variant="top" src={product.photo_url} />
                        <Card.Body>
                            <Card.Title>{product.name} ${product.price}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button onClick={toggleShowA} variant="outline-primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default ProductDetail;
