import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import './style.css';

const App = () => {
    const [products] = useState([
        { id: 1, name: 'Cheese Tee', price: 29.99, image: '/images/cheese-tee.jpg', description: 'A cool tee with cheese design.' },
        { id: 2, name: 'Rich Hoodie', price: 59.99, image: '/images/rich-hoodie.jpg', description: 'Stay warm and rich with this hoodie.' },
        // Add more products here
    ]);

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (product) => {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage products={products} addToCart={addToCart} />} />
                <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
                <Route path="/products/:id" element={<ProductDetailPage products={products} addToCart={addToCart} />} />
                <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
            </Routes>
        </Router>
    );
};

export default App;
