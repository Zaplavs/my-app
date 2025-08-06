// src/data/courses/fastapi/lesson6/part1.jsx
import React from 'react';
import { Link, Route, Hash, Key, Zap, FileText } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔗 Урок 6: Параметры пути (Path Parameters)</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с динамическими частями URL в FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое параметры пути, как их определять и использовать в FastAPI для создания динамических маршрутов.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое параметры пути? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Route className="w-5 h-5 text-green-400" />
          Что такое параметры пути?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Параметры пути</span> (Path Parameters) — это переменные части URL, которые позволяют создавать динамические маршруты для работы с конкретными ресурсами.
          </p>
          <p>
            Они используются, когда вам нужно получить доступ к определенному ресурсу по его идентификатору или другому уникальному значению.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> В URL <code className="bg-gray-700 px-1.5 py-0.5 rounded">/users/123</code> значение <code className="bg-gray-700 px-1.5 py-0.5 rounded">123</code> является параметром пути, который указывает на конкретного пользователя.
            </p>
          </div>
        </div>
      </div>

      {/* Определение параметров пути в FastAPI */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Key className="w-5 h-5 text-purple-400" />
          Определение параметров пути в FastAPI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            В FastAPI параметры пути определяются с помощью <span className="font-medium text-purple-300">фигурных скобок</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'{параметр}'}</code> в пути маршрута.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Базовый синтаксис */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Hash className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Базовый синтаксис</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Параметры пути определяются в декораторе маршрута:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/{item_id}")
def read_item(item_id):
    return {"item_id": item_id}`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">{'{item_id}'}</code> — определение параметра пути</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">item_id</code> — имя параметра в функции</li>
              <li>Значение из URL автоматически передается в функцию</li>
            </ul>
          </div>

          {/* Типизация параметров */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Типизация параметров</h3>
            </div>
            <p className="text-gray-300 mb-3">
              FastAPI позволяет указывать типы данных для параметров пути:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Преимущества:</span> Автоматическая проверка типов, преобразование данных и документация.
            </div>
          </div>

          {/* Множественные параметры */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Link className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-300">3. Множественные параметры пути</h3>
            </div>
            <p className="text-gray-300 mb-3">
              В одном маршруте можно определить несколько параметров пути:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/users/{user_id}/items/{item_id}")
def read_user_item(user_id: int, item_id: int):
    return {"user_id": user_id, "item_id": item_id}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества типизации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Преимущества типизации параметров пути
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Указание типов данных для параметров пути дает несколько важных преимуществ:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Автоматическая валидация</h4>
              <p className="text-gray-400 text-sm">FastAPI автоматически проверяет, что значение соответствует указанному типу.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Преобразование типов</h4>
              <p className="text-gray-400 text-sm">Значения автоматически преобразуются из строк в указанный тип данных.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Улучшенная документация</h4>
              <p className="text-gray-400 text-sm">Типы отображаются в автоматической документации Swagger UI и ReDoc.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Поддержка IDE</h4>
              <p className="text-gray-400 text-sm">IDE может лучше понимать код и предлагать автодополнение.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример с валидацией
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}`}</code></pre>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ <span className="font-medium">Правильный запрос:</span> /items/5 → item_id = 5 (int)
            </div>
            <div className="p-2 bg-red-900/20 border border-red-700/30 rounded text-red-300 text-xs">
              ❌ <span className="font-medium">Ошибка:</span> /items/abc → HTTP 422 (Validation Error)
            </div>
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
            Давайте рассмотрим полноценный пример API с использованием параметров пути:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI, HTTPException

app = FastAPI()

# Имитация базы данных
users_db = {
    1: {"name": "Анна", "email": "anna@example.com", "age": 28},
    2: {"name": "Иван", "email": "ivan@example.com", "age": 32},
    3: {"name": "Мария", "email": "maria@example.com", "age": 25}
}

# Получение списка всех пользователей
@app.get("/users")
def get_users():
    return users_db

# Получение конкретного пользователя по ID
@app.get("/users/{user_id}")
def get_user(user_id: int):
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    return users_db[user_id]

# Получение возраста пользователя
@app.get("/users/{user_id}/age")
def get_user_age(user_id: int):
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    return {"user_id": user_id, "age": users_db[user_id]["age"]}

# Получение пользователя с фильтрацией по категории
@app.get("/users/{user_id}/category/{category}")
def get_user_with_category(user_id: int, category: str):
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    
    user = users_db[user_id]
    if category == "basic":
        return {"name": user["name"]}
    elif category == "full":
        return user
    else:
        return {"message": "Неизвестная категория"}`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Примеры URL:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users</code> - все пользователи</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/1</code> - пользователь с ID=1</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/2/age</code> - возраст пользователя 2</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Преимущества:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Динамические маршруты</li>
              <li>Типобезопасность</li>
              <li>Автоматическая валидация</li>
              <li>Читаемые URL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Распространенные типы данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Key className="w-5 h-5 text-yellow-400" />
          Распространенные типы данных для параметров пути
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            FastAPI поддерживает различные типы данных для параметров пути:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Числовые типы</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">item_id: int</code> - целые числа</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">price: float</code> - числа с плавающей точкой</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Строковые типы</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">username: str</code> - строки</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">category: str</code> - категории</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">UUID</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">user_id: UUID</code> - универсальные уникальные идентификаторы</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Булевы значения</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">active: bool</code> - true/false</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример с различными типами
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/{item_id}/users/{user_id}")
def read_item_user(item_id: int, user_id: str):
    return {"item_id": item_id, "user_id": user_id}`}</code></pre>
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
              Теперь вы понимаете, как работают параметры пути в FastAPI. Вы узнали, как определять их, использовать типизацию и создавать динамические маршруты.
              В следующем уроке мы рассмотрим параметры запроса (Query Parameters).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;