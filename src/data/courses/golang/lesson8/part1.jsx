import React from 'react';
import { BookOpen, Code, HelpCircle, Hash, ArrowRight, Check, X, Calculator } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🎮 Урок 8: Оператор switch в Go</h1>
            <h2 className="text-xl font-semibold text-pink-300 mb-3">Как выбрать один путь из многих — легко и красиво!</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться использовать оператор <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">switch</code> для выбора одного из многих вариантов. Разберём: базовый синтаксис, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">switch</code> с выражениями, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">fallthrough</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">switch</code> без выражения, сравнение с <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">if/else</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">default case</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужен switch */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужен switch? Представьте игровой автомат!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Представьте, что вы пришли в игровой автомат с кнопками:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Нажмёте <span className="font-medium text-blue-300">1</span> — получите 🍦 мороженое</li>
            <li>Нажмёте <span className="font-medium text-green-300">2</span> — получите 🎮 игрушку</li>
            <li>Нажмёте <span className="font-medium text-purple-300">3</span> — получите 🧸 плюшку</li>
            <li>Нажмёте что-то другое — получите ❓ "Неизвестный выбор"</li>
          </ul>
          <p className="mt-3">
            Оператор <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">switch</code> — это как такой автомат. Он смотрит на значение и выбирает <span className="font-medium text-yellow-300">один подходящий вариант</span>.
          </p>
        </div>
      </div>

      {/* Базовый синтаксис switch */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Базовый синтаксис switch — просто и красиво!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">switch</code> записывается без скобок, но с обязательными <code className="bg-gray-700 px-1 rounded">{`{}`}</code>. Каждый вариант — это <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">case</code>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-2">Синтаксис:</h3>
          <pre className="text-purple-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`switch переменная {
case значение1:
    // код для значения1
case значение2:
    // код для значения2
default:
    // если ничего не подошло
}`}</code>
          </pre>
        </div>

        <div className="mt-4 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Автомат с игрушками</h4>
          <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`package main

import "fmt"

