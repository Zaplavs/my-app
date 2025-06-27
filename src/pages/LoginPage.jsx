import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику входа
    console.log('Login ', formData);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 border border-red-700 rounded-lg shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold uppercase mb-6 text-center">Вход для товарищей</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm uppercase mb-1">Email адрес</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-red-700 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
              placeholder="ivan@example.com"
            />
          </div>
          <div>
            <label className="block text-sm uppercase mb-1">Пароль</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-red-700 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-600 text-white py-2 rounded uppercase font-semibold transition"
          >
            Войти
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Нет аккаунта?{' '}
          <Link to="/register" className="text-yellow-400 hover:underline">
            Зарегистрируйтесь
          </Link>
        </p>
      </div>
    </div>
  );
}