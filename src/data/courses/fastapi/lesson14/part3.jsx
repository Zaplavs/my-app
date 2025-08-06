// src/data/courses/fastapi/lesson14/part3.jsx
import React, { useState } from 'react';
import { Database, Play, CheckCircle, Terminal, Eye, Edit3, Plus, Trash2 } from 'lucide-react';

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
            <Database className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Реализация полного CRUD API для задач</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически реализовать все CRUD-операции в FastAPI приложении с использованием SQLite базы данных.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание базовой структуры API */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте базовую структуру API для управления задачами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение с полной реализацией CRUD-операций для управления списком задач.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл tasks_crud.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">tasks_crud.py</code>.</li>
              <li>Добавьте следующий код с базовой структурой и моделями:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import Depends, FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional
import sqlite3
from datetime import datetime

app = FastAPI(title="API управления задачами")

# Pydantic модели
class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None
    priority: int = 1  # 1 - низкий, 2 - средний, 3 - высокий

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    priority: Optional[int] = None
    is_completed: Optional[bool] = None

class Task(TaskCreate):
    id: int
    is_completed: bool = False
    created_at: str
    updated_at: str

# Инициализация базы данных
def init_db():
    conn = sqlite3.connect('tasks.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            priority INTEGER DEFAULT 1,
            is_completed BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Вызываем инициализацию
init_db()

# Зависимость для получения подключения к БД
def get_db():
    conn = sqlite3.connect('tasks.db')
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()`}
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
            Я создал файл tasks_crud.py с базовой структурой и моделями
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Реализация операций Create и Read */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Plus className="w-5 h-5 text-purple-400" />
          <Eye className="w-5 h-5 text-green-400" />
          Задание 2: Реализуйте операции Create (Создание) и Read (Чтение)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Добавьте эндпоинты для создания новых задач и получения существующих.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Реализуйте операцию Create (POST)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте следующий эндпоинт в файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">tasks_crud.py</code>:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.post("/tasks/", response_model=Task, status_code=status.HTTP_201_CREATED)
def create_task(task: TaskCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute('''
        INSERT INTO tasks (title, description, priority) 
        VALUES (?, ?, ?)
    ''', (task.title, task.description, task.priority))
    db.commit()
    
    task_id = cursor.lastrowid
    cursor.execute("SELECT * FROM tasks WHERE id = ?", (task_id,))
    created_task = cursor.fetchone()
    
    return dict(created_task)`}</code></pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Реализуйте операции Read (GET)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте эндпоинты для получения списка задач и конкретной задачи:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/tasks/", response_model=List[Task])
def read_tasks(
    skip: int = 0, 
    limit: int = 100, 
    completed: Optional[bool] = None,
    db: sqlite3.Connection = Depends(get_db)
):
    cursor = db.cursor()
    
    query = "SELECT * FROM tasks"
    params = []
    
    if completed is not None:
        query += " WHERE is_completed = ?"
        params.append(completed)
    
    query += " ORDER BY created_at DESC LIMIT ? OFFSET ?"
    params.extend([limit, skip])
    
    cursor.execute(query, params)
    tasks = cursor.fetchall()
    
    return [dict(task) for task in tasks]

@app.get("/tasks/{task_id}", response_model=Task)
def read_task(task_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM tasks WHERE id = ?", (task_id,))
    task = cursor.fetchone()
    
    if task is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Задача не найдена"
        )
    
    return dict(task)`}</code></pre>
            </div>
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
            Я реализовал операции Create и Read
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Реализация операций Update и Delete */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-cyan-400" />
          <Trash2 className="w-5 h-5 text-red-400" />
          Задание 3: Реализуйте операции Update (Обновление) и Delete (Удаление)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Завершите реализацию API, добавив операции обновления и удаления задач.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Реализуйте операцию Update (PUT и PATCH)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте эндпоинты для полного и частичного обновления задач:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.put("/tasks/{task_id}", response_model=Task)
def update_task(
    task_id: int, 
    task: TaskCreate, 
    db: sqlite3.Connection = Depends(get_db)
):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM tasks WHERE id = ?", (task_id,))
    existing_task = cursor.fetchone()
    
    if existing_task is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Задача не найдена"
        )
    
    cursor.execute('''
        UPDATE tasks 
        SET title = ?, description = ?, priority = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    ''', (task.title, task.description, task.priority, task_id))
    db.commit()
    
    cursor.execute("SELECT * FROM tasks WHERE id = ?", (task_id,))
    updated_task = cursor.fetchone()
    
    return dict(updated_task)

@app.patch("/tasks/{task_id}", response_model=Task)
def partial_update_task(
    task_id: int, 
    task_update: TaskUpdate, 
    db: sqlite3.Connection = Depends(get_db)
):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM tasks WHERE id = ?", (task_id,))
    existing_task = cursor.fetchone()
    
    if existing_task is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Задача не найдена"
        )
    
    update_fields = []
    update_values = []
    
    if task_update.title is not None:
        update_fields.append("title = ?")
        update_values.append(task_update.title)
    
    if task_update.description is not None:
        update_fields.append("description = ?")
        update_values.append(task_update.description)
    
    if task_update.priority is not None:
        update_fields.append("priority = ?")
        update_values.append(task_update.priority)
    
    if task_update.is_completed is not None:
        update_fields.append("is_completed = ?")
        update_values.append(task_update.is_completed)
    
    if update_fields:
        update_fields.append("updated_at = CURRENT_TIMESTAMP")
        update_values.append(task_id)
        
        query = f"UPDATE tasks SET {', '.join(update_fields)} WHERE id = ?"
        cursor.execute(query, update_values)
        db.commit()
    
    cursor.execute("SELECT * FROM tasks WHERE id = ?", (task_id,))
    updated_task = cursor.fetchone()
    
    return dict(updated_task)`}</code></pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Реализуйте операцию Delete (DELETE)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте эндпоинт для удаления задач:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.delete("/tasks/{task_id}")
def delete_task(task_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM tasks WHERE id = ?", (task_id,))
    task = cursor.fetchone()
    
    if task is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Задача не найдена"
        )
    
    cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    db.commit()
    
    return {"message": "Задача успешно удалена"}`}</code></pre>
            </div>
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
            Я реализовал операции Update и Delete
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
              Теперь вы создали полноценное CRUD API для управления задачами! Вы реализовали все основные операции: создание, чтение, обновление и удаление данных, а также научились работать с базой данных SQLite через зависимости FastAPI.
              В следующем уроке мы рассмотрим работу с аутентификацией и авторизацией.
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