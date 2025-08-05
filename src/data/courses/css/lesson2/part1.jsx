// src/data/courses/css/lesson2/part1.jsx
import React from 'react';
import { Palette, Target, Code, Eye, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Target className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🎯 Урок 2: Как устроен CSS: селекторы и правила</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Основы CSS-синтаксиса</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять структуру CSS-правил, научиться использовать селекторы для выбора элементов и писать блоки объявлений стилей.
            </p>
          </div>
        </div>
      </div>

      {/* Структура CSS-правила */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          Структура CSS-правила
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Каждое правило в CSS состоит из <span className="font-medium text-green-300">двух основных частей</span>:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              <span className="font-medium text-purple-300">Селектор (Selector)</span> — определяет, <span className="font-medium">к каким HTML-элементам</span> будут применены стили.
            </li>
            <li>
              <span className="font-medium text-blue-300">Блок объявлений (Declaration Block)</span> — содержит <span className="font-medium">список стилей</span>, которые нужно применить к выбранным элементам. Блок объявлений заключен в фигурные скобки <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`{}`}</code>.
            </li>
          </ol>
          <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5 text-yellow-400" />
              Пример CSS-правила:
            </h3>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`p {
  color: red;
  font-size: 16px;
}`}
            </pre>
            <ul className="mt-3 text-sm space-y-1">
              <li><span className="font-medium text-purple-300">p</span> — это селектор (выбирает все теги <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`<p>`}</code>)</li>
              <li><span className="font-medium text-blue-300">color: red;</span> и <span className="font-medium text-blue-300">font-size: 16px;</span> — это объявления (декларации)</li>
              <li>Каждое объявление состоит из <span className="font-medium">свойства</span> (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">color</code>) и <span className="font-medium">значения</span> (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">red</code>), разделенных двоеточием <code className="bg-gray-700 px-1.5 py-0.5 rounded">:</code></li>
              <li>Каждое объявление заканчивается <span className="font-medium">точкой с запятой</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">;</code></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Селекторы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-purple-400" />
          Селекторы: как выбрать элементы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">Селекторы</span> — это шаблоны, которые указывают браузеру, к каким HTML-элементам применить стили.
          </p>
          <p>
            Вот основные типы селекторов, с которыми вы будете сталкиваться постоянно:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Селектор по тегу */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-400" />
              1. Селектор по тегу (элементу)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Выбирает <span className="font-medium">все элементы</span> указанного типа.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <p className="font-medium text-white mb-1">CSS:</p>
              <pre className="whitespace-pre-wrap text-gray-300">p {`{ color: blue; }`}</pre>
              <p className="font-medium text-white mt-2 mb-1">HTML:</p>
              <pre className="whitespace-pre-wrap text-gray-300">{`<p>Этот абзац будет синим.</p>
<p>И этот тоже.</p>
<h1>Этот заголовок останется черным.</h1>`}</pre>
            </div>
            <p className="text-green-300 text-xs mt-2">
              ✅ Все теги <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`<p>`}</code> станут синими.
            </p>
          </div>

          {/* Селектор по классу */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              2. Селектор по классу
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Выбирает элементы с определенным <code className="bg-gray-700 px-1.5 py-0.5 rounded">class</code>. Начинается с точки <code className="bg-gray-700 px-1.5 py-0.5 rounded">.</code>
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <p className="font-medium text-white mb-1">CSS:</p>
              <pre className="whitespace-pre-wrap text-gray-300">.highlight {`{ background-color: yellow; }`}</pre>
              <p className="font-medium text-white mt-2 mb-1">HTML:</p>
              <pre className="whitespace-pre-wrap text-gray-300">{`<p class="highlight">Этот абзац подсвечен.</p>
<p>Этот нет.</p>
<span class="highlight">Этот span тоже подсвечен.</span>`}</pre>
            </div>
            <p className="text-blue-300 text-xs mt-2">
              ✅ Все элементы с <code className="bg-gray-700 px-1.5 py-0.5 rounded">class="highlight"</code> получат желтый фон.
            </p>
          </div>

          {/* Селектор по ID */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="text-lg font-bold text-orange-300 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" />
              3. Селектор по ID
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Выбирает <span className="font-medium">один уникальный</span> элемент с определенным <code className="bg-gray-700 px-1.5 py-0.5 rounded">id</code>. Начинается с решетки <code className="bg-gray-700 px-1.5 py-0.5 rounded">#</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <p className="font-medium text-white mb-1">CSS:</p>
              <pre className="whitespace-pre-wrap text-gray-300">#main-title {`{ font-size: 24px; }`}</pre>
              <p className="font-medium text-white mt-2 mb-1">HTML:</p>
              <pre className="whitespace-pre-wrap text-gray-300">{`<h1 id="main-title">Главный заголовок</h1>
<h2 id="main-title">Это ошибка! ID должен быть уникальным.</h2>`}</pre>
            </div>
            <p className="text-orange-300 text-xs mt-2">
              ⚠️ ID должен быть <span className="font-medium">уникальным</span> на странице. Используйте классы, если нужно применить стиль к нескольким элементам.
            </p>
          </div>

          {/* Универсальный селектор */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="text-lg font-bold text-red-300 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-red-400" />
              4. Универсальный селектор
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Выбирает <span className="font-medium">все элементы</span> на странице. Обозначается звездочкой <code className="bg-gray-700 px-1.5 py-0.5 rounded">*</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <p className="font-medium text-white mb-1">CSS:</p>
              <pre className="whitespace-pre-wrap text-gray-300">{`* {
  margin: 0;
  padding: 0;
}`}</pre>
            </div>
            <p className="text-red-300 text-xs mt-2">
              ⚠️ Используется редко и осторожно, так как влияет на все элементы.
            </p>
          </div>
        </div>
      </div>

      {/* Комментарии в CSS */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-yellow-400" />
          Комментарии в CSS
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Комментарии позволяют добавлять пояснения к вашему коду, не влияя на его выполнение.
            Комментарии в CSS записываются между <code className="bg-gray-700 px-1.5 py-0.5 rounded">/*</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">*/</code>.
          </p>
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 mt-4">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`/* Это однострочный комментарий */

/*
  Это
  многострочный
  комментарий
*/

p {
  color: red; /* Цвет текста абзаца */
  font-size: 16px; /* Размер шрифта */
}`}
            </pre>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            💡 <span className="font-medium">Совет:</span> Используйте комментарии, чтобы объяснять сложные или неочевидные части вашего CSS. Это поможет вам и другим разработчикам легче понимать код.
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Palette className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎨</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как устроены CSS-правила, какие бывают селекторы и как добавлять комментарии.
              Эти знания — основа для написания любых стилей. В следующем уроке мы познакомимся с основными свойствами CSS, которые позволяют изменять внешний вид элементов: цвета, фон, шрифты и т.д.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;