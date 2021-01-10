import React from 'react';
import './Shop.css'

import fakeData from '../Data/fakeData.json'
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    // console.log(data);
    const data = fakeData
    const [products, setProduct]  =useState(data);
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        console.log('product added');
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            {
               products.map(product =><Product product={product} handleAddProduct={handleAddProduct}></Product>)
           }
            </div>
            <div className="cart-container">
               
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
        
    );
};

export default Shop;