export default {
  id: 12,
  title: "Отправка изменений на сервер (push)",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Теперь, когда ваш локальный репозиторий связан с удалённым, пришло время научиться отправлять свои изменения на сервер.
        </p>
        <p>
          Для этого используется команда <code>git push</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что делает git push?</h3>
        <p>
          Команда <code>git push</code> загружает ваши локальные коммиты в удалённый репозиторий. 
          Это позволяет делиться своими изменениями с другими разработчиками или создавать резервную копию вашего кода.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Простой пример использования</h3>
        <p>
          Чтобы отправить изменения из текущей ветки на удалённый сервер:
        </p>
      `
    },
    {
      type: 'code',
      code: `git push`
    },
    {
      type: 'text',
      text: `
        <p>
          Но обычно Git запрашивает больше информации — например, имя удалённого репозитория и имя ветки.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Первая отправка ветки на сервер</h3>
        <p>
          При первой отправке новой ветки нужно указать, куда именно вы хотите её загрузить:
        </p>
      `
    },
    {
      type: 'code',
      code: `git push -u origin main`
    },
    {
      type: 'text',
      text: `
        <p>
          Здесь:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>-u</code> или <code>--set-upstream</code> — связывает локальную ветку с удалённой.</li>
          <li><code>origin</code> — имя удалённого репозитория.</li>
          <li><code>main</code> — имя ветки, которую мы отправляем.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          После этой команды Git «запомнит», что эта локальная ветка должна быть связана с удалённой веткой <code>origin/main</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Установка upstream для существующей ветки</h3>
        <p>
          Если вы уже создали локальную ветку, но ещё не установили связь с удалённой, можно сделать это отдельно:
        </p>
      `
    },
    {
      type: 'code',
      code: `git push --set-upstream origin feature/new-header`
    },
    {
      type: 'text',
      text: `
        <p>
          Или короткая версия:
        </p>
      `
    },
    {
      type: 'code',
      code: `git push -u origin feature/new-header`
    },
    {
      type: 'text',
      text: `
        <p>
          Теперь вы можете просто использовать <code>git push</code> без дополнительных аргументов — Git сам знает, куда отправлять изменения.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Просмотр установленного upstream</h3>
        <p>
          Чтобы проверить, какие ветки связаны с удалёнными:
        </p>
      `
    },
    {
      type: 'code',
      code: `git branch -vv`
    },
    {
      type: 'text',
      text: `
        <p>
          В выводе будет указано, какая локальная ветка отслеживает удалённую:
        </p>
      `
    },
    {
      type: 'code',
      code: `* main     abcdef [origin/main] Первый коммит`
    },
    {
      type: 'text',
      text: `
        <p>
          Это означает, что локальная ветка <code>main</code> связана с <code>origin/main</code>.
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
          <li>Отправлять изменения на удалённый репозиторий с помощью <code>git push</code>.</li>
          <li>Устанавливать связь между локальной и удалённой веткой через флаг <code>-u</code> или <code>--set-upstream</code>.</li>
          <li>Проверять установленные связи с помощью <code>git branch -vv</code>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Следующий шаг — научиться получать изменения других разработчиков с помощью команды <code>git pull</code>, чтобы всегда работать с актуальной версией проекта.
        </p>
      `
    }
  ],
  task: "Создайте новую ветку, свяжите её с удалённым репозиторием и отправьте на сервер.",
  exampleAnswer: "Выполнены команды:\ngit switch -c feature/about-page\necho \"<h1>About</h1>\" > about.html\ngit add .\ngit commit -m \"Добавлена страница About\"\ngit push -u origin feature/about-page"
};