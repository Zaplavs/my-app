export default [
  {
    question: "Какое ключевое слово используется для создания константы в Java?",
    answer: "final",
    options: ["const", "static", "final", "val"],
    explanation: {
      correct: "В Java константы создаются с помощью ключевого слова final.",
      incorrect: "const — зарезервировано, но не используется. val — из Kotlin."
    }
  },
  {
    question: "Какой тип данных может принимать значения true или false?",
    answer: "boolean",
    options: ["boolean", "int", "char", "string"],
    explanation: {
      correct: "Тип boolean хранит логические значения: true или false.",
      incorrect: "Другие типы не могут быть использованы как условие в if."
    }
  },
  {
    question: "Какой результат выполнения выражения '10 / 3'?",
    answer: "3",
    options: ["3", "3.33", "3.0", "Error"],
    explanation: {
      correct: "В Java деление целых чисел возвращает целое значение (без остатка).",
      incorrect: "Чтобы получить дробь, нужно использовать хотя бы одно число с точкой: 10.0 / 3 → 3.33"
    }
  },
  {
    question: "Как создать строку в Java?",
    answer: "String s = \"hello\";",
    options: ["string s = \"hello\";", "String s = 'hello';", "var s = \"hello\";", "String s = \"hello\";"],
    explanation: {
      correct: "Правильное объявление строки через String s = \"hello\";",
      incorrect: "Java чувствительна к регистру и типам. string — неверно, 'hello' — char[]"
    }
  },
  {
    question: "Какой результат выполнения System.out.println(5 + 2 + \"8\");",
    answer: "78",
    options: ["78", "528", "60", "error"],
    explanation: {
      correct: "Сначала выполняется сложение 5+2=7, затем конкатенация с \"8\" → \"78\".",
      incorrect: "Если бы было \"5\" + 2 + 8 → \"528\", потому что всё становится строкой."
    }
  },
  {
    question: "Какой оператор используется для сравнения объектов по значению?",
    answer: ".equals()",
    options: ["==", ".equals()", "=+", "==="],
    explanation: {
      correct: ".equals() сравнивает содержимое объектов, например у строк.",
      incorrect: "== сравнивает ссылки на объекты, а не их значения."
    }
  },
  {
    question: "Какой метод вызывается при запуске Java-программы?",
    answer: "main",
    options: ["start", "run", "main", "init"],
    explanation: {
      correct: "Метод main — точка входа в программу: public static void main(String[] args)",
      incorrect: "Без метода main программа не запустится."
    }
  },
  {
    question: "Какой тип данных в Java хранит целые числа?",
    answer: "int",
    options: ["number", "integer", "int", "long"],
    explanation: {
      correct: "int — примитивный тип для хранения целых чисел от -2^31 до 2^31-1.",
      incorrect: "long — больше, но требует суффикса L."
    }
  },
  {
    question: "Какой модификатор доступа позволяет использовать член класса только внутри пакета?",
    answer: "default (package-private)",
    options: ["private", "protected", "public", "default"],
    explanation: {
      correct: "Если модификатор не указан, член класса имеет уровень доступа package-private (только внутри пакета).",
      incorrect: "private — только внутри класса, protected — внутри пакета и подклассов"
    }
  },
  {
    question: "Какой класс используется для изменения строки без создания новых объектов?",
    answer: "StringBuilder",
    options: ["String", "StringBuffer", "StringBuilder", "Все перечисленные"],
    explanation: {
      correct: "StringBuilder позволяет изменять строку без создания множества промежуточных объектов.",
      incorrect: "StringBuffer потокобезопасен, StringBuilder — нет, но быстрее."
    }
  },
  {
    question: "Какой результат выполнения кода: int x = 5; System.out.println(x++);",
    answer: "5",
    options: ["5", "6", "error", "null"],
    explanation: {
      correct: "x++ — постфиксный инкремент: выводит 5, потом увеличивает до 6.",
      incorrect: "++x — префиксный: сначала увеличит, потом вернёт."
    }
  },
  {
    question: "Какой тип данных в Java является ссылочным?",
    answer: "String",
    options: ["int", "double", "boolean", "String"],
    explanation: {
      correct: "String — это объект, а не примитивный тип. Все строки — экземпляры класса String.",
      incorrect: "Примитивные типы: byte, short, int, long, float, double, boolean, char."
    }
  },
  {
    question: "Какой оператор используется для создания нового объекта?",
    answer: "new",
    options: ["create", "make", "new", "object"],
    explanation: {
      correct: "new используется для вызова конструктора и выделения памяти под новый объект.",
      incorrect: "В некоторых языках new не требуется, в Java — обязателен."
    }
  },
  {
    question: "Какой результат выполнения кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "error", "null"],
    explanation: {
      correct: "Java кэширует Integer от -128 до 127. Поэтому a и b указывают на один объект.",
      incorrect: "Но если a = 128, b = 128 → a == b → false"
    }
  },
  {
    question: "Какой результат выполнения кода: String s = null; System.out.println(s instanceof String);",
    answer: "false",
    options: ["true", "false", "null", "NullPointerException"],
    explanation: {
      correct: "instanceof с null всегда возвращает false.",
      incorrect: "Проверка типа: obj instanceof ClassName"
    }
  },
  {
    question: "Что такое JVM?",
    answer: "Java Virtual Machine",
    options: ["Java Variable Memory", "Java Virtual Machine", "Java Value Model", "Java Version Manager"],
    explanation: {
      correct: "JVM — виртуальная машина, которая исполняет байт-код Java.",
      incorrect: "JVM абстрагирует платформу, обеспечивая 'write once, run anywhere'."
    }
  },
  {
    question: "Какой тип данных может быть null?",
    answer: "String",
    options: ["int", "boolean", "String", "float"],
    explanation: {
      correct: "Только ссылочные типы (объекты) могут быть null. Примитивы — нет.",
      incorrect: "int age = null; — ошибка компиляции"
    }
  },
  {
    question: "Какой результат у выражения: int x = 5; System.out.println(x > 4 ? \"больше\" : \"меньше\");",
    answer: "больше",
    options: ["больше", "меньше", "5", "null"],
    explanation: {
      correct: "Условие x > 4 истинно, поэтому выводится 'больше'.",
      incorrect: "Тернарный оператор возвращает одно из двух значений."
    }
  },
  {
    question: "Какой тип данных хранит символы Unicode?",
    answer: "char",
    options: ["byte", "short", "char", "long"],
    explanation: {
      correct: "char — это 16-битный тип, представляющий символы Unicode.",
      incorrect: "char может хранить значения от '\\u0000' до '\\uffff'."
    }
  },
  {
    question: "Что такое перегрузка методов (method overloading)?",
    answer: "Одинаковые имена, разные параметры",
    options: ["Разные имена, одинаковые параметры", "Одинаковые имена, одинаковые параметры", "Одинаковые имена, разные параметры", "Одинаковые имена, разные возвращаемые типы"],
    explanation: {
      correct: "Перегрузка методов — это когда несколько методов имеют одинаковое имя, но разные параметры (кол-во или тип).",
      incorrect: "Возвращаемый тип не влияет на перегрузку."
    }
  },
  {
    question: "Какой оператор освобождает память в Java?",
    answer: "Не требуется — есть сборщик мусора",
    options: ["free", "delete", "gc()", "Не требуется — есть сборщик мусора"],
    explanation: {
      correct: "В Java памятью управляет сборщик мусора, разработчику не нужно вызывать free/delete.",
      incorrect: "System.gc() — лишь предложение, не гарантия."
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x >= 5 ? \"да\" : \"нет\");",
    answer: "да",
    options: ["да", "нет", "error", "null"],
    explanation: {
      correct: "x >= 5 → true → возвращается 'да'",
      incorrect: "Тернарный оператор заменяет if-else в одном выражении."
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x + ++x);",
    answer: "11",
    options: ["10", "11", "12", "Error"],
    explanation: {
      correct: "x = 5 → ++x = 6 → x + 6 = 5 + 6 = 11",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: int[] arr = {1, 2, 3}; System.out.println(arr.length);",
    answer: "3",
    options: ["3", "2", "4", "Error"],
    explanation: {
      correct: "length в массивах возвращает количество элементов, без скобок.",
      incorrect: "arr.length(), length — свойство, а не метод"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 == 10.0);",
    answer: "true",
    options: ["true", "false", "Error", "NaN"],
    explanation: {
      correct: "10 (int) и 10.0 (double) равны при сравнении.",
      incorrect: "Типы приводятся автоматически."
    }
  },
  {
    question: "Какой результат у кода: int x; System.out.println(x);",
    answer: "Ошибка компиляции",
    options: ["0", "null", "undefined", "Ошибка компиляции"],
    explanation: {
      correct: "В Java переменная должна быть проинициализирована перед использованием.",
      incorrect: "Java не присваивает int значение по умолчанию."
    }
  },
  {
    question: "Что такое класс в Java?",
    answer: "Шаблон для создания объектов",
    options: ["Объект", "Функция", "Шаблон для создания объектов", "Массив"],
    explanation: {
      correct: "Класс — это шаблон, описывающий состояние и поведение объектов.",
      incorrect: "Класс содержит поля, методы, конструкторы и т.д."
    }
  },
  {
    question: "Какой результат у кода: int i = Integer.parseInt(\"123\");",
    answer: "i = 123",
    options: ["123", "Error", "null", "NumberFormatException"],
    explanation: {
      correct: "Integer.parseInt() преобразует строку в число. Если строка корректна — работает.",
      incorrect: "Если строка не число — выбросит NumberFormatException."
    }
  },
  {
    question: "Какой результат у кода: int x = 5; change(x); System.out.println(x); где change(int y) { y = 5; }",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Метод получил копию значения, изменение не затронет исходную переменную.",
      incorrect: "Java передаёт всё по значению (не по ссылке)"
    }
  },
  {
    question: "Что такое интерфейс в Java?",
    answer: "Абстракция поведения",
    options: ["Полная реализация", "Ссылка на класс", "Абстракция поведения", "Класс с конструктором"],
    explanation: {
      correct: "Интерфейс содержит сигнатуры методов без реализации. Классы реализуют эти методы.",
      incorrect: "С Java 8 в интерфейсах можно иметь default-методы."
    }
  },
  {
    question: "Как объявить массив в Java?",
    answer: "int[] arr = new int[5];",
    options: ["int arr = new int[5];", "int arr[] = new int[5];", "int[] arr = new int[5];", "Все перечисленные"],
    explanation: {
      correct: "Все три варианта работают. Объявления int[] arr и int arr[] — оба правильны.",
      incorrect: "Выбор стиля зависит от соглашений проекта."
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\" — совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в пуле строк."
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Для Integer за пределами диапазона -128..127 создаются новые объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) — всё ещё true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения от -128 до 127 кэшируются. a и b ссылаются на один объект.",
      incorrect: "a.equals(b) — всегда true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11 после инкремента",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["60", "1050", "102030", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок важен: 10 + \"20\" + 30 → \"102030\""
    }
  },
  {
    question: "Что такое класс Object?",
    answer: "Базовый класс всех объектов",
    options: ["Класс с методами ввода-вывода", "Базовый класс всех объектов", "Стандартная библиотека", "Встроенный тип"],
    explanation: {
      correct: "Object — родительский класс для всех классов в Java.",
      incorrect: "Содержит методы: toString(), equals(), hashCode(), clone(), finalize()"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 % 3);",
    answer: "1",
    options: ["3", "3.33", "1", "0"],
    explanation: {
      correct: "10 % 3 → 1. Остаток от деления.",
      incorrect: "Оператор % — остаток от деления."
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Для Integer за пределами -128..127 создаются новые объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) — всё ещё true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения от -128 до 127 кэшируются. a и b ссылаются на один объект.",
      incorrect: "a.equals(b) — всегда true"
    }
  },
  {
    question: "Как объявить ArrayList в Java?",
    answer: "List<String> list = new ArrayList<>();",
    options: ["ArrayList list = new ArrayList();", "List<String> list = new ArrayList<>();", "ArrayList<String> list = new List<>();", "A и B правильные"],
    explanation: {
      correct: "List<String> list = new ArrayList<>(); — лучший способ.",
      incorrect: "C — ошибка, так как List — интерфейс."
    }
  },
  {
    question: "Что такое JDK?",
    answer: "Набор разработчика (компилятор, отладчик, JRE и т.д.)",
    options: ["Только компилятор", "Только среда выполнения", "Набор разработчика (компилятор, отладчик, JRE и т.д.)", "Виртуальная машина"],
    explanation: {
      correct: "JDK включает JRE, JVM, javac, java, javadoc и другие инструменты.",
      incorrect: "Для разработки необходим именно JDK."
    }
  },
  {
    question: "Как объявить метод, который не возвращает значение?",
    answer: "void",
    options: ["int", "null", "void", "none"],
    explanation: {
      correct: "void — специальное ключевое слово, которое указывает, что метод ничего не возвращает.",
      incorrect: "return в void-методе возможен, но без значения."
    }
  },
  {
    question: "Что такое статический метод?",
    answer: "Вызывается без создания объекта",
    options: ["Вызывается только через объект", "Вызывается без создания объекта", "Используется для настройки JVM", "Может менять состояние объекта"],
    explanation: {
      correct: "static метод принадлежит классу, а не объекту. Вызывается через имя класса.",
      incorrect: "static методы не могут обращаться к this или non-static полям."
    }
  },
  {
    question: "Какой результат у кода: String s = \"Hello\"; s = s.replace('e', 'a'); System.out.println(s);",
    answer: "Hallo",
    options: ["Hallo", "Hello", "Hollo", "Error"],
    explanation: {
      correct: "replace() возвращает новую строку. Исходная остаётся неизменной.",
      incorrect: "s = \"Hello\" → replace → \"Hallo\""
    }
  },
  {
    question: "Какой результат у кода: int x = 10; System.out.println(x + \"5\");",
    answer: "105",
    options: ["105", "15", "Error", "10"],
    explanation: {
      correct: "x + \"5\" → \"10\" + \"5\" → \"105\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Что такое автобоксинг (autoboxing)?",
    answer: "Автоматическое преобразование примитива в соответствующий обёрточный класс",
    options: [
      "Преобразование класса в примитив",
      "Преобразование примитива в класс",
      "Преобразование одного класса в другой",
      "Автоматическая очистка памяти"
    ],
    explanation: {
      correct: "Autoboxing — это когда Java автоматически преобразует int в Integer, double в Double и т.д.",
      incorrect: "Double d = 10.0; — autoboxing"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["60", "1050", "102030", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок операций определяет результат."
    }
  },
  {
    question: "Что такое GC в Java?",
    answer: "Garbage Collector",
    options: ["Графический контекст", "Генератор кода", "Garbage Collector", "Глобальная переменная"],
    explanation: {
      correct: "GC — это сборщик мусора, который освобождает память от ненужных объектов.",
      incorrect: "Разработчик не управляет им явно."
    }
  },
  {
    question: "Какой результат у кода: String s1 = \"abc\"; String s2 = \"abc\"; s1 == s2;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Строковые литералы хранятся в пуле строк. s1 и s2 ссылаются на один объект.",
      incorrect: "new String(\"abc\") == new String(\"abc\") → false"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x + x++);",
    answer: "10",
    options: ["10", "11", "5", "Error"],
    explanation: {
      correct: "x + x++ → 5 + 5 → 10. Потом x станет 6.",
      incorrect: "Порядок важен: сначала берётся x, потом x++"
    }
  },
  {
    question: "Как объявить метод, который может быть переопределён в наследнике?",
    answer: "public void doSomething() {}",
    options: ["private void doSomething() {}", "final void doSomething() {}", "public void doSomething() {}", "static void doSomething() {}"],
    explanation: {
      correct: "Только public и protected методы могут быть переопределены.",
      incorrect: "private, final и static методы не переопределяются."
    }
  },
  {
    question: "Какой результат у кода: System.out.println(null instanceof String);",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "null не является экземпляром любого класса. instanceof возвращает false для null.",
      incorrect: "Проверка null instanceof String → false"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x + \"5\");",
    answer: "55",
    options: ["55", "10", "Error", "10"],
    explanation: {
      correct: "x + \"5\" → \"5\" + \"5\" → \"55\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Какой результат у кода: Integer a = 10; Integer b = 10; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "a и b ссылаются на кэшированный Integer-объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\" — совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "127 кэшируется → a и b ссылаются на один объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; System.out.println(x > 5 ? 10 : \"меньше\");",
    answer: "10",
    options: ["10", "\"меньше\"", "Error", "null"],
    explanation: {
      correct: "x > 5 → true → возвращается 10",
      incorrect: "Тернарный оператор возвращает либо int, либо String, но не оба сразу."
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x + \"5\");",
    answer: "55",
    options: ["55", "10", "Error", "10"],
    explanation: {
      correct: "x + \"5\" → \"5\" + \"5\" → \"55\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Что такое полиморфизм в Java?",
    answer: "Способность объекта принимать разные формы",
    options: ["Скрытие деталей реализации", "Разделение на части", "Способность объекта принимать разные формы", "Автоматическая очистка памяти"],
    explanation: {
      correct: "Полиморфизм позволяет одному методу работать с разными типами.",
      incorrect: "Реализуется через переопределение методов и наследование."
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x; x = 20; System.out.println(y);",
    answer: "10",
    options: ["10", "20", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; System.out.println(x + \"10\");",
    answer: "1010",
    options: ["1010", "20", "Error", "10"],
    explanation: {
      correct: "x + \"10\" → \"10\" + \"10\" → \"1010\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Для Integer за пределами -128..127 создаются новые объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "127 кэшируется → a и b ссылаются на один объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x + \"5\");",
    answer: "55",
    options: ["55", "10", "Error", "10"],
    explanation: {
      correct: "x + \"5\" → \"5\" + \"5\" → \"55\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Что означает ключевое слово final перед методом?",
    answer: "Метод нельзя переопределять в наследнике",
    options: ["Метод статичен", "Метод нельзя переопределять в наследнике", "Метод не может быть вызван", "Метод не может быть статическим"],
    explanation: {
      correct: "final метод нельзя переопределять в наследнике",
      incorrect: "final переменная должна быть инициализирована один раз"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\" — совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "127 кэшируется → a и b ссылаются на один объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + 20 + \"30\");",
    answer: "3030",
    options: ["3030", "102030", "60", "Error"],
    explanation: {
      correct: "10 + 20 → 30 → 30 + \"30\" → \"3030\".",
      incorrect: "Порядок важен: 10 + \"20\" + 30 → \"102030\""
    }
  },
  {
    question: "Что такое метод equals()?",
    answer: "Сравнивает объекты по значению",
    options: ["Сравнивает ссылки", "Сравнивает объекты по значению", "Сравнивает типы", "Сравнивает хэш-коды"],
    explanation: {
      correct: "equals() сравнивает содержимое объектов. Часто переопределяется вместе с hashCode().",
      incorrect: "Если не переопределять — работает как ==."
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\");",
    answer: "1020",
    options: ["1020", "30", "Error", "Exception"],
    explanation: {
      correct: "10 — int, \"20\" — String. При сложении превращается в строку.",
      incorrect: "10 + 20 → 30, 10 + \"20\" → \"1020\""
    }
  },
  {
    question: "Какой результат у кода: Integer a = 5; Integer b = 5; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "a и b ссылаются на кэшированный объект Integer.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s.toUpperCase(); System.out.println(s);",
    answer: "ABC",
    options: ["abc", "ABC", "Abc", "Error"],
    explanation: {
      correct: "toUpperCase() возвращает новую строку, исходная остаётся неизменной.",
      incorrect: "Строки в Java неизменны."
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + 20 + \"30\");",
    answer: "3030",
    options: ["3030", "102030", "60", "Error"],
    explanation: {
      correct: "10 + 20 → 30 → 30 + \"30\" → \"3030\".",
      incorrect: "Порядок операций важен!"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x + \"5\");",
    answer: "55",
    options: ["55", "10", "Error", "10"],
    explanation: {
      correct: "x + \"5\" → \"5\" + \"5\" → \"55\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) — true"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s += \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\" — совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "a и b ссылаются на кэшированный Integer-объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. После изменения x значение y остаётся прежним.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + 20 + \"30\");",
    answer: "3030",
    options: ["3030", "102030", "60", "Error"],
    explanation: {
      correct: "10 + 20 → 30 → 30 + \"30\" → \"3030\".",
      incorrect: "Порядок операций важен!"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x + \"5\");",
    answer: "55",
    options: ["55", "10", "Error", "10"],
    explanation: {
      correct: "x + \"5\" → \"5\" + \"5\" → \"55\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\", совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в пуле строк."
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "a и b ссылаются на кэшированный Integer-объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. После изменения x значение y остаётся прежним.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + 20 + \"30\");",
    answer: "3030",
    options: ["3030", "102030", "60", "Error"],
    explanation: {
      correct: "10 + 20 → 30 → 30 + \"30\" → \"3030\".",
      incorrect: "Порядок операций важен!"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x + \"5\");",
    answer: "55",
    options: ["55", "10", "Error", "10"],
    explanation: {
      correct: "x + \"5\" → \"5\" + \"5\" → \"55\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\" — совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "a и b ссылаются на кэшированный Integer-объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["60", "1050", "102030", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок операций важен: сначала числа, потом строки"
    }
  },
  {
    question: "Что такое метод equals()?",
    answer: "Сравнивает объекты по значению",
    options: ["сравнивает ссылки", "сравнивает объекты по значению", "сравнивает типы", "сравнивает хэш-коды"],
    explanation: {
      correct: "equals() сравнивает содержимое объектов. Часто переопределяется в классах.",
      incorrect: "Для строк: s1.equals(s2) — безопаснее, чем s1 == s2"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; System.out.println(x + \"10\");",
    answer: "1010",
    options: ["1010", "20", "Error", "10"],
    explanation: {
      correct: "x + \"10\" → \"10\" + \"10\" → \"1010\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "a и b ссылаются на кэшированный Integer-объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["60", "1050", "102030", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок операций важен"
    }
  },
  {
    question: "Что означает ключевое слово static перед методом?",
    answer: "Метод принадлежит классу, а не объекту",
    options: ["Метод принадлежит объекту", "Метод принадлежит классу, а не объекту", "Метод не может быть вызван", "Метод не может быть переопределён"],
    explanation: {
      correct: "static метод вызывается через имя класса, а не объекта.",
      incorrect: "static методы не могут использовать this"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\" — совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "a и b ссылаются на один и тот же кэшированный объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["3030", "102030", "60", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок операций важен"
    }
  },
  {
    question: "Что означает ключевое слово final перед методом?",
    answer: "Метод нельзя переопределять в наследнике",
    options: ["Метод не может быть вызван", "Метод нельзя переопределять в наследнике", "Метод не может быть перегружен", "Метод не может быть статическим"],
    explanation: {
      correct: "final метод нельзя переопределять в наследнике",
      incorrect: "final переменная должна быть инициализирована один раз"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\" — совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "127 кэшируется → a и b ссылаются на один объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["3030", "102030", "60", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок операций важен"
    }
  },
  {
    question: "Что такое класс в Java?",
    answer: "Шаблон для создания объектов",
    options: ["Тип данных", "Шаблон для создания объектов", "Метод", "Структура данных"],
    explanation: {
      correct: "class — пользовательский тип данных, описывающий состояние и поведение.",
      incorrect: "Класс может содержать поля, методы, конструкторы"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x + \"5\");",
    answer: "55",
    options: ["55", "10", "Error", "null"],
    explanation: {
      correct: "x + \"5\" → \"5\" + \"5\" → \"55\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x; x = 20; System.out.println(y);",
    answer: "10",
    options: ["10", "20", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["60", "1050", "102030", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок операций важен"
    }
  },
  {
    question: "Что означает ключевое слово final перед классом?",
    answer: "Класс не может иметь наследников",
    options: ["Класс не может быть изменён", "Класс не может иметь наследников", "Класс не может быть сериализован", "Класс может быть абстрактным"],
    explanation: {
      correct: "final класс нельзя наследовать. Пример: String — final.",
      incorrect: "final метод нельзя переопределять"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\", совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "a и b ссылаются на один и тот же кэшированный объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["60", "1050", "102030", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок важен: сначала числа, потом строки"
    }
  },
  {
    question: "Что означает ключевое слово final перед методом?",
    answer: "Метод нельзя переопределять в наследниках",
    options: ["Метод нельзя вызвать", "Метод нельзя переопределять в наследниках", "Метод нельзя перегрузить", "Метод нельзя сделать статическим"],
    explanation: {
      correct: "final метод нельзя переопределять в наследнике",
      incorrect: "final метод можно перегружать"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\", совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "127 кэшируется → a и b ссылаются на один объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["60", "1050", "102030", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок важен: сначала числа, потом строки"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\" — совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "a и b ссылаются на кэшированный объект Integer.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. Изменение x не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["60", "1050", "102030", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок операций важен"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; System.out.println(x + \"5\");",
    answer: "55",
    options: ["55", "10", "Error", "10"],
    explanation: {
      correct: "x + \"5\" → \"5\" + \"5\" → \"55\".",
      incorrect: "Сложение числа и строки превращает всё в строку."
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\", совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 128; Integer b = 128; a == b;",
    answer: "false",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "Значения за пределами -128..127 — разные объекты. == сравнивает ссылки.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: Integer a = 127; Integer b = 127; a == b;",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "a и b ссылаются на один и тот же кэшированный объект.",
      incorrect: "a.equals(b) → true"
    }
  },
  {
    question: "Какой результат у кода: int x = 5; int y = x; x = 10; System.out.println(y);",
    answer: "5",
    options: ["5", "10", "0", "Error"],
    explanation: {
      correct: "y получает копию x. x = 10 не влияет на y.",
      incorrect: "Java передаёт примитивы по значению"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = x++; System.out.println(y);",
    answer: "10",
    options: ["10", "11", "9", "Error"],
    explanation: {
      correct: "x++ — постфиксный инкремент. y = 10, x = 11",
      incorrect: "Сначала присвоение, потом инкремент"
    }
  },
  {
    question: "Какой результат у кода: int x = 10; int y = ++x + x; System.out.println(y);",
    answer: "22",
    options: ["21", "22", "23", "Error"],
    explanation: {
      correct: "++x = 11, x = 11 → 11 + 11 = 22",
      incorrect: "pre-increment меняет x до использования"
    }
  },
  {
    question: "Какой результат у кода: System.out.println(10 + \"20\" + 30);",
    answer: "102030",
    options: ["60", "1050", "102030", "Error"],
    explanation: {
      correct: "10 + \"20\" → \"1020\", \"1020\" + 30 → \"102030\".",
      incorrect: "Порядок важен: сначала числа, потом строки"
    }
  },
  {
    question: "Что означает ключевое слово final перед классом?",
    answer: "Класс нельзя наследовать",
    options: ["Класс нельзя изменить", "Класс нельзя наследовать", "Класс нельзя сериализовать", "Класс может быть абстрактным"],
    explanation: {
      correct: "final класс нельзя наследовать. Пример: класс String.",
      incorrect: "final метод нельзя переопределять"
    }
  },
  {
    question: "Какой результат у кода: String s = \"abc\"; s = s + \"def\"; s == \"abcdef\";",
    answer: "true",
    options: ["true", "false", "Error", "Exception"],
    explanation: {
      correct: "s + \"def\" → \"abcdef\" — совпадает с литералом → ссылки совпадают.",
      incorrect: "Строки кэшируются в String Pool"
    }
  }]