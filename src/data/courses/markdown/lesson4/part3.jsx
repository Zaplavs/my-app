// src/data/courses/markdown/lesson4/part3.jsx
import React from 'react';
import { FileText, Edit3, Save, Eye, Keyboard, Download } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Edit3 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Создание первого документа Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию, сохранению и работе с Markdown-файлами, используя панель предпросмотра и горячие клавиши.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание и сохранение документа
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте новый Markdown-файл с информацией о себе. Документ должен включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня с вашим именем</li>
          <li>Заголовок 2 уровня "Контактная информация"</li>
          <li>Список с вашими контактными данными (email, телефон)</li>
          <li>Заголовок 2 уровня "Обо мне"</li>
          <li>2-3 абзаца текста о ваших интересах и увлечениях</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Сохраните файл с именем <code className="bg-gray-700 px-2 py-1 rounded">about-me.md</code> в кодировке UTF-8.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте горячую клавишу Ctrl+S (Cmd+S) для сохранения. Проверьте, что файл сохранился с правильным расширением.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Работа с предпросмотром
        </h3>
        <p className="text-gray-300 mb-3">
          Откройте файл <code className="bg-gray-700 px-2 py-1 rounded">about-me.md</code> в вашем редакторе и выполните следующие действия:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Включите панель предпросмотра (используйте горячую клавишу Ctrl+Shift+V в VS Code)</li>
          <li>Добавьте в документ таблицу с вашим расписанием на день (3-4 строки)</li>
          <li>Проверьте, как таблица отображается в предпросмотре</li>
          <li>Экспериментируйте с разными уровнями заголовков, наблюдая за изменениями в реальном времени</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример таблицы в Markdown:
              <pre className="bg-gray-800 p-2 rounded mt-1 text-xs">| Время | Задача |
|-------|--------|
| 09:00 | Завтрак |
| 10:00 | Работа |</pre>
            </p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Использование горячих клавиш
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте новый документ <code className="bg-gray-700 px-2 py-1 rounded">short-story.md</code> и напишите короткую историю, используя только горячие клавиши для форматирования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Выделите название истории жирным шрифтом (Ctrl+B / Cmd+B)</li>
          <li>Создайте 3 абзаца текста</li>
          <li>Выделите ключевые слова в тексте курсивом (Ctrl+I / Cmd+I)</li>
          <li>Создайте список персонажей истории</li>
          <li>Отмените последнее действие (Ctrl+Z / Cmd+Z)</li>
          <li>Повторите отмененное действие (Ctrl+Y / Cmd+Shift+Z)</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Сфокусируйтесь на использовании горячих клавиш вместо ручного ввода символов форматирования (*, **).</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Тестирование совместимости
        </h3>
        <p className="text-gray-300 mb-3">
          Откройте ваш файл <code className="bg-gray-700 px-2 py-1 rounded">about-me.md</code> в разных редакторах и проверьте его отображение:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Откройте файл в Блокноте (Notepad) - вы должны видеть "сырой" Markdown код</li>
          <li>Откройте файл в вашем основном редакторе Markdown с предпросмотром</li>
          <li>Если возможно, откройте файл в онлайн-редакторе (например, Dillinger)</li>
          <li>Сравните отображение во всех трех случаях</li>
        </ul>
        <p className="text-gray-300">
          Сделайте вывод о преимуществах Markdown как формата. Запишите его в отдельный файл <code className="bg-gray-700 px-2 py-1 rounded">compatibility-report.md</code>.
        </p>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Создание структуры проекта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте структуру папок для будущего проекта документации:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте папку с названием вашего проекта (например, <code className="bg-gray-700 px-2 py-1 rounded">my-project-docs</code>)</li>
          <li>Внутри создайте следующие подпапки: <code className="bg-gray-700 px-2 py-1 rounded">guides</code>, <code className="bg-gray-700 px-2 py-1 rounded">tutorials</code>, <code className="bg-gray-700 px-2 py-1 rounded">references</code></li>
          <li>В корневой папке создайте файл <code className="bg-gray-700 px-2 py-1 rounded">README.md</code> с описанием проекта</li>
          <li>В папке <code className="bg-gray-700 px-2 py-1 rounded">guides</code> создайте файл <code className="bg-gray-700 px-2 py-1 rounded">getting-started.md</code> с кратким руководством</li>
          <li>Проверьте структуру в файловом менеджере</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте проводник вашей операционной системы или командную строку для создания папок. Хорошая организация файлов важна для больших проектов.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <FileText className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания, сохранения и работы с Markdown-файлами. Вы научились использовать панель предпросмотра, 
              освоили важные горячие клавиши и поняли принципы организации файлов. Эти навыки станут отличной основой для дальнейшей работы с Markdown.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
