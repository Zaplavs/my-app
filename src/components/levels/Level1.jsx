// src/components/levels/Level1.jsx
import React, { useState, useEffect } from 'react';

export default function Level1({ onBack }) {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [food, setFood] = useState({ x: 7, y: 7 });
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState(0);
  const [availablePuzzles, setAvailablePuzzles] = useState([
    { id: 1, code: 'move_right()', type: 'movement', used: false },
    { id: 2, code: 'move_down()', type: 'movement', used: false },
    { id: 3, code: 'move_up()', type: 'movement', used: false },
    { id: 4, code: 'move_left()', type: 'movement', used: false },
    { id: 5, code: 'move_right()', type: 'movement', used: false },
    { id: 6, code: 'move_down()', type: 'movement', used: false },
    { id: 7, code: 'move_right()', type: 'movement', used: false },
    { id: 8, code: 'move_up()', type: 'movement', used: false }
  ]);
  const [selectedPuzzleSequence, setSelectedPuzzleSequence] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const collectPuzzle = (puzzleId) => {
    if (isExecuting) return;
    
    const puzzle = availablePuzzles.find(p => p.id === puzzleId);
    if (puzzle && !puzzle.used) {
      setSelectedPuzzleSequence(prev => [...prev, puzzle]);
      setAvailablePuzzles(prev => 
        prev.map(p => p.id === puzzleId ? { ...p, used: true } : p)
      );
    }
  };

  const removePuzzleFromSequence = (index) => {
    if (isExecuting) return;
    
    const removedPuzzle = selectedPuzzleSequence[index];
    setSelectedPuzzleSequence(prev => prev.filter((_, i) => i !== index));
    setAvailablePuzzles(prev => 
      prev.map(p => p.id === removedPuzzle.id ? { ...p, used: false } : p)
    );
  };

  const executeSequence = () => {
    if (selectedPuzzleSequence.length === 0 || isExecuting) return;
    setIsExecuting(true);
    setCurrentStep(0);
    setGameOver(false);
    setGameWon(false);
    // Сброс змейки в начальную позицию
    setSnake([{ x: 2, y: 2 }]);
  };

  const resetGame = () => {
    setSnake([{ x: 2, y: 2 }]);
    setGameOver(false);
    setGameWon(false);
    setIsExecuting(false);
    setCurrentStep(0);
    setScore(0);
    setSelectedPuzzleSequence([]);
    setAvailablePuzzles(prev => 
      prev.map(p => ({ ...p, used: false }))
    );
  };

  // Выполнение шагов последовательности
  useEffect(() => {
    if (!isExecuting || currentStep >= selectedPuzzleSequence.length) {
      if (isExecuting) {
        setIsExecuting(false);
      }
      return;
    }

    const timer = setTimeout(() => {
      const puzzle = selectedPuzzleSequence[currentStep];
      
      setSnake(currentSnake => {
        const newSnake = [...currentSnake];
        const head = { ...newSnake[0] };
        
        // Выполняем команду из пазла
        switch (puzzle.code) {
          case 'move_right()':
            head.x += 1;
            break;
          case 'move_left()':
            head.x -= 1;
            break;
          case 'move_up()':
            head.y -= 1;
            break;
          case 'move_down()':
            head.y += 1;
            break;
          default:
            break;
        }

        // Проверка столкновения со стенами
        if (head.x < 0 || head.x >= 10 || head.y < 0 || head.y >= 10) {
          setGameOver(true);
          setIsExecuting(false);
          return currentSnake;
        }

        // Проверка достижения еды
        if (head.x === food.x && head.y === food.y) {
          setGameWon(true);
          setScore(prev => prev + 100);
          setIsExecuting(false);
          return [head];
        }

        newSnake.unshift(head);
        newSnake.pop();

        return newSnake;
      });

      setCurrentStep(prev => prev + 1);
    }, 800);

    return () => clearTimeout(timer);
  }, [isExecuting, currentStep, selectedPuzzleSequence, food]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-green-500/20">
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
                <h1 className="text-xl font-bold text-white">Уровень 1: Змейка программиста</h1>
                <p className="text-sm text-gray-300">Постройте путь к ягоде</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-300">Счет</div>
                <div className="text-lg font-semibold text-white">{score}</div>
              </div>
              <div className={`w-2 h-2 rounded-full ${isExecuting ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Постройте путь для змейки</h2>
            <p className="text-xl text-gray-300 mb-6">
              Выберите команды и проведите змейку к ягоде
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Game Area */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Игровое поле</h3>
                
                {/* Game Board */}
                <div className="bg-slate-900/50 border-2 border-green-500/30 rounded-xl p-4">
                  <div className="grid grid-cols-10 grid-rows-10 gap-0 w-full aspect-square">
                    {Array.from({ length: 100 }).map((_, index) => {
                      const x = index % 10;
                      const y = Math.floor(index / 10);
                      const isSnake = snake.some(segment => segment.x === x && segment.y === y);
                      const isHead = snake[0]?.x === x && snake[0]?.y === y;
                      const isFood = food.x === x && food.y === y;
                      
                      return (
                        <div 
                          key={index}
                          className={`aspect-square border border-slate-800/30 relative ${
                            isHead 
                              ? 'bg-green-400 rounded-sm' 
                              : isSnake 
                                ? 'bg-green-600 rounded-sm' 
                                : isFood 
                                  ? 'bg-red-500 rounded-full animate-pulse' 
                                  : 'bg-slate-800/20'
                          }`}
                        >
                          {isFood && (
                            <div className="absolute inset-0 flex items-center justify-center text-white">
                              🍓
                            </div>
                          )}
                          {isHead && (
                            <div className="absolute inset-0 flex items-center justify-center text-black text-xs">
                              🐍
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Game Controls */}
                <div className="mt-4 flex flex-wrap gap-3 justify-center">
                  {!isExecuting ? (
                    <>
                      <button 
                        onClick={executeSequence}
                        disabled={selectedPuzzleSequence.length === 0}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
                      >
                        Выполнить путь
                      </button>
                      <button 
                        onClick={resetGame}
                        className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors"
                      >
                        Сбросить
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => {
                        setIsExecuting(false);
                        setCurrentStep(0);
                        setSnake([{ x: 2, y: 2 }]);
                      }}
                      className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
                    >
                      Остановить
                    </button>
                  )}
                </div>

                {/* Game Status */}
                {(gameOver || gameWon) && (
                  <div className={`mt-4 p-4 rounded-xl ${
                    gameWon 
                      ? 'bg-green-500/20 border border-green-500/30' 
                      : 'bg-red-500/20 border border-red-500/30'
                  }`}>
                    <p className="text-white text-center font-semibold">
                      {gameWon ? 'Поздравляем! Вы достигли ягоды! 🎉' : 'Игра окончена! Столкновение! 💥'}
                    </p>
                    <p className="text-gray-300 text-center text-sm mt-1">
                      {gameWon ? `Счет: ${score}` : 'Попробуйте другой путь'}
                    </p>
                  </div>
                )}

                {isExecuting && (
                  <div className="mt-4 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-xl">
                    <p className="text-white text-center">
                      Выполняется шаг {currentStep + 1} из {selectedPuzzleSequence.length}
                    </p>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / selectedPuzzleSequence.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {!isExecuting && !gameOver && !gameWon && (
                  <div className="mt-4 text-center text-gray-300">
                    <p>Цель: соберите команды и проведите змейку к ягоде 🍓</p>
                    <p className="text-sm mt-1">Выберите команды справа и нажмите "Выполнить путь"</p>
                  </div>
                )}
              </div>
            </div>

            {/* Game Info */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Выбранные команды ({selectedPuzzleSequence.length})</h3>
                {selectedPuzzleSequence.length === 0 ? (
                  <p className="text-gray-400 text-center py-4">Выберите команды из списка ниже</p>
                ) : (
                  <div className="space-y-2">
                    {selectedPuzzleSequence.map((puzzle, index) => (
                      <div 
                        key={`${puzzle.id}-${index}`}
                        className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg font-mono text-sm text-green-300 relative group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-green-600 px-2 py-1 rounded">
                              {index + 1}
                            </span>
                            {puzzle.code}
                          </div>
                          {!isExecuting && (
                            <button 
                              onClick={() => removePuzzleFromSequence(index)}
                              className="text-red-400 hover:text-red-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Доступные команды</h3>
                <div className="space-y-2">
                  {availablePuzzles
                    .filter(puzzle => !puzzle.used)
                    .map((puzzle) => (
                      <div 
                        key={puzzle.id}
                        onClick={() => collectPuzzle(puzzle.id)}
                        className="p-3 bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 rounded-lg font-mono text-sm text-blue-300 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs">🧩</span>
                          {puzzle.code}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Как играть</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>1. Выберите команды движения из списка</p>
                  <p>2. Они появятся в последовательности слева</p>
                  <p>3. Нажмите "Выполнить путь"</p>
                  <p>4. Змейка выполнит все команды по порядку</p>
                  <p>5. Достигните ягоды 🍓 для победы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}