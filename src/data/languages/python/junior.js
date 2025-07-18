export default [
  {
    q: "Что такое PEP 8 и почему он важен?",
    a: "PEP 8 — это официальный стиль оформления кода на Python. Он включает рекомендации по отступам, именованию переменных, пробелам и другим аспектам читаемости кода. Следование PEP 8 важно, потому что он делает код более понятным и единообразным при совместной разработке."
  },
  {
    q: "Какие основные типы данных в Python?",
    a: "Основные типы данных в Python: числа (int, float, complex), строки (str), списки (list), кортежи (tuple), словари (dict), множества (set), булевы значения (bool) и None. Эти типы делятся на изменяемые (например, списки, словари) и неизменяемые (например, строки, кортежи)."
  },
  {
    q: "Чем отличается список (list) от кортежа (tuple)?",
    a: "Список (list) — изменяемый тип данных, позволяет добавлять, удалять и изменять элементы. Кортеж (tuple) — неизменяемый, после создания его содержимое нельзя изменить. Поэтому кортежи могут использоваться как ключи в словарях и храниться в множествах, а списки — нет."
  },
  {
    q: "Что такое словарь (dict) в Python?",
    a: "Словарь — это коллекция пар 'ключ-значение', где каждый ключ уникален. Словари позволяют быстро получать значение по ключу. Они создаются с помощью фигурных скобок {} или dict(). Пример: {'name': 'Alice', 'age': 25}."
  },
  {
    q: "Как работает оператор 'in' в Python?",
    a: "Оператор 'in' проверяет наличие элемента в последовательности (список, строка, кортеж, словарь и т.д.). Например, 'a in [1, 2, 3]' вернёт False, а 'name in my_dict' вернёт True, если в словаре есть ключ 'name'."
  },
  {
    q: "Что такое функция в Python и как её объявить?",
    a: "Функция — это блок кода, который можно вызвать из разных частей программы. Объявляется с помощью ключевого слова def. Например: def greet(name): return f'Привет, {name}'. Функции помогают организовать код, сделать его модульным и переиспользуемым."
  },
  {
    q: "Что означает 'None' в Python?",
    a: "None — это специальное значение в Python, обозначающее отсутствие значения или пустой объект. Оно часто используется как значение по умолчанию для параметров функций или для обозначения того, что переменная ещё не присвоена."
  },
  {
    q: "Как работают циклы for и while в Python?",
    a: "Цикл for перебирает элементы последовательности (например, списка или строки), выполняя блок кода для каждого элемента. Цикл while выполняет блок кода до тех пор, пока условие истинно. For удобен для перебора, while — когда количество итераций заранее неизвестно."
  },
  {
    q: "Как обрабатываются исключения в Python?",
    a: "Исключения в Python обрабатываются с помощью блока try-except. В try пишется потенциально опасный код, а в except — действия, которые нужно выполнить в случае ошибки. Это позволяет избежать аварийного завершения программы при возникновении ошибок."
  },
  {
    q: "Что такое область видимости переменной в Python?",
    a: "Область видимости определяет, где в коде можно получить доступ к переменной. В Python есть локальная, объемлющая, глобальная и встроенная области видимости (правило LEGB). Переменные, объявленные внутри функции, недоступны вне её, если только они не указаны как global."
  },
  {
    q: "Как работают строки в Python? Как их форматировать?",
    a: "Строки в Python — это последовательности символов, заключённые в одинарные или двойные кавычки. Для форматирования строк используются методы format(), f-строки (начиная с Python 3.6) и оператор %."
  },
  {
    q: "Что такое lambda-функция?",
    a: "Lambda-функция — это анонимная функция, которая записывается в одну строку и может принимать любое количество аргументов, но имеет только одно выражение. Используется, например, в качестве аргумента в других функциях, таких как map() или filter()."
  },
  {
    q: "Как работают генераторы списков (list comprehensions)?",
    a: "Генераторы списков — это компактный способ создания новых списков. Пример: [x*2 for x in range(5)] создаст список [0, 2, 4, 6, 8]. Они повышают читаемость и упрощают преобразования над последовательностями."
  },
  {
    q: "Что такое модуль и как его импортировать?",
    a: "Модуль — это файл с расширением .py, содержащий определения функций, классов и переменных. Его можно импортировать в другой файл с помощью ключевого слова import. Например: import math или from math import sqrt."
  },
  {
    q: "Какие стандартные библиотеки Python вы знаете?",
    a: "Некоторые популярные стандартные библиотеки: os (работа с системой), sys (управление интерпретатором), math (математические операции), datetime (работа с датой и временем), random (генерация случайных чисел), json (работа с JSON)."
  },
  {
    q: "Что такое файл и как его открыть в Python?",
    a: "Файл — это место хранения информации на диске. В Python файлы открываются с помощью функции open(). Рекомендуется использовать конструкцию with, чтобы автоматически закрывать файл после работы: with open('file.txt', 'r') as f: print(f.read())."
  },
  {
    q: "Какие режимы открытия файла существуют в Python?",
    a: "Режимы открытия файла: 'r' — чтение (по умолчанию), 'w' — запись (перезаписывает файл), 'a' — добавление, 'b' — бинарный режим, 't' — текстовый режим (по умолчанию), 'x' — эксклюзивное создание файла. Комбинации: 'rb', 'w+', 'a+' и т.д."
  },
  {
    q: "Что такое условия if/elif/else в Python?",
    a: "Эти ключевые слова используются для управления потоком выполнения программы в зависимости от истинности условия. Блок if проверяется первым, elif — дополнительные условия, else — выполняется, если ни одно предыдущее условие не было истинным."
  },
  {
    q: "Как работает оператор 'not' в условиях?",
    a: "Оператор not инвертирует логическое значение: если выражение истинно, not сделает его ложным, и наоборот. Часто используется для проверки, является ли значение пустым, например: if not my_list: print('Список пуст')."
  },
  {
    q: "Что такое методы строк в Python?",
    a: "Методы строк — это встроенные функции, которые можно применять к строковым объектам. Например, upper() — переводит строку в верхний регистр, lower() — в нижний, strip() — удаляет лишние пробелы, split() — разбивает строку на список."
  },
  {
    q: "Как работает срез (slice) в Python?",
    a: "Срез (slice) позволяет получить часть последовательности (например, списка или строки). Формат: sequence[start:end:step]. Например, s[1:4] вернёт символы со второго по четвёртый, s[::-1] — перевернёт строку."
  },
  {
    q: "Что такое ключевое слово 'pass'?",
    a: "Ключевое слово pass используется как заглушка, когда синтаксически требуется наличие кода, но ничего делать не нужно. Например, в заготовке функции или условия, которое ещё не реализовано."
  },
  {
    q: "Как работают булевы значения в Python?",
    a: "В Python булевы значения представлены как True и False. Любое значение может быть преобразовано в булево: пустые объекты (пустая строка, список, словарь) считаются False, непустые — True. Ноль также считается False."
  },
  {
    q: "Как работает функция range()?",
    a: "Функция range() генерирует последовательность целых чисел. Может принимать один, два или три аргумента: range(stop), range(start, stop), range(start, stop, step). Используется, например, в циклах for для повторения действий заданное число раз."
  },
  {
    q: "Что такое NoneType?",
    a: "NoneType — это тип данных единственного значения None. Он используется для обозначения отсутствия значения. Например, если функция ничего не возвращает, она возвращает None. Проверить можно через 'is None'."
  },
  {
    q: "Что такое mutable и immutable типы данных?",
    a: "Mutable (изменяемые) типы данных, такие как списки и словари, могут быть изменены после создания. Immutable (неизменяемые) типы, такие как строки, числа и кортежи, не могут быть изменены. При попытке изменения создаётся новый объект."
  },
  {
    q: "Что такое docstring в Python?",
    a: "Docstring — это строка документации, которая находится сразу после определения функции, класса или модуля. Она используется для описания назначения кода и может быть получена с помощью функции help() или атрибута __doc__."
  },
  {
    q: "Как работают аргументы по умолчанию в функциях?",
    a: "Аргументы по умолчанию указываются при объявлении функции и используются, если при вызове соответствующее значение не передано. Например: def greet(name='User'): print(f'Здравствуйте, {name}'). Не рекомендуется использовать изменяемые объекты как значения по умолчанию."
  },
  {
    q: "Что такое позиционные и именованные аргументы?",
    a: "Позиционные аргументы передаются в порядке следования параметров функции. Именованные аргументы передаются в виде пар 'ключ-значение', и порядок не важен. Например: func(1, 2) — позиционные, func(a=1, b=2) — именованные."
  },
  {
    q: "Как работает функция input() в Python?",
    a: "Функция input() позволяет получить данные от пользователя через консоль. Она всегда возвращает строку. Если нужно получить число, необходимо преобразовать результат: age = int(input('Введите возраст: '))."
  }
];