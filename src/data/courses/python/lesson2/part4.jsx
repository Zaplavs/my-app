// src/data/courses/python/lesson1/part4.jsx
import React from 'react';
import { Code, Terminal, HelpCircle } from 'lucide-react';

const Part4 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <HelpCircle className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🐍 Теория и практика: Функция `print()`</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить и проверить знания по использованию параметров <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">sep</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">end</code> в функции <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">print()</code>.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Ответьте на вопросы и решите задачи. Для практики используйте онлайн-редактор Python, например, <a href="https://www.online-python.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">online-python.com</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Задача 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Вывод даты
        </h3>
        <p className="text-gray-300 mb-3">
          Напишите программу, которая выводит дату в формате <code className="bg-gray-700 px-1 rounded">ДД.ММ.ГГГГ</code>, используя три отдельные переменные для дня, месяца и года.
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700 text-sm">
          15.04.2024
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <p className="mt-2 text-sm text-gray-400">
            Используйте один вызов <code className="bg-gray-700 px-1 rounded">print()</code> с параметром <code className="bg-gray-700 px-1 rounded">sep</code>.
          </p>
        </details>
      </div>

      {/* Задача 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Горизонтальная линейка
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте горизонтальную линейку из 20 символов <code className="bg-gray-700 px-1 rounded">-</code> без перехода на новую строку. Сразу после неё выведите слово <code className="bg-gray-700 px-1 rounded">Конец</code> на той же строке.
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700 text-sm">
          -------------------- Конец
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <p className="mt-2 text-sm text-gray-400">
            Используйте два вызова <code className="bg-gray-700 px-1 rounded">print()</code> и параметр <code className="bg-gray-700 px-1 rounded">end</code>.
          </p>
        </details>
      </div>

      {/* Задача 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Список покупок
        </h3>
        <p className="text-gray-300 mb-3">
          Выведите список из 4 продуктов, каждый на новой строке, с номером в формате <code className="bg-gray-700 px-1 rounded">1. Продукт</code>. Используйте один вызов <code className="bg-gray-700 px-1 rounded">print()</code>.
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700 text-sm">
          1. Молоко<br />
          2. Хлеб<br />
          3. Яйца<br />
          4. Сахар
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <p className="mt-2 text-sm text-gray-400">
            Используйте параметр <code className="bg-gray-700 px-1 rounded">sep</code> с символом новой строки <code className="bg-gray-700 px-1 rounded">"\n"</code>.
          </p>
        </details>
      </div>

      {/* Задача 4 (Теоретическая) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Понимание <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">sep</code>
        </h3>
        <p className="text-gray-300 mb-3">
          Что будет выведено следующим кодом? Объясните свой ответ.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg mb-3">
          <pre className="text-green-400 text-sm"><code>{`a = "Привет"\nb = "Мир"\nprint(a, b, sep="***")`}</code></pre>
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p className="mb-2">Вспомните, за что отвечает параметр <code className="bg-gray-700 px-1 rounded">sep</code> и каково его значение по умолчанию?</p>
            <p><span className="font-medium">Ответ:</span> <code className="bg-gray-700 px-1 rounded">Привет***Мир</code>. Параметр <code className="bg-gray-700 px-1 rounded">sep</code> определяет, что будет выводиться между аргументами функции <code className="bg-gray-700 px-1 rounded">print()</code>. В данном случае, вместо пробела (значения по умолчанию) используется строка <code className="bg-gray-700 px-1 rounded">"***"</code>.</p>
          </div>
        </details>
      </div>

      {/* Задача 5 (Теоретическая) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Понимание <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">end</code>
        </h3>
        <p className="text-gray-300 mb-3">
          Что будет выведено следующим кодом? Объясните свой ответ.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg mb-3">
          <pre className="text-green-400 text-sm"><code>{`print("A", end="")\nprint("B", end="")\nprint("C")`}</code></pre>
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p className="mb-2">Вспомните, за что отвечает параметр <code className="bg-gray-700 px-1 rounded">end</code> и каково его значение по умолчанию?</p>
            <p><span className="font-medium">Ответ:</span> <code className="bg-gray-700 px-1 rounded">ABC</code> (все буквы на одной строке).</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Первый <code className="bg-gray-700 px-1 rounded">print("A", end="")</code> выводит <code className="bg-gray-700 px-1 rounded">A</code> и не добавляет ничего в конце (вместо <code className="bg-gray-700 px-1 rounded">\n</code>).</li>
              <li>Второй <code className="bg-gray-700 px-1 rounded">print("B", end="")</code> выводит <code className="bg-gray-700 px-1 rounded">B</code> сразу после <code className="bg-gray-700 px-1 rounded">A</code> и также не добавляет переход на новую строку.</li>
              <li>Третий <code className="bg-gray-700 px-1 rounded">print("C")</code> выводит <code className="bg-gray-700 px-1 rounded">C</code>. Так как параметр <code className="bg-gray-700 px-1 rounded">end</code> не указан, он использует значение по умолчанию <code className="bg-gray-700 px-1 rounded">\n</code>, добавляя переход на новую строку в конце.</li>
            </ul>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <Terminal className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-gray-300">
              Отличная работа! Понимание параметров <code className="bg-gray-700 px-1 rounded">sep</code> и <code className="bg-gray-700 px-1 rounded">end</code> — это важный шаг к гибкому и точному управлению выводом вашей программы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part4;