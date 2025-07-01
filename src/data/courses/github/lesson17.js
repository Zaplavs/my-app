export default {
  id: 18,
  title: "Rebase vs Merge",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          В Git есть два основных способа объединить изменения из разных веток: <code>merge</code> и <code>rebase</code>.
        </p>
        <p>
          Оба выполняют похожую задачу, но делают это по-разному. В этом уроке вы узнаете:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Что такое <code>git rebase</code>.</li>
          <li>Когда использовать <code>rebase</code>, а когда — <code>merge</code>.</li>
          <li>Как работает интерактивный <code>rebase</code> (<code>git rebase -i</code>).</li>
          <li>Какие проблемы могут возникнуть при использовании <code>rebase</code>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое git rebase?</h3>
        <p>
          Команда <code>git rebase</code> перемещает или "переписывает" историю коммитов вашей ветки, применяя её поверх другой ветки.
        </p>
        <p>
          Это позволяет сохранить линейную историю разработки, без лишних "слияний".
        </p>
      `
    },
    {
      type: 'code',
      code: `git checkout feature-branch\ngit rebase main`
    },
    {
      type: 'text',
      text: `
        <p>
          После выполнения этой команды все коммиты из ветки <code>feature-branch</code> будут применены поверх последнего состояния ветки <code>main</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Merge vs Rebase: чем отличаются?</h3>
        <table class="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Признак</th>
              <th class="border border-gray-300 px-4 py-2">Merge</th>
              <th class="border border-gray-300 px-4 py-2">Rebase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">История коммитов</td>
              <td class="border border-gray-300 px-4 py-2">Сохраняет оригинальную историю с дополнительным коммитом слияния.</td>
              <td class="border border-gray-300 px-4 py-2">Линейная история, как будто изменения были сделаны позже.</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Подходит для</td>
              <td class="border border-gray-300 px-4 py-2">Публичных (общих) веток, таких как <code>main</code> или <code>develop</code>.</td>
              <td class="border border-gray-300 px-4 py-2">локальных или приватных веток, чтобы сохранить чистую историю.</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Риск конфликтов</td>
              <td class="border border-gray-300 px-4 py-2">Меньше риска, если правильно использовать.</td>
              <td class="border border-gray-300 px-4 py-2">Больше риска, так как перезаписывается история.</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Когда что использовать?</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Merge:</strong> когда вы работаете с общей веткой (например, <code>main</code>) или хотите сохранить полную историю изменений.</li>
          <li><strong>Rebase:</strong> когда вы работаете над своей локальной веткой и хотите, чтобы история выглядела аккуратно и линейно.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Интерактивный rebase (git rebase -i)</h3>
        <p>
          Интерактивный режим позволяет не просто переносить коммиты, но и редактировать их порядок, объединять, удалять или менять сообщения.
        </p>
      `
    },
    {
      type: 'code',
      code: `git rebase -i HEAD~3`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда откроет текстовый редактор с последними 3 коммитами. Вы сможете:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>pick</code> — оставить коммит как есть.</li>
          <li><code>reword</code> — изменить сообщение коммита.</li>
          <li><code>edit</code> — остановиться на коммите для правок.</li>
          <li><code>squash</code> — объединить с предыдущим коммитом.</li>
          <li><code>drop</code> — удалить коммит.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования интерактивного rebase</h3>
        <p>
          Допустим, вы хотите объединить последние три коммита в один:
        </p>
      `
    },
    {
      type: 'code',
      code: `git rebase -i HEAD~3\n# В открывшемся редакторе:\npick abc123 First commit\nsquash def456 Second commit\nsquash ghi789 Third commit`
    },
    {
      type: 'text',
      text: `
        <p>
          Затем Git предложит ввести новое сообщение для объединённого коммита.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Возможные проблемы при rebase</h3>
        <p>
          При использовании <code>rebase</code> могут возникнуть следующие сложности:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Конфликты:</strong> они возникают так же, как и при <code>merge</code>, но могут появляться несколько раз по мере применения каждого коммита.</li>
          <li><strong>Потеря коммитов:</strong> если вы неправильно используете <code>rebase</code>, особенно интерактивный, можно случайно удалить коммиты.</li>
          <li><strong>Нарушение истории:</strong> нельзя использовать <code>rebase</code> для уже опубликованных (push'нутых) веток, потому что это может сломать историю у других разработчиков.</li>
        </ul>
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
          <li>Объяснять разницу между <code>merge</code> и <code>rebase</code>.</li>
          <li>Выбирать подходящий метод слияния в зависимости от ситуации.</li>
          <li>Использовать интерактивный <code>rebase</code> для редактирования истории коммитов.</li>
          <li>Понимать, какие проблемы могут возникнуть при использовании <code>rebase</code>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Следующий шаг — научиться работать с тегами и фиксировать важные версии проекта.
        </p>
      `
    }
  ],
  task: "Выполните rebase одной ветки на другую и попробуйте отредактировать историю коммитов через интерактивный rebase.",
  exampleAnswer: "Выполнено:\n1. Переключились на ветку feature:\ngit checkout feature\n2. Выполнили rebase на main:\ngit rebase main\n3. Использовали интерактивный rebase для объединения трёх коммитов:\ngit rebase -i HEAD~3"
};