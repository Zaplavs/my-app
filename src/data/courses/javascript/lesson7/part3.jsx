// src/data/courses/javascript/lesson7/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Code, CheckCircle, GitBranch } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Условные операторы</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с условными операторами if, else, else if и тернарным оператором.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Проверка возраста
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Объявите переменную <code className="bg-gray-700 px-1 rounded">возраст</code> и напишите условие:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Если возраст больше или равен 18 — выведите "Доступ разрешен"</li>
          <li>Если возраст меньше 18 — выведите "Доступ запрещен"</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Протестируйте код с разными значениями возраста.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте операторы: <code className="bg-gray-700 px-1 rounded">if</code>, <code className="bg-gray-700 px-1 rounded">else</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Оценки успеваемости
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который по введённой оценке выводит текстовый эквивалент:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-green-300 mb-2">Диапазоны оценок:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>90-100: "Отлично"</li>
              <li>75-89: "Хорошо"</li>
              <li>60-74: "Удовлетворительно"</li>
              <li>0-59: "Неудовлетворительно"</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-blue-300 mb-2">Требования:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Используйте else if</li>
              <li>Проверяйте корректность ввода</li>
              <li>Выводите результат в консоль</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Протестируйте скрипт с разными значениями оценок.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте цепочку: <code className="bg-gray-700 px-1 rounded">if</code> → <code className="bg-gray-700 px-1 rounded">else if</code> → <code className="bg-gray-700 px-1 rounded">else</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Проверка доступа пользователя
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который проверяет права доступа пользователя:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Объявите переменные: <code className="bg-gray-700 px-1 rounded">роль</code> (строка) и <code className="bg-gray-700 px-1 rounded">активен</code> (булево)</li>
          <li>Если роль "админ" — доступ ко всему</li>
          <li>Если роль "пользователь" и активен — ограниченный доступ</li>
          <li>Если роль "пользователь" и не активен — доступ запрещен</li>
          <li>Для других ролей — "Роль не распознана"</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте вложенные условия или логические операторы.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`if (роль === "админ") { ... } else if (роль === "пользователь" && активен) { ... }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Тернарный оператор на практике
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который использует тернарный оператор для следующих задач:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-purple-300 mb-2">Задачи:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Определить, является ли число четным или нечетным</li>
              <li>Проверить, больше ли строка 10 символов</li>
              <li>Установить значение по умолчанию для переменной</li>
              <li>Выбрать приветствие в зависимости от времени суток</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Выведите результаты в консоль. Сравните с решением через if...else.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Синтаксис: <code className="bg-gray-700 px-1 rounded">условие ? значение1 : значение2</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная проверка данных
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для проверки корректности введенных данных пользователя:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Объявите переменные: <code className="bg-gray-700 px-1 rounded">имя</code>, <code className="bg-gray-700 px-1 rounded">возраст</code>, <code className="bg-gray-700 px-1 rounded">email</code></li>
          <li>Проверьте, что имя не пустое</li>
          <li>Проверьте, что возраст — число от 1 до 120</li>
          <li>Проверьте, что email содержит символ "@"</li>
          <li>Выведите сообщение об успешной проверке или об ошибках</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте комбинацию условных операторов и логических выражений.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`if (имя && возраст >= 1 && возраст <= 120 && email.includes("@")) { ... }`}</code></p>
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
              Эти задания помогли вам освоить работу с условными операторами в JavaScript: <code className="bg-gray-700 px-1 rounded">if</code>, <code className="bg-gray-700 px-1 rounded">else</code>, <code className="bg-gray-700 px-1 rounded">else if</code> и тернарным оператором. Вы научились создавать ветвления логики и принимать решения в коде!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;