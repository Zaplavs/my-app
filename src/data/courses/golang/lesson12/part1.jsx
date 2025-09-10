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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✂️ Урок 12: Слайсы (Срезы) в Go</h1>
            <h2 className="text-xl font-semibold text-teal-300 mb-3">Гибкие и мощные коллекции — главный инструмент для работы с последовательностями данных!</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить слайсы — динамические аналоги массивов в Go. Разберём отличия от массивов, создание, нарезку (slicing), встроенные функции <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">len</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">cap</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">append</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">copy</code>, и почему слайсы — <span className="font-medium text-cyan-300">ссылочные типы</span>. Слайсы — это как волшебная резинка, которая растягивается по мере необходимости!
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны слайсы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужны слайсы? Представьте волшебную резинку!
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Помните массивы из прошлого урока? Они как деревянная линейка — размер фиксированный, нельзя добавить или убрать деления. А теперь представьте <span className="font-medium text-blue-300">волшебную резинку</span>:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Можно <span className="font-medium text-green-300">растянуть</span> — добавить больше элементов</li>
            <li>Можно <span className="font-medium text-purple-300">сжать</span> — взять только часть</li>
            <li>Можно <span className="font-medium text-yellow-300">отрезать кусочек</span> — создать новый слайс из части</li>
            <li>Когда заканчивается место — резинка <span className="font-medium text-red-300">автоматически становится длиннее</span>!</li>
          </ul>
          <p className="mt-3">
            Слайсы решают главные проблемы массивов: <span className="font-medium text-cyan-300">фиксированный размер</span> и <span className="font-medium text-orange-300">неэффективная передача</span>. Это основной инструмент Go для работы с коллекциями данных!
          </p>
        </div>
      </div>

      {/* Отличие слайсов от массивов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          🎯 Ключевые отличия: массивы vs слайсы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Понимание разницы между массивами и слайсами — фундамент для эффективного программирования на Go.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left p-3 font-medium text-white bg-gray-800">Характеристика</th>
                <th className="text-left p-3 font-medium text-green-300 bg-gray-800">Массивы</th>
                <th className="text-left p-3 font-medium text-blue-300 bg-gray-800">Слайсы</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-medium text-gray-300">Размер</td>
                <td className="p-3 text-gray-300">Фиксированный, часть типа</td>
                <td className="p-3 text-gray-300">Динамический, может меняться</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-medium text-gray-300">Объявление</td>
                <td className="p-3 text-gray-300"><code className="bg-gray-700 px-1.5 py-0.5 rounded">[5]int</code></td>
                <td className="p-3 text-gray-300"><code className="bg-gray-700 px-1.5 py-0.5 rounded">[]int</code></td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-medium text-gray-300">Передача в функции</td>
                <td className="p-3 text-gray-300">По значению (копируется полностью)</td>
                <td className="p-3 text-gray-300">По ссылке (копируется только заголовок)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-medium text-gray-300">Добавление элементов</td>
                <td className="p-3 text-gray-300">Невозможно</td>
                <td className="p-3 text-gray-300">Через <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">append()</code></td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-medium text-gray-300">Производительность</td>
                <td className="p-3 text-gray-300">Высокая для маленьких массивов</td>
                <td className="p-3 text-gray-300">Гибкая, оптимизированная для динамических данных</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-300">Использование</td>
                <td className="p-3 text-gray-300">Когда размер известен и не меняется</td>
                <td className="p-3 text-gray-300">В 95% случаев — основной выбор!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
          <p className="text-green-300 text-sm">
            <span className="font-medium">💡 Запомните:</span> В Go вы будете использовать <span className="font-medium text-blue-300">слайсы</span> в подавляющем большинстве случаев. Массивы — для специфических сценариев, когда нужна максимальная производительность и фиксированный размер.
          </p>
        </div>
      </div>

      {/* Создание и манипуляции слайсами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-blue-400" />
          Создание слайсов — несколько способов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Слайсы можно создавать разными способами — от простого объявления до инициализации с данными.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">1. Объявление nil-слайса</h3>
            <p className="text-gray-400 text-sm mb-2">Создаётся без выделения памяти</p>
            <pre className="text-green-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`var numbers []int
// len=0, cap=0, nil-слайс`}</code>
            </pre>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">2. Инициализация литералом</h3>
            <p className="text-gray-400 text-sm mb-2">Сразу с данными</p>
            <pre className="text-blue-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`fruits := []string{"яблоко", "банан", "апельсин"}
// len=3, cap=3`}</code>
            </pre>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">3. Создание через make()</h3>
            <p className="text-gray-400 text-sm mb-2">С контролем длины и ёмкости</p>
            <pre className="text-purple-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`scores := make([]int, 5)
// len=5, cap=5, все элементы=0

buffer := make([]byte, 0, 1024)
// len=0, cap=1024 — зарезервирована память!`}</code>
            </pre>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">4. Нарезка массива</h3>
            <p className="text-gray-400 text-sm mb-2">Создание слайса из массива</p>
            <pre className="text-orange-300 text-xs bg-gray-800 p-2 rounded">
              <code>{`arr := [5]int{1, 2, 3, 4, 5}
slice := arr[1:4] 
// slice = [2 3 4], len=3, cap=4`}</code>
            </pre>
          </div>
        </div>

        <div className="mt-4 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Работа с разными способами создания</h4>
          <pre className="text-cyan-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`package main

import "fmt"

func main() {
    // 1. Nil-слайс
    var empty []int
    fmt.Printf("Nil слайс: len=%d, cap=%d, nil=%v\\n", 
        len(empty), cap(empty), empty == nil)

    // 2. Литерал
    colors := []string{"красный", "зелёный", "синий"}
    fmt.Printf("Цвета: %v, len=%d, cap=%d\\n", 
        colors, len(colors), cap(colors))

    // 3. Через make
    numbers := make([]float64, 3, 10)
    fmt.Printf("Числа: %v, len=%d, cap=%d\\n", 
        numbers, len(numbers), cap(numbers))

    // 4. Нарезка массива
    source := [6]int{10, 20, 30, 40, 50, 60}
    part := source[2:5]
    fmt.Printf("Часть: %v, len=%d, cap=%d\\n", 
        part, len(part), cap(part))
}`}</code>
          </pre>
        </div>
      </div>

      {/* Встроенные функции: len, cap, append, copy */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HelpCircle className="w-5 h-5 text-orange-400" />
          Встроенные функции — инструменты для работы со слайсами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Go предоставляет мощные встроенные функции для работы со слайсами: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">len()</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">cap()</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">append()</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">copy()</code>.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
            <h4 className="font-bold text-green-300 mb-2">len() и cap() — длина и ёмкость</h4>
            <p className="text-gray-300 mb-2">
              <code className="bg-gray-700 px-1 rounded">len()</code> — количество элементов в слайсе.<br />
              <code className="bg-gray-700 px-1 rounded">cap()</code> — общая ёмкость (сколько элементов может вместить без перераспределения памяти).
            </p>
            <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`slice := make([]int, 3, 10)
fmt.Printf("len=%d, cap=%d\\n", len(slice), cap(slice)) // len=3, cap=10

slice = append(slice, 1, 2, 3, 4, 5, 6, 7)
fmt.Printf("len=%d, cap=%d\\n", len(slice), cap(slice)) // len=10, cap=10

slice = append(slice, 8)
fmt.Printf("len=%d, cap=%d\\n", len(slice), cap(slice)) // len=11, cap=20 (ёмкость удвоилась!)`}</code>
            </pre>
          </div>

          <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-700/30">
            <h4 className="font-bold text-purple-300 mb-2">append() — добавление элементов</h4>
            <p className="text-gray-300 mb-2">
              Добавляет элементы в конец слайса. Если не хватает ёмкости — выделяется новый массив, данные копируются, ёмкость увеличивается (обычно удваивается).
            </p>
            <pre className="text-purple-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`fruits := []string{"яблоко", "банан"}

