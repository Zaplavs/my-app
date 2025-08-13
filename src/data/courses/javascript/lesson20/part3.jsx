// src/data/courses/javascript/lesson20/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Type, Palette, Settings } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-pink-900/30 to-rose-900/30 backdrop-blur-sm border border-pink-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-pink-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-pink-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Изменение содержимого и стилей</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по изменению текстового содержимого, стилей и атрибутов элементов DOM.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Работа с текстовым содержимым
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с различными текстовыми элементами. Реализуйте следующие задачи:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте статью с заголовками, абзацами и списками</li>
          <li>Реализуйте функции для динамического изменения текстового содержимого</li>
          <li>Создайте редактор текста с возможностью форматирования (жирный, курсив)</li>
          <li>Реализуйте систему отображения пользовательского ввода безопасно</li>
          <li>Создайте функции для получения и анализа текстового содержимого</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Сравните использование textContent и innerHTML в различных сценариях. Продемонстрируйте защиту от XSS атак.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">элемент.textContent = безопасныйТекст</code> для пользовательского ввода</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Управление стилями элементов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для демонстрации динамического управления стилями элементов:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-pink-300 mb-2">Базовые стили:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте элементы с различными базовыми стилями</li>
              <li>Реализуйте функции для изменения цвета, размера, шрифта</li>
              <li>Создайте систему тем оформления (светлая/темная)</li>
              <li>Реализуйте анимации через изменение стилей</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-blue-300 mb-2">Продвинутые стили:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте интерактивные элементы с hover-эффектами</li>
              <li>Реализуйте систему валидации форм с визуальной обратной связью</li>
              <li>Создайте динамическую галерею с эффектами перехода</li>
              <li>Реализуйте адаптивные стили для разных размеров экрана</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Протестируйте различные CSS-свойства и их взаимодействие. Создайте функции для массового изменения стилей.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">элемент.style.cssText = "все стили"</code> для массового применения</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Работа с атрибутами элементов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для работы с HTML-атрибутами элементов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте форму с различными типами полей ввода</li>
          <li>Реализуйте функции для получения и установки атрибутов</li>
          <li>Создайте систему валидации полей через атрибуты (required, pattern)</li>
          <li>Реализуйте работу с data-атрибутами для хранения пользовательских данных</li>
          <li>Создайте функции для динамического изменения атрибутов изображений и ссылок</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Протестируйте работу с различными типами атрибутов и методами их управления.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">элемент.dataset.имяАтрибута = "значение"</code> для data-атрибутов</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Сравнение методов и производительность
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для сравнения производительности и удобства разных методов работы с содержимым:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-orange-300 mb-2">Производительность:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте тесты для измерения времени выполнения textContent и innerHTML</li>
              <li>Сравните производительность при работе с простым текстом и HTML</li>
              <li>Измерьте время изменения стилей через style и через className</li>
              <li>Создайте отчет о результатах сравнения производительности</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-green-300 mb-2">Безопасность и удобство:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте примеры безопасной и небезопасной работы с содержимым</li>
              <li>Реализуйте функции для очистки пользовательского ввода</li>
              <li>Создайте систему валидации и санитизации данных</li>
              <li>Реализуйте универсальные функции для работы с содержимым элементов</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Сделайте выводы о том, когда какой метод использовать для оптимальной производительности и безопасности.
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
          Комплексные задачи манипуляции DOM
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, демонстрирующий комплексное использование методов изменения содержимого и стилей:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте интерактивный редактор статей с возможностью форматирования</li>
          <li>Реализуйте систему управления галереей изображений с фильтрацией</li>
          <li>Создайте динамическую форму с валидацией и персонализацией</li>
          <li>Реализуйте систему персонализированных карточек пользователей</li>
          <li>Создайте инструмент для анализа и модификации веб-страниц</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте комбинации textContent, innerHTML, element.style, атрибутов и data-атрибутов для решения комплексных задач.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{"элемент.innerHTML = форматированныйТекст; элемент.style.transition = 'all 0.3s'; элемент.dataset.modified = Date.now();"}</code></p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-pink-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-pink-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам освоить изменение содержимого, стилей и атрибутов элементов DOM в JavaScript!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;