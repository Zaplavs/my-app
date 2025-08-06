// src/data/courses/fastapi/lesson14/part1.jsx
import React from 'react';
import { Database, Plus, Eye, Edit3, Trash2, FileText, Code, Zap, Settings } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Database className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📊 Урок 14: CRUD-операции: Создание, Чтение, Обновление, Удаление</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Основные операции для работы с данными в FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое CRUD-операции, как их реализовывать в FastAPI с использованием соответствующих HTTP-методов и взаимодействия с базой данных.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое CRUD? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Что такое CRUD?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">CRUD</span> — это акроним, обозначающий четыре основные операции для работы с персистентными (долговременными) данными:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium text-blue-300">C</span>reate (Создание) — добавление новых записей</li>
            <li><span className="font-medium text-green-300">R</span>ead (Чтение) — получение существующих записей</li>
            <li><span className="font-medium text-yellow-300">U</span>pdate (Обновление) — изменение существующих записей</li>
            <li><span className="font-medium text-red-300">D</span>elete (Удаление) — удаление записей</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> В блоге CRUD-операции позволяют создавать новые статьи, просматривать их, редактировать и удалять.
            </p>
          </div>
        </div>
      </div>

      {/* CRUD в контексте HTTP и REST */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          CRUD в контексте HTTP и REST
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            В веб-API, особенно в RESTful API, CRUD-операции реализуются с помощью соответствующих HTTP-методов:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Create */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Plus className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">1. Create (Создание) - POST</h3>
              <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">Создание ресурса</span>
            </div>
            <p className="text-gray-300 mb-3">
              Используется для создания новых ресурсов. Данные передаются в теле запроса.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.post("/items/")
def create_item(item: Item):
    # Логика создания нового элемента
    return created_item`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300 text-xs">
              <li>Данные передаются в теле запроса</li>
              <li>Возвращает созданный ресурс с кодом 201 Created</li>
              <li>URL обычно указывает на коллекцию (/items/)</li>
            </ul>
          </div>

          {/* Read */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">2. Read (Чтение) - GET</h3>
              <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">Получение ресурса</span>
            </div>
            <p className="text-gray-300 mb-3">
              Используется для получения существующих ресурсов. Может возвращать один или список ресурсов.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/")
def read_items(skip: int = 0, limit: int = 100):
    # Логика получения списка элементов
    return items_list

@app.get("/items/{item_id}")
def read_item(item_id: int):
    # Логика получения конкретного элемента
    return specific_item`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300 text-xs">
              <li>Параметры могут передаваться в URL или строке запроса</li>
              <li>Возвращает данные ресурса с кодом 200 OK</li>
              <li>Не изменяет состояние сервера</li>
            </ul>
          </div>

          {/* Update */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Edit3 className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-300">3. Update (Обновление) - PUT/PATCH</h3>
              <span className="text-xs bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded">Изменение ресурса</span>
            </div>
            <p className="text-gray-300 mb-3">
              Используется для обновления существующих ресурсов. PUT заменяет ресурс целиком, PATCH — частично.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    # Логика полного обновления элемента
    return updated_item

@app.patch("/items/{item_id}")
def partial_update_item(item_id: int, item_update: ItemUpdate):
    # Логика частичного обновления элемента
    return partially_updated_item`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300 text-xs">
              <li>PUT — заменяет ресурс целиком</li>
              <li>PATCH — обновляет только переданные поля</li>
              <li>Возвращает обновленный ресурс с кодом 200 OK</li>
            </ul>
          </div>

          {/* Delete */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Trash2 className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-300">4. Delete (Удаление) - DELETE</h3>
              <span className="text-xs bg-red-900/30 text-red-300 px-2 py-1 rounded">Удаление ресурса</span>
            </div>
            <p className="text-gray-300 mb-3">
              Используется для удаления существующих ресурсов по их идентификатору.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    # Логика удаления элемента
    return {"message": "Элемент успешно удален"}`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300 text-xs">
              <li>Идентификатор ресурса передается в URL</li>
              <li>Возвращает сообщение об успехе с кодом 200 OK или 204 No Content</li>
              <li>Удаляет ресурс из хранилища данных</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Практический пример CRUD API */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-orange-400" />
          Практический пример: CRUD API для управления заметками
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте создадим полноценный пример API с реализованными CRUD-операциями для управления заметками:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional
import sqlite3
from datetime import datetime

app = FastAPI(title="API управления заметками")

# Pydantic модели
class NoteCreate(BaseModel):
    title: str
    content: str
    category: Optional[str] = None

class NoteUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    is_completed: Optional[bool] = None

class Note(NoteCreate):
    id: int
    is_completed: bool = False
    created_at: str
    updated_at: str

# Инициализация базы данных
def init_db():
    conn = sqlite3.connect('notes.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            category TEXT,
            is_completed BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

init_db()

# Зависимость для получения подключения к БД
def get_db():
    conn = sqlite3.connect('notes.db')
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

# CREATE - Создание новой заметки
@app.post("/notes/", response_model=Note, status_code=status.HTTP_201_CREATED)
def create_note(note: NoteCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute('''
        INSERT INTO notes (title, content, category) 
        VALUES (?, ?, ?)
    ''', (note.title, note.content, note.category))
    db.commit()
    
    note_id = cursor.lastrowid
    cursor.execute("SELECT * FROM notes WHERE id = ?", (note_id,))
    created_note = cursor.fetchone()
    
    return dict(created_note)

# READ - Получение списка заметок
@app.get("/notes/", response_model=List[Note])
def read_notes(
    skip: int = 0, 
    limit: int = 100, 
    completed: Optional[bool] = None,
    category: Optional[str] = None,
    db: sqlite3.Connection = Depends(get_db)
):
    cursor = db.cursor()
    
    # Формирование запроса с учетом фильтров
    query = "SELECT * FROM notes"
    params = []
    
    if completed is not None:
        query += " WHERE is_completed = ?"
        params.append(completed)
    
    if category is not None:
        if completed is not None:
            query += " AND category = ?"
        else:
            query += " WHERE category = ?"
        params.append(category)
    
    query += " ORDER BY created_at DESC LIMIT ? OFFSET ?"
    params.extend([limit, skip])
    
    cursor.execute(query, params)
    notes = cursor.fetchall()
    
    return [dict(note) for note in notes]

# READ - Получение конкретной заметки
@app.get("/notes/{note_id}", response_model=Note)
def read_note(note_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM notes WHERE id = ?", (note_id,))
    note = cursor.fetchone()
    
    if note is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Заметка не найдена"
        )
    
    return dict(note)

# UPDATE - Полное обновление заметки
@app.put("/notes/{note_id}", response_model=Note)
def update_note(
    note_id: int, 
    note: NoteCreate, 
    db: sqlite3.Connection = Depends(get_db)
):
    # Проверка существования заметки
    cursor = db.cursor()
    cursor.execute("SELECT * FROM notes WHERE id = ?", (note_id,))
    existing_note = cursor.fetchone()
    
    if existing_note is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Заметка не найдена"
        )
    
    # Обновление заметки
    cursor.execute('''
        UPDATE notes 
        SET title = ?, content = ?, category = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    ''', (note.title, note.content, note.category, note_id))
    db.commit()
    
    # Получение обновленной заметки
    cursor.execute("SELECT * FROM notes WHERE id = ?", (note_id,))
    updated_note = cursor.fetchone()
    
    return dict(updated_note)

# PATCH - Частичное обновление заметки
@app.patch("/notes/{note_id}", response_model=Note)
def partial_update_note(
    note_id: int, 
    note_update: NoteUpdate, 
    db: sqlite3.Connection = Depends(get_db)
):
    # Проверка существования заметки
    cursor = db.cursor()
    cursor.execute("SELECT * FROM notes WHERE id = ?", (note_id,))
    existing_note = cursor.fetchone()
    
    if existing_note is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Заметка не найдена"
        )
    
    # Обновление только переданных полей
    update_fields = []
    update_values = []
    
    if note_update.title is not None:
        update_fields.append("title = ?")
        update_values.append(note_update.title)
    
    if note_update.content is not None:
        update_fields.append("content = ?")
        update_values.append(note_update.content)
    
    if note_update.category is not None:
        update_fields.append("category = ?")
        update_values.append(note_update.category)
    
    if note_update.is_completed is not None:
        update_fields.append("is_completed = ?")
        update_values.append(note_update.is_completed)
    
    if update_fields:
        update_fields.append("updated_at = CURRENT_TIMESTAMP")
        update_values.append(note_id)
        
        query = f"UPDATE notes SET {', '.join(update_fields)} WHERE id = ?"
        cursor.execute(query, update_values)
        db.commit()
    
    # Получение обновленной заметки
    cursor.execute("SELECT * FROM notes WHERE id = ?", (note_id,))
    updated_note = cursor.fetchone()
    
    return dict(updated_note)

# DELETE - Удаление заметки
@app.delete("/notes/{note_id}")
def delete_note(note_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM notes WHERE id = ?", (note_id,))
    note = cursor.fetchone()
    
    if note is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Заметка не найдена"
        )
    
    cursor.execute("DELETE FROM notes WHERE id = ?", (note_id,))
    db.commit()
    
    return {"message": "Заметка успешно удалена"}`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Реализованные операции:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /notes/</code> - создание заметки</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /notes/</code> - список заметок с фильтрацией</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /notes/{'{'}id{'}'}</code> - конкретная заметка</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">PUT /notes/id{'}'}</code> - полное обновление</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">PATCH /notes/{'{'}id{'}'}</code> - частичное обновление</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">DELETE /notes/{'{'}id{'}'}</code> - удаление заметки</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Особенности реализации:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Использование SQLite для хранения данных</li>
              <li>Обработка ошибок 404 Not Found</li>
              <li>Фильтрация и пагинация в списке</li>
              <li>Автоматические временные метки</li>
              <li>Частичное обновление через PATCH</li>
              <li>Управление подключениями через зависимости</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Расширенные возможности CRUD */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-cyan-400" />
          Расширенные возможности CRUD-операций
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Современные CRUD-операции могут включать дополнительные возможности:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Пагинация и сортировка</h4>
              <p className="text-gray-400 text-sm">Параметры для разбиения результатов на страницы и упорядочивания данных.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Фильтрация и поиск</h4>
              <p className="text-gray-400 text-sm">Параметры для отбора записей по критериям и поиска по содержимому.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Валидация и ограничения</h4>
              <p className="text-gray-400 text-sm">Проверка корректности данных и установка ограничений на операции.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Транзакции и согласованность</h4>
              <p className="text-gray-400 text-sm">Группировка операций для обеспечения целостности данных.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-red-400">5</span>
            </div>
            <div>
              <h4 className="font-bold text-red-300">Мягкое удаление</h4>
              <p className="text-gray-400 text-sm">Пометка записей как удаленных без фактического удаления из БД.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример мягкого удаления
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Добавление поля deleted_at в таблицу
ALTER TABLE notes ADD COLUMN deleted_at TIMESTAMP NULL;

# Мягкое удаление
@app.delete("/notes/{note_id}")
def soft_delete_note(note_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute(
        "UPDATE notes SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?", 
        (note_id,)
    )
    db.commit()
    
    if cursor.rowcount == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Заметка не найдена"
        )
    
    return {"message": "Заметка помечена как удаленная"}`}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 📊</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое CRUD-операции и как их реализовывать в FastAPI. Вы изучили основные HTTP-методы для создания, чтения, обновления и удаления данных, а также создали полноценный API с этими операциями.
              В следующем уроке мы рассмотрим работу с аутентификацией и авторизацией.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;