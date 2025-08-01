// src/components/CourseCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseCard({ title, description, level, slug, icon, color = "from-red-600 to-red-700" }) {
  // Определяем цвет бейджа уровня в зависимости от уровня сложности
  const getLevelStyle = (levelText) => {
    if (levelText.includes('Начальный')) {
      return 'bg-green-900/30 text-green-400 border border-green-800/50';
    } else if (levelText.includes('Средний')) {
      return 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50';
    } else {
      return 'bg-red-900/30 text-red-400 border border-red-800/50';
    }
  };

  return (
    <Link
      to={`/course/${slug}/learn`}
      className="block group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-gray-900/40 backdrop-blur-lg border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      {/* Динамическая подсветка при наведении */}
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      <div className="relative p-6 flex flex-col h-full">
        {/* Заголовок с иконкой */}
        <div className="flex items-start space-x-4 mb-4">
          <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-3 shadow-lg transition-all duration-300 group-hover:scale-110`}>
            <div className="text-white drop-shadow-md">
              {icon}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
              {title}
            </h4>
          </div>
        </div>
        
        {/* Описание */}
        <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        {/* Бейдж уровня */}
        <div className="mt-auto">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getLevelStyle(level)}`}>
            {level}
          </span>
        </div>
        
        {/* Анимированная линия прогресса при наведении */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50 overflow-hidden">
          <div className={`absolute top-0 left-0 h-full bg-gradient-to-r ${color} w-0 group-hover:w-full transition-all duration-700 ease-out`}></div>
        </div>
      </div>
    </Link>
  );
}