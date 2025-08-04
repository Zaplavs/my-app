// src/pages/BugHuntGamePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { bugHuntData } from '../data/bugHuntData';

const BugHuntGamePage = () => {
  const { language } = useParams(); // Получаем язык из URL
  const navigate = useNavigate();
  
  const [currentBug, setCurrentBug] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90);
  const [gameActive, setGameActive] = useState(true);
  const [selectedLine, setSelectedLine] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [attemptedLines, setAttemptedLines] = useState([]);
  const [gameBugs, setGameBugs] = useState([]);

  // Информация о языках для отображения
  const languageInfo = {
    python: { 
      name: 'Python', 
      color: 'from-yellow-900 to-blue-900',
      bgColor: 'via-yellow-900',
      borderColor: 'border-yellow-500/30',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
      statColors: {
        primary: 'bg-yellow-900/50',
        secondary: 'bg-blue-900/50',
        accent: 'bg-purple-900/50'
      }
    },
    javascript: { 
      name: 'JavaScript', 
      color: 'from-yellow-400 to-gray-800',
      bgColor: 'via-yellow-900',
      borderColor: 'border-yellow-500/30',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
      statColors: {
        primary: 'bg-yellow-900/50',
        secondary: 'bg-gray-900/50',
        accent: 'bg-purple-900/50'
      }
    },
    csharp: { 
      name: 'C#', 
      color: 'from-purple-900 to-blue-900',
      bgColor: 'via-purple-900',
      borderColor: 'border-purple-500/30',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      statColors: {
        primary: 'bg-purple-900/50',
        secondary: 'bg-blue-900/50',
        accent: 'bg-indigo-900/50'
      }
    }
  };

  const currentLanguage = languageInfo[language] || languageInfo.python;

  // Функция для выбора 5 случайных багов
  const getRandomBugs = (bugsArray, count = 5) => {
    const shuffled = [...bugsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Инициализация игры с 5 случайными багами
  useEffect(() => {
    const bugs = bugHuntData[language] || bugHuntData.python;
    const randomBugs = getRandomBugs(bugs, 5);
    setGameBugs(randomBugs);
  }, [language]);

  useEffect(() => {
    if (timeLeft > 0 && gameActive && gameBugs.length > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
  }, [timeLeft, gameActive, gameBugs.length]);

  const handleLineClick = (lineNumber) => {
    if (!gameActive || selectedLine !== null || gameBugs.length === 0) return;
    
    if (attemptedLines.includes(lineNumber)) return;
    
    setAttemptedLines([...attemptedLines, lineNumber]);
    setSelectedLine(lineNumber);
    
    if (lineNumber === gameBugs[currentBug].bugLine) {
      const points = gameBugs[currentBug].points;
      setScore(score + points);
      setFeedback(`Правильно! +${points} очков. ${gameBugs[currentBug].explanation}`);
      
      setTimeout(() => {
        if (currentBug < gameBugs.length - 1) {
          setCurrentBug(currentBug + 1);
          setSelectedLine(null);
          setFeedback('');
          setAttemptedLines([]);
        } else {
          setGameActive(false);
        }
      }, 2500);
    } else {
      setFeedback('Неправильно! Показываю правильный ответ...');
      setTimeout(() => {
        setFeedback(`Правильный ответ: строка ${gameBugs[currentBug].bugLine}. ${gameBugs[currentBug].explanation}`);
        setTimeout(() => {
          if (currentBug < gameBugs.length - 1) {
            setCurrentBug(currentBug + 1);
            setSelectedLine(null);
            setFeedback('');
            setAttemptedLines([]);
          } else {
            setGameActive(false);
          }
        }, 3000);
      }, 1500);
    }
  };

  const resetGame = () => {
    const bugs = bugHuntData[language] || bugHuntData.python;
    const randomBugs = getRandomBugs(bugs, 5);
    setGameBugs(randomBugs);
    setCurrentBug(0);
    setScore(0);
    setTimeLeft(90);
    setGameActive(true);
    setSelectedLine(null);
    setFeedback('');
    setAttemptedLines([]);
  };

  const handleBack = () => {
    navigate('/game');
  };

  // Показываем загрузку пока не загрузятся баги
  if (gameBugs.length === 0) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-900 ${currentLanguage.bgColor} flex items-center justify-center`}>
        <div className="text-white text-xl">Загрузка заданий...</div>
      </div>
    );
  }

  const currentBugExample = gameBugs[currentBug];
  const codeLines = currentBugExample?.code.split('\n') || [];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 ${currentLanguage.bgColor} p-6`}>
      <div className="max-w-4xl mx-auto">
        <div className={`bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border ${currentLanguage.borderColor}`}>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Багохот - {currentLanguage.name} {language === 'python' ? '🐍' : language === 'javascript' ? '📜' : '⚡'}</h1>
            <button 
              onClick={handleBack}
              className={`px-4 py-2 ${currentLanguage.buttonColor} text-white rounded-lg transition-colors`}
            >
              Назад
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className={`${currentLanguage.statColors.primary} p-4 rounded-xl text-center`}>
              <div className="text-2xl font-bold text-white">{score}</div>
              <div className="text-yellow-200">Очки</div>
            </div>
            <div className={`${currentLanguage.statColors.secondary} p-4 rounded-xl text-center`}>
              <div className="text-2xl font-bold text-white">{timeLeft}с</div>
              <div className="text-blue-200">Осталось</div>
            </div>
            <div className={`${currentLanguage.statColors.accent} p-4 rounded-xl text-center`}>
              <div className="text-2xl font-bold text-white">{currentBug + 1}/{gameBugs.length}</div>
              <div className="text-purple-200">Задание</div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Найдите строку с ошибкой:</h2>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="font-mono text-green-400 text-sm mb-2">{language}</div>
              <div className="space-y-1">
                {codeLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`
                      flex items-center py-2 px-3 rounded-lg transition-all duration-200
                      ${selectedLine === index + 1 
                        ? (index + 1 === currentBugExample.bugLine 
                            ? 'bg-green-500/20 border-2 border-green-500 shadow-lg shadow-green-500/20' 
                            : 'bg-red-500/20 border-2 border-red-500 shadow-lg shadow-red-500/20')
                        : attemptedLines.includes(index + 1)
                        ? 'bg-gray-700/50 opacity-50'
                        : selectedLine !== null
                        ? 'opacity-70'
                        : 'hover:bg-gray-700/70 hover:scale-[1.02] cursor-pointer'
                      }
                    `}
                    onClick={() => handleLineClick(index + 1)}
                  >
                    <div className={`
                      w-8 text-right mr-4 font-mono text-sm
                      ${selectedLine === index + 1 || attemptedLines.includes(index + 1)
                        ? 'text-white font-bold' 
                        : 'text-gray-400'}
                    `}>
                      {index + 1}
                    </div>
                    <div 
                      className={`
                        font-mono text-base
                        ${selectedLine === index + 1 
                          ? 'text-white font-medium' 
                          : 'text-gray-200'}
                      `}
                      style={{ whiteSpace: 'pre' }}
                    >
                      {line || ' '}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {feedback && (
            <div className={`p-5 rounded-xl mb-6 text-center font-medium ${
              feedback.includes('Правильно') 
                ? 'bg-green-900/50 text-green-100 border border-green-500/30 shadow-lg' 
                : feedback.includes('Правильный ответ')
                ? 'bg-blue-900/50 text-blue-100 border border-blue-500/30 shadow-lg'
                : 'bg-red-900/50 text-red-100 border border-red-500/30 shadow-lg'
            }`}>
              {feedback}
            </div>
          )}

          {!gameActive && timeLeft === 0 && (
            <div className={`${currentLanguage.statColors.secondary} p-6 rounded-xl text-center`}>
              <h3 className="text-2xl font-bold text-white mb-2">Время вышло!</h3>
              <p className="text-xl text-blue-200 mb-4">Ваш счет: {score} очков</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={resetGame}
                  className={`px-6 py-3 ${currentLanguage.buttonColor} text-white rounded-lg font-bold transition-colors`}
                >
                  Играть снова
                </button>
                <button 
                  onClick={handleBack}
                  className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-bold transition-colors"
                >
                  Назад к выбору
                </button>
              </div>
            </div>
          )}

          {!gameActive && currentBug === gameBugs.length - 1 && timeLeft > 0 && (
            <div className="bg-green-900/50 p-6 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Поздравляем! 🎉</h3>
              <p className="text-xl text-green-200 mb-4">Вы нашли все баги! Счет: {score} очков</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={resetGame}
                  className={`px-6 py-3 ${currentLanguage.buttonColor} text-white rounded-lg font-bold transition-colors`}
                >
                  Играть снова
                </button>
                <button 
                  onClick={handleBack}
                  className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-bold transition-colors"
                >
                  Назад к выбору
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BugHuntGamePage;