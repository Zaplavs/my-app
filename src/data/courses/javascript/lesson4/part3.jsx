// src/data/courses/javascript/lesson3/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Code } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Переменные в JavaScript</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Научиться правильно объявлять переменные с помощью <code className="bg-gray-700 px-1 rounded">let</code>, <code className="bg-gray-700 px-1 rounded">const</code> и <code className="bg-gray-700 px-1 rounded">var</code>, понимать их различия и область видимости.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Объявление переменных
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Объявите переменные разными способами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>С помощью <code className="bg-gray-700 px-1 rounded">var</code> — строку</li>
          <li>С помощью <code className="bg-gray-700 px-1 rounded">let</code> — число</li>
          <li>С помощью <code className="bg-gray-700 px-1 rounded">const</code> — булево значение</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Выведите значения переменных в консоль.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">var name = "Иван";</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Повторное присваивание
        </h3>
        <p className="text-gray-300 mb-3">
          Попробуйте изменить значения переменных, объявленных с помощью <code className="bg-gray-700 px-1 rounded">var</code>, <code className="bg-gray-700 px-1 rounded">let</code> и <code className="bg-gray-700 px-1 rounded">const</code>.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Попробуйте изменить значение переменной <code className="bg-gray-700 px-1 rounded">var</code></li>
          <li>Попробуйте изменить значение переменной <code className="bg-gray-700 px-1 rounded">let</code></li>
          <li>Попробуйте изменить значение переменной <code className="bg-gray-700 px-1 rounded">const</code></li>
        </ul>
        <p className="text-gray-300 mb-3">
          Что произошло с <code className="bg-gray-700 px-1 rounded">const</code>? Почему?
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Переменная, объявленная через <code className="bg-gray-700 px-1 rounded">const</code>, не может быть переопределена.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Область видимости
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте блок <code className="bg-gray-700 px-1 rounded">if (true)</code>, внутри которого объявите переменные с помощью <code className="bg-gray-700 px-1 rounded">var</code>, <code className="bg-gray-700 px-1 rounded">let</code> и <code className="bg-gray-700 px-1 rounded">const</code>.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Попробуйте получить доступ к этим переменным вне блока</li>
          <li>Объясните результаты</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Какой тип переменной доступен вне блока? Почему?
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p><code className="bg-gray-700 px-1 rounded">var</code> имеет функциональную область видимости, а <code className="bg-gray-700 px-1 rounded">let</code> и <code className="bg-gray-700 px-1 rounded">const</code> — блочную.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Именование переменных
        </h3>
        <p className="text-gray-300 mb-3">
          Объявите несколько переменных с разными именами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Правильные имена (например, <code className="bg-gray-700 px-1 rounded">userName</code>, <code className="bg-gray-700 px-1 rounded">age</code>)</li>
          <li>Неправильные имена (например, <code className="bg-gray-700 px-1 rounded">1user</code>, <code className="bg-gray-700 px-1 rounded">let</code>)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Попробуйте запустить скрипт. Какие ошибки вы получаете?
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Имена переменных не могут начинаться с цифры и не должны совпадать с зарезервированными словами.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Сравнение var, let и const
        </h3>
        <p className="text-gray-300 mb-3">
          Напишите небольшой скрипт, в котором:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Объявите переменную через <code className="bg-gray-700 px-1 rounded">var</code> до её объявления и выведите её значение</li>
          <li>Повторите то же с <code className="bg-gray-700 px-1 rounded">let</code></li>
        </ul>
        <p className="text-gray-300 mb-3">
          Объясните, почему в одном случае вы получаете <code className="bg-gray-700 px-1 rounded">undefined</code>, а в другом — ошибку.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Это связано с "поднятием" (<code className="bg-gray-700 px-1 rounded">hoisting</code>). <code className="bg-gray-700 px-1 rounded">var</code> поднимается и инициализируется как <code className="bg-gray-700 px-1 rounded">undefined</code>, а <code className="bg-gray-700 px-1 rounded">let</code> — нет.</p>
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
              Теперь вы знаете, как правильно объявлять переменные, различать <code className="bg-gray-700 px-1 rounded">let</code>, <code className="bg-gray-700 px-1 rounded">const</code> и <code className="bg-gray-700 px-1 rounded">var</code>, а также понимаете область видимости и правила именования. Эти знания — основа для написания чистого и надёжного кода!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;