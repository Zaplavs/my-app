export default {
  id: 2,
  title: "Структура HTML-документа",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Каждый HTML-документ имеет определённую структуру, которая позволяет браузеру правильно интерпретировать содержимое страницы. 
          В этом уроке мы рассмотрим стандартную структуру документа в HTML5 и разберём назначение каждого основного элемента.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример базовой структуры HTML5:</h3>
      `
    },
    {
      type: 'code',
      code: `<!DOCTYPE html>\n<html lang="ru">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Моя страница</title>\n  </head>\n  <body>\n    <h1>Заголовок страницы</h1>\n    <p>Основной текст страницы.</p>\n  </body>\n</html>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Разбор ключевых частей HTML-документа:</h3>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>&lt;!DOCTYPE html&gt;</strong> — объявление типа документа. Указывает браузеру, что это HTML5. Должно быть первым в файле, до тега &lt;html&gt;.</li>
          <li><strong>&lt;html&gt;</strong> — корневой элемент документа. Все остальные элементы размещаются внутри него. Атрибут <code>lang</code> указывает язык содержимого (например, <code>lang="ru"</code> для русского).</li>
          <li><strong>&lt;head&gt;</strong> — содержит служебную информацию о документе (метаданные), которую не видно на самой странице, но она важна для браузера и поисковых систем.</li>
          <li><strong>&lt;body&gt;</strong> — область, где находится весь контент, который будет отображаться в окне браузера: текст, изображения, ссылки, видео и другие элементы.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое метатеги?</h3>
        <p>
          Метатеги — это теги, которые находятся внутри &lt;head&gt; и предоставляют дополнительную информацию о странице.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>&lt;meta charset="UTF-8"&gt;</strong> — задаёт кодировку документа. UTF-8 поддерживает большинство языков мира, включая русский.</li>
          <li><strong>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</strong> — необходим для правильного отображения страницы на мобильных устройствах. Позволяет адаптировать макет под размер экрана.</li>
          <li><strong>&lt;title&gt;</strong> — заголовок страницы, отображаемый во вкладке браузера и в результатах поисковых систем.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Почему важно использовать правильную структуру?</h3>
        <p>
          Корректная структура HTML-документа:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Улучшает совместимость с браузерами.</li>
          <li>Облегчает работу с CSS и JavaScript.</li>
          <li>Повышает доступность для пользователей с особыми потребностями.</li>
          <li>Помогает поисковым системам лучше понимать содержимое сайта.</li>
        </ul>
      `
    }
  ],
  task: "Создайте HTML-файл с полной базовой структурой: объявите DOCTYPE, установите язык страницы, задайте кодировку и заголовок. В теле добавьте заголовок h1 и параграф.",
  exampleAnswer: `<!DOCTYPE html>\n<html lang="ru">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Моя первая страница</title>\n  </head>\n  <body>\n    <h1>Добро пожаловать!</h1>\n    <p>Это пример простой HTML-страницы.</p>\n  </body>\n</html>`
};