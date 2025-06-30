export default {
  id: 5,
  title: "Гиперссылки и навигация",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Гиперссылки — это основной способ перемещения между страницами в интернете. В HTML ссылки создаются с помощью тега 
          <code>&lt;a&gt;</code> (от англ. anchor — якорь). Ссылка может быть текстовой или графической.
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
      code: `<a href="https://example.com">Перейти на сайт</a>`
    },
    {
      type: 'text',
      text: `
        <p class="mt-2">
          Атрибут <code>href</code> указывает адрес, на который ведёт ссылка. Это может быть:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Абсолютный путь</strong> — полный URL: <code>https://example.com/page.html</code></li>
          <li><strong>Относительный путь</strong> — относительно текущего файла: <code>page.html</code>, <code>images/photo.jpg</code></li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Примеры абсолютных и относительных ссылок:</h3>
      `
    },
    {
      type: 'code',
      code: `<!-- Абсолютная ссылка -->\n<a href="https://google.com">Поиск Google</a>\n\n<!-- Относительная ссылка -->\n<a href="about.html">О нас</a>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Полезные атрибуты ссылок:</h3>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>
            <strong>target</strong> — определяет, где откроется ссылка:
            <ul class="list-circle pl-5 mt-1">
              <li><code>_self</code> — в текущей вкладке (по умолчанию)</li>
              <li><code>_blank</code> — в новой вкладке</li>
            </ul>
          </li>
          <li>
            <strong>rel</strong> — указывает отношение между текущим документом и целевым:
            <ul class="list-circle pl-5 mt-1">
              <li><code>nofollow</code> — не передавать доверие поисковикам</li>
              <li><code>noopener</code> — безопасность при открытии в новой вкладке</li>
            </ul>
          </li>
          <li>
            <strong>title</strong> — всплывающая подсказка при наведении мыши.
          </li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования атрибутов:</h3>
      `
    },
    {
      type: 'code',
      code: `<!-- Открыть в новой вкладке с подсказкой -->\n<a href="https://example.com" target="_blank" rel="noopener" title="Перейти на пример">\n  Сайт Example.com\n</a>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Якоря (ссылки на элемент внутри страницы):</h3>
        <p>
          Вы можете создавать ссылки на определённые части страницы с помощью якорей. Для этого используется символ <code>#</code> и значение атрибута <code>id</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `<!-- Ссылка на заголовок -->\n<a href="#section1">Перейти к разделу 1</a>\n\n<h2 id="section1">Раздел 1</h2>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по использованию ссылок:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте понятный текст для ссылок (например, «Подробнее о продукте», а не «Нажмите здесь»).</li>
          <li>Для внешних ссылок всегда добавляйте <code>target="_blank"</code> и <code>rel="noopener"</code>.</li>
          <li>Тестируйте все ссылки на работоспособность.</li>
        </ul>
      `
    }
  ],
  task: "Создайте страницу с 3 ссылками: одна на внешний сайт (в новой вкладке), одна на внутреннюю страницу (относительный путь) и одна на якорь внутри текущей страницы.",
  exampleAnswer: `<!-- Пример ответа -->\n<a href="https://example.com" target="_blank" rel="noopener">Внешняя ссылка</a>\n<a href="about.html">О нас</a>\n<a href="#footer">Перейти к футеру</a>\n<h2 id="footer">Футер сайта</h2>`
};