import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-r from-red-700 to-red-800 text-white p-4 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Логотип */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold tracking-wider uppercase transform hover:scale-105 transition-transform duration-300"
        >
          КРАСНЫЙ КОД
        </Link>

        {/* Навигация (десктоп) */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-widest font-medium">
          {[
            { name: "Особенности", id: "features" },
            { name: "Курсы", id: "courses" },
            { name: "Бесплатные курсы", id: "collections" },
            { name: "Вопросы с собеседований", id: "interview" },
            { name: "Викторина", id: "quiz" },
            { name: "Code Challenge", id: "code-challenge" },
            { name: "Игры", id: "game" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative group hover:text-gray-200 transition-colors duration-300"
            >
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Бургер-иконка */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={`${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav className="md:hidden bg-red-800 mt-2 rounded-lg shadow-inner p-4 space-y-3 text-sm uppercase tracking-widest font-medium">
          {[
            { name: "Особенности", id: "features" },
            { name: "Курсы", id: "courses" },
            { name: "Бесплатные курсы", id: "collections" },
            { name: "Вопросы с собеседований", id: "interview" },
            { name: "Викторина", id: "quiz" },
            { name: "Code Challenge", id: "code-challenge" },
            { name: "Игры", id: "game" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Кнопки регистрации и входа (временно закомментированы) */}
      {/* 
      <div className="container mx-auto mt-3 hidden md:flex justify-end space-x-4">
        <Link
          to="/register"
          className="bg-black text-white px-5 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-gray-800 transition"
        >
          Зарегистрироваться
        </Link>
        <Link
          to="/login"
          className="bg-gray-800 text-white px-5 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-gray-700 transition"
        >
          Войти
        </Link>
      </div>
      */}
    </header>
  );
}