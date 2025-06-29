export default {
  id: 1,
  title: "Что такое HTML?",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          <strong>HTML</strong> (HyperText Markup Language) — это язык разметки, 
          используемый для создания структуры веб-страниц. Он не является языком программирования, 
          а служит для определения элементов на странице.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Основные понятия:</h3>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Теги</strong> — обозначаются угловыми скобками (<code>&lt;...&gt;</code>) и определяют тип элемента.</li>
          <li><strong>Элементы</strong> — это теги вместе с их содержимым, например: <code>&lt;p&gt;Текст&lt;/p&gt;</code>.</li>
          <li><strong>Атрибуты</strong> — дополнительные параметры внутри тегов, например: <code>&lt;a href=&quot;link.html&quot;&gt;Ссылка&lt;/a&gt;</code>.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `<!DOCTYPE html>\n<html lang="ru">\n  <head>\n    <meta charset="UTF-8">\n    <title>Моя первая страница</title>\n  </head>\n  <body>\n    <h1>Здравствуйте, мир!</h1>\n    <p>Это мой первый HTML-документ.</p>\n  </body>\n</html>`
    },
    {
      type: 'text',
      text: `
        <p>
          Браузер читает HTML-файл и отображает элементы на экране в соответствии с тегами. Например:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;h1&gt;</code> — заголовок первого уровня (крупный текст).</li>
          <li><code>&lt;p&gt;</code> — параграф (обычный текст).</li>
        </ul>
      `
    }
  ],
  task: "Создайте простой HTML-файл с заголовком и параграфом.",
  exampleAnswer: "<h1>Привет</h1><p>Это мой первый сайт</p>",
};