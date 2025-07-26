// src/components/codemaze/CodeMazeLevel5.jsx
import React, { useState } from 'react';
export default function CodeMazeLevel5({ onBack }) {
  const [workspace, setWorkspace] = useState([]);
  const [result, setResult] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [exitPosition] = useState({ x: 4, y: 4 });
  // Новое расположение стен для более интересного лабиринта
  const walls = [
    { x: 1, y: 0 }, // Верхняя горизонтальная стена
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 }, // Конец верхней стены
    
    { x: 0, y: 1 }, // Левая вертикальная стена сверху
    // Пропуск в середине левой стороны
    
    { x: 2, y: 1 }, // Центральная вертикальная стена сверху
    { x: 3, y: 1 },
    { x: 4, y: 1 },
    
    { x: 1, y: 2 }, // Горизонтальная стена посередине
    { x: 2, y: 2 },
    // Пропуск справа для прохода
    
    { x: 0, y: 3 }, // Левая вертикальная стена снизу
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    
    { x: 4, y: 3 }, // Правая вертикальная стена снизу
    
    { x: 1, y: 4 }, // Нижняя горизонтальная стена
    { x: 2, y: 4 },
    { x: 3, y: 4 }
    // Выход в правом нижнем углу (4,4) свободен
  ];
  const puzzlePieces = [
    { id: 1, code: 'move_right()', type: 'movement' },
    { id: 2, code: 'move_left()', type: 'movement' },
    { id: 3, code: 'move_up()', type: 'movement' },
    { id: 4, code: 'move_down()', type: 'movement' },
    { id: 5, code: 'if path_is_clear():', type: 'condition' },
    { id: 6, code: 'else:', type: 'condition' }
  ];
  // Функция для проверки, можно ли двигаться в заданном направлении
  const canMoveTo = (x, y) => {
    // Проверяем границы поля
    if (x < 0 || x >= 5 || y < 0 || y >= 5) {
      return false;
    }
    // Проверяем стены
    for (let wall of walls) {
      if (wall.x === x && wall.y === y) {
        return false;
      }
    }
    return true;
  };
  // Функция для выполнения движений
  const executeMoves = (moves) => {
    let currentPosition = { x: 0, y: 0 };
    for (let move of moves) {
      let newX = currentPosition.x;
      let newY = currentPosition.y;
      switch (move) {
        case 'move_right()':
          newX = currentPosition.x + 1;
          break;
        case 'move_left()':
          newX = currentPosition.x - 1;
          break;
        case 'move_down()':
          newY = currentPosition.y + 1;
          break;
        case 'move_up()':
          newY = currentPosition.y - 1;
          break;
        default:
          continue;
      }
      // Проверяем, можно ли туда двигаться
      if (canMoveTo(newX, newY)) {
        currentPosition = { x: newX, y: newY };
      }
      // Если нельзя - игрок остается на месте (столкновение со стеной)
    }
    return currentPosition;
  };
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
    // Выполняем движения и получаем финальную позицию
    const finalPosition = executeMoves(userSolution);
    setPlayerPosition(finalPosition);
    // Проверяем, достиг ли игрок выхода
    const isPlayerAtExit = (finalPosition.x === exitPosition.x && finalPosition.y === exitPosition.y);
    // Проверяем правильные решения
    const correctSolutions = [
      ['move_down()', 'move_down()', 'move_right()', 'move_right()', 'move_down()', 'move_right()', 'move_right()'],
      // Другие возможные решения могут быть добавлены здесь
    ];
    const isSolutionOneOfCorrect = correctSolutions.some(solution => 
      JSON.stringify(userSolution) === JSON.stringify(solution)
    );
    const isSolutionCorrect = isSolutionOneOfCorrect || isPlayerAtExit;
    setIsCorrect(isSolutionCorrect);
    if (isSolutionCorrect) {
      setResult('Правильно! Вы успешно прошли лабиринт!');
    } else {
      setResult('Попробуйте еще раз. Найдите путь к выходу, избегая стен!');
    }
  };
  const resetWorkspace = () => {
    setWorkspace([]);
    setResult('');
    setIsCorrect(null);
    setPlayerPosition({ x: 0, y: 0 });
  };
  // Создаем игровое поле 5x5
  const renderGameBoard = () => {
    const board = [];
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        let cellClass = "w-10 h-10 border border-gray-600 flex items-center justify-center text-xs";
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
          if (playerPosition.x === x && playerPosition.y === y) {
            cellClass += " bg-blue-500";
          } else if (exitPosition.x === x && exitPosition.y === y) {
            cellClass += " bg-green-500";
          } else {
            cellClass += " bg-gray-800";
          }
        }
        board.push(
          <div key={`${x}-${y}`} className={cellClass}>
            {playerPosition.x === x && playerPosition.y === y && '🚶'}
            {walls.some(wall => wall.x === x && wall.y === y) && !(
              playerPosition.x === x && playerPosition.y === y
            ) && '█'}
            {exitPosition.x === x && exitPosition.y === y && '🚪'}
          </div>
        );
      }
    }
    return board;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Лабиринт кода - Уровень 5</h1>
            <button 
              onClick={onBack}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
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
                <h2 className="text-2xl font-bold text-white">Логические ворота</h2>
                <p className="text-gray-300">Найдите путь к выходу, избегая стен</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={runCode}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
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
              <p className="text-yellow-300 mb-4">Подсказка: Игрок не может пройти сквозь стены!</p>
              <div className="space-y-4">
                {puzzlePieces.map((piece) => (
                  <div
                    key={piece.id}
                    onClick={() => handlePieceClick(piece)}
                    className="p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors border border-slate-600 hover:border-blue-500"
                  >
                    <pre className="text-blue-400 font-mono text-sm">{piece.code}</pre>
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
                <h3 className="text-2xl font-bold text-white mb-6">Лабиринт</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-5 gap-1 bg-gray-900 p-4 rounded-lg">
                    {renderGameBoard()}
                  </div>
                </div>
                <div className="mt-4 text-center text-gray-300">
                  <p>🚶 - Игрок | 🚪 - Выход | █ - Стена</p>
                  <p className="mt-2 text-yellow-400">Цель: Найти путь к выходу! Игрок останавливается у стен.</p>
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
                            <pre className="text-blue-400 font-mono">{piece.code}</pre>
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
                  <div className="mt-6 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                    <p className="text-blue-400 font-semibold text-center">
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