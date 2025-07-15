export default {
  id: 7,
  title: "Цикл while",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Цикл <code>while</code> позволяет выполнять блок кода несколько раз, пока выполняется определённое условие.
          Это очень полезно, когда количество повторений заранее неизвестно.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Базовый синтаксис цикла <code>while</code></h3>
        <p>
          Цикл <code>while</code> проверяет условие перед каждым выполнением блока кода:
        </p>
      `
    },
    {
      type: 'code',
      code: `count = 1\nwhile count <= 5:\n    print("Счёт:", count)\n    count += 1`
    },
    {
      type: 'text',
      text: `
        <p>
          Этот код выведет числа от 1 до 5. Обратите внимание на отступ внутри цикла — он обязателен.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Условие выхода из цикла</h3>
        <p>
          Очень важно, чтобы условие цикла <code>while</code> рано или поздно стало ложным. 
          Иначе цикл будет выполняться бесконечно — это может привести к зависанию программы.
        </p>
      `
    },
    {
      type: 'code',
      code: `# Бесконечный цикл (осторожно!)\nwhile True:\n    print("Это бесконечный цикл!")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Пример использования цикла</h3>
        <p>
          Программа, которая запрашивает у пользователя число, пока не будет введено положительное:
        </p>
      `
    },
    {
      type: 'code',
      code: `num = int(input("Введите положительное число: "))\nwhile num <= 0:\n    num = int(input("Неверное значение. Попробуйте ещё раз: "))\nprint("Вы ввели положительное число:", num)`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Использование <code>break</code> для выхода из цикла</h3>
        <p>
          Иногда бывает удобнее выйти из цикла не через условие, а с помощью команды <code>break</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `while True:\n    answer = input("Введите 'да' или 'нет': ")\n    if answer == "да" or answer == "нет":\n        break\nprint("Спасибо за ответ!")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Использование <code>continue</code> для пропуска шага</h3>
        <p>
          Команда <code>continue</code> позволяет пропустить текущий шаг цикла и перейти к следующей итерации.
        </p>
      `
    },
    {
      type: 'code',
      code: `count = 0\nwhile count < 5:\n    count += 1\n    if count == 3:\n        continue\n    print("Текущее значение:", count)`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практический пример: калькулятор</h3>
        <p>
          Пример простого калькулятора, который работает до тех пор, пока пользователь не решит выйти:
        </p>
      `
    },
    {
      type: 'code',
      code: `while True:\n    print("\\n--- Калькулятор ---")\n    print("1. Сложить два числа")\n    print("2. Вычесть два числа")\n    print("3. Выйти")\n\n    choice = input("Выберите действие (1/2/3): ")\n\n    if choice == "3":\n        break\n\n    a = float(input("Первое число: "))\n    b = float(input("Второе число: "))\n\n    if choice == "1":\n        print("Результат сложения:", a + b)\n    elif choice == "2":\n        print("Результат вычитания:", a - b)\n    else:\n        print("Неверный выбор.")`
    }
  ],
  task: "Создайте программу, которая запрашивает у пользователя пароль до тех пор, пока он не введёт 'python'.",
  exampleAnswer: "password = \"\"\nwhile password != \"python\":\n    password = input(\"Введите пароль: \")\nprint(\"Добро пожаловать!\")"
};