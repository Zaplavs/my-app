// src/admin/components/AdminSidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Админ панель</h2>
      </div>
      <nav className="mt-4">
        <Link
          to="/admin/dashboard"
          className={`block py-2 px-4 hover:bg-gray-700 ${
            isActive('/admin/dashboard') ? 'bg-gray-700 border-l-4 border-blue-500' : ''
          }`}
        >
          Дашборд
        </Link>
        <Link
          to="/admin/courses"
          className={`block py-2 px-4 hover:bg-gray-700 ${
            isActive('/admin/courses') ? 'bg-gray-700 border-l-4 border-blue-500' : ''
          }`}
        >
          Курсы
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;