export default {
  id: 33,
  title: "Математические формулы (LaTeX)",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Markdown поддерживает вставку математических формул с использованием синтаксиса LaTeX — это особенно полезно для научных работ, учебных материалов, технической документации и заметок.
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
          <li>Как вставлять математические формулы в Markdown.</li>
          <li>Чем отличаются инлайновые и блочные формулы.</li>
          <li>Как записывать дроби, степени, корни, интегралы и другие выражения на LaTeX.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Синтаксис LaTeX в Markdown</h3>
        <p>
          Поддержка LaTeX зависит от редактора или платформы. Многие современные редакторы (например, VS Code с расширением, Obsidian, Jupyter Notebook, GitHub с помощью MathJax) поддерживают вставку формул через двойные знаки доллара:
        </p>
      `
    },
    {
      type: 'code',
      code: "$$ формула $$"
    },
    {
      type: 'text',
      text: `
        <p>
          Это создаёт <strong>блочную формулу</strong>, которая будет отображаться на новой строке и центрированной.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Для <strong>инлайновых формул</strong> внутри текста часто используется один знак доллара:
        </p>
      `
    },
    {
      type: 'code',
      code: "Это формула в строке: $x = y + 2$."
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Примеры популярных формул</h3>
        <p>
          Вот несколько распространённых примеров математических выражений на LaTeX:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <table class="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th class="border border-gray-300 px-4 py-2">Описание</th>
              <th class="border border-gray-300 px-4 py-2">LaTeX-код</th>
              <th class="border border-gray-300 px-4 py-2">Результат</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Инлайновая формула</td>
              <td class="border border-gray-300 px-4 py-2"><code>$a^2 + b^2 = c^2$</code></td>
              <td class="border border-gray-300 px-4 py-2">$a^2 + b^2 = c^2$</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Квадратное уравнение</td>
              <td class="border border-gray-300 px-4 py-2"><code>$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$</code></td>
              <td class="border border-gray-300 px-4 py-2">$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Дробь</td>
              <td class="border border-gray-300 px-4 py-2"><code>$$\\frac{1}{n}$$</code></td>
              <td class="border border-gray-300 px-4 py-2">$$\frac{1}{n}$$</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Интеграл</td>
              <td class="border border-gray-300 px-4 py-2"><code>$$\\int_a^b f(x)dx$$</code></td>
              <td class="border border-gray-300 px-4 py-2">$$\int_a^b f(x)dx$$</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Сумма</td>
              <td class="border border-gray-300 px-4 py-2"><code>$$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$$</code></td>
              <td class="border border-gray-300 px-4 py-2">$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как писать сложные формулы</h3>
        <p>
          Чтобы создать свою собственную формулу, используйте специальные команды LaTeX:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>\\frac{}{}</code> — для дробей</li>
          <li><code>\\sqrt{}</code> — квадратный корень</li>
          <li><code>_</code> — нижний индекс</li>
          <li><code>^</code> — верхний индекс</li>
          <li><code>\\int</code> — интеграл</li>
          <li><code>\\sum</code> — сумма</li>
          <li><code>\\lim</code> — предел</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">Пример:</h4>
      `
    },
    {
      type: 'code',
      code: "$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$"
    },
    {
      type: 'text',
      text: `
        <p>
          Эта формула будет отображена как красиво оформленный предел.
        </p>
      `
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
          <li>Тестируйте формулы в вашем редакторе, чтобы убедиться в правильном отображении.</li>
          <li>Используйте онлайн-редакторы LaTeX (например, https://www.codecogs.com/latex/eqneditor.php ), чтобы строить сложные формулы.</li>
          <li>Не забывайте ставить двойной обратный слэш <code>\\</code> перед командами в строках.</li>
          <li>Пишите понятные комментарии при работе с длинными формулами.</li>
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
          <li>Как использовать LaTeX для записи математических формул в Markdown.</li>
          <li>Как отличить инлайновую формулу от блочной.</li>
          <li>Какие основные конструкции используются в LaTeX для дробей, степеней, корней и других выражений.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Следующий урок — финальный. Вы выполните практическое задание: напишете полноценный документ на Markdown, объединяющий всё, что изучили.
        </p>
      `
    }
  ],
  task: "Создайте документ с заголовком и несколькими разделами. Напишите минимум три математические формулы: одну инлайновую и две блочные. Пример: квадратное уравнение, его корни и график функции.",
  exampleAnswer: "# Математика в Markdown\n\n## Квадратное уравнение\n\nКвадратное уравнение имеет вид $ax^2 + bx + c = 0$.\n\nЕго корни находятся по формуле:\n\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\nЕсли дискриминант равен нулю, уравнение имеет один корень:\n\n$$x = \\frac{-b}{2a}$$\n\nГрафик квадратичной функции — парабола."
};