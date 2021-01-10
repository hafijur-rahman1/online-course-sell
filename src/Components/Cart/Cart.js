import React from 'react';
import Button from 'react-bootstrap/Button'
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, item) => total+item.price ,0)

    // const totalTaka = Number(totalPrice);
    return (
        <div>
            <h6>Order Summary</h6>
            <p>items order: {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
            <Button variant="danger">Pay Now</Button>
        </div>
    );
};

export default Cart;