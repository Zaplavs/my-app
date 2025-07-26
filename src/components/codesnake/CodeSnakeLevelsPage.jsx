// src/components/codesnake/CodeSnakeLevelsPage.jsx
import React from 'react';

// Импортируем все уровни
import CodeSnakeLevel1 from './CodeSnakeLevel1';
import CodeSnakeLevel2 from './CodeSnakeLevel2';
import CodeSnakeLevel3 from './CodeSnakeLevel3';
import CodeSnakeLevel4 from './CodeSnakeLevel4';
import CodeSnakeLevel5 from './CodeSnakeLevel5';
import CodeSnakeLevel6 from './CodeSnakeLevel6';
import CodeSnakeLevel7 from './CodeSnakeLevel7';
import CodeSnakeLevel8 from './CodeSnakeLevel8';
import CodeSnakeLevel9 from './CodeSnakeLevel9';
import CodeSnakeLevel10 from './CodeSnakeLevel10';

const levelsData = [
  {
    id: 1,
    component: CodeSnakeLevel1,
    title: "Первые шаги",
    difficulty: "Очень легко",
    description: "Соберите первую ягоду"
  },
  {
    id: 2,
    component: CodeSnakeLevel2,
    title: "Две ягоды",
    difficulty: "Легко",
    description: "Соберите две ягоды по очереди"
  },
  {
    id: 3,
    component: CodeSnakeLevel3,
    title: "Три ягоды",
    difficulty: "Средне",
    description: "Соберите три ягоды без столкновений"
  },
  {
    id: 4,
    component: CodeSnakeLevel4,
    title: "Лабиринт",
    difficulty: "Выше среднего",
    description: "Навигация через простой лабиринт"
  },
  {
    id: 5,
    component: CodeSnakeLevel5,
    title: "Сложный путь",
    difficulty: "Сложно",
    description: "Соберите ягоды в определенном порядке"
  },
  {
    id: 6,
    component: CodeSnakeLevel6,
    title: "Множество ягод",
    difficulty: "Очень сложно",
    description: "Соберите 5 ягод без ошибок"
  },
  {
    id: 7,
    component: CodeSnakeLevel7,
    title: "Избегание стен",
    difficulty: "Эксперт",
    description: "Сложный лабиринт с множеством стен"
  },
  {
    id: 8,
    component: CodeSnakeLevel8,
    title: "Мастер навигации",
    difficulty: "Мастер",
    description: "Соберите все ягоды в сложном лабиринте"
  },
  {
    id: 9,
    component: CodeSnakeLevel9,
    title: "Легендарный уровень",
    difficulty: "Легендарно",
    description: "Профессиональная навигация змейки"
  },
  {
    id: 10,
    component: CodeSnakeLevel10,
    title: "Финальный вызов",
    difficulty: "Божественно",
    description: "Самый сложный уровень игры"
  }
];

export default function CodeSnakeLevelsPage({ onBack }) {
  const [selectedLevel, setSelectedLevel] = React.useState(null);

  if (selectedLevel) {
    const LevelComponent = levelsData.find(l => l.id === selectedLevel)?.component;
    return <LevelComponent onBack={() => setSelectedLevel(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-green-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Змейка программиста - Выбор уровня</h1>
            <button 
              onClick={onBack}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
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
              Соберите все ягоды в правильном порядке
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{level.id}</span>
                  </div>
                  <span className="px-3 py-1 bg-green-600/30 text-green-200 rounded-full text-sm">
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
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Соберите ягоды</h4>
                <p className="text-gray-300">Собирайте ягоды в правильном порядке</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Избегайте стен</h4>
                <p className="text-gray-300">Не врезайтесь в стены и себя</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Следуйте коду</h4>
                <p className="text-gray-300">Соберите алгоритм для движения змейки</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}