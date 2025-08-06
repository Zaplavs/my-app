// src/data/courses/fastapi/lesson1/part1.jsx
import React from 'react';
import { Zap, FileText, Code, Monitor, Rocket } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Zap className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🚀 Урок 1: Что такое FastAPI и почему он хорош?</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Современный веб-фреймворк для Python</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое FastAPI, его преимущества и почему он стал популярным выбором для создания API.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое FastAPI? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-green-400" />
          Что такое FastAPI?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">FastAPI</span> — это современный, быстрый (высокопроизводительный) веб-фреймворк для создания API с использованием <span className="font-medium">Python 3.7+</span>.
          </p>
          <p>
            Созданный <span className="font-medium">Sebastián Ramírez</span> в 2018 году, FastAPI стал революцией в мире Python-разработки благодаря своей скорости, автоматической генерации документации и интуитивному синтаксису.
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Rocket className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 FastAPI</span> построен на основе Starlette (для веб-части) и Pydantic (для валидации данных), что делает его невероятно мощным инструментом.
            </p>
          </div>
        </div>
      </div>

      {/* Преимущества FastAPI */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          Почему FastAPI хорош?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            FastAPI предлагает множество преимуществ, которые делают его отличным выбором для разработки API:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Высокая производительность */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Rocket className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Высокая производительность</h3>
              <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">Скорость</span>
            </div>
            <p className="text-gray-300 mb-3">
              FastAPI чрезвычайно быстр — его производительность сопоставима с <span className="font-medium">Node.js</span> и <span className="font-medium">Go</span>. Это достигается благодаря использованию Starlette и асинхронного программирования.
            </p>
            <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ <span className="font-medium">Плюсы:</span> Обрабатывает тысячи запросов в секунду, минимальная задержка, эффективное использование ресурсов.
            </div>
          </div>

          {/* Автоматическая документация */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Автоматическая документация</h3>
            </div>
            <p className="text-gray-300 mb-3">
              FastAPI автоматически генерирует интерактивную документацию API в форматах <span className="font-medium">Swagger UI</span> и <span className="font-medium">ReDoc</span>. Вам не нужно писать документацию вручную!
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="font-medium text-white mb-1">Просто опишите свои endpoints:</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}`}</code></pre>
              <p className="font-medium text-white mt-3 mb-1">И получите готовую документацию:</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`http://localhost:8000/docs     # Swagger UI
http://localhost:8000/redoc    # ReDoc`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Выгода:</span> Экономия времени, всегда актуальная документация, возможность тестирования прямо в браузере.
            </div>
          </div>

          {/* Типизация и валидация */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-300">3. Строгая типизация и валидация</h3>
            </div>
            <p className="text-gray-300 mb-3">
              FastAPI использует аннотации типов Python для автоматической валидации данных, сериализации и генерации схем. Это предотвращает множество ошибок на этапе разработки.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="font-medium text-white mb-1">Автоматическая валидация:</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-xs">
              🛡️ <span className="font-medium">Безопасность:</span> Предотвращает ошибки типов, автоматическая валидация входных данных, IDE поддержка.
            </div>
          </div>

          {/* Асинхронность */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Monitor className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">4. Поддержка асинхронного программирования</h3>
            </div>
            <p className="text-gray-300 mb-3">
              FastAPI полностью поддерживает <span className="font-medium">async/await</span>, что позволяет создавать высокопроизводительные приложения, которые могут обрабатывать множество одновременных запросов.
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="font-medium text-white mb-1">Асинхронные endpoints:</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`@app.get("/async-items/")
async def read_items():
    # Асинхронная операция (например, запрос к БД)
    items = await fetch_items_from_database()
    return items`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
              ⚡ <span className="font-medium">Производительность:</span> Максимальная пропускная способность, эффективная работа с I/O операциями.
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Статистика популярности
          </h4>
          <p className="text-gray-300 text-sm">
            FastAPI входит в <span className="font-medium text-yellow-300">топ-3 самых любимых фреймворков</span> по опросам разработчиков и имеет более 50 тысяч звезд на GitHub. Его используют такие компании как Microsoft, Netflix, Uber и другие.
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🚀</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое FastAPI и почему он стал таким популярным. Вы изучили его основные преимущества: высокую производительность, автоматическую документацию, строгую типизацию и поддержку асинхронности.
              В следующем уроке мы установим FastAPI и создадим ваше первое приложение!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;