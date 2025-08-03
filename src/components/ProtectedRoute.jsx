// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAdminAuthenticated } from '../services/auth';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = isAdminAuthenticated();

  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;