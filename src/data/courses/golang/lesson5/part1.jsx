// src/data/courses/go/lesson5/part1.jsx
import React from 'react';
import { Hash, Pilcrow, CornerDownLeft, Minus, BookOpen, Calculator, Divide, Percent } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔢 Урок 5: Арифметические операции в Go</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Математические вычисления и операции</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить основные арифметические операции в Go: сложение <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">+</code>, вычитание <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">-</code>, умножение <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">*</code>, деление <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">/</code> и остаток от деления <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">%</code>, а также понять приоритет операций и особенности работы с разными числовыми типами.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны арифметические операции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужны арифметические операции?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Арифметические операции — основа математических вычислений в программировании. Без них невозможно создать даже самые простые программы.
          </p>
          <p>
            Арифметические операции важны для:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Математических расчетов</span> — вычисление площадей, объемов, расстояний и т.д.</li>
            <li><span className="font-medium">Финансовых программ</span> — расчет зарплат, налогов, процентов по вкладам.</li>
            <li><span className="font-medium">Игровой логики</span> — подсчет очков, уровней, характеристик персонажей.</li>
            <li><span className="font-medium">Алгоритмов</span> — сортировки, поиска, обработки данных.</li>
            <li><span className="font-medium">Научных вычислений</span> — физика, статистика, инженерные расчеты.</li>
          </ul>
        </div>
      </div>

      {/* Основные арифметические операции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-purple-400" />
          Основные арифметические операции
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Go поддерживает все основные математические операции. Давайте рассмотрим каждую из них подробно.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* Сложение */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Plus className="w-4 h-4 text-green-400" />
              <code className="text-green-400 font-mono">+</code>
              <span className="text-sm text-gray-400">(Сложение)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Пример:</p>
                <pre className="text-green-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`var a = 10
var b = 5
result := a + b  // result = 15`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  15
                </div>
              </div>
            </div>
          </div>

          {/* Вычитание */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Minus className="w-4 h-4 text-orange-400" />
              <code className="text-orange-400 font-mono">-</code>
              <span className="text-sm text-gray-400">(Вычитание)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Пример:</p>
                <pre className="text-orange-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`var a = 10
var b = 5
result := a - b  // result = 5`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  5
                </div>
              </div>
            </div>
          </div>

          {/* Умножение */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-2 mb-2">
              <X className="w-4 h-4 text-purple-400" />
              <code className="text-purple-400 font-mono">*</code>
              <span className="text-sm text-gray-400">(Умножение)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Пример:</p>
                <pre className="text-purple-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`var a = 10
var b = 5
result := a * b  // result = 50`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  50
                </div>
              </div>
            </div>
          </div>

          {/* Деление */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Divide className="w-4 h-4 text-cyan-400" />
              <code className="text-cyan-400 font-mono">/</code>
              <span className="text-sm text-gray-400">(Деление)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Пример:</p>
                <pre className="text-cyan-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`var a = 10
var b = 5
result := a / b  // result = 2`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  2
                </div>
              </div>
            </div>
          </div>

          {/* Остаток от деления */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-4 h-4 text-yellow-400" />
              <code className="text-yellow-400 font-mono">%</code>
              <span className="text-sm text-gray-400">(Остаток от деления)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Пример:</p>
                <pre className="text-yellow-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`var a = 10
var b = 3
result := a % b  // result = 1`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  1
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  10 ÷ 3 = 3 (остаток 1)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Унарные операции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Plus className="w-5 h-5 text-blue-400" />
          Унарные операции
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Унарные операции применяются к одному операнду. В Go есть две унарные операции:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* Унарный плюс */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Plus className="w-4 h-4 text-green-400" />
              <code className="text-green-400 font-mono">+</code>
              <span className="text-sm text-gray-400">(Унарный плюс)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Пример:</p>
                <pre className="text-green-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`var a = -5
result := +a  // result = -5`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  -5
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Унарный плюс не изменяет значение
                </p>
              </div>
            </div>
          </div>

          {/* Унарный минус */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Minus className="w-4 h-4 text-red-400" />
              <code className="text-red-400 font-mono">-</code>
              <span className="text-sm text-gray-400">(Унарный минус)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Пример:</p>
                <pre className="text-red-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`var a = 5
result := -a  // result = -5`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  -5
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Унарный минус меняет знак числа
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Приоритет операций */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-yellow-400" />
          Приоритет операций
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В выражениях с несколькими операциями Go следует стандартному математическому приоритету операций:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-white mb-3">Порядок приоритета (от высшего к низшему):</h3>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li><span className="font-medium">Унарные операции:</span> <code className="bg-gray-700 px-1 rounded">+</code>, <code className="bg-gray-700 px-1 rounded">-</code></li>
              <li><span className="font-medium">Умножение, деление, остаток:</span> <code className="bg-gray-700 px-1 rounded">*</code>, <code className="bg-gray-700 px-1 rounded">/</code>, <code className="bg-gray-700 px-1 rounded">%</code></li>
              <li><span className="font-medium">Сложение, вычитание:</span> <code className="bg-gray-700 px-1 rounded">+</code>, <code className="bg-gray-700 px-1 rounded">-</code></li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Без скобок (приоритет умножения выше):</p>
              <pre className="text-blue-300 text-sm bg-gray-800 p-2 rounded">
                <code>{`result := 10 + 5 * 2  // 10 + 10 = 20`}</code>
              </pre>
              <div className="text-gray-300 text-sm mt-1">
                Результат: 20
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Со скобками (приоритет скобок выше):</p>
              <pre className="text-purple-300 text-sm bg-gray-800 p-2 rounded">
                <code>{`result := (10 + 5) * 2  // 15 * 2 = 30`}</code>
              </pre>
              <div className="text-gray-300 text-sm mt-1">
                Результат: 30
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-900/50 rounded-lg">
            <h4 className="font-bold text-white mb-2">Сложный пример:</h4>
            <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`result := 20 - 5 * 2 + 10 / 2
// 1. 5 * 2 = 10
// 2. 10 / 2 = 5
// 3. 20 - 10 = 10
// 4. 10 + 5 = 15
// result = 15`}</code>
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

      {/* Целочисленное деление */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Divide className="w-5 h-5 text-orange-400" />
          Целочисленное деление
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При делении целых чисел результат всегда будет целым числом. Дробная часть отбрасывается (не округляется!).
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Целочисленное деление:</p>
            <pre className="text-orange-300 text-sm bg-gray-800 p-2 rounded">
              <code>{`var a int = 10
var b int = 3
result := a / b  // result = 3`}</code>
            </pre>
            <div className="text-gray-300 text-sm mt-2">
              10 ÷ 3 = 3.333... → результат: 3
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">Деление с плавающей точкой:</p>
            <pre className="text-cyan-300 text-sm bg-gray-800 p-2 rounded">
              <code>{`var a float64 = 10.0
var b float64 = 3.0
result := a / b  // result = 3.333...`}</code>
            </pre>
            <div className="text-gray-300 text-sm mt-2">
              10.0 ÷ 3.0 = 3.333...
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
          <p className="text-yellow-300 text-sm flex items-start gap-2">
            <span className="font-medium">⚠️ Важно:</span>
            <span>
              При делении целых чисел дробная часть полностью теряется. Используйте тип <code className="bg-gray-700 px-1 rounded">float64</code> для получения точного результата.
            </span>
          </p>
        </div>
      </div>

      {/* Остаток от деления */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Percent className="w-5 h-5 text-purple-400" />
          Остаток от деления (%)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Оператор <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">%</code> возвращает остаток от деления одного числа на другое.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Примеры остатка:</p>
              <pre className="text-purple-300 text-sm bg-gray-800 p-2 rounded">
                <code>{`10 % 3 = 1   // 10 ÷ 3 = 3 (остаток 1)
15 % 5 = 0   // 15 ÷ 5 = 3 (остаток 0)
7 % 2 = 1    // 7 ÷ 2 = 3 (остаток 1)`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Практическое применение:</p>
              <pre className="text-green-300 text-sm bg-gray-800 p-2 rounded">
                <code>{`// Проверка четности
if number % 2 == 0 {
    fmt.Println("Четное число")
}

// Проверка кратности
if year % 4 == 0 {
    fmt.Println("Високосный год")
}`}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-gray-900/50 rounded-lg">
            <h4 className="font-bold text-white mb-2">Полезные примеры:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-gray-800 p-2 rounded">
                <code className="text-purple-300">17 % 5 = 2</code>
                <div className="text-gray-400 text-xs mt-1">17 ÷ 5 = 3 (ост. 2)</div>
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <code className="text-purple-300">20 % 4 = 0</code>
                <div className="text-gray-400 text-xs mt-1">20 ÷ 4 = 5 (ост. 0)</div>
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <code className="text-purple-300">9 % 10 = 9</code>
                <div className="text-gray-400 text-xs mt-1">9 ÷ 10 = 0 (ост. 9)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">💡 Применение остатка:</span> Проверка четности, циклические операции, хэширование, распределение по группам.
          </p>
        </div>
      </div>

      {/* Работа с числами с плавающей точкой */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CornerDownLeft className="w-5 h-5 text-cyan-400" />
          Работа с числами с плавающей точкой
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Числа с плавающей точкой (<code className="bg-gray-700 px-1 rounded">float32</code> и <code className="bg-gray-700 px-1 rounded">float64</code>) позволяют выполнять точные математические вычисления с дробными частями.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Точное деление:</p>
              <pre className="text-cyan-300 text-sm bg-gray-800 p-2 rounded">
                <code>{`var a float64 = 10.0
var b float64 = 3.0
result := a / b  // result = 3.3333333333333335`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Смешанные операции:</p>
              <pre className="text-green-300 text-sm bg-gray-800 p-2 rounded">
                <code>{`var intNum int = 10
var floatNum float64 = 3.0
result := float64(intNum) / floatNum  // 3.333...`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h4 className="font-bold text-white mb-2">Особенности float64:</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Высокая точность (до 15-17 десятичных знаков)</li>
              <li>Поддержка специальных значений: <code className="bg-gray-700 px-1 rounded">NaN</code> (Not a Number), <code className="bg-gray-700 px-1 rounded">+Inf</code>, <code className="bg-gray-700 px-1 rounded">-Inf</code></li>
              <li>Может возникать погрешность округления</li>
            </ul>
          </div>

          <div className="p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">⚠️ Погрешность округления:</span> <code className="bg-gray-700 px-1 rounded">0.1 + 0.2</code> может дать <code className="bg-gray-700 px-1 rounded">0.30000000000000004</code> вместо <code className="bg-gray-700 px-1 rounded">0.3</code>
            </p>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-green-400" />
          Практический пример: Калькулятор
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте создадим простую программу-калькулятор, демонстрирующую все изученные операции:
          </p>
        </div>
        <div className="mt-4 bg-gray-900 p-4 rounded-lg">
          <pre className="text-green-300 text-sm">
            <code>{`package main

import "fmt"

func main() {
    var a, b float64
    
    fmt.Print("Введите первое число: ")
    fmt.Scanln(&a)
    
    fmt.Print("Введите второе число: ")
    fmt.Scanln(&b)
    
    // Арифметические операции
    fmt.Printf("Сложение: %.2f + %.2f = %.2f\\n", a, b, a + b)
    fmt.Printf("Вычитание: %.2f - %.2f = %.2f\\n", a, b, a - b)
    fmt.Printf("Умножение: %.2f * %.2f = %.2f\\n", a, b, a * b)
    
    if b != 0 {
        fmt.Printf("Деление: %.2f / %.2f = %.2f\\n", a, b, a / b)
        fmt.Printf("Остаток: %d %% %d = %d\\n", int(a), int(b), int(a) % int(b))
    } else {
        fmt.Println("Деление на ноль невозможно!")
    }
    
    // Унарные операции
    fmt.Printf("Унарный минус для первого числа: %.2f\\n", -a)
}`}</code>
          </pre>
        </div>
        <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
          <p className="text-gray-300 text-sm">
            <span className="font-medium">Пример работы:</span><br />
            Введите первое число: 10<br />
            Введите второе число: 3<br />
            Сложение: 10.00 + 3.00 = 13.00<br />
            Вычитание: 10.00 - 3.00 = 7.00<br />
            Умножение: 10.00 * 3.00 = 30.00<br />
            Деление: 10.00 / 3.00 = 3.33<br />
            Остаток: 10 % 3 = 1<br />
            Унарный минус для первого числа: -10.00
          </p>
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
              Теперь вы знаете все основные арифметические операции в Go: сложение <code className="bg-gray-700 px-1 rounded">+</code>, вычитание <code className="bg-gray-700 px-1 rounded">-</code>, умножение <code className="bg-gray-700 px-1 rounded">*</code>, деление <code className="bg-gray-700 px-1 rounded">/</code> и остаток от деления <code className="bg-gray-700 px-1 rounded">%</code>. Вы понимаете приоритет операций, особенности целочисленного деления и работу с числами с плавающей точкой. Эти знания необходимы для создания любых математических программ и алгоритмов. В следующих частях урока мы закрепим эти знания на практике.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Добавим недостающий импорт для иконки Plus
const Plus = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

// Добавим недостающий импорт для иконки X
const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Part1;