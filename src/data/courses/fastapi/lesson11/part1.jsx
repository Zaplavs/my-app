// src/data/courses/fastapi/lesson11/part1.jsx
import React from 'react';
import { Shield, Settings, FileText, Code, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Shield className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛡️ Урок 11: Валидация данных и ограничения полей</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Обеспечение качества данных с помощью Pydantic в FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как добавлять ограничения к полям Pydantic моделей для автоматической валидации данных в FastAPI.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужна валидация данных? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-green-400" />
          Зачем нужна валидация данных?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Валидация данных</span> — это процесс проверки соответствия входных данных определенным правилам и ограничениям.
          </p>
          <p>
            В контексте API валидация данных важна для:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">Предотвращения ошибок</span> — защита от некорректных данных</li>
            <li><span className="font-medium">Безопасности</span> — защита от вредоносных данных</li>
            <li><span className="font-medium">Качества данных</span> — обеспечение целостности информации</li>
            <li><span className="font-medium">Улучшения UX</span> — понятные сообщения об ошибках</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Без валидации пользователь мог бы отправить отрицательную цену товара или пустое имя, что нарушает бизнес-логику приложения.
            </p>
          </div>
        </div>
      </div>

      {/* Ограничения полей с помощью Field */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-purple-400" />
          Ограничения полей с помощью Field
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Pydantic предоставляет функцию <code className="bg-gray-700 px-1.5 py-0.5 rounded">Field</code> для добавления ограничений к полям моделей.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Базовые ограничения */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Базовые ограничения строк</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Ограничения длины строк:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from pydantic import BaseModel, Field

class User(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    email: str = Field(..., max_length=100)`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">...</code> — обозначает обязательное поле</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">min_length=2</code> — минимальная длина строки</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">max_length=50</code> — максимальная длина строки</li>
            </ul>
          </div>

          {/* Числовые ограничения */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Числовые ограничения</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Ограничения для числовых значений:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`class Product(BaseModel):
    name: str
    price: float = Field(..., gt=0)  # greater than 0
    discount: float = Field(0, ge=0, le=100)  # greater or equal, less or equal
    quantity: int = Field(..., ge=0)`}</code></pre>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
                <span className="font-medium">gt=0</span> — больше 0
              </div>
              <div className="p-2 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-xs">
                <span className="font-medium">ge=0</span> — больше или равно 0
              </div>
              <div className="p-2 bg-cyan-900/20 border border-cyan-700/30 rounded text-cyan-300 text-xs">
                <span className="font-medium">lt=100</span> — меньше 100
              </div>
              <div className="p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-xs">
                <span className="font-medium">le=100</span> — меньше или равно 100
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Аннотации типов с ограничениями */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-orange-400" />
          Аннотации типов с ограничениями
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Современный способ определения ограничений — использование <code className="bg-gray-700 px-1.5 py-0.5 rounded">Annotated</code> из модуля <code className="bg-gray-700 px-1.5 py-0.5 rounded">typing</code>.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Annotated с Field */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">1. Annotated с Field</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Современный синтаксис с использованием аннотаций типов:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from pydantic import BaseModel, Field
from typing import Annotated

class User(BaseModel):
    name: Annotated[str, Field(min_length=2, max_length=50)]
    age: Annotated[int, Field(ge=0, le=150)]
    email: Annotated[str, Field(max_length=100)]`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-xs">
              ⚡ <span className="font-medium">Преимущества:</span> Более читаемый код, лучшая поддержка IDE, современный подход.
            </div>
          </div>

          {/* Сравнение подходов */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">2. Сравнение подходов</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="font-medium text-blue-300 mb-2">Традиционный подход:</h4>
                <pre className="whitespace-pre-wrap text-gray-300 text-sm"><code>{`name: str = Field(..., min_length=2, max_length=50)`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="font-medium text-green-300 mb-2">Современный подход:</h4>
                <pre className="whitespace-pre-wrap text-gray-300 text-sm"><code>{`name: Annotated[str, Field(min_length=2, max_length=50)]`}</code></pre>
              </div>
            </div>
            <div className="mt-3 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
              ✅ <span className="font-medium">Оба подхода работают одинаково</span>, но Annotated является предпочтительным в современном коде.
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-cyan-400" />
          Практический пример: API для управления пользователями с валидацией
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим полноценный пример API с расширенной валидацией данных:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field, EmailStr
from typing import Annotated, List, Optional
from datetime import datetime

app = FastAPI(title="API с расширенной валидацией")

# Модель для создания пользователя с валидацией
class UserCreate(BaseModel):
    # Имя с ограничениями длины
    name: Annotated[str, Field(min_length=2, max_length=50)]
    
    # Email с встроенной валидацией
    email: EmailStr
    
    # Возраст с числовыми ограничениями
    age: Annotated[int, Field(ge=13, le=120)]
    
    # Биография с ограничением длины
    bio: Annotated[Optional[str], Field(max_length=500)] = None
    
    # Пароль с ограничениями
    password: Annotated[str, Field(min_length=8, max_length=100)]

# Модель для обновления пользователя
class UserUpdate(BaseModel):
    name: Annotated[Optional[str], Field(min_length=2, max_length=50)] = None
    email: Optional[EmailStr] = None
    age: Annotated[Optional[int], Field(ge=13, le=120)] = None
    bio: Annotated[Optional[str], Field(max_length=500)] = None

# Модель для ответа
class User(BaseModel):
    id: int
    name: str
    email: str
    age: int
    bio: Optional[str] = None
    created_at: datetime

# Имитация базы данных
fake_users_db = []

# Создание пользователя
@app.post("/users/", response_model=User)
def create_user(user: UserCreate):
    # Проверка уникальности email
    for existing_user in fake_users_db:
        if existing_user.email == user.email:
            raise HTTPException(status_code=400, detail="Пользователь с таким email уже существует")
    
    new_user = User(
        id=len(fake_users_db) + 1,
        created_at=datetime.now(),
        **user.dict(exclude={'password'})  # Исключаем пароль из ответа
    )
    fake_users_db.append(new_user)
    return new_user

# Получение списка пользователей
@app.get("/users/", response_model=List[User])
def get_users(skip: int = 0, limit: Annotated[int, Field(le=100)] = 10):
    return fake_users_db[skip : skip + limit]

# Получение конкретного пользователя
@app.get("/users/{user_id}", response_model=User)
def get_user(user_id: int):
    for user in fake_users_db:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="Пользователь не найден")`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Ограничения в примере:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Имя: 2-50 символов</li>
              <li>Возраст: 13-120 лет</li>
              <li>Биография: максимум 500 символов</li>
              <li>Пароль: минимум 8 символов</li>
              <li>Лимит: максимум 100 записей</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Специальные типы:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">EmailStr</code> - валидация email</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">Annotated</code> - аннотации с ограничениями</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">Optional</code> - опциональные поля</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Расширенные возможности валидации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-yellow-400" />
          Расширенные возможности валидации Pydantic
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Pydantic предоставляет множество дополнительных возможностей для валидации:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Специализированные типы</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">EmailStr</code> - валидация email адресов</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">HttpUrl</code> - валидация URL</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">PositiveInt</code> - положительные целые числа</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">constr()</code> - строковые ограничения</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">conint()</code> - целочисленные ограничения</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Дополнительные параметры Field</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">description</code> - описание поля</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">example</code> - пример значения</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">regex</code> - регулярные выражения</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">multiple_of</code> - кратность числу</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">pattern</code> - шаблон для строк</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Примеры с описаниями</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">Field(description="Имя пользователя", example="Иван")</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">Field(regex=r"^\\+7\\d{10}$")</code> - российский телефон</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">Field(multiple_of=5)</code> - число кратное 5</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Пример с расширенными ограничениями</h3>
            <div className="bg-gray-800 p-2 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`class Product(BaseModel):
    name: Annotated[
        str, 
        Field(
            min_length=1, 
            max_length=100,
            description="Название продукта",
            example="Смартфон"
        )
    ]
    price: Annotated[
        float, 
        Field(
            gt=0,
            description="Цена продукта",
            example=25000.0
        )
    ]`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Shield className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🛡️</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как добавлять ограничения к полям Pydantic моделей для автоматической валидации данных в FastAPI. Вы узнали о различных способах определения ограничений и специализированных типах данных.
              В следующем уроке мы рассмотрим работу с формами и файлами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;