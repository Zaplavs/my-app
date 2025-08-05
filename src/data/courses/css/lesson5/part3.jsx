// src/data/courses/css/lesson5/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, Eye, CheckCircle, Palette, Type } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Работа с цветами и шрифтами</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Потренироваться задавать цвета и управлять шрифтами в CSS.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Различные форматы цветов */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Palette className="w-5 h-5 text-green-400" />
          Задание 1: Использование разных форматов цветов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-файл и напишите правила, используя различные форматы задания цветов:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Требуется создать классы с разными цветами:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">.text-red</code> с красным цветом текста, используя HEX</li>
              <li>Класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">.text-green</code> с зеленым цветом текста, используя RGB</li>
              <li>Класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">.text-blue</code> с синим цветом текста, используя HSL</li>
              <li>Класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">.bg-yellow</code> с желтым фоном, используя предопределенное название цвета</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.text-red {
  color: #ff0000; /* HEX */
}

.text-green {
  color: rgb(0, 255, 0); /* RGB */
}

.text-blue {
  color: hsl(240, 100%, 50%); /* HSL */
}

.bg-yellow {
  background-color: yellow; /* Название */
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
            Я создал CSS-классы с разными форматами цветов
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Свойства шрифтов */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-purple-400" />
          Задание 2: Настройка свойств шрифтов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Добавьте в ваш CSS-файл правила для управления шрифтами:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Требуется создать классы со свойствами шрифтов:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">.heading</code> с крупным размером шрифта (24px), жирным начертанием и семейством шрифтов Arial, sans-serif</li>
              <li>Класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">.content</code> с обычным размером шрифта (16px), нормальным начертанием и семейством шрифтов Times New Roman, serif</li>
              <li>Класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">.highlight</code> с цветом текста оранжевого оттенка (выберите любой формат)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.heading {
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  font-weight: bold;
}

.content {
  font-family: 'Times New Roman', serif;
  font-size: 16px;
  font-weight: normal;
}

.highlight {
  color: #ffa500; /* HEX для оранжевого */
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
            Я создал CSS-классы со свойствами шрифтов
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Комбинирование свойств */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          Задание 3: Комбинирование цветов и шрифтов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте комплексное правило, объединяющее несколько свойств цвета и шрифта:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Требуется создать класс:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">.card-title</code> с синим цветом текста, размером шрифта 20px, жирным начертанием и фоном светло-голубого цвета</li>
              <li>Класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">.card-content</code> с темно-серым цветом текста, размером шрифта 14px и семейством шрифтов Arial, sans-serif</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.card-title {
  color: #0000ff;        /* Синий цвет текста */
  font-size: 20px;       /* Размер шрифта */
  font-weight: bold;     /* Жирное начертание */
  background-color: #e6f3ff; /* Светло-голубой фон */
  padding: 10px;         /* Добавим отступы для лучшего вида */
}

.card-content {
  color: #333333;        /* Темно-серый цвет текста */
  font-size: 14px;       /* Размер шрифта */
  font-family: 'Arial', sans-serif; /* Семейство шрифтов */
  line-height: 1.5;      /* Добавим межстрочный интервал */
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
            Я создал комплексные CSS-классы с цветами и шрифтами
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
              Теперь вы потренировались задавать цвета различными способами и управлять свойствами шрифтов в CSS. Эти навыки позволят вам создавать визуально привлекательные веб-страницы. В следующем уроке мы изучим свойства фона и работу с изображениями.
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