// src/data/courses/fastapi/lesson3/part3.jsx
import React, { useState } from 'react';
import { Play, Code, Server, Route, Terminal, FileText, CheckCircle, Eye } from 'lucide-react';

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
            <Play className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Создайте свое первое FastAPI приложение</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить создание простого FastAPI приложения с несколькими маршрутами.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание базового приложения */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Создайте базовое FastAPI приложение
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте простое FastAPI приложение с корневым маршрутом.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл main.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте текстовый редактор (VS Code, PyCharm или другой).</li>
              <li>Создайте новый файл и сохраните его как <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.py</code>.</li>
              <li>Добавьте следующий код:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Мое первое FastAPI приложение!"}`}
              </pre>
            </div>
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
            Я создал файл main.py с базовым FastAPI приложением
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Запуск сервера и проверка */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Запустите сервер и проверьте работу
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Запустите ваше приложение и проверьте его работу в браузере.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Запустите сервер разработки
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.py</code>.</li>
              <li>Выполните команду:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">uvicorn main:app --reload</pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Дождитесь сообщения о запуске сервера (обычно на порту 8000).</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Проверьте работу в браузере
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте браузер и перейдите по адресу <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000</code>.</li>
              <li>Вы должны увидеть JSON ответ с вашим сообщением.</li>
              <li>Также проверьте автоматическую документацию по адресу <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
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
            Я запустил сервер и проверил работу приложения в браузере
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Расширение функциональности */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Route className="w-5 h-5 text-cyan-400" />
          Задание 3: Добавьте дополнительные маршруты
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Расширьте ваше приложение, добавив новые маршруты.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Добавьте следующие маршруты в файл main.py:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Маршрут <code className="bg-gray-700 px-1.5 py-0.5 rounded">/users</code> (GET), возвращающий список пользователей:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}users: ["Анна", "Иван", "Мария"]{"}"}</pre>
              </div>
              <li className="mt-3">Маршрут <code className="bg-gray-700 px-1.5 py-0.5 rounded">/items/&#123;item_id&#125;</code> (GET) с опциональным параметром <code className="bg-gray-700 px-1.5 py-0.5 rounded">q</code>:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}item_id: item_id, q: q{"}"}</pre>
              </div>
            </ul>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Подсказка:</span> Используйте декоратор <code className="bg-gray-700 px-1.5 py-0.5 rounded">@app.get("/путь")</code> и функции с соответствующими параметрами.
              </p>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Проверьте новые маршруты
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Сервер должен автоматически перезагрузиться благодаря флагу <code className="bg-gray-700 px-1.5 py-0.5 rounded">--reload</code>.</li>
              <li>Проверьте новые маршруты в браузере:</li>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/users</code></li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/items/5</code></li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/items/10?q=test</code></li>
              </ul>
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
            Я добавил новые маршруты и проверил их работу
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
              Теперь у вас есть полностью рабочее FastAPI приложение с несколькими маршрутами! Вы научились создавать приложение, запускать сервер разработки и расширять функциональность.
              В следующем уроках мы подробнее рассмотрим работу с параметрами запроса, телом запроса и более сложными структурами данных.
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