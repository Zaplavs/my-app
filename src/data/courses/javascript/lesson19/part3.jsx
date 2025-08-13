// src/data/courses/javascript/lesson19/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Globe, Target, Search } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Что такое DOM и как к нему обращаться?</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с DOM, освоить методы поиска элементов getElementById(), querySelector(), querySelectorAll().
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Основы работы с getElementById()
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с различными элементами, имеющими уникальные ID. Реализуйте следующие задачи:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте форму с полями ввода, кнопками и текстовыми элементами, каждый с уникальным ID</li>
          <li>Реализуйте функции для получения и изменения содержимого элементов по ID</li>
          <li>Создайте функцию для изменения стилей элементов (цвет, размер шрифта, видимость)</li>
          <li>Реализуйте валидацию наличия элементов перед работой с ними</li>
          <li>Создайте систему управления видимостью элементов (показать/скрыть)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Выведите результаты в консоль и на страницу. Продемонстрируйте обработку случаев, когда элемент не найден.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">let элемент = document.getElementById("id")</code> и проверяйте на null</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа с querySelector()
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для демонстрации работы с querySelector() и различными CSS-селекторами:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-blue-300 mb-2">Простые селекторы:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте HTML с элементами разных тегов, классов и ID</li>
              <li>Реализуйте поиск элементов по тегам, классам и ID</li>
              <li>Создайте функции для поиска элементов по атрибутам</li>
              <li>Реализуйте поиск вложенных элементов</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-purple-300 mb-2">Сложные селекторы:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте сложную HTML структуру с вложенными элементами</li>
              <li>Реализуйте поиск по псевдоклассам (:first-child, :nth-child)</li>
              <li>Создайте функции для поиска комбинированных селекторов</li>
              <li>Реализуйте поиск элементов с несколькими классами</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Сравните результаты поиска с различными селекторами и обработайте случаи отсутствия элементов.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{`document.querySelector("div.container > p:first-child")`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Использование querySelectorAll()
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для работы с коллекциями элементов с помощью querySelectorAll():
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте HTML с группами однотипных элементов (списки, карточки, кнопки)</li>
          <li>Реализуйте функции для массового изменения свойств элементов</li>
          <li>Создайте систему добавления обработчиков событий ко всем элементам коллекции</li>
          <li>Реализуйте фильтрацию и сортировку элементов в коллекции</li>
          <li>Создайте функции для работы с NodeList как с массивом</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Протестируйте работу с различными типами коллекций и методами перебора.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">элементы.forEach()</code> или <code className="bg-gray-700 px-1 rounded">Array.from(элементы)</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Сравнение методов поиска элементов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для сравнения производительности и удобства разных методов поиска:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-orange-300 mb-2">Производительность:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте большую HTML страницу с множеством элементов</li>
              <li>Измерьте время выполнения каждого метода поиска</li>
              <li>Сравните производительность при разных условиях поиска</li>
              <li>Создайте отчет о результатах сравнения производительности</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-green-300 mb-2">Удобство использования:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте примеры, где каждый метод наиболее эффективен</li>
              <li>Реализуйте универсальные функции поиска с авто-выбором метода</li>
              <li>Создайте систему кэширования найденных элементов</li>
              <li>Реализуйте обработку ошибок и граничных случаев</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Сделайте выводы о том, когда какой метод использовать для оптимальной производительности.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 rounded">console.time()</code> и <code className="bg-gray-700 px-1 rounded">console.timeEnd()</code> для измерения времени</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексные задачи работы с DOM
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, демонстрирующий комплексное использование методов поиска элементов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте интерактивную галерею изображений с навигацией</li>
          <li>Реализуйте систему фильтрации и сортировки списка элементов</li>
          <li>Создайте форму с валидацией и динамическим управлением полями</li>
          <li>Реализуйте систему вкладок (tabs) с переключением содержимого</li>
          <li>Создайте инструмент для анализа структуры DOM страницы</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте комбинации getElementById(), querySelector(), querySelectorAll() для решения комплексных задач.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{"let активнаяВкладка = document.querySelector('.tab.active'); let содержимое = document.getElementById(активнаяВкладка.dataset.content);"}</code></p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-indigo-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам освоить работу с DOM и методами поиска элементов в JavaScript!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;