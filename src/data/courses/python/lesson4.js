export default {
  id: 4,
  title: "Числа и операции над ними",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Числа — один из самых важных типов данных в программировании. В Python есть два основных типа для работы с числами:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>int</code> — целые числа (например: <code>5</code>, <code>-10</code>, <code>100</code>)</li>
          <li><code>float</code> — вещественные числа (с дробной частью, например: <code>3.14</code>, <code>-0.5</code>, <code>2.0</code>)</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Арифметические операции</h3>
        <p>
          С числами можно выполнять привычные математические операции: сложение, вычитание, умножение, деление и другие.
        </p>
      `
    },
    {
      type: 'code',
      code: `a = 10\nb = 3\n\nprint(a + b)   # Сложение: 13\nprint(a - b)   # Вычитание: 7\nprint(a * b)   # Умножение: 30\nprint(a / b)   # Деление: 3.333...\nprint(a // b)  # Целочисленное деление: 3\nprint(a % b)   # Остаток от деления: 1\nprint(a ** b)  # Возведение в степень: 1000`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Целые и вещественные числа</h3>
        <p>
          Если вы работаете только с целыми числами — используйте тип <code>int</code>. 
          Если число содержит десятичную точку, оно автоматически становится <code>float</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `x = 5\nprint(type(x))  # <class 'int'>\n\ny = 5.0\nprint(type(y))  # <class 'float'>`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Приведение типов</h3>
        <p>
          Иногда нужно превратить одно число в другой тип. Для этого используют функции <code>int()</code> и <code>float()</code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `a = 7.8\nprint(int(a))      # 7 (отбрасывает дробную часть)\n\nb = 5\nprint(float(b))    # 5.0`
    },
    {
      type: 'text',
      text: `
        <p>
          Обратите внимание: если вы превращаете строку в число, она должна содержать корректное числовое значение.
        </p>
      `
    },
    {
      type: 'code',
      code: `age_str = "25"\nage = int(age_str)\nprint(age)  # 25`
    },
    {
      type: 'text',
      text: `
        <p>
          Если попытаться преобразовать нечисловую строку, Python выдаст ошибку:
        </p>
      `
    },
    {
      type: 'code',
      code: `# Ошибка!\nint("двадцать пять")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Порядок операций</h3>
        <p>
          Python соблюдает обычный порядок математических операций: сначала умножение и деление, затем сложение и вычитание. 
          Используйте скобки, чтобы изменить порядок.
        </p>
      `
    },
    {
      type: 'code',
      code: `result1 = 2 + 3 * 4\nprint(result1)  # 14\n\nresult2 = (2 + 3) * 4\nprint(result2)  # 20`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Работа с большими числами</h3>
        <p>
          В Python можно использовать подчёркивания в больших числах для улучшения читаемости:
        </p>
      `
    },
    {
      type: 'code',
      code: `population = 1_000_000\nprint(population)  # 1000000`
    },
    {
      type: 'text',
      text: `
        <p>
          Это удобно при работе с большими числами, например, в финансовых или научных расчётах.
        </p>
      `
    }
  ],
  task: "Вычислите площадь круга, используя формулу: S = π × r². Возьмите радиус 5. Используйте значение π ≈ 3.14.",
  exampleAnswer: "r = 5\npi = 3.14\narea = pi * r ** 2\nprint(area)  # 78.5"
};