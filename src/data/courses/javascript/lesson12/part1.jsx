// src/data/courses/javascript/lesson12/part1.jsx
import React from 'react';
import { Pause, SkipForward, RotateCw, Zap, AlertTriangle, Target } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm border border-orange-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-orange-500/20 p-3 rounded-lg">
            <Target className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 12: break и continue</h1>
            <h2 className="text-xl font-semibold text-orange-300 mb-3">Управление ходом выполнения циклов</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить операторы break и continue для управления выполнением циклов, научиться использовать их при поиске и фильтрации данных.
            </p>
          </div>
        </div>
      </div>

      {/* Оператор break */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Pause className="w-5 h-5 text-red-400" />
          Оператор break — выход из цикла
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Оператор <code className="bg-gray-800 px-1 rounded text-red-300">break</code> немедленно <span className="font-medium text-yellow-300">прерывает выполнение цикла</span> и передает управление следующей инструкции после цикла.
          </p>
          <p>
            Часто используется для <span className="font-medium">досрочного выхода</span> при достижении определенного условия.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Синтаксис и пример:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Выход из цикла
  }
  console.log(i);
}

// Вывод: 1, 2, 3, 4`}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Поиск элемента:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let массив = [10, 25, 3, 47, 8, 99];
let искомое = 47;
let найдено = false;

for (let i = 0; i < массив.length; i++) {
  if (массив[i] === искомое) {
    console.log(\`Найдено на позиции \${i}\`);
    найдено = true;
    break; // Не нужно продолжать поиск
  }
}

if (!найдено) {
  console.log("Элемент не найден");
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Проверка условия:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Вывод чисел до первого четного
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    break; // Останавливаемся на первом четном
  }
  console.log(i);
}

// Вывод: 1 (нечетное)`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Полезно:</span> break экономит время выполнения, особенно при поиске в больших массивах.
            </p>
          </div>
        </div>
      </div>

      {/* Оператор continue */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <SkipForward className="w-5 h-5 text-green-400" />
          Оператор continue — пропуск итерации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Оператор <code className="bg-gray-800 px-1 rounded text-green-300">continue</code> <span className="font-medium text-yellow-300">пропускает оставшуюся часть текущей итерации</span> и переходит к следующей итерации цикла.
          </p>
          <p>
            Используется для <span className="font-medium">фильтрации данных</span> и пропуска нежелательных значений.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Синтаксис и пример:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Пропускаем итерацию с i = 3
  }
  console.log(i);
}

// Вывод: 1, 2, 4, 5`}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3">Фильтрация четных чисел:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Вывод только нечетных чисел
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Пропускаем четные числа
  }
  console.log(i);
}

// Вывод: 1, 3, 5, 7, 9`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Обработка массива:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let числа = [1, -2, 3, 0, 5, -7, 8];

