// src/data/courses/html/lesson4/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Hash, Pilcrow, CornerDownLeft, Minus } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Заголовки и абзацы в HTML</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию заголовков, абзацев и вспомогательных тегов, создав несколько примеров разметки.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Структура статьи
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ, представляющий собой статью "Моё хобби". Статья должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок статьи (<code className="bg-gray-700 px-1 rounded">{'<h1>'}</code>).</li>
          <li>Раздел "Почему мне это нравится" с заголовком (<code className="bg-gray-700 px-1 rounded">{'<h2>'}</code>) и 2-3 абзацами (<code className="bg-gray-700 px-1 rounded">{'<p>'}</code>).</li>
          <li>Раздел "Что я уже умею" с заголовком (<code className="bg-gray-700 px-1 rounded">{'<h2>'}</code>) и 1-2 абзацами.</li>
          <li>Раздел "Планы на будущее" с заголовком (<code className="bg-gray-700 px-1 rounded">{'<h3>'}</code>) и абзацем.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Не забудьте про правильную структуру документа: <code className="bg-gray-700 px-1 rounded">{'<!DOCTYPE html>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<html>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> (с <code className="bg-gray-700 px-1 rounded">{'<title>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<meta>'}</code>), <code className="bg-gray-700 px-1 rounded">{'<body>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Адрес и контактная информация
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент, содержащий контактную информацию. Используйте абзацы и тег <code className="bg-gray-700 px-1 rounded">{'<br>'}</code> для форматирования адреса в несколько строк без создания новых абзацев.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <p className="text-gray-300 text-sm">
            Пример результата:
          </p>
          <div className="mt-2 p-3 bg-gray-800 rounded">
            <p className="text-gray-300 text-sm">
              Иван Иванов<br />
              ул. Ленина, д. 10, кв. 5<br />
              г. Москва, 123456<br />
              Телефон: +7 (123) 456-78-90
            </p>
          </div>
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте один тег <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> и несколько тегов <code className="bg-gray-700 px-1 rounded">{'<br>'}</code> внутри него.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Разделы новостной статьи
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен текст короткой новостной статьи. Разметьте его с помощью HTML, используя подходящие заголовки, абзацы и горизонтальные линии (<code className="bg-gray-700 px-1 rounded">{'<hr>'}</code>) для разделения логических частей.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-gray-300 text-sm">
            <code>{`Городской парк получил международную награду

Главный парк города был признан лучшим объектом благоустройства в Европе. Награда вручена за проект реконструкции, завершившийся в прошлом году.

Проект включал создание новых зон отдыха, обновление детских площадок и посадку более тысячи деревьев. Особое внимание было уделено экологичности материалов.

Награда была вручена на международном конгрессе архитекторов и дизайнеров, проходившем в Париже.`}</code>
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
            <p>Подумайте о логической структуре: заголовок новости, введение, основная часть, заключение. Используйте <code className="bg-gray-700 px-1 rounded">{'<hr>'}</code> между основной частью и заключением.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Найди ошибки
        </h3>
        <p className="text-gray-300 mb-3">
          Найдите и исправьте все ошибки в приведенном ниже HTML-коде. Объясните, почему это ошибки.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`<!DOCTYPE html>
<html>
<head>
    <title>Страница с ошибками</title>
</head>
<body>
    <h1>Добро пожаловать</h1>
    <p>Это абзац текста.</p>
    <h4>Подраздел</h4>
    <p>Еще один абзац.</p>
    <h1>Еще один заголовок h1</h1>
    <p>Последний абзац.</p>
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
            <p>Вспомните про иерархию заголовков и количество тегов <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> на странице.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с тегами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу, на которой визуально продемонстрируйте разницу между:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Несколькими тегами <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> (разные абзацы).</li>
          <li>Одним тегом <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с несколькими тегами <code className="bg-gray-700 px-1 rounded">{'<br>'}</code> внутри (один абзац, несколько строк).</li>
        </ul>
        <p className="text-gray-300">
          Добавьте поясняющий текст, чтобы было понятно, что демонстрирует каждый пример.
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
              Эти задания помогли вам закрепить навыки использования основных текстовых тегов HTML. Понимание различий между <code className="bg-gray-700 px-1 rounded">{'<h1>'}–{'<h6>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<p>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<br>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<hr>'}</code> — ключ к созданию хорошо структурированных и семантически правильных веб-страниц.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;