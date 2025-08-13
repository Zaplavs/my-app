// src/data/courses/javascript/lesson12/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Pause, SkipForward, Target } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: break и continue</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с операторами break и continue, научиться использовать их для управления выполнением циклов.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Поиск элементов в массиве
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Реализуйте поиск элементов в массиве с использованием break:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте массив из 20 случайных чисел (от 1 до 100)</li>
          <li>Реализуйте поиск первого четного числа в массиве</li>
          <li>Реализуйте поиск первого числа, большего 80</li>
          <li>Реализуйте поиск заданного числа (с вводом от пользователя)</li>
          <li>Используйте break для досрочного выхода при нахождении</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Сравните эффективность поиска с использованием break и без него.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">{`if (условие) { ... break; }`}</code> для досрочного выхода</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Фильтрация данных с continue
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, который фильтрует данные массива с помощью continue:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-orange-300 mb-2">Исходные данные:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Массив из 15 элементов (числа, строки, null, undefined)</li>
              <li>Выведите только положительные числа</li>
              <li>Пропустите все falsy значения</li>
              <li>Выведите только строки длиной более 3 символов</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-red-300 mb-2">Дополнительные задачи:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Пропустите отрицательные числа</li>
              <li>Пропустите пустые строки</li>
              <li>Выведите только четные числа</li>
              <li>Пропустите значения вне диапазона 10-50</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Используйте continue для пропуска нежелательных элементов. Сравните с решением через вложенные условия.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">if (!элемент) continue;</code> для пропуска falsy значений</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Обработка пользовательского ввода
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте интерактивное приложение для обработки пользовательского ввода с использованием break и continue:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Запрашивайте у пользователя числа до тех пор, пока он не введет "стоп"</li>
          <li>Пропускайте (continue) некорректный ввод (не числа)</li>
          <li>Останавливайтесь (break) при вводе отрицательного числа</li>
          <li>Подсчитывайте сумму введенных положительных чисел</li>
          <li>Находите максимальное и минимальное из введенных чисел</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Добавьте обработку специальных команд: "сумма", "максимум", "минимум" для промежуточного вывода.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">{`while (true) { ... }`}</code> с break для выхода по команде</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Работа с двумерными массивами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для обработки двумерного массива (матрицы) с использованием break и continue:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-purple-300 mb-2">Задачи:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте матрицу 5x5 с случайными числами</li>
              <li>Найдите первое отрицательное число и его позицию (с break)</li>
              <li>Выведите только положительные числа из каждой строки (с continue)</li>
              <li>Пропустите обработку строк, начинающихся с 0</li>
              <li>Остановите обработку при нахождении числа больше 50</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Используйте вложенные циклы. Продемонстрируйте разницу между break во внутреннем и внешнем цикле.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`if (число < 0) { ... break; }`}</code> для остановки при нахождении</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Практические алгоритмы поиска
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, реализующий различные алгоритмы поиска и фильтрации с использованием break и continue:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Линейный поиск с досрочным выходом (break)</li>
          <li>Поиск в отсортированном массиве с оптимизацией</li>
          <li>Фильтрация массива по нескольким критериям (continue)</li>
          <li>Поиск первого элемента, удовлетворяющего сложному условию</li>
          <li>Обработка массива с остановкой при достижении порога</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Реализуйте функции для каждого алгоритма. Сравните производительность с и без использования break/continue.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`if (элемент > искомый && массив_отсортирован) break;`}</code> для оптимизации поиска</p>
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
              Эти задания помогли вам освоить работу с операторами break и continue, научиться управлять выполнением циклов и создавать эффективные алгоритмы поиска и фильтрации данных!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;