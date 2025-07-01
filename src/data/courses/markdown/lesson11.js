export default {
  id: 32,
  title: "Работа с HTML в Markdown",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Хотя Markdown сам по себе простой и удобный, он не покрывает все возможные потребности оформления текста. К счастью, Markdown позволяет вставлять произвольный HTML-код прямо в документ.
        </p>
        <p>
          В этом уроке вы узнаете:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Как вставлять HTML-теги в Markdown.</li>
          <li>Какие HTML-элементы поддерживаются.</li>
          <li>Когда лучше использовать HTML вместо стандартного синтаксиса Markdown.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Вставка HTML в Markdown</h3>
        <p>
          Вы можете использовать любой корректный HTML-код внутри Markdown-документа. Например, можно добавить тег <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code> или даже таблицу через HTML.
        </p>
      `
    },
    {
      type: 'code',
      code: "<p style=\"color: blue;\">Это абзац с синим текстом</p>"
    },
    {
      type: 'text',
      text: `
        <p>
          Такой подход полезен, если вам нужно задать стили, атрибуты или использовать элементы, которых нет в базовом Markdown.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Поддерживаемые HTML-элементы</h3>
        <p>
          Markdown поддерживает большинство распространённых HTML-тегов. Вот некоторые из них:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;p&gt;</code> — параграф</li>
          <li><code>&lt;a&gt;</code> — ссылка</li>
          <li><code>&lt;img&gt;</code> — изображение</li>
          <li><code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code> — таблицы</li>
          <li><code>&lt;div&gt;</code>, <code>&lt;span&gt;</code> — контейнеры</li>
          <li><code>&lt;button&gt;</code>, <code>&lt;input&gt;</code> — интерактивные элементы (в некоторых редакторах)</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Пример:</h4>
      `
    },
    {
      type: 'code',
      code: "<div style=\"border: 1px solid #ccc; padding: 10px;\">\n  Это блок с рамкой.\n</div>"
    },
    {
      type: 'text',
      text: `
        <p>
          Этот HTML будет отображаться как обычный блок с внутренним отступом и рамкой.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Когда использовать HTML вместо Markdown</h3>
        <p>
          Иногда Markdown не может сделать то, что нужно. Вот ситуации, когда стоит использовать HTML:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Нужно задать стиль:</strong> например, цвет текста или фона, шрифт.</li>
          <li><strong>Требуется дополнительная семантика:</strong> использование тегов <code>&lt;details&gt;</code>, <code>&lt;summary&gt;</code> и других.</li>
          <li><strong>Сложные таблицы:</strong> когда нужна точная настройка столбцов, объединение ячеек и т. д.</li>
          <li><strong>Интерактивные элементы:</strong> кнопки, поля ввода, выпадающие списки.</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: "<details>\n  <summary>Показать подробности</summary>\n  <p>Здесь находится скрытый текст.</p>\n</details>"
    },
    {
      type: 'text',
      text: `
        <p>
          Такой элемент нельзя создать только средствами Markdown, но он отлично работает при использовании HTML.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <p>
          Вот несколько рекомендаций:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте HTML только тогда, когда Markdown не справляется.</li>
          <li>Не злоупотребляйте сложными тегами — это снижает читаемость исходного текста.</li>
          <li>Добавляйте комментарии к сложным блокам для упрощения дальнейшего редактирования.</li>
          <li>Проверяйте, как ваш HTML отображается в разных редакторах и системах.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Итог</h3>
        <p>
          Теперь вы знаете:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Как вставлять HTML-код в Markdown.</li>
          <li>Какие HTML-элементы поддерживаются.</li>
          <li>Когда лучше использовать HTML вместо стандартного синтаксиса Markdown.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          В следующем уроке мы завершим курс и соберём всё, что вы узнали, в финальное практическое задание — создание полноценного документа Markdown с оглавлением, списками, таблицами и другими элементами.
        </p>
      `
    }
  ],
  task: "Создайте документ с заголовком и несколькими разделами. Добавьте один из следующих HTML-элементов: styled paragraph, collapsible section (<details>), div с рамкой или таблицу с расширенной разметкой.",
  exampleAnswer: "# Моё руководство по HTML в Markdown\n\n## Основы\n\n<p style=\"color: green; font-size: 18px;\">Этот текст зелёный и крупнее обычного.</p>\n\n## Скрытая информация\n\n<details>\n  <summary>Нажмите, чтобы открыть</summary>\n  <p>Скрытый текст стал видимым!</p>\n</details>\n\n## Таблица с HTML\n\n<table border=\"1\" cellpadding=\"5\">\n  <tr>\n    <th>Имя</th>\n    <th>Возраст</th>\n  </tr>\n  <tr>\n    <td>Алексей</td>\n    <td>28</td>\n  </tr>\n</table>"
};