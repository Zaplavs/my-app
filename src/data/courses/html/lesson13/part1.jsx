// src/data/courses/html/lesson13/part1.jsx
import React from 'react';
import {XCircle, Accessibility, Group, Tag, Square, Circle, Layout, Check } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Accessibility className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧩 Урок 13: Группировка и доступность форм</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Структурирование и обеспечение доступности форм</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование тегов <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<fieldset>'}</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<legend>'}</code> для <span className="font-medium">логической группировки</span> элементов формы, а также научиться правильно <span className="font-medium">связывать</span> метки с полями ввода для <span className="font-medium">повышения доступности</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Роль структуры и доступности в формах */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layout className="w-5 h-5 text-green-400" />
          Роль структуры и доступности в формах
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            По мере усложнения форм, становится критически важным <span className="font-medium">правильно их структурировать</span> и обеспечить <span className="font-medium">доступность</span> для всех пользователей, включая тех, кто использует <span className="font-medium">вспомогательные технологии</span> (скринридеры).
          </p>
          <p>
            Хорошо структурированная и доступная форма:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Легче воспринимается</span> всеми пользователями.</li>
            <li><span className="font-medium">Лучше индексируется</span> поисковыми системами.</li>
            <li><span className="font-medium">Обеспечивает равные возможности</span> для людей с ограниченными возможностями.</li>
            <li><span className="font-medium">Упрощает сопровождение</span> кода разработчиками.</li>
          </ul>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем это нужно?</span>
            <span>
              Представьте сложную регистрационную форму с десятками полей. Без логической группировки и правильной разметки пользователь может запутаться, а скринридер не сможет корректно "прочитать" форму. Группировка и доступность — это <span className="font-medium">основа</span> удобного и инклюзивного пользовательского опыта.
            </span>
          </p>
        </div>
      </div>

      {/* Тег <fieldset> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Group className="w-5 h-5 text-purple-400" />
          Тег {'<fieldset>'} — Логическая группа
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<fieldset>'}</code> (от <em>field set</em> — набор полей) используется для <span className="font-medium">визуальной и логической группировки</span> связанных элементов формы.
          </p>
          <p>
            Это <span className="font-medium">парный</span> тег, внутри которого размещаются элементы, которые <span className="font-medium">логически связаны</span> между собой.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-purple-300 text-sm overflow-x-auto">
              <code>{`<fieldset>
  <legend>Личная информация</legend>
  <label for="fname">Имя:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Фамилия:</label>
  <input type="text" id="lname" name="lname">
</fieldset>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <fieldset className="border border-gray-600 rounded-lg p-4">
                <legend className="text-sm font-bold text-purple-300 px-2">Личная информация</legend>
                <div className="flex flex-col gap-2 mt-2">
                  <div>
                    <label htmlFor="fname" className="block text-sm text-gray-300 mb-1">Имя:</label>
                    <input type="text" id="fname" name="fname" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white placeholder-gray-500 text-sm focus:border-purple-500 focus:outline-none transition-colors duration-200" />
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-sm text-gray-300 mb-1">Фамилия:</label>
                    <input type="text" id="lname" name="lname" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white placeholder-gray-500 text-sm focus:border-purple-500 focus:outline-none transition-colors duration-200" />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Используется:</span>
            <span>
              Для группировки полей, относящихся к одной теме (например, "Личная информация", "Адрес", "Платёжные данные"). Браузеры обычно отображают <code className="bg-gray-700 px-1 rounded">{'<fieldset>'}</code> с <span className="font-medium">рамкой</span> вокруг содержимого.
            </span>
          </p>
        </div>
      </div>

      {/* Тег <legend> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-orange-400" />
          Тег {'<legend>'} — Заголовок группы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<legend>'}</code> (от <em>legend</em> — легенда) используется для определения <span className="font-medium">заголовка</span> для группы полей, созданной с помощью <code className="bg-gray-700 px-1 rounded">{'<fieldset>'}</code>.
          </p>
          <p>
            Это <span className="font-medium">парный</span> тег. Он должен быть <span className="font-medium">первым</span> дочерним элементом внутри <code className="bg-gray-700 px-1 rounded">{'<fieldset>'}</code>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-orange-300 text-sm overflow-x-auto">
              <code>{`<fieldset>
  <legend>Контактные данные</legend>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <label for="phone">Телефон:</label>
  <input type="tel" id="phone" name="phone">
</fieldset>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <fieldset className="border border-gray-600 rounded-lg p-4">
                <legend className="text-sm font-bold text-orange-300 px-2">Контактные данные</legend>
                <div className="flex flex-col gap-2 mt-2">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email:</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white placeholder-gray-500 text-sm focus:border-orange-500 focus:outline-none transition-colors duration-200" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-300 mb-1">Телефон:</label>
                    <input type="tel" id="phone" name="phone" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white placeholder-gray-500 text-sm focus:border-orange-500 focus:outline-none transition-colors duration-200" />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Используется:</span>
            <span>
              Для <span className="font-medium">описания</span> назначения группы полей. Скринридеры используют текст из <code className="bg-gray-700 px-1 rounded">{'<legend>'}</code>, чтобы объяснить пользователю, какие поля находятся в этой группе.
            </span>
          </p>
        </div>
      </div>

      {/* Связь <label> с полями */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-green-400" />
          Связь {'<label>'} с полями ввода
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Правильная <span className="font-medium">связь</span> меток (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<label>'}</code>) с полями ввода (<code className="bg-gray-700 px-1 rounded">{'<input>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<textarea>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<select>'}</code>) — ключевой аспект <span className="font-medium">доступности</span>.
          </p>
          <p>
            Эта связь позволяет:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Правильная связь через атрибуты</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-3">
              <li><span className="font-medium">Щелчок по метке</span> активирует соответствующее поле ввода.</li>
              <li><span className="font-medium">Скринридеры</span> могут корректно "прочитать" название поля при фокусе на нем.</li>
              <li>Улучшает <span className="font-medium">общий UX</span> для всех пользователей.</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <p className="text-xs text-gray-400 mb-1">Пример правильного кода:</p>
              <pre className="text-green-400 text-xs overflow-x-auto">
                <code>{`<label for="username">Имя пользователя:</label>
<input type="text" id="username" name="username">`}</code>
              </pre>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Как это работает:</span>
                <span>
                  Атрибут <code className="bg-gray-700 px-1 rounded">for</code> у <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> должен <span className="font-medium">точно совпадать</span> со значением атрибута <code className="bg-gray-700 px-1 rounded">id</code> у соответствующего поля ввода.
                </span>
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-bold text-red-300">Неправильная связь (или её отсутствие)</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-3">
              <li>Щелчок по метке <span className="font-medium">не активирует</span> поле.</li>
              <li>Скринридеры <span className="font-medium">не могут</span> связать метку с полем.</li>
              <li>Форма становится <span className="font-medium">менее удобной</span> и <span className="font-medium">менее доступной</span>.</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <p className="text-xs text-gray-400 mb-1">Пример неправильного кода:</p>
              <pre className="text-red-400 text-xs overflow-x-auto">
                <code>{`<label>Имя пользователя:</label> <!-- Нет атрибута 'for' -->
<input type="text" name="username"> <!-- Нет атрибута 'id' -->`}</code>
              </pre>
            </div>
            <div className="p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
              <p className="text-red-300 text-xs flex items-start gap-2">
                <span className="font-medium">⚠️ Важно:</span>
                <span>
                  <span className="font-medium">Всегда</span> используйте пару <code className="bg-gray-700 px-1 rounded">{'<label for="id">...</label>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<input id="id" ...>'}</code>.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Пример комплексной формы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layout className="w-5 h-5 text-cyan-400" />
          Пример комплексной доступной формы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как может выглядеть <span className="font-medium">хорошо структурированная и доступная</span> форма регистрации, использующая все изученные элементы:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{`<form action="/register" method="post">
  <fieldset>
    <legend>Личная информация</legend>
    
    <label for="first-name">Имя:</label>
    <input type="text" id="first-name" name="first_name" required><br><br>
    
    <label for="last-name">Фамилия:</label>
    <input type="text" id="last-name" name="last_name" required><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </fieldset>

  <fieldset>
    <legend>Адрес</legend>
    
    <label for="street">Улица:</label>
    <input type="text" id="street" name="street"><br><br>
    
    <label for="city">Город:</label>
    <input type="text" id="city" name="city">
  </fieldset>

  <fieldset>
    <legend>Предпочтения</legend>
    
    <input type="checkbox" id="newsletter" name="preferences" value="newsletter">
    <label for="newsletter">Подписаться на рассылку</label><br><br>
    
    <input type="radio" id="theme-light" name="theme" value="light" checked>
    <label for="theme-light">Светлая тема</label><br>
    <input type="radio" id="theme-dark" name="theme" value="dark">
    <label for="theme-dark">Темная тема</label>
  </fieldset>

  <input type="submit" value="Зарегистрироваться">
</form>`}</code>
            </pre>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Что здесь хорошо:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Форма обернута в тег <code className="bg-gray-700 px-1 rounded">{'<form>'}</code> с атрибутами <code className="bg-gray-700 px-1 rounded">action</code> и <code className="bg-gray-700 px-1 rounded">method</code>.</li>
                <li>Связанные поля сгруппированы в <code className="bg-gray-700 px-1 rounded">{'<fieldset>'}</code>.</li>
                <li>Каждая группа имеет заголовок <code className="bg-gray-700 px-1 rounded">{'<legend>'}</code>.</li>
                <li>Каждая метка <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> связана с полем через атрибуты <code className="bg-gray-700 px-1 rounded">for</code> и <code className="bg-gray-700 px-1 rounded">id</code>.</li>
                <li>Поля имеют атрибуты <code className="bg-gray-700 px-1 rounded">name</code> для отправки данных.</li>
                <li>Обязательные поля помечены атрибутом <code className="bg-gray-700 px-1 rounded">required</code>.</li>
              </ul>
            </span>
          </p>
        </div>
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
              Теперь вы знаете, как <span className="font-medium text-green-300">логически группировать</span> элементы формы с помощью тегов <code className="bg-gray-700 px-1 rounded">{'<fieldset>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<legend>'}</code>, а также как <span className="font-medium text-cyan-300">обеспечить доступность</span> форм, правильно связывая метки <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> с полями ввода. Эти навыки делают ваши веб-формы не только <span className="font-medium text-purple-300">удобнее</span> для всех пользователей, но и <span className="font-medium text-orange-300">доступнее</span> для людей с ограниченными возможностями. Это важный шаг к созданию <span className="font-medium text-yellow-300">инклюзивного</span> и <span className="font-medium text-blue-300">профессионального</span> веб-опыта.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Part1;