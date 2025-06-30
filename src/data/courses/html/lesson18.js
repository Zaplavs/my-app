export default {
  id: 18,
  title: "Итоговый проект: одностраничный сайт",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Пришло время применить все полученные знания на практике! Вы создадите <strong>одностраничный сайт</strong> — например, лендинг компании или страницу портфолио.
        </p>
        <p class="mt-2">
          Этот проект поможет вам закрепить:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Работу с семантическими тегами (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>).</li>
          <li>Вставку изображений и видео.</li>
          <li>Создание таблиц и списков.</li>
          <li>Добавление форм для обратной связи.</li>
          <li>Работу с гиперссылками и якорями.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Тема проекта:</h3>
        <p>
          Представьте, что вы делаете сайт для <strong>веб-студии</strong>, которая занимается дизайном и разработкой сайтов.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что должно быть на сайте:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Шапка сайта (header)</strong>: логотип, меню навигации.</li>
          <li><strong>Приветственная секция (hero section)</strong>: описание студии, призыв к действию.</li>
          <li><strong>О нас (about)</strong>: информация о команде, возможно — таблица услуг.</li>
          <li><strong>Портфолио (portfolio)</strong>: примеры работ, можно добавить изображения.</li>
          <li><strong>Контакты (contact)</strong>: форма обратной связи, карта (через iframe).</li>
          <li><strong>Подвал (footer)</strong>: контакты, ссылки, авторство.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример структуры HTML:</h3>
      `
    },
    {
      type: 'code',
      code: `<!DOCTYPE html>\n<html lang="ru">\n<head>\n  <meta charset="UTF-8">\n  <title>WebStudio</title>\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <meta name="description" content="Веб-студия, занимающаяся дизайном и разработкой сайтов">\n</head>\n<body>\n\n  <header>\n    <h1>WebStudio</h1>\n    <nav>\n      <a href="#about">О нас</a>\n      <a href="#services">Услуги</a>\n      <a href="#contact">Контакты</a>\n    </nav>\n  </header>\n\n  <main>\n\n    <section id="about">\n      <h2>О нас</h2>\n      <p>Мы создаём современные и удобные веб-сайты для бизнеса и частных клиентов.</p>\n\n      <h3>Наши услуги</h3>\n      <table border="1">\n        <tr>\n          <th>Услуга</th>\n          <th>Цена</th>\n        </tr>\n        <tr>\n          <td>Дизайн сайта</td>\n          <td>от 20 000 ₽</td>\n        </tr>\n        <tr>\n          <td>Верстка сайта</td>\n          <td>от 15 000 ₽</td>\n        </tr>\n      </table>\n    </section>\n\n    <section id="services">\n      <h2>Наши работы</h2>\n      <img src="project1.jpg" alt="Проект 1">\n      <img src="project2.jpg" alt="Проект 2">\n    </section>\n\n    <section id="contact">\n      <h2>Свяжитесь с нами</h2>\n      <form action="/send" method="post">\n        <label>Имя:\n          <input type="text" name="name" required>\n        </label><br><br>\n\n        <label>Email:\n          <input type="email" name="email" required>\n        </label><br><br>\n\n        <label>Сообщение:\n          <textarea name="message"></textarea>\n        </label><br><br>\n\n        <button type="submit">Отправить</button>\n      </form>\n\n      <h3>Как нас найти</h3>\n      <iframe \n        src="https://maps.google.com/maps?q=Москва&t=&z=13&ie=UTF8&iwloc=&output=embed"\n        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">\n      </iframe>\n    </section>\n\n  </main>\n\n  <footer>\n    <p>© 2025 WebStudio. Все права защищены.</p>\n    <p><a href="tel:+79001234567">+7 (900) 123-45-67</a></p>\n  </footer>\n\n</body>\n</html>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы по выполнению:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте <code>&lt;section&gt;</code> и <code>&lt;article&gt;</code> для структурирования контента.</li>
          <li>Добавьте <code>alt</code>-описания ко всем изображениям.</li>
          <li>Проверьте доступность форм и кнопок.</li>
          <li>Используйте якорные ссылки для навигации по странице.</li>
          <li>Убедитесь, что сайт корректно отображается на разных устройствах.</li>
        </ul>
      `
    }
  ],
  task: "Создайте полноценный одностраничный сайт компании или портфолио. Используйте минимум 3 раздела, форму обратной связи, таблицу, изображения и iframe.",
  exampleAnswer: `<!-- Пример минимального ответа -->\n<header>\n  <h1>Мое Портфолио</h1>\n  <nav>\n    <a href="#projects">Проекты</a>\n    <a href="#contact">Контакты</a>\n  </nav>\n</header>\n<main>\n  <section id="projects">\n    <h2>Мои проекты</h2>\n    <img src="project1.jpg" alt="Личный блог">\n    <img src="project2.jpg" alt="Интернет-магазин">\n  </section>\n\n  <section id="contact">\n    <h2>Связаться со мной</h2>\n    <form action="/send" method="post">\n      <label>Email:\n        <input type="email" name="email" required>\n      </label><br><br>\n      <label>Сообщение:\n        <textarea name="message"></textarea>\n      </label><br><br>\n      <button type="submit">Отправить</button>\n    </form>\n    <iframe src="https://example-map.com/embed" width="600" height="450"></iframe>\n  </section>\n</main>\n<footer>\n  <p>© 2025 Все права защищены</p>\n</footer>`
};