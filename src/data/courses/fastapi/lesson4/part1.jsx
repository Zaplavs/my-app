// src/data/courses/fastapi/lesson4/part1.jsx
import React from 'react';
import { FileText, Code, Play, Zap, BookOpen, MousePointer, Eye } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📘 Урок 4: Документация API - Swagger UI и ReDoc</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Интерактивная документация вашего FastAPI приложения</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое автоматическая документация в FastAPI, научиться использовать Swagger UI и ReDoc для тестирования API.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое документация API? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Что такое документация API?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Документация API</span> — это руководство, которое описывает, как использовать ваше API. Она содержит информацию о:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Доступных эндпоинтах (URL-адресах)</li>
            <li>Методах HTTP (GET, POST, PUT, DELETE и т.д.)</li>
            <li>Параметрах запроса и теле запроса</li>
            <li>Формате ответа</li>
            <li>Кодах состояния HTTP</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Зачем нужна документация:</span> Она помогает разработчикам понимать, как взаимодействовать с API, без необходимости изучать исходный код. Также она позволяет тестировать API прямо в браузере.
            </p>
          </div>
        </div>
      </div>

      {/* Автоматическая документация в FastAPI */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-purple-400" />
          Автоматическая документация в FastAPI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Одна из самых сильных сторон FastAPI — это <span className="font-medium text-purple-300">автоматическая генерация документации</span>. Вам не нужно вручную писать документацию — FastAPI создает ее сам на основе вашего кода!
          </p>
          <p>
            Это возможно благодаря использованию аннотаций типов Python и стандарту <span className="font-medium">OpenAPI</span> (ранее назывался Swagger).
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Swagger UI */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Swagger UI</h3>
              <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">Интерактивный</span>
            </div>
            <p className="text-gray-300 mb-3">
              <span className="font-medium">Swagger UI</span> — это интерактивный интерфейс для документации API, который позволяет:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
              <li>Визуализировать все доступные эндпоинты</li>
              <li>Тестировать API прямо в браузере</li>
              <li>Автоматически генерировать примеры запросов и ответов</li>
              <li>Просматривать схему данных</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                🔗 <span className="font-medium">Адрес:</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>
              </p>
            </div>
          </div>

          {/* ReDoc */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. ReDoc</h3>
            </div>
            <p className="text-gray-300 mb-3">
              <span className="font-medium">ReDoc</span> — это альтернативный, более минималистичный интерфейс документации, который:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
              <li>Предоставляет более читаемое и структурированное представление</li>
              <li>Оптимизирован для чтения документации</li>
              <li>Имеет более современный дизайн</li>
              <li>Подходит для публикации документации для внешних пользователей</li>
            </ul>
            <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
              <p className="text-purple-300 text-sm">
                🔗 <span className="font-medium">Адрес:</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/redoc</code>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Преимущества автоматической документации
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
            <li>⏱️ Экономия времени на написание документации вручную</li>
            <li>✅ Всегда актуальна, так как генерируется из кода</li>
            <li>🧪 Возможность тестирования API без дополнительных инструментов</li>
            <li>🤝 Упрощает сотрудничество между разработчиками</li>
          </ul>
        </div>
      </div>

      {/* Изучение Swagger UI */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MousePointer className="w-5 h-5 text-orange-400" />
          Работа с Swagger UI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте подробно рассмотрим интерфейс Swagger UI:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Основной интерфейс
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="font-medium">Заголовок API</span> — название вашего приложения и краткое описание</li>
              <li><span className="font-medium">Список эндпоинтов</span> — все доступные маршруты, сгруппированные по методам HTTP</li>
              <li><span className="font-medium">Схема</span> — описание моделей данных, используемых в API</li>
              <li><span className="font-medium">Авторизация</span> — если в API используется аутентификация</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-xs">
                GET
              </div>
              <div className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">
                POST
              </div>
              <div className="px-3 py-1 bg-yellow-900/30 text-yellow-300 rounded-full text-xs">
                PUT
              </div>
              <div className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-xs">
                DELETE
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Тестирование эндпоинтов
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Нажмите на любой эндпоинт, чтобы развернуть его детали</li>
              <li>Вы увидите описание, параметры и примеры запросов/ответов</li>
              <li>Нажмите кнопку <span className="font-medium text-green-300">"Try it out"</span>, чтобы активировать режим тестирования</li>
              <li>Заполните необходимые параметры и нажмите <span className="font-medium text-blue-300">"Execute"</span></li>
              <li>Swagger выполнит запрос и покажет ответ сервера</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Совет:</span> Обратите внимание на раздел "Responses" — он показывает возможные коды состояния и форматы ответов.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-cyan-400" />
          Практический пример с документацией
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте создадим простое приложение и посмотрим, как выглядит его документация:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Пример приложения с документацией
            </h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`from fastapi import FastAPI
from typing import Optional

app = FastAPI(
    title="Мое первое API",
    description="Пример API с автоматической документацией",
    version="1.0.0"
)

@app.get("/")
def read_root():
    return {"message": "Добро пожаловать в наше API!"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.get("/users/{user_id}")
def read_user(user_id: int, include_profile: bool = False):
    user_data = {"user_id": user_id}
    if include_profile:
        user_data["profile"] = {"name": "Имя пользователя", "age": 30}
    return user_data`}
              </pre>
            </div>
            <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
              <p className="text-green-300 text-sm">
                ✨ <span className="font-medium">Обратите внимание:</span> Мы добавили параметры в конструктор FastAPI для улучшения документации (title, description, version).
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Что вы увидите в документации
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Заголовок "Мое первое API" и описание "Пример API с автоматической документацией"</li>
              <li>Три эндпоинта: <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /items/&#123;item_id&#125;</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded">GET /users/&#123;user_id&#125;</code></li>
              <li>Для эндпоинта <code className="bg-gray-700 px-1.5 py-0.5 rounded">/items/&#123;item_id&#125;</code> будет видно, что <code className="bg-gray-700 px-1.5 py-0.5 rounded">item_id</code> — это integer, а <code className="bg-gray-700 px-1.5 py-0.5 rounded">q</code> — опциональный string</li>
              <li>Для эндпоинта <code className="bg-gray-700 px-1.5 py-0.5 rounded">/users/&#123;user_id&#125;</code> будет видно, что <code className="bg-gray-700 px-1.5 py-0.5 rounded">include_profile</code> — это boolean параметр</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Лучшие практики документации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          Лучшие практики для улучшения документации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Чтобы ваша автоматическая документация была максимально полезной, следуйте этим рекомендациям:
          </p>
          
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-blue-400">1</span>
              </div>
              <div>
                <h4 className="font-bold text-blue-300">Добавляйте описания</h4>
                <p className="text-gray-400 text-sm">Используйте docstrings для функций и параметров для добавления описаний в документацию.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-green-400">2</span>
              </div>
              <div>
                <h4 className="font-bold text-green-300">Используйте аннотации типов</h4>
                <p className="text-gray-400 text-sm">Всегда указывайте типы параметров и возвращаемых значений для точной генерации схемы.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-yellow-400">3</span>
              </div>
              <div>
                <h4 className="font-bold text-yellow-300">Настраивайте метаданные</h4>
                <p className="text-gray-400 text-sm">Добавляйте title, description и version при создании экземпляра FastAPI.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-purple-400">4</span>
              </div>
              <div>
                <h4 className="font-bold text-purple-300">Тестируйте документацию</h4>
                <p className="text-gray-400 text-sm">Регулярно проверяйте документацию в Swagger UI и ReDoc, чтобы убедиться в ее корректности.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <BookOpen className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 📚</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как работает автоматическая документация в FastAPI. Вы изучили Swagger UI и ReDoc, поняли, как тестировать API прямо в браузере.
              В следующем уроке мы подробно разберем работу с параметрами запроса и валидацией данных.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;