export default {
  id: 6,
  title: "Изображения в HTML",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Изображения играют важную роль в оформлении веб-страниц. В HTML изображения добавляются с помощью тега 
          <code>&lt;img&gt;</code>. Этот тег является пустым (self-closing), то есть у него нет закрывающего тега.
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
      code: `<img src="image.jpg" alt="Описание изображения">`
    },
    {
      type: 'text',
      text: `
        <p class="mt-2">
          Обязательные атрибуты:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>src</code> — путь к файлу изображения.</li>
          <li><code>alt</code> — текстовое описание изображения (важно для доступности и SEO).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Поддерживаемые форматы изображений:</h3>
        <p>
          Браузеры поддерживают несколько форматов изображений:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>JPG / JPEG</strong> — подходит для фотографий.</li>
          <li><strong>PNG</strong> — поддерживает прозрачность, хорош для логотипов и графики.</li>
          <li><strong>GIF</strong> — анимированные изображения.</li>
          <li><strong>SVG</strong> — векторная графика, идеальна для логотипов и иконок.</li>
          <li><strong>WEBP</strong> — современный формат с высокой степенью сжатия.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Расположение изображений:</h3>
        <p>
          Путь к изображению может быть:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Абсолютным</strong>: <code>https://example.com/images/photo.jpg</code></li>
          <li><strong>Относительным</strong>: <code>images/photo.jpg</code>, <code>photo.png</code></li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования относительного пути:</h3>
      `
    },
    {
      type: 'code',
      code: `<img src="images/logo.png" alt="Логотип компании">`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Дополнительные атрибуты:</h3>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>width</code> — ширина изображения в пикселях или процентах.</li>
          <li><code>height</code> — высота изображения.</li>
          <li><code>title</code> — всплывающая подсказка при наведении мыши.</li>
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
      code: `<img src="photo.jpg" alt="Пейзаж" width="300" height="200" title="Красивый вид">`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по использованию изображений:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Всегда указывайте содержательный атрибут <code>alt</code> для SEO и доступности.</li>
          <li>Не увеличивайте размер изображения через <code>width</code>/<code>height</code> — лучше используйте оптимизированный оригинал.</li>
          <li>Используйте подходящие форматы для разных задач (например, PNG для прозрачности, WEBP для скорости загрузки).</li>
          <li>Именуйте файлы понятно и используйте строчные буквы: <code>about-us.jpg</code>, а не <code>IMG_1234.jpg</code>.</li>
        </ul>
      `
    }
  ],
  task: "Добавьте на страницу изображение с вашим фото или любого примера. Укажите альтернативный текст, ширину, высоту и всплывающую подсказку.",
  exampleAnswer: `<img src="my-photo.jpg" alt="Моё фото" width="200" height="250" title="Это я!">`
};