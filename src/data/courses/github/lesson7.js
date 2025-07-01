export default {
  id: 8,
  title: "Работа с ветками",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Одной из ключевых особенностей Git является поддержка <strong>ветвления</strong>. 
          Ветки позволяют одновременно работать над разными задачами — например, над новой фичей или исправлением бага — не мешая основной стабильной версии проекта.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое ветка в Git?</h3>
        <p>
          <strong>Ветка (branch)</strong> — это указатель на один из коммитов в истории проекта. 
          По умолчанию Git создаёт ветку с определённым именем при инициализации репозитория.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Каждый новый коммит автоматически добавляется к активной ветке. 
          Таким образом, ветки помогают отслеживать развитие разных направлений работы.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Имя мастер-ветки: master → main</h3>
        <p>
          Раньше главная ветка в Git называлась <code>master</code>, но сегодня всё чаще используется более нейтральное имя — <code>main</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Это связано с инициативами сообщества по использованию более инклюзивной терминологии. 
          Многие платформы, такие как GitHub, теперь по умолчанию создают репозитории с веткой <code>main</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Также существуют альтернативные имена для главной ветки:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>mainline</code></li>
          <li><code>default</code></li>
          <li><code>trunk</code></li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Просмотр существующих веток: git branch</h3>
        <p>
          Чтобы посмотреть список всех веток в текущем репозитории:
        </p>
      `
    },
    {
      type: 'code',
      code: `git branch`
    },
    {
      type: 'text',
      text: `
        <p>
          Активная ветка будет отмечена символом <code>*</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Создание новой ветки: git branch имя_ветки</h3>
        <p>
          Чтобы создать новую ветку:
        </p>
      `
    },
    {
      type: 'code',
      code: `git branch feature-readme-update`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда создаёт новую ветку, но не переключает вас на неё.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Переключение между ветками: git checkout</h3>
        <p>
          Чтобы перейти на созданную ветку:
        </p>
      `
    },
    {
      type: 'code',
      code: `git checkout feature-readme-update`
    },
    {
      type: 'text',
      text: `
        <p>
          Теперь все изменения и новые коммиты будут происходить именно в этой ветке.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Создание и переключение за один шаг: git checkout -b</h3>
        <p>
          Если вы хотите сразу создать и переключиться на новую ветку:
        </p>
      `
    },
    {
      type: 'code',
      code: `git checkout -b bugfix/login-issue`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда создаёт ветку <code>bugfix/login-issue</code> и переключает вас на неё.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Ещё проще: git switch</h3>
        <p>
          Начиная с Git 2.23, есть более понятная команда для переключения между ветками:
        </p>
      `
    },
    {
      type: 'code',
      code: `git switch main`
    },
    {
      type: 'text',
      text: `
        <p>
          И для создания и переключения:
        </p>
      `
    },
    {
      type: 'code',
      code: `git switch -c feature/new-button`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда аналогична <code>git checkout -b</code>, но имеет более чёткий смысл.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Удаление ветки: git branch -d</h3>
        <p>
          Чтобы удалить ветку после завершения работы:
        </p>
      `
    },
    {
      type: 'code',
      code: `git branch -d feature/readme-update`
    },
    {
      type: 'text',
      text: `
        <p>
          Убедитесь, что изменения были объединены, иначе Git не позволит удалить ветку.
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
          <li>Создавать ветки (<code>git branch</code>).</li>
          <li>Переключаться между ними (<code>git checkout</code>, <code>git switch</code>).</li>
          <li>Удалять ветки (<code>git branch -d</code>).</li>
          <li>Использовать современные имена для главной ветки вместо устаревшего <code>master</code>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          В следующем уроке мы научимся объединять изменения из разных веток с помощью команды <code>git merge</code>.
        </p>
      `
    }
  ],
  task: "Создайте новую ветку, переключитесь на неё, сделайте пару коммитов, а затем вернитесь обратно на главную ветку.",
  exampleAnswer: "Выполнены команды:\ngit switch -c feature/header\necho \"<h1>Новый заголовок</h1>\" > index.html\ngit add .\ngit commit -m \"Добавлен новый заголовок\"\ngit switch main"
};