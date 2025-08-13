// src/data/courses/javascript/lesson5/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Type, Hash, Text, ToggleLeft } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 backdrop-blur-sm border border-cyan-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Типы данных в JavaScript</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с типами данных, научиться определять типы и выполнять преобразование типов.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание переменных разных типов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Объявите переменные следующих типов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Строку с вашим именем</li>
          <li>Число — ваш возраст</li>
          <li>Булево значение — true/false (вы студент?)</li>
          <li>Переменную со значением null</li>
          <li>Переменную без значения (undefined)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Выведите все переменные и их типы в консоль.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">typeof</code> для проверки типов. Пример: <code className="bg-gray-700 px-1 rounded">console.log(typeof "строка")</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа с typeof
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который проверяет типы следующих значений:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-cyan-300 mb-2">Проверить типы:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>"JavaScript"</li>
              <li>42</li>
              <li>true</li>
              <li>null</li>
              <li>undefined</li>
              <li>{`{}`}</li>
              <li>[]</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-yellow-300 mb-2">Что вы заметили?</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Почему typeof null возвращает "object"?</li>
              <li>Как отличить массив от объекта?</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Запишите свои наблюдения в комментариях.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для проверки массивов используйте <code className="bg-gray-700 px-1 rounded">Array.isArray()</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Преобразование типов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который демонстрирует различные способы преобразования типов:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-blue-300 mb-2">Явное преобразование:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Преобразуйте строку "123" в число</li>
              <li>Преобразуйте число 456 в строку</li>
              <li>Преобразуйте строку "true" в булево значение</li>
              <li>Преобразуйте пустую строку в булево значение</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-yellow-300 mb-2">Неявное преобразование:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Сложите строку и число: "5" + 3</li>
              <li>Вычтите из строки число: "5" - 3</li>
              <li>Умножьте строку на число: "5" * "3"</li>
              <li>Сложите true и число: true + 1</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Объясните результаты каждого преобразования.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">Number()</code>, <code className="bg-gray-700 px-1 rounded">String()</code>, <code className="bg-gray-700 px-1 rounded">Boolean()</code> для явного преобразования.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Работа с NaN и Infinity
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который демонстрирует поведение специальных числовых значений:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Разделите число на 0 и проверьте тип результата</li>
          <li>Выполните математическую операцию, которая дает NaN</li>
          <li>Проверьте, является ли значение NaN с помощью isNaN()</li>
          <li>Сравните NaN с самим собой</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Объясните, почему NaN не равен ничему, даже самому себе.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Примеры: <code className="bg-gray-700 px-1 rounded">1 / 0</code>, <code className="bg-gray-700 px-1 rounded">"текст" / 2</code>, <code className="bg-gray-700 px-1 rounded">isNaN(NaN)</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Практическое применение типов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте интерактивный скрипт, который:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Запрашивает у пользователя его имя с помощью prompt()</li>
          <li>Запрашивает возраст пользователя</li>
          <li>Проверяет типы полученных данных</li>
          <li>Преобразует возраст в число</li>
          <li>Проверяет, является ли возраст корректным числом</li>
          <li>Выводит приветствие с именем и возрастом</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Обработайте случаи, когда пользователь вводит некорректные данные.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">isNaN()</code> и <code className="bg-gray-700 px-1 rounded">Number.isNaN()</code> для проверки. Добавьте проверку на пустой ввод.</p>
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
              Эти задания помогли вам освоить работу с типами данных в JavaScript, научиться использовать typeof, понимать динамическую типизацию и выполнять преобразование типов. Это важные навыки для написания надежного кода!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;