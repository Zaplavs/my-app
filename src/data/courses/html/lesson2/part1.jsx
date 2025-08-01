// src/data/courses/html/lesson2/part1.jsx
import React from 'react';
import { FileText, Tag, Code, Braces } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📘 Урок 2: Что такое HTML?</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Язык разметки для создания веб-страниц</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое HTML, его роль в вебе, а также разобраться с основными понятиями: теги, элементы и атрибуты.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое HTML? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Что такое HTML?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-bold text-green-300">HTML (HyperText Markup Language)</span> — это стандартный <span className="font-medium">язык разметки</span> для создания веб-страниц. Он является основой, на которой строится весь контент Всемирной паутины.
          </p>
          <p>
            Представьте себе HTML как <span className="font-medium">каркас</span> или <span className="font-medium">скелет</span> веб-страницы. Он определяет, <span className="font-medium">что</span> находится на странице (заголовок, абзац, изображение, список) и <span className="font-medium">где</span> это расположено, но не отвечает за визуальное оформление (цвета, шрифты) — это задача CSS.
          </p>
          <p>
            <span className="font-medium">HyperText</span> означает, что страницы могут содержать <span className="font-medium">гиперссылки</span> — связи с другими страницами. <span className="font-medium">Markup Language</span> — это "язык разметки", то есть способ "помечать" части текста, придавая им определённое значение.
          </p>
        </div>
      </div>

      {/* Основные понятия: Теги */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-purple-400" />
          Основные понятия: Теги
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-bold text-purple-300">Тег (Tag)</span> — это специальная команда в угловых скобках <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">{'<>'}</code>, которая указывает браузеру, как отображать содержимое страницы.
          </p>
          <p>
            Теги обычно существуют <span className="font-medium">парами</span>:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <span className="font-medium">Открывающий тег</span> — <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<название>'}</code>. Он указывает начало элемента.
            </li>
            <li>
              <span className="font-medium">Закрывающий тег</span> — <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">{'</название>'}</code>. Он указывает конец элемента. Обратите внимание на <span className="font-medium">косую черту</span> <code className="bg-gray-700 px-1 rounded">/</code>.
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Примеры открывающих тегов:</p>
              <pre className="text-green-400 text-sm"><code>{`<p>\n<h1>\n<div>`}</code></pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Примеры закрывающих тегов:</p>
              <pre className="text-red-400 text-sm"><code>{`</p>\n</h1>\n</div>`}</code></pre>
            </div>
          </div>
          <p className="mt-4">
            <span className="font-medium">Самозакрывающиеся теги:</span> Некоторые теги не нуждаются в закрывающем теге, так как они не окружают никакой текст или другой контент. Примеры: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">{'<br>'}</code> (перевод строки), <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">{'<img>'}</code> (изображение). В современном HTML5 их можно писать без <code className="bg-gray-700 px-1 rounded">/</code> в конце, хотя <code className="bg-gray-700 px-1 rounded">{'<br />'}</code> тоже допустимо.
          </p>
        </div>
      </div>

      {/* Основные понятия: Элементы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Braces className="w-5 h-5 text-cyan-400" />
          Основные понятия: Элементы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-bold text-cyan-300">Элемент (Element)</span> — это <span className="font-medium">всё</span>, что находится от открывающего тега до закрывающего, включая сами теги и содержимое между ними.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg my-4">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-элемента:</p>
            <pre className="text-yellow-300 text-sm"><code>{`<p>Это абзац текста.</p>`}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<p>'}</code> — это <span className="font-medium">открывающий тег</span>.</li>
            <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">{'</p>'}</code> — это <span className="font-medium">закрывающий тег</span>.</li>
            <li><code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">Это абзац текста.</code> — это <span className="font-medium">содержимое</span> элемента.</li>
            <li>Всё вместе — это <span className="font-medium">HTML-элемент</span> <code className="bg-gray-700 px-1 rounded">{'<p>'}</code>.</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Запомните:</span>
              <span>
                Тег — это <span className="font-mono">команда</span> (<code className="bg-gray-700 px-1 rounded">{'<p>'}</code>). Элемент — это <span className="font-mono">тег + содержимое + закрывающий тег</span>.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Основные понятия: Атрибуты */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-pink-400" />
          Основные понятия: Атрибуты
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-bold text-pink-300">Атрибут (Attribute)</span> — это дополнительная информация о теге, которая размещается внутри <span className="font-medium">открывающего</span> тега. Атрибуты задаются в виде <span className="font-mono">имя="значение"</span>.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg my-4">
            <p className="text-sm text-gray-400 mb-2">Пример тега с атрибутами:</p>
            <pre className="text-yellow-300 text-sm"><code>{`<a href="https://www.example.com" target="_blank">Ссылка</a>`}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">href</code> — это <span className="font-medium">имя</span> атрибута. Он определяет адрес ссылки.
            </li>
            <li>
              <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">"https://www.example.com"</code> — это <span className="font-medium">значение</span> атрибута.
            </li>
            <li>
              <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">target="_blank"</code> — это другой атрибут, который указывает браузеру открыть ссылку в новой вкладке.
            </li>
          </ul>
          <p className="mt-3">
            У одного тега может быть <span className="font-medium">несколько</span> атрибутов. Они разделяются пробелами.
          </p>
        </div>
      </div>

      {/* Пример минимального HTML-документа */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-orange-400" />
          Пример минимального HTML-документа
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Любой HTML-документ начинается с определённой структуры. Вот базовый шаблон, который должен быть у <span className="font-medium">каждой</span> HTML-страницы:
          </p>
        </div>
        <div className="bg-gray-900 p-5 rounded-lg mb-4 overflow-x-auto">
          <pre className="text-green-400 text-sm">
            <code>{`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Привет, мир!</h1>
    <p>Это мой первый HTML-документ.</p>
  </body>
</html>`}</code>
          </pre>
        </div>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>Разберём этот код по частям:</p>
        </div>
        <ul className="space-y-3 mt-4">
          <li>
            <span className="font-medium text-blue-300">{'<!DOCTYPE html>'}</span> — объявление типа документа. Сообщает браузеру, что это HTML5.
          </li>
          <li>
            <span className="font-medium text-green-300">{'<html lang="ru"> ... </html>'}</span> — корневой элемент всего документа. Атрибут <code className="bg-gray-700 px-1 rounded">lang="ru"</code> указывает, что язык страницы — русский.
          </li>
          <li>
            <span className="font-medium text-purple-300">{'<head> ... </head>'}</span> — содержит метаинформацию о документе (служебные данные), которая не отображается на странице.
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><code className="bg-gray-700 px-1 rounded">{'<meta charset="UTF-8">'}</code> — задаёт кодировку документа.</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<meta name="viewport" ...>'}</code> — настраивает отображение на мобильных устройствах.</li>
              <li><code className="bg-gray-700 px-1 rounded">{'<title> ... </title>'}</code> — задаёт заголовок страницы, который отображается во вкладке браузера.</li>
            </ul>
          </li>
          <li>
            <span className="font-medium text-orange-300">{'<body> ... </body>'}</span> — содержит весь контент, который будет отображаться в окне браузера: текст, изображения, ссылки и т.д.
          </li>
        </ul>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <FileText className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое HTML, а также разбираетесь в ключевых понятиях: <span className="font-medium text-green-300">теги</span>, <span className="font-medium text-cyan-300">элементы</span> и <span className="font-medium text-pink-300">атрибуты</span>. Вы также увидели структуру минимального HTML-документа, с которой вы будете сталкиваться постоянно. В следующем уроке мы начнём писать свой первый HTML-код!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;