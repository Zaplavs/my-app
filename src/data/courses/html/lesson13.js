export default {
  id: 13,
  title: "iframe: встраивание внешнего контента",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Тег <code>&lt;iframe&gt;</code> (inline frame) позволяет встраивать внешние ресурсы прямо в вашу HTML-страницу.
          Это может быть другая веб-страница, карта, видео с YouTube, форма Google, чат или любой другой контент, доступный по URL.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовый синтаксис:</h3>
      `
    },
    {
      type: 'code',
      code: `<iframe src="https://example.com" width="600" height="400"></iframe>`
    },
    {
      type: 'text',
      text: `
        <p class="mt-2">
          Обязательный атрибут:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>src</code> — адрес страницы или файла, который будет отображаться внутри iframe.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример встраивания видео с YouTube:</h3>
      `
    },
    {
      type: 'code',
      code: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" \n        width="560" \n        height="315" \n        frameborder="0" \n        allowfullscreen>\n</iframe>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Распространённые атрибуты iframe:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>width</code>, <code>height</code> — размеры окна iframe.</li>
          <li><code>frameborder</code> — устаревший атрибут, но часто используется для скрытия рамки (<code>"0"</code>).</li>
          <li><code>allowfullscreen</code> — разрешает полноэкранный режим (важно для видео).</li>
          <li><code>allow="fullscreen; picture-in-picture"</code> — более гибкая настройка возможностей.</li>
          <li><code>title</code> — текст для экранного чтения (для доступности).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример встраивания карты Google:</h3>
      `
    },
    {
      type: 'code',
      code: `<iframe src="https://www.google.com/maps/embed?pb=..." \n        width="600" \n        height="450" \n        style="border:0" \n        allowfullscreen \n        loading="lazy">\n</iframe>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Безопасность при использовании iframe:</h3>
        <p>
          Использование iframe может нести риски безопасности, так как вы встраиваете внешний контент на свою страницу.
          Вот несколько рекомендаций:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Не встраивайте непроверенные источники.</li>
          <li>Используйте атрибут <code>sandbox</code> для ограничения возможностей iframe.</li>
          <li>Атрибут <code>allow</code> помогает контролировать, что можно делать во фрейме (например, запретить автовоспроизведение).</li>
          <li>Избегайте использования <code>allow="camera; microphone"</code>, если это не требуется.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример с атрибутом sandbox:</h3>
      `
    },
    {
      type: 'code',
      code: `<iframe src="https://example.com" \n        sandbox="allow-scripts allow-same-origin">\n</iframe>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Дополнительные советы:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте CSS для адаптивных iframe (например, с <code>width: 100%</code> и <code>aspect-ratio</code>).</li>
          <li>При встраивании из сторонних сервисов (YouTube, Google Maps) используйте предоставленные ими коды.</li>
          <li>Тестируйте iframe на мобильных устройствах — иногда нужна дополнительная настройка под адаптивность.</li>
        </ul>
      `
    }
  ],
  task: "Вставьте на страницу карту Google и видео с YouTube с помощью iframe. Добавьте к каждому атрибут title и сделайте их адаптивными.",
  exampleAnswer: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" \n        width="100%" \n        height="315" \n        title="Моё видео"\n        allowfullscreen\n        style="aspect-ratio: 16/9;">\n</iframe>\n<br>\n<iframe src="https://www.google.com/maps/embed?pb=..." \n        width="100%" \n        height="450" \n        title="Карта офиса"\n        style="border:0;" \n        allowfullscreen>\n</iframe>`
};