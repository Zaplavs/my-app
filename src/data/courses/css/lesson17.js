export default {
  id: 14,
  title: "CSS-методологии и организация кода",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          По мере роста проекта становится сложно поддерживать чистоту и структурированность CSS. 
          Чтобы избежать хаоса и дублирования стилей, используются <strong>CSS-методологии</strong> — системы правил для написания понятного, масштабируемого и повторно используемого CSS.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Почему важна организация CSS?</h3>
        <p>
          Неорганизованный CSS приводит к:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Дублированию стилей;</li>
          <li>Сложностям при поиске и изменении классов;</li>
          <li>Конфликтам селекторов и непредсказуемому поведению;</li>
          <li>Замедлению работы всей команды.</li>
        </ul>
        <p>
          Правильная структура помогает:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Легко находить нужные стили;</li>
          <li>Быстро добавлять новые компоненты;</li>
          <li>Избегать побочных эффектов при обновлениях.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Основные методологии CSS</h3>
        <p>
          Ниже перечислены самые популярные подходы к организации CSS:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">BEM (Block Element Modifier)</h4>
        <p>
          Методология, разработанная Яндексом, где всё строится на трёх понятиях:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Block</strong> — независимый блок (например, <code>.menu</code>);</li>
          <li><strong>Element</strong> — часть блока (например, <code>.menu__item</code>);</li>
          <li><strong>Modifier</strong> — модификатор (состояние или вариант) (например, <code>.menu__item--active</code>).</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.menu {\n  list-style: none;\n}\n.menu__item {\n  display: inline-block;\n  margin-right: 10px;\n}\n.menu__item--active {\n  font-weight: bold;\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">SMACSS (Scalable Modular Architecture for CSS)</h4>
        <p>
          SMACSS предлагает разделение CSS на категории:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Base</strong> — базовые стили для тегов;</li>
          <li><strong>Layout</strong> — стили для сетки и макета;</li>
          <li><strong>Module</strong> — повторяющиеся компоненты;</li>
          <li><strong>State</strong> — временные состояния элементов (например, <code>.is-active</code>);</li>
          <li><strong>Theme</strong> — опциональная темизация.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `/* Base styles */\nbody {\n  font-family: Arial, sans-serif;\n}\n\n/* Layout */\n.container {\n  width: 960px;\n  margin: 0 auto;\n}\n\n/* Module: Button */\n.btn {\n  padding: 10px 20px;\n  border-radius: 4px;\n}\n.btn--primary {\n  background-color: #007bff;\n  color: white;\n}`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">ITCSS (Inverted Triangle CSS)</h4>
        <p>
          ITCSS фокусируется на порядке объявлений стилей от самого общего к самому специфичному:
        </p>
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li><code>Settings</code> — переменные;</li>
          <li><code>Tools</code> — миксины и функции;</li>
          <li><code>Generic</code> — reset/normalize;</li>
          <li><code>Elements</code> — базовые HTML-элементы;</li>
          <li><code>Objects</code> — объектно-ориентированные стили;</li>
          <li><code>Components</code> — конкретные компоненты UI;</li>
          <li><code>Trumps</code> — переопределения и utility-классы.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Как организовать CSS-файлы?</h3>
        <p>
          Вот несколько полезных практик:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Разделение на файлы:</strong> по компонентам, страницам или слоям (например, <code>_base.css</code>, <code>_buttons.css</code>).</li>
          <li><strong>Использование комментариев:</strong> группируйте стили и давайте им понятные заголовки.</li>
          <li><strong>Порядок свойств:</strong> группируйте логически связанные свойства вместе (например, все размеры, затем цвета, затем анимации).</li>
          <li><strong>Нейминг:</strong> используйте осмысленные имена классов, чтобы было понятно, за что отвечает каждый элемент.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: "/* Base styles */\nbody {\n  font-family: Arial, sans-serif;\n}\n\n/* Buttons */\n.btn {\n  padding: 10px 20px;\n  border-radius: 4px;\n}\n.btn--primary {\n  background-color: #007bff;\n  color: white;\n}"
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. Пример структуры папок и файлов</h3>
        <p>
          Вот как может выглядеть структура проекта:
        </p>
      `
    },
    {
      type: 'code',
      code: `/css
├── _base.css
├── _layout.css
├── _typography.css
├── _components/
│   ├── _buttons.css
│   ├── _cards.css
│   └── _navigation.css
├── _utilities.css
└── main.css`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">5. Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте методологию <code>BEM</code>, если работаете над большим проектом с несколькими разработчиками;</li>
          <li>Не бойтесь использовать комментарии — они помогают ориентироваться в коде;</li>
          <li>Избегайте глубоких вложенности и слишком специфичных селекторов;</li>
          <li>Если вы используете препроцессор (Sass/SCSS), применяйте <code>@extend</code> и <code>@mixin</code> разумно;</li>
          <li>Используйте инструменты вроде <code>Stylelint</code> для соблюдения стиля и проверки ошибок.</li>
        </ul>
      `
    }
  ],
  task: "Организуйте CSS-файлы для сайта, содержащего главную страницу, меню навигации, кнопки и карточки товаров. Используйте одну из методологий и добавьте комментарии.",
  exampleAnswer: "/* main.css */\n@import 'base';\n@import 'layout';\n@import 'typography';\n@import 'components/buttons';\n@import 'components/cards';\n@import 'components/navigation';\n\n/* _base.css */\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-family: sans-serif;\n}\n\n/* _navigation.css */\n.nav {\n  display: flex;\n  justify-content: space-between;\n  background: #333;\n  padding: 10px;\n}\n.nav__link {\n  color: white;\n  text-decoration: none;\n}\n.nav__link--active {\n  font-weight: bold;\n}"
};