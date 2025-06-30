export default {
  id: 15,
  title: "Работа с файлами и путями",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          При создании веб-сайта важно правильно организовать структуру файлов и знать, как указывать пути к различным ресурсам:
          страницам, изображениям, CSS и JavaScript-файлам.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовая структура проекта</h3>
        <p>
          Хорошо организованная структура папок облегчает навигацию, поддержку и масштабирование сайта.
          Пример стандартной структуры:
        </p>
      `
    },
    {
      type: 'code',
      code: `project-folder/\n├── index.html\n├── about.html\n├── css/\n│   └── style.css\n├── js/\n│   └── script.js\n└── images/\n    └── logo.png`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Типы путей:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Абсолютные пути</strong> — полный URL до файла или ресурса.</li>
          <li><strong>Относительные пути</strong> — путь относительно текущего файла.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Абсолютные пути</h3>
        <p>
          Используются для ссылок на внешние сайты или файлы вне текущего домена.
        </p>
      `
    },
    {
      type: 'code',
      code: `<a href="https://example.com">Перейти на внешний сайт</a>\n<img src="https://example.com/images/photo.jpg" alt="Фото">`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Относительные пути</h3>
        <p>
          Относительные пути зависят от расположения текущего файла. Вот основные правила:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>file.html</code> — файл в той же папке.</li>
          <li><code>folder/file.html</code> — файл во вложенной папке.</li>
          <li><code>../file.html</code> — файл на уровень выше.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Примеры использования относительных путей:</h3>
      `
    },
    {
      type: 'code',
      code: `<!-- Ссылка на страницу в той же папке -->\n<a href="about.html">О нас</a>\n\n<!-- Ссылка на файл в подпапке -->\n<link rel="stylesheet" href="css/style.css">\n\n<!-- Ссылка на изображение из другой папки -->\n<img src="images/logo.png" alt="Логотип">\n\n<!-- Ссылка на родительский каталог -->\n<a href="../index.html">Главная</a>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Правила работы с путями:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Именуйте файлы и папки понятно и используйте строчные буквы (например, <code>contacts.html</code>, а не <code>Contacts.HTML</code>).</li>
          <li>Не используйте пробелы в именах файлов — лучше использовать дефисы или нижнее подчеркивание (<code>my-page.html</code>).</li>
          <li>Убедитесь, что все файлы находятся в правильных местах и названия совпадают с теми, что указаны в путях.</li>
          <li>Проверяйте работоспособность ссылок после загрузки сайта на сервер.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по организации проекта:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Разделяйте файлы по типу: HTML, CSS, JS, изображения — в разных папках.</li>
          <li>Для крупных проектов можно использовать подкаталоги, например: <code>/blog/</code>, <code>/gallery/</code>.</li>
          <li>Используйте файл <code>.gitignore</code>, если работаете с Git, чтобы исключить лишние файлы из контроля версий.</li>
          <li>Для тестирования локально используйте простой HTTP-сервер, чтобы избежать проблем с протоколом <code>file://</code>.</li>
        </ul>
      `
    }
  ],
  task: "Создайте структуру проекта из 3 страниц: главная, контакты, о нас. Добавьте CSS и папку с изображениями. На каждой странице сделайте ссылки друг на друга и добавьте одно изображение.",
  exampleAnswer: `<head>\n  <link rel="stylesheet" href="css/style.css">\n</head>\n<body>\n  <nav>\n    <a href="index.html">Главная</a>\n    <a href="about.html">О нас</a>\n    <a href="contacts.html">Контакты</a>\n  </nav>\n  <img src="images/logo.png" alt="Логотип компании">\n</body>`
};