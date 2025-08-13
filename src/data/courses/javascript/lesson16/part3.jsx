// src/data/courses/javascript/lesson16/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, List, Plus, Minus } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Массивы: хранение списков</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с массивами, освоить методы push, pop, shift, unshift, slice.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание и базовая работа с массивами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Реализуйте следующие операции с массивами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте массивы разными способами: литералом, конструктором Array</li>
          <li>Создайте массивы с разными типами данных</li>
          <li>Получите и измените элементы по индексам</li>
          <li>Работайте с последним элементом через length - 1</li>
          <li>Экспериментируйте с изменением свойства length</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Выведите все массивы и их свойства в консоль. Продемонстрируйте различия между способами создания.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">console.log(массив, массив.length)</code> для отслеживания изменений</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа с концом массива (push/pop)
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для моделирования работы с концом массива:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-green-300 mb-2">Стек (LIFO):</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Реализуйте стек с помощью push и pop</li>
              <li>Добавьте функции isEmpty и peek (просмотр верхнего элемента)</li>
              <li>Создайте историю изменений с возможностью отмены</li>
              <li>Реализуйте корзину покупок с добавлением/удалением товаров</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-blue-300 mb-2">Журнал событий:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте массив для хранения логов событий</li>
              <li>Добавляйте новые события с помощью push</li>
              <li>Ограничьте размер журнала (удаляйте старые при переполнении)</li>
              <li>Реализуйте функцию для получения последних N событий</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Протестируйте все функции с различными сценариями использования.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">стек.push(элемент); return стек.pop();</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Работа с началом массива (shift/unshift)
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для моделирования работы с началом массива:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Реализуйте очередь (FIFO) с помощью push и shift</li>
          <li>Создайте систему приоритетов с unshift для важных элементов</li>
          <li>Реализуйте планировщик задач с добавлением в начало и конец</li>
          <li>Создайте буфер обмена с историей скопированных элементов</li>
          <li>Реализуйте систему уведомлений с приоритетной обработкой</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Сравните производительность операций с началом и концом массива.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">очередь.push(задача); return очередь.shift();</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Работа с копиями массивов (slice)
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для работы с копиями массивов:
        </p>
        <div className="space-y-4 mb-3">
          <div class="bg-gray-900/50 p-4 rounded">
            <div class="text-sm text-purple-300 mb-2">Копирование и извлечение:</div>
            <ul class="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте функцию для безопасного копирования массива</li>
              <li>Реализуйте функцию для получения первых N элементов</li>
              <li>Создайте функцию для получения последних N элементов</li>
              <li>Реализуйте функцию для извлечения подмассива по индексам</li>
            </ul>
          </div>
          <div class="bg-gray-900/50 p-4 rounded">
            <div class="text-sm text-cyan-300 mb-2">Пагинация данных:</div>
            <ul class="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте массив с тестовыми данными (50+ элементов)</li>
              <li>Реализуйте функцию для получения страницы данных</li>
              <li>Создайте навигацию по страницам</li>
              <li>Реализуйте функцию для получения элементов по диапазону</li>
            </ul>
          </div>
        </div>
        <p class="text-gray-300 mb-3">
          Убедитесь, что оригинальный массив не изменяется при использовании slice.
        </p>
        <details class="group">
          <summary class="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div class="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code class="bg-gray-700 px-1 rounded">{`function getPage(data, page, size) { return data.slice((page-1)*size, page*size); }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 class="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span class="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексные операции с массивами
        </h3>
        <p class="text-gray-300 mb-3">
          Создайте скрипт, демонстрирующий комплексное использование методов массивов:
        </p>
        <ul class="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте систему управления списком задач (ToDo list)</li>
          <li>Реализуйте добавление, удаление, редактирование задач</li>
          <li>Создайте фильтрацию задач по статусу (выполненные/невыполненные)</li>
          <li>Реализуйте сортировку задач по приоритету или дате</li>
          <li>Создайте архив выполненных задач с возможностью восстановления</li>
        </ul>
        <p class="text-gray-300 mb-3">
          Используйте комбинации методов push, pop, shift, unshift, slice для реализации функциональности.
        </p>
        <details class="group">
          <summary class="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div class="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code class="bg-gray-700 px-1 rounded">{`выполненные = задачи.filter(з => з.выполнена).slice(0, 10);`}</code></p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div class="flex items-start gap-3">
          <div class="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 class="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p class="text-gray-300">
              Эти задания помогли вам освоить работу с массивами, методы push, pop, shift, unshift, slice и научиться применять их в реальных сценариях!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;