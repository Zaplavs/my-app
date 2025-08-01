// src/data/courses/html/lesson3/part3.jsx
import React from 'react';
import { Code, FileText, Terminal } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Структура HTML-документа</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по структуре HTML5-документа, создав несколько примеров.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создайте базовую структуру
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-файл с минимальной, но корректной структурой HTML5-документа. Заголовок страницы должен быть "Моя первая страница", кодировка - UTF-8. В теле страницы добавьте один заголовок <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> с текстом "Добро пожаловать!" и один абзац <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с любым текстом.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Вам понадобятся теги: <code className="bg-gray-700 px-1 rounded">{'<!DOCTYPE html>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<html>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<head>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<meta>'}</code> (charset), <code className="bg-gray-700 px-1 rounded">{'<title>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<body>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<p>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Добавьте метатег viewport
        </h3>
        <p className="text-gray-300 mb-3">
          Возьмите код из предыдущего задания. Добавьте в раздел <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> метатег <code className="bg-gray-700 px-1 rounded">viewport</code> для корректного отображения на мобильных устройствах.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Метатег viewport выглядит так: <code className="bg-gray-700 px-1 rounded">{'<meta name="viewport" content="width=device-width, initial-scale=1.0" />'}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Измените язык страницы
        </h3>
        <p className="text-gray-300 mb-3">
          Измените корневой тег <code className="bg-gray-700 px-1 rounded">{'<html>'}</code> из предыдущего задания так, чтобы он указывал, что язык страницы - английский.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте атрибут <code className="bg-gray-700 px-1 rounded">lang</code> со значением <code className="bg-gray-700 px-1 rounded">"en"</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Проанализируйте чужой код
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен фрагмент HTML-кода. Найдите <span className="font-medium">3 ошибки</span> в структуре документа и исправьте их.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Страница с ошибками</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Заголовок</h1>
  <p>Абзац текста.</p>
</body>
</html>`}</code>
          </pre>
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Вспомните про DOCTYPE и кодировку. Проверьте атрибуты корневого тега.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Самостоятельное исследование
        </h3>
        <p className="text-gray-300 mb-3">
          Откройте любой сайт в браузере (например, google.com). Щелкните правой кнопкой мыши на странице и выберите "Просмотреть код" (или "Inspect"). Найдите в открывшейся панели инструментов теги <code className="bg-gray-700 px-1 rounded">{'<!DOCTYPE html>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<html>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<body>'}</code>. Посмотрите, какие метатеги и заголовки указаны в <code className="bg-gray-700 px-1 rounded">{'<head>'}</code>.
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
              Эти задания помогли вам закрепить знания о структуре HTML-документа. Понимание этой структуры — фундамент для создания любых веб-страниц. В следующем уроке мы начнем изучать конкретные теги для разметки содержимого.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;