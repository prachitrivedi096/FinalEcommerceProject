import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const AdminApp = () => {
  return (
      <div>
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        </Routes>
      </div>
  );
};

export default AdminApp;