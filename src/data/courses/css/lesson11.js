export default {
  id: 11,
  title: "Grid Layout: двухмерная разметка",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          CSS Grid — это мощный инструмент для создания сложных двумерных макетов. В отличие от Flexbox, который работает преимущественно в одном направлении, 
          Grid позволяет точно контролировать расположение элементов по строкам и столбцам.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Основы Grid</h3>
        <p>
          Чтобы активировать Grid-макет, нужно указать <code>display: grid;</code> контейнеру:
        </p>
      `
    },
    {
      type: 'code',
      code: `.grid-container {\n  display: grid;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Определение строк и столбцов (grid-template-columns / grid-template-rows)</h3>
        <p>
          Свойства <code>grid-template-columns</code> и <code>grid-template-rows</code> задают размеры колонок и строк.
        </p>
      `
    },
    {
      type: 'code',
      code: `.grid-container {\n  grid-template-columns: 100px 150px auto;\n  grid-template-rows: 50px 100px;\n}`
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>auto</code> — автоматический размер;</li>
          <li><code>fr</code> — доля свободного пространства (например, <code>1fr 2fr</code>);</li>
          <li><code>minmax()</code> — диапазон размеров (<code>minmax(200px, 1fr)</code>).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Отступы между ячейками (grid-gap)</h3>
        <p>
          Свойство <code>grid-gap</code> задаёт расстояние между строками и столбцами.
        </p>
      `
    },
    {
      type: 'code',
      code: `.grid-container {\n  grid-gap: 20px 30px; /* row-gap column-gap */\n}\n\n/* или по отдельности */\n.grid-container {\n  grid-row-gap: 20px;\n  grid-column-gap: 30px;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. Позиционирование элементов (grid-column / grid-row)</h3>
        <p>
          Вы можете точно указать, где должен находиться каждый элемент, используя <code>grid-column</code> и <code>grid-row</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `.item-a {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n}\n.item-b {\n  grid-column: 3 / 4;\n  grid-row: 1 / 3;\n}`
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Первое число — начальная линия;</li>
          <li>Второе — конечная (не включительно).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">5. Именованные области (grid-template-areas)</h3>
        <p>
          Это удобный способ описать структуру макета с помощью именованных областей.
        </p>
      `
    },
    {
      type: 'code',
      code: `.grid-container {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n}\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">6. Функциция repeat()</h3>
        <p>
          Позволяет повторять одинаковые значения для строк или столбцов.
        </p>
      `
    },
    {
      type: 'code',
      code: `.grid-container {\n  grid-template-columns: repeat(3, 1fr);\n  /* создаст 3 равные колонки */\n}\n\n/* Также можно комбинировать */\n.grid-container {\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования Grid</h3>
        <p>
          Простой адаптивный макет страницы:
        </p>
      `
    },
    {
      type: 'code',
      code: `.layout {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"footer footer\";\n  height: 100vh;\n  gap: 10px;\n}\n.header { grid-area: header; background: #333; color: white; padding: 10px; }\n.nav { grid-area: nav; background: #f0f0f0; padding: 10px; }\n.main { grid-area: main; background: white; padding: 20px; }\n.footer { grid-area: footer; background: #333; color: white; padding: 10px; }`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте Grid для сложных макетов, особенно когда важна точная расстановка элементов по строкам и столбцам;</li>
          <li>Сочетайте Grid и Flexbox — например, Grid для общей структуры, Flexbox для внутреннего выравнивания;</li>
          <li>Тестируйте поведение сетки на разных устройствах;</li>
          <li>Используйте именованные области для лучшей читаемости кода.</li>
        </ul>
      `
    }
  ],
  task: "Создайте адаптивную сетку из 3 колонок с фиксированным боковым меню и областью содержимого справа. Используйте именованные области.",
  exampleAnswer: "/* CSS */\n.layout {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\"\n    \"sidebar footer\";\n  height: 100vh;\n  gap: 10px;\n}\n.sidebar { grid-area: sidebar; background: #eee; padding: 10px; }\n.header { grid-area: header; background: #333; color: white; padding: 10px; }\n.main { grid-area: main; background: white; padding: 20px; }\n.footer { grid-area: footer; background: #333; color: white; padding: 10px; }\n\n<!-- HTML -->\n<div class=\"layout\">\n  <div class=\"sidebar\">Меню</div>\n  <div class=\"header\">Шапка</div>\n  <div class=\"main\">Основной контент</div>\n  <div class=\"footer\">Подвал</div>\n</div>"
};