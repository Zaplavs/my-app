export default {
  id: 14,
  title: "data-* атрибуты и пользовательские данные",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Иногда вам нужно сохранить дополнительную информацию прямо в HTML-элементах — например, ID товара, имя пользователя или любые другие данные.
          Для этого в HTML5 предусмотрены специальные пользовательские атрибуты — <strong>data-*</strong>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Что такое data-* атрибуты?</h3>
        <p>
          Это произвольные атрибуты, которые вы можете добавлять к любым HTML-элементам. Их имена всегда начинаются с префикса <code>data-</code>, 
          чтобы не конфликтовать со стандартными атрибутами.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования:</h3>
      `
    },
    {
      type: 'code',
      code: `<div class="product" data-product-id="101" data-name="Ноутбук" data-price="59990">\n  Ноутбук Lenovo\n</div>`
    },
    {
      type: 'text',
      text: `
        <p class="mt-2">
          В этом примере мы добавили элементу <code>&lt;div&gt;</code> три пользовательских атрибута:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>data-product-id</code></li>
          <li><code>data-name</code></li>
          <li><code>data-price</code></li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как получить доступ к data-атрибутам в JavaScript?</h3>
        <p>
          Получить значение атрибутов можно через свойство <code>dataset</code> объекта <code>element</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `const product = document.querySelector('.product');\nconsole.log(product.dataset.productId); // 101\nconsole.log(product.dataset.name); // Ноутбук`
    },
    {
      type: 'text',
      text: `
        <p class="mt-2">
          Обратите внимание: имя атрибута в коде пишется в <strong>kebab-case</strong> (через дефис), а в JavaScript — в <strong>camelCase</strong>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Зачем используются data-атрибуты?</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Для передачи данных из HTML в JavaScript без лишних запросов.</li>
          <li>Для хранения информации, связанной с элементом (например, ID, состояние, параметры).</li>
          <li>Для упрощения работы с динамическими интерфейсами (модальные окна, карточки товаров, виджеты и т.д.).</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Правила использования:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Имя атрибута должно начинаться с <code>data-</code>.</li>
          <li>Можно использовать цифры, буквы, дефисы и точки в имени.</li>
          <li>Значение атрибута всегда строка, но его можно преобразовать в число или JSON при необходимости.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Не злоупотребляйте data-атрибутами — используйте их только когда это действительно необходимо.</li>
          <li>Если данные сложные (объекты, массивы), сериализуйте их в JSON: <code>data-user='{ "name": "Анна", "age": 25 }'</code>.</li>
          <li>При работе с большими объемами данных лучше использовать JS-объекты или хранилища состояния.</li>
        </ul>
      `
    }
  ],
  task: "Создайте список товаров с кнопкой 'Купить'. Каждый товар должен содержать скрытые данные (ID, цена) через data-атрибуты. При клике на кнопку выводите в консоль данные товара.",
  exampleAnswer: `<div class="product" data-product-id="123" data-price="1999" data-name="Футболка">\n  Футболка\n  <button class="buy-btn">Купить</button>\n</div>\n\n<script>\n  const button = document.querySelector('.buy-btn');\n  button.addEventListener('click', () => {\n    const product = button.parentElement;\n    console.log('Товар:', product.dataset.name);\n    console.log('Цена:', product.dataset.price);\n    console.log('ID:', product.dataset.productId);\n  });\n</script>`
};