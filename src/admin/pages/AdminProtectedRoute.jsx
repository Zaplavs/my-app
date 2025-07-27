import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAdminAuthenticated, getCurrentAdmin } from '../../services/auth';

const AdminProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      console.log('Checking authentication...');
      
      if (!isAdminAuthenticated()) {
        console.log('No token found, redirecting to login');
        navigate('/admin/login');
        return;
      }

      try {
        console.log('Token found, verifying...');
        const admin = await getCurrentAdmin();
        console.log('Admin verified:', admin);
        setIsLoading(false);
      } catch (error) {
        console.error('Auth check failed:', error);
        // Токен недействителен
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Проверка авторизации...</p>
        </div>
      </div>
    );
  }

  return children;
};

export default AdminProtectedRoute;