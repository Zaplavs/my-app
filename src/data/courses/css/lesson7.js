export default {
  id: 9,
  title: "Блочная модель (Box Model)",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Каждый HTML-элемент на веб-странице отображается как прямоугольная область — это и есть <strong>блочная модель</strong>.
          Понимание её структуры важно для корректного позиционирования и оформления элементов.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Что такое блочная модель?</h3>
        <p>
          Блочная модель состоит из четырёх частей:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Содержимое</strong> (content) — основная часть, где находится текст или изображение;</li>
          <li><strong>Поля</strong> (padding) — внутренний отступ между содержимым и границей;</li>
          <li><strong>Граница</strong> (border) — рамка вокруг контента и padding;</li>
          <li><strong>Внешние отступы</strong> (margin) — расстояние между элементом и другими элементами.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.box {\n  width: 200px;\n  height: 100px;\n  \n  padding: 10px;\n  border: 2px solid #333;\n  margin: 20px;\n}`
    },
    {
      type: 'text',
      text: `
        <p class="mb-2">
          Общая ширина такого элемента будет равна:
        </p>
      `
    },
    {
      type: 'code',
      code: `200px (ширина) + 2×10px (padding) + 2×2px (border) + 2×20px (margin) = 264px`
    },
    {
      type: 'text',
      text: `
        <p>
          Это может усложнить точное управление размерами элементов.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. box-sizing</h3>
        <p>
          Чтобы упростить расчёты, используется свойство <code>box-sizing</code>. Оно определяет, как будут считаться размеры элемента.
        </p>
      `
    },
    {
      type: 'code',
      code: `* {\n  box-sizing: border-box;\n}\n/* Теперь padding и border учитываются в width и height */`
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>content-box</code> — стандартное поведение (по умолчанию);</li>
          <li><code>border-box</code> — ширина и высота включают padding и border.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Свойства блочной модели</h3>
        <p>
          Рассмотрим подробнее каждое из них:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">width / height</h4>
        <p>
          Задают ширину и высоту содержимого (если не указано иное через <code>box-sizing</code>).
        </p>
      `
    },
    {
      type: 'code',
      code: `.box {\n  width: 300px;\n  height: 150px;\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">padding</h4>
        <p>
          Внутренний отступ между содержимым и границей. Может быть указан для каждой стороны отдельно.
        </p>
      `
    },
    {
      type: 'code',
      code: `.box {\n  padding: 10px;           /* все стороны */\n  padding-top: 15px;\n  padding-right: 20px;\n  padding-bottom: 10px;\n  padding-left: 5px;\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">border</h4>
        <p>
          Рамка вокруг элемента. Состоит из трёх частей: толщины, стиля и цвета.
        </p>
      `
    },
    {
      type: 'code',
      code: `.box {\n  border-width: 2px;\n  border-style: solid;\n  border-color: #333;\n  /* или кратко */\n  border: 2px solid #333;\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">margin</h4>
        <p>
          Внешний отступ, который создаёт пространство между элементом и другими элементами.
        </p>
      `
    },
    {
      type: 'code',
      code: `.box {\n  margin: 20px auto; /* вертикальные 20px, горизонтальные auto — центрирование */\n  margin-top: 10px;\n  margin-right: 15px;\n  margin-bottom: 20px;\n  margin-left: 5px;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. Центрирование блока</h3>
        <p>
          Чтобы центрировать блочный элемент по горизонтали, можно использовать:
        </p>
      `
    },
    {
      type: 'code',
      code: `.centered {\n  width: 200px;\n  margin: 0 auto;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Этот приём работает только если у элемента указана ширина и значение <code>margin-left</code> и <code>margin-right</code> равно <code>auto</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования</h3>
        <p>
          Вот как можно создать стилизованный блок с фиксированной шириной и красивыми отступами:
        </p>
      `
    },
    {
      type: 'code',
      code: `.card {\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  background-color: #f9f9f9;\n  margin: 20px auto;\n  box-sizing: border-box;\n  color: #333;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте <code>box-sizing: border-box;</code> глобально, чтобы упростить работу с размерами;</li>
          <li>Не забывайте про <code>margin</code> и <code>padding</code> при расчёте макета;</li>
          <li>Тестируйте внешние отступы — они могут складываться (collapse), особенно у соседних блоков;</li>
          <li>Для точного контроля используйте инструменты разработчика (DevTools), где можно увидеть размеры и отступы каждого элемента.</li>
        </ul>
      `
    }
  ],
  task: "Создайте несколько блоков с одинаковой шириной и высотой, но разными значениями padding, border и margin. Пронаблюдайте, как они влияют на общий размер и расположение.",
  exampleAnswer: "/* CSS */\n.box {\n  width: 200px;\n  height: 100px;\n  \n  padding: 10px;\n  border: 2px solid #333;\n  margin: 20px;\n  background-color: #eef;\n  box-sizing: border-box;\n  float: left;\n  clear: both;\n}\n\n<!-- HTML -->\n<div class=\"box\">Блок 1</div>\n<div class=\"box\" style=\"margin-left: 40px;\">Блок 2</div>\n<div class=\"box\" style=\"padding: 30px;\">Блок 3</div>"
};