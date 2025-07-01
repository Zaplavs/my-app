export default {
  id: 16,
  title: "Pull Requests (PR)",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          <strong>Pull Request (PR)</strong> — это способ предложить свои изменения для объединения с другим репозиторием. Он особенно важен при участии в open-source проектах или командной разработке.
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
          <li>Что такое Pull Request.</li>
          <li>Как создать и отправить свой PR.</li>
          <li>Как происходит обсуждение и review кода.</li>
          <li>Как принять или закрыть Pull Request.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое Pull Request?</h3>
        <p>
          Когда вы делаете fork чужого проекта, вносите изменения и хотите предложить их автору, вы создаёте <strong>Pull Request</strong>.
        </p>
        <p>
          Он позволяет показать, какие именно изменения были сделаны, обсудить их и при необходимости внести правки перед слиянием.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как создать Pull Request</h3>
        <p>
          Предположим, вы уже сделали fork, клонировали проект и внесли изменения в новую ветку:
        </p>
      `
    },
    {
      type: 'code',
      code: `git checkout -b feature/new-button\ngit add .\ngit commit -m "Добавлен новый стиль кнопки"\ngit push origin feature/new-button`
    },
    {
      type: 'text',
      text: `
        <p>
          Теперь перейдите на страницу вашего репозитория на GitHub.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Нажмите на кнопку <code>Compare & pull request</code> рядом с вашей недавно загруженной веткой.</li>
          <li>Выберите, в какую ветку оригинального проекта вы хотите слить ваши изменения (обычно это <code>main</code> или <code>master</code>).</li>
          <li>Опишите, что вы изменили — добавьте заголовок и детальное описание.</li>
          <li>Нажмите <code>Create pull request</code>.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Обсуждение и review кода</h3>
        <p>
          После создания PR другие разработчики могут:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Прокомментировать отдельные строки кода.</li>
          <li>Задать вопросы или попросить изменить часть реализации.</li>
          <li>Поставить одобрительный комментарий (approve) или запросить изменения.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Вы можете продолжать вносить правки в ту же ветку — они автоматически будут добавляться в этот же PR.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как принять или закрыть Pull Request</h3>
        <p>
          Автор оригинального репозитория может принять или отклонить ваш PR:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Открывает вкладку <code>Pull requests</code> в своём репозитории.</li>
          <li>Выбирает ваш PR из списка.</li>
          <li>Просматривает изменения и комментарии.</li>
          <li>Если всё в порядке — нажимает <code>Merge pull request</code>, чтобы объединить изменения.</li>
          <li>Или нажимает <code>Close pull request</code>, если изменения не подходят.</li>
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
          <li>Создавать Pull Request после внесения изменений.</li>
          <li>Описывать и обсуждать свои правки в PR.</li>
          <li>Участвовать в review кода.</li>
          <li>Понимать, как принимаются и закрываются Pull Requests.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Следующий шаг — научиться работать с Issues и использовать их для планирования задач в команде.
        </p>
      `
    }
  ],
  task: "Создайте Pull Request к своему fork'у проекта или к оригинальному репозиторию. Опишите, какие изменения вы внесли.",
  exampleAnswer: "Выполнены шаги:\n1. Создана новая ветка feature/add-contact-form.\n2. Добавлена форма обратной связи.\n3. Отправлен PR с описанием изменений:\n---\n## Что изменено\nДобавлена форма обратной связи в раздел контактов.\n\n## Тестирование\nФорма проверена локально, работает корректно.\n---"
};