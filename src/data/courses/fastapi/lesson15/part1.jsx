// src/data/courses/fastapi/lesson15/part1.jsx
import React from 'react';
import { AlertTriangle, FileText, Code, Zap, Settings, Shield, XCircle, CheckCircle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">⚠️ Урок 15: Обработка ошибок и исключений</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Корректная обработка ошибок в FastAPI приложениях</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как правильно обрабатывать ошибки и исключения в FastAPI, использовать HTTPException и возвращать осмысленные сообщения об ошибках клиентам.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужна обработка ошибок? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-green-400" />
          Зачем нужна обработка ошибок?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Обработка ошибок</span> — это процесс перехвата и корректной реакции на исключительные ситуации, возникающие во время выполнения программы.
          </p>
          <p>
            В контексте API обработка ошибок важна для:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">Улучшения пользовательского опыта</span> — понятные сообщения вместо криптичных ошибок</li>
            <li><span className="font-medium">Отладки и мониторинга</span> — логирование ошибок для анализа</li>
            <li><span className="font-medium">Безопасности</span> — предотвращение раскрытия внутренней информации</li>
            <li><span className="font-medium">Поддержки стандартов</span> — соблюдение HTTP стандартов и соглашений</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Вместо "Internal Server Error 500" пользователь получает "Пользователь с таким email уже существует" с кодом 400.
            </p>
          </div>
        </div>
      </div>

      {/* HTTPException в FastAPI */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <XCircle className="w-5 h-5 text-purple-400" />
          HTTPException в FastAPI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            FastAPI предоставляет специальный класс <code className="bg-gray-700 px-1.5 py-0.5 rounded">HTTPException</code> для генерации HTTP ошибок с правильными статус кодами и сообщениями.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Базовое использование */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Базовое использование HTTPException</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Простой пример выброса HTTP исключения:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.get("/items/{item_id}")
def read_item(item_id: int):
    if item_id < 1:
        raise HTTPException(
            status_code=400, 
            detail="ID элемента должен быть положительным числом"
        )
    
    # Логика получения элемента
    item = get_item_from_database(item_id)
    if item is None:
        raise HTTPException(
            status_code=404, 
            detail="Элемент не найден"
        )
    
    return item`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">status_code</code> — HTTP статус код ошибки</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">detail</code> — описание ошибки для клиента</li>
            </ul>
          </div>

          {/* Расширенное использование */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Расширенное использование с заголовками</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Добавление заголовков к HTTP исключению:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/{item_id}")
def read_item(item_id: int):
    if item_id == 0:
        raise HTTPException(
            status_code=401,
            detail="Требуется аутентификация",
            headers={"WWW-Authenticate": "Bearer"}
        )
    
    # Остальная логика...
    return item`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Заголовки:</span> Могут содержать дополнительную информацию, например, требования к аутентификации.
            </div>
          </div>
        </div>
      </div>

      {/* Распространенные HTTP статус коды */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-orange-400" />
          Распространенные HTTP статус коды для ошибок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            FastAPI поддерживает все стандартные HTTP статус коды. Вот наиболее часто используемые:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Клиентские ошибки (4xx)
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-mono bg-red-900/30 text-red-300 px-2 py-0.5 rounded flex-shrink-0">400</span>
                <span>Bad Request - Некорректный запрос</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono bg-red-900/30 text-red-300 px-2 py-0.5 rounded flex-shrink-0">401</span>
                <span>Unauthorized - Требуется аутентификация</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono bg-red-900/30 text-red-300 px-2 py-0.5 rounded flex-shrink-0">403</span>
                <span>Forbidden - Доступ запрещен</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono bg-red-900/30 text-red-300 px-2 py-0.5 rounded flex-shrink-0">404</span>
                <span>Not Found - Ресурс не найден</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono bg-red-900/30 text-red-300 px-2 py-0.5 rounded flex-shrink-0">409</span>
                <span>Conflict - Конфликт запроса</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono bg-red-900/30 text-red-300 px-2 py-0.5 rounded flex-shrink-0">422</span>
                <span>Unprocessable Entity - Ошибка валидации</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Серверные ошибки (5xx)
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-mono bg-yellow-900/30 text-yellow-300 px-2 py-0.5 rounded flex-shrink-0">500</span>
                <span>Internal Server Error - Внутренняя ошибка сервера</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono bg-yellow-900/30 text-yellow-300 px-2 py-0.5 rounded flex-shrink-0">502</span>
                <span>Bad Gateway - Ошибка шлюза</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono bg-yellow-900/30 text-yellow-300 px-2 py-0.5 rounded flex-shrink-0">503</span>
                <span>Service Unavailable - Сервис недоступен</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono bg-yellow-900/30 text-yellow-300 px-2 py-0.5 rounded flex-shrink-0">504</span>
                <span>Gateway Timeout - Таймаут шлюза</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Использование статус кодов из модуля status
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi import FastAPI, HTTPException, status

@app.get("/items/{item_id}")
def read_item(item_id: int):
    if item_id < 1:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="ID должен быть положительным"
        )
    # ...`}</code></pre>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          Практический пример: API управления пользователями с обработкой ошибок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим полноценный пример API с комплексной обработкой ошибок:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI, HTTPException, status, Depends
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import sqlite3
import re

app = FastAPI(title="API управления пользователями с обработкой ошибок")

# Pydantic модели
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    age: int

class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    age: Optional[int] = None

class User(UserCreate):
    id: int

# Имитация базы данных
fake_users_db = {}

# Вспомогательные функции
def get_user_or_404(user_id: int):
    """Получить пользователя или выбросить 404"""
    user = fake_users_db.get(user_id)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Пользователь с ID {user_id} не найден"
        )
    return user

def validate_email_not_exists(email: str):
    """Проверить, что email не занят"""
    for user in fake_users_db.values():
        if user["email"] == email:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Пользователь с таким email уже существует"
            )

