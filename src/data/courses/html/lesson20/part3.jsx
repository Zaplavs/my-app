// src/data/courses/html/lesson20/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, CheckCircle, Settings, Hash } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Валидация HTML и лучшие практики</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по <span className="font-medium text-green-300">валидации HTML</span> и применению <span className="font-medium text-cyan-300">лучших практик</span> написания HTML-кода: <span className="font-medium text-purple-300">закрытие тегов</span>, <span className="font-medium text-orange-300">строчные буквы</span>, <span className="font-medium text-blue-300">осмысленные комментарии</span>, использование <span className="font-medium text-red-300">валидатора W3C</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Исправление HTML-кода с ошибками
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен фрагмент HTML-кода с множеством ошибок. Исправьте все ошибки, связанные с:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Неправильным закрытием тегов.</li>
          <li>Использованием заглавных букв в тегах и атрибутах.</li>
          <li>Отсутствием обязательных атрибутов.</li>
          <li>Неправильной структурой документа.</li>
        </ul>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm overflow-x-auto">
            <code>{`<!DOCTYPE HTML>
<HTML LANG="EN">
<HEAD>
  <META CHARSET="UTF-8">
  <TITLE>Мой сайт</TITLE>
</HEAD>
<BODY>
  <DIV CLASS="container">
    <H1>Добро пожаловать</H1>
    <P>Это абзац текста.
    <IMG SRC="image.jpg">
    <BR></BR>
    <INPUT TYPE="text" NAME="username">
    <UL>
      <LI>Пункт 1
      <LI>Пункт 2
    </UL>
  </DIV>
</BODY>
</HTML>`}</code>
          </pre>
        </div>
        <p className="text-gray-300">
          <span className="font-medium">Требования:</span> Исправьте все ошибки и проверьте код с помощью валидатора W3C.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Проверьте: DOCTYPE, теги html, head, body, закрытие абзацев, пустые элементы (img, br, input), закрытие элементов списка (li).</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Создание семантически правильной страницы
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "О компании" со следующими элементами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Корректный DOCTYPE и структура документа.</li>
          <li>Тег <code className="bg-gray-700 px-1 rounded">{'<html>'}</code> с атрибутом <code className="bg-gray-700 px-1 rounded">lang</code>.</li>
          <li>Метаинформация: charset, viewport, description.</li>
          <li>Семантические теги: <code className="bg-gray-700 px-1 rounded">{'<header>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<article>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>.</li>
          <li>Правильная иерархия заголовков (<code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> - <code className="bg-gray-700 px-1 rounded">{'<h3>'}</code>).</li>
          <li>Изображения с атрибутами <code className="bg-gray-700 px-1 rounded">alt</code>.</li>
          <li>Форма обратной связи с правильно связанными метками.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования к коду:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Все теги должны быть написаны строчными буквами.</li>
          <li>Все теги должны быть правильно закрыты.</li>
          <li>Используйте осмысленные комментарии для разделения секций.</li>
          <li>Код должен проходить валидацию в W3C без ошибок.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте структуру: <code className="bg-gray-700 px-1 rounded">{'<!DOCTYPE html>'}</code> → <code className="bg-gray-700 px-1 rounded">{'<html lang="ru">'}</code> → <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> (с мета-тегами) → <code className="bg-gray-700 px-1 rounded">{'<body>'}</code> (с семантическими тегами).</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Добавление комментариев и форматирование
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен фрагмент HTML-кода без комментариев и с плохим форматированием. Выполните следующие задачи:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Добавьте комментарии для объяснения назначения каждой секции.</li>
          <li>Отформатируйте код с правильными отступами.</li>
          <li>Проверьте, все ли теги правильно закрыты.</li>
          <li>Убедитесь, что все атрибуты написаны строчными буквами.</li>
        </ul>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-orange-300 text-sm overflow-x-auto">
            <code>{`<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><title>Блог</title></head><body><header><h1>Мой блог</h1><nav><ul><li><a href="/">Главная</a></li><li><a href="/about">О блоге</a></li></ul></nav></header><main><article><h2>Первая запись</h2><p>Это содержимое первой записи в блоге.</p><time datetime="2023-01-01">1 января 2023</time></article><article><h2>Вторая запись</h2><p>Это содержимое второй записи в блоге.</p><time datetime="2023-01-02">2 января 2023</time></article></main><aside><h3>Популярные записи</h3><ul><li><a href="#">Как писать HTML</a></li><li><a href="#">CSS для начинающих</a></li></ul></aside><footer><p>&copy; 2023 Мой блог</p></footer></body></html>`}</code>
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
            <p>Разбейте код на строки, добавьте отступы (обычно 2 пробела на уровень вложенности), добавьте комментарии вида <code className="bg-gray-700 px-1 rounded">{'<!-- Шапка сайта -->'}</code>, <code className="bg-gray-700 px-1 rounded">{'<!-- Основное содержимое -->'}</code> и т.д.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Проверка валидатором и анализ ошибок
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу с 5 различными типами ошибок, которые могут быть найдены валидатором W3C. Затем:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-gray-300 mb-3">
          <li>Проверьте страницу с помощью <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">валидатора W3C</a>.</li>
          <li>Зафиксируйте найденные ошибки и предупреждения.</li>
          <li>Исправьте все ошибки.</li>
          <li>Снова проверьте страницу валидатором.</li>
          <li>Опишите, какие ошибки были найдены и как они были исправлены.</li>
        </ol>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Примеры ошибок для включения:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Незакрытый тег.</li>
          <li>Неправильное вложение тегов.</li>
          <li>Отсутствие обязательного атрибута.</li>
          <li>Использование устаревшего атрибута.</li>
          <li>Дублирование ID.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Примеры: <code className="bg-gray-700 px-1 rounded">{'<p>Абзац без закрывающего тега'}</code>, <code className="bg-gray-700 px-1 rounded">{'<div><p></div></p>'}</code> (неправильное вложение), <code className="bg-gray-700 px-1 rounded">{'<img src="image.jpg">'}</code> (без alt), <code className="bg-gray-700 px-1 rounded">{'<font color="red">Текст</font>'}</code> (устаревший тег).</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексный проект: Создание валидного сайта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте полноценный HTML-сайт "Личный блог" со следующими страницами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Главная страница</span> (index.html) с приветствием и списком последних записей.</li>
          <li><span className="font-medium">Страница "О блоге"</span> (about.html) с информацией об авторе.</li>
          <li><span className="font-medium">Страница "Контакты"</span> (contact.html) с формой обратной связи.</li>
        </ul>
        <p className="text-gray-300 mb-3">
          <span className="font-medium">Требования ко всем страницам:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Корректная структура документа с DOCTYPE, html, head, body.</li>
          <li>Атрибут <code className="bg-gray-700 px-1 rounded">lang="ru"</code> у тега <code className="bg-gray-700 px-1 rounded">{'<html>'}</code>.</li>
          <li>Необходимые мета-теги: charset, viewport, description (уникальный для каждой страницы).</li>
          <li>Семантическая разметка с использованием <code className="bg-gray-700 px-1 rounded">{'<header>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<article>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>.</li>
          <li>Правильная иерархия заголовков.</li>
          <li>Все изображения с содержательными атрибутами <code className="bg-gray-700 px-1 rounded">alt</code>.</li>
          <li>Форма с правильно связанными метками и полями ввода.</li>
          <li>Все теги написаны строчными буквами и правильно закрыты.</li>
          <li>Использованы осмысленные комментарии.</li>
          <li>Код проходит валидацию W3C без ошибок.</li>
        </ul>
        <p className="text-gray-300">
          После создания проверьте все страницы валидатором W3C и приложите скриншоты результатов проверки.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки <span className="font-medium text-green-300">валидации HTML</span> и применения <span className="font-medium text-purple-300">лучших практик</span> написания HTML-кода. Вы попрактиковались в <span className="font-medium text-cyan-300">исправлении ошибок</span>, создании <span className="font-medium text-orange-300">семантически правильной</span> разметки, <span className="font-medium text-blue-300">добавлении комментариев</span> и <span className="font-medium text-red-300">форматировании кода</span>. Эти навыки делают ваш код <span className="font-medium text-yellow-300">чище</span>, <span className="font-medium text-green-300">понятнее</span> для других разработчиков и <span className="font-medium text-purple-300">корректнее</span> в работе браузеров. Регулярная проверка валидатором — это <span className="font-medium text-orange-300">признак профессионализма</span> и заботы о качестве продукта.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;