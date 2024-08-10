import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchCategoriesAndProducts = async () => {
  //     const adminToken = localStorage.getItem('adminToken');
  //     try {
  //       const categoriesResponse = await axios.get('/api/admin/categories', {
  //         headers: { Authorization: `Bearer ${adminToken}` }
  //       });
  //       setCategories(categoriesResponse.data);

  //       const productsResponse = await axios.get('/api/admin/products', {
  //         headers: { Authorization: `Bearer ${adminToken}` }
  //       });
  //       setProducts(productsResponse.data);
  //     } catch (err) {
  //       console.error('Error fetching data', err);
  //     }
  //   };

  //   fetchCategoriesAndProducts();
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleNavigateToCategories = () => {
    navigate('/admin/categories');
  };

  const handleNavigateToProducts = () => {
    navigate('/admin/products');
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-header">
        <a onClick={() => navigate('/admin/dashboard')}>Home</a>
        <a onClick={handleNavigateToCategories}>Manage Categories</a>
        <a onClick={handleNavigateToProducts}>Manage Products</a>
        <a onClick={handleLogout}>Logout</a>
      </nav>
      <h2>Admin Dashboard</h2>
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <h3>Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