def validate_age(age: int):
    """Проверить корректность возраста"""
    if age < 0 or age > 150:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Возраст должен быть от 0 до 150 лет"
        )

# Эндпоинты API
@app.post("/users/", response_model=User, status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate):
    # Проверка возраста
    validate_age(user.age)
    
    # Проверка уникальности email
    validate_email_not_exists(user.email)
    
    # Создание пользователя
    user_id = len(fake_users_db) + 1
    new_user = {
        "id": user_id,
        "name": user.name,
        "email": user.email,
        "age": user.age
    }
    fake_users_db[user_id] = new_user
    
    return new_user

@app.get("/users/", response_model=List[User])
def read_users(skip: int = 0, limit: int = 100):
    # Проверка параметров пагинации
    if skip < 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Параметр skip не может быть отрицательным"
        )
    
    if limit < 1 or limit > 1000:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Параметр limit должен быть от 1 до 1000"
        )
    
    # Получение списка пользователей
    users = list(fake_users_db.values())[skip : skip + limit]
    return users

@app.get("/users/{user_id}", response_model=User)
def read_user(user_id: int):
    # Проверка ID
    if user_id < 1:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="ID пользователя должен быть положительным числом"
        )
    
    # Получение пользователя или 404
    return get_user_or_404(user_id)

@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, user_update: UserUpdate):
    # Проверка ID
    if user_id < 1:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="ID пользователя должен быть положительным числом"
        )
    
    # Получение существующего пользователя
    existing_user = get_user_or_404(user_id)
    
    # Проверка уникальности email при изменении
    if user_update.email and user_update.email != existing_user["email"]:
        validate_email_not_exists(user_update.email)
    
    # Проверка возраста при изменении
    if user_update.age is not None:
        validate_age(user_update.age)
    
    # Обновление данных
    if user_update.name is not None:
        existing_user["name"] = user_update.name
    
    if user_update.email is not None:
        existing_user["email"] = user_update.email
    
    if user_update.age is not None:
        existing_user["age"] = user_update.age
    
    return existing_user

@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    # Проверка ID
    if user_id < 1:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="ID пользователя должен быть положительным числом"
        )
    
    # Получение пользователя
    user = get_user_or_404(user_id)
    
    # Удаление пользователя
    del fake_users_db[user_id]
    
    return {"message": f"Пользователь {user['name']} успешно удален"}`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Обработанные ошибки:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>400 Bad Request - некорректные параметры</li>
              <li>404 Not Found - пользователь не найден</li>
              <li>409 Conflict - email уже существует</li>
              <li>Валидация возраста и параметров пагинации</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Лучшие практики:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Централизованная проверка условий</li>
              <li>Осмысленные сообщения об ошибках</li>
              <li>Использование стандартных статус кодов</li>
              <li>Вспомогательные функции для повторного кода</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Обработка исключений на уровне приложения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-yellow-400" />
          Глобальная обработка исключений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            FastAPI позволяет регистрировать обработчики исключений на уровне всего приложения:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Обработчики исключений</h4>
              <p className="text-gray-400 text-sm">Перехватывают исключения и возвращают кастомные ответы.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Логирование ошибок</h4>
              <p className="text-gray-400 text-sm">Автоматическое логирование исключений для последующего анализа.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Кастомные исключения</h4>
              <p className="text-gray-400 text-sm">Создание собственных классов исключений для специфичных ситуаций.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример глобального обработчика исключений
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

app = FastAPI()

# Обработчик валидационных ошибок
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=422,
        content={
            "detail": "Ошибка валидации данных",
            "errors": exc.errors()
        }
    )

# Обработчик общих исключений
@app.exception_handler(Exception)
async def general_exception_handler(request: Request, exc: Exception):
    # Здесь можно добавить логирование
    print(f"Необработанное исключение: {exc}")
    
    return JSONResponse(
        status_code=500,
        content={"detail": "Внутренняя ошибка сервера"}
    )`}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! ⚠️</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как правильно обрабатывать ошибки и исключения в FastAPI. Вы узнали о HTTPException, стандартных статус кодах, глобальной обработке исключений и лучших практиках создания осмысленных сообщений об ошибках.
              В следующем уроке мы рассмотрим работу с middleware и перехватчиками запросов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;