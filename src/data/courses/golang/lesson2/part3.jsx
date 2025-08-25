// src/data/courses/go/lesson2/part3.jsx
import React, { useState } from 'react';
import { Play, Download, Terminal, Settings, Code, CheckCircle, XCircle, Award } from 'lucide-react';

const Part3 = () => {
  // Практические задания по уроку
  const practicalTasks = [
    {
      id: 1,
      title: "Установка Go",
      description: "Установите Go на вашу операционную систему согласно инструкции из урока.",
      steps: [
        "Перейдите на сайт golang.org/dl/",
        "Скачайте подходящую версию Go для вашей ОС",
        "Установите Go, следуя инструкциям установщика",
        "Перезапустите терминал/командную строку"
      ],
      verification: "Проверьте установку, выполнив в терминале команду: go version",
      expectedOutput: "go version go1.XX.X [операционная_система]/[архитектура]",
      difficulty: "쉬운"
    },
    {
      id: 2,
      title: "Проверка окружения Go",
      description: "Проверьте настройки окружения Go и найдите ключевые переменные.",
      steps: [
        "Откройте терминал или командную строку",
        "Выполните команду: go env",
        "Найдите в выводе переменные GOROOT и GOPATH",
        "Запишите их значения"
      ],
      verification: "Какие значения имеют GOROOT и GOPATH на вашей системе?",
      expectedOutput: "GOROOT: путь к установленному Go, GOPATH: рабочая директория (обычно $HOME/go)",
      difficulty: "쉬운"
    },
    {
      id: 3,
      title: "Создание первой программы",
      description: "Создайте и запустите простую программу 'Hello, World!' как показано в уроке.",
      steps: [
        "Создайте новую директорию для проекта: mkdir myfirstproject",
        "Перейдите в эту директорию: cd myfirstproject",
        "Инициализируйте Go модуль: go mod init myfirstproject",
        "Создайте файл main.go с кодом программы из урока",
        "Запустите программу командой: go run main.go"
      ],
      verification: "Убедитесь, что программа выводит 'Hello, World!' в консоль",
      expectedOutput: "Hello, World!",
      difficulty: "쉬운"
    },
    {
      id: 4,
      title: "Компиляция в исполняемый файл",
      description: "Скомпилируйте вашу программу в исполняемый файл и запустите его.",
      steps: [
        "В директории с файлом main.go выполните: go build main.go",
        "Проверьте, что в директории появился исполняемый файл",
        "Запустите созданный исполняемый файл"
      ],
      verification: "Программа должна вывести тот же результат, что и при использовании go run",
      expectedOutput: "Hello, World!",
      difficulty: "중간"
    },
    {
      id: 5,
      title: "Изменение программы",
      description: "Измените программу, чтобы она выводила ваше имя и изучаемый язык программирования.",
      steps: [
        "Откройте файл main.go в текстовом редакторе",
        "Измените строку fmt.Println на вывод вашего имени и упоминания Go",
        "Сохраните изменения",
        "Запустите программу с помощью go run"
      ],
      verification: "Программа должна выводить персонализированное сообщение",
      expectedOutput: "Например: 'Привет, меня зовут Алексей, и я изучаю Go!'",
      difficulty: "쉬운"
    },
    {
      id: 6,
      title: "Исследование структуры проекта",
      description: "Изучите структуру директории GOPATH и создайте тестовый проект в ней.",
      steps: [
        "Найдите значение GOPATH с помощью команды: go env GOPATH",
        "Проверьте наличие поддиректорий src, bin, pkg в GOPATH",
        "Создайте директорию для тестового проекта внутри src",
        "Инициализируйте в ней модуль и создайте простую программу"
      ],
      verification: "Какие поддиректории находятся в вашей GOPATH?",
      expectedOutput: "src, bin, pkg",
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
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Практические задания: Установка Go и первая программа</h1>
            <p className="text-gray-300">
              Примените полученные знания на практике. Выполните задания по установке Go и созданию первой программы.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Отмечайте выполненные задания и сохраняйте результаты для самопроверки.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
          <h3 className="font-bold text-white mb-2 flex items-center gap-2">
            <Play className="w-5 h-5 text-green-400" />
            Инструкция по выполнению:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Выполняйте задания последовательно, следуя указанным шагам</li>
            <li>После выполнения каждого задания нажмите чекбокс, чтобы отметить его как выполненное</li>
            <li>При необходимости сохраняйте результаты выполнения заданий</li>
            <li>Если задание вызывает затруднения, вернитесь к теоретическому материалу</li>
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
                  {task.difficulty === '쉬운' && <Play className="w-5 h-5" />}
                  {task.difficulty === '중간' && <Settings className="w-5 h-5" />}
                  {task.difficulty === '어려운' && <Terminal className="w-5 h-5" />}
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
                  <Terminal className="w-4 h-4 text-purple-400" />
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