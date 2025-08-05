// src/data/courses/css/lesson4/part1.jsx
import React from 'react';
import { Trophy, Target, Hash, Layers, FileText, AlertTriangle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Trophy className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🏆 Урок 4: Кто главный? Приоритет стилей</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Порядок применения CSS-правил</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как браузер определяет, какие стили применить, когда несколько правил конфликтуют между собой.
            </p>
          </div>
        </div>
      </div>

      {/* Проблема конфликта стилей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          Проблема конфликта стилей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Представьте ситуацию: вы написали два CSS-правила, которые изменяют цвет одного и того же элемента. Первое правило делает текст красным, а второе — синим. Какой цвет в итоге будет у элемента?
          </p>
          <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white mb-1">CSS:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`p {
  color: red;
}

.highlight {
  color: blue;
}`}
                </pre>
              </div>
              <div>
                <p className="font-medium text-white mb-1">HTML:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`<p class="highlight">Какого цвета этот текст?</p>`}
                </pre>
              </div>
            </div>
          </div>
          <p className="mt-3">
            Ответ на этот вопрос зависит от <span className="font-medium text-orange-300">приоритета (каскада)</span> CSS. Браузер использует строгие правила для разрешения подобных конфликтов.
          </p>
        </div>
      </div>

      {/* Основные принципы приоритета */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Trophy className="w-5 h-5 text-yellow-400" />
          Основные принципы приоритета стилей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Браузер определяет приоритет стилей по следующим правилам (в порядке убывания важности):
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* 1. Важность (Importance) */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="text-lg font-bold text-red-300 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              1. Важность (!important)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Декларация со свойством <code className="bg-gray-700 px-1.5 py-0.5 rounded">!important</code> имеет наивысший приоритет.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <p className="font-medium text-white mb-1">CSS:</p>
              <pre className="whitespace-pre-wrap text-gray-300">p {`{ color: red !important; }`}</pre>
            </div>
            <div className="mt-3 p-2 bg-red-900/20 border border-red-700/30 rounded text-red-300 text-xs">
              ⚠️ <span className="font-medium">Важно:</span> Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">!important</code> крайне редко, только в крайних случаях. Это признак плохой архитектуры CSS.
            </div>
          </div>

          {/* 2. Источник и_origin */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-400" />
              2. Источник стилей
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Стили расположены в следующем порядке приоритета (от низшего к высшему):
            </p>
            <ul className="list-decimal pl-5 space-y-1 text-gray-300 text-sm">
              <li>Стили браузера по умолчанию</li>
              <li>Внешние стили (подключенные через <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<link>'}</code>)</li>
              <li>Внутренние стили (внутри тега <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<style>'}</code>)</li>
              <li>Инлайн-стили (в атрибуте <code className="bg-gray-700 px-1.5 py-0.5 rounded">style</code> элемента)</li>
            </ul>
          </div>

          {/* 3. Специфичность селекторов */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              3. Специфичность селекторов
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Более <span className="font-medium">конкретный</span> селектор побеждает менее конкретный:
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
                <span className="text-gray-400">Селектор по тегу</span>
                <span className="font-mono text-sm">0-0-1</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
                <span className="text-gray-400">Селектор по классу</span>
                <span className="font-mono text-sm">0-1-0</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
                <span className="text-gray-400">Селектор по ID</span>
                <span className="font-mono text-sm">1-0-0</span>
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs">
                💡 <span className="font-medium">Подсказка:</span> Специфичность рассчитывается как трехзначное число: (ID)-(Классы)-(Теги). Чем больше число, тем выше приоритет.
              </p>
            </div>
          </div>

          {/* 4. Порядок следования */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-green-400" />
              4. Порядок следования (как исключение)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Если все остальные факторы равны, побеждает правило, которое <span className="font-medium">расположено ниже</span> в коде.
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <p className="font-medium text-white mb-1">CSS:</p>
              <pre className="whitespace-pre-wrap text-gray-300">
{`p {
  color: red;
}

p {
  color: blue; /* Этот цвет будет применен */
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Примеры специфичности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-cyan-400" />
          Примеры расчета специфичности
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим несколько примеров, чтобы лучше понять, как рассчитывается специфичность:
          </p>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Пример 1: Тег против класса</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">
{`p { color: red; }      /* Специфичность: 0-0-1 */
.highlight { color: blue; } /* Специфичность: 0-1-0 */`}
                </pre>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">
{`<p class="highlight">Текст будет синим</p>`}
                </pre>
                <p className="text-green-300 text-xs mt-2">✅ Побеждает .highlight (0-1-0 {'>'} 0-0-1)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-lg border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример 2: Класс против ID</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">
{`.header { color: green; }  /* Специфичность: 0-1-0 */
#main-title { color: purple; } /* Специфичность: 1-0-0 */`}
                </pre>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">
{`<h1 id="main-title" class="header">Текст будет фиолетовым</h1>`}
                </pre>
                <p className="text-green-300 text-xs mt-2">✅ Побеждает #main-title (1-0-0 {'>'} 0-1-0)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-lg border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-2">Пример 3: Комбинированные селекторы</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">
{`div p { color: orange; }     /* Специфичность: 0-0-2 */
.article .highlight { color: teal; } /* Специфичность: 0-2-0 */`}
                </pre>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs">
{`<div class="article">
  <p class="highlight">Текст будет бирюзовым</p>
</div>`}
                </pre>
                <p className="text-green-300 text-xs mt-2">✅ Побеждает .article .highlight (0-2-0 {'>'} 0-0-2)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Советы по работе с приоритетами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Trophy className="w-5 h-5 text-green-400" />
          Советы по работе с приоритетами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium">Избегайте !important:</span> Это ломает нормальную работу каскада. Лучше использовать более конкретные селекторы.
            </li>
            <li>
              <span className="font-medium">Планируйте архитектуру CSS:</span> Используйте классы вместо ID для стилизации, чтобы избежать чрезмерной специфичности.
            </li>
            <li>
              <span className="font-medium">Организуйте код:</span> Группируйте связанные стили и следите за порядком их следования.
            </li>
            <li>
              <span className="font-medium">Используйте инструменты разработчика:</span> В браузере (F12) вы можете видеть, какие стили применяются к элементу и почему.
            </li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Trophy className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🏆</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как браузер разрешает конфликты между CSS-правилами. Знание приоритетов стилей поможет вам писать более предсказуемый и поддерживаемый CSS. В следующем уроке мы изучим, как использовать инструменты разработчика браузера для отладки стилей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;