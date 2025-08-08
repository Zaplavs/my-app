// src/data/courses/markdown/lesson20/part3.jsx
import React from 'react';
import { Database, Edit3, PenTool, BookOpen, FileText, Download } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Markdown в CMS (Notion, Ghost, Docusaurus)</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию Markdown в различных CMS: Notion, Ghost и Docusaurus.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Миграция документации из Notion в Docusaurus
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документацию для вымышленного проекта в Notion, а затем экспортируйте её в Markdown и адаптируйте для Docusaurus. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте страницу в Notion с названием "Документация API проекта TaskMaster"</li>
          <li>Добавьте разделы: "Введение", "Начало работы", "Аутентификация", "Эндпоинты", "Ошибки"</li>
          <li>Используйте заголовки, списки, кодовые блоки и таблицы в стиле Notion</li>
          <li>Экспортируйте страницу как Markdown-файл</li>
          <li>Адаптируйте экспортированный файл для Docusaurus:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Добавьте Front Matter с заголовком и sidebar_label</li>
              <li>Преобразуйте заголовки в соответствии с Docusaurus</li>
              <li>Добавьте специальные блоки admonitions где необходимо</li>
              <li>Проверьте корректность ссылок и изображений</li>
            </ul>
          </li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Front Matter в Docusaurus: <code className="bg-gray-700 px-1.5 py-0.5 rounded">--- title: Название sidebar_label: Ярлык ---</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Создание блога в Ghost с Markdown
        </h3>
        <p className="text-gray-300 mb-3">
          Напишите и опубликуйте в Ghost статью "Почему Markdown - лучший выбор для технических блогов". Требования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок статьи H1</li>
          <li>Краткое введение с эмодзи</li>
          <li>Раздел "Преимущества Markdown":
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Список преимуществ с пояснениями</li>
              <li>Примеры кода с подсветкой синтаксиса</li>
              <li>Таблица сравнения с WYSIWYG-редакторами</li>
            </ul>
          </li>
          <li>Раздел "Как начать использовать Markdown":
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Нумерованный список шагов</li>
              <li>Цитаты с советами</li>
              <li>Ссылки на полезные ресурсы</li>
            </ul>
          </li>
          <li>Заключение с призывом к действию</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте горячие клавиши Ghost для быстрого форматирования: Ctrl+H для заголовков, Ctrl+Shift+I для изображений.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Сравнительный анализ CMS
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">cms-comparison.md</code> - подробный сравнительный анализ Notion, Ghost и Docusaurus. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Сравнение CMS: Notion, Ghost, Docusaurus"</li>
          <li>Введение с кратким описанием каждой CMS</li>
          <li>Таблицу сравнения по критериям:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Основное назначение</li>
              <li>Поддержка Markdown</li>
              <li>Возможности совместной работы</li>
              <li>Интеграции и расширяемость</li>
              <li>Целевая аудитория</li>
              <li>Стоимость и хостинг</li>
            </ul>
          </li>
          <li>Раздел "Когда использовать каждую CMS":
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Рекомендации по выбору для разных сценариев</li>
              <li>Примеры использования</li>
            </ul>
          </li>
          <li>Заключение с выводами</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для таблиц используйте синтаксис с выравниванием: <code className="bg-gray-700 px-1.5 py-0.5 rounded">|:---|:---:|---:|</code> для левого, центрального и правого выравнивания.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Создание документации в Docusaurus
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте структуру документации для вымышленного npm-пакета "markdown-utils" в Docusaurus. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Главная страница документации (index.md):
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Заголовок H1 и описание пакета</li>
              <li>Бейджи статуса (используя изображения)</li>
              <li>Краткое руководство по установке</li>
              <li>Содержание с ссылками на разделы</li>
            </ul>
          </li>
          <li>Страница "Начало работы" (getting-started.md):
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Front Matter с метаданными</li>
              <li>Пошаговая инструкция по установке</li>
              <li>Примеры использования с кодом</li>
              <li>Блоки admonitions с советами</li>
            </ul>
          </li>
          <li>Страница "API" (api.md):
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Описание функций пакета</li>
              <li>Таблицы параметров и возвращаемых значений</li>
              <li>Примеры кода с подсветкой</li>
            </ul>
          </li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Admonitions в Docusaurus: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{':::note Заметка\nСодержание\n:::'}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с переносимостью Markdown
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">portability-test.md</code>, демонстрирующий переносимость Markdown между различными CMS:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте сложный Markdown-документ с использованием:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Различных уровней заголовков</li>
              <li>Маркированных и нумерованных списков (в том числе вложенных)</li>
              <li>Форматирования текста (жирный, курсив, зачёркнутый)</li>
              <li>Кодовых блоков с указанием языка</li>
              <li>Таблиц</li>
              <li>Изображений</li>
              <li>Ссылок</li>
              <li>Горизонтальных линий</li>
              <li>Цитат</li>
            </ul>
          </li>
          <li>Протестируйте импорт этого документа в:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Notion (через импорт .md файла)</li>
              <li>Ghost (через создание нового поста)</li>
              <li>Docusaurus (как страницу документации)</li>
            </ul>
          </li>
          <li>Создайте отчет о результатах тестирования:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Какие элементы сохранились корректно в каждой CMS</li>
              <li>Какие элементы потерялись или изменились</li>
              <li>Выводы о переносимости Markdown между платформами</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-300">
          Добавьте рекомендации по созданию переносимых Markdown-документов.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования Markdown в различных CMS. 
              Вы научились работать с Notion, Ghost и Docusaurus, поняли особенности поддержки Markdown в каждой системе. 
              Вы освоили миграцию контента между платформами и создание документации с использованием расширенных возможностей. 
              Эти навыки важны для современного контент-менеджмента и технической документации.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
