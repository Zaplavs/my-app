// src/data/courses/fastapi/lesson5/part3.jsx
import React, { useState } from 'react';
import { Download, Upload, Edit3, Trash2, Play, CheckCircle, ArrowRight, Terminal } from 'lucide-react';

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
            <ArrowRight className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Реализация CRUD API с HTTP-методами</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить использование всех основных HTTP-методов в FastAPI для создания полноценного API.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание CRUD API приложения */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте приложение для управления задачами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение, которое реализует все основные HTTP-методы для управления списком задач.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл tasks_api.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">tasks_api.py</code>.</li>
              <li>Добавьте следующий код с реализациями всех HTTP-методов:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI, HTTPException
from typing import List, Optional
from pydantic import BaseModel

app = FastAPI(title="API управления задачами")

# Модель данных для задачи
class Task(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    completed: bool = False

# Хранилище данных в памяти
tasks = [
    Task(id=1, title="Изучить FastAPI", description="Пройти курс по FastAPI", completed=True),
    Task(id=2, title="Создать API", description="Разработать REST API", completed=False)
]

# GET - Получение всех задач
@app.get("/tasks", response_model=List[Task])
def get_tasks():
    return tasks

# GET - Получение задачи по ID
@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    for task in tasks:
        if task.id == task_id:
            return task
    raise HTTPException(status_code=404, detail="Задача не найдена")

# POST - Создание новой задачи
@app.post("/tasks", response_model=Task)
def create_task(task: Task):
    # Проверяем, что задача с таким ID еще не существует
    for existing_task in tasks:
        if existing_task.id == task.id:
            raise HTTPException(status_code=400, detail="Задача с таким ID уже существует")
    tasks.append(task)
    return task

# PUT - Обновление задачи
@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, updated_task: Task):
    for i, task in enumerate(tasks):
        if task.id == task_id:
            # Обновляем задачу
            tasks[i] = updated_task
            return updated_task
    raise HTTPException(status_code=404, detail="Задача не найдена")

# DELETE - Удаление задачи
@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    for i, task in enumerate(tasks):
        if task.id == task_id:
            deleted_task = tasks.pop(i)
            return {"message": "Задача удалена", "task": deleted_task}
    raise HTTPException(status_code=404, detail="Задача не найдена")`}
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
            Я создал файл tasks_api.py с реализацией всех HTTP-методов
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Запуск сервера и тестирование через документацию */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Запустите сервер и протестируйте API
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Запустите ваше приложение и протестируйте все реализованные методы через автоматическую документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Запустите сервер
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">tasks_api.py</code>.</li>
              <li>Выполните команду:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">uvicorn tasks_api:app --reload</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Протестируйте GET-методы
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /tasks</code> и протестируйте его.</li>
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /tasks/&#123;task_id&#125;</code> и протестируйте его с разными ID.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Протестируйте POST-метод
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /tasks</code>.</li>
              <li>Нажмите "Try it out" и введите JSON для новой задачи в теле запроса:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"} "id": 3, "title": "Новая задача", "description": "Описание новой задачи" {"}"}</pre>
              </div>
              <li>Выполните запрос и проверьте ответ.</li>
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
            Я протестировал GET и POST методы через Swagger UI
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Тестирование PUT и DELETE методов */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-cyan-400" />
          Задание 3: Протестируйте обновление и удаление
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Протестируйте методы обновления и удаления задач через документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Протестируйте PUT-метод:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">PUT /tasks/&#123;task_id&#125;</code>.</li>
              <li>Выберите существующий ID задачи (например, 1).</li>
              <li>В теле запроса передайте обновленные данные задачи:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"} "id": 1, "title": "Обновленная задача", "description": "Обновленное описание", "completed": true {"}"}</pre>
              </div>
              <li>Выполните запрос и проверьте, что задача обновилась.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Протестируйте DELETE-метод:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">DELETE /tasks/&#123;task_id&#125;</code>.</li>
              <li>Выберите ID существующей задачи.</li>
              <li>Выполните запрос и проверьте ответ.</li>
              <li>После удаления попробуйте получить эту задачу через GET - вы должны получить ошибку 404.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Исследуйте обработку ошибок:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте получить несуществующую задачу (например, с ID=999).</li>
              <li>Попробуйте создать задачу с ID, который уже существует.</li>
              <li>Попробуйте удалить несуществующую задачу.</li>
              <li>Обратите внимание на коды состояния HTTP в ответах (200, 404, 400).</li>
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
            Я протестировал PUT и DELETE методы и изучил обработку ошибок
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
              Теперь вы умеете реализовывать все основные HTTP-методы в FastAPI! Вы создали полноценное CRUD API, протестировали его через автоматическую документацию и изучили обработку ошибок.
              В следующем уроке мы подробнее рассмотрим работу с параметрами запроса, телом запроса и валидацией данных.
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