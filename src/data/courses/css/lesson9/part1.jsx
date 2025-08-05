// src/data/courses/css/lesson9/part1.jsx
import React from 'react';
import { Square, Minimize2, Eye, EyeOff, AlignLeft, Columns } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧱 Урок 9: Как элементы ведут себя: display и поток</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Понимание типов отображения элементов в CSS</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить свойство CSS <code className="bg-gray-700 px-1.5 py-0.5 rounded">display</code> и понять, как оно влияет на поведение элементов в потоке документа.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое поток документа? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlignLeft className="w-5 h-5 text-green-400" />
          Что такое поток документа?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Поток документа</span> — это естественный порядок размещения элементов на веб-странице, определяемый HTML-разметкой. Элементы следуют один за другим сверху вниз (для блочных) или слева направо (для строчных), в соответствии со своими типами отображения.
          </p>
          <p>
            По умолчанию большинство элементов ведут себя либо как <span className="font-medium">блочные</span>, либо как <span className="font-medium">строчные</span>, и это поведение определяется их значением свойства <code className="bg-gray-700 px-1.5 py-0.5 rounded">display</code>.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Блочные элементы в потоке:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Располагаются вертикально, друг под другом</li>
              <li>Занимают всю доступную ширину родителя</li>
              <li>Примеры: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<div>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<p>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<h1>-<h6>'}</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Строчные элементы в потоке:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Располагаются горизонтально, в строке с текстом</li>
              <li>Занимают только столько ширины, сколько нужно для содержимого</li>
              <li>Примеры: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<span>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<a>'}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<strong>'}</code></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Свойство display */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Square className="w-5 h-5 text-yellow-400" />
          Свойство display
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">display</code> определяет, как элемент отображается в потоке документа. Оно управляет тем, как элемент взаимодействует с другими элементами по горизонтали и вертикали.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* block */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Square className="w-5 h-5 text-blue-400" />
              1. display: block
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Элемент ведет себя как <span className="font-medium">блочный</span>:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mb-3">
              <li>Занимает <span className="font-medium">всю ширину</span> родительского элемента</li>
              <li>Всегда начинается с <span className="font-medium">новой строки</span></li>
              <li>Реагирует на свойства <code className="bg-gray-700 px-1.5 py-0.5 rounded">width</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">height</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">margin</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">padding</code> со всех сторон</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.block-element {
  display: block;
  width: 300px;
  height: 100px;
  background-color: #3b82f6;
  margin: 10px 0;
}`}
              </pre>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <div className="w-full h-8 bg-blue-500 rounded"></div>
              <div className="w-full h-8 bg-blue-500 rounded"></div>
            </div>
          </div>

          {/* inline */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <Minimize2 className="w-5 h-5 text-green-400" />
              2. display: inline
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Элемент ведет себя как <span className="font-medium">строчный</span>:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mb-3">
              <li>Занимает <span className="font-medium">только необходимое</span> пространство</li>
              <li>Располагается <span className="font-medium">в строке</span> с другими элементами</li>
              <li><span className="font-medium">Игнорирует</span> свойства <code className="bg-gray-700 px-1.5 py-0.5 rounded">width</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">height</code></li>
              <li>Реагирует только на <code className="bg-gray-700 px-1.5 py-0.5 rounded">margin</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">padding</code> <span className="font-medium">по горизонтали</span></li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.inline-element {
  display: inline;
  background-color: #10b981;
  padding: 5px 10px;
}`}
              </pre>
            </div>
            <div className="mt-3">
              <span className="inline-block bg-green-500 rounded px-2 py-1 mr-1">Строчный</span>
              <span className="inline-block bg-green-500 rounded px-2 py-1 mr-1">элемент</span>
              <span className="inline-block bg-green-500 rounded px-2 py-1">в строке</span>
            </div>
          </div>

          {/* inline-block */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
              <Square className="w-5 h-5 text-purple-400" />
              <Minimize2 className="w-4 h-4" />
              3. display: inline-block
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Комбинация строчного и блочного поведения:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mb-3">
              <li>Располагается <span className="font-medium">в строке</span> с другими элементами</li>
              <li><span className="font-medium">Реагирует</span> на свойства <code className="bg-gray-700 px-1.5 py-0.5 rounded">width</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">height</code></li>
              <li>Реагирует на <code className="bg-gray-700 px-1.5 py-0.5 rounded">margin</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">padding</code> со всех сторон</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.inline-block-element {
  display: inline-block;
  width: 100px;
  height: 50px;
  background-color: #8b5cf6;
  margin: 5px;
}`}
              </pre>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <div className="w-24 h-12 bg-purple-500 rounded"></div>
              <div className="w-24 h-12 bg-purple-500 rounded"></div>
              <div className="w-24 h-12 bg-purple-500 rounded"></div>
            </div>
          </div>

          {/* none */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="text-lg font-bold text-red-300 mb-3 flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-red-400" />
              4. display: none
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Элемент <span className="font-medium">полностью скрывается</span>:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mb-3">
              <li>Элемент <span className="font-medium">удаляется из потока документа</span></li>
              <li>Он не занимает места на странице</li>
              <li>Все дочерние элементы также скрываются</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.hidden-element {
  display: none;
}`}
              </pre>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-500 rounded"></div>
              <div className="w-8 h-8 bg-gray-700 rounded opacity-50"></div> {/* Скрытый элемент */}
              <div className="w-8 h-8 bg-gray-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Различия между display и visibility */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          <EyeOff className="w-5 h-5 text-cyan-400" />
          Display vs Visibility
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Важно понимать разницу между <code className="bg-gray-700 px-1.5 py-0.5 rounded">display: none</code> и свойством <code className="bg-gray-700 px-1.5 py-0.5 rounded">visibility</code>:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2 flex items-center gap-2">
              <EyeOff className="w-4 h-4" />
              display: none
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Элемент <span className="font-medium">полностью удаляется</span> из потока документа</li>
              <li>Он <span className="font-medium">не занимает места</span> на странице</li>
              <li>Соседние элементы занимают его место</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              visibility: hidden
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Элемент <span className="font-medium">остается в потоке</span> документа</li>
              <li>Он <span className="font-medium">продолжает занимать место</span> на странице</li>
              <li>Соседние элементы <span className="font-medium">не</span> перемещаются</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
          <h3 className="font-bold text-yellow-300 mb-2">Пример:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <p className="text-white text-sm mb-2">display: none</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <div className="w-8 h-8 bg-gray-700 rounded opacity-50"></div> {/* display: none */}
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
            </div>
            <div>
              <p className="text-white text-sm mb-2">visibility: hidden</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <div className="w-8 h-8 bg-blue-500 rounded opacity-0"></div> {/* visibility: hidden */}
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Columns className="w-5 h-5 text-orange-400" />
          Практический пример
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Рассмотрим пример, демонстрирующий разные типы отображения:
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-white mb-1">CSS:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`.block-item {
  display: block;
  background-color: #3b82f6;
  margin: 5px 0;
  padding: 10px;
}

