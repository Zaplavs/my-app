// src/data/courses/go/lesson6/part3.jsx
import React, { useState } from 'react';
import { Calculator, Check, X, Hash, CheckCircle, Award } from 'lucide-react';

const Part3 = () => {
  // Практические задания по уроку
  const practicalTasks = [
    {
      id: 1,
      title: "Работа с булевым типом данных",
      description: "Создайте и используйте переменные типа bool в различных ситуациях.",
      steps: [
        "Создайте несколько переменных типа bool с разными значениями (true и false)",
        "Выведите их значения с помощью fmt.Println()",
        "Создайте переменную bool без начального значения и выведите её",
        "Попробуйте присвоить новые значения существующим булевым переменным"
      ],
      verification: "Проверьте, что переменные типа bool работают правильно и имеют ожидаемые значения",
      expectedOutput: "Переменные типа bool создаются и выводятся корректно",
      difficulty: "쉬운"
    },
    {
      id: 2,
      title: "Операторы сравнения",
      description: "Попрактикуйтесь в использовании всех операторов сравнения.",
      steps: [
        "Создайте переменные с числами и строками",
        "Используйте каждый оператор сравнения (==, !=, <, >, <=, >=) с этими переменными",
        "Выведите результаты всех сравнений",
        "Попробуйте сравнения с разными типами данных"
      ],
      verification: "Убедитесь, что все операторы сравнения работают правильно",
      expectedOutput: "Все операторы сравнения выдают правильные булевы результаты",
      difficulty: "쉬운"
    },
    {
      id: 3,
      title: "Логический оператор И (&&)",
      description: "Изучите работу логического оператора И в различных комбинациях.",
      steps: [
        "Создайте несколько булевых переменных",
        "Составьте выражения с оператором && в разных комбинациях",
        "Проверьте все возможные комбинации (true&&true, true&&false, false&&true, false&&false)",
        "Выведите результаты и сравните с таблицей истинности"
      ],
      verification: "Результаты должны соответствовать таблице истинности для оператора И",
      expectedOutput: "Оператор && работает согласно таблице истинности",
      difficulty: "쉬운"
    },
    {
      id: 4,
      title: "Логические операторы ИЛИ (||) и НЕ (!)",
      description: "Практикуйтесь с операторами ИЛИ и НЕ.",
      steps: [
        "Создайте выражения с оператором || в разных комбинациях",
        "Используйте оператор ! для инвертирования булевых значений",
        "Создайте комбинации операторов (например, !(a || b))",
        "Выведите и проверьте все результаты"
      ],
      verification: "Проверьте правильность работы операторов по таблицам истинности",
      expectedOutput: "Операторы || и ! работают согласно таблицам истинности",
      difficulty: "중간"
    },
    {
      id: 5,
      title: "Приоритет логических операций",
      description: "Изучите и протестируйте приоритет выполнения логических операций.",
      steps: [
        "Создайте сложные выражения без скобок, используя разные операторы",
        "Создайте те же выражения со скобками",
        "Сравните результаты и объясните разницу",
        "Используйте fmt.Printf() для вывода промежуточных результатов"
      ],
      verification: "Убедитесь, что понимаете порядок выполнения операций",
      expectedOutput: "Правильное понимание приоритета логических операций",
      difficulty: "중간"
    },
    {
      id: 6,
      title: "Практическая программа проверки условий",
      description: "Создайте программу, которая использует все изученные логические операции.",
      steps: [
        "Создайте программу для проверки допуска к экзамену",
        "Запросите у пользователя возраст и наличие пропуска",
        "Используйте операторы сравнения и логические операторы для проверки условий",
        "Выведите соответствующее сообщение о допуске или отказе",
        "Добавьте проверку дополнительных условий (например, ИЛИ преподаватель разрешил)"
      ],
      verification: "Программа должна корректно работать со всеми логическими операциями",
      expectedOutput: "Работающая программа с комплексной проверкой условий",
      difficulty: "중간"
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
            <Calculator className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Практические задания: Логические операции и сравнения</h1>
            <p className="text-gray-300">
              Примените полученные знания на практике. Выполните задания по работе с логическими операциями и сравнениями в Go.
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
            <Calculator className="w-5 h-5 text-green-400" />
            Инструкция по выполнению:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Создайте новый Go файл для каждого задания (например, task1.go)</li>
            <li>Выполняйте задания последовательно, следуя указанным шагам</li>
            <li>После выполнения каждого задания нажмите чекбокс, чтобы отметить его как выполненное</li>
            <li>Используйте команды 'go run filename.go' для запуска программ</li>
            <li>Обращайте внимание на типы данных при выполнении операций сравнения</li>
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
                  <Calculator className="w-4 h-4 text-purple-400" />
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