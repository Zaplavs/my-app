// src/data/courses/markdown/lesson19/part3.jsx
import React from 'react';
import { Notebook, Edit3, Code, FunctionSquare, Image, Table } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Edit3 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Markdown в Jupyter Notebook</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию Markdown-ячеек в Jupyter Notebook для документирования анализа данных, вставки формул, изображений и таблиц.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание отчета по анализу данных
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Jupyter Notebook <code className="bg-gray-700 px-2 py-1 rounded">data-analysis-report.ipynb</code> - отчет по вымышленному анализу данных о продажах. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Markdown-ячейка: Заголовок 1 уровня "Анализ продаж за 2023 год"</li>
          <li>Markdown-ячейка: Краткое описание целей отчета</li>
          <li>{`Code-ячейка: Простой код Python, создающий переменную с результатами (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">total_sales = 1500000</code>)`}</li>
          <li>Markdown-ячейка: Заголовок 2 уровня "Методология"</li>
          <li>Markdown-ячейка: Описание использованных данных и методов анализа</li>
          <li>{`Code-ячейка: Простой код Python, выводящий результаты (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">print(f"Общая сумма продаж: {total_sales}")</code>)`}</li>
          <li>Markdown-ячейка: Заголовок 2 уровня "Результаты"</li>
          <li>Markdown-ячейка: Описание ключевых результатов с использованием маркированного списка</li>
          <li>Markdown-ячейка: Таблица с данными по кварталам (Квартал, Продажи, Рост к предыдущему кварталу)</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте горизонтальную линию <code className="bg-gray-700 px-1.5 py-0.5 rounded">---</code> для разделения секций. Для таблицы используйте синтаксис с дефисами и вертикальными чертами.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Учебный материал по статистике
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">statistics-tutorial.ipynb</code> - интерактивный учебник по основам статистики. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Markdown-ячейка: Заголовок 1 уровня "Основы статистики"</li>
          <li>Markdown-ячейка: Введение в предмет</li>
          <li>Markdown-ячейка: Заголовок 2 уровня "Меры центральной тенденции"</li>
          <li>Markdown-ячейка: Определения среднего, медианы и моды с формулами LaTeX</li>
          <li>Code-ячейка: Пример вычисления среднего значения на Python</li>
          <li>Markdown-ячейка: Заголовок 3 уровня "Пример расчета"</li>
          <li>Markdown-ячейка: Пошаговое объяснение расчета с использованием нумерованного списка</li>
          <li>Markdown-ячейка: Заголовок 2 уровня "Меры изменчивости"</li>
          <li>Markdown-ячейка: Определение дисперсии и стандартного отклонения с формулами LaTeX</li>
          <li>Code-ячейка: Пример вычисления стандартного отклонения на Python</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для формул используйте инлайновый синтаксис <code className="bg-gray-700 px-1.5 py-0.5 rounded">$...$</code> и блочный <code className="bg-gray-700 px-1.5 py-0.5 rounded">$$...$$</code>. Пример формулы среднего: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Проект с визуализацией данных
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Jupyter Notebook <code className="bg-gray-700 px-2 py-1 rounded">data-viz-project.ipynb</code> - проект с анализом и визуализацией вымышленного набора данных. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Markdown-ячейка: Заголовок 1 уровня "Проект: Анализ данных о погоде"</li>
          <li>Markdown-ячейка: Описание проекта и источника данных</li>
          <li>Code-ячейка: Импорт библиотек (pandas, matplotlib, seaborn)</li>
          <li>Code-ячейка: Создание вымышленного DataFrame с данными о погоде</li>
          <li>Markdown-ячейка: Заголовок 2 уровня "Предварительный анализ данных"</li>
          <li>Markdown-ячейка: Описание структуры данных</li>
          <li>Code-ячейка: Вывод первых строк данных</li>
          <li>Markdown-ячейка: Заголовок 2 уровня "Визуализация"</li>
          <li>Markdown-ячейка: Описание планируемых графиков</li>
          <li>Code-ячейка: Создание графика (например, линейный график температуры)</li>
          <li>Markdown-ячейка: Вставка сохраненного изображения графика с помощью Markdown</li>
          <li>Markdown-ячейка: Интерпретация результатов с использованием цитат</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для вставки изображения используйте синтаксис <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`![Описание](путь/к/изображению.png)`}</code>. Для цитат используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`> Текст цитаты`}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Сравнительный анализ методов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">ml-methods-comparison.ipynb</code> - сравнительный анализ двух методов машинного обучения. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Markdown-ячейка: Заголовок 1 уровня "Сравнение методов классификации"</li>
          <li>Markdown-ячейка: Введение и цель сравнения</li>
          <li>Markdown-ячейка: Заголовок 2 уровня "Метод 1: Логистическая регрессия"</li>
          <li>Markdown-ячейка: Описание метода с математической формулой</li>
          <li>Code-ячейка: Пример реализации на Python</li>
          <li>Markdown-ячейка: Заголовок 2 уровня "Метод 2: Метод опорных векторов (SVM)"</li>
          <li>Markdown-ячейка: Описание метода с математической формулой</li>
          <li>Code-ячейка: Пример реализации на Python</li>
          <li>Markdown-ячейка: Заголовок 2 уровня "Сравнительная таблица"</li>
          <li>Markdown-ячейка: Таблица сравнения методов (Скорость, Точность, Сложность)</li>
          <li>Markdown-ячейка: Заголовок 2 уровня "Выводы"</li>
          <li>Markdown-ячейка: Рекомендации по выбору метода с использованием todo-списка</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для todo-списка используйте синтаксис <code className="bg-gray-700 px-1.5 py-0.5 rounded">- [ ] Задача</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">- [x] Выполненная задача</code>. Для формул SVM можно использовать: <code className="bg-gray-700 px-1.5 py-0.5 rounded"></code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с расширенными возможностями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Jupyter Notebook <code className="bg-gray-700 px-2 py-1 rounded">advanced-markdown.ipynb</code>, демонстрирующий все изученные возможности Markdown в Jupyter:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Различные уровни заголовков (H1-H6)</li>
          <li>Форматирование текста (жирный, курсив, зачёркнутый)</li>
          <li>Списки (маркированные, нумерованные, вложенные)</li>
          <li>Ссылки и автоматические ссылки</li>
          <li>Математические формулы (инлайновые и блочные)</li>
          <li>Таблицы с выравниванием</li>
          <li>Изображения с разными источниками</li>
          <li>Цитаты и вложенные элементы</li>
          <li>Горизонтальные линии</li>
          <li>Кодовые блоки с подсветкой синтаксиса</li>
          <li>HTML-элементы внутри Markdown</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждому примеру, объясняя, где и почему вы использовали ту или иную возможность.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Notebook className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования Markdown-ячеек в Jupyter Notebook. 
              Вы научились создавать структурированные отчеты, вставлять математические формулы, таблицы и изображения. 
              Эти навыки важны для анализа данных, машинного обучения и научных исследований. 
              Jupyter Notebook с правильно оформленными Markdown-ячейками становится мощным инструментом для документирования и презентации результатов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
