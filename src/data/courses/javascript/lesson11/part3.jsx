// src/data/courses/javascript/lesson11/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Shuffle, RotateCw, RotateCcw } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Цикл while и do...while</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с циклами while и do...while, научиться выбирать подходящий цикл для задач.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Математические вычисления с while
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Реализуйте следующие математические задачи с помощью цикла while:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Найдите сумму всех четных чисел от 1 до 100</li>
          <li>Найдите произведение чисел от 1 до 10 (факториал 10)</li>
          <li>Выведите все степени двойки, которые меньше 1000</li>
          <li>Найдите первое число Фибоначчи, которое больше 1000</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте цикл while для решения каждой задачи. Выведите результаты в консоль с пояснениями.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">{`{while (условие) { ... }`}</code> с изменением счетчика внутри цикла</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа с пользовательским вводом
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который взаимодействует с пользователем через prompt и использует цикл while:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-cyan-300 mb-2">Задачи:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Запрашивайте у пользователя числа до тех пор, пока он не введет 0</li>
              <li>Подсчитывайте сумму введенных чисел</li>
              <li>Находите максимальное и минимальное из введенных чисел</li>
              <li>Подсчитывайте количество введенных чисел</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-blue-300 mb-2">Дополнительно:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Проверяйте корректность ввода (число ли это)</li>
              <li>Обрабатывайте случай отмены ввода (null)</li>
              <li>Выводите статистику после завершения</li>
              <li>Предлагайте повторный запуск</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Используйте цикл while для непрерывного запроса данных. Обработайте все возможные случаи ввода.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`let ввод; while (ввод !== "0" && ввод !== null) { ... }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Меню с do...while
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который реализует интерактивное меню с помощью цикла do...while:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте текстовое меню с 4-5 пунктами действий</li>
          <li>Используйте do...while для отображения меню хотя бы один раз</li>
          <li>Реализуйте разные действия для каждого пункта меню</li>
          <li>Добавьте возможность выхода из программы</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Пример меню: 1 - Калькулятор, 2 - Генератор паролей, 3 - Угадай число, 4 - Выход
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">{`do { ... } while (выбор !== "выход")`}</code> для гарантированного показа меню</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Игра "Угадай число"
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте интерактивную игру "Угадай число" с использованием цикла do...while:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-purple-300 mb-2">Правила игры:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Компьютер загадывает число от 1 до 100</li>
              <li>Пользователь пытается угадать число</li>
              <li>После каждой попытки выводится подсказка (больше/меньше)</li>
              <li>Игра продолжается до угадывания числа</li>
              <li>В конце показывается количество попыток</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Используйте do...while для гарантированного первого запроса. Добавьте возможность начать новую игру.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`do { попытка = prompt(...); } while (попытка !== загаданное)`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Обработка массивов и поиск
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который демонстрирует различные способы обработки массивов с помощью циклов while:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте массив из 15-20 случайных чисел</li>
          <li>Найдите первое четное число в массиве (или сообщите, что его нет)</li>
          <li>Найдите все числа больше заданного порога</li>
          <li>Реализуйте линейный поиск элемента в массиве</li>
          <li>Подсчитайте количество положительных/отрицательных чисел</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте цикл while с индексом для перебора массива. Сравните с решением через for.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`let i = 0; while (i < массив.length) { ... i++; }`}</code></p>
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
              Эти задания помогли вам освоить работу с циклами while и do...while, научиться выбирать подходящий цикл для разных задач и создавать интерактивные приложения!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;