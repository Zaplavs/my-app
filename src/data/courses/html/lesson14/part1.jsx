// src/data/courses/html/lesson14/part1.jsx
import React from 'react';
import {Layout, Code, BookOpen, Eye, Search, Accessibility, FileText, Navigation, Archive, MessageSquare, Calendar, User, Home, Info } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧱 Урок 14: Семантические теги HTML5</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Структурирование веб-страницы с осмысленными элементами</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование семантических тегов HTML5 (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<header>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<nav>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<main>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<section>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">{'<article>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">{'<aside>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">{'<footer>'}</code>) для создания <span className="font-medium">логичной</span>, <span className="font-medium">доступной</span> и <span className="font-medium">SEO-оптимизированной</span> структуры веб-страниц.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое семантическая верстка */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Info className="w-5 h-5 text-green-400" />
          Что такое семантическая верстка?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Семантическая верстка</span> — это подход к созданию HTML-разметки, при котором используются теги, <span className="font-medium">точно описывающие</span> смысл и назначение содержимого, а не просто его внешний вид.
          </p>
          <p>
            До появления HTML5 разработчики часто использовали универсальный тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-300">{'<div>'}</code> для создания всех блоков страницы:
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg mt-3 text-sm text-red-300 overflow-x-auto">
            <code>{`<!-- Не семантично -->
<div id="header">...</div>
<div id="navigation">...</div>
<div id="content">...</div>
<div id="sidebar">...</div>
<div id="footer">...</div>`}</code>
          </pre>
          <p>
            С приходом HTML5 появились <span className="font-medium">семантические теги</span>, которые позволяют более точно описать структуру страницы:
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg mt-3 text-sm text-green-300 overflow-x-auto">
            <code>{`<!-- Семантично -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<aside>...</aside>
<footer>...</footer>`}</code>
          </pre>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем это нужно?</span>
            <span>
              Семантическая разметка делает код <span className="font-medium">понятнее</span> для разработчиков, <span className="font-medium">доступнее</span> для пользователей со скринридерами и <span className="font-medium">понятнее</span> для поисковых систем. Это <span className="font-medium">основа</span> современной, профессиональной веб-разработки.
            </span>
          </p>
        </div>
      </div>

      {/* Основные семантические теги */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-purple-400" />
          Основные семантические теги HTML5
        </h2>
        
        {/* <header> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Home className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">{'<header>'}</code> — Шапка страницы или раздела
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Представляет собой <span className="font-medium">вводную</span> часть страницы или раздела. Обычно содержит <span className="font-medium">логотип</span>, <span className="font-medium">заголовок</span>, <span className="font-medium">навигацию</span> или <span className="font-medium">поисковую форму</span>.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-blue-300 text-xs overflow-x-auto">
                <code>{`<header>
  <h1>Мой сайт</h1>
  <nav>
    <!-- Навигация -->
  </nav>
</header>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <p className="text-xs text-gray-400 mb-2">Где используется:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>В начале всей страницы (основной header)</li>
                <li>В начале статьи или раздела</li>
                <li>Содержит заголовки, логотипы, навигацию</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <nav> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Navigation className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-orange-300">{'<nav>'}</code> — Навигационное меню
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Определяет <span className="font-medium">раздел навигации</span> с ссылками на другие страницы сайта или на разные части текущей страницы.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-orange-300 text-xs overflow-x-auto">
                <code>{`<nav>
  <ul>
    <li><a href="/">Главная</a></li>
    <li><a href="/about">О нас</a></li>
    <li><a href="/contact">Контакты</a></li>
  </ul>
</nav>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <p className="text-xs text-gray-400 mb-2">Где используется:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Основное меню сайта</li>
                <li>Навигация по статье</li>
                <li>Хлебные крошки</li>
                <li>Только для основных навигационных блоков</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <main> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-purple-300">{'<main>'}</code> — Основное содержимое
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Содержит <span className="font-medium">уникальное</span> содержимое страницы. На каждой странице должен быть <span className="font-medium">только один</span> тег <code className="bg-gray-700 px-1 rounded text-gray-300">{'<main>'}</code>.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-purple-300 text-xs overflow-x-auto">
                <code>{`<main>
  <article>
    <h2>Заголовок статьи</h2>
    <p>Содержимое статьи...</p>
  </article>
  <section>
    <h2>Раздел с информацией</h2>
    <p>Содержимое раздела...</p>
  </section>
</main>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <p className="text-xs text-gray-400 mb-2">Где используется:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Уникальный контент страницы</li>
                <li>Только один раз на странице</li>
                <li>Не содержит навигацию, футеры, боковые панели</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <section> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Archive className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">{'<section>'}</code> — Логический раздел
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Представляет собой <span className="font-medium">логический раздел</span> документа или приложения. Обычно имеет <span className="font-medium">заголовок</span> и содержит <span className="font-medium">однородный</span> контент.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                <code>{`<section>
  <h2>Новости компании</h2>
  <article>...</article>
  <article>...</article>
</section>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <p className="text-xs text-gray-400 mb-2">Где используется:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Для группировки однородного контента</li>
                <li>Каждый раздел с заголовком</li>
                <li>Может содержать статьи, блоки информации</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <article> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <MessageSquare className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">{'<article>'}</code> — Самостоятельный контент
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Представляет собой <span className="font-medium">самостоятельный</span> фрагмент контента, который может быть <span className="font-medium">независимо</span> распространен или повторно использован (статья, пост в блоге, комментарий, новость).
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-blue-300 text-xs overflow-x-auto">
                <code>{`<article>
  <header>
    <h2>Как изучать HTML</h2>
    <p>Опубликовано: <time datetime="2023-01-01">1 января 2023</time></p>
  </header>
  <p>Содержимое статьи о изучении HTML...</p>
</article>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <p className="text-xs text-gray-400 mb-2">Где используется:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Блог-посты</li>
                <li>Новости</li>
                <li>Комментарии</li>
                <li>Форумные сообщения</li>
                <li>Самодостаточный контент</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <aside> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Info className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-yellow-300">{'<aside>'}</code> — Дополнительная информация
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Представляет собой <span className="font-medium">дополнительный</span> контент, косвенно связанный с основным содержимым (боковая панель, виджеты, реклама, ссылки).
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-yellow-300 text-xs overflow-x-auto">
                <code>{`<aside>
  <h3>Популярные статьи</h3>
  <ul>
    <li><a href="#">Как писать CSS</a></li>
    <li><a href="#">JavaScript для начинающих</a></li>
  </ul>
</aside>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <p className="text-xs text-gray-400 mb-2">Где используется:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Боковые панели</li>
                <li>Рекламные блоки</li>
                <li>Ссылки на похожие статьи</li>
                <li>Виджеты и виджеты</li>
                <li>Дополнительная, но не основная информация</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <footer> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-red-500/20 p-2 rounded-lg">
              <User className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-red-300">{'<footer>'}</code> — Подвал страницы или раздела
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Представляет собой <span className="font-medium">заключительную</span> часть страницы или раздела. Обычно содержит <span className="font-medium">информацию об авторе</span>, <span className="font-medium">контакты</span>, <span className="font-medium">копирайт</span>, <span className="font-medium">ссылки</span>.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-red-300 text-xs overflow-x-auto">
                <code>{`<footer>
  <p>&copy; 2023 Мой сайт. Все права защищены.</p>
  <address>
    Связаться: <a href="mailto:info@example.com">info@example.com</a>
  </address>
</footer>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <p className="text-xs text-gray-400 mb-2">Где используется:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>В конце всей страницы (основной footer)</li>
                <li>В конце статьи или раздела</li>
                <li>Контактная информация, копирайт</li>
                <li>Ссылки на социальные сети</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества семантической верстки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-green-400" />
          Преимущества семантической верстки
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Search className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold text-blue-300">SEO (Поисковая оптимизация)</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Поисковые системы лучше <span className="font-medium">понимают</span> структуру страницы</li>
              <li>Улучшается <span className="font-medium">индексация</span> контента</li>
              <li>Повышается <span className="font-medium">релевантность</span> страницы по запросам</li>
              <li>Лучше отображается в <span className="font-medium">результатах поиска</span></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Accessibility className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Доступность</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Скринридеры могут <span className="font-medium">навигировать</span> по странице</li>
              <li>Пользователи с ОВЗ лучше <span className="font-medium">понимают</span> структуру</li>
              <li>Улучшается <span className="font-medium">опыт использования</span> для всех</li>
              <li>Соответствие <span className="font-medium">стандартам доступности</span> (WCAG)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">Читаемость кода</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Код становится <span className="font-medium">понятнее</span> для разработчиков</li>
              <li>Упрощается <span className="font-medium">сопровождение</span> проекта</li>
              <li>Легче <span className="font-medium">находить</span> нужные элементы</li>
              <li>Снижается <span className="font-medium">вероятность ошибок</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Пример структуры страницы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layout className="w-5 h-5 text-cyan-400" />
          Пример структуры веб-страницы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как может выглядеть <span className="font-medium">правильно структурированная</span> веб-страница с использованием всех семантических тегов:
          </p>
        </div>
        <div className="mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Мой сайт</title>
</head>
<body>
  <header>
    <h1>Добро пожаловать на мой сайт</h1>
    <nav>
      <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/about">О нас</a></li>
        <li><a href="/blog">Блог</a></li>
        <li><a href="/contact">Контакты</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Последние новости</h2>
        <p>Опубликовано: <time datetime="2023-06-15">15 июня 2023</time></p>
      </header>
      <p>Содержимое последней новости...</p>
    </article>

    <section>
      <h2>Наши услуги</h2>
      <p>Описание наших услуг...</p>
    </section>
  </main>

  <aside>
    <h3>Популярные статьи</h3>
    <ul>
      <li><a href="#">Как изучать HTML</a></li>
      <li><a href="#">CSS для начинающих</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2023 Мой сайт. Все права защищены.</p>
    <address>
      Связаться: <a href="mailto:info@example.com">info@example.com</a>
    </address>
  </footer>
</body>
</html>`}</code>
            </pre>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Что здесь хорошо:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Используются все основные семантические теги</li>
                <li>Правильная иерархия: <code className="bg-gray-700 px-1 rounded">{'<header>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<main>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code></li>
                <li><code className="bg-gray-700 px-1 rounded">{'<main>'}</code> содержит уникальный контент</li>
                <li><code className="bg-gray-700 px-1 rounded">{'<nav>'}</code> находится внутри <code className="bg-gray-700 px-1 rounded">{'<header>'}</code></li>
                <li><code className="bg-gray-700 px-1 rounded">{'<aside>'}</code> содержит дополнительную информацию</li>
              </ul>
            </span>
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
              Теперь вы знаете, как <span className="font-medium text-blue-300">структурировать</span> веб-страницы с помощью семантических тегов HTML5. Использование тегов <code className="bg-gray-700 px-1 rounded">{'<header>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<article>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<aside>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code> делает ваши веб-страницы не только <span className="font-medium text-green-300">понятнее</span> для разработчиков, но и <span className="font-medium text-cyan-300">доступнее</span> для пользователей, а также <span className="font-medium text-purple-300">оптимизированнее</span> для поисковых систем. Это <span className="font-medium text-yellow-300">важный шаг</span> к созданию современных, профессиональных веб-сайтов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;