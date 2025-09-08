import React, { useState } from 'react';
import { Calculator, Check, X, Hash, CheckCircle, Award, Code, HelpCircle } from 'lucide-react';

const Part3 = () => {
  // Практические задания по уроку
  const practicalTasks = [
    {
      id: 1,
      title: "Простое условие if",
      description: "Научитесь писать базовые условия без else.",
      steps: [
        "Создайте переменную age с любым числом",
        "Напишите условие if, которое проверяет: age >= 18",
        "Внутри if выведите сообщение: \"Доступ разрешён\"",
        "Запустите программу с разными значениями age"
      ],
      verification: "Проверьте, что сообщение выводится только при age >= 18",
      expectedOutput: "При age=20 → выводится сообщение. При age=15 → ничего не выводится",
      difficulty: "쉬운"
    },
    {
      id: 2,
      title: "if + else — два варианта",
      description: "Научитесь использовать else для альтернативного сценария.",
      steps: [
        "Создайте переменную temperature (температура)",
        "Если температура выше 25 — выведите \"Жарко!\"",
        "Иначе — выведите \"Прохладно\"",
        "Проверьте работу с разными значениями: 30, 20, 25"
      ],
      verification: "Проверьте, что при 25 и ниже выводится \"Прохладно\", при 26 и выше — \"Жарко!\"",
      expectedOutput: "temperature=30 → \"Жарко!\"; temperature=20 → \"Прохладно\"",
      difficulty: "쉬운"
    },
    {
      id: 3,
      title: "else if — множественный выбор",
      description: "Освойте цепочку условий с else if.",
      steps: [
        "Создайте переменную score (оценка от 0 до 100)",
        "Если score >= 90 → выведите \"Отлично\"",
        "Иначе если score >= 75 → выведите \"Хорошо\"",
        "Иначе если score >= 50 → выведите \"Удовлетворительно\"",
        "Иначе → выведите \"Неудовлетворительно\"",
        "Проверьте со значениями: 95, 80, 60, 40"
      ],
      verification: "Убедитесь, что работает только первое подходящее условие",
      expectedOutput: "95 → Отлично, 80 → Хорошо, 60 → Удовлетворительно, 40 → Неудовлетворительно",
      difficulty: "중간"
    },
    {
      id: 4,
      title: "Инициализация переменной в условии — фишка Go!",
      description: "Практика с объявлением переменной прямо в if.",
      steps: [
        "Используйте синтаксис: if x := значение; условие { ... }",
        "Объявите случайное число: if num := rand.Intn(10); num > 5 { ... }",
        "В блоке if выведите: \"Число num больше 5\"",
        "В блоке else выведите: \"Число num не больше 5\"",
        "Попробуйте использовать num после if — убедитесь, что это невозможно"
      ],
      verification: "Переменная num должна быть доступна в if и else, но не снаружи",
      expectedOutput: "Программа компилируется и работает. Попытка использовать num снаружи — ошибка компиляции",
      difficulty: "중간"
    },
    {
      id: 5,
      title: "Логические операторы в условиях (&&, ||, !)",
      description: "Комбинируйте условия с логическими операторами.",
      steps: [
        "Создайте переменные: age, hasTicket, isVIP",
        "Допуск на концерт: age >= 16 И hasTicket == true",
        "Или: isVIP == true (даже без билета и возраста)",
        "Напишите условие: if (age >= 16 && hasTicket) || isVIP { ... }",
        "Проверьте все комбинации: (18, true, false), (15, false, true), (15, false, false)"
      ],
      verification: "Правильно ли программа определяет допуск во всех случаях?",
      expectedOutput: "(18,true,false) → допуск; (15,false,true) → допуск; (15,false,false) → отказ",
      difficulty: "중간"
    },
    {
      id: 6,
      title: "Вложенные условия",
      description: "Освойте if внутри if — вложенную логику.",
      steps: [
        "Создайте переменные: isLoggedIn, hasPermission, isAdmin",
        "Сначала проверьте: if isLoggedIn { ... }",
        "Внутри: if hasPermission { ... }",
        "Внутри второго if: if isAdmin { выведите \"Полный доступ\" } else { выведите \"Ограниченный доступ\" }",
        "Если не hasPermission — выведите \"Нет прав\"",
        "Если не isLoggedIn — выведите \"Не авторизован\"",
        "Протестируйте все комбинации"
      ],
      verification: "Проверьте, что сообщения выводятся корректно в зависимости от всех условий",
      expectedOutput: "isLoggedIn=true, hasPermission=true, isAdmin=false → \"Ограниченный доступ\"",
      difficulty: "어려운"
    },
    {
      id: 7,
      title: "Области видимости в условиях",
      description: "Проверьте, где доступны переменные, объявленные в if/else.",
      steps: [
        "Объявите переменную x := 10 до if",
        "Внутри if y := 20; x + y > 25 { ... } используйте y",
        "Попробуйте вывести y после закрывающей скобки if — должно быть невозможно",
        "Попробуйте вывести x — должно работать",
        "Объясните, почему так происходит"
      ],
      verification: "Программа должна компилироваться, если y используется только внутри if. При попытке использовать y снаружи — ошибка.",
      expectedOutput: "Компилятор выдаёт ошибку: undefined: y — если попытаться использовать y вне блока",
      difficulty: "중간"
    },
    {
      id: 8,
      title: "Итоговый проект: Диагностика системы",
      description: "Создайте программу, которая анализирует состояние системы по нескольким параметрам.",
      steps: [
        "Создайте переменные: cpuLoad (0-100), memoryFree (в MB), diskSpace (в GB), isOnline (bool)",
        "Если система не онлайн (isOnline == false) → \"Система недоступна\"",
        "Иначе, если cpuLoad > 90 ИЛИ memoryFree < 100 ИЛИ diskSpace < 5 → \"Критическая нагрузка!\"",
        "Иначе, если cpuLoad > 70 ИЛИ memoryFree < 500 → \"Высокая нагрузка\"",
        "Иначе → \"Система работает нормально\"",
        "Протестируйте все сценарии"
      ],
      verification: "Программа должна корректно диагностировать состояние по комбинации условий",
      expectedOutput: "cpuLoad=95, memoryFree=200, diskSpace=10, isOnline=true → \"Критическая нагрузка!\"",
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
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Практические задания: Условные операторы if/else в Go</h1>
            <p className="text-gray-300">
              Примените полученные знания на практике. Выполните задания по работе с условными операторами в Go.
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
            <li>Создайте новый Go файл для каждого задания (например, task1.go)</li>
            <li>Выполняйте задания последовательно, следуя указанным шагам</li>
            <li>После выполнения каждого задания нажмите чекбокс, чтобы отметить его как выполненное</li>
            <li>Используйте команды 'go run filename.go' для запуска программ</li>
            <li>Обращайте внимание на синтаксис Go: нет скобок вокруг условия, обязательны фигурные скобки</li>
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