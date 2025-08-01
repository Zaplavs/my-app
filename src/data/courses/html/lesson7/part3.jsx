// src/data/courses/html/lesson7/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Link, ExternalLink, Anchor, Globe, File } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Гиперссылки и навигация в HTML</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию гиперссылок с помощью тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<a>'}</code> и его атрибутов (<code className="bg-gray-700 px-1 rounded">href</code>, <code className="bg-gray-700 px-1 rounded">target</code>, <code className="bg-gray-700 px-1 rounded">rel</code>, якоря).
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Навигационное меню сайта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент навигационного меню для сайта. Меню должно включать ссылки на следующие страницы:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>"Главная" — ведет на <code className="bg-gray-700 px-1 rounded">index.html</code> в той же папке.</li>
          <li>"О нас" — ведет на <code className="bg-gray-700 px-1 rounded">about.html</code> в той же папке.</li>
          <li>"Блог" — ведет на <code className="bg-gray-700 px-1 rounded">blog/list.html</code> (папка <code className="bg-gray-700 px-1 rounded">blog</code>, файл <code className="bg-gray-700 px-1 rounded">list.html</code>).</li>
          <li>"Контакты" — ведет на <code className="bg-gray-700 px-1 rounded">contact.html</code> в той же папке.</li>
        </ul>
        <p className="text-gray-300">
          Используйте <span className="font-medium">относительные пути</span> для всех ссылок.
        </p>
        <details className="group mt-3">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте тег <code className="bg-gray-700 px-1 rounded">{'<nav>'}</code> для обертки меню и список <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code>/<code className="bg-gray-700 px-1 rounded">{'<li>'}</code>. Для ссылок используйте тег <code className="bg-gray-700 px-1 rounded">{'<a>'}</code> с атрибутом <code className="bg-gray-700 px-1 rounded">href</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Полезные внешние ресурсы
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент "Полезные ссылки". В этом фрагменте создайте список из 3-4 внешних ссылок на популярные ресурсы (например, Wikipedia, MDN Web Docs, GitHub). Для каждой ссылки:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <span className="font-medium">абсолютный путь</span> (полный URL).</li>
          <li>Ссылка должна открываться в <span className="font-medium">новой вкладке</span>.</li>
          <li>Добавьте атрибуты <code className="bg-gray-700 px-1 rounded">rel="noopener noreferrer"</code> для безопасности.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример URL: <code className="bg-gray-700 px-1 rounded">https://ru.wikipedia.org</code>. Используйте атрибуты <code className="bg-gray-700 px-1 rounded">target="_blank"</code> и <code className="bg-gray-700 px-1 rounded">rel="noopener noreferrer"</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Якорное меню для длинной страницы
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент, представляющий собой оглавление для длинной статьи. Статья состоит из следующих разделов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Введение</li>
          <li>История</li>
          <li>Основные принципы</li>
          <li>Заключение</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Задачи:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте список ссылок (оглавление) в верхней части фрагмента.</li>
          <li>Ниже создайте заголовки <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> для каждого раздела и присвойте им уникальные <code className="bg-gray-700 px-1 rounded">id</code>.</li>
          <li>Сделайте так, чтобы ссылки в оглавлении вели к соответствующим заголовкам на той же странице (якорные ссылки).</li>
          <li>Добавьте в конец оглавления ссылку "Наверх".</li>
        </ol>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">#id</code> в <code className="bg-gray-700 px-1 rounded">href</code> для ссылок и атрибут <code className="bg-gray-700 px-1 rounded">id</code> для заголовков. Пример: <code className="bg-gray-700 px-1 rounded">{'<a href="#history">История</a>'}</code> -> <code className="bg-gray-700 px-1 rounded">{'<h2 id="history">История</h2>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Найди и исправь ошибки
        </h3>
        <p className="text-gray-300 mb-3">
          Найдите и исправьте все ошибки в приведенном ниже HTML-коде. Объясните, почему это ошибки.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm overflow-x-auto">
            <code>{`<a href="https:\\\\www.google.com" target="_blank">Ссылка на Google</a>
<a src="image.jpg" alt="Картинка">Ссылка на изображение</a>
<a href="#top">Наверх</a>
<a href="https://www.example.com" target="_blank">Внешняя ссылка</a>`}</code>
          </pre>
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Проверьте правильность URL, названий атрибутов для ссылок и изображений, необходимость атрибутов <code className="bg-gray-700 px-1 rounded">rel</code> при <code className="bg-gray-700 px-1 rounded">target="_blank"</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная страница с навигацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Добро пожаловать на сайт", которая включает:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Логотип</span> (изображение <code className="bg-gray-700 px-1 rounded">logo.png</code> в папке <code className="bg-gray-700 px-1 rounded">images</code>) в виде ссылки на <code className="bg-gray-700 px-1 rounded">index.html</code>.</li>
          <li><span className="font-medium">Навигационное меню</span> с ссылками: "Главная" (<code className="bg-gray-700 px-1 rounded">index.html</code>), "Услуги" (<code className="bg-gray-700 px-1 rounded">services.html</code>), "Портфолио" (<code className="bg-gray-700 px-1 rounded">portfolio/index.html</code>).</li>
          <li><span className="font-medium">Основной контент</span> с заголовком "Добро пожаловать!" и абзацем текста.</li>
          <li><span className="font-medium">Ссылку</span> "Читать далее..." ведущую на <code className="bg-gray-700 px-1 rounded">about.html</code>.</li>
          <li><span className="font-medium">Ссылку</span> на внешний ресурс "Официальный сайт HTML" (<code className="bg-gray-700 px-1 rounded">https://html.spec.whatwg.org/</code>), открывающуюся в новой вкладке с <code className="bg-gray-700 px-1 rounded">rel="noopener noreferrer"</code>.</li>
          <li><span className="font-medium">Якорное меню</span> внутри основного контента с двумя пунктами, ведущими к подзаголовкам на этой же странице.</li>
          <li><span className="font-medium">Ссылку "Наверх"</span> внизу страницы.</li>
        </ul>
        <p className="text-gray-300">
          Используйте правильные пути, атрибуты и структуру HTML.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Code className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания гиперссылок в HTML. Вы попрактиковались в использовании различных типов путей (относительные, абсолютные), атрибутов (<code className="bg-gray-700 px-1 rounded">target</code>, <code className="bg-gray-700 px-1 rounded">rel</code>), а также создании якорных ссылок для навигации внутри страницы. Ссылки — это фундаментальная часть веба, и умение их правильно использовать — ключевой навык веб-разработчика.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;