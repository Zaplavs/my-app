// src/data/courses/css/lesson11/part1.jsx
import React from 'react';
import { Grid, Columns, Move, Hash } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Grid className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧮 Урок 11: CSS Grid: сетка для сложных макетов</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание двумерных макетов с помощью CSS Grid</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить CSS Grid — мощную технологию для создания сложных двумерных макетов (строки и столбцы одновременно).
            </p>
          </div>
        </div>
      </div>

      {/* Что такое CSS Grid? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Grid className="w-5 h-5 text-green-400" />
          Что такое CSS Grid?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">CSS Grid Layout</span> — это двумерная система верстки, которая позволяет создавать сложные макеты, управляя как строками, так и столбцами одновременно.
          </p>
          <p>
            В отличие от Flexbox, который в основном работает в одном измерении (строка <span className="font-medium">или</span> столбец), Grid позволяет точно управлять расположением элементов как по горизонтали, так и по вертикали.
          </p>
        </div>
      </div>

      {/* Основные понятия Grid */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          Основные понятия Grid
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Grid есть два основных типа элементов:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Grid className="w-5 h-5 text-blue-400" />
              Grid-контейнер (Grid Container)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Элемент, к которому применено свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">display: grid</code>. Он становится контейнером для grid-элементов.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.grid-container {
  display: grid;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <Move className="w-5 h-5 text-green-400" />
              Grid-элементы (Grid Items)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Непосредственные дочерние элементы grid-контейнера. Они размещаются внутри созданной сетки.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`<div class="grid-container">
  <div>Grid-элемент 1</div> <!-- Эти элементы -->
  <div>Grid-элемент 2</div> <!-- становятся grid-элементами -->
  <div>Grid-элемент 3</div> <!-- при display: grid -->
</div>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Основные свойства Grid */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Columns className="w-5 h-5 text-yellow-400" />
          Основные свойства Grid
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Grid управляется набором свойств, применяемых к контейнеру и элементам:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* grid-template-columns и grid-template-rows */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="text-lg font-bold text-orange-300 mb-3">grid-template-columns и grid-template-rows</h3>
            <p className="text-gray-300 text-sm mb-3">
              Определяют <span className="font-medium">количество и размеры</span> столбцов и строк сетки.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Возможные значения:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">100px</code> - фиксированный размер</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">1fr</code> - доля свободного пространства</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">auto</code> - размер по содержимому</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">repeat()</code> - повторение значений</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px auto;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* grid-gap (gap) */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3">gap (grid-gap)</h3>
            <p className="text-gray-300 text-sm mb-3">
              Задает <span className="font-medium">отступы между</span> ячейками сетки.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Возможные значения:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">gap: 10px;</code> - одинаковые отступы</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">gap: 10px 20px;</code> - вертикальные и горизонтальные</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">row-gap: 10px;</code> - только между строками</li>
                  <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">column-gap: 20px;</code> - только между столбцами</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* grid-area и именованные области */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3">grid-area и именованные области</h3>
            <p className="text-gray-300 text-sm mb-3">
              Позволяют <span className="font-medium">именовать области</span> сетки и размещать элементы в них.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Как использовать:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li>Определить области в <code className="bg-gray-700 px-1.5 py-0.5 rounded">grid-template-areas</code></li>
                  <li>Назначить элементу область через <code className="bg-gray-700 px-1.5 py-0.5 rounded">grid-area</code></li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.grid-container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }`}
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
          <Grid className="w-5 h-5 text-cyan-400" />
          Практический пример
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создадим простую сетку 3x2 с отступами:
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-white mb-1">CSS:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
  height: 250px;
}

.grid-item {
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
{`<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>`}
            </pre>
            <div className="mt-3 grid grid-cols-3 gap-2" style={{ height: '120px' }}>
              <div className="bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
              <div className="bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
              <div className="bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
              <div className="bg-blue-500 flex items-center justify-center text-white font-bold">4</div>
              <div className="bg-blue-500 flex items-center justify-center text-white font-bold">5</div>
              <div className="bg-blue-500 flex items-center justify-center text-white font-bold">6</div>
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества Grid */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Grid className="w-5 h-5 text-green-400" />
          Преимущества CSS Grid
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-medium">Двумерный контроль:</span> Одновременное управление строками и столбцами</li>
            <li><span className="font-medium">Гибкость размеров:</span> Поддержка фиксированных, гибких и автоматических размеров</li>
            <li><span className="font-medium">Именованные области:</span> Удобное размещение элементов по смысловым областям</li>
            <li><span className="font-medium">Выравнивание:</span> Мощные инструменты выравнивания по осям</li>
            <li><span className="font-medium">Адаптивность:</span> Отлично работает с медиазапросами для адаптивного дизайна</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Grid className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🧮</h3>
            <p className="text-gray-300">
              Теперь вы понимаете основы CSS Grid и как использовать его для создания сложных макетов. Эти знания позволяют легко создавать целые страницы с хедером, сайдбаром, контентом и футером. В следующем уроке мы рассмотрим более продвинутые свойства Grid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;