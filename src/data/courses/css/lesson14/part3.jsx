// src/data/courses/css/lesson14/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, Eye, CheckCircle, MousePointer, Focus } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Псевдоклассы и псевдоэлементы</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Потренироваться применять псевдоклассы и псевдоэлементы CSS для создания интерактивных и декоративных эффектов.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Интерактивные состояния */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MousePointer className="w-5 h-5 text-green-400" />
          Задание 1: Состояния элементов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы для демонстрации различных состояний интерактивных элементов:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.interactive-button</code> - кнопка с базовыми стилями</li>
              <li>Стили для <code className="bg-gray-700 px-1.5 py-0.5 rounded">:hover</code> - изменение цвета фона и добавление тени</li>
              <li>Стили для <code className="bg-gray-700 px-1.5 py-0.5 rounded">:active</code> - уменьшение масштаба на 5%</li>
              <li>Стили для <code className="bg-gray-700 px-1.5 py-0.5 rounded">:focus</code> - добавление outline</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.interactive-button {
  padding: 10px 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.interactive-button:hover {
  background-color: #2563eb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.interactive-button:active {
  transform: scale(0.95);
}

.interactive-button:focus {
  outline: 2px solid #60a5fa;
  outline-offset: 2px;
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
            Я создал CSS-классы для интерактивных состояний
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Псевдоэлементы ::before и ::after */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          Задание 2: Псевдоэлементы ::before и ::after
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы для демонстрации использования псевдоэлементов:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.quote</code> - базовый класс для цитаты</li>
              <li>Псевдоэлемент <code className="bg-gray-700 px-1.5 py-0.5 rounded">::before</code> с открывающей кавычкой</li>
              <li>Псевдоэлемент <code className="bg-gray-700 px-1.5 py-0.5 rounded">::after</code> с закрывающей кавычкой</li>
              <li>Стили для кавычек: увеличенный размер, серый цвет</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.quote {
  position: relative;
  padding: 20px;
  font-style: italic;
  color: #d1d5db;
}

.quote::before {
  content: """;
  font-size: 2em;
  color: #9ca3af;
  position: absolute;
  left: 0;
  top: 0;
}

.quote::after {
  content: """;
  font-size: 2em;
  color: #9ca3af;
  position: absolute;
  right: 0;
  bottom: 0;
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
            Я создал CSS-классы с псевдоэлементами
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Позиционные псевдоклассы */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Focus className="w-5 h-5 text-cyan-400" />
          Задание 3: Позиционные псевдоклассы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы для стилизации элементов в зависимости от их позиции:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.item-list</code> - список элементов</li>
              <li>Стили для <code className="bg-gray-700 px-1.5 py-0.5 rounded">:first-child</code> - жирный шрифт и верхняя граница</li>
              <li>Стили для <code className="bg-gray-700 px-1.5 py-0.5 rounded">:last-child</code> - нижняя граница</li>
              <li>Стили для <code className="bg-gray-700 px-1.5 py-0.5 rounded">:nth-child(2n)</code> - светло-серый фон (четные элементы)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.item-list {
  list-style: none;
  padding: 0;
}

.item-list li {
  padding: 10px;
  border-bottom: 1px solid #374151;
}

.item-list li:first-child {
  font-weight: bold;
  border-top: 2px solid #3b82f6;
}

.item-list li:last-child {
  border-bottom: 2px solid #3b82f6;
}

.item-list li:nth-child(2n) {
  background-color: #374151;
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
            Я создал CSS-классы с позиционными псевдоклассами
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
              Теперь вы потренировались применять псевдоклассы и псевдоэлементы CSS. Эти навыки необходимы для создания интерактивных и декоративных эффектов без изменения HTML-разметки. В следующем уроке мы рассмотрим продвинутые техники работы с селекторами.
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