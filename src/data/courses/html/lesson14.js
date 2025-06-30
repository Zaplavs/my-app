export default {
  id: 14,
  title: "Метатеги и SEO-основы",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Метатеги — это элементы HTML, которые не отображаются напрямую на странице, но содержат важную информацию о документе.
          Они находятся внутри контейнера <code>&lt;head&gt;</code> и используются браузерами, поисковыми системами и социальными сетями.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовый набор метатегов:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;meta charset&gt;</code> — указывает кодировку документа.</li>
          <li><code>&lt;meta name="viewport"&gt;</code> — управляет масштабированием на мобильных устройствах.</li>
          <li><code>&lt;meta name="description"&gt;</code> — краткое описание страницы для поисковиков и сниппетов.</li>
          <li><code>&lt;meta name="keywords"&gt;</code> — ключевые слова (устаревает, но иногда используется).</li>
          <li><code>&lt;meta name="author"&gt;</code> — автор или организация.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример минимального набора метатегов:</h3>
      `
    },
    {
      type: 'code',
      code: `<!DOCTYPE html>\n<html lang="ru">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Учебный курс по HTML для начинающих. Базовые понятия и практика.">\n  <title>HTML для новичков</title>\n</head>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Подробное описание ключевых метатегов:</h3>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>
            <strong><code>&lt;meta charset="UTF-8"&gt;</code></strong><br>
            Обязательный тег, указывающий кодировку текста. Всегда используйте UTF-8 — она поддерживает все языки мира.
          </li>
          <li>
            <strong><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></strong><br>
            Необходим для корректного отображения сайта на мобильных устройствах. Без него сайт может выглядеть как на десктопе и быть плохо читаем.
          </li>
          <li>
            <strong><code>&lt;meta name="description" content="..."&gt;</code></strong><br>
            Краткое описание страницы. Это один из самых важных SEO-факторов. Показывается в результатах поиска под заголовком ссылки.
          </li>
          <li>
            <strong><code>&lt;meta name="keywords" content="..."&gt;</code></strong><br>
            Ранее использовался для передачи ключевых слов поисковикам, но сейчас большинство поисковых систем его игнорируют. Однако его можно использовать для внутренней документации.
          </li>
          <li>
            <strong><code>&lt;meta name="author" content="Имя Автора"&gt;</code></strong><br>
            Указывает автора или организацию. Полезно при командной разработке или публикации статей.
          </li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Дополнительные полезные метатеги:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;</code> — для совместимости с Internet Explorer.</li>
          <li><code>&lt;meta name="robots" content="index, follow"&gt;</code> — указывает поисковым роботам индексировать страницу и переходить по ссылкам.</li>
          <li><code>&lt;link rel="canonical" href="..."&gt;</code> — указывает «канонический» адрес страницы, чтобы избежать дублирования контента.</li>
          <li><code>&lt;meta property="og:title" content="..."&gt;</code> — Open Graph метатеги для красивого отображения ссылок в соцсетях.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по SEO:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Пишите уникальные и информативные описания для каждой страницы.</li>
          <li>Не злоупотребляйте ключевыми словами — делайте текст естественным.</li>
          <li>Проверяйте, как ваш сайт отображается в поисковой выдаче (через Google Search Console).</li>
          <li>Используйте Open Graph и Twitter Card для красивых превью при обмене ссылками в соцсетях.</li>
        </ul>
      `
    }
  ],
  task: "Добавьте в head вашей HTML-страницы обязательные метатеги: charset, viewport, description, author. Напишите качественное описание для главной страницы сайта.",
  exampleAnswer: `<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Официальный сайт компании, предлагающей IT-решения для малого и среднего бизнеса.">\n  <meta name="author" content="IT Solutions Team">\n  <title>IT Solutions - Главная</title>\n</head>`
};