// src/data/courses/html/lesson1/part1.jsx
import React from 'react'; // Не забудьте импорт, если используете JSX

const Part1 = ({ partId }) => { // Принимаем props, если нужно
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-4">Введение в HTML</h3>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>HTML (HyperText Markup Language) - это основа любой веб-страницы.</p>
          <p>Он определяет <strong>содержание</strong> и <strong>структуру</strong> страницы.</p>
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between bg-gray-900 rounded-t-lg px-4 py-2">
            <span className="text-sm text-gray-400">Пример простого HTML</span>
             <button
              onClick={() => navigator.clipboard.writeText('<!DOCTYPE html>\n<html>\n<head>\n  <title>Моя страница</title>\n</head>\n<body>\n  <h1>Привет, мир!</h1>\n</body>\n</html>')}
              className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition-colors duration-200"
            >
              Копировать
            </button>
          </div>
          <pre className="bg-gray-900 p-4 rounded-b-lg text-yellow-300 overflow-x-auto text-sm">
            <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Моя страница</title>
</head>
<body>
  <h1>Привет, мир!</h1>
</body>
</html>`}</code>
          </pre>
        </div>
        <p className="text-gray-400 text-sm">Это минимальный шаблон HTML-документа.</p>
      </div>

      {/* Можно добавить стандартный блок задания, если нужно */}
      {/* Или часть может управлять этим самостоятельно */}
      <div className="text-center text-gray-500 text-sm">
         Это первая часть урока. Нажмите "Следующая часть", чтобы продолжить.
      </div>
    </div>
  );
};

export default Part1;