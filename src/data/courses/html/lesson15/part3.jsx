// src/data/courses/html/lesson15/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Quote, Hash, Server, BookOpen } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Цитаты, код и спецсимволы</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию тегов <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<blockquote>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<q>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<cite>'}</code> для <span className="font-medium">цитат</span>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<code>'}</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">{'<pre>'}</code> для <span className="font-medium">кода</span>, а также <span className="font-medium">HTML-сущностей</span> (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">&amp;lt;</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">&amp;gt;</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">&amp;amp;</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">&amp;copy;</code>) для отображения <span className="font-medium">специальных символов</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Статья с цитатами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент статьи "История Всемирной паутины". Страница должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> "История Всемирной паутины".</li>
          <li>Абзац <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с текстом, содержащим встроенную цитату <code className="bg-gray-700 px-1 rounded">{'<q>'}</code> знаменитой фразы Тима Бернерса-Ли.</li>
          <li>Блочную цитату <code className="bg-gray-700 px-1 rounded">{'<blockquote>'}</code> с описанием первой веб-страницы, включая источник <code className="bg-gray-700 px-1 rounded">{'<cite>'}</code>.</li>
          <li>Еще один абзац с текстом, содержащим встроенную цитату <code className="bg-gray-700 px-1 rounded">{'<q>'}</code> о значении HTML.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте теги <code className="bg-gray-700 px-1 rounded">{'<q>'}</code> для коротких цитат внутри текста.</li>
          <li>Используйте тег <code className="bg-gray-700 px-1 rounded">{'<blockquote>'}</code> для длинной цитаты.</li>
          <li>Укажите источник цитаты с помощью <code className="bg-gray-700 px-1 rounded">{'<cite>'}</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте структуру: <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> (с <code className="bg-gray-700 px-1 rounded">{'<q>'}</code>) → <code className="bg-gray-700 px-1 rounded">{'<blockquote>'}</code> (с <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<cite>'}</code>) → <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> (с <code className="bg-gray-700 px-1 rounded">{'<q>'}</code>). Пример цитаты: "Всемирная паутина - это пространство в информационном мире".</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Техническая документация
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент технической документации по использованию тега <code className="bg-gray-700 px-1 rounded">{'<pre>'}</code>. Документация должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> "Тег {'<pre>'} в HTML".</li>
          <li>Абзац <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с описанием назначения тега.</li>
          <li>Пример использования тега <code className="bg-gray-700 px-1 rounded">{'<pre>'}</code> с фрагментом HTML-кода.</li>
          <li>Абзац <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с пояснением, почему важно использовать HTML-сущности внутри кода.</li>
          <li>Пример кода с использованием HTML-сущностей (<code className="bg-gray-700 px-1 rounded">&amp;lt;</code>, <code className="bg-gray-700 px-1 rounded">&amp;gt;</code>).</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте тег <code className="bg-gray-700 px-1 rounded">{'<pre>'}</code> для отображения блоков кода.</li>
          <li>Используйте тег <code className="bg-gray-700 px-1 rounded">{'<code>'}</code> внутри <code className="bg-gray-700 px-1 rounded">{'<pre>'}</code> для семантической разметки.</li>
          <li>Замените специальные символы HTML-сущностями (<code className="bg-gray-700 px-1 rounded">&amp;lt;</code>, <code className="bg-gray-700 px-1 rounded">&amp;gt;</code>).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример структуры: <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<pre><code>'}</code> (с кодом и HTML-сущностями) → <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> (с пояснением) → <code className="bg-gray-700 px-1 rounded">{'<pre><code>'}</code> (с примером использования сущностей).</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Блог о веб-разработке
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент записи в блоге "Лучшие практики HTML". Запись должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> "Лучшие практики HTML".</li>
          <li>Абзац <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с датой публикации и автором.</li>
          <li>Раздел <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> "Семантические теги" с подзаголовком <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> и абзацем, содержащим встроенную цитату <code className="bg-gray-700 px-1 rounded">{'<q>'}</code> из спецификации HTML5.</li>
          <li>Раздел <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> "Специальные символы" с подзаголовком <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> и абзацем с примерами использования символов копирайта © и торговой марки ®.</li>
          <li>Раздел <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> "Примеры кода" с подзаголовком <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> и блоком кода <code className="bg-gray-700 px-1 rounded">{'<pre><code>'}</code> с примером HTML-разметки.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте тег <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> для логической группировки контента.</li>
          <li>Используйте тег <code className="bg-gray-700 px-1 rounded">{'<q>'}</code> для цитаты из спецификации.</li>
          <li>Используйте HTML-сущности <code className="bg-gray-700 px-1 rounded">&amp;copy;</code> и <code className="bg-gray-700 px-1 rounded">&amp;reg;</code> для отображения специальных символов.</li>
          <li>Используйте теги <code className="bg-gray-700 px-1 rounded">{'<pre>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<code>'}</code> для отображения примера кода.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Структура: <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> (дата и автор) → <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> (с <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<q>'}</code>) → <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> (с <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с символами) → <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> (с <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<pre><code>'}</code>).</p>
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
            <code>{`<!DOCTYPE html>
<html>
<head>
    <title>Пример кода</title>
</head>
<body>
    <h1>Изучаем HTML</h1>
    <p>Как сказал Тим Бернерс-Ли: "Всемирная паутина - это пространство в информационном мире"</p>
    <blockquote>
        <p>HTML - это язык гипертекстовой разметки, используемый для создания веб-страниц.</p>
        <footer>- WHATWG HTML Living Standard</footer>
    </blockquote>
    <p>Для отображения кода используйте теги <code> и <pre>:</p>
    <pre><code>function greet() {
    console.log("Привет, мир!");
}</code></pre>
    <p>Символы < и > необходимо заменять HTML-сущностями: < и >.</p>
    <p>© 2023 Мой сайт. Все права защищены.</p>
</body>
</html>`}</code>
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
            <p>Проверьте: использование тегов цитат, правильное отображение специальных символов, корректность HTML-разметки. Обратите внимание на теги <code className="bg-gray-700 px-1 rounded">{'<q>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<cite>'}</code>, HTML-сущности и структуру кода.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная страница с документацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Документация по HTML-сущностям" со следующими элементами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Заголовок страницы</span> "Документация по HTML-сущностям".</li>
          <li>
            <span className="font-medium">Вступление</span> (<code className="bg-gray-700 px-1 rounded">{'<p>'}</code>) с определением HTML-сущностей.
          </li>
          <li>
            <span className="font-medium">Раздел "Зарезервированные символы"</span> (<code className="bg-gray-700 px-1 rounded">{'<section>'}</code>):
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Подзаголовок <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> "Зарезервированные символы"</li>
              <li>Абзац <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с описанием</li>
              <li>Блочная цитата <code className="bg-gray-700 px-1 rounded">{'<blockquote>'}</code> с цитатой из спецификации о важности сущностей</li>
              <li>Список <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code> с тремя зарезервированными символами и их HTML-сущностями</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Раздел "Полезные символы"</span> (<code className="bg-gray-700 px-1 rounded">{'<section>'}</code>):
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Подзаголовок <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> "Полезные символы"</li>
              <li>Абзац <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с описанием</li>
              <li>Список <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code> с тремя полезными символами и их HTML-сущностями</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Раздел "Примеры использования"</span> (<code className="bg-gray-700 px-1 rounded">{'<section>'}</code>):
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Подзаголовок <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> "Примеры использования"</li>
              <li>Абзац <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с примером использования в тексте</li>
              <li>Блок кода <code className="bg-gray-700 px-1 rounded">{'<pre><code>'}</code> с примером HTML-разметки</li>
            </ul>
          </li>
          <li><span className="font-medium">Подвал</span> (<code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>) с информацией об авторском праве.</li>
        </ul>
        <p className="text-gray-300">
          <span className="font-medium">Требования:</span> Используйте все изученные теги (<code className="bg-gray-700 px-1 rounded">{'<blockquote>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<q>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<cite>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<code>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<pre>'}</code>), HTML-сущности (<code className="bg-gray-700 px-1 rounded">&amp;lt;</code>, <code className="bg-gray-700 px-1 rounded">&amp;gt;</code>, <code className="bg-gray-700 px-1 rounded">&amp;amp;</code>, <code className="bg-gray-700 px-1 rounded">&amp;copy;</code>), правильную структуру документа.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Quote className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования тегов для <span className="font-medium text-purple-300">цитат</span> (<code className="bg-gray-700 px-1 rounded">{'<blockquote>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<q>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<cite>'}</code>), <span className="font-medium text-cyan-300">кода</span> (<code className="bg-gray-700 px-1 rounded">{'<code>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<pre>'}</code>) и <span className="font-medium text-red-300">специальных символов</span> (HTML-сущности). Вы попрактиковались в создании <span className="font-medium text-green-300">семантически правильного</span> и <span className="font-medium text-blue-300">доступного</span> контента, что является важным навыком профессионального веб-разработчика. Правильное использование этих элементов делает ваш код <span className="font-medium text-yellow-300">понятнее</span> для разработчиков и <span className="font-medium text-orange-300">доступнее</span> для пользователей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;