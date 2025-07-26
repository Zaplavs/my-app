// src/components/codesnake/CodeSnakeLevel4.jsx
import React, { useState } from 'react';

export default function CodeSnakeLevel4({ onBack }) {
  const [workspace, setWorkspace] = useState([]);
  const [result, setResult] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [snakePosition, setSnakePosition] = useState({ x: 0, y: 0 });
  const [berriesCollected, setBerriesCollected] = useState(0);
  const [walls] = useState([
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 }
  ]);
  const [berryPositions] = useState([
    { x: 4, y: 0, collected: false },
    { x: 4, y: 2, collected: false }
  ]);

  const puzzlePieces = [
    { id: 1, code: 'move_right()', type: 'movement' },
    { id: 2, code: 'move_left()', type: 'movement' },
    { id: 3, code: 'move_up()', type: 'movement' },
    { id: 4, code: 'move_down()', type: 'movement' },
    { id: 5, code: 'collect_berry()', type: 'action' }
  ];

  const correctSolution = [
    'move_right()', 'move_right()', 'move_down()', 'move_right()', 'move_right()', 'collect_berry()',
    'move_down()', 'collect_berry()'
  ];

  const handlePieceClick = (piece) => {
    setWorkspace([...workspace, piece]);
  };

  const handleWorkspaceClick = (index) => {
    const newWorkspace = [...workspace];
    newWorkspace.splice(index, 1);
    setWorkspace(newWorkspace);
  };

  const runCode = () => {
    const userSolution = workspace.map(piece => piece.code);
    const isSolutionCorrect = JSON.stringify(userSolution) === JSON.stringify(correctSolution);
    
    setIsCorrect(isSolutionCorrect);
    if (isSolutionCorrect) {
      setResult('Правильно! Змейка прошла лабиринт и собрала обе ягоды!');
      setSnakePosition({ x: 4, y: 2 });
      setBerriesCollected(2);
    } else {
      setResult('Попробуйте еще раз. Нужно пройти через лабиринт и собрать ягоды');
    }
  };

  const resetWorkspace = () => {
    setWorkspace([]);
    setResult('');
    setIsCorrect(null);
    setSnakePosition({ x: 0, y: 0 });
    setBerriesCollected(0);
  };

  // Создаем игровое поле 5x3
  const renderGameBoard = () => {
    const board = [];
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 5; x++) {
        let cellClass = "w-12 h-12 border border-gray-600 flex items-center justify-center";
        
        // Проверяем стены
        let isWall = false;
        for (let wall of walls) {
          if (wall.x === x && wall.y === y) {
            cellClass += " bg-gray-600";
            isWall = true;
            break;
          }
        }
        
        if (!isWall) {
          if (snakePosition.x === x && snakePosition.y === y) {
            cellClass += " bg-green-500";
          } else {
            let isBerry = false;
            for (let berry of berryPositions) {
              if (berry.x === x && berry.y === y && !berry.collected) {
                cellClass += " bg-red-500";
                isBerry = true;
                break;
              }
            }
            if (!isBerry) {
              cellClass += " bg-gray-800";
            }
          }
        }
        
        board.push(
          <div key={`${x}-${y}`} className={cellClass}>
            {snakePosition.x === x && snakePosition.y === y && '🐍'}
            {walls.some(wall => wall.x === x && wall.y === y) && !(
              snakePosition.x === x && snakePosition.y === y
            ) && '█'}
            {berryPositions.map((berry, index) => (
              berry.x === x && berry.y === y && !berry.collected && !isWall && (
                <span key={index}>🍓</span>
              )
            ))}
          </div>
        );
      }
    }
    
    return board;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-green-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Змейка программиста - Уровень 4</h1>
            <button 
              onClick={onBack}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              Назад к уровням
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Лабиринт</h2>
                <p className="text-gray-300">Пройдите через лабиринт и соберите ягоды</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={runCode}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Запустить код
                </button>
                <button
                  onClick={resetWorkspace}
                  className="px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
                >
                  Очистить
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Puzzle Pieces */}
            <div className="lg:col-span-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Фрагменты кода</h3>
              <p className="text-gray-300 mb-6">Перетащите нужные фрагменты в рабочую область</p>
              
              <div className="space-y-4">
                {puzzlePieces.map((piece) => (
                  <div
                    key={piece.id}
                    onClick={() => handlePieceClick(piece)}
                    className="p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors border border-slate-600 hover:border-green-500"
                  >
                    <pre className="text-green-400 font-mono text-sm">{piece.code}</pre>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-slate-600 text-xs text-gray-300 rounded">
                        {piece.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Game Board and Workspace */}
            <div className="lg:col-span-2 space-y-8">
              {/* Game Board */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Игровое поле</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-5 gap-1 bg-gray-900 p-4 rounded-lg">
                    {renderGameBoard()}
                  </div>
                </div>
                <div className="mt-4 text-center text-gray-300">
                  <p>🐍 - Змейка | 🍓 - Ягода | █ - Стена</p>
                  <p className="mt-2">Собрано ягод: {berriesCollected}/2</p>
                </div>
              </div>

              {/* Workspace */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Рабочая область</h3>
                
                <div className="min-h-48 bg-slate-900/50 rounded-lg p-6 border-2 border-dashed border-slate-700">
                  {workspace.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      <p>Перетащите сюда фрагменты кода</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {workspace.map((piece, index) => (
                        <div
                          key={`${piece.id}-${index}`}
                          onClick={() => handleWorkspaceClick(index)}
                          className="p-4 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors border border-slate-600"
                        >
                          <div className="flex items-center justify-between">
                            <pre className="text-green-400 font-mono">{piece.code}</pre>
                            <span className="text-gray-400 text-sm">#{index + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {result && (
                  <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-900/30 border border-green-500/30' : 'bg-red-900/30 border border-red-500/30'}`}>
                    <p className={isCorrect ? 'text-green-400' : 'text-red-400'}>{result}</p>
                  </div>
                )}
                
                {isCorrect && (
                  <div className="mt-6 p-4 bg-green-900/30 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-semibold text-center">
                      Поздравляем! Уровень пройден!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}