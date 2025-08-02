// components/PageLoader.jsx
import React from 'react';

const PageLoader = ({ 
  message = "Загрузка страницы...", 
  size = "md",
  showLogo = false,
  fullScreen = false 
}) => {
  // Размеры спиннера
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-4",
    lg: "w-14 h-14 border-4"
  };

  // Размеры текста
  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  const spinnerSize = sizeClasses[size] || sizeClasses.md;
  const textSize = textSizeClasses[size] || textSizeClasses.md;

  return (
    <div className={`
      flex flex-col items-center justify-center
      ${fullScreen ? 'fixed inset-0 z-50 bg-white' : 'w-full min-h-[300px] bg-white rounded-lg'}
      transition-all duration-200
    `}>
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Спиннер */}
        <div className={`
          ${spinnerSize}
          border-gray-200 
          border-t-blue-500 
          rounded-full 
          animate-spin
          shadow-sm
        `}></div>
        
        {/* Логотип (опционально) */}
        {showLogo && (
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-gray-800">LearnPlatform</span>
          </div>
        )}
        
        {/* Сообщение */}
        <div className="text-center">
          <p className={`${textSize} text-gray-600 font-medium animate-pulse`}>
            {message}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Пожалуйста, подождите...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;