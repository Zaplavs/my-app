export default {
  id: 11,
  title: "Работа с удалёнными репозиториями",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          До этого мы работали только с <strong>локальным</strong> репозиторием — папкой на вашем компьютере. 
          Но Git особенно мощный, когда вы работаете <strong>совместно</strong> с другими разработчиками через <strong>удалённые репозитории</strong>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое удалённый репозиторий?</h3>
        <p>
          <strong>Удалённый репозиторий (remote repository)</strong> — это копия вашего проекта, хранящаяся на сервере, например, на GitHub, GitLab или Bitbucket.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Он служит общей точкой для всех участников команды, где можно:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Загружать свои изменения</strong> (<code>git push</code>).</li>
          <li><strong>Получать изменения других</strong> (<code>git pull</code>).</li>
          <li><strong>Создавать бэкапы</strong> локального репозитория.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Добавление удалённого репозитория: git remote add</h3>
        <p>
          Чтобы связать локальный репозиторий с удалённым, используется команда:
        </p>
      `
    },
    {
      type: 'code',
      code: `git remote add имя_удалённого_репозитория URL`
    },
    {
      type: 'text',
      text: `
        <p>
          Чаще всего вместо <code>имя_удалённого_репозитория</code> используют слово <code>origin</code> — это стандартное имя для основного удалённого репозитория.
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
      code: `git remote add origin https://github.com/ваше-имя/ваш-проект.git` 
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда создаёт ссылку на удалённый репозиторий под именем <code>origin</code>, которую можно использовать в дальнейших командах.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Просмотр подключенных репозиториев: git remote -v</h3>
        <p>
          Чтобы проверить, какие удалённые репозитории уже добавлены, используйте:
        </p>
      `
    },
    {
      type: 'code',
      code: `git remote -v`
    },
    {
      type: 'text',
      text: `
        <p>
          Это покажет список всех удалённых репозиториев и их адреса:
        </p>
      `
    },
    {
      type: 'code',
      code: `origin  https://github.com/ваше-имя/ваш-проект.git  (fetch)\norigin  https://github.com/ваше-имя/ваш-проект.git  (push)`
    },
    {
      type: 'text',
      text: `
        <p>
          Здесь указаны URL для получения (<code>fetch</code>) и отправки (<code>push</code>) данных.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Изменение удалённого репозитория</h3>
        <p>
          Если вам нужно изменить URL уже добавленного удалённого репозитория:
        </p>
      `
    },
    {
      type: 'code',
      code: `git remote set-url origin новый_URL`
    },
    {
      type: 'text',
      text: `
        <p>
          Например:
        </p>
      `
    },
    {
      type: 'code',
      code: `git remote set-url origin git@github.com:ваше-имя/ваш-проект.git`
    },
    {
      type: 'text',
      text: `
        <p>
          Это полезно, если вы переносите проект на другой сервер или хотите использовать SSH вместо HTTPS.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Удаление удалённого репозитория</h3>
        <p>
          Чтобы удалить связь с удалённым репозиторием:
        </p>
      `
    },
    {
      type: 'code',
      code: `git remote remove origin`
    },
    {
      type: 'text',
      text: `
        <p>
          После этой команды репозиторий больше не будет связан с удалённым сервером, но локальные данные останутся.
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
          <li>Объяснять, что такое удалённый репозиторий и зачем он нужен.</li>
          <li>Добавлять его с помощью <code>git remote add</code>.</li>
          <li>Проверять подключенные репозитории через <code>git remote -v</code>.</li>
          <li>Менять и удалять связи с удаленными репозиториями при необходимости.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          В следующем уроке вы узнаете, как загружать изменения на удалённый сервер с помощью команды <code>git push</code> и получать обновления от других с помощью <code>git pull</code>.
        </p>
      `
    }
  ],
  task: "Создайте локальный репозиторий, свяжите его с удалённым (например, на GitHub), проверьте, что связь установлена.",
  exampleAnswer: "Выполнены команды:\ngit init\n# Создаем README\necho \"# Проект\" > README.md\ngit add README.md\ngit commit -m \"Первый коммит\"\n# Добавляем удалённый репозиторий\ngit remote add origin https://github.com/ваше-имя/ваш-проект.git\n# Проверяем связь\ngit remote -v" 
};