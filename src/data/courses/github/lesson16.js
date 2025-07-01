export default {
  id: 17,
  title: "Gitignore и игнорирование файлов",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          При работе с Git не все файлы проекта нужно отслеживать. Например, логи, временные файлы, папки с зависимостями (типа <code>node_modules</code>) или конфигурации среды.
        </p>
        <p>
          Для этого используется файл <code>.gitignore</code>.
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
          <li>Что такое <code>.gitignore</code>.</li>
          <li>Как создать и использовать этот файл.</li>
          <li>Как работать с шаблонами и правилами.</li>
          <li>Где найти готовые шаблоны и генераторы <code>.gitignore</code>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое .gitignore?</h3>
        <p>
          Файл <code>.gitignore</code> — это текстовый файл, который указывает Git'у, какие файлы и папки следует игнорировать при коммитах.
        </p>
        <p>
          Он должен находиться в корне репозитория, но также можно создавать такие файлы и во вложенных директориях.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как создать .gitignore</h3>
        <p>
          Чтобы создать файл <code>.gitignore</code>, просто добавьте его в корень вашего проекта:
        </p>
      `
    },
    {
      type: 'code',
      code: `touch .gitignore`
    },
    {
      type: 'text',
      text: `
        <p>
          Затем откройте его в любом текстовом редакторе и добавьте правила.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Шаблоны и примеры правил</h3>
        <p>
          Правила в <code>.gitignore</code> могут быть простыми или использовать шаблоны:
        </p>
      `
    },
    {
      type: 'code',
      code: `# Игнорируем конкретный файл\n.env\n\n# Игнорируем все файлы с расширением .log\n*.log\n\n# Игнорируем папку node_modules\nnode_modules/\n\n# Игнорируем все файлы внутри папки logs, но не саму папку\nlogs/*\n\n# Игнорируем все файлы, начинающиеся на temp\n/temp*`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Правила и синтаксис .gitignore</h3>
        <p>
          Основные принципы написания правил:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>#</code> — комментарии, игнорируются Git'ом.</li>
          <li><code>*</code> — подстановка любого количества символов (например, <code>*.tmp</code>).</li>
          <li><code>**</code> — рекурсивное совпадение (например, <code>logs/**/*.log</code>).</li>
          <li><code>!</code> — исключает ранее заданное правило (например, <code>!important.txt</code>).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Примеры для разных типов проектов</h3>
        <p>
          Вот несколько распространённых записей для разных технологий:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Node.js:</strong> <code>node_modules/</code>, <code>.env</code>, <code>npm-debug.log</code></li>
          <li><strong>Python:</strong> <code>__pycache__</code>, <code>.pyc</code>, <code>.env</code>, <code>venv/</code></li>
          <li><strong>Java:</strong> <code>target/</code>, <code>.classpath</code>, <code>.project</code></li>
          <li><strong>Android:</strong> <code>/build</code>, <code>/gradle</code>, <code>.iml</code></li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Генераторы .gitignore</h3>
        <p>
          Ручное составление файла может быть трудоёмким. К счастью, есть инструменты, которые помогут вам создать <code>.gitignore</code> автоматически:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><a href="https://www.gitignore.io/ " target="_blank" class="text-blue-600 underline">gitignore.io</a> — введите названия ваших технологий, и получите готовый .gitignore.</li>
          <li><a href="https://github.com/github/gitignore " target="_blank" class="text-blue-600 underline">GitHub / gitignore</a> — официальный репозиторий с шаблонами для множества языков и платформ.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Игнорирование уже закоммиченных файлов</h3>
        <p>
          Если файл уже был добавлен в репозиторий, то просто добавление его в <code>.gitignore</code> не остановит отслеживание.
        </p>
        <p>
          Чтобы перестать отслеживать файл, выполните:
        </p>
      `
    },
    {
      type: 'code',
      code: `git rm --cached имя_файла`
    },
    {
      type: 'text',
      text: `
        <p>
          Или, если нужно удалить из индекса всю папку:
        </p>
      `
    },
    {
      type: 'code',
      code: `git rm -r --cached папка/`
    },
    {
      type: 'text',
      text: `
        <p>
          После этого добавьте файл в <code>.gitignore</code> и сделайте коммит:
        </p>
      `
    },
    {
      type: 'code',
      code: `git add .gitignore\ngit commit -m "Обновлён .gitignore"`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Итог</h3>
        <p>
          Теперь вы умеете:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Создавать и использовать файл <code>.gitignore</code>.</li>
          <li>Писать правила с использованием шаблонов.</li>
          <li>Использовать генераторы для быстрого создания файла.</li>
          <li>Останавливать отслеживание уже добавленных файлов.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Следующий шаг — научиться работать с тегами и фиксировать важные версии проекта.
        </p>
      `
    }
  ],
  task: "Создайте файл .gitignore для своего проекта и добавьте в него правила для игнорирования временных и служебных файлов.",
  exampleAnswer: "Создан файл .gitignore с содержимым:\n.env\n*.log\nnode_modules/\ntmp/\nlogs/"
};