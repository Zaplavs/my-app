export default {
  id: 21,
  title: "GitHub Actions и автоматизация CI/CD",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          <strong>GitHub Actions</strong> — это мощный инструмент для автоматизации задач прямо в вашем репозитории. С его помощью вы можете запускать тесты, собирать проект, проверять код на качество и даже разворачивать приложение.
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
          <li>Что такое GitHub Actions.</li>
          <li>Как создать простой workflow с YAML.</li>
          <li>Как настроить автоматическое тестирование и сборку.</li>
          <li>Как реализовать автоматический деплой.</li>
          <li>Основные понятия YAML и структура workflow.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое GitHub Actions?</h3>
        <p>
          GitHub Actions — это система автоматизации, которая позволяет выполнять действия (actions) при определённых событиях в репозитории, например, при пуше в ветку или создании Pull Request.
        </p>
        <p>
          Это основа для построения процессов <strong>CI/CD</strong> (непрерывной интеграции и доставки).
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовые понятия GitHub Actions</h3>
        <p>
          Основные элементы workflow:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Workflow</strong> — автоматизированный процесс, описанный в файле YAML.</li>
          <li><strong>Job</strong> — отдельная задача внутри workflow.</li>
          <li><strong>Step</strong> — шаг внутри job, который выполняет конкретное действие.</li>
          <li><strong>Action</strong> — готовый скрипт или команда, которую можно использовать в step.</li>
          <li><strong>Runner</strong> — виртуальная машина, где выполняется workflow.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">YAML: формат для описания workflow</h3>
        <p>
          Все workflows описываются в формате <code>.yml</code> (YAML). Это человеко-читаемый формат данных.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Пример минимального файла:
        </p>
      `
    },
    {
      type: 'code',
      code: `name: Hello World\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Print a message\n        run: echo "Hello from GitHub Actions!"`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример workflow: тестирование и сборка</h3>
        <p>
          Допустим, у вас есть Node.js проект. Вы хотите автоматически запускать тесты и собирать проект при каждом пуше в ветку <code>main</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `name: CI Pipeline\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Установить Node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n      - name: Установить зависимости\n        run: npm install\n      - name: Запустить тесты\n        run: npm test\n\n  build:\n    runs-on: ubuntu-latest\n    needs: test\n    steps:\n      - uses: actions/checkout@v3\n      - name: Установить Node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n      - name: Собрать проект\n        run: npm run build`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Автоматический деплой</h3>
        <p>
          После успешной сборки можно автоматически развернуть проект. Например, отправить артефакты на сервер или в облачный хостинг.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Пример добавления деплоя на GitHub Pages:
        </p>
      `
    },
    {
      type: 'code',
      code: `  deploy:\n    runs-on: ubuntu-latest\n    needs: build\n    steps:\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: \${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./dist`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Где хранятся workflow'ы?</h3>
        <p>
          Все workflow'ы хранятся в папке <code>.github/workflows</code> в корне вашего репозитория.
        </p>
      `
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
          <li>Объяснять, что такое GitHub Actions и зачем он нужен.</li>
          <li>Создавать и редактировать workflow на YAML.</li>
          <li>Настройивать автоматическое тестирование и сборку проекта.</li>
          <li>Реализовывать автоматический деплой на GitHub Pages или другие платформы.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Следующий шаг — научиться работать с секретами, переменными окружения и более сложными пайплайнами.
        </p>
      `
    }
  ],
  task: "Создайте workflow, который будет автоматически запускать тесты и собирать проект при пуше в ветку main.",
  exampleAnswer: "Выполнен workflow в .github/workflows/ci.yml:\n```yaml\nname: CI Pipeline\non:\n  push:\n    branches:\n      - main\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n      - run: npm install\n      - run: npm test\n  build:\n    runs-on: ubuntu-latest\n    needs: test\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n      - run: npm run build"
};