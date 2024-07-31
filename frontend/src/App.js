import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

import './App.css';

const App = () => {
  return (
    <Router>
    <div>
      <nav>
        <center>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/cart" activeClassName="active">Shopping Cart</NavLink>
        </center>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
