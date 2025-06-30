export default {
  id: 8,
  title: "Формы: ввод данных",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Формы позволяют пользователям вводить данные на веб-странице: логины, пароли, адреса, комментарии и т.д. 
          В HTML формы создаются с помощью тега <code>&lt;form&gt;</code>, а внутри неё размещаются различные поля ввода.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовый синтаксис формы:</h3>
      `
    },
    {
      type: 'code',
      code: `<form action="/submit" method="post">\n  <!-- Поля формы -->\n  <input type="text" name="username" placeholder="Имя пользователя">\n  <input type="password" name="password" placeholder="Пароль">\n  <button type="submit">Отправить</button>\n</form>`
    },
    {
      type: 'text',
      text: `
        <p class="mt-2">
          Объяснение основных атрибутов:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>action</code> — URL, куда отправляются данные формы.</li>
          <li><code>method</code> — способ отправки: <code>GET</code> или <code>POST</code>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Основные элементы формы:</h3>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;input&gt;</code> — однострочное поле ввода (текст, пароль, email и др.).</li>
          <li><code>&lt;textarea&gt;</code> — многострочное текстовое поле.</li>
          <li><code>&lt;select&gt;</code> + <code>&lt;option&gt;</code> — выпадающий список.</li>
          <li><code>&lt;button&gt;</code> — кнопка отправки формы или другого действия.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Типы поля &lt;input&gt;:</h3>
        <p>
          Атрибут <code>type</code> определяет тип поля ввода:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>text</code> — обычный текст (<code>&lt;input type="text"&gt;</code>)</li>
          <li><code>password</code> — скрытое поле для пароля</li>
          <li><code>email</code> — проверяет корректность email</li>
          <li><code>number</code> — только числа</li>
          <li><code>checkbox</code> — флажок (можно выбрать несколько вариантов)</li>
          <li><code>radio</code> — радиокнопка (выбор одного из нескольких)</li>
          <li><code>file</code> — загрузка файла</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Примеры полей ввода:</h3>
      `
    },
    {
      type: 'code',
      code: `<label>Имя:\n  <input type="text" name="name" required>\n</label>\n\n<label>Email:\n  <input type="email" name="email" required>\n</label>\n\n<label>Пароль:\n  <input type="password" name="password" required>\n</label>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Многострочный ввод: &lt;textarea&gt;</h3>
      `
    },
    {
      type: 'code',
      code: `<label>Сообщение:\n  <textarea name="message" rows="4" placeholder="Введите ваше сообщение"></textarea>\n</label>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Выпадающий список: &lt;select&gt;</h3>
      `
    },
    {
      type: 'code',
      code: `<label>Выберите цвет:\n  <select name="color">\n    <option value="red">Красный</option>\n    <option value="green">Зеленый</option>\n    <option value="blue">Синий</option>\n  </select>\n</label>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Радиокнопки и чекбоксы:</h3>
      `
    },
    {
      type: 'code',
      code: `<p>Пол:</p>\n<label><input type="radio" name="gender" value="male"> Мужской</label>\n<label><input type="radio" name="gender" value="female"> Женский</label>\n\n<p>Хобби:</p>\n<label><input type="checkbox" name="hobby" value="sports"> Спорт</label>\n<label><input type="checkbox" name="hobby" value="music"> Музыка</label>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Атрибуты важные для форм:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>required</code> — обязательное поле для заполнения.</li>
          <li><code>placeholder</code> — подсказка внутри поля.</li>
          <li><code>disabled</code> — отключает поле.</li>
          <li><code>readonly</code> — делает поле доступным только для чтения.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по использованию форм:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Обязательно используйте тег <code>&lt;label&gt;</code> для каждого поля — это важно для доступности.</li>
          <li>Добавляйте атрибут <code>required</code> к обязательным полям.</li>
          <li>Тестируйте формы перед публикацией сайта.</li>
          <li>Для сложной валидации используйте JavaScript или сторонние библиотеки.</li>
        </ul>
      `
    }
  ],
  task: "Создайте форму регистрации с полями: имя, email, пароль, пол (радиокнопки), хобби (чекбоксы), страна проживания (выпадающий список).",
  exampleAnswer: `<form action="/register" method="post">\n  <label>Имя:\n    <input type="text" name="name" required>\n  </label>\n  <br><br>\n\n  <label>Email:\n    <input type="email" name="email" required>\n  </label>\n  <br><br>\n\n  <label>Пароль:\n    <input type="password" name="password" required>\n  </label>\n  <br><br>\n\n  <p>Пол:</p>\n  <label><input type="radio" name="gender" value="male"> Мужской</label>\n  <label><input type="radio" name="gender" value="female"> Женский</label>\n  <br><br>\n\n  <p>Хобби:</p>\n  <label><input type="checkbox" name="hobbies[]" value="sports"> Спорт</label>\n  <label><input type="checkbox" name="hobbies[]" value="music"> Музыка</label>\n  <label><input type="checkbox" name="hobbies[]" value="reading"> Чтение</label>\n  <br><br>\n\n  <label>Страна:\n    <select name="country">\n      <option value="ru">Россия</option>\n      <option value="ua">Украина</option>\n      <option value="kz">Казахстан</option>\n    </select>\n  </label>\n  <br><br>\n\n  <button type="submit">Зарегистрироваться</button>\n</form>`
};