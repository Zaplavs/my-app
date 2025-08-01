// src/data/courses/html/lesson5/part1.jsx
import React from 'react';
import { List, Hash, Pilcrow, BookOpen } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <List className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📋 Урок 5: Списки в HTML</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Упорядоченные и неупорядоченные списки</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить создание списков в HTML с помощью тегов <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<ul>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<ol>'}</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<li>'}</code>, а также научиться создавать вложенные списки.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны списки? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужны списки в HTML?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Списки — это один из самых распространенных способов структурирования информации на веб-страницах. Они позволяют:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Улучшить читаемость</span> — информация, разбитая на пункты, усваивается легче.</li>
            <li><span className="font-medium">Организовать данные</span> — перечислить шаги, пункты меню, характеристики и т.д.</li>
            <li><span className="font-medium">Повысить доступность</span> — скринридеры могут корректно интерпретировать структуру списков.</li>
            <li><span className="font-medium">Упростить стилизацию</span> — CSS предоставляет множество возможностей для оформления списков.</li>
          </ul>
          <p className="mt-3">
            HTML предлагает два основных типа списков: <span className="font-medium">неупорядоченные</span> (маркированные) и <span className="font-medium">упорядоченные</span> (нумерованные).
          </p>
        </div>
      </div>

      {/* Неупорядоченные списки <ul> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <List className="w-5 h-5 text-green-400" />
          Неупорядоченные списки {'<ul>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Неупорядоченный список</span> (Unordered List) создается с помощью тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<ul>'}</code>. Пункты списка обозначаются с помощью тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<li>'}</code> (List Item).
          </p>
          <p>
            По умолчанию пункты такого списка отмечаются <span className="font-medium">маркерами</span> (обычно точками).
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">HTML-код:</p>
            <pre className="text-green-400 text-xs overflow-x-auto">
              <code>{`<ul>
  <li>Первый пункт</li>
  <li>Второй пункт</li>
  <li>Третий пункт</li>
</ul>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Первый пункт</li>
              <li>Второй пункт</li>
              <li>Третий пункт</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Семантика:</span>
            <span>
              Используйте <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code>, когда <span className="font-medium">порядок</span> пунктов <span className="font-medium">не важен</span>. Например: список покупок, преимущества продукта, меню сайта.
            </span>
          </p>
        </div>
      </div>

      {/* Упорядоченные списки <ol> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-orange-400" />
          Упорядоченные списки {'<ol>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Упорядоченный список</span> (Ordered List) создается с помощью тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<ol>'}</code>. Пункты списка также обозначаются тегом <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<li>'}</code>.
          </p>
          <p>
            По умолчанию пункты такого списка отмечаются <span className="font-medium">номерами</span>.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <p className="text-sm text-gray-400 mb-2">HTML-код:</p>
            <pre className="text-orange-400 text-xs overflow-x-auto">
              <code>{`<ol>
  <li>Первый шаг</li>
  <li>Второй шаг</li>
  <li>Третий шаг</li>
</ol>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <ol className="list-decimal pl-5 space-y-1 text-gray-300 text-sm">
              <li>Первый шаг</li>
              <li>Второй шаг</li>
              <li>Третий шаг</li>
            </ol>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Семантика:</span>
            <span>
              Используйте <code className="bg-gray-700 px-1 rounded">{'<ol>'}</code>, когда <span className="font-medium">порядок</span> пунктов <span className="font-medium">важен</span>. Например: инструкции, рецепты, рейтинги, алгоритмы.
            </span>
          </p>
        </div>
      </div>

      {/* Тег <li> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Pilcrow className="w-5 h-5 text-purple-400" />
          Тег пункта списка {'<li>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<li>'}</code> (List Item) используется для определения <span className="font-medium">каждого отдельного пункта</span> списка.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Этот тег <span className="font-medium">обязателен</span> внутри <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<ol>'}</code>.</li>
            <li>Каждый пункт списка должен быть заключен в свой собственный тег <code className="bg-gray-700 px-1 rounded">{'<li>'}</code>.</li>
            <li>Тег <code className="bg-gray-700 px-1 rounded">{'<li>'}</code> может содержать любой HTML-контент: текст, абзацы, другие списки, изображения и т.д.</li>
          </ul>
        </div>
        <div className="mt-4 bg-gray-900 p-4 rounded-lg">
          <pre className="text-purple-300 text-sm overflow-x-auto">
            <code>{`<ul>
  <li>Простой текст</li>
  <li>
    <p>Абзац внутри пункта списка.</p>
    <p>Еще один абзац.</p>
  </li>
  <li><a href="#">Ссылка внутри пункта списка</a></li>
</ul>`}</code>
          </pre>
        </div>
      </div>

      {/* Вложенные списки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <List className="w-5 h-5 text-cyan-400" />
          Вложенные списки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Списки можно <span className="font-medium">вкладывать</span> друг в друга для создания многоуровневой структуры. Это позволяет отображать сложные иерархии данных.
          </p>
          <p>
            Вложенный список должен находиться <span className="font-medium">внутри</span> тега <code className="bg-gray-700 px-1 rounded">{'<li>'}</code> родительского списка.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">HTML-код:</p>
            <pre className="text-cyan-400 text-xs overflow-x-auto">
              <code>{`<ul>
  <li>Фрукты
    <ul>
      <li>Яблоки</li>
      <li>Бананы</li>
    </ul>
  </li>
  <li>Овощи
    <ol>
      <li>Морковь</li>
      <li>Картофель</li>
    </ol>
  </li>
</ul>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Фрукты
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Яблоки</li>
                  <li>Бананы</li>
                </ul>
              </li>
              <li>Овощи
                <ol className="list-decimal pl-5 mt-1 space-y-1">
                  <li>Морковь</li>
                  <li>Картофель</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">📌 Важно:</span> Можно вкладывать как <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code> в <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code> или <code className="bg-gray-700 px-1 rounded">{'<ol>'}</code>, так и <code className="bg-gray-700 px-1 rounded">{'<ol>'}</code> в <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code> или <code className="bg-gray-700 px-1 rounded">{'<ol>'}</code>. Браузер автоматически отобразит соответствующие маркеры или номера на каждом уровне.
          </p>
        </div>
      </div>

      {/* Разница между <ul> и <ol> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-yellow-400" />
          Разница между маркированными и нумерованными списками
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-300">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="py-2 px-4 text-left">Характеристика</th>
                <th className="py-2 px-4 text-left"><code className="bg-gray-700 px-1 rounded text-green-300">{'<ul>'}</code> (Неупорядоченный)</th>
                <th className="py-2 px-4 text-left"><code className="bg-gray-700 px-1 rounded text-orange-300">{'<ol>'}</code> (Упорядоченный)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              <tr>
                <td className="py-2 px-4 font-medium">Назначение</td>
                <td className="py-2 px-4">Для перечисления элементов, где порядок не важен.</td>
                <td className="py-2 px-4">Для перечисления элементов, где порядок важен.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-medium">Маркеры</td>
                <td className="py-2 px-4">Точки, кружки, квадраты (по умолчанию точка).</td>
                <td className="py-2 px-4">Числа, буквы, римские цифры (по умолчанию числа).</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-medium">Примеры использования</td>
                <td className="py-2 px-4">Список покупок, преимущества, меню.</td>
                <td className="py-2 px-4">Инструкции, рецепты, топ-10, алгоритмы.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-medium">Семантика</td>
                <td className="py-2 px-4">Набор связанных, но неранжированных пунктов.</td>
                <td className="py-2 px-4">Последовательность шагов или ранжированный список.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <List className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать списки в HTML с помощью тегов <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<ol>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<li>'}</code>. Вы научились создавать как простые, так и вложенные списки, понимаете разницу между маркированными и нумерованными списками и знаете, когда какой тип использовать. Это важный навык для структурирования контента на ваших веб-страницах.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;