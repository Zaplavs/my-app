// src/data/courses/html/lesson15/part1.jsx
import React from 'react'; // <-- Исправление: Добавлен импорт React
import { Code, BookOpen, Quote, Hash, Type, Server, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Quote className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📝 Урок 15: Цитаты, код и спецсимволы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Специализированные элементы для текстового контента</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование тегов <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<blockquote>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<q>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<cite>'}</code> для <span className="font-medium">цитат</span>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<code>'}</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">{'<pre>'}</code> для <span className="font-medium">кода</span>, а также научиться использовать <span className="font-medium">HTML-сущности</span> (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">&amp;lt;</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">&amp;gt;</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">&amp;amp;</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">&amp;copy;</code>) для отображения <span className="font-medium">специальных символов</span>.
            </p>
          </div>
        </div>
      </div>
      {/* Значение специализированных элементов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-green-400" />
          Зачем нужны специализированные текстовые элементы?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            HTML предоставляет специальные теги для различных типов текстового контента, которые не ограничиваются просто абзацами и заголовками. Использование правильных тегов:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Улучшает <span className="font-medium">семантику</span> документа</li>
            <li>Повышает <span className="font-medium">доступность</span> для скринридеров</li>
            <li>Помогает поисковым системам <span className="font-medium">лучше понимать</span> контент</li>
            <li>Обеспечивает <span className="font-medium">единый стиль</span> отображения специфического контента</li>
          </ul>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем это нужно?</span>
            <span>
              Представьте технический блог, где часто встречаются цитаты из спецификаций, примеры кода и специальные символы. Использование правильных тегов делает такой контент <span className="font-medium">понятнее</span> для читателей и <span className="font-medium">доступнее</span> для вспомогательных технологий.
            </span>
          </p>
        </div>
      </div>
      {/* Цитаты */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Quote className="w-5 h-5 text-purple-400" />
          Цитаты в HTML
        </h2>
        {/* <blockquote> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Hash className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-purple-300">{'<blockquote>'}</code> — Блочная цитата
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Используется для <span className="font-medium">длинных цитат</span>, которые обычно отображаются как <span className="font-medium">отдельный блок</span> с отступами. Часто используется с тегом <code className="bg-gray-700 px-1 rounded text-orange-300">{'<cite>'}</code> для указания источника.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-purple-300 text-xs overflow-x-auto">
                {/* Исправлено: < и > для внутренних тегов */}
                <code>{`<blockquote>
  <p>Люди, которые достаточно сумасшедшие, чтобы думать, что они могут изменить мир, — это те, кто это действительно делают.</p>
  <footer>— <cite>Стив Джобс</cite></footer>
</blockquote>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <p className="text-xs text-gray-400 mb-2">Как отображается:</p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <blockquote className="border-l-4 border-purple-500 pl-4 py-1 italic text-gray-300">
                  <p>Люди, которые достаточно сумасшедшие, чтобы думать, что они могут изменить мир, — это те, кто это действительно делают.</p>
                  <footer className="mt-2 not-italic text-sm text-gray-400">— <cite>Стив Джобс</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        {/* <q> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Quote className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-orange-300">{'<q>'}</code> — Встроенная цитата
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Используется для <span className="font-medium">коротких цитат</span> внутри строки текста. Браузеры автоматически добавляют <span className="font-medium">кавычки</span> вокруг содержимого.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-orange-300 text-xs overflow-x-auto">
                {/* Исправлено: < и > для внутренних тегов */}
                <code>{`<p>Как сказал Альберт Эйнштейн: 
  <q>Воображение важнее знания</q>.</p>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <p className="text-xs text-gray-400 mb-2">Как отображается:</p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300">Как сказал Альберт Эйнштейн: <q className="text-orange-300">Воображение важнее знания</q>.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <cite> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-green-300">{'<cite>'}</code> — Источник цитаты
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Используется для указания <span className="font-medium">источника</span> цитаты (название книги, статьи, человека и т.д.). Обычно применяется внутри <code className="bg-gray-700 px-1 rounded text-purple-300">{'<blockquote>'}</code> или <code className="bg-gray-700 px-1 rounded text-orange-300">{'<q>'}</code>.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                 {/* Исправлено: < и > для внутренних тегов */}
                <code>{`<blockquote>
  <p>Будь тем изменением, которое ты хочешь видеть в мире.</p>
  <footer>— <cite>Махатма Ганди</cite></footer>
</blockquote>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <p className="text-xs text-gray-400 mb-2">Как отображается:</p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <blockquote className="border-l-4 border-green-500 pl-4 py-1 italic text-gray-300">
                  <p>Будь тем изменением, которое ты хочешь видеть в мире.</p>
                  <footer className="mt-2 not-italic text-sm text-gray-400">— <cite className="text-green-300">Махатма Ганди</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Отображение кода */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Отображение кода в HTML
        </h2>
        {/* <code> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">{'<code>'}</code> — Встроенный код
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Используется для <span className="font-medium">вставки фрагментов кода</span> в строку текста. Обычно отображается <span className="font-medium">моноширинным шрифтом</span>.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                {/* Исправлено: < и > для внутренних тегов */}
                <code>{`<p>Для создания ссылки используйте тег 
  <code><a></code>.</p>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <p className="text-xs text-gray-400 mb-2">Как отображается:</p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300">Для создания ссылки используйте тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<a>'}</code>.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <pre> */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Server className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">{'<pre>'}</code> — Предварительно отформатированный текст
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Используется для <span className="font-medium">предварительно отформатированного текста</span>, где важно сохранить <span className="font-medium">пробелы и переносы строк</span>. Часто используется вместе с <code className="bg-gray-700 px-1 rounded text-cyan-300">{'<code>'}</code> для отображения <span className="font-medium">блоков кода</span>.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-blue-300 text-xs overflow-x-auto">
                {/* Исправлено: < и > для внутренних тегов */}
                <code>{`<pre><code>function hello() {
  console.log("Привет, мир!");
}</code></pre>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <p className="text-xs text-gray-400 mb-2">Как отображается:</p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <pre className="bg-gray-900 p-3 rounded text-blue-300 text-sm overflow-x-auto">
                  <code>{`function hello() {
  console.log("Привет, мир!");
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HTML-сущности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-red-400" />
          HTML-сущности (Entities)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">HTML-сущности</span> — это специальные коды, используемые для отображения <span className="font-medium">зарезервированных символов</span> и <span className="font-medium">специальных знаков</span>, которые имеют особое значение в HTML или отсутствуют на клавиатуре.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Зарезервированные символы</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
                  <span className="text-red-400 font-mono">{'<'}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Меньше чем</p>
                  <p className="text-xs text-gray-400">HTML-сущность: <code className="bg-gray-700 px-1 rounded text-red-300">&amp;lt;</code> или <code className="bg-gray-700 px-1 rounded text-red-300">&amp;#60;</code></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
                  <span className="text-red-400 font-mono">{'>'}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Больше чем</p>
                  <p className="text-xs text-gray-400">HTML-сущность: <code className="bg-gray-700 px-1 rounded text-red-300">&amp;gt;</code> или <code className="bg-gray-700 px-1 rounded text-red-300">&amp;#62;</code></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
                  <span className="text-red-400 font-mono">&amp;</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Амперсанд</p>
                  <p className="text-xs text-gray-400">HTML-сущность: <code className="bg-gray-700 px-1 rounded text-red-300">&amp;amp;</code> или <code className="bg-gray-700 px-1 rounded text-red-300">&amp;#38;</code></p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Полезные символы</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
                  <span className="text-yellow-400 font-mono">©</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Знак копирайта</p>
                  <p className="text-xs text-gray-400">HTML-сущность: <code className="bg-gray-700 px-1 rounded text-yellow-300">&amp;copy;</code> или <code className="bg-gray-700 px-1 rounded text-yellow-300">&amp;#169;</code></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
                  <span className="text-yellow-400 font-mono">®</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Знак зарегистрированной торговой марки</p>
                  <p className="text-xs text-gray-400">HTML-сущность: <code className="bg-gray-700 px-1 rounded text-yellow-300">&amp;reg;</code> или <code className="bg-gray-700 px-1 rounded text-yellow-300">&amp;#174;</code></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
                  <span className="text-yellow-400 font-mono">€</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Евро</p>
                  <p className="text-xs text-gray-400">HTML-сущность: <code className="bg-gray-700 px-1 rounded text-yellow-300">&amp;euro;</code> или <code className="bg-gray-700 px-1 rounded text-yellow-300">&amp;#8364;</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Пример использования</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                {/* Исправлено: < и > для внутренних тегов */}
                <code>{`<p>В HTML теги выглядят так: <div>Содержимое</div></p>
<p>Компания Apple&amp;reg; представила новый iPhone&amp;trade;.</p>
<p>Цены начинаются от 999&amp; euro;.</p>
<p>&amp;copy; 2023 Моя компания. Все права защищены.</p>`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2">Как отображается:</p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-sm space-y-2">
                <p className="text-gray-300">В HTML теги выглядят так: <div>Содержимое</div></p>
                <p className="text-gray-300">Компания Apple&reg; представила новый iPhone&trade;.</p>
                <p className="text-gray-300">Цены начинаются от 999& euro;.</p>
                <p className="text-gray-300">&copy; 2023 Моя компания. Все права защищены.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Важно знать:</span>
            <span>
              Всегда используйте HTML-сущности для отображения символов <code className="bg-gray-700 px-1 rounded text-red-300">{'<'}</code>, <code className="bg-gray-700 px-1 rounded text-red-300">{'>'}</code> и <code className="bg-gray-700 px-1 rounded text-red-300">&amp;</code> в тексте, чтобы избежать ошибок разбора HTML. Для кода удобнее использовать теги <code className="bg-gray-700 px-1 rounded text-cyan-300">{'<code>'}</code> и <code className="bg-gray-700 px-1 rounded text-blue-300">{'<pre>'}</code>.
            </span>
          </p>
        </div>
      </div>
      {/* Пример комплексного использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Комплексный пример использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как могут использоваться все изученные элементы в одном документе:
          </p>
        </div>
        <div className="mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {/* Исправлено: < и > для внутренних тегов */}
              <code>{`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Пример использования специальных элементов</title>
</head>
<body>
  <h1>Изучаем HTML</h1>
  <p>Согласно спецификации HTML5:</p>
  <blockquote>
    <p>Элемент &amp;lt;blockquote&amp;gt; представляет собой раздел содержимого, 
    который цитируется из другого источника.</p>
    <footer>— <cite>WHATWG HTML Living Standard</cite></footer>
  </blockquote>
  <p>Как говорил Тим Бернерс-Ли, создатель Всемирной паутины: 
  <q>Всемирная паутина - это пространство в информационном мире</q>.</p>
  <p>Для отображения кода используйте теги <code>&amp;lt;code&amp;gt;</code> и <code>&amp;lt;pre&amp;gt;</code>:</p>
  <pre><code>function greet(name) {
  return "Привет, " + name + "!";
}</code></pre>
  <p>Символы &amp;lt;, &amp;gt; и &amp;amp; необходимо заменять HTML-сущностями: 
  &amp;lt;, &amp;gt; и &amp;amp;.</p>
  <p>&amp;copy; 2023 Мой технический блог. Все права защищены.</p>
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
                <li>Использованы все изученные теги для цитат (<code className="bg-gray-700 px-1 rounded text-purple-300">{'<blockquote>'}</code>, <code className="bg-gray-700 px-1 rounded text-orange-300">{'<q>'}</code>, <code className="bg-gray-700 px-1 rounded text-green-300">{'<cite>'}</code>)</li>
                <li>Правильно отображены фрагменты кода (<code className="bg-gray-700 px-1 rounded text-cyan-300">{'<code>'}</code>, <code className="bg-gray-700 px-1 rounded text-blue-300">{'<pre>'}</code>)</li>
                <li>Зарезервированные символы заменены HTML-сущностями</li>
                <li>Добавлен знак копирайта в подвале</li>
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
              Теперь вы знаете, как <span className="font-medium text-purple-300">правильно оформлять цитаты</span> с помощью тегов <code className="bg-gray-700 px-1 rounded text-purple-300">{'<blockquote>'}</code>, <code className="bg-gray-700 px-1 rounded text-orange-300">{'<q>'}</code> и <code className="bg-gray-700 px-1 rounded text-green-300">{'<cite>'}</code>, как <span className="font-medium text-cyan-300">отображать код</span> с помощью <code className="bg-gray-700 px-1 rounded text-cyan-300">{'<code>'}</code> и <code className="bg-gray-700 px-1 rounded text-blue-300">{'<pre>'}</code>, а также как использовать <span className="font-medium text-red-300">HTML-сущности</span> для отображения специальных символов. Эти навыки делают ваши веб-страницы не только <span className="font-medium text-green-300">семантически правильными</span>, но и <span className="font-medium text-blue-300">доступными</span> для всех пользователей, включая тех, кто использует скринридеры. Это <span className="font-medium text-yellow-300">важный шаг</span> к созданию профессионального и инклюзивного веб-контента.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;