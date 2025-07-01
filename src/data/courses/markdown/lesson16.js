export default {
  id: 37,
  title: "Работа с Markdown в GitHub",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          GitHub — одна из самых популярных платформ для разработки программного обеспечения, где Markdown используется повсеместно: в файлах <code>README.md</code>, задачах (Issues), запросах на слияние (Pull Requests) и комментариях.
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
          <li>Как использовать Markdown в файлах README проектов.</li>
          <li>Как оформлять Issues и Pull Requests с помощью Markdown.</li>
          <li>Как добавлять код, списки, ссылки и таблицы в комментарии GitHub.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Файл README.md</h3>
        <p>
          Файл <code>README.md</code> — это первое, что видит пользователь при заходе в репозиторий. Он должен кратко описывать проект и помочь разобраться с его использованием.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Пример структуры README:
        </p>
      `
    },
    {
      type: 'code',
      code: "# Название проекта\n\nКраткое описание проекта.\n\n## Установка\n\nИнструкции по установке...\n\n## Использование\n\nПримеры использования..."
    },
    {
      type: 'text',
      text: `
        <p>
          GitHub автоматически отображает файл <code>README.md</code> на главной странице репозитория.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Оформление Issues и Pull Requests</h3>
        <p>
          При создании задач (Issues) или запросов на слияние (Pull Requests) можно использовать Markdown для улучшения читаемости текста.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Заголовки:</h4>
      `
    },
    {
      type: 'code',
      code: "# Баг-репорт\n\n## Описание проблемы"
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Списки:</h4>
      `
    },
    {
      type: 'code',
      code: "- Шаг 1\n- Шаг 2\n- Ожидаемый результат"
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Инлайновый и блочный код:</h4>
      `
    },
    {
      type: 'code',
      code: "При запуске команды \`npm start\` возникает ошибка:\n\n```\nError: Cannot find module 'react'\n```"
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Ссылки и изображения:</h4>
      `
    },
    {
      type: 'code',
      code: "[Скриншот ошибки](/path/to/screenshot.png)\n[Ссылка на документацию](https://example.com )"
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Таблицы:</h4>
      `
    },
    {
      type: 'code',
      code: "| Платформа | Версия |\n|-----------|--------|\n| Windows     | ✅ 10.0 |\n| macOS       | ❌ 11.4  |"
    },
    {
      type: 'text',
      text: `
        <p>
          Это помогает делать задачи понятнее и структурированнее.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Типы задач (Issues)</h3>
        <p>
          Вот распространённые типы задач:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Bug report</strong> — описание найденной ошибки.</li>
          <li><strong>Feature request</strong> — просьба добавить новую функцию.</li>
          <li><strong>Documentation issue</strong> — проблема с документацией.</li>
          <li><strong>Pull Request</strong> — предложенные изменения в коде.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Во всех этих случаях грамотное использование Markdown делает общение более эффективным.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Дополнительные возможности GitHub</h3>
        <p>
          GitHub расширяет стандартный Markdown несколькими удобными возможностями:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">1. Задачи (todo list):</h4>
      `
    },
    {
      type: 'code',
      code: "- [x] Подготовить PR\n- [ ] Написать тесты\n- [ ] Обновить документацию"
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">2. Упоминания пользователей:</h4>
      `
    },
    {
      type: 'code',
      code: "См. @username для уточнения деталей."
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">3. Кодовые блоки с подсветкой:</h4>
      `
    },
    {
      type: 'code',
      code: "```javascript\nfunction hello() {\n  console.log('Hello, world!');\n}\n```"
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">4. Сворачиваемые блоки (details/summary):</h4>
      `
    },
    {
      type: 'code',
      code: "<details>\n  <summary>Нажмите, чтобы увидеть лог</summary>\n  \n  ```log\n  Error: Module not found\n  ```\n  \n</details>"
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <p>
          Вот несколько рекомендаций:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте заголовки и списки для структурирования информации.</li>
          <li>Добавляйте примеры кода в тройных обратных кавычках с указанием языка.</li>
          <li>Указывайте версии используемых инструментов и сред выполнения.</li>
          <li>Используйте теги, упоминания и метки для организации работы.</li>
          <li>Пишите чётко и по делу — не забывайте, что ваши сообщения читают другие разработчики.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Итог</h3>
        <p>
          Теперь вы знаете:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Как использовать Markdown в файлах README.md.</li>
          <li>Как правильно оформлять Issues и Pull Requests.</li>
          <li>Как применять списки, код, ссылки и таблицы в комментариях и документации на GitHub.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Это был финальный теоретический урок курса. В следующем задании вы примените всё, что узнали, в реальном проекте: напишете полноценный README.md для своего репозитория и опубликуете его на GitHub.
        </p>
      `
    }
  ],
  task: "Создайте файл README.md для воображаемого проекта. Добавьте описание, установку, использование, список задач и пример кода. Также добавьте хотя бы одну таблицу и изображение.",
  exampleAnswer: "# Проект Calculator\n\nПростой калькулятор для выполнения арифметических операций.\n\n## Установка\n\n```bash\nnpm install calculator-app\n```\n\n## Использование\n\n```javascript\nconst calc = require('calculator-app');\nconsole.log(calc.add(2, 3)); // 5\n```\n\n## Возможности\n\n- Сложение\n- Вычитание\n- Умножение\n- Деление\n\n## Таблица поддержки\n\n| Функция   | Поддержка |\n|----------|-----------|\n| +        | ✅         |\n| -        | ✅         |\n| *        | ✅         |\n| /        | ✅         |\n\n![Логотип калькулятора](https://example.com/calculator.png )"
};