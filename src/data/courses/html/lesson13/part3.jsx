// src/data/courses/html/lesson10/part3.jsx
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Основы доступности (Accessibility) в HTML</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию <span className="font-medium text-green-300">доступного</span> HTML-контента, используя семантические теги, атрибуты <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">alt</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">title</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">lang</code> и т.д.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Страница профиля с семантикой
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент страницы профиля пользователя. Страница должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> с именем пользователя.</li>
          <li>Аватар пользователя (изображение <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>).</li>
          <li>Раздел <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> "Информация о пользователе" с подзаголовком <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> и абзацами <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с краткой биографией.</li>
          <li>Раздел <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> "Контакты" с подзаголовком <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> и списком <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code> контактов (email, телефон).</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования к доступности:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>У тега <code className="bg-gray-700 px-1 rounded">{'<html>'}</code> должен быть атрибут <code className="bg-gray-700 px-1 rounded">lang</code> со значением <code className="bg-gray-700 px-1 rounded">"ru"</code>.</li>
          <li>У изображения аватара должен быть содержательный атрибут <code className="bg-gray-700 px-1 rounded">alt</code>.</li>
          <li>У всех списков контактов должны быть правильные теги <code className="bg-gray-700 px-1 rounded">{'<li>'}</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте теги <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<header>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<p>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<li>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>. Не забудьте основную структуру документа <code className="bg-gray-700 px-1 rounded">{'<!DOCTYPE html>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<html>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<head>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<body>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Доступная галерея изображений
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент галереи из 3 изображений (например, фотографии природы). Каждое изображение должно быть оформлено как <code className="bg-gray-700 px-1 rounded">{'<figure>'}</code> с подписью <code className="bg-gray-700 px-1 rounded">{'<figcaption>'}</code>.
        </p>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования к доступности:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>У каждого тега <code className="bg-gray-700 px-1 rounded">{'<img>'}</code> должен быть <span className="font-medium">уникальный</span> и <span className="font-medium">содержательный</span> атрибут <code className="bg-gray-700 px-1 rounded">alt</code>, описывающий изображение.</li>
          <li>Подпись <code className="bg-gray-700 px-1 rounded">{'<figcaption>'}</code> должна <span className="font-medium">дополнять</span> информацию в <code className="bg-gray-700 px-1 rounded">alt</code>, а не дублировать её.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Структура: <code className="bg-gray-700 px-1 rounded">{'<figure>'}</code> {'->'} <code className="bg-gray-700 px-1 rounded">{'<img>'}</code> (с <code className="bg-gray-700 px-1 rounded">src</code> и <code className="bg-gray-700 px-1 rounded">alt</code>) {'->'} <code className="bg-gray-700 px-1 rounded">{'<figcaption>'}</code>. Пример: <code className="bg-gray-700 px-1 rounded">{'<img src="mountain.jpg" alt="Заснеженные вершины гор под голубым небом"> <figcaption>Вид на Эверест в ясный день</figcaption>'}</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Доступная форма обратной связи
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент формы обратной связи. Форма должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Поля ввода: "Имя" (<code className="bg-gray-700 px-1 rounded">{'<input type="text">'}</code>), "Email" (<code className="bg-gray-700 px-1 rounded">{'<input type="email">'}</code>), "Сообщение" (<code className="bg-gray-700 px-1 rounded">{'<textarea>'}</code>).</li>
          <li>Кнопка отправки (<code className="bg-gray-700 px-1 rounded">{'<input type="submit">'}</code> или <code className="bg-gray-700 px-1 rounded">{'<button>'}</code>).</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования к доступности:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Каждое поле ввода должно быть связано с <span className="font-medium">подписью</span> (<code className="bg-gray-700 px-1 rounded">{'<label>'}</code>) через атрибуты <code className="bg-gray-700 px-1 rounded">for</code> и <code className="bg-gray-700 px-1 rounded">id</code>.</li>
          <li>Поле "Email" должно быть <span className="font-medium">обязательным</span> (атрибут <code className="bg-gray-700 px-1 rounded">required</code>).</li>
          <li>Поле "Сообщение" должно иметь <span className="font-medium">подсказку</span> (<code className="bg-gray-700 px-1 rounded">placeholder</code>).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример структуры: <code className="bg-gray-700 px-1 rounded">{'<label for="user-email">Email *</label>'}</code> {'->'} <code className="bg-gray-700 px-1 rounded">{'<input type="email" id="user-email" name="email" required>'}</code>.</p>
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
    <title>Моя страница</title>
</head>
<body>
    <h1>Добро пожаловать!</h1>
    <img src="welcome.jpg">
    <p>Это моя первая страница.</p>
    <form>
        Имя: <input type="text" name="name"><br>
        Email: <input type="text" name="email"><br>
        <input type="submit" value="Отправить">
    </form>
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
            <p>Проверьте: атрибут <code className="bg-gray-700 px-1 rounded">lang</code> у <code className="bg-gray-700 px-1 rounded">{'<html>'}</code>, атрибуты <code className="bg-gray-700 px-1 rounded">alt</code> у <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>, использование тегов <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> для полей формы, тип правильного поля ввода для email.</p>
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
          Создайте HTML-страницу "Моя доступная страница" со следующими элементами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Заголовок страницы</span> "Моя доступная страница".</li>
          <li>
            <span className="font-medium">Навигационное меню</span> (<code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>) с ссылками:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>"Главная"</li>
              <li>"О нас"</li>
              <li>"Контакты"</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Основной контент</span> (<code className="bg-gray-700 px-1 rounded">{'<main>'}</code>):
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Заголовок <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> "Добро пожаловать!".</li>
              <li>Абзац <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> с приветственным текстом.</li>
              <li>Изображение <code className="bg-gray-700 px-1 rounded">{'<img>'}</code> с содержательным <code className="bg-gray-700 px-1 rounded">alt</code>.</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Боковая панель</span> (<code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>) с заголовком <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> "Последние новости" и списком <code className="bg-gray-700 px-1 rounded">{'<ul>'}</code> из 2-3 новостей.</li>
          <li><span className="font-medium">Подвал</span> (<code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>) с информацией об авторском праве.</li>
        </ul>
        <p className="text-gray-300">
          <span className="font-medium">Требования к доступности:</span> Используйте все изученные семантические теги (<code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>), атрибут <code className="bg-gray-700 px-1 rounded">lang</code>, правильные <code className="bg-gray-700 px-1 rounded">alt</code> для изображений, связанные <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<input>'}</code>.
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
              Эти задания помогли вам закрепить навыки создания <span className="font-medium text-green-300">доступного</span> HTML-контента. Вы попрактиковались в использовании семантических тегов (<code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<article>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<figure>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<figcaption>'}</code>), атрибутов <code className="bg-gray-700 px-1 rounded">lang</code>, <code className="bg-gray-700 px-1 rounded">alt</code>, <code className="bg-gray-700 px-1 rounded">title</code>, правильной структуры заголовков (<code className="bg-gray-700 px-1 rounded">{'<h1>'}-{'<h6>'}</code>) и связывания подписей с полями формы (<code className="bg-gray-700 px-1 rounded">{'<label>'}</code> + <code className="bg-gray-700 px-1 rounded">for/id</code>). Создание доступных веб-страниц — это не только моральная обязанность, но и важный шаг к профессиональному мастерству веб-разработчика.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;