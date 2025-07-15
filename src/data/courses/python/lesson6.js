export default {
  id: 6,
  title: "Условные конструкции",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Условные конструкции позволяют выполнять разный код в зависимости от выполнения определённых условий.
          Это основа логики большинства программ — именно с их помощью программы принимают "решения".
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Оператор <code>if</code></h3>
        <p>
          Оператор <code>if</code> проверяет условие. Если оно истинно (<code>True</code>), выполняется блок кода под ним.
        </p>
      `
    },
    {
      type: 'code',
      code: `age = 18\nif age >= 18:\n    print("Вы совершеннолетний.")`
    },
    {
      type: 'text',
      text: `
        <p>
          Обратите внимание на отступы — все строки внутри условия должны быть выровнены одинаково (обычно 4 пробела или одна табуляция).
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Оператор <code>else</code></h3>
        <p>
          Оператор <code>else</code> указывает, что делать, если условие после <code>if</code> не выполнено.
        </p>
      `
    },
    {
      type: 'code',
      code: `age = 16\nif age >= 18:\n    print("Вы совершеннолетний.")\nelse:\n    print("Вы ещё несовершеннолетний.")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Оператор <code>elif</code></h3>
        <p>
          Если нужно проверить несколько условий, используйте <code>elif</code> — это сокращение от "else if".
        </p>
      `
    },
    {
      type: 'code',
      code: `score = 75\nif score >= 90:\n    print("Отлично!")\nelif score >= 70:\n    print("Хорошо!")\nelif score >= 50:\n    print("Удовлетворительно.")\nelse:\n    print("Неудовлетворительно.")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Сравнение значений</h3>
        <p>
          В условиях часто используются операторы сравнения:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>==</code> — равно</li>
          <li><code>!=</code> — не равно</li>
          <li><code>></code> — больше</li>
          <li><code><</code> — меньше</li>
          <li><code>>=</code> — больше или равно</li>
          <li><code><=</code> — меньше или равно</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `a = 10\nb = 5\n\nprint(a == b)  # False\nprint(a > b)   # True\nprint(a != b)  # True`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Логические операторы</h3>
        <p>
          Чтобы объединять несколько условий, используются логические операторы:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>and</code> — оба условия должны быть истинными</li>
          <li><code>or</code> — хотя бы одно условие должно быть истинным</li>
          <li><code>not</code> — меняет результат условия на противоположный</li>
        </ul>
      `
    },
    {
      type: 'code',
      code: `age = 20\nhas_ticket = True\n\nif age >= 18 and has_ticket:\n    print("Добро пожаловать на концерт!")\n\nif age < 18 or not has_ticket:\n    print("Вход запрещён.")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример программы с условием</h3>
        <p>
          Программа, которая проверяет, может ли пользователь войти на сайт:
        </p>
      `
    },
    {
      type: 'code',
      code: `username = input("Введите имя пользователя: ")\npassword = input("Введите пароль: ")\n\nif username == "admin" and password == "123456":\n    print("Добро пожаловать, администратор!")\nelse:\n    print("Неверное имя пользователя или пароль.")`
    }
  ],
  task: "Напишите программу, которая спрашивает у пользователя число и выводит, является ли оно положительным, отрицательным или нулём.",
  exampleAnswer: "num = float(input(\"Введите число: \"))\n\nif num > 0:\n    print(\"Число положительное.\")\nelif num < 0:\n    print(\"Число отрицательное.\")\nelse:\n    print(\"Число равно нулю.\")"
};