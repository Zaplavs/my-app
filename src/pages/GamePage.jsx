// src/pages/GamePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlgorithmConstructorLevelsPage from '../components/algorithmconstructor/AlgorithmConstructorLevelsPage';
import QuizSection from '../components/QuizSection';
import CodeChallengeSection from '../components/CodeChallengeSection';
import TypingSpeedGame from '../components/TypingSpeedGame'; // Новый импорт

export default function GamePage() {
  const [currentLevel, setCurrentLevel] = useState(null);
  const navigate = useNavigate();

  const levels = [
    {
      id: 3,
      name: "Алгоритмический Конструктор",
      difficulty: "progressive",
      description: "Соберите алгоритмы из фрагментов кода",
      color: "from-purple-500 to-pink-600",
      icon: "🧩",
      gameType: "algorithm",
      disabled: false
    },
    {
      id: 4,
      name: "Викторина по ЯП",
      difficulty: "mixed",
      description: "Проверьте знания по языкам программирования",
      color: "from-yellow-500 to-orange-600",
      icon: "🧠",
      gameType: "quiz",
      disabled: false
    },
    {
      id: 5,
      name: "Code Challenge",
      difficulty: "hard",
      description: "Угадайте, что выведет данный код",
      color: "from-red-500 to-orange-600",
      icon: "💻",
      gameType: "codechallenge",
      disabled: false
    },
    {
      id: 6, // Новый уровень
      name: "Скоростной Ввод",
      difficulty: "medium",
      description: "Проверьте скорость печати на клавиатуре",
      color: "from-green-500 to-teal-600",
      icon: "⌨️",
      gameType: "typing",
      disabled: false // Доступна
    }
  ];

  const handleLevelSelect = (levelId) => {
    const level = levels.find(l => l.id === levelId);
    if (level && !level.disabled) {
      setCurrentLevel(levelId);
    }
  };

  const handleBack = () => {
    setCurrentLevel(null);
  };

  const handleExit = () => {
    navigate('/');
  };

  if (currentLevel === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Игровые уровни</h1>
              <button 
                onClick={handleExit}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                Выйти в меню
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Выберите игру</h2>
              <p className="text-xl text-gray-300">
                Пройдите увлекательные кодовые игры и улучшите свои навыки программирования
              </p>
            </div>

            {/* Уровни */}
            <div className="grid md:grid-cols-3 gap-8">
              {levels.map((level) => (
                <div 
                  key={level.id}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 cursor-pointer transform hover:scale-105 border ${
                    level.disabled 
                      ? 'border-gray-600 opacity-60' 
                      : 'border-slate-700/50 hover:bg-slate-800/70'
                  }`}
                  onClick={() => handleLevelSelect(level.id)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">{level.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                  <p className="text-gray-300 mb-4">{level.description}</p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-sm">
                      <span className="px-3 py-1 bg-slate-700/50 rounded-full text-gray-300">
                        {level.difficulty}
                      </span>
                    </div>
                    
                    {level.disabled && (
                      <div className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30">
                        В разработке
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Рендеринг текущего уровня
  const renderLevel = () => {
    switch (currentLevel) {
      case 3:
        return <AlgorithmConstructorLevelsPage onBack={handleBack} />;
      case 4:
        return <QuizSection onBack={handleBack} />;
      case 5:
        return <CodeChallengeSection onBack={handleBack} />;
      case 6: // Новый уровень Скоростной Ввод
        return <TypingSpeedGame onBack={handleBack} />;
      default:
        return null;
    }
  };

  return <>{renderLevel()}</>;
}