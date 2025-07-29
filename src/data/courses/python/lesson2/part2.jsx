// src/data/courses/python/lesson1/part2.jsx
import React from 'react';
import { BookOpen, Code, Terminal, AlertCircle } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🐍 Урок 1: Вывод текста в Python</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Функция <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">print()</code> и её параметры</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться управлять форматом вывода с помощью параметров <code className="bg-gray-700 px-1 rounded">sep</code> и <code className="bg-gray-700 px-1 rounded">end</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Что понадобится */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <Terminal className="w-5 h-5 text-green-400" />
          🔧 Что вам понадобится:
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Браузер и доступ к онлайн-редактору Python, например, <a href="https://www.online-python.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">online-python.com</a></li>
          <li>Или установленный Python на компьютере</li>
        </ul>
      </div>

      {/* Общее напоминание */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-3">📌 Общее напоминание:</h3>
        <div className="bg-gray-900 p-4 rounded-lg mb-4">
          <code className="text-yellow-300">print(значение, значение, ...)</code>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Выводит текст на экран</li>
          <li>Можно передать несколько значений через запятую</li>
          <li><span className="font-medium">По умолчанию:</span>
            <ul className="list-none pl-5 mt-1 space-y-1">
              <li><code className="bg-gray-700 px-1 rounded">sep=" "</code> — между значениями ставится <span className="font-medium">пробел</span></li>
              <li><code className="bg-gray-700 px-1 rounded">end="\n"</code> — после вывода идёт <span className="font-medium">переход на новую строку</span></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Задача 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-3">✅ Задача 1: Вывести два приветствия на отдельных строках</h3>
        <p className="text-gray-300 mb-2">
          <span className="font-medium">🎯 Задание:</span> Напишите программу, которая выводит:
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700">
          Привет, друг!<br />
          Сегодня мы начинаем учить Python.
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg mb-3">
          <p className="text-sm text-gray-400 mb-2">✅ Решение:</p>
          <pre className="text-green-400 text-sm"><code>{`print("Привет, друг!")\nprint("Сегодня мы начинаем учить Python.")`}</code></pre>
        </div>
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">🔍 Объяснение:</span> Каждая команда <code className="bg-gray-700 px-1 rounded">print()</code> выводит текст и <span className="font-medium">автоматически переходит на новую строку</span>. Это поведение по умолчанию для параметра <code className="bg-gray-700 px-1 rounded">end="\n"</code>.
          </p>
        </div>
      </div>

      {/* Задача 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-3">✅ Задача 2: Вывести данные через двоеточие</h3>
        <p className="text-gray-300 mb-2">
          <span className="font-medium">🎯 Задание:</span> Напишите программу, которая выводит:
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700">
          Имя:Анна|Возраст:15|Город:Москва
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg mb-3">
          <p className="text-sm text-gray-400 mb-2">✅ Решение:</p>
          <pre className="text-green-400 text-sm"><code>{`print("Имя:Анна", "Возраст:15", "Город:Москва", sep="|")`}</code></pre>
        </div>
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">🔍 Объяснение:</span> Параметр <code className="bg-gray-700 px-1 rounded">sep</code> определяет, <span className="font-medium">чем разделять аргументы</span>. Мы изменили его значение по умолчанию (<code className="bg-gray-700 px-1 rounded">" "</code>) на <code className="bg-gray-700 px-1 rounded">"|"</code>.
          </p>
        </div>
      </div>

      {/* Задача 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-3">✅ Задача 3: Вывести текст в одной строке с помощью двух <code className="bg-gray-700 px-1 rounded">print()</code></h3>
        <p className="text-gray-300 mb-2">
          <span className="font-medium">🎯 Задание:</span> Выведите <code className="bg-gray-700 px-1 rounded">Python — это просто и понятно.</code> с помощью двух команд <code className="bg-gray-700 px-1 rounded">print()</code> в одной строке.
        </p>
        <div className="bg-gray-900/50 p-4 rounded-lg mb-3">
          <p className="text-sm text-gray-400 mb-2">✅ Решение:</p>
          <pre className="text-green-400 text-sm"><code>{`print("Python — это просто", end=" ")\nprint("и понятно.")`}</code></pre>
        </div>
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">🔍 Объяснение:</span> Параметр <code className="bg-gray-700 px-1 rounded">end</code> определяет, <span className="font-medium">что будет в конце вывода</span>. Мы изменили его значение по умолчанию (<code className="bg-gray-700 px-1 rounded">"\n"</code>) на <code className="bg-gray-700 px-1 rounded">" "</code> (пробел), чтобы следующий <code className="bg-gray-700 px-1 rounded">print()</code> продолжил писать на той же строке.
          </p>
        </div>
      </div>

      {/* Задача 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-3">✅ Задача 4: Сделать "склеенный" вывод без пробелов</h3>
        <p className="text-gray-300 mb-2">
          <span className="font-medium">🎯 Задание:</span> Выведите <code className="bg-gray-700 px-1 rounded">Hello,World!</code> без пробела между частями и в одной строке.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">✅ Решение 1 (с <code className="bg-gray-700 px-1 rounded">end</code>):</p>
            <pre className="text-green-400 text-sm"><code>{`print("Hello,", end="")\nprint("World!")`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">✅ Решение 2 (простой способ):</p>
            <pre className="text-green-400 text-sm"><code>{`print("Hello,World!")`}</code></pre>
          </div>
        </div>
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">🔍 Объяснение:</span> Установка <code className="bg-gray-700 px-1 rounded">end=""</code> означает, что после первого вывода ничего не добавляется (ни пробела, ни новой строки), позволяя "склеить" результаты.
          </p>
        </div>
      </div>

      {/* Задача 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-3">✅ Задача 5: Собрать сложную строку с разными разделителями</h3>
        <p className="text-gray-300 mb-2">
          <span className="font-medium">🎯 Задание:</span> Выведите:
        </p>
        <div className="bg-gray-900 p-3 rounded-lg mb-3 font-mono text-gray-300 border border-gray-700">
          [LOG] Ошибка: Файл не найден (код: 404)
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg mb-3">
          <p className="text-sm text-gray-400 mb-2">✅ Решение (с <code className="bg-gray-700 px-1 rounded">sep</code>):</p>
          <pre className="text-green-400 text-sm"><code>{`print("[LOG]", "Ошибка:", "Файл не найден", "(код: 404)", sep=" ")`}</code></pre>
        </div>
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">🔍 Объяснение:</span> Используя параметр <code className="bg-gray-700 px-1 rounded">sep=" "</code>, мы явно указываем, что аргументы должны быть разделены пробелом. Хотя это значение по умолчанию, пример показывает, как его можно использовать для ясности.
          </p>
        </div>
      </div>

      {/* Итоговая таблица */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl overflow-x-auto">
        <h3 className="text-lg font-bold text-white mb-4">🧠 Итог: Что вы узнали</h3>
        <table className="min-w-full text-sm text-gray-300">
          <thead className="bg-gray-700/50">
            <tr>
              <th className="py-2 px-4 text-left">Параметр</th>
              <th className="py-2 px-4 text-left">Значение по умолчанию</th>
              <th className="py-2 px-4 text-left">Что делает</th>
              <th className="py-2 px-4 text-left">Пример</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            <tr>
              <td className="py-2 px-4 font-mono text-purple-300">sep</td>
              <td className="py-2 px-4"><code className="bg-gray-700 px-1 rounded">" "</code> (пробел)</td>
              <td className="py-2 px-4">Как соединять аргументы</td>
              <td className="py-2 px-4 font-mono text-green-400">print("a","b", sep="-") → a-b</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-mono text-red-300">end</td>
              <td className="py-2 px-4"><code className="bg-gray-700 px-1 rounded">"\n"</code> (новая строка)</td>
              <td className="py-2 px-4">Что будет в конце</td>
              <td className="py-2 px-4 font-mono text-green-400">print("a", end=" ") → дальше в той же строке</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Part2;