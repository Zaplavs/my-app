// src/components/codemaze/CodeMazeLevelsPage.jsx
import React from 'react';

// Импортируем все уровни
import CodeMazeLevel1 from './CodeMazeLevel1';
import CodeMazeLevel2 from './CodeMazeLevel2';
import CodeMazeLevel3 from './CodeMazeLevel3';
import CodeMazeLevel4 from './CodeMazeLevel4';
import CodeMazeLevel5 from './CodeMazeLevel5';
import CodeMazeLevel6 from './CodeMazeLevel6';
import CodeMazeLevel7 from './CodeMazeLevel7';
import CodeMazeLevel8 from './CodeMazeLevel8';
import CodeMazeLevel9 from './CodeMazeLevel9';
import CodeMazeLevel10 from './CodeMazeLevel10';

const levelsData = [
  {
    id: 1,
    component: CodeMazeLevel1,
    title: "Первый путь",
    difficulty: "Очень легко",
    description: "Найдите простой путь к выходу"
  },
  {
    id: 2,
    component: CodeMazeLevel2,
    title: "Два поворота",
    difficulty: "Легко",
    description: "Путь с двумя поворотами"
  },
  {
    id: 3,
    component: CodeMazeLevel3,
    title: "Три направления",
    difficulty: "Средне",
    description: "Выберите правильное направление среди трех"
  },
  {
    id: 4,
    component: CodeMazeLevel4,
    title: "Сложный выбор",
    difficulty: "Выше среднего",
    description: "Несколько развилок и тупиков"
  },
  {
    id: 5,
    component: CodeMazeLevel5,
    title: "Логические ворота",
    difficulty: "Сложно",
    description: "Используйте логические условия"
  },
  {
    id: 6,
    component: CodeMazeLevel6,
    title: "Циклический путь",
    difficulty: "Очень сложно",
    description: "Используйте циклы для навигации"
  },
  {
    id: 7,
    component: CodeMazeLevel7,
    title: "Функциональный лабиринт",
    difficulty: "Эксперт",
    description: "Создайте функции для навигации"
  },
  {
    id: 8,
    component: CodeMazeLevel8,
    title: "Мастер лабиринтов",
    difficulty: "Мастер",
    description: "Сложный лабиринт с множеством условий"
  },
  {
    id: 9,
    component: CodeMazeLevel9,
    title: "Легендарный путь",
    difficulty: "Легендарно",
    description: "Самый сложный лабиринт"
  },
  {
    id: 10,
    component: CodeMazeLevel10,
    title: "Финальный вызов",
    difficulty: "Божественно",
    description: "Последний и самый сложный лабиринт"
  }
];

export default function CodeMazeLevelsPage({ onBack }) {
  const [selectedLevel, setSelectedLevel] = React.useState(null);

  if (selectedLevel) {
    const LevelComponent = levelsData.find(l => l.id === selectedLevel)?.component;
    return <LevelComponent onBack={() => setSelectedLevel(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Лабиринт кода - Выбор уровня</h1>
            <button 
              onClick={onBack}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Назад к играм
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Выберите уровень сложности</h2>
            <p className="text-xl text-gray-300">
              Найдите путь к выходу через пазлы кода
            </p>
          </div>

          {/* Уровни */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levelsData.map((level) => (
              <div 
                key={level.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedLevel(level.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{level.id}</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm">
                    {level.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{level.title}</h3>
                <p className="text-gray-300 mb-3">{level.description}</p>
              </div>
            ))}
          </div>

          {/* Game Rules */}
          <div className="mt-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Как играть</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Соберите пазлы</h4>
                <p className="text-gray-300">Выбирайте правильные фрагменты кода</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Постройте путь</h4>
                <p className="text-gray-300">Создайте алгоритм навигации</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Найдите выход</h4>
                <p className="text-gray-300">Достигните цели лабиринта</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}