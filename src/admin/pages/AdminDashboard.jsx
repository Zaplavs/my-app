// admin/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { getCurrentAdmin } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [adminInfo, setAdminInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const admin = await getCurrentAdmin();
        setAdminInfo(admin);
      } catch (error) {
        console.error('Error fetching admin info:', error);
        setError('Не удалось загрузить информацию');
        // Если токен истек или недействителен, перенаправляем на login
        if (error.message.includes('истек') || error.message.includes('аутентификации')) {
          navigate('/admin/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAdminInfo();
  }, [navigate]);

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Загрузка...</p>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center py-12">
            <div className="text-red-500 text-xl mb-4">{error}</div>
            <button 
              onClick={() => navigate('/admin/login')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Перейти к входу
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Добро пожаловать в админ панель!
          </h1>
          {adminInfo && (
            <p className="text-lg text-gray-600">
              Вы вошли как: <span className="font-semibold">{adminInfo.email}</span>
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-700">Курсов</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">0</div>
            <div className="text-gray-700">Пользователей</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
            <div className="text-gray-700">Вопросов</div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Быстрые действия</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-white border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
              <div className="text-blue-600 font-medium">Добавить курс</div>
            </button>
            <button className="bg-white border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
              <div className="text-green-600 font-medium">Добавить пользователя</div>
            </button>
            <button className="bg-white border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
              <div className="text-purple-600 font-medium">Добавить вопросы</div>
            </button>
            <button className="bg-white border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
              <div className="text-orange-600 font-medium">Настройки</div>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;