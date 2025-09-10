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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔄 Урок 10: Функции в Go</h1>
            <h2 className="text-xl font-semibold text-teal-300 mb-3">Как создавать и использовать «мини-программы» внутри программы!</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться объявлять и вызывать функции. Разберём параметры, возвращаемые значения (включая <span className="font-medium text-purple-300">множественные</span> и <span className="font-medium text-cyan-300">именованные</span>), а также вложенные функции. Функции — это как инструменты в вашем ящике: один раз создал — используй сколько угодно!
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны функции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужны функции? Представьте конструктор LEGO!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Представьте, что вы строите огромный замок из LEGO. Вместо того чтобы каждый раз заново собирать башню, дверь или мост — вы делаете их один раз и просто <span className="font-medium text-blue-300">используете снова и снова</span>.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Функция — это <span className="font-medium text-green-300">готовый блок кода</span>, который можно вызывать по имени</li>
            <li>Она принимает <span className="font-medium text-yellow-300">входные данные</span> (параметры) и может возвращать <span className="font-medium text-purple-300">результат</span></li>
            <li>Функции помогают <span className="font-medium text-red-300">избежать повторений</span> и делают код понятнее</li>
            <li>Можно создавать функции внутри функций — как <span className="font-medium text-cyan-300">секретные мини-инструменты</span></li>
          </ul>
          <p className="mt-3">
            Функции — это как команды для вашего робота: <span className="font-medium text-orange-300">«Сделай это!»</span>, и он знает, что делать, потому что вы уже написали инструкцию.
          </p>
        </div>
      </div>

      {/* Объявление и вызов функций */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          🎯 Объявление и вызов — два простых шага
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Объявить функцию — значит описать, что она делает. Вызвать — значит попросить её выполниться. В Go функции объявляются с ключевым словом <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">func</code>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Приветствие</h4>
          <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`func sayHello() {
    fmt.Println("Привет, мир! 👋")
}

func main() {
    sayHello() // ← вызов функции
    sayHello()
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет "Привет, мир! 👋" два раза
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
          <p className="text-green-300 text-sm">
            <span className="font-medium">💡 Запомните:</span> Функция должна быть объявлена <span className="font-medium">до её вызова</span> (или в том же пакете). Обычно функции объявляют выше <code className="bg-gray-700 px-1 rounded">main()</code>.
          </p>
        </div>
      </div>

      {/* Параметры функций */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-blue-400" />
          Параметры — входные данные для функции
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Параметры — это переменные, которые функция получает при вызове. Они указываются в скобках после имени функции. Можно передавать сколько угодно параметров, указывая тип для каждого.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Приветствие с именем</h4>
          <pre className="text-blue-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`func greet(name string) {
    fmt.Printf("Привет, %s! 😊\\n", name)
}

func main() {
    greet("Анна")
    greet("Алексей")
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Выведет: Привет, Анна! 😊<br />
            → Привет, Алексей! 😊
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">📌 Синтаксис:</span> <code className="bg-gray-700 px-1 rounded">{`func имя(параметр тип, параметр2 тип) { ... }`}</code>
          </p>
        </div>
      </div>

      {/* Возвращаемые значения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HelpCircle className="w-5 h-5 text-orange-400" />
          Возвращаемые значения — результат работы функции
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Функция может не просто что-то делать, но и <span className="font-medium text-orange-300">возвращать результат</span>. Для этого указывается тип возвращаемого значения после скобок с параметрами, а внутри функции используется ключевое слово <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">return</code>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Сложение двух чисел</h4>
          <pre className="text-orange-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`func add(a int, b int) int {
    return a + b
}

func main() {
    result := add(5, 3)
    fmt.Printf("5 + 3 = %d\\n", result) // → 8
}`}</code>
          </pre>
        </div>

        <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded-lg">
          <p className="text-orange-300 text-sm">
            <span className="font-medium">💡 Совет:</span> Если параметры одного типа, можно писать короче: <code className="bg-gray-700 px-1 rounded">func add(a, b int) int</code>
          </p>
        </div>
      </div>

      {/* Множественные возвращаемые значения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <X className="w-5 h-5 text-purple-400" />
          Множественные возвращаемые значения — верни всё сразу!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Go позволяет функции возвращать <span className="font-medium text-purple-300">несколько значений сразу</span>. Это очень удобно, например, для возврата результата и ошибки. Указываем несколько типов в скобках, а в <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">return</code> — несколько значений.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Деление с остатком</h4>
          <pre className="text-purple-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`func divide(a, b int) (int, int) {
    quotient := a / b
    remainder := a % b
    return quotient, remainder
}

func main() {
    q, r := divide(10, 3)
    fmt.Printf("10 ÷ 3 = %d с остатком %d\\n", q, r) // → 3 с остатком 1
}`}</code>
          </pre>
        </div>

        <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
          <p className="text-purple-300 text-sm">
            <span className="font-medium">✨ Запомните:</span> При вызове функции с несколькими возвращаемыми значениями, нужно указать столько же переменных для их приёма (или использовать <code className="bg-gray-700 px-1 rounded">_</code> для игнорирования).
          </p>
        </div>
      </div>

      {/* Именованные возвращаемые значения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRight className="w-5 h-5 text-cyan-400" />
          Именованные возвращаемые значения — переменные с предустановкой
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go можно дать <span className="font-medium text-cyan-300">имена</span> возвращаемым значениям прямо в сигнатуре функции. Такие переменные автоматически создаются и инициализируются нулевыми значениями. В конце функции можно использовать <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">return</code> без указания значений — вернутся текущие значения именованных переменных.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Минимум и максимум из двух чисел</h4>
          <pre className="text-cyan-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`func minMax(a, b int) (min, max int) {
    if a < b {
        min = a
        max = b
    } else {
        min = b
        max = a
    }
    return // ← не нужно писать return min, max
}

func main() {
    low, high := minMax(7, 2)
    fmt.Printf("Мин: %d, Макс: %d\\n", low, high) // → Мин: 2, Макс: 7
}`}</code>
          </pre>
        </div>

        <div className="mt-4 p-3 bg-cyan-900/20 border border-cyan-700/30 rounded-lg">
          <p className="text-cyan-300 text-sm">
            <span className="font-medium">💡 Подсказка:</span> Именованные возвращаемые значения делают код понятнее и позволяют использовать <span className="font-medium">«голый return»</span> — но не злоупотребляйте им в больших функциях.
          </p>
        </div>
      </div>

      {/* Вложенные функции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-pink-400" />
          Вложенные функции — функции внутри функций
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go можно объявлять функции <span className="font-medium text-pink-300">внутри других функций</span>. Такие функции имеют доступ к переменным внешней функции (замыкания) и могут использоваться для инкапсуляции логики или создания функций-фабрик.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Счётчик с замыканием</h4>
          <pre className="text-pink-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`func makeCounter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

func main() {
    counter := makeCounter()
    fmt.Println(counter()) // → 1
    fmt.Println(counter()) // → 2
    fmt.Println(counter()) // → 3
}`}</code>
          </pre>
          <div className="mt-2 text-gray-400 text-sm">
            → Функция <code className="bg-gray-700 px-1 rounded">makeCounter</code> возвращает другую функцию, которая «помнит» переменную <code className="bg-gray-700 px-1 rounded">count</code> из своей внешней области видимости.
          </div>
        </div>

        <div className="mt-4 p-3 bg-pink-900/20 border border-pink-700/30 rounded-lg">
          <p className="text-pink-300 text-sm">
            <span className="font-medium">✨ Мощно:</span> Вложенные функции + замыкания = мощный инструмент для создания генераторов, декораторов, частичного применения и многого другого!
          </p>
        </div>
      </div>

      {/* Практический пример — калькулятор с функциями */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Практика: Калькулятор с функциями
        </h2>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`package main

import "fmt"

func add(a, b float64) float64   { return a + b }
func sub(a, b float64) float64   { return a - b }
func mul(a, b float64) float64   { return a * b }
func div(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("деление на ноль")
    }
    return a / b, nil
}

func main() {
    fmt.Println("🔢 Калькулятор")
    
    x, y := 10.0, 3.0
    
    fmt.Printf("Сложение: %.1f\\n", add(x, y))
    fmt.Printf("Вычитание: %.1f\\n", sub(x, y))
    fmt.Printf("Умножение: %.1f\\n", mul(x, y))
    
    if result, err := div(x, y); err != nil {
        fmt.Printf("Ошибка: %v\\n", err)
    } else {
        fmt.Printf("Деление: %.3f\\n", result)
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
              Теперь вы — мастер функций в Go! 🎯 Вы научились создавать и вызывать функции, передавать параметры, возвращать значения (даже несколько сразу!), использовать именованные возвращаемые значения и создавать функции внутри функций. Это фундамент любого хорошего кода!
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