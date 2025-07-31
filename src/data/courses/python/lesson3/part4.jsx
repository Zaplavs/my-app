// src/data/courses/python/lesson2/part4.jsx
import React from 'react';
import { Code, Terminal, Lightbulb } from 'lucide-react';

const Part4 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🐍 Практика: Переменные в Python</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию, использованию и изменению переменных.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Попробуйте решить эти задачи в онлайн-редакторе Python, например, <a href="https://www.online-python.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">online-python.com</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Задача 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание и вывод переменных
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте две переменные: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">city</code> (строка) и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">population</code> (число). Присвойте им любые значения. Выведите их на экран в формате:
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700 text-sm">
          Город: Москва, Население: 12635000
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <Lightbulb className="w-4 h-4" />
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <p className="mt-2 text-sm text-gray-400">
            Используйте f-строку для форматирования вывода. Пример: <code className="bg-gray-700 px-1 rounded">f"Город: {'{city}'}, Население: {'{population}'}"</code>
          </p>
        </details>
      </div>

      {/* Задача 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа с булевыми значениями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте переменную <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">is_raining</code> и присвойте ей значение <code className="bg-gray-700 px-1 rounded">True</code>. Создайте переменную <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">temperature</code> и присвойте ей число. Выведите обе переменные на экран, каждую с поясняющим текстом.
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700 text-sm">
          Дождь: True<br />
          Температура: 18
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <Lightbulb className="w-4 h-4" />
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <p className="mt-2 text-sm text-gray-400">
            Используйте <code className="bg-gray-700 px-1 rounded">print()</code> дважды или один раз с несколькими аргументами.
          </p>
        </details>
      </div>

      {/* Задача 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Изменение значения переменной
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте переменную <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">counter</code> и присвойте ей значение 0. Выведите её значение. Затем увеличьте значение переменной на 10 и снова выведите.
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700 text-sm">
          Счетчик: 0<br />
          Счетчик увеличен!<br />
          Счетчик: 10
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <Lightbulb className="w-4 h-4" />
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <p className="mt-2 text-sm text-gray-400">
            Чтобы увеличить значение, используйте операцию присваивания: <code className="bg-gray-700 px-1 rounded">counter = counter + 10</code> или <code className="bg-gray-700 px-1 rounded">counter += 10</code>.
          </p>
        </details>
      </div>

      {/* Задача 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Объединение строк
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте две строковые переменные: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-pink-300">greeting</code> со значением <code className="bg-gray-700 px-1 rounded">"Привет"</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">name</code> с вашим именем. Создайте третью переменную <code className="bg-gray-700 px-1.5 py-0.5 rounded text-indigo-300">message</code>, которая объединит первые две, и выведите её.
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700 text-sm">
          Привет, Алекс!
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <Lightbulb className="w-4 h-4" />
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <p className="mt-2 text-sm text-gray-400">
            Для объединения строк используйте оператор <code className="bg-gray-700 px-1 rounded">+</code>. Не забудьте добавить пробел и запятую вручную, если они нужны.
          </p>
        </details>
      </div>

      {/* Задача 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Проверка типа данных
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте переменные разных типов: <code className="bg-gray-700 px-1 rounded">my_int = 42</code>, <code className="bg-gray-700 px-1 rounded">my_str = "Python"</code>, <code className="bg-gray-700 px-1 rounded">my_bool = False</code>. Для каждой переменной выведите её значение и тип данных, используя функцию <code className="bg-gray-700 px-1 rounded">type()</code>.
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700 text-sm">
          Значение: 42, Тип: {'<'}class 'int'{'>><br />'}
          Значение: Python, Тип: {'<'}class 'str'{'>><br />'}
          Значение: False, Тип: {'<'}class 'bool'{'>'}
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <Lightbulb className="w-4 h-4" />
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <p className="mt-2 text-sm text-gray-400">
            Используйте f-строку и функцию <code className="bg-gray-700 px-1 rounded">type()</code>. Пример: <code className="bg-gray-700 px-1 rounded">f"Значение: {'{my_int}'}, Тип: {'{type(my_int)}'}"</code>
          </p>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <Terminal className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-gray-300">
              Отличная работа! Эти задачи охватывают все основные аспекты работы с переменными, которые вы изучили в этом уроке: создание, вывод, изменение, объединение и проверка типов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part4;