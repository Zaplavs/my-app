// src/data/courses/fastapi/lesson12/part3.jsx
import React, { useState } from 'react';
import { Link, Play, CheckCircle, Terminal, Eye, Settings } from 'lucide-react';

const Part3 = () => {
  const [completedTasks, setCompletedTasks] = useState({
    task1: false,
    task2: false,
    task3: false
  });

  const handleTaskComplete = (task) => {
    setCompletedTasks(prev => ({
      ...prev,
      [task]: !prev[task]
    }));
  };

  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Link className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Работа с зависимостями в FastAPI</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить создание и использование зависимостей в FastAPI для повторного использования кода и управления общими функциями.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание API с базовыми зависимостями */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте API с общими параметрами через зависимости
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение, которое использует зависимости для обработки общих параметров запроса.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл dependencies_api.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">dependencies_api.py</code>.</li>
              <li>Добавьте следующий код с базовыми зависимостями:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import Depends, FastAPI
from typing import Optional
from pydantic import BaseModel

app = FastAPI(title="API с зависимостями")

# Имитация базы данных
fake_items_db = [{"item_name": f"Item {i}", "owner": f"User {i%3 + 1}"} for i in range(1, 101)]

# Функция зависимости для общих параметров поиска
def common_parameters(q: Optional[str] = None, skip: int = 0, limit: int = 10):
    return {"q": q, "skip": skip, "limit": limit}

# Pydantic модель для возврата результатов
class SearchResult(BaseModel):
    items: list
    total: int
    skip: int
    limit: int
    query: Optional[str] = None

# Эндпоинт с зависимостью для поиска
@app.get("/items/", response_model=SearchResult)
async def read_items(commons: dict = Depends(common_parameters)):
    # Фильтрация по поисковому запросу
    if commons["q"]:
        filtered_items = [
            item for item in fake_items_db 
            if commons["q"].lower() in item["item_name"].lower()
        ]
    else:
        filtered_items = fake_items_db
    
    # Пагинация
    paginated_items = filtered_items[commons["skip"] : commons["skip"] + commons["limit"]]
    
    return {
        "items": paginated_items,
        "total": len(filtered_items),
        "skip": commons["skip"],
        "limit": commons["limit"],
        "query": commons["q"]
    }

# Функция зависимости для проверки прав доступа (упрощенная)
def verify_permission(required_role: str = "user"):
    # В реальном приложении здесь будет логика проверки прав
    return {"role": required_role, "has_access": True}

# Эндпоинт с несколькими зависимостями
@app.get("/admin/items/")
async def read_admin_items(
    commons: dict = Depends(common_parameters),
    permission: dict = Depends(verify_permission)
):
    if not permission["has_access"]:
        return {"error": "Access denied"}
    
    # Фильтрация и пагинация (как в предыдущем эндпоинте)
    if commons["q"]:
        filtered_items = [
            item for item in fake_items_db 
            if commons["q"].lower() in item["item_name"].lower()
        ]
    else:
        filtered_items = fake_items_db
    
    paginated_items = filtered_items[commons["skip"] : commons["skip"] + commons["limit"]]
    
    return {
        "items": paginated_items,
        "total": len(filtered_items),
        "user_role": permission["role"],
        "query": commons["q"]
    }`}
              </pre>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task1"
            checked={completedTasks.task1}
            onChange={() => handleTaskComplete('task1')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task1" className="ml-2 text-gray-300">
            Я создал файл dependencies_api.py с базовыми зависимостями
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Запуск сервера и тестирование зависимостей */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Запустите сервер и протестируйте зависимости
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Запустите ваше приложение и протестируйте работу зависимостей через автоматическую документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Запустите сервер
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">dependencies_api.py</code>.</li>
              <li>Выполните команду:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">uvicorn dependencies_api:app --reload</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Протестируйте эндпоинт с зависимостью поиска
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /items/</code> и нажмите "Try it out".</li>
              <li>Протестируйте различные параметры:</li>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Без параметров (значения по умолчанию)</li>
                <li>С параметром <code className="bg-gray-700 px-1.5 py-0.5 rounded">q=Item 5</code></li>
                <li>С параметрами <code className="bg-gray-700 px-1.5 py-0.5 rounded">skip=10&limit=5</code></li>
              </ul>
              <li>Обратите внимание, как зависимость обрабатывает параметры.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Протестируйте эндпоинт с несколькими зависимостями
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /admin/items/</code>.</li>
              <li>Протестируйте его с различными комбинациями параметров.</li>
              <li>Обратите внимание, как обрабатываются несколько зависимостей одновременно.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task2"
            checked={completedTasks.task2}
            onChange={() => handleTaskComplete('task2')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task2" className="ml-2 text-gray-300">
            Я протестировал эндпоинты с зависимостями через Swagger UI
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Создание класса-зависимости */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Реализуйте класс-зависимость и зависимости без возврата
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте более сложные зависимости, включая класс-зависимость и зависимость без возврата результата.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Добавьте класс-зависимость:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">dependencies_api.py</code>.</li>
              <li>Добавьте следующий класс-зависимость:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`# Класс-зависимость для управления подключением к БД (имитация)
class DatabaseSession:
    def __init__(self, db_url: str = "sqlite:///./test.db"):
        self.db_url = db_url
        self.connection = None
    
    def __enter__(self):
        print(f"Подключение к БД: {self.db_url}")
        self.connection = "fake_connection"
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Закрытие подключения к БД")
        self.connection = None
    
    def execute_query(self, query: str):
        return f"Результат выполнения запроса: {query}"}`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Добавьте новый эндпоинт, использующий этот класс:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`# Зависимость, возвращающая экземпляр класса
def get_db_session():
    with DatabaseSession() as session:
        yield session

# Эндпоинт с классом-зависимостью
@app.get("/database/query/")
async def database_query(query: str, db: DatabaseSession = Depends(get_db_session)):
    result = db.execute_query(query)
    return {"result": result}`}</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Добавьте зависимость без возврата:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте функцию зависимости для логирования:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">
{`# Зависимость без возврата (для логирования)
def log_request():
    print("Запрос обрабатывается...")
    # Здесь может быть запись в лог-файл
    # Ничего не возвращаем`}</pre>
              </div>
              <li>Обновите существующий эндпоинт, чтобы использовать эту зависимость:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">
{`@app.get("/items/", response_model=SearchResult, dependencies=[Depends(log_request)])
async def read_items(commons: dict = Depends(common_parameters)):
    # ... существующий код ...`}</pre>
              </div>
              <li>Перезапустите сервер и проверьте, что логирование работает.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Проверьте работу всех зависимостей:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Протестируйте новый эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /database/query/</code>.</li>
              <li>Проверьте, что логирование работает при вызове <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /items/</code>.</li>
              <li>Обратите внимание на сообщения в терминале при выполнении запросов.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task3"
            checked={completedTasks.task3}
            onChange={() => handleTaskComplete('task3')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task3" className="ml-2 text-gray-300">
            Я реализовал класс-зависимость и зависимости без возврата
          </label>
          {completedTasks.task3 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы умеете создавать и использовать зависимости в FastAPI! Вы реализовали функции-зависимости, классы-зависимости, зависимости без возврата и научились комбинировать несколько зависимостей в одном эндпоинте.
              В следующем уроке мы рассмотрим работу с формами и файлами.
            </p>
            {Object.values(completedTasks).every(task => task) && (
              <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-green-300">Все задания выполнены! Вы готовы к следующему уроку.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;