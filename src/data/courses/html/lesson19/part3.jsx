// src/data/courses/html/lesson19/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Database, Tag, Settings } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Пользовательские данные (data-* атрибуты)</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию <span className="font-medium text-green-300">data-*</span> атрибутов для хранения пользовательских данных в HTML и их обработке с помощью <span className="font-medium text-cyan-300">JavaScript</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Карточки товаров с data-атрибутами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент с 3 карточками товаров интернет-магазина. Каждая карточка должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Изображение товара (<code className="bg-gray-700 px-1 rounded">{'<img>'}</code>).</li>
          <li>Название товара (<code className="bg-gray-700 px-1 rounded">{'<h3>'}</code>).</li>
          <li>Описание товара (<code className="bg-gray-700 px-1 rounded">{'<p>'}</code>).</li>
          <li>Цену товара (<code className="bg-gray-700 px-1 rounded">{'<p>'}</code>).</li>
          <li>Кнопку "Добавить в корзину" (<code className="bg-gray-700 px-1 rounded">{'<button>'}</code>).</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования к data-атрибутам:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Каждая карточка (<code className="bg-gray-700 px-1 rounded">{'<div>'}</code> или другой контейнер) должна иметь data-атрибуты: <code className="bg-gray-700 px-1 rounded">data-id</code>, <code className="bg-gray-700 px-1 rounded">data-price</code>, <code className="bg-gray-700 px-1 rounded">data-category</code>.</li>
          <li>Кнопка "Добавить в корзину" должна иметь data-атрибут <code className="bg-gray-700 px-1 rounded">data-product-id</code> со значением, соответствующим id товара.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте структуру: <code className="bg-gray-700 px-1 rounded">{'<div class="product-card" data-id="1" data-price="29.99" data-category="electronics">...</div>'}</code>. Для кнопки: <code className="bg-gray-700 px-1 rounded">{'<button class="add-to-cart" data-product-id="1">Добавить в корзину</button>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Фильтрация списка с data-атрибутами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент списка статей (например, блога) с кнопками фильтрации. Структура должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Кнопки фильтрации: "Все", "Технологии", "Дизайн", "Бизнес".</li>
          <li>Список статей (<code className="bg-gray-700 px-1 rounded">{'<div>'}</code> или <code className="bg-gray-700 px-1 rounded">{'<article>'}</code>), каждая со своей категорией.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования к data-атрибутам:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Кнопки фильтрации должны иметь data-атрибут <code className="bg-gray-700 px-1 rounded">data-filter</code> с названием категории ("all", "tech", "design", "business").</li>
          <li>Статьи должны иметь data-атрибут <code className="bg-gray-700 px-1 rounded">data-category</code> с соответствующей категорией.</li>
          <li>Добавьте data-атрибут <code className="bg-gray-700 px-1 rounded">data-date</code> к каждой статье с датой публикации.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример структуры кнопки: <code className="bg-gray-700 px-1 rounded">{'<button data-filter="tech">Технологии</button>'}</code>. Пример статьи: <code className="bg-gray-700 px-1 rounded">{'<article data-category="tech" data-date="2023-05-15">...</article>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Интерактивное меню с data-атрибутами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент навигационного меню с подменю. Меню должно включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Основные пункты меню (<code className="bg-gray-700 px-1 rounded">{'<li>'}</code>).</li>
          <li>Подменю (<code className="bg-gray-700 px-1 rounded">{'<ul>'}</code>) для некоторых пунктов.</li>
          <li>Индикаторы наличия подменю (иконки или стрелки).</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования к data-атрибутам:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Пункты меню с подменю должны иметь data-атрибут <code className="bg-gray-700 px-1 rounded">data-has-submenu</code> со значением "true".</li>
          <li>Подменю должны иметь data-атрибут <code className="bg-gray-700 px-1 rounded">data-submenu-id</code> для связи с родительским пунктом.</li>
          <li>Добавьте data-атрибут <code className="bg-gray-700 px-1 rounded">data-state</code> со значением "closed" или "open" для управления состоянием подменю.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример структуры: <code className="bg-gray-700 px-1 rounded">{'<li data-has-submenu="true" data-submenu-id="services-submenu">Услуги</li>'}</code>. Подменю: <code className="bg-gray-700 px-1 rounded">{'<ul id="services-submenu" data-state="closed">...</ul>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Найди и исправь ошибки в data-атрибутах
        </h3>
        <p className="text-gray-300 mb-3">
          Найдите и исправьте все ошибки в использовании <span className="font-medium">data-атрибутов</span> в приведенном ниже HTML-коде. Объясните, почему это ошибки.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm overflow-x-auto">
            <code>{`<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Мой сайт</title>
</head>
<body>
    <div class="product" data-id=123 data-price="99.99" data-category="electronics">
        <h3>Смартфон</h3>
        <button class="buy-btn" data-productid="123">Купить</button>
    </div>
    <div class="user" data-user_name="ivan" data-user-role="admin" data-status=active>
        <span>Иван</span>
    </div>
    <nav>
        <button data-filter="all">Все товары</button>
        <button data-filter='electronics'>Электроника</button>
        <button data-filter="books">Книги</button>
    </nav>
    <div class="items">
        <div class="item" data-category="electronics" data-price=299>Телефон</div>
        <div class="item" data-category="books" data-price="19">Роман</div>
    </div>
</body>
</html>`}</code>
          </pre>
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Проверьте: правильность имен атрибутов (должны начинаться с data-), корректность значений (должны быть в кавычках), соответствие между атрибутами (data-productid vs data-id).</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная галерея с data-атрибутами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Галерея изображений" со следующими элементами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Заголовок страницы</span> "Галерея изображений".</li>
          <li>
            <span className="font-medium">Фильтры</span> (<code className="bg-gray-700 px-1 rounded">{'<div>'}</code>) с кнопками:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>"Все"</li>
              <li>"Природа"</li>
              <li>"Город"</li>
              <li>"Животные"</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Галерея</span> (<code className="bg-gray-700 px-1 rounded">{'<div>'}</code>) с 6 изображениями:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Каждое изображение в <code className="bg-gray-700 px-1 rounded">{'<figure>'}</code>.</li>
              <li>Изображение (<code className="bg-gray-700 px-1 rounded">{'<img>'}</code>) с атрибутами <code className="bg-gray-700 px-1 rounded">alt</code> и <code className="bg-gray-700 px-1 rounded">src</code>.</li>
              <li>Подпись (<code className="bg-gray-700 px-1 rounded">{'<figcaption>'}</code>) с описанием.</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-300">
          <span className="font-medium">Требования к data-атрибутам:</span>
          <ul className="list-disc pl-5 space-y-1 text-gray-300 mt-2">
            <li>Кнопки фильтров должны иметь data-атрибут <code className="bg-gray-700 px-1 rounded">data-category</code> ("all", "nature", "city", "animals").</li>
            <li>Каждая фигура (<code className="bg-gray-700 px-1 rounded">{'<figure>'}</code>) должна иметь data-атрибуты: <code className="bg-gray-700 px-1 rounded">data-id</code>, <code className="bg-gray-700 px-1 rounded">data-category</code>, <code className="bg-gray-700 px-1 rounded">data-tags</code> (список тегов через запятую).</li>
            <li>Изображения должны иметь data-атрибут <code className="bg-gray-700 px-1 rounded">data-fullsize</code> с путем к полноразмерному изображению.</li>
            <li>Добавьте data-атрибут <code className="bg-gray-700 px-1 rounded">data-author</code> к каждой фигуре с именем автора.</li>
          </ul>
        </p>
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
              Эти задания помогли вам закрепить навыки использования <span className="font-medium text-purple-300">data-атрибутов</span> для хранения пользовательских данных в HTML. Вы попрактиковались в создании правильной <span className="font-medium text-green-300">структуры</span> с data-атрибутами для карточек товаров, систем фильтрации, навигационных меню и галерей. Эти знания позволяют вам создавать <span className="font-medium text-cyan-300">интерактивные</span> и <span className="font-medium text-blue-300">динамические</span> веб-приложения, где данные хранятся прямо в HTML и легко доступны через JavaScript. Data-атрибуты — это <span className="font-medium text-orange-300">мощный инструмент</span> для связи HTML и JavaScript, делающий код <span className="font-medium text-yellow-300">чище</span> и <span className="font-medium text-red-300">удобнее</span> в сопровождении.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;