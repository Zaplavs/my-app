export default {
  id: 5,
  title: "Каскад и наследование",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Понимание <strong>каскада</strong> и <strong>наследования</strong> в CSS — ключ к написанию эффективных и легко поддерживаемых стилей. 
          Эти механизмы определяют, какой стиль будет применён к элементу, если есть несколько конфликтующих правил.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">1. Каскад (Cascading)</h3>
        <p>
          Слово «каскад» означает, что стили применяются в виде потока — от общего к частному. Браузер использует три фактора для определения, какое правило применить:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Исходное положение</strong> (user agent styles) — браузерные стили по умолчанию;</li>
          <li><strong>Пользовательские стили</strong> — стили, заданные пользователем (например, через расширения);</li>
          <li><strong>Авторские стили</strong> — ваши CSS-правила.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">2. Приоритетность источников стилей</h3>
        <p>
          В порядке возрастания приоритета:
        </p>
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Стили браузера (user agent styles);</li>
          <li>Пользовательские стили;</li>
          <li>Авторские стили (ваш CSS);</li>
          <li>Стили с <code>!important</code> — имеют самый высокий приоритет.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">3. Специфичность (Specificity)</h3>
        <p>
          Если несколько авторских правил совпадают по источникам, браузер выбирает наиболее <strong>специфичное</strong> правило.
        </p>
        <p>
          Каждому селектору присваивается числовой вес:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>Тег</code> → 0,0,1;</li>
          <li><code>.class</code> → 0,1,0;</li>
          <li><code>#id</code> → 1,0,0;</li>
          <li><code>style=""</code> (инлайновые стили) → 1,0,0, но без возможности переопределить через класс или ID в CSS;</li>
          <li><code>*</code> (универсальный селектор) → 0,0,0.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-2 mb-1">Пример:</h4>
        <code>&lt;p id="text" class="red"&gt;Текст&lt;/p&gt;</code>
        <p class="mt-2">
          Ниже — CSS, который применяется к этому элементу:
        </p>
      `
    },
    {
      type: 'code',
      code: `/* CSS */
.red { 
  color: red; 
  background-color: #333;
  padding: 10px;
}
#text { 
  color: blue; 
  background-color: #333;
  padding: 10px;
}
p { 
  color: yellow !important; 
  background-color: #333;
  padding: 10px;
}`
    },
    {
      type: 'text',
      text: `
        <p class="mt-2">
          Результат: текст будет <span style="color: blue;">синим</span>, потому что <code>#text</code> имеет наибольшую специфичность. 
          При этом фон тёмный, а цвет текста — жёлтый, чтобы он был хорошо виден.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">4. !important</h3>
        <p>
          Это крайняя мера, которая принудительно повышает приоритет правила.
        </p>
      `
    },
    {
      type: 'code',
      code: `p {\n  color: yellow !important;\n  background-color: #333;\n  padding: 10px;\n}`
    },
    {
      type: 'text',
      text: `
        <p class="mt-2">
          Такой параграф будет жёлтым на тёмном фоне — он станет хорошо видимым для пользователя.
        </p>
        <p class="text-red-600">
          ⚠️ <strong>Важно:</strong> Избегайте создания невидимого текста случайно. Это может быть ошибкой или даже нарушением доступности.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">5. Наследование (Inheritance)</h3>
        <p>
          Некоторые свойства CSS передаются от родительского элемента к дочерним автоматически. Например:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>color</code> — цвет текста;</li>
          <li><code>font-family</code> — шрифт;</li>
          <li><code>font-size</code> — размер шрифта;</li>
          <li><code>line-height</code> — высота строки.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Пример использования наследования:
        </p>
      `
    },
    {
      type: 'code',
      code: `<body style="font-family: Arial, sans-serif; color: #333;">
  <div>
    <p style="color: yellow; background-color: #333; padding: 10px;">
      Этот текст унаследовал шрифт и цвет от body.
    </p>
  </div>
</body>`
    },
    {
      type: 'text',
      text: `
        <p class="mt-2">
          Цвет текста теперь жёлтый, благодаря установленному значению <code>color: yellow;</code> в инлайновом стиле, 
          но он также мог унаследовать значение от <code>&lt;body&gt;</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">6. Как проверить применённые стили?</h3>
        <p>
          Используйте инструменты разработчика браузера (DevTools):
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Правый клик → «Просмотреть код»;</li>
          <li>Вкладка <code>Computed</code> покажет финальные стили, применённые к элементу;</li>
          <li>Можно увидеть, какие правила были переопределены.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Резюме</h3>
        <p>
          Чтобы браузер выбрал нужный стиль, он руководствуется следующими принципами:
        </p>
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Приоритет источника (браузер < пользователь < автор < !important);</li>
          <li>Специфичность селектора (тег < класс < id < inline);</li>
          <li>Порядок объявления (последнее правило заменяет предыдущее при равной специфичности).</li>
        </ol>
      `
    }
  ],
  task: "Напишите HTML и CSS с несколькими конфликтующими стилями, включая случаи с высокой специфичностью и !important. Убедитесь, что текст остаётся читаемым.",
  exampleAnswer: "/* CSS */\np {\n  color: yellow !important;\n  background-color: #333;\n  padding: 10px;\n}\n.text {\n  color: blue;\n}\n#main {\n  color: green;\n}\n\n<!-- HTML -->\n<p id=\"main\" class=\"text\">Какой цвет будет у этого текста? Проверь через DevTools.</p>"
};