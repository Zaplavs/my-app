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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔢 Урок 11: Массивы в Go</h1>
            <h2 className="text-xl font-semibold text-teal-300 mb-3">Как хранить много значений в одном месте — упорядоченно и под контролем!</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить массивы — фундаментальную структуру данных в Go. Разберём объявление, инициализацию, индексацию, получение длины через <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">len()</code>, передачу в функции и ключевые ограничения. Массивы — это как полки в шкафу: фиксированное количество ячеек, каждая со своим номером!
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны массивы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужны массивы? Представьте книжную полку!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Представьте, что вам нужно хранить оценки ученика за 5 контрольных работ. Можно создать 5 отдельных переменных:
          </p>
          <pre className="text-gray-300 text-sm bg-gray-800 p-3 rounded my-3">
            <code>{`grade1 := 5
grade2 := 4
grade3 := 5
grade4 := 3
grade5 := 5`}</code>
          </pre>
          <p>
            Но что, если работ 100? Или нужно найти средний балл? Или отсортировать оценки? Вот тут и приходят на помощь <span className="font-medium text-blue-300">массивы</span> — упорядоченные коллекции элементов <span className="font-medium text-green-300">одного типа</span> с <span className="font-medium text-purple-300">фиксированным размером</span>.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Массив — это как <span className="font-medium text-yellow-300">полка с пронумерованными ячейками</span> (от 0 до N-1)</li>
            <li>Все элементы должны быть <span className="font-medium text-cyan-300">одного типа</span>: только int, только string и т.д.</li>
            <li>Размер массива <span className="font-medium text-red-300">задаётся при создании</span> и изменить его нельзя</li>
            <li>Доступ к элементу — по <span className="font-medium text-orange-300">индексу</span>: <code className="bg-gray-700 px-1 rounded">grades[0]</code>, <code className="bg-gray-700 px-1 rounded">grades[1]</code> и т.д.</li>
          </ul>
        </div>
      </div>

      {/* Объявление и инициализация массивов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          🎯 Объявление и инициализация — создаём полку нужного размера
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go массив объявляется с указанием <span className="font-medium text-green-300">размера</span> и <span className="font-medium text-blue-300">типа элементов</span>. Синтаксис: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">[N]T</code>, где N — размер, T — тип.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">1. Объявление с нулевыми значениями</h3>
            <p className="text-gray-400 text-sm mb-2">Элементы инициализируются нулями (0, "", false и т.д.)</p>
            <pre className="text-green-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`var grades [5]int
// grades = [0, 0, 0, 0, 0]`}</code>
            </pre>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">2. Инициализация при объявлении</h3>
            <p className="text-gray-400 text-sm mb-2">Задаём начальные значения</p>
            <pre className="text-blue-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`grades := [5]int{5, 4, 5, 3, 5}
// или
var scores = [3]float64{95.5, 87.0, 92.5}`}</code>
            </pre>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">3. Автоматический размер</h3>
            <p className="text-gray-400 text-sm mb-2">Go сам посчитает количество элементов</p>
            <pre className="text-purple-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`days := [...]string{"Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"}
// размер = 7`}</code>
            </pre>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">4. Частичная инициализация</h3>
            <p className="text-gray-400 text-sm mb-2">Можно инициализировать не все элементы</p>
            <pre className="text-orange-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`arr := [5]int{0: 10, 2: 30}
// arr = [10, 0, 30, 0, 0]`}</code>
            </pre>
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
          <p className="text-green-300 text-sm">
            <span className="font-medium">💡 Запомните:</span> Размер массива — <span className="font-medium">часть его типа</span>. Массивы разных размеров — это разные типы!
          </p>
        </div>
      </div>

      {/* Индексация массивов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-blue-400" />
          Индексация — как обращаться к отдельным элементам
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Элементы массива нумеруются с <span className="font-medium text-green-300">нуля</span>. Первый элемент — индекс 0, последний — индекс <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">len(array)-1</code>. Доступ к элементу: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">array[index]</code>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Работа с оценками</h4>
          <pre className="text-blue-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`grades := [5]int{5, 4, 5, 3, 5}

fmt.Println("Первая оценка:", grades[0])   // → 5
fmt.Println("Последняя оценка:", grades[4]) // → 5

// Изменяем третью оценку
grades[2] = 2
fmt.Println("Изменённый массив:", grades) // → [5 4 2 3 5]

// Ошибка: индекс за пределами массива!
// grades[5] = 10 // ← panic: index out of range`}</code>
          </pre>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-700/30">
            <h5 className="font-medium text-blue-300 mb-1">✅ Правильно</h5>
            <code className="text-xs">arr[0]</code><br />
            <code className="text-xs">arr[len(arr)-1]</code>
          </div>
          <div className="bg-yellow-900/20 p-3 rounded-lg border border-yellow-700/30">
            <h5 className="font-medium text-yellow-300 mb-1">⚠️ Осторожно</h5>
            <code className="text-xs">arr[-1]</code> — ошибка!<br />
            <code className="text-xs">arr[len(arr)]</code> — ошибка!
          </div>
          <div className="bg-red-900/20 p-3 rounded-lg border border-red-700/30">
            <h5 className="font-medium text-red-300 mb-1">❌ Нельзя</h5>
            <code className="text-xs">arr[1.5]</code> — только целые!<br />
            <code className="text-xs">arr["key"]</code> — не словарь!
          </div>
        </div>
      </div>

      {/* Длина массива через len() */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HelpCircle className="w-5 h-5 text-orange-400" />
          len() — как узнать размер массива
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Функция <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">len()</code> возвращает количество элементов в массиве. Это <span className="font-medium text-orange-300">константа времени компиляции</span> — Go знает размер массива заранее, поэтому <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">len()</code> работает мгновенно!
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Безопасный перебор массива</h4>
          <pre className="text-orange-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`grades := [5]int{5, 4, 5, 3, 5}
size := len(grades) // → 5

fmt.Printf("Всего оценок: %d\\n", size)

// Безопасный цикл — никогда не выйдет за границы!
for i := 0; i < len(grades); i++ {
    fmt.Printf("Оценка %d: %d\\n", i+1, grades[i])
}

// Или с range
for index, value := range grades {
    fmt.Printf("Индекс %d: оценка %d\\n", index, value)
}`}</code>
          </pre>
        </div>

        <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded-lg">
          <p className="text-orange-300 text-sm">
            <span className="font-medium">💡 Совет:</span> Всегда используйте <code className="bg-gray-700 px-1 rounded">len(array)</code> в циклах, а не «магические числа» — так код будет работать с массивами любого размера!
          </p>
        </div>
      </div>

      {/* Передача массивов в функции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRight className="w-5 h-5 text-yellow-400" />
          Передача массивов в функции — копирование по значению
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Go массивы передаются в функции <span className="font-medium text-yellow-300">по значению</span> — то есть функция получает <span className="font-medium text-red-300">полную копию</span> массива! Любые изменения внутри функции <span className="font-medium text-red-300">не влияют</span> на оригинальный массив.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Функция не изменяет оригинал</h4>
          <pre className="text-yellow-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`func modifyArray(arr [3]int) {
    arr[0] = 999  // ← изменяем копию!
    fmt.Println("Внутри функции:", arr)
}

func main() {
    numbers := [3]int{1, 2, 3}
    fmt.Println("До вызова:", numbers) // → [1 2 3]
    
    modifyArray(numbers)
    // → Внутри функции: [999 2 3]
    
    fmt.Println("После вызова:", numbers) // → [1 2 3] — не изменилось!
}`}</code>
          </pre>
        </div>

        <div className="mt-4 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Функция для суммы элементов массива</h4>
          <pre className="text-cyan-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`func sumArray(arr [5]int) int {
    total := 0
    for _, value := range arr {
        total += value
    }
    return total
}

func main() {
    scores := [5]int{10, 20, 30, 40, 50}
    result := sumArray(scores) // → 150
    fmt.Printf("Сумма: %d\\n", result)
    // scores остался без изменений!
}`}</code>
          </pre>
        </div>

        <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
          <p className="text-red-300 text-sm">
            <span className="font-medium">⚠️ Важно:</span> Если массив большой, его копирование может быть <span className="font-medium">неэффективным</span>. В таких случаях лучше использовать <span className="font-medium text-blue-300">срезы (slices)</span> — о них в следующих уроках!
          </p>
        </div>
      </div>

      {/* Ограничения массивов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <X className="w-5 h-5 text-red-400" />
          Ограничения массивов — когда лучше выбрать что-то другое
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Массивы в Go — мощный и эффективный инструмент, но у них есть важные ограничения, которые нужно знать:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30">
            <h4 className="font-bold text-red-300 mb-2">🔴 1. Фиксированный размер</h4>
            <p className="text-gray-300">
              Размер массива задаётся при создании и <span className="font-medium">не может быть изменён</span>. Нельзя добавить или удалить элементы.
            </p>
            <pre className="text-red-300 text-xs bg-gray-800 p-2 rounded mt-2">
              <code>{`arr := [3]int{1, 2, 3}
// arr = append(arr, 4) // ← ОШИБКА! append не работает с массивами`}</code>
            </pre>
          </div>

          <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-700/30">
            <h4 className="font-bold text-purple-300 mb-2">🟣 2. Размер — часть типа</h4>
            <p className="text-gray-300">
              Массивы разного размера — это <span className="font-medium">разные типы</span>. Нельзя передать [3]int в функцию, ожидающую [5]int.
            </p>
            <pre className="text-purple-300 text-xs bg-gray-800 p-2 rounded mt-2">
              <code>{`func process(arr [5]int) { ... }

arr := [3]int{1, 2, 3}
// process(arr) // ← ОШИБКА! [3]int ≠ [5]int`}</code>
            </pre>
          </div>

          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
            <h4 className="font-bold text-blue-300 mb-2">🔵 3. Передача по значению</h4>
            <p className="text-gray-300">
              При передаче в функцию копируется <span className="font-medium">весь массив</span>. Для больших массивов это может быть медленно и потреблять много памяти.
            </p>
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
            <h4 className="font-bold text-yellow-300 mb-2">🟡 4. Неудобство для динамических данных</h4>
            <p className="text-gray-300">
              Если вы не знаете заранее, сколько элементов понадобится — массив не лучший выбор. Для таких случаев есть <span className="font-medium text-green-300">срезы (slices)</span>.
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
          <p className="text-green-300 text-sm">
            <span className="font-medium">✅ Когда массивы хороши:</span> когда размер известен заранее и не меняется (дни недели, пиксели в изображении фиксированного размера, координаты точки в 3D-пространстве и т.д.)
          </p>
        </div>
      </div>

      {/* Практический пример — статистика оценок */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Практика: Анализ оценок с помощью массива
        </h2>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`package main

import "fmt"

func calculateStats(grades [5]float64) (float64, float64, float64) {
    var sum, max, min float64
    max = grades[0]
    min = grades[0]
    
    for i := 0; i < len(grades); i++ {
        sum += grades[i]
        if grades[i] > max {
            max = grades[i]
        }
        if grades[i] < min {
            min = grades[i]
        }
    }
    
    avg := sum / float64(len(grades))
    return avg, max, min
}

func printGrades(grades [5]float64) {
    fmt.Print("Оценки: ")
    for i, grade := range grades {
        if i > 0 {
            fmt.Print(", ")
        }
        fmt.Printf("%.1f", grade)
    }
    fmt.Println()
}

func main() {
    studentGrades := [5]float64{4.5, 3.8, 5.0, 4.2, 4.7}
    
    printGrades(studentGrades)
    
    average, highest, lowest := calculateStats(studentGrades)
    
    fmt.Printf("Среднее: %.2f\\n", average)
    fmt.Printf("Максимум: %.1f\\n", highest)
    fmt.Printf("Минимум: %.1f\\n", lowest)
    
    // Попробуем изменить оценку — создадим копию для демонстрации
    modifiedGrades := studentGrades
    modifiedGrades[0] = 5.0
    fmt.Println("\\nПосле изменения первой оценки на 5.0:")
    printGrades(modifiedGrades)
    fmt.Println("Оригинальный массив не изменился:")
    printGrades(studentGrades)
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
              Теперь вы — мастер массивов в Go! 🎯 Вы узнали, как объявлять и инициализировать массивы, работать с индексами, использовать <code className="bg-gray-700 px-1 rounded">len()</code>, передавать массивы в функции и понимать их ключевые ограничения. Массивы — это фундамент, на котором строятся более сложные структуры данных.
            </p>
            <p className="text-gray-300 mt-2">
              В следующем уроке мы познакомимся со <span className="font-medium text-blue-300">срезами (slices)</span> — более гибкой и мощной альтернативой массивам, которая решает многие их ограничения. Готовы к новому уровню? 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;