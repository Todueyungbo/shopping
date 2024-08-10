import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = ({ products, addToCart }) => {
    return (
        <div>
            <h2>Featured Products</h2>
            <ProductList products={products} addToCart={addToCart} />
        </div>
    );
};

export default HomePage;
