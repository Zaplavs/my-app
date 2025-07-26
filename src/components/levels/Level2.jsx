// src/components/levels/Level2.jsx
import React, { useState, useEffect } from 'react';

export default function Level2({ onBack }) {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [exitPosition] = useState({ x: 9, y: 9 });
  const [collectedPuzzles, setCollectedPuzzles] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [moves, setMoves] = useState(0);

  // Лабиринт (1 - стена, 0 - путь, 2 - пазл, 3 - игрок, 4 - выход)
  const [maze, setMaze] = useState([
    [3, 0, 1, 0, 0, 1, 0, 0, 0, 2],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 2, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 2, 1],
    [2, 0, 0, 0, 0, 0, 0, 1, 0, 4]
  ]);

  const puzzles = [
    { id: 1, code: 'if condition:', x: 0, y: 9 },
    { id: 2, code: 'for item in list:', x: 5, y: 4 },
    { id: 3, code: 'def function():', x: 8, y: 8 }
  ];

  const movePlayer = (dx, dy) => {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;

    // Проверка границ лабиринта
    if (newX < 0 || newX >= 10 || newY < 0 || newY >= 10) return;

    // Проверка стены
    if (maze[newY][newX] === 1) return;

    setPlayerPosition({ x: newX, y: newY });
    setMoves(prev => prev + 1);

    // Проверка сбора пазла
    const puzzle = puzzles.find(p => p.x === newX && p.y === newY);
    if (puzzle && !collectedPuzzles.find(cp => cp.id === puzzle.id)) {
      setCollectedPuzzles(prev => [...prev, puzzle]);
    }

    // Проверка выхода
    if (newX === exitPosition.x && newY === exitPosition.y && collectedPuzzles.length >= 2) {
      setGameCompleted(true);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          movePlayer(0, -1);
          break;
        case 'ArrowDown':
          movePlayer(0, 1);
          break;
        case 'ArrowLeft':
          movePlayer(-1, 0);
          break;
        case 'ArrowRight':
          movePlayer(1, 0);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [playerPosition, maze, collectedPuzzles]);

  const resetGame = () => {
    setPlayerPosition({ x: 0, y: 0 });
    setCollectedPuzzles([]);
    setGameCompleted(false);
    setMoves(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/20">
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
                <h1 className="text-xl font-bold text-white">Уровень 2: Лабиринт кода</h1>
                <p className="text-sm text-gray-300">Найдите выход и соберите пазлы</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-300">Ходы</div>
                <div className="text-lg font-semibold text-white">{moves}</div>
              </div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Пройдите лабиринт</h2>
            <p className="text-xl text-gray-300 mb-6">
              Найдите выход и соберите все фрагменты кода по пути
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Game Area */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Лабиринт</h3>
                
                {/* Maze */}
                <div className="bg-slate-900/50 border-2 border-blue-500/30 rounded-xl p-4">
                  <div className="grid grid-cols-10 gap-1 w-full aspect-square">
                    {maze.map((row, y) =>
                      row.map((cell, x) => {
                        const isPlayer = playerPosition.x === x && playerPosition.y === y;
                        const isExit = exitPosition.x === x && exitPosition.y === y;
                        const isPuzzle = puzzles.some(p => p.x === x && p.y === y) && 
                                       !collectedPuzzles.some(cp => cp.x === x && cp.y === y);
                        
                        let cellClass = "aspect-square flex items-center justify-center text-xs font-mono ";
                        
                        if (cell === 1) {
                          cellClass += "bg-slate-700 border border-slate-600";
                        } else if (isPlayer) {
                          cellClass += "bg-blue-500 rounded-full";
                        } else if (isExit) {
                          cellClass += "bg-green-500 rounded-full";
                        } else if (isPuzzle) {
                          cellClass += "bg-red-500 rounded-full animate-pulse";
                        } else {
                          cellClass += "bg-slate-800/30 border border-slate-700/30";
                        }

                        return (
                          <div key={`${x}-${y}`} className={cellClass}>
                            {isPlayer && "👤"}
                            {isExit && "🚪"}
                            {isPuzzle && "🧩"}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {gameCompleted && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                    <p className="text-white text-center font-semibold">Поздравляем! Вы прошли лабиринт!</p>
                    <p className="text-gray-300 text-center text-sm mt-1">
                      Собрано пазлов: {collectedPuzzles.length} из {puzzles.length}
                    </p>
                    <div className="flex justify-center mt-3">
                      <button 
                        onClick={resetGame}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        Играть снова
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-4 text-center text-gray-300">
                  <p>Управление: используйте стрелки клавиатуры</p>
                  <p className="text-sm mt-1">
                    Цель: соберите все пазлы и дойдите до выхода 🚪
                  </p>
                </div>
              </div>
            </div>

            {/* Game Info */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Собранные пазлы ({collectedPuzzles.length}/{puzzles.length})</h3>
                {collectedPuzzles.length === 0 ? (
                  <p className="text-gray-400 text-center py-4">Пока ничего не собрано</p>
                ) : (
                  <div className="space-y-2">
                    {collectedPuzzles.map((puzzle, index) => (
                      <div 
                        key={puzzle.id}
                        className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg font-mono text-sm text-blue-300"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-blue-600 px-2 py-1 rounded">
                            {index + 1}
                          </span>
                          {puzzle.code}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Легенда</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-slate-700 border border-slate-600"></span>
                    <span>Стена</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                    <span>Игрок</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                    <span>Пазл</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                    <span>Выход</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Цель уровня</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• Соберите все 3 пазла</p>
                  <p>• Дойдите до выхода 🚪</p>
                  <p>• Избегайте стен</p>
                  <p>• Минимизируйте количество ходов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}