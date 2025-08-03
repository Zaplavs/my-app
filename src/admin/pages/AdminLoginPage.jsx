// admin/pages/AdminLoginPage.jsx
import React from 'react';
import AdminLoginForm from '../components/AdminLoginForm';

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Панель администратора</h1>
          <p className="text-gray-600 mt-2">Войдите для управления контентом</p>
        </div>
        
        <AdminLoginForm />
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Тестовые данные:</p>
          <p className="font-mono">admin@example.com / admin123</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;