// src/data/courses/fastapi/lesson16/part1.jsx
import React from 'react';
import { Shield, Key, User, Users, FileText, Code, Zap, Settings, Lock } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Shield className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔐 Урок 16: Аутентификация и авторизация (базовый уровень)</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Защита вашего API с помощью базовой аутентификации</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое аутентификация и авторизация, и научиться реализовывать базовую защиту API в FastAPI с использованием HTTP Basic Auth.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое аутентификация и авторизация? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Key className="w-5 h-5 text-green-400" />
          Что такое аутентификация и авторизация?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Аутентификация</span> и <span className="font-medium text-purple-300">авторизация</span> — это два фундаментальных понятия в области безопасности веб-приложений:
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <User className="w-5 h-5" />
                Аутентификация (Authentication)
              </h3>
              <p className="text-gray-300 text-sm">
                Процесс <span className="font-medium">проверки личности</span> пользователя. Отвечает на вопрос: "Кто вы?".
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-xs">
                <li>Логин/пароль</li>
                <li>Биометрия</li>
                <li>Токены доступа</li>
                <li>OAuth</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Авторизация (Authorization)
              </h3>
              <p className="text-gray-300 text-sm">
                Процесс <span className="font-medium">проверки прав доступа</span> пользователя. Отвечает на вопрос: "Что вы можете делать?".
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-xs">
                <li>Роли (admin, user)</li>
                <li>Разрешения (read, write, delete)</li>
                <li>Политики доступа</li>
                <li>RBAC, ABAC</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> При входе в банковское приложение вы сначала аутентифицируетесь (вводите логин/пароль), а затем система авторизует вас на выполнение определенных действий (просмотр счетов, переводы и т.д.).
            </p>
          </div>
        </div>
      </div>

      {/* HTTP Basic Authentication */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Lock className="w-5 h-5 text-purple-400" />
          HTTP Basic Authentication
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            <span className="font-medium text-purple-300">HTTP Basic Authentication</span> — это простой встроенный механизм аутентификации в HTTP протоколе.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Как это работает */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Как работает HTTP Basic Auth</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Процесс аутентификации с использованием Basic Auth:
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-300">
              <li>Клиент отправляет запрос к защищенному ресурсу</li>
              <li>Сервер отвечает кодом 401 Unauthorized с заголовком <code className="bg-gray-700 px-1.5 py-0.5 rounded">WWW-Authenticate: Basic</code></li>
              <li>Браузер показывает диалог ввода логина/пароля</li>
              <li>Клиент отправляет заголовок <code className="bg-gray-700 px-1.5 py-0.5 rounded">Authorization: Basic base64(username:password)</code></li>
              <li>Сервер проверяет учетные данные и возвращает запрашиваемый ресурс</li>
            </ol>
            <div className="mt-4 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ⚡ <span className="font-medium">Важно:</span> Учетные данные передаются в закодированном виде, но не шифруются! Используйте только по HTTPS.
            </div>
          </div>

          {/* Реализация в FastAPI */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Реализация в FastAPI</h3>
            </div>
            <p className="text-gray-300 mb-3">
              FastAPI предоставляет удобные инструменты для работы с HTTP Basic Auth:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
import secrets

app = FastAPI()

# Создание экземпляра безопасности
security = HTTPBasic()

# Имитация базы данных пользователей
users_db = {
    "admin": "adminpass",
    "user": "userpass"
}

@app.get("/protected/")
def read_protected(credentials: HTTPBasicCredentials = Depends(security)):
    # Получение логина и пароля из запроса
    username = credentials.username
    password = credentials.password
    
    # Проверка учетных данных
    correct_password = users_db.get(username)
    if not correct_password or not secrets.compare_digest(password, correct_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверные учетные данные",
            headers={"WWW-Authenticate": "Basic"}
        )
    
    return {"message": f"Привет, {username}!"}`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300 text-xs">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">HTTPBasic()</code> — создание схемы безопасности</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">Depends(security)</code> — подключение зависимости</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">secrets.compare_digest()</code> — безопасное сравнение строк</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-orange-400" />
          Практический пример: API с защищенными ресурсами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте создадим полноценный пример API с HTTP Basic Authentication и различными уровнями доступа:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydantic import BaseModel
from typing import List
import secrets

app = FastAPI(title="API с базовой аутентификацией")

# Создание схемы безопасности
security = HTTPBasic()

# Имитация базы данных пользователей с ролями
users_db = {
    "admin": {
        "password": "admin123",
        "role": "admin"
    },
    "user": {
        "password": "user123",
        "role": "user"
    }
}

# Pydantic модели
class User(BaseModel):
    username: str
    role: str

class Item(BaseModel):
    id: int
    name: str
    owner: str

class ItemCreate(BaseModel):
    name: str

# Имитация базы данных элементов
items_db = [
    {"id": 1, "name": "Элемент 1", "owner": "admin"},
    {"id": 2, "name": "Элемент 2", "owner": "user"}
]

# Функция проверки аутентификации
def authenticate(credentials: HTTPBasicCredentials = Depends(security)):
    username = credentials.username
    password = credentials.password
    
    user_data = users_db.get(username)
    if not user_data or not secrets.compare_digest(password, user_data["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверные учетные данные",
            headers={"WWW-Authenticate": "Basic"}
        )
    
    return {"username": username, "role": user_data["role"]}

# Функция проверки роли администратора
def verify_admin(current_user: dict = Depends(authenticate)):
    if current_user["role"] != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Требуются права администратора"
        )
    return current_user

# Открытый эндпоинт
@app.get("/")
def read_root():
    return {"message": "Добро пожаловать в API с аутентификацией!"}

# Защищенный эндпоинт для получения информации о текущем пользователе
@app.get("/users/me/", response_model=User)
def read_users_me(current_user: dict = Depends(authenticate)):
    return current_user

# Защищенный эндпоинт для получения списка элементов
@app.get("/items/", response_model=List[Item])
def read_items(current_user: dict = Depends(authenticate)):
    # Пользователи видят только свои элементы, админы - все
    if current_user["role"] == "admin":
        return items_db
    else:
        return [item for item in items_db if item["owner"] == current_user["username"]]

# Защищенный эндпоинт для создания элементов (только для админов)
@app.post("/items/", response_model=Item, status_code=status.HTTP_201_CREATED)
def create_item(
    item: ItemCreate, 
    current_user: dict = Depends(verify_admin)  # Только админы
):
    new_item = {
        "id": len(items_db) + 1,
        "name": item.name,
        "owner": current_user["username"]
    }
    items_db.append(new_item)
    return new_item

# Защищенный эндпоинт для удаления элементов (только для админов)
@app.delete("/items/{item_id}")
def delete_item(
    item_id: int, 
    current_user: dict = Depends(verify_admin)  # Только админы
):
    for i, item in enumerate(items_db):
        if item["id"] == item_id:
            del items_db[i]
            return {"message": f"Элемент {item_id} успешно удален"}
    
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Элемент не найден"
    )`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-900/20 border border-green-700/30 rounded">
            <p className="font-medium text-green-300">Защищенные эндпоинты:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/me/</code> - информация о текущем пользователе</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /items/</code> - список элементов (с фильтрацией по роли)</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">POST /items/</code> - создание элементов (только админы)</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">DELETE /items/{'{'}id{'}'}</code> - удаление элементов (только админы)</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded">
            <p className="font-medium text-blue-300">Функции аутентификации:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">authenticate()</code> - базовая проверка учетных данных</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">verify_admin()</code> - проверка роли администратора</li>
              <li>Использование <code className="bg-gray-700 px-1.5 py-0.5 rounded">Depends()</code> для внедрения зависимостей</li>
              <li>Безопасное сравнение паролей</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ограничения и лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Ограничения HTTP Basic Auth и лучшие практики
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хотя HTTP Basic Authentication прост в реализации, у него есть существенные ограничения:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-red-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-red-300">Ограничения безопасности</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Учетные данные передаются в закодированном, но не зашифрованном виде</li>
                <li>Нет защиты от replay-атак</li>
                <li>Нет механизма истечения срока действия</li>
                <li>Нет возможности отозвать доступ без смены пароля</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-orange-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-orange-300">UX ограничения</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Браузерный диалог аутентификации сложно кастомизировать</li>
                <li>Нет возможности реализовать "запомнить меня"</li>
                <li>При каждом запросе передаются учетные данные</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Когда использовать</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Для внутренних инструментов и API</li>
                <li>Для временной защиты на этапе разработки</li>
                <li>Для простых микросервисов</li>
                <li>Когда не требуется сложная система ролей</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Лучшие практики для продакшена
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Использование хеширования паролей
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Использование JWT токенов
from jose import JWTError, jwt
from datetime import datetime, timedelta

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30`}</code></pre>
            </div>
          </div>
          <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
            ⚡ <span className="font-medium">Рекомендация:</span> Для продакшена используйте JWT токены, OAuth2 или другие современные схемы аутентификации.
          </div>
        </div>
      </div>

      {/* Расширенные возможности безопасности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-cyan-400" />
          Расширенные возможности безопасности в FastAPI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            FastAPI предоставляет мощные инструменты для реализации сложных схем безопасности:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">OAuth2 и Bearer токены</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Поддержка OAuth2 Password Flow</li>
              <li>JWT токены</li>
              <li>Refresh токены</li>
              <li>Scopes и permissions</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">API Keys</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Аутентификация по API ключам</li>
              <li>Header, query или cookie параметры</li>
              <li>Управление ключами</li>
              <li>Ограничение по IP</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Кастомные схемы</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Создание собственных классов безопасности</li>
              <li>Интеграция с внешними провайдерами</li>
              <li>Многофакторная аутентификация</li>
              <li>Biometric authentication</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">OpenAPI интеграция</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Автоматическая документация схем безопасности</li>
              <li>Авторизация через Swagger UI</li>
              <li>Тестирование защищенных эндпоинтов</li>
              <li>Security schemes в OpenAPI</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Пример OAuth2 Password Flow
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Логика аутентификации
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверные учетные данные",
            headers={"WWW-Authenticate": "Bearer"}
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}`}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Shield className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🔐</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое аутентификация и авторизация, и как реализовать базовую защиту API с помощью HTTP Basic Authentication в FastAPI. Вы узнали о ограничениях Basic Auth и лучших практиках для продакшена.
              В следующем уроке мы рассмотрим работу с middleware и перехватчиками запросов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;