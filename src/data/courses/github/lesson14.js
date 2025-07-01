export default {
  id: 15,
  title: "Fork, Clone и работа с чужими проектами",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          GitHub позволяет не только создавать свои проекты, но и участвовать в разработке чужих. Два ключевых понятия для этого — <strong>fork</strong> и <strong>clone</strong>.
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
          <li>Что такое fork и clone.</li>
          <li>Как сделать fork чужого репозитория.</li>
          <li>Как клонировать репозиторий на свой компьютер.</li>
          <li>Как начать работать с чужим проектом.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое Fork?</h3>
        <p>
          <strong>Fork</strong> — это копия чужого репозитория, которая создаётся в вашем аккаунте на GitHub.
        </p>
        <p>
          Это позволяет вам свободно вносить изменения без влияния на оригинальный проект.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Чтобы сделать fork:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Откройте страницу нужного репозитория на GitHub.</li>
          <li>Нажмите кнопку <code>Fork</code> в правом верхнем углу.</li>
          <li>Выберите аккаунт, куда хотите сохранить копию (если у вас несколько).</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Теперь у вас есть точная копия репозитория, и вы можете вносить в неё любые изменения.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое Clone?</h3>
        <p>
          <strong>Clone</strong> — это локальная копия репозитория на вашем компьютере.
        </p>
        <p>
          После клонирования вы можете работать с проектом как с обычной папкой, используя Git для отслеживания изменений.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как клонировать репозиторий</h3>
        <p>
          Чтобы клонировать репозиторий:
        </p>
      `
    },
    {
      type: 'code',
      code: `git clone https://github.com/ ваше_имя/название-репозитория.git`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда скачает весь репозиторий на ваш компьютер в новую папку с названием репозитория.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Пример:
        </p>
      `
    },
    {
      type: 'code',
      code: `git clone https://github.com/johnsmith/my-cool-project.git `
    },
    {
      type: 'text',
      text: `
        <p>
          Теперь вы можете открывать этот проект в редакторе кода и работать с ним.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Работа с исходным проектом</h3>
        <p>
          Fork и clone часто используются вместе при участии в open-source проектах.
        </p>
        <p>
          Вот типичный процесс:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Сделайте fork оригинального репозитория.</li>
          <li>Клонируйте свой fork на компьютер.</li>
          <li>Создайте новую ветку для своих изменений:</li>
        </ol>
      `
    },
    {
      type: 'code',
      code: `git checkout -b feature/new-ui`
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4" start="4">
          <li>Внесите изменения и сделайте коммиты.</li>
          <li>Отправьте изменения в свой fork:</li>
        </ol>
      `
    },
    {
      type: 'code',
      code: `git push origin feature/new-ui`
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4" start="6">
          <li>Откройте GitHub и создайте Pull Request в оригинальный репозиторий.</li>
        </ol>
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
          <li>Делать fork чужих репозиториев.</li>
          <li>Клонировать проекты на свой компьютер.</li>
          <li>Работать с чужими проектами через ветки и push.</li>
          <li>Готовить Pull Request для участия в open-source проектах.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          В следующем уроке вы научитесь отправлять свои изменения обратно в оригинальный проект через Pull Request.
        </p>
      `
    }
  ],
  task: "Сделайте fork любого open-source проекта на GitHub, клонируйте его на свой компьютер и создайте новую ветку для работы.",
  exampleAnswer: "Выполнены шаги:\n1. Выполнен fork репозитория my-cool-project.\n2. Выполнено клонирование на компьютер:\ngit clone https://github.com/username/my-cool-project.git \n3. Создана новая ветка:\ngit checkout -b feature/add-readme"
};