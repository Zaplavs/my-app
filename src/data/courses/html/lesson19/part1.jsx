// src/data/courses/html/lesson19/part1.jsx
import React from 'react';
import { Database, Code, Tag, FileText, Settings, Hash } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Database className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🏷️ Урок 19: Пользовательские данные (data-* атрибуты)</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Хранение пользовательских данных в HTML</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование <span className="font-medium">data-*</span> атрибутов для хранения <span className="font-medium">пользовательских данных</span> в HTML-элементах. Научиться получать и использовать эти данные в <span className="font-medium">JavaScript</span>. Изучить примеры: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">data-price</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">data-category</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">data-id</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое data-* атрибуты */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-green-400" />
          Что такое data-* атрибуты?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Data-атрибуты</span> — это пользовательские атрибуты HTML, которые позволяют <span className="font-medium">хранить</span> дополнительную информацию <span className="font-medium">внутри</span> HTML-элементов. Они <span className="font-medium">не влияют</span> на внешний вид или поведение элемента, но могут быть <span className="font-medium">прочитаны</span> и <span className="font-medium">использованы</span> с помощью JavaScript.
          </p>
          <p>
            Data-атрибуты:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Начинаются с префикса <code className="bg-gray-700 px-1.5 py-0.5 rounded">data-</code></li>
            <li>Могут содержать любые данные (строки, числа, JSON и т.д.)</li>
            <li>Не отображаются визуально на странице</li>
            <li>Доступны через JavaScript API</li>
            <li>Являются частью спецификации HTML5</li>
          </ul>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем это нужно?</span>
            <span>
              Представьте интернет-магазин, где каждому товару нужно хранить цену, категорию и идентификатор. Вместо того чтобы искать эту информацию в сложной структуре DOM или делать дополнительные запросы к серверу, вы можете <span className="font-medium">просто сохранить</span> эти данные в атрибутах элемента. Это делает код <span className="font-medium">проще</span>, <span className="font-medium">быстрее</span> и <span className="font-medium">удобнее</span> для разработки.
            </span>
          </p>
        </div>
      </div>

      {/* Синтаксис data-* атрибутов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          Синтаксис data-* атрибутов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Data-атрибуты создаются по следующим правилам:
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Tag className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">Формат атрибута</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Начинается с <code className="bg-gray-700 px-1 rounded">data-</code></li>
              <li>После дефиса следует имя атрибута (только латинские буквы, цифры, дефисы и подчеркивания)</li>
              <li>Имена регистрозависимые: <code className="bg-gray-700 px-1 rounded">data-price</code> и <code className="bg-gray-700 px-1 rounded">data-Price</code> — разные атрибуты</li>
              <li>Значение может быть любым текстом</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-bold text-cyan-300">Примеры корректных атрибутов</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1 rounded">data-id="123"</code></li>
              <li><code className="bg-gray-700 px-1 rounded">data-price="99.99"</code></li>
              <li><code className="bg-gray-700 px-1 rounded">data-category="electronics"</code></li>
              <li><code className="bg-gray-700 px-1 rounded">data-user-name="john_doe"</code></li>
              <li><code className="bg-gray-700 px-1 rounded">data-config={"{"}theme" : "dark{"}"}</code></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <h3 className="font-bold text-green-300 mb-3">Примеры использования в HTML:</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Товар в интернет-магазине:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`<div class="product" data-id="101" data-price="299.99" data-category="laptops">
  <h3>Ноутбук Dell XPS 13</h3>
  <p>Мощный и компактный ноутбук для работы</p>
</div>`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Пользовательский профиль:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                <code>{`<div class="user-card" data-user-id="456" data-role="admin" data-status="active">
  <img src="avatar.jpg" alt="Аватар">
  <span>Иван Петров</span>
</div>`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Настройки компонента:</p>
              <pre className="text-purple-300 text-xs overflow-x-auto">
                <code>{`<div class="slider" data-min="0" data-max="100" data-step="5" data-value="50">
  <!-- Слайдер -->
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Работа с data-* атрибутами в JavaScript */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-orange-400" />
          Работа с data-* атрибутами в JavaScript
        </h2>
        
        {/* dataset API */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Settings className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Dataset API — Современный способ
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Свойство <code className="bg-gray-700 px-1 rounded text-orange-300">dataset</code> предоставляет <span className="font-medium">удобный</span> доступ ко всем data-атрибутам элемента.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <p className="text-xs text-gray-400 mb-2">HTML:</p>
              <pre className="text-orange-300 text-xs overflow-x-auto">
                <code>{`<div id="product" data-id="123" data-price="99.99" data-category="books">
  <h3>Изучаем HTML</h3>
</div>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <p className="text-xs text-gray-400 mb-2">JavaScript:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`const product = document.getElementById('product');

// Чтение данных
console.log(product.dataset.id);        // "123"
console.log(product.dataset.price);     // "99.99"
console.log(product.dataset.category);  // "books"

// Запись данных
product.dataset.discount = "10";
product.dataset.inStock = "true";`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* getAttribute/setAttribute */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              getAttribute/setAttribute — Универсальный способ
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Методы <code className="bg-gray-700 px-1 rounded text-green-300">getAttribute()</code> и <code className="bg-gray-700 px-1 rounded text-green-300">setAttribute()</code> работают с <span className="font-medium">любыми</span> атрибутами, включая data-атрибуты.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <p className="text-xs text-gray-400 mb-2">HTML:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`<button data-action="delete" data-item-id="42">Удалить</button>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <p className="text-xs text-gray-400 mb-2">JavaScript:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                <code>{`const button = document.querySelector('button');

// Чтение данных
const action = button.getAttribute('data-action');     // "delete"
const itemId = button.getAttribute('data-item-id');    // "42"

// Запись данных
button.setAttribute('data-confirmed', 'true');
button.setAttribute('data-timestamp', Date.now());`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Преобразование имен атрибутов */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Hash className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Преобразование имен атрибутов
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              При использовании <code className="bg-gray-700 px-1 rounded">dataset</code> имена атрибутов преобразуются по определенным правилам:
            </p>
          </div>
          <div className="mt-4 bg-gray-900/50 p-4 rounded-xl border border-purple-700/30 pl-11">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400 mb-2">HTML атрибут:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li><code className="bg-gray-700 px-1 rounded">data-id</code> → <code className="bg-gray-700 px-1 rounded">dataset.id</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">data-user-name</code> → <code className="bg-gray-700 px-1 rounded">dataset.userName</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">data-product-id</code> → <code className="bg-gray-700 px-1 rounded">dataset.productId</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">data-is-active</code> → <code className="bg-gray-700 px-1 rounded">dataset.isActive</code></li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">JavaScript dataset:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li><code className="bg-gray-700 px-1 rounded">dataset.id</code> → <code className="bg-gray-700 px-1 rounded">data-id</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">dataset.userName</code> → <code className="bg-gray-700 px-1 rounded">data-user-name</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">dataset.productId</code> → <code className="bg-gray-700 px-1 rounded">data-product-id</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">dataset.isActive</code> → <code className="bg-gray-700 px-1 rounded">data-is-active</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-blue-400" />
          Практические примеры использования
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <span className="text-green-400">🛒</span>
              </div>
              <h3 className="font-bold text-green-300">Интернет-магазин</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400 mb-1">HTML:</p>
                <pre className="text-green-300 text-xs overflow-x-auto">
                  <code>{`<div class="product-list">
  <div class="product" data-id="1" data-price="29.99" data-category="books" data-stock="5">
    <h3>Книга по HTML</h3>
    <button class="add-to-cart">Добавить в корзину</button>
  </div>
  <div class="product" data-id="2" data-price="199.99" data-category="electronics" data-stock="2">
    <h3>Наушники</h3>
    <button class="add-to-cart">Добавить в корзину</button>
  </div>
</div>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">JavaScript:</p>
                <pre className="text-cyan-300 text-xs overflow-x-auto">
                  <code>{`document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const product = this.closest('.product');
    const productId = product.dataset.id;
    const price = parseFloat(product.dataset.price);
    const stock = parseInt(product.dataset.stock);
    
    if (stock > 0) {
      // Добавить в корзину
      console.log(\`Добавлен товар \${productId} за \${price} руб.\`);
    }
  });
});`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <span className="text-purple-400">🎨</span>
              </div>
              <h3 className="font-bold text-purple-300">Динамическое оформление</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400 mb-1">HTML:</p>
                <pre className="text-purple-300 text-xs overflow-x-auto">
                  <code>{`<div class="theme-switcher">
  <button data-theme="light" data-bg="#ffffff" data-text="#000000">Светлая</button>
  <button data-theme="dark" data-bg="#1a1a1a" data-text="#ffffff">Темная</button>
  <button data-theme="blue" data-bg="#e3f2fd" data-text="#0d47a1">Синяя</button>
</div>`}</code>
                </pre>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">JavaScript:</p>
                <pre className="text-orange-300 text-xs overflow-x-auto">
                  <code>{`document.querySelectorAll('[data-theme]').forEach(button => {
  button.addEventListener('click', function() {
    const theme = this.dataset.theme;
    const bgColor = this.dataset.bg;
    const textColor = this.dataset.text;
    
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    
    localStorage.setItem('theme', theme);
  });
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Фильтрация и сортировка:</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">HTML:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                <code>{`<div class="filters">
  <button data-filter="all">Все</button>
  <button data-filter="electronics">Электроника</button>
  <button data-filter="books">Книги</button>
</div>
<div class="items">
  <div class="item" data-category="electronics" data-price="299">Телефон</div>
  <div class="item" data-category="books" data-price="19">Роман</div>
  <div class="item" data-category="electronics" data-price="199">Планшет</div>
</div>`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">JavaScript:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', function() {
    const filter = this.dataset.filter;
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Ограничения и лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-red-400" />
          Ограничения и лучшие практики
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <span className="text-red-400">⚠️</span>
              </div>
              <h3 className="font-bold text-red-300">Ограничения</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Data-атрибуты хранят только <span className="font-medium">строки</span></li>
              <li>Для сложных данных нужно <span className="font-medium">преобразование типов</span></li>
              <li>Не стоит хранить <span className="font-medium">большие объемы данных</span></li>
              <li>Не используйте для <span className="font-medium">критической информации</span> (безопасность)</li>
              <li>Не заменяют <span className="font-medium">правильную семантику</span> HTML</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <span className="text-green-400">✅</span>
              </div>
              <h3 className="font-bold text-green-300">Лучшие практики</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Используйте <span className="font-medium">описательные имена</span> атрибутов</li>
              <li>Согласуйте имена в <span className="font-medium">одном стиле</span> по всему проекту</li>
              <li>Проверяйте <span className="font-medium">наличие данных</span> перед использованием</li>
              <li>Преобразуйте типы данных при <span className="font-medium">необходимости</span></li>
              <li>Используйте для <span className="font-medium">управления поведением</span>, а не содержимым</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Советы по преобразованию типов:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Числа: <code className="bg-gray-700 px-1 rounded">parseFloat(element.dataset.price)</code> или <code className="bg-gray-700 px-1 rounded">parseInt(element.dataset.count)</code></li>
                <li>Булевы значения: <code className="bg-gray-700 px-1 rounded">element.dataset.visible === 'true'</code></li>
                <li>JSON: <code className="bg-gray-700 px-1 rounded">JSON.parse(element.dataset.config)</code></li>
                <li>Проверка наличия: <code className="bg-gray-700 px-1 rounded">if ('price' in element.dataset)</code></li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как <span className="font-medium text-purple-300">использовать data-атрибуты</span> для хранения пользовательских данных в HTML. Вы изучили <span className="font-medium text-green-300">синтаксис</span> атрибутов (<code className="bg-gray-700 px-1 rounded">data-*</code>), научились <span className="font-medium text-cyan-300">работать с ними</span> в JavaScript через <code className="bg-gray-700 px-1 rounded">dataset</code> и <code className="bg-gray-700 px-1 rounded">getAttribute/setAttribute</code>, разобрали <span className="font-medium text-orange-300">практические примеры</span> использования (интернет-магазин, темизация, фильтрация) и познакомились с <span className="font-medium text-red-300">лучшими практиками</span>. Data-атрибуты — это мощный инструмент для <span className="font-medium text-blue-300">создания интерактивных</span> и <span className="font-medium text-yellow-300">динамических</span> веб-приложений, который делает код <span className="font-medium text-green-300">чище</span> и <span className="font-medium text-purple-300">удобнее</span> в сопровождении.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;