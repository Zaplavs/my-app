// src/data/courses/css/lesson4/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, AlertTriangle , CheckCircle, Trophy, Layers  } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Приоритет стилей</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Потренироваться определять приоритет CSS-правил.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Определение приоритета по специфичности */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Trophy className="w-5 h-5 text-green-400" />
          Задание 1: Определите приоритет селекторов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Откройте текстовый редактор и для каждой пары селекторов определите, какой из них имеет более высокую специфичность:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Пары селекторов:</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">p</code> vs <code className="bg-gray-700 px-1.5 py-0.5 rounded">.text</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">#header</code> vs <code className="bg-gray-700 px-1.5 py-0.5 rounded">div</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.menu li</code> vs <code className="bg-gray-700 px-1.5 py-0.5 rounded">ul li</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.article .title</code> vs <code className="bg-gray-700 px-1.5 py-0.5 rounded">#main-title</code></li>
            </ol>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Пример ответа:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`1. .text (0-1-0) > p (0-0-1)
2. #header (1-0-0) > div (0-0-1)
3. .menu li (0-1-1) > ul li (0-0-2)
4. #main-title (1-0-0) > .article .title (0-2-0)`}
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
            Я определил приоритет для всех пар селекторов
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Порядок следования */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-purple-400" />
          Задание 2: Порядок следования правил
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Определите, какой цвет будет у текста в следующем примере:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">CSS-код:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`p {
  color: red;
}

p {
  color: blue;
}

p {
  color: green;
}`}
              </pre>
            </div>
            <p className="mt-3 text-gray-300">
              Какой цвет будет у текста абзаца и почему?
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Запишите ответ:</h3>
            <p className="text-gray-300 text-sm">
              Цвет текста будет <span className="font-medium">зеленый</span>, потому что это последнее правило в списке с одинаковой специфичностью.
            </p>
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
            Я определил цвет текста и объяснил причину
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: !important */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          Задание 3: Приоритет !important
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Определите, какой цвет будет у текста в этом примере с использованием !important:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2">CSS-код:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`#title {
  color: red;
}

.text {
  color: blue !important;
}

#title.text {
  color: green;
}`}
              </pre>
            </div>
            <p className="mt-3 text-gray-300">
              HTML: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<h1 id="title" class="text">Какой цвет у этого заголовка?</h1>'}</code>
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Запишите ответ:</h3>
            <p className="text-gray-300 text-sm">
              Цвет текста будет <span className="font-medium">синий</span>, потому что правило с !important имеет наивысший приоритет, несмотря на более высокую специфичность других селекторов.
            </p>
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
            Я определил цвет текста с !important и объяснил причину
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
              Теперь вы потренировались определять приоритет CSS-правил в различных ситуациях. Вы научились оценивать специфичность селекторов, учитывать порядок следования и понимать влияние !important.
              Эти навыки помогут вам писать более предсказуемый CSS и легче отлаживать стили. В следующем уроке мы изучим инструменты разработчика для отладки стилей.
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