for (let i = 0; i < числа.length; i++) {
  if (числа[i] <= 0) {
    continue; // Пропускаем неположительные числа
  }
  console.log(\`Положительное число: \${числа[i]}\`);
}

// Вывод: 1, 3, 5, 8`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Преимущество:</span> continue делает код чище, чем вложенные условия.
            </p>
          </div>
        </div>
      </div>

      {/* Сравнение break и continue */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Сравнение break и continue
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
                <Pause className="w-4 h-4" />
                break — полная остановка
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Завершает весь цикл</span></li>
                <li>Управление передается <span className="font-medium">после цикла</span></li>
                <li>Используется для <span className="font-medium">досрочного выхода</span></li>
                <li>Подходит для <span className="font-medium">поиска и проверок</span></li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
                <SkipForward className="w-4 h-4" />
                continue — пропуск итерации
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Пропускает текущую итерацию</span></li>
                <li>Цикл <span className="font-medium">продолжается</span> со следующей итерации</li>
                <li>Используется для <span className="font-medium">фильтрации данных</span></li>
                <li>Подходит для <span className="font-medium">обработки массивов</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Практическое сравнение:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">С break — остановка при нахождении:</div>
                <pre className="text-xs text-gray-300">
{`for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Найдено!");
    break; // Останавливаем цикл
  }
  console.log(i);
}
// Вывод: 1, 2, 3, 4, "Найдено!"`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">С continue — пропуск значений:</div>
                <pre className="text-xs text-gray-300">
{`for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Пропускаем 3
  }
  console.log(i);
}
// Вывод: 1, 2, 4, 5`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Использование в разных циклах */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCw className="w-5 h-5 text-cyan-400" />
          Работа с разными типами циклов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Операторы <code className="bg-gray-800 px-1 rounded text-red-300">break</code> и <code className="bg-gray-800 px-1 rounded text-green-300">continue</code> работают во всех типах циклов: <code className="bg-gray-800 px-1 rounded">for</code>, <code className="bg-gray-800 px-1 rounded">while</code>, <code className="bg-gray-800 px-1 rounded">do...while</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">В цикле for:</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  if (i === 7) break;
  console.log(i);
}
// 0, 1, 2, 4, 5, 6`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">В цикле while:</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`let i = 0;
while (i < 10) {
  i++;
  if (i === 3) continue;
  if (i === 7) break;
  console.log(i);
}
// 1, 2, 4, 5, 6`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">В цикле do...while:</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`let i = 0;
do {
  i++;
  if (i === 3) continue;
  if (i === 5) break;
  console.log(i);
} while (i < 10);
// 1, 2, 4`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Практический пример — обработка массива:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let данные = [1, null, 3, undefined, 5, 0, 7, ""];

// Пропускаем некорректные значения
for (let i = 0; i < данные.length; i++) {
  if (!данные[i]) {
    continue; // Пропускаем falsy значения
  }
  console.log(\`Корректное значение: \${данные[i]}\`);
}

// Поиск первого положительного числа
for (let i = 0; i < данные.length; i++) {
  if (typeof данные[i] === "number" && данные[i] > 0) {
    console.log(\`Первое положительное: \${данные[i]}\`);
    break; // Найдено, выходим
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Вложенные циклы и метки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-pink-400" />
          Вложенные циклы и метки (дополнительно)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В <span className="font-medium text-pink-300">вложенных циклах</span> <code className="bg-gray-800 px-1 rounded">break</code> и <code className="bg-gray-800 px-1 rounded">continue</code> влияют только на <span className="font-medium">внутренний цикл</span>.
          </p>
          <p>
            Для управления внешним циклом используются <span className="font-medium">метки</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3">Без меток (только внутренний цикл):</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`for (let i = 1; i <= 3; i++) {
  console.log(\`Внешний: \${i}\`);
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break; // Только внутренний цикл
    }
    console.log(\`  Внутренний: \${j}\`);
  }
}`}
                </pre>
                <div className="text-xs text-gray-400 mt-2">
                  Вывод: Внешний 1, Внутренний 1, Внешний 2, Внутренний 1, Внешний 3, Внутренний 1
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">С метками (внешний цикл):</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`внешний: for (let i = 1; i <= 3; i++) {
  console.log(\`Внешний: \${i}\`);
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break внешний; // Выход из внешнего цикла
    }
    console.log(\`  Внутренний: \${j}\`);
  }
}`}
                </pre>
                <div className="text-xs text-gray-400 mt-2">
                  Вывод: Внешний 1, Внутренний 1
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">⚠️ Важно:</span> Метки используются редко. Обычно лучше реорганизовать код.
            </p>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          Практические примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Фильтрация и валидация:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`// Обработка пользовательских данных
let пользователи = [
  { имя: "Иван", возраст: 25 },
  { имя: "", возраст: 30 },
  { имя: "Мария", возраст: -5 },
  { имя: "Петр", возраст: 40 }
];

for (let i = 0; i < пользователи.length; i++) {
  let пользователь = пользователи[i];
  
  // Пропускаем некорректные данные
  if (!пользователь.имя || пользователь.возраст <= 0) {
    continue;
  }
  
  // Обрабатываем только валидных пользователей
  console.log(\`Обрабатываем: \${пользователь.имя}\`);
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Поиск и ранний выход:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`// Поиск в упорядоченном массиве
let числа = [1, 3, 5, 7, 9, 11, 13, 15];
let цель = 9;

for (let i = 0; i < числа.length; i++) {
  if (числа[i] > цель) {
    console.log("Число не найдено");
    break; // Число точно нет (массив отсортирован)
  }
  if (числа[i] === цель) {
    console.log(\`Найдено на позиции \${i}\`);
    break; // Найдено, выходим
  }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Обработка ошибок:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Проверка данных с ранним выходом
function обработатьДанные(массив) {
  for (let i = 0; i < массив.length; i++) {
    try {
      let результат = сложнаяФункция(массив[i]);
      console.log(\`Успех: \${результат}\`);
    } catch (error) {
      console.log(\`Ошибка на элементе \${i}: \${error.message}\`);
      if (error.critical) {
        console.log("Критическая ошибка, останавливаем обработку");
        break; // Останавливаем при критической ошибке
      }
      continue; // Продолжаем с другими элементами
    }
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Target className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать операторы break и continue для управления выполнением циклов. Эти инструменты помогут вам создавать более эффективный код при поиске, фильтрации и обработке данных!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;