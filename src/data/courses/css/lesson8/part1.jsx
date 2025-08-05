// src/data/courses/css/lesson8/part1.jsx
import React from 'react';
import { Move, Square, Navigation, MapPin, Anchor, StickyNote } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Move className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧭 Урок 8: Как двигать элементы: position</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Позиционирование элементов в CSS</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить различные значения свойства CSS <code className="bg-gray-700 px-1.5 py-0.5 rounded">position</code> для точного контроля размещения элементов на странице.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое позиционирование? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Move className="w-5 h-5 text-green-400" />
          Что такое позиционирование?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">position</code> в CSS определяет, как элемент будет позиционироваться на веб-странице. Оно управляет тем, как элемент "ведет себя" в потоке документа и как на него влияют свойства смещения.
          </p>
          <p>
            По умолчанию все элементы имеют значение <code className="bg-gray-700 px-1.5 py-0.5 rounded">position: static</code>, что означает их обычное положение в потоке документа.
          </p>
        </div>
      </div>

      {/* Типы позиционирования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Navigation className="w-5 h-5 text-purple-400" />
          Типы позиционирования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            CSS предоставляет пять основных значений для свойства <code className="bg-gray-700 px-1.5 py-0.5 rounded">position</code>:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Static */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-gray-700/30">
            <h3 className="text-lg font-bold text-gray-300 mb-3 flex items-center gap-2">
              <Square className="w-5 h-5 text-gray-400" />
              1. Static (по умолчанию)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Элементы с <code className="bg-gray-700 px-1.5 py-0.5 rounded">position: static</code> следуют обычному потоку документа. Свойства смещения (<code className="bg-gray-700 px-1.5 py-0.5 rounded">top</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">right</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">bottom</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">left</code>) не применяются.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.static-element {
  position: static;
  /* top, right, bottom, left не работают */
}`}
              </pre>
            </div>
          </div>

          {/* Relative */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Move className="w-5 h-5 text-blue-400" />
              2. Relative (относительное)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Элемент позиционируется относительно своего <span className="font-medium">исходного положения</span> в потоке документа. Он <span className="font-medium">остается в потоке</span>, но может быть смещен с помощью свойств смещения.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.relative-element {
  position: relative;
  top: 10px;    /* Смещение вниз на 10px */
  left: 20px;   /* Смещение вправо на 20px */
}`}
              </pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              💡 <span className="font-medium">Совет:</span> Используется для небольших корректировок положения элемента или как контекст для абсолютно позиционированных потомков.
            </div>
          </div>

          {/* Absolute */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-400" />
              3. Absolute (абсолютное)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Элемент <span className="font-medium">вырывается из потока</span> документа и позиционируется относительно <span className="font-medium">ближайшего позиционированного предка</span> (родителя с <code className="bg-gray-700 px-1.5 py-0.5 rounded">position</code> не <code className="bg-gray-700 px-1.5 py-0.5 rounded">static</code>). Если такого предка нет, используется <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<html>'}</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.parent {
  position: relative; /* Создает контекст позиционирования */
}

