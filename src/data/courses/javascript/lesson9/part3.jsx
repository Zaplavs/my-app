// src/data/courses/javascript/lesson9/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, ToggleLeft, Eye, EyeOff } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Логические значения и приведение типов</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с логическими значениями, falsy/truthy значениями и приведением типов.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Исследование falsy-значений
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Объявите массив со всеми 7 falsy-значениями:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>false, 0, -0, "", null, undefined, NaN</li>
          <li>Пройдитесь по массиву циклом и проверьте каждое значение с помощью Boolean()</li>
          <li>Выведите в консоль каждое значение и его логический эквивалент</li>
          <li>Создайте функцию, которая определяет, является ли значение falsy</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Дополнительно: проверьте значения BigInt(0) и document.all (в браузере).
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">Boolean(значение)</code> и <code className="bg-gray-700 px-1 rounded">Array.forEach()</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Проверка существования значений
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который проверяет существование и корректность данных пользователя:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-indigo-300 mb-2">Переменные для проверки:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1 rounded">имя</code> — строка</li>
              <li><code className="bg-gray-700 px-1 rounded">возраст</code> — число</li>
              <li><code className="bg-gray-700 px-1 rounded">email</code> — строка</li>
              <li><code className="bg-gray-700 px-1 rounded">подписка</code> — булево</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-purple-300 mb-2">Условия проверки:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Имя не должно быть пустой строкой</li>
              <li>Возраст должен быть числом больше 0</li>
              <li>Email должен содержать "@"</li>
              <li>Подписка может быть true или false</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Используйте приведение типов для проверки. Выведите сообщение о валидности данных.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`if (имя && возраст > 0 && email.includes("@")) { ... }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Работа с логическими операторами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который демонстрирует работу логических операторов && и || с различными значениями:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Протестируйте оператор && с различными комбинациями значений</li>
          <li>Протестируйте оператор || с различными комбинациями значений</li>
          <li>Создайте примеры с цепочками операторов (a && b && c)</li>
          <li>Продемонстрируйте установку значений по умолчанию</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Объясните результаты каждого выражения. Почему возвращаются именно эти значения?
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Тестируйте: <code className="bg-gray-700 px-1 rounded">"привет" && 42</code>, <code className="bg-gray-700 px-1 rounded">0 || "мир"</code>, <code className="bg-gray-700 px-1 rounded">null || undefined || "значение"</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Практическое применение truthy/falsy
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для работы с массивами и объектами, используя приведение типов:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-green-300 mb-2">Задачи:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Проверьте, существует ли массив и не пустой ли он</li>
              <li>Проверьте, существует ли объект и имеет ли он свойства</li>
              <li>Реализуйте функцию, которая возвращает первый truthy элемент массива</li>
              <li>Создайте функцию для фильтрации falsy значений из массива</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Используйте неявное приведение типов в условиях. Сравните с явной проверкой.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Примеры: <code className="bg-gray-700 px-1 rounded">if (массив && массив.length)</code>, <code className="bg-gray-700 px-1 rounded">массив.filter(Boolean)</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Ловушки приведения типов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который демонстрирует распространенные ошибки при работе с приведением типов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Проблема со строкой "0" — она truthy, хотя содержит ноль</li>
          <li>Проблема с пустым массивом [] — он truthy, хотя пустой</li>
          <li>Сравнение разных типов с == vs ===</li>
          <li>Работа с NaN и проверка на NaN</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Создайте функции для корректной проверки этих случаев. Объясните, почему стандартные проверки могут давать неожиданные результаты.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">Number.isNaN()</code>, <code className="bg-gray-700 px-1 rounded">Array.isArray()</code>, явное преобразование</p>
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
              Эти задания помогли вам освоить работу с логическими значениями, понять falsy/truthy значения и научиться правильно использовать приведение типов в JavaScript. Это важные навыки для написания надежного кода!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;