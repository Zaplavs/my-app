export default {
  id: 11,
  title: "Цитаты, код, специальные символы",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          В HTML есть специальные теги для корректного отображения цитат, фрагментов кода и специальных символов.
          Использование этих элементов делает ваш контент более семантически точным и удобочитаемым как для людей, так и для поисковых систем.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Цитаты</h3>
        <p>
          Для оформления цитат в HTML используются следующие теги:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;blockquote&gt;</code> — используется для длинных цитат.</li>
          <li><code>&lt;q&gt;</code> — для коротких цитат внутри текста.</li>
          <li><code>&lt;cite&gt;</code> — указывает авторство или источник цитаты.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Примеры цитат:</h3>
      `
    },
    {
      type: 'code',
      code: `<!-- Длинная цитата -->\n<blockquote>\n  Знание — сила. Если вы будете продолжать учиться,\n  успех обязательно придёт.\n  <cite>Фрэнсис Бэкон</cite>\n</blockquote>\n\n<!-- Короткая цитата -->\n<p>Как говорил один мудрый человек: <q>Учись всю жизнь</q>.</p>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Отображение кода</h3>
        <p>
          Для вставки фрагментов кода в HTML используются следующие теги:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;code&gt;</code> — для кратких участков кода (например, переменные, функции).</li>
          <li><code>&lt;pre&gt;</code> — сохраняет пробелы и переносы строк, подходит для блоков кода.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Примеры использования:</h3>
      `
    },
    {
      type: 'code',
      code: `<p>Функция <code>alert()</code> выводит модальное окно в браузере.</p>\n\n<pre>\nfunction greet() {\n  console.log('Привет!');\n}\ngreet();\n</pre>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Работа с HTML-сущностями</h3>
        <p>
          Некоторые символы имеют особое значение в HTML и не могут быть использованы напрямую в тексте, например:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;</code> — меньше чем</li>
          <li><code>&gt;</code> — больше чем</li>
          <li><code>&amp;</code> — амперсанд</li>
        </ul>
        <p>
          Чтобы отобразить их как обычные символы, нужно использовать <strong>HTML-сущности</strong> — специальные обозначения, начинающиеся с <code>&amp;</code> и заканчивающиеся точкой с запятой.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Часто используемые HTML-сущности:</h3>
        <table border="1" class="border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th class="px-4 py-2">Символ</th>
              <th class="px-4 py-2">Сущность</th>
              <th class="px-4 py-2">Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">&lt;</td>
              <td class="px-4 py-2">&amp;lt;</td>
              <td class="px-4 py-2">Меньше чем</td>
            </tr>
            <tr>
              <td class="px-4 py-2">&gt;</td>
              <td class="px-4 py-2">&amp;gt;</td>
              <td class="px-4 py-2">Больше чем</td>
            </tr>
            <tr>
              <td class="px-4 py-2">&amp;</td>
              <td class="px-4 py-2">&amp;amp;</td>
              <td class="px-4 py-2">Амперсанд</td>
            </tr>
            <tr>
              <td class="px-4 py-2">©</td>
              <td class="px-4 py-2">&amp;copy;</td>
              <td class="px-4 py-2">Знак копирайта</td>
            </tr>
            <tr>
              <td class="px-4 py-2">®</td>
              <td class="px-4 py-2">&amp;reg;</td>
              <td class="px-4 py-2">Зарегистрированный товарный знак</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования сущностей:</h3>
      `
    },
    {
      type: 'code',
      code: `<p>Используйте &lt;p&gt; для создания параграфов.</p>\n<p>Для ссылок применяйте &lt;a href=&quot;#&quot;&gt;.</p>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Полезные советы:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте <code>&lt;blockquote&gt;</code> для цитирования внешних источников.</li>
          <li>Тег <code>&lt;cite&gt;</code> можно применять как для книг, так и для авторов цитат.</li>
          <li>Для отображения кода всегда оборачивайте его в <code>&lt;code&gt;</code> или <code>&lt;pre&gt;</code>.</li>
          <li>Не забывайте заменять символы <code><</code>, <code>></code>, <code>&</code> на соответствующие сущности при необходимости.</li>
        </ul>
      `
    }
  ],
  task: "Добавьте на страницу цитату из программиста, фрагмент кода и выведите символы <, >, &, используя HTML-сущности.",
  exampleAnswer: `<blockquote>\n  Программирование — это искусство решать проблемы с помощью логики и воображения.\n  <cite>Мартин Робертс</cite>\n</blockquote>\n\n<pre>\nfunction sum(a, b) {\n  return a + b;\n}\n</pre>\n\n<p>Используйте &lt; и &gt; вместо < и >. А также &amp; вместо &.</p>`
};