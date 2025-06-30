export default {
  id: 8,
  title: "Текст и оформление контента",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Оформление текста — важная часть создания веб-страниц. CSS предоставляет множество свойств для контроля внешнего вида текстового содержимого.
          В этом уроке вы узнаете о самых популярных и полезных из них.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. text-align</h3>
        <p>
          Это свойство задаёт горизонтальное выравнивание текста внутри блока.
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>left</code> — выравнивание по левому краю (по умолчанию);</li>
          <li><code>right</code> — по правому;</li>
          <li><code>center</code> — по центру;</li>
          <li><code>justify</code> — выравнивание по ширине.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.center {\n  text-align: center;\n}\n.right {\n  text-align: right;\n}\n.justify {\n  text-align: justify;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. line-height</h3>
        <p>
          Задаёт высоту строки. Удобно использовать для вертикального центрирования текста внутри элемента или улучшения читаемости.
        </p>
        <p>
          Может быть указан:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Числом (без единиц измерения) — как множитель относительно размера шрифта;</li>
          <li>В пикселях (<code>px</code>) или других единицах.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.paragraph {\n  line-height: 1.5;\n}\n.button {\n  height: 40px;\n  line-height: 40px; /* вертикальное центрирование */\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. text-decoration</h3>
        <p>
          Используется для добавления декоративных линий к тексту.
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>underline</code> — подчеркивание;</li>
          <li><code>line-through</code> — зачеркивание;</li>
          <li><code>none</code> — отсутствие линии (часто используется для ссылок).</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.link {\n  text-decoration: underline;\n}\n.deleted {\n  text-decoration: line-through;\n}\n.no-deco {\n  text-decoration: none;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. letter-spacing</h3>
        <p>
          Управляет расстоянием между буквами. Полезно для заголовков или акцентов в дизайне.
        </p>
        <p>
          Может принимать положительные и отрицательные значения:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Положительное значение увеличивает пробелы;</li>
          <li>Отрицательное — уменьшает.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.title {\n  letter-spacing: 2px;\n}\n.acronym {\n  letter-spacing: 0.2em;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">5. white-space</h3>
        <p>
          Управляет отображением пробельных символов и переносом строк.
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>normal</code> — стандартное поведение (по умолчанию);</li>
          <li><code>nowrap</code> — запрещает перенос на новую строку;</li>
          <li><code>pre</code> — сохраняет пробелы и переносы как в HTML;</li>
          <li><code>pre-wrap</code>, <code>pre-line</code> — комбинации нормального и предварительного форматирования.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.preformatted {\n  white-space: pre;\n}\n.nowrap {\n  white-space: nowrap;\n}\n.pre-line {\n  white-space: pre-line;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Другие полезные свойства</h3>
        <p>
          Также могут пригодиться:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>text-transform</code> — управление регистром: <code>uppercase</code>, <code>lowercase</code>, <code>capitalize</code>;</li>
          <li><code>text-indent</code> — отступ первой строки;</li>
          <li><code>word-spacing</code> — расстояние между словами.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования</h3>
        <p>
          Вот как можно оформить карточку с текстом:
        </p>
      `
    },
    {
      type: 'code',
      code: `.card {\n  padding: 20px;\n  width: 300px;\n  border: 1px solid #ccc;\n  font-family: Arial, sans-serif;\n  background-color: #333;\n  color: yellow;\n  margin: 10px;\n}\n.card h2 {\n  text-align: center;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.card p {\n  line-height: 1.6;\n  text-indent: 20px;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте <code>text-align: justify</code> с осторожностью — может ухудшить читаемость;</li>
          <li>Для лучшей читаемости используйте <code>line-height</code> от <code>1.4</code> до <code>1.6</code>;</li>
          <li>Не злоупотребляйте <code>letter-spacing</code> в основных абзацах;</li>
          <li>Свойство <code>white-space</code> особенно полезно при работе с динамическим текстом или консольными выводами;</li>
          <li>Убирайте подчеркивание у ссылок через <code>text-decoration: none</code> для более стилизованного вида.</li>
        </ul>
      `
    }
  ],
  task: "Создайте страницу с несколькими блоками текста. Примените разные значения свойств: выравнивание, межстрочный интервал, прописные буквы, подчеркивание и расстояние между символами.",
  exampleAnswer: "/* CSS */\n.title {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.paragraph {\n  line-height: 1.8;\n  text-indent: 2em;\n}\n.link {\n  text-decoration: underline;\n}\n.code {\n  white-space: pre;\n  background: #333;\n  color: yellow;\n  padding: 10px;\n}\n\n<!-- HTML -->\n<h1 class=\"title\">Оформление текста</h1>\n<p class=\"paragraph\">\n  Этот текст имеет красивый межстрочный интервал и отступ первой строки.\n</p>\n<a href=\"#\" class=\"link\">Ссылка с подчеркиванием</a>\n<pre class=\"code\">\nfunction sayHello() {\n  console.log('Привет!');\n}\n</pre>"
};