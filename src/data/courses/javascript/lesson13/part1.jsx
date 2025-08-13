// src/data/courses/javascript/lesson13/part1.jsx
import React from 'react';
import { Play, RotateCw, Zap, Code, Repeat, Settings } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Play className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 13: Создание и вызов функций</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Повторное использование кода и модульность</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить создание и вызов функций, понять параметры и возврат значений, научиться повторно использовать код.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое функции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Что такое функции?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Функция</span> — это <span className="font-medium text-yellow-300">блок кода</span>, который можно <span className="font-medium">вызывать</span> многократно для выполнения определенной задачи.
          </p>
          <p>
            Функции помогают <span className="font-medium">организовать</span> код, сделать его <span className="font-medium">повторно используемым</span> и <span className="font-medium">легко поддерживаемым</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Преимущества функций:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Повторное использование</span> кода</li>
                <li><span className="font-medium">Модульность</span> и организация</li>
                <li><span className="font-medium">Легкость отладки</span> и тестирования</li>
                <li><span className="font-medium">Читаемость</span> кода</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Аналогия:</h3>
              <p className="text-sm text-gray-300">
                Функция как <span className="font-medium">рецепт</span> приготовления блюда — один раз написан, много раз используется. Или как <span className="font-medium">машина</span> — вы нажимаете кнопку (вызываете), и она выполняет свою работу.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Простая функция:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Объявление функции
function приветствие() {
  console.log("Привет, мир!");
}

