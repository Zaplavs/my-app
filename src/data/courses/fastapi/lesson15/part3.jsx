// src/data/courses/fastapi/lesson15/part3.jsx
import React, { useState } from 'react';
import { AlertTriangle, Play, CheckCircle, Terminal, Eye, Shield, XCircle } from 'lucide-react';

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
            <AlertTriangle className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Реализация обработки ошибок в API задач</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить обработку ошибок и исключений в FastAPI приложении с использованием HTTPException.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание API с базовой обработкой ошибок */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте API управления проектами с базовой обработкой ошибок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте FastAPI приложение для управления проектами с корректной обработкой ошибок.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл projects_api.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">projects_api.py</code>.</li>
              <li>Добавьте следующий код с базовой структурой и обработкой ошибок:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
{`from fastapi import FastAPI, HTTPException, status, Depends
from pydantic import BaseModel, Field, validator
from typing import List, Optional
import sqlite3
from datetime import datetime

app = FastAPI(title="API управления проектами")

# Pydantic модели
class ProjectCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=500)
    priority: int = Field(1, ge=1, le=5)  # Приоритет от 1 до 5
    deadline: Optional[str] = None

    @validator('deadline')
    def validate_deadline(cls, v):
        if v:
            try:
                datetime.strptime(v, '%Y-%m-%d')
            except ValueError:
                raise ValueError('Дата должна быть в формате YYYY-MM-DD')
        return v

class ProjectUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=1, max_length=100)
    description: Optional[str] = Field(None, max_length=500)
    priority: Optional[int] = Field(None, ge=1, le=5)
    deadline: Optional[str] = None
    is_completed: Optional[bool] = None

    @validator('deadline')
    def validate_deadline(cls, v):
        if v:
            try:
                datetime.strptime(v, '%Y-%m-%d')
            except ValueError:
                raise ValueError('Дата должна быть в формате YYYY-MM-DD')
        return v

class Project(ProjectCreate):
    id: int
    is_completed: bool = False
    created_at: str
    updated_at: str

# Имитация базы данных в памяти
fake_projects_db = {}
next_id = 1

# Вспомогательные функции
def get_project_or_404(project_id: int):
    project = fake_projects_db.get(project_id)
    if project is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Проект с ID {project_id} не найден"
        )
    return project

def validate_project_name_not_exists(name: str, exclude_id: Optional[int] = None):
    for proj_id, project in fake_projects_db.items():
        if project["name"] == name and proj_id != exclude_id:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Проект с названием '{name}' уже существует"
            )`}
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
            Я создал файл projects_api.py с базовой структурой и вспомогательными функциями
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Реализация CRUD с обработкой ошибок */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Реализуйте CRUD операции с полной обработкой ошибок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Добавьте эндпоинты CRUD с корректной обработкой всех возможных ошибок.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Реализуйте операции Create и Read
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте следующие эндпоинты в файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">projects_api.py</code>:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Глобальная переменная для ID
next_id = 1

@app.post("/projects/", response_model=Project, status_code=status.HTTP_201_CREATED)
def create_project(project: ProjectCreate):
    global next_id
    
    # Проверка уникальности названия
    validate_project_name_not_exists(project.name)
    
    # Создание проекта
    new_project = {
        "id": next_id,
        "name": project.name,
        "description": project.description,
        "priority": project.priority,
        "deadline": project.deadline,
        "is_completed": False,
        "created_at": datetime.now().isoformat(),
        "updated_at": datetime.now().isoformat()
    }
    
    fake_projects_db[next_id] = new_project
    project_id = next_id
    next_id += 1
    
    return new_project

@app.get("/projects/", response_model=List[Project])
def read_projects(
    skip: int = 0, 
    limit: int = 100,
    completed: Optional[bool] = None
):
    # Валидация параметров пагинации
    if skip < 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Параметр skip не может быть отрицательным"
        )
    
    if limit < 1 or limit > 1000:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Параметр limit должен быть от 1 до 1000"
        )
    
    # Фильтрация проектов
    projects = list(fake_projects_db.values())
    
    if completed is not None:
        projects = [p for p in projects if p["is_completed"] == completed]
    
    # Пагинация
    return projects[skip : skip + limit]

