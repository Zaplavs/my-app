// src/data/courses/javascript/lesson9/part1.jsx
import React from 'react';
import { ToggleLeft, ToggleRight, Shuffle, Zap, AlertTriangle, Eye, EyeOff } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-500/20 p-3 rounded-lg">
            <ToggleLeft className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 9: Логические значения и приведение типов</h1>
            <h2 className="text-xl font-semibold text-indigo-300 mb-3">Truthy и falsy значения, преобразование типов в условиях</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое логические значения, выучить falsy-значения и освоить приведение типов в условиях.
            </p>
          </div>
        </div>
      </div>

      {/* Логические значения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ToggleRight className="w-5 h-5 text-green-400" />
          Логические значения: true и false
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В JavaScript есть два логических значения: <code className="bg-gray-800 px-1 rounded text-green-300">true</code> (истина) и <code className="bg-gray-800 px-1 rounded text-red-300">false</code> (ложь).
          </p>
          <p>
            Эти значения используются в условиях, циклах и логических выражениях.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Прямое присвоение:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let isActive = true;
let isHidden = false;

console.log(isActive); // true
console.log(isHidden); // false`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Результаты сравнений:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let результат1 = 5 > 3; // true
let результат2 = 5 < 3; // false
let результат3 = "привет" === "пока"; // false

console.log(результат1, результат2, результат3);`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Важно:</span> В условиях JavaScript автоматически преобразует любые значения в логические.
            </p>
          </div>
        </div>
      </div>

      {/* Falsy-значения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <EyeOff className="w-5 h-5 text-red-400" />
          Falsy-значения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-red-300">Falsy-значения</span> — это значения, которые при преобразовании в логическое дают <code className="bg-gray-800 px-1 rounded text-red-300">false</code>.
          </p>
          <p>
            В JavaScript существует <span className="font-medium text-yellow-300">ровно 7</span> falsy-значений:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3">Список falsy-значений:</h3>
              <div className="space-y-2">
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-red-900/30 px-2 py-1 rounded text-red-300">false</code>
                  <span className="text-sm text-gray-300">Логическое false</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-red-900/30 px-2 py-1 rounded text-red-300">0</code>
                  <span className="text-sm text-gray-300">Число ноль</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-red-900/30 px-2 py-1 rounded text-red-300">-0</code>
                  <span className="text-sm text-gray-300">Отрицательный ноль</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-red-900/30 px-2 py-1 rounded text-red-300">""</code>
                  <span className="text-sm text-gray-300">Пустая строка</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Остальные falsy-значения:</h3>
              <div className="space-y-2">
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-red-900/30 px-2 py-1 rounded text-red-300">null</code>
                  <span className="text-sm text-gray-300">Отсутствие значения</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-red-900/30 px-2 py-1 rounded text-red-300">undefined</code>
                  <span className="text-sm text-gray-300">Неопределенное значение</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-red-900/30 px-2 py-1 rounded text-red-300">NaN</code>
                  <span className="text-sm text-gray-300">Не число</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-red-900/30 px-2 py-1 rounded text-red-300">0n</code>
                  <span className="text-sm text-gray-300">BigInt ноль</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Проверка falsy-значений:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Все эти значения в условиях дадут false
if (false) console.log("Не выполнится");
if (0) console.log("Не выполнится");
if ("") console.log("Не выполнится");
if (null) console.log("Не выполнится");
if (undefined) console.log("Не выполнится");
if (NaN) console.log("Не выполнится");

// Проверим в цикле
let значения = [false, 0, "", null, undefined, NaN];
значения.forEach(значение => {
  if (!значение) {
    console.log(\`\${значение} — falsy\`);
  }
});`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Truthy-значения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-green-400" />
          Truthy-значения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Truthy-значения</span> — это все остальные значения, которые при преобразовании в логическое дают <code className="bg-gray-800 px-1 rounded text-green-300">true</code>.
          </p>
          <p>
            То есть, <span className="font-medium">любое значение</span>, которое <span className="font-medium">не является falsy</span>, является truthy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Примеры truthy-значений:</h3>
              <div className="space-y-2">
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-green-900/30 px-2 py-1 rounded text-green-300">true</code>
                  <span className="text-sm text-gray-300">Логическое true</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-green-900/30 px-2 py-1 rounded text-green-300">1</code>
                  <span className="text-sm text-gray-300">Любое ненулевое число</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-green-900/30 px-2 py-1 rounded text-green-300">"0"</code>
                  <span className="text-sm text-gray-300">Строка с символами</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-green-900/30 px-2 py-1 rounded text-green-300">[]</code>
                  <span className="text-sm text-gray-300">Пустой массив</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Другие truthy-значения:</h3>
              <div className="space-y-2">
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-green-900/30 px-2 py-1 rounded text-green-300">{`{}`}</code>
                  <span className="text-sm text-gray-300">Пустой объект</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-green-900/30 px-2 py-1 rounded text-green-300">"false"</code>
                  <span className="text-sm text-gray-300">Строка с текстом</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-green-900/30 px-2 py-1 rounded text-green-300">function(){}</code>
                  <span className="text-sm text-gray-300">Функция</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <code className="bg-green-900/30 px-2 py-1 rounded text-green-300">new Date()</code>
                  <span className="text-sm text-gray-300">Объект даты</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Практическое применение:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Проверка существования значения
let имя = "Иван";
if (имя) {
  console.log(\`Привет, \${имя}!\`);
}

// Проверка массива
let список = [];
if (список) {
  console.log("Массив существует"); // Выполнится!
}

// Проверка объекта
let пользователь = {};
if (пользователь) {
  console.log("Объект существует"); // Выполнится!
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Приведение типов в условиях */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shuffle className="w-5 h-5 text-purple-400" />
          Приведение типов в условиях
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            JavaScript автоматически преобразует любые значения в логические при использовании в условиях.
          </p>
          <p>
            Это происходит неявно, но важно понимать, <span className="font-medium text-yellow-300">какие значения становятся true, а какие false</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Как работает преобразование:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300 mb-1">В if:</div>
                  <pre className="text-xs text-gray-300">
{`if (значение) {
  // Выполнится, если значение truthy
} else {
  // Выполнится, если значение falsy
}`}
                  </pre>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300 mb-1">Явное преобразование:</div>
                  <pre className="text-xs text-gray-300">
{`Boolean(0); // false
Boolean(""); // false
Boolean("0"); // true
Boolean({}); // true`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Практические примеры:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300 mb-1">Проверка строки:</div>
                  <pre className="text-xs text-gray-300">
{`let текст = "";
if (текст) {
  console.log("Текст есть");
} else {
  console.log("Текст пуст"); // Выполнится
}`}
                  </pre>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300 mb-1">Проверка числа:</div>
                  <pre className="text-xs text-gray-300">
{`let количество = 0;
if (количество) {
  console.log("Есть товары");
} else {
  console.log("Нет товаров"); // Выполнится
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">⚠️ Распространенные ошибки:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// ОШИБКА: "0" — строка, а не число!
let код = "0";
if (код) {
  console.log("Код есть"); // Выполнится!
} else {
  console.log("Код отсутствует");
}

// ПРАВИЛЬНО: преобразовать в число
if (Number(код)) {
  console.log("Код действителен");
} else {
  console.log("Код недействителен"); // Выполнится
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Логические операторы и приведение типов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Логические операторы и приведение типов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Логические операторы <code className="bg-gray-800 px-1 rounded">&&</code> и <code className="bg-gray-800 px-1 rounded">||</code> также используют приведение типов.
          </p>
          <p>
            Но они возвращают <span className="font-medium text-green-300">исходные значения</span>, а не просто true/false.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Логическое И (&&):</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 mb-3">
                <li>Возвращает первое falsy значение</li>
                <li>Или последнее значение, если все truthy</li>
              </ul>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`console.log("привет" && 42); // 42
console.log(0 && "мир"); // 0
console.log("" && "значение"); // ""
console.log(null && true); // null`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Логическое ИЛИ (||):</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 mb-3">
                <li>Возвращает первое truthy значение</li>
                <li>Или последнее значение, если все falsy</li>
              </ul>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`console.log("привет" || 42); // "привет"
console.log(0 || "мир"); // "мир"
console.log("" || 0); // 0
console.log(false || null); // null`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Практическое применение:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Установка значений по умолчанию
let имя = userData.name || "Гость";
let возраст = userAge || 18;

// Проверка условий
let можетВойти = isAuthenticated && hasPermission;

// Цепочка проверок
let результат = значение1 || значение2 || значение3 || "По умолчанию";`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <ToggleRight className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как работают логические значения, знаете все falsy-значения и умеете использовать приведение типов в условиях. Это важные знания для написания надежного JavaScript кода!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;