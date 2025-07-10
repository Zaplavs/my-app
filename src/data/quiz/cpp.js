export default [
  {
    question: "Какое ключевое слово используется для определения константы в C++?",
    answer: "const",
    options: ["const", "final", "readonly", "static"],
    explanation: {
      correct: "Ключевое слово const используется для создания констант в C++.",
      incorrect: "final — ограничивает переопределение методов, readonly — из C#."
    }
  },
  {
    question: "Какой тип данных используется для хранения логических значений?",
    answer: "bool",
    options: ["boolean", "int", "bool", "logical"],
    explanation: {
      correct: "Тип bool хранит значения true или false.",
      incorrect: "boolean — из Java, logical — не существует в C++."
    }
  },
  {
    question: "Какой оператор выделяет динамическую память в C++?",
    answer: "new",
    options: ["malloc", "calloc", "new", "alloc"],
    explanation: {
      correct: "Оператор new выделяет память и вызывает конструктор объекта.",
      incorrect: "malloc и calloc — из C, не вызывают конструкторы."
    }
  },
  {
    question: "Какой оператор освобождает динамически выделенную память?",
    answer: "delete",
    options: ["free", "delete", "remove", "clear"],
    explanation: {
      correct: "Оператор delete освобождает память, выделенную с помощью new.",
      incorrect: "free — из C, используется с malloc."
    }
  },
  {
    question: "Какой символ используется для объявления ссылки?",
    answer: "&",
    options: ["*", "&", "->", "::"],
    explanation: {
      correct: "Символ & используется для объявления ссылки на переменную.",
      incorrect: "* — для указателя, -> — для доступа через указатель, :: — область видимости."
    }
  },
  {
    question: "Какой тип указателя указывает на ничто?",
    answer: "nullptr",
    options: ["NULL", "null", "nullptr", "void*"],
    explanation: {
      correct: "nullptr — типобезопасное значение, представляющее нулевой указатель.",
      incorrect: "NULL — устаревшее значение из C, void* — указатель на неизвестный тип."
    }
  },
  {
    question: "Какой класс используется для работы с текстовыми строками?",
    answer: "std::string",
    options: ["char[]", "String", "std::string", "std::wstring"],
    explanation: {
      correct: "std::string — стандартный класс для работы с строками в C++.",
      incorrect: "char[] — массив символов, String — из C#, std::wstring — для широких строк."
    }
  },
  {
    question: "Какой заголовочный файл предоставляет функции ввода-вывода?",
    answer: "<iostream>",
    options: ["<stdio.h>", "<iostream>", "<fstream>", "<sstream>"],
    explanation: {
      correct: "iostream предоставляет объекты cin, cout, cerr для ввода/вывода.",
      incorrect: "stdio.h — из C, fstream — для файлового ввода/вывода."
    }
  },
  {
    question: "Какой модификатор доступа делает член класса недоступным вне класса?",
    answer: "private",
    options: ["public", "protected", "private", "internal"],
    explanation: {
      correct: "private ограничивает доступ только до самого класса.",
      incorrect: "internal — из C#, protected — доступен в классе и наследниках."
    }
  },
  {
    question: "Какой метод автоматически вызывается при создании объекта?",
    answer: "конструктор",
    options: ["деструктор", "метод", "конструктор", "оператор"],
    explanation: {
      correct: "Конструктор вызывается автоматически при создании объекта.",
      incorrect: "Деструктор вызывается при уничтожении объекта."
    }
  },
  {
    question: "Какой метод автоматически вызывается при уничтожении объекта?",
    answer: "деструктор",
    options: ["конструктор", "деструктор", "метод", "оператор"],
    explanation: {
      correct: "Деструктор вызывается при уничтожении объекта для освобождения ресурсов.",
      incorrect: "Конструктор вызывается при создании объекта."
    }
  },
  {
    question: "Какое ключевое слово используется для наследования класса?",
    answer: "class Derived : public Base",
    options: ["extends", "inherits", ":", "class Derived from Base"],
    explanation: {
      correct: "Наследование в C++ указывается через двоеточие и спецификатор доступа.",
      incorrect: "extends — из Java, inherits — из C#."
    }
  },
  {
    question: "Какой тип данных занимает 4 байта и хранит целые числа?",
    answer: "int",
    options: ["short", "long", "int", "char"],
    explanation: {
      correct: "int обычно занимает 4 байта и хранит целые числа.",
      incorrect: "short — 2 байта, long — 4 или 8, char — 1 байт."
    }
  },
  {
    question: "Какой контейнер STL хранит уникальные элементы в отсортированном виде?",
    answer: "std::set",
    options: ["std::list", "std::vector", "std::set", "std::unordered_set"],
    explanation: {
      correct: "std::set хранит уникальные элементы в отсортированном порядке.",
      incorrect: "unordered_set — неупорядоченный, vector — динамический массив."
    }
  },
  {
    question: "Какой контейнер STL реализует хэш-таблицу?",
    answer: "std::unordered_map",
    options: ["std::map", "std::unordered_map", "std::set", "std::vector"],
    explanation: {
      correct: "std::unordered_map реализует хэш-таблицу для хранения пар ключ-значение.",
      incorrect: "map — реализован на основе красно-чёрного дерева."
    }
  },
  {
    question: "Какой оператор возвращает адрес переменной?",
    answer: "&",
    options: ["&", "*", "->", "::"],
    explanation: {
      correct: "Оператор & возвращает адрес переменной.",
      incorrect: "* — разыменование указателя, -> — доступ через указатель."
    }
  },
  {
    question: "Какой оператор разыменовывает указатель?",
    answer: "*",
    options: ["&", "*", "->", "::"],
    explanation: {
      correct: "Оператор * используется для получения значения по указателю.",
      incorrect: "& — возвращает адрес, -> — доступ через указатель на объект."
    }
  },
  {
    question: "Какое ключевое слово указывает, что метод не изменяет состояние объекта?",
    answer: "const",
    options: ["static", "virtual", "const", "mutable"],
    explanation: {
      correct: "const после метода гарантирует, что он не изменит состояние объекта.",
      incorrect: "mutable — позволяет изменять поле даже в const-объекте."
    }
  },
  {
    question: "Какой спецификатор указывает, что метод можно переопределять в наследниках?",
    answer: "virtual",
    options: ["override", "final", "virtual", "abstract"],
    explanation: {
      correct: "virtual позволяет методу быть переопределенным в производных классах.",
      incorrect: "override — помечает переопределенный метод, final — запрещает переопределение."
    }
  },
  {
    question: "Какое ключевое слово используется для явного запрета переопределения метода?",
    answer: "final",
    options: ["override", "virtual", "sealed", "final"],
    explanation: {
      correct: "final после метода запрещает его дальнейшее переопределение.",
      incorrect: "sealed — из C#"
    }
  },
  {
    question: "Какое ключевое слово используется для реализации интерфейсов?",
    answer: "class",
    options: ["interface", "abstract", "class", "implements"],
    explanation: {
      correct: "В C++ интерфейсы реализуются через абстрактные классы с чисто виртуальными методами.",
      incorrect: "interface и implements — из Java."
    }
  },
  {
    question: "Какой тип данных используется для создания шаблонов?",
    answer: "template",
    options: ["generic", "typeparam", "template", "using"],
    explanation: {
      correct: "template — ключевое слово для создания шаблонных функций и классов.",
      incorrect: "generic — из C#, using — для пространств имён."
    }
  },
  {
    question: "Какое ключевое слово указывает, что класс или функция имеет внешнее связывание?",
    answer: "extern",
    options: ["static", "inline", "extern", "auto"],
    explanation: {
      correct: "extern используется для объявления глобальных переменных и функций, определённых в другом файле.",
      incorrect: "static — ограничивает видимость, inline — встраиваемые функции."
    }
  },
  {
    question: "Какое ключевое слово используется для включения пространства имён?",
    answer: "using",
    options: ["import", "namespace", "using", "include"],
    explanation: {
      correct: "using namespace std; позволяет использовать имена из пространства имён без префикса.",
      incorrect: "import — из Java, namespace — объявляет пространство имён."
    }
  },
  {
    question: "Какой заголовочный файл содержит классы для работы с файлами?",
    answer: "<fstream>",
    options: ["<iostream>", "<fstream>", "<sstream>", "<cstdio>"],
    explanation: {
      correct: "fstream предоставляет ifstream и ofstream для работы с файлами.",
      incorrect: "iostream — для консольного ввода/вывода."
    }
  },
  {
    question: "Какой тип данных используется для хранения вещественных чисел с одинарной точностью?",
    answer: "float",
    options: ["double", "float", "decimal", "long double"],
    explanation: {
      correct: "float — 32-битное число с плавающей точкой.",
      incorrect: "double — двойная точность, decimal — из C#."
    }
  },
  {
    question: "Какой тип данных используется для хранения вещественных чисел с двойной точностью?",
    answer: "double",
    options: ["float", "double", "decimal", "real"],
    explanation: {
      correct: "double — 64-битное число с плавающей точкой.",
      incorrect: "float — одинарная точность, decimal — из C#."
    }
  },
  {
    question: "Какой оператор используется для проверки типа во время выполнения?",
    answer: "dynamic_cast",
    options: ["static_cast", "reinterpret_cast", "dynamic_cast", "const_cast"],
    explanation: {
      correct: "dynamic_cast используется для безопасного приведения типов в иерархии наследования.",
      incorrect: "static_cast — статическое приведение, reinterpret_cast — небезопасное."
    }
  },
  {
    question: "Какой метод возвращает количество элементов в векторе?",
    answer: "size()",
    options: ["length()", "count()", "size()", "getSize()"],
    explanation: {
      correct: "Метод size() возвращает количество элементов в векторе.",
      incorrect: "getSize() — не стандартный метод C++."
    }
  },
  {
    question: "Какое ключевое слово используется для создания псевдонима типа?",
    answer: "using",
    options: ["typedef", "alias", "using", "define"],
    explanation: {
      correct: "using позволяет создавать псевдонимы типов: using MyType = int;",
      incorrect: "typedef — устаревший способ из C."
    }
  },
  {
    question: "Какое ключевое слово указывает, что переменная может быть изменена внешними процессами?",
    answer: "volatile",
    options: ["const", "mutable", "volatile", "atomic"],
    explanation: {
      correct: "volatile сообщает компилятору, что значение переменной может измениться вне программы.",
      incorrect: "const — неизменяемая, atomic — из <atomic>, для многопоточной работы."
    }
  },
  {
    question: "Какое ключевое слово используется для явного отключения автоматического преобразования типов?",
    answer: "explicit",
    options: ["inline", "explicit", "friend", "virtual"],
    explanation: {
      correct: "explicit запрещает неявные преобразования типов через конструкторы.",
      incorrect: "inline — встраиваемые функции, friend — дружественные функции."
    }
  },
  {
    question: "Какое ключевое слово позволяет функции получить доступ к закрытым членам класса?",
    answer: "friend",
    options: ["public", "protected", "friend", "external"],
    explanation: {
      correct: "friend делает функцию или класс дружественным, предоставляя доступ к private членам.",
      incorrect: "public — модификатор доступа, external — не ключевое слово."
    }
  },
  {
    question: "Какой заголовочный файл содержит реализацию умных указателей?",
    answer: "<memory>",
    options: ["<iostream>", "<memory>", "<pointers>", "<smart_ptr>"],
    explanation: {
      correct: "memory предоставляет умные указатели: std::unique_ptr, std::shared_ptr.",
      incorrect: "smart_ptr — из библиотеки Boost."
    }
  },
  {
    question: "Какой умный указатель владеет объектом исключительно?",
    answer: "std::unique_ptr",
    options: ["std::shared_ptr", "std::weak_ptr", "std::unique_ptr", "std::auto_ptr"],
    explanation: {
      correct: "std::unique_ptr владеет объектом исключительно и не допускает копирования.",
      incorrect: "std::shared_ptr — разделяет владение, std::auto_ptr — устарел."
    }
  },
  {
    question: "Какой умный указатель разделяет владение объектом?",
    answer: "std::shared_ptr",
    options: ["std::unique_ptr", "std::shared_ptr", "std::weak_ptr", "std::auto_ptr"],
    explanation: {
      correct: "std::shared_ptr использует подсчёт ссылок и делит владение объектом.",
      incorrect: "std::unique_ptr — исключительное владение."
    }
  },
  {
    question: "Какой умный указатель используется для разрыва циклических ссылок?",
    answer: "std::weak_ptr",
    options: ["std::shared_ptr", "std::unique_ptr", "std::weak_ptr", "std::auto_ptr"],
    explanation: {
      correct: "std::weak_ptr используется вместе с shared_ptr, чтобы избежать циклических ссылок.",
      incorrect: "std::shared_ptr — разделяет владение, но может вызвать утечки."
    }
  },
  {
    question: "Какой метод удаляет последний элемент из вектора?",
    answer: "pop_back()",
    options: ["erase()", "remove()", "pop_back()", "delete_last()"],
    explanation: {
      correct: "pop_back() удаляет последний элемент из вектора.",
      incorrect: "erase() удаляет элемент по итератору."
    }
  },
  {
    question: "Какой метод добавляет элемент в конец вектора?",
    answer: "push_back()",
    options: ["insert()", "append()", "push_back()", "add()"],
    explanation: {
      correct: "push_back() добавляет элемент в конец вектора.",
      incorrect: "insert() — вставляет элемент по позиции."
    }
  },
  {
    question: "Какой тип данных представляет символ Unicode в C++11?",
    answer: "char32_t",
    options: ["wchar_t", "char16_t", "char32_t", "char8_t"],
    explanation: {
      correct: "char32_t представляет 32-битный Unicode-символ.",
      incorrect: "char16_t — 16-битный, char8_t — для UTF-8."
    }
  },
  {
    question: "Какой тип данных представляет строку UTF-8?",
    answer: "std::u8string",
    options: ["std::string", "std::wstring", "std::u8string", "std::u16string"],
    explanation: {
      correct: "std::u8string — строка UTF-8, доступная в C++20.",
      incorrect: "std::string — может хранить UTF-8, но не типобезопасно."
    }
  },
  {
    question: "Какой метод используется для сравнения двух строк?",
    answer: "==",
    options: ["compare()", "equals()", "==", "Compare()"],
    explanation: {
      correct: "Оператор == сравнивает содержимое строк в C++.",
      incorrect: "compare() — метод, возвращает -1, 0 или 1."
    }
  },
  {
    question: "Какое ключевое слово указывает, что функция может быть вызвана без объекта?",
    answer: "static",
    options: ["virtual", "const", "static", "inline"],
    explanation: {
      correct: "static позволяет вызывать метод без экземпляра класса.",
      incorrect: "const — метод не изменяет состояние объекта."
    }
  },
  {
    question: "Какой метод вызывается при копировании объекта?",
    answer: "Конструктор копирования",
    options: ["Перегруженный оператор", "Конструктор копирования", "Деструктор", "Метод clone()"],
    explanation: {
      correct: "Конструктор копирования вызывается при копировании объекта.",
      incorrect: "clone() — из Java, не стандартный в C++."
    }
  },
  {
    question: "Какой заголовочный файл предоставляет математические функции?",
    answer: "<cmath>",
    options: ["<math.h>", "<cmath>", "<math>", "<algorithm>"],
    explanation: {
      correct: "cmath предоставляет математические функции, такие как sin(), cos(), sqrt().",
      incorrect: "math.h — устаревший заголовок из C."
    }
  },
  {
    question: "Какое ключевое слово используется для создания перечисления с проверкой типа?",
    answer: "enum class",
    options: ["enum", "enum struct", "enum class", "enum type"],
    explanation: {
      correct: "enum class создаёт перечисление с областью видимости и строгой типизацией.",
      incorrect: "enum — устаревшее, не типобезопасное."
    }
  },
  {
    question: "Какой оператор используется для выбрасывания исключения?",
    answer: "throw",
    options: ["try", "catch", "throw", "finally"],
    explanation: {
      correct: "throw используется для выбрасывания исключения.",
      incorrect: "try и catch — для обработки исключений."
    }
  },
  {
    question: "Какой блок выполняется всегда, независимо от исключений?",
    answer: "catch(...)",
    options: ["catch()", "catch(...)", "finally", "default"],
    explanation: {
      correct: "catch(...) ловит любые исключения.",
      incorrect: "finally — из других языков, в C++ не используется."
    }
  },
  {
    question: "Какой заголовочный файл содержит реализацию потоков?",
    answer: "<thread>",
    options: ["<pthread>", "<thread>", "<async>", "<task>"],
    explanation: {
      correct: "thread предоставляет класс std::thread для работы с потоками.",
      incorrect: "pthread — из POSIX, async — из <future>."
    }
  },
  {
    question: "Какой метод ожидает завершения потока?",
    answer: "join()",
    options: ["wait()", "detach()", "join()", "sync()"],
    explanation: {
      correct: "join() ожидает завершения потока.",
      incorrect: "detach() — продолжает выполнение независимо."
    }
  },
  {
    question: "Какой контейнер STL реализует очередь?",
    answer: "std::queue",
    options: ["std::stack", "std::deque", "std::queue", "std::priority_queue"],
    explanation: {
      correct: "std::queue — контейнер-адаптер, реализующий FIFO.",
      incorrect: "std::stack — LIFO, priority_queue — с приоритетом."
    }
  },
  {
    question: "Какой контейнер STL реализует стек?",
    answer: "std::stack",
    options: ["std::queue", "std::deque", "std::stack", "std::list"],
    explanation: {
      correct: "std::stack — контейнер-адаптер, реализующий LIFO.",
      incorrect: "std::queue — FIFO."
    }
  },
  {
    question: "Какой метод возвращает итератор на начало контейнера?",
    answer: "begin()",
    options: ["start()", "begin()", "first()", "init()"],
    explanation: {
      correct: "begin() возвращает итератор на первый элемент контейнера.",
      incorrect: "start() — не стандартный метод C++."
    }
  },
  {
    question: "Какой метод возвращает итератор на конец контейнера?",
    answer: "end()",
    options: ["finish()", "end()", "last()", "stop()"],
    explanation: {
      correct: "end() возвращает итератор, указывающий за последний элемент.",
      incorrect: "finish() — не стандартный метод C++."
    }
  },
  {
    question: "Какой контейнер реализован на основе двусвязного списка?",
    answer: "std::list",
    options: ["std::vector", "std::deque", "std::list", "std::forward_list"],
    explanation: {
      correct: "std::list — двусвязный список, позволяет быстрое вставление/удаление.",
      incorrect: "std::forward_list — односвязный список."
    }
  },
  {
    question: "Какой контейнер реализован на основе односвязного списка?",
    answer: "std::forward_list",
    options: ["std::vector", "std::deque", "std::list", "std::forward_list"],
    explanation: {
      correct: "std::forward_list — односвязный список, экономит память по сравнению с list.",
      incorrect: "std::list — двусвязный список."
    }
  },
  {
    question: "Какое ключевое слово используется для объявления пользовательского литерала?",
    answer: "operator\"\"",
    options: ["literal", "user", "operator\"\"", "custom"],
    explanation: {
      correct: "Пользовательские литералы объявляются через operator\"\".",
      incorrect: "literal и custom — не ключевые слова."
    }
  },
  {
    question: "Какое ключевое слово используется для указания, что функция не возвращает значение?",
    answer: "void",
    options: ["none", "null", "void", "empty"],
    explanation: {
      correct: "void указывает, что функция не возвращает значение.",
      incorrect: "null — значение указателя, none — в других языках."
    }
  },
  {
    question: "Какое ключевое слово используется для определения типа в шаблонах?",
    answer: "typename",
    options: ["class", "type", "typename", "template"],
    explanation: {
      correct: "typename используется в шаблонах для указания, что идентификатор — тип.",
      incorrect: "class — тоже можно использовать в шаблонах."
    }
  }
];