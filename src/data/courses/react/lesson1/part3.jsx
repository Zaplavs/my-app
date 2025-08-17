// src/data/courses/react/lesson1/part3.jsx
import React from 'react';
import { Code, Folder, Terminal, Play, FileText, RotateCcw } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Установка и настройка окружения React</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по установке Node.js, npm, созданию React-проекта и работе с его структурой.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Проверка установки
        </h3>
        <p className="text-gray-300 mb-3">
          Откройте терминал (или командную строку) и выполните следующие действия:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Проверьте, установлена ли Node.js, выполнив команду <code className="bg-gray-700 px-1 rounded">node -v</code>. Запишите выведенную версию.</li>
          <li>Проверьте, установлен ли npm, выполнив команду <code className="bg-gray-700 px-1 rounded">npm -v</code>. Запишите выведенную версию.</li>
          <li>Если команды не распознаются, вернитесь к уроку и повторите установку Node.js.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>После установки Node.js может потребоваться перезапустить терминал, чтобы изменения вступили в силу.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Создание первого проекта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте новый React-проект с именем <code className="bg-gray-700 px-1 rounded">my-first-react-app</code> и изучите его структуру:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Выполните команду <code className="bg-gray-700 px-1 rounded">npx create-react-app my-first-react-app</code>.</li>
          <li>Дождитесь завершения установки (это может занять несколько минут).</li>
          <li>Перейдите в папку проекта с помощью команды <code className="bg-gray-700 px-1 rounded">cd my-first-react-app</code>.</li>
          <li>Откройте папку проекта в вашем редакторе кода (например, VS Code).</li>
          <li>Найдите и запишите названия файлов в папках <code className="bg-gray-700 px-1 rounded">public</code> и <code className="bg-gray-700 px-1 rounded">src</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>В Windows для открытия текущей папки в проводнике можно использовать команду <code className="bg-gray-700 px-1 rounded">explorer .</code>, в macOS — <code className="bg-gray-700 px-1 rounded">open .</code>, в Linux — <code className="bg-gray-700 px-1 rounded">xdg-open .</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Запуск и изучение приложения
        </h3>
        <p className="text-gray-300 mb-3">
          Запустите созданный проект и изучите его в браузере:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Убедитесь, что вы находитесь в папке проекта (<code className="bg-gray-700 px-1 rounded">my-first-react-app</code>).</li>
          <li>Выполните команду <code className="bg-gray-700 px-1 rounded">npm start</code>.</li>
          <li>Дождитесь открытия браузера по адресу <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">http://localhost:3000</a>.</li>
          <li>Опишите, что вы видите на странице (логотип, текст, ссылки).</li>
          <li>Найдите в редакторе кода файл <code className="bg-gray-700 px-1 rounded">src/App.js</code> и измените текст внутри тега <code className="bg-gray-700 px-1 rounded">{'<p>'}</code> на любой другой.</li>
          <li>Сохраните файл и понаблюдайте за изменениями в браузере (hot reload).</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Hot reload автоматически обновляет страницу в браузере при сохранении изменений в файлах проекта.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Анализ структуры проекта
        </h3>
        <p className="text-gray-300 mb-3">
          Ответьте на следующие вопросы, изучив структуру вашего проекта:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h4 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Файлы в папке public
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Какой файл является основным HTML-шаблоном?</li>
              <li>Какой файл отвечает за иконку сайта?</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h4 className="font-bold text-orange-300 mb-2 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Файлы в папке src
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Какой файл является точкой входа в приложение?</li>
              <li>Какой файл содержит главный компонент React?</li>
              <li>Какие файлы отвечают за стили?</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300">
          Найдите файл <code className="bg-gray-700 px-1 rounded">package.json</code> в корне проекта. Какие основные скрипты определены в секции <code className="bg-gray-700 px-1 rounded">"scripts"</code>?
        </p>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Создание и запуск второго проекта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте еще один проект с другим именем и изучите его:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Остановите предыдущий сервер, нажав <code className="bg-gray-700 px-1 rounded">Ctrl + C</code> (или <code className="bg-gray-700 px-1 rounded">Cmd + C</code> на macOS) в терминале.</li>
          <li>Создайте новый проект с именем <code className="bg-gray-700 px-1 rounded">react-practice</code> с помощью <code className="bg-gray-700 px-1 rounded">create-react-app</code>.</li>
          <li>Перейдите в папку нового проекта.</li>
          <li>Запустите его с помощью <code className="bg-gray-700 px-1 rounded">npm start</code>.</li>
          <li>Сравните структуру этого проекта со структурой предыдущего. Есть ли различия?</li>
          <li>Измените заголовок в файле <code className="bg-gray-700 px-1 rounded">src/App.js</code> на "Мой второй проект".</li>
        </ul>
        <p className="text-gray-300">
          Попробуйте изменить порт, на котором запускается сервер (по умолчанию 3000). Для этого можно использовать переменную окружения <code className="bg-gray-700 px-1 rounded">PORT</code> (например, <code className="bg-gray-700 px-1 rounded">PORT=3001 npm start</code> в Linux/macOS или <code className="bg-gray-700 px-1 rounded">set PORT=3001 && npm start</code> в Windows).
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
              Эти задания помогли вам закрепить навыки установки Node.js и npm, создания React-проектов с помощью <code className="bg-gray-700 px-1 rounded">create-react-app</code>, понимания структуры проекта и запуска локального сервера разработки. Теперь вы уверенно можете настраивать окружение для разработки на React и создавать новые проекты. В следующих уроках мы начнем писать код и изучать основы React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;