// src/data/courses/javascript/lesson3/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Code } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Работа с консолью браузера</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с инструментами разработчика и отладке JavaScript.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Исследование DevTools
        </h3>
        <p className="text-gray-300 mb-3">
          Откройте любой веб-сайт в браузере. Откройте инструменты разработчика и изучите следующие вкладки:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Elements — структура страницы</li>
          <li>Console — консоль JavaScript</li>
          <li>Sources — исходный код</li>
          <li>Network — сетевые запросы</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Сфокусируйтесь на вкладке Console. Попробуйте выполнить простые команды JavaScript прямо в консоли.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Попробуйте ввести в консоли простые выражения, например: <code className="bg-gray-700 px-1 rounded">2 + 2</code> или <code className="bg-gray-700 px-1 rounded">"Привет" + " мир"</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа с console.log()
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Напишите JavaScript код, который выводит в консоль:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Строку "Изучаю консоль браузера"</li>
          <li>Число 100</li>
          <li>Булево значение true</li>
          <li>Массив из нескольких элементов</li>
          <li>Две переменные с разными значениями</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Откройте страницу в браузере и проверьте вкладку Console.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте функцию <code className="bg-gray-700 px-1 rounded">console.log()</code> для вывода информации. Создайте переменные с помощью <code className="bg-gray-700 px-1 rounded">let</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Использование alert()
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ и напишите скрипт, который показывает три разных всплывающих окна с сообщениями:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Приветствие</li>
          <li>Информационное сообщение</li>
          <li>Прощание</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Обратите внимание на порядок появления окон.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте функцию <code className="bg-gray-700 px-1 rounded">alert()</code>. Каждый вызов блокирует выполнение до нажатия кнопки "OK".</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Работа с prompt() и confirm()
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ со скриптом, который:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Запрашивает у пользователя его имя с помощью <code className="bg-gray-700 px-1 rounded">prompt()</code></li>
          <li>Приветствует пользователя с введенным именем</li>
          <li>Спрашивает подтверждение с помощью <code className="bg-gray-700 px-1 rounded">confirm()</code></li>
          <li>Выводит разные сообщения в зависимости от ответа пользователя</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Протестируйте скрипт с разными вариантами ответов.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте условный оператор <code className="bg-gray-700 px-1 rounded">if/else</code> для проверки результата <code className="bg-gray-700 px-1 rounded">confirm()</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Поиск и исправление ошибок
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ и故意 внесите в скрипт несколько ошибок. Затем откройте страницу в браузере и:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Найдите ошибки в консоли</li>
          <li>Определите, в какой строке они находятся</li>
          <li>Исправьте все ошибки</li>
          <li>Убедитесь, что скрипт работает правильно</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Примеры ошибок: пропущенные скобки, непарные кавычки, опечатки в названиях функций.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на красные сообщения в консоли. Они указывают на место и тип ошибки.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам освоить работу с инструментами разработчика браузера, научиться использовать console.log(), alert(), prompt() и confirm(), а также находить и исправлять ошибки в коде. Это важные навыки для дальнейшего изучения JavaScript!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;