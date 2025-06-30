export default {
  id: 10,
  title: "Адаптивность и медиазапросы",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Современные сайты должны корректно отображаться на разных устройствах — от мобильных телефонов до больших мониторов.
          Для этого используется <strong>адаптивный дизайн</strong>, который строится с помощью <code>@media</code>-запросов.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Что такое медиазапросы?</h3>
        <p>
          Медиазапросы (<code>@media</code>) позволяют применять разные стили в зависимости от характеристик устройства:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>ширина экрана;</li>
          <li>ориентация (портретная / альбомная);</li>
          <li>разрешение;</li>
          <li>тип носителя (экран, печать и др.).</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `@media (условие) {\n  /* Стили для устройств, подходящих под условие */\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Брейкпоинты (breakpoints)</h3>
        <p>
          Это точки, в которых макет адаптируется под размер экрана. Часто используемые брейкпоинты:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Мобильные телефоны:</strong> до 767px;</li>
          <li><strong>Планшеты:</strong> от 768px до 1023px;</li>
          <li><strong>Ноутбуки/десктопы:</strong> от 1024px.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `/* Мобильные телефоны */\n@media (max-width: 767px) {\n  body {\n    font-size: 14px;\n  }\n}\n\n/* Планшеты */\n@media (min-width: 768px) and (max-width: 1023px) {\n  .container {\n    width: 90%;\n  }\n}\n\n/* Десктопы */\n@media (min-width: 1024px) {\n  .container {\n    width: 1000px;\n  }\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Основные media features</h3>
        <p>
          Условия в медиазапросах могут проверять разные параметры:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>width</code> / <code>min-width</code> / <code>max-width</code> — ширина области просмотра;</li>
          <li><code>height</code> / <code>min-height</code> / <code>max-height</code> — высота;</li>
          <li><code>orientation: portrait | landscape</code> — ориентация экрана;</li>
          <li><code>aspect-ratio</code> — соотношение сторон;</li>
          <li><code>resolution</code> — плотность пикселей;</li>
          <li><code>hover</code> / <code>pointer</code> — тип указывающего устройства.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. Пример адаптации навигации</h3>
        <p>
          На мобильных устройствах часто сворачивают меню в "бургер". Вот как это можно реализовать:
        </p>
      `
    },
    {
      type: 'code',
      code: `nav ul {\n  display: flex;\n  gap: 20px;\n}\n\n@media (max-width: 767px) {\n  nav ul {\n    flex-direction: column;\n    background-color: #f0f0f0;\n    padding: 10px;\n  }\n  nav li {\n    margin: 5px 0;\n  }\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">5. Mobile-first подход</h3>
        <p>
          Рекомендуется использовать <strong>mobile-first</strong> — сначала писать стили под мобильные устройства, а затем добавлять медиазапросы для более крупных экранов.
        </p>
      `
    },
    {
      type: 'code',
      code: `body {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  body {\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 1024px) {\n  body {\n    font-size: 18px;\n  }\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">6. meta viewport для мобильных</h3>
        <p>
          Чтобы сайт корректно отображался на мобильных устройствах, необходимо добавить тег <code>&lt;meta&gt;</code> в секцию <code>&lt;head&gt;</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Тестируйте сайт на реальных устройствах или в DevTools;</li>
          <li>Используйте Flexbox/Grid для гибкой раскладки;</li>
          <li>Не используйте фиксированные размеры (например, <code>width: 1000px</code>), если не ограничиваете контейнер через медиазапросы;</li>
          <li>Следите за тем, чтобы текст оставался читаемым на маленьких экранах;</li>
          <li>Оптимизируйте изображения под разные разрешения.</li>
        </ul>
      `
    }
  ],
  task: "Создайте простую HTML-страницу с заголовком, абзацем и навигационным меню. Напишите CSS так, чтобы на мобильных устройствах меню было вертикальным, а на десктопах — горизонтальным.",
  exampleAnswer: "/* CSS */\nnav ul {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  gap: 10px;\n}\n\n@media (max-width: 767px) {\n  nav ul {\n    flex-direction: column;\n  }\n}\n\n.container {\n  padding: 20px;\n}\n\n<!-- HTML -->\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n  <div class=\"container\">\n    <h1>Адаптивный сайт</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#\">Главная</a></li>\n        <li><a href=\"#\">О нас</a></li>\n        <li><a href=\"#\">Контакты</a></li>\n      </ul>\n    </nav>\n    <p>Этот сайт выглядит по-разному на разных устройствах.</p>\n  </div>\n</body>"
};