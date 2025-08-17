// src/data/courses/react/lesson1/part1.jsx
import React from 'react';
import { Terminal, Folder, FileText, Play, Code } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🚀 Урок 1: Установка и настройка окружения React</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Подготовка к разработке</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Установить необходимые инструменты (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">Node.js</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">npm</code>), создать новый React-проект с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">create-react-app</code>, ознакомиться со структурой проекта и запустить его в браузере.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны Node.js и npm? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-green-400" />
          Зачем нужны Node.js и npm?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">React</span> — это JavaScript-библиотека, и для её разработки и сборки требуются инструменты, предоставляемые <span className="font-medium">Node.js</span> и <span className="font-medium">npm</span>.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <span className="font-medium">Node.js</span> — это среда выполнения JavaScript, которая позволяет запускать JS-код вне браузера. Она необходима для работы инструментов сборки и разработки.
            </li>
            <li>
              <span className="font-medium">npm (Node Package Manager)</span> — это менеджер пакетов, входящий в состав Node.js. Он позволяет устанавливать, обновлять и управлять библиотеками и инструментами (такими как сам React) для вашего проекта.
            </li>
          </ul>
          <p className="mt-3">
            <span className="font-medium">npx</span> — это инструмент, который поставляется с npm. Он позволяет запускать исполняемые пакеты Node.js без их предварительной глобальной установки. Мы будем использовать его для запуска <code className="bg-gray-700 px-1 rounded">create-react-app</code>.
          </p>
        </div>
      </div>

      {/* Шаг 1: Установка Node.js и npm */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-yellow-400" />
          Шаг 1: Установка Node.js и npm
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Перед созданием React-приложения необходимо убедиться, что на вашем компьютере установлены <code className="bg-gray-700 px-1 rounded">Node.js</code> и <code className="bg-gray-700 px-1 rounded">npm</code>.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Инструкции для Windows/macOS */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Terminal className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Для Windows и macOS:</h3>
            </div>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                Перейдите на официальный сайт Node.js: <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://nodejs.org/</a>.
              </li>
              <li>
                Скачайте рекомендуемую версию (LTS — Long Term Support). Она более стабильна.
              </li>
              <li>
                Запустите скачанный установочный файл (<code className="bg-gray-700 px-1 rounded">.msi</code> для Windows или <code className="bg-gray-700 px-1 rounded">.pkg</code> для macOS) и следуйте инструкциям установщика.
              </li>
              <li>
                После установки перезапустите терминал или командную строку.
              </li>
            </ol>
          </div>

          {/* Инструкции для Linux */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Terminal className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Для Linux (Ubuntu/Debian):</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Откройте терминал и выполните следующие команды:
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-xs"><code>{`curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -\nsudo apt-get install -y nodejs`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Для других дистрибутивов Linux (например, CentOS, Fedora) смотрите официальную документацию Node.js.
            </p>
          </div>

          {/* Проверка установки */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">Проверка установки:</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Откройте терминал (или командную строку в Windows) и введите следующие команды:
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-purple-300 text-xs"><code>{`node -v\nnpm -v`}</code></pre>
            </div>
            <p className="text-gray-300 text-sm">
              Если установка прошла успешно, вы увидите номера версий Node.js и npm. Например:
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mt-2">
              <pre className="text-gray-400 text-xs"><code>{`v18.17.0\n9.6.7`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Шаг 2: Создание проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Folder className="w-5 h-5 text-cyan-400" />
          Шаг 2: Создание нового React-проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теперь, когда Node.js и npm установлены, мы можем создать новый React-проект. Самый простой способ — использовать инструмент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">create-react-app</code>. Он автоматически настраивает проект с необходимыми инструментами (Webpack, Babel и др.).
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Команда создания проекта:</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Откройте терминал, перейдите в папку, где хотите создать проект, и выполните команду:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg mb-3">
            <pre className="text-cyan-300 text-sm overflow-x-auto"><code>{`npx create-react-app my-app`}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>
              <code className="bg-gray-700 px-1 rounded">npx</code> — запускает пакет <code className="bg-gray-700 px-1 rounded">create-react-app</code>.
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">create-react-app</code> — инструмент для создания нового React-проекта.
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">my-app</code> — это имя вашей папки с проектом. Вы можете заменить его на любое другое.
            </li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Примечание:</span>
              <span>
                Процесс создания может занять несколько минут, так как инструмент скачивает и устанавливает все необходимые зависимости.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Шаг 3: Переход в папку проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Folder className="w-5 h-5 text-orange-400" />
          Шаг 3: Переход в папку проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После завершения создания проекта необходимо перейти в его директорию, чтобы выполнять дальнейшие команды.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Terminal className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-orange-300">Команда перехода:</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="text-orange-300 text-sm"><code>{`cd my-app`}</code></pre>
          </div>
          <p className="text-gray-300 text-sm mt-3">
            Эта команда (<code className="bg-gray-700 px-1 rounded">cd</code> — change directory) меняет текущую рабочую папку на <code className="bg-gray-700 px-1 rounded">my-app</code>.
          </p>
        </div>
      </div>

      {/* Шаг 4: Запуск проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Шаг 4: Запуск проекта в режиме разработки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Теперь, находясь в папке проекта, можно запустить его. Create React App предоставляет удобную команду для запуска локального сервера разработки.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Terminal className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-green-300">Команда запуска:</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-3">
            <pre className="text-green-300 text-sm"><code>{`npm start`}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>
              Эта команда запускает локальный сервер разработки.
            </li>
            <li>
              По умолчанию сервер стартует на порту <code className="bg-gray-700 px-1 rounded">3000</code>.
            </li>
            <li>
              Браузер автоматически откроется и перейдет на адрес <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">http://localhost:3000</a>.
            </li>
            <li>
              Сервер находится в режиме <span className="font-medium">"горячей перезагрузки"</span> (hot reload): любые изменения в файлах проекта автоматически отразятся в браузере без перезапуска.
            </li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Чтобы остановить сервер:</span>
              <span>
                Вернитесь в терминал и нажмите <code className="bg-gray-700 px-1 rounded">Ctrl + C</code> (или <code className="bg-gray-700 px-1 rounded">Cmd + C</code> на macOS).
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Структура проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Folder className="w-5 h-5 text-purple-400" />
          Структура проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим основные файлы и папки, созданные <code className="bg-gray-700 px-1 rounded">create-react-app</code>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Папка public */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">📁 public</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Содержит статические файлы, которые не обрабатываются Webpack'ом.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
              <li>
                <code className="bg-gray-700 px-1 rounded">index.html</code> — основной HTML-файл. Это шаблон, в который React внедряет своё содержимое.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">favicon.ico</code> — иконка сайта.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">manifest.json</code> — для Progressive Web Apps (PWA).
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">robots.txt</code> — инструкции для поисковых роботов.
              </li>
            </ul>
          </div>

          {/* Папка src */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">📁 src</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Содержит исходный код вашего React-приложения.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
              <li>
                <code className="bg-gray-700 px-1 rounded">index.js</code> — точка входа в приложение. Здесь React подключается к <code className="bg-gray-700 px-1 rounded">index.html</code>.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">App.js</code> — главный компонент React. С него начинается отрисовка интерфейса.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">App.css</code>, <code className="bg-gray-700 px-1 rounded">index.css</code> — стили для компонентов.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">App.test.js</code>, <code className="bg-gray-700 px-1 rounded">setupTests.js</code> — файлы для тестирования.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">logo.svg</code> — изображение, используемое в шаблоне.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">reportWebVitals.js</code> — для измерения производительности.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Folder className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Другие важные файлы в корне проекта:</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>
              <code className="bg-gray-700 px-1 rounded">package.json</code> — файл конфигурации проекта. Содержит список зависимостей, скрипты и метаданные.
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">package-lock.json</code> — автоматически сгенерированный файл, фиксирующий точные версии установленных зависимостей.
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">node_modules/</code> — папка, содержащая все установленные зависимости (библиотеки). Обычно её не трогают вручную и не включают в систему контроля версий (например, Git).
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">README.md</code> — файл с документацией, созданный по умолчанию.
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">.gitignore</code> — файл, указывающий Git, какие файлы и папки игнорировать (например, <code className="bg-gray-700 px-1 rounded">node_modules</code>).
            </li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Terminal className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь у вас есть полностью настроенное окружение для разработки на React. Вы установили Node.js и npm, создали новый проект с помощью <code className="bg-gray-700 px-1 rounded">create-react-app</code>, ознакомились со структурой проекта и успешно запустили его в браузере. В следующем уроке мы начнем писать код и разбираться с основами React-компонентов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;