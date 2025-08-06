// src/data/courses/fastapi/lesson8/part1.jsx
import React from 'react';
import { Link, Search, Zap, FileText, Route, Hash, Filter } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Link className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔗 Урок 8: Объединение параметров пути и запроса</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с комбинированными параметрами в FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как комбинировать параметры пути и параметры запроса в одном маршруте для создания гибких и мощных API.
            </p>
          </div>
        </div>
      </div>

      {/* Комбинирование параметров */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-green-400" />
          Комбинирование параметров пути и запроса
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В FastAPI вы можете <span className="font-medium text-green-300">комбинировать параметры пути и параметры запроса</span> в одной функции обработчике. FastAPI автоматически различает их:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">Параметры пути</span> — обязательны, определяются в URL через фигурные скобки</li>
            <li><span className="font-medium">Параметры запроса</span> — определяются как обычные аргументы функции, могут быть обязательными или необязательными</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> В URL <code className="bg-gray-700 px-1.5 py-0.5 rounded">/users/123/posts?skip=0&limit=10</code> параметр <code className="bg-gray-700 px-1.5 py-0.5 rounded">123</code> — это параметр пути (user_id), а <code className="bg-gray-700 px-1.5 py-0.5 rounded">skip=0&limit=10</code> — параметры запроса.
            </p>
          </div>
        </div>
      </div>

      {/* Синтаксис комбинированных параметров */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Route className="w-5 h-5 text-purple-400" />
          Синтаксис комбинированных параметров
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            В функции обработчике параметры пути определяются в декораторе и сигнатуре функции, а параметры запроса — как обычные аргументы функции.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Базовый пример */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Hash className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Базовый пример комбинирования</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Пример функции, использующей и параметры пути, и параметры запроса:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/users/{user_id}/posts/")
def get_user_posts(user_id: int, skip: int = 0, limit: int = 10):
    return {
        "user_id": user_id,
        "skip": skip,
        "limit": limit
    }`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">user_id: int</code> — параметр пути (обязательный)</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">skip: int = 0</code> — параметр запроса (необязательный)</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">limit: int = 10</code> — параметр запроса (необязательный)</li>
            </ul>
          </div>

          {/* Сложный пример */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Filter className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Сложный пример с фильтрацией</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Более сложный пример с множественными параметрами:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/categories/{category_id}/products/")
def get_category_products(
    category_id: int,
    skip: int = 0,
    limit: int = 20,
    min_price: float = None,
    max_price: float = None,
    in_stock: bool = True
):
    return {
        "category_id": category_id,
        "skip": skip,
        "limit": limit,
        "min_price": min_price,
        "max_price": max_price,
        "in_stock": in_stock
    }`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Преимущества:</span> Максимальная гибкость в определении маршрутов и параметров.
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-orange-400" />
          Практический пример: API блога с комбинированными параметрами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим полноценный пример API блога, использующего комбинированные параметры:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI, HTTPException
from typing import List, Optional

app = FastAPI(title="API блога")

# Имитация базы данных
users_db = {
    1: {"name": "Анна", "email": "anna@example.com"},
    2: {"name": "Иван", "email": "ivan@example.com"}
}

posts_db = [
    {"id": 1, "title": "Первая статья", "content": "Содержание первой статьи", "author_id": 1, "published": True},
    {"id": 2, "title": "Вторая статья", "content": "Содержание второй статьи", "author_id": 1, "published": True},
    {"id": 3, "title": "Черновик", "content": "Содержание черновика", "author_id": 2, "published": False},
    {"id": 4, "title": "Технический пост", "content": "Содержание технического поста", "author_id": 2, "published": True}
]

# Получение информации о пользователе
@app.get("/users/{user_id}")
def get_user(user_id: int):
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    return users_db[user_id]

# Получение постов пользователя с пагинацией и фильтрацией
@app.get("/users/{user_id}/posts/")
def get_user_posts(
    user_id: int,
    skip: int = 0,
    limit: int = 10,
    published: Optional[bool] = None,
    q: Optional[str] = None
):
    # Проверяем существование пользователя
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    
    # Фильтруем посты по автору
    user_posts = [post for post in posts_db if post["author_id"] == user_id]
    
    # Фильтрация по статусу публикации
    if published is not None:
        user_posts = [post for post in user_posts if post["published"] == published]
    
    # Поиск по заголовку и содержанию
    if q:
        user_posts = [
            post for post in user_posts 
            if q.lower() in post["title"].lower() or q.lower() in post["content"].lower()
        ]
    
    # Пагинация
    paginated_posts = user_posts[skip : skip + limit]
    
    return {
        "user_id": user_id,
        "posts": paginated_posts,
        "total": len(user_posts),
        "skip": skip,
        "limit": limit
    }

# Получение конкретного поста пользователя
@app.get("/users/{user_id}/posts/{post_id}")
def get_user_post(user_id: int, post_id: int):
    # Проверяем существование пользователя
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    
    # Ищем пост
    for post in posts_db:
        if post["id"] == post_id and post["author_id"] == user_id:
            return post
    
    raise HTTPException(status_code=404, detail="Пост не найден")`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Примеры URL:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/1</code> - информация о пользователе</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/1/posts/</code> - все посты пользователя</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/1/posts/?skip=0&limit=5</code> - посты с пагинацией</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/1/posts/?published=true</code> - только опубликованные</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/1/posts/2</code> - конкретный пост</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Преимущества комбинирования:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Гибкие маршруты</li>
              <li>Мощная фильтрация</li>
              <li>Эффективная пагинация</li>
              <li>Интуитивная структура URL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Приоритеты и особенности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-purple-400" />
          Приоритеты и особенности комбинированных параметров
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При работе с комбинированными параметрами важно понимать некоторые особенности:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Приоритет параметров пути</h4>
              <p className="text-gray-400 text-sm">Параметры пути имеют приоритет над параметрами запроса с тем же именем.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Автоматическая валидация</h4>
              <p className="text-gray-400 text-sm">Все параметры автоматически валидируются в соответствии с их типами.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Читаемость URL</h4>
              <p className="text-gray-400 text-sm">Комбинированные параметры делают URL более информативными и структурированными.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Документация</h4>
              <p className="text-gray-400 text-sm">FastAPI автоматически генерирует документацию для всех типов параметров.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример с одинаковыми именами параметров
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/{item_id}")
def read_item(item_id: int, q: str, item_id_query: int = None):
    # item_id - параметр пути
    # item_id_query - параметр запроса (переименован для избежания конфликта)
    return {
        "path_item_id": item_id,
        "query_item_id": item_id_query,
        "q": q
    }`}</code></pre>
          </div>
        </div>
      </div>

      {/* Распространенные паттерны использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Search className="w-5 h-5 text-cyan-400" />
          Распространенные паттерны использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот несколько распространенных паттернов использования комбинированных параметров:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Пагинация для ресурсов</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/{`{user_id}`}/posts/?skip=0&limit=10</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /categories/{`{cat_id}`}/products/?page=1&size=20</code></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Фильтрация и сортировка</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/{`{user_id}`}/orders/?status=pending&sort=date</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /products/?min_price=100&max_price=500&in_stock=true</code></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Поиск по связанным ресурсам</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /authors/{`{author_id}`}/books/?q=python&published=true</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/{`{user_id}`}/comments/?recent=true&limit=5</code></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Детализация и агрегация</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /reports/{`{report_id}`}/data/?start=2023-01-01&end=2023-12-31</code></li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /analytics/{`{metric_id}`}/?group_by=month&format=json</code></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Link className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🔗</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как комбинировать параметры пути и запроса в FastAPI. Вы узнали, как создавать гибкие и мощные API с интуитивной структурой URL.
              В следующем уроке мы рассмотрим работу с телом запроса (Request Body).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;