export default {
  id: 10,
  title: "Функции",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Функции — это именованные блоки кода, которые выполняют определённую задачу и могут быть вызваны из любого места программы.
          Они позволяют избежать повторения одного и того же кода и делают программу более понятной и структурированной.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как определить функцию?</h3>
        <p>
          Для создания функции используется ключевое слово <code>def</code>, за которым следует имя функции и круглые скобки.
          Блок кода внутри функции выделен отступом.
        </p>
      `
    },
    {
      type: 'code',
      code: `def greet():\n    print("Привет!")\n    print("Добро пожаловать на сайт.")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как вызвать функцию?</h3>
        <p>
          После определения функция может быть вызвана по её имени:
        </p>
      `
    },
    {
      type: 'code',
      code: `greet()`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Параметры функции</h3>
        <p>
          Функции могут принимать параметры — значения, которые передаются внутрь функции для обработки.
        </p>
      `
    },
    {
      type: 'code',
      code: `def greet_user(name):\n    print(f"Привет, {name}!")\n\ngreet_user("Алекс")\ngreet_user("Мария")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Несколько параметров</h3>
        <p>
          В функцию можно передать несколько параметров, разделив их запятыми:
        </p>
      `
    },
    {
      type: 'code',
      code: `def add_numbers(a, b):\n    result = a + b\n    print(f"Сумма {a} и {b} равна {result}")\n\nadd_numbers(5, 3)\nadd_numbers(10, 20)`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Возврат значения из функции</h3>
        <p>
          Чтобы вернуть результат работы функции, используется ключевое слово <code>return</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `def multiply(a, b):\n    return a * b\n\nproduct = multiply(4, 5)\nprint("Результат умножения:", product)`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Функция без параметров и с return</h3>
        <p>
          Функция может не принимать параметров, но возвращать значение:
        </p>
      `
    },
    {
      type: 'code',
      code: `def get_greeting():\n    return "Здравствуйте!"\n\nmessage = get_greeting()\nprint(message)`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования функций</h3>
        <p>
          Программа, которая использует функции для выполнения простых операций:
        </p>
      `
    },
    {
      type: 'code',
      code: `def calculate(operation, a, b):\n    if operation == "add":\n        return a + b\n    elif operation == "subtract":\n        return a - b\n    elif operation == "multiply":\n        return a * b\n    elif operation == "divide":\n        if b != 0:\n            return a / b\n        else:\n            return "Ошибка: деление на ноль!"\n    else:\n        return "Неизвестная операция"\n\nresult = calculate("divide", 10, 2)\nprint("Результат:", result)`
    }
  ],
  task: "Создайте функцию, которая принимает два числа и возвращает их среднее арифметическое.",
  exampleAnswer: "def average(a, b):\n    return (a + b) / 2\n\nresult = average(10, 20)\nprint(\"Среднее значение:\", result)"
};