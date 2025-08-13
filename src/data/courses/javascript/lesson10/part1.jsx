// src/data/courses/javascript/lesson10/part1.jsx
import React from 'react';
import { RotateCw, RotateCcw, Repeat, Zap, Code, Hash, List } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <Repeat className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 10: Цикл for</h1>
            <h2 className="text-xl font-semibold text-green-300 mb-3">Повторение кода с помощью цикла for</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить синтаксис цикла for, научиться использовать его для перебора чисел и массивов.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое циклы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCw className="w-5 h-5 text-blue-400" />
          Что такое циклы?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-blue-300">Циклы</span> — это конструкции, которые позволяют выполнять один и тот же код несколько раз.
          </p>
          <p>
            Вместо того чтобы писать один и тот же код много раз, мы используем циклы для автоматизации повторяющихся задач.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Без цикла (плохо):</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-sm text-gray-300">
{`console.log("Итерация 1");
console.log("Итерация 2");
console.log("Итерация 3");
console.log("Итерация 4");
console.log("Итерация 5");`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">С циклом for (хорошо):</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-sm text-gray-300">
{`for (let i = 1; i <= 5; i++) {
  console.log(\`Итерация \${i}\`);
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Преимущества:</span> Меньше кода, легче поддерживать, гибкость в количестве повторений.
            </p>
          </div>
        </div>
      </div>

      {/* Синтаксис цикла for */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-yellow-400" />
          Синтаксис цикла for
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цикл <code className="bg-gray-800 px-1 rounded text-yellow-300">for</code> состоит из трех частей, заключенных в круглые скобки:
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Структура цикла for:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300 text-center">
                for (инициализация; условие; шаг) {'{'}
              </pre>
              <pre className="text-sm text-gray-300 text-center mt-1">
                &nbsp;&nbsp;// тело цикла
              </pre>
              <pre className="text-sm text-gray-300 text-center">
                {'}'}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">1. Инициализация:</h3>
              <p className="text-sm text-gray-300">
                Выполняется один раз перед началом цикла. Обычно создается счетчик.
              </p>
              <div className="mt-2 bg-gray-800 p-2 rounded text-center">
                <code className="text-xs text-gray-300">let i = 0</code>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">2. Условие:</h3>
              <p className="text-sm text-gray-300">
                Проверяется перед каждой итерацией. Если true — цикл продолжается.
              </p>
              <div className="mt-2 bg-gray-800 p-2 rounded text-center">
                <code className="text-xs text-gray-300">{`i < 10`}</code>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">3. Шаг:</h3>
              <p className="text-sm text-gray-300">
                Выполняется после каждой итерации. Обычно изменяет счетчик.
              </p>
              <div className="mt-2 bg-gray-800 p-2 rounded text-center">
                <code className="text-xs text-gray-300">i++</code>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Полный пример:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`for (let счетчик = 1; счетчик <= 3; счетчик++) {
  console.log(\`Итерация номер \${счетчик}\`);
}

// Вывод:
// Итерация номер 1
// Итерация номер 2
// Итерация номер 3`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Работа с числами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-orange-400" />
          Работа с числами в цикле for
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цикл <code className="bg-gray-800 px-1 rounded">for</code> идеально подходит для работы с числовыми последовательностями.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Простой счетчик:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Вывод чисел от 1 до 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Вывод: 1, 2, 3, 4, 5`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3">Обратный счетчик:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Вывод чисел от 10 до 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Вывод: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Математические операции:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Сумма чисел от 1 до 100
let сумма = 0;
for (let i = 1; i <= 100; i++) {
  сумма += i;
}
console.log(сумма); // 5050

// Четные числа от 2 до 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Вывод: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Используйте <code className="bg-gray-800 px-1 rounded">i += 2</code> для шага 2, <code className="bg-gray-800 px-1 rounded">i += 5</code> для шага 5 и т.д.
            </p>
          </div>
        </div>
      </div>

      {/* Инкремент и декремент */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-purple-400" />
          Инкремент и декремент
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">Инкремент</span> (<code className="bg-gray-800 px-1 rounded">++</code>) и <span className="font-medium text-pink-300">декремент</span> (<code className="bg-gray-800 px-1 rounded">--</code>) — это специальные операторы для увеличения/уменьшения значения на 1.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Инкремент (++):</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300 mb-1">Постфиксный:</div>
                  <pre className="text-xs text-gray-300">
{`let x = 5;
let y = x++; // y = 5, x = 6
console.log(y, x); // 5, 6`}
                  </pre>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300 mb-1">Префиксный:</div>
                  <pre className="text-xs text-gray-300">
{`let a = 5;
let b = ++a; // a = 6, b = 6
console.log(a, b); // 6, 6`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
              <h3 className="font-bold text-pink-300 mb-3">Декремент (--):</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300 mb-1">Постфиксный:</div>
                  <pre className="text-xs text-gray-300">
{`let x = 5;
let y = x--; // y = 5, x = 4
console.log(y, x); // 5, 4`}
                  </pre>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300 mb-1">Префиксный:</div>
                  <pre className="text-xs text-gray-300">
{`let a = 5;
let b = --a; // a = 4, b = 4
console.log(a, b); // 4, 4`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">В цикле for:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Обычно используем постфиксный инкремент
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// То же самое с префиксным (результат такой же)
for (let i = 0; i < 5; ++i) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Декремент для обратного счета
for (let i = 5; i > 0; i--) {
  console.log(i); // 5, 4, 3, 2, 1
}`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm">
              <span className="font-medium">⚠️ Важно:</span> В цикле for разницы между <code className="bg-gray-800 px-1 rounded">i++</code> и <code className="bg-gray-800 px-1 rounded">++i</code> практически нет.
            </p>
          </div>
        </div>
      </div>

      {/* Перебор массивов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <List className="w-5 h-5 text-cyan-400" />
          Перебор массивов с помощью for
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цикл <code className="bg-gray-800 px-1 rounded">for</code> часто используется для перебора элементов массива по индексам.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3">Базовый перебор:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let фрукты = ["яблоко", "банан", "апельсин"];

for (let i = 0; i < фрукты.length; i++) {
  console.log(\`Фрукт \${i + 1}: \${фрукты[i]}\`);
}

// Вывод:
// Фрукт 1: яблоко
// Фрукт 2: банан
// Фрукт 3: апельсин`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Работа с индексами:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let числа = [10, 20, 30, 40, 50];

for (let i = 0; i < числа.length; i++) {
  console.log(\`Индекс: \${i}, Значение: \${числа[i]}\`);
  console.log(\`Следующее: \${числа[i + 1] || "нет"}\`);
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Практические примеры:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Сумма элементов массива
let оценки = [5, 4, 3, 5, 4];
let сумма = 0;

for (let i = 0; i < оценки.length; i++) {
  сумма += оценки[i];
}
console.log(\`Средний балл: \${сумма / оценки.length}\`);

// Поиск максимального значения
let числа = [3, 7, 2, 9, 1];
let максимум = числа[0];

for (let i = 1; i < числа.length; i++) {
  if (числа[i] > максимум) {
    максимум = числа[i];
  }
}
console.log(\`Максимум: \${максимум}\`); // 9`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Вложенные циклы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCcw className="w-5 h-5 text-pink-400" />
          Вложенные циклы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-pink-300">Вложенные циклы</span> — это циклы внутри других циклов. Часто используются для работы с двумерными структурами данных.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3">Пример с таблицей умножения:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Таблица умножения 5x5
for (let i = 1; i <= 5; i++) {
  let строка = "";
  for (let j = 1; j <= 5; j++) {
    строка += \`\${i * j}\t\`;
  }
  console.log(строка);
}

// Вывод:
// 1	2	3	4	5	
// 2	4	6	8	10	
// 3	6	9	12	15	
// 4	8	12	16	20	
// 5	10	15	20	25	`}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Работа с двумерными массивами:</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`let матрица = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < матрица.length; i++) {
  for (let j = 0; j < матрица[i].length; j++) {
    console.log(\`Элемент [\${i}][\${j}]: \${матрица[i][j]}\`);
  }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Паттерны с звездочками:</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`// Прямоугольник 5x3
for (let i = 0; i < 3; i++) {
  let строка = "";
  for (let j = 0; j < 5; j++) {
    строка += "* ";
  }
  console.log(строка);
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm">
              <span className="font-medium">⚠️ Внимание:</span> Вложенные циклы увеличивают сложность алгоритма. Следите за производительностью.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Repeat className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать цикл for для повторения кода, перебора чисел и массивов. Вы освоили инкремент/декремент и научились создавать вложенные циклы. Это мощный инструмент для автоматизации повторяющихся задач!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;