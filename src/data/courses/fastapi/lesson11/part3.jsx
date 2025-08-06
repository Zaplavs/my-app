// src/data/courses/fastapi/lesson11/part3.jsx
import React, { useState } from 'react';
import { Shield, Play, CheckCircle, Terminal, Eye, Settings } from 'lucide-react';

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
            <Shield className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Расширенная валидация данных в FastAPI</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить добавление ограничений к полям Pydantic моделей для автоматической валидации данных в FastAPI.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание API с расширенной валидацией */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте API для управления продуктами с расширенной валидацией
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение с моделями данных, использующими различные ограничения полей Pydantic.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл products_validation.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">products_validation.py</code>.</li>
              <li>Добавьте следующий код с моделями, использующими различные ограничения:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field, HttpUrl, PositiveInt
from typing import Annotated, List, Optional
from datetime import datetime

app = FastAPI(title="API с расширенной валидацией")

# Модель для создания продукта с валидацией
class ProductCreate(BaseModel):
    # Название с ограничениями длины
    name: Annotated[str, Field(min_length=3, max_length=100)]
    
    # Описание с ограничением длины
    description: Annotated[Optional[str], Field(max_length=1000)] = None
    
    # Цена с числовыми ограничениями
    price: Annotated[float, Field(gt=0, le=1000000)]
    
    # Количество с положительным целым числом
    quantity: PositiveInt
    
    # Категория с ограничениями
    category: Annotated[str, Field(min_length=2, max_length=50)]
    
    # URL изображения с валидацией URL
    image_url: Optional[HttpUrl] = None

# Модель для обновления продукта
class ProductUpdate(BaseModel):
    name: Annotated[Optional[str], Field(min_length=3, max_length=100)] = None
    description: Annotated[Optional[str], Field(max_length=1000)] = None
    price: Annotated[Optional[float], Field(gt=0, le=1000000)] = None
    quantity: Optional[PositiveInt] = None
    category: Annotated[Optional[str], Field(min_length=2, max_length=50)] = None
    image_url: Optional[HttpUrl] = None

# Модель для ответа
class Product(ProductCreate):
    id: int
    created_at: datetime

# Имитация базы данных
fake_products_db = []

# Создание продукта
@app.post("/products/", response_model=Product)
def create_product(product: ProductCreate):
    new_product = Product(
        id=len(fake_products_db) + 1,
        created_at=datetime.now(),
        **product.dict()
    )
    fake_products_db.append(new_product)
    return new_product

# Получение списка продуктов
@app.get("/products/", response_model=List[Product])
def get_products(skip: int = 0, limit: Annotated[int, Field(le=100)] = 10):
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
            Я создал файл products_validation.py с моделями и ограничениями
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Запуск сервера и тестирование валидации */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Запустите сервер и протестируйте валидацию
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Запустите ваше приложение и протестируйте различные сценарии валидации через автоматическую документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Запустите сервер
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">products_validation.py</code>.</li>
              <li>Выполните команду:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">uvicorn products_validation:app --reload</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Протестируйте корректные данные
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Найдите эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /products/</code> и нажмите "Try it out".</li>
              <li>В теле запроса передайте корректные данные:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"name": "Смартфон", "price": 25000, "quantity": 10, "category": "Электроника"{"}"}</pre>
              </div>
              <li>Выполните запрос и проверьте успешный ответ.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Протестируйте валидацию URL
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте создать продукт с некорректным URL изображения:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"name": "Ноутбук", "price": 50000, "quantity": 5, "category": "Электроника", "image_url": "not-a-url"{"}"}</pre>
              </div>
              <li>Проверьте ошибку валидации для поля image_url.</li>
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
            Я протестировал корректные данные и валидацию URL
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Тестирование различных ограничений */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Проверьте различные сценарии валидации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Проверьте, как различные ограничения обрабатывают некорректные данные.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Протестируйте ограничения длины строк:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте создать продукт с очень коротким названием:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"name": "A", "price": 1000, "quantity": 1, "category": "Тест"{"}"}</pre>
              </div>
              <li>Попробуйте создать продукт с очень длинной категорией:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"name": "Тестовый продукт", "price": 1000, "quantity": 1, "category": "Эта категория слишком длинная и превышает лимит в 50 символов"{"}"}</pre>
              </div>
              <li>Обратите внимание на ошибки валидации для полей name и category.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Протестируйте числовые ограничения:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте создать продукт с отрицательной ценой:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"name": "Тест", "price": -100, "quantity": 1, "category": "Тест"{"}"}</pre>
              </div>
              <li>Попробуйте создать продукт с нулевым количеством:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300">{"{"}"name": "Тест", "price": 1000, "quantity": 0, "category": "Тест"{"}"}</pre>
              </div>
              <li>Проверьте ошибки валидации для полей price и quantity.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Исследуйте документацию ограничений:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>В Swagger UI изучите схему модели ProductCreate.</li>
              <li>Обратите внимание, как отображаются ограничения в описании полей.</li>
              <li>Проверьте примеры значений, сгенерированные автоматически.</li>
              <li>Изучите сообщения об ошибках валидации в разделе "Responses".</li>
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
            Я проверил различные ограничения и изучил документацию
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
              Теперь вы умеете добавлять ограничения к полям Pydantic моделей в FastAPI! Вы создали API с расширенной валидацией данных, протестировали различные сценарии и изучили автоматическую документацию ограничений.
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