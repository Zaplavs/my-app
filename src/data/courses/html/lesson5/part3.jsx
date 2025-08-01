// src/data/courses/html/lesson5/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, List, Hash } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Списки в HTML</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию упорядоченных и неупорядоченных списков, а также освоить работу с вложенными списками.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Список покупок
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с заголовком "Мой список покупок". В теле документа создайте <span className="font-medium">неупорядоченный список</span> (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<ul>'}</code>) из 5-7 продуктов, которые вы хотели бы купить в магазине.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте теги <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<li>'}</code>. Не забудьте про основную структуру HTML-документа.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Рецепт
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент, представляющий собой рецепт блюда. Заголовок рецепта должен быть <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<h1>'}</code>. Ниже добавьте:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Подзаголовок "Ингредиенты" (<code className="bg-gray-700 px-1 rounded">{'<h2>'}</code>) и <span className="font-medium">неупорядоченный список</span> ингредиентов.</li>
          <li>Подзаголовок "Шаги приготовления" (<code className="bg-gray-700 px-1 rounded">{'<h2>'}</code>) и <span className="font-medium">упорядоченный список</span> (<code className="bg-gray-700 px-1 rounded">{'<ol>'}</code>) шагов.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте теги <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<ol>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<li>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Вложенные списки: Меню сайта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент, представляющий собой фрагмент навигационного меню сайта. Основные пункты меню должны быть в <span className="font-medium">неупорядоченном списке</span>. У некоторых пунктов должны быть подменю, представленные вложенными <span className="font-medium">неупорядоченными списками</span>.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <p className="text-gray-300 text-sm">
            Пример структуры:
          </p>
          <div className="mt-2 p-3 bg-gray-800 rounded text-sm">
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Главная</li>
              <li>Услуги
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Веб-дизайн</li>
                  <li>Разработка ПО</li>
                </ul>
              </li>
              <li>Контакты</li>
            </ul>
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
            <p>Вложенный список должен находиться <span className="font-medium">внутри</span> тега <code className="bg-gray-700 px-1 rounded">{'<li>'}</code> родительского пункта.</p>
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
            <code>{`<ol>
  <li>Первый пункт</li>
  <ul>
    <li>Подпункт первого пункта</li>
  </ul>
  <li>Второй пункт</li>
</ol>`}</code>
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
            <p>Где должен находиться вложенный список? Какой тег используется для пунктов списка?</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комбинированный список
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу с заголовком "ТОП-3 языков программирования для начинающих". Страница должна содержать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Упорядоченный список</span> (<code className="bg-gray-700 px-1 rounded">{'<ol>'}</code>) из 3 языков (например, Python, JavaScript, Java).</li>
          <li>Внутри каждого <code className="bg-gray-700 px-1 rounded">{'<li>'}</code> этого списка создайте <span className="font-medium">неупорядоченный список</span> (<code className="bg-gray-700 px-1 rounded">{'<ul>'}</code>) из 2-3 причин, почему этот язык подходит новичкам.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Это задание сочетает в себе использование обоих типов списков и вложенность. Используйте правильную структуру вложений.</p>
          </div>
        </details>
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
              Эти задания помогли вам закрепить навыки создания списков в HTML. Вы научились использовать теги <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<ol>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<li>'}</code>, а также создавать сложные структуры с помощью вложенных списков. Это важный навык для структурирования информации на ваших веб-страницах.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;