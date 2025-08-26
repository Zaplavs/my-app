// src/data/courses/go/lesson5/part3.jsx
import React, { useState } from 'react';
import { Calculator, Divide, Percent, Hash, CheckCircle, Award } from 'lucide-react';

const Part3 = () => {
  // Практические задания по уроку
  const practicalTasks = [
    {
      id: 1,
      title: "Базовые арифметические операции",
      description: "Создайте программу, демонстрирующую все основные арифметические операции.",
      steps: [
        "Создайте две переменные типа int с любыми значениями",
        "Выполните сложение, вычитание, умножение и деление этих чисел",
        "Выведите все результаты с помощью fmt.Println()",
        "Попробуйте те же операции с числами типа float64"
      ],
      verification: "Проверьте, что все операции выполняются правильно и выводятся корректно",
      expectedOutput: "Все четыре арифметические операции работают с целыми и дробными числами",
      difficulty: "쉬운"
    },
    {
      id: 2,
      title: "Работа с остатком от деления",
      description: "Используйте оператор % для решения практических задач.",
      steps: [
        "Создайте программу, которая проверяет, является ли число четным",
        "Создайте программу, которая проверяет кратность числа (например, делится ли на 3, 5, 7)",
        "Используйте остаток от деления для определения остатка при покупке товаров"
      ],
      verification: "Убедитесь, что проверки работают правильно для разных чисел",
      expectedOutput: "Программы корректно определяют четность и кратность чисел",
      difficulty: "쉬운"
    },
    {
      id: 3,
      title: "Унарные операции",
      description: "Попрактикуйтесь в использовании унарных операций + и -.",
      steps: [
        "Создайте переменную с отрицательным значением",
        "Примените к ней унарный плюс и выведите результат",
        "Примените к ней унарный минус и выведите результат",
        "Попробуйте унарные операции с положительными числами"
      ],
      verification: "Проверьте, что унарные операции работают правильно",
      expectedOutput: "Унарный плюс не изменяет значение, унарный минус меняет знак",
      difficulty: "쉬운"
    },
    {
      id: 4,
      title: "Приоритет операций",
      description: "Изучите и протестируйте приоритет арифметических операций.",
      steps: [
        "Создайте выражения без скобок с разными операциями",
        "Создайте те же выражения со скобками, меняющими порядок выполнения",
        "Сравните результаты и объясните разницу",
        "Используйте fmt.Printf() для вывода промежуточных вычислений"
      ],
      verification: "Убедитесь, что понимаете порядок выполнения операций",
      expectedOutput: "Правильное понимание приоритета операций и использование скобок",
      difficulty: "중간"
    },
    {
      id: 5,
      title: "Целочисленное vs дробное деление",
      description: "Сравните результаты деления целых и дробных чисел.",
      steps: [
        "Выполните деление двух целых чисел (например, 10 / 3)",
        "Выполните деление двух чисел с плавающей точкой (10.0 / 3.0)",
        "Сравните результаты и объясните разницу",
        "Преобразуйте целые числа в float64 и выполните деление"
      ],
      verification: "Проверьте разницу между целочисленным и дробным делением",
      expectedOutput: "Понимание различий между типами деления",
      difficulty: "중간"
    },
    {
      id: 6,
      title: "Практический калькулятор",
      description: "Создайте простую программу-калькулятор с использованием всех изученных операций.",
      steps: [
        "Запросите у пользователя два числа",
        "Выполните все арифметические операции с этими числами",
        "Выведите результаты в красивом формате",
        "Добавьте проверку деления на ноль",
        "Используйте различные форматные спецификаторы для вывода"
      ],
      verification: "Калькулятор должен корректно работать со всеми операциями",
      expectedOutput: "Работающий калькулятор с обработкой ошибок деления на ноль",
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Практические задания: Арифметические операции</h1>
            <p className="text-gray-300">
              Примените полученные знания на практике. Выполните задания по работе с арифметическими операциями в Go.
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
            <li>Обращайте внимание на типы данных при выполнении операций</li>
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
                  {task.difficulty === '쉬운' && <Calculator className="w-5 h-5" />}
                  {task.difficulty === '중간' && <Hash className="w-5 h-5" />}
                  {task.difficulty === '어려운' && <Percent className="w-5 h-5" />}
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