import React from 'react';
import { BookOpen, RotateCcw, Code, HelpCircle, Hash, ArrowRight, X, Check } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <RotateCcw className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔄 Урок 9: Циклы в Go</h1>
            <h2 className="text-xl font-semibold text-teal-300 mb-3">Как заставить программу повторять действия снова и снова!</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить цикл <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">for</code> — единственный цикл в Go! Разберём его формы: бесконечный, с условием, традиционный. Научимся использовать <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">break</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">continue</code>, вложенные циклы и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">range</code> для перебора строк.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны циклы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужны циклы? Представьте робота-повторюшку!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Представьте, что у вас есть робот, который умеет:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Повторить «Привет!» <span className="font-medium text-blue-300">5 раз</span> подряд</li>
            <li>Считать от <span className="font-medium text-green-300">1 до 10</span></li>
            <li>Повторять действие, <span className="font-medium text-purple-300">пока не скажете «стоп»</span></li>
            <li>Перебрать все буквы в слове <span className="font-medium text-red-300">«GO»</span> и сказать каждую вслух</li>
          </ul>
          <p className="mt-3">
            Циклы — это как команды для такого робота: <span className="font-medium text-yellow-300">«Повторяй, пока...»</span> или <span className="font-medium text-cyan-300">«Сделай 10 раз»</span>.
          </p>
        </div>
      </div>

      {/* Единственный цикл for */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          🎯 В Go только один цикл — for! Но он умеет всё!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go <span className="font-medium text-green-300">нет</span> циклов <code className="bg-gray-700 px-1 rounded">while</code> или <code className="bg-gray-700 px-1 rounded">do-while</code>. Вместо них — универсальный <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">for</code>, который может работать в трёх формах!
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">1. Традиционный for</h3>
            <p className="text-gray-400 text-sm mb-2">Как в C, Java, JavaScript</p>
            <pre className="text-green-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`for i := 0; i < 5; i++ {
    fmt.Println("Привет!")
}`}</code>
            </pre>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">2. For с условием</h3>
            <p className="text-gray-400 text-sm mb-2">Как while</p>
            <pre className="text-blue-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`for temperature > 30 {
    fmt.Println("Жарко!")
    temperature--
}`}</code>
            </pre>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">3. Бесконечный for</h3>
            <p className="text-gray-400 text-sm mb-2">Без условия — пока не break</p>
            <pre className="text-purple-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`for {
    fmt.Println("Бесконечно!")
    // где-то внутри должен быть break
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Традиционный for */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-blue-400" />
          Традиционный for — три части в одном
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Классический цикл: начальное значение, условие, шаг. Идеально для счёта!
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Счёт от 1 до 5</h4>
          <pre className="text-blue-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`for i := 1; i <= 5; i++ {
    fmt.Printf("Счёт: %d\\n", i)
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет: Счёт: 1, Счёт: 2, ..., Счёт: 5
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">💡 Запомните:</span> Переменная <code className="bg-gray-700 px-1 rounded">i</code> существует <span className="font-medium">только внутри цикла</span> — это область видимости!
          </p>
        </div>
      </div>

      {/* For с условием (аналог while) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HelpCircle className="w-5 h-5 text-orange-400" />
          For с условием — повторяй, пока правда!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Если нужно повторять, пока выполняется условие — просто пишем <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">{`for условие { ... }`}</code>. Это как <code className="bg-gray-700 px-1 rounded">while</code> в других языках.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Наполняем стакан водой</h4>
          <pre className="text-orange-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`waterLevel := 0
maxLevel := 10

for waterLevel < maxLevel {
    waterLevel++
    fmt.Printf("Уровень воды: %d\\n", waterLevel)
}

fmt.Println("Стакан полон! 🥤")`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет уровень от 1 до 10, затем "Стакан полон!"
          </div>
        </div>
      </div>

      {/* Бесконечный for */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <X className="w-5 h-5 text-red-400" />
          Бесконечный for — пока не скажешь «стоп»!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Иногда нужно, чтобы программа работала <span className="font-medium">постоянно</span> — например, чат-бот или игра. Тогда используем <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">{`for { ... }`}</code>. Остановить можно только с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">break</code>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Простой чат-бот</h4>
          <pre className="text-red-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`fmt.Println("Привет! Напишите 'пока' для выхода.")

for {
    var message string
    fmt.Print("Вы: ")
    fmt.Scanln(&message)
    
    if message == "пока" {
        fmt.Println("Бот: До свидания! 👋")
        break // ← выход из цикла!
    }
    
    fmt.Println("Бот: Я вас не понимаю. Попробуйте ещё.")
}`}</code>
          </pre>
        </div>

        <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
          <p className="text-red-300 text-sm">
            <span className="font-medium">⚠️ Внимание:</span> Без <code className="bg-gray-700 px-1 rounded">break</code> программа зациклится навсегда! Всегда предусматривайте условие выхода.
          </p>
        </div>
      </div>

      {/* Break и continue */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRight className="w-5 h-5 text-yellow-400" />
          Break и continue — управляем циклом изнутри
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Иногда нужно <span className="font-medium text-yellow-300">досрочно выйти</span> из цикла или <span className="font-medium text-cyan-300">пропустить</span> текущую итерацию. Для этого — <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">break</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">continue</code>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Break — выйти из цикла</h4>
            <pre className="text-yellow-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`for i := 1; i <= 10; i++ {
    if i == 5 {
        break // выйти, когда i=5
    }
    fmt.Println(i)
}`}</code>
            </pre>
            <div className="mt-2 text-gray-400 text-sm">
              → Выведет: 1, 2, 3, 4 → и остановится
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Continue — пропустить итерацию</h4>
            <pre className="text-cyan-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`for i := 1; i <= 5; i++ {
    if i == 3 {
        continue // пропустить 3
    }
    fmt.Println(i)
}`}</code>
            </pre>
            <div className="mt-2 text-gray-400 text-sm">
              → Выведет: 1, 2, 4, 5 (3 пропущено)
            </div>
          </div>
        </div>
      </div>

      {/* Вложенные циклы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Вложенные циклы — цикл внутри цикла
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Можно помещать цикл внутрь другого цикла. Это как <span className="font-medium text-purple-300">этажи в доме</span>: внешний цикл — этажи, внутренний — комнаты на каждом этаже.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Таблица умножения 3x3</h4>
          <pre className="text-purple-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`for i := 1; i <= 3; i++ {
    for j := 1; j <= 3; j++ {
        fmt.Printf("%d×%d=%d  ", i, j, i*j)
    }
    fmt.Println() // новая строка после каждого ряда
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет:<br />
            1×1=1  1×2=2  1×3=3<br />
            2×1=2  2×2=4  2×3=6<br />
            3×1=3  3×2=6  3×3=9
          </div>
        </div>

        <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
          <p className="text-purple-300 text-sm">
            <span className="font-medium">💡 Совет:</span> Используйте разные имена переменных (<code className="bg-gray-700 px-1 rounded">i</code>, <code className="bg-gray-700 px-1 rounded">j</code>, <code className="bg-gray-700 px-1 rounded">k</code>) для разных уровней вложенности.
          </p>
        </div>
      </div>

      {/* Range для строк */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Check className="w-5 h-5 text-cyan-400" />
          Range для строк — перебираем буквы!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Чтобы перебрать все символы в строке — используем <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">for ... range</code>. Получаем и индекс, и символ!
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Разбор слова "GO"</h4>
          <pre className="text-cyan-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`word := "GO"

for index, char := range word {
    fmt.Printf("Индекс %d: символ '%c'\\n", index, char)
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет:<br />
            Индекс 0: символ 'G'<br />
            Индекс 1: символ 'O'
          </div>
        </div>

        <div className="mt-4 p-3 bg-cyan-900/20 border border-cyan-700/30 rounded-lg">
          <p className="text-cyan-300 text-sm">
            <span className="font-medium">✨ Запомните:</span> Если индекс не нужен — замените его на <code className="bg-gray-700 px-1 rounded">_</code>: <br />
            <code className="bg-gray-800 px-1.5 py-0.5 rounded text-cyan-300">{`for _, char := range word { ... }`}</code>
          </p>
        </div>
      </div>

      {/* Практический пример — игра "Угадай число" с циклом */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Практика: Игра "Угадай число" с циклом
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
    secret := rand.Intn(10) + 1
    attempts := 0

    fmt.Println("🎮 Угадайте число от 1 до 10!")

    for {
        var guess int
        fmt.Print("Ваша догадка: ")
        fmt.Scanf("%d", &guess)
        attempts++

        if guess == secret {
            fmt.Printf("🎉 Поздравляем! Вы угадали за %d попыток!\\n", attempts)
            break
        } else if guess < secret {
            fmt.Println("📈 Загаданное число больше!")
        } else {
            fmt.Println("📉 Загаданное число меньше!")
        }
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
              Теперь вы — мастер циклов в Go! 🎯 Вы узнали, что в Go всего один цикл — <code className="bg-gray-700 px-1 rounded">for</code>, но он умеет всё: считать, повторять по условию, работать бесконечно, вкладываться внутрь себя, перебирать строки. Вы освоили <code className="bg-gray-700 px-1 rounded">break</code> и <code className="bg-gray-700 px-1 rounded">continue</code> — и теперь можете управлять циклами как настоящий программист!
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

export default Part1;