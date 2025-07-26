// src/components/GameSection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GameSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handlePlayClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
    navigate('/game');
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" id='game'></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-600/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 font-medium text-sm">Игровой режим активирован</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Сыграйте в{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              игру
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Проверьте свои навыки программирования в увлекательной интерактивной игре. 
            Я покажу вам, на что способен, а вы попробуйте обыграть меня в коде!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button 
              onClick={handlePlayClick}
              className={`group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${isAnimating ? 'animate-pulse scale-105' : ''}`}
            >
              <span className="relative z-10">Начать игру</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Готов к вызову</span>
            </div>
          </div>
          
          {/* Анимированная волна кода внизу */}
          <div className="mt-16 opacity-30">
            <div className="flex space-x-8 animate-pulse">
              <div className="text-4xl font-mono text-purple-400">{'<>'}</div>
              <div className="text-4xl font-mono text-blue-400">{'{}'}</div>
              <div className="text-4xl font-mono text-pink-400">{'[]'}</div>
              <div className="text-4xl font-mono text-green-400">{'()'}</div>
              <div className="text-4xl font-mono text-yellow-400">{'++'}</div>
              <div className="text-4xl font-mono text-red-400">{'=='}</div>
              <div className="text-4xl font-mono text-cyan-400">{'=>'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}