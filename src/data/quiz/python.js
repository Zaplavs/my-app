export default [
  {
    question: "Как объявить список в Python?",
    options: ["{}", "[]", "()", "||"],
    answer: "[]",
    explanation: {
      correct: "В Python список создаётся с помощью квадратных скобок [].",
      incorrect: "Неверно. {} — словарь, () — кортеж."
    }
  },
  {
    question: "Как создать кортеж в Python?",
    options: ["{}", "[]", "()", "set()"],
    answer: "()",
    explanation: {
      correct: "Кортеж создаётся с помощью круглых скобок (). Также можно просто перечислить значения через запятую.",
      incorrect: "Скобки () используются для создания кортежей."
    }
  },
  {
    question: "Что выведет print(5 == '5')?",
    options: ["True", "False", "Error", "None"],
    answer: "True",
    explanation: {
      correct: "Python выполняет нестрогое сравнение и приводит типы.",
      incorrect: "Оператор == не проверяет типы, только значение."
    }
  },
  {
    question: "Как объявить переменную в Python?",
    options: ["let x = 5", "var x = 5", "x = 5", "const x = 5"],
    answer: "x = 5",
    explanation: {
      correct: "В Python нет ключевых слов let, var или const. Переменные объявляются простым присваиванием.",
      incorrect: "В Python используется динамическое объявление переменных."
    }
  },
  {
    question: "Какой результат выполнения len('hello')?",
    options: ["4", "5", "6", "Error"],
    answer: "5",
    explanation: {
      correct: "Функция len() возвращает количество символов в строке. В 'hello' — 5 букв.",
      incorrect: "len() считает символы строки."
    }
  },
  {
    question: "Как работает оператор is в Python?",
    options: ["Сравнивает значения", "Сравнивает ссылки на объект", "Проверяет тип данных", "Проверяет существование переменной"],
    answer: "Сравнивает ссылки на объект",
    explanation: {
      correct: "Оператор is сравнивает, указывают ли две переменные на один и тот же объект в памяти.",
      incorrect: "'is' работает с ссылками, а не с содержимым."
    }
  },
  {
    question: "Какой метод добавляет элемент в конец списка?",
    options: ["insert()", "append()", "add()", "push()"],
    answer: "append()",
    explanation: {
      correct: "Метод append() добавляет элемент в конец списка.",
      incorrect: "push() — это из JavaScript, add() — у set, insert() — вставляет по индексу."
    }
  },
  {
    question: "Что такое PEP 8?",
    options: ["Инструмент форматирования", "Редактор кода", "Гайд по написанию кода", "Язык программирования"],
    answer: "Гайд по написанию кода",
    explanation: {
      correct: "PEP 8 — официальное руководство по стилю кода в Python.",
      incorrect: "Это стандарт написания кода, принятый сообществом."
    }
  },
  {
    question: "Какие функции принимают любое число аргументов?",
    options: ["lambda", "def", "map", "args"],
    answer: "def",
    explanation: {
      correct: "Функция def может использовать *args и **kwargs для любого числа аргументов.",
      incorrect: "*args собирает произвольное число позиционных аргументов."
    }
  },
  {
    question: "Что вернёт type(None)?",
    options: ["NoneType", "null", "undefined", "object"],
    answer: "NoneType",
    explanation: {
      correct: "type(None) вернёт <class 'NoneType'> — это специальный тип, обозначающий отсутствие значения.",
      incorrect: "None — это единственное значение типа NoneType."
    }
  },
  {
    question: "Что делает ключевое слово yield?",
    options: ["Возвращает значение", "Прерывает цикл", "Возвращает генератор", "Завершает функцию"],
    answer: "Возвращает генератор",
    explanation: {
      correct: "yield возвращает значение и приостанавливает выполнение функции до следующего вызова next().",
      incorrect: "Такие функции возвращают генератор, а не обычное значение."
    }
  },
  {
    question: "Какой результат выражения 3 + 2 if True else 1?",
    options: ["3", "2", "5", "1"],
    answer: "5",
    explanation: {
      correct: "Условие True → 3+2=5",
      incorrect: "if-else внутри выражения выполняется как (3 + 2) if True else 1"
    }
  },
  {
    question: "Как получить длину списка?",
    options: ["length()", "size()", "count()", "len()"],
    answer: "len()",
    explanation: {
      correct: "len() — встроенная функция Python для подсчёта количества элементов.",
      incorrect: "Других вариантов в Python нет."
    }
  },
  {
    question: "Как удалить элемент из списка по индексу?",
    options: ["pop()", "remove()", "delete", "clear()"],
    answer: "pop()",
    explanation: {
      correct: "pop() удаляет и возвращает элемент по индексу, remove() — по значению, delete — оператор для удаления переменной.",
      incorrect: "delete — не метод списка, а встроенный оператор."
    }
  },
  {
    question: "Что такое замыкание?",
    options: [
      "Функция, которая использует внешние переменные",
      "Функция без параметров",
      "Функция, возвращающая другую функцию",
      "Любая функция"
    ],
    answer: "Функция, которая использует внешние переменные",
    explanation: {
      correct: "Замыкание — это функция, которая имеет доступ к переменным внешней функции даже после её завершения.",
      incorrect: "Обычно используется в декораторах и каррировании."
    }
  },
  {
    question: "Какой модуль нужен для работы с регулярными выражениями?",
    options: ["re", "regex", "regexp", "match"],
    answer: "re",
    explanation: {
      correct: "Модуль re предоставляет полный набор функций для работы с регулярными выражениями.",
      incorrect: "re.search(), re.match(), re.findall() — основные методы."
    }
  },
  {
    question: "Как открыть файл в режиме чтения?",
    options: ["open('file.txt', 'r')", "open('file.txt', 'w')", "open('file.txt', 'a')", "open('file.txt', 'rw')"],
    answer: "open('file.txt', 'r')",
    explanation: {
      correct: "'r' — режим чтения файла.",
      incorrect: "'w' — запись, 'a' — дозапись, 'rw' — неверный режим."
    }
  },
  {
    question: "Какие данные хранятся в множестве (set)?",
    options: ["Упорядоченно и уникально", "Неупорядоченно и уникально", "Упорядоченно и повторяется", "Неупорядоченно и повторяется"],
    answer: "Неупорядоченно и уникально",
    explanation: {
      correct: "Множество (set) — неупорядоченная коллекция уникальных элементов.",
      incorrect: "Если попытаться добавить дубликат — он будет проигнорирован."
    }
  },
  {
    question: "Как создать словарь в Python?",
    options: ["{}", "[]", "()", "set()"],
    answer: "{}",
    explanation: {
      correct: "Словарь создаётся фигурными скобками {} или dict().",
      incorrect: "dict() — также создаёт словарь."
    }
  },
  {
    question: "Какой результат выполнения 3 and 5 в Python?",
    options: ["3", "5", "True", "False"],
    answer: "5",
    explanation: {
      correct: "В Python возвращается само значение, а не булев результат. 3 — истинное значение, поэтому возвращается 5.",
      incorrect: "Если первое значение истинное, возвращается второе."
    }
  },
  {
    question: "Какой результат выражения [x for x in range(5)]?",
    options: ["[0,1,2,3,4]", "[1,2,3,4,5]", "[0,1,2,3,4,5]", "[1,2,3,4]"],
    answer: "[0,1,2,3,4]",
    explanation: {
      correct: "range(5) генерирует числа от 0 до 4.",
      incorrect: "list comprehension просто оборачивает их в список."
    }
  },
  {
    question: "Как объявить строку в Python?",
    options: ["str s = 'hello'", "s = String('hello')", "s = \"hello\"", "new String('hello')"],
    answer: "s = \"hello\"",
    explanation: {
      correct: "В Python строки объявляются через '', \"\" или ''', без new и типизации.",
      incorrect: "Нет необходимости явно указывать тип или использовать new."
    }
  },
  {
    question: "Какой результат выполнения кода: a = [1, 2]; b = a; a.append(3); print(b)?",
    options: ["[1,2]", "[1,2,3]", "[1,2, 3, 3]", "Ошибка"],
    answer: "[1,2,3]",
    explanation: {
      correct: "Переменная b ссылается на тот же список, что и a. Изменения в одном отразятся и на другом.",
      incorrect: "Списки — изменяемые объекты, передаются по ссылке."
    }
  },
  {
    question: "Что такое декоратор в Python?",
    options: [
      "Функция, принимающая функцию как аргумент",
      "Функция, меняющая имя другой функции",
      "Класс, наследующий функцию",
      "Метод, добавляющий атрибуты"
    ],
    answer: "Функция, принимающая функцию как аргумент",
    explanation: {
      correct: "Декоратор — это функция, которая оборачивает другую функцию для изменения поведения без изменения её исходного кода.",
      incorrect: "Часто используется для логирования, таймеров, авторизации."
    }
  },
  {
    question: "Как сделать поверхностную копию списка?",
    options: ["copy.copy()", "copy.deepcopy()", "list()", "slice[:]"],
    answer: "copy.copy()",
    explanation: {
      correct: "copy.copy() и list[:] делают поверхностную копию. deepcopy — глубокую.",
      incorrect: "Поверхностная копия не рекурсивна."
    }
  },
  {
    question: "Какие аргументы могут быть у функции?",
    options: ["*args", "**kwargs", "args*", "kwargs**"],
    answer: "*args и **kwargs",
    explanation: {
      correct: "*args — позиционные, **kwargs — именованные аргументы",
      incorrect: "Используются для универсальных функций."
    }
  },
  {
    question: "Что такое lambda-функция?",
    options: ["Анонимная функция", "Рекурсивная функция", "Метод класса", "Генератор"],
    answer: "Анонимная функция",
    explanation: {
      correct: "Lambda — одноразовая функция, которая не имеет имени и часто используется в map, filter и других функциях высшего порядка.",
      incorrect: "Нельзя использовать return внутри lambda."
    }
  },
  {
    question: "Как определить класс в Python?",
    options: ["class MyObject:", "function MyObject:", "def MyObject:", "struct MyObject:"],
    answer: "class MyObject:",
    explanation: {
      correct: "Классы объявляются через class. Конструктор __init__ аналогичен constructor в других языках.",
      incorrect: "Классы поддерживают наследование, наследуя от object по умолчанию в Python 3."
    }
  },
  {
    question: "Как работает GIL в Python?",
    options: [
      "Позволяет параллельное исполнение потоков",
      "Блокирует выполнение нескольких потоков одновременно",
      "Управляет сборкой мусора",
      "Ускоряет работу списков"
    ],
    answer: "Блокирует выполнение нескольких потоков одновременно",
    explanation: {
      correct: "GIL (Global Interpreter Lock) позволяет только одному потоку исполнять байт-код Python за раз.",
      incorrect: "Из-за GIL многопоточность полезна только для I/O задач."
    }
  },
  {
    question: "Какой результат выполнения int('10', base=2)?",
    options: ["2", "10", "1", "error"],
    answer: "2",
    explanation: {
      correct: "int('10', base=2) — двоичное число 10 равно 2 в десятичной системе.",
      incorrect: "base=2 интерпретирует строку как число в двоичной системе."
    }
  },
  {
    question: "Какой результат выполнения выражения: not 0?",
    options: ["True", "False", "None", "Error"],
    answer: "True",
    explanation: {
      correct: "0, пустые объекты и False — это falsy значения. not 0 → True",
      incorrect: "not преобразует значение в bool и инвертирует его."
    }
  },
  {
    question: "Что выводит print(type(lambda: None))?",
    options: ["<class 'function'>", "<class 'lambda'>", "<class 'anonymous'>", "<class 'callable'>"],
    answer: "<class 'function'>",
    explanation: {
      correct: "Lambda — это всё та же функция, но без имени.",
      incorrect: "type(lambda: None) → function"
    }
  },
  {
    question: "Как получить текущее время в Python?",
    options: ["time.now()", "datetime.datetime.now()", "now.datetime()", "datetime.now()"],
    answer: "datetime.datetime.now()",
    explanation: {
      correct: "datetime.datetime.now() возвращает текущее время при импорте datetime.",
      incorrect: "from datetime import datetime; datetime.now() — короткая форма."
    }
  },
  {
    question: "Какой результат у sorted([3, 1, 2])?",
    options: ["[1,2,3]", "[3,2,1]", "[2,1,3]", "error"],
    answer: "[1,2,3]",
    explanation: {
      correct: "sorted() возвращает новый отсортированный список.",
      incorrect: "list.sort() сортирует оригинальный список."
    }
  },
  {
    question: "Какие методы есть у строки?",
    options: ["split()", "join()", "slice()", "split(), join(), upper()"],
    answer: "split(), join(), upper()",
    explanation: {
      correct: "split(), join(), upper() — все это методы str.",
      incorrect: "slice() — это метод списка и строки, но не строковый метод."
    }
  },
  {
    question: "Что такое mutable тип?",
    options: ["Неизменяемый", "Изменяемый", "Статический", "Динамический"],
    answer: "Изменяемый",
    explanation: {
      correct: "Mutable означает, что объект можно изменить без создания нового.",
      incorrect: "Примеры: list, dict, set."
    }
  },
  {
    question: "Что вернёт выражение: isinstance(True, int)?",
    options: ["True", "False", "None", "TypeError"],
    answer: "True",
    explanation: {
      correct: "В Python True и False являются экземплярами int. True == 1, False == 0",
      incorrect: "Это часть совместимости с целыми числами."
    }
  },
  {
    question: "Что такое f-строка?",
    options: ["Форматирование строк", "Специальная строка", "Функция", "Метод"],
    answer: "Форматирование строк",
    explanation: {
      correct: "f-строка позволяет встраивать выражения в строку с помощью {expr}.",
      incorrect: "Пример: f'Hello {name}'"
    }
  },
  {
    question: "Какой результат выполнения кода: x = [1, 2, 3]; y = x[-1]",
    options: ["1", "2", "3", "error"],
    answer: "3",
    explanation: {
      correct: "Отрицательные индексы отсчитываются с конца. -1 — последний элемент.",
      incorrect: "x[-1] — самый простой способ взять последний элемент списка."
    }
  }
];