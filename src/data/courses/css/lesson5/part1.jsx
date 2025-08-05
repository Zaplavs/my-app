// src/data/courses/css/lesson5/part1.jsx
import React from 'react';
import { Palette, Type, Droplet, Hash, Monitor } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Palette className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🎨 Урок 5: Цвета и шрифты</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Основы визуального оформления текста</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться задавать цвета и управлять шрифтами в CSS.
            </p>
          </div>
        </div>
      </div>

      {/* Работа с цветами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Droplet className="w-5 h-5 text-red-400" />
          Как задавать цвета в CSS
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цвета в CSS можно задавать несколькими способами. Каждый из них имеет свои особенности и области применения.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* HEX */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="text-lg font-bold text-red-300 mb-3 flex items-center gap-2">
              <Hash className="w-5 h-5 text-red-400" />
              1. HEX (шестнадцатеричный)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Записывается как <code className="bg-gray-700 px-1.5 py-0.5 rounded">#RRGGBB</code>, где RR, GG, BB — значения красного, зеленого и синего цветов в шестнадцатеричной системе (от 00 до FF).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-gray-800 p-3 rounded text-center">
                <div className="w-full h-8 rounded mb-2" style={{ backgroundColor: '#ff0000' }}></div>
                <code className="text-xs">#ff0000</code>
                <p className="text-gray-400 text-xs mt-1">Красный</p>
              </div>
              <div className="bg-gray-800 p-3 rounded text-center">
                <div className="w-full h-8 rounded mb-2" style={{ backgroundColor: '#00ff00' }}></div>
                <code className="text-xs">#00ff00</code>
                <p className="text-gray-400 text-xs mt-1">Зеленый</p>
              </div>
              <div className="bg-gray-800 p-3 rounded text-center">
                <div className="w-full h-8 rounded mb-2" style={{ backgroundColor: '#0000ff' }}></div>
                <code className="text-xs">#0000ff</code>
                <p className="text-gray-400 text-xs mt-1">Синий</p>
              </div>
              <div className="bg-gray-800 p-3 rounded text-center">
                <div className="w-full h-8 rounded mb-2" style={{ backgroundColor: '#ff6347' }}></div>
                <code className="text-xs">#ff6347</code>
                <p className="text-gray-400 text-xs mt-1">Томатный</p>
              </div>
            </div>
            <div className="mt-3 bg-blue-900/20 p-3 rounded border border-blue-700/30">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Можно использовать сокращенную запись, если значения парные: <code className="bg-gray-700 px-1.5 py-0.5 rounded">#f00</code> вместо <code className="bg-gray-700 px-1.5 py-0.5 rounded">#ff0000</code>.
              </p>
            </div>
          </div>

          {/* RGB */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <Droplet className="w-5 h-5 text-green-400" />
              2. RGB
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Записывается как <code className="bg-gray-700 px-1.5 py-0.5 rounded">rgb(red, green, blue)</code>, где каждое значение от 0 до 255.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`color: rgb(255, 0, 0);    /* Красный */
color: rgb(0, 255, 0);    /* Зеленый */
color: rgb(0, 0, 255);    /* Синий */
color: rgb(255, 99, 71);  /* Томатный */`}
              </pre>
            </div>
          </div>

          {/* HSL */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Palette className="w-5 h-5 text-blue-400" />
              3. HSL
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Записывается как <code className="bg-gray-700 px-1.5 py-0.5 rounded">hsl(hue, saturation, lightness)</code>:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium">hue (тон)</span> — угол на цветовом круге (0-360)</li>
              <li><span className="font-medium">saturation (насыщенность)</span> — насыщенность цвета (0%-100%)</li>
              <li><span className="font-medium">lightness (светлота)</span> — светлота цвета (0%-100%)</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-sm mt-3">
              <pre className="whitespace-pre-wrap text-gray-300">
{`color: hsl(0, 100%, 50%);     /* Красный */
color: hsl(120, 100%, 50%);   /* Зеленый */
color: hsl(240, 100%, 50%);   /* Синий */
color: hsl(9, 100%, 64%);     /* Томатный */`}
              </pre>
            </div>
          </div>

          {/* Названия цветов */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
              <Type className="w-5 h-5 text-purple-400" />
              4. Предопределенные названия
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              CSS поддерживает множество стандартных названий цветов.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-gray-800 p-2 rounded flex items-center">
                <div className="w-4 h-4 rounded mr-2" style={{ backgroundColor: 'red' }}></div>
                <code className="text-xs">red</code>
              </div>
              <div className="bg-gray-800 p-2 rounded flex items-center">
                <div className="w-4 h-4 rounded mr-2" style={{ backgroundColor: 'blue' }}></div>
                <code className="text-xs">blue</code>
              </div>
              <div className="bg-gray-800 p-2 rounded flex items-center">
                <div className="w-4 h-4 rounded mr-2" style={{ backgroundColor: 'green' }}></div>
                <code className="text-xs">green</code>
              </div>
              <div className="bg-gray-800 p-2 rounded flex items-center">
                <div className="w-4 h-4 rounded mr-2" style={{ backgroundColor: 'tomato' }}></div>
                <code className="text-xs">tomato</code>
              </div>
            </div>
            <div className="mt-3 bg-yellow-900/20 p-3 rounded border border-yellow-700/30">
              <p className="text-yellow-300 text-sm">
                ⚠️ <span className="font-medium">Ограничение:</span> Названий значительно меньше, чем возможных цветов. Для точного подбора используйте HEX, RGB или HSL.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Работа со шрифтами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-cyan-400" />
          Свойства шрифтов в CSS
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            CSS предоставляет множество свойств для управления внешним видом текста. Рассмотрим основные:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* font-family */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="text-lg font-bold text-cyan-300 mb-3">font-family</h3>
            <p className="text-gray-300 text-sm mb-3">
              Определяет семейство шрифтов. Можно указать несколько значений через запятую — браузер использует первый доступный.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`font-family: 'Arial', sans-serif;
font-family: 'Times New Roman', serif;
font-family: 'Courier New', monospace;`}
              </pre>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontFamily: 'Arial, sans-serif' }} className="text-sm">Arial, sans-serif</p>
                <p className="text-gray-400 text-xs mt-1">Без засечек</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontFamily: 'Times New Roman, serif' }} className="text-sm">Times New Roman, serif</p>
                <p className="text-gray-400 text-xs mt-1">С засечками</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontFamily: 'Courier New, monospace' }} className="text-sm">Courier New, monospace</p>
                <p className="text-gray-400 text-xs mt-1">Моноширинный</p>
              </div>
            </div>
          </div>

          {/* font-size */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-indigo-700/30">
            <h3 className="text-lg font-bold text-indigo-300 mb-3">font-size</h3>
            <p className="text-gray-300 text-sm mb-3">
              Задает размер шрифта. Можно использовать абсолютные (px) и относительные (em, rem, %) единицы.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`font-size: 16px;    /* Пиксели */
font-size: 1.2em;   /* Относительно родителя */
font-size: 1.5rem;  /* Относительно корня */
font-size: 120%;    /* Проценты */`}
              </pre>
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontSize: '12px' }}>12px текст</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontSize: '16px' }}>16px текст</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontSize: '20px' }}>20px текст</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontSize: '24px' }}>24px текст</p>
              </div>
            </div>
          </div>

          {/* font-weight */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="text-lg font-bold text-pink-300 mb-3">font-weight</h3>
            <p className="text-gray-300 text-sm mb-3">
              Определяет насыщенность шрифта (жирность). Значения от 100 (тонкий) до 900 (очень жирный).
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`font-weight: normal;  /* 400 */
font-weight: bold;    /* 700 */
font-weight: 300;     /* Тонкий */
font-weight: 900;     /* Очень жирный */`}
              </pre>
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontWeight: '300' }}>300 Тонкий</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontWeight: 'normal' }}>400 Нормальный</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontWeight: 'bold' }}>700 Жирный</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p style={{ fontWeight: '900' }}>900 Очень жирный</p>
              </div>
            </div>
          </div>

          {/* color */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="text-lg font-bold text-orange-300 mb-3">color</h3>
            <p className="text-gray-300 text-sm mb-3">
              Задает цвет текста. Принимает все рассмотренные выше форматы цветов.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`color: #ff6347;        /* HEX */
color: rgb(255, 99, 71); /* RGB */
color: hsl(9, 100%, 64%); /* HSL */
color: tomato;          /* Название */`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Пример комплексного использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Monitor className="w-5 h-5 text-green-400" />
          Комплексный пример
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Объединим все рассмотренные свойства в одном примере:
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-white mb-1">CSS:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`.title {
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}

.content {
  font-family: 'Times New Roman', serif;
  font-size: 16px;
  color: #34495e;
  line-height: 1.6;
}`}
            </pre>
          </div>
          <div>
            <p className="font-medium text-white mb-1">HTML:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`<h1 class="title">Заголовок</h1>
<p class="content">Это пример текста с настроенными шрифтами и цветами.</p>`}
            </pre>
            <div className="mt-3 p-3 bg-gray-900 rounded">
              <h1 style={{ 
                fontFamily: 'Arial, sans-serif',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#2c3e50',
                textAlign: 'center'
              }}>Заголовок</h1>
              <p style={{ 
                fontFamily: 'Times New Roman, serif',
                fontSize: '16px',
                color: '#34495e',
                lineHeight: '1.6'
              }}>Это пример текста с настроенными шрифтами и цветами.</p>
            </div>
          </div>
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
              Теперь вы знаете, как задавать цвета различными способами и управлять свойствами шрифтов. Эти знания позволяют создавать визуально привлекательные и читаемые веб-страницы. В следующем уроке мы изучим свойства фона и работу с изображениями.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;