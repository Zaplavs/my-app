export default {
  id: 2,
  title: "Переменные и типы данных",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          В программировании переменные используются для хранения данных. 
          Представьте их как ярлыки или именованные контейнеры, в которых сохраняются определённые значения.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как объявлять переменные?</h3>
        <p>
          В Python не нужно заранее указывать тип переменной — интерпретатор сам определяет его на основе присвоенного значения.
        </p>
      `
    },
    {
      type: 'code',
      code: `# Пример создания переменных\nname = "Алекс"\nage = 25\nis_student = True`
    },
    {
      type: 'text',
      text: `
        <p>
          Эти три строки создают три переменные:
        </p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>name</code> — строка (string)</li>
          <li><code>age</code> — число (integer)</li>
          <li><code>is_student</code> — булево значение (boolean)</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Правила именования переменных:</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Имя может содержать буквы, цифры и подчёркивания (<code>_</code>)</li>
          <li>Не может начинаться с цифры</li>
          <li>Регистр важен: <code>age</code> и <code>Age</code> — это разные переменные</li>
          <li>Используйте понятные названия, например <code>user_age</code>, а не <code>a</code></li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Типы данных</h3>
        <p>
          Рассмотрим самые базовые типы данных в Python:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">1. Числа</h4>
        <p>
          В Python есть два основных числовых типа:
        </p>
      `
    },
    {
      type: 'code',
      code: `x = 10         # целое число (int)\ny = 3.14       # вещественное число (float)`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">2. Строки</h4>
        <p>
          Строки используются для хранения текстовой информации. Они заключаются в одинарные или двойные кавычки:
        </p>
      `
    },
    {
      type: 'code',
      code: `name = "Мария"\nmessage = 'Привет, мир!'`
    },
    {
      type: 'text',
      text: `
        <h4 class="font-semibold mt-3 mb-1">3. Булевы значения</h4>
        <p>
          Тип <code>bool</code> может принимать только два значения: <code>True</code> и <code>False</code>. 
          Используется в условиях и проверках.
        </p>
      `
    },
    {
      type: 'code',
      code: `is_active = True\nhas_access = False`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как вывести значение переменной?</h3>
        <p>
          Для вывода значения на экран используется функция <code>print()</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `name = "Олег"\nage = 30\n\nprint(name)\nprint(age)`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как изменить значение переменной?</h3>
        <p>
          Значение переменной можно перезаписать простым присваиванием нового значения:
        </p>
      `
    },
    {
      type: 'code',
      code: `counter = 1\nprint(counter)  # Выведет: 1\n\ncounter = 10\nprint(counter)  # Теперь выведет: 10`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Проверка типа данных</h3>
        <p>
          Чтобы узнать тип переменной, используйте функцию <code>type()</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `a = 100\nb = "Текст"\n\nprint(type(a))  # <class 'int'>\nprint(type(b))  # <class 'str'>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Приведение типов</h3>
        <p>
          Иногда нужно преобразовать одно значение в другой тип. Это делается с помощью функций:
        </p>
      `
    },
    {
      type: 'code',
      code: `age = "25"\nprint(type(age))  # <class 'str'>\n\nage = int(age)\nprint(type(age))  # <class 'int'>`
    },
    {
      type: 'text',
      text: `
        <p>
          Если попытаться преобразовать нечисловую строку в число, программа вызовет ошибку. Будьте внимательны!
        </p>
      `
    }
  ],
  task: "Создайте переменные для хранения вашего имени, возраста и статуса студента. Выведите их на экран.",
  exampleAnswer: "name = \"Иван\"\nage = 20\nis_student = True\n\nprint(name)\nprint(age)\nprint(is_student)"
};