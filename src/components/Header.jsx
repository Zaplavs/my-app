import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Zap, BookOpen, Users, HelpCircle, Trophy, Code, Gamepad2 } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: "Особенности", id: "features", icon: <Zap className="w-4 h-4" /> },
    { name: "Курсы", id: "courses", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Бесплатные курсы", id: "collections", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Собеседования", id: "interview", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "Викторина", id: "quiz", icon: <Trophy className="w-4 h-4" /> },
    { name: "Code Challenge", id: "code-challenge", icon: <Code className="w-4 h-4" /> },
    { name: "Игры", id: "game", icon: <Gamepad2 className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-red-900 to-black text-white shadow-2xl sticky top-0 z-50 backdrop-blur-lg border-b border-red-800/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl md:text-2xl font-black tracking-wider uppercase transform hover:scale-105 transition-transform duration-300 group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
              КРАСНЫЙ КОД
            </span>
          </Link>

          {/* Навигация (десктоп) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm uppercase tracking-wider font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </span>
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Кнопки аккаунта (временно скрыты) */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Войти
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            >
              Регистрация
            </Link>
          </div>

          {/* Бургер-иконка */}
          <button
            className="lg:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню (полностью раскрывающееся) */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out lg:hidden absolute left-0 right-0 bg-red-900/95 backdrop-blur-lg shadow-2xl`}
        style={{ top: '100%' }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="space-y-2">
            <Link
              to="/"
              className="flex items-center gap-3 py-3 px-4 rounded-xl text-lg font-medium text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-5 h-5" />
              Главная
            </Link>
            
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 py-3 px-4 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            
            {/* Мобильные кнопки аккаунта */}
            <div className="pt-4 mt-4 border-t border-red-700/50 space-y-3">
              <Link
                to="/login"
                className="block w-full py-3 px-4 rounded-xl text-center font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Войти
              </Link>
              <Link
                to="/register"
                className="block w-full py-3 px-4 rounded-xl text-center font-medium bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Регистрация
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}