func main() {
    var choice int
    fmt.Print("Выберите подарок (1-3): ")
    fmt.Scanln(&choice)

    switch choice {
    case 1:
        fmt.Println("🍦 Вы получили мороженое!")
    case 2:
        fmt.Println("🎮 Вы получили игрушку!")
    case 3:
        fmt.Println("🧸 Вы получили плюшку!")
    default:
        fmt.Println("❓ Неизвестный выбор. Попробуйте снова!")
    }
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Введите 2 → получите "🎮 Вы получили игрушку!"<br />
            → Введите 5 → получите "❓ Неизвестный выбор..."
          </div>
        </div>
      </div>

      {/* Switch с выражениями */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-cyan-400" />
          Switch с выражениями — можно сравнивать не только числа!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">switch</code> можно использовать не только переменные, но и <span className="font-medium text-cyan-300">выражения</span> — строки, булевы значения, результаты функций!
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Пример: День недели (строки)</h4>
            <pre className="text-blue-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`day := "Monday"

switch day {
case "Monday":
    fmt.Println("Понедельник — начало недели!")
case "Friday":
    fmt.Println("Пятница — скоро выходные! 🎉")
case "Sunday":
    fmt.Println("Воскресенье — отдых! 😴")
default:
    fmt.Println("Обычный рабочий день")
}`}</code>
            </pre>
            <div className="mt-2 text-gray-400 text-sm">
              → Выведет: "Понедельник — начало недели!"
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Пример: Логические значения</h4>
            <pre className="text-orange-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`isRaining := true

switch isRaining {
case true:
    fmt.Println("Берите зонт! ☔")
case false:
    fmt.Println("Можно гулять! ☀️")
}`}</code>
            </pre>
            <div className="mt-2 text-gray-400 text-sm">
              → Выведет: "Берите зонт! ☔"
            </div>
          </div>
        </div>
      </div>

      {/* Default case */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HelpCircle className="w-5 h-5 text-yellow-400" />
          Default case — что делать, если ничего не подошло?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Блок <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">default</code> выполняется, если <span className="font-medium">ни один</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">case</code> не совпал. Это как «запасной вариант».
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Оценка ученика</h4>
          <pre className="text-yellow-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`grade := "B"

switch grade {
case "A":
    fmt.Println("Отлично! 🌟")
case "B":
    fmt.Println("Хорошо! 👍")
case "C":
    fmt.Println("Удовлетворительно 📚")
default:
    fmt.Println("Оценка не распознана 😅")
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет: "Хорошо! 👍"<br />
            → Если grade = "Z" → выведет: "Оценка не распознана 😅"
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">💡 Запомните:</span> Блок <code className="bg-gray-700 px-1 rounded">default</code> может быть <span className="font-medium">в любом месте</span> — не обязательно в конце. Но лучше ставить его в конце для читаемости.
          </p>
        </div>
      </div>

      {/* Fallthrough — "проваливаемся" дальше */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRight className="w-5 h-5 text-red-400" />
          Fallthrough — когда нужно выполнить несколько case подряд
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Обычно после выполнения <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">case</code> программа выходит из <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">switch</code>. Но если написать <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">fallthrough</code> — она <span className="font-medium text-red-300">«провалится»</span> в следующий <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">case</code>!
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Скидки в магазине</h4>
          <pre className="text-red-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`age := 10

switch {
case age < 5:
    fmt.Println("Бесплатный вход!")
    fallthrough
case age < 12:
    fmt.Println("Скидка 50% для детей!")
    fallthrough
case age < 18:
    fmt.Println("Скидка 20% для подростков!")
default:
    fmt.Println("Полная цена")
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет:<br />
            "Скидка 50% для детей!"<br />
            "Скидка 20% для подростков!"<br />
            "Полная цена"<br />
            → Потому что age=10 попадает в <code className="bg-gray-700 px-1 rounded">{`case age < 12`}</code>, а потом «проваливается» дальше!
          </div>
        </div>

        <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded-lg">
          <p className="text-orange-300 text-sm">
            <span className="font-medium">⚠️ Внимание:</span> <code className="bg-gray-700 px-1 rounded">fallthrough</code> работает <span className="font-medium">только на следующий case</span>, даже если условие следующего case не выполняется!
          </p>
        </div>
      </div>

      {/* Switch без выражения — суперсила Go! */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-green-400" />
          🎯 Switch без выражения — замена сложным if/else!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go можно писать <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">switch</code> <span className="font-medium">без выражения</span> — тогда каждый <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">case</code> сам содержит условие! Это как <span className="font-medium text-green-300">if/else if/else</span>, но красивее.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Возрастные категории</h4>
          <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`age := 25

switch { // ← нет выражения!
case age < 13:
    fmt.Println("Ребёнок 🧒")
case age < 20:
    fmt.Println("Подросток 🧑")
case age < 65:
    fmt.Println("Взрослый 👨")
default:
    fmt.Println("Пенсионер 👴")
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет: "Взрослый 👨"
          </div>
        </div>

        <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
          <p className="text-purple-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Почему это круто:</span>
            <span>
              Такой <code className="bg-gray-700 px-1 rounded">switch</code> заменяет длинную цепочку <code className="bg-gray-700 px-1 rounded">if/else if/else</code> и выглядит гораздо чище и понятнее!
            </span>
          </p>
        </div>
      </div>

      {/* Сравнение switch и if/else */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CompareIcon />
          Сравнение: switch vs if/else — что когда использовать?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Оба способа работают. Но есть рекомендации:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">✅ Используйте switch, когда:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Сравниваете <span className="font-medium">одно значение</span> с несколькими вариантами</li>
              <li>Есть <span className="font-medium">много условий</span> — switch чище и понятнее</li>
              <li>Условия — <span className="font-medium">простые равенства</span> (числа, строки, булевы)</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">✅ Используйте if/else, когда:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Нужны <span className="font-medium">сложные условия</span> {`(например, x > 5 && y < 10)`}</li>
              <li>Нужно <span className="font-medium">выполнять несколько условий</span> одновременно</li>
              <li>Логика <span className="font-medium">нелинейная</span> — условия не связаны с одним значением</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Одно и то же — двумя способами</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-green-300 mb-2">С switch:</h5>
              <pre className="text-green-300 text-xs bg-gray-800 p-2 rounded">
                <code>{`switch score {
case 5:
    fmt.Println("Отлично")
case 4:
    fmt.Println("Хорошо")
case 3:
    fmt.Println("Удовл.")
default:
    fmt.Println("Неуд.")
}`}</code>
              </pre>
            </div>
            <div>
              <h5 className="font-medium text-blue-300 mb-2">С if/else:</h5>
              <pre className="text-blue-300 text-xs bg-gray-800 p-2 rounded">
                <code>{`if score == 5 {
    fmt.Println("Отлично")
} else if score == 4 {
    fmt.Println("Хорошо")
} else if score == 3 {
    fmt.Println("Удовл.")
} else {
    fmt.Println("Неуд.")
}`}</code>
              </pre>
            </div>
          </div>
          <div className="mt-3 text-gray-400 text-sm">
            → Оба варианта работают одинаково. Но <code className="bg-gray-700 px-1 rounded">switch</code> выглядит аккуратнее!
          </div>
        </div>
      </div>

      {/* Практический пример — игра "Угадай животное" */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Практика: Игра "Угадай животное по звуку"
        </h2>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`package main

import "fmt"

func main() {
    var sound string
    fmt.Print("Какой звук издаёт животное? (meow/bark/moo/other): ")
    fmt.Scanln(&sound)

    switch sound {
    case "meow":
        fmt.Println("🐱 Это кошка!")
    case "bark":
        fmt.Println("🐶 Это собака!")
    case "moo":
        fmt.Println("🐮 Это корова!")
    case "quack":
        fmt.Println("🦆 Это утка!")
        fallthrough // для веселья!
    default:
        fmt.Println("🤷 Не знаю такого животного... или оно очень редкое!")
    }
}`}</code>
          </pre>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <BookOpen className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы умеете использовать <code className="bg-gray-700 px-1 rounded text-purple-300">switch</code> — мощный и красивый инструмент для выбора одного из многих вариантов. Вы узнали про <code className="bg-gray-700 px-1 rounded text-green-300">case</code>, <code className="bg-gray-700 px-1 rounded text-yellow-300">default</code>, <code className="bg-gray-700 px-1 rounded text-red-300">fallthrough</code>, <code className="bg-gray-700 px-1 rounded text-cyan-300">switch без выражения</code> и когда лучше использовать <code className="bg-gray-700 px-1 rounded text-blue-300">switch</code> вместо <code className="bg-gray-700 px-1 rounded text-orange-300">if/else</code>. Это сделает ваш код чище и понятнее!
            </p>
            <p className="text-gray-300 mt-2">
              В следующей части — викторина, чтобы закрепить знания. Готовы проверить себя? 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Кастомная иконка для сравнения (если lucide-react не содержит CompareIcon)
const CompareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" />
  </svg>
);

export default Part1;