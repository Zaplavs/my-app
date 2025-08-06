// src/data/courses/fastapi/lesson6/part3.jsx
import React, { useState } from 'react';
import { Link, Key, Route, Play, CheckCircle, Terminal, Eye } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Работа с параметрами пути</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить использование параметров пути в FastAPI для создания динамических API.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание API с параметрами пути */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте API для управления продуктами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение с маршрутами, использующими параметры пути для работы с каталогом продуктов.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл products_api.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">products_api.py</code>.</li>
              <li>Добавьте следующий код с различными маршрутами и параметрами пути:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI, HTTPException

app = FastAPI(title="API каталога продуктов")

# Имитация базы данных продуктов
products_db = {
    1: {"name": "Ноутбук", "price": 50000, "category": "Электроника"},
    2: {"name": "Книга", "price": 500, "category": "Литература"},
    3: {"name": "Кофемашина", "price": 15000, "category": "Бытовая техника"},
    4: {"name": "Смартфон", "price": 30000, "category": "Электроника"}
}

# GET - Получение списка всех продуктов
@app.get("/products")
def get_products():
    return products_db

# GET - Получение конкретного продукта по ID
@app.get("/products/{product_id}")
def get_product(product_id: int):
    if product_id not in products_db:
        raise HTTPException(status_code=404, detail="Продукт не найден")
    return products_db[product_id]

# GET - Получение продуктов по категории
@app.get("/categories/{category}/products")
def get_products_by_category(category: str):
    filtered_products = {
        pid: product for pid, product in products_db.items() 
        if product["category"].lower() == category.lower()
    }
    return filtered_products

# GET - Получение цены продукта
@app.get("/products/{product_id}/price")
def get_product_price(product_id: int):
    if product_id not in products_db:
        raise HTTPException(status_code=404, detail="Продукт не найден")
    return {"product_id": product_id, "price": products_db[product_id]["price"]}`}
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
            Я создал файл products_api.py с маршрутами, использующими параметры пути
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
            Запустите ваше приложение и протестируйте все маршруты с параметрами пути через автоматическую документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Запустите сервер
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">products_api.py</code>.</li>
              <li>Выполните команду:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">uvicorn products_api:app --reload</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Протестируйте базовые маршруты
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /products</code> для получения всех продуктов.</li>
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /products/&#123;product_id&#125;</code> с разными ID (1, 2, 3, 4).</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Протестируйте сложные маршруты
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /categories/&#123;category&#125;/products</code> с разными категориями ("Электроника", "Литература").</li>
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /products/&#123;product_id&#125;/price</code> для получения цены конкретного продукта.</li>
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

      {/* Задание 3: Тестирование валидации и ошибок */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Проверьте валидацию и обработку ошибок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Проверьте, как FastAPI обрабатывает различные сценарии валидации и ошибки.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Протестируйте валидацию типов:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте запросить <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /products/abc</code> (вместо числа передайте строку).</li>
              <li>Обратите внимание на автоматическую ошибку валидации (HTTP 422).</li>
              <li>Проверьте, что в документации указан тип параметра <code className="bg-gray-700 px-1.5 py-0.5 rounded">product_id: integer</code>.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Протестируйте обработку несуществующих ресурсов:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Запросите продукт с несуществующим ID, например <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /products/999</code>.</li>
              <li>Проверьте, что возвращается ошибка 404 с понятным сообщением.</li>
              <li>Попробуйте запросить продукты из несуществующей категории.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Исследуйте документацию:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте ReDoc (<code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/redoc</code>) и сравните с Swagger UI.</li>
              <li>Обратите внимание, как параметры пути отображаются в схеме API.</li>
              <li>Проверьте, как описываются возможные ошибки в документации.</li>
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
            Я проверил валидацию, обработку ошибок и изучил документацию
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
              Теперь вы умеете работать с параметрами пути в FastAPI! Вы создали API с динамическими маршрутами, протестировали валидацию типов и обработку ошибок.
              В следующем уроке мы рассмотрим параметры запроса (Query Parameters).
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