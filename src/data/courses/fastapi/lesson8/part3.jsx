// src/data/courses/fastapi/lesson8/part3.jsx
import React, { useState } from 'react';
import { Link, Search, Play, CheckCircle, Terminal, Eye, Filter } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Создание API с комбинированными параметрами</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить комбинирование параметров пути и запроса в FastAPI для создания гибкого API.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание API магазина */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте API для управления магазином
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение с маршрутами, использующими комбинированные параметры пути и запроса для управления товарами в категориях.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл shop_api.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">shop_api.py</code>.</li>
              <li>Добавьте следующий код с реализациями маршрутов с комбинированными параметрами:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI, HTTPException
from typing import List, Optional

app = FastAPI(title="API интернет-магазина")

# Имитация базы данных категорий
categories_db = {
    1: {"name": "Электроника", "description": "Гаджеты и устройства"},
    2: {"name": "Книги", "description": "Печатные издания"},
    3: {"name": "Одежда", "description": "Одежда и аксессуары"}
}

# Имитация базы данных товаров
products_db = [
    {"id": 1, "name": "Смартфон", "price": 25000, "category_id": 1, "in_stock": True},
    {"id": 2, "name": "Ноутбук", "price": 50000, "category_id": 1, "in_stock": True},
    {"id": 3, "name": "Роман", "price": 300, "category_id": 2, "in_stock": False},
    {"id": 4, "name": "Учебник", "price": 800, "category_id": 2, "in_stock": True},
    {"id": 5, "name": "Футболка", "price": 1000, "category_id": 3, "in_stock": True},
    {"id": 6, "name": "Джинсы", "price": 2500, "category_id": 3, "in_stock": True}
]

# Получение информации о категории
@app.get("/categories/{category_id}")
def get_category(category_id: int):
    if category_id not in categories_db:
        raise HTTPException(status_code=404, detail="Категория не найдена")
    return categories_db[category_id]

# Получение товаров категории с фильтрацией и пагинацией
@app.get("/categories/{category_id}/products/")
def get_category_products(
    category_id: int,
    skip: int = 0,
    limit: int = 10,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    in_stock: Optional[bool] = None
):
    # Проверяем существование категории
    if category_id not in categories_db:
        raise HTTPException(status_code=404, detail="Категория не найдена")
    
    # Фильтруем товары по категории
    category_products = [product for product in products_db if product["category_id"] == category_id]
    
    # Фильтрация по минимальной цене
    if min_price is not None:
        category_products = [product for product in category_products if product["price"] >= min_price]
    
    # Фильтрация по максимальной цене
    if max_price is not None:
        category_products = [product for product in category_products if product["price"] <= max_price]
    
    # Фильтрация по наличию на складе
    if in_stock is not None:
        category_products = [product for product in category_products if product["in_stock"] == in_stock]
    
    # Пагинация
    paginated_products = category_products[skip : skip + limit]
    
    return {
        "category": categories_db[category_id],
        "products": paginated_products,
        "total": len(category_products),
        "skip": skip,
        "limit": limit
    }

# Получение конкретного товара в категории
@app.get("/categories/{category_id}/products/{product_id}")
def get_category_product(category_id: int, product_id: int):
    # Проверяем существование категории
    if category_id not in categories_db:
        raise HTTPException(status_code=404, detail="Категория не найдена")
    
    # Ищем товар
    for product in products_db:
        if product["id"] == product_id and product["category_id"] == category_id:
            return {
                "category": categories_db[category_id],
                "product": product
            }
    
    raise HTTPException(status_code=404, detail="Товар не найден")`}
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
            Я создал файл shop_api.py с маршрутами, использующими комбинированные параметры
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
            Запустите ваше приложение и протестируйте все маршруты с комбинированными параметрами через автоматическую документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Запустите сервер
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">shop_api.py</code>.</li>
              <li>Выполните команду:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">uvicorn shop_api:app --reload</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Протестируйте базовые маршруты
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /categories/&#123;category_id&#125;</code> с разными ID (1, 2, 3).</li>
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /categories/&#123;category_id&#125;/products/&#123;product_id&#125;</code> с существующими комбинациями (например, 1 и 2).</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Протестируйте фильтрацию и пагинацию
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /categories/1/products/</code> с параметрами:</li>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Без параметров (значения по умолчанию)</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">skip=0&limit=2</code></li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">min_price=20000</code></li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">in_stock=true</code></li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">min_price=1000&max_price=10000&in_stock=true</code></li>
              </ul>
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
            Я протестировал все маршруты через Swagger UI
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Тестирование ошибок и валидации */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Проверьте обработку ошибок и валидацию
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Проверьте, как API обрабатывает различные сценарии ошибок и валидации.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Протестируйте обработку несуществующих ресурсов:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Запросите несуществующую категорию: <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /categories/999</code>.</li>
              <li>Запросите товар в несуществующей категории: <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /categories/999/products/1</code>.</li>
              <li>Запросите несуществующий товар в существующей категории: <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /categories/1/products/999</code>.</li>
              <li>Обратите внимание на коды ошибок 404.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Проверьте валидацию типов:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте передать строку вместо числа для параметра <code className="bg-gray-700 px-1.5 py-0.5 rounded">category_id</code>: <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /categories/abc</code>.</li>
              <li>Попробуйте передать некорректное значение для параметра <code className="bg-gray-700 px-1.5 py-0.5 rounded">in_stock</code>: <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /categories/1/products/?in_stock=maybe</code>.</li>
              <li>Обратите внимание на автоматическую ошибку валидации (HTTP 422).</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Исследуйте документацию:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте ReDoc (<code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/redoc</code>) и сравните с Swagger UI.</li>
              <li>Обратите внимание, как отображаются параметры пути и запроса в схеме API.</li>
              <li>Проверьте, как описываются возможные ошибки и их коды.</li>
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
            Я проверил обработку ошибок, валидацию и изучил документацию
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
              Теперь вы умеете комбинировать параметры пути и запроса в FastAPI! Вы создали гибкое API с фильтрацией, пагинацией и обработкой ошибок, протестировали валидацию типов и изучили автоматическую документацию.
              В следующем уроке мы рассмотрим работу с телом запроса (Request Body).
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