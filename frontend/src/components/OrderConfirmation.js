import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="confirmation-container">
      <h2>Order Confirmed!</h2>
      <p>Thank you for your purchase. Your order has been placed successfully.</p>
      <button className="home-button" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default OrderConfirmation;
