export default {
  id: 36,
  title: "Экспорт документов из Markdown",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          После написания документа на Markdown часто возникает необходимость сохранить его в более универсальном формате — например, PDF для печати или DOCX для отправки коллегам.
        </p>
        <p>
          К счастью, Markdown легко конвертируется во множество других форматов. В этом уроке вы узнаете:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Как экспортировать Markdown-файлы в популярные форматы: PDF, HTML, DOCX.</li>
          <li>Какие инструменты использовать: Pandoc, расширения VS Code, онлайн-конвертеры.</li>
          <li>Как сохранять форматирование при экспорте.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Поддерживаемые форматы экспорта</h3>
        <p>
          Markdown можно конвертировать в следующие форматы:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>HTML</strong> — для публикации на сайтах или внутреннего просмотра.</li>
          <li><strong>PDF</strong> — удобен для печати и обмена документами.</li>
          <li><strong>DOCX</strong> — подходит для редактирования в Word.</li>
          <li><strong>RTF</strong> — формат с минимальной разметкой, читается почти всеми текстовыми редакторами.</li>
          <li><strong>EPUB</strong> — для электронных книг.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Инструменты для экспорта</h3>
        <p>
          Существует несколько способов экспорта Markdown-файлов:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">1. Pandoc</h4>
        <p>
          <a href="https://pandoc.org/ " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Pandoc</a> — это мощная утилита командной строки, которая поддерживает сотни форматов.
        </p>
      `
    },
    {
      type: 'code',
      code: "# Конвертация в PDF\npandoc document.md -o document.pdf\n\n# Конвертация в DOCX\npandoc document.md -o document.docx"
    },
    {
      type: 'text',
      text: `
        <p>
          Вы можете также добавлять CSS-стили, метаданные, оглавление и многое другое.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">2. Расширения для VS Code</h4>
        <p>
          Если вы работаете в <strong>Visual Studio Code</strong>, установите одно из полезных расширений:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Markdown All in One</strong> — позволяет экспортировать в HTML.</li>
          <li><strong>Markdown PDF</strong> — конвертирует файл в PDF с помощью одного клика.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Установка:
        </p>
      `
    },
    {
      type: 'code',
      code: "ext install markdown-pdf"
    },
    {
      type: 'text',
      text: `
        <p>
          Затем нажмите правой кнопкой мыши на вашем .md-файле и выберите «Export to PDF».
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">3. Онлайн-конвертеры</h4>
        <p>
          Если вы не хотите устанавливать программы, используйте онлайн-инструменты:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><a href="https://markdowntopdf.com/ " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Markdown to PDF</a></li>
          <li><a href="https://www.zamzar.com/convert/md-to-docx/ " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Zamzar</a></li>
          <li><a href="https://cloudconvert.com/md-to-pdf " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">CloudConvert</a></li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Просто загрузите ваш файл, выберите нужный формат и скачайте результат.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">4. Obsidian (с плагинами)</h4>
        <p>
          Если вы используете <strong>Obsidian</strong> для работы с заметками, есть плагины:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Export & Print</strong> — для создания PDF и HTML.</li>
          <li><strong>Pandoc Exporter</strong> — интеграция с внешним Pandoc.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по экспорту</h3>
        <p>
          Вот несколько рекомендаций:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Проверяйте, как будет отображаться таблицы, формулы и изображения в целевом формате.</li>
          <li>Используйте шаблоны, чтобы задать стиль документу (например, через Pandoc + LaTeX для PDF).</li>
          <li>Добавьте YAML-фронтматтер в начале файла, чтобы указать заголовок, автора, дату и т. д.</li>
          <li>Для сложного форматирования лучше всего подходит Pandoc или расширения с поддержкой CSS.</li>
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
          <li>Какие форматы поддерживаются при экспорте Markdown.</li>
          <li>Как использовать Pandoc, VS Code, онлайн-сервисы и Obsidian для конвертации.</li>
          <li>Как сохранять структуру и оформление при переводе в другой формат.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Это был последний урок курса. Теперь вы умеете не только писать на Markdown, но и превращать свои документы в профессиональные материалы для публикации и обмена!
        </p>
      `
    }
  ],
  task: "Напишите короткий документ на Markdown и экспортируйте его в формат PDF или DOCX. Проверьте, как отобразились заголовки, списки и таблицы.",
  exampleAnswer: "# Экспорт Markdown\n\n## Тестовый документ\n\n### Описание\n\nЭто пример документа, который можно экспортировать в PDF или DOCX.\n\n### Список возможностей:\n- Заголовки\n- Параграфы\n- Списки\n- Таблицы\n\n### Таблица\n\n| Формат | Поддержка |\n|--------|-----------|\n| PDF    | ✅         |\n| DOCX   | ✅         |\n| HTML   | ✅         |"
};