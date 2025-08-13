// src/data/courses/javascript/lesson6/part1.jsx
import React from 'react';
import { Calculator, Equal, GitCompare, Zap, Code, Plus } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm border border-orange-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-orange-500/20 p-3 rounded-lg">
            <Calculator className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 6: Операторы и выражения</h1>
            <h2 className="text-xl font-semibold text-orange-300 mb-3">Математические и логические операции в JavaScript</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое операторы, научиться использовать арифметические, логические и сравнительные операторы.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое операторы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Plus className="w-5 h-5 text-green-400" />
          Что такое операторы и выражения?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Операторы</span> — это специальные символы, которые выполняют операции над значениями (операндами).
          </p>
          <p>
            <span className="font-medium text-blue-300">Выражение</span> — это комбинация значений, переменных и операторов, которая вычисляется в одно значение.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Аналогия:</h3>
              <p className="text-gray-300 text-sm">
                Операторы как математические знаки: <code className="bg-gray-800 px-1 rounded">+</code> (сложение), <code className="bg-gray-800 px-1 rounded">-</code> (вычитание), <code className="bg-gray-800 px-1 rounded">*</code> (умножение).
              </p>
              <div className="mt-3 p-3 bg-gray-800 rounded text-center">
                <div className="text-xs text-gray-400">Выражение:</div>
                <div className="text-lg font-bold text-yellow-300">5 + 3 = 8</div>
                <div className="text-xs text-gray-400 mt-1">
                  <span className="text-blue-300">операнды</span> + <span className="text-orange-300">оператор</span> = <span className="text-green-300">результат</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Типы операторов:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Арифметические (+, -, *, /, %)</li>
                <li>Сравнения (==, ===, !=, !==)</li>
                <li>Логические (&&, ||, !)</li>
                <li>Присваивания (=, +=, -=, *=, /=)</li>
                <li>Унарные (+, -, ++, --)</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Пример выражения:</span> <code className="bg-gray-800 px-1 rounded">let результат = (10 + 5) * 2;</code> — здесь <code className="bg-gray-800 px-1 rounded">(10 + 5) * 2</code> является выражением.
            </p>
          </div>
        </div>
      </div>

      {/* Арифметические операторы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-yellow-400" />
          Арифметические операторы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Арифметические операторы используются для выполнения математических операций.
          </p>

          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
                <h3 className="font-bold text-yellow-300 mb-3">Основные операторы:</h3>
                <div className="space-y-3">
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="font-mono text-yellow-300">+</div>
                    <div className="text-sm text-gray-300 mt-1">Сложение</div>
                    <div className="text-xs text-gray-400 mt-1">5 + 3 = 8</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="font-mono text-yellow-300">-</div>
                    <div className="text-sm text-gray-300 mt-1">Вычитание</div>
                    <div className="text-xs text-gray-400 mt-1">5 - 3 = 2</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="font-mono text-yellow-300">*</div>
                    <div className="text-sm text-gray-300 mt-1">Умножение</div>
                    <div className="text-xs text-gray-400 mt-1">5 * 3 = 15</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
                <h3 className="font-bold text-orange-300 mb-3">Деление и остаток:</h3>
                <div className="space-y-3">
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="font-mono text-orange-300">/</div>
                    <div className="text-sm text-gray-300 mt-1">Деление</div>
                    <div className="text-xs text-gray-400 mt-1">10 / 3 = 3.33...</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="font-mono text-orange-300">%</div>
                    <div className="text-sm text-gray-300 mt-1">Остаток от деления</div>
                    <div className="text-xs text-gray-400 mt-1">10 % 3 = 1</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <div className="font-mono text-orange-300">**</div>
                    <div className="text-sm text-gray-300 mt-1">Возведение в степень</div>
                    <div className="text-xs text-gray-400 mt-1">2 ** 3 = 8</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Примеры использования:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1
console.log(a ** b); // 1000

// Унарные операторы
console.log(+a); // 10 (преобразование в число)
console.log(-a); // -10 (унарный минус)`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm">
              <span className="font-medium">⚠️ Важно:</span> При делении на ноль получаем <code className="bg-gray-800 px-1 rounded">Infinity</code> или <code className="bg-gray-800 px-1 rounded">-Infinity</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Операторы присваивания */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Операторы присваивания
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Операторы присваивания используются для присвоения значений переменным.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Основные операторы присваивания:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-mono text-purple-300">=</div>
                  <div className="text-sm text-gray-300 mt-1">Простое присваивание</div>
                  <div className="text-xs text-gray-400 mt-1">let x = 5;</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-mono text-purple-300">+=</div>
                  <div className="text-sm text-gray-300 mt-1">Сложение с присваиванием</div>
                  <div className="text-xs text-gray-400 mt-1">x += 3 // x = x + 3</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-mono text-purple-300">-=</div>
                  <div className="text-sm text-gray-300 mt-1">Вычитание с присваиванием</div>
                  <div className="text-xs text-gray-400 mt-1">x -= 3 // x = x - 3</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
              <h3 className="font-bold text-pink-300 mb-3">Другие операторы присваивания:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-mono text-pink-300">*=</div>
                  <div className="text-sm text-gray-300 mt-1">Умножение с присваиванием</div>
                  <div className="text-xs text-gray-400 mt-1">x *= 3 // x = x * 3</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-mono text-pink-300">/=</div>
                  <div className="text-sm text-gray-300 mt-1">Деление с присваиванием</div>
                  <div className="text-xs text-gray-400 mt-1">x /= 3 // x = x / 3</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-mono text-pink-300">%=</div>
                  <div className="text-sm text-gray-300 mt-1">Остаток с присваиванием</div>
                  <div className="text-xs text-gray-400 mt-1">x %= 3 // x = x % 3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Примеры использования:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let счетчик = 10;

счетчик += 5; // счетчик = 15
счетчик -= 3; // счетчик = 12
счетчик *= 2; // счетчик = 24
счетчик /= 4; // счетчик = 6
счетчик %= 4; // счетчик = 2

console.log(счетчик); // 2`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              <span className="font-medium">💡 Преимущество:</span> Операторы присваивания делают код короче и более читаемым.
            </p>
          </div>
        </div>
      </div>

      {/* Операторы сравнения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Equal className="w-5 h-5 text-cyan-400" />
          Операторы сравнения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Операторы сравнения используются для сравнения значений и возвращают булево значение (<code className="bg-gray-800 px-1 rounded">true</code> или <code className="bg-gray-800 px-1 rounded">false</code>).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3">Строгое сравнение (===, !==):</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-mono text-cyan-300">===</div>
                  <div className="text-sm text-gray-300 mt-1">Строгое равенство</div>
                  <div className="text-xs text-gray-400 mt-1">Сравнивает типы и значения</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-mono text-cyan-300">!==</div>
                  <div className="text-sm text-gray-300 mt-1">Строгое неравенство</div>
                  <div className="text-xs text-gray-400 mt-1">true если типы или значения разные</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Нестрогое сравнение (==, !=):</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-mono text-blue-300">==</div>
                  <div className="text-sm text-gray-300 mt-1">Абстрактное равенство</div>
                  <div className="text-xs text-gray-400 mt-1">Выполняет преобразование типов</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-mono text-blue-300">!=</div>
                  <div className="text-sm text-gray-300 mt-1">Абстрактное неравенство</div>
                  <div className="text-xs text-gray-400 mt-1">true если значения не равны</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Примеры сравнений:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Строгое сравнение
console.log(5 === 5); // true
console.log(5 === "5"); // false (разные типы)
console.log(true === 1); // false

// Нестрогое сравнение
console.log(5 == 5); // true
console.log(5 == "5"); // true (преобразование типов)
console.log(true == 1); // true

// Неравенство
console.log(5 !== "5"); // true
console.log(5 != "5"); // false

// Другие сравнения
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(5 <= 3); // false`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm">
              <span className="font-medium">⚠️ Рекомендация:</span> Всегда используйте строгое сравнение (<code className="bg-gray-800 px-1 rounded">===</code> и <code className="bg-gray-800 px-1 rounded">!==</code>) для избежания неожиданных результатов.
            </p>
          </div>
        </div>
      </div>

      {/* Логические операторы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-green-400" />
          Логические операторы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Логические операторы используются для комбинирования булевых значений и выполнения логических операций.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">И (&&):</h3>
              <div className="bg-gray-800 p-3 rounded text-center">
                <div className="font-mono text-green-300 mb-2">&&</div>
                <div className="text-sm text-gray-300">Возвращает true, если оба операнда true</div>
              </div>
              <div className="mt-3 text-xs">
                <div>true && true = true</div>
                <div>true && false = false</div>
                <div>false && true = false</div>
                <div>false && false = false</div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">ИЛИ (||):</h3>
              <div className="bg-gray-800 p-3 rounded text-center">
                <div className="font-mono text-blue-300 mb-2">||</div>
                <div className="text-sm text-gray-300">Возвращает true, если хотя бы один операнд true</div>
              </div>
              <div className="mt-3 text-xs">
                <div>true || true = true</div>
                <div>true || false = true</div>
                <div>false || true = true</div>
                <div>false || false = false</div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">НЕ (!):</h3>
              <div className="bg-gray-800 p-3 rounded text-center">
                <div className="font-mono text-purple-300 mb-2">!</div>
                <div className="text-sm text-gray-300">Инвертирует булево значение</div>
              </div>
              <div className="mt-3 text-xs">
                <div>!true = false</div>
                <div>!false = true</div>
                <div>!!true = true</div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Примеры использования:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let возраст = 25;
let имеетПрава = true;

// Логическое И
if (возраст >= 18 && имеетПрава) {
  console.log("Можно водить машину");
}

// Логическое ИЛИ
let температура = 35;
if (температура > 30 || температура < 0) {
  console.log("Экстремальная температура");
}

// Логическое НЕ
let isOnline = false;
if (!isOnline) {
  console.log("Пользователь офлайн");
}

// Приоритет операторов
console.log(true || false && false); // true (&& выполняется первым)`}
              </pre>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-2">Особенности && и ||:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><code className="bg-gray-800 px-1 rounded">&&</code> возвращает первое ложное значение или последнее истинное</li>
                <li><code className="bg-gray-800 px-1 rounded">||</code> возвращает первое истинное значение или последнее ложное</li>
              </ul>
              <div className="mt-2 bg-gray-800 p-2 rounded">
                <pre className="text-xs text-gray-300">
{`console.log("привет" && 42); // 42
console.log(0 && "мир"); // 0
console.log("" || "значение"); // "значение"
console.log("первое" || "второе"); // "первое"`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
              <h3 className="font-bold text-pink-300 mb-2">Практическое применение:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Проверка условий</li>
                <li>Установка значений по умолчанию</li>
                <li>Цепочка проверок</li>
                <li>Оптимизация кода</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Приоритет операторов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitCompare className="w-5 h-5 text-orange-400" />
          Приоритет операторов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Операторы в JavaScript имеют разный приоритет выполнения. Операторы с более высоким приоритетом выполняются первыми.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-2">Порядок приоритета (высокий → низкий):</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Группировка: <code className="bg-gray-800 px-1 rounded">()</code></li>
                <li>Унарные: <code className="bg-gray-800 px-1 rounded">!</code>, <code className="bg-gray-800 px-1 rounded">+</code>, <code className="bg-gray-800 px-1 rounded">-</code></li>
                <li>Арифметические: <code className="bg-gray-800 px-1 rounded">*</code>, <code className="bg-gray-800 px-1 rounded">/</code>, <code className="bg-gray-800 px-1 rounded">%</code></li>
                <li>Арифметические: <code className="bg-gray-800 px-1 rounded">+</code>, <code className="bg-gray-800 px-1 rounded">-</code></li>
                <li>Сравнения: <code className="bg-gray-800 px-1 rounded">{`<`}</code>, <code className="bg-gray-800 px-1 rounded">{`<=`}</code>, <code className="bg-gray-800 px-1 rounded">{`>`}</code>, <code className="bg-gray-800 px-1 rounded">{`>=`}</code></li>
                <li>Равенства: <code className="bg-gray-800 px-1 rounded">==</code>, <code className="bg-gray-800 px-1 rounded">!=</code>, <code className="bg-gray-800 px-1 rounded">===</code>, <code className="bg-gray-800 px-1 rounded">!==</code></li>
                <li>Логические: <code className="bg-gray-800 px-1 rounded">&&</code></li>
                <li>Логические: <code className="bg-gray-800 px-1 rounded">||</code></li>
                <li>Присваивания: <code className="bg-gray-800 px-1 rounded">=</code>, <code className="bg-gray-800 px-1 rounded">+=</code>, <code className="bg-gray-800 px-1 rounded">-=</code></li>
              </ol>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Примеры с приоритетом:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300">Умножение выполняется первым:</div>
                  <div className="font-mono text-yellow-300 mt-1">5 + 3 * 2 = 11</div>
                  <div className="text-xs text-gray-400 mt-1">(не 16!)</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300">Скобки изменяют порядок:</div>
                  <div className="font-mono text-yellow-300 mt-1">(5 + 3) * 2 = 16</div>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300">Логические операторы:</div>
                  <div className="font-mono text-yellow-300 mt-1">true || false && false = true</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Используйте скобки <code className="bg-gray-800 px-1 rounded">()</code> для явного указания порядка выполнения и лучшей читаемости кода.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете основные операторы JavaScript: арифметические, логические, сравнения и присваивания. Понимание приоритета операторов поможет вам писать более точный и предсказуемый код. В следующем уроке мы закрепим эти знания на практике!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;