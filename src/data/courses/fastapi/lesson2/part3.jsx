// src/data/courses/fastapi/lesson2/part3.jsx
import React, { useState } from 'react';
import { Terminal, Folder, Download, Settings, Play, CheckCircle, Code } from 'lucide-react';

const Part3 = () => {
  const [completedTasks, setCompletedTasks] = useState({
    task1: false,
    task2: false,
    task3: false
  });

  const handleTaskComplete = (task) => {
    setCompletedTasks(prev => ({
      ...prev,
      [task]: !prev[task]
    }));
  };

  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Установка и настройка FastAPI</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить установку FastAPI и настройку рабочего окружения.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание виртуального окружения */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Folder className="w-5 h-5 text-green-400" />
          Задание 1: Создайте виртуальное окружение
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте изолированное окружение для вашего FastAPI проекта.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Откройте терминал
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал (Linux/macOS) или командную строку (Windows).</li>
              <li>Перейдите в папку, где хотите создать проект (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">cd Documents</code>).</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Создайте виртуальное окружение
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Выполните команду для создания виртуального окружения:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`# Linux/macOS
python3 -m venv fastapi-practice

# Windows
python -m venv fastapi-practice`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>После выполнения команды должна появиться папка <code className="bg-gray-700 px-1.5 py-0.5 rounded">fastapi-practice</code>.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task1"
            checked={completedTasks.task1}
            onChange={() => handleTaskComplete('task1')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task1" className="ml-2 text-gray-300">
            Я создал виртуальное окружение с именем fastapi-practice
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Активация и установка */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-purple-400" />
          Задание 2: Активируйте окружение и установите FastAPI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Активируйте виртуальное окружение и установите FastAPI.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Активируйте виртуальное окружение
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Выполните команду для активации окружения:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`# Linux/macOS
source fastapi-practice/bin/activate

# Windows (cmd)
fastapi-practice\\Scripts\\activate

# Windows (PowerShell)
fastapi-practice\\Scripts\\Activate.ps1`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>В начале строки терминала должно появиться <code className="bg-gray-700 px-1.5 py-0.5 rounded">(fastapi-practice)</code>.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Установите FastAPI
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>После активации окружения установите FastAPI:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`pip install "fastapi[all]"`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Установка может занять несколько минут.</li>
              <li>После завершения вы увидите сообщения об установленных пакетах.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task2"
            checked={completedTasks.task2}
            onChange={() => handleTaskComplete('task2')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task2" className="ml-2 text-gray-300">
            Я активировал окружение и установил FastAPI
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Создание и запуск приложения */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-cyan-400" />
          Задание 3: Создайте и запустите простое приложение
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте простое FastAPI приложение и запустите его.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл main.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>В той же папке создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.py</code>.</li>
              <li>Добавьте в него следующий код:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Мое первое FastAPI приложение!"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}`}
              </pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Запустите приложение
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>В терминале выполните команду запуска:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`uvicorn main:app --reload`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Откройте браузер и перейдите по адресу <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000</code>.</li>
              <li>Вы должны увидеть JSON ответ с вашим сообщением.</li>
              <li>Попробуйте перейти по адресу <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/items/5?q=test</code>.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task3"
            checked={completedTasks.task3}
            onChange={() => handleTaskComplete('task3')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task3" className="ml-2 text-gray-300">
            Я создал и успешно запустил FastAPI приложение
          </label>
          {completedTasks.task3 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь у вас есть полностью рабочее окружение для разработки на FastAPI. Вы научились создавать виртуальное окружение, устанавливать зависимости и запускать сервер разработки.
              В следующем уроке мы погрузимся в изучение основ FastAPI - создание endpoints, работа с параметрами и телом запроса.
            </p>
            {Object.values(completedTasks).every(task => task) && (
              <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-green-300">Все задания выполнены! Вы готовы к следующему уроку.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;