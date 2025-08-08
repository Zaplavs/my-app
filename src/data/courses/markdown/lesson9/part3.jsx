// src/data/courses/markdown/lesson9/part3.jsx
import React from 'react';
import { Quote, Code, FileCode, Terminal, Edit3 } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Цитаты и блоки кода в Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию цитат и вставке кода в Markdown, используя вложенные цитаты и подсветку синтаксиса.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание технического руководства
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">api-guide.md</code> - руководство по использованию API. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Руководство по API"</li>
          <li>Введение с цитатой от создателя API</li>
          <li>Раздел "Начало работы" с пошаговой инструкцией</li>
          <li>Примеры кода для различных языков (JavaScript, Python, curl) с подсветкой синтаксиса</li>
          <li>Раздел "Часто задаваемые вопросы" с вопросами и ответами в формате цитат</li>
          <li>Используйте вложенные цитаты для уточнений в FAQ</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте инлайновый код для выделения названий методов и параметров. Для примеров запросов создайте блоки кода с соответствующей подсветкой.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Блог-пост с примерами кода
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">blog-post.md</code> - блог-пост о решении программистской задачи. Требования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня с названием статьи</li>
          <li>Вступление с цитатой известного программиста или из книги</li>
          <li>Описание проблемы с примерами "плохого" кода (в блоках кода)</li>
          <li>Решение проблемы с примерами "хорошего" кода (в блоках кода)</li>
          <li>Цитаты из комментариев к статье (вложенные цитаты для диалога)</li>
          <li>Заключение с инлайновым кодом для ключевых моментов</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте цитаты для выделения важных мыслей и мнений. Применяйте подсветку синтаксиса для разных языков программирования.</p>
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
          Ниже приведен Markdown-документ с ошибками в цитатах и коде. Найдите и исправьте все ошибки:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`# Руководство по Markdown

> Это цитата
> которая продолжается
на третьей строке

> > Вложенная цитата
> > > Вложенная цитата второго уровня

Для выделения кода используйте \`код\`.

Блок кода:
\`\`\` 
console.log('Hello');
\`\`\`

JavaScript код:
\`\`\`javascript
function test() {
  return true;
}
\`\`\`

Python код:
\`\`\`python
def test():
    return True
\`\`\``}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте исправленную версию документа в новом файле <code className="bg-gray-700 px-2 py-1 rounded">corrected-code.md</code> и объясните найденные ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на: форматирование многострочных цитат, правильное количество символов для вложенных цитат, пробелы в блоках кода.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Создание документации с примерами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">library-docs.md</code> - документацию для вымышленной библиотеки. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня с названием библиотеки</li>
          <li>Цитата с описанием миссии библиотеки</li>
          <li>Раздел "Установка" с командами установки в блоках кода (bash, npm, pip)</li>
          <li>Раздел "Быстрый старт" с примерами использования в блоках кода</li>
          <li>Раздел "API" с описанием функций и примерами кода</li>
          <li>Раздел "Отзывы пользователей" с цитатами и вложенными цитатами</li>
          <li>Используйте инлайновый код для выделения названий функций и параметров</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для отзывов пользователей создайте диалог в формате вложенных цитат. Используйте соответствующую подсветку синтаксиса для примеров кода.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с форматированием кода
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">code-experiment.md</code>, демонстрирующий различные способы форматирования кода:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Инлайновый код с различными символами (включая обратные апострофы)</li>
          <li>Блоки кода без указания языка</li>
          <li>Блоки кода с подсветкой для разных языков (JavaScript, Python, HTML, CSS, JSON, SQL)</li>
          <li>Блоки кода с выводом командной строки</li>
          <li>Цитаты, содержащие инлайновый и блочный код</li>
          <li>Вложенные цитаты с примерами кода</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждому примеру, объясняя, когда и почему используется тот или иной способ форматирования.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Quote className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания цитат и вставки кода в Markdown. 
              Вы научились использовать вложенные цитаты, выделять инлайновый код и создавать блоки кода с подсветкой синтаксиса. 
              Эти навыки важны для создания профессиональных технических документов, руководств и блог-постов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
