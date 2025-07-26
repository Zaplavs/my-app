// src/components/algorithmconstructor/AlgorithmConstructorLevelsPage.jsx
import React from 'react';

// Импортируем все уровни
import AlgorithmLevel1 from './AlgorithmLevel1';
import AlgorithmLevel2 from './AlgorithmLevel2';
import AlgorithmLevel3 from './AlgorithmLevel3';
import AlgorithmLevel4 from './AlgorithmLevel4';
import AlgorithmLevel5 from './AlgorithmLevel5';
import AlgorithmLevel6 from './AlgorithmLevel6';
import AlgorithmLevel7 from './AlgorithmLevel7';
import AlgorithmLevel8 from './AlgorithmLevel8';
import AlgorithmLevel9 from './AlgorithmLevel9';
import AlgorithmLevel10 from './AlgorithmLevel10';

const levelsData = [
  {
    id: 1,
    component: AlgorithmLevel1,
    title: "Привет, Мир!",
    difficulty: "Очень легко",
    description: "Соберите простую программу вывода текста"
  },
  {
    id: 2,
    component: AlgorithmLevel2,
    title: "Переменные",
    difficulty: "Легко",
    description: "Создайте и используйте переменные"
  },
  {
    id: 3,
    component: AlgorithmLevel3,
    title: "Условия",
    difficulty: "Средне",
    description: "Создайте программу с условным оператором"
  },
  {
    id: 4,
    component: AlgorithmLevel4,
    title: "Циклы",
    difficulty: "Выше среднего",
    description: "Создайте программу с циклом"
  },
  {
    id: 5,
    component: AlgorithmLevel5,
    title: "Функции",
    difficulty: "Сложно",
    description: "Создайте и вызовите функцию"
  },
  {
    id: 6,
    component: AlgorithmLevel6,
    title: "Списки",
    difficulty: "Очень сложно",
    description: "Работа со списками данных"
  },
  {
    id: 7,
    component: AlgorithmLevel7,
    title: "Словари",
    difficulty: "Эксперт",
    description: "Работа со словарями"
  },
  {
    id: 8,
    component: AlgorithmLevel8,
    title: "Классы",
    difficulty: "Мастер",
    description: "Создание и использование классов"
  },
  {
    id: 9,
    component: AlgorithmLevel9,
    title: "Исключения",
    difficulty: "Легендарно",
    description: "Обработка ошибок в программе"
  },
  {
    id: 10,
    component: AlgorithmLevel10,
    title: "Финальный проект",
    difficulty: "Божественно",
    description: "Комплексная программа с несколькими компонентами"
  }
];

export default function AlgorithmConstructorLevelsPage({ onBack }) {
  const [selectedLevel, setSelectedLevel] = React.useState(null);

  if (selectedLevel) {
    const LevelComponent = levelsData.find(l => l.id === selectedLevel)?.component;
    return <LevelComponent onBack={() => setSelectedLevel(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Алгоритмический Конструктор - Выбор уровня</h1>
            <button 
              onClick={onBack}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
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
              Соберите алгоритмы из фрагментов кода
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{level.id}</span>
                  </div>
                  <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm">
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
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Выберите фрагменты</h4>
                <p className="text-gray-300">Перетаскивайте кодовые блоки в рабочую область</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Соберите алгоритм</h4>
                <p className="text-gray-300">Расположите фрагменты в правильном порядке</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Запустите код</h4>
                <p className="text-gray-300">Проверьте правильность собранного алгоритма</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}