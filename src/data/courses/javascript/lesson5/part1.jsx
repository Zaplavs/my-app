// src/data/courses/javascript/lesson5/part1.jsx
import React from 'react';
import { Type, Hash, Text, ToggleLeft, HelpCircle, Zap, Code } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 backdrop-blur-sm border border-cyan-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-lg">
            <Type className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 5: Типы данных в JavaScript</h1>
            <h2 className="text-xl font-semibold text-cyan-300 mb-3">String, Number, Boolean и другие типы данных</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять основные типы данных в JavaScript, научиться определять типы и работать с динамической типизацией.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое типы данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HelpCircle className="w-5 h-5 text-green-400" />
          Что такое типы данных?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Тип данных</span> — это классификация значения, которая определяет, какие операции можно выполнять с этим значением.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Аналогия:</h3>
              <p className="text-gray-300 text-sm">
                Тип данных как категория продуктов в магазине: у каждого типа свои правила использования.
              </p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Hash className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-300">Числа</span> — можно складывать
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Text className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-300">Строки</span> — можно объединять
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ToggleLeft className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300">Булевы</span> — да/нет, истина/ложь
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Зачем нужны типы данных:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Определяют, какие операции можно выполнять</li>
                <li>Помогают избежать ошибок в программе</li>
                <li>Влияют на производительность</li>
                <li>Делают код более понятным</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Особенность JavaScript:</span> JavaScript — язык с <span className="font-medium">динамической типизацией</span>, тип переменной определяется автоматически при присвоении значения.
            </p>
          </div>
        </div>
      </div>

      {/* Основные типы данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Основные типы данных
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В JavaScript существует несколько основных типов данных:
          </p>

          <div className="space-y-6 mt-6">
            {/* String */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 flex items-center gap-2 mb-3">
                <Text className="w-5 h-5" />
                String — строковый тип
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Используется для хранения текстовой информации. Значения заключаются в кавычки.
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let имя = "Иван";
let фамилия = 'Петров';
let приветствие = \`Привет, \${имя}!\`; // Шаблонная строка

console.log(имя); // Иван
console.log(typeof имя); // string
console.log(приветствие); // Привет, Иван!`}
                </pre>
              </div>
            </div>

            {/* Number */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 flex items-center gap-2 mb-3">
                <Hash className="w-5 h-5" />
                Number — числовой тип
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Используется для хранения чисел (целых и дробных).
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let возраст = 25;
let температура = -5.5;
let число_PI = 3.14159;
let бесконечность = Infinity;
let не_число = NaN; // Not a Number

console.log(возраст); // 25
console.log(typeof возраст); // number
console.log(10 / 0); // Infinity
console.log("текст" / 2); // NaN`}
                </pre>
              </div>
            </div>

            {/* Boolean */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 flex items-center gap-2 mb-3">
                <ToggleLeft className="w-5 h-5" />
                Boolean — логический тип
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Может принимать только два значения: true (истина) или false (ложь).
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let isActive = true;
let isCompleted = false;
let больше = 10 > 5; // true
let равно = 5 === 3; // false

console.log(isActive); // true
console.log(typeof isActive); // boolean
console.log(10 > 5); // true`}
                </pre>
              </div>
            </div>

            {/* Undefined */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-gray-600/30">
              <h3 className="font-bold text-gray-300 flex items-center gap-2 mb-3">
                <HelpCircle className="w-5 h-5" />
                Undefined — неопределенный тип
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Значение переменной, которой не было присвоено значение.
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let не_определено;
let пустая_переменная = undefined;

console.log(не_определено); // undefined
console.log(typeof не_определено); // undefined
console.log(пустая_переменная); // undefined`}
                </pre>
              </div>
            </div>

            {/* Null */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 flex items-center gap-2 mb-3">
                <HelpCircle className="w-5 h-5" />
                Null — пустое значение
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Специальное значение, означающее "ничего" или "пусто".
              </p>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let пусто = null;
let отсутствующее_значение = null;

console.log(пусто); // null
console.log(typeof пусто); // object (это баг в JS!)
console.log(пусто === null); // true`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
            <p className="text-purple-300 text-sm">
              <span className="font-medium">💡 Запомните:</span> Используйте <code className="bg-gray-800 px-1 rounded">typeof</code> для проверки типа данных переменной.
            </p>
          </div>
        </div>
      </div>

      {/* Динамическая типизация */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Динамическая типизация
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">Динамическая типизация</span> — это особенность JavaScript, при которой тип переменной определяется автоматически и может меняться.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Как это работает:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let переменная = "строка"; // string
console.log(typeof переменная); // string

переменная = 42; // number
console.log(typeof переменная); // number

переменная = true; // boolean
console.log(typeof переменная); // boolean`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-2">Опасности динамической типизации:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Неожиданные результаты операций</li>
                <li>Ошибки при сравнении разных типов</li>
                <li>Сложнее отлаживать код</li>
              </ul>
              <div className="mt-3 bg-red-900/20 p-2 rounded">
                <pre className="text-xs text-red-300">
{`console.log("5" + 2); // "52" (строка!)
console.log("5" - 2); // 3 (число!)
console.log(true + 1); // 2`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Всегда проверяйте типы данных, особенно при работе с пользовательским вводом.
            </p>
          </div>
        </div>
      </div>

      {/* Проверка типов данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Проверка типов данных
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Оператор <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">typeof</code> используется для определения типа данных переменной.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-2">Как использовать typeof:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`console.log(typeof "привет"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (баг!)
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function(){}); // function`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-2">Особые случаи:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><code className="bg-gray-800 px-1 rounded">typeof null</code> возвращает "object" (это баг в JS)</li>
                <li><code className="bg-gray-800 px-1 rounded">typeof []</code> возвращает "object"</li>
                <li><code className="bg-gray-800 px-1 rounded">typeof function</code> возвращает "function"</li>
              </ul>
              <div className="mt-3 bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`// Проверка массива
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              <span className="font-medium">💡 Лайфхак:</span> Для точной проверки массивов используйте <code className="bg-gray-800 px-1 rounded">Array.isArray()</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Преобразование типов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Преобразование типов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            JavaScript автоматически преобразует типы данных в некоторых ситуациях.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-2">Неявное преобразование:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Строки и числа
console.log("5" + 3); // "53" (строка)
console.log("5" - 3); // 2 (число)
console.log("5" * "3"); // 15 (число)

// Булевы значения
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(Boolean("привет")); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Явное преобразование:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// В строку
String(123); // "123"
(123).toString(); // "123"

// В число
Number("123"); // 123
parseInt("123.45"); // 123
parseFloat("123.45"); // 123.45

// В булево
Boolean(1); // true
Boolean(0); // false
!!"привет"; // true`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm">
              <span className="font-medium">⚠️ Важно:</span> Избегайте неявного преобразования типов — используйте явное преобразование для предсказуемости.
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
              Теперь вы знаете основные типы данных в JavaScript, умеете проверять типы с помощью typeof, понимаете принцип динамической типизации и можете выполнять преобразование типов. Это важная основа для написания надежного кода!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;