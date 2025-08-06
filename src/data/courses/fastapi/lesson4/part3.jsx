// src/data/courses/fastapi/lesson4/part3.jsx
import React, { useState } from 'react';
import { BookOpen, Eye, FileText, Play, CheckCircle, Zap, MousePointer } from 'lucide-react';

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
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Изучение и тестирование документации API</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить работу с автоматической документацией FastAPI через Swagger UI и ReDoc.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание приложения с документацией */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Задание 1: Создайте приложение с расширенной документацией
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение с несколькими маршрутами и улучшенной документацией.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл docs_app.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">docs_app.py</code>.</li>
              <li>Добавьте следующий код с улучшенной документацией:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI
from typing import Optional

# Создаем приложение с метаданными для документации
app = FastAPI(
    title="API для управления библиотекой",
    description="Это API позволяет управлять книгами и авторами в библиотеке",
    version="1.0.0"
)

@app.get("/", summary="Корневой эндпоинт", description="Возвращает приветственное сообщение")
def read_root():
    """
    Возвращает приветственное сообщение от API.
    
    - **return**: JSON объект с сообщением
    """
    return {"message": "Добро пожаловать в API библиотеки!"}

@app.get("/books/{book_id}", 
         summary="Получить информацию о книге",
         description="Возвращает информацию о книге по её ID")
def read_book(book_id: int, category: Optional[str] = None):
    """
    Получает информацию о книге.
    
    - **book_id**: ID книги (целое число)
    - **category**: Опциональная категория книги (строка)
    - **return**: JSON объект с информацией о книге
    """
    return {
        "book_id": book_id,
        "title": "Пример книги",
        "author": "Неизвестный автор",
        "category": category
    }

@app.get("/authors/{author_id}", 
         summary="Получить информацию об авторе",
         description="Возвращает информацию об авторе по его ID")
def read_author(author_id: int, include_books: bool = False):
    """
    Получает информацию об авторе.
    
    - **author_id**: ID автора (целое число)
    - **include_books**: Включать ли список книг автора (булево значение)
    - **return**: JSON объект с информацией об авторе
    """
    author_data = {
        "author_id": author_id,
        "name": "Имя автора",
        "bio": "Краткая биография автора"
    }
    
    if include_books:
        author_data["books"] = ["Книга 1", "Книга 2"]
    
    return author_data`}
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
            Я создал файл docs_app.py с улучшенной документацией
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Запуск и изучение документации */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-purple-400" />
          Задание 2: Запустите приложение и изучите документацию
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Запустите сервер и изучите автоматически сгенерированную документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Запустите сервер
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте терминал в папке с файлом <code className="bg-gray-700 px-1.5 py-0.5 rounded">docs_app.py</code>.</li>
              <li>Выполните команду:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">uvicorn docs_app:app --reload</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Изучите Swagger UI
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте браузер и перейдите по адресу <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.</li>
              <li>Обратите внимание на заголовок и описание API.</li>
              <li>Изучите, как отображаются эндпоинты с описаниями и параметрами.</li>
              <li>Разверните каждый эндпоинт и посмотрите на секции "Description" и "Parameters".</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Изучите ReDoc
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте в браузере <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/redoc</code>.</li>
              <li>Сравните внешний вид с Swagger UI.</li>
              <li>Обратите внимание на структуру документации и навигацию.</li>
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
            Я изучил обе системы документации
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Тестирование API через документацию */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-cyan-400" />
          Задание 3: Протестируйте API через Swagger UI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Используйте Swagger UI для тестирования вашего API.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Протестируйте следующие сценарии:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите к эндпоинту <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /books/&#123;book_id&#125;</code> в Swagger UI.</li>
              <li>Нажмите кнопку <span className="font-medium text-green-300">"Try it out"</span>.</li>
              <li>Введите значение для <code className="bg-gray-700 px-1.5 py-0.5 rounded">book_id</code> (например, 123).</li>
              <li>Введите значение для <code className="bg-gray-700 px-1.5 py-0.5 rounded">category</code> (например, "Фантастика").</li>
              <li>Нажмите кнопку <span className="font-medium text-blue-300">"Execute"</span>.</li>
              <li>Проверьте ответ сервера в разделе "Responses".</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Протестируйте эндпоинт авторов:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите к эндпоинту <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /authors/&#123;author_id&#125;</code>.</li>
              <li>Нажмите <span className="font-medium text-green-300">"Try it out"</span>.</li>
              <li>Введите ID автора (например, 456).</li>
              <li>Попробуйте изменить значение параметра <code className="bg-gray-700 px-1.5 py-0.5 rounded">include_books</code> на <code className="bg-gray-700 px-1.5 py-0.5 rounded">true</code>.</li>
              <li>Выполните запрос и проверьте, как изменился ответ.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Исследуйте структуру ответов:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Обратите внимание на раздел "Responses" для каждого эндпоинта.</li>
              <li>Посмотрите, как отображаются возможные коды состояния (200, 422 и т.д.).</li>
              <li>Изучите схему возвращаемых данных в разделе "Schemas".</li>
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
            Я протестировал API через Swagger UI и изучил структуру ответов
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
              Теперь вы умеете работать с автоматической документацией FastAPI! Вы научились запускать приложения с улучшенной документацией, изучать Swagger UI и ReDoc, а также тестировать API прямо в браузере.
              В следующем уроке мы подробнее рассмотрим работу с параметрами запроса и валидацией данных.
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