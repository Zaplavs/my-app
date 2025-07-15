export default {
  id: 9,
  title: "Цикл for",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Цикл <code>for</code> используется для перебора элементов коллекции — например, списка или строки.
          Он позволяет выполнять один и тот же код для каждого элемента.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовый синтаксис цикла <code>for</code></h3>
        <p>
          Пример цикла, который выводит все элементы списка:
        </p>
      `
    },
    {
      type: 'code',
      code: `fruits = ["яблоко", "банан", "вишня"]\nfor fruit in fruits:\n    print(fruit)`
    },
    {
      type: 'text',
      text: `
        <p>
          В каждой итерации переменная <code>fruit</code> принимает значение очередного элемента списка.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Итерация по строке</h3>
        <p>
          Цикл <code>for</code> также может перебирать символы строки:
        </p>
      `
    },
    {
      type: 'code',
      code: `word = "Python"\nfor letter in word:\n    print(letter)`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Функция <code>range()</code></h3>
        <p>
          Если вам нужно выполнить цикл определённое количество раз, используйте функцию <code>range()</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `for i in range(5):\n    print("Итерация номер", i)`
    },
    {
      type: 'text',
      text: `
        <p>
          Функция <code>range()</code> может принимать от одного до трёх аргументов:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>range(stop)</code> — числа от 0 до <code>stop - 1</code></li>
          <li><code>range(start, stop)</code> — числа от <code>start</code> до <code>stop - 1</code></li>
          <li><code>range(start, stop, step)</code> — числа от <code>start</code> до <code>stop - 1</code> с шагом <code>step</code></li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `print("range(3):")\nfor i in range(3):\n    print(i)  # 0, 1, 2\n\nprint("range(2, 5):")\nfor i in range(2, 5):\n    print(i)  # 2, 3, 4\n\nprint("range(1, 6, 2):")\nfor i in range(1, 6, 2):\n    print(i)  # 1, 3, 5`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Примеры использования</h3>
        <p>
          Используем <code>range()</code> для работы со списками:
        </p>
      `
    },
    {
      type: 'code',
      code: `names = ["Анна", "Петр", "Мария", "Иван"]\nfor i in range(len(names)):\n    print(f"{i + 1}. {names[i]}")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Комбинация <code>for</code> с условиями</h3>
        <p>
          Часто циклы используются вместе с условными конструкциями:
        </p>
      `
    },
    {
      type: 'code',
      code: `numbers = [10, 25, 30, 45, 50]\nfor num in numbers:\n    if num % 2 == 0:\n        print(f"{num} — чётное")\n    else:\n        print(f"{num} — нечётное")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Прерывание и пропуск итераций</h3>
        <p>
          Как и в цикле <code>while</code>, в <code>for</code> можно использовать <code>break</code> и <code>continue</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `# Пример с break\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)\n\n# Пример с continue\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)`
    }
  ],
  task: "Напишите программу, которая выводит все чётные числа от 1 до 20.",
  exampleAnswer: "for i in range(1, 21):\n    if i % 2 == 0:\n        print(i)"
};