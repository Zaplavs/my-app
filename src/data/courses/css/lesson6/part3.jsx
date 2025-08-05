// src/data/courses/css/lesson6/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, Eye, CheckCircle, AlignLeft, Minus, Underline } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Стилизация текста</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Потренироваться применять CSS-свойства для управления внешним видом текста.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Выравнивание текста */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlignLeft className="w-5 h-5 text-green-400" />
          Задание 1: Выравнивание текста
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы для выравнивания текста по левому краю, по центру, по правому краю и по ширине.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.align-left</code> - выравнивание по левому краю</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.align-center</code> - выравнивание по центру</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.align-right</code> - выравнивание по правому краю</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.align-justify</code> - выравнивание по ширине</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.align-left { text-align: left; }
.align-center { text-align: center; }
.align-right { text-align: right; }
.align-justify { text-align: justify; }`}
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
            Я создал CSS-классы для выравнивания текста
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Интервалы и декор */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Minus className="w-5 h-5 text-purple-400" />
          Задание 2: Межстрочный интервал и декорирование
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы для управления межстрочным интервалом и декорированием текста.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.spaced-text</code> - увеличенный межстрочный интервал (1.8)</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.underlined</code> - подчеркнутый текст</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.no-decoration</code> - текст без декорации</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.spaced-letters</code> - увеличенное расстояние между буквами (2px)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.spaced-text { line-height: 1.8; }
.underlined { text-decoration: underline; }
.no-decoration { text-decoration: none; }
.spaced-letters { letter-spacing: 2px; }`}
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
            Я создал CSS-классы для интервалов и декора
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Тень текста */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Underline className="w-5 h-5 text-cyan-400" />
          Задание 3: Тень текста
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы для добавления тени к тексту.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.text-shadow-basic</code> - базовая тень (смещение 2px, размытие 3px, цвет серый)</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.text-shadow-glow</code> - светящийся эффект (без смещения, размытие 10px, цвет голубой)</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.text-shadow-double</code> - две тени (одна черная смещена вправо вниз, одна красная смещена влево вверх)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.text-shadow-basic { 
  text-shadow: 2px 2px 3px gray; 
}

.text-shadow-glow { 
  text-shadow: 0 0 10px cyan; 
}

.text-shadow-double { 
  text-shadow: 2px 2px 3px black, -2px -2px 3px red; 
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
            Я создал CSS-классы для теней текста
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
              Теперь вы потренировались применять CSS-свойства для стилизации текста. Эти навыки помогут вам создавать более выразительный и читаемый текст на ваших веб-страницах. В следующем уроке мы изучим свойства для работы с фонами элементов.
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