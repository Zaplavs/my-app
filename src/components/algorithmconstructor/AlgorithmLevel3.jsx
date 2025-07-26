// src/components/algorithmconstructor/AlgorithmLevel3.jsx
import React, { useState } from 'react';

export default function AlgorithmLevel3({ onBack }) {
  const [workspace, setWorkspace] = useState([]);
  const [result, setResult] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const puzzlePieces = [
    { id: 1, code: 'age = 18', type: 'assignment' },
    { id: 2, code: 'if age >= 18:', type: 'condition' },
    { id: 3, code: 'print("Совершеннолетний")', type: 'statement' },
    { id: 4, code: 'else:', type: 'condition' },
    { id: 5, code: 'print("Несовершеннолетний")', type: 'statement' },
    { id: 6, code: 'age = 15', type: 'assignment' }
  ];

  const correctSolution = ['age = 18', 'if age >= 18:', 'print("Совершеннолетний")', 'else:', 'print("Несовершеннолетний")'];

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
      setResult('Правильно! Программа выведет: Совершеннолетний');
    } else {
      setResult('Попробуйте еще раз. Нужно создать условие проверки возраста');
    }
  };

  const resetWorkspace = () => {
    setWorkspace([]);
    setResult('');
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Алгоритмический Конструктор - Уровень 3</h1>
            <button 
              onClick={onBack}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
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
                <h2 className="text-2xl font-bold text-white">Условия</h2>
                <p className="text-gray-300">Создайте программу, которая проверяет возраст и выводит соответствующее сообщение</p>
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
                    className="p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors border border-slate-600 hover:border-purple-500"
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

            {/* Workspace */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Рабочая область</h3>
                
                <div className="min-h-96 bg-slate-900/50 rounded-lg p-6 border-2 border-dashed border-slate-700">
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
                  <div className="mt-6 p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                    <p className="text-purple-400 font-semibold text-center">
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