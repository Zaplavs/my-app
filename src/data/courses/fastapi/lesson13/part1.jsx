// src/data/courses/fastapi/lesson13/part1.jsx
import React from 'react';
import { Database, Settings, FileText, Code, Zap, Link, Server } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🗄️ Урок 13: Подключение к базе данных (SQLite пример)</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с базами данных в FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как подключать базы данных к FastAPI приложению, используя SQLite в качестве примера, и управлять подключениями через зависимости.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужна база данных? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Server className="w-5 h-5 text-green-400" />
          Зачем нужна база данных в API?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">База данных</span> — это организованная коллекция структурированной информации или данных, хранящаяся в электронном виде.
          </p>
          <p>
            В контексте API базы данных нужны для:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">Постоянного хранения данных</span> — данные не теряются при перезапуске сервера</li>
            <li><span className="font-medium">Управления большими объемами информации</span> — эффективное хранение и поиск</li>
            <li><span className="font-medium">Обеспечения целостности данных</span> — транзакции, ограничения</li>
            <li><span className="font-medium">Многопользовательского доступа</span> — одновременная работа нескольких клиентов</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Вместо хранения данных в памяти (как в предыдущих примерах), мы будем сохранять их в базе данных, чтобы они сохранялись между перезапусками приложения.
            </p>
          </div>
        </div>
      </div>

      {/* Работа с SQLite через sqlite3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-purple-400" />
          Работа с SQLite через встроенный модуль sqlite3
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            SQLite — это легковесная встраиваемая СУБД, которая не требует отдельного сервера. Она идеально подходит для обучения и небольших приложений.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Установка и настройка */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Установка и создание базы данных</h3>
            </div>
            <p className="text-gray-300 mb-3">
              SQLite встроен в Python, поэтому дополнительная установка не требуется. Создание таблицы:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`import sqlite3

# Создание подключения к базе данных
conn = sqlite3.connect('example.db')

# Создание курсора для выполнения SQL-запросов
cursor = conn.cursor()

# Создание таблицы
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
''')

# Сохранение изменений и закрытие соединения
conn.commit()
conn.close()`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">sqlite3.connect()</code> — создание подключения к БД</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">cursor.execute()</code> — выполнение SQL-запросов</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">conn.commit()</code> — сохранение изменений</li>
            </ul>
          </div>

          {/* Операции CRUD */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Основные операции CRUD</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Примеры основных операций с данными:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`import sqlite3

def get_db_connection():
    conn = sqlite3.connect('example.db')
    conn.row_factory = sqlite3.Row  # Позволяет обращаться к столбцам по имени
    return conn

# CREATE - Создание записи
def create_user(name: str, email: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        (name, email)
    )
    conn.commit()
    user_id = cursor.lastrowid
    conn.close()
    return user_id

# READ - Чтение записей
def get_users():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    conn.close()
    return [dict(user) for user in users]

def get_user(user_id: int):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    user = cursor.fetchone()
    conn.close()
    return dict(user) if user else None

# UPDATE - Обновление записи
def update_user(user_id: int, name: str = None, email: str = None):
    conn = get_db_connection()
    cursor = conn.cursor()
    if name:
        cursor.execute("UPDATE users SET name = ? WHERE id = ?", (name, user_id))
    if email:
        cursor.execute("UPDATE users SET email = ? WHERE id = ?", (email, user_id))
    conn.commit()
    conn.close()
    return cursor.rowcount > 0

# DELETE - Удаление записи
def delete_user(user_id: int):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM users WHERE id = ?", (user_id,))
    conn.commit()
    conn.close()
    return cursor.rowcount > 0`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Важно:</span> Используйте параметризованные запросы (?) для предотвращения SQL-инъекций.
            </div>
          </div>
        </div>
      </div>

      {/* Интеграция с FastAPI через зависимости */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Link className="w-5 h-5 text-orange-400" />
          Интеграция с FastAPI через зависимости
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В FastAPI подключение к базе данных лучше всего реализовывать через зависимости для управления жизненным циклом соединений.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Управление подключениями</h4>
              <p className="text-gray-400 text-sm">Зависимости обеспечивают открытие и закрытие соединений при каждом запросе.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Повторное использование кода</h4>
              <p className="text-gray-400 text-sm">Логика работы с БД инкапсулируется в зависимостях и переиспользуется.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Обработка ошибок</h4>
              <p className="text-gray-400 text-sm">Зависимости могут обрабатывать исключения при работе с БД.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример зависимости для подключения к SQLite
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`import sqlite3
from fastapi import Depends, FastAPI, HTTPException

app = FastAPI()

# Зависимость для получения подключения к БД
def get_db():
    conn = sqlite3.connect('example.db')
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

# Использование зависимости в маршруте
@app.get("/users/")
def read_users(db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return [dict(user) for user in users]`}</code></pre>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Практический пример: API для управления пользователями с SQLite
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте создадим полноценный пример API с подключением к SQLite базе данных:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import Depends, FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional
import sqlite3

app = FastAPI(title="API с SQLite")

# Pydantic модели
class UserCreate(BaseModel):
    name: str
    email: str

class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None

class User(BaseModel):
    id: int
    name: str
    email: str

# Инициализация базы данных
def init_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Вызываем инициализацию при запуске
init_db()

# Зависимость для получения подключения к БД
def get_db():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

# Эндпоинты API
@app.post("/users/", response_model=User, status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    
    # Проверка уникальности email
    cursor.execute("SELECT id FROM users WHERE email = ?", (user.email,))
    if cursor.fetchone():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Пользователь с таким email уже существует"
        )
    
    # Создание пользователя
    cursor.execute(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        (user.name, user.email)
    )
    db.commit()
    
    # Получение созданного пользователя
    user_id = cursor.lastrowid
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    created_user = cursor.fetchone()
    
    return dict(created_user)

@app.get("/users/", response_model=List[User])
def read_users(skip: int = 0, limit: int = 100, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users LIMIT ? OFFSET ?", (limit, skip))
    users = cursor.fetchall()
    return [dict(user) for user in users]

@app.get("/users/{user_id}", response_model=User)
def read_user(user_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    user = cursor.fetchone()
    
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Пользователь не найден"
        )
    
    return dict(user)

@app.put("/users/{user_id}", response_model=User)
def update_user(
    user_id: int, 
    user_update: UserUpdate, 
    db: sqlite3.Connection = Depends(get_db)
):
    # Проверка существования пользователя
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    existing_user = cursor.fetchone()
    
    if existing_user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Пользователь не найден"
        )
    
    # Обновление данных
    if user_update.name is not None:
        cursor.execute(
            "UPDATE users SET name = ? WHERE id = ?", 
            (user_update.name, user_id)
        )
    
    if user_update.email is not None:
        # Проверка уникальности нового email
        cursor.execute(
            "SELECT id FROM users WHERE email = ? AND id != ?", 
            (user_update.email, user_id)
        )
        if cursor.fetchone():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Пользователь с таким email уже существует"
            )
        
        cursor.execute(
            "UPDATE users SET email = ? WHERE id = ?", 
            (user_update.email, user_id)
        )
    
    db.commit()
    
    # Получение обновленного пользователя
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    updated_user = cursor.fetchone()
    
    return dict(updated_user)

@app.delete("/users/{user_id}")
def delete_user(user_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    user = cursor.fetchone()
    
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Пользователь не найден"
        )
    
    cursor.execute("DELETE FROM users WHERE id = ?", (user_id,))
    db.commit()
    
    return {"message": "Пользователь успешно удален"}`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Особенности примера:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Использование зависимости <code className="bg-gray-700 px-1.5 py-0.5 rounded">get_db</code> для управления подключениями</li>
              <li>Полная реализация CRUD операций</li>
              <li>Проверка уникальности email</li>
              <li>Обработка ошибок и HTTP статусов</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Преимущества подхода:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Постоянное хранение данных</li>
              <li>Автоматическое управление подключениями</li>
              <li>Защита от SQL-инъекций</li>
              <li>Четкая структура API</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Альтернативы и лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-yellow-400" />
          Альтернативы и лучшие практики
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хотя SQLite подходит для обучения, в production среде обычно используются более мощные решения:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">ORM решения</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">SQLAlchemy</span> - мощный ORM для Python</li>
              <li><span className="font-medium">Tortoise ORM</span> - асинхронный ORM</li>
              <li><span className="font-medium">Peewee</span> - простой и легковесный ORM</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Production СУБД</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">PostgreSQL</span> - мощная open-source СУБД</li>
              <li><span className="font-medium">MySQL</span> - популярная реляционная СУБД</li>
              <li><span className="font-medium">MongoDB</span> - NoSQL документоориентированная БД</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Лучшие практики</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Использование пулов соединений</li>
              <li>Обработка транзакций</li>
              <li>Миграции баз данных</li>
              <li>Резервное копирование</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Пример с SQLAlchemy</h3>
            <div className="bg-gray-800 p-2 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300 text-xs"><code>{`# Установка: pip install sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker`}</code></pre>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример использования пула соединений
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Создание движка с пулом соединений
engine = create_engine(
    "sqlite:///./users.db",
    connect_args={"check_same_thread": False},
    pool_size=10,
    max_overflow=20
)

# Создание фабрики сессий
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Зависимость для получения сессии
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()`}</code></pre>
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
            <h3 className="font-bold text-white mb-2">Отлично! 🗄️</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как подключать базы данных к FastAPI приложению. Вы узнали о работе с SQLite через встроенный модуль sqlite3, интеграции с FastAPI через зависимости и лучших практиках управления подключениями.
              В следующем уроке мы рассмотрим работу с асинхронными базами данных.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;