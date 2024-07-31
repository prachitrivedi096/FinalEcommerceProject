import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../products.json';
import { useCart } from '../contexts/CartContext';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    setProductList(products);
  }, []);

  const earrings = productList.filter(product => product.category === 'Earrings');
  const bracelets = productList.filter(product => product.category === 'Bracelets');

  return (
    <div>
      <div className="product-category">
        <h1>Earrings</h1>
        <div className="product-grid">
          {earrings.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.photoURL} alt={product.name} className="product-image" />
              <div className="product-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <div className="product-buttons">
                  <button className="view-details-button" onClick={() => window.location.href = `/product/${product.id}`}>View Details</button>
                  <button className="add-to-cart-button" onClick={() => addToCart(product, 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="product-category">
        <h1>Bracelets</h1>
        <div className="product-grid">
          {bracelets.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.photoURL} alt={product.name} className="product-image" />
              <div className="product-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <center><p>${product.price}</p></center>
                <div className="product-buttons">
                  <button className="view-details-button" onClick={() => window.location.href = `/product/${product.id}`}>View Details</button>
                  <button className="add-to-cart-button" onClick={() => addToCart(product, 1)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ProductList;