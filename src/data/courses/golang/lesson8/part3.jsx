import React, { useState } from 'react';
import { Calculator, Check, X, Hash, CheckCircle, Award, Code, HelpCircle, ArrowRight } from 'lucide-react';

const Part3 = () => {
  // Практические задания по уроку
  const practicalTasks = [
    {
      id: 1,
      title: "Простой switch с числами",
      description: "Научитесь использовать базовый switch для выбора одного из вариантов.",
      steps: [
        "Создайте переменную day (день недели от 1 до 7)",
        "Используйте switch, чтобы вывести название дня: 1 → \"Понедельник\", 2 → \"Вторник\" и т.д.",
        "Добавьте default для случая, если число не от 1 до 7",
        "Проверьте работу с числами 3, 7, 0, 10"
      ],
      verification: "Проверьте, что при вводе 3 выводится \"Среда\", а при 0 — сообщение из default",
      expectedOutput: "day=3 → \"Среда\"; day=0 → \"Неверный день недели!\"",
      difficulty: "쉬운"
    },
    {
      id: 2,
      title: "Switch со строками",
      description: "Освойте switch с текстовыми значениями — например, командами или именами.",
      steps: [
        "Создайте переменную command (\"start\", \"stop\", \"pause\", \"restart\")",
        "Используйте switch для вывода действия: \"start\" → \"Запускаем систему...\"",
        "Добавьте default: \"Неизвестная команда\"",
        "Проверьте все варианты + несуществующую команду (например, \"jump\")"
      ],
      verification: "Проверьте, что каждая команда выводит правильное сообщение, а неизвестная — попадает в default",
      expectedOutput: "command=\"pause\" → \"Ставим на паузу...\"; command=\"jump\" → \"Неизвестная команда\"",
      difficulty: "쉬운"
    },
    {
      id: 3,
      title: "Множественные значения в одном case",
      description: "Научитесь группировать значения в одном case через запятую.",
      steps: [
        "Создайте переменную grade (оценка: A, B, C, D, F)",
        "Используйте switch, чтобы сгруппировать оценки: A, B → \"Отлично/Хорошо\"",
        "C, D → \"Удовлетворительно/Плохо\"",
        "F → \"Не сдано\"",
        "Добавьте default на случай ошибки",
        "Проверьте с A, C, F, Z"
      ],
      verification: "Проверьте, что A и B выводят одно сообщение, C и D — другое",
      expectedOutput: "grade=\"B\" → \"Отлично/Хорошо\"; grade=\"Z\" → \"Оценка не распознана\"",
      difficulty: "중간"
    },
    {
      id: 4,
      title: "Fallthrough — проваливаемся в следующий case!",
      description: "Практика с fallthrough — когда нужно выполнить несколько блоков подряд.",
      steps: [
        "Создайте переменную level (уровень доступа: 1, 2, 3)",
        "Если level = 1 → вывести \"Доступ к базовому контенту\"",
        "Добавьте fallthrough",
        "Если level = 2 → вывести \"Доступ к премиум контенту\"",
        "Добавьте fallthrough",
        "Если level = 3 → вывести \"Доступ к админ-панели\"",
        "Проверьте с level = 2 → должно вывести 2 сообщения!",
        "Проверьте с level = 1 → должно вывести все 3 сообщения!"
      ],
      verification: "Проверьте, что при level=2 выводится и базовый, и премиум контент (из-за fallthrough)",
      expectedOutput: "level=2 → выводит 2 строки; level=1 → выводит 3 строки",
      difficulty: "중간"
    },
    {
      id: 5,
      title: "Switch без выражения — замена if/else!",
      description: "Освойте мощный синтаксис switch без выражения — для сложных условий.",
      steps: [
        "Создайте переменную age",
        "Используйте switch без выражения: switch {",
        "case age < 13: → \"Ребёнок\"",
        "case age < 20: → \"Подросток\"",
        "case age < 65: → \"Взрослый\"",
        "default: → \"Пенсионер\"",
        "Проверьте с возрастами: 8, 16, 30, 70"
      ],
      verification: "Сравните с цепочкой if/else — убедитесь, что результат идентичен",
      expectedOutput: "age=16 → \"Подросток\"; age=70 → \"Пенсионер\"",
      difficulty: "중간"
    },
    {
      id: 6,
      title: "Default в середине — можно ли?",
      description: "Проверьте, что default может быть в любом месте — даже не в конце!",
      steps: [
        "Создайте переменную x",
        "Напишите switch, где default находится ПЕРЕД всеми case",
        "Добавьте case 10, case 20",
        "Проверьте: если x=10 — выполнится ли case 10, хотя default идёт раньше?",
        "Проверьте: если x=99 — выполнится ли default?"
      ],
      verification: "Убедитесь, что case 10 работает, даже если default написан первым",
      expectedOutput: "x=10 → выводит сообщение из case 10; x=99 → выводит сообщение из default",
      difficulty: "중간"
    },
    {
      id: 7,
      title: "Сравнение switch и if/else — что лучше?",
      description: "Перепишите if/else на switch и наоборот — почувствуйте разницу.",
      steps: [
        "Возьмите любой пример из предыдущих заданий (например, с оценками или возрастом)",
        "Сначала реализуйте его через if/else if/else",
        "Затем перепишите ТОТ ЖЕ самый пример через switch",
        "Сравните: какой код короче? Читабельнее? Легче изменить?",
        "Напишите в комментарии, какой вариант вам понравился больше и почему"
      ],
      verification: "Оба варианта должны работать одинаково. Оцените читаемость и простоту.",
      expectedOutput: "Два работающих варианта одной программы — с if/else и с switch",
      difficulty: "중간"
    },
    {
      id: 8,
      title: "Итоговый проект: Игра 'Волшебный автомат желаний'",
      description: "Создайте интерактивную игру, где switch управляет целой системой выбора!",
      steps: [
        "Создайте переменную wish (желание: \"icecream\", \"toy\", \"game\", \"money\", \"secret\")",
        "Используйте switch для обработки каждого желания:",
        "→ \"icecream\" → \"🍦 Ваше мороженое готово!\"",
        "→ \"toy\" → \"🧸 Получите игрушку!\"",
        "→ \"game\" → \"🎮 Открываем игру...\"",
        "→ \"money\" → используйте fallthrough → \"💰 Получите монетку!\" → затем \"🤑 Хотите ещё?\"",
        "→ \"secret\" → используйте switch без выражения → проверьте дополнительное условие (например, если secretCode == 777)",
        "→ default → \"✨ Желание не найдено. Попробуйте другое!\"",
        "Добавьте ввод от пользователя через fmt.Scanln()",
        "Протестируйте все варианты!"
      ],
      verification: "Игра должна корректно обрабатывать все желания, включая secret с дополнительной проверкой и money с fallthrough",
      expectedOutput: "wish=\"money\" → выводит 2 строки; wish=\"secret\" + secretCode=777 → \"🌟 Секретное желание исполнено!\"",
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
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Практические задания: Оператор switch в Go</h1>
            <p className="text-gray-300">
              Примените полученные знания на практике. Создайте программы с использованием <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">switch</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">fallthrough</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">default</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">switch без выражения</code>.
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
            <li>Экспериментируйте — меняйте значения, добавляйте новые case, пробуйте ставить default в разные места!</li>
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