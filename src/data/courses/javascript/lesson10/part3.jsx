// src/data/courses/javascript/lesson10/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Repeat, Hash, List } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Цикл for</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с циклом for, инкрементом/декрементом и перебором массивов.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Математические последовательности
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Реализуйте следующие математические последовательности с помощью цикла for:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Выведите все четные числа от 2 до 50</li>
          <li>Выведите все нечетные числа от 1 до 49</li>
          <li>Выведите квадраты чисел от 1 до 10</li>
          <li>Выведите числа от 100 до 1 с шагом -5</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Для каждой последовательности используйте отдельный цикл. Форматируйте вывод для лучшей читаемости.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">i += 2</code> для четных/нечетных, <code className="bg-gray-700 px-1 rounded">i *= i</code> для квадратов</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа с массивами чисел
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который работает с массивом чисел и выполняет различные операции:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-green-300 mb-2">Исходный массив:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>[15, 3, 8, 22, 7, 45, 12, 9, 33, 6]</li>
              <li>Найдите сумму всех элементов</li>
              <li>Найдите среднее арифметическое</li>
              <li>Найдите минимальный и максимальный элементы</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-blue-300 mb-2">Дополнительные задачи:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Подсчитайте количество четных чисел</li>
              <li>Создайте новый массив с удвоенными значениями</li>
              <li>Найдите индексы всех чисел больше 20</li>
              <li>Проверьте, есть ли в массиве число 45</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Используйте цикл for для перебора массива. Выведите все результаты в консоль.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`for (let i = 0; i < массив.length; i++) { ... }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Перебор строк в массиве
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который работает с массивом строк (имен, городов, слов):
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте массив из 10 строк (имена, города или любые слова)</li>
          <li>Выведите каждую строку с её порядковым номером</li>
          <li>Найдите самую длинную строку в массиве</li>
          <li>Подсчитайте общее количество символов во всех строках</li>
          <li>Создайте новый массив с перевернутыми строками</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте цикл for для перебора строк. Продемонстрируйте работу методов строк.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">строка.length</code>, <code className="bg-gray-700 px-1 rounded">строка.split('').reverse().join('')</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Таблица умножения
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который генерирует таблицу умножения с использованием вложенных циклов for:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-purple-300 mb-2">Требования:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте таблицу умножения 10x10</li>
              <li>Каждая строка должна содержать результаты умножения на одно число</li>
              <li>Отформатируйте вывод в виде таблицы с табуляцией</li>
              <li>Выделите главную диагональ (где множители равны)</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Используйте вложенные циклы for. Попробуйте разные форматы вывода (в строку, в столбец).
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример структуры: <code className="bg-gray-700 px-1 rounded">{`for (let i = 1; i <= 10; i++) { for (let j = 1; j <= 10; j++) { ... } }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Практические алгоритмы
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который реализует несколько полезных алгоритмов с помощью цикла for:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Факториал числа (5! = 5 × 4 × 3 × 2 × 1)</li>
          <li>Числа Фибоначчи (первые 15 чисел последовательности)</li>
          <li>Простые числа от 2 до 100 (решето Эратосфена упрощенное)</li>
          <li>Обратный массив (без использования reverse())</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Каждый алгоритм должен быть реализован отдельно. Протестируйте с разными входными данными.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для факториала: <code className="bg-gray-700 px-1 rounded">{`результат = 1; for (let i = 1; i <= n; i++) { результат *= i; }`}</code></p>
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
              Эти задания помогли вам освоить работу с циклом for, инкрементом/декрементом и перебором массивов. Вы научились создавать математические последовательности, обрабатывать данные и реализовывать алгоритмы!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;