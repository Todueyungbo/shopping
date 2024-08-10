import React from 'react';

const ProductDetail = ({ product, addToCart }) => {
    if (!product) return <div>Product not found.</div>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