// Вызов функции
приветствие(); // Вывод: "Привет, мир!"
приветствие(); // Вывод: "Привет, мир!" (снова)`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Синтаксис объявления функций */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-yellow-400" />
          Синтаксис объявления функций
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Функция объявляется с помощью ключевого слова <code className="bg-gray-800 px-1 rounded text-yellow-300">function</code>, имени функции и тела функции в фигурных скобках.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Базовый синтаксис:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300 text-center">
                function имяФункции(параметры) {'{'}
              </pre>
              <pre className="text-sm text-gray-300 text-center mt-1">
                &nbsp;&nbsp;// тело функции
              </pre>
              <pre className="text-sm text-gray-300 text-center">
                {'}'}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Функция без параметров:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`function показатьВремя() {
  let время = new Date();
  console.log(\`Текущее время: \${время.toLocaleTimeString()}\`);
}

показатьВремя(); // Вызов функции`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Функция с параметрами:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`function поприветствовать(имя) {
  console.log(\`Привет, \${имя}!\`);
}

поприветствовать("Иван"); // "Привет, Иван!"
поприветствовать("Мария"); // "Привет, Мария!"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
            <p className="text-green-300 text-sm">
              <span className="font-medium">💡 Важно:</span> Имя функции должно быть <span className="font-medium">осмысленным</span> и описывать, что делает функция.
            </p>
          </div>
        </div>
      </div>

      {/* Параметры и аргументы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-cyan-400" />
          Параметры и аргументы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Параметры</span> — это переменные в объявлении функции. <span className="font-medium text-blue-300">Аргументы</span> — это <span className="font-medium">реальные значения</span>, которые передаются при вызове функции.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-2">Параметры (в объявлении):</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`function сложить(a, b) {  // a и b — параметры
  return a + b;
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Аргументы (при вызове):</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let результат = сложить(5, 3);  // 5 и 3 — аргументы
console.log(результат); // 8`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Разные типы параметров:</h3>
            <div class="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div class="text-xs text-gray-400 mb-2">Обязательные параметры:</div>
                <pre class="text-xs text-gray-300">
{`function приветствие(имя, возраст) {
  console.log(\`Привет, \${имя}! Тебе \${возраст} лет.\`);
}

приветствие("Иван", 25); // Все аргументы переданы`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div class="text-xs text-gray-400 mb-2">Параметры по умолчанию:</div>
                <pre class="text-xs text-gray-300">
{`function поприветствовать(имя = "Гость") {
  console.log(\`Привет, \${имя}!\`);
}

поприветствовать(); // "Привет, Гость!"
поприветствовать("Мария"); // "Привет, Мария!"`}
                </pre>
              </div>
            </div>
          </div>

          <div class="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p class="text-yellow-300 text-sm">
              <span class="font-medium">⚠️ Важно:</span> Если аргумент не передан, параметр становится <code class="bg-gray-800 px-1 rounded">undefined</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Возврат значений */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap class="w-5 h-5 text-purple-400" />
          Возврат значений через return
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Оператор <code class="bg-gray-800 px-1 rounded text-purple-300">return</code> используется для <span class="font-medium text-yellow-300">возврата значения</span> из функции и <span class="font-medium">завершения</span> её выполнения.
          </p>
          <p>
            После <code class="bg-gray-800 px-1 rounded">return</code> функция <span class="font-medium">немедленно останавливается</span>.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 class="font-bold text-purple-300 mb-3">Функция с возвратом значения:</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-sm text-gray-300">
{`function умножить(a, b) {
  return a * b; // Возвращаем результат
}

let результат = умножить(4, 5);
console.log(результат); // 20`}
                </pre>
              </div>
            </div>

            <div class="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 class="font-bold text-green-300 mb-3">Функция без возврата:</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-sm text-gray-300">
{`function показатьСообщение(текст) {
  console.log(текст);
  // Нет return — возвращает undefined
}

let результат = показатьСообщение("Привет!");
console.log(результат); // undefined`}
                </pre>
              </div>
            </div>
          </div>

          <div class="mt-6 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 class="font-bold text-red-300 mb-3">Досрочный выход с return:</h3>
            <div class="bg-gray-800 p-4 rounded">
              <pre class="text-sm text-gray-300">
{`function проверитьВозраст(возраст) {
  if (возраст < 0) {
    return "Некорректный возраст";
  }
  if (возраст < 18) {
    return "Несовершеннолетний";
  }
  return "Совершеннолетний";
}

console.log(проверитьВозраст(-5)); // "Некорректный возраст"
console.log(проверитьВозраст(15)); // "Несовершеннолетний"
console.log(проверитьВозраст(25)); // "Совершеннолетний"`}
              </pre>
            </div>
          </div>

          <div class="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p class="text-blue-300 text-sm">
              <span class="font-medium">💡 Полезно:</span> Функции с return можно использовать в выражениях и присваиваниях.
            </p>
          </div>
        </div>
      </div>

      {/* Повторное использование кода */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Repeat class="w-5 h-5 text-orange-400" />
          Повторное использование кода
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Главное преимущество функций — возможность <span class="font-medium text-orange-300">многократного использования</span> одного и того же кода без дублирования.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 class="font-bold text-red-300 mb-3">Без функций (плохо):</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-xs text-gray-300">
{`// Дублирование кода
let a = 10, b = 5;
console.log(\`Сумма: \${a + b}\`);
console.log(\`Разность: \${a - b}\`);
console.log(\`Произведение: \${a * b}\`);

let x = 20, y = 4;
console.log(\`Сумма: \${x + y}\`);
console.log(\`Разность: \${x - y}\`);
console.log(\`Произведение: \${x * y}\`);`}
                </pre>
              </div>
            </div>

            <div class="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 class="font-bold text-green-300 mb-3">С функциями (хорошо):</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-xs text-gray-300">
{`function вычисления(a, b) {
  console.log(\`Сумма: \${a + b}\`);
  console.log(\`Разность: \${a - b}\`);
  console.log(\`Произведение: \${a * b}\`);
}

вычисления(10, 5);  // Первый набор
вычисления(20, 4);  // Второй набор`}
                </pre>
              </div>
            </div>
          </div>

          <div class="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 class="font-bold text-blue-300 mb-3">Практический пример:</h3>
            <div class="bg-gray-800 p-4 rounded">
              <pre class="text-sm text-gray-300">
{`// Функция для форматирования цены
function форматироватьЦену(цена) {
  return \`\${цена.toFixed(2)} руб.\`;
}

// Используем многократно
let товары = [125.5, 89.99, 250.0];
товары.forEach(цена => {
  console.log(форматироватьЦену(цена));
});

// Вывод:
// 125.50 руб.
// 89.99 руб.
// 250.00 руб.`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Область видимости переменных */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RotateCw class="w-5 h-5 text-pink-400" />
          Область видимости переменных
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Переменные, объявленные <span class="font-medium text-pink-300">внутри функции</span>, существуют только <span class="font-medium">внутри этой функции</span>.
          </p>
          <p>
            Это называется <span class="font-medium">локальной областью видимости</span>.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
              <h3 class="font-bold text-pink-300 mb-3">Локальные переменные:</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-sm text-gray-300">
{`function подсчет() {
  let счетчик = 0; // Локальная переменная
  счетчик++;
  console.log(\`Счетчик: \${счетчик}\`);
}

подсчет(); // "Счетчик: 1"
подсчет(); // "Счетчик: 1" (снова)
// console.log(счетчик); // Ошибка!`}
                </pre>
              </div>
            </div>

            <div class="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 class="font-bold text-cyan-300 mb-3">Глобальные переменные:</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-sm text-gray-300">
{`let глобальныйСчетчик = 0; // Глобальная переменная

function увеличить() {
  глобальныйСчетчик++; // Доступ к глобальной переменной
  console.log(\`Глобальный: \${глобальныйСчетчик}\`);
}

увеличить(); // "Глобальный: 1"
увеличить(); // "Глобальный: 2"
console.log(глобальныйСчетчик); // 2`}
                </pre>
              </div>
            </div>
          </div>

          <div class="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p class="text-yellow-300 text-sm">
              <span class="font-medium">⚠️ Рекомендация:</span> Минимизируйте использование глобальных переменных. Предпочитайте параметры и return.
            </p>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 class="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap class="w-5 h-5 text-green-400" />
          Практические примеры функций
        </h2>
        <div class="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 class="font-bold text-blue-300 mb-3">Математические функции:</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-xs text-gray-300">
{`function площадьКруга(радиус) {
  return Math.PI * радиус ** 2;
}

function максимум(a, b, c) {
  return Math.max(a, b, c);
}

console.log(площадьКруга(5)); // 78.54...
console.log(максимум(10, 25, 15)); // 25`}
                </pre>
              </div>
            </div>

            <div class="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 class="font-bold text-purple-300 mb-3">Работа со строками:</h3>
              <div class="bg-gray-800 p-4 rounded">
                <pre class="text-xs text-gray-300">
{`function приветствовать(имя) {
  return \`Здравствуйте, \${имя}!\`;
}

function перевернутьСтроку(строка) {
  return строка.split('').reverse().join('');
}

console.log(приветствовать("Иван")); // "Здравствуйте, Иван!"
console.log(перевернутьСтроку("привет")); // "тевирп"`}
                </pre>
              </div>
            </div>
          </div>

          <div class="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 class="font-bold text-green-300 mb-3">Функция-помощник:</h3>
            <div class="bg-gray-800 p-4 rounded">
              <pre class="text-sm text-gray-300">
{`// Проверка корректности email
function isValidEmail(email) {
  return email.includes('@') && email.includes('.');
}

// Использование в разных местах
let пользователи = ["ivan@mail.ru", "invalid-email", "maria@gmail.com"];

пользователи.forEach(email => {
  if (isValidEmail(email)) {
    console.log(\`\${email} - корректный\`);
  } else {
    console.log(\`\${email} - некорректный\`);
  }
});`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div class="flex items-start gap-3">
          <div class="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Play class="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 class="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p class="text-gray-300">
              Теперь вы знаете, как создавать и вызывать функции, использовать параметры и возвращать значения. Функции — это основа модульного программирования и повторного использования кода!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;