export default {
  id: 17,
  title: "Доступность (a11y) и ARIA",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Доступность (<strong>accessibility</strong>, или сокращённо <strong>a11y</strong>) — это практика создания сайтов, которыми могут пользоваться все люди, включая тех, кто использует специальные технологии, например программы чтения с экрана.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Почему важна доступность?</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Сайт становится доступным людям с ограниченными возможностями (зрительные, слуховые, моторные ограничения).</li>
          <li>Улучшает SEO — поисковые системы лучше понимают структуру сайта.</li>
          <li>Соответствует законодательству в ряде стран (например, WCAG, ADA).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовые принципы доступности:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Воспринимаемость</strong> — информация должна быть доступной всем органам чувств.</li>
          <li><strong>Удобство использования</strong> — интерфейс должен быть простым и понятным.</li>
          <li><strong>Разумность</strong> — пользователь должен понимать, что происходит.</li>
          <li><strong>Гибкость</strong> — сайт должен работать с разными устройствами и технологиями.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как сделать сайт более доступным?</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте семантические теги (<code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;button&gt;</code> и др.).</li>
          <li>Добавляйте атрибут <code>alt</code> к изображениям.</li>
          <li>Обеспечьте возможность навигации с клавиатуры (в том числе Tab).</li>
          <li>Не полагайтесь только на цвет для передачи информации.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое ARIA?</h3>
        <p>
          ARIA (Accessible Rich Internet Applications) — это набор атрибутов, которые помогают сделать содержимое и приложения более доступными для людей, использующих технологии чтения с экрана.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Основные ARIA-атрибуты:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>role</code> — указывает роль элемента (например, <code>role="navigation"</code>).</li>
          <li><code>aria-label</code> — задаёт имя элементу для программ чтения.</li>
          <li><code>aria-describedby</code> — ссылается на элемент с описанием.</li>
          <li><code>aria-hidden</code> — скрывает элемент от скринридеров.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Примеры использования ARIA:</h3>
      `
    },
    {
      type: 'code',
      code: `<!-- Кнопка с aria-label -->\n<button aria-label="Закрыть">\n  ✖\n</button>\n\n<!-- Скрыть иконку от скринридеров -->\n<img src="icon.svg" alt="" aria-hidden="true">\n\n<!-- Роль для навигации -->\n<div role="navigation">\n  <a href="/">Главная</a>\n  <a href="/about">О нас</a>\n</div>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Когда использовать ARIA?</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Если вы не можете использовать семантический HTML (например, делаете кастомный компонент).</li>
          <li>Если нужно добавить дополнительное описание или состояние элемента.</li>
        </ul>
        <p>
          Но помните: <strong>предпочитайте стандартные HTML-элементы вместо ARIA</strong>, если это возможно.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по тестированию доступности:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Проверяйте сайт с помощью программы чтения с экрана (например, NVDA, JAWS, VoiceOver).</li>
          <li>Тестируйте навигацию с клавиатуры.</li>
          <li>Используйте инструменты, такие как Lighthouse (в Chrome DevTools), axe, WAVE.</li>
        </ul>
      `
    }
  ],
  task: "Добавьте на страницу кнопку с иконкой без текста. Используйте ARIA, чтобы сделать её доступной для скринридеров.",
  exampleAnswer: `<button aria-label="Отправить форму">\n  <img src="send-icon.svg" alt="" aria-hidden="true">\n</button>`
};