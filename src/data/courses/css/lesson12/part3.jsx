// src/data/courses/css/lesson12/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, Eye, CheckCircle, Move, Smartphone } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Медиазапросы и адаптивность</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Потренироваться применять медиазапросы для создания адаптивных стилей.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Основные медиазапросы */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Move className="w-5 h-5 text-green-400" />
          Задание 1: Создание адаптивных стилей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы с медиазапросами для изменения стилей при разных размерах экрана:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.responsive-text</code> - базовый размер шрифта 16px, который становится 14px на экранах до 768px</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.adaptive-container</code> - ширина 100% на мобильных, 750px на планшетах и 1200px на десктопах</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.responsive-text {
  font-size: 16px;
}

@media (max-width: 767px) {
  .responsive-text {
    font-size: 14px;
  }
}

.adaptive-container {
  width: 100%;
}

@media (min-width: 768px) {
  .adaptive-container {
    width: 750px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .adaptive-container {
    width: 1200px;
  }
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
            Я создал CSS-классы с медиазапросами
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Сетка с адаптацией */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Smartphone className="w-5 h-5 text-purple-400" />
          Задание 2: Адаптивная сетка
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте адаптивную сетку с использованием Flexbox или Grid, которая изменяется в зависимости от размера экрана:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.responsive-grid</code> - контейнер с 1 колонкой на мобильных, 2 колонками на планшетах и 4 колонками на десктопах</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.grid-item</code> - элементы сетки с отступами, которые уменьшаются на мобильных устройствах</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.responsive-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
}

.grid-item {
  background-color: #3b82f6;
  padding: 20px;
  text-align: center;
  color: white;
  border-radius: 5px;
}

@media (max-width: 767px) {
  .grid-item {
    padding: 15px;
  }
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
            Я создал адаптивную сетку
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Mobile First подход */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Smartphone className="w-5 h-5 text-cyan-400" />
          Задание 3: Подход Mobile First
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте стили, используя подход Mobile First:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.mobile-first-element</code> - базовые стили для мобильных (цвет фона серый, отступы 10px)</li>
              <li>Дополнительные стили для планшетов (цвет фона синий, отступы 20px)</li>
              <li>Дополнительные стили для десктопов (цвет фона зеленый, отступы 30px, тень)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.mobile-first-element {
  background-color: #9ca3af; /* Серый для мобильных */
  padding: 10px;
}

@media (min-width: 768px) {
  .mobile-first-element {
    background-color: #3b82f6; /* Синий для планшетов */
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  .mobile-first-element {
    background-color: #10b981; /* Зеленый для десктопов */
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
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
            Я применил подход Mobile First
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
              Теперь вы потренировались применять медиазапросы для создания адаптивного дизайна. Эти навыки необходимы для создания современных веб-сайтов, которые хорошо выглядят на всех устройствах. В следующем уроке мы рассмотрим продвинутые техники адаптивного дизайна.
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