@app.get("/projects/{project_id}", response_model=Project)
def read_project(project_id: int):
    # Проверка ID
    if project_id < 1:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="ID проекта должен быть положительным числом"
        )
    
    # Получение проекта или 404
    return get_project_or_404(project_id)`}</code></pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Реализуйте операции Update и Delete
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте эндпоинты для обновления и удаления проектов:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.put("/projects/{project_id}", response_model=Project)
def update_project(project_id: int, project_update: ProjectUpdate):
    # Проверка ID
    if project_id < 1:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="ID проекта должен быть положительным числом"
        )
    
    # Получение существующего проекта
    existing_project = get_project_or_404(project_id)
    
    # Проверка уникальности названия при изменении
    if project_update.name and project_update.name != existing_project["name"]:
        validate_project_name_not_exists(project_update.name, exclude_id=project_id)
    
    # Обновление полей
    if project_update.name is not None:
        existing_project["name"] = project_update.name
    
    if project_update.description is not None:
        existing_project["description"] = project_update.description
    
    if project_update.priority is not None:
        existing_project["priority"] = project_update.priority
    
    if project_update.deadline is not None:
        existing_project["deadline"] = project_update.deadline
    
    if project_update.is_completed is not None:
        existing_project["is_completed"] = project_update.is_completed
    
    existing_project["updated_at"] = datetime.now().isoformat()
    
    return existing_project

@app.delete("/projects/{project_id}")
def delete_project(project_id: int):
    # Проверка ID
    if project_id < 1:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="ID проекта должен быть положительным числом"
        )
    
    # Получение проекта
    project = get_project_or_404(project_id)
    
    # Удаление проекта
    del fake_projects_db[project_id]
    
    return {"message": f"Проект '{project['name']}' успешно удален"}`}</code></pre>
            </div>
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
            Я реализовал CRUD операции с полной обработкой ошибок
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Тестирование обработки ошибок */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Протестируйте обработку ошибок через документацию
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Запустите сервер и протестируйте различные сценарии ошибок через автоматическую документацию.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Протестируйте ошибки 404 Not Found:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Запустите сервер: <code className="bg-gray-700 px-1.5 py-0.5 rounded">uvicorn projects_api:app --reload</code></li>
              <li>Откройте <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code></li>
              <li>Попробуйте получить несуществующий проект: <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /projects/999</code></li>
              <li>Попробуйте обновить несуществующий проект: <code className="bg-gray-700 px-1.5 py-0.5 rounded">PUT /projects/999</code></li>
              <li>Попробуйте удалить несуществующий проект: <code className="bg-gray-700 px-1.5 py-0.5 rounded">DELETE /projects/999</code></li>
              <li>Обратите внимание на коды ошибок 404 и сообщения.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Протестируйте ошибки 400 Bad Request:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте получить проект с отрицательным ID: <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /projects/-1</code></li>
              <li>Попробуйте создать проект с некорректной датой: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{"{"}"name": "Проект", "deadline": "некорректная дата"{"}"}</code></li>
              <li>Попробуйте использовать отрицательные значения для параметров пагинации.</li>
              <li>Проверьте сообщения об ошибках валидации.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Протестируйте ошибки 409 Conflict:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте проект с названием "Тестовый проект".</li>
              <li>Попробуйте создать еще один проект с тем же названием.</li>
              <li>Попробуйте изменить название существующего проекта на уже занятое.</li>
              <li>Обратите внимание на код ошибки 409 и сообщение о конфликте.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Исследуйте глобальную обработку исключений:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте в конец файла <code className="bg-gray-700 px-1.5 py-0.5 rounded">projects_api.py</code> глобальный обработчик:</li>
              <div className="bg-gray-800 p-3 rounded-lg mt-2 text-sm">
                <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(
        status_code=422,
        content={
            "detail": "Ошибка валидации данных",
            "errors": exc.errors()
        }
    )`}</code></pre>
              </div>
              <li>Перезапустите сервер и протестируйте валидацию.</li>
              <li>Попробуйте отправить данные с нарушением ограничений Pydantic.</li>
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
            Я протестировал все типы ошибок и изучил глобальную обработку исключений
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
              Теперь вы умеете обрабатывать ошибки и исключения в FastAPI! Вы создали API с полной обработкой различных типов ошибок, научились использовать HTTPException и реализовали глобальную обработку исключений.
              В следующем уроке мы рассмотрим работу с middleware и перехватчиками запросов.
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