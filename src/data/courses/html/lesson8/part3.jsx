// src/data/courses/html/lesson8/part3.jsx
import React from 'react';
import { Code, FileText, Terminal, Volume2, Video, Play, Pause, RotateCcw, FileAudio, FileVideo } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Аудио и видео в HTML</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по встраиванию аудио и видео на веб-страницы с помощью тегов <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<audio>'}</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<video>'}</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Аудиоплеер для подкаста
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент аудиоплеера для выпуска подкаста "Истории из кода". Требования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Плеер должен отображать стандартные элементы управления (<code className="bg-gray-700 px-1 rounded">controls</code>).</li>
          <li>Аудиофайл доступен в форматах <code className="bg-gray-700 px-1 rounded">episode1.mp3</code> и <code className="bg-gray-700 px-1 rounded">episode1.ogg</code>. Укажите оба источника.</li>
          <li>Воспроизведение должно начинаться с выключенным звуком (<code className="bg-gray-700 px-1 rounded">muted</code>).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте тег <code className="bg-gray-700 px-1 rounded">{'<audio>'}</code> с атрибутами <code className="bg-gray-700 px-1 rounded">controls</code> и <code className="bg-gray-700 px-1 rounded">muted</code>. Внутри разместите два тега <code className="bg-gray-700 px-1 rounded">{'<source>'}</code> с соответствующими <code className="bg-gray-700 px-1 rounded">src</code> и <code className="bg-gray-700 px-1 rounded">type</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Промо-видео продукта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент для встраивания промо-видео нового продукта. Требования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Размеры видео: 640x360 пикселей.</li>
          <li>Должно отображаться превью <code className="bg-gray-700 px-1 rounded">promo_thumb.jpg</code> до воспроизведения.</li>
          <li>Видео должно автоматически воспроизводиться (<code className="bg-gray-700 px-1 rounded">autoplay</code>) и зацикливаться (<code className="bg-gray-700 px-1 rounded">loop</code>).</li>
          <li>Видео доступно в форматах <code className="bg-gray-700 px-1 rounded">promo.mp4</code> и <code className="bg-gray-700 px-1 rounded">promo.webm</code>.</li>
          <li>Добавьте fallback-контент с сообщением и ссылкой на скачивание <code className="bg-gray-700 px-1 rounded">promo.mp4</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте тег <code className="bg-gray-700 px-1 rounded">{'<video>'}</code> с атрибутами <code className="bg-gray-700 px-1 rounded">width</code>, <code className="bg-gray-700 px-1 rounded">height</code>, <code className="bg-gray-700 px-1 rounded">poster</code>, <code className="bg-gray-700 px-1 rounded">autoplay</code>, <code className="bg-gray-700 px-1 rounded">loop</code> и <code className="bg-gray-700 px-1 rounded">muted</code> (autoplay часто требует muted). Внутри разместите теги <code className="bg-gray-700 px-1 rounded">{'<source>'}</code> и fallback-контент (текст и ссылка <code className="bg-gray-700 px-1 rounded">{'<a>'}</code>).</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Галерея медиа
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Моя медиатека" с заголовком. На странице создайте две секции:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h4 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <FileAudio className="w-4 h-4" />
              Любимые треки
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Список из 2-3 аудиоплееров для разных песен/подкастов.</li>
              <li>Каждый плеер должен иметь элементы управления.</li>
              <li>У каждого плеера должен быть хотя бы один источник (<code className="bg-gray-700 px-1 rounded">.mp3</code> или <code className="bg-gray-700 px-1 rounded">.ogg</code>).</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h4 className="font-bold text-orange-300 mb-2 flex items-center gap-2">
              <FileVideo className="w-4 h-4" />
              Видео коллекция
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Список из 2-3 видео (трейлеры, клипы).</li>
              <li>Каждое видео должно иметь превью, размеры 400x225 пикселей и элементы управления.</li>
              <li>У каждого видео должен быть хотя бы один источник (<code className="bg-gray-700 px-1 rounded">.mp4</code> или <code className="bg-gray-700 px-1 rounded">.webm</code>).</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300">
          Используйте семантические теги <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<h2>'}</code> для структуры.
        </p>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Найди и исправь ошибки
        </h3>
        <p className="text-gray-300 mb-3">
          Найдите и исправьте все ошибки в приведенном ниже HTML-коде. Объясните, почему это ошибки.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm overflow-x-auto">
            <code>{`<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mpeg">
  <source src="movie.webm" type="video/webm">
  Ваш браузер не поддерживает видео.
</video>

<audio controls="true">
  <source src="song.mp3">
  <source src="song.wav" type="audio/wav">
</audio>

<video poster="thumb.jpg">
  <source src="clip.mp4" type="video/mp4">
  <control>Плеер</control>
</video>`}</code>
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
            <p>Проверьте названия атрибутов, значения MIME-типов, правильность написания тегов и атрибутов. Вспомните, какие атрибуты булевые.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Интерактивный медиа-центр
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу "Медиа-центр" со следующими элементами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><span className="font-medium">Заголовок страницы</span> "Добро пожаловать в Медиа-центр".</li>
          <li>
            <span className="font-medium">Аудио-секция</span> "Релакс музыка":
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Один аудиоплеер с элементами управления.</li>
              <li>Источник: <code className="bg-gray-700 px-1 rounded">ambient.mp3</code>.</li>
              <li>Плеер должен автоматически зацикливаться.</li>
            </ul>
          </li>
          <li>
            <span className="font-medium">Видео-секция</span> "Обучающее видео":
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Одно обучающее видео размером 560x315 пикселей.</li>
              <li>Превью: <code className="bg-gray-700 px-1 rounded">tutorial_thumb.jpg</code>.</li>
              <li>Источник: <code className="bg-gray-700 px-1 rounded">tutorial.mp4</code>.</li>
              <li>Видео НЕ должноautoplay автоматически.</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-300">
          Добавьте в конец страницы ссылку "Наверх" (якорная ссылка на начало страницы).
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Code className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки встраивания аудио и видео в HTML. Вы научились использовать теги <code className="bg-gray-700 px-1 rounded">{'<audio>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<video>'}</code>, атрибуты <code className="bg-gray-700 px-1 rounded">controls</code>, <code className="bg-gray-700 px-1 rounded">autoplay</code>, <code className="bg-gray-700 px-1 rounded">loop</code>, <code className="bg-gray-700 px-1 rounded">muted</code>, <code className="bg-gray-700 px-1 rounded">poster</code>, <code className="bg-gray-700 px-1 rounded">width</code> и <code className="bg-gray-700 px-1 rounded">height</code>, работать с тегом <code className="bg-gray-700 px-1 rounded">{'<source>'}</code> для поддержки разных форматов и создавать fallback-контент. Это важный шаг к созданию богатых мультимедийных веб-страниц.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;