// src/data/courses/css/lesson6/part1.jsx
import React from 'react';
import { AlignLeft, AlignCenter, AlignRight, Minus, Underline, Type } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Type className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🖋️ Урок 6: Как выглядит текст: выравнивание, интервалы и декор</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Стилизация текста в CSS</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться управлять внешним видом текста с помощью CSS-свойств выравнивания, интервалов и декоративных эффектов.
            </p>
          </div>
        </div>
      </div>

      {/* Выравнивание текста */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlignLeft className="w-5 h-5 text-green-400" />
          Выравнивание текста (text-align)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">text-align</code> управляет горизонтальным выравниванием текста внутри блока.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Основные значения:</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white mb-1">text-align: left; (по умолчанию)</p>
                <div className="bg-gray-800 p-3 rounded" style={{ textAlign: 'left' }}>
                  <p className="text-gray-300 text-sm m-0">Этот текст выровнен по левому краю. Это стандартное выравнивание для большинства текстов в вебе.</p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">text-align: center;</p>
                <div className="bg-gray-800 p-3 rounded" style={{ textAlign: 'center' }}>
                  <p className="text-gray-300 text-sm m-0">Этот текст выровнен по центру. Часто используется для заголовков.</p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">text-align: right;</p>
                <div className="bg-gray-800 p-3 rounded" style={{ textAlign: 'right' }}>
                  <p className="text-gray-300 text-sm m-0">Этот текст выровнен по правому краю. Может использоваться для подписей.</p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">text-align: justify;</p>
                <div className="bg-gray-800 p-3 rounded" style={{ textAlign: 'justify' }}>
                  <p className="text-gray-300 text-sm m-0">Этот текст выровнен по ширине. Края текста выровнены по обоим краям блока, за счет изменения интервалов между словами.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Пример CSS:</h3>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.left-align { text-align: left; }
.center-align { text-align: center; }
.right-align { text-align: right; }
.justify-align { text-align: justify; }`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Межстрочный интервал */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Minus className="w-5 h-5 text-purple-400" />
          Межстрочный интервал (line-height)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">line-height</code> задает высоту строки, то есть расстояние между базовыми линиями текста. Это важное свойство для улучшения читаемости.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Примеры разных значений line-height:</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white mb-1">line-height: 1; (без интервала)</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0" style={{ lineHeight: 1 }}>
                    Этот текст имеет минимальный межстрочный интервал. Строчки расположены очень близко друг к другу, что может ухудшить читаемость.
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">line-height: 1.5; (рекомендуемое значение)</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0" style={{ lineHeight: 1.5 }}>
                    Этот текст имеет хороший межстрочный интервал. Значение 1.5 от размера шрифта считается оптимальным для основного текста.
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">line-height: 2; (увеличенный интервал)</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0" style={{ lineHeight: 2 }}>
                    Этот текст имеет большой межстрочный интервал. Такое значение может использоваться для особых эффектов или улучшения читаемости.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Единицы измерения:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium">Безразмерное число</span> (например, 1.5) - множитель от размера шрифта</li>
              <li><span className="font-medium">Пиксели</span> (например, 24px) - фиксированная высота строки</li>
              <li><span className="font-medium">Проценты</span> (например, 150%) - процент от размера шрифта</li>
            </ul>
            <div className="mt-3 bg-blue-900/20 p-3 rounded border border-blue-700/30">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Для основного текста рекомендуется использовать значение от 1.4 до 1.6.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Декорирование текста */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Underline className="w-5 h-5 text-cyan-400" />
          Декорирование текста (text-decoration)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">text-decoration</code> добавляет декоративные линии к тексту, такие как подчеркивание, зачеркивание и т.д.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Основные значения:</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white mb-1">text-decoration: none;</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0" style={{ textDecoration: 'none' }}>
                    Этот текст без декорации. Часто используется для удаления подчеркивания у ссылок.
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">text-decoration: underline;</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0" style={{ textDecoration: 'underline' }}>
                    Этот текст подчеркнут. Стандартное оформление для ссылок.
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">text-decoration: overline;</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0" style={{ textDecoration: 'overline' }}>
                    Этот текст имеет надстрочное подчеркивание (линию сверху).
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">text-decoration: line-through;</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0" style={{ textDecoration: 'line-through' }}>
                    Этот текст зачеркнут. Часто используется для обозначения удаленного контента.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Расширенное использование:</h3>
            <p className="text-gray-300 text-sm mb-3">
              Свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">text-decoration</code> может задавать стиль, толщину и цвет линии:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`/* text-decoration: линия стиль цвет */
.text-custom {
  text-decoration: underline wavy red;
}

.text-combined {
  text-decoration: underline overline;
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Межбуквенный интервал */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-pink-400" />
          Межбуквенный интервал (letter-spacing)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">letter-spacing</code> управляет расстоянием между символами в тексте.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3">Примеры:</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white mb-1">letter-spacing: normal; (по умолчанию)</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0" style={{ letterSpacing: 'normal' }}>
                    Этот текст имеет нормальное расстояние между буквами.
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">letter-spacing: 2px;</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0" style={{ letterSpacing: '2px' }}>
                    Этот текст имеет увеличенное расстояние между буквами.
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">letter-spacing: -1px; (отрицательное значение)</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0" style={{ letterSpacing: '-1px' }}>
                    Этот текст имеет уменьшенное расстояние между буквами.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2">Когда использовать:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Увеличенный интервал для заголовков (для лучшей читаемости)</li>
              <li>Уменьшенный интервал для компактного текста</li>
              <li>Создание стилистических эффектов</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Тень текста */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-orange-400" />
          Тень текста (text-shadow)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Свойство <code className="bg-gray-700 px-1.5 py-0.5 rounded">text-shadow</code> добавляет тень к тексту, создавая глубину и визуальный интерес.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Синтаксис:</h3>
            <p className="text-gray-300 text-sm mb-3">
              <code className="bg-gray-700 px-1.5 py-0.5 rounded">text-shadow: смещение-x смещение-y размытие цвет;</code>
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white mb-1">text-shadow: 2px 2px 3px rgba(0,0,0,0.5);</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0 font-bold text-xl" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.5)' }}>
                    Текст с тенью
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">text-shadow: 0 0 10px #00ff00;</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0 font-bold text-xl" style={{ textShadow: '0 0 10px #00ff00' }}>
                    Светящийся текст
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-white mb-1">Множественные тени:</p>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-gray-300 text-sm m-0 font-bold text-xl" style={{ textShadow: '2px 2px 3px black, -2px -2px 3px blue' }}>
                    Текст с двумя тенями
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2">Параметры:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium">смещение-x</span> - горизонтальное смещение тени (положительное - вправо, отрицательное - влево)</li>
              <li><span className="font-medium">смещение-y</span> - вертикальное смещение тени (положительное - вниз, отрицательное - вверх)</li>
              <li><span className="font-medium">размытие</span> - степень размытия тени (необязательный параметр)</li>
              <li><span className="font-medium">цвет</span> - цвет тени (необязательный параметр, по умолчанию черный)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Комплексный пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-green-400" />
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
{`.styled-text {
  text-align: center;
  line-height: 1.6;
  letter-spacing: 1px;
  text-decoration: underline;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  color: #2c3e50;
}`}
            </pre>
          </div>
          <div>
            <p className="font-medium text-white mb-1">HTML:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`<p class="styled-text">
  Стилизованный текст с 
  множеством эффектов
</p>`}
            </pre>
            <div className="mt-3 p-3 bg-gray-900 rounded">
              <p className="m-0 text-center" style={{ 
                lineHeight: 1.6,
                letterSpacing: '1px',
                textDecoration: 'underline',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                color: '#2c3e50'
              }}>
                Стилизованный текст с множеством эффектов
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Type className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! ✍️</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как управлять внешним видом текста с помощью CSS. Эти свойства позволяют создавать более читаемый, привлекательный и выразительный текст на ваших веб-страницах. В следующем уроке мы изучим свойства для работы с фонами элементов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;