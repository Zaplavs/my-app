// src/data/courses/css/lesson13/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, Eye, CheckCircle, Ruler, Square } from 'lucide-react';

const Part3 = () => {
  const [completedTasks, setCompletedTasks] = useState({
    task1: false,
    task2: false,
    task3: false
  });

  const handleTaskComplete = (task) => {
    setCompletedTasks(prev => ({
      ...prev,
      [task]: !prev[task]
    }));
  };

  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Monitor className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Единицы измерения CSS</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Потренироваться применять различные единицы измерения CSS в реальных сценариях.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Работа с px и % */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Square className="w-5 h-5 text-green-400" />
          Задание 1: Абсолютные и относительные размеры
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы, демонстрирующие использование абсолютных и относительных единиц измерения:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.fixed-box</code> - элемент с фиксированной шириной 200px, высотой 150px и границей 2px</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.responsive-box</code> - элемент, ширина которого составляет 80% от ширины родителя</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.fixed-box {
  width: 200px;
  height: 150px;
  border: 2px solid #3b82f6;
}

.responsive-box {
  width: 80%;
  height: 100px;
  background-color: #10b981;
}`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task1"
            checked={completedTasks.task1}
            onChange={() => handleTaskComplete('task1')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task1" className="ml-2 text-gray-300">
            Я создал CSS-классы с px и %
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Работа с em и rem */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Ruler className="w-5 h-5 text-purple-400" />
          Задание 2: Относительные единицы шрифта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы для демонстрации различий между em и rem:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.rem-example</code> - элемент с размером шрифта 1.5rem и отступами 1rem</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.em-example</code> - элемент с размером шрифта 1.5em и отступами 1em</li>
              <li>Установите базовый размер шрифта для html в 62.5% для удобства расчетов</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`html {
  font-size: 62.5%; /* 1rem = 10px */
}

.rem-example {
  font-size: 1.5rem; /* 15px */
  padding: 1rem;      /* 10px */
  margin: 1rem 0;
  background-color: #8b5cf6;
}

.em-example {
  font-size: 1.5em;  /* Относительно родителя */
  padding: 1em;      /* Относительно текущего шрифта */
  margin: 1em 0;
  background-color: #ec4899;
}`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task2"
            checked={completedTasks.task2}
            onChange={() => handleTaskComplete('task2')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task2" className="ml-2 text-gray-300">
            Я создал CSS-классы с em и rem
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Viewport единицы */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Monitor className="w-5 h-5 text-cyan-400" />
          Задание 3: Единицы viewport
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы для демонстрации использования vw и vh:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.full-height</code> - элемент, высота которого составляет 50vh (50% высоты окна просмотра)</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.responsive-text</code> - элемент с размером шрифта 4vw (4% ширины окна просмотра)</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.full-width</code> - элемент, ширина которого составляет 100vw</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.full-height {
  height: 50vh;
  background-color: #0ea5e9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.responsive-text {
  font-size: 4vw;
  text-align: center;
  margin: 2rem 0;
  color: #f97316;
}

.full-width {
  width: 100vw;
  height: 50px;
  background-color: #84cc16;
}`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task3"
            checked={completedTasks.task3}
            onChange={() => handleTaskComplete('task3')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task3" className="ml-2 text-gray-300">
            Я создал CSS-классы с vw и vh
          </label>
          {completedTasks.task3 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы потренировались применять различные единицы измерения CSS. Эти навыки необходимы для создания гибких, доступных и адаптивных веб-дизайнов. В следующем уроке мы рассмотрим продвинутые техники работы с единицами измерения.
            </p>
            {Object.values(completedTasks).every(task => task) && (
              <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-green-300">Все задания выполнены! Вы готовы к следующему уроку.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;