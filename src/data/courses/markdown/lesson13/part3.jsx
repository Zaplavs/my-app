// src/data/courses/markdown/lesson13/part3.jsx
import React from 'react';
import { Code, FileCode, Globe, AlertTriangle, Edit3 } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: HTML внутри Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию HTML внутри Markdown-документов, освоить встраивание медиа и создание стилизованного контента.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание презентации с видео
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">presentation.md</code> - презентацию нового продукта. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Презентация продукта SuperApp"</li>
          <li>Краткое описание продукта в абзаце Markdown</li>
          <li>Раздел "Демонстрация" с заголовком 2 уровня</li>
          <li>Встроенный HTML-видеоплеер с фиктивным источником</li>
          <li>Раздел "Особенности" с заголовком 2 уровня</li>
          <li>Список особенностей, где некоторые элементы выделены с помощью HTML <code className="bg-gray-700 px-1 py-0.5 rounded">{'<span>'}</code> с инлайновыми стилями</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример видео: <code className="bg-gray-700 px-1 py-0.5 rounded"><video width="100%" controls>{'<source src="demo.mp4" type="video/mp4">'}</video></code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Интерактивная документация
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">interactive-docs.md</code> - интерактивную документацию с встроенными виджетами. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Интерактивная документация"</li>
          <li>Раздел с картой (используйте iframe с фиктивным источником)</li>
          <li>Раздел с калькулятором (создайте стилизованную HTML-форму)</li>
          <li>Раздел с таблицей, созданной с помощью HTML (не Markdown)</li>
          <li>Используйте HTML <code className="bg-gray-700 px-1 py-0.5 rounded">{'<div>'}</code> с атрибутом style для создания цветных блоков с подсказками</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример iframe: <code className="bg-gray-700 px-1 py-0.5 rounded"><iframe src="https://example.com/map" width="100%" height="300"></iframe></code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Анализ и исправление HTML в Markdown
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен Markdown-документ с ошибками в HTML. Найдите и исправьте все ошибки:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`# Отчет о проекте

<div style="background-color: #f0f0f0; padding: 15px>
  <h2>Важные результаты</h2>
  <p>Проект завершен успешно.</p>
</div

## Статистика
<table>
  <tr>
    <td>Задачи</td>
    <td>100</td>
  </tr>
  <tr>
    <td>Выполнено</td>
    <td>95</td>
  </tr>
</table>

<script>alert('Привет!');</script>

<iframe src="https://example.com" width="100%" height="400">`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте исправленную версию документа в новом файле <code className="bg-gray-700 px-2 py-1 rounded">corrected-html.md</code> и объясните найденные ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на: закрывающие теги, кавычки в атрибутах, небезопасные теги, правильно закрытые iframe.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Создание портфолио с медиа
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">portfolio.md</code> - ваше портфолио с использованием HTML для медиа. Требования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня с вашим именем</li>
          <li>Раздел "Обо мне" с обычным Markdown-текстом</li>
          <li>Раздел "Проекты" с заголовком 2 уровня</li>
          <li>Список проектов, где каждый проект представлен в стилизованном HTML <code className="bg-gray-700 px-1 py-0.5 rounded">{'<div>'}</code> с границами и отступами</li>
          <li>В каждый проект вставьте фиктивное изображение с помощью HTML <code className="bg-gray-700 px-1 py-0.5 rounded">{'<img>'}</code></li>
          <li>Добавьте аудиоплеер с примером аудио</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример изображения: <code className="bg-gray-700 px-1 py-0.5 rounded">{'<img src="project.jpg" alt="Проект" style="width: 100%; border-radius: 5px;">'}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с совместимостью
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">compatibility-test.md</code>, демонстрирующий различные аспекты использования HTML в Markdown:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Примеры безопасных HTML-тегов, которые работают в большинстве платформ</li>
          <li>Примеры потенциально небезопасных тегов (скрипты, объекты)</li>
          <li>Сравнение стилизации с помощью HTML атрибутов style и без них</li>
          <li>Примеры встраивания медиа (видео, аудио, iframe)</li>
          <li>Тест различных уровней заголовков HTML внутри Markdown</li>
          <li>Комментарии о совместимости каждого элемента</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждому примеру, объясняя, где он будет работать, а где могут возникнуть проблемы.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Code className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования HTML внутри Markdown. 
              Вы научились встраивать медиа, создавать стилизованный контент и использовать специфичные HTML-элементы. 
              Помните, что HTML снижает переносимость документа, поэтому используйте его с умом и всегда тестируйте в целевой платформе.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
