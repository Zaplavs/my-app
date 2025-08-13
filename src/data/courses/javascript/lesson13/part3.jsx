// src/data/courses/javascript/lesson13/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Play, Code, Settings } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Создание и вызов функций</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию и вызову функций, научиться использовать параметры и возвращать значения.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Математические функции
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Реализуйте следующие математические функции:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Функция для вычисления площади прямоугольника (длина, ширина)</li>
          <li>Функция для вычисления объема куба (сторона)</li>
          <li>Функция для нахождения максимального из трех чисел</li>
          <li>Функция для проверки, является ли число четным</li>
          <li>Функция для возведения числа в степень (основание, степень)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Вызовите каждую функцию несколько раз с разными аргументами. Выведите результаты в консоль.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">{`function имя(параметры) { return результат; }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа со строками
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт с функциями для обработки строк:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-blue-300 mb-2">Основные функции:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Функция для подсчета количества символов в строке</li>
              <li>Функция для переворота строки</li>
              <li>Функция для преобразования строки в верхний регистр</li>
              <li>Функция для проверки, содержит ли строка подстроку</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-cyan-300 mb-2">Дополнительные функции:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Функция для форматирования имени (первая буква заглавная)</li>
              <li>Функция для создания аббревиатуры из слов</li>
              <li>Функция для удаления пробелов в начале и конце строки</li>
              <li>Функция для повторения строки заданное количество раз</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Протестируйте функции с различными строками. Используйте параметры по умолчанию где возможно.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`function перевернуть(строка = "") { return строка.split('').reverse().join(''); }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Функции для работы с массивами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт с функциями для обработки массивов чисел:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Функция для нахождения суммы элементов массива</li>
          <li>Функция для нахождения среднего арифметического</li>
          <li>Функция для поиска максимального элемента</li>
          <li>Функция для фильтрации четных чисел</li>
          <li>Функция для проверки, содержит ли массив заданное число</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Создайте тестовый массив из 10-15 чисел. Примените все функции к этому массиву.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">{`function обработатьМассив(массив) { ... return результат; }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Интерактивные функции
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте интерактивное приложение с функциями для работы с пользовательским вводом:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-purple-300 mb-2">Функции:</div>
            <ul class="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Функция для приветствия пользователя по имени</li>
              <li>Функция для проверки возраста (совершеннолетие)</li>
              <li>Функция для форматирования цены (2 знака после запятой)</li>
              <li>Функция для валидации email</li>
              <li>Функция для генерации случайного числа в диапазоне</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте меню для выбора функции. Используйте prompt для получения данных от пользователя.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`function проверитьEmail(email) { return email.includes('@') && email.includes('.'); }`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексные функции и повторное использование
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, демонстрирующий повторное использование функций:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте функцию для форматирования даты</li>
          <li>Создайте функцию для расчета скидки (цена, процент скидки)</li>
          <li>Создайте функцию для проверки корректности данных пользователя</li>
          <li>Создайте функцию для генерации отчета (использующую другие функции)</li>
          <li>Создайте функцию для обработки массива объектов (пользователей/товаров)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Покажите, как одна и та же функция может использоваться в разных контекстах и с разными данными.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`function обработатьПользователей(пользователи) { return пользователи.map(пользователь => форматироватьДату(пользователь.дата)); }`}</code></p>
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
              Эти задания помогли вам освоить создание и вызов функций, работу с параметрами и возвратом значений. Вы научились создавать повторно используемый код и модульные функции!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;