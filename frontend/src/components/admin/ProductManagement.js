import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0, category: '' });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      const adminToken = localStorage.getItem('adminToken');
      try {
        const productsResponse = await axios.get('/api/admin/products', {
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        setProducts(productsResponse.data);

        const categoriesResponse = await axios.get('/api/admin/categories', {
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        setCategories(categoriesResponse.data);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };

    fetchProductsAndCategories();
  }, []);

  const handleCreateProduct = async () => {
    const adminToken = localStorage.getItem('adminToken');
    try {
      const response = await axios.post('/api/admin/products', newProduct, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      setProducts([...products, response.data]);
      setNewProduct({ name: '', description: '', price: 0, category: '' });
    } catch (err) {
      console.error('Error creating product', err);
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
        {categories.map(category => (
          <option key={category._id} value={category._id}>{category.name}</option>
        ))}
      </select>
      <button onClick={handleCreateProduct}>Create Product</button>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - {product.price} - {product.category.name}
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
