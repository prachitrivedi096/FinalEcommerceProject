// src/components/AdminDashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const adminToken = localStorage.getItem('adminToken');
      try {
        const response = await axios.get('/api/admin/products', {
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
