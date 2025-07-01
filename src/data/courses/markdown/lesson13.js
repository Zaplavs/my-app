export default {
  id: 34,
  title: "Диаграммы и графики (Mermaid)",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Markdown позволяет не только оформлять текст, но и строить <strong>диаграммы</strong> и <strong>графики</strong>. Одним из популярных инструментов для этого является <strong>Mermaid.js</strong>.
        </p>
        <p>
          Mermaid — это библиотека JavaScript, которая рисует диаграммы на основе текстового описания. Она поддерживается во многих редакторах Markdown, таких как VS Code, Obsidian, Typora и GitHub (с расширениями).
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
          <li>Что такое Mermaid и зачем он нужен.</li>
          <li>Как добавлять диаграммы в Markdown.</li>
          <li>Как использовать основные типы диаграмм: flowchart, graph TD/RL, sequenceDiagram и другие.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Синтаксис Mermaid в Markdown</h3>
        <p>
          Диаграммы Mermaid добавляются как обычные кодовые блоки с указанием языка <code>mermaid</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: "```mermaid\ngraph TD\n  A[Начало] --> B[Процесс]\n  B --> C[Конец]\n```"
    },
    {
      type: 'text',
      text: `
        <p>
          Этот код будет преобразован в визуальную диаграмму в поддерживающих его редакторах.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Типы диаграмм в Mermaid</h3>
        <p>
          Mermaid поддерживает множество типов диаграмм. Вот самые популярные:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <table class="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th class="border border-gray-300 px-4 py-2">Тип диаграммы</th>
              <th class="border border-gray-300 px-4 py-2">Описание</th>
              <th class="border border-gray-300 px-4 py-2">Пример использования</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2"><code>graph TD / LR</code></td>
              <td class="border border-gray-300 px-4 py-2">Блок-схема сверху вниз или слева направо</td>
              <td class="border border-gray-300 px-4 py-2"><code>graph TD<br>A --> B</code></td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2"><code>flowchart</code></td>
              <td class="border border-gray-300 px-4 py-2">Расширенная версия graph</td>
              <td class="border border-gray-300 px-4 py-2"><code>flowchart LR<br>A --> B</code></td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2"><code>sequenceDiagram</code></td>
              <td class="border border-gray-300 px-4 py-2">Диаграмма последовательности действий</td>
              <td class="border border-gray-300 px-4 py-2"><code>sequenceDiagram<br>user ->> server: запрос</code></td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2"><code>classDiagram</code></td>
              <td class="border border-gray-300 px-4 py-2">UML-диаграмма классов</td>
              <td class="border border-gray-300 px-4 py-2"><code>classDiagram<br>ClassA --|> ClassB</code></td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2"><code>pie</code></td>
              <td class="border border-gray-300 px-4 py-2">Круговая диаграмма</td>
              <td class="border border-gray-300 px-4 py-2"><code>pie<br>title Распределение задач<br>\"Завершено\" : 60</code></td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Примеры диаграмм</h3>
        <p>
          Рассмотрим несколько примеров, чтобы понять, как работать с Mermaid.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">1. Блок-схема (graph)</h4>
      `
    },
    {
      type: 'code',
      code: "```mermaid\ngraph TD\n  A[Старт] --> B[Подготовка данных]\n  B --> C{Проверка}\n  C -->|OK| D[Обработка]\n  C -->|Ошибка| E[Логирование ошибки]\n  D --> F[Финал]\n```"
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">2. Диаграмма последовательности (sequenceDiagram)</h4>
      `
    },
    {
      type: 'code',
      code: "```mermaid\nsequenceDiagram\n  пользователь ->> сервер: Запрос данных\n  сервер -->> база_данных: Поиск\n  база_данных -->> сервер: Ответ\n  сервер -->> пользователь: Показ данных\n```"
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">3. Круговая диаграмма (pie)</h4>
      `
    },
    {
      type: 'code',
      code: "```mermaid\npie\n  title Статус задач\n  \"Завершено\" : 70\n  \"В процессе\" : 20\n  \"Не начато\" : 10\n```"
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практические советы</h3>
        <p>
          Вот несколько рекомендаций:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Используйте Mermaid для создания схем, если нет возможности прикрепить картинку.</li>
          <li>Пишите комментарии в коде, если диаграмма большая и сложная.</li>
          <li>Тестируйте внешний вид диаграммы в вашем редакторе.</li>
          <li>Изучите документацию Mermaid для продвинутых возможностей: стили, цвета, подграфы.</li>
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
          <li>Что такое Mermaid и как он используется в Markdown.</li>
          <li>Как вставлять различные типы диаграмм в свои документы.</li>
          <li>Как строить простые схемы, графики и диаграммы последовательностей.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          В следующем уроке вас ждёт финальное практическое задание — написание полноценного документа, объединяющего всё, что вы изучили: заголовки, списки, таблицы, формулы, ссылки, изображения и даже диаграммы!
        </p>
      `
    }
  ],
  task: "Создайте документ с диаграммой, описывающей процесс выполнения проекта или алгоритм решения задачи. Используйте один из типов Mermaid: graph, flowchart или sequenceDiagram.",
  exampleAnswer: "# Процесс разработки сайта\n\n## Этапы работы\n\n```mermaid\ngraph TD\n  A[Планирование] --> B[Макет]\n  B --> C[Верстка]\n  C --> D[Backend]\n  D --> E[Тестирование]\n  E --> F[Релиз]\n```\n\nЭта схема показывает этапы разработки веб-сайта."
};