export default [
  {
    question: "Какое ключевое слово используется для создания константы в C#?",
    answer: "const",
    options: ["readonly", "static", "const", "final"],
    explanation: {
      correct: "В C# константы создаются с помощью ключевого слова const.",
      incorrect: "readonly — определяет поля, которые можно изменить только в конструкторе."
    }
  },
  {
    question: "Какой метод является точкой входа в приложение C#?",
    answer: "Main",
    options: ["Start", "Run", "Main", "Init"],
    explanation: {
      correct: "Метод Main является точкой входа в приложение C#.",
      incorrect: "Start и Run могут использоваться в других контекстах, например, в Unity или Windows Forms."
    }
  },
  {
    question: "Какой тип данных может принимать значения true или false?",
    answer: "bool",
    options: ["boolean", "int", "char", "bool"],
    explanation: {
      correct: "В C# логический тип данных называется bool.",
      incorrect: "boolean — из Java, int и char не предназначены для логических значений."
    }
  },
  {
    question: "Какое ключевое слово используется для наследования класса?",
    answer: ":", // Наследование через двоеточие
    options: ["extends", "implements", ":", "inherits"],
    explanation: {
      correct: "В C# наследование указывается через двоеточие после имени класса.",
      incorrect: "extends и implements — из Java, inherits — не ключевое слово в C#."
    }
  },
  {
    question: "Какое ключевое слово используется для реализации интерфейсов?",
    answer: ":",
    options: ["implements", "extends", ":", "interface"],
    explanation: {
      correct: "В C# как наследование классов, так и реализация интерфейсов указываются через ':'",
      incorrect: "implements — из Java"
    }
  },
  {
    question: "Какой оператор используется для выхода из цикла в C#?",
    answer: "break",
    options: ["continue", "return", "exit", "break"],
    explanation: {
      correct: "Оператор break завершает выполнение цикла или switch.",
      incorrect: "continue пропускает текущую итерацию, return выходит из метода."
    }
  },
  {
    question: "Какой класс является базовым для всех классов в C#?",
    answer: "object",
    options: ["Object", "object", "base", "System.Object"],
    explanation: {
      correct: "Тип object (или System.Object) является корневым типом иерархии в C#.",
      incorrect: "base — используется для вызова методов родителя, а не базовый тип."
    }
  },
  {
    question: "Какой модификатор доступа делает член класса доступным только внутри класса?",
    answer: "private",
    options: ["public", "protected", "internal", "private"],
    explanation: {
      correct: "private ограничивает доступ до самого класса.",
      incorrect: "internal — доступен внутри сборки, protected — внутри класса и его наследников."
    }
  },
  {
    question: "Какой тип данных представляет Unicode-символ?",
    answer: "char",
    options: ["byte", "char", "short", "string"],
    explanation: {
      correct: "char хранит один Unicode-символ размером 16 бит.",
      incorrect: "string — это последовательность символов."
    }
  },
  {
    question: "Какое ключевое слово позволяет автоматически управлять ресурсами (например, файлами)?",
    answer: "using",
    options: ["try", "dispose", "using", "lock"],
    explanation: {
      correct: "Конструкция using обеспечивает корректное освобождение ресурсов, реализующих IDisposable.",
      incorrect: "try — часть блока исключений, dispose — метод, lock — для синхронизации."
    }
  },
  {
    question: "Какой тип данных имеет значение по умолчанию null?",
    answer: "string",
    options: ["int", "bool", "string", "double"],
    explanation: {
      correct: "string — ссылочный тип, может быть равен null.",
      incorrect: "int, bool, double — примитивы, имеют ненулевые значения по умолчанию."
    }
  },
  {
    question: "Какой оператор проверяет, является ли объект экземпляром указанного типа?",
    answer: "is",
    options: ["as", "typeof", "is", "cast"],
    explanation: {
      correct: "Оператор is проверяет тип объекта во время выполнения.",
      incorrect: "as пытается преобразовать тип, typeof — получает информацию о типе."
    }
  },
  {
    question: "Какое ключевое слово используется для создания нового экземпляра объекта?",
    answer: "new",
    options: ["this", "new", "create", "instance"],
    explanation: {
      correct: "Для создания нового объекта в C# используется ключевое слово new.",
      incorrect: "this ссылается на текущий объект, create и instance — не ключевые слова."
    }
  },
  {
    question: "Какой блок кода выполняется всегда, даже если было выброшено исключение?",
    answer: "finally",
    options: ["catch", "try", "finally", "throw"],
    explanation: {
      correct: "Блок finally выполняется всегда, независимо от того, было ли исключение.",
      incorrect: "catch обрабатывает исключения, throw генерирует их."
    }
  },
  {
    question: "Какой тип коллекции не допускает дубликатов элементов?",
    answer: "HashSet<T>",
    options: ["List<T>", "Dictionary<TKey, TValue>", "HashSet<T>", "Queue<T>"],
    explanation: {
      correct: "HashSet<T> хранит уникальные элементы без дубликатов.",
      incorrect: "List<T> и Queue<T> допускают повторяющиеся значения."
    }
  },
  {
    question: "Какое ключевое слово указывает, что метод не возвращает значение?",
    answer: "void",
    options: ["null", "none", "void", "empty"],
    explanation: {
      correct: "Ключевое слово void указывает, что метод не возвращает результат.",
      incorrect: "null может быть значением ссылочных типов, но не типом возвращаемого значения."
    }
  },
  {
    question: "Какое ключевое слово применяется для явного скрытия члена базового класса?",
    answer: "new",
    options: ["override", "virtual", "new", "hide"],
    explanation: {
      correct: "Ключевое слово new используется для явного скрытия члена базового класса.",
      incorrect: "override — для переопределения виртуальных методов."
    }
  },
  {
    question: "Какой метод используется для получения строкового представления объекта?",
    answer: "ToString()",
    options: ["GetType()", "Equals()", "ToString()", "GetHashCode()"],
    explanation: {
      correct: "Метод ToString() возвращает строковое представление объекта.",
      incorrect: "GetType() возвращает информацию о типе объекта."
    }
  },
  {
    question: "Какой тип данных представляет целое число со знаком, занимающее 4 байта?",
    answer: "int",
    options: ["long", "short", "int", "byte"],
    explanation: {
      correct: "int — это 32-битное целое число (4 байта).",
      incorrect: "long — 8 байт, short — 2 байта, byte — 1 байт."
    }
  },
  {
    question: "Какое ключевое слово указывает, что поле или метод принадлежит самому классу, а не экземпляру?",
    answer: "static",
    options: ["const", "readonly", "static", "volatile"],
    explanation: {
      correct: "static относится к классу, а не к конкретному экземпляру.",
      incorrect: "const и readonly — для констант и полей только для чтения."
    }
  },
  {
    question: "Какой тип данных может содержать null для числовых типов?",
    answer: "int?",
    options: ["int", "nullable<int>", "int?", "Integer"],
    explanation: {
      correct: "int? — nullable тип, который может принимать значение null.",
      incorrect: "Integer — из Java, nullable<int> — неверный синтаксис."
    }
  },
  {
    question: "Какой оператор используется для безопасного приведения объекта к типу?",
    answer: "as",
    options: ["is", "cast", "as", "typeof"],
    explanation: {
      correct: "Оператор as пытается привести объект к указанному типу и возвращает null при неудаче.",
      incorrect: "is проверяет тип, typeof — возвращает информацию о типе."
    }
  },
  {
    question: "Какой уровень доступа делает член класса доступным только внутри сборки?",
    answer: "internal",
    options: ["private", "protected", "internal", "public"],
    explanation: {
      correct: "internal — доступен только внутри текущей сборки.",
      incorrect: "private — внутри класса, protected — внутри класса и наследников."
    }
  },
  {
    question: "Какой тип данных представляет дробное число двойной точности?",
    answer: "double",
    options: ["float", "decimal", "double", "long"],
    explanation: {
      correct: "double — 64-битное число с плавающей точкой.",
      incorrect: "float — одинарная точность, decimal — высокая точность для финансовых расчетов."
    }
  },
  {
    question: "Какое ключевое слово используется для объявления абстрактного класса?",
    answer: "abstract",
    options: ["sealed", "virtual", "abstract", "override"],
    explanation: {
      correct: "abstract используется для создания абстрактных классов и методов.",
      incorrect: "sealed — запрещает наследование, virtual — позволяет переопределять методы."
    }
  },
  {
    question: "Какой метод выводит текст в консоль?",
    answer: "Console.WriteLine()",
    options: ["Console.Write()", "Console.Log()", "Console.WriteLine()", "Debug.WriteLine()"],
    explanation: {
      correct: "Для вывода текста в консоль в C# используется Console.WriteLine().",
      incorrect: "Console.Log() — из JavaScript, Debug.WriteLine() — для отладки."
    }
  },
  {
    question: "Какой уровень доступа позволяет наследникам получать доступ к члену класса вне сборки?",
    answer: "protected",
    options: ["private", "internal", "protected", "public"],
    explanation: {
      correct: "protected даёт доступ внутри класса и его наследников, даже вне сборки.",
      incorrect: "internal — только внутри сборки, private — только внутри класса."
    }
  },
  {
    question: "Какое ключевое слово используется для создания неизменяемой строки?",
    answer: "string",
    options: ["StringBuilder", "String", "string", "ImmutableString"],
    explanation: {
      correct: "string в C# — неизменяемый тип.",
      incorrect: "StringBuilder — изменяемый, ImmutableString — из других библиотек."
    }
  },
  {
    question: "Какой метод используется для сравнения двух объектов на равенство?",
    answer: "Equals()",
    options: ["==", "CompareTo()", "Equals()", "Compare()"],
    explanation: {
      correct: "Метод Equals() сравнивает содержимое объектов.",
      incorrect: "== может сравнивать ссылки, CompareTo() — для сортировки."
    }
  },
  {
    question: "Какой тип данных используется для работы с регулярными выражениями?",
    answer: "Regex",
    options: ["Pattern", "Matcher", "Regex", "String.Regex"],
    explanation: {
      correct: "Regex — основной класс для работы с регулярными выражениями в C#.",
      incorrect: "Pattern и Matcher — из Java."
    }
  },
  {
    question: "Какой уровень доступа делает член класса доступным всем?",
    answer: "public",
    options: ["private", "protected", "internal", "public"],
    explanation: {
      correct: "public делает член класса доступным из любого места.",
      incorrect: "private — только внутри класса, internal — внутри сборки."
    }
  },
  {
    question: "Какое ключевое слово используется для предотвращения изменения значения переменной?",
    answer: "readonly",
    options: ["const", "static", "readonly", "sealed"],
    explanation: {
      correct: "readonly позволяет задать значение только один раз — при объявлении или в конструкторе.",
      incorrect: "const — константа времени компиляции, sealed — ограничивает наследование."
    }
  },
  {
    question: "Какой тип данных представляет дробное число с высокой точностью?",
    answer: "decimal",
    options: ["float", "double", "decimal", "money"],
    explanation: {
      correct: "decimal используется для точных вычислений, особенно в финансовых задачах.",
      incorrect: "float и double — менее точные, money — не существует в C#."
    }
  },
  {
    question: "Какое ключевое слово используется для создания события?",
    answer: "event",
    options: ["delegate", "handler", "event", "callback"],
    explanation: {
      correct: "event — ключевое слово для объявления событий в C#.",
      incorrect: "delegate — тип, handler — метод, callback — стиль программирования."
    }
  },
  {
    question: "Какой тип данных представляет собой последовательность символов?",
    answer: "string",
    options: ["StringBuilder", "char[]", "string", "StringBuffer"],
    explanation: {
      correct: "string — неизменяемая последовательность символов.",
      incorrect: "StringBuilder — изменяемая, StringBuffer — из Java."
    }
  },
  {
    question: "Какое ключевое слово используется для вызова конструктора базового класса?",
    answer: "base",
    options: ["this", "super", "base", "parent"],
    explanation: {
      correct: "Ключевое слово base вызывает конструктор или метод родительского класса.",
      incorrect: "super — в Java, this — вызывает другой конструктор текущего класса."
    }
  },
  {
    question: "Какой метод возвращает хэш-код объекта?",
    answer: "GetHashCode()",
    options: ["ToString()", "Equals()", "GetHashCode()", "GetType()"],
    explanation: {
      correct: "Метод GetHashCode() возвращает уникальное число, представляющее объект.",
      incorrect: "Equals() сравнивает объекты, GetType() — возвращает информацию о типе."
    }
  },
  {
    question: "Какой класс используется для работы с датами и временем?",
    answer: "DateTime",
    options: ["Date", "TimeSpan", "DateTime", "LocalDate"],
    explanation: {
      correct: "DateTime — основной класс для работы с датами и временем в C#.",
      incorrect: "LocalDate — из Java, TimeSpan — представляет временной интервал."
    }
  },
  {
    question: "Какой тип данных используется для хранения очень больших целых чисел?",
    answer: "BigInteger",
    options: ["Int64", "long", "BigInteger", "int"],
    explanation: {
      correct: "BigInteger поддерживает целые числа произвольной длины.",
      incorrect: "long и Int64 — 64-битные целые числа."
    }
  },
  {
    question: "Какой уровень доступа делает член класса доступным только внутри текущей сборки или производных классов?",
    answer: "internal protected",
    options: ["private", "protected", "internal protected", "public"],
    explanation: {
      correct: "internal protected — доступен внутри сборки и наследникам вне её.",
      incorrect: "protected — только наследникам, internal — только внутри сборки."
    }
  },
  {
    question: "Какое ключевое слово используется для указания, что метод должен быть реализован в каждом наследнике?",
    answer: "abstract",
    options: ["override", "virtual", "abstract", "sealed"],
    explanation: {
      correct: "abstract требует реализации метода в каждом наследнике.",
      incorrect: "virtual — позволяет переопределять, sealed — запрещает переопределение."
    }
  },
  {
    question: "Какой метод используется для сериализации объекта в JSON?",
    answer: "JsonSerializer.Serialize()",
    options: ["JsonConvert.SerializeObject()", "Serialize()", "JsonSerializer.Serialize()", "ToJson()"],
    explanation: {
      correct: "В .NET Core 3.0+ используется JsonSerializer.Serialize() для сериализации в JSON.",
      incorrect: "JsonConvert.SerializeObject() — из Newtonsoft.Json, ToJson() — не стандартный метод."
    }
  },
  {
    question: "Какое ключевое слово используется для указания, что класс не может быть унаследован?",
    answer: "sealed",
    options: ["abstract", "static", "sealed", "final"],
    explanation: {
      correct: "sealed запрещает наследование класса.",
      incorrect: "abstract — обязывает наследовать, static — делает класс статическим."
    }
  },
  {
    question: "Какой тип данных используется для работы с изменяемой строкой?",
    answer: "StringBuilder",
    options: ["String", "Char", "StringBuilder", "StringWriter"],
    explanation: {
      correct: "StringBuilder используется для эффективной манипуляции строками.",
      incorrect: "String — неизменяемый, StringWriter — для потоковой записи."
    }
  },
  {
    question: "Какой оператор используется для генерации исключения?",
    answer: "throw",
    options: ["try", "catch", "throw", "finally"],
    explanation: {
      correct: "Оператор throw генерирует исключение.",
      incorrect: "try и catch — части блока обработки исключений."
    }
  },
  {
    question: "Какое ключевое слово используется для указания, что метод может быть переопределен?",
    answer: "virtual",
    options: ["override", "abstract", "virtual", "sealed"],
    explanation: {
      correct: "virtual позволяет методу быть переопределенным в наследниках.",
      incorrect: "override — переопределяет, abstract — абстрактный метод."
    }
  },
  {
    question: "Какой уровень доступа позволяет получить доступ только внутри текущего проекта или сборки?",
    answer: "internal",
    options: ["private", "protected", "internal", "public"],
    explanation: {
      correct: "internal делает член класса доступным только внутри сборки.",
      incorrect: "private — внутри класса, protected — внутри класса и наследников."
    }
  },
  {
    question: "Какой тип данных представляет дробное число с одинарной точностью?",
    answer: "float",
    options: ["double", "decimal", "float", "long"],
    explanation: {
      correct: "float — это 32-битное число с плавающей точкой.",
      incorrect: "double — двойная точность, decimal — высокая точность."
    }
  },
  {
    question: "Какой класс используется для работы с файлами в C#?",
    answer: "File",
    options: ["FileInfo", "FileStream", "File", "Path"],
    explanation: {
      correct: "Класс File предоставляет статические методы для работы с файлами.",
      incorrect: "FileInfo — для более детальной работы, Path — для путей."
    }
  },
  {
    question: "Какое ключевое слово используется для указания, что метод не имеет тела и должен быть реализован в наследнике?",
    answer: "abstract",
    options: ["virtual", "override", "abstract", "partial"],
    explanation: {
      correct: "abstract создает метод без реализации, который должен быть реализован в наследнике.",
      incorrect: "virtual — позволяет переопределять, override — переопределяет."
    }
  },
  {
    question: "Какое ключевое слово используется для создания асинхронного метода?",
    answer: "async",
    options: ["await", "sync", "async", "thread"],
    explanation: {
      correct: "async указывает, что метод содержит асинхронную логику.",
      incorrect: "await — приостанавливает выполнение метода, sync и thread — не ключевые слова."
    }
  },
  {
    question: "Какое ключевое слово используется для ожидания завершения асинхронной операции?",
    answer: "await",
    options: ["async", "wait", "await", "join"],
    explanation: {
      correct: "await используется для ожидания завершения асинхронной операции без блокировки.",
      incorrect: "async — помечает метод, wait и join — из многопоточности."
    }
  },
  {
    question: "Какой тип данных представляет собой массив в C#?",
    answer: "T[]",
    options: ["List<T>", "Array<T>", "T[]", "Collection<T>"],
    explanation: {
      correct: "Массив в C# объявляется как T[], например: int[] arr;",
      incorrect: "List<T> — коллекция, Array<T> — не существует, Collection<T> — обобщённая коллекция."
    }
  },
  {
    question: "Какой метод используется для освобождения неуправляемых ресурсов?",
    answer: "Dispose()",
    options: ["Finalize()", "Close()", "Dispose()", "Release()"],
    explanation: {
      correct: "Метод Dispose() вызывается для освобождения неуправляемых ресурсов.",
      incorrect: "Finalize() — вызывается сборщиком мусора, Close() — иногда вызывает Dispose()."
    }
  },
  {
    question: "Какое ключевое слово используется для создания частичного класса?",
    answer: "partial",
    options: ["partial", "abstract", "sealed", "internal"],
    explanation: {
      correct: "partial позволяет разделить определение класса на несколько файлов.",
      incorrect: "abstract — абстрактный класс, sealed — запрещает наследование."
    }
  },
  {
    question: "Какой тип данных представляет собой словарь пар ключ-значение?",
    answer: "Dictionary<TKey, TValue>",
    options: ["List<T>", "HashSet<T>", "Dictionary<TKey, TValue>", "SortedSet<T>"],
    explanation: {
      correct: "Dictionary<TKey, TValue> используется для хранения пар ключ-значение.",
      incorrect: "List<T> — список, HashSet<T> — набор уникальных элементов."
    }
  },
  {
    question: "Какой уровень доступа делает член класса доступным только внутри текущего класса и его частичных частей?",
    answer: "private",
    options: ["internal", "protected", "private", "public"],
    explanation: {
      correct: "private делает член класса доступным только внутри текущего класса.",
      incorrect: "internal — внутри сборки, protected — внутри класса и наследников."
    }
  },
  {
    question: "Какой тип данных представляет собой неизменяемую коллекцию строк?",
    answer: "ReadOnlyCollection<string>",
    options: ["List<string>", "IEnumerable<string>", "ReadOnlyCollection<string>", "string[]"],
    explanation: {
      correct: "ReadOnlyCollection<string> предоставляет неизменяемый доступ к коллекции.",
      incorrect: "IEnumerable<string> — только для перечисления, string[] — обычный массив."
    }
  },
  {
    question: "Какое ключевое слово используется для указания, что метод должен быть переопределен?",
    answer: "abstract",
    options: ["override", "virtual", "abstract", "sealed"],
    explanation: {
      correct: "abstract используется для объявления абстрактных методов, которые должны быть переопределены.",
      incorrect: "override — для переопределения, virtual — для возможности переопределения."
    }
  },
  {
    question: "Какой метод используется для преобразования строки в число int?",
    answer: "int.Parse()",
    options: ["Convert.ToInt32()", "Parse()", "int.Parse()", "ToInt()"],
    explanation: {
      correct: "int.Parse() преобразует строку в целое число.",
      incorrect: "Convert.ToInt32() также работает, но Parse() — специализированный метод."
    }
  }
]