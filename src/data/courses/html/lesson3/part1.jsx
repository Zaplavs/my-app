// src/data/courses/html/lesson3/part1.jsx
import React from 'react';
import { FileText, Code, Tag, Monitor } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🏗️ Урок 3: Структура HTML-документа</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Разбор стандартной структуры HTML5</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять стандартную структуру HTML5-документа, роль тегов <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<head>'}</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<body>'}</code>, а также важные атрибуты и объявление <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">DOCTYPE</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Важность правильной структуры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Monitor className="w-5 h-5 text-green-400" />
          Почему важна правильная структура?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Каждый HTML-документ должен иметь определённую <span className="font-medium text-green-300">структуру</span>. Это необходимо для:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Правильного отображения</span> в браузерах.</li>
            <li><span className="font-medium">Корректной работы</span> CSS и JavaScript.</li>
            <li><span className="font-medium">Поисковой оптимизации (SEO)</span> — поисковые системы лучше понимают структурированные страницы.</li>
            <li><span className="font-medium">Доступности</span> для пользователей со специальными возможностями (например, скринридеров).</li>
          </ul>
          <p className="mt-3">
            В этом уроке мы подробно разберём каждый элемент стандартного каркаса HTML-страницы.
          </p>
        </div>
      </div>

      {/* Объявление DOCTYPE */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Объявление DOCTYPE
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Первая строка любого HTML5-документа — это объявление типа документа:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg my-4">
            <pre className="text-yellow-300 text-sm"><code>{`<!DOCTYPE html>`}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Это <span className="font-medium">не тег</span>, а <span className="font-medium">инструкция</span> браузеру о том, в какой версии HTML написана страница.</li>
            <li>Для HTML5 эта инструкция выглядит очень просто: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">{'<!DOCTYPE html>'}</code>.</li>
            <li>В старых версиях HTML (HTML 4.01, XHTML) объявление было гораздо длиннее и сложнее.</li>
            <li>Эта строка должна быть <span className="font-medium">первой</span> в файле, до тега <code className="bg-gray-700 px-1 rounded">{'<html>'}</code>.</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Зачем это нужно?</span>
              <span>
                Браузер использует DOCTYPE, чтобы выбрать режим отображения страницы. Без него он может перейти в "quirks mode" (режим совместимости), что может привести к непредсказуемому поведению стилей и скриптов.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Корневой элемент <html> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-cyan-400" />
          Корневой элемент {'<html>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Весь контент HTML-документа должен находиться внутри парного тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<html>'}</code>. Это <span className="font-medium">корневой элемент</span> страницы.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg my-4">
            <pre className="text-yellow-300 text-sm"><code>{`<!DOCTYPE html>\n<html lang="ru">\n  ...\n</html>`}</code></pre>
          </div>
          <p>
            <span className="font-medium">Атрибуты тега {'<html>'}:</span>
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">lang</code> — определяет <span className="font-medium">язык</span> содержимого страницы. Пример: <code className="bg-gray-700 px-1 rounded">lang="ru"</code> для русского, <code className="bg-gray-700 px-1 rounded">lang="en"</code> для английского.
              <div className="mt-2 p-2 bg-gray-900/50 rounded">
                <p className="text-sm text-gray-400">Зачем это нужно?</p>
                <ul className="list-disc pl-5 text-xs text-gray-400 mt-1">
                  <li>Помогает поисковым системам индексировать страницу.</li>
                  <li>Используется инструментами перевода (например, Google Переводчик).</li>
                  <li>Улучшает доступность для скринридеров.</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Раздел <head> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-blue-400" />
          Раздел {'<head>'} — Метаинформация
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">{'<head>'}</code> содержит <span className="font-medium">метаинформацию</span> о документе — данные, которые не отображаются напрямую на странице, но важны для браузера, поисковиков и других программ.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg my-4">
            <pre className="text-blue-300 text-sm"><code>{`<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Заголовок страницы</title>\n</head>`}</code></pre>
          </div>
          <p>
            <span className="font-medium">Основные элементы внутри {'<head>'}:</span>
          </p>
        </div>

        <div className="mt-4 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-lg border border-blue-700/30">
            <h3 className="font-bold text-blue-300 flex items-center gap-2">
              <Code className="w-4 h-4" />
              {'<title>'} — Заголовок страницы
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Определяет текст, который отображается во вкладке браузера и в результатах поиска.
            </p>
            <div className="mt-2 bg-gray-800 p-2 rounded">
              <pre className="text-green-400 text-xs"><code>{`<title>Мой первый сайт</title>`}</code></pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-700/30">
            <h3 className="font-bold text-purple-300 flex items-center gap-2">
              <Code className="w-4 h-4" />
              {'<meta charset="UTF-8">'} — Кодировка
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Указывает браузеру, какую <span className="font-medium">кодировку</span> использовать для отображения текста. <code className="bg-gray-700 px-1 rounded">UTF-8</code> — универсальная кодировка, поддерживающая все языки мира, включая русский.
            </p>
            <div className="mt-2 bg-gray-800 p-2 rounded">
              <pre className="text-purple-400 text-xs"><code>{`<meta charset="UTF-8">`}</code></pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg border border-orange-700/30">
            <h3 className="font-bold text-orange-300 flex items-center gap-2">
              <Code className="w-4 h-4" />
              {'<meta name="viewport"...>'} — Viewport
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Критически важен для <span className="font-medium">адаптивного дизайна</span>. Сообщает браузеру, как управлять размерами и масштабированием страницы на мобильных устройствах.
            </p>
            <div className="mt-2 bg-gray-800 p-2 rounded">
              <pre className="text-orange-400 text-xs"><code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</code></pre>
            </div>
            <ul className="list-disc pl-5 text-xs text-gray-400 mt-2">
              <li><code className="bg-gray-700 px-1 rounded">width=device-width</code> — устанавливает ширину страницы равной ширине экрана устройства.</li>
              <li><code className="bg-gray-700 px-1 rounded">initial-scale=1.0</code> — задаёт начальный уровень масштабирования.</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">📌 Важно:</span>
            <span>
              Теги внутри <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> <span className="font-medium">не отображаются</span> как содержимое страницы. Для видимого контента используйте тег <code className="bg-gray-700 px-1 rounded">{'<body>'}</code>.
            </span>
          </p>
        </div>
      </div>

      {/* Раздел <body> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-orange-400" />
          Раздел {'<body>'} — Содержимое страницы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<body>'}</code> содержит весь <span className="font-medium">видимый контент</span> веб-страницы: текст, изображения, ссылки, видео и т.д.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg my-4">
            <pre className="text-orange-300 text-sm"><code>{`<body>\n  <h1>Добро пожаловать!</h1>\n  <p>Это мой первый абзац.</p>\n  <a href="https://www.example.com">Ссылка</a>\n</body>`}</code></pre>
          </div>
          <p>
            Весь HTML-код, который вы будете писать для отображения информации пользователю, должен находиться <span className="font-medium">внутри</span> этого тега.
          </p>
        </div>
      </div>

      {/* Полный пример структуры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Полный пример стандартной структуры HTML5
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Вот как выглядит минимальный, но полноценный HTML5-документ:
          </p>
        </div>
        <div className="bg-gray-900 p-5 rounded-lg mb-4 overflow-x-auto">
          <pre className="text-green-400 text-sm">
            <code>{`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Привет, мир!</h1>
    <p>Это мой первый HTML-документ с правильной структурой.</p>
  </body>
</html>`}</code>
          </pre>
        </div>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Эта структура будет основой для всех ваших будущих HTML-страниц. Запомните её!
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <FileText className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете стандартную структуру HTML5-документа. Вы разобрались с назначением <code className="bg-gray-700 px-1 rounded">DOCTYPE</code>, тегов <code className="bg-gray-700 px-1 rounded">{'<html>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<body>'}</code>, а также ключевых метатегов. Это прочный фундамент для создания любых веб-страниц. В следующих частях урока мы начнём добавлять конкретные элементы в <code className="bg-gray-700 px-1 rounded">{'<body>'}</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;