export default {
  id: 10,
  title: "Flexbox: гибкая компоновка",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Flexbox (гибкий контейнер) — это мощный инструмент CSS для создания отзывчивых и выровненных макетов.
          Он особенно удобен для горизонтального и вертикального выравнивания элементов без использования float или position.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Основные понятия Flexbox</h3>
        <p>
          Flexbox работает с двумя ключевыми понятиями:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>main axis (основная ось)</strong> — направление, в котором элементы располагаются;</li>
          <li><strong>cross axis (поперечная ось)</strong> — перпендикулярное направление к основной оси.</li>
        </ul>
        <p>
          Чтобы начать использовать Flexbox, нужно указать <code>display: flex;</code> родительскому контейнеру.
        </p>
      `
    },
    {
      type: 'code',
      code: `.container {\n  display: flex;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Направление элементов (flex-direction)</h3>
        <p>
          Свойство <code>flex-direction</code> определяет направление основной оси:
        </p>
      `
    },
    {
      type: 'code',
      code: `.container {\n  flex-direction: row; /* по умолчанию */\n}\n\n/* Другие значения */\n.container-row-reverse {\n  flex-direction: row-reverse;\n}\n.container-column {\n  flex-direction: column;\n}\n.container-column-reverse {\n  flex-direction: column-reverse;\n}`
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>row</code> — слева направо;</li>
          <li><code>row-reverse</code> — справа налево;</li>
          <li><code>column</code> — сверху вниз;</li>
          <li><code>column-reverse</code> — снизу вверх.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Выравнивание по основной оси (justify-content)</h3>
        <p>
          Свойство <code>justify-content</code> управляет выравниванием элементов по основной оси.
        </p>
      `
    },
    {
      type: 'code',
      code: `.container {\n  justify-content: flex-start; /* по умолчанию */\n}\n\n/* Другие значения */\n.flex-center {\n  justify-content: center;\n}\n.flex-between {\n  justify-content: space-between;\n}\n.flex-around {\n  justify-content: space-around;\n}\n.flex-evenly {\n  justify-content: space-evenly;\n}`
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>flex-start</code> — элементы прижаты к началу;</li>
          <li><code>center</code> — по центру;</li>
          <li><code>flex-end</code> — к концу;</li>
          <li><code>space-between</code> — равномерно с отступами между элементами;</li>
          <li><code>space-around</code> — равномерно с отступами вокруг каждого элемента;</li>
          <li><code>space-evenly</code> — равномерно с одинаковыми отступами между и по краям.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. Выравнивание по поперечной оси (align-items)</h3>
        <p>
          Свойство <code>align-items</code> управляет выравниванием элементов по поперечной оси.
        </p>
      `
    },
    {
      type: 'code',
      code: `.container {\n  align-items: stretch; /* по умолчанию */\n}\n\n/* Другие значения */\n.align-flex-start {\n  align-items: flex-start;\n}\n.align-center {\n  align-items: center;\n}\n.align-flex-end {\n  align-items: flex-end;\n}\n.align-baseline {\n  align-items: baseline;\n}`
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>stretch</code> — элементы растягиваются по высоте;</li>
          <li><code>flex-start</code> — к верхнему краю;</li>
          <li><code>center</code> — по центру;</li>
          <li><code>flex-end</code> — к нижнему краю;</li>
          <li><code>baseline</code> — по базовой линии текста.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">5. Выравнивание отдельных элементов (align-self)</h3>
        <p>
          Если нужно изменить положение одного элемента внутри flex-контейнера, используйте <code>align-self</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `.item {\n  align-self: center;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">6. Управление переносом элементов (flex-wrap)</h3>
        <p>
          По умолчанию все элементы помещаются в одну строку. Чтобы разрешить перенос, используйте <code>flex-wrap</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `.container {\n  flex-wrap: wrap;\n}\n\n/* Другие значения */\n.wrap-reverse {\n  flex-wrap: wrap-reverse;\n}`
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>nowrap</code> — элементы не переносятся;</li>
          <li><code>wrap</code> — переносятся вниз;</li>
          <li><code>wrap-reverse</code> — переносятся вверх.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования Flexbox</h3>
        <p>
          Простой пример горизонтального меню:
        </p>
      `
    },
    {
      type: 'code',
      code: `.menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #333;\n  padding: 10px;\n}\n.menu a {\n  color: white;\n  text-decoration: none;\n  margin: 0 10px;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте Flexbox для навигационных панелей, карточек, кнопок и других горизонтальных/вертикальных групп;</li>
          <li>Не применяйте <code>float</code> или <code>position: absolute</code>, если можно обойтись Flexbox;</li>
          <li>Проверяйте поведение элементов при разных размерах экрана;</li>
          <li>Сочетайте Flexbox с Grid для более сложных макетов.</li>
        </ul>
      `
    }
  ],
  task: "Создайте горизонтальное меню из 5 пунктов. Используйте Flexbox для выравнивания и распределения пространства.",
  exampleAnswer: "/* CSS */\n.menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #333;\n  padding: 10px;\n  list-style: none;\n}\n.menu li {\n  margin: 0 10px;\n}\n.menu a {\n  color: white;\n  text-decoration: none;\n}\n\n<!-- HTML -->\n<ul class=\"menu\">\n  <li><a href=\"#\">Главная</a></li>\n  <li><a href=\"#\">О нас</a></li>\n  <li><a href=\"#\">Услуги</a></li>\n  <li><a href=\"#\">Галерея</a></li>\n  <li><a href=\"#\">Контакты</a></li>\n</ul>"
};