// src/data/courses/fastapi/lesson12/part1.jsx
import React from 'react';
import { Link, Settings, Database, Shield, Zap, FileText, Code } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔗 Урок 12: Внедрение зависимостей (Dependencies) в FastAPI</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Повторное использование кода и управление зависимостями в FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое зависимости в FastAPI, как их создавать и использовать для повторного использования кода и управления общими функциями.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое зависимости? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Что такое зависимости в FastAPI?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Зависимости</span> (Dependencies) в FastAPI — это способ внедрения повторно используемого кода в функции обработчики.
          </p>
          <p>
            Они позволяют:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">Повторно использовать код</span> — избежать дублирования</li>
            <li><span className="font-medium">Управлять общими функциями</span> — аутентификация, подключение к БД</li>
            <li><span className="font-medium">Разделять логику</span> — разделение ответственности</li>
            <li><span className="font-medium">Автоматически выполнять</span> — зависимости выполняются до основной функции</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Вместо того чтобы проверять аутентификацию в каждой функции, вы можете создать зависимость, которая будет автоматически выполнять эту проверку.
            </p>
          </div>
        </div>
      </div>

      {/* Создание и использование зависимостей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-purple-400" />
          Создание и использование зависимостей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Зависимости создаются как обычные функции и подключаются с помощью декоратора <code className="bg-gray-700 px-1.5 py-0.5 rounded">Depends</code>.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Базовый пример */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Базовый пример зависимости</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Простая зависимость для общих параметров:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi import Depends, FastAPI

app = FastAPI()

# Функция зависимости
def common_parameters(q: str | None = None, skip: int = 0, limit: int = 100):
    return {"q": q, "skip": skip, "limit": limit}

# Использование зависимости
@app.get("/items/")
async def read_items(commons: dict = Depends(common_parameters)):
    return commons`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">common_parameters</code> — функция зависимости</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">Depends(common_parameters)</code> — подключение зависимости</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">commons: dict</code> — результат выполнения зависимости</li>
            </ul>
          </div>

          {/* Зависимость с типизацией */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Зависимость с типизацией</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Более сложная зависимость с Pydantic моделью:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi import Depends, FastAPI
from pydantic import BaseModel

app = FastAPI()

class CommonQueryParams(BaseModel):
    q: str | None = None
    skip: int = 0
    limit: int = 100

def common_parameters commons: CommonQueryParams = Depends()):
    return commons

@app.get("/items/")
async def read_items(commons: CommonQueryParams = Depends(common_parameters)):
    return commons.dict()`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Преимущества:</span> Типобезопасность, автоматическая валидация, лучшая документация.
            </div>
          </div>
        </div>
      </div>

      {/* Автоматическое выполнение зависимостей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Автоматическое выполнение зависимостей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            FastAPI автоматически выполняет зависимости перед основной функцией обработчиком:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Порядок выполнения</h4>
              <p className="text-gray-400 text-sm">Сначала выполняются все зависимости, затем основная функция.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Результаты зависимостей</h4>
              <p className="text-gray-400 text-sm">Результаты выполнения зависимостей передаются в основную функцию.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Обработка ошибок</h4>
              <p className="text-gray-400 text-sm">Если зависимость вызывает исключение, основная функция не выполняется.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Кэширование</h4>
              <p className="text-gray-400 text-sm">Одна и та же зависимость выполняется только один раз за запрос.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример с логированием
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`import time
from fastapi import Depends, FastAPI

app = FastAPI()

def add_process_time_header(start_time: float = time.time()):
    process_time = time.time() - start_time
    print(f"Process time: {process_time} seconds")

@app.get("/items/", dependencies=[Depends(add_process_time_header)])
async def read_items():
    return [{"item_id": 1, "name": "Item 1"}]`}</code></pre>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-cyan-400" />
          Практический пример: API с управлением зависимостями
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим полноценный пример API с использованием зависимостей:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import Depends, FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="API с зависимостями")

# Имитация базы данных пользователей
fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "fakehashedsecret",
        "disabled": False,
    }
}

# Модель для токена
class Token(BaseModel):
    access_token: str
    token_type: str

# Модель для данных пользователя
class User(BaseModel):
    username: str
    email: str | None = None
    full_name: str | None = None
    disabled: bool | None = None

# Модель для данных пользователя в БД
class UserInDB(User):
    hashed_password: str

# Зависимость для получения текущего пользователя
def get_current_user(token: str):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    # В реальном приложении здесь будет проверка токена
    user = fake_users_db.get("johndoe")  # Упрощенный пример
    if user is None:
        raise credentials_exception
    return UserInDB(**user)

# Зависимость для получения активного пользователя
def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

# Зависимость для общих параметров поиска
class CommonQueryParams:
    def __init__(self, q: Optional[str] = None, skip: int = 0, limit: int = 100):
        self.q = q
        self.skip = skip
        self.limit = limit

# Имитация базы данных товаров
fake_items_db = [
    {"name": "Foo", "description": "A very nice Item", "price": 35.4, "tax": 3.2},
    {"name": "Bar", "description": "The bartenders", "price": 62, "tax": 20.2},
    {"name": "Baz", "description": "There goes my baz", "price": 50.2, "tax": 10.5},
]

# Эндпоинт, защищенный зависимостью аутентификации
@app.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

# Эндпоинт с несколькими зависимостями
@app.get("/items/")
async def read_items(
    commons: CommonQueryParams = Depends(CommonQueryParams),
    current_user: User = Depends(get_current_active_user)
):
    # Фильтрация по поисковому запросу
    if commons.q:
        filtered_items = [
            item for item in fake_items_db 
            if commons.q.lower() in item["name"].lower()
        ]
    else:
        filtered_items = fake_items_db
    
    # Пагинация
    paginated_items = filtered_items[commons.skip : commons.skip + commons.limit]
    
    return {
        "items": paginated_items,
        "total": len(filtered_items),
        "user": current_user.username,
        "query": commons.q,
        "skip": commons.skip,
        "limit": commons.limit
    }`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Зависимости в примере:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">get_current_user</code> - получение пользователя по токену</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">get_current_active_user</code> - проверка активности пользователя</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">CommonQueryParams</code> - общие параметры поиска</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Преимущества:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Повторное использование кода аутентификации</li>
              <li>Централизованная обработка параметров</li>
              <li>Разделение ответственности</li>
              <li>Автоматическая документация</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Типы зависимостей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Link className="w-5 h-5 text-yellow-400" />
          Типы зависимостей в FastAPI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            FastAPI поддерживает различные типы зависимостей:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Функции как зависимости</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Простые функции без классов</li>
              <li>Подходят для легковесных операций</li>
              <li>Легко тестировать и переиспользовать</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Классы как зависимости</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Классы с методом <code className="bg-gray-700 px-1.5 py-0.5 rounded">__init__</code></li>
              <li>Подходят для сложной логики</li>
              <li>Позволяют хранить состояние</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Зависимости без возврата</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Используются для выполнения побочных эффектов</li>
              <li>Указываются в параметре <code className="bg-gray-700 px-1.5 py-0.5 rounded">dependencies</code></li>
              <li>Не передают результат в функцию обработчик</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Вложенные зависимости</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Зависимости, которые используют другие зависимости</li>
              <li>Позволяют создавать сложные цепочки</li>
              <li>Выполняются в правильном порядке</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример вложенных зависимостей
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`def verify_token(token: str):
    # Проверка токена
    return {"user_id": 123}

def get_user_info(user_data: dict = Depends(verify_token)):
    # Получение информации о пользователе
    return {"id": user_data["user_id"], "name": "John"}

@app.get("/profile/")
async def read_profile(user: dict = Depends(get_user_info)):
    return user`}</code></pre>
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
              Теперь вы понимаете, как работают зависимости в FastAPI. Вы узнали, как создавать и использовать зависимости для повторного использования кода, управления общими функциями и автоматического выполнения логики.
              В следующем уроке мы рассмотрим работу с формами и файлами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;