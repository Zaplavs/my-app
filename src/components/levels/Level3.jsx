// src/components/levels/Level3.jsx
import React, { useState } from 'react';

export default function Level3({ onBack }) {
  const [algorithmPieces, setAlgorithmPieces] = useState([
    { id: 1, code: 'def binary_search(arr, target):', position: 'top', connected: false },
    { id: 2, code: 'left, right = 0, len(arr) - 1', position: 'top', connected: false },
    { id: 3, code: 'while left <= right:', position: 'top', connected: false },
    { id: 4, code: 'mid = (left + right) // 2', position: 'top', connected: false },
    { id: 5, code: 'if arr[mid] == target:', position: 'top', connected: false },
    { id: 6, code: 'return mid', position: 'top', connected: false },
    { id: 7, code: 'elif arr[mid] < target:', position: 'top', connected: false },
    { id: 8, code: 'left = mid + 1', position: 'top', connected: false },
    { id: 9, code: 'else:', position: 'top', connected: false },
    { id: 10, code: 'right = mid - 1', position: 'top', connected: false },
    { id: 11, code: 'return -1', position: 'top', connected: false }
  ]);
  
  const [connectedPieces, setConnectedPieces] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [gameCompleted, setGameCompleted] = useState(false);

  const connectPiece = (pieceId) => {
    const piece = algorithmPieces.find(p => p.id === pieceId);
    if (!piece || piece.connected) return;

    const newConnectedPieces = [...connectedPieces, piece];
    setConnectedPieces(newConnectedPieces);
    
    setAlgorithmPieces(prev => 
      prev.map(p => p.id === pieceId ? { ...p, connected: true, position: 'connected' } : p)
    );

    // Проверка правильной последовательности
    const correctSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const currentSequence = newConnectedPieces.map(p => p.id);
    
    if (currentSequence.length === correctSequence.length) {
      const isCorrect = currentSequence.every((id, index) => id === correctSequence[index]);
      if (isCorrect) {
        setFeedback('Отлично! Вы правильно собрали алгоритм бинарного поиска!');
        setGameCompleted(true);
      } else {
        setFeedback('Последовательность неверна. Попробуйте пересобрать алгоритм.');
      }
    }
  };

  const disconnectPiece = (pieceId) => {
    setConnectedPieces(prev => prev.filter(p => p.id !== pieceId));
    setAlgorithmPieces(prev => 
      prev.map(p => p.id === pieceId ? { ...p, connected: false, position: 'top' } : p)
    );
    setFeedback('');
    setGameCompleted(false);
  };

  const resetGame = () => {
    setConnectedPieces([]);
    setAlgorithmPieces(prev => 
      prev.map(p => ({ ...p, connected: false, position: 'top' }))
    );
    setFeedback('');
    setGameCompleted(false);
  };

  const getPieceStyle = (piece) => {
    if (piece.position === 'top') {
      return "p-3 bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 cursor-pointer";
    } else if (piece.position === 'connected') {
      return "p-3 bg-green-500/20 border border-green-500/30";
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
              >
                ← Назад
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">Уровень 3: Алгоритмический путь</h1>
                <p className="text-sm text-gray-300">Соберите алгоритм бинарного поиска</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-300">Собрано</div>
                <div className="text-lg font-semibold text-white">{connectedPieces.length}/11</div>
              </div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Соберите алгоритм</h2>
            <p className="text-xl text-gray-300 mb-6">
              Расположите фрагменты кода в правильном порядке для реализации бинарного поиска
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Game Area */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Алгоритм бинарного поиска</h3>
                
                {/* Connected Pieces Area */}
                <div className="bg-slate-900/50 border-2 border-purple-500/30 rounded-xl p-6 min-h-96">
                  <h4 className="text-white font-semibold mb-3">Собранный алгоритм:</h4>
                  {connectedPieces.length === 0 ? (
                    <div className="text-center text-gray-400 py-16">
                      <p>Перетащите фрагменты кода сюда в правильном порядке</p>
                      <p className="text-sm mt-2">Начните с определения функции</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {connectedPieces.map((piece, index) => (
                        <div 
                          key={piece.id}
                          className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg font-mono text-sm text-green-300 relative group"
                        >
                          <div className="flex items-center justify-between">
                            <span>{piece.code}</span>
                            <button 
                              onClick={() => disconnectPiece(piece.id)}
                              className="text-red-400 hover:text-red-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="absolute -left-8 top-3 text-xs text-gray-400">
                            {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Feedback */}
                {feedback && (
                  <div className={`p-4 rounded-xl mt-4 ${
                    gameCompleted 
                      ? 'bg-green-500/20 border border-green-500/30' 
                      : 'bg-red-500/20 border border-red-500/30'
                  }`}>
                    <p className="text-white">{feedback}</p>
                  </div>
                )}

                {/* Controls */}
                <div className="flex gap-4 mt-4">
                  <button 
                    onClick={resetGame}
                    className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    Сбросить
                  </button>
                  {gameCompleted && (
                    <button 
                      onClick={resetGame}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
                    >
                      Играть снова
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Available Pieces */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Фрагменты алгоритма</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Выберите фрагменты в правильном порядке для реализации бинарного поиска
                </p>
                <div className="space-y-2">
                  {algorithmPieces
                    .filter(piece => !piece.connected)
                    .map((piece) => (
                      <div 
                        key={piece.id}
                        onClick={() => connectPiece(piece.id)}
                        className={`${getPieceStyle(piece)} rounded-lg font-mono text-sm cursor-pointer transition-all`}
                      >
                        {piece.code}
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Как работает бинарный поиск</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>1. Определяем границы поиска</p>
                  <p>2. Находим середину массива</p>
                  <p>3. Сравниваем элемент в середине с искомым</p>
                  <p>4. Сужаем границы поиска</p>
                  <p>5. Повторяем до нахождения или исчерпания</p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Цель уровня</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Соберите все 11 фрагментов</p>
                  <p>• Расположите в правильном порядке</p>
                  <p>• Реализуйте бинарный поиск</p>
                  <p>• Проверьте логику алгоритма</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}