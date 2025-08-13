// src/data/courses/javascript/lesson14/part1.jsx
import React from 'react';
import { ArrowRight, Code, Zap, Shuffle, Target, Play } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <ArrowRight className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 14: Функциональные выражения и стрелочные функции</h1>
            <h2 className="text-xl font-semibold text-purple-300 mb-3">Функции как значения и современный синтаксис</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить функциональные выражения, стрелочные функции, понять их отличия и области применения.
            </p>
          </div>
        </div>
      </div>

      {/* Функции как значения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shuffle className="w-5 h-5 text-green-400" />
          Функции как значения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В JavaScript <span className="font-medium text-green-300">функции — это значения</span>, которые можно <span className="font-medium">присваивать переменным</span>, <span className="font-medium">передавать</span> как аргументы и <span className="font-medium">возвращать</span> из других функций.
          </p>
          <p>
            Это делает JavaScript <span className="font-medium text-yellow-300">функциональным языком программирования</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Функциональное выражение:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Функциональное выражение
let приветствие = function() {
  console.log("Привет!");
};

// Вызов функции
приветствие(); // "Привет!"`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Функция как значение:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Присваивание функции переменной
let операция = function(a, b) {
  return a + b;
};

// Передача функции как аргумента
function выполнить(func, x, y) {
  return func(x, y);
}

console.log(выполнить(операция, 5, 3)); // 8`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Важно:</span> Функциональные выражения <span className="font-medium">не поднимаются (hoisting)</span> как объявления функций.
            </p>
          </div>
        </div>
      </div>

      {/* Отличия объявления и выражения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-orange-400" />
          Объявление функции vs Функциональное выражение
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
                <Play className="w-4 h-4" />
                Объявление функции (Function Declaration)
              </h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`// Можно вызывать до объявления (hoisting)
console.log(сумма(2, 3)); // 5

function сумма(a, b) {
  return a + b;
}`}
                </pre>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300 mt-3">
                <li>Поднимается (hoisting)</li>
                <li>Создается до выполнения кода</li>
                <li>Имя обязательно</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Функциональное выражение (Function Expression)
              </h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`// Нельзя вызывать до объявления
// console.log(разность(5, 3)); // Ошибка!

let разность = function(a, b) {
  return a - b;
};

console.log(разность(5, 3)); // 2`}
                </pre>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300 mt-3">
                <li>Не поднимается</li>
                <li>Создается при выполнении</li>
                <li>Имя может отсутствовать</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Практическое сравнение:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Объявление функции - можно вызывать раньше
показать("Привет"); // Работает!

function показать(текст) {
  console.log(текст);
}

// Функциональное выражение - только после объявления
// сообщить("Пока"); // Ошибка!

let сообщить = function(текст) {
  console.log(текст);
};

сообщить("Пока"); // Работает!`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Стрелочные функции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-cyan-400" />
          Стрелочные функции (Arrow Functions)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Стрелочные функции</span> — это <span className="font-medium">сокращенный синтаксис</span> для создания функций, представленный в ES6.
          </p>
          <p>
            Они особенно полезны для <span className="font-medium">коротких функций</span> и <span className="font-medium">коллбэков</span>.
          </p>

          <div class="mt-4 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 class="font-bold text-cyan-300 mb-3">Синтаксис стрелочных функций:</h3>
            <div class="space-y-4">
              <div class="bg-gray-800 p-4 rounded">
                <div class="text-xs text-gray-400 mb-2">Без параметров:</div>
                <pre class="text-xs text-gray-300">
{`let привет = () => console.log("Привет!");
привет(); // "Привет!"`}
                </pre>
              </div>
              <div class="bg-gray-800 p-4 rounded">
                <div class="text-xs text-gray-400 mb-2">С одним параметром:</div>
                <pre class="text-xs text-gray-300">
{`let квадрат = x => x * x;
console.log(квадрат(5)); // 25`}
                </pre>
              </div>
              <div class="bg-gray-800 p-4 rounded">
                <div class="text-xs text-gray-400 mb-2">С несколькими параметрами:</div>
                <pre class="text-xs text-gray-300">
{`let сумма = (a, b) => a + b;
console.log(сумма(3, 4)); // 7`}
                </pre>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div class="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 class="font-bold text-purple-300 mb-3">Краткий синтаксис (без return):</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-sm text-gray-300">
{`// Неявный return (одна строка)
let умножить = (a, b) => a * b;
let удвоить = x => x * 2;

console.log(умножить(3, 4)); // 12
console.log(удвоить(5)); // 10`}
                </pre>
              </div>
            </div>

            <div class="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 class="font-bold text-orange-300 mb-3">Полный синтаксис (с return):</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-sm text-gray-300">
{`// Явный return (несколько строк)
let обработать = (a, b) => {
  let результат = a + b;
  return результат * 2;
};

console.log(обработать(2, 3)); // 10`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Отличия стрелочных функций */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-pink-400" />
          Отличия стрелочных функций
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
              <h3 class="font-bold text-pink-300 mb-3">Ключевые отличия:</h3>
              <ul class="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span class="font-medium">Нет своего this</span> — использует this внешней функции</li>
                <li><span class="font-medium">Нельзя использовать как конструктор</span> (new)</li>
                <li><span class="font-medium">Нет arguments</span> — используйте rest параметры</li>
                <li><span class="font-medium">Короче синтаксис</span> для простых функций</li>
              </ul>
            </div>

            <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 class="font-bold text-blue-300 mb-3">Сравнение синтаксиса:</h3>
              <div class="space-y-3">
                <div class="bg-gray-800 p-3 rounded">
                  <div class="text-xs text-gray-400 mb-1">Обычная функция:</div>
                  <pre class="text-xs text-gray-300">
{`function сумма(a, b) {
  return a + b;
}`}
                  </pre>
                </div>
                <div class="bg-gray-800 p-3 rounded">
                  <div class="text-xs text-gray-400 mb-1">Стрелочная функция:</div>
                  <pre class="text-xs text-gray-300">
{`let сумма = (a, b) => a + b;`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 class="font-bold text-red-300 mb-3">⚠️ Когда НЕ использовать стрелочные функции:</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm text-gray-300">
              <li>Когда нужен <span class="font-medium">динамический this</span> (методы объектов)</li>
              <li>Для <span class="font-medium">конструкторов</span> (функции-конструкторы)</li>
              <li>Когда нужен <span class="font-medium">доступ к arguments</span></li>
              <li>Для <span class="font-medium">рекурсивных</span> функций (без имени)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Области применения */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shuffle className="w-5 h-5 text-green-400" />
          Области применения
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 class="font-bold text-blue-300 mb-2">Коллбэки:</h3>
              <ul class="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Методы массивов</li>
                <li>Асинхронные операции</li>
                <li>Обработчики событий</li>
              </ul>
              <div class="mt-2 bg-gray-800 p-2 rounded">
                <pre class="text-xs text-gray-300">
{`массив.map(x => x * 2)
setTimeout(() => {
  console.log("Готово!");
}, 1000)`}
                </pre>
              </div>
            </div>

            <div class="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 class="font-bold text-purple-300 mb-2">Функциональное программирование:</h3>
              <ul class="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Чистые функции</li>
                <li>Композиция функций</li>
                <li>Функции высшего порядка</li>
              </ul>
              <div class="mt-2 bg-gray-800 p-2 rounded">
                <pre class="text-xs text-gray-300">
{`let композиция = (f, g) => x => f(g(x));
let удвоить = x => x * 2;
let прибавить = x => x + 1;`}
                </pre>
              </div>
            </div>

            <div class="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 class="font-bold text-cyan-300 mb-2">Короткие функции:</h3>
              <ul class="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Преобразования данных</li>
                <li>Фильтрация</li>
                <li>Агрегация</li>
              </ul>
              <div class="mt-2 bg-gray-800 p-2 rounded">
                <pre class="text-xs text-gray-300">
{`let цены = [100, 200, 300];
let сНДС = цены.map(цена => цена * 1.2);`}
                </pre>
              </div>
            </div>
          </div>

          <div class="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 class="font-bold text-green-300 mb-3">Практические примеры:</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-gray-800 p-4 rounded">
                <div class="text-xs text-gray-400 mb-2">Работа с массивами:</div>
                <pre class="text-xs text-gray-300">
{`let числа = [1, 2, 3, 4, 5];

// Фильтрация
let четные = числа.filter(n => n % 2 === 0);

// Преобразование
let квадраты = числа.map(n => n ** 2);

// Агрегация
let сумма = числа.reduce((a, b) => a + b, 0);`}
                </pre>
              </div>
              <div class="bg-gray-800 p-4 rounded">
                <div class="text-xs text-gray-400 mb-2">Объекты и методы:</div>
                <pre class="text-xs text-gray-300">
{`let калькулятор = {
  числа: [1, 2, 3, 4, 5],
  сумма() {
    // Стрелочная функция использует this калькулятора
    return this.числа.reduce((a, b) => a + b, 0);
  }
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Практические примеры и паттерны
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 class="font-bold text-orange-300 mb-3">Функции высшего порядка:</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-xs text-gray-300">
{`// Функция, возвращающая функцию
function создатьМножитель(множитель) {
  return (число) => число * множитель;
}

let удвоить = создатьМножитель(2);
let утроить = создатьМножитель(3);

console.log(удвоить(5)); // 10
console.log(утроить(4)); // 12`}
                </pre>
              </div>
            </div>

            <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 class="font-bold text-blue-300 mb-3">Каррирование:</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-xs text-gray-300">
{`// Преобразование функции нескольких аргументов
let сложить = (a, b, c) => a + b + c;

// В каррированную форму
let каррироватьСложение = a => b => c => a + b + c;

let добавить10 = каррироватьСложение(10);
let добавить10и5 = добавить10(5);
console.log(добавить10и5(3)); // 18`}
                </pre>
              </div>
            </div>
          </div>

          <div class="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 class="font-bold text-purple-300 mb-3">Реальный пример — обработчик событий:</h3>
            <div class="bg-gray-800 p-4 rounded">
              <pre class="text-sm text-gray-300">
{`// Создание кнопок с разными обработчиками
function создатьКнопку(текст, действие) {
  let кнопка = document.createElement('button');
  кнопка.textContent = текст;
  кнопка.addEventListener('click', действие);
  return кнопка;
}

// Использование стрелочных функций
let кнопкаСохранить = создатьКнопку(
  'Сохранить', 
  () => console.log('Сохраняю...')
);

let кнопкаУдалить = создатьКнопку(
  'Удалить',
  () => console.log('Удаляю...')
);`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div class="flex items-start gap-3">
          <div class="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <ArrowRight className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 class="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p class="text-gray-300">
              Теперь вы знаете, как использовать функциональные выражения и стрелочные функции, понимаете их отличия и умеете применять в правильных ситуациях. Это мощные инструменты для современного JavaScript!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;