// src/data/courses/markdown/lesson7/part3.jsx
import React from 'react';
import { Pilcrow, CornerDownLeft, List, Hash, AlignLeft, Edit3 } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Параграфы, переносы и списки в Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию абзацев, управлению переносами строк и формированию списков в Markdown.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Структурирование заметок
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">meeting-notes.md</code> с заметками по итогам воображаемого совещания. Используйте различные элементы форматирования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Разделите темы обсуждения на абзацы</li>
          <li>Используйте жесткие переносы строк для форматирования списков решений</li>
          <li>Создайте маркированный список основных тем обсуждения</li>
          <li>Создайте нумерованный список действий, которые нужно выполнить</li>
          <li>Используйте вложенные списки для детализации пунктов</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример структуры: # Заметки с совещания  \n\n## Основные темы  \n- Тема 1  \n- Тема 2  \n\n## Решения  \n1. Решение 1  \n2. Решение 2</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Создание инструкции
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">recipe.md</code> - пошаговую инструкцию по приготовлению простого блюда. Используйте структуру:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня с названием блюда</li>
          <li>Абзац с кратким описанием блюда</li>
          <li>Заголовок 2 уровня "Ингредиенты"</li>
          <li>Маркированный список ингредиентов</li>
          <li>Заголовок 2 уровня "Инструкция"</li>
          <li>Нумерованный список шагов приготовления</li>
          <li>Используйте жесткие переносы строк внутри шагов, если нужно</li>
          <li>Добавьте вложенные списки для дополнительных деталей</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте вложенные списки для указания количества ингредиентов или дополнительных пояснений к шагам.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Анализ и исправление структуры
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен Markdown-документ с ошибками в структуре. Найдите и исправьте все ошибки:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`# План проекта
Это основной план проекта.
Он включает несколько разделов.

## Цели
Основные цели проекта:
1.Цель первая
2. Цель вторая  
3.Цель третья

## Задачи
Список задач:
- Задача 1
 - Подзадача 1.1
 - Подзадача 1.2
- Задача 2
1. Подзадача 2.1
 2. Подзадача 2.2

## Команда
Участники проекта:
* Иванов И.И.
* Петров П.П.
* Сидоров С.С.`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте исправленную версию документа в новом файле <code className="bg-gray-700 px-2 py-1 rounded">corrected-structure.md</code> и объясните найденные ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на: пробелы после номеров в списках, отступы во вложенных списках, пробелы между абзацами.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Создание FAQ с вложенными списками
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">faq.md</code> - часто задаваемые вопросы по теме Markdown. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Часто задаваемые вопросы по Markdown"</li>
          <li>Несколько вопросов с заголовками 2 уровня</li>
          <li>Ответы в виде абзацев</li>
          <li>В ответах используйте вложенные списки для перечисления шагов или вариантов</li>
          <li>Используйте комбинации маркированных и нумерованных списков</li>
          <li>Добавьте примеры с жесткими переносами строк для форматирования</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример вопроса: "Как создать вложенный список?" с ответом, содержащим нумерованный список шагов и пояснения.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с форматированием
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">formatting-experiment.md</code>, демонстрирующий различные способы форматирования текста:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте абзацы с разной длиной текста</li>
          <li>Продемонстрируйте разницу между обычным переводом строки и жестким переносом</li>
          <li>Создайте маркированные списки всеми возможными символами (*, -, +)</li>
          <li>Создайте нумерованные списки с автоматической и ручной нумерацией</li>
          <li>Создайте сложные вложенные списки с разными уровнями</li>
          <li>Используйте горизонтальные линии для разделения секций</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждому примеру, объясняя, какой результат дает каждый способ форматирования.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <AlignLeft className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки работы с абзацами, переносами строк и списками в Markdown. 
              Вы научились создавать четкую структуру документов, использовать различные типы списков и правильно форматировать текст. 
              Эти навыки важны для создания профессиональных и легко читаемых документов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
