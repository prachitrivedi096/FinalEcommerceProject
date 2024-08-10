import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
//import { Routes, Route, NavLink } from 'react-router-dom';
import ProductHome from './components/ProductHome';
import ProductDetail from './components/ProductDetail';
import Cart from './components/ShoppingCart';
import { CartProvider } from './contexts/CartContext';
import Checkout from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import OrderConfirmation from './components/OrderConfirmation';

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
                        <Route path="/checkout" element={<Checkout/>} />
                        <Route path="/order-summary" element={<OrderSummary />} />
                        <Route path="/order-confirmation" element={<OrderConfirmation />} />
                    </Routes>
                </div>
        </CartProvider>
    );
};

export default UserApp;