// src/data/courses/javascript/lesson21/part1.jsx
import React from 'react';
import { MousePointer, Type, Send, Play, Pause, Volume2, Settings } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-lg">
            <MousePointer className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 21: Обработка событий</h1>
            <h2 className="text-xl font-semibold text-cyan-300 mb-3">Реакция на действия пользователя</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить обработку событий DOM, работу с addEventListener() и контекстом this в обработчиках.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое события */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-blue-400" />
          Что такое события?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-blue-300">События</span> — это <span className="font-medium text-yellow-300">сигналы</span>, которые отправляет браузер при определённых действиях пользователя или изменениях в документе.
          </p>
          <p>
            События позволяют <span className="font-medium">делать веб-страницы интерактивными</span>, реагируя на клики, ввод текста, отправку форм и другие действия.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Аналогия:</h3>
              <p className="text-sm text-gray-300">
                События как <span className="font-medium">звонок в дверь</span> — когда кто-то "нажимает" на звонок (событие), вы "открываете дверь" (обработчик) и <span className="font-medium">реагируете</span> на посетителя.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-2">Основные типы событий:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">UI события</span> — click, focus, blur</li>
                <li><span className="font-medium">События ввода</span> — input, change, keydown</li>
                <li><span className="font-medium">События формы</span> — submit, reset</li>
                <li><span className="font-medium">События документа</span> — load, DOMContentLoaded</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Примеры событий:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`<!-- Примеры событий в HTML -->
<button onclick="alert('Кнопка нажата!')">Нажми меня</button>
<input oninput="console.log('Ввод изменён')" placeholder="Введите текст">
<form onsubmit="alert('Форма отправлена!'); return false;">
  <input type="text" required>
  <button type="submit">Отправить</button>
</form>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Основные события */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MousePointer className="w-5 h-5 text-green-400" />
          <Type className="w-5 h-5 text-yellow-400" />
          <Send className="w-5 h-5 text-cyan-400" />
          Основные события: click, input, submit
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Три самых распространённых события в веб-разработке: <code className="bg-gray-800 px-1 rounded text-green-300">click</code>, <code className="bg-gray-800 px-1 rounded text-yellow-300">input</code> и <code className="bg-gray-800 px-1 rounded text-cyan-300">submit</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
                <MousePointer className="w-4 h-4" />
                Событие click
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>Срабатывает при клике мыши</li>
                <li>Работает с кнопками, ссылками</li>
                <li>Поддерживает двойной клик (dblclick)</li>
                <li>Может срабатывать на любом элементе</li>
              </ul>
              <div className="mt-3 bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`кнопка.addEventListener("click", function(e) {
  console.log("Клик по кнопке!", e.target);
});`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
                <Type className="w-4 h-4" />
                Событие input
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>Срабатывает при вводе текста</li>
                <li>Работает в реальном времени</li>
                <li>Подходит для валидации форм</li>
                <li>Срабатывает на input, textarea</li>
              </ul>
              <div className="mt-3 bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`полеВвода.addEventListener("input", function(e) {
  console.log("Введено:", e.target.value);
});`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
                <Send className="w-4 h-4" />
                Событие submit
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>Срабатывает при отправке формы</li>
                <li>Можно отменить стандартное поведение</li>
                <li>Работает только с формами</li>
                <li>Подходит для валидации перед отправкой</li>
              </ul>
              <div className="mt-3 bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`форма.addEventListener("submit", function(e) {
  e.preventDefault(); // Отмена отправки
  console.log("Форма отправляется!");
});`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Практический пример:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">HTML структура:</div>
                <pre className="text-sm text-gray-300">
{`<div class="form-container">
  <form id="userForm">
    <input type="text" id="username" placeholder="Имя пользователя" required>
    <input type="email" id="email" placeholder="Email" required>
    <button type="submit" id="submitBtn">Отправить</button>
  </form>
  <button id="resetBtn">Сбросить</button>
  <div id="output"></div>
</div>`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">JavaScript код:</div>
                <pre className="text-sm text-gray-300">
{`let форма = document.getElementById("userForm");
let имя = document.getElementById("username");
let email = document.getElementById("email");
let отправить = document.getElementById("submitBtn");
let сбросить = document.getElementById("resetBtn");
let вывод = document.getElementById("output");

