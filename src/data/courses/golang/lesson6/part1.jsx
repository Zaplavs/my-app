// src/data/courses/go/lesson6/part1.jsx
import React from 'react';
import { BookOpen, Calculator, Check, X, ArrowRight, ArrowLeft, Hash } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Calculator className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔍 Урок 6: Логические операции и сравнения в Go</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Принятие решений в программах</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить логические операции и операторы сравнения в Go: сравнения <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">==</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">!=</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{`<`}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{`>`}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">{`<=`}</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">{`>=`}</code> и логические операторы <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">&&</code> (И), <code className="bg-gray-700 px-1.5 py-0.5 rounded text-pink-300">||</code> (ИЛИ), <code className="bg-gray-700 px-1.5 py-0.5 rounded text-indigo-300">!</code> (НЕ).
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны логические операции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужны логические операции?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Представьте, что вы создаете программу для проверки возраста пользователя. Вам нужно ответить на вопросы типа:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>"Возраст пользователя <span className="font-medium">больше или равен</span> 18?"</li>
            <li>"Пользователь <span className="font-medium">не</span> ввел имя?"</li>
            <li>"Пароль <span className="font-medium">длиннее</span> 8 символов <span className="font-medium">И</span> содержит цифры?"</li>
          </ul>
          <p className="mt-3">
            Логические операции позволяют программе принимать решения и выполнять разные действия в зависимости от условий.
          </p>
        </div>
      </div>

      {/* Тип данных bool */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Check className="w-5 h-5 text-blue-400" />
          Булев тип данных (bool)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go есть специальный тип данных для логических значений — <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">bool</code>. Переменные этого типа могут иметь только два значения:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-4 h-4 text-green-400" />
              <code className="text-green-400 font-mono">true</code>
              <span className="text-sm text-gray-400">(истина)</span>
            </div>
            <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded">
              <pre><code>{`var isReady bool = true
fmt.Println(isReady)  // выводит: true`}</code></pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-2 mb-2">
              <X className="w-4 h-4 text-red-400" />
              <code className="text-red-400 font-mono">false</code>
              <span className="text-sm text-gray-400">(ложь)</span>
            </div>
            <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded">
              <pre><code>{`var isFinished bool = false
fmt.Println(isFinished)  // выводит: false`}</code></pre>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">💡 Запомните:</span> По умолчанию переменная типа <code className="bg-gray-700 px-1 rounded">bool</code> имеет значение <code className="bg-gray-700 px-1 rounded">false</code>.
          </p>
        </div>
      </div>

      {/* Операторы сравнения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          Операторы сравнения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Операторы сравнения используются для сравнения двух значений. Результат всегда <code className="bg-gray-700 px-1 rounded">true</code> или <code className="bg-gray-700 px-1 rounded">false</code>.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* Равенство */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-4 h-4 text-green-400" />
              <code className="text-green-400 font-mono">==</code>
              <span className="text-sm text-gray-400">(равно)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Примеры:</p>
                <pre className="text-green-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Println(5 == 5)    // true
fmt.Println(5 == 3)    // false
fmt.Println("hi" == "hi")  // true`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  true<br />false<br />true
                </div>
              </div>
            </div>
          </div>

          {/* Не равно */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-2 mb-2">
              <X className="w-4 h-4 text-orange-400" />
              <code className="text-orange-400 font-mono">!=</code>
              <span className="text-sm text-gray-400">(не равно)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Примеры:</p>
                <pre className="text-orange-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Println(5 != 3)    // true
fmt.Println(5 != 5)    // false
fmt.Println("a" != "b")  // true`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  true<br />false<br />true
                </div>
              </div>
            </div>
          </div>

          {/* Меньше */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-2 mb-2">
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <code className="text-cyan-400 font-mono">{'<'}</code>
              <span className="text-sm text-gray-400">(меньше)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Примеры:</p>
                <pre className="text-cyan-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Println(3 < 5)     // true
fmt.Println(5 < 3)     // false
fmt.Println(5 < 5)     // false`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  true<br />false<br />false
                </div>
              </div>
            </div>
          </div>

          {/* Больше */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-purple-400" />
              <code className="text-purple-400 font-mono">{'>'}</code>
              <span className="text-sm text-gray-400">(больше)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Примеры:</p>
                <pre className="text-purple-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Println(5 > 3)     // true
fmt.Println(3 > 5)     // false
fmt.Println(5 > 5)     // false`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  true<br />false<br />false
                </div>
              </div>
            </div>
          </div>

          {/* Меньше или равно */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-2 mb-2">
              <ArrowLeft className="w-4 h-4 text-yellow-400" />
              <code className="text-yellow-400 font-mono">{'<='}</code>
              <span className="text-sm text-gray-400">(меньше или равно)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Примеры:</p>
                <pre className="text-yellow-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Println(3 <= 5)    // true
fmt.Println(5 <= 5)    // true
fmt.Println(6 <= 5)    // false`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  true<br />true<br />false
                </div>
              </div>
            </div>
          </div>

          {/* Больше или равно */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-red-400" />
              <code className="text-red-400 font-mono">{'>='}</code>
              <span className="text-sm text-gray-400">(больше или равно)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Примеры:</p>
                <pre className="text-red-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Println(5 >= 3)    // true
fmt.Println(5 >= 5)    // true
fmt.Println(3 >= 5)    // false`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  true<br />true<br />false
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Логические операторы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-blue-400" />
          Логические операторы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Логические операторы позволяют комбинировать несколько условий. Они работают только с булевыми значениями.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* Логическое И (&&) */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-400 font-mono">&&</span>
              <span className="text-sm text-gray-400">(Логическое И)</span>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 text-sm mb-3">
              <p>
                Результат <code className="bg-gray-700 px-1 rounded text-green-300">true</code> только если <span className="font-medium">оба</span> условия истинны.
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-medium text-white mb-2">Таблица истинности И (&&):</h4>
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-gray-400">A</div>
                  <div className="text-gray-400">B</div>
                  <div className="text-blue-400">A && B</div>
                </div>
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-red-400">false</div>
                  <div className="text-red-400">false</div>
                  <div className="text-red-400">false</div>
                </div>
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-red-400">false</div>
                  <div className="text-green-400">true</div>
                  <div className="text-red-400">false</div>
                </div>
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-green-400">true</div>
                  <div className="text-green-400">true</div>
                  <div className="text-green-400">true</div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-400 mb-2">Пример:</p>
              <pre className="text-blue-300 text-sm bg-gray-800 p-2 rounded">
                <code>{`var age = 20
var hasLicense = true
canDrive := age >= 18 && hasLicense  // true`}</code>
              </pre>
            </div>
          </div>

          {/* Логическое ИЛИ (||) */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-pink-400 font-mono">||</span>
              <span className="text-sm text-gray-400">(Логическое ИЛИ)</span>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 text-sm mb-3">
              <p>
                Результат <code className="bg-gray-700 px-1 rounded text-green-300">true</code> если <span className="font-medium">хотя бы одно</span> условие истинно.
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-medium text-white mb-2">Таблица истинности ИЛИ (||):</h4>
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-gray-400">A</div>
                  <div className="text-gray-400">B</div>
                  <div className="text-pink-400">A || B</div>
                </div>
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-red-400">false</div>
                  <div className="text-red-400">false</div>
                  <div className="text-red-400">false</div>
                </div>
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-red-400">false</div>
                  <div className="text-green-400">true</div>
                  <div className="text-green-400">true</div>
                </div>
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-green-400">true</div>
                  <div className="text-green-400">true</div>
                  <div className="text-green-400">true</div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-400 mb-2">Пример:</p>
              <pre className="text-pink-300 text-sm bg-gray-800 p-2 rounded">
                <code>{`var isWeekend = true
var isHoliday = false
canSleepIn := isWeekend || isHoliday  // true`}</code>
              </pre>
            </div>
          </div>

          {/* Логическое НЕ (!) */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-indigo-400 font-mono">!</span>
              <span className="text-sm text-gray-400">(Логическое НЕ)</span>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 text-sm mb-3">
              <p>
                Меняет значение на противоположное: <code className="bg-gray-700 px-1 rounded text-green-300">true</code> становится <code className="bg-gray-700 px-1 rounded text-red-300">false</code> и наоборот.
              </p>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-medium text-white mb-2">Таблица истинности НЕ (!):</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-gray-400">A</div>
                  <div className="text-indigo-400">!A</div>
                </div>
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-red-400">false</div>
                  <div className="text-green-400">true</div>
                </div>
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="text-green-400">true</div>
                  <div className="text-red-400">false</div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-400 mb-2">Пример:</p>
              <pre className="text-indigo-300 text-sm bg-gray-800 p-2 rounded">
                <code>{`var isRaining = false
needUmbrella := !isRaining  // true`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Приоритет логических операций */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-yellow-400" />
          Приоритет логических операций
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Как и в арифметике, логические операции выполняются в определенном порядке:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
          <h3 className="font-bold text-white mb-3">Порядок приоритета (от высшего к низшему):</h3>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li><span className="font-medium">Сравнения:</span> <code className="bg-gray-700 px-1 rounded">==</code>, <code className="bg-gray-700 px-1 rounded">!=</code>, <code className="bg-gray-700 px-1 rounded">{'<'}</code>, <code className="bg-gray-700 px-1 rounded">{'>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<='}</code>, <code className="bg-gray-700 px-1 rounded">{'>='}</code></li>
            <li><span className="font-medium">Логическое НЕ:</span> <code className="bg-gray-700 px-1 rounded">!</code></li>
            <li><span className="font-medium">Логическое И:</span> <code className="bg-gray-700 px-1 rounded">&&</code></li>
            <li><span className="font-medium">Логическое ИЛИ:</span> <code className="bg-gray-700 px-1 rounded">||</code></li>
          </ol>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Без скобок (приоритет сравнений выше):</p>
            <pre className="text-green-300 text-sm bg-gray-800 p-2 rounded">
              <code>{`result := 5 > 3 && 2 < 4
// 1. 5 > 3 = true
// 2. 2 < 4 = true  
// 3. true && true = true`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Со скобками (приоритет скобок выше):</p>
            <pre className="text-purple-300 text-sm bg-gray-800 p-2 rounded">
              <code>{`result := !(5 > 3) || 2 < 4
// 1. 5 > 3 = true
// 2. !(true) = false
// 3. 2 < 4 = true
// 4. false || true = true`}</code>
            </pre>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Совет:</span>
            <span>
              Используйте скобки <code className="bg-gray-700 px-1 rounded">()</code> для явного указания порядка операций и повышения читаемости кода.
            </span>
          </p>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Практические примеры использования
        </h2>

        <div className="mt-6 space-y-6">
          {/* Пример 1: Проверка возраста */}
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="font-bold text-white mb-2">Проверка возраста для доступа:</h3>
            <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`package main

import "fmt"

func main() {
    var age int
    fmt.Print("Введите ваш возраст: ")
    fmt.Scanln(&age)
    
    if age >= 18 {
        fmt.Println("Доступ разрешен")
    } else {
        fmt.Println("Доступ запрещен")
    }
}`}</code>
            </pre>
          </div>

          {/* Пример 2: Сложные условия */}
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="font-bold text-white mb-2">Проверка условий для скидки:</h3>
            <pre className="text-blue-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`var totalPrice = 1500.0
var isMember = true
var hasCoupon = true

// Скидка, если покупка больше 1000 И (пользователь участник ИЛИ есть купон)
discount := totalPrice > 1000 && (isMember || hasCoupon)

fmt.Printf("Положена ли скидка: %t\\n", discount)`}</code>
            </pre>
            <div className="mt-2 text-gray-300 text-sm bg-gray-800 p-2 rounded">
              {`Результат: true (покупка > 1000 и есть хотя бы одно условие)`}
            </div>
          </div>

          {/* Пример 3: Проверка пароля */}
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="font-bold text-white mb-2">Проверка надежности пароля:</h3>
            <pre className="text-purple-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`var password = "mypassword123"
var lengthOk = len(password) >= 8
var hasDigit = strings.ContainsAny(password, "0123456789")

// Пароль надежный, если длинный И содержит цифры
isStrong := lengthOk && hasDigit

fmt.Printf("Пароль надежный: %t\\n", isStrong)`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <BookOpen className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете все основные логические операции и операторы сравнения в Go. Вы научились использовать операторы сравнения <code className="bg-gray-700 px-1 rounded">==</code>, <code className="bg-gray-700 px-1 rounded">!=</code>, <code className="bg-gray-700 px-1 rounded">{'<'}</code>, <code className="bg-gray-700 px-1 rounded">{'>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<='}</code>, <code className="bg-gray-700 px-1 rounded">{'>='}</code> и логические операторы <code className="bg-gray-700 px-1 rounded">&&</code> (И), <code className="bg-gray-700 px-1 rounded">||</code> (ИЛИ), <code className="bg-gray-700 px-1 rounded">!</code> (НЕ). Эти знания необходимы для создания условных конструкций и принятия решений в программах. В следующих частях урока мы закрепим эти знания на практике.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;