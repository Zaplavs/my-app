const jsQuestions = [
  {
    code: `console.log(typeof typeof 42);`,
    options: ["number", "string", "object", "undefined"],
    answer: "string",
    explanation: "typeof 42 → 'number', typeof 'number' → 'string'."
  },
  {
    code: `let a = [1, 2, 3];
let b = [...a];
console.log(a === b);`,
    options: ["true", "false", "error", "NaN"],
    answer: "false",
    explanation: "Оператор расширения создаёт новый массив, ссылки разные."
  },
  {
    code: `function sayHi() {
  console.log(name);
  var name = 'Alice';
}
sayHi();`,
    options: ["Alice", "undefined", "null", "ReferenceError"],
    answer: "undefined",
    explanation: "var поднимается (hoisted), но не инициализируется до выполнения строки."
  },
  {
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}`,
    options: ["0 1 2", "undefined", "3 3 3", "NaN NaN NaN"],
    answer: "3 3 3",
    explanation: "var не имеет блочной области видимости, цикл завершится до вызова setTimeout."
  },
  {
    code: `console.log(+false);
console.log(+true);`,
    options: ["0 1", "false true", "NaN NaN", "undefined undefined"],
    answer: "0 1",
    explanation: "Преобразование булевых значений: false → 0, true → 1."
  },
  {
    code: `const obj = { a: 1, b: 2 };
const { a, c } = obj;
console.log(c);`,
    options: ["undefined", "null", "0", "error"],
    answer: "undefined",
    explanation: "Свойство 'c' отсутствует, поэтому значение — undefined."
  },
  {
    code: `let greeting = 'Hello';
let greatings = greeting;
greeting = 'Hi';
console.log(greatings);`,
    options: ["Hi", "Hello", "undefined", "ReferenceError"],
    answer: "Hello",
    explanation: "Типы данных String — примитивы, присваивание копирует значение."
  },
  {
    code: `console.log([] + []);`,
    options: ["0", "[]", "", "[object Object]"],
    answer: "",
    explanation: "При сложении массивы преобразуются в строки, пустые массивы становятся ''."
  },
  {
    code: `const add = (a, b) => {
  return { a, b };
};
console.log(add(1, 2));`,
    options: ["{ a: 1, b: 2 }", "{ 1: a, 2: b }", "SyntaxError", "{ a: 2, b: 1 }"],
    answer: "{ a: 1, b: 2 }",
    explanation: "ES6 позволяет использовать короткий синтаксис для создания объекта."
  },
  {
    code: `console.log(NaN === NaN);`,
    options: ["true", "false", "undefined", "TypeError"],
    answer: "false",
    explanation: "NaN никогда не равен самому себе."
  },
  {
    code: `console.log(!!'false');`,
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
    explanation: "Любая непустая строка при приведении к булю становится true."
  },
  {
    code: `const user = {
  email: 'test@test.com',
  password: '12345'
};

const { email } = user;
console.log(email);`,
    options: ["'test@test.com'", "undefined", "'user'", "ReferenceError"],
    answer: "'test@test.com'",
    explanation: "Деструктуризация извлекает свойство email из объекта user."
  },
  {
    code: `console.log([...'Lydia']);`,
    options: ["['L', 'y', 'd', 'i', 'a']", "'Lydia'", "[[L], [y], [d], [i], [a]]", "SyntaxError"],
    answer: "['L', 'y', 'd', 'i', 'a']",
    explanation: "Оператор расширения разбивает строку на массив символов."
  },
  {
    code: `const person = {
  name: 'John'
};

const job = {
  title: 'Developer'
};

console.log({ ...person, ...job });`,
    options: ["{ name: 'John', title: 'Developer' }", "John Developer", "SyntaxError", "[object Object]"],
    answer: "{ name: 'John', title: 'Developer' }",
    explanation: "Расширение объединяет свойства обоих объектов."
  },
  {
    code: `const numbers = [1, 2, 3, 4];

const filtered = numbers.filter(num => num % 2 === 0);

console.log(filtered);`,
    options: ["[1, 2]", "[2, 4]", "[1, 3]", "[3, 4]"],
    answer: "[2, 4]",
    explanation: "Метод filter оставляет только чётные числа."
  },
  {
    code: `function sayHi() {
  console.log(name);
}

sayHi();`,
    options: ["undefined", "null", "ReferenceError", "name is not defined"],
    answer: "ReferenceError",
    explanation: "Переменная 'name' не объявлена, это ReferenceError."
  },
  {
    code: `function getPerson() {
  return {
    name: 'Alice',
    age: 25
  };
}

console.log(getPerson());`,
    options: ["{ name: 'Alice', age: 25 }", "undefined", "SyntaxError", "[object Object]"],
    answer: "{ name: 'Alice', age: 25 }",
    explanation: "Функция возвращает объект, который логируется как обычный объект."
  },
  {
    code: `const arr = [10, 20, 30];

arr[10] = 40;

console.log(arr);`,
    options: ["[10, 20, 30]", "[10, 20, 30, <7 empty items>, 40]", "Error", "[10, 20, 30, 40]"],
    answer: "[10, 20, 30, <7 empty items>, 40]",
    explanation: "JavaScript заполняет промежуток между элементами пустыми ячейками."
  },
  {
    code: `console.log(3 + 4 + '5');`,
    options: ["12", "75", "125", "Error"],
    answer: "75",
    explanation: "Числа складываются, затем результат конкатенируется со строкой."
  },
  {
    code: `console.log('5' - 3);`,
    options: ["2", "5-3", "undefined", "NaN"],
    answer: "2",
    explanation: "Строка преобразуется в число перед вычитанием."
  },
  {
    code: `console.log(null == undefined);`,
    options: ["true", "false", "undefined", "Error"],
    answer: "true",
    explanation: "null и undefined считаются равными при нестрогом сравнении."
  },
  {
    code: `console.log([] == ![]);`,
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
    explanation: "![] → false, [] → 0 при приведении к числу, false == 0 → true."
  },
  {
    code: `console.log(parseInt('7*6', 10));`,
    options: ["42", "7", "7*6", "NaN"],
    answer: "7",
    explanation: "parseInt парсит до первого недопустимого символа, умножение игнорируется."
  },
  {
    code: `console.log(this === window);`,
    options: ["true", "false", "undefined", "Error"],
    answer: "true",
    explanation: "В глобальной области this указывает на window (в браузере)."
  },
  {
    code: `const person = {
  name: 'Bob',
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

const greet = person.greet;
console.log(greet());`,
    options: ["Hi, I'm Bob", "Hi, I'm undefined", "Error", "Hi, I'm null"],
    answer: "Hi, I'm undefined",
    explanation: "this теряет контекст при отделении метода от объекта."
  },
  {
    code: `setTimeout(() => console.log('A'), 0);
Promise.resolve().then(() => console.log('B'));
console.log('C');`,
    options: ["A B C", "C A B", "C B A", "B C A"],
    answer: "C B A",
    explanation: "Глобальный код выполняется первым, микрозадачи (Promise) — вторыми, макрозадачи (setTimeout) — последними."
  },
  {
    code: `async function getData() {
  return 'Data';
}

console.log(getData());`,
    options: ["Data", "Promise { 'Data' }", "undefined", "Error"],
    answer: "Promise { 'Data' }",
    explanation: "async функция всегда возвращает Promise."
  },
  {
    code: `console.log([...'abc']);`,
    options: ["['a','b','c']", "'abc'", "[a,b,c]", "undefined"],
    answer: "['a','b','c']",
    explanation: "Оператор расширения превращает строку в массив символов."
  },
  {
    code: `const x = 10;

function foo() {
  console.log(x);
  const x = 20;
}

foo();`,
    options: ["10", "20", "undefined", "ReferenceError"],
    answer: "ReferenceError",
    explanation: "TDZ (Temporal Dead Zone): переменная доступна после объявления через const/let."
  },
  {
    code: `console.log(0.1 + 0.2 === 0.3);`,
    options: ["true", "false", "undefined", "NaN"],
    answer: "false",
    explanation: "Из-за ограничений точности чисел с плавающей точкой 0.1 + 0.2 ≠ 0.3."
  }
];

export default jsQuestions;