// src/data/courses/fastapi/lesson5/part1.jsx
import React from 'react';
import { Download, Upload, Edit3, Trash2, FileText, Play, Zap, ArrowRight } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <ArrowRight className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🌐 Урок 5: Методы HTTP - GET, POST, PUT, DELETE</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Основы работы с HTTP-методами в FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое HTTP-методы, как они используются в REST API и как реализовать их в FastAPI.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое HTTP? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Что такое HTTP?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">HTTP (HyperText Transfer Protocol)</span> — это протокол прикладного уровня, используемый для передачи гипертекста (например, веб-страниц) в интернете.
          </p>
          <p>
            Когда вы открываете веб-страницу в браузере, происходит обмен сообщениями между вашим браузером (клиентом) и веб-сервером по протоколу HTTP.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Когда вы вводите URL в адресную строку и нажимаете Enter, браузер отправляет HTTP-запрос методом GET к серверу, который возвращает HTML-страницу в ответе.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое HTTP-методы? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-purple-400" />
          Что такое HTTP-методы?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            <span className="font-medium text-purple-300">HTTP-методы</span> (или глаголы) определяют, какое действие хочет выполнить клиент с ресурсом на сервере. Они являются частью HTTP-запроса и указывают серверу, что нужно сделать с данными.
          </p>
          <p>
            В контексте REST API каждый метод имеет свое семантическое значение:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* GET */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Download className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. GET</h3>
              <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">Безопасный</span>
              <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">Идемпотентный</span>
            </div>
            <p className="text-gray-300 mb-3">
              <span className="font-medium">GET</span> используется для <span className="font-medium">запроса данных</span> с сервера. Этот метод:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
              <li>Не изменяет данные на сервере</li>
              <li>Может кэшироваться браузером</li>
              <li>Может быть закладкой в браузере</li>
              <li>Данные передаются в URL (query parameters)</li>
            </ul>
            <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ <span className="font-medium">Пример:</span> Получение списка пользователей, информации о товаре, новостей.
            </div>
          </div>

          {/* POST */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Upload className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. POST</h3>
            </div>
            <p className="text-gray-300 mb-3">
              <span className="font-medium">POST</span> используется для <span className="font-medium">создания нового ресурса</span> на сервере. Этот метод:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
              <li>Отправляет данные в теле запроса</li>
              <li>Может изменять состояние сервера</li>
              <li>Не является идемпотентным (повторный запрос создаст новый ресурс)</li>
            </ul>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ✅ <span className="font-medium">Пример:</span> Создание нового пользователя, отправка формы, загрузка файла.
            </div>
          </div>

          {/* PUT */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Edit3 className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-300">3. PUT</h3>
              <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">Идемпотентный</span>
            </div>
            <p className="text-gray-300 mb-3">
              <span className="font-medium">PUT</span> используется для <span className="font-medium">полного обновления существующего ресурса</span> или создания нового, если его не существует. Этот метод:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
              <li>Отправляет полные данные ресурса в теле запроса</li>
              <li>Является идемпотентным (повторный запрос даст тот же результат)</li>
              <li>Заменяет ресурс целиком</li>
            </ul>
            <div className="mt-3 p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-xs">
              ✅ <span className="font-medium">Пример:</span> Обновление профиля пользователя, изменение всех данных товара.
            </div>
          </div>

          {/* DELETE */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Trash2 className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-300">4. DELETE</h3>
              <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">Идемпотентный</span>
            </div>
            <p className="text-gray-300 mb-3">
              <span className="font-medium">DELETE</span> используется для <span className="font-medium">удаления ресурса</span> с сервера. Этот метод:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
              <li>Удаляет указанный ресурс</li>
              <li>Является идемпотентным (повторный запрос на удаленный ресурс не изменит состояние)</li>
            </ul>
            <div className="mt-3 p-2 bg-red-900/20 border border-red-700/30 rounded text-red-300 text-xs">
              ✅ <span className="font-medium">Пример:</span> Удаление пользователя, удаление комментария, удаление товара.
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Важные понятия
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
              <p className="font-medium text-green-300">Безопасный метод</p>
              <p className="text-gray-300">Не изменяет состояние сервера (например, GET).</p>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
              <p className="font-medium text-blue-300">Идемпотентный метод</p>
              <p className="text-gray-300">Многократное выполнение дает тот же результат (например, GET, PUT, DELETE).</p>
            </div>
          </div>
        </div>
      </div>

      {/* HTTP-методы в FastAPI */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-orange-400" />
          Реализация HTTP-методов в FastAPI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В FastAPI для определения различных HTTP-методов используются соответствующие декораторы:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Декораторы для HTTP-методов
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
                <code className="text-green-300">@app.get("/path")</code>
                <p className="text-gray-300 text-sm mt-1">Для получения данных</p>
              </div>
              <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
                <code className="text-blue-300">@app.post("/path")</code>
                <p className="text-gray-300 text-sm mt-1">Для создания данных</p>
              </div>
              <div className="p-3 bg-yellow-900/20 border border-yellow-700/30 rounded">
                <code className="text-yellow-300">@app.put("/path")</code>
                <p className="text-gray-300 text-sm mt-1">Для обновления данных</p>
              </div>
              <div className="p-3 bg-red-900/20 border border-red-700/30 rounded">
                <code className="text-red-300">@app.delete("/path")</code>
                <p className="text-gray-300 text-sm mt-1">Для удаления данных</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Пример API для управления пользователями
            </h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI
from typing import List, Optional

app = FastAPI()

# Хранилище данных в памяти (в реальном приложении будет БД)
users = [
    {"id": 1, "name": "Анна", "email": "anna@example.com"},
    {"id": 2, "name": "Иван", "email": "ivan@example.com"}
]

# GET - Получение списка пользователей
@app.get("/users")
def get_users():
    return users

# GET - Получение одного пользователя по ID
@app.get("/users/{user_id}")
def get_user(user_id: int):
    for user in users:
        if user["id"] == user_id:
            return user
    return {"error": "Пользователь не найден"}

# POST - Создание нового пользователя
@app.post("/users")
def create_user(name: str, email: str):
    new_user = {
        "id": len(users) + 1,
        "name": name,
        "email": email
    }
    users.append(new_user)
    return new_user

# PUT - Обновление пользователя
@app.put("/users/{user_id}")
def update_user(user_id: int, name: Optional[str] = None, email: Optional[str] = None):
    for user in users:
        if user["id"] == user_id:
            if name is not None:
                user["name"] = name
            if email is not None:
                user["email"] = email
            return user
    return {"error": "Пользователь не найден"}

# DELETE - Удаление пользователя
@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    for i, user in enumerate(users):
        if user["id"] == user_id:
            deleted_user = users.pop(i)
            return {"message": "Пользователь удален", "user": deleted_user}
    return {"error": "Пользователь не найден"}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример с объяснением */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-cyan-400" />
          Практический пример: Как работают методы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим, как будут работать различные методы с нашим примером API:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Download className="w-5 h-5" />
              GET запросы
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="font-medium">GET /users</span> - Получить список всех пользователей</li>
              <li><span className="font-medium">GET /users/1</span> - Получить пользователя с ID=1</li>
              <li>Данные передаются в URL, не изменяют состояние сервера</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              POST запрос
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="font-medium">POST /users</span> - Создать нового пользователя</li>
              <li>Данные (name, email) передаются в теле запроса</li>
              <li>Создает новый ресурс в коллекции пользователей</li>
              <li>Возвращает созданного пользователя с новым ID</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <Edit3 className="w-5 h-5" />
              PUT запрос
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="font-medium">PUT /users/1</span> - Обновить пользователя с ID=1</li>
              <li>Данные передаются в теле запроса</li>
              <li>Заменяет все поля пользователя (или обновляет указанные)</li>
              <li>Возвращает обновленного пользователя</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
              <Trash2 className="w-5 h-5" />
              DELETE запрос
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="font-medium">DELETE /users/1</span> - Удалить пользователя с ID=1</li>
              <li>ID ресурса указывается в URL</li>
              <li>Удаляет пользователя из коллекции</li>
              <li>Возвращает сообщение об успешном удалении</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <ArrowRight className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🌐</h3>
            <p className="text-gray-300">
              Теперь вы понимаете основные HTTP-методы и как их использовать в FastAPI. Вы изучили семантику каждого метода, их особенности и практическую реализацию.
              В следующем уроке мы подробно разберем работу с параметрами запроса и телом запроса.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;