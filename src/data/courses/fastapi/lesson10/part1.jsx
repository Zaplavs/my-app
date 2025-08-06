// src/data/courses/fastapi/lesson10/part1.jsx
import React from 'react';
import { Download, Upload, FileText, Code, Zap, Settings, Database } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Upload className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📥 Урок 10: Получение и валидация тела запроса (Request Body)</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с данными в теле HTTP-запросов в FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как получать и валидировать данные из тела запроса с помощью Pydantic моделей в FastAPI.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое тело запроса? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Что такое тело запроса (Request Body)?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Тело запроса</span> — это часть HTTP-запроса, которая содержит данные, отправляемые от клиента к серверу.
          </p>
          <p>
            Оно чаще всего используется с методом <code className="bg-gray-700 px-1.5 py-0.5 rounded">POST</code> для создания новых ресурсов, а также с методами <code className="bg-gray-700 px-1.5 py-0.5 rounded">PUT</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">PATCH</code> для обновления существующих ресурсов.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> При создании нового пользователя клиент отправляет JSON в теле запроса: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{"{"}"name": "Иван", "email": "ivan@example.com"{"}"}</code>
            </p>
          </div>
        </div>
      </div>

      {/* Работа с телом запроса в FastAPI */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-purple-400" />
          Работа с телом запроса в FastAPI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            FastAPI автоматически обрабатывает тело запроса с помощью Pydantic моделей. Вам нужно только объявить параметр функции с типом вашей модели.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Базовый пример */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Базовый пример с POST-запросом</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Простой пример получения и возврата данных из тела запроса:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

@app.post("/items/")
def create_item(item: Item):
    return item`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">item: Item</code> — параметр с типом Pydantic модели</li>
              <li>FastAPI автоматически парсит JSON из тела запроса</li>
              <li>Выполняет валидацию данных согласно модели</li>
              <li>Создает экземпляр модели <code className="bg-gray-700 px-1.5 py-0.5 rounded">Item</code></li>
            </ul>
          </div>

          {/* Пример с обработкой данных */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Пример с обработкой полученных данных</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Более сложный пример с обработкой и преобразованием данных:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.post("/items/")
def create_item(item: Item):
    # Можно получить доступ к полям модели
    item_dict = item.dict()
    
    # Вычисляем цену с налогом
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    
    return item_dict`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Как это работает:</span> FastAPI автоматически преобразует модель в JSON для ответа.
            </div>
          </div>
        </div>
      </div>

      {/* Автоматическая валидация и документация */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Автоматическая валидация и документация
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Одним из главных преимуществ FastAPI является автоматическая валидация и генерация документации:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Автоматическая валидация</h4>
              <p className="text-gray-400 text-sm">FastAPI проверяет типы данных и структуру тела запроса согласно Pydantic модели.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Генерация примеров</h4>
              <p className="text-gray-400 text-sm">Swagger UI автоматически генерирует примеры тела запроса на основе моделей.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Описание ошибок</h4>
              <p className="text-gray-400 text-sm">При ошибках валидации возвращаются подробные сообщения с указанием проблемных полей.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Поддержка IDE</h4>
              <p className="text-gray-400 text-sm">IDE может использовать аннотации типов для автодополнения и проверки кода.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример ошибки валидации
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`# При отправке некорректных данных:
{
    "name": "Ноутбук",
    "price": "сто рублей"  # Ошибка! Должно быть число
}

# FastAPI автоматически вернет:
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
          <Database className="w-5 h-5 text-cyan-400" />
          Практический пример: API для управления задачами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим полноценный пример API с использованием тела запроса:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="API управления задачами")

# Модель для создания задачи
class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None
    priority: int = 1  # По умолчанию низкий приоритет

# Модель для обновления задачи
class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = None
    priority: Optional[int] = None

# Модель для ответа (расширяет TaskCreate)
class Task(TaskCreate):
    id: int
    completed: bool = False
    created_at: datetime

# Имитация базы данных
fake_tasks_db = []

# Создание задачи (POST с телом запроса)
@app.post("/tasks/", response_model=Task)
def create_task(task: TaskCreate):
    new_task = Task(
        id=len(fake_tasks_db) + 1,
        created_at=datetime.now(),
        **task.dict()
    )
    fake_tasks_db.append(new_task)
    return new_task

# Получение списка задач
@app.get("/tasks/", response_model=List[Task])
def get_tasks(skip: int = 0, limit: int = 10):
    return fake_tasks_db[skip : skip + limit]

# Получение конкретной задачи
@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    for task in fake_tasks_db:
        if task.id == task_id:
            return task
    raise HTTPException(status_code=404, detail="Задача не найдена")

# Обновление задачи (PUT с телом запроса)
@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, task_update: TaskUpdate):
    for task in fake_tasks_db:
        if task.id == task_id:
            # Обновляем только переданные поля
            update_data = task_update.dict(exclude_unset=True)
            for key, value in update_data.items():
                setattr(task, key, value)
            return task
    raise HTTPException(status_code=404, detail="Задача не найдена")`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Примеры запросов:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /tasks/</code> - создание задачи с данными в теле</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">PUT /tasks/1</code> - обновление задачи с данными в теле</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Преимущества:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li>Автоматическая валидация данных</li>
              <li>Генерация документации</li>
              <li>Типобезопасность</li>
              <li>Четкая структура API</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Различные методы с телом запроса */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Upload className="w-5 h-5 text-yellow-400" />
          Различные HTTP-методы с телом запроса
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тело запроса может использоваться с различными HTTP-методами:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <Upload className="w-4 h-4" />
              POST
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Используется для создания новых ресурсов</li>
              <li>Данные передаются в теле запроса</li>
              <li>Не является идемпотентным</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              PUT
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Используется для полного обновления ресурсов</li>
              <li>Передает полные данные ресурса</li>
              <li>Является идемпотентным</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              PATCH
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Используется для частичного обновления ресурсов</li>
              <li>Передает только изменяемые данные</li>
              <li>Может быть идемпотентным</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Примеры использования
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">@app.post("/users/")</code> - создание пользователя</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">@app.put("/users/{'{'}user_id{'}'}")</code> - полное обновление</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">@app.patch("/users/{'{'}user_id{'}'}")</code> - частичное обновление</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример с PATCH-запросом
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.patch("/items/{item_id}")
def update_item(item_id: int, item: ItemUpdate):
    # item_update содержит только те поля, которые нужно обновить
    stored_item_data = items_db[item_id]
    stored_item_model = Item(**stored_item_data)
    
    # Обновляем только переданные поля
    update_data = item.dict(exclude_unset=True)
    updated_item = stored_item_model.copy(update=update_data)
    
    items_db[item_id] = jsonable_encoder(updated_item)
    return updated_item`}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Upload className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 📥</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как работать с телом запроса в FastAPI. Вы узнали, как получать, валидировать и обрабатывать данные из тела запроса с помощью Pydantic моделей.
              В следующем уроке мы рассмотрим работу с формами и файлами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;