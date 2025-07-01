export default {
  id: 9,
  title: "Слияние веток",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          После того как вы поработали над отдельной задачей в своей ветке, приходит время объединить изменения с основной веткой проекта.
        </p>
        <p>
          В этом уроке вы узнаете, как использовать команду <code>git merge</code>, разберёте типы слияний и научитесь просматривать историю в виде графа.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Объединение веток: git merge</h3>
        <p>
          Чтобы объединить изменения из одной ветки в другую, используется команда:
        </p>
      `
    },
    {
      type: 'code',
      code: `git merge имя_ветки`
    },
    {
      type: 'text',
      text: `
        <p>
          Например, если вы находитесь в ветке <code>main</code> и хотите объединить изменения из ветки <code>feature/header</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `git merge feature/header`
    },
    {
      type: 'text',
      text: `
        <p>
          Git автоматически объединит изменения, если конфликтов нет. Если есть — потребуется ручное разрешение.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Типы слияний: Fast-forward и Recursive</h3>
        <p>
          В Git существует несколько способов слияния. Два самых распространённых:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Fast-forward (быстрый переход)</strong> — применяется, когда ветка, в которую вы мержите, не имеет новых коммитов после создания целевой ветки.</li>
          <li><strong>Recursive (рекурсивное слияние)</strong> — создает новый коммит слияния, если обе ветки имеют новые коммиты.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Fast-forward слияние</h3>
        <p>
          Предположим, вы создали ветку <code>feature/readme</code>, сделали там один коммит, а в это время в <code>main</code> не было изменений. 
          Тогда Git просто переместит указатель ветки вперёд — это и будет fast-forward слияние.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Такое слияние не создаёт нового коммита, оно чище и проще.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Рекурсивное слияние</h3>
        <p>
          Если обе ветки содержат новые коммиты, Git выполнит рекурсивное слияние и создаст специальный <strong>merge commit</strong>, который объединяет обе истории.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Это позволяет сохранить информацию о том, какие ветки были объединены.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Просмотр графа ветвления: git log --graph</h3>
        <p>
          Чтобы наглядно увидеть, как происходило слияние, используйте флаг <code>--graph</code> в команде <code>git log</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `git log --oneline --graph --all`
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
      code: `*   7890abc Merge branch 'feature/header' into main\n|\\  \n| * cdef123 Add new header to index.html\n* | 456789 Update styles.css\n|/  \n* abcdef1 Main page created`
    },
    {
      type: 'text',
      text: `
        <p>
          Здесь видно, как ветка <code>feature/header</code> была объединена с <code>main</code>.
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
          <li>Объединять изменения из разных веток с помощью <code>git merge</code>.</li>
          <li>Понимать, в каких случаях Git делает fast-forward, а в каких — создаёт merge commit.</li>
          <li>Просматривать историю в виде графа с помощью <code>git log --graph</code>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Следующий шаг — освоить работу с удалёнными репозиториями и командами <code>git clone</code>, <code>git push</code>, <code>git pull</code>.
        </p>
      `
    }
  ],
  task: "Создайте две ветки, внесите в них изменения, объедините их и посмотрите граф истории.",
  exampleAnswer: "Выполнены команды:\ngit switch -c feature/a\necho \"A\" > file.txt\ngit add . && git commit -m \"Add A\"\ngit switch main\ngit switch -c feature/b\necho \"B\" > file.txt\ngit add . && git commit -m \"Add B\"\ngit switch main\ngit merge feature/a feature/b --allow-unrelated-histories # Объединяем\n# Проверяем граф:\ngit log --oneline --graph --all"
};