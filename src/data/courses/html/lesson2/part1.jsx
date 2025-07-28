// src/data/courses/html/lesson2/part1.jsx
import React from 'react';
import { Play, Save, CheckCircle } from 'lucide-react';

const Part1 = ({ userCode, setUserCode, completed, setCompleted, handleSaveCode, handleComplete, isSaving }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">Структура HTML-документа</h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Каждый HTML-документ имеет определённую структуру, которая позволяет браузеру правильно интерпретировать содержимое страницы.
            В этом уроке мы рассмотрим стандартную структуру документа в HTML5 и разберём назначение каждого основного элемента.
          </p>
        </div>

        <h3 className="font-bold mt-6 mb-3 text-xl text-yellow-400">Пример базовой структуры HTML5:</h3>
        <div className="mb-6">
          <div className="flex items-center justify-between bg-gray-900 rounded-t-lg px-4 py-2">
            <span className="text-sm text-gray-400">Пример кода</span>
            <button
              onClick={() => navigator.clipboard.writeText(`<!DOCTYPE html>\n<html lang="ru">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Моя страница</title>\n  </head>\n  <body>\n    <h1>Заголовок страницы</h1>\n    <p>Основной текст страницы.</p>\n  </body>\n</html>`)}
              className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition-colors duration-200"
            >
              Копировать
            </button>
          </div>
          <pre className="bg-gray-900 p-4 rounded-b-lg text-yellow-300 overflow-x-auto text-sm leading-relaxed">
            <code>{`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя страница</title>
  </head>
  <body>
    <h1>Заголовок страницы</h1>
    <p>Основной текст страницы.</p>
  </body>
</html>`}</code>
          </pre>
        </div>

        <h3 className="font-bold mt-6 mb-3 text-xl text-yellow-400">Разбор ключевых частей HTML-документа:</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
          <li><strong>{'<'}!DOCTYPE html{'>'}</strong> — объявление типа документа. Указывает браузеру, что это HTML5. Должно быть первым в файле, до тега {'<'}html{'>'}.</li>
          <li><strong>{'<'}html{'>'}</strong> — корневой элемент документа. Все остальные элементы размещаются внутри него. Атрибут <code className="bg-gray-700 px-1 rounded">lang</code> указывает язык содержимого (например, <code className="bg-gray-700 px-1 rounded">lang="ru"</code> для русского).</li>
          <li><strong>{'<'}head{'>'}</strong> — содержит служебную информацию о документе (метаданные), которую не видно на самой странице, но она важна для браузера и поисковых систем.</li>
          <li><strong>{'<'}body{'>'}</strong> — область, где находится весь контент, который будет отображаться в окне браузера: текст, изображения, ссылки, видео и другие элементы.</li>
        </ul>

        <h3 className="font-bold mt-6 mb-3 text-xl text-yellow-400">Что такое метатеги?</h3>
        <p className="text-gray-300 mb-3">
          Метатеги — это теги, которые находятся внутри {'<'}head{'>'} и предоставляют дополнительную информацию о странице.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
          <li><strong>{'<'}meta charset="UTF-8"{'>'}</strong> — задаёт кодировку документа. UTF-8 поддерживает большинство языков мира, включая русский.</li>
          <li><strong>{'<'}meta name="viewport" content="width=device-width, initial-scale=1.0"{'>'}</strong> — необходим для правильного отображения страницы на мобильных устройствах. Позволяет адаптировать макет под размер экрана.</li>
          <li><strong>{'<'}title{'>'}</strong> — заголовок страницы, отображаемый во вкладке браузера и в результатах поисковых систем.</li>
        </ul>

        <h3 className="font-bold mt-6 mb-3 text-xl text-yellow-400">Почему важно использовать правильную структуру?</h3>
        <p className="text-gray-300 mb-3">
          Корректная структура HTML-документа:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
          <li>Улучшает совместимость с браузерами.</li>
          <li>Облегчает работу с CSS и JavaScript.</li>
          <li>Повышает доступность для пользователей с особыми потребностями.</li>
          <li>Помогает поисковым системам лучше понимать содержимое сайта.</li>
        </ul>
      </div>

      {/* Блок задания */}
      <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
            <Play className="w-4 h-4 text-red-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Практическое задание</h3>
        </div>
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Создайте HTML-файл с полной базовой структурой: объявите DOCTYPE, установите язык страницы, задайте кодировку и заголовок. В теле добавьте заголовок h1 и параграф.
        </p>

        <details className="mb-4 group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Показать пример ответа</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <pre className="mt-2 p-3 bg-gray-900/50 border border-gray-700 rounded text-xs text-gray-300 overflow-x-auto">
{`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Добро пожаловать!</h1>
    <p>Это пример простой HTML-страницы.</p>
  </body>
</html>`}
          </pre>
        </details>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-gray-400">Ваш код:</label>
            <button
              onClick={handleSaveCode}
              disabled={isSaving}
              className="flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition-colors duration-200 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Сохранено' : 'Сохранить'}
            </button>
          </div>
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Введите ваш код здесь..."
            rows="12"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 text-sm font-mono focus:border-red-500 focus:outline-none transition-colors duration-200"
          />
        </div>
        <button
          onClick={handleComplete}
          className={`flex items-center justify-center gap-2 w-full py-4 rounded-lg text-lg font-bold transition-all duration-300 ${
            completed
              ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
              : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
          } shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
        >
          {completed ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Часть выполнена
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Пометить как выполненную
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Part1;