export default {
  id: 6,
  title: "Просмотр состояния и истории изменений",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          После того как вы начали работать с репозиторием и сделали несколько коммитов, важно уметь проверять текущее состояние проекта и просматривать историю изменений.
        </p>
        <p>
          В этом уроке вы познакомитесь с тремя важными командами:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>git status</code> — показывает текущее состояние рабочей директории и индекса.</li>
          <li><code>git log</code> — отображает историю коммитов.</li>
          <li><code>git diff</code> — сравнивает изменения между различными состояниями файлов.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Проверка текущего состояния: git status</h3>
        <p>
          Команда <code>git status</code> показывает, какие файлы были изменены, добавлены или удалены. Она помогает понять, что находится в рабочей директории и в индексе.
        </p>
      `
    },
    {
      type: 'code',
      code: `git status`
    },
    {
      type: 'text',
      text: `
        <p>
          Пример вывода:
        </p>
      `
    },
    {
      type: 'code',
      code: `On branch main\nYour branch is up to date with 'origin/main'.\n\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n\tmodified:   README.md\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\tindex.html`
    },
    {
      type: 'text',
      text: `
        <p>
          Это означает, что:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Файл <code>README.md</code> был изменён и добавлен в индекс (готов к коммиту).</li>
          <li>Файл <code>index.html</code> не отслеживается Git (untracked).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Просмотр истории коммитов: git log</h3>
        <p>
          Чтобы посмотреть историю всех сделанных коммитов, используется команда:
        </p>
      `
    },
    {
      type: 'code',
      code: `git log`
    },
    {
      type: 'text',
      text: `
        <p>
          Она выводит список коммитов в обратном порядке (самый свежий — первым). Пример вывода:
        </p>
      `
    },
    {
      type: 'code',
      code: `commit abcdef1234567890abcdef1234567890abcdef1234\nAuthor: Иван Иванов <ivan@example.com>\nDate:   Mon Oct 7 12:00:00 2024 +0300\n\n    Добавлено приветствие на главной странице\n\ncommit 0987654321098765432109876543210987654321\nAuthor: Иван Иванов <ivan@example.com>\nDate:   Sun Oct 6 15:30:00 2024 +0300\n\n    Создан index.html`
    },
    {
      type: 'text',
      text: `
        <p>
          Каждый коммит имеет:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Хэш коммита</strong> — уникальный идентификатор (например, <code>abcdef123456...</code>).</li>
          <li><strong>Автора</strong> — имя и email пользователя, указанного при настройке Git.</li>
          <li><strong>Дата</strong> — когда был сделан коммит.</li>
          <li><strong>Сообщение</strong> — описание изменений.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Если вы хотите более компактный вывод, можно использовать:
        </p>
      `
    },
    {
      type: 'code',
      code: `git log --oneline`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда покажет только хэши и сообщения коммитов.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Сравнение изменений: git diff</h3>
        <p>
          Иногда бывает сложно понять, какие именно изменения были внесены в файл. Для этого используется команда:
        </p>
      `
    },
    {
      type: 'code',
      code: `git diff`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда показывает разницу между рабочей директорией и индексом (изменения, которые ещё не добавлены через <code>git add</code>).
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Если вы хотите сравнить изменения, уже добавленные в индекс (но ещё не закомиченные), используйте:
        </p>
      `
    },
    {
      type: 'code',
      code: `git diff --cached`
    },
    {
      type: 'text',
      text: `
        <p>
          А если нужно сравнить текущее состояние с последним коммитом:
        </p>
      `
    },
    {
      type: 'code',
      code: `git diff HEAD`
    },
    {
      type: 'text',
      text: `
        <p>
          Пример вывода <code>git diff</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `diff --git a/README.md b/README.md\nindex 1234567..890abcd 100644\n--- a/README.md\n+++ b/README.md\n@@ -1,3 +1,4 @@\n # Проект Hello World\n Это мой первый Git-проект.\n+Он работает!\n`
    },
    {
      type: 'text',
      text: `
        <p>
          Здесь видно, что была добавлена новая строка: <code>Он работает!</code>.
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
          <li>Проверять текущее состояние репозитория с помощью <code>git status</code>.</li>
          <li>Просматривать историю коммитов с помощью <code>git log</code>.</li>
          <li>Сравнивать изменения в файлах с помощью <code>git diff</code>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Эти команды станут вашими основными инструментами для контроля изменений и отладки процессов работы с Git.
        </p>
        <p>
          В следующем уроке вы узнаете, как работать с ветками: создавать, переключаться, объединять.
        </p>
      `
    }
  ],
  task: "Сделайте изменения в одном из файлов, проверьте статус репозитория, посмотрите, какие именно изменения были внесены, и просмотрите историю коммитов.",
  exampleAnswer: "Выполнены команды:\ngit status # Показал изменённый файл\ngit diff # Показал конкретные изменения\ngit log # Просмотрел историю коммитов"
};