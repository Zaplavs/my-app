// src/data/courses/html/lesson17/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Folder, Image, Link, Navigation, HardDrive } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Работа с файлами и путями</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по <span className="font-medium text-green-300">организации файлов</span> веб-проекта, использованию <span className="font-medium text-orange-300">абсолютных</span> и <span className="font-medium text-purple-300">относительных путей</span>, созданию <span className="font-medium text-cyan-300">ссылок</span> на изображения, страницы и другие ресурсы.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание структуры проекта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте структуру папок для веб-сайта компании "ТехноЛайт". Проект должен включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Главную страницу <code className="bg-gray-700 px-1 rounded">index.html</code> в корне проекта.</li>
          <li>Страницы <code className="bg-gray-700 px-1 rounded">about.html</code> и <code className="bg-gray-700 px-1 rounded">contact.html</code> в корне проекта.</li>
          <li>Папку <code className="bg-gray-700 px-1 rounded">/css/</code> с файлом <code className="bg-gray-700 px-1 rounded">styles.css</code>.</li>
          <li>Папку <code className="bg-gray-700 px-1 rounded">/js/</code> с файлом <code className="bg-gray-700 px-1 rounded">main.js</code>.</li>
          <li>Папку <code className="bg-gray-700 px-1 rounded">/img/</code> с изображениями <code className="bg-gray-700 px-1 rounded">logo.png</code> и <code className="bg-gray-700 px-1 rounded">banner.jpg</code>.</li>
          <li>Папку <code className="bg-gray-700 px-1 rounded">/img/icons/</code> с иконками <code className="bg-gray-700 px-1 rounded">home.png</code> и <code className="bg-gray-700 px-1 rounded">user.png</code>.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте только латинские буквы и дефисы в именах файлов.</li>
          <li>Разместите файлы в соответствующих папках согласно их назначению.</li>
          <li>Создайте структуру в виде дерева папок в текстовом виде.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте символы <code className="bg-gray-700 px-1 rounded">├──</code> для ветвлений и <code className="bg-gray-700 px-1 rounded">└──</code> для последнего элемента в папке. Пример: <code className="bg-gray-700 px-1 rounded">папка/</code> для папок и <code className="bg-gray-700 px-1 rounded">файл.html</code> для файлов.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Ссылки в навигационном меню
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент навигационного меню для сайта с такой структурой:
        </p>
        <pre className="bg-gray-900 p-3 rounded-lg text-sm mb-3">
          <code className="text-cyan-300">{`сайт/
├── index.html
├── pages/
│   ├── about.html
│   ├── services.html
│   └── portfolio/
│       └── projects.html
└── contact.html`}</code>
        </pre>
        <p className="text-gray-300 mb-3">
          Меню должно содержать ссылки на все страницы. Предположим, что код находится в файле <code className="bg-gray-700 px-1 rounded">pages/about.html</code>.
        </p>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте правильные <span className="font-medium">относительные пути</span> для всех ссылок.</li>
          <li>Добавьте атрибут <code className="bg-gray-700 px-1 rounded">title</code> к каждой ссылке с описанием страницы.</li>
          <li>Ссылка на текущую страницу (<code className="bg-gray-700 px-1 rounded">about.html</code>) должна иметь класс <code className="bg-gray-700 px-1 rounded">active</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Путь к главной странице: <code className="bg-gray-700 px-1 rounded">../index.html</code>. Путь к странице в той же папке: <code className="bg-gray-700 px-1 rounded">services.html</code>. Путь к странице в подпапке: <code className="bg-gray-700 px-1 rounded">portfolio/projects.html</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Работа с изображениями и ресурсами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент страницы товара интернет-магазина. Страница должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Логотип сайта из папки <code className="bg-gray-700 px-1 rounded">/img/</code>.</li>
          <li>Основное изображение товара из папки <code className="bg-gray-700 px-1 rounded">/img/products/</code>.</li>
          <li>Миниатюры других изображений товара из той же папки.</li>
          <li>Ссылку на таблицу размеров в формате PDF из папки <code className="bg-gray-700 px-1 rounded">/docs/</code>.</li>
          <li>Ссылку на страницу доставки в папке <code className="bg-gray-700 px-1 rounded">/pages/info/</code>.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Все изображения должны иметь <span className="font-medium">содержательные</span> атрибуты <code className="bg-gray-700 px-1 rounded">alt</code>.</li>
          <li>Ссылка на PDF должна иметь атрибут <code className="bg-gray-700 px-1 rounded">download</code>.</li>
          <li>Используйте правильные относительные пути согласно структуре проекта.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример структуры: <code className="bg-gray-700 px-1 rounded">{'<img src="../img/products/item1-main.jpg" alt="Смартфон XYZ - вид спереди">'}</code>. Для ссылки на PDF: <code className="bg-gray-700 px-1 rounded">{'<a href="../docs/size-chart.pdf" download>Таблица размеров</a>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Найди и исправь ошибки в путях
        </h3>
        <p className="text-gray-300 mb-3">
          Найдите и исправьте все ошибки в приведенном ниже HTML-коде, связанные с <span className="font-medium">путями к файлам</span>. Объясните, почему это ошибки.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm overflow-x-auto">
            <code>{`<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Мой сайт</title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <header>
        <img src="images/logo.png" alt="Логотип">
        <nav>
            <a href="index.html">Главная</a>
            <a href="/pages/about.html">О нас</a>
            <a href="../contact/contact.html">Контакты</a>
        </nav>
    </header>
    <main>
        <img src="./img/banner.jpg" alt="Баннер">
        <p>Скачать <a href="docs/price list.pdf">прайс-лист</a></p>
        <p>Посмотреть <a href="https://example.com/portfolio">портфолио</a></p>
    </main>
    <footer>
        <img src="/icons/social/facebook.png" alt="Facebook">
    </footer>
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
            <p>Проверьте: согласованность путей (абсолютные/относительные), правильность написания имен папок, наличие пробелов в именах файлов, правильность использования символов <code className="bg-gray-700 px-1 rounded">./</code> и <code className="bg-gray-700 px-1 rounded">../</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная страница с правильной структурой
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Галерея проектов" со следующими элементами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Заголовок страницы</span> "Галерея проектов - Наше портфолио".</li>
          <li>
            <span className="font-medium">Шапка сайта</span> (<code className="bg-gray-700 px-1 rounded">{'<header>'}</code>) с:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Логотипом из <code className="bg-gray-700 px-1 rounded">/img/</code>.</li>
              <li>Навигационным меню (<code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>) с ссылками на главную, о нас, галерею и контакты.</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Основной контент</span> (<code className="bg-gray-700 px-1 rounded">{'<main>'}</code>):
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Заголовок <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> "Наши проекты".</li>
              <li>Галерею из 3 проектов, каждый в <code className="bg-gray-700 px-1 rounded">{'<figure>'}</code> с изображением из <code className="bg-gray-700 px-1 rounded">/img/projects/</code> и подписью <code className="bg-gray-700 px-1 rounded">{'<figcaption>'}</code>.</li>
              <li>Ссылку на полное портфолио в PDF из <code className="bg-gray-700 px-1 rounded">/docs/</code> с атрибутом <code className="bg-gray-700 px-1 rounded">download</code>.</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Боковая панель</span> (<code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>) с:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Заголовком <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> "Категории проектов".</li>
              <li>Списком <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code> категорий с ссылками на страницы категорий в <code className="bg-gray-700 px-1 rounded">/pages/categories/</code>.</li>
            </ul>
          </li>
          <li><span className="font-medium">Подвал</span> (<code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>) с копирайтом и ссылками на социальные сети из <code className="bg-gray-700 px-1 rounded">/img/icons/social/</code>.</li>
        </ul>
        <p className="text-gray-300">
          <span className="font-medium">Требования:</span> Используйте правильную <span className="font-medium">структуру проекта</span>, все <span className="font-medium">пути должны быть корректными</span>, изображения должны иметь <span className="font-medium">содержательные атрибуты alt</span>, ссылки должны быть <span className="font-medium">семантически правильными</span>.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Folder className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки <span className="font-medium text-purple-300">организации файлов</span> веб-проекта, использования <span className="font-medium text-orange-300">абсолютных</span> и <span className="font-medium text-cyan-300">относительных путей</span>, создания <span className="font-medium text-green-300">ссылок</span> на различные ресурсы. Вы попрактиковались в создании правильной <span className="font-medium text-blue-300">структуры папок</span>, написании <span className="font-medium text-yellow-300">корректных путей</span> к изображениям, страницам и документам. Эти навыки делают ваши веб-проекты не только <span className="font-medium text-red-300">структурированными</span> и <span className="font-medium text-purple-300">поддерживаемыми</span>, но и <span className="font-medium text-green-300">переносимыми</span> между различными серверами и средами разработки. Это <span className="font-medium text-orange-300">важный навык</span> профессионального веб-разработчика.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;