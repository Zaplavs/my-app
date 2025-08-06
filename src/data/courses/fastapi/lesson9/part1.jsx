// src/data/courses/fastapi/lesson9/part1.jsx
import React from 'react';
import { Database, Code, FileText, Zap, Settings, CheckCircle } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📊 Урок 9: Создание моделей данных с помощью Pydantic</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Определение структуры и валидации данных в FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое Pydantic модели, как их создавать и использовать для определения структуры данных и автоматической валидации в FastAPI.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Pydantic? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          Что такое Pydantic?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Pydantic</span> — это библиотека для валидации данных и управления настройками в Python, основанная на аннотациях типов.
          </p>
          <p>
            В FastAPI Pydantic используется для:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">Определения моделей данных</span> (структур объектов)</li>
            <li><span className="font-medium">Автоматической валидации</span> входящих данных</li>
            <li><span className="font-medium">Сериализации</span> данных в JSON</li>
            <li><span className="font-medium">Генерации документации</span> API</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Преимущества:</span> Pydantic обеспечивает типобезопасность, автоматическую документацию и предотвращает множество ошибок на этапе разработки.
            </p>
          </div>
        </div>
      </div>

      {/* Создание моделей данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          Создание моделей данных с Pydantic
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Модели Pydantic определяются как классы, наследующиеся от <code className="bg-gray-700 px-1.5 py-0.5 rounded">BaseModel</code>. Они описывают структуру данных с помощью аннотаций типов Python.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Импорт и базовая модель */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Базовая модель Pydantic</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Создание простой модели данных:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">BaseModel</code> — базовый класс для всех моделей Pydantic</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">name: str</code> — обязательное поле типа string</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">description: str | None = None</code> — опциональное поле с значением по умолчанию</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">price: float</code> — обязательное поле типа float</li>
            </ul>
          </div>

          {/* Использование моделей в FastAPI */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Использование моделей в FastAPI</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Модели Pydantic используются для определения структуры тела запроса и ответа:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi import FastAPI
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

app = FastAPI()

@app.post("/items/")
def create_item(item: Item):
    return item`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Как это работает:</span> FastAPI автоматически валидирует входящие данные и создает экземпляр модели Item.
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества Pydantic моделей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-orange-400" />
          Преимущества Pydantic моделей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Использование Pydantic моделей дает множество преимуществ:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Автоматическая валидация</h4>
              <p className="text-gray-400 text-sm">Данные автоматически проверяются на соответствие типам и структуре.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Сериализация в JSON</h4>
              <p className="text-gray-400 text-sm">Модели автоматически преобразуются в JSON для ответов API.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Генерация документации</h4>
              <p className="text-gray-400 text-sm">Структура моделей отображается в автоматической документации Swagger UI и ReDoc.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Поддержка IDE</h4>
              <p className="text-gray-400 text-sm">IDE может лучше понимать структуру данных и предлагать автодополнение.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример автоматической валидации
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`# При отправке данных:
{
    "name": "Ноутбук",
    "price": "сто рублей"  # Ошибка! Должно быть число
}

# FastAPI автоматически вернет ошибку 422:
{
    "detail": [
        {
            "loc": ["body", "price"],
            "msg": "value is not a valid float",
            "type": "type_error.float"
        }
    ]
}`}</code></pre>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          Практический пример: API для управления пользователями
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим полноценный пример API с использованием Pydantic моделей:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="API управления пользователями")

# Модель для создания пользователя
class UserCreate(BaseModel):
    name: str
    email: str
    age: int
    is_active: bool = True

# Модель для обновления пользователя (все поля опциональны)
class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    age: Optional[int] = None
    is_active: Optional[bool] = None

# Модель для ответа (с дополнительными полями)
class UserResponse(UserCreate):
    id: int
    created_at: datetime

# Имитация базы данных
fake_users_db = []

# Создание пользователя
@app.post("/users/", response_model=UserResponse)
def create_user(user: UserCreate):
    new_user = UserResponse(
        id=len(fake_users_db) + 1,
        created_at=datetime.now(),
        **user.dict()
    )
    fake_users_db.append(new_user)
    return new_user

# Получение списка пользователей
@app.get("/users/", response_model=List[UserResponse])
def get_users(skip: int = 0, limit: int = 10):
    return fake_users_db[skip : skip + limit]

# Получение конкретного пользователя
@app.get("/users/{user_id}", response_model=UserResponse)
def get_user(user_id: int):
    for user in fake_users_db:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="Пользователь не найден")

# Обновление пользователя
@app.put("/users/{user_id}", response_model=UserResponse)
def update_user(user_id: int, user_update: UserUpdate):
    for user in fake_users_db:
        if user.id == user_id:
            # Обновляем только переданные поля
            update_data = user_update.dict(exclude_unset=True)
            for key, value in update_data.items():
                setattr(user, key, value)
            return user
    raise HTTPException(status_code=404, detail="Пользователь не найден")

# Удаление пользователя
@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    for i, user in enumerate(fake_users_db):
        if user.id == user_id:
            deleted_user = fake_users_db.pop(i)
            return {"message": "Пользователь удален", "user": deleted_user}
    raise HTTPException(status_code=404, detail="Пользователь не найден")`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Преимущества использования моделей:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Четкая структура данных</li>
              <li>Автоматическая валидация</li>
              <li>Генерация документации</li>
              <li>Типобезопасность</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Различные модели для разных целей:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">UserCreate</code> - для создания</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">UserUpdate</code> - для обновления</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">UserResponse</code> - для ответов</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Расширенные возможности Pydantic */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-yellow-400" />
          Расширенные возможности Pydantic
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Pydantic предоставляет множество дополнительных возможностей для работы с данными:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Валидация и ограничения</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">Field()</code> - для настройки полей</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">constr()</code> - ограничения для строк</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">conint()</code> - ограничения для чисел</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Специальные типы</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">EmailStr</code> - валидация email</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">HttpUrl</code> - валидация URL</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">PositiveInt</code> - положительные числа</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Наследование моделей</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Создание базовых моделей</li>
              <li>Расширение существующих моделей</li>
              <li>Переопределение полей</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Работа с данными</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">model.dict()</code> - преобразование в словарь</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">model.json()</code> - преобразование в JSON</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">exclude_unset=True</code> - исключение неустановленных полей</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример с расширенными возможностями
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`from pydantic import BaseModel, Field, EmailStr
from typing import Optional

class User(BaseModel):
    id: int
    name: str = Field(..., min_length=2, max_length=50)
    email: EmailStr
    age: int = Field(..., ge=0, le=150)
    bio: Optional[str] = Field(None, max_length=500)`}</code></pre>
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
              Теперь вы понимаете, как создавать модели данных с помощью Pydantic в FastAPI. Вы узнали, как определять структуру данных, использовать автоматическую валидацию и применять модели для различных целей.
              В следующем уроке мы рассмотрим работу с телом запроса (Request Body) с использованием Pydantic моделей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;