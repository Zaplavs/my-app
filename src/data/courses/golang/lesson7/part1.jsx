import React from 'react';
import { BookOpen, Code, Check, X, ArrowRight, Calculator , Hash, HelpCircle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧠 Урок 7: Условные операторы if/else в Go</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как программы принимают решения</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться использовать условные конструкции <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">if</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">else</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">else if</code> для управления ходом программы на Go. Разберём вложенные условия, инициализацию переменных прямо в условии, логические выражения и области видимости.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны if/else */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужны if и else?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Представьте, что вы пишете программу для робота-помощника на Go. Вы хотите, чтобы он:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Сказал «Доброе утро!» если сейчас утро</li>
            <li>Сказал «Добрый день!» если сейчас день</li>
            <li>Сказал «Спокойной ночи!» если сейчас ночь</li>
          </ul>
          <p className="mt-3">
            Без <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">if/else</code> робот бы говорил одно и то же всегда. А с ними — он может <span className="font-medium text-yellow-300">принимать решения</span>!
          </p>
        </div>
      </div>

      {/* Базовый синтаксис if */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          Базовый синтаксис if в Go
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go условие <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">if</code> записывается <span className="font-medium">без скобок</span> вокруг условия. Зато фигурные скобки <code className="bg-gray-700 px-1 rounded">{`{}`}</code> <span className="font-medium text-red-400">обязательны</span> — даже для одной строки!
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
          <h3 className="font-bold text-green-300 mb-2">Синтаксис:</h3>
          <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`if условие {
    // код, который выполнится, если условие true
}`}</code>
          </pre>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Пример 1: Проверка возраста</h4>
            <pre className="text-blue-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`package main

import "fmt"

func main() {
    age := 16

    if age >= 18 {
        fmt.Println("Вы совершеннолетний!")
    }
}`}</code>
            </pre>
            <div className="mt-2 text-gray-400 text-sm">
             {` → Ничего не выведет, потому что 16 < 18`}
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Пример 2: Проверка пароля</h4>
            <pre className="text-purple-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`password := "secret123"

if password == "secret123" {
    fmt.Println("Доступ разрешен!")
}`}</code>
            </pre>
            <div className="mt-2 text-gray-400 text-sm">
              → Выведет: "Доступ разрешен!"
            </div>
          </div>
        </div>
      </div>

      {/* if + else */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-orange-400" />
          if + else — два варианта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Если условие <code className="bg-gray-700 px-1 rounded text-green-300">true</code> — выполняется первый блок. Если <code className="bg-gray-700 px-1 rounded text-red-300">false</code> — второй.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-2">Синтаксис:</h3>
          <pre className="text-orange-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`if условие {
    // если true
} else {
    // если false
}`}</code>
          </pre>
        </div>

        <div className="mt-4 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Доступ по возрасту</h4>
          <pre className="text-cyan-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`age := 15

if age >= 18 {
    fmt.Println("Добро пожаловать!")
} else {
    fmt.Println("Вам ещё рано!")
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет: "Вам ещё рано!"
          </div>
        </div>
      </div>

      {/* else if — несколько условий */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          else if — когда условий много
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Если нужно проверить несколько условий — используем <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">else if</code>. Проверка идёт сверху вниз — выполняется <span className="font-medium">первое</span> истинное условие.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-2">Синтаксис:</h3>
          <pre className="text-purple-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`if условие1 {
    // если условие1 true
} else if условие2 {
    // если условие1 false, а условие2 true
} else {
    // если все условия false
}`}</code>
          </pre>
        </div>

        <div className="mt-4 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Оценка по баллам</h4>
          <pre className="text-yellow-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`score := 85

if score >= 90 {
    fmt.Println("Отлично! 🌟")
} else if score >= 75 {
    fmt.Println("Хорошо! 👍")
} else if score >= 50 {
    fmt.Println("Удовлетворительно 📚")
} else {
    fmt.Println("Нужно подтянуться 😅")
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет: "Хорошо! 👍" (первое подходящее условие)
          </div>
        </div>
      </div>

      {/* Инициализация в условии — фишка Go! */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-yellow-400" />
          🎯 Инициализация переменной прямо в условии — только в Go!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go можно <span className="font-medium text-green-400">объявить и инициализировать переменную прямо внутри if</span> — она будет доступна только внутри этого блока условия и всех связанных <code className="bg-gray-700 px-1 rounded">else</code>/<code className="bg-gray-700 px-1 rounded">else if</code>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
          <h3 className="font-bold text-yellow-300 mb-2">Синтаксис:</h3>
          <pre className="text-yellow-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`if переменная := значение; условие {
    // переменная доступна здесь
} else {
    // и здесь тоже!
}`}</code>
          </pre>
        </div>

        <div className="mt-4 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Генерация случайного числа</h4>
          <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    rand.Seed(time.Now().UnixNano())

    if num := rand.Intn(10); num > 5 {
        fmt.Printf("Число %d больше 5! 🎲\\n", num)
    } else {
        fmt.Printf("Число %d не больше 5.\\n", num)
    }

    // fmt.Println(num) ← ОШИБКА! num здесь недоступна
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Переменная <code className="bg-gray-700 px-1 rounded">num</code> существует только внутри <code className="bg-gray-700 px-1 rounded">if</code> и <code className="bg-gray-700 px-1 rounded">else</code>. Снаружи — её нет!
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
          <p className="text-green-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Почему это круто:</span>
            <span>
              Такой подход делает код чище и безопаснее — переменная не «загрязняет» внешнюю область видимости, если она нужна только для проверки.
            </span>
          </p>
        </div>
      </div>

      {/* Вложенные условия */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          Вложенные условия — условия внутри условий
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Можно помещать <code className="bg-gray-700 px-1 rounded">if</code> внутрь другого <code className="bg-gray-700 px-1 rounded">if</code>. Это называется <span className="font-medium text-cyan-300">вложенными условиями</span>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Проверка доступа с паролем и возрастом</h4>
          <pre className="text-cyan-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`age := 20
password := "open123"

if age >= 18 {
    fmt.Println("Возраст подходит!")

    if password == "open123" {
        fmt.Println("Пароль верный. Доступ разрешён! 🔓")
    } else {
        fmt.Println("Неверный пароль! 🔒")
    }
} else {
    fmt.Println("Вам нельзя. Вы слишком молоды.")
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет:<br />
            "Возраст подходит!"<br />
            "Пароль верный. Доступ разрешён! 🔓"
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">💡 Совет:</span> Не делайте слишком много вложений — код становится сложным для чтения. Лучше использовать логические операторы <code className="bg-gray-700 px-1 rounded">&&</code> или <code className="bg-gray-700 px-1 rounded">||</code>.
          </p>
        </div>
      </div>

      {/* Логические выражения в условиях */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calculator className="w-5 h-5 text-pink-400" />
          Логические выражения в условиях
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В условиях можно использовать логические операторы: <code className="bg-gray-700 px-1 rounded text-blue-300">&&</code> (И), <code className="bg-gray-700 px-1 rounded text-pink-300">||</code> (ИЛИ), <code className="bg-gray-700 px-1 rounded text-indigo-300">!</code> (НЕ).
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* И */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-400 font-mono">{'&&'}</span>
              <span className="text-sm text-gray-400">(И — оба условия должны быть true)</span>
            </div>
            <pre className="text-blue-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`age := 20
hasLicense := true

if age >= 18 && hasLicense {
    fmt.Println("Можно водить!")
}`}</code>
            </pre>
          </div>

          {/* ИЛИ */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-pink-400 font-mono">{'||'}</span>
              <span className="text-sm text-gray-400">(ИЛИ — хотя бы одно условие true)</span>
            </div>
            <pre className="text-pink-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`isWeekend := false
isHoliday := true

if isWeekend || isHoliday {
    fmt.Println("Можно поспать подольше! 😴")
}`}</code>
            </pre>
          </div>

          {/* НЕ */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-indigo-400 font-mono">{'!'}</span>
              <span className="text-sm text-gray-400">(НЕ — меняет true на false и наоборот)</span>
            </div>
            <pre className="text-indigo-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`isRaining := false

if !isRaining {
    fmt.Println("Можно гулять без зонта! ☀️")
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Блоки кода и области видимости */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-red-400" />
          Блоки кода и области видимости
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go каждая пара фигурных скобок <code className="bg-gray-700 px-1 rounded">{`{}`}</code> создаёт <span className="font-medium text-red-300">новую область видимости</span>. Переменные, объявленные внутри блока, <span className="font-medium">недоступны снаружи</span>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Область видимости в if</h4>
          <pre className="text-red-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`if x := 42; x > 0 {
    fmt.Println("x внутри if:", x) // → 42
}
// fmt.Println(x) ← ОШИБКА КОМПИЛЯЦИИ!
// x существует только внутри if`}</code>
          </pre>
        </div>

        <div className="mt-4 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Вложенные блоки</h4>
          <pre className="text-orange-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`func main() {
    a := 10
    {
        b := 20
        fmt.Println(a + b) // → 30
    }
    // fmt.Println(b) ← ОШИБКА! b не существует здесь
    fmt.Println(a) // → 10, a доступна
}`}</code>
          </pre>
        </div>

        <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
          <p className="text-purple-300 text-sm">
            <span className="font-medium">✨ Запомните:</span> Чем меньше область видимости переменной — тем лучше. Это делает код понятнее и безопаснее.
          </p>
        </div>
      </div>

      {/* Практический пример — игра "Угадай число" */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Практика: Игра "Угадай число"
        </h2>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    rand.Seed(time.Now().UnixNano())
    secret := rand.Intn(10) + 1 // число от 1 до 10

    var guess int
    fmt.Print("Угадайте число от 1 до 10: ")
    fmt.Scanf("%d", &guess)

    if guess == secret {
        fmt.Println("🎉 Поздравляем! Вы угадали!")
    } else if guess < secret {
        fmt.Println("📈 Загаданное число больше!")
    } else {
        fmt.Println("📉 Загаданное число меньше!")
    }

    fmt.Printf("Загаданное число было: %d\\n", secret)
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
              Теперь вы умеете управлять ходом программы с помощью <code className="bg-gray-700 px-1 rounded">if</code>, <code className="bg-gray-700 px-1 rounded">else</code>, <code className="bg-gray-700 px-1 rounded">else if</code>. Вы узнали про вложенные условия, инициализацию переменных прямо в <code className="bg-gray-700 px-1 rounded">if</code> (это фишка Go!), логические операторы и области видимости. Эти знания — основа любой программы. В следующей части урока вы закрепите всё на практике!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;