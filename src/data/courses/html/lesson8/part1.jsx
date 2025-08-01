// src/data/courses/html/lesson8/part1.jsx
import React from 'react';
import { Volume2, Video, Play, Pause, RotateCcw, Image, FileAudio, FileVideo } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Volume2 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🎵🎥 Урок 8: Аудио и видео в HTML</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Встраивание медиа с помощью тегов {'<audio>'} и {'<video>'}</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить встраивание аудио и видео на веб-страницы с помощью тегов <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<audio>'}</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<video>'}</code>, понять поддерживаемые форматы и научиться использовать ключевые атрибуты.
            </p>
          </div>
        </div>
      </div>

      {/* Роль мультимедиа в вебе */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Роль мультимедиа в современном вебе
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Аудио и видео стали <span className="font-medium text-green-300">неотъемлемой частью</span> современного интернета. Они делают веб-страницы <span className="font-medium">живыми</span>, <span className="font-medium">информационно насыщенными</span> и <span className="font-medium">привлекательными</span> для пользователей.
          </p>
          <p>
            HTML5 предоставляет встроенные возможности для работы с медиа без необходимости устанавливать сторонние плагины (такие как Flash, которые устарели).
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <Volume2 className="w-4 h-4" />
              Аудио
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Подкасты</li>
              <li>Фоновая музыка</li>
              <li>Звуковые эффекты</li>
              <li>Аудио-плееры</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2 flex items-center gap-2">
              <Video className="w-4 h-4" />
              Видео
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Обучающие ролики</li>
              <li>Демонстрации продуктов</li>
              <li>Видеоблоги</li>
              <li>Рекламные баннеры</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Тег <audio> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileAudio className="w-5 h-5 text-purple-400" />
          Тег {'<audio>'} — Встраивание звука
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">{'<audio>'}</code> используется для <span className="font-medium">встраивания аудиофайлов</span> на веб-страницу.
          </p>
          <p>
            Это <span className="font-medium">парный</span> тег, внутри которого размещаются источники файлов с помощью тега <code className="bg-gray-700 px-1 rounded">{'<source>'}</code>. Браузер выбирает первый поддерживаемый формат.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-purple-300 text-sm overflow-x-auto">
              <code>{`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Ваш браузер не поддерживает аудио.
</audio>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <div className="flex items-center justify-center h-20 bg-gray-800 rounded-lg border-2 border-dashed border-gray-600">
              <div className="flex items-center gap-2 text-gray-500">
                <Volume2 className="w-5 h-5" />
                <span className="text-sm">[Аудио-плеер]</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Тег <video> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileVideo className="w-5 h-5 text-orange-400" />
          Тег {'<video>'} — Встраивание видео
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{'<video>'}</code> используется для <span className="font-medium">встраивания видеофайлов</span> на веб-страницу.
          </p>
          <p>
            Это также <span className="font-medium">парный</span> тег. Внутри размещаются источники файлов (<code className="bg-gray-700 px-1 rounded">{'<source>'}</code>) и, при необходимости, fallback-контент (например, изображение-превью и ссылка).
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-orange-300 text-sm overflow-x-auto">
              <code>{`<video width="320" height="240" controls poster="preview.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Ваш браузер не поддерживает видео.
</video>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <div className="flex items-center justify-center h-40 bg-gray-800 rounded-lg border-2 border-dashed border-gray-600">
              <div className="flex flex-col items-center gap-2 text-gray-500">
                <Video className="w-8 h-8" />
                <span className="text-sm">[Видео-плеер]</span>
                <span className="text-xs">(превью: preview.jpg)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Атрибуты <audio> и <video> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-yellow-400" />
          Ключевые атрибуты тегов {'<audio>'} и {'<video>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Атрибуты позволяют управлять поведением и внешним видом медиаплееров.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* controls */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Play className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">controls</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Булевый</span> атрибут. Если присутствует, браузер отображает стандартные элементы управления (воспроизведение/пауза, громкость, прогресс-бар и т.д.).
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-blue-300 text-xs"><code>{`<audio controls>\n  <source src="sound.mp3" type="audio/mpeg">\n</audio>`}</code></pre>
            </div>
          </div>

          {/* autoplay */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Play className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">autoplay</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Булевый</span> атрибут. Автоматически запускает воспроизведение медиа при загрузке страницы.
            </p>
            <div className="p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
              <p className="text-red-300 text-xs flex items-start gap-2">
                <span className="font-medium">⚠️ Важно:</span>
                <span>
                  Многие браузеры <span className="font-medium">блокируют</span> autoplay с аудио или без взаимодействия пользователя из-за политики автовоспроизведения. Также это может раздражать пользователей.
                </span>
              </p>
            </div>
            <div className="mt-3 bg-gray-800 p-3 rounded-lg">
              <pre className="text-red-300 text-xs"><code>{`<video autoplay muted>\n  <source src="intro.mp4" type="video/mp4">\n</video>`}</code></pre>
              <p className="text-gray-400 text-xs mt-2">Часто используется с <code className="bg-gray-700 px-1 rounded">muted</code> для обхода блокировки.</p>
            </div>
          </div>

          {/* loop */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <RotateCcw className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">loop</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Булевый</span> атрибут. Заставляет медиа воспроизводиться <span className="font-medium">по кругу</span> бесконечно.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-xs"><code>{`<audio loop>\n  <source src="background.mp3" type="audio/mpeg">\n</audio>`}</code></pre>
            </div>
          </div>

          {/* muted */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Volume2 className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">muted</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Булевый</span> атрибут. Начинает воспроизведение медиа <span className="font-medium">без звука</span>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-purple-300 text-xs"><code>{`<video muted>\n  <source src="video.mp4" type="video/mp4">\n</video>`}</code></pre>
            </div>
          </div>

          {/* poster (только для video) */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Image className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">poster (для {'<video>'})</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Указывает путь к изображению, которое будет отображаться как <span className="font-medium">превью</span> до начала воспроизведения видео.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-cyan-300 text-xs"><code>{`<video poster="thumbnail.jpg" controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>`}</code></pre>
            </div>
          </div>

          {/* width и height (для video) */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Video className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">width и height (для {'<video>'})</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Задают <span className="font-medium">размеры</span> области воспроизведения видео в пикселях.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-yellow-300 text-xs"><code>{`<video width="640" height="480" controls>\n  <source src="clip.mp4" type="video/mp4">\n</video>`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Поддерживаемые форматы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileAudio className="w-5 h-5 text-green-400" />
          Поддерживаемые форматы файлов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Поддержка форматов <span className="font-medium">варьируется</span> в зависимости от браузера. Чтобы обеспечить максимальную совместимость, рекомендуется предоставлять <span className="font-medium">несколько источников</span> в разных форматах.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Аудио */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <FileAudio className="w-4 h-4" />
              Аудио
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">MP3 (.mp3)</p>
                <ul className="list-disc pl-5 text-gray-300 text-xs space-y-1">
                  <li>Широко поддерживается</li>
                  <li>Хорошее сжатие</li>
                  <li>Часто используется для музыки</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">OGG (.ogg)</p>
                <ul className="list-disc pl-5 text-gray-300 text-xs space-y-1">
                  <li>Открытый формат</li>
                  <li>Хорошее качество</li>
                  <li>Поддерживается Firefox, Chrome</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">WAV (.wav)</p>
                <ul className="list-disc pl-5 text-gray-300 text-xs space-y-1">
                  <li>Без сжатия (высокое качество)</li>
                  <li>Большой размер файла</li>
                  <li>Поддерживается всеми основными браузерами</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Видео */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <FileVideo className="w-4 h-4" />
              Видео
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">MP4 (.mp4)</p>
                <ul className="list-disc pl-5 text-gray-300 text-xs space-y-1">
                  <li>Наиболее универсальный формат</li>
                  <li>Хорошее сжатие и качество</li>
                  <li>Поддерживается почти всеми браузерами</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">WebM (.webm)</p>
                <ul className="list-disc pl-5 text-gray-300 text-xs space-y-1">
                  <li>Открытый формат от Google</li>
                  <li>Высокая эффективность сжатия</li>
                  <li>Отлично подходит для web</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">OGG (.ogv)</p>
                <ul className="list-disc pl-5 text-gray-300 text-xs space-y-1">
                  <li>Открытый формат</li>
                  <li>Поддерживается Firefox, Chrome</li>
                  <li>Менее распространен, чем MP4/WebM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Совет:</span>
            <span>
              Всегда указывайте источники в порядке <span className="font-medium">предпочтения</span>, начиная с наиболее желаемого формата. Браузер выберет первый, который он может воспроизвести.
            </span>
          </p>
        </div>
      </div>

      {/* Тег <source> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileAudio className="w-5 h-5 text-cyan-400" />
          Тег {'<source>'} — Указание источников
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">{'<source>'}</code> — <span className="font-medium">самозакрывающийся</span> тег, используемый внутри <code className="bg-gray-700 px-1 rounded">{'<audio>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<video>'}</code> для указания одного или нескольких источников медиафайлов.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример для аудио:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{`<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Ваш браузер не поддерживает аудио.
</audio>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример для видео:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`<video controls width="400">
  <source src="clip.mp4" type="video/mp4">
  <source src="clip.webm" type="video/webm">
  <a href="clip.mp4">Скачать видео</a>
</video>`}</code>
            </pre>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
          <p className="text-gray-300 text-sm">
            <span className="font-medium">Атрибуты тега {'<source>'}:</span>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mt-2">
            <li>
              <code className="bg-gray-700 px-1 rounded">src</code> — путь или URL к медиафайлу.
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">type</code> — MIME-тип медиафайла (например, <code className="bg-gray-700 px-1 rounded">audio/mpeg</code>, <code className="bg-gray-700 px-1 rounded">video/mp4</code>). Помогает браузеру быстрее определить, поддерживает ли он формат, без необходимости его загружать.
            </li>
          </ul>
        </div>
      </div>

      {/* Fallback-контент */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Pause className="w-5 h-5 text-red-400" />
          Fallback-контент — Альтернатива при отсутствии поддержки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Любой контент, размещенный <span className="font-medium">между</span> открывающим и закрывающим тегами <code className="bg-gray-700 px-1 rounded">{'<audio>'}</code> или <code className="bg-gray-700 px-1 rounded">{'<video>'}</code>, считается <span className="font-medium">fallback-контентом</span>.
          </p>
          <p>
            Этот контент отображается <span className="font-medium">только в том случае</span>, если браузер <span className="font-medium">не поддерживает</span> теги <code className="bg-gray-700 px-1 rounded">{'<audio>'}</code> или <code className="bg-gray-700 px-1 rounded">{'<video>'}</code> <span className="font-medium">вообще</span> (например, очень старые браузеры).
          </p>
        </div>
        <div className="mt-6 bg-gray-900 p-4 rounded-lg">
          <p className="text-sm text-gray-400 mb-2">Пример с fallback-контентом:</p>
          <pre className="text-red-300 text-sm overflow-x-auto">
            <code>{`<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <p>Ваш браузер не поддерживает видео. 
     <a href="movie.mp4">Скачайте его здесь</a>.</p>
</video>`}</code>
          </pre>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Примечание:</span>
            <span>
              Fallback-контент <span className="font-medium">не</span> отображается, если браузер поддерживает тег, но <span className="font-medium">не поддерживает</span> ни один из указанных форматов файлов. В этом случае плеер просто покажет пустую область или сообщение об ошибке.
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Volume2 className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как встраивать аудио и видео на веб-страницы с помощью тегов <code className="bg-gray-700 px-1 rounded">{'<audio>'}</code> и <code className="bg-gray-700 px-1 rounded">{'<video>'}</code>. Вы разобрались с ключевыми атрибутами (<code className="bg-gray-700 px-1 rounded">controls</code>, <code className="bg-gray-700 px-1 rounded">autoplay</code>, <code className="bg-gray-700 px-1 rounded">loop</code>, <code className="bg-gray-700 px-1 rounded">poster</code>), научились использовать тег <code className="bg-gray-700 px-1 rounded">{'<source>'}</code> для обеспечения совместимости с разными форматами и поняли, как использовать fallback-контент. Это важный шаг к созданию богатых мультимедийных веб-приложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;