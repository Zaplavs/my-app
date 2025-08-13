// src/data/courses/javascript/lesson19/part1.jsx
import React from 'react';
import { TreeDeciduous, Search, MousePointer, Target, Globe, Code, Eye } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-500/20 p-3 rounded-lg">
            <Globe className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 19: Что такое DOM и как к нему обращаться?</h1>
            <h2 className="text-xl font-semibold text-indigo-300 mb-3">Интерфейс для взаимодействия с HTML</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое DOM, как он структурирован и как находить элементы на странице.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое DOM */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-indigo-400" />
          Что такое DOM?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-indigo-300">DOM (Document Object Model)</span> — это <span className="font-medium text-yellow-300">программный интерфейс</span> для HTML и XML документов, который представляет структуру документа в виде <span className="font-medium">дерева объектов</span>.
          </p>
          <p>
            DOM позволяет <span className="font-medium">читать, изменять и взаимодействовать</span> с содержимым веб-страницы с помощью JavaScript.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
              <h3 className="font-bold text-indigo-300 mb-2">Аналогия:</h3>
              <p className="text-sm text-gray-300">
                DOM как <span className="font-medium">генеалогическое дерево</span> — каждый элемент имеет <span className="font-medium">родителей, детей и соседей</span>, и к каждому можно <span className="font-medium">получить доступ</span> по определённым "путям".
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">Основные особенности DOM:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Дерево объектов</span> — иерархическая структура</li>
                <li><span className="font-medium">Живое представление</span> — изменения отражаются сразу</li>
                <li><span className="font-medium">Платформонезависимый</span> — стандарт W3C</li>
                <li><span className="font-medium">Интерактивный</span> — позволяет манипулировать содержимым</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Пример HTML и соответствующего DOM:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">HTML документ:</div>
                <pre className="text-xs text-gray-300">
{`<!DOCTYPE html>
<html>
  <head>
    <title>Мой сайт</title>
  </head>
  <body>
    <h1>Привет, мир!</h1>
    <p>Это абзац текста.</p>
  </body>
</html>`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Структура DOM:</div>
                <pre className="text-xs text-gray-300">
{`document (корень)
├── html
    ├── head
    │   └── title
    │       └── "Мой сайт"
    └── body
        ├── h1
        │   └── "Привет, мир!"
        └── p
            └── "Это абзац текста."`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DOM как дерево элементов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <TreeDeciduous className="w-5 h-5 text-green-400" />
          DOM как дерево элементов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            DOM представляет HTML-документ в виде <span className="font-medium text-yellow-300">иерархического дерева</span>, где каждый элемент является <span className="font-medium">узлом</span> этого дерева.
          </p>
          <p>
            Каждый узел имеет <span className="font-medium">отношения</span> с другими узлами: родительские, дочерние и соседские.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Типы узлов DOM:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Элементы</span> — теги HTML (div, p, span и т.д.)</li>
                <li><span className="font-medium">Текстовые узлы</span> — текст внутри элементов</li>
                <li><span className="font-medium">Комментарии</span> — HTML комментарии</li>
                <li><span className="font-medium">Атрибуты</span> — свойства элементов</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Отношения узлов:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">parentNode</span> — родительский узел</li>
                <li><span className="font-medium">childNodes</span> — дочерние узлы</li>
                <li><span className="font-medium">firstChild/lastChild</span> — первый/последний дочерний</li>
                <li><span className="font-medium">nextSibling/previousSibling</span> — следующий/предыдущий сосед</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Пример сложной структуры DOM:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`<div id="container">
  <h2>Заголовок</h2>
  <!-- Комментарий -->
  <ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li class="active">Пункт 3</li>
  </ul>
  <p>Текст <strong>жирный</strong> текст</p>
</div>`}
              </pre>
              <div className="mt-3 text-xs text-gray-400">
                В этой структуре:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>#container — родитель для всех элементов внутри</li>
                  <li>h2, комментарий, ul, p — соседи</li>
                  <li>ul — родитель для li элементов</li>
                  <li>"Пункт 1" — текстовый узел внутри первого li</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Поиск элементов по ID */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-red-400" />
          Поиск элементов по ID: getElementById()
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Метод <code className="bg-gray-800 px-1 rounded text-red-300">document.getElementById()</code> — это <span className="font-medium text-yellow-300">самый быстрый способ</span> найти элемент по его уникальному идентификатору.
          </p>
          <p>
            Каждый ID в документе должен быть <span className="font-medium">уникальным</span>, поэтому метод возвращает <span className="font-medium">один элемент</span> или <code className="bg-gray-800 px-1 rounded">null</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3">Синтаксис getElementById():</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Базовый синтаксис
let элемент = document.getElementById("идентификатор");

// Примеры использования
let кнопка = document.getElementById("submit-btn");
let заголовок = document.getElementById("main-title");
let форма = document.getElementById("user-form");

// Проверка существования элемента
if (кнопка) {
  // элемент найден, можно работать с ним
  кнопка.addEventListener("click", обработчик);
} else {
  console.log("Элемент не найден");
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Особенности getElementById():</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Быстрый</span> — прямой доступ по хэш-таблице</li>
                <li><span className="font-medium">Уникальный</span> — возвращает один элемент</li>
                <li><span className="font-medium">Надёжный</span> — работает во всех браузерах</li>
                <li><span className="font-medium">Регистрозависимый</span> — учитывает регистр ID</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">HTML структура:</div>
                <pre className="text-sm text-gray-300">
{`<div id="app">
  <h1 id="title">Добро пожаловать</h1>
  <button id="btn">Нажми меня</button>
  <input id="name-input" type="text" placeholder="Введите имя">
</div>`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">JavaScript код:</div>
                <pre className="text-sm text-gray-300">
{`// Поиск элементов по ID
let заголовок = document.getElementById("title");
let кнопка = document.getElementById("btn");
let полеВвода = document.getElementById("name-input");

// Изменение содержимого
заголовок.textContent = "Привет, JavaScript!";
заголовок.style.color = "blue";

// Добавление обработчиков событий
кнопка.addEventListener("click", function() {
  alert("Кнопка нажата!");
});

// Работа с формой
полеВвода.value = "Ваше имя";
полеВвода.focus();`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Поиск элементов querySelector */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Search className="w-5 h-5 text-blue-400" />
          Поиск элементов: querySelector()
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Метод <code className="bg-gray-800 px-1 rounded text-blue-300">document.querySelector()</code> позволяет находить элементы с помощью <span className="font-medium text-yellow-300">CSS-селекторов</span>.
          </p>
          <p>
            Он возвращает <span className="font-medium">первый найденный элемент</span> или <code className="bg-gray-800 px-1 rounded">null</code>, если элемент не найден.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Синтаксис querySelector():</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Базовый синтаксис
let элемент = document.querySelector("селектор");

// Примеры селекторов
let первыйАбзац = document.querySelector("p");
let элементПоID = document.querySelector("#my-id");
let элементПоClass = document.querySelector(".my-class");
let первыйЗаголовок = document.querySelector("h1, h2, h3");
let элементПоАтрибуту = document.querySelector("[data-role='button']");

// Сложные селекторы
let вложенныйЭлемент = document.querySelector(".container .item:first-child");
let элементСПсевдоклассом = document.querySelector("li:nth-child(2)");`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3">Типы CSS-селекторов:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Теги</span> — <code className="bg-gray-800 px-1 rounded">div</code>, <code className="bg-gray-800 px-1 rounded">p</code></li>
                <li><span className="font-medium">ID</span> — <code className="bg-gray-800 px-1 rounded">#my-id</code></li>
                <li><span className="font-medium">Классы</span> — <code className="bg-gray-800 px-1 rounded">.my-class</code></li>
                <li><span className="font-medium">Атрибуты</span> — <code className="bg-gray-800 px-1 rounded">[type="text"]</code></li>
                <li><span className="font-medium">Псевдоклассы</span> — <code className="bg-gray-800 px-1 rounded">:first-child</code></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">HTML структура:</div>
                <pre className="text-sm text-gray-300">
{`<div class="container">
  <h2 class="title">Заголовок</h2>
  <ul class="list">
    <li class="item active">Пункт 1</li>
    <li class="item">Пункт 2</li>
    <li class="item">Пункт 3</li>
  </ul>
  <button data-action="submit">Отправить</button>
  <input type="email" required>
</div>`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Поиск элементов:</div>
                <pre className="text-sm text-gray-300">
{`// Различные способы поиска
let контейнер = document.querySelector(".container");
let заголовок = document.querySelector(".title");
let активныйПункт = document.querySelector(".item.active");
let перваяКнопка = document.querySelector("button");
let emailInput = document.querySelector("input[type='email']");
let кнопкаПоАтрибуту = document.querySelector("[data-action='submit']");

// Проверка найденных элементов
if (заголовок) {
  заголовок.style.fontSize = "24px";
}

// Работа с найденными элементами
активныйПункт.classList.remove("active");
перваяКнопка.disabled = true;`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Поиск элементов querySelectorAll */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-purple-400" />
          Поиск множества элементов: querySelectorAll()
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Метод <code className="bg-gray-800 px-1 rounded text-purple-300">document.querySelectorAll()</code> возвращает <span className="font-medium text-yellow-300">статическую коллекцию</span> (NodeList) всех элементов, соответствующих CSS-селектору.
          </p>
          <p>
            В отличие от <code className="bg-gray-800 px-1 rounded">querySelector()</code>, он возвращает <span className="font-medium">все найденные элементы</span>, а не только первый.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Синтаксис querySelectorAll():</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Базовый синтаксис
let элементы = document.querySelectorAll("селектор");

// Примеры использования
let всеАбзацы = document.querySelectorAll("p");
let всеClassЭлементы = document.querySelectorAll(".my-class");
let всеInputПоля = document.querySelectorAll("input[type='text']");
let элементыПоАтрибуту = document.querySelectorAll("[data-role]");

// Работа с результатами
console.log(всеАбзацы.length); // количество найденных элементов

// NodeList можно перебирать
всеАбзацы.forEach((абзац, индекс) => {
  абзац.textContent = \`Абзац #\${ин

декс + 1}\`;
});`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Особенности NodeList:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Статическая коллекция</span> — не обновляется при изменении DOM</li>
                <li><span className="font-medium">Итерируемая</span> — поддерживает forEach (современные браузеры)</li>
                <li><span className="font-medium">Доступ по индексу</span> — как у массивов</li>
                <li><span className="font-medium">Методы массивов</span> — можно преобразовать в массив</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">HTML структура:</div>
                <pre className="text-sm text-gray-300">
{`<div class="gallery">
  <img src="img1.jpg" alt="Фото 1" class="photo">
  <img src="img2.jpg" alt="Фото 2" class="photo active">
  <img src="img3.jpg" alt="Фото 3" class="photo">
  <img src="img4.jpg" alt="Фото 4" class="photo">
</div>
<div class="controls">
  <button class="btn">Кнопка 1</button>
  <button class="btn primary">Кнопка 2</button>
  <button class="btn">Кнопка 3</button>
</div>`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Работа с коллекциями:</div>
                <pre className="text-sm text-gray-300">
{`// Поиск всех фотографий
let фотографии = document.querySelectorAll(".photo");

// Добавление обработчиков ко всем кнопкам
let кнопки = document.querySelectorAll(".btn");
кнопки.forEach(кнопка => {
  кнопка.addEventListener("click", function() {
    console.log("Кнопка нажата:", this.textContent);
  });
});

// Работа с активной фотографией
let активнаяФото = document.querySelector(".photo.active");
if (активнаяФото) {
  активнаяФото.style.border = "2px solid red";
}

// Подсчет элементов
console.log(\`Найдено фотографий: \${фотографии.length}\`);
console.log(\`Найдено кнопок: \${кнопки.length}\`);

// Преобразование в массив для сложных операций
let массивКнопок = Array.from(кнопки);
let первичныеКнопки = массивКнопок.filter(btn => 
  btn.classList.contains("primary")
);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Сравнение методов поиска */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-yellow-400" />
          Сравнение методов поиска элементов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Каждый метод поиска элементов имеет свои <span className="font-medium text-yellow-300">преимущества и ограничения</span>. Выбор зависит от конкретной задачи.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-2 text-indigo-300">Метод</th>
                  <th className="text-left p-2 text-red-300">Критерий поиска</th>
                  <th className="text-left p-2 text-green-300">Возвращает</th>
                  <th className="text-left p-2 text-blue-300">Производительность</th>
                  <th className="text-left p-2 text-purple-300">Преимущества</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-2">
                    <code className="bg-gray-800 px-1 rounded">getElementById()</code>
                  </td>
                  <td className="p-2 text-gray-300">ID элемента</td>
                  <td className="p-2 text-gray-300">Один элемент или null</td>
                  <td className="p-2 text-green-300">Очень высокая</td>
                  <td className="p-2 text-gray-300">Самый быстрый, надёжный</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-2">
                    <code className="bg-gray-800 px-1 rounded">querySelector()</code>
                  </td>
                  <td className="p-2 text-gray-300">CSS-селектор</td>
                  <td className="p-2 text-gray-300">Первый элемент или null</td>
                  <td className="p-2 text-yellow-300">Средняя</td>
                  <td className="p-2 text-gray-300">Гибкость, универсальность</td>
                </tr>
                <tr>
                  <td className="p-2">
                    <code className="bg-gray-800 px-1 rounded">querySelectorAll()</code>
                  </td>
                  <td className="p-2 text-gray-300">CSS-селектор</td>
                  <td className="p-2 text-gray-300">NodeList всех элементов</td>
                  <td className="p-2 text-orange-300">Средняя-низкая</td>
                  <td className="p-2 text-gray-300">Поиск множества элементов</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-2">Когда использовать getElementById():</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Поиск уникальных элементов</li>
                <li>Когда нужна максимальная скорость</li>
                <li>Для часто используемых элементов</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Когда использовать querySelector():</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Когда нужен один элемент по сложному селектору</li>
                <li>Для поиска по классам, атрибутам</li>
                <li>Когда ID неизвестен</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">Когда использовать querySelectorAll():</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Когда нужно обработать несколько элементов</li>
                <li>Для групповых операций</li>
                <li>При работе с коллекциями элементов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-indigo-500/20 p-2 rounded-lg flex-shrink-0">
            <Globe className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое DOM, как он структурирован и как находить элементы на странице с помощью getElementById(), querySelector() и querySelectorAll()!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;