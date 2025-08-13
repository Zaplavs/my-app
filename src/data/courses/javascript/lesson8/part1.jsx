// src/data/courses/javascript/lesson8/part1.jsx
import React from 'react';
import { Shuffle, Zap, Code, GitBranch, Layers, CheckCircle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <Shuffle className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 8: Тернарный оператор и switch</h1>
            <h2 className="text-xl font-semibold text-purple-300 mb-3">Краткие формы условий и множественные проверки</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить тернарный оператор для краткой записи условий и конструкцию switch для множественных проверок.
            </p>
          </div>
        </div>
      </div>

      {/* Тернарный оператор */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Тернарный оператор
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">Тернарный оператор</span> — это краткая форма записи условного выражения <code className="bg-gray-800 px-1 rounded">if...else</code>.
          </p>
          <p>
            Он называется "тернарным", потому что состоит из <span className="font-medium text-green-300">трёх частей</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-2">Синтаксис:</h3>
              <div className="bg-gray-800 p-4 rounded text-center">
                <pre className="text-sm text-gray-300 font-mono">
                  условие ? значение1 : значение2
                </pre>
              </div>
              <div className="mt-3 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="text-green-300">условие</span> — выражение, возвращающее true/false</li>
                  <li><span className="text-blue-300">значение1</span> — если условие true</li>
                  <li><span className="text-red-300">значение2</span> — если условие false</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Аналогия с if...else:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">Тернарный оператор:</div>
                  <div className="text-sm text-gray-300 font-mono">
                    {`let результат = возраст >= 18 ? "Взрослый" : "Ребёнок";`}
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">if...else:</div>
                  <div className="text-sm text-gray-300 font-mono">
{`let результат;
if (возраст >= 18) {
  результат = "Взрослый";
} else {
  результат = "Ребёнок";
}`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Примеры использования:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Простое условие
let доступ = возраст >= 18 ? "Разрешён" : "Запрещён";

// Проверка на null/undefined
let имя = пользователь.имя || "Гость";
let приветствие = имя ? \`Привет, \${имя}!\` : "Привет, гость!";

// Вложенный тернарный оператор
let оценка = баллы >= 90 ? "Отлично" : 
             баллы >= 75 ? "Хорошо" : 
             баллы >= 60 ? "Удовл." : "Неуд.";

console.log(оценка); // Выводит соответствующую оценку`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Преимущества:</span> Более компактный код, удобен для присвоения значений переменным и использования в JSX.
            </p>
          </div>
        </div>
      </div>

      {/* Конструкция switch */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-cyan-400" />
          Конструкция switch
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">switch</span> — это альтернатива множественным <code className="bg-gray-800 px-1 rounded">if...else if</code> для проверки точных значений.
          </p>
          <p>
            Особенно удобен, когда нужно сравнить переменную с несколькими конкретными значениями.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-2">Синтаксис:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`switch (выражение) {
  case значение1:
    // код
    break;
  case значение2:
    // код
    break;
  default:
    // код
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">Ключевые элементы:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><code className="bg-gray-800 px-1 rounded">switch</code> — начало конструкции</li>
                <li><code className="bg-gray-800 px-1 rounded">case</code> — вариант значения</li>
                <li><code className="bg-gray-800 px-1 rounded">break</code> — остановка выполнения</li>
                <li><code className="bg-gray-800 px-1 rounded">default</code> — вариант по умолчанию</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Пример использования switch:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let деньНедели = 3;
let название;

switch (деньНедели) {
  case 1:
    название = "Понедельник";
    break;
  case 2:
    название = "Вторник";
    break;
  case 3:
    название = "Среда";
    break;
  case 4:
    название = "Четверг";
    break;
  case 5:
    название = "Пятница";
    break;
  case 6:
  case 7:
    название = "Выходной";
    break;
  default:
    название = "Неверный день";
}

console.log(название); // "Среда"`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Важные особенности switch */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-green-400" />
          Особенности и подводные камни switch
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3">⚠️ Важно: break!</h3>
              <p className="text-sm text-gray-300 mb-3">
                Без <code className="bg-gray-800 px-1 rounded">break</code> выполнение продолжается до следующего <code className="bg-gray-800 px-1 rounded">case</code> — это называется "проваливание" (fallthrough).
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`switch (x) {
  case 1:
    console.log("Один");
    // нет break!
  case 2:
    console.log("Два");
    break;
  case 3:
    console.log("Три");
}`}

// Если x = 1, выведет:
// "Один"
// "Два"
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">💡 Полезные приёмы:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Группировка case: несколько case без break</li>
                <li>default может быть в любом месте (но обычно в конце)</li>
                <li>Сравнение строгое (===), типы должны совпадать</li>
                <li>Можно использовать выражения в case</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Пример с группировкой и выражениями:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let оценка = 85;

switch (true) {
  case оценка >= 90:
    console.log("Отлично");
    break;
  case оценка >= 75:
    console.log("Хорошо");
    break;
  case оценка >= 60:
    console.log("Удовлетворительно");
    break;
  default:
    console.log("Неудовлетворительно");
}

// Выведет: "Хорошо"`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Сравнение подходов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-pink-400" />
          Когда что использовать?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-2">Тернарный оператор:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Простые условия</li>
                <li>Присвоение значений</li>
                <li>Короткие выражения</li>
                <li>Использование в JSX</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-2">switch:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Множественные проверки</li>
                <li>Точные значения</li>
                <li>Читаемость кода</li>
                <li>Группировка вариантов</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">if...else:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Сложные условия</li>
                <li>Диапазоны значений</li>
                <li>Логические выражения</li>
                <li>Вложенные условия</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Пример выбора подхода:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-1">Тернарный:</div>
                <pre className="text-xs text-gray-300">
{`let статус = isActive ? 
  "Активен" : "Неактивен";`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-1">Switch:</div>
                <pre className="text-xs text-gray-300">
{`switch (роль) {
  case "admin":
    доступ = "Полный";
    break;
  case "user":
    доступ = "Базовый";
    break;
}`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-1">if...else:</div>
                <pre className="text-xs text-gray-300">
{`if (возраст >= 18 && 
    имеетПрава) {
  статус = "Может водить";
}`}
                </pre>
              </div>
            </div>
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
              Теперь вы знаете, как использовать тернарный оператор для краткой записи условий и конструкцию switch для множественных проверок. Эти инструменты помогут вам писать более читаемый и эффективный код!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;