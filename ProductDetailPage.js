import React from 'react';
import ProductDetail from '../components/ProductDetail';
import { useParams } from 'react-router-dom';

const ProductDetailPage = ({ products, addToCart }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    return (
        <div>
            <ProductDetail product={product} addToCart={addToCart} />
        </div>
    );
};

export default ProductDetailPage;
