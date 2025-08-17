// src/data/courses/react/lesson9/part1.jsx
import React from 'react';
import { Eye, Code, ToggleLeft, Database, AlertTriangle, RefreshCw } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Eye className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">👁️ Урок 9: Условный рендеринг и индикаторы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Контроль отображения контента в React</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять концепцию условного рендеринга в React, освоить различные способы отображения контента в зависимости от состояния приложения, научиться создавать индикаторы загрузки, сообщения об ошибках и обрабатывать различные состояния пользовательского интерфейса.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое условный рендеринг? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ToggleLeft className="w-5 h-5 text-green-400" />
          Что такое условный рендеринг?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Условный рендеринг (Conditional Rendering)</span> — это <span className="font-medium">техника</span> в React, которая позволяет <span className="font-medium">отображать разные элементы интерфейса</span> в зависимости от <span className="font-medium">состояния приложения</span> или <span className="font-medium">значений переменных</span>.
          </p>
          <p>
            Это похоже на <span className="font-medium">условные операторы</span> в JavaScript (<code className="bg-gray-700 px-1 rounded">if</code>, <code className="bg-gray-700 px-1 rounded">else</code>, <code className="bg-gray-700 px-1 rounded">switch</code>), но применяется <span className="font-medium">в JSX</span> для определения того, <span className="font-medium">что</span> и <span className="font-medium">когда</span> показывать пользователю.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Без условного рендеринга (всегда показываем всё):</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`function UserStatus({ isLoggedIn, userName }) {\n  return (\n    <div>\n      <p>Пользователь вошёл: {isLoggedIn.toString()}</p>\n      <p>Имя пользователя: {userName}</p>\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ С условным рендерингом (показываем разное в зависимости от состояния):</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function UserStatus({ isLoggedIn, userName }) {\n  return (\n    <div>\n      {isLoggedIn ? (\n        <p>Добро пожаловать, {userName}!</p>\n      ) : (\n        <p>Пожалуйста, войдите в систему.</p>\n      )}\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Когда используется условный рендеринг:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Отображение состояния загрузки/ошибки при работе с API</li>
                <li>Показ/скрытие элементов интерфейса по условию</li>
                <li>Отображение разных компонентов в зависимости от роли пользователя</li>
                <li>Условное отображение форм и их элементов</li>
                <li>Обработка пустых данных или списков</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Основные способы условного рендеринга */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-yellow-400" />
          Основные способы условного рендеринга
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В React существует <span className="font-medium">несколько способов</span> реализации условного рендеринга. Каждый из них имеет свои особенности и применяется в разных ситуациях.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          {/* Логическое И (&&) */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <ToggleLeft className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Логическое И (&&)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Используется, когда нужно <span className="font-medium">отобразить элемент</span>, если условие <span className="font-medium">истинно</span>, и <span className="font-medium">ничего не отображать</span>, если условие <span className="font-medium">ложно</span>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{`function Notification({ hasNewMessages }) {\n  return (\n    <div>\n      <h1>Почта</h1>\n      {hasNewMessages && <span className="badge">Новые сообщения!</span>}\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Если <code className="bg-gray-700 px-1 rounded">hasNewMessages</code> равно <code className="bg-gray-700 px-1 rounded">true</code>, отображается значок. Если <code className="bg-gray-700 px-1 rounded">false</code>, <code className="bg-gray-700 px-1 rounded">null</code> или <code className="bg-gray-700 px-1 rounded">0</code> — ничего не отображается.
            </p>
          </div>
          
          {/* Тернарный оператор */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Тернарный оператор (?:)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Используется, когда нужно <span className="font-medium">выбрать между двумя вариантами</span> отображения в зависимости от условия.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`function Greeting({ isLoggedIn, userName }) {\n  return (\n    <div>\n      {isLoggedIn \n        ? <p>Добро пожаловать, {userName}!</p>\n        : <p>Пожалуйста, войдите в систему.</p>\n      }\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Если <code className="bg-gray-700 px-1 rounded">isLoggedIn</code> равно <code className="bg-gray-700 px-1 rounded">true</code>, отображается приветствие. Если <code className="bg-gray-700 px-1 rounded">false</code> — приглашение ко входу.
            </p>
          </div>
          
          {/* if/else вне JSX */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">if/else вне JSX</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Используется для <span className="font-medium">сложной логики</span> условного рендеринга, когда тернарный оператор становится <span className="font-medium">громоздким</span>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-orange-300 text-sm"><code>{`function UserDashboard({ userRole }) {\n  let content;\n  \n  if (userRole === 'admin') {\n    content = <AdminPanel />;\n  } else if (userRole === 'moderator') {\n    content = <ModeratorPanel />;\n  } else {\n    content = <UserPanel />;\n  }\n  \n  return (\n    <div>\n      <h1>Панель управления</h1>\n      {content}\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Весь условный код вынесен <span className="font-medium">до</span> возвращаемого JSX, что делает его более читаемым при сложной логике.
            </p>
          </div>
          
          {/* switch вне JSX */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">switch вне JSX</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Используется, когда нужно выбрать <span className="font-medium">один из нескольких вариантов</span> в зависимости от значения переменной.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-purple-300 text-sm"><code>{`function StatusIndicator({ status }) {\n  let indicator;\n  \n  switch (status) {\n    case 'loading':\n      indicator = <LoadingSpinner />;\n      break;\n    case 'success':\n      indicator = <SuccessIcon />;\n      break;\n    case 'error':\n      indicator = <ErrorIcon />;\n      break;\n    default:\n      indicator = <UnknownIcon />;\n  }\n  \n  return (\n    <div className="status-indicator">\n      {indicator}\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Индикаторы состояний */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RefreshCw className="w-5 h-5 text-cyan-400" />
          Индикаторы состояний в React
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При работе с асинхронными операциями (загрузка данных, отправка форм и т.д.) важно <span className="font-medium">информировать пользователя</span> о текущем состоянии приложения. Для этого используются <span className="font-medium">индикаторы состояний</span>.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          {/* Индикатор загрузки */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <RefreshCw className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Индикатор загрузки (Loading)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Показывает пользователю, что <span className="font-medium">выполняется</span> какая-то операция и нужно <span className="font-medium">подождать</span>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{`function DataList() {\n  const [data, setData] = useState([]);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    fetchData().then(result => {\n      setData(result);\n      setLoading(false);\n    });\n  }, []);\n  \n  if (loading) {\n    return <div className="loading">Загрузка данных...</div>;\n  }\n  \n  return (\n    <ul>\n      {data.map(item => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n}`}</code></pre>
            </div>
          </div>
          
          {/* Индикатор ошибки */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">Индикатор ошибки (Error)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Сообщает пользователю о <span className="font-medium">возникновении ошибки</span> и, при необходимости, предлагает <span className="font-medium">варианты действий</span>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-red-300 text-sm"><code>{`function UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    fetchUser(userId)\n      .then(setUser)\n      .catch(setError);\n  }, [userId]);\n  \n  if (error) {\n    return (\n      <div className="error">\n        <p>Ошибка загрузки профиля: {error.message}</p>\n        <button onClick={() => window.location.reload()}>\n          Повторить попытку\n        </button>\n      </div>\n    );\n  }\n  \n  // ... остальной код\n}`}</code></pre>
            </div>
          </div>
          
          {/* Пустые данные */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">Пустые данные (Empty State)</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Отображается, когда <span className="font-medium">данные успешно загружены</span>, но <span className="font-medium">оказались пустыми</span> или <span className="font-medium">отсутствуют</span>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-yellow-300 text-sm"><code>{`function TodoList({ todos }) {\n  if (todos.length === 0) {\n    return (\n      <div className="empty-state">\n        <p>Список дел пуст</p>\n        <button onClick={addFirstTodo}>\n          Добавить первое дело\n        </button>\n      </div>\n    );\n  }\n  \n  return (\n    <ul>\n      {todos.map(todo => (\n        <li key={todo.id}>{todo.text}</li>\n      ))}\n    </ul>\n  );\n}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры условного рендеринга */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-orange-400" />
          Практические примеры условного рендеринга
        </h2>
        
        <div className="mt-6 space-y-6">
          {/* Компонент с несколькими состояниями */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Комплексный компонент с обработкой всех состояний</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`import { useState, useEffect } from 'react';\n\nfunction ProductList() {\n  const [products, setProducts] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  const [searchQuery, setSearchQuery] = useState('');\n  \n  useEffect(() => {\n    fetchProducts()\n      .then(data => {\n        setProducts(data);\n        setLoading(false);\n      })\n      .catch(err => {\n        setError(err);\n        setLoading(false);\n      });\n  }, []);\n  \n  // Фильтрация продуктов по поисковому запросу\n  const filteredProducts = products.filter(product =>\n    product.name.toLowerCase().includes(searchQuery.toLowerCase())\n  );\n  \n  // Условный рендеринг на основе состояний\n  if (loading) {\n    return (\n      <div className="loading-container">\n        <div className="spinner"></div>\n        <p>Загрузка товаров...</p>\n      </div>\n    );\n  }\n  \n  if (error) {\n    return (\n      <div className="error-container">\n        <h2>Ошибка загрузки</h2>\n        <p>{error.message}</p>\n        <button onClick={() => window.location.reload()}>\n          Повторить попытку\n        </button>\n      </div>\n    );\n  }\n  \n  return (\n    <div className="product-list">\n      <input\n        type="text\"\n        placeholder="Поиск товаров...\"\n        value={searchQuery}\n        onChange={(e) => setSearchQuery(e.target.value)}\n      />\n      \n      {searchQuery && (\n        <p>Результаты поиска для: \"{searchQuery}\"</p>\n      )}\n      \n      {filteredProducts.length === 0 ? (\n        <div className="empty-state\">\n          <p>Товары не найдены</p>\n          {searchQuery && (\n            <button onClick={() => setSearchQuery('')}>\n              Очистить поиск\n            </button>\n          )}\n        </div>\n      ) : (\n        <div className="products-grid\">\n          {filteredProducts.map(product => (\n            <ProductCard key={product.id} product={product} />\n          ))}\n        </div>\n      )}\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
          
          {/* Условное отображение элементов формы */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <ToggleLeft className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">Условное отображение элементов формы</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-cyan-300 text-sm"><code>{`function RegistrationForm() {\n  const [userType, setUserType] = useState('individual');\n  const [companyName, setCompanyName] = useState('');\n  const [firstName, setFirstName] = useState('');\n  const [lastName, setLastName] = useState('');\n  \n  return (\n    <form>\n      <div>\n        <label>\n          <input\n            type="radio\"\n            value="individual\"\n            checked={userType === 'individual'}\n            onChange={(e) => setUserType(e.target.value)}\n          />\n          Частное лицо\n        </label>\n        <label>\n          <input\n            type="radio\"\n            value="company\"\n            checked={userType === 'company'}\n            onChange={(e) => setUserType(e.target.value)}\n          />\n          Компания\n        </label>\n      </div>\n      \n      {userType === 'company' && (\n        <div>\n          <label>\n            Название компании:\n            <input\n              type="text\"\n              value={companyName}\n              onChange={(e) => setCompanyName(e.target.value)}\n            />\n          </label>\n        </div>\n      )}\n      \n      <div>\n        <label>\n          Имя:\n          <input\n            type="text\"\n            value={firstName}\n            onChange={(e) => setFirstName(e.target.value)}\n          />\n        </label>\n      </div>\n      \n      <div>\n        <label>\n          Фамилия:\n          <input\n            type="text\"\n            value={lastName}\n            onChange={(e) => setLastName(e.target.value)}\n          />\n        </label>\n      </div>\n      \n      <button type="submit\">Зарегистрироваться</button>\n    </form>\n  );\n}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Оптимизация условного рендеринга */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Оптимизация и лучшие практики
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">Избегайте сложных вложенных тернарных операторов</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">❌ Плохо (сложно читается):</p>
                <pre className="text-red-300 text-xs"><code>{`{isLoading \n  ? <Loading />\n  : error \n    ? <Error error={error} />\n    : data.length === 0\n      ? <EmptyState />\n      : <DataList data={data} />\n}`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">✅ Хорошо (четкая структура):</p>
                <pre className="text-green-300 text-xs"><code>{`{isLoading && <Loading />}\n{!isLoading && error && <Error error={error} />}\n{!isLoading && !error && data.length === 0 && <EmptyState />}\n{!isLoading && !error && data.length > 0 && <DataList data={data} />}`}</code></pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Используйте ранний возврат</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">❌ Плохо (глубокая вложенность):</p>
                <pre className="text-red-300 text-xs"><code>{`function Component() {\n  if (condition1) {\n    if (condition2) {\n      if (condition3) {\n        return <Content />;\n      } else {\n        return <Fallback1 />;\n      }\n    } else {\n      return <Fallback2 />;\n    }\n  } else {\n    return <Fallback3 />;\n  }\n}`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">✅ Хорошо (ранний возврат):</p>
                <pre className="text-green-300 text-xs"><code>{`function Component() {\n  if (!condition1) return <Fallback3 />;\n  if (!condition2) return <Fallback2 />;\n  if (!condition3) return <Fallback1 />;\n  \n  return <Content />;\n}`}</code></pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <ToggleLeft className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Лучшие практики</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Всегда обрабатывайте состояния</span> загрузки, ошибки и пустых данных при работе с асинхронными операциями</li>
              <li><span className="font-medium">Используйте логическое И (&&)</span> для простых условий отображения/скрытия</li>
              <li><span className="font-medium">Используйте тернарный оператор</span> для выбора между двумя вариантами</li>
              <li><span className="font-medium">Выносите сложную логику</span> за пределы JSX для лучшей читаемости</li>
              <li><span className="font-medium">Создавайте переиспользуемые компоненты</span> для индикаторов состояний</li>
              <li><span className="font-medium">Добавляйте анимации</span> для плавного перехода между состояниями</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Eye className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое условный рендеринг в React и как использовать различные способы его реализации (логическое И, тернарный оператор, if/else, switch). Вы научились создавать индикаторы различных состояний приложения (загрузка, ошибки, пустые данные) и применять условный рендеринг для создания адаптивного и информативного пользовательского интерфейса. Условный рендеринг — это фундаментальный навык для создания современных React-приложений, который позволяет динамически управлять отображением контента в зависимости от состояния приложения и действий пользователя. В следующих уроках мы рассмотрим более продвинутые техники управления состоянием и создание сложных интерактивных интерфейсов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;