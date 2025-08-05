// src/data/courses/css/lesson14/part1.jsx
import React from 'react';
import { MousePointer, Focus, Square, Type, Sparkles } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Sparkles className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Урок 14: Псевдоклассы и псевдоэлементы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание интерактива и декора без дополнительной HTML-разметки</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400"> Цель урока:</span> Освоить псевдоклассы и псевдоэлементы CSS для создания интерактивных эффектов и декоративных элементов без изменения HTML.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое псевдоклассы и псевдоэлементы? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Sparkles className="w-5 h-5 text-green-400" />
          Что такое псевдоклассы и псевдоэлементы?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Псевдоклассы</span> и <span className="font-medium text-purple-300">псевдоэлементы</span> - это ключевые инструменты CSS для стилизации элементов в особых состояниях или добавления виртуального содержимого.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Псевдоклассы (:)</h3>
              <p className="text-gray-300 text-sm">
                Определяют <span className="font-medium">состояние</span> элемента или его положение в документе. Обозначаются одним двоеточием.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">Псевдоэлементы (::)</h3>
              <p className="text-gray-300 text-sm">
                Создают <span className="font-medium">виртуальные элементы</span>, которых нет в HTML-разметке. Обозначаются двумя двоеточиями.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Популярные псевдоклассы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MousePointer className="w-5 h-5 text-orange-400" />
          Популярные псевдоклассы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Псевдоклассы позволяют стилизовать элементы в зависимости от их состояния или положения:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* :hover */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <MousePointer className="w-5 h-5 text-green-400" />
              :hover
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Применяется, когда пользователь <span className="font-medium">наводит курсор</span> на элемент.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`button:hover {
  background-color: #3b82f6;
  transform: scale(1.05);
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Демонстрация:</p>
                <div className="bg-gray-800 p-3 rounded flex justify-center">
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded transition-all duration-200 hover:bg-blue-700 hover:scale-105"
                    style={{ transform: 'none' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'none'}
                  >
                    Наведи на меня
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* :focus */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Focus className="w-5 h-5 text-blue-400" />
              :focus
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Применяется, когда элемент <span className="font-medium">находится в фокусе</span> (например, активное поле ввода).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`input:focus {
  border-color: #3b82f6;
  outline: 2px solid #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Демонстрация:</p>
                <div className="bg-gray-800 p-3 rounded">
                  <input 
                    type="text" 
                    placeholder="Кликни меня" 
                    className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* :active */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              :active
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Применяется, когда элемент <span className="font-medium">активен</span> (например, в момент клика).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`button:active {
  transform: scale(0.95);
  background-color: #2563eb;
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Демонстрация:</p>
                <div className="bg-gray-800 p-3 rounded flex justify-center">
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded transition-all duration-100 active:scale-95 active:bg-blue-700"
                  >
                    Кликни меня
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* :first-child, :last-child, :nth-child */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="text-lg font-bold text-cyan-300 mb-3">:first-child, :last-child, :nth-child</h3>
            <p className="text-gray-300 text-sm mb-3">
              Позволяют стилизовать элементы в зависимости от их <span className="font-medium">положения</span> среди соседей.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Примеры:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`li:first-child {
  font-weight: bold;
}

li:last-child {
  border-bottom: none;
}

li:nth-child(2n) {
  background-color: #374151;
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Демонстрация:</p>
                <div className="bg-gray-800 p-3 rounded">
                  <ul className="space-y-1">
                    <li className="p-2 bg-gray-700 font-bold rounded">Первый элемент (first-child)</li>
                    <li className="p-2 bg-gray-600 rounded">Второй элемент (nth-child(2n))</li>
                    <li className="p-2 bg-gray-700 rounded">Третий элемент</li>
                    <li className="p-2 bg-gray-600 rounded">Четвертый элемент (nth-child(2n))</li>
                    <li className="p-2 bg-gray-700 rounded border-b border-gray-600">Последний элемент (last-child)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Популярные псевдоэлементы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Square className="w-5 h-5 text-yellow-400" />
          Популярные псевдоэлементы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Псевдоэлементы создают виртуальные элементы, которые можно стилизовать:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* ::before и ::after */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="text-lg font-bold text-orange-300 mb-3 flex items-center gap-2">
              <Square className="w-5 h-5 text-orange-400" />
              ::before и ::after
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Создают виртуальные элементы <span className="font-medium">до</span> и <span className="font-medium">после</span> содержимого элемента. Обязательно нужно задать свойство <code className="bg-gray-700 px-1 rounded">content</code>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.quote::before {
  content: ""â€œ";
  color: #9ca3af;
  font-size: 2em;
}

.quote::after {
  content: ""â€";
  color: #9ca3af;
  font-size: 2em;
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Демонстрация:</p>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="relative pl-6">
                    <span className="absolute left-0 top-0 text-gray-400 text-2xl">"</span>
                    <span className="text-gray-300">Это пример цитаты с псевдоэлементами</span>
                    <span className="absolute right-0 bottom-0 text-gray-400 text-2xl">"</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 p-2 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-xs">
              ðŸ’¡ <span className="font-medium">Совет:</span> ::before и ::after часто используются для создания декоративных элементов без изменения HTML.
            </div>
          </div>

          {/* ::first-line и ::first-letter */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-indigo-700/30">
            <h3 className="text-lg font-bold text-indigo-300 mb-3 flex items-center gap-2">
              <Type className="w-5 h-5 text-indigo-400" />
              ::first-line и ::first-letter
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Позволяют стилизовать <span className="font-medium">первую строку</span> или <span className="font-medium">первую букву</span> блочного элемента.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`p::first-line {
  font-weight: bold;
  color: #3b82f6;
}

p::first-letter {
  font-size: 2em;
  float: left;
  margin-right: 5px;
  color: #8b5cf6;
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Демонстрация:</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300">
                    <span className="text-purple-400 text-2xl float-left mr-1">ÐŸ</span>
                    <span className="font-bold text-blue-400">ример текста, где первая буква увеличена и окрашена в фиолетовый цвет, а первая строка выделена жирным и синим.</span> Остальной текст остается обычным.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Sparkles className="w-5 h-5 text-pink-400" />
          Практический пример
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Комплексное использование псевдоклассов и псевдоэлементов для создания интерактивной карточки:
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-white mb-1">CSS:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`.card {
  position: relative;
  padding: 20px;
  background-color: #1f2937;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 8px 8px 0 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.card:hover::before {
  transform: scaleX(1);
}

.card h3::after {
  content: " â†’";
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover h3::after {
  opacity: 1;
}`}
            </pre>
          </div>
          <div>
            <p className="font-medium text-white mb-1">HTML:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`<div class="card">
  <h3>Интерактивная карточка</h3>
  <p>Наведите курсор, чтобы увидеть эффекты</p>
</div>`}
            </pre>
            <div className="mt-3 p-4 bg-gray-900 rounded-lg border border-gray-700 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <h3 className="font-bold text-white mb-2">
                Интерактивная карточка
                <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"> â†’</span>
              </h3>
              <p className="text-gray-400">Наведите курсор, чтобы увидеть эффекты</p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Sparkles className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! âœ¨</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как использовать псевдоклассы и псевдоэлементы для создания интерактивных эффектов и декоративных элементов. Эти знания позволяют значительно улучшить пользовательский опыт без изменения HTML-разметки. В следующем уроке мы рассмотрим продвинутые техники работы с селекторами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;