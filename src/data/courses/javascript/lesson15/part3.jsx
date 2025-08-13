// src/data/courses/javascript/lesson15/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Eye, Lock, Globe } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Область видимости и замыкания</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по областям видимости и замыканиям, научиться применять их на практике.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Исследование областей видимости
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Исследуйте различные области видимости:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Объявите несколько глобальных переменных разных типов</li>
          <li>Создайте функции с локальными переменными</li>
          <li>Реализуйте вложенные функции и проверьте доступ к переменным</li>
          <li>Используйте блочные области видимости (let/const в блоках)</li>
          <li>Попробуйте получить доступ к переменным из разных областей</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Продемонстрируйте случаи, когда доступ есть и когда возникают ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">console.log()</code> для проверки доступности переменных</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Сравнение var, let и const в областях
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для сравнения поведения var, let и const в разных областях видимости:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-blue-300 mb-2">Функциональная область (var):</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Объявите переменные с var в функциях</li>
              <li>Проверьте поднятие (hoisting) переменных var</li>
              <li>Исследуйте поведение var в циклах</li>
              <li>Сравните с повторным объявлением</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-purple-300 mb-2">Блочная область (let/const):</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Объявите переменные с let/const в блоках</li>
              <li>Проверьте отсутствие поднятия в блочной области</li>
              <li>Исследуйте поведение в циклах</li>
              <li>Сравните различия между let и const</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте примеры, демонстрирующие ключевые различия между этими типами переменных.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">console.log(переменная); var переменная = 5;</code> vs <code className="bg-gray-700 px-1 rounded">console.log(переменная); let переменная = 5;</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Базовые замыкания
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт с простыми примерами замыканий:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Функция, возвращающая другую функцию, использующую внешние переменные</li>
          <li>Счётчик с использованием замыкания</li>
          <li>Функция для создания приветствий с разными именами</li>
          <li>Калькулятор с сохранением промежуточных результатов</li>
          <li>Функция, запоминающая последнее переданное значение</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Протестируйте каждое замыкание, создав несколько экземпляров и проверив их независимость.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`function создатьСчётчик() { let счёт = 0; return function() { return ++счёт; } }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Практические применения замыканий
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, демонстрирующий практическое применение замыканий:
        </p>
        <div className="space-y-4 mb-3">
          <div class="bg-gray-900/50 p-4 rounded">
            <div class="text-sm text-orange-300 mb-2">Модуль с приватными данными:</div>
            <ul class="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте объект с публичными методами и приватными переменными</li>
              <li>Реализуйте геттеры и сеттеры для доступа к данным</li>
              <li>Добавьте методы для изменения приватных данных</li>
            </ul>
          </div>
          <div class="bg-gray-900/50 p-4 rounded">
            <div class="text-sm text-cyan-300 mb-2">Фабрика функций:</div>
            <ul class="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте функцию, возвращающую функции для разных операций</li>
              <li>Реализуйте фабрику для создания валидаторов</li>
              <li>Создайте функцию для генерации обработчиков событий</li>
            </ul>
          </div>
        </div>
        <p class="text-gray-300 mb-3">
          Продемонстрируйте, как замыкания помогают создавать инкапсуляцию и переиспользуемые компоненты.
        </p>
        <details class="group">
          <summary class="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div class="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code class="bg-gray-700 px-1 rounded">{`return { метод1() { ... }, метод2() { ... } }`}</code> с замкнутыми переменными</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 class="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span class="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Сложные примеры и отладка
        </h3>
        <p class="text-gray-300 mb-3">
          Создайте скрипт для работы со сложными примерами областей видимости и замыканий:
        </p>
        <ul class="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Циклы с setTimeout и замыканиями (классическая задача)</li>
          <li>Вложенные замыкания нескольких уровней</li>
          <li>Функции, возвращающие объекты с методами (замыкания)</li>
          <li>Работа с коллбэками и сохранением контекста</li>
          <li>Создание "классов" с приватными методами через замыкания</li>
        </ul>
        <p class="text-gray-300 mb-3">
          Используйте отладчик (debugger) и console.log для понимания, как работают области видимости.
        </p>
        <details class="group">
          <summary class="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div class="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Классическая задача: <code class="bg-gray-700 px-1 rounded">{`for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }`}</code></p>
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
              Эти задания помогли вам освоить области видимости и замыкания, научиться применять их для создания чистого, безопасного и эффективного кода!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;