export default {
  id: 7,
  title: "Таблицы в HTML",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Таблицы в HTML используются для отображения данных в виде строк и столбцов. Они особенно полезны при представлении информации, где важна структура и взаимосвязь между значениями.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовые теги таблиц:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;table&gt;</code> — создаёт саму таблицу.</li>
          <li><code>&lt;tr&gt;</code> — определяет строку таблицы.</li>
          <li><code>&lt;td&gt;</code> — ячейка таблицы (обычная).</li>
          <li><code>&lt;th&gt;</code> — заголовочная ячейка (текст жирный и центрированный по умолчанию).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример простой таблицы:</h3>
      `
    },
    {
      type: 'code',
      code: `<table border="1">\n  <tr>\n    <th>Имя</th>\n    <th>Возраст</th>\n  </tr>\n  <tr>\n    <td>Анна</td>\n    <td>25</td>\n  </tr>\n  <tr>\n    <td>Иван</td>\n    <td>30</td>\n  </tr>\n</table>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Группировка строк:</h3>
        <p>
          Для улучшения структуры и семантики таблицы используются следующие теги:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;thead&gt;</code> — группирует заголовочные строки.</li>
          <li><code>&lt;tbody&gt;</code> — основное содержимое таблицы.</li>
          <li><code>&lt;tfoot&gt;</code> — нижняя часть таблицы (итоги и т.п.).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример с группировкой:</h3>
      `
    },
    {
      type: 'code',
      code: `<table border="1">\n  <thead>\n    <tr>\n      <th>Название</th>\n      <th>Цена</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Яблоки</td>\n      <td>100 ₽</td>\n    </tr>\n    <tr>\n      <td>Бананы</td>\n      <td>80 ₽</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td>Итого</td>\n      <td>180 ₽</td>\n    </tr>\n  </tfoot>\n</table>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Объединение ячеек:</h3>
        <p>
          Иногда нужно объединить ячейки по горизонтали или вертикали. Для этого используют атрибуты:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>colspan</code> — объединяет несколько колонок.</li>
          <li><code>rowspan</code> — объединяет несколько строк.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример с colspan:</h3>
      `
    },
    {
      type: 'code',
      code: `<table border="1">\n  <tr>\n    <th colspan="2">Данные пользователя</th>\n  </tr>\n  <tr>\n    <td>Имя</td>\n    <td>Анна</td>\n  </tr>\n</table>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример с rowspan:</h3>
      `
    },
    {
      type: 'code',
      code: `<table border="1">\n  <tr>\n    <th rowspan="2">Пользователь</th>\n    <td>Имя</td>\n  </tr>\n  <tr>\n    <td>Анна</td>\n  </tr>\n</table>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по использованию таблиц:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте таблицы только для отображения табличных данных, а не для верстки макетов.</li>
          <li>Добавляйте атрибут <code>border="1"</code> для отладки или используйте CSS для стилизации.</li>
          <li>Всегда используйте <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> и <code>&lt;tfoot&gt;</code> для семантической разметки.</li>
          <li>Не злоупотребляйте объединением ячеек — это может усложнить восприятие данных.</li>
        </ul>
      `
    }
  ],
  task: "Создайте таблицу с расписанием занятий на неделю. Добавьте заголовки дней недели и пары. Используйте colspan или rowspan.",
  exampleAnswer: `<table border="1">\n  <thead>\n    <tr>\n      <th colspan="2">Расписание на понедельник</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>9:00 - 10:30</td>\n      <td>Математика</td>\n    </tr>\n    <tr>\n      <td>11:00 - 12:30</td>\n      <td>Физика</td>\n    </tr>\n  </tbody>\n</table>`
};