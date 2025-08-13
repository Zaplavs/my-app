// src/data/courses/javascript/lesson6/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Calculator, Equal, Code } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm border border-orange-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-orange-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Операторы и выражения</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с операторами, научиться использовать арифметические, логические и сравнительные операторы.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Арифметические операции
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Объявите две переменные с числами и выполните все арифметические операции:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Сложение двух чисел</li>
          <li>Вычитание двух чисел</li>
          <li>Умножение двух чисел</li>
          <li>Деление двух чисел</li>
          <li>Остаток от деления</li>
          <li>Возведение в степень</li>
          <li>Унарные операторы (+ и -)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Выведите все результаты в консоль. Попробуйте использовать скобки для изменения приоритета операций.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте операторы: <code className="bg-gray-700 px-1 rounded">+</code>, <code className="bg-gray-700 px-1 rounded">-</code>, <code className="bg-gray-700 px-1 rounded">*</code>, <code className="bg-gray-700 px-1 rounded">/</code>, <code className="bg-gray-700 px-1 rounded">%</code>, <code className="bg-gray-700 px-1 rounded">**</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Операторы присваивания
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который демонстрирует работу всех операторов присваивания:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-purple-300 mb-2">Базовые операторы:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Простое присваивание (=)</li>
              <li>Сложение с присваиванием (+=)</li>
              <li>Вычитание с присваиванием (-=)</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-pink-300 mb-2">Другие операторы:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Умножение с присваиванием (*=)</li>
              <li>Деление с присваиванием (/=)</li>
              <li>Остаток с присваиванием (%=)</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Начните с переменной, равной 100, и последовательно примените все операторы присваивания.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">let число = 100; число += 50; // 150</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Сравнение значений
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который сравнивает различные значения с помощью операторов сравнения:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Сравните числа 10 и "10" с помощью == и ===</li>
          <li>Сравните true и 1 с помощью == и ===</li>
          <li>Сравните null и undefined с помощью == и ===</li>
          <li>Выполните сравнения больше, меньше, больше или равно, меньше или равно</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Объясните результаты каждого сравнения. Почему строгое сравнение дает другие результаты?
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте операторы: <code className="bg-gray-700 px-1 rounded">==</code>, <code className="bg-gray-700 px-1 rounded">===</code>, <code className="bg-gray-700 px-1 rounded">!=</code>, <code className="bg-gray-700 px-1 rounded">!==</code>, <code className="bg-gray-700 px-1 rounded">{`>`}</code>, <code className="bg-gray-700 px-1 rounded">{`<`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Логические операции
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который демонстрирует работу логических операторов:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-green-300 mb-2">Логическое И (&&):</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>true && true</li>
              <li>true && false</li>
              <li>false && true</li>
              <li>false && false</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-blue-300 mb-2">Логическое ИЛИ (||):</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>true || true</li>
              <li>true || false</li>
              <li>false || true</li>
              <li>false || false</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-purple-300 mb-2">Логическое НЕ (!):</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>!true</li>
              <li>!false</li>
              <li>!!true</li>
              <li>!"привет"</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте практический пример с использованием логических операторов (например, проверка возраста и прав).
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`if (возраст >= 18 && имеетПрава) { console.log("Можно водить"); }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Приоритет операторов и сложные выражения
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который демонстрирует работу с приоритетом операторов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Вычислите выражение: 10 + 5 * 2 - 8 / 4</li>
          <li>Измените порядок выполнения с помощью скобок</li>
          <li>Создайте сложное логическое выражение с комбинацией && и ||</li>
          <li>Продемонстрируйте работу унарных операторов</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Объясните, почему результаты могут отличаться при использовании скобок.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">true || false && false</code> vs <code className="bg-gray-700 px-1 rounded">(true || false) && false</code></p>
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
              Эти задания помогли вам освоить работу с операторами в JavaScript: арифметическими, логическими, сравнениями и присваиваниями. Вы научились понимать приоритет операторов и создавать сложные выражения. Это важные навыки для написания эффективного кода!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;