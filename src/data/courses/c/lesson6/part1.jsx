// src/data/courses/c/lesson6/part1.jsx
import React from 'react';
import { Keyboard, ArrowRight, Database, Terminal, AlertTriangle, Zap } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Keyboard className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">⌨️ Урок 6: Ввод данных с клавиатуры с помощью scanf()</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как получать данные от пользователя</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться использовать функцию scanf() для ввода данных с клавиатуры и понять, зачем нужен символ &.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое scanf()? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Keyboard className="w-5 h-5 text-green-400" />
          Что такое scanf() и зачем она нужна?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">scanf()</span> — это функция из библиотеки <code className="bg-gray-700 px-1.5 py-0.5 rounded">stdio.h</code>, которая позволяет получать данные от пользователя через клавиатуру.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> scanf() — как почтовый ящик, в который пользователь кладет свои данные. Программа затем берет эти данные и работает с ними.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Без scanf():</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int age = 25; // Значение зашито в коде</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Пользователь не может изменить данные</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">С scanf():</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int age;<br/>scanf("%d", &age); // Пользователь вводит значение</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Пользователь может ввести любое значение</p>
            </div>
          </div>
        </div>
      </div>

      {/* Структура scanf() */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Как правильно использовать scanf()?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Функция <code className="bg-gray-700 px-1.5 py-0.5 rounded">scanf()</code> имеет строгую структуру, похожую на <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf()</code>:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Формат вызова:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-center text-lg">
                <code>scanf("строка формата", &переменная1, &переменная2, ...);</code>
              </pre>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">строка формата</p>
                <p className="text-gray-300">Спецификаторы (%d, %f, %c, %s) в кавычках</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">&переменные</p>
                <p className="text-gray-300">Адреса переменных (важно ставить & перед именем переменной!)</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Важное отличие от printf():</h3>
            <div className="flex items-center gap-2 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <p className="text-yellow-300 text-sm">
                <span className="font-bold">В scanf() перед переменными обязательно ставится символ & (амперсанд)!</span>
              </p>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-green-300 text-sm">
{`// Правильно:
int number;
scanf("%d", &number);

// Неправильно:
int number;
scanf("%d", number); // ОШИБКА!`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-red-300 text-sm">
{`// Почему нужен &?
// &number — это "адрес" переменной в памяти
// scanf() записывает значение по этому адресу`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Спецификаторы в scanf() */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-blue-400" />
          Спецификаторы формата в scanf()
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Спецификаторы в <code className="bg-gray-700 px-1.5 py-0.5 rounded">scanf()</code> почти такие же, как в <code className="bg-gray-700 px-1.5 py-0.5 rounded">printf()</code>, но есть важные нюансы:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* %d для int */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">1</div>
              <h3 className="text-lg font-bold text-green-300">%d — для целых чисел (int)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Используется для ввода переменных типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code>.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>Пользователь вводит целое число</li>
                  <li>Не используйте %.2d — точность не нужна</li>
                  <li>Не забывайте & перед переменной!</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-green-300 text-sm">
{`int age;
printf("Введите ваш возраст: ");
scanf("%d", &age);
printf("Вам %d лет\\n", age);`}
                </pre>
                <div className="mt-2 p-2 bg-black rounded text-xs">
                  <p className="text-white">Пример работы:</p>
                  <p className="text-gray-300">Введите ваш возраст: <span className="text-yellow-400">25</span></p>
                  <p className="text-gray-300">Вам 25 лет</p>
                </div>
              </div>
            </div>
          </div>

          {/* %f для float */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">2</div>
              <h3 className="text-lg font-bold text-blue-300">%f — для дробных чисел (float)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Используется для ввода переменных типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">float</code>.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>Для <code className="bg-gray-700 px-1.5 py-0.5 rounded">double</code> используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">%lf</code></li>
                  <li>Пользователь может вводить числа с точкой: 3.14</li>
                  <li>Обязательно & перед переменной!</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-blue-300 text-sm">
{`float price;
printf("Введите цену: ");
scanf("%f", &price);
printf("Цена: %.2f рублей\\n", price);`}
                </pre>
                <div className="mt-2 p-2 bg-black rounded text-xs">
                  <p className="text-white">Пример работы:</p>
                  <p className="text-gray-300">Введите цену: <span className="text-yellow-400">99.99</span></p>
                  <p className="text-gray-300">Цена: 99.99 рублей</p>
                </div>
              </div>
            </div>
          </div>

          {/* %c для char */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">3</div>
              <h3 className="text-lg font-bold text-orange-300">%c — для символов (char)</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Используется для ввода переменных типа <code className="bg-gray-700 px-1.5 py-0.5 rounded">char</code>.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>Пользователь вводит один символ</li>
                  <li>Не нажимайте Enter после ввода символа (или используйте пробел)</li>
                  <li>Обязательно & перед переменной!</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-orange-300 text-sm">
{`char grade;
printf("Введите оценку: ");
scanf(" %c", &grade); // Обратите внимание на пробел перед %c
printf("Оценка: %c\\n", grade);`}
                </pre>
                <div className="mt-2 p-2 bg-black rounded text-xs">
                  <p className="text-white">Пример работы:</p>
                  <p className="text-gray-300">Введите оценку: <span className="text-yellow-400">A</span></p>
                  <p className="text-gray-300">Оценка: A</p>
                </div>
              </div>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              💡 <span className="font-medium">Совет:</span> Для %c часто ставят пробел перед %: " %c" — это помогает избежать проблем с буфером ввода.
            </div>
          </div>
        </div>
      </div>

      {/* Полный пример программы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRight className="w-5 h-5 text-purple-400" />
          Полный пример: Программа сбора информации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте создадим полноценную программу, которая собирает информацию от пользователя:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    // Объявляем переменные
    int age;
    float height;
    char name_initial;
    
    // Собираем информацию
    printf("=== Анкета ===\\n");
    printf("Введите ваш возраст: ");
    scanf("%d", &age);
    
    printf("Введите ваш рост (в см): ");
    scanf("%f", &height);
    
    printf("Введите первую букву вашего имени: ");
    scanf(" %c", &name_initial);
    
    // Выводим результаты
    printf("\\n=== Ваши данные ===\\n");
    printf("Возраст: %d лет\\n", age);
    printf("Рост: %.1f см\\n", height);
    printf("Имя начинается на: %c\\n", name_initial);
    
    return 0;
}`}
            </pre>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              💡 <span className="font-medium">Обратите внимание:</span> 
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Перед каждой переменной в scanf() стоит &</li>
                <li>Перед %c в последнем scanf() есть пробел</li>
                <li>Используются соответствующие спецификаторы для каждого типа</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* Важные особенности и ошибки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-cal6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          Важные особенности и частые ошибки
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">❌ Частые ошибки:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Забыть & перед переменной в scanf()</li>
              <li>Использовать неправильный спецификатор (%d для float)</li>
              <li>Не поставить пробел перед %c</li>
              <li>Вводить данные не в том формате (буквы вместо чисел)</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Лучшие практики:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Всегда ставить & перед переменной в scanf()</li>
              <li>Использовать поясняющие printf() перед каждым scanf()</li>
              <li>Ставить пробел перед %c: " %c"</li>
              <li>Проверять, что спецификаторы соответствуют типам переменных</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-yellow-300 text-sm">
            ⚠️ <span className="font-medium">Важно:</span> scanf() — это базовый способ ввода. В реальных программах используются более продвинутые методы, но для начала этого достаточно!
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Keyboard className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! ⌨️</h3>
            <p className="text-gray-300">
              Теперь вы умеете получать данные от пользователя с помощью scanf()! Это важный шаг к созданию интерактивных программ.
              В следующем уроке мы научимся создавать простые калькуляторы и программы с ветвлением логики.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;