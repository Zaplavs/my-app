// src/data/courses/c/lesson10/part1.jsx
import React from 'react';
import { Database, Hash, Play, List, Zap, Grid } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Database className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🗄️ Урок 10: Массивы — списки данных одного типа</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как хранить множество значений в одной переменной</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться создавать и использовать массивы для хранения множества значений одного типа.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое массив? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Grid className="w-5 h-5 text-green-400" />
          Что такое массив?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Массив</span> — это структура данных, которая позволяет хранить несколько значений <span className="font-medium">одного типа</span> в одной переменной.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Массив — как ящик с отделениями для инструментов. 
              Каждое отделение пронумеровано, и в каждом можно хранить только один инструмент одного типа.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Без массивов:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int age1 = 25;<br/>int age2 = 30;<br/>int age3 = 22;<br/>int age4 = 35;<br/>int age5 = 28;</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Много отдельных переменных</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">С массивами:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>{`int ages[5] = {25, 30, 22, 35, 28};<br/>printf("%d\\n", ages[0]); // 25`}</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Одна переменная хранит все значения</p>
            </div>
          </div>
        </div>
      </div>

      {/* Создание и инициализация массивов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <List className="w-5 h-5 text-purple-400" />
          Создание и инициализация массивов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Массивы создаются по определенным правилам:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Общая структура массива:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300 text-center text-lg">
                <code>тип имя[размер];</code>
              </pre>
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">тип</p>
                <p className="text-gray-300">Тип данных всех элементов (int, float, char и т.д.)</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">имя</p>
                <p className="text-gray-300">Имя массива (следует правилам именования переменных)</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">размер</p>
                <p className="text-gray-300">Количество элементов в массиве (целое число)</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Способы инициализации массивов:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-cyan-300 font-medium mb-2">1. Полная инициализация:</h4>
                <pre className="text-blue-300 text-sm">
{`int ages[5] = {25, 30, 22, 35, 28};`}
                </pre>
                <p className="text-gray-400 text-xs mt-1">Все значения задаются при создании</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-cyan-300 font-medium mb-2">2. Частичная инициализация:</h4>
                <pre className="text-blue-300 text-sm">
{`int numbers[10] = {1, 2, 3};`}
                </pre>
                <p className="text-gray-400 text-xs mt-1">Первые 3 элемента = 1,2,3, остальные = 0</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-cyan-300 font-medium mb-2">3. Без инициализации:</h4>
                <pre className="text-blue-300 text-sm">
{`int scores[5];  // Массив из 5 элементов, значения не определены`}
                </pre>
                <p className="text-gray-400 text-xs mt-1">Элементы содержат "мусорные" значения</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-cyan-300 font-medium mb-2">4. Автоматическое определение размера:</h4>
                <pre className="text-blue-300 text-sm">
{`int primes[] = {2, 3, 5, 7, 11};  // Размер = 5`}
                </pre>
                <p className="text-gray-400 text-xs mt-1">Размер определяется по количеству элементов</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Индексация массивов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-orange-400" />
          Индексация массивов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            К каждому элементу массива можно получить доступ по его <span className="font-medium text-orange-300">индексу</span> (номеру позиции).
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Важные особенности:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><span className="font-medium">Индексация начинается с 0</span> — первый элемент имеет индекс 0</li>
              <li><span className="font-medium">Последний элемент</span> имеет индекс (размер - 1)</li>
              <li><span className="font-medium">Доступ</span> к элементу: <code className="bg-gray-700 px-1.5 py-0.5 rounded">имя[индекс]</code></li>
              <li><span className="font-medium">Выход за границы</span> массива — ошибка, может привести к сбою!</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Пример индексации:</h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-green-300 text-sm">
{`int ages[5] = {25, 30, 22, 35, 28};
// Индексы:    0   1   2   3   4

printf("Первый: %d\\n", ages[0]);  // 25
printf("Третий: %d\\n", ages[2]);  // 22
printf("Последний: %d\\n", ages[4]); // 28

ages[1] = 33;  // Изменяем второй элемент
printf("Новый второй: %d\\n", ages[1]); // 33`}
              </pre>
            </div>
            <div className="mt-3 p-2 bg-black rounded text-xs">
              <p className="text-white">Визуализация:</p>
              <p className="text-gray-300">
                [25][30][22][35][28]<br/>
                [&nbsp;0&nbsp;][&nbsp;1&nbsp;][&nbsp;2&nbsp;][&nbsp;3&nbsp;][&nbsp;4&nbsp;]
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-red-900/20 border border-red-700/30 rounded-lg">
          <p className="text-red-300 text-sm">
            ⚠️ <span className="font-medium">Опасно:</span> ages[5] — выход за границы массива! 
            Массив из 5 элементов имеет индексы от 0 до 4!
          </p>
        </div>
      </div>

      {/* Работа с массивами в циклах */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-cyan-400" />
          Работа с массивами в циклах
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Циклы позволяют эффективно обрабатывать все элементы массива:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Цикл for для обработки массива:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-sm">
{`#include <stdio.h>

int main() {
    int scores[5] = {85, 92, 78, 96, 88};
    
    printf("Оценки студентов:\\n");
    
    // Проходим по всем элементам массива
    for (int i = 0; i < 5; i++) {
        printf("Студент %d: %d баллов\\n", i + 1, scores[i]);
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Вывод:</p>
              <p className="text-gray-300">
                Оценки студентов:<br/>
                Студент 1: 85 баллов<br/>
                Студент 2: 92 баллов<br/>
                Студент 3: 78 баллов<br/>
                Студент 4: 96 баллов<br/>
                Студент 5: 88 баллов
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Полезные операции с массивами:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-green-300 font-medium mb-2">Сумма элементов:</h4>
                <pre className="text-green-300 text-xs">
{`int numbers[5] = {10, 20, 30, 40, 50};
int sum = 0;

for (int i = 0; i < 5; i++) {
    sum += numbers[i];
}

printf("Сумма: %d\\n", sum); // 150`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="text-blue-300 font-medium mb-2">Поиск максимального:</h4>
                <pre className="text-blue-300 text-xs">
{`int values[5] = {15, 42, 8, 91, 23};
int max = values[0];

for (int i = 1; i < 5; i++) {
    if (values[i] > max) {
        max = values[i];
    }
}

printf("Максимум: %d\\n", max); // 91`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Разные типы массивов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-yellow-400" />
          Разные типы массивов
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">int</span>
              Массивы целых чисел
            </h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-green-300 text-sm">
{`int ages[4] = {25, 30, 22, 35};
int count[10] = {0};  // Все элементы = 0`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">float</span>
              Массивы дробных чисел
            </h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-blue-300 text-sm">
{`float prices[3] = {19.99, 25.50, 12.75};
float temperatures[7];  // Неинициализированный массив`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">char</span>
              Массивы символов
            </h3>
            <div className="bg-gray-800 p-3 rounded">
              <pre className="text-orange-300 text-sm">
{`char grades[5] = {'A', 'B', 'C', 'A', 'D'};
char letters[] = {'H', 'e', 'l', 'l', 'o'};`}
              </pre>
            </div>
            <div className="mt-2 p-2 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-xs">
              💡 <span className="font-medium">Заметка:</span> Массивы char — основа для строк в C!
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-red-400" />
          Практический пример: Статистика продаж
        </h2>
        <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-red-300 text-sm">
{`#include <stdio.h>

int main() {
    // Продажи за 7 дней недели
    int sales[7] = {120, 150, 95, 200, 175, 180, 140};
    char days[7][10] = {"Понедельник", "Вторник", "Среда", 
                        "Четверг", "Пятница", "Суббота", "Воскресенье"};
    
    int total = 0;
    int max_sales = sales[0];
    int max_day = 0;
    
    printf("=== СТАТИСТИКА ПРОДАЖ ===\\n");
    
    // Вывод продаж по дням
    for (int i = 0; i < 7; i++) {
        printf("%-12s: %d единиц\\n", days[i], sales[i]);
        total += sales[i];
        
        if (sales[i] > max_sales) {
            max_sales = sales[i];
            max_day = i;
        }
    }
    
    printf("\\nОбщие продажи: %d единиц\\n", total);
    printf("Средние продажи: %.1f единиц\\n", (float)total / 7);
    printf("Лучший день: %s (%d единиц)\\n", days[max_day], max_sales);
    
    return 0;
}`}
            </pre>
          </div>
          <div className="mt-4 p-3 bg-black rounded text-sm">
            <p className="text-white">Пример вывода:</p>
            <p className="text-gray-300 text-xs">
              === СТАТИСТИКА ПРОДАЖ ===<br/>
              Понедельник : 120 единиц<br/>
              Вторник     : 150 единиц<br/>
              Среда       : 95 единиц<br/>
              Четверг     : 200 единиц<br/>
              Пятница     : 175 единиц<br/>
              Суббота     : 180 единиц<br/>
              Воскресенье : 140 единиц<br/>
              <br/>
              Общие продажи: 1060 единиц<br/>
              Средние продажи: 151.4 единиц<br/>
              Лучший день: Четверг (200 единиц)
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🗄️</h3>
            <p className="text-gray-300">
              Теперь вы умеете работать с массивами — мощным инструментом для хранения и обработки множества однотипных данных. 
              Массивы позволяют эффективно организовывать данные и использовать циклы для их обработки.
              В следующем уроке мы научимся работать со строками как с массивами символов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;