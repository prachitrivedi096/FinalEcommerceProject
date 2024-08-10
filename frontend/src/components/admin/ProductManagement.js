import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0, category: '' });

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      const adminToken = localStorage.getItem('adminToken');
      try {
        const productsResponse = await axios.get('/api/admin/products', {
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        setProducts(productsResponse.data);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };

    fetchProductsAndCategories();
  }, []);

  const handleCreateProduct = async () => {
    const adminCred = {
      username: 'admin',
      password: 'admin123'
    };

    try{
      const response = await axios.post(
      );
    }catch (err) {
    }
  };

  const handleDeleteProduct = async (id) => {
    const adminToken = localStorage.getItem('adminToken');
    try {
      await axios.delete(`/api/admin/products/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      setProducts(products.filter(product => product._id !== id));
    } catch (err) {
      console.error('Error deleting product', err);
    }
  };

  return (
    <div>
      <h2>Product Management</h2>
      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        placeholder="Product Name"
      />
      <input
        type="text"
        value={newProduct.description}
        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        placeholder="Product Description"
      />
      <input
        type="number"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        placeholder="Product Price"
      />
      <select
        value={newProduct.category}
        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
      >
        <option value="">Select Category</option>
          <option key="Earrings" value="Earrings">Earrings</option>
          <option key="Bracelets" value="Bracelets">Bracelets</option>
        
      </select>
      <button onClick={handleCreateProduct}>Create Product</button>
      {/* <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - {product.price} - {product.category.name}
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProductManagement;
