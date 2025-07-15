import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-red-700 text-white p-4 shadow-lg sticky top-0 z-50 border-b border-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* Логотип — кликабельный */}
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-wider">
          КРАСНЫЙ КОД
        </Link>

        {/* Навигация (для десктопа) */}
        <nav className="space-x-6 hidden md:flex text-sm uppercase tracking-widest">
          <a href="#features" className="hover:text-gray-300 transition">Особенности</a>
          <a href="#courses" className="hover:text-gray-300 transition">Курсы</a>
          <a href="#collections" className="hover:text-gray-300 transition">Бесплатные курсы</a>
          <a href="#interview" className="hover:text-gray-300 transition">Вопросы с собеседований</a>
          <a href="#quiz" className="hover:text-gray-300 transition">Викторина</a>
          <a href="#code-challenge" className="hover:text-gray-300 transition">Code Challenge</a>
          <a href="#testimonials" className="hover:text-gray-300 transition">Отзывы</a>
        </nav>

        {/* Бургер для мобильных */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <nav className="md:hidden bg-red-800 p-4 space-y-4 text-center text-sm uppercase tracking-widest">
          <a href="#features" className="block hover:text-gray-300 transition">Особенности</a>
          <a href="#courses" className="block hover:text-gray-300 transition">Курсы</a>
          <a href="#collections" className="block hover:text-gray-300 transition">Бесплатные курсы</a>
          <a href="#interview" className="block hover:text-gray-300 transition">Вопросы с собеседований</a>
          <a href="#quiz" className="block hover:text-gray-300 transition">Викторина</a>
          <a href="#code-challenge" className="block hover:text-gray-300 transition">Code Challenge</a>
          <a href="#testimonials" className="block hover:text-gray-300 transition">Отзывы</a>
        </nav>
      )}

      {/* Правая часть (регистрация / вход) */}
      <div className="container mx-auto mt-2 hidden md:flex justify-end space-x-4 text-sm uppercase">
        {/* <Link to="/register" className="bg-black px-4 py-2 rounded hover:bg-gray-800 transition">Зарегистрироваться</Link>
        <Link to="/login" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition">Войти</Link> */}
      </div>
    </header>
  );
}