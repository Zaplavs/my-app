export default {
  id: 12,
  title: "Видео и аудио",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          В современных веб-приложениях медиа играют важную роль — будь то обучающие видео, фоновая музыка или подкасты.
          HTML5 предоставляет встроенные элементы для воспроизведения медиа без использования внешних плагинов:
          <code>&lt;video&gt;</code> для видео и <code>&lt;audio&gt;</code> для звука.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовое использование &lt;video&gt;</h3>
      `
    },
    {
      type: 'code',
      code: `<video src="movie.mp4" controls>\n  Ваш браузер не поддерживает тег video.\n</video>`
    },
    {
      type: 'text',
      text: `
        <p class="mt-2">
          Объяснение:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>src</code> — путь к видеофайлу.</li>
          <li><code>controls</code> — добавляет стандартные элементы управления (воспроизведение, пауза, громкость и т.д.).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Поддерживаемые форматы видео:</h3>
        <p>
          Браузеры поддерживают разные форматы видео. Вот самые популярные:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>.mp4</strong> — широко поддерживается (H.264)</li>
          <li><strong>.webm</strong> — открытый формат от Google</li>
          <li><strong>.ogg / .ogv</strong> — менее распространён</li>
        </ul>
        <p>
          Чтобы ваше видео работало во всех браузерах, можно указать несколько источников.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример с несколькими источниками:</h3>
      `
    },
    {
      type: 'code',
      code: `<video controls width="400">\n  <source src="movie.mp4" type="video/mp4">\n  <source src="movie.webm" type="video/webm">\n  <source src="movie.ogg" type="video/ogg">\n  Ваш браузер не поддерживает тег video.\n</video>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Атрибуты &lt;video&gt;:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>autoplay</code> — автоматическое воспроизведение.</li>
          <li><code>muted</code> — отключает звук при автовоспроизведении (часто требуется браузерами).</li>
          <li><code>loop</code> — повторное воспроизведение видео.</li>
          <li><code>poster</code> — изображение, которое показывается до начала воспроизведения.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример с атрибутами:</h3>
      `
    },
    {
      type: 'code',
      code: `<video controls autoplay muted loop poster="preview.jpg" width="400">\n  <source src="intro.mp4" type="video/mp4">\n  Ваш браузер не поддерживает тег video.\n</video>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовое использование &lt;audio&gt;</h3>
      `
    },
    {
      type: 'code',
      code: `<audio src="music.mp3" controls>\n  Ваш браузер не поддерживает тег audio.\n</audio>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Поддерживаемые форматы аудио:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>.mp3</strong> — самый популярный формат</li>
          <li><strong>.wav</strong> — высокое качество, больший размер</li>
          <li><strong>.ogg</strong> — открытый формат</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример с несколькими форматами:</h3>
      `
    },
    {
      type: 'code',
      code: `<audio controls>\n  <source src="song.mp3" type="audio/mpeg">\n  <source src="song.wav" type="audio/wav">\n  <source src="song.ogg" type="audio/ogg">\n  Ваш браузер не поддерживает тег audio.\n</audio>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Атрибуты &lt;audio&gt;:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>autoplay</code> — воспроизводит звук автоматически.</li>
          <li><code>loop</code> — повторяет воспроизведение.</li>
          <li><code>controls</code> — отображает элементы управления.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по использованию медиа:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте атрибут <code>muted</code>, если хотите использовать <code>autoplay</code>.</li>
          <li>Не злоупотребляйте автовоспроизведением — это может раздражать пользователей.</li>
          <li>Добавляйте резервные сообщения внутри тегов, чтобы пользователи знали, что контент недоступен.</li>
          <li>Оптимизируйте размер файлов для более быстрой загрузки.</li>
        </ul>
      `
    }
  ],
  task: "Добавьте на страницу видео с несколькими форматами и аудиоплеер. Используйте атрибуты controls, autoplay и loop.",
  exampleAnswer: `<video controls autoplay muted loop width="400">\n  <source src="promo.mp4" type="video/mp4">\n  <source src="promo.webm" type="video/webm">\n  Ваш браузер не поддерживает тег video.\n</video>\n\n<audio controls autoplay loop>\n  <source src="background.mp3" type="audio/mpeg">\n  <source src="background.ogg" type="audio/ogg">\n  Ваш браузер не поддерживает тег audio.\n</audio>`
};