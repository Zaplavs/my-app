import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white border-t border-red-700">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Копирайт */}
          <p className="text-gray-400 text-sm md:text-base">
            &copy; {new Date().getFullYear()} Красный код — Все знания — народу!
          </p>

          {/* Ссылки */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
            >
              Политика конфиденциальности
            </a>
            <span className="hidden md:block text-red-700">|</span>
            <a
              href="/terms"
              className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
            >
              Условия использования
            </a>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600">
            Сайт создан в образовательных целях
          </p>
        </div>
      </div>
    </footer>
  );
}