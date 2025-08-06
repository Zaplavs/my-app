// src/data/courses/fastapi/lesson7/part1.jsx
import React from 'react';
import { Search, Filter, Settings, Zap, FileText, Hash, Key } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Search className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔍 Урок 7: Параметры запроса (Query Parameters)</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с параметрами строки запроса в FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое параметры запроса, как их определять и использовать в FastAPI для фильтрации, пагинации и настройки ответов.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое параметры запроса? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Filter className="w-5 h-5 text-green-400" />
          Что такое параметры запроса?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Параметры запроса</span> (Query Parameters) — это пары ключ-значение, которые передаются в URL после знака вопроса <code className="bg-gray-700 px-1.5 py-0.5 rounded">?</code>.
          </p>
          <p>
            Они используются для фильтрации, сортировки, пагинации и других настроек запроса.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> В URL <code className="bg-gray-700 px-1.5 py-0.5 rounded">/items?skip=0&limit=10</code> параметры <code className="bg-gray-700 px-1.5 py-0.5 rounded">skip=0</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">limit=10</code> являются параметрами запроса.
            </p>
          </div>
        </div>
      </div>

      {/* Определение параметров запроса в FastAPI */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-purple-400" />
          Определение параметров запроса в FastAPI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            В FastAPI параметры запроса определяются как <span className="font-medium text-purple-300">обычные параметры функции</span>. FastAPI автоматически извлекает их из строки запроса.
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
              Параметры запроса определяются как параметры функции:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/")
def read_items(skip: int = 0, limit: int = 10):
    return {"skip": skip, "limit": limit}`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">skip: int = 0</code> — параметр с типом int и значением по умолчанию 0</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">limit: int = 10</code> — параметр с типом int и значением по умолчанию 10</li>
              <li>Значения извлекаются из строки запроса автоматически</li>
            </ul>
          </div>

          {/* Необязательные параметры */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Необязательные параметры</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Параметры с значениями по умолчанию становятся необязательными:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/")
def read_items(skip: int = 0, limit: int = 10, q: str = None):
    return {"skip": skip, "limit": limit, "q": q}`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Преимущества:</span> Гибкость в использовании, значения по умолчанию для удобства.
            </div>
          </div>

          {/* Обязательные параметры */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Key className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-300">3. Обязательные параметры</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Параметры без значений по умолчанию являются обязательными:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/")
def read_items(category: str):
    return {"category": category}`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-xs">
              ⚠️ <span className="font-medium">Важно:</span> Если обязательный параметр не передан, FastAPI вернет ошибку 422.
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества параметров запроса */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Преимущества параметров запроса
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Использование параметров запроса дает несколько важных преимуществ:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Фильтрация данных</h4>
              <p className="text-gray-400 text-sm">Позволяет фильтровать результаты по определенным критериям.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Пагинация</h4>
              <p className="text-gray-400 text-sm">Позволяет разбивать большие наборы данных на страницы.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Сортировка</h4>
              <p className="text-gray-400 text-sm">Позволяет управлять порядком сортировки результатов.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Настройка ответа</h4>
              <p className="text-gray-400 text-sm">Позволяют клиентам настраивать формат и содержание ответа.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Примеры использования
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Пагинация
/items/?skip=0&limit=20

# Фильтрация
/items/?category=electronics&min_price=1000

# Сортировка
/items/?sort=price&order=desc

# Поиск
/items/?q=laptop&category=electronics`}</code></pre>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          Практический пример: API для управления товарами с пагинацией и фильтрацией
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим полноценный пример API с использованием параметров запроса:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI
from typing import List, Optional

app = FastAPI()

# Имитация базы данных товаров
fake_items_db = [
    {"id": 1, "name": "Ноутбук", "category": "Электроника", "price": 50000},
    {"id": 2, "name": "Смартфон", "category": "Электроника", "price": 30000},
    {"id": 3, "name": "Книга", "category": "Литература", "price": 500},
    {"id": 4, "name": "Кофемашина", "category": "Бытовая техника", "price": 15000},
    {"id": 5, "name": "Планшет", "category": "Электроника", "price": 20000},
    {"id": 6, "name": "Роман", "category": "Литература", "price": 300},
    {"id": 7, "name": "Телевизор", "category": "Электроника", "price": 40000},
    {"id": 8, "name": "Чайник", "category": "Бытовая техника", "price": 2000}
]

# Получение списка товаров с пагинацией и фильтрацией
@app.get("/items/")
def read_items(
    skip: int = 0, 
    limit: int = 10, 
    category: Optional[str] = None,
    min_price: Optional[float] = None,
    q: Optional[str] = None
):
    # Фильтрация по категории
    filtered_items = fake_items_db
    if category:
        filtered_items = [item for item in filtered_items if item["category"] == category]
    
    # Фильтрация по минимальной цене
    if min_price is not None:
        filtered_items = [item for item in filtered_items if item["price"] >= min_price]
    
    # Поиск по названию
    if q:
        filtered_items = [item for item in filtered_items if q.lower() in item["name"].lower()]
    
    # Пагинация
    paginated_items = filtered_items[skip : skip + limit]
    
    return {
        "items": paginated_items,
        "total": len(filtered_items),
        "skip": skip,
        "limit": limit
    }

# Получение количества товаров по категории
@app.get("/items/count/")
def count_items(category: Optional[str] = None):
    if category:
        count = len([item for item in fake_items_db if item["category"] == category])
    else:
        count = len(fake_items_db)
    return {"count": count, "category": category}`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Примеры запросов:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /items/</code> - все товары</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /items/?skip=2&limit=3</code> - пагинация</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /items/?category=Электроника</code> - фильтр по категории</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /items/?q=ноут</code> - поиск</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Преимущества:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Гибкая фильтрация данных</li>
              <li>Эффективная пагинация</li>
              <li>Поиск по содержимому</li>
              <li>Типобезопасность и валидация</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Распространенные типы данных и валидация */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-yellow-400" />
          Типы данных и валидация параметров запроса
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            FastAPI поддерживает различные типы данных для параметров запроса и автоматически выполняет их валидацию:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Числовые типы</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">skip: int = 0</code> - целые числа</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">price: float = 0.0</code> - числа с плавающей точкой</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">rating: float</code> - обязательный параметр</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Строковые типы</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">q: str = ""</code> - строки с значением по умолчанию</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">category: Optional[str] = None</code> - опциональные строки</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">sort: str</code> - обязательные строки</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Булевы значения</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">active: bool = True</code> - булевы значения</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">published: bool = False</code> - булевы значения по умолчанию</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Списки</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">tags: List[str] = []</code> - списки строк</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">ids: List[int]</code> - списки чисел</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример с различными типами и валидацией
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/search/")
def search_items(
    q: str, 
    skip: int = 0, 
    limit: int = 10,
    active: bool = True,
    min_price: float = 0.0,
    tags: List[str] = []
):
    # Все параметры автоматически валидируются FastAPI
    return {
        "query": q,
        "skip": skip,
        "limit": limit,
        "active": active,
        "min_price": min_price,
        "tags": tags
    }`}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Search className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🔍</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как работают параметры запроса в FastAPI. Вы узнали, как определять их, использовать для фильтрации и пагинации, а также применять типизацию и валидацию.
              В следующем уроке мы рассмотрим работу с телом запроса (Request Body).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;