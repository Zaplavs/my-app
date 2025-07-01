export default {
  id: 23,
  title: "Установка и настройка редактора",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Чтобы эффективно работать с Markdown, вам понадобится подходящий <strong>редактор</strong>. Существует множество программ, поддерживающих Markdown — от простых до мощных с расширенными возможностями.
        </p>
        <p>
          В этом уроке вы узнаете:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Как выбрать удобный редактор для работы с Markdown.</li>
          <li>Как установить популярные редакторы, такие как VS Code, Typora и Obsidian.</li>
          <li>Как выполнить базовую настройку интерфейса и функций.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как выбрать редактор Markdown?</h3>
        <p>
          Выбор зависит от ваших целей:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Для программистов:</strong> Visual Studio Code (VS Code) — универсальный редактор с поддержкой множества плагинов.</li>
          <li><strong>Для чистого написания текста:</strong> Typora — минималистичный и красивый редактор с живым просмотром.</li>
          <li><strong>Для заметок и знаний:</strong> Obsidian — отличный выбор для создания личной вики и управления знаниями.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Visual Studio Code</h3>
        <p>
          <strong>VS Code</strong> — один из самых популярных редакторов кода, который отлично подходит и для работы с Markdown.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Установка:</h4>
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Перейдите на официальный сайт: <a href="https://code.visualstudio.com/ " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://code.visualstudio.com/ </a></li>
          <li>Скачайте версию для вашей операционной системы.</li>
          <li>Запустите установочный файл и следуйте инструкциям.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Настройка:</h4>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Откройте палитру команд: <kbd>Ctrl + Shift + P</kbd> (или <kbd>Cmd + Shift + P</kbd> на macOS).</li>
          <li>Найдите и установите расширение <strong>Markdown All in One</strong> для дополнительных функций (автоматическое создание заголовков, форматирование и т.д.).</li>
          <li>Для просмотра документа нажмите <kbd>Ctrl + Shift + V</kbd> (или <kbd>Cmd + Shift + V</kbd>), чтобы открыть предпросмотр.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Typora</h3>
        <p>
          <strong>Typora</strong> — это легкий и удобный редактор с живым отображением Markdown без разделения на редактор и предпросмотр.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Установка:</h4>
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Перейдите на сайт: <a href="https://typora.io/ " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://typora.io/ </a></li>
          <li>Скачайте и установите приложение.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Настройка:</h4>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>После запуска просто откройте или создайте новый файл с расширением <code>.md</code>.</li>
          <li>Вы можете изменить тему через меню: <strong>Preferences → Appearance → Themes</strong>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Obsidian</h3>
        <p>
          <strong>Obsidian</strong> — это не просто редактор Markdown, а система управления знаниями и заметками, где можно создавать связи между файлами.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Установка:</h4>
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Зайдите на сайт: <a href="https://obsidian.md/ " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://obsidian.md/ </a></li>
          <li>Скачайте версию под вашу ОС и установите её.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Настройка:</h4>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>После первого запуска выберите папку для хранения ваших заметок.</li>
          <li>Чтобы начать работать, просто создайте новую запись и начните писать на Markdown.</li>
          <li>Меню настроек позволяет изменять тему, включать плагины и другие параметры.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Другие популярные редакторы</h3>
        <p>
          Вот ещё несколько вариантов:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Joplin</strong> — бесплатное и open-source решение с синхронизацией.</li>
          <li><strong>Notion</strong> — сочетает Markdown с блочной структурой.</li>
          <li><strong>MarkText</strong> — открытый редактор с минимальным дизайном.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Итог</h3>
        <p>
          Теперь вы знаете:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Как выбрать редактор Markdown под свои цели.</li>
          <li>Как установить VS Code, Typora и Obsidian.</li>
          <li>Как выполнить базовые настройки каждого из них.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          В следующем уроке мы приступим к практике: научимся использовать основные элементы Markdown — заголовки, списки, ссылки и изображения.
        </p>
      `
    }
  ],
  task: "Установите один из редакторов Markdown (например, VS Code) и создайте в нём файл с расширением .md. Напишите в нём короткое приветствие и сохраните.",
  exampleAnswer: "# Привет!\n\nПриветствую вас в моём первом файле Markdown.\n\n## Что я сделал сегодня?\n- Установил редактор Markdown\n- Создал свой первый файл"
};