export default {
  id: 12,
  title: "Псевдоклассы и псевдоэлементы",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          В CSS есть мощные инструменты для стилизации элементов не только по их типу или классу, но и по состоянию или части содержимого.
          Это <strong>псевдоклассы</strong> и <strong>псевдоэлементы</strong>. Они позволяют создавать интерактивные и визуально насыщенные страницы без изменения HTML.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Псевдоклассы (Pseudo-classes)</h3>
        <p>
          Псевдоклассы применяются к элементам в определённых состояниях. Они начинаются с двоеточия <code>:</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>:hover</code> — когда курсор наведён на элемент;</li>
          <li><code>:active</code> — когда элемент активен (например, во время клика);</li>
          <li><code>:focus</code> — когда элемент получает фокус (например, при клике или переходе по Tab);</li>
          <li><code>:visited</code> — для уже посещённых ссылок;</li>
          <li><code>:first-child</code>, <code>:nth-child()</code> — для выбора конкретного дочернего элемента.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `a {\n  color: blue;\n}\na:hover {\n  color: darkblue;\n}\na:visited {\n  color: purple;\n}\n\nbutton {\n  padding: 10px 20px;\n  border: none;\n  background-color: #007BFF;\n  color: white;\n}\nbutton:hover {\n  background-color: #0056b3;\n}\nbutton:active {\n  background-color: #003f7f;\n}`
    },
    {
      type: 'text',
      text: `
        <p class="text-red-600">
          ⚠️ Соблюдайте порядок псевдоклассов для ссылок: <code>:link → :visited → :hover → :active</code> (правило LVHA).
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Псевдоэлементы (Pseudo-elements)</h3>
        <p>
          Псевдоэлементы представляют собой абстрактные элементы, которых нет в HTML, но которые можно стилизовать.
          Обозначаются двойным двоеточием <code>::</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>::before</code> — добавляет содержимое перед элементом;</li>
          <li><code>::after</code> — добавляет содержимое после элемента;</li>
          <li><code>::first-line</code> — стилизует первую строку текста;</li>
          <li><code>::first-letter</code> — первую букву;</li>
          <li><code>::selection</code> — выделенный пользователем текст.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.quote::before {\n  content: "❝";\n  font-size: 2rem;\n  margin-right: 5px;\n  color: gray;\n}\n.quote::after {\n  content: "❞";\n  font-size: 2rem;\n  margin-left: 5px;\n  color: gray;\n}\n\n.article::first-letter {\n  font-size: 2rem;\n  font-weight: bold;\n  float: left;\n  margin-right: 5px;\n}\n\n.highlight::selection {\n  background-color: yellow;\n  color: black;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Псевдоэлементы часто используются для декоративных эффектов и добавления иконок или подсказок без изменения разметки.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Пример использования</h3>
        <p>
          Добавим стиль кнопки с анимацией при наведении и иконкой через псевдоэлемент:
        </p>
      `
    },
    {
      type: 'code',
      code: `.btn {\n  display: inline-block;\n  padding: 10px 20px;\n  background-color: #28a745;\n  color: white;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  position: relative;\n}\n.btn:hover {\n  background-color: #218838;\n}\n.btn::after {\n  content: " ➤";\n  margin-left: 5px;\n  transition: transform 0.3s;\n}\n.btn:hover::after {\n  transform: translateX(3px);\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Такая кнопка будет плавно менять цвет при наведении, а стрелочка будет слегка двигаться — это создаёт ощущение живости интерфейса.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте <code>:focus</code> для доступности, особенно для ссылок и полей ввода;</li>
          <li>Не забывайте добавлять <code>content: ""</code> при использовании <code>::before</code> и <code>::after</code>;</li>
          <li>С помощью псевдоэлементов можно создавать чистые иконки, подсказки и тени без лишних тегов;</li>
          <li>Псевдоклассы идеальны для создания интерактивных компонентов, таких как выпадающие меню, табы и кнопки;</li>
          <li>Тестируйте поведение псевдоклассов на мобильных устройствах, так как <code>:hover</code> может работать иначе.</li>
        </ul>
      `
    }
  ],
  task: "Создайте кнопку с иконкой справа, которая плавно перемещается при наведении. Также добавьте стиль для состояний :hover, :focus и :active.",
  exampleAnswer: "/* CSS */\n.btn {\n  display: inline-block;\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: white;\n  text-decoration: none;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n.btn:hover {\n  background-color: #0056b3;\n}\n.btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(0,123,255,0.5);\n}\n.btn:active {\n  transform: scale(0.98);\n}\n.btn::after {\n  content: ' →';\n  margin-left: 5px;\n  transition: transform 0.3s;\n}\n.btn:hover::after {\n  transform: translateX(4px);\n}\n\n<!-- HTML -->\n<a href=\"#\" class=\"btn\">Подробнее</a>"
};