// src/data/courses/javascript/lesson7/part1.jsx
import React from 'react';
import { GitBranch, Zap, Code, CheckCircle, AlertTriangle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <GitBranch className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 7: Условные операторы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">if, else, else if — управление логикой программы</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться использовать условные конструкции для ветвления логики выполнения кода.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое условные операторы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-green-400" />
          Что такое условные операторы?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Условные операторы</span> позволяют выполнять разные блоки кода в зависимости от истинности определённых условий.
          </p>
          <p>
            Это основа <span className="font-medium text-blue-300">ветвления логики</span> в программировании.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Аналогия:</h3>
              <p className="text-gray-300 text-sm">
                Условный оператор — как развилка на дороге: если идти направо — попадёшь в парк, если налево — в магазин.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Основные формы:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><code className="bg-gray-800 px-1 rounded">if</code> — базовое условие</li>
                <li><code className="bg-gray-800 px-1 rounded">else</code> — альтернатива</li>
                <li><code className="bg-gray-800 px-1 rounded">else if</code> — дополнительные условия</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Синтаксис if */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-yellow-400" />
          Синтаксис if
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Оператор <code className="bg-gray-800 px-1 rounded">if</code> проверяет условие и выполняет блок кода, если оно истинно.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Пример:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let температура = 25;

if (температура > 20) {
  console.log("Тепло, можно гулять!");
}`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Примечание:</span> Блок кода заключается в фигурные скобки <code className="bg-gray-800 px-1 rounded">{`{}`}</code>, даже если он состоит из одной строки.
            </p>
          </div>
        </div>
      </div>

      {/* else — альтернатива */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          else — альтернативное действие
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Блок <code className="bg-gray-800 px-1 rounded">else</code> выполняется, если условие в <code className="bg-gray-800 px-1 rounded">if</code> ложно.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Пример с else:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let температура = 15;

if (температура > 20) {
  console.log("Тепло, можно гулять!");
} else {
  console.log("Холодно, лучше остаться дома.");
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* else if — дополнительные условия */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-purple-400" />
          else if — цепочка условий
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-800 px-1 rounded">else if</code> позволяет проверить дополнительные условия после <code className="bg-gray-800 px-1 rounded">if</code>.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Пример с else if:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let температура = 10;

if (температура > 20) {
  console.log("Тепло, можно гулять!");
} else if (температура > 10) {
  console.log("Прохладно, но можно выйти.");
} else {
  console.log("Холодно, лучше остаться дома.");
}`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Условия проверяются сверху вниз. Первое истинное условие выполнится, остальные — проигнорируются.
            </p>
          </div>
        </div>
      </div>

      {/* Вложенные условия */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-cyan-400" />
          Вложенные условия
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Условные операторы можно вкладывать друг в друга для более сложной логики.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Пример:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let возраст = 20;
let имеетПрава = true;

if (возраст >= 18) {
  if (имеетПрава) {
    console.log("Можно водить машину");
  } else {
    console.log("Нужно получить права");
  }
} else {
  console.log("Слишком молод для вождения");
}`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">⚠️ Важно:</span> Избегайте чрезмерной вложенности — она усложняет чтение кода. Иногда лучше использовать логические операторы.
            </p>
          </div>
        </div>
      </div>

      {/* Тернарный оператор */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-pink-400" />
          Тернарный оператор
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тернарный оператор — это короткая форма записи <code className="bg-gray-800 px-1 rounded">if...else</code>.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3">Синтаксис:</h3>
            <div className="bg-gray-800 p-4 rounded text-center">
              <pre className="text-sm text-gray-300">
                условие ? значение1 : значение2
              </pre>
            </div>
          </div>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Пример:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let возраст = 17;
let доступ = возраст >= 18 ? "Разрешён" : "Запрещён";

console.log(доступ); // "Запрещён"`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              <span className="font-medium">💡 Полезно:</span> Тернарный оператор часто используется для присвоения значений переменным или в JSX.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы умеете управлять логикой программы с помощью условных операторов: <code className="bg-gray-800 px-1 rounded">if</code>, <code className="bg-gray-800 px-1 rounded">else</code>, <code className="bg-gray-800 px-1 rounded">else if</code> и тернарного оператора. Это мощный инструмент для принятия решений в коде!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;