// src/data/courses/go/lesson3/part1.jsx
import React from 'react';
import { Variable, Type, Hash, Text, Calculator, ToggleLeft, ArrowRightLeft } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Variable className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📦 Урок 3: Переменные и типы данных в Go</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Объявление переменных, базовые типы данных, константы</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое переменные и типы данных в Go, научиться объявлять переменные различными способами и работать с базовыми типами.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое переменные? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Variable className="w-5 h-5 text-green-400" />
          Что такое переменные?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Переменная</span> — это именованная область памяти, которая хранит значение определенного типа. Представьте переменную как коробку с этикеткой, в которой можно хранить данные.
          </p>
          <p>
            Переменные позволяют программе запоминать и изменять информацию во время выполнения. Например, вы можете хранить возраст пользователя, его имя или результат вычислений.
          </p>
        </div>

        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 flex items-start gap-2">
            <span className="font-medium">💡 Аналогия:</span>
            <span>
              Переменная — это как коробка с названием. Вы можете положить в нее что-то (значение), 
              использовать это содержимое и даже заменить его на что-то другое.
            </span>
          </p>
        </div>
      </div>

      {/* Объявление переменных с помощью var */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          Объявление переменных с помощью var
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go переменные можно объявлять с помощью ключевого слова <code className="bg-gray-700 px-1.5 py-0.5 rounded">var</code>. Это самый полный и универсальный способ объявления переменных.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3">Полный синтаксис:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300">
{`var имя_переменной тип = значение`}
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Пример:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg mt-2">
              <pre className="text-green-300">
{`var age int = 25
var name string = "Алексей"`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3">Упрощенный синтаксис:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300">
{`var имя_переменной = значение`}
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Тип определяется автоматически:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg mt-2">
              <pre className="text-green-300">
{`var age = 25        // тип int
var name = "Алексей" // тип string`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <h3 className="text-lg font-bold text-green-300 mb-3">Объявление без начального значения:</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-green-300">
{`var имя_переменной тип`}
            </pre>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Переменная получает "нулевое" значение для своего типа:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg mt-2">
            <pre className="text-green-300">
{`var age int      // значение: 0
var name string  // значение: ""
var isReady bool // значение: false`}
            </pre>
          </div>
        </div>
      </div>

      {/* Краткое объявление с := */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRightLeft className="w-5 h-5 text-yellow-400" />
          Краткое объявление с :=
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go есть более короткий способ объявления переменных — с помощью оператора <code className="bg-gray-700 px-1.5 py-0.5 rounded">:=</code>. Этот способ можно использовать только внутри функций.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <h3 className="text-lg font-bold text-yellow-300 mb-3">Синтаксис:</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-green-300">
{`имя_переменной := значение`}
            </pre>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Тип определяется автоматически, переменная объявляется и инициализируется:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg mt-2">
            <pre className="text-green-300">
{`age := 25
name := "Алексей"
isReady := true`}
            </pre>
          </div>
          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm flex items-start gap-2">
              <span className="font-medium">⚠️ Важно:</span>
              <span>
                Оператор <code className="bg-gray-700 px-1.5 py-0.5 rounded">:=</code> можно использовать только внутри функций и только при первом объявлении переменной.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Базовые типы данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-pink-400" />
          Базовые типы данных в Go
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Каждая переменная в Go имеет определенный тип, который указывает, какие значения может хранить переменная и какие операции с ней можно выполнять.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Calculator className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">Числовые типы</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-medium text-green-300">int</span> - целые числа
                <div className="bg-gray-800 p-2 rounded mt-1">
                  <code className="text-green-300">age := 25</code>
                </div>
              </li>
              <li>
                <span className="font-medium text-yellow-300">float64</span> - числа с плавающей точкой
                <div className="bg-gray-800 p-2 rounded mt-1">
                  <code className="text-green-300">price := 99.99</code>
                </div>
              </li>
              <li>
                <span className="font-medium text-purple-300">float32</span> - числа с плавающей точкой (меньшая точность)
                <div className="bg-gray-800 p-2 rounded mt-1">
                  <code className="text-green-300">temperature := float32(36.6)</code>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Text className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Текстовые типы</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-medium text-pink-300">string</span> - строки (текст)
                <div className="bg-gray-800 p-2 rounded mt-1">
                  <code className="text-green-300">name := "Алексей"</code>
                </div>
              </li>
              <li>
                <span className="font-medium text-orange-300">rune</span> - символы Unicode
                <div className="bg-gray-800 p-2 rounded mt-1">
                  <code className="text-green-300">letter := 'A'</code>
                </div>
              </li>
              <li>
                <span className="font-medium text-cyan-300">byte</span> - байты (синоним для uint8)
                <div className="bg-gray-800 p-2 rounded mt-1">
                  <code className="text-green-300">data := byte(65)</code>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <ToggleLeft className="w-6 h-6 text-red-400" />
              <h3 className="text-lg font-bold text-red-300">Логический тип</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-medium text-red-300">bool</span> - логический тип (true/false)
                <div className="bg-gray-800 p-2 rounded mt-1">
                  <code className="text-green-300">isReady := true</code>
                </div>
                <div className="bg-gray-800 p-2 rounded mt-2">
                  <code className="text-green-300">hasError := false</code>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Type className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Примеры использования</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm">
{`var age int = 30
var height float64 = 175.5
var name string = "Мария"
var isStudent bool = true
count := 42
message := "Привет, мир!"`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Константы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-orange-400" />
          Константы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-orange-300">Константы</span> — это значения, которые не могут быть изменены после объявления. Они объявляются с помощью ключевого слова <code className="bg-gray-700 px-1.5 py-0.5 rounded">const</code>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <h3 className="text-lg font-bold text-orange-300 mb-3">Объявление констант:</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-green-300">
{`const имя_константы = значение
const имя_константы тип = значение`}
            </pre>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Примеры:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg mt-2">
            <pre className="text-green-300">
{`const pi = 3.14159
const maxUsers int = 1000
const appName = "Мое приложение"`}
            </pre>
          </div>
          <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded-lg">
            <p className="text-orange-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Преимущества:</span>
              <span>
                Константы делают код более читаемым и предотвращают случайное изменение важных значений.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Объявление нескольких переменных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Variable className="w-5 h-5 text-cyan-400" />
          Объявление нескольких переменных
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go можно объявлять несколько переменных одновременно, что делает код более компактным и читаемым.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="text-lg font-bold text-cyan-300 mb-3">С помощью var:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300">
{`var (
  name string
  age  int
  height float64
)`}
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              С начальными значениями:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg mt-2">
              <pre className="text-green-300">
{`var (
  name   string = "Алексей"
  age    int    = 25
  height float64 = 175.5
)`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3">В одной строке:</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="text-green-300">
{`var name, age, height = "Алексей", 25, 175.5`}
              </pre>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              С кратким объявлением:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg mt-2">
              <pre className="text-green-300">
{`name, age, height := "Алексей", 25, 175.5`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Преобразование типов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRightLeft className="w-5 h-5 text-red-400" />
          Преобразование типов (Type Conversion)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go необходимо явно преобразовывать типы данных, когда вы хотите присвоить значение одного типа переменной другого типа.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
          <h3 className="text-lg font-bold text-red-300 mb-3">Синтаксис преобразования:</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-green-300">
{`новое_значение := тип(исходное_значение)`}
            </pre>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Примеры:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg mt-2">
            <pre className="text-green-300">
{`var age int = 25
var ageFloat float64 = float64(age)

var price float64 = 99.99
var priceInt int = int(price) // 99 (дробная часть отбрасывается)

var number string = "123"
var num int = int(number) // ❌ ОШИБКА! Нельзя напрямую преобразовать string в int`}
            </pre>
          </div>
          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm flex items-start gap-2">
              <span className="font-medium">⚠️ Важно:</span>
              <span>
                Не все типы можно преобразовывать друг в друга. Например, строку нельзя напрямую преобразовать в число.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Variable className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое переменные и типы данных в Go. Вы научились объявлять переменные с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">var</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">:=</code>, 
              работать с базовыми типами данных, создавать константы и преобразовывать типы. 
              В следующем уроке мы рассмотрим практические примеры работы с переменными и типами данных.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;