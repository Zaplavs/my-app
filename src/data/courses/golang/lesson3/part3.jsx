// src/data/courses/go/lesson3/part3.jsx
import React, { useState } from 'react';
import { Variable, Type, Hash, Calculator, Text, ToggleLeft, ArrowRightLeft, CheckCircle, Award } from 'lucide-react';

const Part3 = () => {
  // Практические задания по уроку
  const practicalTasks = [
    {
      id: 1,
      title: "Объявление переменных разными способами",
      description: "Создайте переменные с использованием различных способов объявления, изученных в уроке.",
      steps: [
        "Объявите переменную 'userName' типа string с помощью var и присвойте ей ваше имя",
        "Объявите переменную 'userAge' типа int с помощью краткой формы := и присвойте свой возраст",
        "Объявите переменную 'height' типа float64 без начального значения"
      ],
      verification: "Проверьте, что переменные объявлены правильно и могут быть использованы в программе",
      expectedOutput: "userName = 'Ваше имя', userAge = ваш возраст, height = 0",
      difficulty: "쉬운"
    },
    {
      id: 2,
      title: "Работа с базовыми типами данных",
      description: "Создайте переменные всех базовых типов, рассмотренных в уроке.",
      steps: [
        "Создайте переменную типа int и присвойте ей любое целое число",
        "Создайте переменную типа float64 и присвойте ей число с плавающей точкой",
        "Создайте переменную типа string и присвойте ей любую строку",
        "Создайте переменную типа bool и присвойте ей значение true или false"
      ],
      verification: "Убедитесь, что все переменные созданы с правильными типами",
      expectedOutput: "Переменные всех четырех базовых типов успешно объявлены",
      difficulty: "쉬운"
    },
    {
      id: 3,
      title: "Создание констант",
      description: "Объявите несколько констант различных типов.",
      steps: [
        "Объявите константу 'pi' типа float64 со значением 3.14159",
        "Объявите константу 'appName' типа string с названием вашего приложения",
        "Объявите константу 'maxUsers' типа int с любым числовым значением"
      ],
      verification: "Проверьте, что значения констант не изменяются в программе",
      expectedOutput: "pi = 3.14159, appName = 'название приложения', maxUsers = число",
      difficulty: "쉬운"
    },
    {
      id: 4,
      title: "Объявление нескольких переменных",
      description: "Попрактикуйтесь в объявлении нескольких переменных одновременно.",
      steps: [
        "Используйте синтаксис с круглыми скобками для объявления трех переменных: name, age, city",
        "Присвойте им значения в процессе объявления",
        "Объявите три переменные в одной строке с помощью синтаксиса через запятую"
      ],
      verification: "Убедитесь, что все переменные успешно объявлены и имеют правильные значения",
      expectedOutput: "Все переменные объявлены и содержат присвоенные значения",
      difficulty: "중간"
    },
    {
      id: 5,
      title: "Преобразование типов",
      description: "Попрактикуйтесь в преобразовании числовых типов друг в друга.",
      steps: [
        "Создайте переменную типа int со значением 42",
        "Преобразуйте ее в тип float64 и сохраните в новую переменную",
        "Создайте переменную типа float64 со значением 99.9",
        "Преобразуйте ее в тип int и сохраните в новую переменную"
      ],
      verification: "Проверьте результаты преобразования и обратите внимание на потерю точности",
      expectedOutput: "int(42) -> float64(42), float64(99.9) -> int(99)",
      difficulty: "중간"
    },
    {
      id: 6,
      title: "Создание простой программы с переменными",
      description: "Напишите небольшую программу, используя все изученные концепции.",
      steps: [
        "Создайте переменные для хранения информации о человеке (имя, возраст, рост, студент ли)",
        "Используйте разные способы объявления переменных",
        "Добавьте несколько констант (например, минимальный возраст, максимальный рост)",
        "Выведите все значения с помощью fmt.Println()"
      ],
      verification: "Программа должна успешно компилироваться и выводить информацию",
      expectedOutput: "Вывод информации о человеке с использованием всех переменных",
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
            <Variable className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Практические задания: Переменные и типы данных</h1>
            <p className="text-gray-300">
              Примените полученные знания на практике. Выполните задания по работе с переменными и типами данных в Go.
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
                  {task.difficulty === '쉬운' && <Variable className="w-5 h-5" />}
                  {task.difficulty === '중간' && <Type className="w-5 h-5" />}
                  {task.difficulty === '어려운' && <Hash className="w-5 h-5" />}
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
                  <ToggleLeft className="w-4 h-4 text-purple-400" />
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