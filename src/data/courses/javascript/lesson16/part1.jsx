// src/data/courses/javascript/lesson17/part1.jsx
import React from 'react';
import { Hash, Plus, Minus, Edit3, Key, Database, User, Settings } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <Database className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 17: Объекты: хранение данных с ключами</h1>
            <h2 className="text-xl font-semibold text-purple-300 mb-3">Структурированное хранение информации</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить создание объектов, работу со свойствами и методами, доступ к данным через точку и скобки.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое объекты */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-blue-400" />
          Что такое объекты?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-blue-300">Объект</span> — это <span className="font-medium text-yellow-300">коллекция пар "ключ-значение"</span>, которая позволяет <span className="font-medium">структурировать</span> и <span className="font-medium">организовывать</span> данные.
          </p>
          <p>
            В отличие от массивов, где элементы упорядочены по индексам, в объектах данные хранятся по <span className="font-medium">именованным ключам</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Аналогия:</h3>
              <p className="text-sm text-gray-300">
                Объект как <span className="font-medium">шкаф с ящиками с названиями</span> — каждый ящик имеет <span className="font-medium">имя (ключ)</span>, и в каждом ящике можно хранить <span className="font-medium">что-то своё (значение)</span>.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">Особенности объектов:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Неупорядочены</span> — порядок свойств не гарантируется</li>
                <li><span className="font-medium">Ключи уникальны</span> — повторяющиеся ключи перезаписываются</li>
                <li><span className="font-medium">Гибкие</span> — можно добавлять/удалять свойства</li>
                <li><span className="font-medium">Могут содержать</span> — данные и функции (методы)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Примеры объектов:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Пустой объект
let пустой = {};

// Объект с данными
let пользователь = {
  имя: "Иван",
  возраст: 25,
  город: "Москва"
};

// Объект со смешанными данными
let книга = {
  название: "JavaScript для начинающих",
  автор: "Петр Петров",
  год: 2023,
  страниц: 350,
  прочитана: true
};

