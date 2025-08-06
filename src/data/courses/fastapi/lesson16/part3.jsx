// src/data/courses/fastapi/lesson16/part3.jsx
import React, { useState } from 'react';
import { Shield, Play, CheckCircle, Terminal, Eye, Key, User } from 'lucide-react';

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
            <Shield className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Реализация HTTP Basic Auth в API задач</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить реализацию базовой аутентификации HTTP Basic Auth в FastAPI приложении.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание API с базовой аутентификацией */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте API управления заметками с HTTP Basic Auth
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение для управления заметками с защитой HTTP Basic Authentication.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл secure_notes_api.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">secure_notes_api.py</code>.</li>
              <li>Добавьте следующий код с импортом необходимых модулей и базовой структурой:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydantic import BaseModel
from typing import List, Optional
import secrets

app = FastAPI(title="API управления заметками с аутентификацией")

# Создание схемы безопасности
security = HTTPBasic()

# Имитация базы данных пользователей
users_db = {
    "admin": "adminpass",
    "user": "userpass",
    "guest": "guestpass"
}

# Pydantic модели
class NoteCreate(BaseModel):
    title: str
    content: str
    category: Optional[str] = None

class Note(NoteCreate):
    id: int
    owner: str

# Имитация базы данных заметок
fake_notes_db = [
    {"id": 1, "title": "Первая заметка", "content": "Содержание первой заметки", "category": "личное", "owner": "admin"},
    {"id": 2, "title": "Вторая заметка", "content": "Содержание второй заметки", "category": "работа", "owner": "user"}
]

# Функция аутентификации
def authenticate(credentials: HTTPBasicCredentials = Depends(security)):
    username = credentials.username
    password = credentials.password
    
    correct_password = users_db.get(username)
    if not correct_password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Пользователь не найден",
            headers={"WWW-Authenticate": "Basic"}
        )
    
    # Безопасное сравнение паролей
    if not secrets.compare_digest(password, correct_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверный пароль",
            headers={"WWW-Authenticate": "Basic"}
        )
    
    return username`}
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
            Я создал файл secure_notes_api.py с базовой структурой и аутентификацией
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Реализация защищенных эндпоинтов */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Добавьте защищенные эндпоинты CRUD для заметок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Добавьте эндпоинты для создания, чтения, обновления и удаления заметок с учетом прав доступа.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Реализуйте эндпоинты для создания и получения заметок
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте следующие эндпоинты в файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">secure_notes_api.py</code>:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.post("/notes/", response_model=Note, status_code=status.HTTP_201_CREATED)
def create_note(note: NoteCreate, username: str = Depends(authenticate)):
    new_note = {
        "id": len(fake_notes_db) + 1,
        "title": note.title,
        "content": note.content,
        "category": note.category,
        "owner": username
    }
    fake_notes_db.append(new_note)
    return new_note

@app.get("/notes/", response_model=List[Note])
def read_notes(username: str = Depends(authenticate)):
    # Пользователи видят только свои заметки
    user_notes = [note for note in fake_notes_db if note["owner"] == username]
    return user_notes

@app.get("/notes/{note_id}", response_model=Note)
def read_note(note_id: int, username: str = Depends(authenticate)):
    for note in fake_notes_db:
        if note["id"] == note_id:
            # Проверка прав доступа
            if note["owner"] != username:
                raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN,
                    detail="Доступ запрещен: вы не являетесь владельцем этой заметки"
                )
            return note
    
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Заметка не найдена"
    )`}</code></pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Реализуйте эндпоинты для обновления и удаления заметок
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте следующие эндпоинты в файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">secure_notes_api.py</code>:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.put("/notes/{note_id}", response_model=Note)
def update_note(note_id: int, note_update: NoteCreate, username: str = Depends(authenticate)):
    for note in fake_notes_db:
        if note["id"] == note_id:
            # Проверка прав доступа
            if note["owner"] != username:
                raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN,
                    detail="Доступ запрещен: вы не являетесь владельцем этой заметки"
                )
            
            # Обновление данных заметки
            note["title"] = note_update.title
            note["content"] = note_update.content
            note["category"] = note_update.category
            
            return note
    
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Заметка не найдена"
    )

@app.delete("/notes/{note_id}")
def delete_note(note_id: int, username: str = Depends(authenticate)):
    for i, note in enumerate(fake_notes_db):
        if note["id"] == note_id:
            # Проверка прав доступа
            if note["owner"] != username:
                raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN,
                    detail="Доступ запрещен: вы не являетесь владельцем этой заметки"
                )
            
            # Удаление заметки
            deleted_note = fake_notes_db.pop(i)
            return {"message": f"Заметка '{deleted_note['title']}' успешно удалена"}
    
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Заметка не найдена"
    )`}</code></pre>
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
            Я добавил защищенные эндпоинты CRUD для заметок
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Тестирование аутентификации */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Протестируйте аутентификацию и авторизацию
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Запустите сервер и протестируйте различные сценарии аутентификации и авторизации.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Протестируйте успешную аутентификацию:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Запустите сервер: <code className="bg-gray-700 px-1.5 py-0.5 rounded">uvicorn secure_notes_api:app --reload</code></li>
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Попробуйте выполнить любой защищенный эндпоинт (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /notes/</code>).</li>
              <li>В диалоге аутентификации введите логин <code className="bg-gray-700 px-1.5 py-0.5 rounded">admin</code> и пароль <code className="bg-gray-700 px-1.5 py-0.5 rounded">adminpass</code>.</li>
              <li>Проверьте, что запрос выполнен успешно.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Протестируйте ошибки аутентификации:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте выполнить защищенный эндпоинт с неправильным логином (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">wronguser</code>).</li>
              <li>Попробуйте выполнить защищенный эндпоинт с правильным логином, но неправильным паролем.</li>
              <li>Обратите внимание на коды ошибок 401 Unauthorized и сообщения.</li>
              <li>Проверьте заголовок <code className="bg-gray-700 px-1.5 py-0.5 rounded">WWW-Authenticate: Basic</code> в ответе.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Протестируйте ошибки авторизации:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте заметку от имени пользователя <code className="bg-gray-700 px-1.5 py-0.5 rounded">user</code>.</li>
              <li>Попробуйте получить эту заметку от имени пользователя <code className="bg-gray-700 px-1.5 py-0.5 rounded">admin</code>.</li>
              <li>Попробуйте обновить или удалить чужую заметку.</li>
              <li>Обратите внимание на код ошибки 403 Forbidden и сообщения о доступе.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Исследуйте документацию безопасности:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>В Swagger UI найдите раздел "Authorize" (замочек в правом верхнем углу).</li>
              <li>Нажмите на него и введите учетные данные.</li>
              <li>Проверьте, как меняется интерфейс после авторизации.</li>
              <li>Обратите внимание, что защищенные эндпоинты теперь показывают замочек.</li>
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
            Я протестировал аутентификацию, авторизацию и изучил документацию безопасности
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
            <h3 className="font-bold text-white mb-2">Отличная работа! 🔐</h3>
            <p className="text-gray-300">
              Теперь вы умеете реализовывать базовую аутентификацию HTTP Basic Auth в FastAPI! Вы создали защищенное API с проверкой личности пользователей и контролем доступа к ресурсам.
              В следующем уроке мы рассмотрим работу с middleware и перехватчиками запросов.
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