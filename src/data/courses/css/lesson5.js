export default {
  id: 7,
  title: "Цвета и шрифты",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Визуальное оформление сайта невозможно представить без использования цветов и шрифтов.
          CSS предоставляет широкий набор возможностей для настройки внешнего вида текста и цветовых схем.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Цветовые форматы в CSS</h3>
        <p>
          Для задания цвета в CSS можно использовать несколько форматов:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>HEX (шестнадцатеричный)</strong> — например: <code>#ff0000</code>, <code>#f00</code>;</li>
          <li><strong>RGB</strong> — например: <code>rgb(255, 0, 0)</code>;</li>
          <li><strong>HSL</strong> — например: <code>hsl(0, 100%, 50%)</code>;</li>
          <li><strong>Ключевые слова</strong> — например: <code>red</code>, <code>blue</code>, <code>tomato</code>.</li>
        </ul>
        <h4 class="font-semibold mt-2 mb-1">Пример:</h4>
        <p>
          Вот как могут выглядеть разные цветовые форматы в CSS:
        </p>
      `
    },
    {
      type: 'code',
      code: `.box {\n  background-color: #ff0000; /* красный */\n  color: rgb(0, 0, 255);     /* синий */\n}\n.title {\n  color: hsl(240, 100%, 50%); /* тоже синий */\n}\n.link {\n  color: blue;                /* ключевое слово */\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Работа с прозрачностью (RGBA / HSLA)</h3>
        <p>
          Если нужно добавить прозрачность, используйте форматы RGBA или HSLA:
        </p>
      `
    },
    {
      type: 'code',
      code: `.overlay {\n  background-color: rgba(0, 0, 0, 0.5); /* чёрный с 50% прозрачности */\n}\n\n.banner {\n  background-color: hsla(120, 100%, 50%, 0.3); /* зелёный с 30% прозрачности */\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Свойства для работы с шрифтами</h3>
        <p>
          Основные свойства, влияющие на отображение текста:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>font-family</code> — определяет семейство шрифта;</li>
          <li><code>font-size</code> — размер шрифта;</li>
          <li><code>font-weight</code> — толщина шрифта;</li>
          <li><code>color</code> — цвет текста.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">1. font-family</h4>
        <p>
          Задаёт семейство шрифта. Рекомендуется указывать несколько вариантов через запятую, чтобы браузер мог выбрать доступный шрифт.
        </p>
        <p>
          Общие категории шрифтов:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>sans-serif</code> — без засечек (например, Arial);</li>
          <li><code>serif</code> — с засечками (например, Times New Roman);</li>
          <li><code>monospace</code> — моноширинные (например, Courier);</li>
          <li><code>cursive</code>, <code>fantasy</code> — декоративные.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `body {\n  font-family: "Open Sans", sans-serif;\n}\n\nh1 {\n  font-family: Georgia, serif;\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">2. font-size</h4>
        <p>
          Указывает размер шрифта. Часто используются следующие единицы:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>px</code> — пиксели (абсолютная величина);</li>
          <li><code>em</code> — относительно родительского элемента;</li>
          <li><code>rem</code> — относительно корневого элемента (<code>:root</code> или <code>html</code>).</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `p {\n  font-size: 16px;\n}\n\nsmall {\n  font-size: 0.8em; /* 80% от размера родителя */\n}\n\n.title {\n  font-size: 2rem; /* 2 × размера корневого элемента */\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">3. font-weight</h4>
        <p>
          Определяет толщину шрифта. Может принимать значения от 100 до 900 (по шагам 100) или ключевые слова:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>normal</code> → 400;</li>
          <li><code>bold</code> → 700.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.highlight {\n  font-weight: 900;\n}\n\n.note {\n  font-weight: normal;\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">4. color</h4>
        <p>
          Цвет текста. Может быть указан в любом из вышеупомянутых форматов:
        </p>
      `
    },
    {
      type: 'code',
      code: `.title {\n  color: #333;\n}\n\n.error {\n  color: red;\n}\n\n.success {\n  color: hsl(120, 100%, 25%);\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические рекомендации</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте веб-безопасные цвета или проверяйте их отображение на разных устройствах;</li>
          <li>Для лучшей читаемости выбирайте достаточный контраст между текстом и фоном;</li>
          <li>Используйте Google Fonts или другие веб-шрифты для расширенного дизайна;</li>
          <li>Лучше использовать <code>rem</code> вместо <code>px</code> для масштабируемости;</li>
          <li>Не забывайте про доступность — проверяйте цветовую контрастность с помощью инструментов.</li>
        </ul>
      `
    }
  ],
  task: "Создайте HTML-страницу с несколькими блоками текста. Примените разные цвета (в разных форматах) и шрифты к каждому блоку.",
  exampleAnswer: "/* CSS */\n.title {\n  font-family: 'Arial', sans-serif;\n  font-size: 2rem;\n  color: #0066cc;\n}\n.text {\n  font-family: 'Georgia', serif;\n  font-size: 1.2em;\n  color: hsl(0, 100%, 30%);\n}\n.note {\n  font-weight: bold;\n  color: rgb(128, 0, 128);\n}\n\n<!-- HTML -->\n<h1 class=\"title\">Заголовок</h1>\n<p class=\"text\">Основной текст страницы.</p>\n<p class=\"note\">Важное примечание!</p>"
};