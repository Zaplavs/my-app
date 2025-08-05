// src/data/courses/css/lesson16/part1.jsx
import React, { useState } from 'react';
import { Play, RotateCw, Move, Sparkles, Zap, Palette } from 'lucide-react';

const Part1 = () => {
  const [buttonHover, setButtonHover] = useState(false);
  const [boxHover, setBoxHover] = useState(false);

  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Play className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🎭 Урок 16: Анимации и плавные переходы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Оживляем веб с помощью CSS-анимаций</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить CSS-анимации и переходы для создания живых и интерактивных веб-страниц.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны анимации и переходы? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Sparkles className="w-5 h-5 text-green-400" />
          Зачем нужны анимации и переходы?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Анимации и плавные переходы — важная часть современного веб-дизайна. Они:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Улучшают <span className="font-medium text-green-300">пользовательский опыт</span> (UX)</li>
            <li>Делают интерфейс <span className="font-medium text-blue-300">более живым и привлекательным</span></li>
            <li>Помогают <span className="font-medium text-purple-300">визуализировать взаимодействие</span> с элементами</li>
            <li>Создают <span className="font-medium text-orange-300">ощущение профессионализма</span> сайта</li>
          </ul>
          <p>
            CSS предоставляет два основных способа создания анимаций: <span className="font-medium">переходы (transitions)</span> для простых изменений и <span className="font-medium">анимации (animations)</span> для сложных эффектов.
          </p>
        </div>
      </div>

      {/* Плавные переходы (transition) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Move className="w-5 h-5 text-blue-400" />
          Плавные переходы (transition)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">transition</code> позволяет плавно изменять значения CSS-свойств при изменении состояния элемента (например, при наведении курсора).
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3">Синтаксис transition:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`transition: свойство длительность функция_времени задержка;`}
              </pre>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Параметры:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li><span className="font-medium">свойство</span> - какое свойство анимировать (background-color, transform и т.д.)</li>
                  <li><span className="font-medium">длительность</span> - сколько времени длится переход (0.3s, 500ms)</li>
                  <li><span className="font-medium">функция времени</span> - как меняется скорость (ease, linear, ease-in-out)</li>
                  <li><span className="font-medium">задержка</span> - пауза перед началом перехода (0.1s, 200ms)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Примеры:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`/* Анимируем фон и трансформацию */
transition: background-color 0.3s, transform 0.2s;

/* Все свойства с функцией ease-in-out */
transition: all 0.5s ease-in-out;

/* С задержкой */
transition: opacity 0.4s ease 0.1s;`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3">Пример плавного перехода:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.transition-button {
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.transition-button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <div className="bg-gray-800 p-3 rounded text-xs mb-3">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`<button class="transition-button">
  Наведи на меня
</button>`}
                  </pre>
                </div>
                <div className="flex justify-center">
                  <button 
                    className={`px-6 py-3 bg-blue-500 text-white border-none rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg`}
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                  >
                    {buttonHover ? 'Отлично!' : 'Наведи на меня'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS-анимации (animation) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCw className="w-5 h-5 text-purple-400" />
          CSS-анимации (animation)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            CSS-анимации позволяют создавать сложные эффекты с помощью ключевых кадров (<code className="bg-gray-700 px-1.5 py-0.5 rounded">@keyframes</code>). Они более мощные, чем переходы, и могут работать автономно.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3">Синтаксис анимаций:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">1. Определение ключевых кадров:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`@keyframes animation-name {
  0% { /* начальное состояние */ }
  50% { /* промежуточное состояние */ }
  100% { /* конечное состояние */ }
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">2. Применение анимации:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.element {
  animation: name duration timing-function delay iteration-count direction;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="text-lg font-bold text-orange-300 mb-3">Пример CSS-анимации:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.bounce-element {
  width: 60px;
  height: 60px;
  background-color: #8b5cf6;
  border-radius: 50%;
  animation: bounce 1s ease-in-out infinite;
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <div className="bg-gray-800 p-3 rounded text-xs mb-3">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`<div class="bounce-element"></div>`}
                  </pre>
                </div>
                <div className="flex justify-center">
                  <div 
                    className="w-12 h-12 bg-purple-500 rounded-full animate-bounce"
                    style={{ 
                      animation: 'bounce 1s ease-in-out infinite',
                      transform: boxHover ? 'translateY(-20px)' : 'translateY(0)',
                      transition: 'transform 0.5s ease-in-out'
                    }}
                    onMouseEnter={() => setBoxHover(true)}
                    onMouseLeave={() => setBoxHover(false)}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Распространенные свойства для анимаций */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-cyan-400" />
          Распространенные свойства для анимаций
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Некоторые CSS-свойства особенно эффективны при анимации:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Transform
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1 rounded">transform: translate()</code> - перемещение</li>
              <li><code className="bg-gray-700 px-1 rounded">transform: rotate()</code> - вращение</li>
              <li><code className="bg-gray-700 px-1 rounded">transform: scale()</code> - масштабирование</li>
              <li><code className="bg-gray-700 px-1 rounded">transform: skew()</code> - наклон</li>
            </ul>
            <div className="mt-2 text-xs text-gray-400">
              ⚡ Высокая производительность, не влияет на поток документа
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Opacity и Visibility
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1 rounded">opacity</code> - прозрачность (0-1)</li>
              <li><code className="bg-gray-700 px-1 rounded">visibility</code> - видимость (visible/hidden)</li>
            </ul>
            <div className="mt-2 text-xs text-gray-400">
              ⚡ Эффективны для эффектов появления/исчезновения
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Background и Color
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1 rounded">background-color</code> - цвет фона</li>
              <li><code className="bg-gray-700 px-1 rounded">color</code> - цвет текста</li>
              <li><code className="bg-gray-700 px-1 rounded">border-color</code> - цвет границы</li>
            </ul>
            <div className="mt-2 text-xs text-gray-400">
              ⚠️ Требуют больше ресурсов, особенно для больших элементов
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2 flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Width и Height
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1 rounded">width</code> - ширина</li>
              <li><code className="bg-gray-700 px-1 rounded">height</code> - высота</li>
              <li><code className="bg-gray-700 px-1 rounded">padding</code> - внутренние отступы</li>
            </ul>
            <div className="mt-2 text-xs text-gray-400">
              ⚠️ Могут вызывать перерисовку макета, используйте с осторожностью
            </div>
          </div>
        </div>
      </div>

      {/* Функции времени (timing functions) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          Функции времени (timing functions)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Функции времени определяют, как изменяется скорость анимации на протяжении её выполнения:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-gray-900/50 p-3 rounded-lg border border-green-700/30">
              <h3 className="font-bold text-green-300 text-sm mb-1">ease</h3>
              <p className="text-gray-400 text-xs">Медленно → Быстро → Медленно (по умолчанию)</p>
            </div>
            
            <div className="bg-gray-900/50 p-3 rounded-lg border border-blue-700/30">
              <h3 className="font-bold text-blue-300 text-sm mb-1">linear</h3>
              <p className="text-gray-400 text-xs">Постоянная скорость</p>
            </div>
            
            <div className="bg-gray-900/50 p-3 rounded-lg border border-purple-700/30">
              <h3 className="font-bold text-purple-300 text-sm mb-1">ease-in</h3>
              <p className="text-gray-400 text-xs">Медленный старт, затем ускорение</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-gray-900/50 p-3 rounded-lg border border-orange-700/30">
              <h3 className="font-bold text-orange-300 text-sm mb-1">ease-out</h3>
              <p className="text-gray-400 text-xs">Быстрый старт, затем замедление</p>
            </div>
            
            <div className="bg-gray-900/50 p-3 rounded-lg border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 text-sm mb-1">ease-in-out</h3>
              <p className="text-gray-400 text-xs">Медленно → Быстро → Медленно (симметрично)</p>
            </div>
            
            <div className="bg-gray-900/50 p-3 rounded-lg border border-pink-700/30">
              <h3 className="font-bold text-pink-300 text-sm mb-1">cubic-bezier()</h3>
              <p className="text-gray-400 text-xs">Пользовательская кривая Безье</p>
            </div>
          </div>
        </div>
      </div>

      {/* Практические советы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-pink-400" />
          Практические советы по анимациям
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-green-300">Не переборщите:</span> Слишком много анимаций могут раздражать пользователей и ухудшать производительность.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Play className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-blue-300">Приоритет свойств:</span> Используйте transform и opacity для анимаций — они наиболее производительны.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-300">Доступность:</span> Предоставьте пользователям возможность отключать анимации через настройки системы.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Move className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-orange-300">Производительность:</span> Используйте свойство will-change для элементов с тяжелыми анимациями.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Play className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎭</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать плавные переходы и сложные анимации в CSS. Эти навыки помогут вам создавать современные и интерактивные веб-страницы. В следующем уроке мы рассмотрим продвинутые техники CSS и лучшие практики.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;