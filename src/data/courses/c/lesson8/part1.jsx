// src/data/courses/c/lesson8/part1.jsx
import React from 'react';
import { RotateCcw, Repeat, ArrowRight, Zap, RefreshCw, Play } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Repeat className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔄 Урок 8: Циклы while и for</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как заставить программу повторять действия</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться использовать циклы для многократного выполнения кода.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое циклы? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RefreshCw className="w-5 h-5 text-green-400" />
          Что такое циклы?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Циклы</span> — это конструкции в программировании, которые позволяют выполнять один и тот же код несколько раз подряд.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Циклы — как конвейер на заводе. Одна и та же операция выполняется снова и снова для разных деталей.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Без циклов:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>printf("1\\n");<br/>printf("2\\n");<br/>printf("3\\n");<br/>printf("4\\n");<br/>printf("5\\n");</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Повторяем код вручную</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">С циклами:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>{`for (int i = 1; i <= 5; i++) {"{"}<br/>&nbsp;&nbsp;printf("%d\\n", i);<br/>{"}"}`}</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Один код выполняется 5 раз</p>
            </div>
          </div>
        </div>
      </div>

      {/* Цикл while */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCcw className="w-5 h-5 text-blue-400" />
          Цикл while (пока)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цикл <code className="bg-gray-700 px-1.5 py-0.5 rounded">while</code> выполняет код пока условие истинно (равно 1 или true).
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Структура цикла while:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300 text-center text-lg">
                <code>while (условие) {"{"}<br/>&nbsp;&nbsp;// код, который повторяется<br/>{"}"}</code>
              </pre>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">условие</p>
                <p className="text-gray-300">Логическое выражение, которое проверяется перед каждой итерацией</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">тело цикла</p>
                <p className="text-gray-300">Код в фигурных скобках, который выполняется, пока условие истинно</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Простой пример while:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-blue-300 text-sm">
{`#include <stdio.h>

int main() {
    int i = 1;  // начальное значение
    
    while (i <= 5) {  // условие продолжения
        printf("%d. Продолжаем борьбу!\\n", i);
        i++;  // изменение счетчика (очень важно!)
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded">
              <p className="text-white text-sm">Вывод:</p>
              <p className="text-gray-300 text-sm">
                1. Продолжаем борьбу!<br/>
                2. Продолжаем борьбу!<br/>
                3. Продолжаем борьбу!<br/>
                4. Продолжаем борьбу!<br/>
                5. Продолжаем борьбу!
              </p>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              💡 <span className="font-medium">Важно:</span> Не забывайте изменять переменную в цикле (i++), иначе цикл будет бесконечным!
            </div>
          </div>
        </div>
      </div>

      {/* Цикл for */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRight className="w-5 h-5 text-purple-400" />
          Цикл for (для)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цикл <code className="bg-gray-700 px-1.5 py-0.5 rounded">for</code> — это более компактная форма цикла, где все элементы управления собраны в одной строке.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Структура цикла for:</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-purple-300 text-center text-lg">
              <code>for (инициализация; условие; изменение) {"{"}<br/>&nbsp;&nbsp;// код, который повторяется<br/>{"}"}</code>
            </pre>
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
            <div className="bg-gray-800/50 p-3 rounded">
              <p className="font-medium text-white mb-1">инициализация</p>
              <p className="text-gray-300">Устанавливается начальное значение (выполняется 1 раз)</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded">
              <p className="font-medium text-white mb-1">условие</p>
              <p className="text-gray-300">Проверяется перед каждой итерацией</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded">
              <p className="font-medium text-white mb-1">изменение</p>
              <p className="text-gray-300">Выполняется после каждой итерации</p>
            </div>
          </div>
          <div className="mt-4 bg-gray-800 p-4 rounded-lg">
            <pre className="text-purple-300 text-sm">
{`#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d. Продолжаем борьбу!\\n", i);
    }
    
    return 0;
}`}
            </pre>
          </div>
          <div className="mt-3 p-3 bg-black rounded">
            <p className="text-white text-sm">Вывод:</p>
            <p className="text-gray-300 text-sm">
              1. Продолжаем борьбу!<br/>
              2. Продолжаем борьбу!<br/>
              3. Продолжаем борьбу!<br/>
              4. Продолжаем борьбу!<br/>
              5. Продолжаем борьбу!
            </p>
          </div>
          <div className="mt-3 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
            💡 <span className="font-medium">Преимущество:</span> Всё управление циклом в одной строке — удобно и читаемо!
          </div>
        </div>
      </div>

      {/* Сравнение while и for */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-cyan-400" />
          Сравнение while и for
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              while
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Условие проверяется в начале</li>
              <li>Инициализация переменной до цикла</li>
              <li>Изменение переменной внутри тела цикла</li>
              <li>Удобен, когда неизвестно количество итераций</li>
              <li>Более гибкий, но требует внимания</li>
            </ul>
            <div className="mt-3 bg-gray-800 p-2 rounded">
              <pre className="text-green-300 text-xs">
{`int i = 1;
while (i <= 5) {
    printf("%d\\n", i);
    i++;
}`}
              </pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              for
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Все элементы управления в одной строке</li>
              <li>Инициализация, условие и изменение в заголовке</li>
              <li>Более компактный и читаемый код</li>
              <li>Удобен, когда известно количество итераций</li>
              <li>Меньше шансов забыть изменить переменную</li>
            </ul>
            <div className="mt-3 bg-gray-800 p-2 rounded">
              <pre className="text-blue-300 text-xs">
{`for (int i = 1; i <= 5; i++) {
    printf("%d\\n", i);
}`}
              </pre>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-yellow-300 text-sm">
            ⚠️ <span className="font-medium">Важно:</span> Оба цикла делают одно и то же! Выбор зависит от ситуации и ваших предпочтений. 
            Для простых счетных циклов чаще используют <code className="bg-gray-700 px-1.5 py-0.5 rounded">for</code>, 
            для условных циклов — <code className="bg-gray-700 px-1.5 py-0.5 rounded">while</code>.
          </p>
        </div>
      </div>

      {/* Бесконечные циклы и как их избежать */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RefreshCw className="w-5 h-5 text-red-400" />
          Бесконечные циклы и как их избежать
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Бесконечный цикл — это цикл, который никогда не заканчивается. Это частая ошибка новичков.
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">❌ Опасные примеры:</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-red-300 text-sm">
{`// Забыли изменить переменную
int i = 1;
while (i <= 5) {
    printf("%d\\n", i);
    // i++ забыли! Цикл бесконечный!
}`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-red-300 text-sm">
{`// Неверное условие
for (int i = 1; i >= 0; i++) {
    printf("%d\\n", i);
    // i всегда >= 0, цикл бесконечный!
}`}
                </pre>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Правильные примеры:</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-green-300 text-sm">
{`// Правильно: изменяем переменную
int i = 1;
while (i <= 5) {
    printf("%d\\n", i);
    i++; // Не забываем!
}`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-green-300 text-sm">
{`// Правильно: верное условие
for (int i = 1; i <= 5; i++) {
    printf("%d\\n", i);
    // Всё правильно!
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            💡 <span className="font-medium">Совет:</span> Если программа "зависает" — скорее всего, это бесконечный цикл. 
            Нажмите Ctrl+C в терминале, чтобы остановить программу, и проверьте условия циклов!
          </p>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Практические примеры использования циклов
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Таблица умножения:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-orange-300 text-sm">
{`#include <stdio.h>

int main() {
    int number = 7;
    
    printf("Таблица умножения для %d:\\n", number);
    
    for (int i = 1; i <= 10; i++) {
        printf("%d × %d = %d\\n", number, i, number * i);
    }
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Вывод:</p>
              <p className="text-gray-300">
                Таблица умножения для 7:<br/>
                7 × 1 = 7<br/>
                7 × 2 = 14<br/>
                7 × 3 = 21<br/>
                ...<br/>
                7 × 10 = 70
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Сумма чисел:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-sm">
{`#include <stdio.h>

int main() {
    int sum = 0;
    int n = 5;
    
    printf("Сумма чисел от 1 до %d:\\n", n);
    
    for (int i = 1; i <= n; i++) {
        sum += i;  // добавляем i к сумме
        printf("Текущая сумма: %d\\n", sum);
    }
    
    printf("Итоговая сумма: %d\\n", sum);
    
    return 0;
}`}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-black rounded text-sm">
              <p className="text-white">Вывод:</p>
              <p className="text-gray-300">
                Сумма чисел от 1 до 5:<br/>
                Текущая сумма: 1<br/>
                Текущая сумма: 3<br/>
                Текущая сумма: 6<br/>
                Текущая сумма: 10<br/>
                Текущая сумма: 15<br/>
                Итоговая сумма: 15
              </p>
            </div>
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
            <h3 className="font-bold text-white mb-2">Отлично! 🔄</h3>
            <p className="text-gray-300">
              Теперь вы умеете заставлять программы повторять действия с помощью циклов! Это мощный инструмент для автоматизации повторяющихся задач.
              В следующем уроке мы научимся работать с массивами — структурами для хранения множества значений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;