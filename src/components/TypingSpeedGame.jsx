// src/components/TypingSpeedGame.jsx
import React, { useState, useEffect, useRef } from 'react';
import { typingTexts } from '../data/typingTexts';

export default function TypingSpeedGame({ onBack }) {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'finished'
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [difficulty, setDifficulty] = useState('medium');
  const [errors, setErrors] = useState(0);
  const inputRef = useRef(null);

  const getRandomText = () => {
    const textArray = typingTexts[difficulty];
    return textArray[Math.floor(Math.random() * textArray.length)];
  };

  const startGame = () => {
    const text = getRandomText();
    setCurrentText(text);
    setUserInput('');
    setTimeLeft(60);
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setGameState('playing');
  };

  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            finishGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  useEffect(() => {
    if (gameState === 'playing' && userInput.length > 0 && !startTime) {
      setStartTime(Date.now());
    }
    
    // Проверка завершения текста
    if (gameState === 'playing' && userInput.length === currentText.length) {
      finishGame();
    }
    
    // Расчет точности
    if (userInput.length > 0) {
      let errorCount = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] !== currentText[i]) {
          errorCount++;
        }
      }
      setErrors(errorCount);
      const accuracy = ((userInput.length - errorCount) / userInput.length) * 100;
      setAccuracy(Math.max(0, Math.round(accuracy)));
    }
  }, [userInput, currentText, gameState, startTime]);

  const finishGame = () => {
    if (startTime) {
      const timeElapsed = (Date.now() - startTime) / 1000 / 60; // в минутах
      const words = userInput.trim().split(/\s+/).length;
      const calculatedWpm = Math.round(words / timeElapsed) || 0;
      setWpm(Math.max(0, calculatedWpm));
    }
    setGameState('finished');
  };

  const handleInputChange = (e) => {
    if (gameState !== 'playing') return;
    
    const value = e.target.value;
    // Ограничиваем ввод длиной оригинального текста
    if (value.length <= currentText.length) {
      setUserInput(value);
    }
  };

  const resetGame = () => {
    setGameState('menu');
    setUserInput('');
    setCurrentText('');
  };

  const getCharacterClass = (index) => {
    if (index >= userInput.length) return 'text-gray-400';
    if (userInput[index] === currentText[index]) return 'text-green-400';
    return 'text-red-400';
  };

  const renderMenu = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full border border-green-500/30">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Скоростной Ввод</h1>
          <p className="text-xl text-gray-300">
            Проверьте свою скорость печати на клавиатуре
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Выберите сложность</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['easy', 'medium', 'hard'].map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  difficulty === level
                    ? 'border-green-500 bg-green-500/20'
                    : 'border-slate-600 hover:border-green-400'
                }`}
              >
                <div className="font-bold text-white capitalize">
                  {level === 'easy' ? 'Легко' : level === 'medium' ? 'Средне' : 'Сложно'}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={startGame}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all transform hover:scale-105"
          >
            Начать игру
          </button>
          <button
            onClick={onBack}
            className="px-8 py-4 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600 transition-colors"
          >
            Назад
          </button>
        </div>
      </div>
    </div>
  );

  const renderGame = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            ← Назад
          </button>
          <div className="text-2xl font-bold text-white">
            Время: <span className={timeLeft <= 10 ? 'text-red-400' : 'text-green-400'}>
              {timeLeft}с
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-2xl font-bold text-green-400">{wpm}</div>
            <div className="text-gray-400">WPM</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-2xl font-bold text-blue-400">{accuracy}%</div>
            <div className="text-gray-400">Точность</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-2xl font-bold text-yellow-400">{errors}</div>
            <div className="text-gray-400">Ошибки</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-700/50">
            <div className="text-2xl font-bold text-purple-400">{userInput.length}/{currentText.length}</div>
            <div className="text-gray-400">Символов</div>
          </div>
        </div>

        {/* Text Display */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700/50">
          <div className="text-2xl leading-relaxed font-mono mb-8 min-h-[120px]">
            {currentText.split('').map((char, index) => (
              <span key={index} className={getCharacterClass(index)}>
                {char}
              </span>
            ))}
          </div>
          
          <textarea
            ref={inputRef}
            value={userInput}
            onChange={handleInputChange}
            placeholder="Начните печатать здесь..."
            className="w-full h-32 p-4 text-xl bg-slate-700/50 text-white rounded-xl border border-slate-600 focus:border-green-500 focus:outline-none resize-none"
            autoFocus
            disabled={gameState !== 'playing'}
          />
        </div>

        {/* Instructions */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30">
          <h3 className="text-lg font-bold text-white mb-2">Инструкции:</h3>
          <ul className="text-gray-300 list-disc pl-5 space-y-1">
            <li>Печатайте текст выше как можно быстрее и точнее</li>
            <li>Зеленый цвет - правильные символы</li>
            <li>Красный цвет - ошибки</li>
            <li>Игра длится 60 секунд или пока вы не напечатаете весь текст</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full border border-green-500/30">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Результаты</h1>
          <div className="text-6xl text-green-400 mb-2">⌨️</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">{wpm}</div>
            <div className="text-gray-300">Слов в минуту</div>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">{accuracy}%</div>
            <div className="text-gray-300">Точность</div>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">{errors}</div>
            <div className="text-gray-300">Ошибок</div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            {wpm >= 60 ? 'Отличный результат! 🚀' : 
             wpm >= 40 ? 'Хороший результат! 👍' : 
             wpm >= 20 ? 'Неплохо! Продолжайте практиковаться 💪' : 
             'Продолжайте тренироваться! 🎯'}
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={startGame}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all transform hover:scale-105"
          >
            Играть снова
          </button>
          <button
            onClick={resetGame}
            className="px-8 py-4 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600 transition-colors"
          >
            Главное меню
          </button>
        </div>
      </div>
    </div>
  );

  switch (gameState) {
    case 'menu':
      return renderMenu();
    case 'playing':
      return renderGame();
    case 'finished':
      return renderResults();
    default:
      return renderMenu();
  }
}