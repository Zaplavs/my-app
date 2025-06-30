export default {
  id: 9,
  title: "Формы: дополнительные элементы",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          В предыдущем уроке мы рассмотрели базовые элементы форм — текстовые поля, выпадающие списки и многострочные поля.
          Теперь углубимся в работу с более сложными элементами: чекбоксами, радио-кнопками и кнопками.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Чекбоксы: <code>&lt;input type="checkbox"&gt;</code></h3>
        <p>
          Чекбоксы позволяют пользователю выбрать несколько вариантов из списка. Каждый чекбокс независим от других.
        </p>
      `
    },
    {
      type: 'code',
      code: `<label><input type="checkbox" name="hobby" value="sports"> Спорт</label>\n<label><input type="checkbox" name="hobby" value="music"> Музыка</label>\n<label><input type="checkbox" name="hobby" value="reading"> Чтение</label>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Радио-кнопки: <code>&lt;input type="radio"&gt;</code></h3>
        <p>
          Радио-кнопки используются, когда нужно выбрать только один вариант из нескольких. Все радио-кнопки с одинаковым атрибутом <code>name</code> считаются частью одной группы.
        </p>
      `
    },
    {
      type: 'code',
      code: `<p>Выберите пол:</p>\n<label><input type="radio" name="gender" value="male"> Мужской</label>\n<label><input type="radio" name="gender" value="female"> Женский</label>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Кнопки: <code>&lt;button&gt;</code></h3>
        <p>
          Кнопки используются для отправки формы или выполнения какого-либо действия. Тег <code>&lt;button&gt;</code> позволяет создать кликабельную кнопку с текстом или даже HTML внутри.
        </p>
      `
    },
    {
      type: 'code',
      code: `<button type="submit">Отправить форму</button>\n<button type="reset">Очистить форму</button>\n<button type="button" onclick="alert('Привет!')">Нажми меня</button>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Полезные атрибуты форм:</h3>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>required</code> — делает поле обязательным для заполнения.</li>
          <li><code>placeholder</code> — подсказка внутри поля ввода (исчезает при вводе).</li>
          <li><code>disabled</code> — блокирует возможность взаимодействия с элементом.</li>
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
      code: `<label>Имя:\n  <input type="text" name="name" required placeholder="Введите ваше имя">\n</label>\n<br><br>\n\n<label><input type="checkbox" disabled> Я согласен с правилами</label>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по работе с формами:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Для лучшей доступности всегда используйте тег <code>&lt;label&gt;</code> вместе с полями.</li>
          <li>Группируйте связанные элементы с помощью заголовков или контейнеров.</li>
          <li>Тестирование форм перед публикацией сайта — важная часть разработки.</li>
          <li>Используйте CSS для улучшения внешнего вида форм.</li>
        </ul>
      `
    }
  ],
  task: "Создайте форму обратной связи с полями: имя (обязательное), email (с placeholder'ом), сообщение, чекбокс согласия с политикой конфиденциальности (обязательный) и кнопкой отправки.",
  exampleAnswer: `<form action="/feedback" method="post">\n  <label>Имя:\n    <input type="text" name="name" required>\n  </label>\n  <br><br>\n\n  <label>Email:\n    <input type="email" name="email" placeholder="example@mail.com">\n  </label>\n  <br><br>\n\n  <label>Сообщение:\n    <textarea name="message"></textarea>\n  </label>\n  <br><br>\n\n  <label>\n    <input type="checkbox" name="agreement" required>\n    Я согласен с политикой конфиденциальности\n  </label>\n  <br><br>\n\n  <button type="submit">Отправить</button>\n</form>`
};