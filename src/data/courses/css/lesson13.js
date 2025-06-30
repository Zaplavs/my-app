export default {
  id: 11,
  title: "Units: единицы измерения в CSS",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          В CSS существует множество единиц измерения для задания размеров текста, отступов, высоты, ширины и других стилевых свойств.
          Правильный выбор единицы влияет на гибкость и адаптивность дизайна. Разберём самые популярные из них.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Абсолютные единицы</h3>
        <p>
          Эти значения фиксированы и не зависят от размера экрана или настроек пользователя.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>px</code> — пиксели (наиболее часто используемая абсолютная единица);</li>
          <li><code>pt</code> — пункты (используются в печати);</li>
          <li><code>cm</code>, <code>mm</code>, <code>in</code> — сантиметры, миллиметры, дюймы.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.box {\n  width: 200px;\n  height: 5cm;\n  font-size: 12pt;\n}`
    },
    {
      type: 'text',
      text: `
        <p class="text-red-600">
          ⚠️ Используйте абсолютные единицы только тогда, когда нужен точный контроль над размерами (например, для печати).
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Относительные единицы</h3>
        <p>
          Эти значения рассчитываются относительно какого-либо другого значения, например, родителя или корневого элемента.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>em</code> — относительно размера шрифта текущего элемента;</li>
          <li><code>rem</code> — относительно размера шрифта корневого элемента (<code>html</code>);</li>
          <li><code>%</code> — процентное значение относительно родителя;</li>
          <li><code>vw</code>, <code>vh</code> — относительно ширины/высоты окна браузера;</li>
          <li><code>ch</code> — относительно ширины символа "0";</li>
          <li><code>ex</code> — относительно высоты строчной буквы "x".</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `html {\n  font-size: 16px;\n}\n\n.title {\n  font-size: 2rem; /* 32px */\n}\n\n.text {\n  font-size: 1.2em; /* 1.2 × размер шрифта родителя */\n}\n\n.container {\n  width: 80%;\n}\n\n.fullscreen {\n  width: 100vw;\n  height: 100vh;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Когда что использовать?</h3>
        <p>
          Вот основные рекомендации:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>px</code> — когда нужен точный контроль (например, границы, тени);</li>
          <li><code>rem</code> — для основного текста и размеров, чтобы всё масштабировалось равномерно;</li>
          <li><code>em</code> — для внутренних компонентов, которые должны быть пропорциональны родителю;</li>
          <li><code>%</code> — для создания гибких макетов, особенно внутри контейнеров;</li>
          <li><code>vw</code>/<code>vh</code> — для элементов, которые должны занимать определённую долю экрана;</li>
          <li><code>ch</code> — для выравнивания по ширине текстовых полей;</li>
          <li><code>ex</code> — редко используется, но может быть полезен при вертикальной типографике.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. Пример использования разных единиц</h3>
        <p>
          Представьте простой блок, который должен быть адаптивным:
        </p>
      `
    },
    {
      type: 'code',
      code: `.card {\n  width: 90%;\n  max-width: 600px;\n  margin: 2rem auto;\n  padding: 1em;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  background-color: #f9f9f9;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Такой подход делает блок адаптивным, а текст остаётся хорошо читаемым при изменении масштаба страницы.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте <code>rem</code> для глобальных размеров, <code>em</code> — для локальных;</li>
          <li>Не смешивайте разные единицы без необходимости — это усложняет поддержку кода;</li>
          <li>Тестируйте разные размеры шрифтов в браузере через DevTools;</li>
          <li>Используйте относительные единицы для создания адаптивных интерфейсов;</li>
          <li>Учитывайте доступность — слишком маленький текст трудно читать.</li>
        </ul>
      `
    }
  ],
  task: "Создайте HTML-страницу с несколькими блоками. Примените к ним разные единицы измерения (px, rem, em, %, vw/vh). Изменяйте масштабирование страницы и следите за поведением элементов.",
  exampleAnswer: "/* CSS */\n.box {\n  width: 80%;\n  max-width: 500px;\n  margin: 2rem auto;\n  padding: 1em;\n  font-size: 1rem;\n  border: 2px solid #333;\n}\n\n.title {\n  font-size: 2.5rem;\n}\n\n.subtitle {\n  font-size: 1.2em;\n}\n\n.fullwidth {\n  width: 100vw;\n  height: 10vh;\n  background-color: #eee;\n}\n\n<!-- HTML -->\n<div class=\"box\">\n  <h1 class=\"title\">Заголовок</h1>\n  <h2 class=\"subtitle\">Подзаголовок</h2>\n  <p>Текст внутри блока с адаптивными размерами.</p>\n</div>\n<div class=\"fullwidth\">Элемент на всю ширину экрана</div>"
};