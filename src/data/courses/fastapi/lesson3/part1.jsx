// src/data/courses/fastapi/lesson3/part1.jsx
import React from 'react';
import { Code, Play, Zap, FileText, Server, Route, Terminal } from 'lucide-react';

const Part1 = () => {
  // Определяем строки кода как константы, чтобы избежать проблем с экранированием в JSX
  const codeExample1 = `from fastapi import FastAPI`;
  const codeExample2 = `app = FastAPI()`;
  const codeExample3 = `@app.get("/")
def read_root():
    return {"Hello": "World"}`;
  const codeExample4 = `from fastapi import FastAPI

# Создаем экземпляр приложения FastAPI
app = FastAPI()

# Определяем маршрут для корневого пути "/"
@app.get("/")
def read_root():
    # Возвращаем JSON объект
    return {"Hello": "World"}

# Добавим еще один маршрут для демонстрации
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}`;
  const codeExample5 = `uvicorn main:app --reload`;
  const returnExample1 = 'return {"Hello": "World"}';
  const returnExample2 = 'return {"item_id": item_id, "q": q}';
  const jsonExample1 = '{"Hello": "World"}';
  const jsonExample2 = '{"item_id": 5, "q": null}';
  const jsonExample3 = '{"item_id": 5, "q": "test"}';

  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Play className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🚀 Урок 3: Первое приложение - "Hello, World!" API</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание вашего первого FastAPI приложения</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Создать простое API приложение с использованием FastAPI, понять основные компоненты и научиться запускать сервер разработки.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое API? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-green-400" />
          Что такое API?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">API (Application Programming Interface)</span> — это набор правил и протоколов, который позволяет различным программам взаимодействовать друг с другом.
          </p>
          <p>
            В контексте веб-разработки, <span className="font-medium">Web API</span> — это интерфейс, который предоставляет данные или функциональность через интернет. Когда вы отправляете запрос на определенный URL, API возвращает вам данные (обычно в формате JSON).
          </p>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Когда мобильное приложение запрашивает погоду, оно отправляет запрос к API погодного сервиса, который возвращает данные в формате JSON.
            </p>
          </div>
        </div>
      </div>

      {/* Структура FastAPI приложения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Структура базового FastAPI приложения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Любое FastAPI приложение состоит из нескольких ключевых компонентов:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Импорт FastAPI */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Импорт FastAPI</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Первая строка любого FastAPI приложения — импорт класса FastAPI:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{codeExample1}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ <span className="font-medium">Что происходит:</span> Мы импортируем класс FastAPI из библиотеки fastapi, чтобы создать наше приложение.
            </div>
          </div>

          {/* Создание экземпляра приложения */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Создание экземпляра приложения</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Создаем экземпляр класса FastAPI, который будет нашим основным приложением:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{codeExample2}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Переменная app:</span> Эта переменная содержит наше приложение и будет использоваться для определения маршрутов и запуска сервера.
            </div>
          </div>

          {/* Определение маршрута */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Route className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-300">3. Определение маршрута</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Маршрут (route) определяет, какой код будет выполняться при обращении к определенному URL. Мы используем декораторы для определения маршрутов:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{codeExample3}</code></pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
                <span className="font-medium">@app.get("/")</span> — декоратор, определяющий GET-запрос на корневой путь
              </div>
              <div className="p-2 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-xs">
                <span className="font-medium">read_root()</span> — функция, которая выполняется при запросе
              </div>
              <div className="p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
                <span className="font-medium">{returnExample1}</span> — возвращаемые данные в формате JSON
              </div>
            </div>
            <div className="mt-3 p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-xs">
              🛣️ <span className="font-medium">Маршруты:</span> Это пути (endpoints), по которым пользователи могут взаимодействовать с вашим API.
            </div>
          </div>
        </div>
      </div>

      {/* Создание первого приложения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-red-400" />
          Пошаговое создание первого приложения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте создадим наше первое приложение шаг за шагом:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Шаг 1: Создание файла */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте файл main.py
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте текстовый редактор (например, VS Code, PyCharm или обычный Блокнот).</li>
              <li>Создайте новый файл.</li>
              <li>Сохраните его с именем <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.py</code> в папке вашего проекта.</li>
            </ul>
          </div>

          {/* Шаг 2: Написание кода */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Добавьте код в файл
            </h3>
            <p className="text-gray-300 mb-3">
              Вставьте следующий код в ваш файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.py</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{codeExample4}
              </pre>
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 <span className="font-medium">Объяснение кода:</span> Мы создали два маршрута: корневой (для главной страницы) и маршрут для получения информации о предмете по его ID.
              </p>
            </div>
          </div>

          {/* Шаг 3: Запуск сервера */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Запустите сервер разработки
            </h3>
            <p className="text-gray-300 mb-3">
              Откройте терминал в папке с вашим файлом и выполните команду:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{codeExample5}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
                <span className="font-medium">main</span> — имя файла без .py
              </div>
              <div className="p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
                <span className="font-medium">app</span> — переменная приложения в файле
              </div>
              <div className="p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-xs">
                <span className="font-medium">--reload</span> — автоматическая перезагрузка при изменениях
              </div>
            </div>
            <div className="mt-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
              <p className="text-purple-300 text-sm">
                ⚡ <span className="font-medium">Что происходит:</span> Uvicorn запускает сервер разработки, который будет обслуживать ваше приложение на адресе http://127.0.0.1:8000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Проверка работы приложения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-orange-400" />
          Проверка работы приложения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После запуска сервера вы можете проверить работу вашего API:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Открытие в браузере */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Откройте браузер
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте веб-браузер (Chrome, Firefox, Safari и т.д.).</li>
              <li>Перейдите по адресу <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000</code>.</li>
              <li>Вы должны увидеть JSON ответ: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{jsonExample1}</code>.</li>
            </ul>
          </div>

          {/* Документация API */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Проверьте документацию
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>FastAPI автоматически генерирует документацию для вашего API.</li>
              <li>Перейдите по адресу <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code> для просмотра Swagger UI.</li>
              <li>Также доступна документация в формате ReDoc: <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/redoc</code>.</li>
            </ul>
            <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded-lg">
              <p className="text-green-300 text-sm">
                📚 <span className="font-medium">Документация:</span> Это интерактивная документация, которая позволяет тестировать ваши endpoints прямо в браузере.
              </p>
            </div>
          </div>

          {/* Тестирование второго маршрута */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Протестируйте второй маршрут
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите по адресу <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/items/5</code>.</li>
              <li>Вы должны получить ответ: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{jsonExample2}</code>.</li>
              <li>Попробуйте добавить параметр запроса: <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/items/5?q=test</code>.</li>
              <li>Теперь ответ будет: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{jsonExample3}</code>.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Структура ответа сервера */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Server className="w-5 h-5 text-cyan-400" />
          Что происходит при запросе?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Когда вы отправляете запрос к вашему API, происходит следующее:
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-blue-400">1</span>
              </div>
              <div>
                <h4 className="font-bold text-blue-300">Клиент отправляет запрос</h4>
                <p className="text-gray-400 text-sm">Браузер или другое приложение отправляет HTTP-запрос на определенный URL.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-green-400">2</span>
              </div>
              <div>
                <h4 className="font-bold text-green-300">FastAPI обрабатывает маршрут</h4>
                <p className="text-gray-400 text-sm">Сервер проверяет, соответствует ли URL одному из определенных маршрутов.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-yellow-400">3</span>
              </div>
              <div>
                <h4 className="font-bold text-yellow-300">Выполняется функция обработчик</h4>
                <p className="text-gray-400 text-sm">FastAPI вызывает соответствующую функцию, определенную в вашем коде.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
              <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-purple-400">4</span>
              </div>
              <div>
                <h4 className="font-bold text-purple-300">Возвращается ответ</h4>
                <p className="text-gray-400 text-sm">Функция возвращает данные, которые FastAPI преобразует в JSON и отправляет клиенту.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Play className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь у вас есть полностью рабочее FastAPI приложение! Вы узнали, что такое API, как создать базовое приложение, определить маршруты и запустить сервер разработки.
              В следующем уроке мы подробно разберем работу с маршрутами, параметрами и телом запроса.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;