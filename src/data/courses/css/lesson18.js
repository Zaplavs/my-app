export default {
  id: 15,
  title: "Итоговый проект: адаптивный лендинг",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Теперь пришло время объединить всё, что вы узнали о HTML и CSS, чтобы создать полностью <strong>адаптивный одностраничный сайт (лендинг)</strong>.
        </p>
        <p>
          Вы научитесь:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Создавать структуру страницы с помощью Flexbox и Grid;</li>
          <li>Делать дизайн отзывчивым под разные устройства;</li>
          <li>Добавлять плавные анимации и переходы;</li>
          <li>Организовывать код по методологии BEM.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Структура лендинга</h3>
        <p>
          Обычно лендинг состоит из следующих секций:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>&lt;header&gt;</code> — шапка сайта с навигацией;</li>
          <li><code>&lt;section class=\"hero\"&gt;</code> — приветственная секция;</li>
          <li><code>&lt;section class=\"features\"&gt;</code> — преимущества продукта;</li>
          <li><code>&lt;section class=\"about\"&gt;</code> — информация о команде или компании;</li>
          <li><code>&lt;footer&gt;</code> — подвал с контактами.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Верстка макета</h3>
        <p>
          Используем <code>Flexbox</code> для навигационного меню и <code>CSS Grid</code> для секции с преимуществами.
        </p>
      `
    },
    {
      type: 'code',
      code: `/* HTML */\n<header class=\"header\">\n  <div class=\"logo\">MySite</div>\n  <nav class=\"nav\">\n    <a href=\"#\" class=\"nav__link\">Главная</a>\n    <a href=\"#\" class=\"nav__link\">О нас</a>\n    <a href=\"#\" class=\"nav__link\">Контакты</a>\n  </nav>\n</header>`
    },
    {
      type: 'code',
      code: `/* CSS */\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background-color: #333;\n  color: white;\n}\n.nav {\n  display: flex;\n  gap: 20px;\n}\n.nav__link {\n  color: white;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.nav__link:hover {\n  color: #007bff;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Hero-секция</h3>
        <p>
          Эта секция обычно содержит заголовок, описание и кнопку.
        </p>
      `
    },
    {
      type: 'code',
      code: `<section class=\"hero\">\n  <h1 class=\"hero__title\">Простой и красивый лендинг</h1>\n  <p class=\"hero__description\">Создан с использованием современных технологий</p>\n  <a href=\"#\" class=\"btn btn--primary\">Начать</a>\n</section>`
    },
    {
      type: 'code',
      code: `.hero {\n  text-align: center;\n  padding: 100px 20px;\n  background-color: #f8f9fa;\n}\n.hero__title {\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n}\n.hero__description {\n  font-size: 1.2rem;\n  margin-bottom: 30px;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: bold;\n  transition: all 0.3s;\n}\n.btn--primary {\n  background-color: #007bff;\n  color: white;\n}\n.btn--primary:hover {\n  background-color: #0056b3;\n  transform: scale(1.05);\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. Адаптивность с медиазапросами</h3>
        <p>
          Добавим медиазапросы, чтобы сайт корректно отображался на мобильных устройствах.
        </p>
      `
    },
    {
      type: 'code',
      code: `@media (max-width: 768px) {\n  .nav {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .hero__title {\n    font-size: 2rem;\n  }\n  .hero__description {\n    font-size: 1rem;\n  }\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">5. Анимация появления элементов</h3>
        <p>
          Добавим простую анимацию появления текста при загрузке страницы.
        </p>
      `
    },
    {
      type: 'code',
      code: `@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero__title,\n.hero__description {\n  animation: fadeInUp 1s ease-out forwards;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">6. Пример структуры файла</h3>
        <p>
          Вот как может выглядеть ваш финальный файл стилей:
        </p>
      `
    },
    {
      type: 'code',
      code: `/* Base styles */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: Arial, sans-serif;\n  line-height: 1.6;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n/* Header */\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background-color: #333;\n  color: white;\n}\n.nav {\n  display: flex;\n  gap: 20px;\n}\n.nav__link {\n  color: white;\n  transition: color 0.3s;\n}\n.nav__link:hover {\n  color: #007bff;\n}\n\n/* Hero */\n.hero {\n  text-align: center;\n  padding: 100px 20px;\n  background-color: #f8f9fa;\n}\n.hero__title {\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n}\n.hero__description {\n  font-size: 1.2rem;\n  margin-bottom: 30px;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: bold;\n  transition: all 0.3s;\n}\n.btn--primary {\n  background-color: #007bff;\n  color: white;\n}\n.btn--primary:hover {\n  background-color: #0056b3;\n  transform: scale(1.05);\n}\n\n/* Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero__title,\n.hero__description {\n  animation: fadeInUp 1s ease-out forwards;\n}\n\n/* Responsive */\n@media (max-width: 768px) {\n  .nav {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .hero__title {\n    font-size: 2rem;\n  }\n  .hero__description {\n    font-size: 1rem;\n  }\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Разбивайте стили на логические части;</li>
          <li>Используйте методологию BEM для читаемости классов;</li>
          <li>Тестируйте дизайн на разных устройствах;</li>
          <li>Не забывайте про доступность — используйте правильные теги и контрастность;</li>
          <li>Добавьте немного анимации для улучшения пользовательского опыта.</li>
        </ul>
      `
    }
  ],
  task: "Создайте адаптивный лендинг с навигацией, hero-секцией, секцией преимуществ, карточками и подвалом. Используйте Flexbox, Grid, медиазапросы и анимации.",
  exampleAnswer: "/* Полный пример в одном файле */\n<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Адаптивный Лендинг</title>\n  <style>\n    /* Base styles */\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; line-height: 1.6; }\n    a { text-decoration: none; color: inherit; }\n\n    /* Header */\n    .header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 20px;\n      background-color: #333;\n      color: white;\n    }\n    .nav {\n      display: flex;\n      gap: 20px;\n    }\n    .nav__link {\n      color: white;\n      transition: color 0.3s;\n    }\n    .nav__link:hover {\n      color: #007bff;\n    }\n\n    /* Hero */\n    .hero {\n      text-align: center;\n      padding: 100px 20px;\n      background-color: #f8f9fa;\n    }\n    .hero__title {\n      font-size: 2.5rem;\n      margin-bottom: 20px;\n    }\n    .hero__description {\n      font-size: 1.2rem;\n      margin-bottom: 30px;\n    }\n    .btn {\n      padding: 10px 20px;\n      border-radius: 4px;\n      text-decoration: none;\n      font-weight: bold;\n      transition: all 0.3s;\n    }\n    .btn--primary {\n      background-color: #007bff;\n      color: white;\n    }\n    .btn--primary:hover {\n      background-color: #0056b3;\n      transform: scale(1.05);\n    }\n\n    /* Animation */\n    @keyframes fadeInUp {\n      from { opacity: 0; transform: translateY(30px); }\n      to { opacity: 1; transform: translateY(0); }\n    }\n    .hero__title, .hero__description {\n      animation: fadeInUp 1s ease-out forwards;\n    }\n\n    /* Responsive */\n    @media (max-width: 768px) {\n      .nav {\n        flex-direction: column;\n        align-items: flex-start;\n      }\n      .hero__title {\n        font-size: 2rem;\n      }\n      .hero__description {\n        font-size: 1rem;\n      }\n    }\n  </style>\n</head>\n<body>\n  <header class=\"header\">\n    <div class=\"logo\">MySite</div>\n    <nav class=\"nav\">\n      <a href=\"#\" class=\"nav__link\">Главная</a>\n      <a href=\"#\" class=\"nav__link\">О нас</a>\n      <a href=\"#\" class=\"nav__link\">Контакты</a>\n    </nav>\n  </header>\n  <section class=\"hero\">\n    <h1 class=\"hero__title\">Простой и красивый лендинг</h1>\n    <p class=\"hero__description\">Создан с использованием современных технологий</p>\n    <a href=\"#\" class=\"btn btn--primary\">Начать</a>\n  </section>\n</body>\n</html>"
};