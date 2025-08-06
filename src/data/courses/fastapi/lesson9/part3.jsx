// src/data/courses/fastapi/lesson9/part3.jsx
import React, { useState } from 'react';
import { Database, Play, CheckCircle, Terminal, Eye, Code } from 'lucide-react';

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
            <Database className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Создание и использование Pydantic моделей</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить создание и использование Pydantic моделей в FastAPI для валидации данных.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание API с Pydantic моделями */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте API для управления продуктами с Pydantic моделями
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение с моделями данных для управления каталогом продуктов.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл products_models.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">products_models.py</code>.</li>
              <li>Добавьте следующий код с определением Pydantic моделей:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="API каталога продуктов")

# Модель для создания продукта
class ProductCreate(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    category: str
    in_stock: bool = True

# Модель для обновления продукта
class ProductUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    category: Optional[str] = None
    in_stock: Optional[bool] = None

# Модель для ответа (расширяет ProductCreate)
class Product(ProductCreate):
    id: int

# Имитация базы данных
fake_products_db = []

# Создание продукта
@app.post("/products/", response_model=Product)
def create_product(product: ProductCreate):
    new_product = Product(
        id=len(fake_products_db) + 1,
        **product.dict()
    )
    fake_products_db.append(new_product)
    return new_product

# Получение списка продуктов
@app.get("/products/", response_model=List[Product])
def get_products(skip: int = 0, limit: int = 10):
    return fake_products_db[skip : skip + limit]

# Получение конкретного продукта
@app.get("/products/{product_id}", response_model=Product)
def get_product(product_id: int):
    for product in fake_products_db:
        if product.id == product_id:
            return product
    raise HTTPException(status_code=404, detail="Продукт не найден")`}
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
            Я создал файл products_models.py с Pydantic моделями
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Запуск сервера и тестирование через документацию */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Запустите сервер и протестируйте API
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Запустите ваше приложение и протестируйте работу с Pydantic моделями через автоматическую документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Запустите сервер
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">products_models.py</code>.</li>
              <li>Выполните команду:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">uvicorn products_models:app --reload</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Протестируйте создание продуктов
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /products/</code> и нажмите "Try it out".</li>
              <li>В теле запроса передайте JSON для нового продукта:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"name": "Смартфон", "price": 30000, "category": "Электроника"{"}"}</pre>
              </div>
              <li>Выполните запрос и проверьте ответ.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Протестируйте получение продуктов
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /products/</code> для получения списка продуктов.</li>
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /products/&#123;product_id&#125;</code> для получения конкретного продукта.</li>
              <li>Обратите внимание на структуру ответов и автоматическую документацию моделей.</li>
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
            Я протестировал создание и получение продуктов через Swagger UI
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Тестирование валидации и ошибок */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Проверьте валидацию данных и обработку ошибок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Проверьте, как Pydantic модели обрабатывают некорректные данные и возвращают ошибки.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Протестируйте валидацию типов:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте создать продукт с некорректными данными:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"name": "Ноутбук", "price": "дорого", "category": "Электроника"{"}"}</pre>
              </div>
              <li>Обратите внимание на автоматическую ошибку валидации (HTTP 422).</li>
              <li>Проверьте, что в ответе указано, какое поле содержит ошибку.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Протестируйте обязательные поля:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте создать продукт без обязательных полей:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"name": "Планшет"{"}"}</pre>
              </div>
              <li>Обратите внимание на ошибки валидации для отсутствующих обязательных полей.</li>
              <li>Проверьте, что опциональные поля могут отсутствовать.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Исследуйте документацию моделей:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте ReDoc (<code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/redoc</code>).</li>
              <li>Найдите раздел "Schemas" и изучите структуру ваших моделей.</li>
              <li>Обратите внимание, как отображаются обязательные и опциональные поля.</li>
              <li>Проверьте, как описываются возможные значения и ограничения.</li>
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
            Я проверил валидацию, обработку ошибок и изучил документацию моделей
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
              Теперь вы умеете создавать и использовать Pydantic модели в FastAPI! Вы создали API с автоматической валидацией данных, протестировали обработку ошибок и изучили автоматическую документацию моделей.
              В следующем уроке мы рассмотрим работу с телом запроса (Request Body) с использованием Pydantic моделей.
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