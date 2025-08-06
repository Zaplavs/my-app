// src/data/courses/fastapi/lesson13/part3.jsx
import React, { useState } from 'react';
import { Database, Play, CheckCircle, Terminal, Eye, Settings } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Создание API с SQLite базой данных</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить подключение SQLite базы данных к FastAPI приложению и реализовать CRUD операции через зависимости.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание базы данных и таблиц */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте базу данных и таблицы для блога
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение с SQLite базой данных для управления постами в блоге.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл blog_api.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">blog_api.py</code>.</li>
              <li>Добавьте следующий код для инициализации базы данных:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`import sqlite3
from fastapi import Depends, FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional
import time

app = FastAPI(title="Блог API с SQLite")

# Pydantic модели
class PostCreate(BaseModel):
    title: str
    content: str
    author: str

class PostUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    author: Optional[str] = None

class Post(BaseModel):
    id: int
    title: str
    content: str
    author: str
    created_at: str

# Инициализация базы данных
def init_db():
    conn = sqlite3.connect('blog.db')
    cursor = conn.cursor()
    
    # Создание таблицы постов
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            author TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Создание таблицы комментариев (для расширения)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            post_id INTEGER NOT NULL,
            author TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (post_id) REFERENCES posts (id)
        )
    ''')
    
    conn.commit()
    conn.close()

# Вызываем инициализацию при запуске
init_db()`}
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
            Я создал файл blog_api.py и инициализировал базу данных
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Реализация зависимостей и CRUD операций */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Добавьте зависимости и реализуйте CRUD операции
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Добавьте зависимости для управления подключениями к БД и реализуйте основные операции.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Добавьте зависимость для подключения к БД
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте следующий код в файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">blog_api.py</code>:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`# Зависимость для получения подключения к БД
def get_db():
    conn = sqlite3.connect('blog.db')
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()`}
              </pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Реализуйте CRUD операции для постов
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте следующие эндпоинты в файл:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`# Создание поста
@app.post("/posts/", response_model=Post, status_code=status.HTTP_201_CREATED)
def create_post(post: PostCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO posts (title, content, author) VALUES (?, ?, ?)",
        (post.title, post.content, post.author)
    )
    db.commit()
    
    # Получение созданного поста
    post_id = cursor.lastrowid
    cursor.execute("SELECT * FROM posts WHERE id = ?", (post_id,))
    created_post = cursor.fetchone()
    
    return dict(created_post)

# Получение списка постов
@app.get("/posts/", response_model=List[Post])
def read_posts(skip: int = 0, limit: int = 10, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM posts ORDER BY created_at DESC LIMIT ? OFFSET ?", (limit, skip))
    posts = cursor.fetchall()
    return [dict(post) for post in posts]

# Получение конкретного поста
@app.get("/posts/{post_id}", response_model=Post)
def read_post(post_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM posts WHERE id = ?", (post_id,))
    post = cursor.fetchone()
    
    if post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Пост не найден"
        )
    
    return dict(post)

# Обновление поста
@app.put("/posts/{post_id}", response_model=Post)
def update_post(
    post_id: int, 
    post_update: PostUpdate, 
    db: sqlite3.Connection = Depends(get_db)
):
    # Проверка существования поста
    cursor = db.cursor()
    cursor.execute("SELECT * FROM posts WHERE id = ?", (post_id,))
    existing_post = cursor.fetchone()
    
    if existing_post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Пост не найден"
        )
    
    # Обновление данных
    if post_update.title is not None:
        cursor.execute("UPDATE posts SET title = ? WHERE id = ?", (post_update.title, post_id))
    
    if post_update.content is not None:
        cursor.execute("UPDATE posts SET content = ? WHERE id = ?", (post_update.content, post_id))
    
    if post_update.author is not None:
        cursor.execute("UPDATE posts SET author = ? WHERE id = ?", (post_update.author, post_id))
    
    db.commit()
    
    # Получение обновленного поста
    cursor.execute("SELECT * FROM posts WHERE id = ?", (post_id,))
    updated_post = cursor.fetchone()
    
    return dict(updated_post)

# Удаление поста
@app.delete("/posts/{post_id}")
def delete_post(post_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM posts WHERE id = ?", (post_id,))
    post = cursor.fetchone()
    
    if post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Пост не найден"
        )
    
    cursor.execute("DELETE FROM posts WHERE id = ?", (post_id,))
    db.commit()
    
    return {"message": "Пост успешно удален"}`}
              </pre>
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
            Я добавил зависимости и реализовал CRUD операции
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Запуск сервера и тестирование */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Запустите сервер и протестируйте API
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Запустите ваше приложение и протестируйте все операции через автоматическую документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Запустите сервер и создайте посты:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">blog_api.py</code>.</li>
              <li>Выполните команду:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">uvicorn blog_api:app --reload</pre>
              </div>
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Используйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /posts/</code> для создания нескольких постов:</li>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Заголовок: "Первый пост", Автор: "Автор 1", Содержание: "Содержание первого поста"</li>
                <li>Заголовок: "Второй пост", Автор: "Автор 2", Содержание: "Содержание второго поста"</li>
              </ul>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Протестируйте все операции:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Получите список постов через <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /posts/</code>.</li>
              <li>Получите конкретный пост через <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /posts/1</code>.</li>
              <li>Обновите пост через <code className="bg-gray-700 px-1.5 py-0.5 rounded">PUT /posts/1</code>.</li>
              <li>Удалите пост через <code className="bg-gray-700 px-1.5 py-0.5 rounded">DELETE /posts/2</code>.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Проверьте сохранение данных:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Остановите сервер (Ctrl+C) и запустите его снова.</li>
              <li>Проверьте, что данные сохранились в базе данных.</li>
              <li>Посмотрите содержимое файла <code className="bg-gray-700 px-1.5 py-0.5 rounded">blog.db</code> (можно использовать DB Browser for SQLite).</li>
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
            Я протестировал все операции и проверил сохранение данных
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
              Теперь вы умеете подключать SQLite базу данных к FastAPI приложению! Вы создали полноценное API с постоянным хранением данных, реализовали все CRUD операции и научились управлять подключениями через зависимости.
              В следующем уроке мы рассмотрим работу с асинхронными базами данных.
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