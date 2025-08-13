// src/data/courses/javascript/lesson2/part1.jsx
import React from 'react';
import { Code, FileCode, Link, Eye, Zap, Globe } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 2: Подключение JavaScript к HTML</h1>
            <h2 className="text-xl font-semibold text-green-300 mb-3">Способы включения JS в веб-страницы и понятие DOM</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться подключать JavaScript к HTML-страницам различными способами и понять, что такое DOM.
            </p>
          </div>
        </div>
      </div>

      {/* Способы подключения JavaScript */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Link className="w-5 h-5 text-blue-400" />
          Способы подключения JavaScript
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Существует несколько способов подключения JavaScript к HTML-странице:
          </p>

          <div className="space-y-6 mt-6">
            {/* Внутренний скрипт */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 flex items-center gap-2 mb-3">
                <Code className="w-5 h-5" />
                1. Внутренний скрипт (inline)
              </h3>
              <p className="text-gray-300 mb-3">
                JavaScript код размещается непосредственно внутри тега <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">{`<script>`}</code> в HTML-документе.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
    <title>Мой сайт</title>
</head>
<body>
    <h1>Привет, мир!</h1>
    
    <script>
        alert('Привет из JavaScript!');
        console.log('Страница загружена');
    </script>
</body>
</html>`}
                </pre>
              </div>
            </div>

            {/* Внешний файл */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 flex items-center gap-2 mb-3">
                <FileCode className="w-5 h-5" />
                2. Внешний файл (.js)
              </h3>
              <p className="text-gray-300 mb-3">
                JavaScript код выносится в отдельный файл с расширением <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">.js</code> и подключается через атрибут <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">src</code>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400 mb-2">HTML файл (index.html):</div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
    <title>Мой сайт</title>
</head>
<body>
    <h1>Привет, мир!</h1>
    
    <script src="script.js"></script>
</body>
</html>`}
                    </pre>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">JS файл (script.js):</div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
{`alert('Привет из внешнего файла!');
console.log('Внешний скрипт загружен');`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Атрибуты HTML */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5" />
                3. Атрибуты HTML
              </h3>
              <p className="text-gray-300 mb-3">
                JavaScript код можно писать прямо в атрибутах HTML-элементов (не рекомендуется для больших скриптов).
              </p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`<button onclick="alert('Кнопка нажата!')">
    Нажми меня
</button>

<a href="#" onclick="console.log('Ссылка кликнута'); return false;">
    Кликабельная ссылка
</a>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Размещение тега script */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-yellow-400" />
          {`Где размещать тег <script>?`}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Место размещения тега <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">{`<script>`}</code> влияет на загрузку и выполнение страницы:
          </p>

          <div className="space-y-4 mt-4">
            {/* В head */}
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4" />
                {`В <head> (не рекомендуется без defer)`}
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Скрипт загружается и выполняется до загрузки страницы. Может замедлить отображение контента.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`<head>
    <script src="script.js"></script>
</head>`}
                </pre>
              </div>
            </div>

            {/* Перед </body> */}
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4" />
                {`Перед </body> (рекомендуется)`}
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Страница загружается полностью, затем выполняется скрипт. Нет блокировки отображения.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`<body>
    <h1>Контент страницы</h1>
    <!-- Другие элементы -->
    
    <script src="script.js"></script>
</body>`}
                </pre>
              </div>
            </div>

            {/* С defer */}
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4" />
                {`В <head> с атрибутом defer`}
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Скрипт загружается параллельно с HTML, но выполняется после полной загрузки страницы.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`<head>
    <script src="script.js" defer></script>
</head>`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Рекомендация:</span> Размещайте тег <code className="bg-gray-800 px-1 py-0.5 rounded">{`<script>`}</code> перед закрывающим тегом <code className="bg-gray-800 px-1 py-0.5 rounded">{`</body>`}</code> или используйте атрибут <code className="bg-gray-800 px-1 py-0.5 rounded">defer</code> для лучшей производительности.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое DOM */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-purple-400" />
          Что такое DOM?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">DOM (Document Object Model)</span> — это программный интерфейс для HTML и XML документов. Он представляет структуру документа в виде дерева объектов.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">🌳 Структура DOM</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Документ — корень дерева</li>
                <li>Элементы HTML — узлы дерева</li>
                <li>Атрибуты — свойства узлов</li>
                <li>Текст — листья дерева</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">⚡ Возможности DOM</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Поиск элементов на странице</li>
                <li>Изменение содержимого</li>
                <li>Добавление/удаление элементов</li>
                <li>Обработка событий</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <div className="text-sm text-gray-400 mb-2">Пример HTML и соответствующее DOM-дерево:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">HTML:</div>
                <pre className="text-xs text-gray-300 p-2 bg-gray-800 rounded">
{`<html>
  <head>
    <title>Мой сайт</title>
  </head>
  <body>
    <h1>Привет</h1>
    <p>Текст абзаца</p>
  </body>
</html>`}
                </pre>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">DOM-дерево:</div>
                <pre className="text-xs text-gray-300 p-2 bg-gray-800 rounded">
{`document
├── html
│   ├── head
│   │   └── title
│   │       └── "Мой сайт"
│   └── body
│       ├── h1
│       │   └── "Привет"
│       └── p
│           └── "Текст абзаца"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
            <p className="text-purple-300 text-sm">
              <span className="font-medium">💡 JavaScript взаимодействует с DOM:</span> через DOM JavaScript может читать, изменять и управлять содержимым веб-страницы.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как подключать JavaScript к HTML различными способами, где лучше размещать скрипты и что такое DOM. В следующем уроке мы напишем первые JavaScript-программы и научимся работать с DOM!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;