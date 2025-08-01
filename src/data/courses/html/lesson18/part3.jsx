// src/data/courses/html/lesson18/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Accessibility, Eye, Ear, User, Brain } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Доступность (a11y) и ARIA</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию <span className="font-medium text-green-300">доступных</span> веб-страниц, используя атрибуты <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">alt</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">aria-label</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">role</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">title</code> и семантические теги HTML.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Доступная навигация
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент навигационного меню сайта. Меню должно включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Логотип сайта (изображение <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>).</li>
          <li>Ссылки на страницы: "Главная", "О нас", "Услуги", "Контакты".</li>
          <li>Кнопку поиска (иконка лупы).</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования к доступности:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>У изображения логотипа должен быть содержательный атрибут <code className="bg-gray-700 px-1 rounded">alt</code>.</li>
          <li>У кнопки поиска (иконки) должен быть атрибут <code className="bg-gray-700 px-1 rounded">aria-label</code> с описанием действия.</li>
          <li>Используйте семантический тег <code className="bg-gray-700 px-1 rounded">{'<nav>'}</code> для обертки меню.</li>
          <li>У тега <code className="bg-gray-700 px-1 rounded">{'<nav>'}</code> должен быть атрибут <code className="bg-gray-700 px-1 rounded">aria-label</code> с названием навигации.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте структуру: <code className="bg-gray-700 px-1 rounded">{'<nav aria-label="Основная навигация">...</nav>'}</code>. Для логотипа: <code className="bg-gray-700 px-1 rounded">{'<img src="logo.png" alt="Название компании">'}</code>. Для кнопки поиска: <code className="bg-gray-700 px-1 rounded">{'<button aria-label="Поиск по сайту">'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Доступные карточки товаров
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент с 3 карточками товаров. Каждая карточка должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Изображение товара (<code className="bg-gray-700 px-1 rounded">{'<img>'}</code>).</li>
          <li>Название товара (<code className="bg-gray-700 px-1 rounded">{'<h3>'}</code>).</li>
          <li>Описание товара (<code className="bg-gray-700 px-1 rounded">{'<p>'}</code>).</li>
          <li>Цену товара (<code className="bg-gray-700 px-1 rounded">{'<p>'}</code>).</li>
          <li>Кнопку "Добавить в корзину" (<code className="bg-gray-700 px-1 rounded">{'<button>'}</code>).</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования к доступности:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>У каждого изображения товара должен быть содержательный атрибут <code className="bg-gray-700 px-1 rounded">alt</code>, описывающий товар.</li>
          <li>Кнопка "Добавить в корзину" должна иметь атрибут <code className="bg-gray-700 px-1 rounded">aria-label</code>, включающий название товара.</li>
          <li>Цена должна быть помечена с помощью подходящей ARIA-роли или атрибута.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для цены можно использовать <code className="bg-gray-700 px-1 rounded">{'<p aria-label="Цена: 1000 рублей">1000 ₽</p>'}</code>. Для кнопки: <code className="bg-gray-700 px-1 rounded">{'<button aria-label="Добавить в корзину Ноутбук Dell XPS 13">'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Доступная форма входа
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент формы входа пользователя. Форма должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Поле ввода email (<code className="bg-gray-700 px-1 rounded">{'<input type="email">'}</code>).</li>
          <li>Поле ввода пароля (<code className="bg-gray-700 px-1 rounded">{'<input type="password">'}</code>).</li>
          <li>Чекбокс "Запомнить меня" (<code className="bg-gray-700 px-1 rounded">{'<input type="checkbox">'}</code>).</li>
          <li>Кнопку входа (<code className="bg-gray-700 px-1 rounded">{'<button>'}</code>).</li>
          <li>Ссылку "Забыли пароль?".</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования к доступности:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Каждое поле ввода должно быть связано с <span className="font-medium">подписью</span> (<code className="bg-gray-700 px-1 rounded">{'<label>'}</code>) через атрибуты <code className="bg-gray-700 px-1 rounded">for</code> и <code className="bg-gray-700 px-1 rounded">id</code>.</li>
          <li>Поле email должно быть <span className="font-medium">обязательным</span> (атрибут <code className="bg-gray-700 px-1 rounded">required</code>).</li>
          <li>Чекбокс "Запомнить меня" должен иметь правильно связанную метку.</li>
          <li>Кнопка входа должна иметь содержательный текст.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример структуры: <code className="bg-gray-700 px-1 rounded">{'<label for="user-email">Email *</label>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<input type="email" id="user-email" name="email" required>'}</code>. Для чекбокса: <code className="bg-gray-700 px-1 rounded">{'<input type="checkbox" id="remember">'}</code> → <code className="bg-gray-700 px-1 rounded">{'<label for="remember">Запомнить меня</label>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Найди и исправь ошибки доступности
        </h3>
        <p className="text-gray-300 mb-3">
          Найдите и исправьте все ошибки, связанные с <span className="font-medium">доступностью</span>, в приведенном ниже HTML-коде. Объясните, почему это ошибки.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm overflow-x-auto">
            <code>{`<!DOCTYPE html>
<html>
<head>
    <title>Мой сайт</title>
</head>
<body>
    <nav>
        <img src="logo.png">
        <a href="/">Главная</a>
        <a href="/about">О нас</a>
        <a href="/contact">Контакты</a>
        <button>🔍</button>
    </nav>
    <main>
        <h1>Добро пожаловать!</h1>
        <img src="banner.jpg">
        <form>
            <input type="text" placeholder="Имя пользователя"><br>
            <input type="password" placeholder="Пароль"><br>
            <button>Войти</button>
        </form>
    </main>
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
            <p>Проверьте: атрибут <code className="bg-gray-700 px-1 rounded">lang</code> у <code className="bg-gray-700 px-1 rounded">{'<html>'}</code>, атрибуты <code className="bg-gray-700 px-1 rounded">alt</code> у изображений, использование тегов <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> для полей формы, атрибуты <code className="bg-gray-700 px-1 rounded">aria-label</code> для кнопок без текста.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная доступная страница
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Доступный магазин" со следующими элементами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Заголовок страницы</span> "Доступный магазин - Главная".</li>
          <li>
            <span className="font-medium">Шапка сайта</span> (<code className="bg-gray-700 px-1 rounded">{'<header>'}</code>) с:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Логотипом (<code className="bg-gray-700 px-1 rounded">{'<img>'}</code> с <code className="bg-gray-700 px-1 rounded">alt</code>).</li>
              <li>Навигационным меню (<code className="bg-gray-700 px-1 rounded">{'<nav>'}</code> с <code className="bg-gray-700 px-1 rounded">aria-label</code>) с ссылками.</li>
              <li>Кнопкой корзины (иконка) с <code className="bg-gray-700 px-1 rounded">aria-label</code>.</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Основной контент</span> (<code className="bg-gray-700 px-1 rounded">{'<main>'}</code>):
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Заголовок <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> "Наши товары".</li>
              <li>Секция с 2-3 карточками товаров (как в задании 2), каждая в <code className="bg-gray-700 px-1 rounded">{'<article>'}</code>.</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Боковая панель</span> (<code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>) с фильтрами:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Заголовок <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> "Фильтры".</li>
              <li>Форма фильтрации с полями и кнопкой "Применить".</li>
            </ul>
          </li>
          <li><span className="font-medium">Подвал</span> (<code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>) с контактной информацией.</li>
        </ul>
        <p className="text-gray-300">
          <span className="font-medium">Требования к доступности:</span> Используйте все изученные семантические теги, атрибуты <code className="bg-gray-700 px-1 rounded">lang</code>, <code className="bg-gray-700 px-1 rounded">alt</code>, <code className="bg-gray-700 px-1 rounded">aria-label</code>, <code className="bg-gray-700 px-1 rounded">role</code>, правильно связанные <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<input>'}</code>, иерархию заголовков.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Accessibility className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания <span className="font-medium text-green-300">доступных</span> веб-страниц. Вы попрактиковались в использовании атрибутов <code className="bg-gray-700 px-1 rounded">alt</code>, <code className="bg-gray-700 px-1 rounded">aria-label</code>, <code className="bg-gray-700 px-1 rounded">role</code>, <code className="bg-gray-700 px-1 rounded">title</code>, семантических тегов (<code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<article>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>), правильной структуры заголовков и связывания подписей с полями формы. Создание доступных веб-страниц — это не только моральная обязанность, но и важный шаг к профессиональному мастерству веб-разработчика. Доступность делает веб лучше для <span className="font-medium text-purple-300">всех</span> пользователей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;