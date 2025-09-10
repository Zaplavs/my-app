import React, { useState } from 'react';
import { Calculator, Check, X, Hash, CheckCircle, Award, RotateCcw, Code, HelpCircle } from 'lucide-react';

const Part3 = () => {
  // Практические задания по теме урока "Функции в Go"
  const practicalTasks = [
    {
      id: 1,
      title: "Простая функция без параметров и возвращаемых значений",
      description: "Создайте первую функцию, которая просто выводит приветствие.",
      steps: [
        "Объявите функцию sayHello() без параметров и без возвращаемых значений",
        "Внутри функции выведите 'Привет, мир! 👋'",
        "Вызовите функцию в main()",
        "Создайте вторую функцию sayGoodbye() и вызовите её после sayHello()"
      ],
      verification: "Проверьте, что обе функции выводят свои сообщения в консоль",
      expectedOutput: "Привет, мир! 👋\nДо свидания! 👋",
      difficulty: "쉬운"
    },
    {
      id: 2,
      title: "Функция с параметрами — персонализированное приветствие",
      description: "Научитесь передавать параметры в функцию для гибкого поведения.",
      steps: [
        "Создайте функцию greet(name string)",
        "Внутри функции выведите 'Привет, [name]! 😊'",
        "Вызовите функцию с разными именами: 'Анна', 'Иван', 'Go-программист'",
        "Создайте функцию greetWithAge(name string, age int) и выведите возраст вместе с именем",
        "Вызовите её с разными значениями"
      ],
      verification: "Проверьте, что функции корректно принимают параметры и выводят персонализированные сообщения",
      expectedOutput: "Привет, Анна! 😊\nПривет, Иван, тебе 25 лет! 😊",
      difficulty: "쉬운"
    },
    {
      id: 3,
      title: "Функция с возвращаемым значением — калькулятор",
      description: "Освойте возврат значений из функции на примере математических операций.",
      steps: [
        "Создайте функцию add(a, b int) int, возвращающую сумму",
        "Создайте функции sub, mul, div для вычитания, умножения и деления",
        "Вызовите все функции с разными числами и выведите результаты",
        "Создайте функцию isEven(n int) bool, возвращающую true, если число чётное",
        "Проверьте её с числами 4, 7, 10"
      ],
      verification: "Убедитесь, что функции возвращают правильные значения и результаты корректно выводятся",
      expectedOutput: "5 + 3 = 8\n10 - 4 = 6\nЧётное: true\nЧётное: false",
      difficulty: "중간"
    },
    {
      id: 4,
      title: "Множественные возвращаемые значения — деление с остатком",
      description: "Практика с функциями, возвращающими несколько значений одновременно.",
      steps: [
        "Создайте функцию divideWithRemainder(a, b int) (int, int)",
        "Первое возвращаемое значение — частное (a / b), второе — остаток (a % b)",
        "Вызовите функцию с числами 17 и 5, сохраните результаты в quotient и remainder",
        "Выведите: '17 ÷ 5 = 3 с остатком 2'",
        "Создайте функцию minMax(a, b int) (int, int), возвращающую минимум и максимум",
        "Проверьте с парами чисел: (10, 5), (-3, 7)"
      ],
      verification: "Проверьте, что оба значения возвращаются корректно и выводятся в правильном порядке",
      expectedOutput: "17 ÷ 5 = 3 с остатком 2\nМин: 5, Макс: 10",
      difficulty: "중간"
    },
    {
      id: 5,
      title: "Именованные возвращаемые значения — статистика",
      description: "Используйте именованные возвращаемые значения для лучшей читаемости кода.",
      steps: [
        "Создайте функцию stats(a, b, c int) (sum, avg float64)",
        "Вычислите сумму и среднее арифметическое трёх чисел",
        "Используйте «голый return» в конце функции",
        "Вызовите функцию с числами 10, 20, 30 и выведите результаты",
        "Создайте функцию describeNumber(n int) (isPositive, isEven, isZero bool)",
        "Реализуйте логику и верните все три флага одним return"
      ],
      verification: "Проверьте, что именованные переменные корректно вычисляются и возвращаются",
      expectedOutput: "Сумма: 60.0, Среднее: 20.0\nЧисло 5: положительное=true, чётное=false, ноль=false",
      difficulty: "중간"
    },
    {
      id: 6,
      title: "Вложенные функции — замыкания и счётчики",
      description: "Освойте вложенные функции и замыкания на примере генератора счётчиков.",
      steps: [
        "Создайте функцию makeCounter() func() int",
        "Внутри объявите переменную count := 0",
        "Верните анонимную функцию, которая увеличивает count на 1 и возвращает его",
        "В main() создайте два счётчика: counter1 и counter2",
        "Вызовите каждый счётчик несколько раз и выведите результаты",
        "Убедитесь, что счётчики работают независимо"
      ],
      verification: "Проверьте, что каждый счётчик сохраняет своё состояние между вызовами",
      expectedOutput: "Счётчик1: 1, 2, 3\nСчётчик2: 1, 2",
      difficulty: "어려운"
    },
    {
      id: 7,
      title: "Комбинируем всё — функция-калькулятор с обработкой ошибок",
      description: "Сложное задание: создайте функцию, использующую параметры, множественные возвращаемые значения и обработку ошибок.",
      steps: [
        "Создайте функцию calculate(a, b float64, op string) (float64, error)",
        "Поддерживайте операции: '+', '-', '*', '/'",
        "При делении на 0 — возвращайте ошибку с сообщением 'деление на ноль'",
        "При неизвестной операции — возвращайте ошибку 'неизвестная операция'",
        "В main() протестируйте все операции, включая ошибочные случаи",
        "Используйте if err != nil для обработки ошибок"
      ],
      verification: "Проверьте корректность вычислений и обработку всех типов ошибок",
      expectedOutput: "10 + 5 = 15.0\n10 / 0 = ошибка: деление на ноль\n10 % 5 = ошибка: неизвестная операция",
      difficulty: "어려운"
    },
    {
      id: 8,
      title: "Итоговый проект: Конвертер валют с вложенными функциями",
      description: "Создайте полноценное приложение с использованием всех изученных возможностей функций.",
      steps: [
        "Создайте функцию makeCurrencyConverter(rate float64) func(amount float64) float64",
        "Внутри верните функцию, умножающую amount на rate",
        "Создайте конвертеры: usdToEur (курс 0.85), eurToUsd (курс 1.18)",
        "Создайте функцию printConversion(amount float64, from, to string, converter func(float64) float64)",
        "Внутри printConversion вызовите converter и выведите форматированную строку",
        "Протестируйте конвертацию 100 USD в EUR и 50 EUR в USD",
        "Добавьте функцию compareConversions(amount float64), использующую оба конвертера и выводящую сравнение"
      ],
      verification: "Проверьте, что конвертация работает корректно, вложенные функции сохраняют контекст, вывод информативен",
      expectedOutput: "100.00 USD = 85.00 EUR\n50.00 EUR = 59.00 USD\nСравнение: 100 USD → 85 EUR → 100.30 USD (почти обратно!)",
      difficulty: "어려운"
    }
  ];

  // Состояния для отслеживания выполнения заданий
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [showResults, setShowResults] = useState({});

  // Переключение статуса выполнения задания
  const toggleTaskCompletion = (taskId) => {
    const newCompletedTasks = new Set(completedTasks);
    if (newCompletedTasks.has(taskId)) {
      newCompletedTasks.delete(taskId);
    } else {
      newCompletedTasks.add(taskId);
    }
    setCompletedTasks(newCompletedTasks);
  };

  // Сохранение результата выполнения задания
  const saveResult = (taskId, result) => {
    setShowResults(prev => ({
      ...prev,
      [taskId]: result
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <RotateCcw className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Практические задания: Функции в Go</h1>
            <p className="text-gray-300">
              Примените полученные знания на практике. Создайте программы с использованием <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">func</code>, параметров, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">возвращаемых значений</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">множественных</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">именованных возвращаемых значений</code>, а также <code className="bg-gray-700 px-1.5 py-0.5 rounded text-pink-300">вложенных функций</code>.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Отмечайте выполненные задания для отслеживания прогресса.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
          <h3 className="font-bold text-white mb-2 flex items-center gap-2">
            <Code className="w-5 h-5 text-green-400" />
            Инструкция по выполнению:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Создайте новый Go файл для каждого задания (например, functions_task1.go)</li>
            <li>Выполняйте задания последовательно, следуя указанным шагам</li>
            <li>После выполнения каждого задания нажмите чекбокс, чтобы отметить его как выполненное</li>
            <li>Используйте команды 'go run filename.go' для запуска программ</li>
            <li>Экспериментируйте — создавайте свои функции, комбинируйте подходы!</li>
          </ul>
        </div>

        {practicalTasks.map((task) => (
          <div 
            key={task.id} 
            className={`mb-6 last:mb-0 p-5 rounded-xl border ${
              completedTasks.has(task.id) 
                ? 'border-green-700/50 bg-green-900/10' 
                : 'border-gray-700/50 bg-gray-900/50'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  task.difficulty === '쉬운' 
                    ? 'bg-green-500/20 text-green-400' 
                    : task.difficulty === '중간' 
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                }`}>
                  {task.difficulty === '쉬운' && <Check className="w-5 h-5" />}
                  {task.difficulty === '중간' && <Hash className="w-5 h-5" />}
                  {task.difficulty === '어려운' && <X className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{task.title}</h3>
                  <p className="text-gray-400 text-sm">{task.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleTaskCompletion(task.id)}
                className={`p-2 rounded-lg transition-colors ${
                  completedTasks.has(task.id)
                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
              >
                <CheckCircle className={`w-6 h-6 ${completedTasks.has(task.id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">Шаги выполнения:</h4>
                <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                  {task.steps.map((step, index) => (
                    <li key={index} className="pl-2">{step}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  Проверка выполнения:
                </h4>
                <p className="text-gray-300 text-sm mb-3">{task.verification}</p>
                <div className="text-gray-400 text-xs">
                  <span className="font-medium">Ожидаемый результат:</span> {task.expectedOutput}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-700">
                <div className="text-sm">
                  <span className={`px-2 py-1 rounded ${
                    task.difficulty === '쉬운' 
                      ? 'bg-green-900/30 text-green-300' 
                      : task.difficulty === '중간' 
                        ? 'bg-yellow-900/30 text-yellow-300'
                        : 'bg-red-900/30 text-red-300'
                  }`}>
                    {task.difficulty === '쉬운' && '쉬운'}
                    {task.difficulty === '중간' && '중간'}
                    {task.difficulty === '어려운' && '어려운'}
                  </span>
                </div>
                <div className="text-sm text-gray-400">
                  Задание {task.id} из {practicalTasks.length}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Статистика выполнения */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              Прогресс выполнения
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${(completedTasks.size / practicalTasks.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>Выполнено: {completedTasks.size}</span>
                  <span>Всего: {practicalTasks.length}</span>
                </div>
              </div>
              <div className={`ml-4 px-3 py-1 rounded-lg font-bold ${
                completedTasks.size === practicalTasks.length
                  ? 'bg-green-900/30 text-green-300'
                  : 'bg-gray-700 text-gray-300'
              }`}>
                {Math.round((completedTasks.size / practicalTasks.length) * 100)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;