.absolute-element {
  position: absolute;
  top: 0;      /* От верха родителя */
  right: 0;    /* От правого края родителя */
}`}
              </pre>
            </div>
            <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ⚠️ <span className="font-medium">Важно:</span> Абсолютно позиционированный элемент не занимает места в потоке документа.
            </div>
          </div>

          {/* Fixed */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="text-lg font-bold text-orange-300 mb-3 flex items-center gap-2">
              <Anchor className="w-5 h-5 text-orange-400" />
              4. Fixed (фиксированное)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Элемент <span className="font-medium">вырывается из потока</span> и позиционируется относительно <span className="font-medium">окна браузера (viewport)</span>. Он остается на одном и том же месте при прокрутке страницы.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.fixed-element {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* Будет "прилипшим" хедером */
}`}
              </pre>
            </div>
            <div className="mt-3 p-2 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-xs">
              💡 <span className="font-medium">Пример:</span> Фиксированные навигационные панели, кнопки "наверх", модальные окна.
            </div>
          </div>

          {/* Sticky */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
              <StickyNote className="w-5 h-5 text-purple-400" />
              5. Sticky (липкое)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Комбинация относительного и фиксированного позиционирования. Элемент ведет себя как <code className="bg-gray-700 px-1.5 py-0.5 rounded">relative</code> до тех пор, пока не достигает определенной позиции прокрутки, после чего становится <code className="bg-gray-700 px-1.5 py-0.5 rounded">fixed</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.sticky-element {
  position: sticky;
  top: 20px; /* Прилипает, когда до верха окна остается 20px */
}`}
              </pre>
            </div>
            <div className="mt-3 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
              💡 <span className="font-medium">Пример:</span> Заголовки секций, которые "прилипают" к верху экрана при прокрутке.
            </div>
          </div>
        </div>
      </div>

      {/* Свойства смещения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Move className="w-5 h-5 text-cyan-400" />
          Свойства смещения: top, right, bottom, left
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Эти свойства работают только с элементами, у которых <code className="bg-gray-700 px-1.5 py-0.5 rounded">position</code> не равно <code className="bg-gray-700 px-1.5 py-0.5 rounded">static</code>. Они определяют смещение элемента от соответствующих краев его контекста позиционирования.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Возможные значения:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Пиксели (px)</span>: <code className="bg-gray-700 px-1.5 py-0.5 rounded">top: 10px;</code></li>
              <li><span className="font-medium">Проценты (%)</span>: <code className="bg-gray-700 px-1.5 py-0.5 rounded">left: 50%;</code></li>
              <li><span className="font-medium">Единицы em/rem</span>: <code className="bg-gray-700 px-1.5 py-0.5 rounded">bottom: 1.5em;</code></li>
              <li><span className="font-medium">Ключевые слова</span>: <code className="bg-gray-700 px-1.5 py-0.5 rounded">top: auto;</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Как работают:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">top: 10px;</code> — смещает элемент вниз на 10px</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">right: 20px;</code> — смещает элемент влево на 20px</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">bottom: 15px;</code> — смещает элемент вверх на 15px</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">left: 5px;</code> — смещает элемент вправо на 5px</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
          <h3 className="font-bold text-yellow-300 mb-2">Пример комплексного использования:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div>
              <p className="font-medium text-white text-xs mb-1">CSS:</p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">
{`.container {
  position: relative;
  height: 200px;
  border: 2px dashed #64748b;
}

.absolute-box {
  position: absolute;
  top: 20px;
  right: 30px;
  width: 100px;
  height: 50px;
  background-color: #3b82f6;
}`}
              </pre>
            </div>
            <div>
              <p className="font-medium text-white text-xs mb-1">HTML:</p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">
{`<div class="container">
  <div class="absolute-box"></div>
</div>`}
              </pre>
              <div className="mt-2 flex justify-center">
                <div className="w-48 h-32 border-2 border-dashed border-gray-500 relative">
                  <div className="absolute top-5 right-7 w-16 h-8 bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Контекст позиционирования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Square className="w-5 h-5 text-pink-400" />
          Контекст позиционирования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При использовании <code className="bg-gray-700 px-1.5 py-0.5 rounded">position: absolute</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded">position: fixed</code> важно понимать, относительно чего позиционируется элемент:
          </p>
        </div>
        
        <div className="mt-4 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-lg border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-2">Для абсолютного позиционирования:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Элемент позиционируется относительно <span className="font-medium">ближайшего позиционированного предка</span> (с <code className="bg-gray-700 px-1.5 py-0.5 rounded">position</code> не <code className="bg-gray-700 px-1.5 py-0.5 rounded">static</code>)</li>
              <li>Если такого предка нет, используется корневой элемент (<code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<html>'}</code>)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-lg border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2">Для фиксированного позиционирования:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Элемент всегда позиционируется относительно <span className="font-medium">окна браузера (viewport)</span></li>
              <li>Он не смещается при прокрутке страницы</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Move className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🧭</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как управлять позиционированием элементов в CSS. Эти знания позволяют создавать сложные макеты, фиксированные элементы интерфейса и точно размещать компоненты на странице. В следующем уроке мы изучим свойства отображения элементов (display).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;