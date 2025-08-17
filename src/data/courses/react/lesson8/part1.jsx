// src/data/courses/react/lesson8/part1.jsx
import React from 'react';
import { Download, Wifi, AlertTriangle, Database, RefreshCw, Server, Code } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Server className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🌐 Урок 8: Работа с API и fetch</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Получение данных с сервера в React</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое API и как взаимодействовать с ними в React, освоить использование <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">fetch</code> для получения данных, научиться правильно обрабатывать состояния загрузки, ошибки и пустые данные, реализовывать очистку при размонтировании компонента.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое API? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Wifi className="w-5 h-5 text-green-400" />
          Что такое API?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">API (Application Programming Interface)</span> — это <span className="font-medium">интерфейс программирования приложений</span>, который позволяет различным программам <span className="font-medium">взаимодействовать</span> друг с другом.
          </p>
          <p>
            В контексте веб-разработки, <span className="font-medium">Web API</span> — это <span className="font-medium">точка входа</span> на сервер, через которую клиентские приложения (например, браузер) могут <span className="font-medium">запрашивать данные</span> или <span className="font-medium">выполнять операции</span>.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример Web API:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{"// Получение списка пользователей\nGET https://jsonplaceholder.typicode.com/users\n\n// Получение конкретного пользователя\nGET https://jsonplaceholder.typicode.com/users/1\n\n// Создание нового пользователя\nPOST https://jsonplaceholder.typicode.com/users"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример ответа API:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{"{\n  \"id\": 1,\n  \"name\": \"Leanne Graham\",\n  \"email\": \"Sincere@april.biz\"\n}"}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Типы Web API:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">REST API</span> — основан на HTTP-методах (GET, POST, PUT, DELETE)</li>
                <li><span className="font-medium">GraphQL</span> — позволяет клиенту запрашивать только нужные данные</li>
                <li><span className="font-medium">SOAP</span> — более сложный протокол, использующий XML</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Что такое fetch? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-yellow-400" />
          Что такое fetch?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">fetch</code> — это <span className="font-medium">встроенный метод</span> в браузерах, который позволяет <span className="font-medium">выполнять сетевые запросы</span> к серверам. Он является <span className="font-medium">современной альтернативой</span> старому <code className="bg-gray-700 px-1 rounded">XMLHttpRequest</code>.
          </p>
          <p>
            <code className="bg-gray-700 px-1 rounded">fetch</code> возвращает <code className="bg-gray-700 px-1 rounded">Promise</code>, что делает его удобным для работы с асинхронными операциями.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Синтаксис fetch</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-purple-300 text-sm"><code>{"fetch(url, options)\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Ошибка:', error));"}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm mt-3">
            <li>
              <code className="bg-gray-700 px-1 rounded">url</code> — адрес API-эндпоинта
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">options</code> — опциональный объект с настройками запроса (метод, заголовки, тело и т.д.)
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">response.json()</code> — преобразует ответ в JSON
            </li>
          </ul>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Простой GET-запрос:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"fetch('https://jsonplaceholder.typicode.com/users')\n  .then(response => response.json())\n  .then(users => console.log(users));"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <p className="text-sm text-gray-400 mb-2">POST-запрос с данными:</p>
            <pre className="text-orange-300 text-sm overflow-x-auto">
              <code>{"fetch('https://jsonplaceholder.typicode.com/users', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    name: 'Новый пользователь',\n    email: 'user@example.com'\n  })\n})\n  .then(response => response.json())\n  .then(newUser => console.log(newUser));"}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Базовый пример получения данных */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Базовый пример получения данных с API
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим базовый пример получения данных с API и отображения их в React-компоненте.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">Компонент списка пользователей</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-blue-300 text-sm"><code>{"import { useState, useEffect } from 'react';\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n  \n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then(response => response.json())\n      .then(data => setUsers(data));\n  }, []);\n  \n  return (\n    <ul>\n      {users.map(user => (\n        <li key={user.id}>\n          {user.name} ({user.email})\n        </li>\n      ))}\n    </ul>\n  );\n}"}</code></pre>
          </div>
          <p className="text-gray-400 text-xs mt-3">
            Этот пример показывает базовую реализацию, но в нем <span className="font-medium">не хватает</span> обработки состояний загрузки и ошибок.
          </p>
        </div>
      </div>

      {/* Обработка состояний загрузки и ошибок */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RefreshCw className="w-5 h-5 text-orange-400" />
          Обработка состояний: загрузка, ошибки, пустые данные
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При работе с API <span className="font-medium">всегда</span> необходимо учитывать различные состояния приложения. Пользователь должен понимать, что происходит в каждый момент времени.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <RefreshCw className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Состояние загрузки (loading)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Показываем пользователю, что данные <span className="font-medium">загружаются</span>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm"><code>{"const [loading, setLoading] = useState(true);\n\nuseEffect(() => {\n  setLoading(true);\n  fetch('https://jsonplaceholder.typicode.com/users')\n    .then(response => response.json())\n    .then(data => {\n      setUsers(data);\n      setLoading(false);\n    });\n}, []);\n\n{loading && <div>Загрузка...</div>}"}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">Состояние ошибки (error)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Обрабатываем и показываем пользователю <span className="font-medium">ошибки</span> при загрузке данных.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-red-300 text-sm"><code>{"const [error, setError] = useState(null);\n\nuseEffect(() => {\n  fetch('https://jsonplaceholder.typicode.com/users')\n    .then(response => {\n      if (!response.ok) {\n        throw new Error('Ошибка сети');\n      }\n      return response.json();\n    })\n    .then(data => setUsers(data))\n    .catch(error => setError(error.message));\n}, []);\n\n{error && <div>Ошибка: {error}</div>}"}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">Пустые данные</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Обрабатываем случай, когда <span className="font-medium">данные успешно загружены</span>, но <span className="font-medium">оказались пустыми</span>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-purple-300 text-sm"><code>{"{!loading && !error && users.length === 0 && (\n  <div>Нет данных для отображения</div>\n)}\n\n{!loading && !error && users.length > 0 && (\n  <ul>\n    {users.map(user => (\n      <li key={user.id}>{user.name}</li>\n    ))}\n  </ul>\n)}"}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Полный пример с обработкой всех состояний */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Полный пример компонента с обработкой всех состояний
        </h2>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Server className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-yellow-300">Компонент UserList с полной обработкой состояний</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-yellow-300 text-sm"><code>{"import { useState, useEffect } from 'react';\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    // Функция для загрузки данных\n    const fetchUsers = () => {\n      setLoading(true);\n      setError(null);\n      \n      fetch('https://jsonplaceholder.typicode.com/users')\n        .then(response => {\n          if (!response.ok) {\n            throw new Error(`HTTP error! status: ${response.status}`);\n          }\n          return response.json();\n        })\n        .then(data => {\n          setUsers(data);\n          setLoading(false);\n        })\n        .catch(error => {\n          setError(error.message);\n          setLoading(false);\n        });\n    };\n    \n    fetchUsers();\n  }, []);\n  \n  // Отображение состояния загрузки\n  if (loading) {\n    return <div className=\"loading\">Загрузка пользователей...</div>;\n  }\n  \n  // Отображение ошибки\n  if (error) {\n    return (\n      <div className=\"error\">\n        <p>Ошибка загрузки: {error}</p>\n        <button onClick={() => window.location.reload()}>\n          Повторить попытку\n        </button>\n      </div>\n    );\n  }\n  \n  // Отображение пустых данных\n  if (users.length === 0) {\n    return <div className=\"no-data\">Нет пользователей для отображения</div>;\n  }\n  \n  // Отображение данных\n  return (\n    <div>\n      <h2>Список пользователей</h2>\n      <ul>\n        {users.map(user => (\n          <li key={user.id}>\n            <strong>{user.name}</strong> - {user.email}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}"}</code></pre>
          </div>
        </div>
      </div>

      {/* Очистка при размонтировании */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          Очистка при размонтировании компонента
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При работе с асинхронными операциями (такими как <code className="bg-gray-700 px-1 rounded">fetch</code>) важно <span className="font-medium">очищать</span> выполнение при <span className="font-medium">размонтировании</span> компонента, чтобы избежать <span className="font-medium">утечек памяти</span> и <span className="font-medium">ошибок</span>.
          </p>
          <p>
            Проблема возникает, когда компонент <span className="font-medium">размонтируется</span> до завершения запроса, но запрос <span className="font-medium">всё равно пытается обновить состояние</span> уже несуществующего компонента.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Проблема без очистки:</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{"// Это может вызвать ошибку!\nuseEffect(() => {\n  fetch('https://api.example.com/data')\n    .then(response => response.json())\n    .then(data => setUsers(data)); // Если компонент размонтирован, будет ошибка!\n}, []);"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Решение с очисткой:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"useEffect(() => {\n  let isMounted = true;\n  \n  fetch('https://api.example.com/data')\n    .then(response => response.json())\n    .then(data => {\n      if (isMounted) {\n        setUsers(data);\n      }\n    });\n  \n  return () => {\n    isMounted = false;\n  };\n}, []);"}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Полный пример с очисткой</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-purple-300 text-sm"><code>{"import { useState, useEffect } from 'react';\n\nfunction SafeUserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    // Флаг для отслеживания монтирования\n    let isMounted = true;\n    \n    const fetchUsers = async () => {\n      try {\n        const response = await fetch('https://jsonplaceholder.typicode.com/users');\n        \n        if (!response.ok) {\n          throw new Error(`HTTP error! status: ${response.status}`);\n        }\n        \n        const data = await response.json();\n        \n        // Проверяем, что компонент всё ещё смонтирован\n        if (isMounted) {\n          setUsers(data);\n          setLoading(false);\n        }\n      } catch (error) {\n        // Проверяем, что компонент всё ещё смонтирован\n        if (isMounted) {\n          setError(error.message);\n          setLoading(false);\n        }\n      }\n    };\n    \n    fetchUsers();\n    \n    // Функция очистки\n    return () => {\n      isMounted = false;\n    };\n  }, []);\n  \n  // ... остальной код рендеринга\n}"}</code></pre>
          </div>
        </div>
      </div>

      {/* Асинхронные функции и async/await */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-blue-400" />
          Асинхронные функции и async/await
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вместо использования <code className="bg-gray-700 px-1 rounded">.then()</code> и <code className="bg-gray-700 px-1 rounded">.catch()</code>, можно использовать <span className="font-medium">async/await</span> для более <span className="font-medium">читаемого</span> и <span className="font-medium">понятного</span> кода.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">С использованием .then()/.catch():</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{"useEffect(() => {\n  fetch('https://jsonplaceholder.typicode.com/users')\n    .then(response => {\n      if (!response.ok) {\n        throw new Error('Ошибка сети');\n      }\n      return response.json();\n    })\n    .then(data => setUsers(data))\n    .catch(error => setError(error.message));\n}, []);"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">С использованием async/await:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"useEffect(() => {\n  const fetchUsers = async () => {\n    try {\n      const response = await fetch('https://jsonplaceholder.typicode.com/users');\n      \n      if (!response.ok) {\n        throw new Error('Ошибка сети');\n      }\n      \n      const data = await response.json();\n      setUsers(data);\n    } catch (error) {\n      setError(error.message);\n    }\n  };\n  \n  fetchUsers();\n}, []);"}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Преимущества async/await:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Более <span className="font-medium">линейный</span> и читаемый код</li>
                <li>Проще обрабатывать <span className="font-medium">ошибки</span> с помощью try/catch</li>
                <li>Легче <span className="font-medium">отлаживать</span> асинхронный код</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Server className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое API и как взаимодействовать с ними в React с помощью <code className="bg-gray-700 px-1 rounded">fetch</code>. Вы научились обрабатывать различные состояния при работе с API (загрузка, ошибки, пустые данные), использовать async/await для более читаемого кода и реализовывать очистку при размонтировании компонента для предотвращения утечек памяти. Работа с API — это фундаментальный навык для создания современных веб-приложений, которые получают данные с сервера. В следующих уроках мы рассмотрим более продвинутые темы, такие как POST-запросы, обработка форм с отправкой данных, использование библиотек для работы с API (например, axios) и управление состоянием приложения при работе с асинхронными данными.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;