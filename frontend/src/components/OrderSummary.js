import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './OrderSummary.css';

const OrderSummary = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    // Simulate placing the order
    console.log('Order placed successfully!');
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <ul className="order-summary-list">
        {cart.map((item) => (
          <li key={item.id} className="order-summary-item">
            <img src={item.photoURL} alt={item.name} className="order-summary-image" />
            <div className="order-summary-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="order-summary-total">
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
      </div>
      <button className="place-order-button" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
