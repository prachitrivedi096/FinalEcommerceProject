import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../products.json';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart} = useCart(); // Use Cart Context
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found</div>;

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      <img src={product.photoURL} alt={product.name} style={{ width: '200px', height: '200px' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>

      {/* Quantity Control */}
      <div>
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
