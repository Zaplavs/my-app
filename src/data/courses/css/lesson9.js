export default {
  id: 10,
  title: "Поток документа и display",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          В HTML-документе все элементы по умолчанию отображаются в определённом порядке — это называется <strong>потоком документа</strong>. 
          Свойство <code>display</code> позволяет управлять тем, как элемент будет отображаться на странице.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Что такое поток документа?</h3>
        <p>
          Браузер строит страницу, размещая элементы один за другим — сверху вниз, слева направо (в зависимости от языка и типа элемента). 
          Это и есть стандартный поток документа.
        </p>
        <p>
          Элементы могут быть:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Блочными</strong> — занимают всю ширину;</li>
          <li><strong>Строчными</strong> — только столько места, сколько нужно для содержимого;</li>
          <li><strong>Скрытые</strong> — не отображаются.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Значения свойства display</h3>
        <p>
          Основные значения свойства <code>display</code>:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>block</code> — элемент ведёт себя как блочный (например, <code>&lt;div&gt;</code>);</li>
          <li><code>inline</code> — элемент становится строчным (например, <code>&lt;span&gt;</code>);</li>
          <li><code>inline-block</code> — комбинация: строчный, но с возможностью задать размеры;</li>
          <li><code>none</code> — элемент полностью исчезает из документа.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">1. display: block</h4>
        <p>
          Блочные элементы всегда начинаются с новой строки и занимают всю доступную ширину.
        </p>
      `
    },
    {
      type: 'code',
      code: `.block {\n  display: block;\n  background-color: #eef;\n  margin: 10px 0;\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">2. display: inline</h4>
        <p>
          Строчные элементы находятся внутри строки и не начинаются с новой строки.
        </p>
      `
    },
    {
      type: 'code',
      code: `.inline {\n  display: inline;\n  background-color: #efe;\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">3. display: inline-block</h4>
        <p>
          Похож на inline, но позволяет задавать высоту и ширину.
        </p>
      `
    },
    {
      type: 'code',
      code: `.inline-block {\n  display: inline-block;\n  width: 100px;\n  height: 30px;\n  background-color: #fee;\n  margin: 5px;\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">4. display: none</h4>
        <p>
          Такой элемент не отображается и не занимает место.
        </p>
      `
    },
    {
      type: 'code',
      code: `.hidden {\n  display: none;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Как элементы взаимодействуют в потоке</h3>
        <p>
          Браузер использует поток документа для определения расположения элементов. Вот основные правила:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Блочные элементы располагаются вертикально, один под другим;</li>
          <li>Строчные элементы — горизонтально, пока не кончится место;</li>
          <li>Изменяя значение <code>display</code>, можно влиять на поведение элемента в потоке.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования</h3>
        <p>
          Пример, демонстрирующий разницу между <code>block</code>, <code>inline</code> и <code>inline-block</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `<style>
.block {
  display: block;
  background-color: #eef;
  margin: 10px 0;
}

.inline {
  display: inline;
  background-color: #efe;
}

.inline-block {
  display: inline-block;
  width: 100px;
  height: 30px;
  background-color: #fee;
  margin: 5px;
}
</style>

<div class="block">Это блочный элемент</div>
<span class="inline">Это строчный элемент</span>
<span class="inline">Ещё один строчный элемент</span>

<div class="inline-block">Кнопка 1</div>
<div class="inline-block">Кнопка 2</div>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте <code>display: block</code> для контейнеров и заголовков;</li>
          <li>Применяйте <code>inline-block</code> для создания кнопок или меню в одну строку;</li>
          <li>Не забывайте, что <code>display: none</code> полностью убирает элемент из макета;</li>
          <li>Для временного скрытия без удаления из потока можно использовать <code>visibility: hidden</code>;</li>
          <li>Тестируйте поведение элементов в разных режимах отображения через DevTools.</li>
        </ul>
      `
    }
  ],
  task: "Создайте страницу с тремя блоками. Примените к каждому разное значение display (block, inline-block, none) и пронаблюдайте, как они влияют на отображение.",
  exampleAnswer: "/* CSS */\n.box {\n  display: block;\n  background-color: #ddf;\n  margin: 10px 0;\n}\n.button {\n  display: inline-block;\n  padding: 8px 16px;\n  background-color: #eed;\n  border-radius: 4px;\n  margin: 5px;\n}\n.hidden {\n  display: none;\n}\n\n<!-- HTML -->\n<div class=\"box\">Блок (block)</div>\n<a href=\"#\" class=\"button\">Кнопка 1</a>\n<a href=\"#\" class=\"button\">Кнопка 2</a>\n<p class=\"hidden\">Этот текст скрыт.</p>"
};