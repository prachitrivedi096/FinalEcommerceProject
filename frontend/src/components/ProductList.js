import React, { useState, useEffect } from 'react';
import axios from 'axios';
import products from '../products.json';

const categories = [...new Set(products.map(product => product.category))];

const ProductList = () => {
    const [productList, setProductList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
  
    useEffect(() => {
      setProductList(products);
    }, []);
  
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const filteredProducts = category ? products.filter(product => product.category === category) : products;
        setProductList(filteredProducts);
      };
    
      return (
        <div>
          <div>
            {categories.map(category => (
              <button key={category} onClick={() => handleCategoryChange(category)}>
                {category}
              </button>
            ))}
            <button onClick={() => handleCategoryChange('')}>All</button>
          </div>
          {productList.map(product => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
    );
};

export default ProductList;
