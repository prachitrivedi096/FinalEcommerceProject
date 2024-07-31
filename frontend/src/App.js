import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom';
import ProductHome from './components/ProductHome';
import ProductDetail from './components/ProductDetail';
import Cart from './components/ShoppingCart';
import { CartProvider } from './contexts/CartContext';

import './App.css';

const App = () => {
  return (
    <CartProvider>
    <Router>
    <div>
      <nav>
        <center>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/ShoppingCart" activeClassName="active">Shopping Cart</NavLink>
        </center>
      </nav>
      <Routes>
        <Route path="/" element={<ProductHome />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/ShoppingCart" element={<Cart />} />
      </Routes>
    </div>
  </Router>
  </CartProvider>
  );
};

export default App;
