export default {
  id: 24,
  title: "Заголовки и структура документа",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          При работе с Markdown важно правильно организовать структуру документа. Это делает текст более понятным и читаемым.
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
          <li>Как использовать заголовки разных уровней.</li>
          <li>Как разбивать текст на логические блоки.</li>
          <li>Как вставлять горизонтальные линии для разделения секций.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Синтаксис заголовков</h3>
        <p>
          Заголовки в Markdown создаются с помощью символа <code>#</code>. Чем больше знаков <code>#</code>, тем ниже уровень заголовка.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <table class="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th class="border border-gray-300 px-4 py-2">Уровень заголовка</th>
              <th class="border border-gray-300 px-4 py-2">Синтаксис Markdown</th>
              <th class="border border-gray-300 px-4 py-2">HTML эквивалент</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Заголовок 1 уровня</td>
              <td class="border border-gray-300 px-4 py-2"><code># Заголовок</code></td>
              <td class="border border-gray-300 px-4 py-2"><code><h1>Заголовок</h1></code></td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Заголовок 2 уровня</td>
              <td class="border border-gray-300 px-4 py-2"><code>## Заголовок</code></td>
              <td class="border border-gray-300 px-4 py-2"><code><h2>Заголовок</h2></code></td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Заголовок 3 уровня</td>
              <td class="border border-gray-300 px-4 py-2"><code>### Заголовок</code></td>
              <td class="border border-gray-300 px-4 py-2"><code><h3>Заголовок</h3></code></td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Заголовок 6 уровня</td>
              <td class="border border-gray-300 px-4 py-2"><code>###### Заголовок</code></td>
              <td class="border border-gray-300 px-4 py-2"><code><h6>Заголовок</h6></code></td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Пример:</h4>
        <p>
          Вот как будет выглядеть Markdown-текст с несколькими заголовками:
        </p>
      `
    },
    {
      type: 'code',
      code: "# Введение\n\n## Что такое Markdown?\n\n### Установка редактора"
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Разделение текста на логические блоки</h3>
        <p>
          Хорошо структурированный документ легче читать. Используйте заголовки, чтобы разбить текст на смысловые части.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Например, если вы пишете инструкцию, можно сделать так:
        </p>
      `
    },
    {
      type: 'code',
      code: "# Руководство по началу работы\n\n## Шаг 1: Установка\n\nОписание установки...\n\n## Шаг 2: Настройка\n\nОписание настройки..."
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Горизонтальные линии (разделители)</h3>
        <p>
          Чтобы отделить одну часть документа от другой, используйте <strong>горизонтальную линию</strong>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Для этого введите три или более дефисов (<code>-</code>), звёздочек (<code>*</code>) или подчёркиваний (<code>_</code>) на новой строке.
        </p>
      `
    },
    {
      type: 'code',
      code: "# Часть 1\n\nЭто первая часть документа.\n\n---\n\n# Часть 2\n\nЭто вторая часть документа."
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Примеры горизонтальных линий:</h4>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>---</code></li>
          <li><code>***</code></li>
          <li><code>___</code></li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы по структурированию документов</h3>
        <p>
          Вот несколько рекомендаций:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте заголовки для оглавления — это помогает ориентироваться в длинных текстах.</li>
          <li>Не используйте больше одного заголовка первого уровня в одном документе.</li>
          <li>Разделяйте большие блоки информации линиями, чтобы не перегружать глаз.</li>
          <li>Следите за логической последовательностью заголовков: после <code>##</code> должен идти <code>###</code>, а не сразу <code>#####</code>.</li>
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
          <li>Как создавать заголовки разных уровней.</li>
          <li>Как структурировать документ с помощью заголовков и разделителей.</li>
          <li>Как использовать горизонтальные линии для визуального разделения контента.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          В следующем уроке мы поговорим о форматировании текста: жирный, курсив, зачеркнутый текст и другие способы выделения важной информации.
        </p>
      `
    }
  ],
  task: "Напишите структуру документа о вашем хобби. Используйте заголовки разных уровней и разделительные линии между частями.",
  exampleAnswer: "# Мое хобби — фотография\n\n## Почему я выбрал это хобби\n\nФотография позволяет запечатлевать моменты...\n\n---\n\n## Как я начинал\n\nПервые шаги были связаны с мобильной камерой...\n\n---\n\n## Мои достижения\n\nСейчас я делаю снимки на зеркальную камеру..."
};