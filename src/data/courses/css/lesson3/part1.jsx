// src/data/courses/css/lesson3/part1.jsx
import React from 'react';
import { Target, Hash, Pilcrow, Star, Layers, Filter } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🎯 Урок 3: Как выбирать элементы: селекторы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Мастерство точного выбора элементов</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить основные и продвинутые селекторы CSS для точного выбора HTML-элементов.
            </p>
          </div>
        </div>
      </div>

      {/* Основные селекторы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Filter className="w-5 h-5 text-green-400" />
          Основные селекторы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Селекторы — это шаблоны, которые помогают CSS "найти" нужные HTML-элементы для применения стилей. Давайте рассмотрим основные типы:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Селектор по тегу */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <Pilcrow className="w-5 h-5 text-green-400" />
              1. Селектор по тегу
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
              <Layers className="w-5 h-5 text-blue-400" />
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
              <Hash className="w-5 h-5 text-orange-400" />
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
<h2>Обычный заголовок</h2>`}</pre>
            </div>
            <p className="text-orange-300 text-xs mt-2">
              ⚠️ ID должен быть <span className="font-medium">уникальным</span> на странице.
            </p>
          </div>

          {/* Универсальный селектор */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="text-lg font-bold text-red-300 mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-red-400" />
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
  box-sizing: border-box;
}`}</pre>
            </div>
            <p className="text-red-300 text-xs mt-2">
              ⚠️ Используйте осторожно, так как влияет на все элементы.
            </p>
          </div>
        </div>
      </div>

      {/* Группировка селекторов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-purple-400" />
          Группировка селекторов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Если вы хотите применить одни и те же стили к <span className="font-medium">нескольким разным селекторам</span>, их можно объединить в один список, разделяя запятыми.
          </p>
          <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-yellow-400" />
              Пример группировки:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white mb-1">CSS:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`h1, h2, h3 {
  color: #333;
  font-family: Arial, sans-serif;
  margin-bottom: 15px;
}`}
                </pre>
              </div>
              <div>
                <p className="font-medium text-white mb-1">HTML:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`<h1>Заголовок 1</h1>
<h2>Заголовок 2</h2>
<h3>Заголовок 3</h3>
<p>Обычный абзац</p>`}
                </pre>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              💡 <span className="font-medium">Результат:</span> Все заголовки h1, h2 и h3 получат одинаковый цвет, шрифт и нижний отступ.
            </p>
          </div>
        </div>
      </div>

      {/* Продвинутые селекторы (введение) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-cyan-400" />
          Продвинутые селекторы (введение)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Помимо основных селекторов, существуют и более сложные, позволяющие выбирать элементы по их положению в документе или другим характеристикам.
          </p>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Селектор потомка</h3>
            <p className="text-sm text-gray-300 mb-2">
              Выбирает элементы, которые находятся <span className="font-medium">внутри</span> другого элемента.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">.article p {`{ font-style: italic; }`}</pre>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">{`<div class="article">
  <p>Этот абзац будет курсивом.</p>
  <span><p>И этот тоже.</p></span>
</div>
<p>Этот останется обычным.</p>`}</pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-lg border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Селектор непосредственного потомка</h3>
            <p className="text-sm text-gray-300 mb-2">
              Выбирает элементы, которые являются <span className="font-medium">прямыми детьми</span> другого элемента (только первого уровня вложенности).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">.menu {'>'} li {`{ list-style: none; }`}</pre>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">{`<ul class="menu">
  <li>Этот элемент будет без маркера</li>
  <li>
    Этот тоже
    <ul>
      <li>А этот нет (не прямой потомок)</li>
    </ul>
  </li>
</ul>`}</pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            💡 <span className="font-medium">Совет:</span> Эти продвинутые селекторы позволяют создавать очень точные и гибкие правила стилей. Мы подробнее изучим их в следующих уроках.
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Target className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎯</h3>
            <p className="text-gray-300">
              Теперь вы знаете основные селекторы CSS и как их использовать для выбора элементов. Вы научились выбирать элементы по тегам, классам, ID, а также группировать селекторы и использовать базовые вложенные селекторы.
              Эти знания позволят вам точно указывать, к каким частям вашей веб-страницы применять те или иные стили. В следующем уроке мы познакомимся с основными свойствами CSS для управления цветами, фонами и шрифтами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;