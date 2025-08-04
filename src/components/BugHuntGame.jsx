// src/components/BugHuntGame.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BugHuntGame = ({ onBack }) => {
  const navigate = useNavigate();

  const languages = [
    {
      id: 'python',
      name: 'Python',
      path: '/game/bug-hunt/python',
      color: 'from-yellow-600 to-blue-600',
      icon: '🐍'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      path: '/game/bug-hunt/javascript',
      color: 'from-yellow-400 to-gray-800',
      icon: '📜'
    },
    {
      id: 'csharp',
      name: 'C#',
      path: '/game/bug-hunt/csharp',
      color: 'from-purple-600 to-blue-800',
      icon: '⚡'
    }
  ];

  const handleLanguageSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-amber-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Багохот 🐛</h1>
            <button 
              onClick={onBack}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Назад
            </button>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Выберите язык программирования</h2>
            <p className="text-gray-300">Найдите ошибки в коде на выбранном языке</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((language) => (
              <div 
                key={language.id}
                className={`bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 cursor-pointer transform hover:scale-105 border border-slate-600/50 hover:border-red-500/50 hover:bg-slate-700/70`}
                onClick={() => handleLanguageSelect(language.path)}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${language.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-3xl">{language.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{language.name}</h3>
                <div className="text-center mt-6">
                  <button 
                    className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors w-full"
                  >
                    Играть
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-900/50 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Как играть:</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Выберите язык программирования</li>
              <li>• Найдите строку с ошибкой в представленном коде</li>
              <li>• Кликните на строку, чтобы проверить ваш ответ</li>
              <li>• За правильные ответы начисляются очки</li>
              <li>• Успейте найти все баги до окончания времени</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugHuntGame;