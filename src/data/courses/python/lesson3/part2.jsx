// src/data/courses/python/lesson2/part2.jsx
import React from 'react';
import { BookOpen, Code, User, Database } from 'lucide-react';

const Part2 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🐍 Урок 2: Переменные — как коробочки для данных</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое переменная, научиться сохранять данные и использовать переменные в <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">print()</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое переменная */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-3">
          <Database className="w-5 h-5 text-purple-400" />
          🧠 Что такое переменная?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Представьте, что переменная — это <span className="font-medium text-yellow-300">коробочка</span>, в которую вы кладёте что-то (имя, возраст, цвет и т.д.), а потом можете достать это позже.
          </p>
          <p>
            В Python вы <span className="font-medium">даёте коробочке имя</span> и кладёте в неё значение:
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg my-4">
          <pre className="text-green-400 text-sm"><code>{`имя_переменной = значение`}</code></pre>
        </div>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p><span className="font-medium">Пример:</span></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <pre className="text-green-400 text-sm"><code>{`name = "Анна"`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <pre className="text-green-400 text-sm"><code>{`age = 15`}</code></pre>
          </div>
        </div>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теперь Python помнит:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><code className="bg-gray-700 px-1 rounded">name</code> → <code className="bg-gray-700 px-1 rounded">"Анна"</code></li>
            <li><code className="bg-gray-700 px-1 rounded">age</code> → <code className="bg-gray-700 px-1 rounded">15</code></li>
          </ul>
        </div>
      </div>

      {/* Задача 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Сохрани своё имя
        </h3>
        <p className="text-gray-300 mb-2">
          <span className="font-medium">🎯 Задание:</span> Создайте переменную <code className="bg-gray-700 px-1 rounded">name</code> и сохраните в неё своё имя. Затем выведите:
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700">
          Привет, [ваше имя]!
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg mb-3">
          <p className="text-sm text-gray-400 mb-2">✅ Решение:</p>
          <pre className="text-green-400 text-sm"><code>{`name = "Марк"\nprint("Привет, Марк!")`}</code></pre>
        </div>
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">🔍 Объяснение:</span> <code className="bg-gray-700 px-1 rounded">name = "Марк"</code> — мы <span className="font-medium">сохранили</span> строку <code className="bg-gray-700 px-1 rounded">"Марк"</code> в переменную с именем <code className="bg-gray-700 px-1 rounded">name</code>. Пока мы <span className="font-medium">не использовали</span> переменную в <code className="bg-gray-700 px-1 rounded">print()</code> — просто вставили имя вручную. Это первый шаг.
          </p>
        </div>
      </div>

      {/* Задача 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Используй переменную в выводе
        </h3>
        <p className="text-gray-300 mb-2">
          <span className="font-medium">🎯 Задание:</span> Используйте переменную <code className="bg-gray-700 px-1 rounded">name</code>, чтобы вывести: <code className="bg-gray-700 px-1 rounded">Привет, Анна!</code>. Имя должно браться <span className="font-medium">из переменной</span>, а не быть написанным в кавычках.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">✅ Решение 1:</p>
            <pre className="text-green-400 text-sm"><code>{`name = "Анна"\nprint("Привет,", name, "!")`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">✅ Решение 2 (f-строка):</p>
            <pre className="text-green-400 text-sm"><code>{`name = "Анна"\nprint(f"Привет, {name}!")`}</code></pre>
          </div>
        </div>
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">🔍 Объяснение:</span> <code className="bg-gray-700 px-1 rounded">name</code> — это переменная. Когда вы пишете <code className="bg-gray-700 px-1 rounded">name</code> в <code className="bg-gray-700 px-1 rounded">print()</code>, Python подставляет её значение. <code className="bg-gray-700 px-1 rounded">print("Привет,", name, "!")</code> → Python видит три части. По умолчанию они разделяются пробелом. Чтобы убрать лишние пробелы, можно использовать f-строки.
          </p>
        </div>
      </div>

      {/* Задача 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Сохрани возраст и выведи его
        </h3>
        <p className="text-gray-300 mb-2">
          <span className="font-medium">🎯 Задание:</span> Создайте переменную <code className="bg-gray-700 px-1 rounded">age</code> со своим возрастом. Выведите: <code className="bg-gray-700 px-1 rounded">Мне 14 лет.</code> Число должно браться из переменной.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">✅ Решение (f-строка):</p>
            <pre className="text-green-400 text-sm"><code>{`age = 14\nprint(f"Мне {age} лет.")`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">✅ Решение (без f-строки):</p>
            <pre className="text-green-400 text-sm"><code>{`age = 14\nprint("Мне", age, "лет.")`}</code></pre>
          </div>
        </div>
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">🔍 Объяснение:</span> <code className="bg-gray-700 px-1 rounded">age = 14</code> — сохраняем <span className="font-medium">число</span> (без кавычек!). В <code className="bg-gray-700 px-1 rounded">print()</code> можно выводить и строки, и числа. При использовании нескольких аргументов Python автоматически преобразует число в текст. f-строка — более чистый и современный способ.
          </p>
        </div>
      </div>

      {/* Задача 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Соедини имя и возраст
        </h3>
        <p className="text-gray-300 mb-2">
          <span className="font-medium">🎯 Задание:</span> Создайте переменные <code className="bg-gray-700 px-1 rounded">name</code> — ваше имя и <code className="bg-gray-700 px-1 rounded">age</code> — ваш возраст. Выведите строку: <code className="bg-gray-700 px-1 rounded">Меня зовут Лиза, мне 16 лет.</code> Используя f-строку.
        </p>
        <div className="bg-gray-900/50 p-4 rounded-lg mb-3">
          <p className="text-sm text-gray-400 mb-2">✅ Решение:</p>
          <pre className="text-green-400 text-sm"><code>{`name = "Лиза"\nage = 16\nprint(f"Меня зовут {name}, мне {age} лет.")`}</code></pre>
        </div>
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">🔍 Объяснение:</span> В f-строке фигурные скобки <code className="bg-gray-700 px-1 rounded">{'{}'}</code> означают: <span className="font-medium">подставь сюда значение переменной</span>. Python берёт значения <code className="bg-gray-700 px-1 rounded">name</code> и <code className="bg-gray-700 px-1 rounded">age</code> и вставляет их в текст. Это очень удобно.
          </p>
        </div>
      </div>

      {/* Задача 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Обнови значение переменной
        </h3>
        <p className="text-gray-300 mb-2">
          <span className="font-medium">🎯 Задание:</span> Создайте переменную <code className="bg-gray-700 px-1 rounded">score</code> со значением 0. Потом измените её на 100. Выведите:
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700">
          Счёт: 0<br />
          Счёт обновлён!<br />
          Счёт: 100
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg mb-3">
          <p className="text-sm text-gray-400 mb-2">✅ Решение:</p>
          <pre className="text-green-400 text-sm"><code>{`score = 0\nprint(f"Счёт: {score}")\n\nprint("Счёт обновлён!")\n\nscore = 100\nprint(f"Счёт: {score}")`}</code></pre>
        </div>
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">🔍 Объяснение:</span> Переменные <span className="font-medium">можно менять</span>! Это как замена содержимого коробочки. Сначала: <code className="bg-gray-700 px-1 rounded">score = 0</code> → в коробочке лежит <code className="bg-gray-700 px-1 rounded">0</code>. Потом: <code className="bg-gray-700 px-1 rounded">score = 100</code> → старое значение стирается, новое — сохраняется. Это основа для счётчиков, таймеров, игр и т.д.
          </p>
        </div>
      </div>

      {/* Итог урока */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl overflow-x-auto">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          🧠 Итог урока: что вы узнали
        </h2>
        <table className="min-w-full text-sm text-gray-300">
          <thead className="bg-gray-700/50">
            <tr>
              <th className="py-2 px-4 text-left">Концепт</th>
              <th className="py-2 px-4 text-left">Объяснение</th>
              <th className="py-2 px-4 text-left">Пример</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            <tr>
              <td className="py-2 px-4 font-medium text-yellow-300">Переменная</td>
              <td className="py-2 px-4">"Коробочка" для данных</td>
              <td className="py-2 px-4 font-mono text-green-400">name = "Том"</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-medium text-yellow-300">Присваивание</td>
              <td className="py-2 px-4"><code className="bg-gray-700 px-1 rounded">=</code> — сохраняет значение</td>
              <td className="py-2 px-4 font-mono text-green-400">age = 25</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-medium text-yellow-300">f-строка</td>
              <td className="py-2 px-4">Вставляет переменные в текст</td>
              <td className="py-2 px-4 font-mono text-green-400">f"Привет, {'{name}'}"</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-medium text-yellow-300">Изменение переменной</td>
              <td className="py-2 px-4">Можно перезаписать</td>
              <td className="py-2 px-4 font-mono text-green-400">score = 100</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-medium text-yellow-300">Имена переменных</td>
              <td className="py-2 px-4">Латиница, без пробелов</td>
              <td className="py-2 px-4 font-mono text-green-400">user_name, level</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Part2;