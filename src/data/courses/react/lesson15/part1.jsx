// src/data/courses/react/lesson15/part1.jsx
import React from 'react';
import { Zap, Database, Code, Share2, RefreshCw, Cpu } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">⚡ Урок 15: Оптимизация производительности</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Повышение эффективности React-приложений</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять основные проблемы производительности в React, освоить инструменты оптимизации (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">React.memo</code>, <code className="bg-gray-700 px-1 rounded">useMemo</code>, <code className="bg-gray-700 px-1 rounded">useCallback</code>), научиться применять мемоизацию для предотвращения лишних перерендеров и кэширования тяжелых вычислений.
            </p>
          </div>
        </div>
      </div>

      {/* Проблемы производительности в React */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Cpu className="w-5 h-5 text-red-400" />
          Проблемы производительности в React
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-red-300">Производительность</span> в React-приложениях может ухудшаться по нескольким причинам, связанным с <span className="font-medium">частыми перерендерами</span> компонентов и <span className="font-medium">тяжелыми вычислениями</span>.
          </p>
          <p>
            React <span className="font-medium">автоматически перерисовывает</span> компоненты при изменении их <span className="font-medium">состояния</span> или <span className="font-medium">пропсов</span>. Однако, если компоненты перерисовываются <span className="font-medium">чаще</span>, чем это необходимо, или выполняют <span className="font-medium">ресурсоемкие операции</span> при каждом рендере, это может привести к <span className="font-medium">замедлению</span> работы приложения.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Проблема: Лишние перерендеры</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`// Родительский компонент\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  const [user, setUser] = useState({ name: 'Иван' });\n  \n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>\n        Счетчик: {count}\n      </button>\n      {/* Этот компонент будет перерендериваться при каждом клике */}\n      <ExpensiveComponent user={user} />\n    </div>\n  );\n}\n\n// Дочерний компонент\nfunction ExpensiveComponent({ user }) {\n  // Тяжелые вычисления при каждом рендере\n  const expensiveValue = heavyCalculation(user);\n  \n  return <div>{expensiveValue}</div>;\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Решение: Оптимизация</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`// Оптимизированный дочерний компонент\nconst ExpensiveComponent = React.memo(({ user }) => {\n  const expensiveValue = useMemo(() => \n    heavyCalculation(user), \n    [user]\n  );\n  \n  return <div>{expensiveValue}</div>;\n});`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Основные причины проблем производительности:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Частые перерендеры</span> компонентов из-за изменений состояния родителя</li>
                <li><span className="font-medium">Тяжелые вычисления</span> внутри компонентов при каждом рендере</li>
                <li><span className="font-medium">Создание новых функций</span> и объектов при каждом рендере</li>
                <li><span className="font-medium">Отсутствие мемоизации</span> для стабильных значений</li>
                <li><span className="font-medium">Большие списки</span> без виртуализации</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* React.memo — мемоизация компонентов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-yellow-400" />
          React.memo — мемоизация компонентов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">React.memo</code> — это <span className="font-medium">HOC (Higher-Order Component)</span>, который <span className="font-medium">предотвращает</span> перерендер компонента, если его <span className="font-medium">пропсы</span> <span className="font-medium">не изменились</span>.
          </p>
          <p>
            По умолчанию React <span className="font-medium">повторно рендерит</span> компонент при каждом обновлении его родителя. <code className="bg-gray-700 px-1 rounded">React.memo</code> позволяет <span className="font-medium">пропустить</span> рендер, если пропсы <span className="font-medium">глубоко равны</span> предыдущим.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Синтаксис React.memo</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-cyan-300 text-sm"><code>{`import React from 'react';\n\n// Обычный компонент\nfunction MyComponent({ name, age }) {\n  return (\n    <div>\n      <h1>{name}</h1>\n      <p>Возраст: {age}</p>\n    </div>\n  );\n}\n\n// Мемоизированный компонент\nconst MemoizedComponent = React.memo(MyComponent);\n\n// Экспорт мемоизированного компонента\nexport default React.memo(MyComponent);`}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            <code className="bg-gray-700 px-1 rounded">React.memo</code> сравнивает пропсы поверхностно (shallow comparison). Если пропсы — объекты или массивы, они сравниваются по ссылке, а не по содержимому.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Компонент профиля пользователя</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`import React, { memo } from 'react';\n\nconst UserProfile = memo(({ user, onEdit }) => {\n  console.log('UserProfile рендерится:', user.name);\n  \n  return (\n    <div className="user-profile">\n      <h2>{user.name}</h2>\n      <p>Email: {user.email}</p>\n      <p>Возраст: {user.age}</p>\n      <button onClick={() => onEdit(user)}>\n        Редактировать\n      </button>\n    </div>\n  );\n});\n\nexport default UserProfile;`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Кастомная функция сравнения</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{`const UserProfile = memo(({ user, onEdit }) => {\n  // Компонент...\n}, (prevProps, nextProps) => {\n  // Кастомное сравнение\n  return (\n    prevProps.user.id === nextProps.user.id &&\n    prevProps.user.name === nextProps.user.name &&\n    prevProps.user.email === nextProps.user.email\n    // onEdit не сравниваем, так как это функция\n  );\n});`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
          <p className="text-purple-300 text-sm flex items-start gap-2">
            <span className="font-medium">⚠️ Важно:</span>
            <span>
              Не используйте <code className="bg-gray-700 px-1 rounded">React.memo</code> бездумно. Мемоизация имеет <span className="font-medium">стоимость</span> — сравнение пропсов. Используйте её только для компонентов, которые:
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>Часто рендерятся с одинаковыми пропсами</li>
                <li>Содержат тяжелые рендеры или тяжелые поддеревья</li>
                <li>Являются чистыми компонентами (одинаковый результат для одинаковых пропсов)</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* useMemo — кэширование вычислений */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Share2 className="w-5 h-5 text-cyan-400" />
          useMemo — кэширование вычислений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">useMemo</code> — это <span className="font-medium">хук</span>, который <span className="font-medium">кэширует</span> результат <span className="font-medium">дорогостоящих вычислений</span> между рендерами.
          </p>
          <p>
            Он <span className="font-medium">выполняет функцию вычисления</span> только тогда, когда <span className="font-medium">зависимости</span> изменились. В остальных случаях возвращается <span className="font-medium">кэшированное значение</span>.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <RefreshCw className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-orange-300">Синтаксис useMemo</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-orange-300 text-sm"><code>{`import { useMemo } from 'react';\n\nfunction MyComponent({ items, searchTerm }) {\n  // Тяжелое вычисление фильтрации\n  const filteredItems = useMemo(() => {\n    console.log('Выполняется фильтрация...');\n    return items.filter(item => \n      item.name.toLowerCase().includes(searchTerm.toLowerCase())\n    );\n  }, [items, searchTerm]); // Зависимости\n  \n  return (\n    <ul>\n      {filteredItems.map(item => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n}`}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            Без <code className="bg-gray-700 px-1 rounded">useMemo</code> фильтрация будет выполняться при <span className="font-medium">каждом</span> рендере, даже если <code className="bg-gray-700 px-1 rounded">items</code> и <code className="bg-gray-700 px-1 rounded">searchTerm</code> не изменились.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Тяжелые математические вычисления</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function FibonacciCalculator({ number }) {\n  const fibonacci = useMemo(() => {\n    const fib = (n) => {\n      if (n <= 1) return n;\n      return fib(n - 1) + fib(n - 2);\n    };\n    return fib(number);\n  }, [number]);\n  \n  return (\n    <div>\n      <p>Число Фибоначчи для {number}: {fibonacci}</p>\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Создание сложных объектов</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{`function ChartData({ rawData, config }) {\n  const processedData = useMemo(() => {\n    // Сложная обработка данных\n    return rawData.map(item => ({\n      ...item,\n      processedValue: processItem(item, config),\n      meta generateMetadata(item)\n    }));\n  }, [rawData, config]);\n  \n  return <Chart data={processedData} />;\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
          <p className="text-red-300 text-sm flex items-start gap-2">
            <span className="font-medium">⚠️ Распространенные ошибки:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Использование useMemo для простых вычислений</span> — накладные расходы могут быть больше пользы</li>
                <li><span className="font-medium">Забытые зависимости</span> — в массиве зависимостей должны быть ВСЕ используемые значения</li>
                <li><span className="font-medium">Мутирующие объекты</span> — если объект мутирует, useMemo не заметит изменений</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* useCallback — кэширование функций */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          useCallback — кэширование функций
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">useCallback</code> — это <span className="font-medium">хук</span>, который <span className="font-medium">кэширует</span> функции между рендерами, <span className="font-medium">предотвращая</span> создание <span className="font-medium">новых</span> функций при каждом рендере.
          </p>
          <p>
            Это особенно важно для <span className="font-medium">оптимизации производительности</span>, когда функции передаются как <span className="font-medium">пропсы</span> в <code className="bg-gray-700 px-1 rounded">React.memo</code> компоненты или используются в <span className="font-medium">хуках зависимостей</span> (<code className="bg-gray-700 px-1 rounded">useEffect</code>, <code className="bg-gray-700 px-1 rounded">useMemo</code>).
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-yellow-300">Синтаксис useCallback</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-yellow-300 text-sm"><code>{`import { useCallback } from 'react';\n\nfunction ParentComponent() {\n  const [count, setCount] = useState(0);\n  \n  // Без useCallback - новая функция при каждом рендере\n  const handleClick = () => {\n    setCount(c => c + 1);\n  };\n  \n  // С useCallback - функция кэшируется\n  const handleClick = useCallback(() => {\n    setCount(c => c + 1);\n  }, []); // Пустой массив зависимостей\n  \n  return (\n    <div>\n      <p>Счетчик: {count}</p>\n      {/* ChildComponent - мемоизированный компонент */}\n      <ChildComponent onClick={handleClick} />\n    </div>\n  );\n}`}</code></pre>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Функция с зависимостями</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function TodoList({ todos, filter }) {\n  const [newTodo, setNewTodo] = useState('');\n  \n  // Функция добавления задачи\n  const addTodo = useCallback((text) => {\n    // Логика добавления задачи\n  }, []);\n  \n  // Функция с зависимостями\n  const deleteTodo = useCallback((id) => {\n    // Логика удаления задачи\n  }, [/* зависимости */]);\n  \n  // Функция, зависящая от состояния\n  const updateTodo = useCallback((id, updates) => {\n    // Логика обновления задачи\n  }, [newTodo]); // Зависимость от состояния\n  \n  return (\n    <div>\n      {/* Компоненты, принимающие функции как пропсы */}\n      <TodoInput onAdd={addTodo} />\n      <TodoItems \n        todos={todos} \n        onDelete={deleteTodo}\n        onUpdate={updateTodo}\n      />\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Использование в useEffect</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{`function DataFetcher({ userId }) {\n  const [data, setData] = useState(null);\n  \n  // Без useCallback этот эффект будет срабатывать\n  // при каждом рендере, даже если userId не изменился\n  const fetchData = useCallback(async () => {\n    const response = await api.getUserData(userId);\n    setData(response.data);\n  }, [userId]);\n  \n  useEffect(() => {\n    fetchData();\n  }, [fetchData]); // Зависимость от кэшированной функции\n  \n  return <div>{/* Отображение данных */}</div>;\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-cyan-900/20 border border-cyan-700/30 rounded-lg">
          <p className="text-cyan-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Когда использовать useCallback:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Когда функция передается в <code className="bg-gray-700 px-1 rounded">React.memo</code> компонент как пропс</li>
                <li>Когда функция используется в зависимостях других хуков (<code className="bg-gray-700 px-1 rounded">useEffect</code>, <code className="bg-gray-700 px-1 rounded">useMemo</code>)</li>
                <li>Когда функция является частью мемоизированного значения</li>
                <li>Когда функция используется в контексте (<code className="bg-gray-700 px-1 rounded">useContext</code>)</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Практические примеры и лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Практические примеры и лучшие практики
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Комплексный пример оптимизации списка</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`import React, { useState, useMemo, useCallback, memo } from 'react';\n\n// Мемоизированный компонент элемента списка\nconst ListItem = memo(({ item, onToggle, onDelete }) => {\n  console.log('ListItem рендерится:', item.id);\n  \n  return (\n    <div className="list-item">\n      <input\n        type="checkbox\"\n        checked={item.completed}\n        onChange={() => onToggle(item.id)}\n      />\n      <span className={item.completed ? 'completed' : ''}>\n        {item.text}\n      </span>\n      <button onClick={() => onDelete(item.id)}>\n        Удалить\n      </button>\n    </div>\n  );\n});\n\nfunction OptimizedTodoList() {\n  const [todos, setTodos] = useState([\n    { id: 1, text: 'Задача 1', completed: false },\n    { id: 2, text: 'Задача 2', completed: true }\n  ]);\n  const [filter, setFilter] = useState('all');\n  \n  // Мемоизированная фильтрация\n  const filteredTodos = useMemo(() => {\n    switch (filter) {\n      case 'active':\n        return todos.filter(todo => !todo.completed);\n      case 'completed':\n        return todos.filter(todo => todo.completed);\n      default:\n        return todos;\n    }\n  }, [todos, filter]);\n  \n  // Мемоизированные функции обработчики\n  const addTodo = useCallback((text) => {\n    setTodos(prev => [...prev, {\n      id: Date.now(),\n      text,\n      completed: false\n    }]);\n  }, []);\n  \n  const toggleTodo = useCallback((id) => {\n    setTodos(prev => prev.map(todo =>\n      todo.id === id \n        ? { ...todo, completed: !todo.completed }\n        : todo\n    ));\n  }, []);\n  \n  const deleteTodo = useCallback((id) => {\n    setTodos(prev => prev.filter(todo => todo.id !== id));\n  }, []);\n  \n  return (\n    <div>\n      <div className="filters\">\n        <button \n          className={filter === 'all' ? 'active' : ''}\n          onClick={() => setFilter('all')}\n        >\n          Все\n        </button>\n        <button \n          className={filter === 'active' ? 'active' : ''}\n          onClick={() => setFilter('active')}\n        >\n          Активные\n        </button>\n        <button \n          className={filter === 'completed' ? 'active' : ''}\n          onClick={() => setFilter('completed')}\n        >\n          Выполненные\n        </button>\n      </div>\n      \n      <ul>\n        {filteredTodos.map(todo => (\n          <ListItem\n            key={todo.id}\n            item={todo}\n            onToggle={toggleTodo}\n            onDelete={deleteTodo}\n          />\n        ))}\n      </ul>\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Share2 className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Оптимизация тяжелых вычислений</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{`function ExpensiveCalculation({ numbers, multiplier }) {\n  // Тяжелое вычисление без useMemo\n  // Выполняется при каждом рендере\n  const heavyResult = numbers.reduce((acc, num) => {\n    // Симуляция тяжелых вычислений\n    let result = num;\n    for (let i = 0; i < 1000000; i++) {\n      result = Math.sqrt(result * multiplier + i);\n    }\n    return acc + result;\n  }, 0);\n  \n  return (\n    <div>\n      <p>Результат: {heavyResult}</p>\n    </div>\n  );\n}\n\n// Оптимизированная версия\nfunction OptimizedCalculation({ numbers, multiplier }) {\n  // Тяжелое вычисление с useMemo\n  const heavyResult = useMemo(() => {\n    console.log('Выполняются тяжелые вычисления...');\n    return numbers.reduce((acc, num) => {\n      let result = num;\n      for (let i = 0; i < 1000000; i++) {\n        result = Math.sqrt(result * multiplier + i);\n      }\n      return acc + result;\n    }, 0);\n  }, [numbers, multiplier]); // Зависимости\n  \n  return (\n    <div>\n      <p>Результат: {heavyResult}</p>\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">Лучшие практики и советы</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Измеряйте производительность</span> до и после оптимизации с помощью React DevTools Profiler
              </li>
              <li>
                <span className="font-medium">Не оптимизируйте преждевременно</span> — сначала напишите рабочий код, потом оптимизируйте при необходимости
              </li>
              <li>
                <span className="font-medium">Правильно указывайте зависимости</span> — в хуках зависимостей должны быть все используемые значения
              </li>
              <li>
                <span className="font-medium">Используйте React.memo</span> для компонентов, которые часто рендерятся с одинаковыми пропсами
              </li>
              <li>
                <span className="font-medium">Применяйте useMemo</span> для тяжелых вычислений и создания сложных объектов
              </li>
              <li>
                <span className="font-medium">Используйте useCallback</span> для функций, передаваемых в мемоизированные компоненты
              </li>
              <li>
                <span className="font-medium">Разделяйте компоненты</span> на более мелкие для лучшей оптимизации
              </li>
              <li>
                <span className="font-medium">Избегайте создания новых объектов</span> в рендере без необходимости
              </li>
            </ul>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">❌ Плохо:</p>
                <pre className="text-red-300 text-xs"><code>{`// Новый объект при каждом рендере\n<MyComponent style={{ color: 'red' }} />\n\n// Новая функция при каждом рендере\n<MyComponent onClick={() => console.log('click')} />`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">✅ Хорошо:</p>
                <pre className="text-green-300 text-xs"><code>{`// Стили вне рендера\nconst componentStyle = { color: 'red' };\n<MyComponent style={componentStyle} />\n\n// Мемоизированная функция\nconst handleClick = useCallback(() => {\n  console.log('click');\n}, []);\n<MyComponent onClick={handleClick} />`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете основные проблемы производительности в React и знаете, как их решать с помощью <code className="bg-gray-700 px-1 rounded">React.memo</code>, <code className="bg-gray-700 px-1 rounded">useMemo</code> и <code className="bg-gray-700 px-1 rounded">useCallback</code>. Вы научились предотвращать лишние перерендеры компонентов, кэшировать тяжелые вычисления и оптимизировать функции для лучшей производительности. Помните, что оптимизация — это баланс между производительностью и читаемостью кода. Всегда измеряйте производительность и применяйте оптимизации только тогда, когда они действительно необходимы. В следующих уроках мы рассмотрим продвинутые техники оптимизации, виртуализацию списков и другие методы повышения эффективности React-приложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;