// Обработка ввода
имя.addEventListener("input", function(e) {
  вывод.textContent = \`Имя: \${e.target.value}\`;
});

email.addEventListener("input", function(e) {
  вывод.textContent += \` | Email: \${e.target.value}\`;
});

// Обработка отправки формы
форма.addEventListener("submit", function(e) {
  e.preventDefault();
  вывод.innerHTML = \`<strong>Форма отправлена!</strong><br>
  Имя: \${имя.value}<br>
  Email: \${email.value}\`;
});

// Обработка сброса
сбросить.addEventListener("click", function() {
  форма.reset();
  вывод.textContent = "Форма сброшена";
});`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Метод addEventListener() */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-orange-400" />
          Метод addEventListener()
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Метод <code className="bg-gray-800 px-1 rounded text-orange-300">addEventListener()</code> — это <span className="font-medium text-yellow-300">современный способ</span> добавления обработчиков событий к элементам DOM.
          </p>
          <p>
            Он предоставляет <span className="font-medium">больше возможностей</span> и <span className="font-medium">лучшую гибкость</span> по сравнению с inline-обработчиками.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Синтаксис addEventListener():</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Базовый синтаксис
элемент.addEventListener(типСобытия, обработчик, опции);

// Примеры использования
кнопка.addEventListener("click", обработчик);
полеВвода.addEventListener("input", обработчик);
форма.addEventListener("submit", обработчик);

// С опциями
элемент.addEventListener("click", обработчик, {
  once: true,     // Только один раз
  passive: true,  // Пассивный слушатель
  capture: false  // Фаза захвата
});`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Преимущества addEventListener():</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Несколько обработчиков</span> — можно добавить несколько</li>
                <li><span className="font-medium">Гибкость</span> — можно управлять фазами события</li>
                <li><span className="font-medium">Удаление</span> — можно удалить обработчик</li>
                <li><span className="font-medium">Разделение</span> — HTML и JS разделены</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Добавление нескольких обработчиков:</div>
                <pre className="text-sm text-gray-300">
{`let кнопка = document.getElementById("myButton");

// Первый обработчик
кнопка.addEventListener("click", function() {
  console.log("Первый обработчик");
});

// Второй обработчик
кнопка.addEventListener("click", function() {
  console.log("Второй обработчик");
});

// При клике выведет оба сообщения`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Удаление обработчиков:</div>
                <pre className="text-sm text-gray-300">
{`function обработчикКлика(e) {
  console.log("Кнопка нажата!", e.target.textContent);
}

// Добавление
кнопка.addEventListener("click", обработчикКлика);

// Удаление (только с именованной функцией!)
// кнопка.removeEventListener("click", обработчикКлика);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Объект события (Event) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-purple-400" />
          Объект события (Event)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Каждый обработчик события получает <span className="font-medium text-purple-300">объект события</span> в качестве <span className="font-medium text-yellow-300">первого параметра</span>, содержащий <span className="font-medium">информацию</span> о произошедшем событии.
          </p>
          <p>
            Этот объект позволяет <span className="font-medium">управлять</span> поведением события и получать <span className="font-medium">данные</span> о его контексте.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Основные свойства Event:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><code className="bg-gray-800 px-1 rounded">target</code> — элемент, вызвавший событие</li>
                <li><code className="bg-gray-800 px-1 rounded">currentTarget</code> — элемент, к которому прикреплён обработчик</li>
                <li><code className="bg-gray-800 px-1 rounded">type</code> — тип события</li>
                <li><code className="bg-gray-800 px-1 rounded">preventDefault()</code> — отмена стандартного поведения</li>
                <li><code className="bg-gray-800 px-1 rounded">stopPropagation()</code> — остановка всплытия</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3">Методы Event:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><code className="bg-gray-800 px-1 rounded">preventDefault()</code> — отменяет действие по умолчанию</li>
                <li><code className="bg-gray-800 px-1 rounded">stopPropagation()</code> — останавливает всплытие события</li>
                <li><code className="bg-gray-800 px-1 rounded">stopImmediatePropagation()</code> — останавливает все обработчики</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Работа со свойствами события:</div>
                <pre className="text-sm text-gray-300">
{`let кнопки = document.querySelectorAll(".btn");

кнопки.forEach(кнопка => {
  кнопка.addEventListener("click", function(e) {
    console.log("Тип события:", e.type);
    console.log("Цель события:", e.target);
    console.log("Текущий элемент:", e.currentTarget);
    console.log("Координаты:", e.clientX, e.clientY);
  });
});

// Пример с формой
let форма = document.getElementById("myForm");
форма.addEventListener("submit", function(e) {
  if (!подтвердитьОтправку()) {
    e.preventDefault(); // Отмена отправки
    console.log("Отправка формы отменена");
  }
});`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Отмена стандартного поведения:</div>
                <pre className="text-sm text-gray-300">
{`let ссылка = document.querySelector("a");

ссылка.addEventListener("click", function(e) {
  e.preventDefault(); // Отмена перехода по ссылке
  console.log("Переход по ссылке отменён");
  // Можно выполнить свою логику
  открытьМодальноеОкно();
});

// Остановка всплытия
let внутреннийЭлемент = document.getElementById("inner");
внутреннийЭлемент.addEventListener("click", function(e) {
  e.stopPropagation(); // Остановка всплытия
  console.log("Событие не всплывёт дальше");
});`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* this в контексте события */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Volume2 className="w-5 h-5 text-yellow-400" />
          this в контексте события
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В обработчиках событий <code className="bg-gray-800 px-1 rounded text-yellow-300">this</code> ссылается на <span className="font-medium text-yellow-300">элемент</span>, к которому прикреплён обработчик (то же, что и <code className="bg-gray-800 px-1 rounded">event.currentTarget</code>).
          </p>
          <p>
            Понимание контекста <code className="bg-gray-800 px-1 rounded">this</code> важно для <span className="font-medium">правильной работы</span> с элементами DOM в обработчиках.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-3">this в обработчиках:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let кнопка = document.getElementById("myBtn");

// this указывает на кнопку
кнопка.addEventListener("click", function(e) {
  console.log(this === e.currentTarget); // true
  console.log(this === кнопка); // true
  console.log(this.textContent); // Текст кнопки
  this.style.backgroundColor = "red"; // Изменение стиля кнопки
});

// Стрелочные функции НЕ имеют своего this!
кнопка.addEventListener("click", (e) => {
  console.log(this === window); // true (в браузере)
  // this не указывает на кнопку!
});`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Работа с this:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Функции</span> — this указывает на элемент события</li>
                <li><span className="font-medium">Стрелочные функции</span> — this берётся из внешнего контекста</li>
                <li><span className="font-medium">Метод bind()</span> — можно изменить контекст</li>
                <li><span className="font-medium">event.target</span> — всегда указывает на цель события</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Работа с this в обработчиках:</div>
                <pre className="text-sm text-gray-300">
{`// Группа кнопок с общим обработчиком
let кнопки = document.querySelectorAll(".action-btn");

function обработчикКнопки(e) {
  // this указывает на конкретную кнопку
  this.classList.toggle("active");
  this.textContent = this.classList.contains("active") ? 
    "Активна" : "Не активна";
  
  // Работа с data-атрибутами
  let действие = this.dataset.action;
  console.log(\`Выполнено действие: \${действие}\`);
}

кнопки.forEach(кнопка => {
  кнопка.addEventListener("click", обработчикКнопки);
});

// Использование bind для изменения контекста
let объект = {
  имя: "Мой объект",
  обработатьКлик: function(e) {
    console.log(\`Клик обработан \${this.имя}\`);
    console.log("Элемент:", e.target.textContent);
  }
};

кнопка.addEventListener("click", объект.обработатьКлик.bind(объект));`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Различие между target и currentTarget:</div>
                <pre className="text-sm text-gray-300">
{`<div id="parent">
  <button id="child">Нажми меня</button>
</div>

let родитель = document.getElementById("parent");

родитель.addEventListener("click", function(e) {
  console.log("this === e.currentTarget:", this === e.currentTarget); // true
  console.log("this === e.target:", this === e.target); // false!
  console.log("e.target:", e.target); // button#child
  console.log("e.currentTarget:", e.currentTarget); // div#parent
});`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Всплытие и перехват событий */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Pause className="w-5 h-5 text-cyan-400" />
          Всплытие и перехват событий
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            События в DOM имеют <span className="font-medium text-yellow-300">три фазы</span>: <span className="font-medium text-blue-300">захват</span>, <span className="font-medium text-green-300">цель</span> и <span className="font-medium text-orange-300">всплытие</span>.
          </p>
          <p>
            Понимание этих фаз позволяет <span className="font-medium">контролировать</span> порядок обработки событий и <span className="font-medium">оптимизировать</span> производительность.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-900/50 p-3 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Фаза захвата:</h3>
              <p className="text-sm text-gray-300">
                Событие движется <span className="font-medium">сверху вниз</span> от document к целевому элементу.
              </p>
            </div>
            <div className="bg-gray-900/50 p-3 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Фаза цели:</h3>
              <p className="text-sm text-gray-300">
                Событие достигает <span className="font-medium">целевого элемента</span>.
              </p>
            </div>
            <div className="bg-gray-900/50 p-3 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-2">Фаза всплытия:</h3>
              <p className="text-sm text-gray-300">
                Событие <span className="font-medium">всплывает</span> от целевого элемента к document.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Управление фазами:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Обработка на разных фазах:</div>
                <pre className="text-sm text-gray-300">
{`let внутренний = document.getElementById("inner");
let внешний = document.getElementById("outer");

// Обработка на фазе захвата (capture: true)
внешний.addEventListener("click", function(e) {
  console.log("Внешний (захват)");
}, true); // true = фаза захвата

// Обработка на фазе всплытия (по умолчанию)
внешний.addEventListener("click", function(e) {
  console.log("Внешний (всплытие)");
}, false); // false = фаза всплытия

внутренний.addEventListener("click", function(e) {
  console.log("Внутренний (цель)");
});

// Порядок выполнения:
// 1. Внешний (захват)
// 2. Внутренний (цель)
// 3. Внешний (всплытие)`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Остановка всплытия:</div>
                <pre className="text-sm text-gray-300">
{`внутренний.addEventListener("click", function(e) {
  console.log("Внутренний элемент кликнут");
  e.stopPropagation(); // Остановить всплытие
  // e.stopImmediatePropagation(); // Остановить все обработчики
});

внешний.addEventListener("click", function(e) {
  console.log("Это сообщение не появится, если всплытие остановлено");
});`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры комплексного использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Комплексные примеры обработки событий
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Интерактивная форма:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`<form id="registrationForm">
  <input type="text" id="username" placeholder="Имя пользователя" required>
  <input type="email" id="email" placeholder="Email" required>
  <input type="password" id="password" placeholder="Пароль" required>
  <button type="submit">Зарегистрироваться</button>
  <div id="formMessage"></div>
</form>

<script>
let форма = document.getElementById("registrationForm");
let имя = document.getElementById("username");
let email = document.getElementById("email");
let пароль = document.getElementById("password");
let сообщение = document.getElementById("formMessage");

// Валидация в реальном времени
имя.addEventListener("input", function(e) {
  if (e.target.value.length < 3) {
    e.target.style.borderColor = "red";
  } else {
    e.target.style.borderColor = "green";
  }
});

// Обработка отправки формы
форма.addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Проверка валидности
  if (!форма.checkValidity()) {
    сообщение.textContent = "Заполните все поля правильно!";
    сообщение.style.color = "red";
    return;
  }
  
  // Отправка данных
  сообщение.textContent = "Регистрация успешна!";
  сообщение.style.color = "green";
  
  // Сброс формы
  setTimeout(() => {
    форма.reset();
    [имя, email, пароль].forEach(поле => {
      поле.style.borderColor = "";
    });
    сообщение.textContent = "";
  }, 2000);
});
</script>`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Делегирование событий:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`<ul id="taskList">
  <li>Задача 1 <button class="delete-btn">Удалить</button></li>
  <li>Задача 2 <button class="delete-btn">Удалить</button></li>
  <li>Задача 3 <button class="delete-btn">Удалить</button></li>
</ul>
<button id="addTask">Добавить задачу</button>

<script>
let список = document.getElementById("taskList");
let добавить = document.getElementById("addTask");

// Делегирование событий
список.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    console.log("Задача удалена");
  }
});

// Добавление новых задач
добавить.addEventListener("click", function() {
  let новаяЗадача = document.createElement("li");
  новаяЗадача.innerHTML = \`Задача \${Date.now()} 
    <button class="delete-btn">Удалить</button>\`;
  список.appendChild(новаяЗадача);
});
</script>`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Система модальных окон:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`<button id="openModal">Открыть окно</button>
<div id="modal" class="modal" style="display:none;">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <h2>Модальное окно</h2>
    <p>Содержимое модального окна</p>
  </div>
</div>

<script>
let открыть = document.getElementById("openModal");
let модал = document.getElementById("modal");
let закрыть = document.getElementById("closeModal");

// Открытие модального окна
открыть.addEventListener("click", function() {
  модал.style.display = "block";
  document.body.style.overflow = "hidden"; // Запрет прокрутки
});

// Закрытие модального окна
закрыть.addEventListener("click", function() {
  модал.style.display = "none";
  document.body.style.overflow = ""; // Разрешить прокрутку
});

// Закрытие по клику вне окна
модал.addEventListener("click", function(e) {
  if (e.target === модал) {
    модал.style.display = "none";
    document.body.style.overflow = "";
  }
});

// Закрытие по Escape
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && модал.style.display === "block") {
    модал.style.display = "none";
    document.body.style.overflow = "";
  }
});
</script>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-cyan-500/20 p-2 rounded-lg flex-shrink-0">
            <MousePointer className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как обрабатывать события DOM, использовать addEventListener(), работать с объектом события и понимать контекст this в обработчиках!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;