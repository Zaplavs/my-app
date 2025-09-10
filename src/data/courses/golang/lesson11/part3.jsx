import React, { useState } from 'react';
import { Calculator, Check, X, Hash, CheckCircle, Award, RotateCcw, Code, HelpCircle } from 'lucide-react';

const Part3 = () => {
  // Практические задания по теме урока "Массивы в Go"
  const practicalTasks = [
    {
      id: 1,
      title: "Объявление и инициализация массивов",
      description: "Освойте различные способы создания массивов в Go.",
      steps: [
        "Объявите массив из 5 целых чисел без инициализации (var scores [5]int)",
        "Выведите массив — убедитесь, что все элементы равны 0",
        "Создайте массив days с автоматическим размером: [...]string{\"Пн\", \"Вт\", \"Ср\", \"Чт\", \"Пт\"}",
        "Выведите длину массива с помощью len(days)",
        "Создайте массив с частичной инициализацией: [5]int{0: 100, 2: 200, 4: 300}",
        "Выведите результат — проверьте, что неинициализированные элементы равны 0"
      ],
      verification: "Проверьте, что все массивы создаются корректно и выводят ожидаемые значения",
      expectedOutput: "[0 0 0 0 0]\nДлина: 5\n[100 0 200 0 300]",
      difficulty: "쉬운"
    },
    {
      id: 2,
      title: "Индексация и изменение элементов",
      description: "Практика работы с индексами массива — чтение и запись значений.",
      steps: [
        "Создайте массив temperatures := [7]float64{22.5, 23.1, 24.0, 21.8, 25.2, 26.5, 23.9}",
        "Выведите температуру за первый и последний день недели",
        "Измените температуру за среду (индекс 2) на 27.5",
        "Увеличьте температуру за пятницу (индекс 4) на 1.0",
        "Попробуйте обратиться к temperatures[7] — убедитесь, что программа падает с ошибкой",
        "Исправьте код, добавив проверку границ перед обращением к индексу"
      ],
      verification: "Убедитесь, что изменения применяются корректно, а попытка доступа за пределы массива обрабатывается безопасно",
      expectedOutput: "Пн: 22.5, Вс: 23.9\nСр: 27.5, Пт: 26.2\nОшибка: индекс вне диапазона",
      difficulty: "쉬운"
    },
    {
      id: 3,
      title: "Перебор массива с помощью for и len()",
      description: "Научитесь безопасно перебирать массивы, используя len() для определения границ.",
      steps: [
        "Создайте массив grades := [5]int{85, 92, 78, 96, 88}",
        "Используйте цикл for с len(grades) для перебора всех элементов",
        "Выведите каждый элемент с его индексом: 'Оценка 1: 85'",
        "Вычислите сумму всех оценок в том же цикле",
        "Рассчитайте и выведите среднее значение",
        "Измените размер массива на 3 или 7 элементов — убедитесь, что код по-прежнему работает!"
      ],
      verification: "Проверьте, что цикл корректно обрабатывает массив любого размера, сумма и среднее рассчитываются правильно",
      expectedOutput: "Оценка 1: 85\nОценка 2: 92\n...\nСреднее: 87.8",
      difficulty: "중간"
    },
    {
      id: 4,
      title: "Передача массива в функцию",
      description: "Практика с передачей массивов в функции и понимание копирования по значению.",
      steps: [
        "Создайте функцию printArray(arr [5]int), которая выводит все элементы массива",
        "Создайте функцию modifyFirstElement(arr [5]int), которая изменяет первый элемент на 999",
        "В main() создайте массив numbers := [5]int{1, 2, 3, 4, 5}",
        "Вызовите printArray(numbers)",
        "Вызовите modifyFirstElement(numbers)",
        "Снова вызовите printArray(numbers) — убедитесь, что оригинал не изменился!",
        "Создайте функцию sumArray(arr [5]int) int, возвращающую сумму элементов"
      ],
      verification: "Убедитесь, что изменения внутри функции не влияют на оригинальный массив, а сумма вычисляется правильно",
      expectedOutput: "До: [1 2 3 4 5]\nПосле: [1 2 3 4 5] (не изменилось!)\nСумма: 15",
      difficulty: "중간"
    },
    {
      id: 5,
      title: "Поиск минимума и максимума в массиве",
      description: "Разработайте функции для поиска минимального и максимального значений в массиве.",
      steps: [
        "Создайте функцию findMinMax(arr [5]int) (int, int), возвращающую минимум и максимум",
        "Инициализируйте min и max первым элементом массива",
        "Пройдите по остальным элементам, обновляя min и max при необходимости",
        "В main() протестируйте функцию с разными массивами: {3, 7, 2, 9, 1}, {10, 10, 10}, {-5, -2, -8}",
        "Создайте функцию findMinMaxWithIndex(arr [5]int) (minValue, maxValue, minIndex, maxIndex int)",
        "Верните также индексы минимального и максимального элементов"
      ],
      verification: "Проверьте корректность работы для массивов с положительными, отрицательными и одинаковыми значениями",
      expectedOutput: "Мин: 1, Макс: 9, Индексы: 4, 3\nМин: -8, Макс: -2, Индексы: 2, 1",
      difficulty: "중간"
    },
    {
      id: 6,
      title: "Работа с массивами разных размеров",
      description: "Исследуйте ограничение: массивы разных размеров — разные типы.",
      steps: [
        "Создайте массив small := [3]int{1, 2, 3} и large := [5]int{1, 2, 3, 4, 5}",
        "Попробуйте присвоить small = large — убедитесь, что компилятор выдаёт ошибку",
        "Создайте функцию process3(arr [3]int) и попробуйте передать в неё large — ошибка!",
        "Создайте функцию process5(arr [5]int) и передайте large — работает!",
        "Создайте универсальную функцию, принимающую массив любого размера? (Подсказка: пока нельзя — это ограничение массивов!)",
        "Выведите сообщение: 'Массивы разных размеров — разные типы!'"
      ],
      verification: "Убедитесь, что компилятор не позволяет смешивать массивы разных размеров",
      expectedOutput: "Ошибка компиляции при попытке присвоения или передачи массивов разных размеров",
      difficulty: "중간"
    },
    {
      id: 7,
      title: "Массив массивов (двумерный массив)",
      description: "Освойте создание и работу с многомерными массивами.",
      steps: [
        "Объявите двумерный массив matrix := [3][3]int{}",
        "Заполните его в цикле: matrix[i][j] = i*3 + j + 1 (получится матрица 1-9)",
        "Выведите матрицу построчно, разделяя элементы пробелами",
        "Создайте функцию printMatrix(m [3][3]int), которая выводит матрицу в красивом формате",
        "Создайте функцию sumMatrix(m [3][3]int) int, возвращающую сумму всех элементов",
        "Протестируйте с другой матрицей: {{1,0,1}, {0,1,0}, {1,0,1}}"
      ],
      verification: "Проверьте правильность заполнения, форматированного вывода и вычисления суммы",
      expectedOutput: "1 2 3\n4 5 6\n7 8 9\nСумма: 45",
      difficulty: "어려운"
    },
    {
      id: 8,
      title: "Итоговый проект: Система учёта оценок",
      description: "Создайте комплексную программу, использующую все изученные аспекты массивов.",
      steps: [
        "Создайте массив studentGrades := [5]float64 для хранения оценок студента",
        "Реализуйте функцию inputGrades() [5]float64, запрашивающую у пользователя 5 оценок",
        "Реализуйте функцию calculateStats(grades [5]float64) (average, max, min float64)",
        "Реализуйте функцию printReport(grades [5]float64, avg, max, min float64), выводящую красивый отчёт",
        "Добавьте функцию getLetterGrade(average float64) string, возвращающую буквенную оценку (A, B, C, D, F)",
        "В main() соберите всё вместе: ввод → расчёт → вывод отчёта",
        "Протестируйте с разными наборами оценок"
      ],
      verification: "Убедитесь, что программа корректно принимает ввод, вычисляет статистику и выводит информативный отчёт",
      expectedOutput: "Оценки: 4.5, 3.8, 5.0, 4.2, 4.7\nСреднее: 4.44 (B)\nМаксимум: 5.0\nМинимум: 3.8",
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Практические задания: Массивы в Go</h1>
            <p className="text-gray-300">
              Примените полученные знания на практике. Создайте программы с использованием <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">объявления массивов</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">индексации</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">len()</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">передачи в функции</code> и изучите <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">ограничения массивов</code>.
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
            <li>Создайте новый Go файл для каждого задания (например, arrays_task1.go)</li>
            <li>Выполняйте задания последовательно, следуя указанным шагам</li>
            <li>После выполнения каждого задания нажмите чекбокс, чтобы отметить его как выполненное</li>
            <li>Используйте команды 'go run filename.go' для запуска программ</li>
            <li>Экспериментируйте — меняйте размеры массивов, типы данных, добавляйте свои функции!</li>
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