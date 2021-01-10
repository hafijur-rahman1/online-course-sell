import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    const {company, price, picture} = props.product;
    // const handleAddProduct = props.handleAddProduct;
    
    return (
        <div className="card-section">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{company}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                     <h5>Price: {price}</h5>
                    <Button variant="btn btn-warning" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faPlusSquare} /> Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;