.inline-item {
  display: inline;
  background-color: #10b981;
  padding: 5px 10px;
  margin: 0 5px;
}

.inline-block-item {
  display: inline-block;
  background-color: #8b5cf6;
  width: 100px;
  height: 50px;
  margin: 5px;
}`}
            </pre>
          </div>
          <div>
            <p className="font-medium text-white mb-1">HTML:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`<div class="block-item">Блочный элемент</div>
<div class="block-item">Блочный элемент</div>

<span class="inline-item">Строчный</span>
<span class="inline-item">элементы</span>

<div class="inline-block-item"></div>
<div class="inline-block-item"></div>`}
            </pre>
            <div className="mt-3 space-y-2">
              <div className="bg-blue-500 p-2 rounded">Блочный элемент</div>
              <div className="bg-blue-500 p-2 rounded">Блочный элемент</div>
              <div>
                <span className="inline-block bg-green-500 rounded px-2 py-1 mx-1">Строчный</span>
                <span className="inline-block bg-green-500 rounded px-2 py-1 mx-1">элементы</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="w-24 h-12 bg-purple-500 rounded"></div>
                <div className="w-24 h-12 bg-purple-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Columns className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🧱</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">display</code> влияет на поведение элементов в потоке документа. Эти знания позволяют точно контролировать компоновку страницы и создавать адаптивные макеты. В следующем уроке мы изучим Flexbox — современный способ создания гибких макетов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;