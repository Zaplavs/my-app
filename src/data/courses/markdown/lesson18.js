export default {
  id: 39,
  title: "Markdown в блогах и CMS",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Markdown стал популярным не только среди разработчиков, но и среди авторов, редакторов и технических писателей. Его часто используют в системах управления контентом (CMS) и платформах для создания блогов.
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
          <li>Как использовать Markdown в популярных CMS и платформах.</li>
          <li>Какие преимущества даёт Markdown при написании статей и документации.</li>
          <li>Как переносить текст из Markdown в разные платформы без потерь форматирования.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое CMS?</h3>
        <p>
          <strong>CMS</strong> (Content Management System) — это система управления контентом, которая позволяет создавать, редактировать и публиковать контент без знания HTML или программирования.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Многие современные CMS поддерживают Markdown как один из способов оформления текста. Это делает написание статей быстрым и удобным.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Markdown в Notion</h3>
        <p>
          <a href="https://www.notion.so " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Notion</a> — это гибрид блокнота, базы данных и CMS. Он частично поддерживает Markdown для форматирования текста.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Пример:</h4>
      `
    },
    {
      type: 'code',
      code: "# Заголовок\n\n## Подзаголовок\n\n- Список\n- Еще пункт\n\n**Жирный текст**"
    },
    {
      type: 'text',
      text: `
        <p>
          При вводе таких команд Notion автоматически преобразует их в нужный формат. Однако полноценной поддержки всех возможностей Markdown нет.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Markdown в Ghost</h3>
        <p>
          <a href="https://ghost.org " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Ghost</a> — это простая и мощная CMS для создания блогов и журналов. Она использует Markdown как основной язык форматирования.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          При создании нового поста в Ghost можно начать вводить Markdown-синтаксис прямо в редакторе.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Пример:</h4>
      `
    },
    {
      type: 'code',
      code: "# Блоговая статья\n\nЭто начало статьи.\n\n## Подзаголовок\n\n- Пункт 1\n- Пункт 2\n\n[Ссылка на источник](https://example.com )"
    },
    {
      type: 'text',
      text: `
        <p>
          Такой текст будет мгновенно отображаться с правильным форматированием.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Markdown в Docusaurus</h3>
        <p>
          <a href="https://docusaurus.io " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Docusaurus</a> — это фреймворк от Meta для создания документации. Он полностью строится на Markdown и поддерживает расширения.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Файлы документации создаются в виде <code>.md</code> файлов и хранятся в папке <code>docs</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Пример файла:</h4>
      `
    },
    {
      type: 'code',
      code: "---\ntitle: Введение\nsidebar_label: Главная\n---\n\n# Добро пожаловать в документацию\n\nЭто первая страница документации.\n\n## Как читать эту документацию\n\n- Изучите основы\n- Перейдите к продвинутым темам"
    },
    {
      type: 'text',
      text: `
        <p>
          Docusaurus также поддерживает специальные блоки, такие как примечания, предупреждения и кодовые примеры.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Другие CMS и платформы с поддержкой Markdown</h3>
        <p>
          Вот ещё несколько популярных систем, которые используют Markdown:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Typora + GitHub Pages</strong> — для создания личного блога через Markdown и GitHub.</li>
          <li><strong>VuePress / MkDocs / Jekyll</strong> — статические генераторы сайтов, работающие с Markdown.</li>
          <li><strong>Discourse</strong> — форумные движки, где можно писать комментарии на Markdown.</li>
          <li><strong>Read the Docs</strong> — платформа для документации с полной поддержкой Markdown.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Преимущества использования Markdown в CMS и блогах</h3>
        <p>
          Использование Markdown в системах управления контентом имеет множество преимуществ:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Простота:</strong> не нужно знать HTML, чтобы красиво оформлять текст.</li>
          <li><strong>Читаемость:</strong> даже в сыром виде Markdown легко читается.</li>
          <li><strong>Переносимость:</strong> файлы .md можно использовать везде — от GitHub до сайта.</li>
          <li><strong>Поддержка версий:</strong> легко работать с Git и отслеживать изменения.</li>
          <li><strong>Автоматизация:</strong> можно интегрировать Markdown в CI/CD и генерировать документацию автоматически.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как писать статьи и документацию на Markdown</h3>
        <p>
          Чтобы эффективно использовать Markdown для написания статей и документации, следуйте этим рекомендациям:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте заголовки для структуры.</li>
          <li>Добавляйте списки и таблицы для наглядности.</li>
          <li>Вставляйте код в блоки с указанием языка.</li>
          <li>Пишите оглавление в начале длинных документов.</li>
          <li>Сопровождайте сложные идеи математическими формулами (в системах с поддержкой LaTeX).</li>
          <li>Используйте диаграммы Mermaid для объяснения процессов и архитектуры.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <p>
          Вот несколько практических рекомендаций:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте шаблоны документов для однородности статей.</li>
          <li>Ограничивайте длину строк (например, 80 символов), чтобы сохранить читаемость в редакторах.</li>
          <li>Храните все изображения в одной папке и используйте относительные пути.</li>
          <li>Тестируйте внешний вид документа перед публикацией.</li>
          <li>Используйте системы предварительного просмотра, такие как VS Code Live Preview или Obsidian.</li>
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
          <li>Как использовать Markdown в CMS, таких как Notion, Ghost и Docusaurus.</li>
          <li>Какие преимущества даёт Markdown при создании статей и технической документации.</li>
          <li>Как сохранять структуру и форматирование при переходе между различными системами.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Это был последний теоретический урок курса. В следующем задании вы примените всё, чему научились: создадите статью в Markdown и опубликуете её в блоговой системе или документационном проекте.
        </p>
      `
    }
  ],
  task: "Напишите статью в Markdown для блога или документации. Выберите одну из CMS, поддерживающих Markdown, и подготовьте файл с заголовками, списками, ссылками, изображением и блоком кода.",
  exampleAnswer: "# Как начать изучать Python\n\n## Введение\n\nPython — один из самых популярных языков программирования. Он прост в освоении и широко используется в науке, веб-разработке и анализе данных.\n\n## Шаги для начинающих\n\n- Установите Python с официального сайта\n- Настройте среду разработки\n- Начните с простых скриптов\n- Изучите библиотеки: NumPy, Pandas, Flask\n\n## Пример кода\n\n```python\nprint('Привет, мир!')\n```\n\n![Логотип Python](https://example.com/python-logo.png )\n\n## Полезные ссылки\n\n- [Официальный сайт Python](https://python.org )\n- [Курсы на Coursera](https://coursera.org )"
};