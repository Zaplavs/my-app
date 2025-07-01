export default {
  id: 14,
  title: "Введение в GitHub. Регистрация и интерфейс. Создание репозитория и привязка локального проекта",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          <strong>GitHub</strong> — это популярная платформа для хостинга и совместной разработки кода на основе системы контроля версий Git.
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
          <li>Как зарегистрироваться и войти в GitHub.</li>
          <li>Как ориентироваться в интерфейсе.</li>
          <li>Как создать свой первый репозиторий на GitHub.</li>
          <li>Как привязать локальный проект к удалённому репозиторию.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Регистрация на GitHub</h3>
        <p>
          Чтобы начать работу с GitHub, нужно создать аккаунт. Перейдите на сайт <a href="https://github.com " target="_blank" class="text-blue-600 underline">https://github.com </a> и нажмите кнопку <strong>Sign up</strong>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Следуйте инструкциям:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Введите адрес электронной почты.</li>
          <li>Придумайте имя пользователя.</li>
          <li>Создайте надёжный пароль.</li>
          <li>Пройдите капчу и подтвердите учётную запись по email.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Интерфейс GitHub</h3>
        <p>
          После регистрации вы попадаете на главную страницу. Вот основные элементы интерфейса:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Repositories (репозитории)</strong> — список ваших проектов.</li>
          <li><strong>Profile</strong> — ваш профиль и активность.</li>
          <li><strong>Notifications</strong> — уведомления о действиях в проектах.</li>
          <li><strong>Explore</strong> — поиск интересных вам проектов и тем.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Создание нового репозитория</h3>
        <p>
          Чтобы создать новый репозиторий:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Нажмите на кнопку <code>New</code> рядом с заголовком Repositories.</li>
          <li>Введите название репозитория (например, <code>my-first-project</code>).</li>
          <li>Выберите тип доступа: Public или Private.</li>
          <li>Вы можете добавить файл README.md, .gitignore и выбрать лицензию при создании.</li>
          <li>Нажмите <code>Create repository</code>.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Теперь у вас есть пустой репозиторий на GitHub.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Привязка локального проекта к удалённому репозиторию</h3>
        <p>
          Допустим, у вас уже есть локальная папка с проектом. Чтобы связать её с удалённым репозиторием:
        </p>
      `
    },
    {
      type: 'code',
      code: `cd /путь/к/вашему/проекту\n# Инициализируем Git\ngit init\n# Добавляем все файлы\ngit add .\n# Делаем первый коммит\ngit commit -m "Initial commit"`
    },
    {
      type: 'text',
      text: `
        <p>
          Теперь свяжите локальный проект с репозиторием на GitHub:
        </p>
      `
    },
    {
      type: 'code',
      code: `git remote add origin https://github.com/ ваше_имя/my-first-project.git`
    },
    {
      type: 'text',
      text: `
        <p>
          Замените <code>ваше_имя</code> на ваше реальное имя пользователя GitHub.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Теперь отправьте ваш код на сервер:
        </p>
      `
    },
    {
      type: 'code',
      code: `git branch -M main\ngit push -u origin main`
    },
    {
      type: 'text',
      text: `
        <p>
          Это отправит вашу ветку <code>main</code> на GitHub и установит связь между локальной и удалённой веткой.
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
          <li>Регистрироваться на GitHub.</li>
          <li>Ориентироваться в основном интерфейсе.</li>
          <li>Создавать новые репозитории.</li>
          <li>Привязывать локальные проекты к удалённым репозиториям на GitHub.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          В следующем уроке вы научитесь работать с изменениями на сервере — получать обновления через <code>fetch</code> и <code>pull</code>.
        </p>
      `
    }
  ],
  task: "Зарегистрируйте аккаунт на GitHub, создайте новый репозиторий и привяжите к нему локальный проект.",
  exampleAnswer: "Выполнены шаги:\n1. Зарегистрирован аккаунт на GitHub.\n2. Создан репозиторий my-first-project.\n3. Локальный проект связан с удалённым:\ngit remote add origin https://github.com/username/my-first-project.git \ngit push -u origin main"
};