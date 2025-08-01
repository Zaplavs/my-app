// src/data/courses/html/lesson9/part1.jsx
import React from 'react';
import { Monitor, Youtube, MapPin, Shield, Settings, Code, FileVideo } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Monitor className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🌐 Урок 9: Встраивание внешнего контента с помощью {'<iframe>'}</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Тег {'<iframe>'} и его параметры безопасности</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<iframe>'}</code> для встраивания внешнего контента (видео, карт, виджетов) на веб-страницы и понять важные атрибуты безопасности.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое iframe? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Monitor className="w-5 h-5 text-green-400" />
          Что такое Inline Frame (iframe)?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">{'<iframe>'}</code> (от <em>Inline Frame</em>) позволяет <span className="font-medium">встраивать</span> другую HTML-страницу <span className="font-medium">внутрь</span> текущей страницы.
          </p>
          <p>
            Представьте себе <code className="bg-gray-700 px-1 rounded">{'<iframe>'}</code> как <span className="font-medium">мини-окно</span> или <span className="font-medium">портал</span>, через который вы видите содержимое совершенно другого веб-сайта, не покидая текущую страницу.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`<iframe src="https://www.example.com" width="600" height="400"></iframe>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как это выглядит концептуально:</p>
            <div className="flex flex-col items-center justify-center h-40 bg-gray-800 rounded-lg border-2 border-dashed border-gray-600">
              <Monitor className="w-8 h-8 text-gray-500 mb-2" />
              <span className="text-gray-500 text-sm">[Внешняя страница: www.example.com]</span>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Использование:</span>
            <span>
              <code className="bg-gray-700 px-1 rounded">{'<iframe>'}</code> часто используется для встраивания видео с YouTube, карт Google, социальных медиа, рекламных баннеров, чат-ботов и других виджетов.
            </span>
          </p>
        </div>
      </div>

      {/* Основные атрибуты <iframe> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-purple-400" />
          Основные атрибуты тега {'<iframe>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Атрибуты <code className="bg-gray-700 px-1 rounded">{'<iframe>'}</code> определяют <span className="font-medium">источник</span> контента, его <span className="font-medium">размеры</span> и <span className="font-medium">поведение</span>.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* src */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <FileVideo className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">src</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Обязательный</span> атрибут. Указывает <span className="font-medium">URL</span> встраиваемой страницы.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-blue-300 text-xs"><code>{`<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>`}</code></pre>
            </div>
          </div>

          {/* width и height */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Monitor className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">width и height</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Задают <span className="font-medium">ширину</span> и <span className="font-medium">высоту</span> области iframe в пикселях или процентах.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-xs"><code>{`<iframe src="map.html" width="100%" height="300"></iframe>`}</code></pre>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Совет:</span>
                <span>
                  Использование <code className="bg-gray-700 px-1 rounded">%</code> для ширины (например, <code className="bg-gray-700 px-1 rounded">width="100%"</code>) делает iframe адаптивным к ширине родительского контейнера.
                </span>
              </p>
            </div>
          </div>

          {/* title */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">title</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Предоставляет <span className="font-medium">альтернативный текст</span> для iframe. Очень важен для <span className="font-medium">доступности</span> (используется скринридерами).
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-yellow-300 text-xs"><code>{`<iframe src="video.html" title="Видеоурок по HTML"></iframe>`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Распространенные примеры использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Youtube className="w-5 h-5 text-red-400" />
          <MapPin className="w-5 h-5 text-blue-400" />
          Распространенные примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1 rounded">{'<iframe>'}</code> повсеместно используется для интеграции внешнего богатого контента.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* YouTube */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Youtube className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">1. Видео с YouTube</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              YouTube предоставляет специальный <span className="font-medium">код для встраивания</span> (<em>Embed Code</em>), который использует <code className="bg-gray-700 px-1 rounded">{'<iframe>'}</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-red-300 text-xs overflow-x-auto">
                <code>{`<iframe width="560" height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>`}</code>
              </pre>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs">
              <li><code className="bg-gray-700 px-1 rounded">allowfullscreen</code> — разрешает полноэкранный режим.</li>
              <li><code className="bg-gray-700 px-1 rounded">allow</code> — определяет разрешённые функции (автовоспроизведение и т.д.).</li>
            </ul>
          </div>

          {/* Google Maps */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">2. Карты Google</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Google Maps также предоставляет <code className="bg-gray-700 px-1 rounded">{'<iframe>'}</code> код для встраивания карт.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-xs overflow-x-auto">
                <code>{`<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>`}</code>
              </pre>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs">
              <li><code className="bg-gray-700 px-1 rounded">loading="lazy"</code> — откладывает загрузку iframe до прокрутки до него.</li>
              <li><code className="bg-gray-700 px-1 rounded">referrerpolicy</code> — управляет информацией о реферере.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Параметры безопасности sandbox и referrerpolicy */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-orange-400" />
          Параметры безопасности
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Встраивание стороннего контента может представлять <span className="font-medium">потенциальные риски безопасности</span>. HTML5 предоставляет атрибуты для ограничения возможностей встраиваемого контента.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* sandbox */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">sandbox</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Атрибут <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">sandbox</code> применяет <span className="font-medium">ограничения</span> к содержимому iframe, создавая "песочницу".
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-3">
              <li>Без значения (<code className="bg-gray-700 px-1 rounded">sandbox</code>) применяются <span className="font-medium">все</span> ограничения.</li>
              <li>С определёнными значениями можно <span className="font-medium">разрешить</span> отдельные функции.</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <p className="text-xs text-gray-400 mb-1">Полностью изолированный iframe:</p>
              <pre className="text-orange-300 text-xs"><code>{`<iframe src="ad.html" sandbox></iframe>`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <p className="text-xs text-gray-400 mb-1">Iframe с разрешённым скриптингом и формами:</p>
              <pre className="text-orange-300 text-xs"><code>{`<iframe src="widget.html" sandbox="allow-scripts allow-forms"></iframe>`}</code></pre>
            </div>
            <div className="p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
              <p className="text-red-300 text-xs flex items-start gap-2">
                <span className="font-medium">⚠️ Важно:</span>
                <span>
                  Использование <code className="bg-gray-700 px-1 rounded">sandbox</code> — один из самых эффективных способов защитить ваш сайт при встраивании непроверенного стороннего контента.
                </span>
              </p>
            </div>
          </div>

          {/* referrerpolicy */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">referrerpolicy</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Атрибут <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">referrerpolicy</code> определяет, какую информацию о <span className="font-medium">реферере</span> (странице, с которой перешли) отправлять встраиваемому ресурсу.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <p className="text-xs text-gray-400 mb-1">Не отправлять информацию о реферере:</p>
              <pre className="text-purple-300 text-xs"><code>{`<iframe src="external.html" referrerpolicy="no-referrer"></iframe>`}</code></pre>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-xs flex items-start gap-2">
                <span className="font-medium">💡 Используется:</span>
                <span>
                  Для повышения <span className="font-medium">конфиденциальности</span> пользователей и предотвращения утечки данных о вашем сайте.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Monitor className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать тег <code className="bg-gray-700 px-1 rounded">{'<iframe>'}</code> для встраивания внешнего контента на свои веб-страницы. Вы разобрались с основными атрибутами (<code className="bg-gray-700 px-1 rounded">src</code>, <code className="bg-gray-700 px-1 rounded">width</code>, <code className="bg-gray-700 px-1 rounded">height</code>, <code className="bg-gray-700 px-1 rounded">title</code>), научились встраивать популярные элементы, такие как видео YouTube и карты Google, а также освоили важные атрибуты безопасности (<code className="bg-gray-700 px-1 rounded">sandbox</code>, <code className="bg-gray-700 px-1 rounded">referrerpolicy</code>). IFrame — мощный инструмент для интеграции богатого контента и создания интерактивных веб-страниц.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;