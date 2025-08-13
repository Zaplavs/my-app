// src/data/courses/javascript/lesson11/part1.jsx
import React from 'react';
import { RotateCw, RotateCcw, Shuffle, Zap, Code, AlertCircle, Check } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-lg">
            <Shuffle className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 11: Цикл while и do...while</h1>
            <h2 className="text-xl font-semibold text-cyan-300 mb-3">Циклы с предусловием и постусловием</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить циклы while и do...while, понять разницу между ними и научиться выбирать подходящий цикл для задач.
            </p>
          </div>
        </div>
      </div>

      {/* Цикл while */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCw className="w-5 h-5 text-green-400" />
          Цикл while (с предусловием)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цикл <code className="bg-gray-800 px-1 rounded text-green-300">while</code> выполняет код <span className="font-medium text-yellow-300">пока условие истинно</span>.
          </p>
          <p>
            Условие проверяется <span className="font-medium">до</span> каждой итерации, поэтому тело цикла может не выполниться ни разу.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Синтаксис цикла while:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300 text-center">
                while (условие) {'{'}
              </pre>
              <pre className="text-sm text-gray-300 text-center mt-1">
                &nbsp;&nbsp;// тело цикла
              </pre>
              <pre className="text-sm text-gray-300 text-center">
                {'}'}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Простой пример:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let счетчик = 1;

while (счетчик <= 3) {
  console.log(\`Итерация \${счетчик}\`);
  счетчик++;
}

// Вывод:
// Итерация 1
// Итерация 2
// Итерация 3`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Условие может быть ложным сразу:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let число = 10;

while (число < 5) {
  console.log("Это не выполнится");
  число++;
}

// Ничего не выведется`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm">
              <span className="font-medium">⚠️ Важно:</span> Не забывайте изменять переменные в условии, иначе цикл станет бесконечным!
            </p>
          </div>
        </div>
      </div>

      {/* Цикл do...while */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCcw className="w-5 h-5 text-purple-400" />
          Цикл do...while (с постусловием)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Цикл <code className="bg-gray-800 px-1 rounded text-purple-300">do...while</code> сначала выполняет тело цикла, <span className="font-medium">затем</span> проверяет условие.
          </p>
          <p>
            Это гарантирует, что тело цикла выполнится <span className="font-medium text-yellow-300">хотя бы один раз</span>.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Синтаксис цикла do...while:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300 text-center">
                do {'{'}
              </pre>
              <pre className="text-sm text-gray-300 text-center mt-1">
                &nbsp;&nbsp;// тело цикла
              </pre>
              <pre className="text-sm text-gray-300 text-center">
                {'} while (условие);'}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3">Гарантированное выполнение:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let счетчик = 1;

do {
  console.log(\`Итерация \${счетчик}\`);
  счетчик++;
} while (счетчик <= 3);

// Вывод:
// Итерация 1
// Итерация 2
// Итерация 3`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
              <h3 className="font-bold text-pink-300 mb-3">Даже при ложном условии:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let число = 10;

do {
  console.log("Выполнится один раз");
  число++;
} while (число < 5);

// Вывод: "Выполнится один раз"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">💡 Особенность:</span> Обратите внимание на точку с запятой <code className="bg-gray-800 px-1 rounded">;</code> после <code className="bg-gray-800 px-1 rounded">while</code>!
            </p>
          </div>
        </div>
      </div>

      {/* Сравнение циклов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Сравнение циклов while и do...while
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
                <RotateCw className="w-4 h-4" />
                while (предусловие)
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>Проверка условия <span className="font-medium">до</span> выполнения</li>
                <li>Тело может <span className="font-medium">не выполниться</span> ни разу</li>
                <li>Используется, когда <span className="font-medium">неизвестно количество итераций</span></li>
                <li>Подходит для обработки данных, ввода пользователя</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                do...while (постусловие)
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>Проверка условия <span className="font-medium">после</span> выполнения</li>
                <li>Тело <span className="font-medium">выполнится хотя бы один раз</span></li>
                <li>Используется, когда <span className="font-medium">нужно гарантировать выполнение</span></li>
                <li>Подходит для меню, подтверждений, игр</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Пример сравнения:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">while — может не выполниться:</div>
                <pre className="text-xs text-gray-300">
{`let пароль = "";

while (пароль.length < 8) {
  пароль = prompt("Введите пароль (мин. 8 символов):");
  // Если пользователь отменит — цикл не выполнится
}`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">do...while — выполнится хотя бы раз:</div>
                <pre className="text-xs text-gray-300">
{`let выбор;

do {
  выбор = prompt("1 - Начать игру, 2 - Выйти");
  // Покажет диалог хотя бы один раз
} while (выбор !== "1" && выбор !== "2");`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Когда использовать каждый цикл */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Check className="w-5 h-5 text-yellow-400" />
          Когда использовать каждый цикл?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <RotateCw className="w-4 h-4" />
                Использовать while:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>Когда количество итераций неизвестно</li>
                <li>Когда нужно проверить условие до выполнения</li>
                <li>Для обработки потоков данных</li>
                <li>Для ввода данных от пользователя</li>
                <li>Для поиска в коллекциях</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Использовать do...while:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>Когда нужно гарантировать выполнение хотя бы раз</li>
                <li>Для меню и интерфейсов</li>
                <li>Для игр и интерактивных приложений</li>
                <li>Для подтверждений действий</li>
                <li>Для настройки программы</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Использовать for:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>Когда известно количество итераций</li>
                <li>Для перебора массивов и объектов</li>
                <li>Для математических последовательностей</li>
                <li>Когда нужен счетчик</li>
                <li>Для вложенных циклов</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-sm text-gray-400 mb-2">while — чтение данных:</div>
                <pre className="text-xs text-gray-300">
{`// Чтение строк из файла до конца
let строка = файл.readLine();
while (строка !== null) {
  обработать(строка);
  строка = файл.readLine();
}`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-sm text-gray-400 mb-2">do...while — меню:</div>
                <pre className="text-xs text-gray-300">
{`// Меню программы
let выбор;
do {
  console.log("1. Создать, 2. Открыть, 3. Выход");
  выбор = prompt("Выберите действие:");
  switch (выбор) {
    case "1": создать(); break;
    case "2": открыть(); break;
  }
} while (выбор !== "3");`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Бесконечные циклы и прерывание */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertCircle className="w-5 h-5 text-red-400" />
          Бесконечные циклы и прерывание
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-red-300">Бесконечный цикл</span> — это цикл, который никогда не завершается из-за всегда истинного условия.
          </p>
          <p>
            Иногда это нужно намеренно, но чаще это <span className="font-medium">ошибка программирования</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3">Опасный пример:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// ❌ Бесконечный цикл!
let i = 0;
while (i < 10) {
  console.log(i);
  // Забыли увеличить i!
  // Цикл будет выполняться вечно
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Правильный пример:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// ✅ Правильный цикл
let i = 0;
while (i < 10) {
  console.log(i);
  i++; // Не забываем увеличивать!
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Прерывание циклов:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Использование break для выхода
let число = 1;
while (true) {
  if (число > 100) {
    break; // Выход из цикла
  }
  console.log(число);
  число *= 2;
}

// Вывод: 1, 2, 4, 8, 16, 32, 64`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Используйте <code className="bg-gray-800 px-1 rounded">break</code> для досрочного выхода из цикла по условию.
            </p>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-cyan-400" />
          Практические примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">while — обработка данных:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`// Подсчет суммы чисел до 0
let сумма = 0;
let число;

while ((число = prompt("Введите число (0 для выхода):")) !== "0") {
  сумма += Number(число);
}
console.log(\`Сумма: \${сумма}\`);`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">do...while — игра:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`// Угадай число
let загаданное = Math.floor(Math.random() * 10) + 1;
let попытка;
let попытки = 0;

do {
  попытка = Number(prompt("Угадай число от 1 до 10:"));
  попытки++;
  if (попытка < загаданное) {
    alert("Больше!");
  } else if (попытка > загаданное) {
    alert("Меньше!");
  }
} while (попытка !== загаданное);

alert(\`Угадал! Попыток: \${попытки}\`);`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Работа с массивами:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Поиск элемента в массиве
let массив = [10, 25, 3, 47, 8];
let искомое = 47;
let найдено = false;
let i = 0;

while (i < массив.length && !найдено) {
  if (массив[i] === искомое) {
    найдено = true;
    console.log(\`Найдено на позиции \${i}\`);
  }
  i++;
}

if (!найдено) {
  console.log("Не найдено");
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
            <Shuffle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать циклы while и do...while, понимаете разницу между ними и умеете выбирать подходящий цикл для разных задач. Это важные инструменты для работы с неизвестным количеством итераций!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;