import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../products.json';
//import { useCart } from '../contexts/CartContext';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  //const { addToCart } = useCart();

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <div>
      {productList.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;