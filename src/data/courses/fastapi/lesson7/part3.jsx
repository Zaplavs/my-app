// src/data/courses/fastapi/lesson7/part3.jsx
import React, { useState } from 'react';
import { Search, Filter, Settings, Play, CheckCircle, Terminal, Eye } from 'lucide-react';

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
            <Search className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Реализация API с параметрами запроса</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить использование параметров запроса в FastAPI для фильтрации, пагинации и поиска данных.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание API с пагинацией */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте API для управления статьями с пагинацией
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение с маршрутами, использующими параметры запроса для пагинации и фильтрации статей.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл articles_api.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">articles_api.py</code>.</li>
              <li>Добавьте следующий код с реализациями пагинации и фильтрации:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI
from typing import List, Optional

app = FastAPI(title="API статей")

# Имитация базы данных статей
articles_db = [
    {"id": 1, "title": "Введение в FastAPI", "category": "Технологии", "published": True},
    {"id": 2, "title": "Основы CSS", "category": "Веб-разработка", "published": True},
    {"id": 3, "title": "Python для начинающих", "category": "Программирование", "published": False},
    {"id": 4, "title": "Разработка REST API", "category": "Технологии", "published": True},
    {"id": 5, "title": "JavaScript ES6", "category": "Веб-разработка", "published": True},
    {"id": 6, "title": "Базы данных SQL", "category": "Программирование", "published": False},
    {"id": 7, "title": "Docker контейнеры", "category": "DevOps", "published": True},
    {"id": 8, "title": "React Hooks", "category": "Веб-разработка", "published": True}
]

# GET - Получение статей с пагинацией и фильтрацией
@app.get("/articles/")
def get_articles(
    skip: int = 0, 
    limit: int = 5,
    category: Optional[str] = None,
    published: Optional[bool] = None
):
    # Фильтрация по категории
    filtered_articles = articles_db
    if category:
        filtered_articles = [article for article in filtered_articles if article["category"] == category]
    
    # Фильтрация по статусу публикации
    if published is not None:
        filtered_articles = [article for article in filtered_articles if article["published"] == published]
    
    # Пагинация
    paginated_articles = filtered_articles[skip : skip + limit]
    
    return {
        "articles": paginated_articles,
        "total": len(filtered_articles),
        "skip": skip,
        "limit": limit
    }

# GET - Поиск статей по заголовку
@app.get("/articles/search/")
def search_articles(q: str, skip: int = 0, limit: int = 10):
    # Поиск по заголовку (регистронезависимо)
    filtered_articles = [article for article in articles_db if q.lower() in article["title"].lower()]
    
    # Пагинация
    paginated_articles = filtered_articles[skip : skip + limit]
    
    return {
        "articles": paginated_articles,
        "total": len(filtered_articles),
        "query": q,
        "skip": skip,
        "limit": limit
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
            Я создал файл articles_api.py с маршрутами и параметрами запроса
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
            Запустите ваше приложение и протестируйте все маршруты с параметрами запроса через автоматическую документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Запустите сервер
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">articles_api.py</code>.</li>
              <li>Выполните команду:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">uvicorn articles_api:app --reload</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Протестируйте пагинацию
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /articles/</code> с параметрами:</li>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Без параметров (значения по умолчанию)</li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">skip=2&limit=3</code></li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">skip=0&limit=10</code></li>
              </ul>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Протестируйте фильтрацию
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /articles/</code> с параметрами фильтрации:</li>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">category=Технологии</code></li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">published=true</code></li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">category=Веб-разработка&published=true</code></li>
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
            Я протестировал пагинацию и фильтрацию через Swagger UI
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Тестирование поиска и валидации */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Проверьте поиск и валидацию параметров
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Проверьте работу поиска и автоматическую валидацию параметров запроса.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Протестируйте поиск статей:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Протестируйте эндпоинт <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /articles/search/</code> с параметром <code className="bg-gray-700 px-1.5 py-0.5 rounded">q</code>:</li>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">q=FastAPI</code></li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">q=CSS</code></li>
                <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">q=python</code> (проверьте регистронезависимость)</li>
              </ul>
              <li>Комбинируйте поиск с пагинацией: <code className="bg-gray-700 px-1.5 py-0.5 rounded">q=Веб&skip=0&limit=2</code></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Проверьте валидацию типов:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте передать строку вместо числа для параметра <code className="bg-gray-700 px-1.5 py-0.5 rounded">skip</code>: <code className="bg-gray-700 px-1.5 py-0.5 rounded">skip=abc</code></li>
              <li>Обратите внимание на автоматическую ошибку валидации (HTTP 422).</li>
              <li>Попробуйте передать некорректное значение для булева параметра <code className="bg-gray-700 px-1.5 py-0.5 rounded">published</code>: <code className="bg-gray-700 px-1.5 py-0.5 rounded">published=maybe</code></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Исследуйте документацию:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте ReDoc (<code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/redoc</code>) и сравните с Swagger UI.</li>
              <li>Обратите внимание, как параметры запроса отображаются в схеме API.</li>
              <li>Проверьте, как описываются возможные значения для булевых параметров.</li>
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
            Я проверил поиск, валидацию и изучил документацию
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
              Теперь вы умеете работать с параметрами запроса в FastAPI! Вы создали API с пагинацией, фильтрацией и поиском, протестировали валидацию типов и изучили автоматическую документацию.
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