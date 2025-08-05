// src/data/courses/css/lesson7/part1.jsx
import React from 'react';
import { Square, Minus, SquareDashed, Move, Ruler, Box } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Box className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📦 Урок 7: Блочная модель: как устроены элементы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Понимание структуры HTML-элементов в CSS</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять концепцию блочной модели CSS и научиться управлять размерами и отступами элементов.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое блочная модель? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Box className="w-5 h-5 text-green-400" />
          Что такое блочная модель?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В CSS каждый HTML-элемент представляет собой <span className="font-medium text-green-300">прямоугольную "коробку"</span>. Блочная модель описывает, как рассчитывается общая ширина и высота этой коробки.
          </p>
          <p>
            Каждая "коробка" состоит из четырех частей:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Четыре компонента блочной модели:</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <Square className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Content (содержимое)</span> — фактический контент элемента (текст, изображение и т.д.)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Minus className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Padding (внутренний отступ)</span> — пространство между содержимым и границей
                </div>
              </li>
              <li className="flex items-start gap-2">
                <SquareDashed className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Border (граница)</span> — линия вокруг padding и content
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Move className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Margin (внешний отступ)</span> — пространство между границей этого элемента и соседними элементами
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Визуальное представление:</h3>
            <div className="flex flex-col items-center">
              <div className="w-64 h-48 bg-gray-800 border-2 border-dashed border-gray-600 rounded relative">
                {/* Margin */}
                <div className="absolute inset-0 border-4 border-purple-500/30 rounded m-1">
                  <div className="absolute top-0 left-0 text-purple-300 text-xs p-1">Margin</div>
                </div>
                
                {/* Border */}
                <div className="absolute inset-4 bg-green-500/20 border-2 border-green-500 rounded">
                  <div className="absolute top-0 left-0 text-green-300 text-xs p-1">Border</div>
                </div>
                
                {/* Padding */}
                <div className="absolute inset-8 bg-yellow-500/20 rounded">
                  <div className="absolute top-0 left-0 text-yellow-300 text-xs p-1">Padding</div>
                </div>
                
                {/* Content */}
                <div className="absolute inset-12 bg-red-500/20 rounded flex items-center justify-center">
                  <div className="text-red-300 text-sm text-center">Content<br/>(текст/изображение)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Расчет размеров */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Ruler className="w-5 h-5 text-cyan-400" />
          Как рассчитываются размеры элемента
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            По умолчанию ширина и высота элемента в CSS задают размер <span className="font-medium">только содержимого (content)</span>, а padding и border добавляются к этому размеру.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Пример расчета ширины:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`div {
  width: 200px;        /* Ширина содержимого */
  padding: 20px;       /* Внутренний отступ слева и справа */
  border: 5px solid;   /* Граница слева и справа */
  margin: 10px;        /* Внешний отступ слева и справа */
}`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-blue-900/20 rounded border border-blue-700/30">
              <p className="text-blue-300 text-sm">
                <span className="font-medium">Общая ширина элемента:</span><br/>
                Content (200px) + Padding (20px + 20px) + Border (5px + 5px) + Margin (10px + 10px) = <span className="font-bold">280px</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-3">Свойство box-sizing:</h3>
            <p className="text-gray-300 text-sm mb-3">
              Чтобы упростить расчеты, можно изменить поведение блочной модели с помощью свойства <code className="bg-gray-700 px-1.5 py-0.5 rounded">box-sizing</code>:
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-white text-sm mb-1">box-sizing: content-box; (по умолчанию)</p>
                <p className="text-gray-400 text-xs">Ширина и высота применяются только к содержимому</p>
              </div>
              <div>
                <p className="font-medium text-white text-sm mb-1">box-sizing: border-box;</p>
                <p className="text-gray-400 text-xs">Ширина и высота включают содержимое, padding и border</p>
              </div>
            </div>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`/* Рекомендуемый сброс для всех элементов */
*, *::before, *::after {
  box-sizing: border-box;
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Свойства блочной модели */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Square className="w-5 h-5 text-pink-400" />
          Свойства блочной модели
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            CSS предоставляет отдельные свойства для управления каждым аспектом блочной модели:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-2 flex items-center gap-2">
                <Square className="w-4 h-4" />
                Width и Height
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                Задают ширину и высоту <span className="font-medium">содержимого</span> элемента.
              </p>
              <div className="bg-gray-800 p-2 rounded text-xs">
                <pre className="whitespace-pre-wrap text-gray-300">
{`div {
  width: 300px;
  height: 150px;
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
                <Minus className="w-4 h-4" />
                Padding
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                Задает внутренние отступы. Можно указывать по отдельности или все сразу.
              </p>
              <div className="bg-gray-800 p-2 rounded text-xs">
                <pre className="whitespace-pre-wrap text-gray-300">
{`div {
  padding: 10px;          /* Все стороны */
  padding: 10px 20px;     /* Верх/низ и лево/право */
  padding-top: 15px;      /* Только сверху */
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <SquareDashed className="w-4 h-4" />
                Border
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                Задает границу элемента: толщина, стиль и цвет.
              </p>
              <div className="bg-gray-800 p-2 rounded text-xs">
                <pre className="whitespace-pre-wrap text-gray-300">
{`div {
  border: 2px solid blue;  /* Все стороны */
  border-top: 1px dashed red; /* Только сверху */
  border-radius: 5px;      /* Скругление углов */
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <Move className="w-4 h-4" />
                Margin
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                Задает внешние отступы. Работает аналогично padding.
              </p>
              <div className="bg-gray-800 p-2 rounded text-xs">
                <pre className="whitespace-pre-wrap text-gray-300">
{`div {
  margin: 20px;           /* Все стороны */
  margin: 0 auto;         /* Центрирование по горизонтали */
  margin-top: 30px;       /* Только сверху */
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Box className="w-5 h-5 text-orange-400" />
          Практический пример
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Рассмотрим пример элемента с полной стилизацией блочной модели:
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-white mb-1">CSS:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`.card {
  width: 250px;
  height: 150px;
  padding: 20px;
  border: 3px solid #3498db;
  border-radius: 10px;
  margin: 20px auto;
  background-color: #ecf0f1;
  box-sizing: border-box;
}`}
            </pre>
          </div>
          <div>
            <p className="font-medium text-white mb-1">HTML:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`<div class="card">
  Это карточка с 
  настроенной блочной 
  моделью
</div>`}
            </pre>
            <div className="mt-3 flex justify-center">
              <div className="w-64 bg-gray-200 border-4 border-blue-500 rounded-lg p-5 text-center" 
                   style={{ 
                     width: '250px', 
                     height: '150px', 
                     padding: '20px', 
                     border: '3px solid #3498db',
                     borderRadius: '10px',
                     margin: '0 auto',
                     backgroundColor: '#ecf0f1',
                     boxSizing: 'border-box'
                   }}>
                Это карточка с настроенной блочной моделью
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Box className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 📦</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как устроена блочная модель CSS и как каждое свойство влияет на размеры и отступы элементов. Это фундаментальное знание для создания правильно структурированных и предсказуемых макетов. В следующем уроке мы изучим различные типы отображения элементов (display).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;