// src/data/courses/javascript/lesson18/part1.jsx
import React from 'react';
import { Repeat, Shuffle, ArrowRight, ArrowLeft, RotateCw, Target, Database, List } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Repeat className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 18: Перебор массивов и объектов</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Циклы и методы итерации</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить различные способы перебора элементов массивов и свойств объектов.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое итерация */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-blue-400" />
          Что такое итерация?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-blue-300">Итерация</span> — это <span className="font-medium text-yellow-300">последовательный перебор</span> элементов коллекции (массива или объекта) для выполнения определённых действий с каждым элементом.
          </p>
          <p>
            В JavaScript существует несколько способов итерации, каждый из которых имеет свои особенности и области применения.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Аналогия:</h3>
              <p className="text-sm text-gray-300">
                Итерация как <span className="font-medium">чтение книги</span> — вы последовательно <span className="font-medium">просматриваете</span> каждую страницу (элемент) и <span className="font-medium">выполняете</span> действия (анализ, пометки и т.д.).
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Основные задачи итерации:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Обработка</span> каждого элемента</li>
                <li><span className="font-medium">Поиск</span> определённых значений</li>
                <li><span className="font-medium">Преобразование</span> данных</li>
                <li><span className="font-medium">Агрегация</span> информации</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Примеры итерации:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Массив чисел
let числа = [1, 2, 3, 4, 5];

// Объект пользователя
let пользователь = {
  имя: "Иван",
  возраст: 25,
  город: "Москва"
};

// Задачи итерации:
// - Найти сумму всех чисел
// - Вывести все свойства пользователя
// - Преобразовать данные
// - Отфильтровать элементы`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Цикл for...of для массивов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Repeat className="w-5 h-5 text-green-400" />
          Цикл for...of для массивов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цикл <code className="bg-gray-800 px-1 rounded text-green-300">for...of</code> предназначен для <span className="font-medium text-yellow-300">перебора итерируемых объектов</span>, таких как массивы, строки, Map, Set и другие.
          </p>
          <p>
            Он предоставляет <span className="font-medium">прямой доступ к значениям</span> элементов, а не к их индексам.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Синтаксис for...of:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Базовый синтаксис
for (let элемент of массив) {
  // действия с элементом
}

// Примеры использования
let цвета = ["красный", "зелёный", "синий"];