// Добавляем один элемент
fruits = append(fruits, "апельсин")

// Добавляем несколько элементов
fruits = append(fruits, "виноград", "манго")

// Добавляем другой слайс (с троеточием)
moreFruits := []string{"киви", "ананас"}
fruits = append(fruits, moreFruits...)

fmt.Println(fruits) // [яблоко банан апельсин виноград манго киви ананас]`}</code>
            </pre>
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
            <h4 className="font-bold text-yellow-300 mb-2">copy() — копирование элементов</h4>
            <p className="text-gray-300 mb-2">
              Копирует элементы из исходного слайса в целевой. Возвращает количество скопированных элементов.
            </p>
            <pre className="text-yellow-300 text-sm bg-gray-800 p-3 rounded">
              <code>{`src := []int{1, 2, 3, 4, 5}
dst := make([]int, 3) // целевой слайс длиной 3

n := copy(dst, src)
fmt.Printf("Скопировано %d элементов: %v\\n", n, dst) // Скопировано 3 элементов: [1 2 3]

// Копирование в больший слайс
dst2 := make([]int, 10)
n2 := copy(dst2, src)
fmt.Printf("Скопировано %d элементов: %v\\n", n2, dst2[:n2]) // Скопировано 5 элементов: [1 2 3 4 5]`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Слайсы как ссылочные типы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRight className="w-5 h-5 text-yellow-400" />
          Слайсы — ссылочные типы (но не совсем!)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Слайсы в Go — это <span className="font-medium text-yellow-300">ссылочные типы</span>, но с важной особенностью. Когда вы передаёте слайс в функцию, копируется не весь массив данных, а только <span className="font-medium text-blue-300">заголовок слайса</span> (указатель на массив, длина, ёмкость). Поэтому изменения внутри функции <span className="font-medium text-green-300">видны снаружи</span>!
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Изменения видны вне функции</h4>
          <pre className="text-yellow-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`func modifySlice(s []int) {
    s[0] = 999      // ← изменение видно снаружи!
    s = append(s, 5) // ← это создаст новый слайс, изменения НЕ видны снаружи!
    fmt.Println("Внутри функции:", s)
}

