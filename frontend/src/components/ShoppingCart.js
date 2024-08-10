import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();


  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <b>Your cart is empty...!</b>
      ) : (
        <ul className="cart-list">
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.photoURL} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                {cart.length > 0 && (
               <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className="back-button" onClick={() => navigate(-1)}>Back to Home</button>
    </div>
  );
};

export default Cart;