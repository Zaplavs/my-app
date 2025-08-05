// src/data/courses/css/lesson2/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, Eye, CheckCircle } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Создайте и стилизуйте свою первую веб-страницу</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Применить полученные знания о CSS, создав HTML-файл и подключив к нему внешний файл стилей.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание файлов */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Создайте HTML и CSS файлы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте на своем компьютере два файла:
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              HTML-файл (index.html)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте текстовый редактор (например, Блокнот или VS Code).</li>
              <li>Создайте новый файл и вставьте в него следующий HTML-код:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Моя первая стилизованная страница</title>
  <!-- Подключите внешний CSS-файл здесь -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Добро пожаловать на мою страницу!</h1>
  <p class="highlight">Этот абзац будет выделен.</p>
  <p>Этот абзац останется обычным.</p>
  <div id="special-block">
    <p>Это особенный блок с уникальным стилем.</p>
  </div>
</body>
</html>`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Сохраните файл как <code className="bg-gray-700 px-1.5 py-0.5 rounded">index.html</code> в новой папке, например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">my-first-css-site</code>.</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              CSS-файл (styles.css)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>В той же папке создайте еще один файл.</li>
              <li>Назовите его <code className="bg-gray-700 px-1.5 py-0.5 rounded">styles.css</code>.</li>
              <li>Вставьте в него следующий CSS-код:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`/* Стили для всех абзацев */
p {
  font-family: Arial, sans-serif;
  margin-bottom: 15px;
}

/* Стили для элементов с классом "highlight" */
.highlight {
  background-color: yellow;
  padding: 10px;
  border-left: 4px solid orange;
}

/* Стили для элемента с id "special-block" */
#special-block {
  background-color: #f0f8ff;
  border: 2px dashed blue;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}

/* Стили для заголовка h1 */
h1 {
  color: #2c3e50;
  text-align: center;
  font-size: 28px;
}`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Сохраните файл.</li>
            </ul>
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
            Я создал оба файла и сохранил их в одной папке
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Просмотр в браузере */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-purple-400" />
          Задание 2: Откройте страницу в браузере
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теперь, когда у вас есть оба файла, пора увидеть результат!
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Откройте HTML-файл
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите в папку, где вы сохранили файлы.</li>
              <li>Дважды щелкните по файлу <code className="bg-gray-700 px-1.5 py-0.5 rounded">index.html</code>.</li>
              <li>Файл должен открыться в вашем браузере по умолчанию.</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Проверьте результат
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>На странице должен отображаться заголовок и три абзаца.</li>
              <li>Один абзац должен иметь желтый фон и оранжевую левую границу.</li>
              <li>Под абзацами должен быть блок с синей пунктирной рамкой и светло-голубым фоном.</li>
              <li>Заголовок должен быть темно-синего цвета и выровнен по центру.</li>
            </ul>
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
            Я открыл страницу в браузере и проверил результат
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Эксперименты */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-cyan-400" />
          Задание 3: Поэкспериментируйте со стилями
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теперь, когда вы видите результат, попробуйте изменить стили в файле <code className="bg-gray-700 px-1.5 py-0.5 rounded">styles.css</code>.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Попробуйте следующее:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Измените цвет фона для выделенного абзаца (класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">.highlight</code>).</li>
              <li>Увеличьте размер шрифта заголовка <code className="bg-gray-700 px-1.5 py-0.5 rounded">h1</code>.</li>
              <li>Добавьте свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">color</code> для абзацев, чтобы изменить цвет текста.</li>
              <li>Измените тип рамки у специального блока (например, на сплошную).</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> После каждого изменения в CSS-файле сохраняйте его и обновляйте страницу в браузере (клавиша F5), чтобы увидеть изменения.
              </p>
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
            Я поэкспериментировал со стилями и увидел изменения в браузере
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
              Теперь вы умеете создавать HTML-файлы, подключать к ним внешние CSS-файлы и стилизовать элементы с помощью различных селекторов. Это ключевой навык веб-разработки! В следующем уроке мы изучим основные свойства CSS для управления цветами, фонами и шрифтами.
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