func main() {
    numbers := []int{1, 2, 3, 4}
    fmt.Println("До вызова:", numbers) // → [1 2 3 4]
    
    modifySlice(numbers)
    // → Внутри функции: [999 2 3 4 5]
    
    fmt.Println("После вызова:", numbers) // → [999 2 3 4] — последний append не повлиял!
}`}</code>
          </pre>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-900/20 p-3 rounded-lg border border-green-700/30">
            <h5 className="font-medium text-green-300 mb-1">✅ Изменение элементов</h5>
            <p className="text-sm text-gray-300">Видно снаружи, т.к. массив данных общий</p>
          </div>
          <div className="bg-red-900/20 p-3 rounded-lg border border-red-700/30">
            <h5 className="font-medium text-red-300 mb-1">⚠️ append может создать новый массив</h5>
            <p className="text-sm text-gray-300">Если не хватило ёмкости — изменения не видны снаружи!</p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm">
            <span className="font-medium">💡 Важно:</span> Слайс — это структура из 3 полей: указатель на массив, длина, ёмкость. При передаче в функцию копируются только эти 3 поля, а не весь массив данных!
          </p>
        </div>
      </div>

      {/* Нарезка (slicing) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <X className="w-5 h-5 text-red-400" />
          Нарезка (slicing) — создаём новые слайсы из существующих
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Операция нарезки позволяет создавать <span className="font-medium text-red-300">новые слайсы</span>, которые ссылаются на <span className="font-medium text-purple-300">подмножество элементов</span> исходного массива или слайса. Синтаксис: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">slice[low:high]</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">slice[low:high:max]</code>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Основы нарезки</h4>
          <pre className="text-red-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`arr := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

// Базовая нарезка [low:high] - включает low, исключает high
slice1 := arr[2:5]   // [2 3 4] - индексы 2,3,4
slice2 := arr[:3]    // [0 1 2] - от начала до индекса 3
slice3 := arr[7:]    // [7 8 9] - от индекса 7 до конца
slice4 := arr[:]     // [0 1 2 3 4 5 6 7 8 9] - копия всего слайса

fmt.Println(slice1, slice2, slice3, slice4)`}</code>
          </pre>
        </div>

        <div className="mt-4 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Расширенная нарезка [low:high:max]</h4>
          <pre className="text-purple-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`original := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

// [low:high:max] - max устанавливает максимальную ёмкость
limited := original[2:5:7] 
// len=3 (элементы 2,3,4), cap=5 (может расширяться до индекса 7)

