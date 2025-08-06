// src/data/courses/fastapi/lesson2/part1.jsx
import React from 'react';
import { Terminal, Folder, Download, Settings, Shield, Zap, Code, FileText   } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Download className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔧 Урок 2: Установка и настройка окружения</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Подготовка рабочего окружения для FastAPI</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться устанавливать FastAPI и настраивать виртуальное окружение для разработки.
            </p>
          </div>
        </div>
      </div>

      {/* Требования к системе */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Требования к системе
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Перед началом работы с FastAPI необходимо убедиться, что на вашем компьютере установлены следующие компоненты:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium text-green-300">Python 3.7+</span> — FastAPI требует современную версию Python</li>
            <li><span className="font-medium text-green-300">pip</span> — менеджер пакетов Python (обычно устанавливается вместе с Python)</li>
            <li><span className="font-medium text-green-300">Терминал/Командная строка</span> — для выполнения команд установки</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Проверка версии Python:</span> Выполните команду <code className="bg-gray-700 px-1.5 py-0.5 rounded">python --version</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded">python3 --version</code> в терминале.
            </p>
          </div>
        </div>
      </div>

      {/* Виртуальное окружение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-purple-400" />
          Виртуальное окружение Python
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            <span className="font-medium text-purple-300">Виртуальное окружение</span> — это изолированное пространство для проекта Python, которое позволяет устанавливать зависимости отдельно для каждого проекта.
          </p>
          <p>
            Это предотвращает конфликты между версиями библиотек и делает проекты более управляемыми.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Создание виртуального окружения */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Folder className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Создание виртуального окружения</h3>
              <span className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">Рекомендуется</span>
            </div>
            <p className="text-gray-300 mb-3">
              Создайте виртуальное окружение в папке вашего проекта:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="font-medium text-white mb-1">Терминал (Linux/macOS):</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`python3 -m venv fastapi-env`}</code></pre>
              <p className="font-medium text-white mt-3 mb-1">Терминал (Windows):</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`python -m venv fastapi-env`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ <span className="font-medium">Плюсы:</span> Изоляция зависимостей, чистота глобального окружения, предсказуемость.
            </div>
          </div>

          {/* Активация виртуального окружения */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Terminal className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Активация виртуального окружения</h3>
            </div>
            <p className="text-gray-300 mb-3">
              После создания окружения его нужно активировать:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="font-medium text-white mb-1">Linux/macOS:</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`source fastapi-env/bin/activate`}</code></pre>
              <p className="font-medium text-white mt-3 mb-1">Windows (cmd):</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`fastapi-env\\Scripts\\activate`}</code></pre>
              <p className="font-medium text-white mt-3 mb-1">Windows (PowerShell):</p>
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`fastapi-env\\Scripts\\Activate.ps1`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚠️ <span className="font-medium">Подсказка:</span> При успешной активации вы увидите название окружения в скобках в начале строки терминала: <code className="bg-gray-700 px-1.5 py-0.5 rounded">(fastapi-env)</code>
            </div>
          </div>

          {/* Деактивация виртуального окружения */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-300">3. Деактивация виртуального окружения</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Чтобы выйти из виртуального окружения, выполните команду:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`deactivate`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-xs">
              🛑 <span className="font-medium">Важно:</span> Всегда активируйте виртуальное окружение перед началом работы над проектом.
            </div>
          </div>
        </div>
      </div>

      {/* Установка FastAPI */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-yellow-400" />
          Установка FastAPI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После активации виртуального окружения можно установить FastAPI. Рекомендуется устанавливать FastAPI со всеми дополнительными зависимостями:
          </p>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30 my-4">
            <div className="flex items-center gap-3 mb-3">
              <Terminal className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">Установка с дополнительными зависимостями</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`pip install "fastapi[all]"`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚡ <span className="font-medium">Что входит в [all]:</span> Uvicorn (сервер), Pydantic (валидация), Starlette (веб-фреймворк), а также дополнения для документации и тестирования.
            </div>
          </div>

          <p className="mt-4">
            Альтернативно, можно установить только основные компоненты:
          </p>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30 my-4">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Минимальная установка</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`pip install fastapi uvicorn[standard]`}</code></pre>
            </div>
            <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              ✅ <span className="font-medium">Когда использовать:</span> Если вы хотите контролировать зависимости или разрабатываете минимальное приложение.
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Проверка установки
            </h4>
            <p className="text-gray-300 text-sm">
              После установки проверьте, что FastAPI установлен корректно, выполнив команду:
            </p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded mt-2"><code>{`pip list | grep fastapi`}</code></pre>
          </div>
        </div>
      </div>

      {/* Первый проект */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Folder className="w-5 h-5 text-red-400" />
          Создание первого проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте структуру простого проекта для тестирования установки:
          </p>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30 my-4">
            <div className="flex items-center gap-3 mb-3">
              <Terminal className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Структура проекта</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`my_fastapi_project/
├── main.py
└── requirements.txt`}</code></pre>
            </div>
          </div>

          <p>
            Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">main.py</code> с простым приложением:
          </p>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30 my-4">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">main.py</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}`}</code></pre>
            </div>
          </div>

          <p>
            Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">requirements.txt</code> для фиксации зависимостей:
          </p>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30 my-4">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">requirements.txt</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`fastapi[all]==0.104.1`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Запуск сервера */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Запуск сервера разработки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для запуска вашего приложения используйте Uvicorn:
          </p>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30 my-4">
            <div className="flex items-center gap-3 mb-3">
              <Terminal className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">Команда запуска</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`uvicorn main:app --reload`}</code></pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
                <span className="font-medium">main</span> — имя файла без .py
              </div>
              <div className="p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
                <span className="font-medium">app</span> — объект FastAPI в файле
              </div>
              <div className="p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
                <span className="font-medium">--reload</span> — автоматическая перезагрузка при изменениях
              </div>
            </div>
          </div>

          <p>
            После запуска сервера вы увидите сообщение в терминале:
          </p>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30 my-4">
            <div className="flex items-center gap-3 mb-3">
              <Terminal className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Вывод терминала</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [XXXXX] using WatchFiles
INFO:     Started server process [XXXXX]
INFO:     Waiting for application startup.
INFO:     Application startup complete.`}</code></pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Откройте в браузере:</span> Перейдите по адресу <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000</code> для проверки работы API. Для документации перейдите на <code className="bg-gray-700 px-1.5 py-0.5 rounded">http://127.0.0.1:8000/docs</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Download className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь у вас есть полностью настроенное окружение для разработки на FastAPI. Вы узнали, как создать виртуальное окружение, установить FastAPI и запустить простое приложение.
              В следующем уроке мы подробно разберем структуру FastAPI приложения и создадим более сложный API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;