// Объект с методами
let калькулятор = {
  результат: 0,
  сложить: function(a, b) {
    return a + b;
  },
  умножить(a, b) {
    return a * b;
  }
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Создание объектов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Plus className="w-5 h-5 text-green-400" />
          Создание объектов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Объекты можно создавать <span className="font-medium text-green-300">разными способами</span>, но самый распространённый — с помощью <span className="font-medium text-yellow-300">фигурных скобок</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Литерал объекта:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Пустой объект
let объект = {};

// Объект с данными
let студент = {
  имя: "Анна",
  курс: 3,
  специальность: "Программирование"
};

// Объект с многострочными свойствами
let автомобиль = {
  марка: "Toyota",
  модель: "Camry",
  год: 2022,
  цвет: "синий"
};`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Конструктор Object:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Пустой объект
let объект = new Object();

// То же самое, что и {}
let другой = new Object({
  имя: "Иван",
  возраст: 30
});

// Реже используется
let третий = Object.create(null);`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">⚠️ Важные особенности:</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-1">Типы ключей:</div>
                <pre className="text-xs text-gray-300">
{`let объект = {
  имя: "Иван",           // строковый ключ
  42: "ответ",           // числовой ключ
  "сложный ключ": "значение", // строковый ключ с пробелами
  true: "логическое",    // булевый ключ
};`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-1">Проверка типа:</div>
                <pre className="text-xs text-gray-300">
{`let объект = { имя: "Иван" };
console.log(typeof объект); // object
console.log(объект instanceof Object); // true`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Свойства и методы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-orange-400" />
          Свойства и методы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В объектах данные хранятся в <span className="font-medium text-orange-300">свойствах</span>, а функции называются <span className="font-weight text-purple-300">методами</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Свойства объекта:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let человек = {
  имя: "Мария",        // строковое свойство
  возраст: 28,         // числовое свойство
  студент: true,       // булевое свойство
  хобби: ["чтение", "плавание"], // массив как свойство
  адрес: {             // объект как свойство
    город: "Санкт-Петербург",
    улица: "Невский проспект"
  }
};`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Методы объекта:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let математика = {
  число: 10,
  
  // Метод как функция
  удвоить: function() {
    return this.число * 2;
  },
  
  // Сокращённый синтаксис (ES6)
  утроить() {
    return this.число * 3;
  },
  
  // Стрелочная функция (не имеет своего this)
  вКвадрате: () => {
    return 100; // не использует this.число
  }
};`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">this в методах:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let счетчик = {
  значение: 0,
  
  увеличить() {
    this.значение++;
    return this.значение;
  },
  
  уменьшить() {
    this.значение--;
    return this.значение;
  },
  
  получитьЗначение() {
    return this.значение;
  }
};

console.log(счетчик.увеличить()); // 1
console.log(счетчик.увеличить()); // 2
console.log(счетчик.получитьЗначение()); // 2`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Доступ к свойствам */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Key className="w-5 h-5 text-yellow-400" />
          Доступ к свойствам
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            К свойствам объекта можно получить доступ двумя способами: через <span className="font-medium text-yellow-300">точку</span> и через <span className="font-medium text-cyan-300">квадратные скобки</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
                <Edit3 className="w-4 h-4" />
                Доступ через точку
              </h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let пользователь = {
  имя: "Алексей",
  возраст: 35,
  активен: true
};

// Чтение свойств
console.log(пользователь.имя);     // "Алексей"
console.log(пользователь.возраст); // 35
console.log(пользователь.активен); // true

// Изменение свойств
пользователь.возраст = 36;
пользователь.активен = false;

// Добавление новых свойств
пользователь.email = "alex@example.com";
пользователь.роль = "администратор";`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4" />
                Доступ через скобки
              </h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let объект = {
  "имя-пользователя": "Иван",
  123: "числовое свойство",
  "ключ с пробелами": "значение"
};

// Чтение свойств
console.log(объект["имя-пользователя"]); // "Иван"
console.log(объект[123]); // "числовое свойство"
console.log(объект["ключ с пробелами"]); // "значение"

// Динамический доступ
let ключ = "имя-пользователя";
console.log(объект[ключ]); // "Иван"

// Добавление свойств
объект["новый ключ"] = "новое значение";
объект[42] = "ответ на главный вопрос";`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Когда что использовать:</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-1">Точка (.) — когда ключ:</div>
                <ul className="text-xs text-gray-300 list-disc pl-5">
                  <li>Состоит из букв, цифр, $ и _</li>
                  <li>Не начинается с цифры</li>
                  <li>Не является зарезервированным словом</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-1">Скобки [] — когда ключ:</div>
                <ul className="text-xs text-gray-300 list-disc pl-5">
                  <li>Содержит пробелы или спецсимволы</li>
                  <li>Является числом</li>
                  <li>Хранится в переменной</li>
                  <li>Динамически определяется</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Изменение и добавление свойств */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-green-400" />
          <Plus className="w-5 h-5 text-blue-400" />
          Изменение и добавление свойств
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Свойства объектов можно <span className="font-medium text-green-300">изменять</span>, <span className="font-medium text-blue-300">добавлять</span> и <span className="font-medium text-red-300">удалять</span> в любое время.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Изменение свойств:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let продукт = {
  название: "Смартфон",
  цена: 15000,
  категория: "Электроника"
};

// Изменение существующих свойств
продукт.цена = 14000;
продукт["категория"] = "Мобильные устройства";

// Изменение через переменную
let поле = "название";
продукт[поле] = "Смартфон Samsung";

console.log(продукт);
// {
//   название: "Смартфон Samsung",
//   цена: 14000,
//   категория: "Мобильные устройства"
// }`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Добавление свойств:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let пользователь = {
  имя: "Елена"
};

// Добавление новых свойств
пользователь.возраст = 29;
пользователь["email"] = "elena@example.com";
пользователь[Symbol("id")] = 12345;

// Добавление через переменную
let новоеСвойство = "профессия";
пользователь[новоеСвойство] = "дизайнер";

// Добавление метода
пользователь.приветствовать = function() {
  return \`Привет, меня зовут \${this.имя}!\`;
};

console.log(пользователь.приветствовать());
// "Привет, меня зовут Елена!"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
              <Minus className="w-4 h-4" />
              Удаление свойств:
            </h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let объект = {
  имя: "Иван",
  возраст: 30,
  временноеСвойство: "удалить"
};

// Удаление свойства
delete объект.временноеСвойство;
delete объект["возраст"];

console.log(объект); // { имя: "Иван" }

// Проверка существования свойства
console.log("имя" in объект); // true
console.log("возраст" in объект); // false`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Проверка существования свойств */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          Проверка существования свойств
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Иногда нужно проверить, <span className="font-medium text-purple-300">существует ли свойство</span> в объекте, чтобы избежать ошибок.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Оператор in:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let пользователь = {
  имя: "Михаил",
  возраст: undefined
};

// Проверка существования свойства
console.log("имя" in пользователь); // true
console.log("email" in пользователь); // false

// Работает и с числовыми ключами
let массив = [1, 2, 3];
console.log(0 in массив); // true
console.log(5 in массив); // false`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Сравнение с undefined:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`let объект = {
  имя: "Анна",
  возраст: undefined
};

// Простое сравнение (ловушка!)
console.log(объект.имя !== undefined); // true
console.log(объект.возраст !== undefined); // false
console.log(объект.email !== undefined); // false

// Но свойство возраст существует!
console.log("возраст" in объект); // true
console.log("email" in объект); // false`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Цикл for...in:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let студент = {
  имя: "Дмитрий",
  курс: 2,
  специальность: "Информатика"
};