fmt.Printf("limited: %v, len=%d, cap=%d\\n", 
    limited, len(limited), cap(limited))

// Попробуем добавить элементы
limited = append(limited, 99, 88)
fmt.Printf("после append: %v, len=%d, cap=%d\\n", 
    limited, len(limited), cap(limited))

// Попытка добавить ещё один элемент вызовет перераспределение
// т.к. достигнута максимальная ёмкость (cap=5, len станет 6)
limited = append(limited, 77)
fmt.Printf("после перераспределения: %v, len=%d, cap=%d\\n", 
    limited, len(limited), cap(limited))`}</code>
          </pre>
        </div>

        <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded-lg">
          <p className="text-orange-300 text-sm">
            <span className="font-medium">⚠️ Осторожно:</span> При нарезке новый слайс <span className="font-medium">разделяет память</span> с исходным. Изменение элемента в одном слайсе повлияет на другой!
          </p>
        </div>

        <div className="mt-4 bg-gray-900/50 p-4 rounded-lg">
          <h4 className="font-medium text-white mb-2">Пример: Совместное использование памяти</h4>
          <pre className="text-cyan-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`original := []int{1, 2, 3, 4, 5}
subset := original[1:4]  // [2 3 4]

fmt.Println("До:", original, subset) // [1 2 3 4 5] [2 3 4]

// Изменяем элемент через subset
subset[0] = 999

fmt.Println("После:", original, subset) // [1 999 3 4 5] [999 3 4]`}</code>
          </pre>
        </div>
      </div>

      {/* Практический пример — динамический список задач */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Практика: Управление списком задач с помощью слайсов
        </h2>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg">
          <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
            <code>{`package main

import "fmt"

func addTask(tasks []string, task string) []string {
    return append(tasks, task)
}

func removeTask(tasks []string, index int) []string {
    if index < 0 || index >= len(tasks) {
        return tasks
    }
    // Удаляем элемент, объединяя две части слайса
    return append(tasks[:index], tasks[index+1:]...)
}

func printTasks(tasks []string) {
    fmt.Println("📋 Список задач:")
    if len(tasks) == 0 {
        fmt.Println("  Пусто! Отдыхайте 😊")
        return
    }
    for i, task := range tasks {
        fmt.Printf("  %d. %s\\n", i+1, task)
    }
}

func completeTask(tasks []string, index int) []string {
    if index < 0 || index >= len(tasks) {
        return tasks
    }
    // Помечаем задачу как выполненную
    tasks[index] = "✓ " + tasks[index]
    return tasks // возвращаем тот же слайс (изменения и так видны)
}

func main() {
    var todoList []string
    
    fmt.Println("🌟 Добро пожаловать в менеджер задач!")
    
    // Добавляем задачи
    todoList = addTask(todoList, "Выучить слайсы в Go")
    todoList = addTask(todoList, "Написать программу")
    todoList = addTask(todoList, "Погулять с собакой")
    
    printTasks(todoList)
    
    // Выполняем первую задачу
    todoList = completeTask(todoList, 0)
    fmt.Println("\\n🎉 Первая задача выполнена!")
    printTasks(todoList)
    
    // Удаляем вторую задачу
    todoList = removeTask(todoList, 1)
    fmt.Println("\\n🗑️ Вторая задача удалена!")
    printTasks(todoList)
    
    // Добавляем новую задачу
    todoList = addTask(todoList, "Поспать")
    fmt.Println("\\n➕ Добавлена новая задача!")
    printTasks(todoList)
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
              Теперь вы — мастер слайсов в Go! 🎯 Вы узнали, чем слайсы отличаются от массивов, как их создавать, использовать встроенные функции <code className="bg-gray-700 px-1 rounded">len</code>, <code className="bg-gray-700 px-1 rounded">cap</code>, <code className="bg-gray-700 px-1 rounded">append</code>, <code className="bg-gray-700 px-1 rounded">copy</code>, почему они ведут себя как ссылочные типы и как использовать мощную операцию нарезки (slicing).
            </p>
            <p className="text-gray-300 mt-2">
              Слайсы — это сердце Go для работы с коллекциями данных. В следующих уроках мы будем использовать их постоянно! Готовы к новым вершинам? 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;