// src/data/courses/javascript/lesson18/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Repeat, Shuffle, RotateCw } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Перебор массивов и объектов</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по итерации массивов и объектов, освоить циклы for...of, for...in и метод forEach().
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Основы работы с for...of
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Реализуйте следующие задачи с использованием цикла for...of:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте массивы с разными типами данных (числа, строки, объекты)</li>
          <li>Реализуйте подсчет суммы чисел в массиве</li>
          <li>Создайте функцию для объединения всех строк в массиве</li>
          <li>Реализуйте поиск максимального и минимального значений</li>
          <li>Создайте массив и продемонстрируйте работу с вложенными массивами</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Выведите результаты в консоль и на страницу. Сравните удобство использования for...of с традиционным for.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">for (let элемент of массив)</code> для чистого и понятного кода</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа с for...in для объектов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для демонстрации перебора свойств объектов с помощью for...in:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-purple-300 mb-2">Анализ объектов:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте объекты с различными типами свойств</li>
              <li>Реализуйте функцию для вывода всех свойств объекта</li>
              <li>Создайте функцию для подсчета количества свойств</li>
              <li>Реализуйте фильтрацию свойств по типу значений</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-cyan-300 mb-2">Работа с конфигурациями:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте объект с настройками приложения</li>
              <li>Реализуйте валидацию настроек через перебор свойств</li>
              <li>Создайте функцию для сброса настроек к значениям по умолчанию</li>
              <li>Реализуйте экспорт настроек в формате ключ=значение</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Убедитесь, что используете hasOwnProperty() для проверки собственных свойств.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">if (obj.hasOwnProperty(ключ))</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Использование метода forEach()
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для работы с массивами с помощью метода forEach():
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Реализуйте обработку массива чисел с доступом к индексам</li>
          <li>Создайте функцию для модификации элементов массива на месте</li>
          <li>Реализуйте функцию для создания нового массива на основе старого</li>
          <li>Создайте систему логирования с использованием индексов элементов</li>
          <li>Реализуйте обработку вложенных массивов с помощью forEach</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Протестируйте работу с thisArg и сравните с обычными циклами.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`массив.forEach((элемент, индекс) => {})`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Сравнение методов итерации
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для сравнения производительности и удобства разных методов итерации:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-orange-300 mb-2">Производительность:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте большие массивы (10000+ элементов) и измерьте время выполнения</li>
              <li>Сравните скорость for, for...of, forEach() для разных операций</li>
              <li>Реализуйте бенчмарк для разных типов данных</li>
              <li>Создайте отчет о результатах сравнения</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-green-300 mb-2">Удобство использования:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте примеры, где каждый метод наиболее удобен</li>
              <li>Реализуйте обработку ошибок в разных методах</li>
              <li>Создайте функции для выбора подходящего метода по контексту</li>
              <li>Реализуйте универсальную функцию итерации с авто-выбором метода</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Сделайте выводы о том, когда какой метод использовать.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">console.time()</code> и <code className="bg-gray-700 px-1 rounded">console.timeEnd()</code> для измерения времени</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексные задачи итерации
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, демонстрирующий комплексное использование методов итерации:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте систему анализа данных пользователей (массив объектов)</li>
          <li>Реализуйте фильтрацию, сортировку и группировку данных</li>
          <li>Создайте отчеты с использованием разных методов итерации</li>
          <li>Реализуйте систему обработки событий с различными типами данных</li>
          <li>Создайте инструмент для работы с конфигурационными файлами</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте комбинации for...of, for...in, forEach() для решения комплексных задач.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{"for (let пользователь of пользователи) { for (let поле in пользователь) { ... } }"}</code></p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам освоить различные методы итерации в JavaScript и научиться применять их в реальных сценариях!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;