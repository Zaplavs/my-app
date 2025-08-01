// src/data/courses/html/lesson20/part1.jsx
import React from 'react';
import { CheckCircle, Code, FileText, Settings, Hash, Eye } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <CheckCircle className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✅ Урок 20: Валидация HTML и лучшие практики</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Пишем чистый и корректный HTML-код</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить <span className="font-medium text-green-300">валидацию HTML</span> — процесс проверки корректности кода, научиться использовать <span className="font-medium text-cyan-300">валидатор W3C</span>, изучить <span className="font-medium text-purple-300">лучшие практики</span> написания HTML: <span className="font-medium">закрытие тегов</span>, <span className="font-medium">строчные буквы</span>, <span className="font-medium">осмысленные комментарии</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое валидация HTML */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-green-400" />
          Что такое валидация HTML?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Валидация HTML</span> — это процесс проверки HTML-документа на соответствие <span className="font-medium">официальной спецификации</span> языка разметки, установленной организацией W3C (World Wide Web Consortium).
          </p>
          <p>
            Валидация помогает:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Обнаружить ошибки</span> в синтаксисе и структуре кода.</li>
            <li><span className="font-medium">Повысить совместимость</span> с различными браузерами.</li>
            <li><span className="font-medium">Улучшить доступность</span> для вспомогательных технологий.</li>
            <li><span className="font-medium">Обеспечить корректную</span> работу скриптов и стилей.</li>
            <li><span className="font-medium">Сделать код</span> более читаемым и поддерживаемым.</li>
          </ul>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем это нужно?</span>
            <span>
              Представьте, что вы строите дом по чертежам. Если чертежи содержат ошибки, дом может получиться кривым, небезопасным или вообще не построиться. HTML-валидация — это проверка "чертежей" вашего сайта на ошибки, чтобы он <span className="font-medium">корректно отображался</span> во всех браузерах и был <span className="font-medium">удобен</span> для пользователей.
            </span>
          </p>
        </div>
      </div>

      {/* Валидатор W3C */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Валидатор W3C — официальный инструмент проверки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">W3C Markup Validation Service</span> — это официальный онлайн-инструмент от консорциума W3C для проверки корректности HTML и XHTML документов.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">Как использовать валидатор</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Перейдите на сайт <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">validator.w3.org</a></li>
              <li>Выберите способ проверки:
                <ul className="list-circle pl-5 mt-1">
                  <li>Проверить по URL</li>
                  <li>Загрузить файл</li>
                  <li>Вставить код напрямую</li>
                </ul>
              </li>
              <li>Нажмите "Check"</li>
              <li>Просмотрите результаты</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Что показывает валидатор</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium text-green-400">Ошибки</span> (Errors) — критические проблемы, мешающие корректной работе</li>
              <li><span className="font-medium text-yellow-400">Предупреждения</span> (Warnings) — потенциальные проблемы или устаревшие практики</li>
              <li><span className="font-medium text-cyan-400">Информация</span> (Info) — полезные замечания по улучшению</li>
              <li><span className="font-medium text-blue-400">Статистика</span> — количество проверенных элементов</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Пример отчета валидатора:</h3>
          <div className="bg-gray-800 p-4 rounded-lg text-sm">
            <div className="text-red-400 mb-2">
              <span className="font-bold">Error:</span> Element 'div' is missing required attribute 'id'.
            </div>
            <div className="text-yellow-400 mb-2">
              <span className="font-bold">Warning:</span> Consider adding a 'lang' attribute to the 'html' element.
            </div>
            <div className="text-green-400">
              <span className="font-bold">Info:</span> The 'type' attribute is unnecessary for JavaScript resources.
            </div>
          </div>
        </div>
      </div>

      {/* Лучшие практики написания HTML */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-orange-400" />
          Лучшие практики написания HTML
        </h2>
        
        {/* Закрытие тегов */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Hash className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Закрытие тегов
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Все HTML-теги должны быть <span className="font-medium">правильно закрыты</span>. Это особенно важно для <span className="font-medium">пустых элементов</span> (self-closing tags).
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <p className="text-xs text-gray-400 mb-2">Правильно:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`<p>Это абзац.</p>
<img src="image.jpg" alt="Описание">
<br>
<hr>
<input type="text" name="username">`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <p className="text-xs text-gray-400 mb-2">Неправильно:</p>
              <pre className="text-red-300 text-xs overflow-x-auto">
                <code>{`<p>Это абзац.
<img src="image.jpg" alt="Описание">
<br></br>
<hr></hr>
<input type="text" name="username"></input>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Строчные буквы */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Строчные буквы
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Имена тегов, атрибутов и их значений должны писаться <span className="font-medium">строчными буквами</span>. Это правило HTML5.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <p className="text-xs text-gray-400 mb-2">Правильно:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Мой сайт</title>
</head>
<body>
  <div class="container">
    <h1>Заголовок</h1>
    <p>Абзац текста.</p>
  </div>
</body>
</html>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <p className="text-xs text-gray-400 mb-2">Неправильно:</p>
              <pre className="text-red-300 text-xs overflow-x-auto">
                <code>{`<!DOCTYPE HTML>
<HTML LANG="RU">
<HEAD>
  <META CHARSET="UTF-8">
  <TITLE>Мой сайт</TITLE>
</HEAD>
<BODY>
  <DIV CLASS="Container">
    <H1>Заголовок</H1>
    <P>Абзац текста.</P>
  </DIV>
</BODY>
</HTML>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Комментарии */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Комментарии
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Используйте <span className="font-medium">комментарии</span> для пояснения сложных участков кода, разделения секций и улучшения читаемости.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <p className="text-xs text-gray-400 mb-2">Хорошие комментарии:</p>
              <pre className="text-blue-300 text-xs overflow-x-auto">
                <code>{`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Мой сайт</title>
</head>
<body>
  <!-- Шапка сайта -->
  <header>
    <nav>...</nav>
  </header>
  
  <!-- Основное содержимое -->
  <main>
    <!-- Секция приветствия -->
    <section>
      <h1>Добро пожаловать!</h1>
      <p>Это главная страница сайта.</p>
    </section>
    
    <!-- Форма обратной связи -->
    <!-- TODO: Добавить валидацию полей -->
    <section>
      <form>...</form>
    </section>
  </main>
  
  <!-- Подвал сайта -->
  <footer>
    <p>&copy; 2023 Мой сайт</p>
  </footer>
</body>
</html>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительные лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-cyan-400" />
          Дополнительные лучшие практики
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Семантика и структура</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Используйте семантические теги HTML5 (<code className="bg-gray-700 px-1 rounded">{'<header>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<article>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>)</li>
              <li>Правильная иерархия заголовков (<code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> - <code className="bg-gray-700 px-1 rounded">{'<h6>'}</code>)</li>
              <li>У всех изображений должен быть атрибут <code className="bg-gray-700 px-1 rounded">alt</code></li>
              <li>Связывайте <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> с полями формы через <code className="bg-gray-700 px-1 rounded">for</code> и <code className="bg-gray-700 px-1 rounded">id</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">Чистота кода</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Используйте отступы для визуальной структуризации</li>
              <li>Пишите атрибуты в логическом порядке</li>
              <li>Избегайте лишних пробелов и пустых строк</li>
              <li>Используйте осмысленные имена классов и id</li>
              <li>Удаляйте неиспользуемый код и комментарии</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Советы по валидации:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Проверяйте код регулярно, а не только в конце разработки</li>
                <li>Используйте расширения для редактора кода с подсветкой ошибок</li>
                <li>Автоматизируйте проверку с помощью линтеров в сборке проекта</li>
                <li>Не игнорируйте предупреждения — они часто указывают на потенциальные проблемы</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое <span className="font-medium text-green-300">валидация HTML</span> и почему она <span className="font-medium text-purple-300">важна</span> для создания качественных веб-страниц. Вы научились использовать <span className="font-medium text-cyan-300">официальный валидатор W3C</span> для проверки корректности кода, изучили <span className="font-medium text-orange-300">лучшие практики</span> написания HTML: <span className="font-medium text-blue-300">закрытие тегов</span>, использование <span className="font-medium text-yellow-300">строчных букв</span>, добавление <span className="font-medium text-red-300">осмысленных комментариев</span>. Эти знания помогут вам писать <span className="font-medium text-green-300">чистый</span>, <span className="font-medium text-purple-300">совместимый</span> и <span className="font-medium text-cyan-300">поддерживаемый</span> код, который будет корректно работать во всех современных браузерах и быть <span className="font-medium text-orange-300">доступным</span> для всех пользователей. Валидация — это <span className="font-medium text-blue-300">знак качества</span> профессиональной веб-разработки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;