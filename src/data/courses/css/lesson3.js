// src/data/courses/html/lesson1.js

export default {
  id: 1,
  title: "Что такое HTML?",
  content: `
    <p>HTML — это язык разметки документов. Он используется для создания структуры веб-страниц.</p>
    <h3 class="font-bold mt-4 mb-2">Пример:</h3>
    <pre class="bg-gray-900 p-3 rounded text-sm text-yellow-300 mb-4 overflow-x-auto">
<!DOCTYPE html>
<html>
  <head>
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Здравствуйте, мир!</h1>
    <p>Это мой первый абзац.</p>
  </body>
</html>
    </pre>
  `,
  task: "Создайте простой HTML-документ с заголовком и абзацем.",
  exampleAnswer: "<h1>Привет</h1><p>Это мой первый сайт</p>",
};