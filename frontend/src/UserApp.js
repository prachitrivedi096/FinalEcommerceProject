import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
//import { Routes, Route, NavLink } from 'react-router-dom';
import ProductHome from './components/ProductHome';
import ProductDetail from './components/ProductDetail';
import Cart from './components/ShoppingCart';
import { CartProvider } from './contexts/CartContext';
import './App.css';

const UserApp = () => {
    return (
        <CartProvider>
                <div>
                    <nav>
                        <center>
                            <NavLink to="/user" activeClassName="active">Home</NavLink>
                            <NavLink to="/user/ShoppingCart" activeClassName="active">Shopping Cart</NavLink>
                        </center>
                    </nav>
                    <Routes>
                        <Route path="/" element={<ProductHome />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/ShoppingCart" element={<Cart />} />
                    </Routes>
                </div>
        </CartProvider>
    );
};

export default UserApp;