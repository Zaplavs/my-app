// src/data/courses/fastapi/lesson10/part3.jsx
import React, { useState } from 'react';
import { Upload, Play, CheckCircle, Terminal, Eye, Database } from 'lucide-react';

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
            <Upload className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Работа с телом запроса в FastAPI</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить получение и валидацию данных из тела запроса с помощью Pydantic моделей в FastAPI.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание API с телом запроса */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте API для управления библиотекой с телом запроса
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение, которое принимает данные в теле запроса для создания и обновления книг.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл library_api.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">library_api.py</code>.</li>
              <li>Добавьте следующий код с моделями и маршрутами для работы с телом запроса:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="API библиотеки")

# Модель для создания книги
class BookCreate(BaseModel):
    title: str
    author: str
    isbn: str
    publication_year: int
    genre: Optional[str] = None
    description: Optional[str] = None

# Модель для обновления книги
class BookUpdate(BaseModel):
    title: Optional[str] = None
    author: Optional[str] = None
    isbn: Optional[str] = None
    publication_year: Optional[int] = None
    genre: Optional[str] = None
    description: Optional[str] = None

# Модель для ответа (расширяет BookCreate)
class Book(BookCreate):
    id: int
    created_at: datetime

# Имитация базы данных
fake_books_db = []

# Создание книги (POST с телом запроса)
@app.post("/books/", response_model=Book)
def create_book(book: BookCreate):
    new_book = Book(
        id=len(fake_books_db) + 1,
        created_at=datetime.now(),
        **book.dict()
    )
    fake_books_db.append(new_book)
    return new_book

# Получение списка книг
@app.get("/books/", response_model=List[Book])
def get_books(skip: int = 0, limit: int = 10):
    return fake_books_db[skip : skip + limit]

# Получение конкретной книги
@app.get("/books/{book_id}", response_model=Book)
def get_book(book_id: int):
    for book in fake_books_db:
        if book.id == book_id:
            return book
    raise HTTPException(status_code=404, detail="Книга не найдена")

# Обновление книги (PUT с телом запроса)
@app.put("/books/{book_id}", response_model=Book)
def update_book(book_id: int, book_update: BookUpdate):
    for book in fake_books_db:
        if book.id == book_id:
            # Обновляем только переданные поля
            update_data = book_update.dict(exclude_unset=True)
            for key, value in update_data.items():
                setattr(book, key, value)
            return book
    raise HTTPException(status_code=404, detail="Книга не найдена")`}
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
            Я создал файл library_api.py с маршрутами, использующими тело запроса
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Запуск сервера и тестирование через документацию */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Запустите сервер и протестируйте API с телом запроса
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Запустите ваше приложение и протестируйте работу с телом запроса через автоматическую документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Запустите сервер
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">library_api.py</code>.</li>
              <li>Выполните команду:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">uvicorn library_api:app --reload</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Протестируйте создание книг
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /books/</code> и нажмите "Try it out".</li>
              <li>В теле запроса передайте JSON для новой книги:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"title": "1984", "author": "Джордж Оруэлл", "isbn": "978-0-452-28423-4", "publication_year": 1949, "genre": "Антиутопия"{"}"}</pre>
              </div>
              <li>Выполните запрос и проверьте ответ.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Протестируйте обновление книг
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">PUT /books/&#123;book_id&#125;</code> и нажмите "Try it out".</li>
              <li>Введите ID существующей книги (например, 1).</li>
              <li>В теле запроса передайте JSON с полями для обновления:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"genre": "Классическая литература", "description": "Известная антиутопия о тоталитарном государстве"{"}"}</pre>
              </div>
              <li>Выполните запрос и проверьте, что книга обновилась.</li>
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
            Я протестировал создание и обновление книг через Swagger UI
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Тестирование валидации и ошибок */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Проверьте валидацию тела запроса и обработку ошибок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Проверьте, как FastAPI обрабатывает некорректные данные в теле запроса.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Протестируйте валидацию типов:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте создать книгу с некорректными данными:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"title": "Новая книга", "author": "Автор", "isbn": "12345", "publication_year": "тысяча девятьсот"{"}"}</pre>
              </div>
              <li>Обратите внимание на автоматическую ошибку валидации (HTTP 422).</li>
              <li>Проверьте, что в ответе указано, какое поле содержит ошибку.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Протестируйте обязательные поля:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте создать книгу без обязательных полей:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"title": "Книга без автора"{"}"}</pre>
              </div>
              <li>Обратите внимание на ошибки валидации для отсутствующих обязательных полей.</li>
              <li>Проверьте, что опциональные поля могут отсутствовать.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Исследуйте документацию тела запроса:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>В Swagger UI найдите раздел "Request body" для эндпоинта POST.</li>
              <li>Обратите внимание на автоматически сгенерированные примеры.</li>
              <li>Проверьте, как отображаются обязательные и опциональные поля.</li>
              <li>Изучите схему модели в разделе "Schemas".</li>
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
            Я проверил валидацию, обработку ошибок и изучил документацию тела запроса
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
              Теперь вы умеете работать с телом запроса в FastAPI! Вы создали API, которое принимает, валидирует и обрабатывает данные из тела запроса, протестировали обработку ошибок и изучили автоматическую документацию.
              В следующем уроке мы рассмотрим работу с формами и файлами.
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