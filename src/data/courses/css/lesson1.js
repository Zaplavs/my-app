export default {
  id: 2,
  title: "Введение в CSS",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          <strong>CSS</strong> (Cascading Style Sheets) — это язык стилей, используемый для описания внешнего вида и оформления HTML-документов.
          С помощью CSS вы можете задавать цвета, шрифты, размеры элементов, их расположение на странице и многое другое.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Зачем нужен CSS?</h3>
        <p>
          HTML отвечает за структуру документа, а CSS — за его стиль. Это разделение позволяет:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Единообразно оформлять множество страниц;</li>
          <li>Упрощать поддержку и обновление сайтов;</li>
          <li>Создавать адаптивные и красивые интерфейсы.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как работает CSS?</h3>
        <p>
          Браузер читает HTML-файл, создаёт из него дерево DOM (Document Object Model), затем применяет к нему стили из CSS. 
          Эти стили определяют, как будет выглядеть каждый элемент на экране.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Синтаксис CSS:</h3>
        <p>
          Простой пример правила CSS:
        </p>
      `
    },
    {
      type: 'code',
      code: `p {\n  color: blue;\n  font-size: 16px;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Здесь:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>p</code> — селектор, указывает, к какому элементу применяются стили;</li>
          <li><code>color</code>, <code>font-size</code> — свойства;</li>
          <li><code>blue</code>, <code>16px</code> — значения свойств.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Способы подключения CSS</h3>
        <p>
          В CSS существует три основных способа применения стилей:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-2">1. Инлайновые (встроенные) стили</h4>
        <p>
          Стили применяются прямо к конкретному элементу через атрибут <code>style</code>:
        </p>
        <code class="bg-gray-100 p-2 rounded block my-2">&lt;p style=&quot;color: red;&quot;&gt;Красный текст&lt;/p&gt;</code>
        <p>
          ❗<strong>Минус:</strong> такой способ трудно поддерживать при большом количестве элементов.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-2">2. Внутренние стили (в теге &lt;style&gt;)</h4>
        <p>
          Стили размещаются внутри секции <code>&lt;head&gt;</code> с помощью тега <code>&lt;style&gt;</code>:
        </p>
        <code class="bg-gray-100 p-2 rounded block my-2">&lt;style&gt;<br>  p {<br>    color: green;<br>  }<br>&lt;/style&gt;</code>
        <p>
          ✅ Хорошо подходит для стилизации одной страницы.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-2">3. Внешние таблицы стилей</h4>
        <p>
          Наиболее распространённый способ. Стили хранятся в отдельном файле с расширением <code>.css</code>, который подключается через тег <code>&lt;link&gt;</code>:
        </p>
        <code class="bg-gray-100 p-2 rounded block my-2">&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;</code>
        <p>
          ✅ Позволяет применять одни и те же стили ко всем страницам сайта.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример подключения внешнего CSS</h3>
        <p>
          Допустим, у вас есть файл <code>styles.css</code> с содержимым:
        </p>
      `
    },
    {
      type: 'code',
      code: `body {\n  background-color: #f0f0f0;\n  font-family: Arial, sans-serif;\n}\nh1 {\n  color: darkblue;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          И HTML-файл, который его использует:
        </p>
      `
    },
    {
      type: 'code',
      code: `<!DOCTYPE html>\n<html lang="ru">\n<head>\n  <meta charset="UTF-8">\n  <title>Моя стилизованная страница</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <h1>Заголовок с красивым стилем</h1>\n  <p>Этот текст тоже стилизован через CSS.</p>\n</body>\n</html>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте внешние стили для крупных проектов;</li>
          <li>Избегайте инлайновых стилей, если не нужно стилизовать единичный элемент;</li>
          <li>Тестируйте свои стили в разных браузерах;</li>
          <li>Давайте CSS-классам понятные имена, например: <code>.main-title</code>, <code>.user-card</code>.</li>
        </ul>
      `
    }
  ],
  task: "Подключите внешний CSS-файл к вашему HTML-документу и измените цвет фона и заголовка.",
  exampleAnswer: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Заголовок</h1>\n</body>\n</html>\n\n<!-- style.css -->\nbody {\n  background-color: lightyellow;\n}\nh1 {\n  color: navy;\n}"
};