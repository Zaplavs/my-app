// src/data/courses/c/lesson5/part1.jsx
import React from 'react';
import { Terminal, Hash, Percent, Type, Square, Eye } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Eye className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">👁️ Урок 5: Форматированный вывод с printf()</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как красиво показать данные пользователю</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться выводить значения переменных и форматировать текст с помощью функции printf().
            </p>
          </div>
        </div>
      </div>

      {/* Что такое printf()? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-green-400" />
          Что такое printf() и зачем она нужна?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">printf()</span> — это функция из библиотеки <code className="bg-gray-700 px-1.5 py-0.5 rounded">stdio.h</code>, которая позволяет выводить форматированный текст на экран.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Eye className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> printf() — как почтальон, который доставляет ваши данные пользователю в красиво оформленном письме.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Без printf():</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>// Невозможно вывести переменные напрямую</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">С printf():</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int age = 25;<br/>printf("Мне %d лет", age);</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Спецификаторы формата */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Percent className="w-5 h-5 text-purple-400" />
          Спецификаторы формата в printf()
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Спецификаторы формата — это "заполнители" в строке, которые заменяются на значения переменных.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* %d для int */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Hash className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">%d — для целых чисел (int)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Используется для вывода переменных типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code>.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>%d — decimal (десятичное число)</li>
                  <li>Может выводить положительные и отрицательные числа</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-green-300 text-sm">
{`int age = 25;
int temperature = -5;
printf("Возраст: %d лет\\n", age);
printf("Температура: %d°C\\n", temperature);`}
                </pre>
                <div className="mt-2 p-2 bg-black rounded text-xs">
                  <p className="text-white">Вывод:</p>
                  <p className="text-gray-300">Возраст: 25 лет</p>
                  <p className="text-gray-300">Температура: -5°C</p>
                </div>
              </div>
            </div>
          </div>

          {/* %f для float */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Percent className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">%f — для дробных чисел (float/double)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Используется для вывода переменных типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">float</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">double</code>.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>%f — float</li>
                  <li>По умолчанию выводит 6 знаков после запятой</li>
                  <li>%.2f — вывод с 2 знаками после запятой</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-blue-300 text-sm">
{`float price = 99.99;
double pi = 3.14159;
printf("Цена: %f рублей\\n", price);
printf("Пи: %.2f\\n", pi);`}
                </pre>
                <div className="mt-2 p-2 bg-black rounded text-xs">
                  <p className="text-white">Вывод:</p>
                  <p className="text-gray-300">Цена: 99.990000 рублей</p>
                  <p className="text-gray-300">Пи: 3.14</p>
                </div>
              </div>
            </div>
          </div>

          {/* %c для char */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Type className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">%c — для символов (char)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Используется для вывода переменных типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">char</code>.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>%c — character (символ)</li>
                  <li>Символы заключаются в одинарные кавычки</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-orange-300 text-sm">
{`char grade = 'A';
char initial = 'J';
printf("Оценка: %c\\n", grade);
printf("Инициал: %c.\\n", initial);`}
                </pre>
                <div className="mt-2 p-2 bg-black rounded text-xs">
                  <p className="text-white">Вывод:</p>
                  <p className="text-gray-300">Оценка: A</p>
                  <p className="text-gray-300">Инициал: J.</p>
                </div>
              </div>
            </div>
          </div>

          {/* %s для строк */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Square className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">%s — для строк (пока просто знайте)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Используется для вывода строк (последовательностей символов).
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>%s — string (строка)</li>
                  <li>Строки заключаются в двойные кавычки</li>
                  <li>Пока просто запомните этот спецификатор</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-purple-300 text-sm">
{`printf("Привет, %s!\\n", "мир");
printf("Строка: %s\\n", "C программирование");`}
                </pre>
                <div className="mt-2 p-2 bg-black rounded text-xs">
                  <p className="text-white">Вывод:</p>
                  <p className="text-gray-300">Привет, мир!</p>
                  <p className="text-gray-300">Строка: C программирование</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Структура printf() */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-cyan-400" />
          Как правильно использовать printf()?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Функция <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf()</code> имеет строгую структуру:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Формат вызова:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-center text-lg">
                <code>printf("строка формата", переменная1, переменная2, ...);</code>
              </pre>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">строка формата</p>
                <p className="text-gray-300">Текст с спецификаторами (%d, %f, %c, %s)</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">переменные</p>
                <p className="text-gray-300">Значения, которые будут подставлены вместо спецификаторов</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Важные правила:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Количество спецификаторов должно совпадать с количеством переменных</li>
              <li>Тип спецификатора должен соответствовать типу переменной</li>
              <li>Переменные перечисляются в том же порядке, что и спецификаторы</li>
              <li>Не забывайте точку с запятой в конце!</li>
            </ul>
            <div className="mt-4 bg-gray-800 p-3 rounded">
              <pre className="text-green-300 text-sm">
{`// Правильно:
int age = 25;
float height = 175.5;
printf("Возраст: %d, Рост: %.1f см\\n", age, height);

// Неправильно (несовпадение типов):
printf("Возраст: %f, Рост: %d см\\n", age, height); // ОШИБКА!`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Форматирование чисел */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Percent className="w-5 h-5 text-yellow-400" />
          Продвинутое форматирование чисел
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Дробные числа:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">%.2f</code> — 2 знака после запятой</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">%.0f</code> — без знаков после запятой</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">%8.2f</code> — всего 8 символов, 2 после запятой</li>
            </ul>
            <div className="mt-3 bg-gray-800 p-2 rounded">
              <pre className="text-blue-300 text-sm">
{`float price = 123.456;
printf("%.2f\\n", price);  // 123.46
printf("%.0f\\n", price);  // 123
printf("%8.2f\\n", price); //   123.46`}
              </pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Целые числа:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">%d</code> — обычный вывод</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">%5d</code> — минимум 5 символов</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">%05d</code> — заполнение нулями</li>
            </ul>
            <div className="mt-3 bg-gray-800 p-2 rounded">
              <pre className="text-green-300 text-sm">
{`int number = 42;
printf("%d\\n", number);    // 42
printf("%5d\\n", number);   //    42
printf("%05d\\n", number);  // 00042`}
              </pre>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-yellow-300 text-sm">
            ⚠️ <span className="font-medium">Важно:</span> Всегда используйте правильные спецификаторы! Несоответствие типов может привести к непредсказуемым результатам.
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Eye className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 👁️</h3>
            <p className="text-gray-300">
              Теперь вы умеете выводить значения переменных любых типов и форматировать их вывод. Это ключевой навык для создания понятных программ!
              В следующем уроке мы научимся вводить данные с клавиатуры с помощью функции scanf().
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;