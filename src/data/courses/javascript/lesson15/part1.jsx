// src/data/courses/javascript/lesson14/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, ArrowRight, Code, Target } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Функциональные выражения и стрелочные функции</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по функциональным выражениям и стрелочным функциям, научиться применять их на практике.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Функциональные выражения vs Объявления
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Реализуйте следующие функции разными способами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Функция для вычисления факториала числа (объявление функции)</li>
          <li>Функция для проверки четности числа (функциональное выражение)</li>
          <li>Функция для форматирования строки (стрелочная функция)</li>
          <li>Функция для генерации случайного числа (функциональное выражение)</li>
          <li>Попробуйте вызвать каждую функцию до и после её объявления</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Продемонстрируйте разницу в поведении между объявлениями и выражениями.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">{`function имя() { ... }`}</code> и <code className="bg-gray-700 px-1 rounded">{`let имя = function() { ... }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Стрелочные функции разной сложности
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт с различными вариантами стрелочных функций:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-purple-300 mb-2">Простые стрелочные функции:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Функция без параметров, возвращающая текущее время</li>
              <li>Функция с одним параметром, возвращающая квадрат числа</li>
              <li>Функция с двумя параметрами, возвращающая их сумму</li>
              <li>Функция с тремя параметрами, возвращающая среднее значение</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-cyan-300 mb-2">Сложные стрелочные функции:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Функция с блоком кода и явным return</li>
              <li>Функция, использующая другие функции</li>
              <li>Рекурсивная стрелочная функция (через переменную)</li>
              <li>Функция, возвращающая другую функцию</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Сравните краткий и полный синтаксис. Протестируйте все функции с разными аргументами.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`let квадрат = x => x * x;`}</code> и <code className="bg-gray-700 px-1 rounded">{`let сложная = (a, b) => { let рез = a + b; return рез * 2; }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Работа с массивами и методами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для обработки массивов с использованием стрелочных функций в методах массивов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте массив чисел от 1 до 20</li>
          <li>Используйте filter с стрелочной функцией для получения четных чисел</li>
          <li>Используйте map с стрелочной функцией для возведения чисел в квадрат</li>
          <li>Используйте reduce с стрелочной функцией для нахождения суммы</li>
          <li>{`Используйте find с стрелочной функцией для поиска первого числа > 15`}</li>
          <li>Используйте forEach с стрелочной функцией для вывода элементов</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Сравните читаемость кода со стрелочными и обычными функциями.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`массив.filter(x => x % 2 === 0).map(x => x ** 2)`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Функции высшего порядка
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, демонстрирующий функции высшего порядка:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-orange-300 mb-2">Задачи:</div>
            <ul class="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Функция, принимающая другую функцию как параметр и применяющая её</li>
              <li>Функция, возвращающая другую функцию (фабрика функций)</li>
              <li>Функция композиции двух функций</li>
              <li>Функция мемоизации (кэширования результатов)</li>
              <li>Функция каррирования для функции с тремя параметрами</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Протестируйте каждую функцию высшего порядка с различными аргументами.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`let применить = (func, значение) => func(значение);`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Практическое применение и коллбэки
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте интерактивное приложение с использованием стрелочных функций как коллбэков:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте массив объектов (пользователи, товары, задачи)</li>
          <li>Реализуйте функции фильтрации, сортировки и преобразования данных</li>
          <li>Используйте стрелочные функции в обработчиках событий</li>
          <li>Создайте функцию для создания кнопок с разными обработчиками</li>
          <li>Реализуйте цепочку преобразований данных (map, filter, reduce)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Покажите, как стрелочные функции упрощают работу с коллбэками и делают код более читаемым.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`кнопки.forEach(btn => btn.addEventListener('click', () => console.log('Клик!')))`}</code></p>
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
              Эти задания помогли вам освоить функциональные выражения и стрелочные функции, научиться применять их в различных сценариях и понять их преимущества!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;