// Перебор всех свойств объекта
for (let ключ in студент) {
  console.log(\`\${ключ}: \${студент[ключ]}\`);
}

// Вывод:
// имя: Дмитрий
// курс: 2
// специальность: Информатика`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <User className="w-5 h-5 text-yellow-400" />
          Практические примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Управление корзиной покупок:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`let корзина = {
  товары: {},
  общаяСумма: 0,
  
  добавитьТовар(название, цена, количество = 1) {
    if (this.товары[название]) {
      this.товары[название].количество += количество;
    } else {
      this.товары[название] = { цена, количество };
    }
    this.пересчитатьСумму();
  },
  
  удалитьТовар(название) {
    delete this.товары[название];
    this.пересчитатьСумму();
  },
  
  пересчитатьСумму() {
    this.общаяСумма = 0;
    for (let товар in this.товары) {
      this.общаяСумма += this.товары[товар].цена * this.товары[товар].количество;
    }
  },
  
  показатьКорзину() {
    console.log("Корзина:");
    for (let товар in this.товары) {
      let { цена, количество } = this.товары[товар];
      console.log(\`\${товар}: \${количество} шт. x \${цена} руб. = \${цена * количество} руб.\`);
    }
    console.log(\`Итого: \${this.общаяСумма} руб.\`);
  }
};

корзина.добавитьТовар("Яблоки", 50, 3);
корзина.добавитьТовар("Молоко", 80, 1);
корзина.показатьКорзину();`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Профиль пользователя:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-xs text-gray-300">
{`let профиль = {
  данные: {
    имя: "",
    email: "",
    возраст: null
  },
  
  установитьИмя(имя) {
    if (typeof имя === "string" && имя.length > 0) {
      this.данные.имя = имя;
      return true;
    }
    return false;
  },
  
  установитьEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (emailRegex.test(email)) {
      this.данные.email = email;
      return true;
    }
    return false;
  },
  
  установитьВозраст(возраст) {
    if (Number.isInteger(возраст) && возраст > 0 && возраст < 150) {
      this.данные.возраст = возраст;
      return true;
    }
    return false;
  },
  
  получитьПрофиль() {
    return {
      ...this.данные,
      заполнен: !!(this.данные.имя && this.данные.email)
    };
  }
};

профиль.установитьИмя("Анна");
профиль.установитьEmail("anna@example.com");
профиль.установитьВозраст(25);
console.log(профиль.получитьПрофиль());`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Конфигурация приложения:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`let настройки = {
  тема: "светлая",
  язык: "ru",
  уведомления: true,
  автосохранение: true,
  
  изменитьТему(новаяТема) {
    const допустимыеТемы = ["светлая", "тёмная", "авто"];
    if (допустимыеТемы.includes(новаяТема)) {
      this.тема = новаяТема;
      return true;
    }
    return false;
  },
  
  переключитьУведомления() {
    this.уведомления = !this.уведомления;
  },
  
  получитьНастройки() {
    return { ...this };
  },
  
  сбросить() {
    this.тема = "светлая";
    this.язык = "ru";
    this.уведомления = true;
    this.автосохранение = true;
  }
};

настройки.изменитьТему("тёмная");
настройки.переключитьУведомления();
console.log(настройки.получитьНастройки());`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
            <Database className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 class="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p class="text-gray-300">
              Теперь вы знаете, как создавать объекты, работать со свойствами и методами, использовать доступ через точку и скобки. Объекты — мощный инструмент для структурирования данных в JavaScript!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;