// src/data/courses/html/lesson7/part1.jsx
import React from 'react';
import { Link, ExternalLink, Anchor, Hash, Globe, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Link className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔗 Урок 7: Гиперссылки и навигация в HTML</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Тег {'<a>'} и его возможности</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить создание гиперссылок с помощью тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<a>'}</code>, понять разницу между относительными и абсолютными путями, научиться работать с атрибутами <code className="bg-gray-700 px-1 rounded">target</code> и <code className="bg-gray-700 px-1 rounded">rel</code>, а также создавать якорные ссылки.
            </p>
          </div>
        </div>
      </div>

      {/* Роль ссылок в вебе */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ExternalLink className="w-5 h-5 text-green-400" />
          Роль ссылок в вебе
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Гиперссылки</span> — это <span className="font-medium">основа</span> Всемирной паутины. Именно они связывают миллиарды веб-страниц в единую сеть, позволяя пользователям перемещаться от одной информации к другой одним кликом.
          </p>
          <p>
            Без ссылок веб был бы набором изолированных страниц. Ссылки делают его <span className="font-medium">интерактивным</span> и <span className="font-medium">навигируемым</span>.
          </p>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Терминология:</span>
            <span>
              Слово <span className="font-medium">"гиперссылка"</span> (или просто <span className="font-medium">"ссылка"</span>) происходит от английского <em>hyperlink</em>. В HTML ссылки создаются с помощью тега <code className="bg-gray-700 px-1 rounded">{'<a>'}</code> (от <em>anchor</em> — якорь).
            </span>
          </p>
        </div>
      </div>

      {/* Тег <a> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Link className="w-5 h-5 text-yellow-400" />
          Тег {'<a>'} — Якорь для перехода
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">{'<a>'}</code> (от <em>anchor</em>) — это <span className="font-medium">парный</span> тег, который определяет <span className="font-medium">гиперссылку</span>.
          </p>
          <p>
            Внутри тега <code className="bg-gray-700 px-1 rounded">{'<a>'}</code> размещается <span className="font-medium">видимая часть</span> ссылки — <span className="font-medium">текст</span> или <span className="font-medium">изображение</span>, по которым пользователь может кликнуть.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-yellow-300 text-sm overflow-x-auto">
              <code>{`<a href="https://www.example.com">Посетить Example.com</a>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <p className="text-cyan-300 text-sm underline">
              <a href="#!" className="hover:text-cyan-200">Посетить Example.com</a>
            </p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 По умолчанию:</span>
            <span>
              Текст внутри тега <code className="bg-gray-700 px-1 rounded">{'<a>'}</code> браузер автоматически <span className="font-medium">подчеркивает</span> и делает <span className="font-medium">синим</span> (или цветом ссылок темы). Это можно изменить с помощью CSS.
            </span>
          </p>
        </div>
      </div>

      {/* Атрибут href */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-purple-400" />
          Атрибут href — Адрес назначения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Атрибут <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">href</code> (от <em>hypertext reference</em>) — <span className="font-medium">обязательный</span> атрибут тега <code className="bg-gray-700 px-1 rounded">{'<a>'}</code>. Он указывает, <span className="font-medium">куда</span> ведет ссылка.
          </p>
          <p>
            Значением <code className="bg-gray-700 px-1 rounded">href</code> может быть:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Абсолютные пути */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Абсолютные пути (полные URL)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Указывают на <span className="font-medium">полный адрес</span> ресурса в интернете, включая протокол (<code className="bg-gray-700 px-1 rounded">http://</code> или <code className="bg-gray-700 px-1 rounded">https://</code>).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Ссылка на внешний сайт:</p>
                <pre className="text-blue-300 text-xs"><code>{`<a href="https://www.google.com">Google</a>`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Ссылка на конкретную страницу:</p>
                <pre className="text-blue-300 text-xs"><code>{`<a href="https://ru.wikipedia.org/wiki/HTML">Статья о HTML в Wikipedia</a>`}</code></pre>
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Используются:</span>
                <span>
                  Для перехода на <span className="font-medium">другие сайты</span> в интернете.
                </span>
              </p>
            </div>
          </div>

          {/* Относительные пути */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Относительные пути</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Указывают на ресурсы <span className="font-medium">относительно</span> текущей страницы. Не содержат протокол и домен.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Ссылка на файл в той же папке:</p>
                <pre className="text-green-300 text-xs"><code>{`<a href="about.html">О нас</a>`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Ссылка в подпапку:</p>
                <pre className="text-green-300 text-xs"><code>{`<a href="blog/post1.html">Первый пост</a>`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Ссылка в родительскую папку:</p>
                <pre className="text-green-300 text-xs"><code>{`<a href="../index.html">Главная</a>`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Ссылка на якорь на той же странице:</p>
                <pre className="text-green-300 text-xs"><code>{`<a href="#contacts">Контакты</a>`}</code></pre>
              </div>
            </div>
            <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
              <p className="text-green-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Используются:</span>
                <span>
                  Для навигации <span className="font-medium">внутри</span> одного сайта.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Атрибуты target и rel */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ExternalLink className="w-5 h-5 text-orange-400" />
          Атрибуты target и rel — Управление открытием
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Эти атрибуты управляют <span className="font-medium">поведением</span> браузера при переходе по ссылке.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* target="_blank" */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <ExternalLink className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">target="_blank"</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Заставляет браузер открыть ссылку в <span className="font-medium">новой вкладке</span> (или новом окне).
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <p className="text-xs text-gray-400 mb-1">Пример:</p>
              <pre className="text-orange-300 text-xs"><code>{`<a href="https://www.google.com" target="_blank">Открыть Google в новой вкладке</a>`}</code></pre>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Когда использовать:</span>
                <span>
                  Когда вы хотите, чтобы пользователь <span className="font-medium">не покидал</span> ваш сайт, но мог открыть внешний ресурс для справки.
                </span>
              </p>
            </div>
          </div>

          {/* rel="noopener noreferrer" */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Link className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">rel="noopener noreferrer"</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Рекомендуется</span> всегда использовать вместе с <code className="bg-gray-700 px-1 rounded">target="_blank"</code> для <span className="font-medium">безопасности</span> и <span className="font-medium">производительности</span>.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-xs mb-3">
              <li>
                <code className="bg-gray-700 px-1 rounded">noopener</code>: Предотвращает доступ новой страницы к объекту <code className="bg-gray-700 px-1 rounded">window.opener</code> текущей страницы, что улучшает безопасность.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">noreferrer</code>: Запрещает новой странице узнать, с какой страницы был совершен переход.
              </li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <p className="text-xs text-gray-400 mb-1">Рекомендуемый способ открытия внешних ссылок:</p>
              <pre className="text-red-300 text-xs"><code>{`<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Ссылка</a>`}</code></pre>
            </div>
            <div className="p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
              <p className="text-red-300 text-xs flex items-start gap-2">
                <span className="font-medium">⚠️ Важно:</span>
                <span>
                  Использование <code className="bg-gray-700 px-1 rounded">target="_blank"</code> <span className="font-medium">без</span> <code className="bg-gray-700 px-1 rounded">rel="noopener noreferrer"</code> может быть <span className="font-medium">уязвимостью безопасности</span> и негативно сказаться на производительности.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Якорные ссылки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Anchor className="w-5 h-5 text-cyan-400" />
          Якорные ссылки — Навигация внутри страницы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Якорные ссылки позволяют <span className="font-medium">перемещаться</span> к <span className="font-medium">определенным частям</span> одной и той же веб-страницы.
          </p>
          <p>
            Это достигается с помощью <span className="font-medium">двух</span> элементов:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* 1. Якорь (цель) */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Hash className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">1. Якорь (цель) — атрибут id</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Любой HTML-элемент на странице может стать <span className="font-medium">якорем</span> (точкой назначения), если ему присвоить <span className="font-medium">уникальный</span> атрибут <code className="bg-gray-700 px-1 rounded">id</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <p className="text-xs text-gray-400 mb-1">Пример: создание якоря для раздела "Контакты"</p>
              <pre className="text-purple-300 text-xs"><code>{`<h2 id="contacts">Контакты</h2>`}</code></pre>
            </div>
          </div>

          {/* 2. Ссылка на якорь */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Anchor className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">2. Ссылка на якорь — href с #</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Чтобы создать ссылку на якорь, в атрибуте <code className="bg-gray-700 px-1 rounded">href</code> указывается символ <code className="bg-gray-700 px-1 rounded">#</code>, за которым следует <code className="bg-gray-700 px-1 rounded">id</code> целевого элемента.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <p className="text-xs text-gray-400 mb-1">Пример: ссылка на раздел "Контакты"</p>
              <pre className="text-cyan-300 text-xs"><code>{`<a href="#contacts">Перейти к контактам</a>`}</code></pre>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Используются:</span>
                <span>
                  Для создания <span className="font-medium">оглавления</span> на длинных страницах, <span className="font-medium">быстрой навигации</span> к разделам или <span className="font-medium">возврата наверх</span>.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример полной структуры:</p>
            <pre className="text-cyan-300 text-xs overflow-x-auto">
              <code>{`<!-- Ссылка наверх -->\n<a href="#top">Наверх ↑</a>\n\n<!-- ... много контента ... -->\n\n<!-- Якорь для раздела -->\n<h2 id="section1">Раздел 1</h2>\n<p>Содержимое раздела 1...</p>\n\n<!-- Ссылка на этот раздел -->\n<a href="#section1">Перейти к Разделу 1</a>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Как это работает:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-xs">
              <li>Пользователь кликает по ссылке <code className="bg-gray-700 px-1 rounded">{'<a href="#section1">...'}</code>.</li>
              <li>Браузер ищет элемент с <code className="bg-gray-700 px-1 rounded">id="section1"</code>.</li>
              <li>Страница прокручивается так, чтобы этот элемент оказался в верхней части окна.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Link className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать гиперссылки в HTML с помощью тега <code className="bg-gray-700 px-1 rounded">{'<a>'}</code>. Вы разобрались с атрибутом <code className="bg-gray-700 px-1 rounded">href</code> и разницей между абсолютными и относительными путями, научились управлять открытием ссылок с помощью <code className="bg-gray-700 px-1 rounded">target="_blank"</code> и <code className="bg-gray-700 px-1 rounded">rel="noopener noreferrer"</code>, а также освоили создание якорных ссылок для навигации внутри страницы. Ссылки — это мощный инструмент для создания связной и удобной навигации по вашему сайту.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;