// src/data/courses/react/lesson13/part1.jsx
import React from 'react';
import { Settings, Code, Database, Share2, RefreshCw, Hook } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Hook className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🎣 Урок 13: Кастомные хуки</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Вынос логики и переиспользование кода</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое кастомные хуки в React, научиться создавать их для выноса повторяющейся логики из компонентов, освоить принципы именования, изучить лучшие практики создания переиспользуемых хуков и применять их для решения типовых задач разработки.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое кастомные хуки? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Что такое кастомные хуки?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Кастомный хук (Custom Hook)</span> — это <span className="font-medium">функция</span> в React, которая <span className="font-medium">начинается с "use"</span> и <span className="font-medium">использует другие хуки</span> внутри себя. Кастомные хуки позволяют <span className="font-medium">выносить логику</span> из компонентов и <span className="font-medium">делать её переиспользуемой</span>.
          </p>
          <p>
            Это <span className="font-medium">механизм абстракции</span> в React, который помогает соблюдать принцип <span className="font-medium">DRY (Don't Repeat Yourself)</span> — <span className="font-medium">не повторяйся</span>. Вместо того чтобы копировать один и тот же код в несколько компонентов, мы выносим его в кастомный хук и используем его повторно.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Без кастомного хука (дублирование кода):</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{"// Компонент 1\nfunction ComponentA() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    fetchData()\n      .then(result => {\n        setData(result);\n        setLoading(false);\n      })\n      .catch(err => {\n        setError(err);\n        setLoading(false);\n      });\n  }, []);\n  \n  // ... рендеринг\n}\n\n// Компонент 2\nfunction ComponentB() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    fetchData()\n      .then(result => {\n        setData(result);\n        setLoading(false);\n      })\n      .catch(err => {\n        setError(err);\n        setLoading(false);\n      });\n  }, []);\n  \n  // ... рендеринг (тот же код!)\n}"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ С кастомным хуком (переиспользуемая логика):</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"// Кастомный хук\nfunction useApiData(fetchFunction) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    fetchFunction()\n      .then(result => {\n        setData(result);\n        setLoading(false);\n      })\n      .catch(err => {\n        setError(err);\n        setLoading(false);\n      });\n  }, [fetchFunction]);\n  \n  return { data, loading, error };\n}\n\n// Компонент 1\nfunction ComponentA() {\n  const { data, loading, error } = useApiData(fetchUserData);\n  // ... рендеринг\n}\n\n// Компонент 2\nfunction ComponentB() {\n  const { data, loading, error } = useApiData(fetchProductData);\n  // ... рендеринг\n}"}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Ключевые особенности кастомных хуков:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Название <span className="font-medium">должно начинаться</span> с <code className="bg-gray-700 px-1 rounded">use</code></li>
                <li>Могут <span className="font-medium">использовать</span> другие хуки внутри себя</li>
                <li>Позволяют <span className="font-medium">выносить логику</span> из компонентов</li>
                <li>Обеспечивают <span className="font-medium">переиспользуемость</span> кода</li>
                <li>Следуют <span className="font-medium">принципам хуков</span> React</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Принципы создания кастомных хуков */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-yellow-400" />
          Принципы создания кастомных хуков
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При создании кастомных хуков важно следовать <span className="font-medium">определённым принципам</span> и <span className="font-medium">соглашениям</span>, чтобы обеспечить <span className="font-medium">предсказуемость</span>, <span className="font-medium">читаемость</span> и <span className="font-medium">поддерживаемость</span> кода.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Hook className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Именование</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Обязательно</span> должно начинаться с <code className="bg-gray-700 px-1 rounded">use</code> (например, <code className="bg-gray-700 px-1 rounded">useLocalStorage</code>, <code className="bg-gray-700 px-1 rounded">useApi</code>, <code className="bg-gray-700 px-1 rounded">useForm</code>)</li>
              <li>Должно быть <span className="font-medium">описательным</span> и отражать <span className="font-medium">назначение</span> хука</li>
              <li>Используйте <span className="font-medium">camelCase</span> (например, <code className="bg-gray-700 px-1 rounded">useWindowWidth</code>, не <code className="bg-gray-700 px-1 rounded">UseWindowWidth</code>)</li>
              <li>Избегайте <span className="font-medium">слишком общих</span> названий (например, <code className="bg-gray-700 px-1 rounded">useData</code>)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Структура и возвращаемые значения</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Могут <span className="font-medium">возвращать</span> что угодно: массив, объект, примитивное значение, ничего (undefined)</li>
              <li><span className="font-medium">Часто возвращают</span> объект с данными и функциями для работы с ними</li>
              <li>Могут <span className="font-medium">принимать параметры</span> для настройки поведения</li>
              <li>Должны <span className="font-medium">следовать принципам хуков</span> React (вызываться на верхнем уровне)</li>
            </ul>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Возвращают массив (как useState):</p>
                <pre className="text-green-300 text-xs"><code>{"function useToggle(initialValue = false) {\n  const [value, setValue] = useState(initialValue);\n  const toggle = () => setValue(!value);\n  return [value, toggle];\n}"}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Возвращают объект:</p>
                <pre className="text-green-300 text-xs"><code>{"function useCounter(initialValue = 0) {\n  const [count, setCount] = useState(initialValue);\n  return {\n    count,\n    increment: () => setCount(c => c + 1),\n    decrement: () => setCount(c => c - 1),\n    reset: () => setCount(initialValue)\n  };\n}"}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры кастомных хуков */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Практические примеры кастомных хуков
        </h2>
        
        <div className="mt-6 space-y-6">
          {/* useLocalStorage */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">useLocalStorage — работа с localStorage</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-purple-300 text-sm"><code>{"import { useState, useEffect } from 'react';\n\nfunction useLocalStorage(key, initialValue) {\n  // Получаем значение из localStorage или используем initialValue\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      console.error('Ошибка получения значения из localStorage по ключу \"' + key + '\":', error);\n      return initialValue;\n    }\n  });\n  \n  // Обновляем состояние и localStorage\n  const setValue = (value) => {\n    try {\n      // Разрешаем передавать функцию для обновления значения\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setStoredValue(valueToStore);\n      window.localStorage.setItem(key, JSON.stringify(valueToStore));\n    } catch (error) {\n      console.error('Ошибка сохранения значения в localStorage по ключу \"' + key + '\":', error);\n    }\n  };\n  \n  return [storedValue, setValue];\n}\n\n// Использование\nfunction ThemeSwitcher() {\n  const [theme, setTheme] = useLocalStorage('theme', 'light');\n  \n  const toggleTheme = () => {\n    setTheme(theme === 'light' ? 'dark' : 'light');\n  };\n  \n  return (\n    <button onClick={toggleTheme}>\n      Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему\n    </button>\n  );\n}"}</code></pre>
            </div>
          </div>
          
          {/* useApi */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <RefreshCw className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">useApi — работа с API</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-orange-300 text-sm"><code>{"import { useState, useEffect } from 'react';\n\nfunction useApi(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        setLoading(true);\n        setError(null);\n        \n        const response = await fetch(url);\n        if (!response.ok) {\n          throw new Error('HTTP error! status: ' + response.status);\n        }\n        \n        const result = await response.json();\n        setData(result);\n      } catch (err) {\n        setError(err.message);\n      } finally {\n        setLoading(false);\n      }\n    };\n    \n    fetchData();\n  }, [url]);\n  \n  return { data, loading, error };\n}\n\n// Использование\nfunction UserList() {\n  const { data: users, loading, error } = useApi('https://jsonplaceholder.typicode.com/users');\n  \n  if (loading) return <div>Загрузка пользователей...</div>;\n  if (error) return <div>Ошибка: {error}</div>;\n  \n  return (\n    <ul>\n      {users?.map(user => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}"}</code></pre>
            </div>
          </div>
          
          {/* useDebounce */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <RefreshCw className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">useDebounce — задержка выполнения</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{"import { useState, useEffect } from 'react';\n\nfunction useDebounce(value, delay) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n  \n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n    \n    // Очищаем таймер при изменении значения или размонтировании\n    return () => {\n      clearTimeout(handler);\n    };\n  }, [value, delay]);\n  \n  return debouncedValue;\n}\n\n// Использование\nfunction SearchComponent() {\n  const [searchTerm, setSearchTerm] = useState('');\n  const debouncedSearchTerm = useDebounce(searchTerm, 500);\n  \n  useEffect(() => {\n    if (debouncedSearchTerm) {\n      // Выполняем поиск только после задержки\n      performSearch(debouncedSearchTerm);\n    }\n  }, [debouncedSearchTerm]);\n  \n  return (\n    <input \n      type=\"text\" \n      value={searchTerm} \n      onChange={(e) => setSearchTerm(e.target.value)}\n      placeholder=\"Поиск...\"\n    />\n  );\n}"}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Передача параметров и возврат значений */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Share2 className="w-5 h-5 text-green-400" />
          Передача параметров и возврат значений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Кастомные хуки могут <span className="font-medium">принимать параметры</span> для настройки своего поведения и <span className="font-medium">возвращать различные типы значений</span> в зависимости от своей логики.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Хук с параметрами и возвратом массива:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{"function useArray(initialValue = []) {\n  const [array, setArray] = useState(initialValue);\n  \n  const push = (element) => {\n    setArray(arr => [...arr, element]);\n  };\n  \n  const remove = (index) => {\n    setArray(arr => arr.filter((_, i) => i !== index));\n  };\n  \n  const clear = () => {\n    setArray([]);\n  };\n  \n  return [array, { push, remove, clear }];\n}\n\n// Использование\nfunction TodoList() {\n  const [todos, { push, remove }] = useArray([]);\n  const [inputValue, setInputValue] = useState('');\n  \n  const addTodo = () => {\n    if (inputValue.trim()) {\n      push(inputValue);\n      setInputValue('');\n    }\n  };\n  \n  return (\n    <div>\n      <input \n        value={inputValue}\n        onChange={(e) => setInputValue(e.target.value)}\n      />\n      <button onClick={addTodo}>Добавить</button>\n      <ul>\n        {todos.map((todo, index) => (\n          <li key={index}>\n            {todo} \n            <button onClick={() => remove(index)}>Удалить</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <p className="text-sm text-gray-400 mb-2">Хук с параметрами и возвратом объекта:</p>
            <pre className="text-yellow-300 text-sm overflow-x-auto">
              <code>{"function useCounter(initialValue = 0, step = 1) {\n  const [count, setCount] = useState(initialValue);\n  \n  return {\n    count,\n    increment: () => setCount(c => c + step),\n    decrement: () => setCount(c => c - step),\n    reset: () => setCount(initialValue),\n    set: (value) => setCount(value)\n  };\n}\n\n// Использование\nfunction Counter() {\n  const counter1 = useCounter(0, 1);  // шаг 1\n  const counter2 = useCounter(10, 5); // начальное 10, шаг 5\n  \n  return (\n    <div>\n      <p>Счетчик 1: {counter1.count}</p>\n      <button onClick={counter1.increment}>+1</button>\n      <button onClick={counter1.decrement}>-1</button>\n      \n      <p>Счетчик 2: {counter2.count}</p>\n      <button onClick={counter2.increment}>+5</button>\n      <button onClick={counter2.decrement}>-5</button>\n    </div>\n  );\n}"}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Settings className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Гибкость возврата значений</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Массив (как useState):</p>
              <pre className="text-purple-300 text-xs"><code>{"return [value, setValue];"}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Объект:</p>
              <pre className="text-purple-300 text-xs"><code>{"return { value, setValue };"}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Примитив:</p>
              <pre className="text-purple-300 text-xs"><code>{"return isValid;"}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Лучшие практики и советы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-orange-400" />
          Лучшие практики и советы
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Hook className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Архитектурные принципы</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Один хук — одна ответственность</span> (Single Responsibility Principle)</li>
              <li><span className="font-medium">Делайте хуки предсказуемыми</span> — одинаковый вход должен давать одинаковый выход</li>
              <li><span className="font-medium">Обрабатывайте ошибки</span> внутри хука, не заставляя пользователя это делать</li>
              <li><span className="font-medium">Документируйте</span> параметры и возвращаемые значения хука</li>
              <li><span className="font-medium">Избегайте побочных эффектов</span> вне useEffect в хуке</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Оптимизация и производительность</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Используйте useMemo/useCallback</span> внутри хука при необходимости</li>
              <li><span className="font-medium">Избегайте создания новых объектов</span> на каждом рендере без необходимости</li>
              <li><span className="font-medium">Правильно настраивайте зависимости</span> в useEffect</li>
              <li><span className="font-medium">Очищайте ресурсы</span> (таймеры, подписки) в функциях очистки useEffect</li>
            </ul>
            <div className="mt-3 bg-gray-800 p-3 rounded-lg">
              <pre className="text-blue-300 text-xs"><code>{"function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  \n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    \n    // Функция очистки\n    return () => {\n      window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Пустой массив зависимостей\n  \n  return width;\n}"}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">Распространенные ошибки</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Неправильное именование</span> (не начинается с use)</li>
              <li><span className="font-medium">Вызов хука внутри условий</span> или циклов</li>
              <li><span className="font-medium">Забытая функция очистки</span> в useEffect</li>
              <li><span className="font-medium">Неправильные зависимости</span> в useEffect</li>
              <li><span className="font-medium">Мутация параметров</span> внутри хука</li>
            </ul>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">❌ Неправильно:</p>
                <pre className="text-red-300 text-xs"><code>{"// НЕ useSomething\nfunction customHook() { /* ... */ }\n\n// Вызов внутри условия\nif (condition) {\n  const value = useHook();\n}"}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">✅ Правильно:</p>
                <pre className="text-green-300 text-xs"><code>{"// useSomething\nfunction useCustomHook() { /* ... */ }\n\n// Вызов на верхнем уровне\nconst value = useHook();"}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Hook className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое кастомные хуки в React и как их использовать для выноса повторяющейся логики из компонентов. Вы научились создавать кастомные хуки с правильным именованием, передавать в них параметры и возвращать различные типы значений. Вы изучили практические примеры таких хуков, как <code className="bg-gray-700 px-1 rounded">useLocalStorage</code>, <code className="bg-gray-700 px-1 rounded">useApi</code>, <code className="bg-gray-700 px-1 rounded">useDebounce</code>, освоили лучшие практики их создания и применения, а также узнали о распространенных ошибках и способах их избежать. Кастомные хуки — это мощный инструмент для создания переиспользуемого, чистого и поддерживаемого кода в React-приложениях. Они позволяют следовать принципу DRY и делают ваши компоненты более легкими и фокусированными на своем основном предназначении. В следующих уроках мы рассмотрим продвинутые техники работы с хуками и изучим паттерны проектирования в React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;