export default [
  {
    question: "Какое ключевое слово создаёт константу в JS?",
    options: ["let", "var", "const", "val"],
    answer: "const",
    explanation: {
      correct: "const используется для переменных, которые не будут переназначены.",
      incorrect: "let позволяет менять значение, var — устарело."
    }
  },
  {
    question: "Что вернёт typeof NaN?",
    options: ["number", "NaN", "undefined", "string"],
    answer: "number",
    explanation: {
      correct: "typeof NaN === 'number' из-за исторических причин.",
      incorrect: "Это особенность языка. NaN — это тип number, но не число."
    }
  },
  {
    question: "Какой результат выражения 5 == '5'?",
    options: ["true", "false", "error", "undefined"],
    answer: "true",
    explanation: {
      correct: "Оператор == приводит типы. Строка '5' превращается в число.",
      incorrect: "=== сравнивает строго, без приведения типов."
    }
  },
  {
    question: "Как объявить функцию в JavaScript?",
    options: ["function myFunc() {}", "const myFunc = function() {}", "const myFunc = () => {}", "Все варианты верны"],
    answer: "Все варианты верны",
    explanation: {
      correct: "Все три способа объявления функций допустимы.",
      incorrect: "function declaration, expression и arrow functions — все популярны."
    }
  },
  {
    question: "Что такое замыкание?",
    options: [
      "Функция, которая ссылается на переменные внешней области видимости",
      "Функция, которая ничего не возвращает",
      "Функция, вызванная через new",
      "Метод объекта"
    ],
    answer: "Функция, которая ссылается на переменные внешней области видимости",
    explanation: {
      correct: "Замыкание сохраняет доступ к переменным из области видимости, где была создана.",
      incorrect: "Используется в фабричных функциях и декораторах."
    }
  },
  {
    question: "Как получить длину строки?",
    options: ["length()", ".length", ".size", ".count()"],
    answer: ".length",
    explanation: {
      correct: "Свойство .length возвращает количество символов в строке.",
      incorrect: "Для массивов тоже работает!"
    }
  },
  {
    question: "Что делает метод map()?",
    options: [
      "Меняет исходный массив",
      "Создаёт новый массив",
      "Удаляет элементы",
      "Добавляет элементы в конец"
    ],
    answer: "Создаёт новый массив",
    explanation: {
      correct: "map() применяет функцию к каждому элементу и возвращает новый массив.",
      incorrect: "Исходный массив остаётся без изменений."
    }
  },
  {
    question: "Что выведет console.log(2 + '2')?",
    options: ["4", "'22'", "Error", "undefined"],
    answer: "'22'",
    explanation: {
      correct: "Число 2 приводится к строке, поэтому происходит конкатенация.",
      incorrect: "JavaScript автоматически преобразует типы."
    }
  },
  {
    question: "Что такое hoisting?",
    options: [
      "Поднятие переменных и функций в начало области видимости",
      "Автоматическое удаление переменных",
      "Объявление переменных после их использования",
      "Ошибка выполнения"
    ],
    answer: "Поднятие переменных и функций в начало области видимости",
    explanation: {
      correct: "Hoisting перемещает объявления var и function declaration в начало области видимости.",
      incorrect: "let и const тоже поднимаются, но не инициализируются (TDZ)."
    }
  },
  {
    question: "Как добавить обработчик события клика?",
    options: [
      "element.onclick = function() {}",
      "element.addEventListener('click', handler)",
      "element.on('click', handler)",
      "A и B правильные"
    ],
    answer: "A и B правильные",
    explanation: {
      correct: "addEventListener — рекомендованный способ, onclick — устаревший.",
      incorrect: "on() — из jQuery, а не чистый JS."
    }
  },
  {
    question: "Что такое JSON.parse()?",
    options: [
      "Преобразует строку в объект",
      "Преобразует объект в строку",
      "Удаляет свойства",
      "Проверяет тип данных"
    ],
    answer: "Преобразует строку в объект",
    explanation: {
      correct: "JSON.parse() парсит JSON-строку и возвращает JS-объект.",
      incorrect: "Для обратного действия используется JSON.stringify()."
    }
  },
  {
    question: "Что выведет console.log(typeof null)?",
    options: ["null", "object", "undefined", "error"],
    answer: "object",
    explanation: {
      correct: "Это ошибка в JS. typeof null возвращает 'object'.",
      incorrect: "Используйте Object.prototype.toString.call(null) для точного определения типа."
    }
  },
  {
    question: "Что такое callback-функция?",
    options: [
      "Функция, переданная как параметр другой функции и вызванная внутри",
      "Функция, возвращающая другую функцию",
      "Функция, имеющая имя",
      "Асинхронная функция"
    ],
    answer: "Функция, переданная как параметр другой функции и вызванная внутри",
    explanation: {
      correct: "Callback-функции часто используются в асинхронном программировании.",
      incorrect: "Например: array.map(item => item * 2)"
    }
  },
  {
    question: "Какие типы данных есть в JS?",
    options: [
      "number, string, boolean",
      "object, undefined",
      "symbol, bigint",
      "Все перечисленные"
    ],
    answer: "Все перечисленные",
    explanation: {
      correct: "JS имеет 7 примитивных типов и тип object.",
      incorrect: "Типы: number, string, boolean, null, undefined, symbol, bigint"
    }
  },
  {
    question: "Как работает оператор spread (...)?",
    options: [
      "Распаковывает элементы из массива или объекта",
      "Соединяет массивы",
      "Удаляет последний элемент",
      "Добавляет элемент в начало"
    ],
    answer: "Распаковывает элементы из массива или объекта",
    explanation: {
      correct: "Spread используется для создания копий, объединения и передачи аргументов.",
      incorrect: "Пример: [...arr]"
    }
  },
  {
    question: "Как проверить, является ли значение NaN?",
    options: ["isNaN()", "Number.isNaN()", "typeof", "isNotANumber()"],
    answer: "Number.isNaN()",
    explanation: {
      correct: "Number.isNaN() — более безопасный способ проверки, чем глобальный isNaN().",
      incorrect: "isNaN('abc') → true, Number.isNaN('abc') → false"
    }
  },
  {
    question: "Что такое DOM?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Document Output Machine"
    ],
    answer: "Document Object Model",
    explanation: {
      correct: "DOM представляет HTML как дерево объектов, с которым можно взаимодействовать через JS.",
      incorrect: "window.document — точка входа в DOM."
    }
  },
  {
    question: "Что выведет console.log(a); var a = 5;",
    options: ["undefined", "5", "ReferenceError", "null"],
    answer: "undefined",
    explanation: {
      correct: "Переменная a поднимается, но не инициализируется. Это hoisting.",
      incorrect: "Если бы использовали let — ReferenceError."
    }
  },
  {
    question: "Как работает this в стрелочной функции?",
    options: [
      "Ссылается на window",
      "Ссылается на контекст, в котором она была объявлена",
      "Ссылается на родительский объект",
      "Всегда undefined"
    ],
    answer: "Ссылается на контекст, в котором она была объявлена",
    explanation: {
      correct: "Стрелочные функции не имеют собственного this — он наследуется от внешнего контекста.",
      incorrect: "Это полезно при использовании в методах объектов и классах."
    }
  },
  {
    question: "Как правильно клонировать объект?",
    options: [
      "Object.assign({}, obj)",
      "{...obj}",
      "JSON.parse(JSON.stringify(obj))",
      "Все варианты подходят"
    ],
    answer: "Все варианты подходят",
    explanation: {
      correct: "Object.assign(), spread-оператор и JSON-метод — популярные способы поверхностного копирования.",
      incorrect: "Для глубокого копирования нужна библиотека или рекурсия."
    }
  },
  {
    question: "Что такое event loop?",
    options: [
      "Цикл, который обрабатывает очередь событий",
      "Функция setTimeout()",
      "Контекст выполнения",
      "Система управления памятью"
    ],
    answer: "Цикл, который обрабатывает очередь событий",
    explanation: {
      correct: "Event Loop управляет выполнением кода, обработкой событий и таймеров.",
      incorrect: "setTimeout() использует Event Loop, но сам по себе не является им."
    }
  },
  {
    question: "Какой результат у выражения Boolean('0')?",
    options: ["false", "true", "NaN", "undefined"],
    answer: "true",
    explanation: {
      correct: "Строка '0' — truthy значение. Boolean('0') → true.",
      incorrect: "Только '', 0, null, undefined, NaN — falsy."
    }
  },
  {
    question: "Как работает метод filter()?",
    options: [
      "Изменяет исходный массив",
      "Возвращает новый массив с элементами, прошедшими проверку",
      "Удаляет элементы",
      "Возвращает индекс"
    ],
    answer: "Возвращает новый массив с элементами, прошедшими проверку",
    explanation: {
      correct: "filter() создаёт новый массив, включая только те элементы, для которых функция вернула true.",
      incorrect: "Исходный массив остаётся неизменным."
    }
  },
  {
    question: "Какой результат у [1, 2, 3].slice(1, 2)?",
    options: ["[1]", "[2]", "[2, 3]", "[1, 2]"],
    answer: "[2]",
    explanation: {
      correct: "slice(start, end) возвращает элементы от start до end (не включая end).",
      incorrect: "slice(1, 2) возвращает [2]"
    }
  },
  {
    question: "Что такое Promise?",
    options: [
      "Объект, представляющий завершение асинхронной операции",
      "Функция с коллбэком",
      "Событие",
      "Класс"
    ],
    answer: "Объект, представляющий завершение асинхронной операции",
    explanation: {
      correct: "Promise может быть: pending, fulfilled, rejected",
      incorrect: "resolve() и reject() — функции, меняющие состояние промиса."
    }
  },
  {
    question: "Как проверить тип объекта?",
    options: ["typeof", "instanceof", "constructor", "Все перечисленные"],
    answer: "Все перечисленные",
    explanation: {
      correct: "typeof — для примитивов, instanceof — для объектов, constructor — для получения конструктора.",
      incorrect: "instanceof Array лучше, чем typeof Array → всегда object"
    }
  },
  {
    question: "Что выведет console.log(!!null)?",
    options: ["true", "false", "null", "undefined"],
    answer: "false",
    explanation: {
      correct: "null — falsy значение. !!null → false.",
      incorrect: "Boolean(null) → false"
    }
  },
  {
    question: "Что такое IIFE?",
    options: [
      "Immediately Invoked Function Expression",
      "Function declaration",
      "Arrow function",
      "Generator function"
    ],
    answer: "Immediately Invoked Function Expression",
    explanation: {
      correct: "IIFE — функция, которая выполняется сразу после объявления.",
      incorrect: "Пример: (function() { ... })();"
    }
  },
  {
    question: "Какой результат typeof typeof 1?",
    options: ["number", "string", "object", "function"],
    answer: "string",
    explanation: {
      correct: "typeof 1 → 'number', typeof 'number' → 'string'.",
      incorrect: "typeof typeof всегда возвращает 'string'"
    }
  },
  {
    question: "Что такое async/await?",
    options: [
      "Синтаксический сахар над Promise",
      "Генератор",
      "Коллбэк",
      "Метод массива"
    ],
    answer: "Синтаксический сахар над Promise",
    explanation: {
      correct: "async/await упрощает работу с промисами, делая код похожим на синхронный.",
      incorrect: "try/catch ловит ошибки в async/await"
    }
  },
  {
    question: "Как получить текущее время в JS?",
    options: ["new Date()", "Date.now()", "performance.now()", "Все перечисленные"],
    answer: "Все перечисленные",
    explanation: {
      correct: "new Date() — объект даты, Date.now() — timestamp, performance.now() — высокая точность.",
      incorrect: "Date.now() чаще всего используется для измерения времени."
    }
  },
  {
    question: "Что вернёт [] == ![]?",
    options: ["true", "false", "TypeError", "undefined"],
    answer: "true",
    explanation: {
      correct: "[] — truthy, ![] — false. Оба приводятся к строкам и равны 'true == false' → true.",
      incorrect: "Это пример странностей JS. Используй === для избежания таких ситуаций."
    }
  },
  {
    question: "Что такое TDZ?",
    options: [
      "Temporal Dead Zone — область, где переменная недоступна до объявления",
      "Тип данных Zero",
      "Техника оптимизации",
      "Точка входа в DOM"
    ],
    answer: "Temporal Dead Zone — область, где переменная недоступна до объявления",
    explanation: {
      correct: "TDZ относится к переменным, объявленным через let и const, до их объявления.",
      incorrect: "const x = y; let y = 5; — ReferenceError"
    }
  },
  {
    question: "Как добавить элемент в начало массива?",
    options: ["push()", "unshift()", "shift()", "pop()"],
    answer: "unshift()",
    explanation: {
      correct: "unshift() добавляет элементы в начало массива и возвращает новую длину.",
      incorrect: "shift() удаляет первый элемент, pop() — последний."
    }
  },
  {
    question: "Что такое прототип в JavaScript?",
    options: [
      "Объект, на который указывает prototype",
      "Функция",
      "Метод",
      "Специальное ключевое слово"
    ],
    answer: "Объект, на который указывает prototype",
    explanation: {
      correct: "Прототип — это механизм наследования в JS.",
      incorrect: "Объекты наследуют свойства от своего прототипа."
    }
  },
  {
    question: "Как работает оператор ===?",
    options: [
      "Сравнивает значение и тип",
      "Сравнивает только значение",
      "Всегда возвращает true",
      "Не существует"
    ],
    answer: "Сравнивает значение и тип",
    explanation: {
      correct: "=== не приводит типы, поэтому 5 === '5' → false.",
      incorrect: "Лучше использовать === вместо =="
    }
  },
  {
    question: "Как получить случайное число от 0 до 1?",
    options: ["Math.random()", "Math.floor()", "Math.ceil()", "Math.rand()"],
    answer: "Math.random()",
    explanation: {
      correct: "Math.random() возвращает число от 0 до 1 (не включительно).",
      incorrect: "Math.floor(Math.random() * max) — для диапазона"
    }
  },
  {
    question: "Как сделать объект неизменяемым?",
    options: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "Все перечисленные"],
    answer: "Object.freeze()",
    explanation: {
      correct: "Object.freeze() запрещает добавление, удаление и изменение свойств объекта.",
      incorrect: "seal() позволяет менять существующие, preventExtensions() — запрещает добавление новых"
    }
  },
  {
    question: "Что выведет console.log([...'hello'])?",
    options: ["['h','e','l','l','o']", "hello", "['hello']", "error"],
    answer: "['h','e','l','l','o']",
    explanation: {
      correct: "Оператор spread [...] разбивает строку на массив символов.",
      incorrect: "Работает благодаря итерируемости строк"
    }
  },
  {
    question: "Что такое callback hell?",
    options: [
      "Множество вложенных колбэков",
      "Ошибка в цикле",
      "Вызов функции внутри другой функции",
      "Использование стрелочных функций"
    ],
    answer: "Множество вложенных колбэков",
    explanation: {
      correct: "Callback hell — это когда колбэки вложены слишком глубоко, и код становится трудночитаемым.",
      incorrect: "async/await решает эту проблему"
    }
  },
  {
    question: "Как проверить, является ли массив массивом?",
    options: ["typeof arr === 'array'", "arr.isArray()", "Array.isArray(arr)", "arr.type === 'array'"],
    answer: "Array.isArray(arr)",
    explanation: {
      correct: "Array.isArray() — корректный способ проверить тип массива.",
      incorrect: "typeof возвращает 'object' для массива"
    }
  },
  {
    question: "Что такое currying?",
    options: [
      "Функция, возвращающая функцию",
      "Функция, принимающая несколько аргументов за раз",
      "Функция, которая не принимает аргументов",
      "Функция, принимающая объект"
    ],
    answer: "Функция, возвращающая функцию",
    explanation: {
      correct: "Currying — это процесс преобразования функции с несколькими аргументами в цепочку функций с одним аргументом.",
      incorrect: "add(2)(3) → 5"
    }
  },
  {
    question: "Как работает оператор delete?",
    options: [
      "Удаляет значение переменной",
      "Удаляет свойство объекта",
      "Удаляет элемент массива",
      "Удаляет функцию"
    ],
    answer: "Удаляет свойство объекта",
    explanation: {
      correct: "delete obj.prop — удаляет свойство объекта. Не влияет на переменные и функции.",
      incorrect: "Массивы лучше редактировать через splice()"
    }
  },
  {
    question: "Что такое модуль в JS?",
    options: [
      "Файл с кодом, экспортирующий данные",
      "Функция",
      "Объект",
      "Класс"
    ],
    answer: "Файл с кодом, экспортирующий данные",
    explanation: {
      correct: "Модуль — это файл, который может export и import значений.",
      incorrect: "ES6 Modules работают через import/export"
    }
  },
  {
    question: "Как получить текущий URL в браузере?",
    options: ["window.location.href", "document.url", "navigator.currentUrl", "location.get()"],
    answer: "window.location.href",
    explanation: {
      correct: "window.location.href возвращает текущий URL.",
      incorrect: "window.location.pathname — только путь"
    }
  },
  {
    question: "Что такое стек вызовов (call stack)?",
    options: [
      "Место хранения переменных",
      "Механизм выполнения функций",
      "Хранилище промисов",
      "Очередь задач"
    ],
    answer: "Механизм выполнения функций",
    explanation: {
      correct: "Call Stack — это место, где JS отслеживает, какие функции вызываются и в каком порядке.",
      incorrect: "Ошибки стека возникают при рекурсии без выхода"
    }
  },
  {
    question: "Как очистить localStorage?",
    options: ["localStorage.clear()", "localStorage.remove()", "localStorage.delete()", "localStorage.reset()"],
    answer: "localStorage.clear()",
    explanation: {
      correct: "localStorage.clear() полностью очищает хранилище.",
      incorrect: "Для конкретного ключа: localStorage.removeItem('key')"
    }
  },
  {
    question: "Какой результат выполнения [].length?",
    options: ["undefined", "0", "null", "error"],
    answer: "0",
    explanation: {
      correct: "Пустой массив имеет длину 0.",
      incorrect: "length — это свойство, показывающее количество элементов."
    }
  },
  {
    question: "Какой результат выполнения 0.1 + 0.2 === 0.3?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "false",
    explanation: {
      correct: "Из-за особенностей чисел с плавающей точкой 0.1 + 0.2 ≈ 0.30000000000000004",
      incorrect: "Используй toFixed() или специальные библиотеки для точных вычислений"
    }
  },
  {
    question: "Как работает метод reduce()?",
    options: [
      "Уменьшает массив до одного значения",
      "Удаляет элементы",
      "Создаёт новый массив",
      "Изменяет исходный массив"
    ],
    answer: "Уменьшает массив до одного значения",
    explanation: {
      correct: "reduce() применяет функцию к аккумулятору и каждому элементу, чтобы свести всё к одному значению.",
      incorrect: "Используется для суммы, группировки и т.д."
    }
  },
  {
    question: "Что такое шаблонные строки?",
    options: [
      "Строки в кавычках",
      "Строки с ${} для вставки переменных",
      "Многострочные строки",
      "Все перечисленные"
    ],
    answer: "Строки с ${} для вставки переменных",
    explanation: {
      correct: "Шаблонные строки позволяют встраивать значения с помощью `${}`.",
      incorrect: "Могут быть многострочными и использовать выражения внутри `${}`"
    }
  },
  {
    question: "Как работает оператор void?",
    options: [
      "Возвращает undefined",
      "Выполняет выражение и возвращает его значение",
      "Возвращает null",
      "Выбрасывает ошибку"
    ],
    answer: "Возвращает undefined",
    explanation: {
      correct: "void 0 → undefined. Часто используется в ссылках <a href='javascript:void(0)'>.",
      incorrect: "Иногда используется для предотвращения возврата значения"
    }
  },
  {
    question: "Что выведет Boolean([])?",
    options: ["true", "false", "undefined", "null"],
    answer: "true",
    explanation: {
      correct: "Пустой массив — truthy значение. Boolean([]) → true.",
      incorrect: "Пустой объект тоже truthy."
    }
  },
  {
    question: "Как работает метод bind()?",
    options: [
      "Вызывает функцию немедленно",
      "Устанавливает this и возвращает новую функцию",
      "Привязывает this и вызывает функцию",
      "Устанавливает this, но не вызывает функцию"
    ],
    answer: "Устанавливает this и возвращает новую функцию",
    explanation: {
      correct: "bind() создаёт новую функцию с жёстко привязанным this.",
      incorrect: "call() и apply() вызывают функцию сразу"
    }
  },
  {
    question: "Что выведет console.log(1 + - + + + 1);",
    options: ["1", "2", "0", "SyntaxError"],
    answer: "0",
    explanation: {
      correct: "+ + +1 → +1 → 1. 1 + (-1) → 0.",
      incorrect: "Можно легко запутаться в унарных плюсах"
    }
  },
  {
    question: "Как работает метод find() у массива?",
    options: [
      "Возвращает первый совпавший элемент",
      "Возвращает все совпадающие элементы",
      "Возвращает индекс",
      "Изменяет исходный массив"
    ],
    answer: "Возвращает первый совпавший элемент",
    explanation: {
      correct: "find() возвращает первый элемент, для которого условие истинно.",
      incorrect: "findIndex() — возвращает индекс"
    }
  },
  {
    question: "Что такое IIFE?",
    options: [
      "(function(){})();",
      "() => {}",
      "function(){}",
      "class My {}"
    ],
    answer: "(function(){})();",
    explanation: {
      correct: "IIFE — это Immediately Invoked Function Expression. Вызывается сразу после объявления.",
      incorrect: "Используется для изоляции переменных"
    }
  },
  {
    question: "Что такое генератор?",
    options: [
      "Функция, возвращающая итерируемый объект",
      "Функция, возвращающая promise",
      "Функция, возвращающая число",
      "Функция, возвращающая строку"
    ],
    answer: "Функция, возвращающая итерируемый объект",
    explanation: {
      correct: "function* generator() { yield 1; }",
      incorrect: "yield возвращает значение и приостанавливает выполнение"
    }
  },
  {
    question: "Что выведет 1 + 2 + '3'?",
    options: ["33", "123", "6", "Error"],
    answer: "33",
    explanation: {
      correct: "1+2=3, затем 3+'3' → '33'.",
      incorrect: "Порядок важен: числа складываются, потом всё превращается в строку"
    }
  },
  {
    question: "Как проверить, является ли переменная числом?",
    options: ["typeof num === 'number'", "num.isNumber()", "Number.isFinite(num)", "A и C"],
    answer: "A и C",
    explanation: {
      correct: "typeof возвращает 'number' даже для NaN. Number.isFinite() проверяет, что значение — число и не NaN.",
      incorrect: "Для NaN typeof тоже возвращает 'number'"
    }
  },
  {
    question: "Что такое rest-параметры?",
    options: [
      "Собирает оставшиеся аргументы в массив",
      "Разбивает массив на аргументы",
      "Создаёт новый объект",
      "Преобразует строку в массив"
    ],
    answer: "Собирает оставшиеся аргументы в массив",
    explanation: {
      correct: "function foo(a, b, ...rest) { /* rest будет массивом */ }",
      incorrect: "Похож на arguments, но настоящий массив"
    }
  },
  {
    question: "Как получить timestamp в JS?",
    options: ["new Date().getTime()", "Date.now()", "Performance.now()", "Все перечисленные"],
    answer: "Все перечисленные",
    explanation: {
      correct: "Все три метода возвращают количество миллисекунд с 1970 года.",
      incorrect: "Performance.now() — более точный, но относителен к моменту загрузки страницы"
    }
  },
  {
    question: "Как работает оператор || в выражении: false || 'Hello'?",
    options: ["'Hello'", "false", "error", "undefined"],
    answer: "'Hello'",
    explanation: {
      correct: "|| возвращает первое truthy значение. false — falsy, поэтому возвращается 'Hello'.",
      incorrect: "Если оба значения truthy, возвращается первое"
    }
  },
  {
    question: "Как работает оператор ?? (Nullish Coalescing)?",
    options: [
      "Возвращает второе значение, если первое null или undefined",
      "Возвращает второе значение, если первое falsy",
      "Возвращает первое значение",
      "Всегда возвращает первое"
    ],
    answer: "Возвращает второе значение, если первое null или undefined",
    explanation: {
      correct: "?? игнорирует 0, '', false как falsy, но реагирует на null и undefined.",
      incorrect: "0 ?? 5 → 0, в отличие от 0 || 5 → 5"
    }
  },
  {
    question: "Как получить элементы по селектору CSS?",
    options: [
      "document.getElementById()",
      "document.querySelector()",
      "document.getElementsByClassName()",
      "document.select()"
    ],
    answer: "document.querySelector()",
    explanation: {
      correct: "querySelector() возвращает первый совпадающий элемент по CSS-селектору.",
      incorrect: "querySelectorAll() — возвращает все совпадающие элементы"
    }
  },
  {
    question: "Какой результат typeof []?",
    options: ["array", "object", "list", "collection"],
    answer: "object",
    explanation: {
      correct: "Массив — объект в JS. typeof возвращает 'object' для массивов.",
      incorrect: "Для точного определения используй Array.isArray()"
    }
  },
  {
    question: "Как сделать глубокую копию объекта?",
    options: [
      "JSON.parse(JSON.stringify(obj))",
      "Object.assign({}, obj)",
      "Spread {...obj}",
      "Все варианты"
    ],
    answer: "JSON.parse(JSON.stringify(obj))",
    explanation: {
      correct: "JSON.parse(JSON.stringify(obj)) — простой способ глубокой копии (но не подходит для функций и циклов)",
      incorrect: "Object.assign и spread делают поверхностную копию"
    }
  },
  {
    question: "Какой результат у 3 > 2 > 1 ?",
    options: ["true", "false", "NaN", "Error"],
    answer: "false",
    explanation: {
      correct: "3 > 2 → true, true > 1 → false (true → 1, false → 0)",
      incorrect: "Будь внимателен с порядком сравнения"
    }
  }
];