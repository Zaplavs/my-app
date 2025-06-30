export default {
  id: 13,
  title: "Формы и кнопки",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Формы — важная часть интерфейса сайта. Правильно стилизованные поля ввода и кнопки делают сайт более привлекательным и удобным для пользователя.
          В этом уроке вы научитесь красиво оформлять формы и добавлять плавные переходы между состояниями.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Стандартные элементы формы</h3>
        <p>
          Основные HTML-элементы форм:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;input&gt;</code> — текстовые поля, пароли, чекбоксы, радио-кнопки;</li>
          <li><code>&lt;textarea&gt;</code> — многострочное поле ввода;</li>
          <li><code>&lt;select&gt;</code> — выпадающий список;</li>
          <li><code>&lt;button&gt;</code> — кнопки.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Стилизация полей ввода</h3>
        <p>
          Простое, но приятное поле ввода можно создать так:
        </p>
      `
    },
    {
      type: 'code',
      code: `input[type="text"],\ntextarea {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 15px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n  transition: border-color 0.3s, box-shadow 0.3s;\n}\n\ninput:focus,\ntextarea:focus {\n  border-color: #007bff;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Красивые кнопки</h3>
        <p>
          Базовая стильная кнопка:
        </p>
      `
    },
    {
      type: 'code',
      code: `.btn {\n  display: inline-block;\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: white;\n  text-decoration: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background-color: #0056b3;\n  transform: scale(1.05);\n}\n.btn:active {\n  transform: scale(0.98);\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. Стилизация чекбоксов и радио-кнопок</h3>
        <p>
          Стандартные чекбоксы и радио-кнопки сложно стилизовать напрямую, но их можно скрыть и заменить кастомными элементами.
        </p>
      `
    },
    {
      type: 'code',
      code: `.checkbox-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.checkbox-wrapper input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.checkmark {\n  height: 20px;\n  width: 20px;\n  background-color: #eee;\n  border-radius: 4px;\n  position: relative;\n  transition: background-color 0.3s;\n}\n\n.checkbox-wrapper input:checked ~ .checkmark {\n  background-color: #007bff;\n}\n\n.checkmark:after {\n  content: "";\n  position: absolute;\n  display: none;\n}\n\n.checkbox-wrapper input:checked ~ .checkmark:after {\n  display: block;\n  left: 7px;\n  top: 3px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">HTML для кастомного чекбокса</h3>
      `
    },
    {
      type: 'code',
      code: `<label class="checkbox-wrapper">\n  <input type="checkbox">\n  <span class="checkmark"></span>\n  Я согласен с условиями\n</label>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">5. Анимация при изменении состояний</h3>
        <p>
          CSS-переходы (transitions) делают форму более живой:
        </p>
      `
    },
    {
      type: 'code',
      code: `input, textarea, .btn {\n  transition: all 0.3s ease;\n}\n\ninput:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.2);\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">6. Доступность</h3>
        <p>
          При стилизации форм важно не забывать про пользователей, использующих клавиатуру или скринридеры:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Всегда используйте тег <code>&lt;label&gt;</code> с атрибутом <code>for</code>;</li>
          <li>Не отключайте <code>:focus</code> — он важен для навигации;</li>
          <li>Добавляйте подсказки и ошибки в виде текста;</li>
          <li>Используйте контрастные цвета.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример формы</h3>
        <p>
          Вот как может выглядеть простая, но стилизованная форма:
        </p>
      `
    },
    {
      type: 'code',
      code: `.form-group {\n  margin-bottom: 20px;\n}\ninput[type="text"],\ninput[type="email"],\ntextarea {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  transition: border-color 0.3s;\n}\ninput:focus,\ntextarea:focus {\n  border-color: #007bff;\n  outline: none;\n}\n.btn {\n  padding: 10px 20px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.btn:hover {\n  background-color: #218838;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Тестируйте формы на мобильных устройствах — поля должны быть удобны для ввода;</li>
          <li>Делайте кнопки достаточно большими для клика;</li>
          <li>Добавляйте обратную связь при успешной отправке или ошибках;</li>
          <li>Используйте CSS-переменные для управления цветами и размерами;</li>
          <li>Скрывайте стандартные элементы через <code>opacity: 0</code>, а не <code>display: none</code>, чтобы сохранить доступность.</li>
        </ul>
      `
    }
  ],
  task: "Создайте контактную форму с полями: имя, email, сообщение, согласие на обработку данных. Добавьте стиль для всех элементов и анимацию при фокусе.",
  exampleAnswer: "/* CSS */\n.form-group {\n  margin-bottom: 15px;\n}\ninput, textarea {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  transition: border-color 0.3s;\n}\ninput:focus, textarea:focus {\n  border-color: #007bff;\n  outline: none;\n}\n.checkbox-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.checkbox-wrapper input {\n  opacity: 0;\n  position: absolute;\n}\n.checkmark {\n  height: 20px;\n  width: 20px;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  position: relative;\n  cursor: pointer;\n}\n.checkbox-wrapper input:checked + .checkmark {\n  background-color: #007bff;\n}\n.checkmark:after {\n  content: '';\n  position: absolute;\n  display: none;\n  left: 7px;\n  top: 3px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.checkbox-wrapper input:checked + .checkmark:after {\n  display: block;\n}\n.btn {\n  padding: 10px 20px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.btn:hover {\n  background-color: #218838;\n}\n\n<!-- HTML -->\n<form action=\"#\">\n  <div class=\"form-group\">\n    <label>Имя\n      <input type=\"text\" required>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>Email\n      <input type=\"email\" required>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>Сообщение\n      <textarea rows=\"4\"></textarea>\n    </label>\n  </div>\n  <label class=\"checkbox-wrapper\">\n    <input type=\"checkbox\" required>\n    <span class=\"checkmark\"></span>\n    Я согласен с политикой конфиденциальности\n  </label>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn\">Отправить</button>\n  </div>\n</form>"
};