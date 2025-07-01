export default {
  id: 22,
  title: "Введение в Markdown",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          <strong>Markdown</strong> — это простой язык разметки, который позволяет оформлять текст с минимальным количеством специальных символов. Он идеально подходит для написания документации, README-файлов, заметок и публикаций.
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
          <li>Что такое Markdown и зачем он был создан.</li>
          <li>Историю появления Markdown.</li>
          <li>Какие преимущества у Markdown по сравнению с HTML и другими языками разметки.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое Markdown?</h3>
        <p>
          Markdown — это легковесный язык разметки, разработанный для удобного форматирования текста без сложных тегов. Текст, написанный на Markdown, легко читается в исходном виде и может быть преобразован в HTML и другие форматы.
        </p>
        <p>
          Основная цель Markdown — сделать разметку максимально понятной и читаемой человеку.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">История создания</h3>
        <p>
          Markdown был создан в 2004 году программистами <strong>Джоном Грубером (John Gruber)</strong> и <strong>Аароном Свартцом (Aaron Swartz)</strong>. Они хотели разработать такой способ форматирования текста, который будет:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Простым для чтения и написания.</li>
          <li>Полностью совместимым с HTML.</li>
          <li>Не требующим изучения множества тегов.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          С тех пор Markdown стал популярным и получил множество расширений и диалектов, таких как CommonMark, GitHub Flavored Markdown (GFM), и другие.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Преимущества Markdown перед HTML</h3>
        <p>
          Хотя Markdown можно преобразовать в HTML, его основное преимущество — это <strong>простота</strong>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <table class="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr class="">
              <th class="border border-gray-300 px-4 py-2">Сравнение</th>
              <th class="border border-gray-300 px-4 py-2">HTML</th>
              <th class="border border-gray-300 px-4 py-2">Markdown</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Заголовок</td>
              <td class="border border-gray-300 px-4 py-2"><code>&lt;h1&gt;Заголовок&lt;/h1&gt;</code></td>
              <td class="border border-gray-300 px-4 py-2"><code># Заголовок</code></td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Список</td>
              <td class="border border-gray-300 px-4 py-2">
                <code>
                  &lt;ul&gt;<br>
                    &nbsp;&lt;li&gt;Элемент 1&lt;/li&gt;<br>
                    &nbsp;&lt;li&gt;Элемент 2&lt;/li&gt;<br>
                  &lt;/ul&gt;
                </code>
              </td>
              <td class="border border-gray-300 px-4 py-2">
                <code>
                  - Элемент 1<br>
                  - Элемент 2
                </code>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Выделение текста</td>
              <td class="border border-gray-300 px-4 py-2"><code>&lt;strong&gt;Жирный&lt;/strong&gt;</code></td>
              <td class="border border-gray-300 px-4 py-2"><code>**Жирный**</code></td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Почему Markdown так популярен?</h3>
        <p>
          Вот несколько причин, почему Markdown стал таким популярным:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Читаемость:</strong> даже необработанный текст легко понять.</li>
          <li><strong>Универсальность:</strong> работает везде, где есть поддержка текстовых файлов.</li>
          <li><strong>Поддержка в IDE и редакторах:</strong> VS Code, Notion, Obsidian, Typora и многие другие поддерживают Markdown.</li>
          <li><strong>Интеграция:</strong> активно используется в GitHub, GitLab, Jupyter Notebooks, Readme-файлах и документации.</li>
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
          <li>Что такое Markdown и зачем он нужен.</li>
          <li>Кто создал Markdown и какова история его появления.</li>
          <li>Какие преимущества дает использование Markdown по сравнению с HTML и другими языками разметки.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          В следующем уроке вы научитесь писать свои первые документы на Markdown: работать с заголовками, списками, ссылками и другими базовыми элементами.
        </p>
      `
    }
  ],
  task: "Напишите короткий текст о себе с использованием базовой разметки Markdown.",
  exampleAnswer: "# Обо мне\n\nМеня зовут Алексей.\n\n## Опыт работы\n- Разработка на Python\n- Изучение Git и GitHub\n- Создание документации\n\n## Контакты\nEmail: [alex@example.com](mailto:alex@example.com)"
};