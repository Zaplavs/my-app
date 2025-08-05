// src/data/courses/css/lesson10/part1.jsx
import React from 'react';
import { Columns, AlignLeft, AlignCenter, Move, Shuffle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Columns className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🎯 Урок 10: Flexbox: гибкие строки и столбцы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Современный способ создания гибких макетов</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить Flexbox — мощную технологию CSS для создания гибких макетов строк и столбцов.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Flexbox? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Columns className="w-5 h-5 text-green-400" />
          Что такое Flexbox?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Flexbox (Flexible Box Layout)</span> — это модуль CSS, предназначенный для создания гибких и эффективных макетов в одном измерении (строка или столбец).
          </p>
          <p>
            Flexbox решает множество проблем традиционных методов верстки, таких как:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Сложное вертикальное центрирование элементов</li>
            <li>Равномерное распределение пространства между элементами</li>
            <li>Создание элементов одинаковой высоты в строке</li>
            <li>Адаптивное поведение элементов при изменении размера контейнера</li>
          </ul>
        </div>
      </div>

      {/* Основные понятия Flexbox */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shuffle className="w-5 h-5 text-purple-400" />
          Основные понятия Flexbox
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Flexbox есть два основных типа элементов:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Columns className="w-5 h-5 text-blue-400" />
              Flex-контейнер (Flex Container)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Элемент, к которому применено свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">display: flex</code>. Он становится контейнером для flex-элементов.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.flex-container {
  display: flex;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <Move className="w-5 h-5 text-green-400" />
              Flex-элементы (Flex Items)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Непосредственные дочерние элементы flex-контейнера. Они подчиняются правилам Flexbox.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`<div class="flex-container">
  <div>Flex-элемент 1</div> <!-- Эти элементы -->
  <div>Flex-элемент 2</div> <!-- становятся flex-элементами -->
  <div>Flex-элемент 3</div> <!-- при display: flex -->
</div>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Основные свойства Flexbox */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlignCenter className="w-5 h-5 text-yellow-400" />
          Основные свойства Flexbox
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Flexbox управляется набором свойств, применяемых к контейнеру и элементам:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* flex-direction */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="text-lg font-bold text-orange-300 mb-3">flex-direction</h3>
            <p className="text-gray-300 text-sm mb-3">
              Определяет <span className="font-medium">направление главной оси</span> и, соответственно, направление расположения flex-элементов.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Возможные значения:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">row</code> (по умолчанию) - слева направо</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">row-reverse</code> - справа налево</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">column</code> - сверху вниз</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">column-reverse</code> - снизу вверх</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.flex-container {
  display: flex;
  flex-direction: row; /* или column */
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* justify-content */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3">justify-content</h3>
            <p className="text-gray-300 text-sm mb-3">
              Выравнивает элементы <span className="font-medium">вдоль главной оси</span> (определяется <code className="bg-gray-700 px-1.5 py-0.5 rounded">flex-direction</code>).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Возможные значения:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">flex-start</code> (по умолчанию) - в начале оси</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">flex-end</code> - в конце оси</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">center</code> - по центру</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">space-between</code> - равномерно с краев</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">space-around</code> - равномерно по всему пространству</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">space-evenly</code> - равные интервалы между элементами</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.flex-container {
  display: flex;
  justify-content: center;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* align-items */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3">align-items</h3>
            <p className="text-gray-300 text-sm mb-3">
              Выравнивает элементы <span className="font-medium">вдоль поперечной оси</span> (перпендикулярной главной оси).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Возможные значения:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">stretch</code> (по умолчанию) - растягивает элементы</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">flex-start</code> - выравнивание к началу</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">flex-end</code> - выравнивание к концу</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">center</code> - по центру</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">baseline</code> - по базовой линии текста</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.flex-container {
  display: flex;
  align-items: center;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlignCenter className="w-5 h-5 text-cyan-400" />
          Практический пример
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создадим центрированный контейнер с тремя элементами:
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-white mb-1">CSS:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 2px dashed #64748b;
}

.flex-item {
  width: 80px;
  height: 80px;
  margin: 0 10px;
  background-color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}`}
            </pre>
          </div>
          <div>
            <p className="font-medium text-white mb-1">HTML:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>`}
            </pre>
            <div className="mt-3 flex justify-center">
              <div className="w-full h-32 border-2 border-dashed border-gray-500 flex items-center justify-center">
                <div className="flex">
                  <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white font-bold mx-1">1</div>
                  <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white font-bold mx-1">2</div>
                  <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white font-bold mx-1">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества Flexbox */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlignLeft className="w-5 h-5 text-green-400" />
          Преимущества Flexbox
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-medium">Простое центрирование:</span> Легко центрировать элементы как по горизонтали, так и по вертикали</li>
            <li><span className="font-medium">Гибкое распределение пространства:</span> Элементы могут равномерно распределять доступное пространство</li>
            <li><span className="font-medium">Управление порядком элементов:</span> Можно изменить визуальный порядок элементов без изменения HTML</li>
            <li><span className="font-medium">Равные высоты:</span> Элементы в строке автоматически получают одинаковую высоту</li>
            <li><span className="font-medium">Адаптивность:</span> Отлично работает с отзывчивыми дизайнами</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Columns className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎯</h3>
            <p className="text-gray-300">
              Теперь вы понимаете основы Flexbox и как использовать его для создания гибких макетов. Эти знания позволяют легко создавать адаптивные навигации, карточки, галереи и другие компоненты интерфейса. В следующем уроке мы рассмотрим более продвинутые свойства Flexbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;