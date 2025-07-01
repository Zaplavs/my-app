export default {
  id: 20,
  title: "GitHub Pages и статические сайты",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          <strong>GitHub Pages</strong> — это удобный способ размещать статические сайты прямо на GitHub. Это отличное решение для портфолио, документации, блогов или демонстрации проектов.
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
          <li>Что такое GitHub Pages.</li>
          <li>Как опубликовать сайт через GitHub Pages.</li>
          <li>Как настроить свой домен.</li>
          <li>Как использовать автоматический деплой с помощью GitHub Actions.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое GitHub Pages?</h3>
        <p>
          GitHub Pages — это хостинг статических сайтов, интегрированный напрямую с репозиториями на GitHub. Он поддерживает HTML, CSS, JavaScript и даже фреймворки, такие как React, Vue, Jekyll и другие.
        </p>
        <p>
          Каждый пользователь получает бесплатный адрес вида <code>https://ваше_имя.github.io/название-репозитория</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как опубликовать сайт на GitHub Pages</h3>
        <p>
          Чтобы опубликовать сайт:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Создайте репозиторий (например, <code>my-portfolio</code>).</li>
          <li>Добавьте туда ваши HTML, CSS и JS файлы.</li>
          <li>Перейдите в настройки репозитория (<code>Settings → Pages</code>).</li>
          <li>Выберите ветку (обычно <code>main</code>) и папку (обычно корень проекта — <code>/ (root)</code>).</li>
          <li>Нажмите <code>Save</code>.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Через несколько минут ваш сайт будет доступен по адресу:
        </p>
      `
    },
    {
      type: 'code',
      code: `https://ваше_имя.github.io/название-репозитория`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Настройка собственного домена</h3>
        <p>
          Если у вас есть свой домен, вы можете привязать его к сайту на GitHub Pages:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>В разделе <code>Pages</code> репозитория введите ваш домен в поле <code>Custom domain</code>.</li>
          <li>Нажмите <code>Save</code>.</li>
          <li>Получите CNAME-запись, которую нужно добавить в настройки DNS вашего домена.</li>
          <li>Настройте перенаправление с www и без www (если нужно).</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Также можно создать файл <code>CNAME</code> в корне репозитория с указанием вашего домена:
        </p>
      `
    },
    {
      type: 'code',
      code: `example.com`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Автоматический деплой с GitHub Actions</h3>
        <p>
          Если вы используете генератор статики (например, Jekyll, Hugo, Gatsby), можно настроить автоматическую сборку и публикацию сайта с помощью <strong>GitHub Actions</strong>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Пример workflow-файла <code>.github/workflows/deploy.yml</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `name: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Build site\n        run: npm run build\n      - name: Deploy\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: \${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./dist`
    },
    {
      type: 'text',
      text: `
        <p>
          Этот workflow будет автоматически собирать и публиковать сайт при каждом коммите в ветке <code>main</code>.
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
          <li>Публиковать статические сайты через GitHub Pages.</li>
          <li>Привязывать собственный домен к сайту.</li>
          <li>Использовать GitHub Actions для автоматического деплоя.</li>
          <li>Размещать портфолио, документацию и демо-проекты.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Следующий шаг — научиться использовать GitHub Actions для автоматизации тестирования, сборки и других задач CI/CD.
        </p>
      `
    }
  ],
  task: "Создайте простой HTML-сайт и опубликуйте его с помощью GitHub Pages. Настройте автоматический деплой через GitHub Actions.",
  exampleAnswer: "Выполнено:\n1. Создан репозиторий my-site.\n2. Добавлены файлы index.html, style.css и script.js.\n3. Активирован GitHub Pages в настройках репозитория.\n4. Сайт доступен по адресу: https://username.github.io/my-site \n5. Настроен workflow в .github/workflows/deploy.yml для автоматического деплоя."
};