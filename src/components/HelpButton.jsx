// src/components/HelpButton.jsx
import { Link } from 'react-router-dom';
import { HelpCircle, Bug, MessageCircle, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const HelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.help-button-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="help-button-container fixed right-6 md:right-10 bottom-6 md:bottom-10 flex flex-col items-end gap-3 z-50">
      {/* Кнопки действий - отображаются только при открытии */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-4 duration-300">
          <Link
            to="/help"
            className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            <HelpCircle className="w-5 h-5" />
            <span>Помощь</span>
          </Link>
          
          <Link
            to="/help"
            className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            <Bug className="w-5 h-5" />
            <span>Сообщить об ошибке</span>
          </Link>
          
          <Link
            to="/help"
            className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Обратная связь</span>
          </Link>
        </div>
      )}

      {/* Основная кнопка */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
      >
        <Mail className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
        <span className="hidden sm:inline">Помощь</span>
      </button>
    </div>
  );
};

export default HelpButton;