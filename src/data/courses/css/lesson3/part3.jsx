// src/data/courses/css/lesson3/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, Eye, CheckCircle, Target, Layers } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Пишем селекторы</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Потренироваться писать различные типы селекторов CSS.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Основные селекторы */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-green-400" />
          Задание 1: Напишите основные селекторы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Откройте текстовый редактор и создайте новый CSS-файл. В этом файле напишите селекторы для следующих случаев:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Требуется написать селекторы для:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Выбора <span className="font-medium">всех</span> элементов <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<h1>'}</code> на странице</li>
              <li>Выбора <span className="font-medium">всех</span> элементов с классом <code className="bg-gray-700 px-1.5 py-0.5 rounded">.note</code></li>
              <li>Выбора <span className="font-medium">элемента</span> с идентификатором <code className="bg-gray-700 px-1.5 py-0.5 rounded">#header</code></li>
              <li>Выбора <span className="font-medium">всех</span> элементов на странице (универсальный селектор)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Пример решения (один из вариантов):</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`h1 { /* Стили для всех h1 */ }

.note { /* Стили для всех элементов с классом note */ }

#header { /* Стили для элемента с id header */ }

* { /* Стили для всех элементов */ }`}
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
            Я написал все четыре основных селектора
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Группировка селекторов */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-purple-400" />
          Задание 2: Группировка селекторов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В том же CSS-файле напишите правило, которое применяет одинаковые стили сразу к нескольким элементам, используя группировку селекторов.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Требуется:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создать правило, которое одновременно стилизует <span className="font-medium">все</span> элементы <code className="bg-gray-700 px-1.5 py-0.5 rounded">h1</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">h2</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">h3</code></li>
              <li>Применить к ним любые два свойства, например, цвет текста и нижний отступ</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`h1, h2, h3 {
  color: #333;
  margin-bottom: 15px;
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
            Я написал правило с группировкой селекторов
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Продвинутые селекторы */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-cyan-400" />
          Задание 3: Продвинутые селекторы (введение)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Добавьте в ваш CSS-файл примеры двух продвинутых селекторов, рассмотренных в уроке.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Требуется:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Написать селектор потомка, который выберет все элементы <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<p>'}</code> внутри элементов с классом <code className="bg-gray-700 px-1.5 py-0.5 rounded">.article</code></li>
              <li>Написать селектор непосредственного потомка, который выберет все элементы <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<li>'}</code>, которые являются прямыми детьми элементов с классом <code className="bg-gray-700 px-1.5 py-0.5 rounded">.menu</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.article p {
  font-style: italic;
}

.menu > li {
  list-style: none;
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
            Я написал два продвинутых селектора
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
              Теперь вы потренировались писать различные типы селекторов CSS. Вы научились использовать селекторы по тегу, классу, ID, универсальный селектор, группировку селекторов и базовые вложенные селекторы.
              Эти навыки необходимы для точного выбора элементов при стилизации веб-страниц. В следующем уроке мы изучим основные свойства CSS для управления цветами, фонами и шрифтами.
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