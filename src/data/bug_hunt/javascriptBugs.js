// src/data/javascriptBugs.js
export const javascriptBugs = [
  {
    id: 1,
    code: `function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([-5, -2, -10, -1]));`,
    bugLine: 2,
    explanation: "Неправильная инициализация max для массивов с отрицательными числами",
    points: 10
  },
  {
    id: 2,
    code: `let user = {
    name: "John",
    age: 25
};

function greetUser() {
    console.log("Привет, " + user.name);
    console.log("Возраст: " + age);
}

greetUser();`,
    bugLine: 7,
    explanation: "Использование необъявленной переменной age вместо user.age",
    points: 8
  },
  {
    id: 3,
    code: `for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}`,
    bugLine: 2,
    explanation: "Замыкание захватывает переменную i по ссылке, выводит 5 пять раз",
    points: 15
  },
  {
    id: 4,
    code: `function calculateTotal(prices) {
    let total = 0;
    for (let i = 0; i <= prices.length; i++) {
        total += prices[i];
    }
    return total;
}

let items = [10, 20, 30];
console.log(calculateTotal(items));`,
    bugLine: 3,
    explanation: "Выход за границы массива из-за <= вместо <",
    points: 12
  },
  {
    id: 5,
    code: `let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled);
doubled.push(12);
console.log(numbers);`,
    bugLine: 6,
    explanation: "Ожидание изменения исходного массива, но map возвращает новый массив",
    points: 9
  },
  {
    id: 6,
    code: `function checkAge(age) {
    if (age = 18) {
        return "Совершеннолетний";
    } else {
        return "Несовершеннолетний";
    }
}

console.log(checkAge(25));`,
    bugLine: 2,
    explanation: "Присваивание вместо сравнения в условии",
    points: 7
  },
  {
    id: 7,
    code: `let person = {
    name: "Alice",
    age: 30
};

function updatePerson(p) {
    p.age = p.age + 1;
    return p;
}

let updated = updatePerson(person);
console.log(person.age);
console.log(updated.age);`,
    bugLine: 7,
    explanation: "Изменение объекта по ссылке влияет на исходный объект",
    points: 11
  },
  {
    id: 8,
    code: `function processArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

let numbers = [1, 2, 3, 4, 5];
console.log(processArray(numbers));`,
    bugLine: 4,
    explanation: "Изменение массива во время итерации приводит к пропуску элементов",
    points: 13
  },
  {
    id: 9,
    code: `let x = 5;
let y = "10";

console.log(x + y);
console.log(typeof (x + y));`,
    bugLine: 3,
    explanation: "Неявное преобразование типов приводит к конкатенации вместо сложения",
    points: 9
  },
  {
    id: 10,
    code: `function getData() {
    return {
        name: "John",
        age: 25
    };
}

let userData = getData();
console.log(userData.height);`,
    bugLine: 8,
    explanation: "Обращение к несуществующему свойству объекта возвращает undefined",
    points: 8
  },
  {
    id: 11,
    code: `let myArray = [1, 2, 3];
let newArray = myArray;

newArray[0] = 100;

console.log(myArray);
console.log(newArray);`,
    bugLine: 2,
    explanation: "Обе переменные ссылаются на один и тот же массив",
    points: 10
  },
  {
    id: 12,
    code: `function divide(a, b) {
    return a / b;
}

console.log(divide(10, 0));`,
    bugLine: 2,
    explanation: "Деление на ноль возвращает Infinity без ошибки",
    points: 9
  },
  {
    id: 13,
    code: `let obj = {
    name: "Test",
    value: 42
};

for (let key in obj) {
    console.log(key + ": " + obj.key);
}`,
    bugLine: 7,
    explanation: "Неправильный доступ к свойству объекта - obj.key вместо obj[key]",
    points: 11
  },
  {
    id: 14,
    code: `function calculate(a, b) {
    return a + b;
}

let result = calculate(5, "10");
console.log(result);
console.log(typeof result);`,
    bugLine: 5,
    explanation: "Неявное преобразование типов при сложении числа и строки",
    points: 10
  },
  {
    id: 15,
    code: `let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Готово!"), 1000);
});

promise.then(
    result => console.log(result),
    error => console.log(error)
);

console.log("Начало");`,
    bugLine: 8,
    explanation: "Неправильный порядок вывода из-за асинхронности Promise",
    points: 12
  },
  {
    id: 16,
    code: `let numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(function(num) {
    sum += num;
    return sum;
});

console.log(sum);`,
    bugLine: 6,
    explanation: "return в forEach не влияет на результат, функция forEach возвращает undefined",
    points: 9
  },
  {
    id: 17,
    code: `function compareObjects(obj1, obj2) {
    return obj1 == obj2;
}

let a = { x: 1 };
let b = { x: 1 };

console.log(compareObjects(a, b));`,
    bugLine: 2,
    explanation: "Сравнение объектов по ссылке, а не по значению",
    points: 13
  },
  {
    id: 18,
    code: `let text = "Hello World";
let words = text.split(" ");

for (let i = 0; i <= words.length; i++) {
    console.log(words[i].toUpperCase());
}`,
    bugLine: 5,
    explanation: "Выход за границы массива из-за <= вместо <",
    points: 10
  },
  {
    id: 19,
    code: `function processUserInput() {
    let input = prompt("Введите число");
    let result = input * 2;
    console.log("Результат: " + result);
}

processUserInput();`,
    bugLine: 3,
    explanation: "prompt возвращает строку, которая может быть некорректно умножена",
    points: 11
  },
  {
    id: 20,
    code: `let data = '{"name": "John", "age": 30}';
let parsed = JSON.parse(data);

console.log(parsed.name);
console.log(parsed.height);`,
    bugLine: 5,
    explanation: "Обращение к несуществующему свойству после парсинга JSON",
    points: 9
  },
  {
    id: 21,
    code: `function addItem(arr, item) {
    arr.push(item);
    return arr;
}

let original = [1, 2, 3];
let modified = addItem(original, 4);

console.log(original);
console.log(modified);`,
    bugLine: 6,
    explanation: "Изменение исходного массива, так как push изменяет массив на месте",
    points: 10
  },
  {
    id: 22,
    code: `let user = {
    name: "Alice",
    getName: function() {
        return this.name;
    }
};

let getName = user.getName;
console.log(getName());`,
    bugLine: 7,
    explanation: "Потеря контекста this при присвоении метода переменной",
    points: 14
  },
  {
    id: 23,
    code: `function calculateDiscount(price, discount) {
    if (discount > 100) {
        discount = 100;
    }
    return price - (price * discount / 100);
}

console.log(calculateDiscount(100, 150));`,
    bugLine: 2,
    explanation: "Неправильная проверка значения скидки",
    points: 9
  },
  {
    id: 24,
    code: `let numbers = [1, 2, 3, 4, 5];
let filtered = numbers.filter(function(num) {
    return num > 3;
});

console.log(filtered);
filtered[0] = 100;
console.log(numbers);`,
    bugLine: 7,
    explanation: "filter возвращает новый массив, изменение его не влияет на исходный",
    points: 11
  },
  {
    id: 25,
    code: `function processItems(items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < 0) {
            items.pop();
        }
    }
    return items;
}

let numbers = [1, -2, 3, -4, 5];
console.log(processItems(numbers));`,
    bugLine: 4,
    explanation: "Изменение массива во время итерации приводит к непредсказуемому результату",
    points: 13
  },
  {
    id: 26,
    code: `let obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};

setTimeout(obj.getValue, 1000);`,
    bugLine: 7,
    explanation: "Потеря контекста this в setTimeout",
    points: 12
  },
  {
    id: 27,
    code: `function checkType(value) {
    if (typeof value === "array") {
        return "Это массив";
    } else {
        return "Это не массив";
    }
}

console.log(checkType([1, 2, 3]));`,
    bugLine: 2,
    explanation: "Неправильная проверка типа массива - typeof возвращает 'object'",
    points: 10
  },
  {
    id: 28,
    code: `let x = 5;

function outer() {
    let x = 10;
    
    function inner() {
        console.log(x);
    }
    
    return inner;
}

let fn = outer();
fn();`,
    bugLine: 7,
    explanation: "Замыкание захватывает переменную из внешней области видимости",
    points: 11
  },
  {
    id: 29,
    code: `let jsonString = '{"name": "John", "age": 30, "city": "New York"';
let parsed = JSON.parse(jsonString);

console.log(parsed);`,
    bugLine: 2,
    explanation: "Синтаксическая ошибка в JSON строке - отсутствует закрывающая скобка",
    points: 8
  },
  {
    id: 30,
    code: `function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial("5"));`,
    bugLine: 5,
    explanation: "Рекурсия с некорректным типом данных может привести к ошибке",
    points: 12
  },
  {
    id: 31,
    code: `let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(acc, num) {
    return acc + num;
});

console.log(sum);`,
    bugLine: 3,
    explanation: "Отсутствует начальное значение для reduce, что может привести к ошибке",
    points: 10
  },
  {
    id: 32,
    code: `let asyncFunction = async () => {
    let result = await fetch('/api/data');
    console.log(result);
};

asyncFunction();`,
    bugLine: 2,
    explanation: "Отсутствует обработка ошибок при асинхронной операции",
    points: 13
  }
];