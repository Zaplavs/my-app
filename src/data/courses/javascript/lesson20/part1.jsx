// src/data/courses/javascript/lesson20/part1.jsx
import React from 'react';
import { Type, Palette, Settings, Edit3, Code, Eye, Brush } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-pink-900/30 to-rose-900/30 backdrop-blur-sm border border-pink-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-pink-500/20 p-3 rounded-lg">
            <Edit3 className="w-6 h-6 text-pink-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 20: Изменение содержимого и стилей</h1>
            <h2 className="text-xl font-semibold text-pink-300 mb-3">Манипуляция DOM элементами</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить изменение текстового содержимого, стилей и атрибутов элементов DOM.
            </p>
          </div>
        </div>
      </div>

      {/* Изменение текстового содержимого */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-blue-400" />
          Изменение текстового содержимого
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            JavaScript предоставляет несколько способов для <span className="font-medium text-yellow-300">изменения текстового содержимого</span> элементов: <code className="bg-gray-800 px-1 rounded text-blue-300">textContent</code> и <code className="bg-gray-800 px-1 rounded text-green-300">innerHTML</code>.
          </p>
          <p>
            Каждый метод имеет свои <span className="font-medium">особенности и области применения</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">textContent:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Только текст</span> — игнорирует HTML теги</li>
                <li><span className="font-medium">Безопасный</span> — защищает от XSS атак</li>
                <li><span className="font-medium">Быстрый</span> — простая операция</li>
                <li><span className="font-medium">Универсальный</span> — работает со всеми элементами</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">innerHTML:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">HTML содержимое</span> — интерпретирует теги</li>
                <li><span className="font-medium">Гибкий</span> — позволяет вставлять HTML</li>
                <li><span className="font-medium">Опасный</span> — уязвим к XSS атакам</li>
                <li><span className="font-medium">Медленный</span> — требует парсинга HTML</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">HTML структура:</div>
                <pre className="text-sm text-gray-300">
{`<div id="container">
  <p id="text">Исходный текст</p>
  <div id="content">Старое <strong>содержимое</strong></div>
</div>`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">JavaScript код:</div>
                <pre className="text-sm text-gray-300">
{`let текстовыйЭлемент = document.getElementById("text");
let контентЭлемент = document.getElementById("content");

// Использование textContent
текстовыйЭлемент.textContent = "Новый текст";
console.log(текстовыйЭлемент.textContent); // "Новый текст"

// Использование innerHTML
контентЭлемент.innerHTML = "Новое <em>содержимое</em> с <strong>HTML</strong>";
console.log(контентЭлемент.innerHTML); 
// "Новое <em>содержимое</em> с <strong>HTML</strong>"

// Опасность innerHTML
let userInput = "<script>alert('XSS!')</script>";
// Безопасно:
текстовыйЭлемент.textContent = userInput; // Отображает как текст
// Опасно:
// контентЭлемент.innerHTML = userInput; // Выполнит скрипт!`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Сравнение textContent и innerHTML */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-yellow-400" />
          Сравнение textContent и innerHTML
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Важно понимать <span className="font-medium text-yellow-300">различия</span> между <code className="bg-gray-800 px-1 rounded text-yellow-300">textContent</code> и <code className="bg-gray-800 px-1 rounded text-green-300">innerHTML</code> для правильного выбора метода.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-2 text-blue-300">Свойство</th>
                  <th className="text-left p-2 text-green-300">Тип содержимого</th>
                  <th className="text-left p-2 text-purple-300">Безопасность</th>
                  <th className="text-left p-2 text-orange-300">Производительность</th>
                  <th className="text-left p-2 text-cyan-300">Использование</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-2">
                    <code className="bg-gray-800 px-1 rounded">textContent</code>
                  </td>
                  <td className="p-2 text-gray-300">Только текст</td>
                  <td className="p-2 text-green-300">Высокая</td>
                  <td className="p-2 text-green-300">Высокая</td>
                  <td className="p-2 text-gray-300">Для простого текста</td>
                </tr>
                <tr>
                  <td className="p-2">
                    <code className="bg-gray-800 px-1 rounded">innerHTML</code>
                  </td>
                  <td className="p-2 text-gray-300">HTML и текст</td>
                  <td className="p-2 text-red-300">Низкая</td>
                  <td className="p-2 text-orange-300">Средняя</td>
                  <td className="p-2 text-gray-300">Для HTML содержимого</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-3">Когда использовать textContent:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>При работе с простым текстом</li>
                <li>Для отображения пользовательского ввода</li>
                <li>Когда нужна максимальная безопасность</li>
                <li>Для высокой производительности</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Когда использовать innerHTML:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>При необходимости вставки HTML</li>
                <li>Для динамической генерации разметки</li>
                <li>Когда нужно сохранить форматирование</li>
                <li>Для сложных шаблонов</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">⚠️ Важные особенности:</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-1">Получение содержимого:</div>
                <pre className="text-xs text-gray-300">
{`let элемент = document.querySelector("p");
элемент.innerHTML = "<strong>Жирный текст</strong>";

console.log(элемент.textContent); // "Жирный текст"
console.log(элемент.innerHTML);   // "<strong>Жирный текст</strong>"`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-1">Безопасность:</div>
                <pre className="text-xs text-gray-300">
{`// Правильно - безопасно
элемент.textContent = пользовательскийВвод;

// Опасно - может вызвать XSS
элемент.innerHTML = пользовательскийВвод;`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Управление стилями через element.style */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Palette className="w-5 h-5 text-pink-400" />
          Управление стилями через element.style
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Свойство <code className="bg-gray-800 px-1 rounded text-pink-300">element.style</code> предоставляет <span className="font-medium text-yellow-300">прямой доступ</span> к inline-стилям элемента и позволяет <span className="font-medium">динамически изменять</span> его внешний вид.
          </p>
          <p>
            Все CSS-свойства доступны через <span className="font-medium">camelCase</span> нотацию.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
              <h3 className="font-bold text-pink-300 mb-3">Синтаксис element.style:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Базовый синтаксис
элемент.style.свойство = "значение";

// Примеры
let кнопка = document.querySelector("button");

кнопка.style.backgroundColor = "blue";
кнопка.style.color = "white";
кнопка.style.fontSize = "16px";
кнопка.style.padding = "10px 20px";
кнопка.style.borderRadius = "5px";
кнопка.style.cursor = "pointer";

// Удаление стиля
кнопка.style.backgroundColor = ""; // или "initial"`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Особенности стилей:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Inline стили</span> — имеют наивысший приоритет</li>
                <li><span className="font-medium">CamelCase</span> — backgroundColor вместо background-color</li>
                <li><span className="font-medium">Строки</span> — значения всегда в кавычках</li>
                <li><span className="font-medium">Единицы измерения</span> — px, em, % и т.д.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">HTML структура:</div>
                <pre className="text-sm text-gray-300">
{`<div class="box" id="myBox">Контент блока</div>
<button id="styleBtn">Изменить стиль</button>`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">JavaScript код:</div>
                <pre className="text-sm text-gray-300">
{`let блок = document.getElementById("myBox");
let кнопка = document.getElementById("styleBtn");

кнопка.addEventListener("click", function() {
  // Изменение нескольких стилей
  блок.style.backgroundColor = "#ff6b6b";
  блок.style.color = "white";
  блок.style.padding = "20px";
  блок.style.borderRadius = "10px";
  блок.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  блок.style.transition = "all 0.3s ease";
  
  // Анимация
  setTimeout(() => {
    блок.style.transform = "scale(1.1)";
  }, 100);
});

// Функция для сброса стилей
function сброситьСтили() {
  блок.style.cssText = ""; // Очистить все inline стили
  // или по отдельности:
  // блок.style.backgroundColor = "";
  // блок.style.color = "";
}`}`
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Работа с атрибутами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-cyan-400" />
          Работа с атрибутами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            HTML-элементы могут иметь различные <span className="font-medium text-yellow-300">атрибуты</span> (src, href, class, id и т.д.), которые можно <span className="font-medium">читать, изменять и удалять</span> с помощью JavaScript.
          </p>
          <p>
            Существует несколько методов для работы с атрибутами: <code className="bg-gray-800 px-1 rounded text-cyan-300">getAttribute()</code>, <code className="bg-gray-800 px-1 rounded text-green-300">setAttribute()</code>, <code className="bg-gray-800 px-1 rounded text-orange-300">hasAttribute()</code>, <code className="bg-gray-800 px-1 rounded text-red-300">removeAttribute()</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3">Основные методы работы с атрибутами:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">getAttribute() - получить значение:</div>
                  <pre className="text-xs text-gray-300">
{`let изображение = document.querySelector("img");
let src = изображение.getAttribute("src");
let alt = изображение.getAttribute("alt");`}
                  </pre>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">setAttribute() - установить значение:</div>
                  <pre className="text-xs text-gray-300">
{`изображение.setAttribute("src", "новое-изображение.jpg");
изображение.setAttribute("alt", "Новое описание");`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Дополнительные методы:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">hasAttribute() - проверить наличие:</div>
                  <pre className="text-xs text-gray-300">
{`if (элемент.hasAttribute("disabled")) {
  console.log("Элемент отключен");
}`}
                  </pre>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">removeAttribute() - удалить атрибут:</div>
                  <pre className="text-xs text-gray-300">
{`элемент.removeAttribute("disabled");
элемент.removeAttribute("data-info");`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">HTML структура:</div>
                <pre className="text-sm text-gray-300">
{`<img id="photo" src="old.jpg" alt="Старое фото" data-id="123">
<input id="email" type="email" placeholder="Введите email" required>
<button id="submit" class="btn">Отправить</button>`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Работа с атрибутами:</div>
                <pre className="text-sm text-gray-300">
{`let фото = document.getElementById("photo");
let email = document.getElementById("email");
let кнопка = document.getElementById("submit");

// Получение атрибутов
console.log(фото.getAttribute("src")); // "old.jpg"
console.log(фото.getAttribute("data-id")); // "123"
console.log(email.getAttribute("placeholder")); // "Введите email"

// Изменение атрибутов
фото.setAttribute("src", "new.jpg");
фото.setAttribute("alt", "Новое фото");
фото.setAttribute("data-category", "profile");

// Проверка и удаление атрибутов
if (email.hasAttribute("required")) {
  console.log("Поле обязательно для заполнения");
  // email.removeAttribute("required"); // Сделать необязательным
}

// Работа с классами через атрибуты
кнопка.setAttribute("class", "btn btn-primary disabled");
кнопка.setAttribute("disabled", ""); // Пустое значение для булевых атрибутов`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* data-атрибуты и dataset */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-orange-400" />
          data-атрибуты и dataset
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-orange-300">data-атрибуты</span> — это специальные HTML-атрибуты, предназначенные для <span className="font-medium text-yellow-300">хранения пользовательских данных</span> прямо в HTML-разметке.
          </p>
          <p>
            JavaScript предоставляет удобный доступ к этим атрибутам через <code className="bg-gray-800 px-1 rounded text-orange-300">dataset</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Синтаксис data-атрибутов:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`<!-- HTML -->
<div id="user-card" 
     data-user-id="12345" 
     data-user-name="Иван Петров"
     data-role="admin"
     data-active-status="true">
  Карточка пользователя
</div>

<!-- JavaScript -->
let карточка = document.getElementById("user-card");

// Доступ через dataset
console.log(карточка.dataset.userId);     // "12345"
console.log(карточка.dataset.userName);   // "Иван Петров"
console.log(карточка.dataset.role);       // "admin"
console.log(карточка.dataset.activeStatus); // "true"`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Работа с dataset:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">Чтение данных:</div>
                  <pre className="text-xs text-gray-300">
{`// camelCase для сложных имен
data-user-full-name → dataset.userFullName
data-api-endpoint → dataset.apiEndpoint`}
                  </pre>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">Изменение данных:</div>
                  <pre className="text-xs text-gray-300">
{`карточка.dataset.userId = "67890";
карточка.dataset.status = "inactive"; // Добавление нового
delete карточка.dataset.role; // Удаление`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Практические примеры:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">HTML структура:</div>
                <pre className="text-sm text-gray-300">
{`<div class="product-card" data-product-id="1001" data-price="2990" data-category="electronics" data-in-stock="true">
  <h3>Смартфон</h3>
  <button class="buy-btn" data-action="buy">Купить</button>
  <button class="fav-btn" data-action="favorite">В избранное</button>
</div>`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">JavaScript код:</div>
                <pre className="text-sm text-gray-300">
{`let карточкаТовара = document.querySelector(".product-card");
let кнопки = document.querySelectorAll(".product-card button");

// Получение информации о товаре
let productId = карточкаТовара.dataset.productId;
let цена = Number(карточкаТовара.dataset.price);
let категория = карточкаТовара.dataset.category;
let вНаличии = карточкаТовара.dataset.inStock === "true";

console.log(\`Товар #\${productId}: \${цена} руб., категория: \${категория}\`);

// Обработка действий
кнопки.forEach(кнопка => {
  кнопка.addEventListener("click", function() {
    let действие = this.dataset.action;
    
    switch(действие) {
      case "buy":
        if (вНаличии) {
          console.log(\`Добавлен в корзину товар #\${productId}\`);
        } else {
          console.log("Товар временно недоступен");
        }
        break;
      case "favorite":
        this.classList.toggle("active");
        console.log(\`Товар #\${productId} добавлен в избранное\`);
        break;
    }
  });
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
          <Brush className="w-5 h-5 text-green-400" />
          Комплексные примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Интерактивная форма:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`<form id="userForm">
  <input type="text" id="username" placeholder="Имя пользователя">
  <input type="email" id="email" placeholder="Email">
  <button type="submit" id="submitBtn">Отправить</button>
  <div id="message"></div>
</form>

<script>
let форма = document.getElementById("userForm");
let имя = document.getElementById("username");
let email = document.getElementById("email");
let кнопка = document.getElementById("submitBtn");
let сообщение = document.getElementById("message");

форма.addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Валидация
  if (!имя.value.trim()) {
    сообщение.textContent = "Введите имя!";
    сообщение.style.color = "red";
    имя.style.borderColor = "red";
    return;
  }
  
  // Успешная отправка
  сообщение.textContent = "Форма отправлена успешно!";
  сообщение.style.color = "green";
  сообщение.style.fontWeight = "bold";
  
  // Сброс формы
  setTimeout(() => {
    форма.reset();
    сообщение.textContent = "";
    имя.style.borderColor = "";
    email.style.borderColor = "";
  }, 3000);
});
</script>`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Динамическая галерея:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`<div class="gallery">
  <img src="img1.jpg" alt="Фото 1" data-full="full1.jpg">
  <img src="img2.jpg" alt="Фото 2" data-full="full2.jpg">
  <img src="img3.jpg" alt="Фото 3" data-full="full3.jpg">
</div>
<div id="modal" style="display:none;">
  <img id="modalImg" src="">
  <span id="closeBtn">✕</span>
</div>

<script>
let миниатюры = document.querySelectorAll(".gallery img");
let модал = document.getElementById("modal");
let модалИзображение = document.getElementById("modalImg");
let закрыть = document.getElementById("closeBtn");

миниатюры.forEach(миниатюра => {
  миниатюра.addEventListener("click", function() {
    let полныйПуть = this.dataset.full;
    модалИзображение.setAttribute("src", полныйПуть);
    модал.style.display = "block";
    модал.style.backgroundColor = "rgba(0,0,0,0.8)";
  });
});

закрыть.addEventListener("click", () => {
  модал.style.display = "none";
});
</script>`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Система тем оформления:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`<div class="theme-switcher">
  <button data-theme="light">Светлая</button>
  <button data-theme="dark">Темная</button>
  <button data-theme="auto">Авто</button>
</div>

<script>
let кнопкиТем = document.querySelectorAll("[data-theme]");
let body = document.body;

кнопкиТем.forEach(кнопка => {
  кнопка.addEventListener("click", function() {
    let тема = this.dataset.theme;
    
    // Удаление предыдущих классов тем
    body.className = body.className.replace(/theme-\w+/g, '');
    
    // Применение новой темы
    if (тема !== "auto") {
      body.classList.add(\`theme-\${тема}\`);
    }
    
    // Обновление атрибута
    body.setAttribute("data-current-theme", тема);
    
    // Изменение стилей кнопок
    кнопкиТем.forEach(btn => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });
    
    this.style.backgroundColor = "#007bff";
    this.style.color = "white";
  });
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
          <div className="bg-pink-500/20 p-2 rounded-lg flex-shrink-0">
            <Edit3 className="w-5 h-5 text-pink-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как изменять текстовое содержимое, стили и атрибуты элементов DOM с помощью textContent, innerHTML, element.style и методов работы с атрибутами!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;