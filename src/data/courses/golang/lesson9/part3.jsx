import React, { useState } from 'react';
import { Calculator, Check, X, Hash, CheckCircle, Award, RotateCcw, Code, HelpCircle } from 'lucide-react';

const Part3 = () => {
  // Практические задания по уроку
  const practicalTasks = [
    {
      id: 1,
      title: "Традиционный for — счёт от 1 до 10",
      description: "Научитесь использовать классический for с инициализацией, условием и шагом.",
      steps: [
        "Создайте цикл for, который считает от 1 до 10",
        "Выведите каждое число с помощью fmt.Println()",
        "Измените шаг: считайте от 1 до 20 с шагом 2 (1, 3, 5, ...)",
        "Попробуйте считать в обратном порядке: от 10 до 1"
      ],
      verification: "Проверьте, что числа выводятся в правильной последовательности",
      expectedOutput: "1, 2, 3, ..., 10 → затем 1, 3, 5, ..., 19 → затем 10, 9, 8, ..., 1",
      difficulty: "쉬운"
    },
    {
      id: 2,
      title: "For с условием — как while",
      description: "Освойте цикл for с одним условием — аналог while в других языках.",
      steps: [
        "Создайте переменную temperature = 35",
        "Цикл: пока temperature > 20, выводите 'Слишком жарко: X°C' и уменьшайте температуру на 1",
        "Когда цикл закончится — выведите 'Теперь комфортно! 😌'",
        "Проверьте с начальными значениями 25, 30, 15"
      ],
      verification: "При temperature=25 → выводится 5 строк, затем сообщение о комфорте",
      expectedOutput: "Слишком жарко: 25°C, ..., Слишком жарко: 21°C, Теперь комфортно!",
      difficulty: "쉬운"
    },
    {
      id: 3,
      title: "Бесконечный цикл + break",
      description: "Практика с бесконечным циклом и выходом по break.",
      steps: [
        "Создайте бесконечный цикл: for { }",
        "Внутри запросите у пользователя ввод команды (string)",
        "Если команда == \"стоп\" — выведите 'До свидания!' и break",
        "Иначе — выведите 'Вы сказали: [команда]'",
        "Проверьте: введите 'привет', 'как дела', 'стоп'"
      ],
      verification: "Программа должна работать, пока не введёте 'стоп'. После 'стоп' — завершается.",
      expectedOutput: "Вы сказали: привет → Вы сказали: как дела → До свидания!",
      difficulty: "중간"
    },
    {
      id: 4,
      title: "Continue — пропускаем числа",
      description: "Научитесь использовать continue для пропуска итераций.",
      steps: [
        "Создайте цикл for от 1 до 10",
        "Если число делится на 3 (i % 3 == 0) — пропустите его с помощью continue",
        "В остальных случаях — выведите число",
        "Проверьте: какие числа выводятся? (должны быть все, кроме 3, 6, 9)"
      ],
      verification: "Проверьте, что числа 3, 6, 9 не выводятся, остальные — выводятся",
      expectedOutput: "1, 2, 4, 5, 7, 8, 10",
      difficulty: "중간"
    },
    {
      id: 5,
      title: "Вложенные циклы — таблица умножения",
      description: "Освойте вложенные циклы на примере таблицы умножения.",
      steps: [
        "Внешний цикл: i от 1 до 5",
        "Внутренний цикл: j от 1 до 5",
        "Выведите: fmt.Printf(\"%d × %d = %d\\t\", i, j, i*j)",
        "После внутреннего цикла — fmt.Println() для перехода на новую строку",
        "Проверьте: получилась ли таблица 5x5?"
      ],
      verification: "Убедитесь, что таблица выведена аккуратно, построчно",
      expectedOutput: "1×1=1  1×2=2 ... 5×5=25",
      difficulty: "중간"
    },
    {
      id: 6,
      title: "Range для строк — разбираем слово по буквам",
      description: "Практика с range — перебираем символы строки и выводим их с индексами.",
      steps: [
        "Создайте строку word := \"GOLANG\"",
        "Используйте for index, char := range word",
        "Выведите: \"Буква [индекс]: [символ]\"",
        "Теперь сделайте то же самое, но без индекса: for _, char := range word",
        "Выведите только символы: \"[символ] \"",
        "Проверьте с другими словами: \"HELLO\", \"WORLD\""
      ],
      verification: "Проверьте, что выводятся все буквы с индексами, а потом — только буквы",
      expectedOutput: "Буква 0: G, Буква 1: O, ... → затем: G O L A N G",
      difficulty: "중간"
    },
    {
      id: 7,
      title: "Комбинируем break и continue",
      description: "Сложное задание: используйте break и continue в одном цикле.",
      steps: [
        "Создайте цикл for i := 1; i <= 20; i++",
        "Если i делится на 5 — выведите 'Пятёрка!' и continue (пропустите остальное)",
        "Если i == 15 — выведите 'Стоп на 15!' и break",
        "В остальных случаях — выведите само число i",
        "Проверьте: что выводится при i=5, 10, 15, 16?"
      ],
      verification: "При i=5 → 'Пятёрка!', при i=15 → 'Стоп на 15!' и цикл завершается",
      expectedOutput: "1,2,3,4,Пятёрка!,6,7,8,9,Пятёрка!,11,12,13,14,Стоп на 15!",
      difficulty: "어려운"
    },
    {
      id: 8,
      title: "Итоговый проект: Игра 'Числовой лабиринт'",
      description: "Создайте игру с использованием всех видов циклов, break, continue и range.",
      steps: [
        "Игрок вводит число от 1 до 100",
        "Программа генерирует случайное число secret",
        "Бесконечный цикл: пока игрок не угадает — запрашивать ввод",
        "Если введённое число == secret → поздравить и break",
        "Если число делится на 10 → вывести 'Подсказка: число круглое!' и continue (не сравнивать!)",
        "Если число < secret → '📈 Выше!'",
        "Если число > secret → '📉 Ниже!'",
        "Используйте range для вывода слова 'ПОБЕДА!' по буквам в конце",
        "Протестируйте все сценарии!"
      ],
      verification: "Игра должна корректно работать: пропускать круглые числа, давать подсказки, завершаться при угадывании",
      expectedOutput: "Ввод 20 → 'Подсказка...', Ввод 45 → '📈 Выше!', Ввод secret → 'П\nО\nБ\nЕ\nД\nА\n!'",
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Практические задания: Циклы в Go</h1>
            <p className="text-gray-300">
              Примените полученные знания на практике. Создайте программы с использованием <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">for</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">break</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">continue</code>, вложенных циклов и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">range</code>.
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
            <li>Создайте новый Go файл для каждого задания (например, task1.go, task2.go)</li>
            <li>Выполняйте задания последовательно, следуя указанным шагам</li>
            <li>После выполнения каждого задания нажмите чекбокс, чтобы отметить его как выполненное</li>
            <li>Используйте команды 'go run filename.go' для запуска программ</li>
            <li>Экспериментируйте — меняйте условия, шаги, добавляйте свои фишки!</li>
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