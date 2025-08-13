// src/data/courses/javascript/lesson21/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, MousePointer, Type, Send } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Обработка событий</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по обработке событий DOM, работе с addEventListener() и объектом события.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Основы работы с событиями click
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с интерактивными элементами. Реализуйте следующие задачи:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте панель с кнопками для разных действий (сохранить, удалить, редактировать)</li>
          <li>Реализуйте обработчики кликов с различными реакциями на каждую кнопку</li>
          <li>Создайте систему подсчета кликов по кнопкам с отображением статистики</li>
          <li>Реализуйте обработку двойного клика (dblclick) для специальных действий</li>
          <li>Создайте функции для добавления и удаления обработчиков событий</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Продемонстрируйте работу с this в обработчиках и различие между target и currentTarget.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">элемент.addEventListener("click", обработчик)</code> и анализируйте контекст this</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа с событиями ввода (input)
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для демонстрации работы с событиями ввода:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-green-300 mb-2">Валидация форм:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте форму с полями ввода разных типов (текст, email, пароль)</li>
              <li>Реализуйте валидацию в реальном времени при вводе</li>
              <li>Создайте визуальную обратную связь (цвета, иконки)</li>
              <li>Реализуйте ограничения на ввод (максимальная длина, формат)</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-yellow-300 mb-2">Динамический интерфейс:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте поиск с автодополнением в реальном времени</li>
              <li>Реализуйте фильтрацию списков при вводе</li>
              <li>Создайте счетчики символов для текстовых полей</li>
              <li>Реализуйте маски ввода для специальных данных (телефон, дата)</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Протестируйте различные типы событий ввода: input, change, keydown, keyup.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">{`поле.addEventListener("input", function(e) { ... })`}</code> для реального времени</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Обработка событий формы (submit)
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для работы с событиями отправки форм:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте комплексные формы с множеством полей и валидацией</li>
          <li>Реализуйте предотправочную валидацию всех полей</li>
          <li>Создайте систему отображения ошибок с подсветкой проблемных полей</li>
          <li>Реализуйте имитацию AJAX-отправки формы без перезагрузки страницы</li>
          <li>Создайте функции для сброса формы и очистки состояния</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Протестируйте работу с preventDefault() и различные сценарии отправки форм.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">{`форма.addEventListener("submit", function(e) { e.preventDefault(); ... })`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Всплытие событий и делегирование
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для изучения всплытия событий и делегирования:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-orange-300 mb-2">Всплытие событий:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте вложенную структуру элементов с обработчиками на разных уровнях</li>
              <li>Реализуйте визуализацию фаз события (захват, цель, всплытие)</li>
              <li>Создайте функции для остановки всплытия и немедленной остановки</li>
              <li>Протестируйте работу с фазой захвата (capture: true)</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-purple-300 mb-2">Делегирование событий:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте динамически генерируемый список с кнопками действий</li>
              <li>Реализуйте делегирование событий для обработки действий новых элементов</li>
              <li>Создайте систему управления динамическими элементами</li>
              <li>Реализуйте оптимизацию производительности через делегирование</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Сравните производительность прямой привязки и делегирования событий.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">e.stopPropagation()</code> и <code className="bg-gray-700 px-1 rounded">родитель.addEventListener("click", обработчик, true)</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексные задачи обработки событий
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, демонстрирующий комплексное использование обработки событий:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте интерактивную галерею изображений с навигацией и полноэкранным режимом</li>
          <li>Реализуйте систему drag & drop для сортировки элементов</li>
          <li>Создайте редактор текста с панелью инструментов и горячими клавишами</li>
          <li>Реализуйте систему модальных окон с различными типами контента</li>
          <li>Создайте интерактивную карту с точками интереса и всплывающими подсказками</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте комбинации различных событий, делегирование и продвинутую обработку для решения комплексных задач.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{"document.addEventListener('keydown', function(e) { if (e.key === 'Escape') закрытьМодальноеОкно(); });"}</code></p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-cyan-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам освоить обработку событий DOM, работу с addEventListener() и объектом события в JavaScript!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;