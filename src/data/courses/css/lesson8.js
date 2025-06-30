export default {
  id: 10,
  title: "Позиционирование элементов",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          В CSS существует несколько способов позиционирования элементов на странице.
          Свойство <code>position</code> определяет, как браузер будет рассчитывать расположение элемента.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Основные значения position</h3>
        <p>
          Возможные значения:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>static</code> — стандартное позиционирование (по умолчанию);</li>
          <li><code>relative</code> — относительное смещение от исходного места;</li>
          <li><code>absolute</code> — абсолютное позиционирование относительно ближайшего позиционированного родителя;</li>
          <li><code>fixed</code> — фиксируется относительно окна браузера;</li>
          <li><code>sticky</code> — комбинация статического и фиксированного позиционирования.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. position: static</h3>
        <p>
          Это значение используется по умолчанию. Элемент находится в обычном потоке документа и не может быть смещен с помощью <code>top</code>, <code>right</code>, <code>bottom</code> или <code>left</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `.box {\n  position: static;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. position: relative</h3>
        <p>
          Элемент остаётся в потоке документа, но его можно сдвигать относительно исходного положения с помощью <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `.box {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Такой элемент остаётся видимым на том же месте, где должен быть, но немного смещён.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. position: absolute</h3>
        <p>
          Элемент выносится из общего потока и позиционируется относительно ближайшего родителя с позицией <code>relative</code>, <code>absolute</code>, <code>fixed</code> или <code>sticky</code>. Если такого родителя нет — относительно окна браузера.
        </p>
      `
    },
    {
      type: 'code',
      code: `.parent {\n  position: relative;\n}\n.child {\n  position: absolute;\n  top: 0;\n  right: 0;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Часто используется для создания выпадающих меню, всплывающих подсказок и других элементов поверх контента.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. position: fixed</h3>
        <p>
          Элемент позиционируется относительно окна браузера. Он остаётся на месте даже при прокрутке страницы.
        </p>
      `
    },
    {
      type: 'code',
      code: `.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  z-index: 1000;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Используется для навигационных панелей, кнопок «Наверх», уведомлений и т. д.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">5. position: sticky</h3>
        <p>
          Комбинирует поведение <code>static</code> и <code>fixed</code>. Элемент ведёт себя как статический до тех пор, пока не достигнет указанной позиции (например, верхней границы экрана), после чего становится фиксированным.
        </p>
      `
    },
    {
      type: 'code',
      code: `.header {\n  position: sticky;\n  top: 0;\n  background-color: #fff;\n  z-index: 999;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Полезно для заголовков таблиц, закрепляемых навигационных ссылок и т. д.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Работа с top, right, bottom, left</h3>
        <p>
          Эти свойства работают только если задано значение <code>position</code> (кроме <code>static</code>).
        </p>
      `
    },
    {
      type: 'code',
      code: `.box {\n  position: absolute;\n  top: 20px;\n  left: 30px;\n  right: 10px;\n  bottom: 40px;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Они указывают расстояние от соответствующих краёв родителя или окна браузера.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования</h3>
        <p>
          Пример создания фиксированного хедера и позиционированного элемента:
        </p>
      `
    },
    {
      type: 'code',
      code: `<style>\n.header {\n  position: sticky;\n  top: 0;\n  background-color: #007BFF;\n  color: white;\n  padding: 10px;\n}\n\n.tooltip {\n  position: absolute;\n  top: -30px;\n  left: 10px;\n  background: red;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n</style>\n\n<div class=\n"header\n">Меню сайта</div>\n<div style=\n"position: relative; margin-top: 50px\n">\n  Наведи на меня\n  <span class=\n"tooltip\n">Подсказка</span>\n</div>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте <code>z-index</code> для управления порядком наложения элементов;</li>
          <li>Для <code>sticky</code> обязательно задавайте <code>top</code> или <code>bottom</code>;</li>
          <li>Фиксированные элементы выходят за рамки обычного потока;</li>
          <li>Не забывайте про <code>overflow</code> — он может скрывать абсолютно спозиционированные элементы;</li>
          <li>Тестируйте поведение элементов на разных разрешениях экрана.</li>
        </ul>
      `
    }
  ],
  task: "Создайте страницу с фиксированной навигацией сверху, плавающей кнопкой справа и подсказкой, которая появляется рядом с текстом при наведении.",
  exampleAnswer: "/* CSS */\n.navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background: #333;\n  color: white;\n  text-align: center;\n  padding: 10px;\n  z-index: 100;\n}\n\n.floating-btn {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  background: #007BFF;\n  color: white;\n  padding: 10px 15px;\n  border-radius: 50%;\n  font-size: 16px;\n}\n\n.tooltip {\n  position: absolute;\n  top: -20px;\n  left: 10px;\n  background: red;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  display: none;\n}\n.text-container:hover .tooltip {\n  display: block;\n}\n\n<!-- HTML -->\n<div class=\"navbar\">Навигация</div>\n<a href=\"#\" class=\"floating-btn\">↑</a>\n<div class=\"text-container\" style=\"margin-top: 60px; margin-left: 20px\">\n  Наведи на меня\n  <span class=\"tooltip\">Подсказка</span>\n</div>"
}