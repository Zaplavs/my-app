// src/data/courses/fastapi/lesson18/part1.jsx
import React from 'react';
import { Database, FileText, Code, Zap, Settings, Shield, Layout, GitBranch } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Layout className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🚀 Урок 18: Реализация блог-API</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание полноценного RESTful API для блог-платформы</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Объединить все изученные концепции FastAPI для создания полнофункционального API блога с базой данных, валидацией, обработкой ошибок и аутентификацией.
            </p>
          </div>
        </div>
      </div>

      {/* Что нужно реализовать */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-green-400" />
          Что нужно реализовать в блог-API?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В этом уроке мы создадим полноценное API блога, объединив все пройденные темы:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">Модели данных</span> — Pydantic и SQLAlchemy модели для всех сущностей</li>
            <li><span className="font-medium">Маршруты</span> — RESTful эндпоинты для пользователей, постов и комментариев</li>
            <li><span className="font-medium">Валидация</span> — проверка корректности входных данных</li>
            <li><span className="font-medium">Работа с БД</span> — подключение к SQLite/PostgreSQL и выполнение CRUD операций</li>
            <li><span className="font-medium">Обработка ошибок</span> — корректные HTTP статусы и сообщения</li>
            <li><span className="font-medium">Аутентификация</span> — базовая защита эндпоинтов</li>
            <li><span className="font-medium">Структура кода</span> — чистая архитектура приложения</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Результат:</span> Полнофункциональное API, готовое к использованию в реальных проектах.
            </p>
          </div>
        </div>
      </div>

      {/* Структура проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          Структура проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Для лучшей организации кода используем модульную структуру:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`blog-api/
├── app/
│   ├── __init__.py
│   ├── main.py                 # Точка входа приложения
│   ├── database.py             # Настройка подключения к БД
│   ├── models/                 # SQLAlchemy модели
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── post.py
│   │   └── comment.py
│   ├── schemas/                # Pydantic схемы
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── post.py
│   │   └── comment.py
│   ├── crud/                   # CRUD операции
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── post.py
│   │   └── comment.py
│   ├── api/                    # Маршруты API
│   │   ├── __init__.py
│   │   ├── routes/
│   │   │   ├── __init__.py
│   │   │   ├── users.py
│   │   │   ├── posts.py
│   │   │   └── comments.py
│   │   └── deps.py             # Зависимости
│   └── core/                   # Основные настройки
│       ├── __init__.py
│       ├── config.py
│       └── security.py
├── tests/                      # Тесты (опционально)
├── requirements.txt            # Зависимости
└── README.md                   # Документация`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Преимущества модульной структуры:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Четкое разделение ответственности</li>
              <li>Легкость поддержки и масштабирования</li>
              <li>Повторное использование кода</li>
              <li>Удобство тестирования</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Основные компоненты:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">models/</code> — ORM модели базы данных</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">schemas/</code> — Pydantic модели для валидации</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">crud/</code> — функции для работы с данными</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">api/</code> — маршруты и зависимости</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Основные компоненты API */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Основные компоненты API
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим ключевые компоненты, которые нужно реализовать:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Модели данных */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Модели данных (models/)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              SQLAlchemy модели для отображения таблиц базы данных:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# models/user.py
from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func
from app.database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    full_name = Column(String, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())`}</code></pre>
            </div>
          </div>

          {/* Схемы валидации */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Схемы валидации (schemas/)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Pydantic модели для валидации входных и выходных данных:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# schemas/user.py
from pydantic import BaseModel, EmailStr, constr
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    username: constr(min_length=3, max_length=50)
    email: EmailStr
    full_name: constr(max_length=100)

class UserCreate(UserBase):
    password: constr(min_length=8)

class UserUpdate(BaseModel):
    full_name: Optional[constr(max_length=100)] = None
    email: Optional[EmailStr] = None

class User(UserBase):
    id: int
    is_active: bool = True
    created_at: datetime
    updated_at: Optional[datetime] = None
    
    class Config:
        orm_mode = True`}</code></pre>
            </div>
          </div>

          {/* CRUD операции */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">3. CRUD операции (crud/)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Функции для работы с базой данных:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# crud/user.py
from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate
from app.core.security import get_password_hash

def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(User).offset(skip).limit(limit).all()

def create_user(db: Session, user: UserCreate):
    db_user = User(
        username=user.username,
        email=user.email,
        full_name=user.full_name,
        hashed_password=get_password_hash(user.password)
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user`}</code></pre>
            </div>
          </div>

          {/* Маршруты API */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">4. Маршруты API (api/routes/)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Эндпоинты для взаимодействия с API:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# api/routes/users.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/", response_model=schemas.User, status_code=status.HTTP_201_CREATED)
def create_user(
    *,
    db: Session = Depends(deps.get_db),
    user_in: schemas.UserCreate
):
    user = crud.user.get_user_by_email(db, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Пользователь с таким email уже существует"
        )
    user = crud.user.create_user(db, user_in=user_in)
    return user

@router.get("/{user_id}", response_model=schemas.User)
def read_user(
    *,
    db: Session = Depends(deps.get_db),
    user_id: int
):
    user = crud.user.get_user(db, user_id=user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Пользователь не найден"
        )
    return user`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Требования к реализации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layout className="w-5 h-5 text-yellow-400" />
          Требования к реализации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Ваше API должно соответствовать следующим требованиям:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Функциональные требования:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Полная реализация CRUD для пользователей, постов и комментариев</li>
              <li>Валидация всех входных данных</li>
              <li>Обработка ошибок с корректными HTTP статусами</li>
              <li>Пагинация для списков данных</li>
              <li>Фильтрация и сортировка данных</li>
              <li>Связи между сущностями (автор поста, комментарии к посту)</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Технические требования:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Использование SQLAlchemy для работы с БД</li>
              <li>Pydantic модели для валидации</li>
              <li>Зависимости для управления подключениями</li>
              <li>Модульная структура проекта</li>
              <li>Корректная обработка исключений</li>
              <li>Документация через Swagger UI и ReDoc</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Дополнительные возможности:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Базовая HTTP Basic Auth или JWT токены</li>
              <li>Поиск по содержимому постов и комментариев</li>
              <li>Управление статусом публикации постов</li>
              <li>Древовидные комментарии (ответы на комментарии)</li>
              <li>Логирование операций</li>
              <li>Тесты для основных функций</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Качество кода:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Чистая и читаемая структура</li>
              <li>Соблюдение PEP 8</li>
              <li>Комментарии к сложным участкам</li>
              <li>Обработка граничных случаев</li>
              <li>Эффективные запросы к БД</li>
              <li>Безопасность (защита от SQL-инъекций)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Минимальный набор эндпоинтов
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`USERS
├── POST   /users/              # Создание пользователя
├── GET    /users/              # Список пользователей
├── GET    /users/{id}          # Конкретный пользователь
├── PUT    /users/{id}          # Обновление пользователя
└── DELETE /users/{id}          # Удаление пользователя

POSTS
├── POST   /posts/              # Создание поста
├── GET    /posts/              # Список постов
├── GET    /posts/{id}          # Конкретный пост
├── PUT    /posts/{id}          # Обновление поста
├── DELETE /posts/{id}          # Удаление поста
├── GET    /posts/{id}/author   # Автор поста
└── GET    /posts/{id}/comments # Комментарии к посту

COMMENTS
├── POST   /posts/{post_id}/comments # Создание комментария
├── GET    /comments/{id}       # Конкретный комментарий
├── PUT    /comments/{id}        # Обновление комментария
├── DELETE /comments/{id}        # Удаление комментария
└── GET    /comments/{id}/author # Автор комментария`}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Layout className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🚀</h3>
            <p className="text-gray-300">
              Теперь у вас есть четкое понимание того, что нужно реализовать в полноценном API блога. В следующих частях урока вы создадите этот проект шаг за шагом, объединив все изученные технологии и подходы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;