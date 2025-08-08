// src/data/courses/markdown/lesson6/part3.jsx
import React from 'react';
import { Italic, Bold, Strikethrough, Type, Edit3 } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Выделение текста в Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию курсива, жирного и зачёркнутого текста в Markdown, а также их комбинаций.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Форматирование заметок
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">study-notes.md</code> с заметками по изучению Markdown. Используйте различные виды выделения:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок документа должен быть **жирным**</li>
          <li>Ключевые термины выделите *курсивом*</li>
          <li>Устаревшую информацию пометьте ~~зачёркнутым текстом~~</li>
          <li>Самые важные моменты выделите ***жирным курсивом***</li>
          <li>Добавьте пояснения к каждому типу выделения</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример структуры: # **Мои заметки по Markdown**</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Список задач с выделением
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">todo-list.md</code> - список задач на неделю с различными типами выделения:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня: "**Список задач**"</li>
          <li>Разделы с заголовками 2 уровня: "**Срочные задачи**", "**Обычные задачи**"</li>
          <li>Выполненные задачи: ~~[x] Завершённая задача~~</li>
          <li>Важные задачи: **[ ] Важная задача**</li>
          <li>Задачи с комментариями: [ ] Задача с *примечанием*</li>
          <li>Отложенные задачи: [ ] ~~Отложенная задача~~ *перенесена на следующую неделю*</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте комбинации выделений для создания визуальной иерархии задач по важности и статусу.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Анализ и исправление форматирования
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен Markdown-документ с ошибками в выделении текста. Найдите и исправьте все ошибки:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`# Руководство по *Markdown*

## **Основы**

В *Markdown* есть несколько способов выделения текста:

1. *Курсив* - с помощью _одинарных_ звездочек или подчеркиваний
2. **Жирный** - с помощью __двойных__ звездочек или подчеркиваний
3. ~~Зачеркнутый~~ - с помощью ~двойных тильд~

***Очень важная*** информация может быть выделена жирным курсивом.

Смешанное _*выделение*_ тоже *~~возможно~~*.`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте исправленную версию документа в новом файле <code className="bg-gray-700 px-2 py-1 rounded">corrected-formatting.md</code> и объясните найденные ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на синтаксис зачёркнутого текста и правильность комбинаций выделений.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Создание документации с выделением
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">api-changelog.md</code> - журнал изменений API с использованием выделений:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня: "# **Журнал изменений API**"</li>
          <li>Для каждой версии создайте заголовок 2 уровня</li>
          <li>**Добавлено:** - для новых функций (жирный текст)</li>
          <li>*Изменено:* - для изменений (курсив)</li>
          <li>~~Удалено:~~ - для удаленных функций (зачёркнутый текст)</li>
          <li>***Критические изменения:*** - для важных обновлений (жирный курсив)</li>
          <li>Добавьте примеры для каждой категории</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Структурируйте информацию так, чтобы разработчики могли быстро найти важные изменения.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с комбинациями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">text-experiment.md</code>, демонстрирующий все возможные комбинации выделений:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Обычный текст</li>
          <li>*Курсив* и _Курсив_</li>
          <li>**Жирный** и __Жирный__</li>
          <li>~~Зачёркнутый~~</li>
          <li>***Жирный курсив***</li>
          <li>___Жирный курсив___</li>
          <li>**_Жирный курсив_**</li>
          <li>__*Жирный курсив*__</li>
          <li>Смешанные комбинации: **жирный ~~зачёркнутый~~**</li>
          <li>Вложенные комбинации: **жирный *курсив* текст**</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждой комбинации и проверьте результат в разных редакторах Markdown.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Type className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования выделения текста в Markdown. 
              Вы научились применять курсив, жирный и зачёркнутый текст, а также их комбинации для создания выразительных и структурированных документов. 
              Эти навыки важны для эффективной коммуникации в технической документации, заметках и других текстах.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
