import React from 'react';
import ProductList from '../components/ProductList';

const ProductsPage = ({ products, addToCart }) => {
    return (
        <div>
            <h2>All Products</h2>
            <ProductList products={products} addToCart={addToCart} />
        </div>
    );
};

export default ProductsPage;
