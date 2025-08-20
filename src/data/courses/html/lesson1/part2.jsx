// src/data/courses/html/lesson1/part1.jsx
import React from 'react';
import { Globe, Server, Monitor, FileText, Code, Palette, Zap } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Globe className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🌐 Урок 1: Что такое веб и как работает интернет?</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Основы веба: клиент, сервер, браузер, HTTP</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять фундаментальные концепции Всемирной паутины, роль ключевых технологий (HTML, CSS, JS) и принцип работы браузера.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Всемирная паутина (Веб)? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-green-400" />
          Что такое Всемирная паутина (Веб)?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Всемирная паутина (World Wide Web, WWW или просто Веб)</span> — это система взаимосвязанных документов и ресурсов, доступных через <span className="font-medium">Интернет</span>. Представьте себе гигантическую библиотеку, где все книги (веб-страницы) связаны между собой гиперссылками.
          </p>
          <p>
            Веб работает на основе <span className="font-medium">гипертекста</span> — текста, содержащего ссылки на другие тексты. Когда вы кликаете по ссылке, вы переходите с одной "страницы книги" на другую, даже если она находится на другом "полке" (сервере) в другой части мира.
          </p>
        </div>
      </div>

      {/* Клиент-серверная архитектура */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Server className="w-5 h-5 text-purple-400" />
          Клиент-серверная архитектура
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Основа работы Веба — это взаимодействие между <span className="font-medium text-purple-300">клиентом</span> и <span className="font-medium text-orange-300">сервером</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Monitor className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Клиент (Client)</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Это ваш <span className="font-medium">браузер</span> (Chrome, Firefox, Safari и т.д.).</li>
              <li>Он <span className="font-medium">запрашивает</span> информацию у сервера.</li>
              <li>Получает данные и <span className="font-medium">отображает</span> их пользователю.</li>
              <li>Пример: Вы вводите адрес сайта в адресную строку — это действие клиента.</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-6 h-6 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">Сервер (Server)</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Это мощный компьютер, подключенный к интернету 24/7.</li>
              <li>Он <span className="font-medium">хранит</span> веб-страницы, изображения, файлы и т.д.</li>
              <li>Он <span className="font-medium">отвечает</span> на запросы клиентов.</li>
              <li>Пример: Компьютер компании Google, хранящий сайт google.com.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Как работает HTTP-запрос? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-yellow-400" />
          Как работает HTTP-запрос?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">HTTP (HyperText Transfer Protocol)</span> — это язык общения между вашим браузером (клиентом) и веб-сервером.
          </p>
          <p><span className="font-medium">Процесс выглядит так:</span></p>
        </div>
        <ol className="list-decimal pl-6 space-y-3 mt-4 text-gray-300">
          <li>
            <span className="font-medium">Вы вводите адрес</span> в браузере, например, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">https://www.example.com</code>.
          </li>
          <li>
            <span className="font-medium">Браузер отправляет HTTP-запрос</span> на сервер <code className="bg-gray-700 px-1.5 py-0.5 rounded">www.example.com</code>. Этот запрос похож на вопрос: "Покажи мне главную страницу сайта!".
          </li>
          <li>
            <span className="font-medium">Сервер получает запрос</span> и ищет запрашиваемую страницу.
          </li>
          <li>
            <span className="font-medium">Сервер отправляет HTTP-ответ</span> обратно в браузер. Ответ содержит HTML-код страницы (и, возможно, ссылки на CSS, JS, изображения).
          </li>
          <li>
            <span className="font-medium">Браузер получает ответ</span> и начинает "строить" страницу, интерпретируя HTML, применяя CSS и запуская JavaScript.
          </li>
          <li>
            <span className="font-medium">Вы видите готовую веб-страницу</span> на экране.
          </li>
        </ol>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Примечание:</span>
            <span>
              Это упрощенное объяснение. На самом деле процесс может быть сложнее, включая DNS-запросы (поиск IP-адреса по имени сайта), обработку cookies, кэширование и т.д.
            </span>
          </p>
        </div>
      </div>

      {/* Что такое веб-страница и сайт? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-pink-400" />
          Что такое веб-страница и сайт?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <ul className="space-y-3">
            <li>
              <span className="font-medium text-pink-300">Веб-страница</span> — это один документ в Вебе, обычно написанный на языке <strong>HTML</strong>. У неё есть уникальный адрес (URL). Пример: <code className="bg-gray-700 px-1.5 py-0.5 rounded">https://www.example.com/index.html</code>.
            </li>
            <li>
              <span className="font-medium text-cyan-300">Веб-сайт (или просто сайт)</span> — это совокупность веб-страниц, объединённых общей темой, дизайном и обычно находящихся на одном домене. Пример: сайт новостного портала содержит множество страниц (главная, новости, погода, контакты и т.д.).
            </li>
          </ul>
          <p>
            Можно провести аналогию с книгой: <span className="font-medium">страница</span> — это лист бумаги, а <span className="font-medium">сайт</span> — это вся книга.
          </p>
        </div>
      </div>

      {/* Роль HTML, CSS и JavaScript */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-red-400" />
          Роль HTML, CSS и JavaScript
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Это три основных языка/технологии, из которых состоит современный Веб. Их часто называют "тремя китами" фронтенд-разработки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-red-400" />
              <h3 className="font-bold text-red-300">HTML</h3>
              <span className="text-xs bg-red-900/30 text-red-300 px-2 py-1 rounded">Структура</span>
            </div>
            <p className="text-sm text-gray-300">
              <span className="font-medium">(HyperText Markup Language)</span> — язык разметки. Он определяет <span className="font-medium">содержание</span> и <span className="font-medium">структуру</span> страницы: заголовки, абзацы, списки, ссылки, изображения.
              <br /><br />
              <span className="font-medium">Аналогия:</span> Каркас дома.
            </p>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold text-blue-300">CSS</h3>
              <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">Стиль</span>
            </div>
            <p className="text-sm text-gray-300">
              <span className="font-medium">(Cascading Style Sheets)</span> — таблицы стилей. Отвечают за <span className="font-medium">внешний вид</span>: цвета, шрифты, расположение элементов, анимации.
              <br /><br />
              <span className="font-medium">Аналогия:</span> Дизайн интерьера и экстерьера.
            </p>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <h3 className="font-bold text-yellow-300">JavaScript</h3>
              <span className="text-xs bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded">Интерактив</span>
            </div>
            <p className="text-sm text-gray-300">
              Язык программирования, который делает страницы <span className="font-medium">динамичными</span> и <span className="font-medium">интерактивными</span>: обработка кликов, валидация форм, обновление содержимого без перезагрузки.
              <br /><br />
              <span className="font-medium">Аналогия:</span> Электропроводка и умные системы дома.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Как они работают вместе?</h4>
          <ul className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
            <li><strong>HTML</strong> создает скелет веб-страницы.</li>
            <li><strong>CSS</strong> "одевает" его, придавая форму и стиль.</li>
            <li><strong>JavaScript</strong> "оживляет" страницу, добавляя поведение и интерактивность.</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете основы того, как работает Всемирная паутина. Вы узнали про клиент-серверную архитектуру, HTTP-запросы и роль трёх ключевых технологий: HTML, CSS и JavaScript.
              Это прочный фундамент, на котором строится всё последующее обучение. В следующем уроке мы начнём погружение в HTML — язык разметки, с которого начинается создание любой веб-страницы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;