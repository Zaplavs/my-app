export default {
  id: 13,
  title: "Получение изменений с сервера (fetch и pull)",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          После того как вы начали отправлять свои изменения на удалённый репозиторий с помощью <code>git push</code>, приходит время получать изменения, сделанные другими разработчиками.
        </p>
        <p>
          В этом уроке вы узнаете, как использовать команды:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>git fetch</code> — загружает изменения, но не применяет их автоматически.</li>
          <li><code>git pull</code> — загружает и сразу объединяет изменения с вашей текущей веткой.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Получение изменений: git fetch</h3>
        <p>
          Команда <code>git fetch</code> загружает все изменения из удалённого репозитория, но <strong>не изменяет вашу рабочую директорию</strong>.
        </p>
      `
    },
    {
      type: 'code',
      code: `git fetch origin`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда скачивает новые данные из удалённого репозитория и обновляет ссылки на удалённые ветки (например, <code>origin/main</code>).
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Чтобы посмотреть, какие изменения были скачаны:
        </p>
      `
    },
    {
      type: 'code',
      code: `git log origin/main`
    },
    {
      type: 'text',
      text: `
        <p>
          Или сравнить с локальной веткой:
        </p>
      `
    },
    {
      type: 'code',
      code: `git diff origin/main`
    },
    {
      type: 'text',
      text: `
        <p>
          Это позволяет вам проверить, что произошло в удаленном репозитории, прежде чем применять изменения.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Автоматическое обновление: git pull</h3>
        <p>
          Если вы хотите сразу получить и применить изменения — используйте:
        </p>
      `
    },
    {
      type: 'code',
      code: `git pull origin main`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда делает две вещи:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Выполняет <code>git fetch origin main</code> — загружает изменения.</li>
          <li>Выполняет <code>git merge origin/main</code> — объединяет их с вашей текущей веткой.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          То есть <code>git pull</code> — это удобная комбинация двух команд для быстрого обновления.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Разница между git fetch и git pull</h3>
        <table class="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Команда</th>
              <th class="border border-gray-300 px-4 py-2">Что делает</th>
              <th class="border border-gray-300 px-4 py-2">Изменяет рабочую директорию?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2"><code>git fetch</code></td>
              <td class="border border-gray-300 px-4 py-2">Скачивает изменения из удалённого репозитория</td>
              <td class="border border-gray-300 px-4 py-2">Нет</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2"><code>git pull</code></td>
              <td class="border border-gray-300 px-4 py-2">Скачивает и сразу объединяет изменения</td>
              <td class="border border-gray-300 px-4 py-2">Да</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Выбирайте <code>fetch</code>, если хотите быть уверены, что точно знаете, какие изменения применяете. 
          Используйте <code>pull</code>, когда хотите быстро обновиться и доверяете изменениям.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как работает git pull при наличии конфликтов</h3>
        <p>
          Если в ваших изменениях и в удалённой ветке есть правки в одних и тех же строках файлов, Git остановит процесс слияния и сообщит о конфликте.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Вам нужно будет:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Открыть файлы с метками конфликтов (<code><<<<</code>, <code>====</code>, <code>>>></code>).</li>
          <li>Выбрать или объединить нужные части.</li>
          <li>Добавить файлы в индекс через <code>git add</code>.</li>
          <li>Завершить слияние с помощью <code>git commit</code>.</li>
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
          <li>Скачивать изменения с сервера с помощью <code>git fetch</code>.</li>
          <li>Обновлять ветку с автоматическим объединением через <code>git pull</code>.</li>
          <li>Понимать разницу между этими командами и выбирать подходящее поведение.</li>
          <li>Разрешать конфликты, возникающие после <code>git pull</code>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Следующий шаг — освоить работу с тегами, чтобы фиксировать важные моменты в истории проекта, например, версии релизов.
        </p>
      `
    }
  ],
  task: "Получите последние изменения с удалённого репозитория сначала через fetch, затем объедините их с локальной веткой.",
  exampleAnswer: "Выполнены команды:\ngit fetch origin\n# Проверяем изменения\ngit log origin/main\n# Объединяем вручную\ngit merge origin/main"
};