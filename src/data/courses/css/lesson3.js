export default {
  id: 4,
  title: "Типы селекторов",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Селекторы в CSS используются для выбора HTML-элементов, к которым будут применены стили. 
          От правильного выбора селектора зависит точность и эффективность ваших стилей.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Селектор элемента</h3>
        <p>
          Применяет стиль ко всем элементам указанного типа на странице.
        </p>
      `
    },
    {
      type: 'code',
      code: `/* Все параграфы станут красными */\np {\n  color: red;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Например, если у вас есть несколько тегов <code>&lt;p&gt;</code>, все они получат красный цвет текста.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Селектор класса (.)</h3>
        <p>
          Используется для применения стиля к элементам с определённым классом. Записывается через точку <code>.</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `/* Класс .highlight будет применён ко всем элементам с этим классом */\n.highlight {\n  background-color: yellow;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          В HTML:
        </p>
      `
    },
    {
      type: 'code',
      code: `<p>Этот текст <span class="highlight">выделен</span>.</p>`
    },
    {
      type: 'text',
      text: `
        <p>
          Элемент <code>&lt;span&gt;</code> с классом <code>highlight</code> получит жёлтое выделение.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Селектор идентификатора (#)</h3>
        <p>
          Применяется к одному уникальному элементу на странице. Обозначается символом решётки <code>#</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `/* Только элемент с id="main-title" получит эти стили */\n#main-title {\n  font-size: 2em;\n  color: blue;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          В HTML:
        </p>
      `
    },
    {
      type: 'code',
      code: `<h1 id="main-title">Главный заголовок</h1>`
    },
    {
      type: 'text',
      text: `
        <p>
          <strong>Важно:</strong> ID должен быть уникальным на странице. Один и тот же ID не должен использоваться более одного раза.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. Универсальный селектор (*)</h3>
        <p>
          Применяется ко всем элементам на странице. Используется редко, например, чтобы сбросить отступы или границы.
        </p>
      `
    },
    {
      type: 'code',
      code: `/* Убирает отступы у всех элементов */\n* {\n  margin: 0;\n  padding: 0;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          <strong>Предостережение:</strong> этот селектор влияет на производительность, особенно на больших сайтах.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">5. Группировка селекторов</h3>
        <p>
          Позволяет применить одинаковые стили к нескольким элементам, перечисляя селекторы через запятую.
        </p>
      `
    },
    {
      type: 'code',
      code: `/* Все заголовки будут серого цвета */\nh1, h2, h3 {\n  color: #666;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Это позволяет избежать повторения кода и делает стили чище и понятнее.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">6. Комбинированные селекторы</h3>
        <p>
          Можно комбинировать типы селекторов для более точных стилей:
        </p>
      `
    },
    {
      type: 'code',
      code: `/* Применится только к параграфам с классом "intro" */\np.intro {\n  font-weight: bold;\n}\n\n/* Применится к ссылкам внутри элемента с id="nav" */\n#nav a {\n  color: orange;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Такие комбинации позволяют создавать очень точные и специфичные стили.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Сравнение приоритета селекторов</h3>
        <p>
          Чем конкретнее селектор — тем выше его приоритет:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>Тег</code> → низкий приоритет;</li>
          <li><code>.class</code> → средний приоритет;</li>
          <li><code>#id</code> → высокий приоритет;</li>
          <li><code>!important</code> → принудительное применение (используйте с осторожностью).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Рекомендации по использованию селекторов</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте классы чаще всего — они гибкие и многократно используемые;</li>
          <li>ID — только для уникальных элементов;</li>
          <li>Не злоупотребляйте универсальным селектором <code>*</code>;</li>
          <li>Группируйте селекторы, чтобы избежать дублирования кода;</li>
          <li>Делайте имена классов осмысленными (например, <code>.menu-item</code> вместо <code>.item1</code>).</li>
        </ul>
      `
    }
  ],
  task: "Создайте HTML-файл с несколькими элементами и примените к ним стили с помощью разных типов селекторов: элемента, класса, идентификатора, группировки.",
  exampleAnswer: "/* CSS-файл */\nh1 {\n  color: purple;\n}\n.title {\n  font-weight: bold;\n}\n#main-content {\n  background-color: #f9f9f9;\n}\nh2, h3 {\n  color: gray;\n}\n\n<!-- HTML -->\n<h1>Заголовок первого уровня</h1>\n<h2 class=\"title\">Подзаголовок</h2>\n<div id=\"main-content\">\n  <h3>Важная информация</h3>\n</div>"
};