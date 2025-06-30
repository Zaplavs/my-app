export default {
  id: 13,
  title: "Анимации и переходы",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          CSS позволяет создавать плавные анимации и эффекты без использования JavaScript. Это улучшает пользовательский опыт и делает интерфейс более живым.
          В этом уроке вы узнаете о двух основных инструментах:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>transition</code> — для плавного изменения свойств;</li>
          <li><code>@keyframes</code> + <code>animation</code> — для сложных анимаций.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Transition: плавные переходы</h3>
        <p>
          Свойство <code>transition</code> позволяет указать, какие свойства элемента должны изменяться с анимацией и как быстро это должно происходить.
        </p>
      `
    },
    {
      type: 'code',
      code: `.box {\n  width: 100px;\n  height: 100px;\n  background-color: #007BFF;\n  transition: background-color 0.3s ease, width 0.5s ease;\n}\n\n.box:hover {\n  background-color: #ffc107;\n  width: 150px;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Основные параметры <code>transition</code>:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>property</code> — какое свойство анимировать (например, <code>width</code>, <code>background-color</code>);</li>
          <li><code>duration</code> — длительность анимации (в секундах или миллисекундах);</li>
          <li><code>timing-function</code> — тип ускорения (например, <code>linear</code>, <code>ease</code>, <code>ease-in-out</code>);</li>
          <li><code>delay</code> — задержка перед началом анимации (необязательно).</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `.btn {\n  padding: 10px 20px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background-color: #218838;\n  transform: scale(1.05);\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Animation: ключевые кадры</h3>
        <p>
          Для более сложных анимаций используется пара <code>@keyframes</code> и <code>animation</code>. Сначала создаются ключевые кадры (<code>@keyframes</code>), затем они применяются к элементу.
        </p>
      `
    },
    {
      type: 'code',
      code: `@keyframes bounce {\n  0%   { transform: translateY(0); }\n  50%  { transform: translateY(-20px); }\n  100% { transform: translateY(0); }\n}\n\n.bounce-btn {\n  animation: bounce 1s infinite;\n}`
    },
    {
      type: 'text',
      text: `
        <p>
          Параметры <code>animation</code>:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>name</code> — имя анимации из <code>@keyframes</code>;</li>
          <li><code>duration</code> — длительность;</li>
          <li><code>timing-function</code> — функция ускорения;</li>
          <li><code>delay</code> — задержка;</li>
          <li><code>iteration-count</code> — количество повторений (например, <code>infinite</code>);</li>
          <li><code>direction</code> — направление (например, <code>normal</code>, <code>reverse</code>, <code>alternate</code>).</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `@keyframes spin {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n\n.loader {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #007bff;\n  border-top: 4px solid transparent;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Пример использования</h3>
        <p>
          Создадим кнопку с плавной анимацией при наведении и спиннер загрузки:
        </p>
      `
    },
    {
      type: 'code',
      code: `/* Кнопка с hover */\n.btn {\n  padding: 12px 24px;\n  background-color: #dc3545;\n  color: white;\n  border: none;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.btn:hover {\n  background-color: #c82333;\n  transform: scale(1.05);\n}\n\n/* Спиннер */\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n.loader {\n  width: 30px;\n  height: 30px;\n  border: 4px solid #28a745;\n  border-top: 4px solid transparent;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте <code>transition</code> для простых состояний: hover, focus, active;</li>
          <li>Не анимируйте все подряд — фокусируйтесь на важных частях интерфейса;</li>
          <li>Для производительности лучше анимировать <code>opacity</code> и <code>transform</code>;</li>
          <li>Тестируйте анимации на мобильных устройствах — не все браузеры одинаково их поддерживают;</li>
          <li>Добавляйте анимации аккуратно — чрезмерное использование может отвлекать пользователя.</li>
        </ul>
      `
    }
  ],
  task: "Создайте кнопку с эффектом загрузки (спиннер) и добавьте анимацию появления/исчезновения через transition.",
  exampleAnswer: "/* CSS */\n.btn {\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background-color: #0056b3;\n  transform: scale(1.05);\n}\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n.spinner {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 3px solid #fff;\n  border-top: 3px solid transparent;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-left: 10px;\n}\n\n<!-- HTML -->\n<button class=\"btn\">\n  Загрузка <span class=\"spinner\"></span>\n</button>"
};