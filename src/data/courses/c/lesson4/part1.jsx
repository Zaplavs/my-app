// src/data/courses/c/lesson4/part1.jsx
import React from 'react';
import { Database, Type, Hash, Percent, Square, AlertTriangle } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💾 Урок 4: Переменные и типы данных в C</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как хранить и работать с информацией</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое переменные, зачем нужны разные типы данных и как их правильно использовать.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое переменная? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-green-400" />
          Что такое переменная?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Переменная</span> — это именованная область памяти, где можно хранить данные и изменять их значение во время работы программы.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Представьте:</span> Переменная — как коробка с этикеткой. У коробки есть имя (например, "возраст"), а внутри лежит значение (например, 25).
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Без переменных:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>printf("Мне 25 лет");</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Значение "25" зашито в код</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">С переменными:</h4>
              <pre className="text-gray-300 text-sm bg-black p-2 rounded">
                <code>int age = 25;<br/>printf("Мне %d лет", age);</code>
              </pre>
              <p className="text-gray-400 text-xs mt-1">Значение можно менять</p>
            </div>
          </div>
        </div>
      </div>

      {/* Основные типы данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-purple-400" />
          Основные типы данных в C
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В языке C каждый тип данных занимает определенное количество памяти и может хранить только определенный диапазон значений.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* int */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Hash className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">int — целые числа</h3>
              <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">4 байта</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Используется для хранения целых чисел (без дробной части).
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>Диапазон: от -2,147,483,648 до 2,147,483,647</li>
                  <li>Примеры: 0, -5, 100, 2024</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-green-300 text-sm">
{`int age = 25;
int temperature = -10;
int year = 2024;`}
                </pre>
              </div>
            </div>
          </div>

          {/* float */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Percent className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">float — дробные числа</h3>
              <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">4 байта</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Используется для хранения чисел с плавающей точкой (дробных).
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>Точность: ~6-7 знаков после запятой</li>
                  <li>Примеры: 3.14, -2.5, 0.001</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-blue-300 text-sm">
{`float price = 99.99;
float pi = 3.14159;
float weight = 68.5;`}
                </pre>
              </div>
            </div>
          </div>

          {/* double */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Square className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">double — точные дробные числа</h3>
              <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">8 байт</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Более точная версия float для хранения дробных чисел.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>Точность: ~15-16 знаков после запятой</li>
                  <li>Используется, когда нужна высокая точность</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-purple-300 text-sm">
{`double precise_pi = 3.141592653589793;
double salary = 150000.75;
double scientific = 1.23e-4;`}
                </pre>
              </div>
            </div>
          </div>

          {/* char */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Type className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">char — символы</h3>
              <span className="text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded">1 байт</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 mb-2">
                  Используется для хранения одного символа.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li>Символы заключаются в одинарные кавычки</li>
                  <li>Примеры: 'A', 'z', '5', '@'</li>
                  <li>Может хранить ASCII-код символа (0-127)</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-orange-300 text-sm">
{`char grade = 'A';
char initial = 'J';
char digit = '7';
char symbol = '#';`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Как объявлять переменные */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Как объявлять переменные?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Объявление переменной состоит из трех частей:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Формат объявления:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-cyan-300 text-center text-lg">
                <code>тип имя_переменной = значение;</code>
              </pre>
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">тип</p>
                <p className="text-gray-300">int, float, char, double</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">имя_переменной</p>
                <p className="text-gray-300">любое допустимое имя</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="font-medium text-white mb-1">значение</p>
                <p className="text-gray-300">начальное значение (опционально)</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Примеры объявления:</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-green-300 text-sm">
{`// Объявление с инициализацией
int age = 25;
float height = 175.5;
char gender = 'M';

// Объявление без инициализации
int score;
float temperature;
char letter;`}
                </pre>
              </div>
              <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Всегда инициализируйте переменные при объявлении, чтобы избежать неожиданных значений!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Важные правила именования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          Правила именования переменных
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Разрешено:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Начинать с буквы или символа подчеркивания</li>
              <li>Использовать буквы, цифры и подчеркивания</li>
              <li>Использовать осмысленные имена: <code className="bg-gray-700 px-1.5 py-0.5 rounded">age</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">student_name</code></li>
              <li>Примеры: <code className="bg-gray-700 px-1.5 py-0.5 rounded">count</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">_temp</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">userAge2024</code></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">❌ Запрещено:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Начинать с цифры</li>
              <li>Использовать пробелы</li>
              <li>Использовать специальные символы: <code className="bg-gray-700 px-1.5 py-0.5 rounded">@ # $ %</code> и т.д.</li>
              <li>Использовать зарезервированные слова: <code className="bg-gray-700 px-1.5 py-0.5 rounded">int</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">float</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">return</code></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-yellow-300 text-sm">
            ⚠️ <span className="font-medium">Важно:</span> Имена переменных чувствительны к регистру! <code className="bg-gray-700 px-1.5 py-0.5 rounded">Age</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">age</code> — это разные переменные.
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 💾</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое переменные и какие основные типы данных существуют в C. Вы понимаете, как объявлять переменные и какие правила нужно соблюдать при их именовании.
              В следующем уроке мы научимся выводить значения переменных и работать с ними в программах.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;