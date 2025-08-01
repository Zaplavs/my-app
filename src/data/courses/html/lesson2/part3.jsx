// src/data/courses/html/lesson2/part3.jsx
import React from 'react';
import { Monitor, FileText, Play, Code } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Monitor className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Урок 2: Как создать и запустить HTML-файл</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Научиться создавать HTML-файл на компьютере и просматривать его в браузере.
            </p>
          </div>
        </div>
      </div>

      {/* Создание HTML-файла */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Создание HTML-файла
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Чтобы создать свою первую веб-страницу, вам нужно создать файл с расширением <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">.html</code>.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              С помощью текстового редактора
            </h3>
            <ul className="list-decimal pl-6 space-y-2 text-gray-300">
              <li><span className="font-medium">Откройте текстовый редактор:</span> Блокнот (Windows), TextEdit (macOS, переключите в режим "Обычный текст"), gedit (Linux) или лучше — специализированный редактор кода, например, <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">VS Code</a> (бесплатный).</li>
              <li><span className="font-medium">Напишите HTML-код:</span> Введите или скопируйте любой HTML-код (например, базовую структуру из предыдущего урока).</li>
              <li>
                <span className="font-medium">Сохраните файл:</span>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Нажмите <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl+S</kbd> (Windows/Linux) или <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Cmd+S</kbd> (macOS).</li>
                  <li>Выберите папку для сохранения (например, <code className="bg-gray-700 px-1 rounded">Документы</code> или создайте новую папку <code className="bg-gray-700 px-1 rounded">Мои_сайты</code>).</li>
                  <li><span className="font-medium">Важно:</span> В поле "Имя файла" введите имя, например, <code className="bg-gray-700 px-1 rounded">index.html</code>.</li>
                  <li><span className="font-medium">Важно:</span> В поле "Тип файла" (или рядом с кнопкой "Сохранить") выберите "Все файлы" (*.*), если редактор предлагает выбрать тип. Это предотвратит сохранение файла как <code className="bg-gray-700 px-1 rounded">index.html.txt</code>.</li>
                  <li>Нажмите "Сохранить".</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Альтернатива: Онлайн-редакторы
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Если у вас нет возможности установить редактор или вы хотите быстро попробовать, используйте онлайн-редакторы, например:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><a href="https://codepen.io/pen/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CodePen</a></li>
                  <li><a href="https://jsfiddle.net/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">JSFiddle</a></li>
                  <li><a href="https://www.online-html-editor.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Online-HTML-Editor</a></li>
                </ul>
              </li>
              <li>Просто введите HTML-код в левой части экрана, и результат сразу отобразится справа.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Просмотр HTML-файла в браузере */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-purple-400" />
          Просмотр HTML-файла в браузере
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После создания файла его нужно открыть в веб-браузере, чтобы увидеть результат.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Локальный файл на компьютере
            </h3>
            <ul className="list-decimal pl-6 space-y-3 text-gray-300">
              <li><span className="font-medium">Найдите файл:</span> Перейдите в папку, куда вы сохранили <code className="bg-gray-700 px-1 rounded">index.html</code>.</li>
              <li>
                <span className="font-medium">Откройте файл:</span>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><span className="font-medium">Способ 1:</span> Дважды щелкните по файлу <code className="bg-gray-700 px-1 rounded">index.html</code>. Он должен открыться в вашем браузере по умолчанию.</li>
                  <li><span className="font-medium">Способ 2:</span> Щелкните по файлу правой кнопкой мыши и выберите "Открыть с помощью", затем выберите ваш браузер (Chrome, Firefox, Edge, Safari и т.д.).</li>
                </ul>
              </li>
              <li><span className="font-medium">Просмотрите результат:</span> В браузере отобразится ваша веб-страница.</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Онлайн-редактор
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>В онлайн-редакторах (CodePen, JSFiddle и т.д.) результат отображается автоматически в правой части экрана или во встроенной вкладке предпросмотра.</li>
              <li>Обычно есть кнопка "Run" или "Preview" для запуска кода.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Полезные советы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Полезные советы
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>
            <span className="font-medium">Имя файла:</span> Хотя вы можете назвать файл как угодно (например, <code className="bg-gray-700 px-1 rounded">moy_sait.html</code>), файл <code className="bg-gray-700 px-1 rounded">index.html</code> имеет особое значение. Веб-серверы по умолчанию открывают именно его, если пользователь заходит в корневую папку сайта.
          </li>
          <li>
            <span className="font-medium">Редактор кода:</span> Использование специализированного редактора, такого как VS Code, значительно облегчает написание кода благодаря подсветке синтаксиса, автодополнению и другим функциям.
          </li>
          <li>
            <span className="font-medium">Изменения и обновление:</span> После изменения HTML-файла и сохранения (<kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl+S</kbd>), просто обновите вкладку браузера (<kbd className="bg-gray-700 px-2 py-1 rounded text-xs">F5</kbd> или <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl+R</kbd>), чтобы увидеть изменения.
          </li>
        </ul>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Play className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создать HTML-файл на своем компьютере и открыть его в браузере. Это фундаментальный навык веб-разработчика. В следующем уроке мы начнем писать и анализировать конкретные HTML-теги.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;