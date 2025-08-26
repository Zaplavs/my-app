// src/data/courses/go/lesson4/part1.jsx
import React from 'react';
import { Terminal, ArrowRight, ArrowLeft, Code, BookOpen, Hash } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔤 Урок 4: Ввод и вывод данных в Go</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с пакетом fmt</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить основные функции пакета <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">fmt</code> для вывода данных (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">Print</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">Println</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">Printf</code>) и ввода данных (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">Scan</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">Scanln</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">Scanf</code>).
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужен ввод и вывод данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-green-400" />
          Зачем нужен ввод и вывод данных?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Взаимодействие с пользователем — ключевая часть большинства программ. Без ввода и вывода данных программы были бы "слепыми" и "немыми".
          </p>
          <p>
            Правильная работа с вводом/выводом важна для:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Пользовательского интерфейса</span> — отображение результатов работы программы.</li>
            <li><span className="font-medium">Отладки</span> — вывод промежуточных значений для поиска ошибок.</li>
            <li><span className="font-medium">Интерактивности</span> — получение данных от пользователя.</li>
            <li><span className="font-medium">Логирования</span> — запись информации о работе программы.</li>
          </ul>
        </div>
      </div>

      {/* Пакет fmt - основа ввода/вывода */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Пакет fmt - основа ввода/вывода
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Пакет <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">fmt</code> (от английского <em>format</em>) предоставляет функции для форматированного ввода и вывода данных.
          </p>
          <p>
            Для использования пакета его нужно импортировать:
          </p>
        </div>
        <div className="mt-4 bg-gray-900 p-4 rounded-lg">
          <pre className="text-green-300 text-sm">
            <code>{`package main

import "fmt"

func main() {
    // Здесь можно использовать функции fmt
}`}</code>
          </pre>
        </div>
      </div>

      {/* Функции вывода данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowRight className="w-5 h-5 text-orange-400" />
          Функции вывода данных
        </h2>
        
        {/* Print */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
            <Code className="w-4 h-4 text-orange-400" />
            <code className="bg-gray-700 px-2 py-1 rounded text-orange-300">fmt.Print()</code>
          </h3>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              Выводит данные <span className="font-medium">без добавления новой строки</span> в конце. Все значения выводятся "вплотную" друг к другу.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Код:</p>
              <pre className="text-orange-300 text-sm bg-gray-800 p-3 rounded">
                <code>{`fmt.Print("Hello")
fmt.Print("World")`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Результат:</p>
              <div className="text-gray-300 text-sm bg-gray-800 p-3 rounded">
                HelloWorld
              </div>
            </div>
          </div>
        </div>

        {/* Println */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
            <Code className="w-4 h-4 text-blue-400" />
            <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">fmt.Println()</code>
          </h3>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              Выводит данные и <span className="font-medium">добавляет новую строку</span> в конце. Это самая часто используемая функция вывода.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Код:</p>
              <pre className="text-blue-300 text-sm bg-gray-800 p-3 rounded">
                <code>{`fmt.Println("Hello")
fmt.Println("World")`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Результат:</p>
              <div className="text-gray-300 text-sm bg-gray-800 p-3 rounded">
                Hello<br />World
              </div>
            </div>
          </div>
        </div>

        {/* Printf */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
            <Code className="w-4 h-4 text-purple-400" />
            <code className="bg-gray-700 px-2 py-1 rounded text-purple-300">fmt.Printf()</code>
          </h3>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              Выводит данные с <span className="font-medium">форматированием</span>. Использует шаблоны (форматные строки) для точного контроля вывода.
            </p>
          </div>
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <pre className="text-purple-300 text-sm">
              <code>{`fmt.Printf("Привет, %s! Тебе %d лет.", "Анна", 25)`}</code>
            </pre>
            <div className="mt-2 text-gray-300 text-sm bg-gray-800 p-3 rounded">
              Привет, Анна! Тебе 25 лет.
            </div>
          </div>
        </div>
      </div>

      {/* Форматированный вывод */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-yellow-400" />
          Форматированный вывод - спецификаторы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Спецификаторы формата используются в <code className="bg-gray-700 px-1 rounded text-purple-300">fmt.Printf()</code> для управления тем, как данные будут отображаться.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* %v */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-green-400" />
              <code className="text-green-400 font-mono">%v</code>
              <span className="text-sm text-gray-400">(значение по умолчанию)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Код:</p>
                <pre className="text-green-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Printf("%v", 42)
fmt.Printf("%v", "привет")
fmt.Printf("%v", true)`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  42<br />привет<br />true
                </div>
              </div>
            </div>
          </div>

          {/* %T */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-blue-400" />
              <code className="text-blue-400 font-mono">%T</code>
              <span className="text-sm text-gray-400">(тип значения)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Код:</p>
                <pre className="text-blue-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Printf("%T", 42)
fmt.Printf("%T", "привет")`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  int<br />string
                </div>
              </div>
            </div>
          </div>

          {/* %d */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-orange-400" />
              <code className="text-orange-400 font-mono">%d</code>
              <span className="text-sm text-gray-400">(десятичное число)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Код:</p>
                <pre className="text-orange-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Printf("%d", 42)
fmt.Printf("Возраст: %d", 25)`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  42<br />Возраст: 25
                </div>
              </div>
            </div>
          </div>

          {/* %s */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-cyan-400" />
              <code className="text-cyan-400 font-mono">%s</code>
              <span className="text-sm text-gray-400">(строка)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Код:</p>
                <pre className="text-cyan-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Printf("%s", "привет")
fmt.Printf("Имя: %s", "Анна")`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  привет<br />Имя: Анна
                </div>
              </div>
            </div>
          </div>

          {/* %f */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-4 h-4 text-purple-400" />
              <code className="text-purple-400 font-mono">%f</code>
              <span className="text-sm text-gray-400">(число с плавающей точкой)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-400">Код:</p>
                <pre className="text-purple-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  <code>{`fmt.Printf("%f", 3.14159)
fmt.Printf("%.2f", 3.14159)`}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400">Результат:</p>
                <div className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  3.141590<br />3.14
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <h3 className="font-bold text-white mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Полезные советы по форматированию:
          </h3>
          <ul className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
            <li><span className="font-medium">Точность для чисел с плавающей точкой:</span> <code className="bg-gray-700 px-1 rounded">%.2f</code> — вывод с 2 знаками после запятой.</li>
            <li><span className="font-medium">Ширина поля:</span> <code className="bg-gray-700 px-1 rounded">%10s</code> — строка шириной 10 символов.</li>
            <li><span className="font-medium">Выравнивание:</span> <code className="bg-gray-700 px-1 rounded">%-10s</code> — выравнивание по левому краю.</li>
          </ul>
        </div>
      </div>

      {/* Функции ввода данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ArrowLeft className="w-5 h-5 text-cyan-400" />
          Функции ввода данных
        </h2>
        
        {/* Scan */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
            <Code className="w-4 h-4 text-cyan-400" />
            <code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">fmt.Scan()</code>
          </h3>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              Считывает данные <span className="font-medium">до первого пробела</span>. Используется для ввода одного значения.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Код:</p>
              <pre className="text-cyan-300 text-sm bg-gray-800 p-3 rounded">
                <code>{`var name string
fmt.Print("Введите имя: ")
fmt.Scan(&name)
fmt.Printf("Привет, %s!", name)`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Пример работы:</p>
              <div className="text-gray-300 text-sm bg-gray-800 p-3 rounded">
                Введите имя: Анна<br />Привет, Анна!
              </div>
              <div className="mt-2 text-yellow-400 text-xs">
                ⚠️ Если ввести "Анна Петрова", считается только "Анна"
              </div>
            </div>
          </div>
        </div>

        {/* Scanln */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
            <Code className="w-4 h-4 text-green-400" />
            <code className="bg-gray-700 px-2 py-1 rounded text-green-300">fmt.Scanln()</code>
          </h3>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              Считывает данные <span className="font-medium">до конца строки</span>. Позволяет вводить значения с пробелами.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Код:</p>
              <pre className="text-green-300 text-sm bg-gray-800 p-3 rounded">
                <code>{`var fullName string
fmt.Print("Введите полное имя: ")
fmt.Scanln(&fullName)
fmt.Printf("Здравствуйте, %s!", fullName)`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Пример работы:</p>
              <div className="text-gray-300 text-sm bg-gray-800 p-3 rounded">
                Введите полное имя: Анна Петрова<br />Здравствуйте, Анна Петрова!
              </div>
            </div>
          </div>
        </div>

        {/* Scanf */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
            <Code className="w-4 h-4 text-purple-400" />
            <code className="bg-gray-700 px-2 py-1 rounded text-purple-300">fmt.Scanf()</code>
          </h3>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              Считывает данные с <span className="font-medium">форматированием</span>. Позволяет вводить несколько значений по шаблону.
            </p>
          </div>
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <pre className="text-purple-300 text-sm">
              <code>{`var name string
var age int
fmt.Print("Введите имя и возраст: ")
fmt.Scanf("%s %d", &name, &age)
fmt.Printf("Имя: %s, Возраст: %d лет", name, age)`}</code>
            </pre>
            <div className="mt-2 text-gray-300 text-sm bg-gray-800 p-3 rounded">
              Введите имя и возраст: Анна 25<br />Имя: Анна, Возраст: 25 лет
            </div>
          </div>
        </div>
      </div>

      {/* Важные особенности ввода данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-red-400" />
          Важные особенности ввода данных
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
          <div className="p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
            <p className="text-red-300 text-sm flex items-start gap-2">
              <span className="font-medium">⚠️ Обязательный символ &:</span>
              <span>
                При использовании функций ввода (<code className="bg-gray-700 px-1 rounded">Scan</code>, <code className="bg-gray-700 px-1 rounded">Scanln</code>, <code className="bg-gray-700 px-1 rounded">Scanf</code>) перед переменными <span className="font-medium">обязательно</span> ставить символ <code className="bg-gray-700 px-1 rounded">&</code> (амперсанд).
              </span>
            </p>
          </div>
          
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm flex items-start gap-2">
              <span className="font-medium">💡 Пример правильного использования:</span>
              <span>
                <code className="bg-gray-700 px-1 rounded">var x int</code><br />
                <code className="bg-gray-700 px-1 rounded">fmt.Scan(&x)</code> — правильно<br />
                <code className="bg-gray-700 px-1 rounded">fmt.Scan(x)</code> — ошибка!
              </span>
            </p>
          </div>

          <div className="p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-yellow-300 text-sm">
              <span className="font-medium">📝 Типы данных при вводе:</span> Функции ввода автоматически преобразуют строку в указанный тип переменной. Если преобразование невозможно, переменная получает нулевое значение своего типа.
            </p>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-green-400" />
          Практический пример: Калькулятор возраста
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте создадим простую программу, которая запрашивает у пользователя имя и год рождения, а затем выводит приветствие с возрастом.
          </p>
        </div>
        <div className="mt-4 bg-gray-900 p-4 rounded-lg">
          <pre className="text-green-300 text-sm">
            <code>{`package main

import (
    "fmt"
)

func main() {
    var name string
    var birthYear int
    
    fmt.Print("Введите ваше имя: ")
    fmt.Scanln(&name)
    
    fmt.Print("Введите год рождения: ")
    fmt.Scanln(&birthYear)
    
    age := 2024 - birthYear
    
    fmt.Printf("Здравствуйте, %s! Вам %d лет.\\n", name, age)
}`}</code>
          </pre>
        </div>
        <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
          <p className="text-gray-300 text-sm">
            <span className="font-medium">Пример работы:</span><br />
            Введите ваше имя: Анна<br />
            Введите год рождения: 1990<br />
            Здравствуйте, Анна! Вам 34 лет.
          </p>
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
              Теперь вы знаете основные функции пакета <code className="bg-gray-700 px-1 rounded">fmt</code> для ввода и вывода данных в Go. Вы научились использовать <code className="bg-gray-700 px-1 rounded">Print</code>, <code className="bg-gray-700 px-1 rounded">Println</code>, <code className="bg-gray-700 px-1 rounded">Printf</code> для вывода и <code className="bg-gray-700 px-1 rounded">Scan</code>, <code className="bg-gray-700 px-1 rounded">Scanln</code>, <code className="bg-gray-700 px-1 rounded">Scanf</code> для ввода. Понимание форматных спецификаторов (<code className="bg-gray-700 px-1 rounded">%v</code>, <code className="bg-gray-700 px-1 rounded">%T</code>, <code className="bg-gray-700 px-1 rounded">%d</code>, <code className="bg-gray-700 px-1 rounded">%s</code>, <code className="bg-gray-700 px-1 rounded">%f</code>) поможет вам создавать более удобные и информативные программы. В следующих частях урока мы закрепим эти знания на практике.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;