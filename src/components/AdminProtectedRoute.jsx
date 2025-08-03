import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const location = useLocation();
  
  // Проверяем наличие токена администратора
  const isAdminAuthenticated = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');

  if (!isAdminAuthenticated) {
    // Перенаправляем на страницу входа с сохранением текущего пути
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminProtectedRoute;