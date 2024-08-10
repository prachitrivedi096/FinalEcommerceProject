import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CategoryStyle.css';

const CategoryManagement = () => {
  const [newCategory, setNewCategory] = useState('');
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Function to fetch categories with authentication
  const fetchCategories = async () => {
    const adminCred = {
      username: 'admin',
      password: 'admin123'
    };  
    try {
      console.log('Admin Credentials:', adminCred.username, adminCred.password);
      const response = await axios.get('http://localhost:5000/api/admin/categories', {
        params: {
          username: adminCred.username,
          password: adminCred.password,
        }
      });
      console.log('Fetched Categories:', response.data);
      setCategories(response.data);
    } catch (err) {
      console.error('Error fetching categories', err.response ? err.response.data : err.message);
    }
  };

  useEffect(() => {
    fetchCategories(); // Call the fetchCategories function when the component mounts
  }, []);


    const handleCreateCategory = async () => {
    const adminCred = {
      username: 'admin',
      password: 'admin123'
    };

    if (!newCategory.trim()) {
      setError('Category name cannot be empty');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/admin/categories',
        {
          name: newCategory,
          username: adminCred.username,
          password: adminCred.password
        }
      );
      alert('Category created successfully');
      setNewCategory('');
      setError(null);
      fetchCategories(); // Refresh the category list after adding a new category
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    }
  };

  return (
    <div className="category-management">
      <nav className="admin-header">
        <a onClick={() => navigate('/admin/dashboard')}>Home</a>
        <a onClick={() => navigate('/admin/categories')}>Manage Categories</a>
        <a onClick={() => navigate('/admin/products')}>Manage Products</a>
        <a
          onClick={() => {
            localStorage.removeItem('adminToken');
            navigate('/admin/login');
          }}
        >
          Logout
        </a>
      </nav>
      <h2>Category Management</h2>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New Category Name"
        className="category-input"
      />
      {error && <p className="error-message">{error}</p>}
      <div className="category-buttons">
        <button onClick={handleCreateCategory} className="create-category-button">
          Create
        </button>
      </div>
      <div className="category-buttons">
        <button onClick={() => navigate('/admin/dashboard')} className="cancel-button">
          Back to Dashboard
        </button>
      </div>
      <h3>Existing Categories</h3>
      <ul className="category-list">
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category._id} className="category-item">
              {category.name}
            </li>
          ))
        ) : (
          <p>No categories found</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryManagement;
