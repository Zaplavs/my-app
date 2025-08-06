// src/data/courses/fastapi/lesson17/part1.jsx
import React from 'react';
import { Database, FileText, Code, Zap, Settings, Shield, Layout, GitBranch, User, MessageSquare } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📐 Урок 17: Проектирование API для блога</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание архитектуры RESTful API для блог-платформы</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться проектировать RESTful API, определять сущности, эндпоинты и структуру данных для блог-платформы.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое проектирование API? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-green-400" />
          Что такое проектирование API?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Проектирование API</span> — это процесс планирования и определения структуры интерфейса прикладного программирования перед его реализацией.
          </p>
          <p>
            Хорошее проектирование API включает в себя:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">Определение сущностей</span> — основных объектов предметной области</li>
            <li><span className="font-medium">Проектирование эндпоинтов</span> — URL-адресов для взаимодействия с API</li>
            <li><span className="font-medium">Определение операций</span> — какие действия можно выполнять с сущностями</li>
            <li><span className="font-medium">Структурирование данных</span> — форматы запросов и ответов</li>
            <li><span className="font-medium">Соблюдение стандартов</span> — RESTful принципы и HTTP конвенции</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Перед тем как писать код, нужно определить, что такое "Пользователь", "Пост" и "Комментарий", какие у них свойства и как они связаны друг с другом.
            </p>
          </div>
        </div>
      </div>

      {/* Определение основных сущностей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-purple-400" />
          Определение основных сущностей блога
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Для блог-платформы определим три основные сущности:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* User сущность */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <User className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Пользователь (User)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Представляет зарегистрированного пользователя блога:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`User {
  id: integer          // Уникальный идентификатор
  username: string     // Имя пользователя
  email: string        // Email адрес
  full_name: string    // Полное имя
  is_active: boolean   // Активен ли пользователь
  created_at: datetime // Дата регистрации
  updated_at: datetime // Дата последнего обновления
}`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><span className="font-medium">Отношения:</span> Может быть автором множества постов и комментариев</li>
              <li><span className="font-medium">Уникальность:</span> username и email должны быть уникальны</li>
            </ul>
          </div>

          {/* Post сущность */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Пост (Post)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Представляет статью или запись в блоге:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`Post {
  id: integer          // Уникальный идентификатор
  title: string        // Заголовок поста
  content: string      // Содержание поста
  slug: string         // URL-friendly идентификатор
  author_id: integer   // Ссылка на автора (User)
  published: boolean   // Опубликован ли пост
  created_at: datetime // Дата создания
  updated_at: datetime // Дата последнего обновления
}`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><span className="font-medium">Отношения:</span> Принадлежит одному пользователю, может иметь множество комментариев</li>
              <li><span className="font-medium">Индексация:</span> slug должен быть уникальным для SEO</li>
            </ul>
          </div>

          {/* Comment сущность */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">3. Комментарий (Comment)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Представляет комментарий к посту:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`Comment {
  id: integer          // Уникальный идентификатор
  content: string      // Текст комментария
  author_id: integer   // Ссылка на автора (User)
  post_id: integer     // Ссылка на пост (Post)
  parent_id: integer   // Для древовидных комментариев (опционально)
  created_at: datetime // Дата создания
  updated_at: datetime // Дата последнего обновления
}`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><span className="font-medium">Отношения:</span> Принадлежит одному пользователю и одному посту</li>
              <li><span className="font-medium">Вложенность:</span> Может иметь родительский комментарий для ответов</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Проектирование эндпоинтов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Проектирование эндпоинтов API
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Эндпоинты API должны следовать RESTful принципам и интуитивно отражать структуру данных:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Эндпоинты для пользователей</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/</code> - список пользователей</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/{"{user_id}"}</code> - конкретный пользователь</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /users/</code> - создание пользователя</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">PUT /users/{"{user_id}"}</code> - обновление пользователя</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">DELETE /users/{"{user_id}"}</code> - удаление пользователя</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Эндпоинты для постов</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /posts/</code> - список постов</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /posts/{"{post_id}"}</code> - конкретный пост</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /posts/</code> - создание поста</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">PUT /posts/{"{post_id}"}</code> - обновление поста</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">DELETE /posts/{"{post_id}"}</code> - удаление поста</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /posts/{"{post_id}"}/author</code> - автор поста</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Эндпоинты для комментариев</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /posts/{"{post_id}"}/comments/</code> - комментарии к посту</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /comments/{"{comment_id}"}</code> - конкретный комментарий</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /posts/{"{post_id}"}/comments/</code> - создание комментария</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">PUT /comments/{"{comment_id}"}</code> - обновление комментария</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">DELETE /comments/{"{comment_id}"}</code> - удаление комментария</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /comments/{"{comment_id}"}/author</code> - автор комментария</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Принципы RESTful дизайна
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-gray-800 rounded text-sm">
              <h5 className="font-bold text-green-300 mb-2">Хорошо:</h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Использование существительных во множественном числе</li>
                <li>Соблюдение иерархии ресурсов</li>
                <li>Согласованное именование</li>
                <li>Использование стандартных HTTP методов</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-800 rounded text-sm">
              <h5 className="font-bold text-red-300 mb-2">Плохо:</h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Использование глаголов в URL (<code className="bg-gray-700 px-1.5 py-0.5 rounded">/getPost</code>)</li>
                <li>Смешивание стилей именования</li>
                <li>Избыточная вложенность ресурсов</li>
                <li>Несогласованные эндпоинты</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Структура моделей данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-yellow-400" />
          Структура моделей данных для блога
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Определим структуру Pydantic моделей для каждой сущности с учетом различных сценариев использования:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Модели пользователя</h3>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`// Создание пользователя
class UserCreate(BaseModel):
    username: constr(min_length=3, max_length=50)
    email: EmailStr
    full_name: constr(max_length=100)
    password: constr(min_length=8)

// Обновление пользователя
class UserUpdate(BaseModel):
    full_name: Optional[constr(max_length=100)] = None
    email: Optional[EmailStr] = None

// Ответ пользователя (без пароля)
class User(BaseModel):
    id: int
    username: str
    email: str
    full_name: str
    is_active: bool = True
    created_at: datetime
    updated_at: datetime`}</code></pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Модели поста</h3>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`// Создание поста
class PostCreate(BaseModel):
    title: constr(min_length=1, max_length=200)
    content: str
    slug: Optional[str] = None

// Обновление поста
class PostUpdate(BaseModel):
    title: Optional[constr(min_length=1, max_length=200)] = None
    content: Optional[str] = None
    published: Optional[bool] = None

// Ответ поста
class Post(PostCreate):
    id: int
    author_id: int
    published: bool = False
    created_at: datetime
    updated_at: datetime`}</code></pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Модели комментария</h3>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`// Создание комментария
class CommentCreate(BaseModel):
    content: constr(min_length=1, max_length=1000)
    parent_id: Optional[int] = None

// Обновление комментария
class CommentUpdate(BaseModel):
    content: Optional[constr(min_length=1, max_length=1000)] = None

// Ответ комментария
class Comment(BaseModel):
    id: int
    content: str
    author_id: int
    post_id: int
    parent_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime`}</code></pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Расширенные модели</h3>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`// Пост с автором и комментариями
class PostWithRelations(Post):
    author: User
    comments: List[Comment]

// Комментарий с автором
class CommentWithAuthor(Comment):
    author: User`}</code></pre>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-cyan-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            Валидация и ограничения
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`from pydantic import BaseModel, Field, EmailStr, constr
from typing import List, Optional
from datetime import datetime

// Примеры ограничений
class UserCreate(BaseModel):
    username: constr(
        min_length=3, 
        max_length=50, 
        pattern=r'^[a-zA-Z0-9_]+$'
    ) = Field(
        ..., 
        description="Имя пользователя (только буквы, цифры, подчеркивание)"
    )
    email: EmailStr = Field(..., description="Email пользователя")
    password: constr(min_length=8) = Field(
        ..., 
        description="Пароль (минимум 8 символов)"
    )`}</code></pre>
          </div>
        </div>
      </div>

      {/* Практический пример архитектуры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-red-400" />
          Практический пример: Архитектура API блога
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим полную архитектуру API блога с учетом всех аспектов проектирования:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`// ==================== МОДЕЛИ ДАННЫХ ====================
from pydantic import BaseModel, Field, EmailStr, constr
from typing import List, Optional
from datetime import datetime

// --- ПОЛЬЗОВАТЕЛИ ---
class UserCreate(BaseModel):
    username: constr(min_length=3, max_length=50)
    email: EmailStr
    full_name: constr(max_length=100)
    password: constr(min_length=8)

class UserUpdate(BaseModel):
    full_name: Optional[constr(max_length=100)] = None
    email: Optional[EmailStr] = None

class User(BaseModel):
    id: int
    username: str
    email: str
    full_name: str
    is_active: bool = True
    created_at: datetime
    updated_at: datetime

// --- ПОСТЫ ---
class PostCreate(BaseModel):
    title: constr(min_length=1, max_length=200)
    content: str
    published: bool = False

class PostUpdate(BaseModel):
    title: Optional[constr(min_length=1, max_length=200)] = None
    content: Optional[str] = None
    published: Optional[bool] = None

class Post(PostCreate):
    id: int
    author_id: int
    created_at: datetime
    updated_at: datetime

// --- КОММЕНТАРИИ ---
class CommentCreate(BaseModel):
    content: constr(min_length=1, max_length=1000)
    parent_id: Optional[int] = None

class CommentUpdate(BaseModel):
    content: Optional[constr(min_length=1, max_length=1000)] = None

class Comment(BaseModel):
    id: int
    content: str
    author_id: int
    post_id: int
    parent_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime

// --- РАСШИРЕННЫЕ МОДЕЛИ ---
class PostWithAuthorAndComments(Post):
    author: User
    comments: List[Comment]

class CommentWithAuthor(Comment):
    author: User

// ==================== ЭНДПОИНТЫ API ====================
/*
USERS
├── GET    /users/               // Список пользователей
├── POST   /users/               // Создание пользователя
├── GET    /users/{'{user_id}'}      // Конкретный пользователь
├── PUT    /users/{'{user_id}'}      // Обновление пользователя
├── DELETE /users/{'{user_id}'}      // Удаление пользователя
└── GET    /users/{'{user_id}'}/posts // Посты пользователя

POSTS
├── GET    /posts/               // Список постов
├── POST   /posts/               // Создание поста
├── GET    /posts/{'{post_id}'}      // Конкретный пост
├── PUT    /posts/{'{post_id}'}      // Обновление поста
├── DELETE /posts/{'{post_id}'}      // Удаление поста
├── GET    /posts/{'{post_id}'}/author // Автор поста
└── GET    /posts/{'{post_id}'}/comments // Комментарии к посту

COMMENTS
├── POST   /posts/{'{post_id}'}/comments // Создание комментария
├── GET    /comments/{'{comment_id}'} // Конкретный комментарий
├── PUT    /comments/{'{comment_id}'} // Обновление комментария
├── DELETE /comments/{'{comment_id}'} // Удаление комментария
└── GET    /comments/{'{comment_id}'}/author // Автор комментария
*/`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">RESTful принципы:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Использование существительных</li>
              <li>HTTP методы для операций</li>
              <li>Иерархическая структура</li>
              <li>Состояние передается в теле</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Пагинация и фильтрация:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">?skip=0&limit=20</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">?published=true</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">?author_id=1</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">?search=query</code></li>
            </ul>
          </div>
          <div className="p-3 bg-purple-900/20 border border-purple-700/30 rounded">
            <p className="font-medium text-purple-300">Коды состояния:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>200 - Успешно</li>
              <li>201 - Создано</li>
              <li>400 - Ошибка запроса</li>
              <li>404 - Не найдено</li>
              <li>409 - Конфликт</li>
            </ul>
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
            <h3 className="font-bold text-white mb-2">Отлично! 📐</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как проектировать RESTful API для блог-платформы. Вы научились определять сущности, проектировать эндпоинты и структурировать модели данных.
              В следующем уроке мы реализуем спроектированное API с помощью FastAPI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;