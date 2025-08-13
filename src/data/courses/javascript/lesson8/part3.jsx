// src/data/courses/javascript/lesson8/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Shuffle, Layers, Code } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Тернарный оператор и switch</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с тернарным оператором и конструкцией switch.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Тернарный оператор для проверки четности
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Объявите переменную с числом и используйте тернарный оператор для определения:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Является ли число четным или нечетным</li>
          <li>Положительное оно или отрицательное (включая ноль)</li>
          <li>Больше ли оно 100 или меньше/равно 100</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Выведите все результаты в консоль. Попробуйте вложенный тернарный оператор для определения категории числа.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте оператор: <code className="bg-gray-700 px-1 rounded">%</code> для проверки четности, <code className="bg-gray-700 px-1 rounded">условие ? значение1 : значение2</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Определение статуса пользователя
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который определяет статус пользователя с помощью тернарного оператора:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-purple-300 mb-2">Условия:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Если пользователь авторизован — "Активный пользователь"</li>
              <li>Если не авторизован — "Гость"</li>
              <li>Если админ — "Администратор системы"</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-pink-300 mb-2">Дополнительно:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Используйте вложенные тернарные операторы</li>
              <li>Проверяйте несколько условий</li>
              <li>Выводите результат в консоль</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте переменные <code className="bg-gray-700 px-1 rounded">isAuthenticated</code> и <code className="bg-gray-700 px-1 rounded">isAdmin</code> для проверки условий.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">let статус = isAdmin ? "Админ" : (isAuthenticated ? "Пользователь" : "Гость");</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Switch для дней недели
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который по номеру дня недели (1-7) выводит его название:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>1 — Понедельник</li>
          <li>2 — Вторник</li>
          <li>3 — Среда</li>
          <li>4 — Четверг</li>
          <li>5 — Пятница</li>
          <li>6 — Суббота</li>
          <li>7 — Воскресенье</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте конструкцию <code className="bg-gray-700 px-1 rounded">switch</code>. Добавьте обработку некорректных значений через <code className="bg-gray-700 px-1 rounded">default</code>.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Не забудьте про <code className="bg-gray-700 px-1 rounded">break</code> в каждом <code className="bg-gray-700 px-1 rounded">case</code>!</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Группировка case в switch
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который определяет тип месяца по его номеру (1-12):
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-cyan-300 mb-2">Категории месяцев:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Зима: 12, 1, 2</li>
              <li>Весна: 3, 4, 5</li>
              <li>Лето: 6, 7, 8</li>
              <li>Осень: 9, 10, 11</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Используйте группировку <code className="bg-gray-700 px-1 rounded">case</code> без <code className="bg-gray-700 px-1 rounded">break</code> для месяцев одного сезона. Выведите название сезона.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример структуры: <code className="bg-gray-700 px-1 rounded">case 12: case 1: case 2: console.log("Зима"); break;</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная система оценок
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для определения оценки по баллам с использованием разных подходов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Для точных значений (90, 80, 70, 60) используйте <code className="bg-gray-700 px-1 rounded">switch</code></li>
          <li>Для диапазонов используйте тернарный оператор или <code className="bg-gray-700 px-1 rounded">switch(true)</code></li>
          <li>Определите категории: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59)</li>
          <li>Обработайте некорректные значения (меньше 0 или больше 100)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Сравните разные подходы и объясните, какой метод наиболее подходящий для каждой ситуации.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример с <code className="bg-gray-700 px-1 rounded">switch(true)</code>: <code className="bg-gray-700 px-1 rounded">{`switch (true) { case баллы >= 90: оценка = "A"; break; ... }`}</code></p>
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
              Эти задания помогли вам освоить работу с тернарным оператором и конструкцией switch в JavaScript. Вы научились выбирать подходящий метод для разных сценариев и создавать эффективные условные конструкции!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;