for (let цвет of цвета) {
  console.log(цвет);
}
// Вывод: красный, зелёный, синий`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Преимущества for...of:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Читаемость</span> — простой и понятный синтаксис</li>
                <li><span className="font-medium">Безопасность</span> — не перебирает лишние свойства</li>
                <li><span className="font-medium">Универсальность</span> — работает с разными итерируемыми объектами</li>
                <li><span className="font-medium">Не нужен индекс</span> — прямой доступ к значениям</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Работа с числами:</div>
                <pre className="text-sm text-gray-300">
{`let числа = [10, 20, 30, 40, 50];
let сумма = 0;

for (let число of числа) {
  сумма += число;
}

console.log(сумма); // 150`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Работа со строками:</div>
                <pre className="text-sm text-gray-300">
{`let слово = "JavaScript";

for (let буква of слово) {
  console.log(буква.toUpperCase());
}
// Вывод: J, A, V, A, S, C, R, I, P, T`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Цикл for...in для объектов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shuffle className="w-5 h-5 text-purple-400" />
          Цикл for...in для объектов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цикл <code className="bg-gray-800 px-1 rounded text-purple-300">for...in</code> предназначен для <span className="font-medium text-yellow-300">перебора перечисляемых свойств</span> объекта.
          </p>
          <p>
            Он предоставляет <span className="font-medium">доступ к ключам (именам свойств)</span>, а не к их значениям.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Синтаксис for...in:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Базовый синтаксис
for (let ключ in объект) {
  // действия с ключом и значением
  console.log(ключ, объект[ключ]);
}

// Примеры использования
let пользователь = {
  имя: "Мария",
  возраст: 30,
  город: "Санкт-Петербург"
};

for (let поле in пользователь) {
  console.log(\`\${поле}: \${пользователь[поле]}\`);
}
// Вывод: имя: Мария, возраст: 30, город: Санкт-Петербург`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Особенности for...in:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Перебирает ключи</span> — возвращает имена свойств</li>
                <li><span className="font-medium">Включает прототипы</span> — может перебирать унаследованные свойства</li>
                <li><span className="font-medium">Для объектов</span> — оптимален для перебора свойств</li>
                <li><span className="font-medium">Осторожно с массивами</span> — может перебирать лишние свойства</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Перебор свойств объекта:</div>
                <pre className="text-sm text-gray-300">
{`let книга = {
  название: "JavaScript для начинающих",
  автор: "Иван Петров",
  год: 2023,
  страниц: 350
};

for (let ключ in книга) {
  if (typeof книга[ключ] === "string") {
    console.log(\`\${ключ}: \${книга[ключ].toUpperCase()}\`);
  } else {
    console.log(\`\${ключ}: \${книга[ключ]}\`);
  }
}`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Проверка существования свойств:</div>
                <pre className="text-sm text-gray-300">
{`let объект = { a: 1, b: 2 };

for (let ключ in объект) {
  if (объект.hasOwnProperty(ключ)) {
    console.log(\`Собственное свойство: \${ключ} = \${объект[ключ]}\`);
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Метод forEach() для массивов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCw className="w-5 h-5 text-cyan-400" />
          Метод forEach() для массивов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Метод <code className="bg-gray-800 px-1 rounded text-cyan-300">forEach()</code> — это <span className="font-medium text-yellow-300">функциональный метод</span> массива, который выполняет указанную функцию для каждого элемента массива.
          </p>
          <p>
            Он предоставляет <span className="font-medium">доступ к элементу, индексу и самому массиву</span> в колбэк-функции.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3">Синтаксис forEach():</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Базовый синтаксис
массив.forEach(function(элемент, индекс, массив) {
  // действия с элементом
});

// Стрелочная функция
массив.forEach((элемент, индекс) => {
  // действия с элементом
});

// Примеры использования
let фрукты = ["яблоко", "банан", "апельсин"];

фрукты.forEach((фрукт, индекс) => {
  console.log(\`\${ин

декс + 1}. \${фрукт}\`);
});
// Вывод: 1. яблоко, 2. банан, 3. апельсин`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Параметры forEach():</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">элемент</span> — текущий элемент массива</li>
                <li><span className="font-medium">индекс</span> — индекс текущего элемента (опционально)</li>
                <li><span className="font-medium">массив</span> — сам массив (опционально)</li>
                <li><span className="font-medium">thisArg</span> — значение this в колбэке (опционально)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Простая итерация:</div>
                <pre className="text-sm text-gray-300">
{`let числа = [1, 2, 3, 4, 5];
let квадраты = [];

числа.forEach(число => {
  квадраты.push(число ** 2);
});

console.log(квадраты); // [1, 4, 9, 16, 25]`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Работа с индексами:</div>
                <pre className="text-sm text-gray-300">
{`let задачи = ["Купить хлеб", "Позвонить другу", "Сделать домашку"];

задачи.forEach((задача, индекс) => {
  console.log(\`Задача #\${ин

декс + 1}: \${задача}\`);
});`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Изменение элементов:</div>
                <pre className="text-sm text-gray-300">
{`let массив = [1, 2, 3, 4, 5];

массив.forEach((элемент, индекс, arr) => {
  arr[ин

декс] = элемент * 2;
});

console.log(массив); // [2, 4, 6, 8, 10]`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Сравнение методов итерации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-yellow-400" />
          Сравнение методов итерации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Каждый метод итерации имеет свои <span className="font-medium text-yellow-300">преимущества и ограничения</span>. Выбор зависит от конкретной задачи.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-2 text-blue-300">Метод</th>
                  <th className="text-left p-2 text-green-300">Тип данных</th>
                  <th className="text-left p-2 text-purple-300">Доступ</th>
                  <th className="text-left p-2 text-cyan-300">Преимущества</th>
                  <th className="text-left p-2 text-orange-300">Недостатки</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-2">
                    <code className="bg-gray-800 px-1 rounded">for...of</code>
                  </td>
                  <td className="p-2 text-gray-300">Массивы, строки, Map, Set</td>
                  <td className="p-2 text-gray-300">Значения</td>
                  <td className="p-2 text-green-300">Читаемость, безопасность</td>
                  <td className="p-2 text-red-300">Нет индекса, ограниченные типы</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-2">
                    <code className="bg-gray-800 px-1 rounded">for...in</code>
                  </td>
                  <td className="p-2 text-gray-300">Объекты</td>
                  <td className="p-2 text-gray-300">Ключи</td>
                  <td className="p-2 text-green-300">Для объектов, универсален</td>
                  <td className="p-2 text-red-300">Перебирает прототипы</td>
                </tr>
                <tr>
                  <td className="p-2">
                    <code className="bg-gray-800 px-1 rounded">forEach()</code>
                  </td>
                  <td className="p-2 text-gray-300">Массивы</td>
                  <td className="p-2 text-gray-300">Элемент, индекс</td>
                  <td className="p-2 text-green-300">Функциональный стиль</td>
                  <td className="p-2 text-red-300">Нельзя прервать, не возвращает значение</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Когда использовать for...of:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Перебор массивов и других итерируемых объектов</li>
                <li>Когда нужен доступ только к значениям</li>
                <li>Для простых операций с элементами</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">Когда использовать for...in:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Перебор свойств объектов</li>
                <li>Когда нужен доступ к ключам</li>
                <li>Для динамической работы со свойствами</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-2">Когда использовать forEach():</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Функциональный подход к итерации</li>
                <li>Когда нужен доступ к индексам</li>
                <li>Для сложных операций с элементами</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-orange-400" />
          Практические примеры итерации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Обработка данных пользователей:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`let пользователи = [
  { имя: "Анна", возраст: 25, активен: true },
  { имя: "Борис", возраст: 30, активен: false },
  { имя: "Виктор", возраст: 35, активен: true }
];

// for...of для перебора пользователей
console.log("Активные пользователи:");
for (let пользователь of пользователи) {
  if (пользователь.активен) {
    console.log(\`\${пользователь.имя}, \${пользователь.возраст} лет\`);
  }
}

// forEach для обработки с индексами
пользователи.forEach((пользователь, индекс) => {
  console.log(\`Пользователь #\${ин

декс + 1}: \${пользователь.имя}\`);
});`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Анализ конфигурации:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`let настройки = {
  тема: "тёмная",
  язык: "ru",
  уведомления: true,
  автосохранение: false
};

// for...in для анализа настроек
console.log("Текущие настройки:");
for (let ключ in настройки) {
  // Проверяем, что свойство принадлежит объекту
  if (настройки.hasOwnProperty(ключ)) {
    console.log(\`\${ключ}: \${настройки[ключ]}\`);
  }
}

// Подсчет включенных настроек
let включено = 0;
for (let ключ in настройки) {
  if (настройки.hasOwnProperty(ключ) && настройки[ключ] === true) {
    включено++;
  }
}
console.log(\`Включено настроек: \${включено}\`);`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Комплексная обработка данных:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Массив товаров с категориями
let товары = [
  { название: "Ноутбук", цена: 50000, категория: "электроника" },
  { название: "Книга", цена: 500, категория: "литература" },
  { название: "Телефон", цена: 30000, категория: "электроника" },
  { название: "Ручка", цена: 100, категория: "канцелярия" }
];

// Группировка по категориям
let категории = {};

// for...of для перебора товаров
for (let товар of товары) {
  if (!категории[товар.категория]) {
    категории[товар.категория] = [];
  }
  категории[товар.категория].push(товар);
}

// for...in для вывода категорий
for (let категория in категории) {
  console.log(\`Категория: \${категория}\`);
  
  // forEach для вывода товаров в категории
  категории[категория].forEach(товар => {
    console.log(\`  - \${товар.название}: \${товар.цена} руб.\`);
  });
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
            <Repeat className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете основные способы итерации в JavaScript: for...of для массивов, for...in для объектов и метод forEach(). Эти инструменты помогут вам эффективно обрабатывать данные!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;