// src/data/courses/react/lesson11/part1.jsx
import React from 'react';
import { Shuffle, Settings, Database, Code, ArrowRight, Play } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Shuffle className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔄 Урок 11: Хук useReducer — сложное состояние</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Управление сложным состоянием с помощью редьюсера</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, когда и почему использовать <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useReducer</code> вместо <code className="bg-gray-700 px-1 rounded">useState</code>, освоить принцип работы редьюсера (action → reducer → новое состояние), научиться реализовывать сложную логику управления состоянием и применять useReducer для форм, корзин, многошаговых процессов.
            </p>
          </div>
        </div>
      </div>

      {/* Когда использовать useReducer вместо useState? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Когда использовать useReducer вместо useState?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">useReducer</code> — это <span className="font-medium">альтернатива</span> хуку <code className="bg-gray-700 px-1 rounded">useState</code> для управления <span className="font-medium">сложным состоянием</span> или <span className="font-medium">сложной логикой обновления</span> состояния.
          </p>
          <p>
            Хотя <code className="bg-gray-700 px-1 rounded">useState</code> отлично подходит для <span className="font-medium">простых</span> случаев, <code className="bg-gray-700 px-1 rounded">useReducer</code> становится <span className="font-medium">предпочтительным выбором</span>, когда состояние становится <span className="font-medium">более сложным</span> или <span className="font-medium">логика обновления</span> состояния <span className="font-medium">разрастается</span>.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Когда useState становится неудобным:</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{"// Сложное состояние с множеством обновлений\nconst [state, setState] = useState({\n  count: 0,\n  text: '',\n  items: [],\n  loading: false,\n  error: null\n});\n\n// Много разных функций обновления\nconst increment = () => setState(prev => ({...prev, count: prev.count + 1}));\nconst decrement = () => setState(prev => ({...prev, count: prev.count - 1}));\nconst setText = (text) => setState(prev => ({...prev, text}));\nconst addItem = (item) => setState(prev => ({...prev, items: [...prev.items, item]}));\nconst setLoading = (loading) => setState(prev => ({...prev, loading}));"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Когда useReducer подходит лучше:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"// Единый редьюсер для всех обновлений\nconst [state, dispatch] = useReducer(reducer, initialState);\n\n// Одна функция dispatch для всех действий\nconst increment = () => dispatch({type: 'INCREMENT'});\nconst decrement = () => dispatch({type: 'DECREMENT'});\nconst setText = (text) => dispatch({type: 'SET_TEXT', payload: text});\nconst addItem = (item) => dispatch({type: 'ADD_ITEM', payload: item});\nconst setLoading = (loading) => dispatch({type: 'SET_LOADING', payload: loading});"}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Когда использовать useReducer:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Когда <span className="font-medium">состояние сложное</span> (объекты, массивы с вложенными структурами)</li>
                <li>Когда <span className="font-medium">логика обновления</span> состояния <span className="font-medium">разрастается</span></li>
                <li>Когда <span className="font-medium">следующее состояние</span> зависит от <span className="font-medium">предыдущего</span></li>
                <li>Когда нужно <span className="font-medium">централизовать</span> логику обновления состояния</li>
                <li>Когда <span className="font-medium">несколько значений</span> состояния должны обновляться <span className="font-medium">вместе</span></li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Принцип работы useReducer */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shuffle className="w-5 h-5 text-yellow-400" />
          Принцип работы useReducer
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1 rounded">useReducer</code> следует <span className="font-medium">паттерну проектирования "Редьюсер"</span> (Reducer Pattern), который широко используется во многих фреймворках и библиотеках. Основной принцип: <span className="font-medium">action → reducer → новое состояние</span>.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <ArrowRight className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Поток данных в useReducer</h3>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Play className="w-6 h-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="font-medium text-blue-300">1. Действие (Action)</p>
                <p className="text-sm text-gray-400">Объект с типом и данными</p>
              </div>
            </div>
            
            <div className="h-8 w-0.5 bg-gray-600"></div>
            
            <div className="flex items-center">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Settings className="w-6 h-6 text-green-400" />
              </div>
              <div className="ml-4">
                <p className="font-medium text-green-300">2. Редьюсер (Reducer)</p>
                <p className="text-sm text-gray-400">Чистая функция, обрабатывающая действие</p>
              </div>
            </div>
            
            <div className="h-8 w-0.5 bg-gray-600"></div>
            
            <div className="flex items-center">
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <Database className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="ml-4">
                <p className="font-medium text-yellow-300">3. Новое состояние</p>
                <p className="text-sm text-gray-400">Результат работы редьюсера</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Синтаксис useReducer:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{"const [state, dispatch] = useReducer(reducer, initialState);"}</code>
            </pre>
            <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs mt-2">
              <li><code className="bg-gray-700 px-1 rounded">state</code> — текущее состояние</li>
              <li><code className="bg-gray-700 px-1 rounded">dispatch</code> — функция для отправки действий</li>
              <li><code className="bg-gray-700 px-1 rounded">reducer</code> — функция-редьюсер</li>
              <li><code className="bg-gray-700 px-1 rounded">initialState</code> — начальное состояние</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример действия (action):</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{"// Простое действие\n{ type: 'INCREMENT' }\n\n// Действие с данными\n{ type: 'ADD_TODO', payload: 'Новая задача' }\n\n// Действие с несколькими данными\n{ \n  type: 'UPDATE_USER', \n  payload: { \n    id: 1, \n    name: 'Новое имя', \n    email: 'new@example.com' \n  } \n}"}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Структура редьюсера */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Структура редьюсера
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Редьюсер (reducer)</span> — это <span className="font-medium">чистая функция</span>, которая принимает <span className="font-medium">текущее состояние</span> и <span className="font-medium">действие</span>, и возвращает <span className="font-medium">новое состояние</span>.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-orange-300">Сигнатура редьюсера</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-orange-300 text-sm"><code>{"(state, action) => newState"}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm mt-3">
            <li>
              <span className="font-medium">state</span> — текущее состояние (при первом вызове — initialState)
            </li>
            <li>
              <span className="font-medium">action</span> — объект действия с обязательным полем <code className="bg-gray-700 px-1 rounded">type</code>
            </li>
            <li>
              <span className="font-medium">newState</span> — новое состояние, вычисленное на основе предыдущего состояния и действия
            </li>
            <li>
              <span className="font-medium">Важно:</span> редьюсер должен быть чистой функцией — не мутировать состояние, не вызывать побочные эффекты
            </li>
          </ul>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Простой редьюсер счетчика:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"const counterReducer = (state, action) => {\n  switch (action.type) {\n    case 'INCREMENT':\n      return { count: state.count + 1 };\n    case 'DECREMENT':\n      return { count: state.count - 1 };\n    case 'RESET':\n      return { count: 0 };\n    default:\n      return state; // Важно: возвращаем текущее состояние по умолчанию\n  }\n};"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <p className="text-sm text-gray-400 mb-2">Редьюсер с обработкой данных:</p>
            <pre className="text-purple-300 text-sm overflow-x-auto">
              <code>{"const todoReducer = (state, action) => {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return {\n        ...state,\n        todos: [...state.todos, {\n          id: Date.now(),\n          text: action.payload,\n          completed: false\n        }]\n      };\n    case 'TOGGLE_TODO':\n      return {\n        ...state,\n        todos: state.todos.map(todo =>\n          todo.id === action.payload\n            ? { ...todo, completed: !todo.completed }\n            : todo\n        )\n      };\n    default:\n      return state;\n  }\n};"}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Практический пример: Счетчик с useReducer */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-blue-400" />
          Практический пример: Счетчик с useReducer
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим полный пример реализации счетчика с использованием <code className="bg-gray-700 px-1 rounded">useReducer</code>, который демонстрирует все основные концепции.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Play className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-yellow-300">Полный пример счетчика</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-yellow-300 text-sm"><code>{"import { useReducer } from 'react';\n\n// Начальное состояние\nconst initialState = {\n  count: 0,\n  step: 1\n};\n\n// Редьюсер\nconst counterReducer = (state, action) => {\n  switch (action.type) {\n    case 'INCREMENT':\n      return { ...state, count: state.count + state.step };\n    case 'DECREMENT':\n      return { ...state, count: state.count - state.step };\n    case 'RESET':\n      return { ...state, count: 0 };\n    case 'SET_STEP':\n      return { ...state, step: action.payload };\n    case 'SET_COUNT':\n      return { ...state, count: action.payload };\n    default:\n      throw new Error(`Неизвестное действие: ${action.type}`);\n  }\n};\n\n// Компонент\nfunction Counter() {\n  const [state, dispatch] = useReducer(counterReducer, initialState);\n  \n  return (\n    <div>\n      <h2>Счетчик: {state.count}</h2>\n      <p>Шаг: {state.step}</p>\n      \n      <button onClick={() => dispatch({ type: 'INCREMENT' })}>\n        Увеличить\n      </button>\n      <button onClick={() => dispatch({ type: 'DECREMENT' })}>\n        Уменьшить\n      </button>\n      <button onClick={() => dispatch({ type: 'RESET' })}>\n        Сбросить\n      </button>\n      \n      <div>\n        <label>\n          Шаг:\n          <input\n            type=\"number\"\n            value={state.step}\n            onChange={(e) => dispatch({\n              type: 'SET_STEP',\n              payload: parseInt(e.target.value) || 1\n            })}\n          />\n        </label>\n      </div>\n      \n      <div>\n        <label>\n          Значение:\n          <input\n            type=\"number\"\n            value={state.count}\n            onChange={(e) => dispatch({\n              type: 'SET_COUNT',\n              payload: parseInt(e.target.value) || 0\n            })}\n          />\n        </label>\n      </div>\n    </div>\n  );\n}"}</code></pre>
          </div>
        </div>
      </div>

      {/* Сравнение useState и useReducer */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Сравнение useState и useReducer
        </h2>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">useState</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Простота:</span> Проще для базовых случаев</li>
              <li><span className="font-medium">Синтаксис:</span> <code className="bg-gray-700 px-1 rounded">const [state, setState] = useState(initialValue)</code></li>
              <li><span className="font-medium">Обновление:</span> <code className="bg-gray-700 px-1 rounded">setState(newValue)</code> или <code className="bg-gray-700 px-1 rounded">{`setState(prev => newValue)`}</code></li>
              <li><span className="font-medium">Подходит для:</span> Простых значений, небольших объектов</li>
              <li><span className="font-medium">Переиспользуемость:</span> Логика обновления разбросана по компоненту</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Shuffle className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">useReducer</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Структура:</span> Централизованная логика обновления</li>
              <li><span className="font-medium">Синтаксис:</span> <code className="bg-gray-700 px-1 rounded">const [state, dispatch] = useReducer(reducer, initialState)</code></li>
              <li><span className="font-medium">Обновление:</span> <code className="bg-gray-700 px-1 rounded">{`dispatch({type: 'ACTION_TYPE', payload: data})`}</code></li>
              <li><span className="font-medium">Подходит для:</span> Сложных объектов, сложной логики обновления</li>
              <li><span className="font-medium">Переиспользуемость:</span> Редьюсер можно использовать в разных компонентах</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Когда выбирать:</span>
            <span>
              Начинайте с <code className="bg-gray-700 px-1 rounded">useState</code>. Если логика обновления становится сложной или состояние растет, переходите на <code className="bg-gray-700 px-1 rounded">useReducer</code>. Это <span className="font-medium">естественный прогресс</span> в управлении состоянием.
            </span>
          </p>
        </div>
      </div>

      {/* Продвинутые примеры использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-purple-400" />
          Продвинутые примеры использования useReducer
        </h2>
        
        <div className="mt-6 space-y-6">
          {/* Управление формой */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Управление сложной формой</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm"><code>{"const formReducer = (state, action) => {\n  switch (action.type) {\n    case 'SET_FIELD':\n      return {\n        ...state,\n        [action.field]: action.value\n      };\n    case 'SET_ERRORS':\n      return {\n        ...state,\n        errors: action.errors\n      };\n    case 'SET_LOADING':\n      return {\n        ...state,\n        loading: action.loading\n      };\n    case 'RESET_FORM':\n      return initialState;\n    default:\n      return state;\n  }\n};\n\nfunction UserForm() {\n  const [state, dispatch] = useReducer(formReducer, {\n    name: '',\n    email: '',\n    password: '',\n    errors: {},\n    loading: false\n  });\n  \n  const handleChange = (field, value) => {\n    dispatch({ type: 'SET_FIELD', field, value });\n  };\n  \n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    dispatch({ type: 'SET_LOADING', loading: true });\n    \n    try {\n      // Валидация и отправка данных\n      const errors = validateForm(state);\n      if (Object.keys(errors).length > 0) {\n        dispatch({ type: 'SET_ERRORS', errors });\n      } else {\n        await submitForm(state);\n        dispatch({ type: 'RESET_FORM' });\n      }\n    } catch (error) {\n      dispatch({ \n        type: 'SET_ERRORS', \n        errors: { submit: error.message } \n      });\n    } finally {\n      dispatch({ type: 'SET_LOADING', loading: false });\n    }\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Поля формы с обработчиками изменений */}\n      {/* Отображение ошибок */}\n      {/* Кнопка отправки с состоянием загрузки */}\n    </form>\n  );\n}"}</code></pre>
            </div>
          </div>
          
          {/* Корзина покупок */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">Корзина покупок</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-cyan-300 text-sm"><code>{"const cartReducer = (state, action) => {\n  switch (action.type) {\n    case 'ADD_ITEM':\n      const existingItem = state.items.find(item => item.id === action.payload.id);\n      if (existingItem) {\n        return {\n          ...state,\n          items: state.items.map(item =>\n            item.id === action.payload.id\n              ? { ...item, quantity: item.quantity + 1 }\n              : item\n          )\n        };\n      } else {\n        return {\n          ...state,\n          items: [...state.items, { ...action.payload, quantity: 1 }]\n        };\n      }\n    case 'REMOVE_ITEM':\n      return {\n        ...state,\n        items: state.items.filter(item => item.id !== action.payload)\n      };\n    case 'UPDATE_QUANTITY':\n      return {\n        ...state,\n        items: state.items.map(item =>\n          item.id === action.payload.id\n            ? { ...item, quantity: action.payload.quantity }\n            : item\n        )\n      };\n    case 'CLEAR_CART':\n      return { ...state, items: [] };\n    default:\n      return state;\n  }\n};\n\nfunction ShoppingCart() {\n  const [state, dispatch] = useReducer(cartReducer, {\n    items: [],\n    total: 0\n  });\n  \n  // Вычисляем общую сумму (можно также хранить в состоянии)\n  const total = state.items.reduce(\n    (sum, item) => sum + item.price * item.quantity, \n    0\n  );\n  \n  return (\n    <div>\n      <h2>Корзина ({state.items.length} товаров)</h2>\n      {state.items.map(item => (\n        <CartItem\n          key={item.id}\n          item={item}\n          onUpdateQuantity={(quantity) => dispatch({\n            type: 'UPDATE_QUANTITY',\n            payload: { id: item.id, quantity }\n          })}\n          onRemove={() => dispatch({\n            type: 'REMOVE_ITEM',\n            payload: item.id\n          })}\n        />\n      ))}\n      <div>Итого: {total.toFixed(2)} руб.</div>\n      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>\n        Очистить корзину\n      </button>\n    </div>\n  );\n}"}</code></pre>
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
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">Структурирование действий</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Используйте константы</span> для типов действий для избежания опечаток</li>
              <li><span className="font-medium">Следуйте соглашениям</span> об именовании действий (например, <code className="bg-gray-700 px-1 rounded">ADD_ITEM</code>, <code className="bg-gray-700 px-1 rounded">REMOVE_ITEM</code>)</li>
              <li><span className="font-medium">Используйте payload</span> для передачи данных в действия</li>
              <li><span className="font-medium">Делайте действия предсказуемыми</span> и атомарными</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3">
              <pre className="text-yellow-300 text-xs"><code>{"// Константы для типов действий\nconst actionTypes = {\n  ADD_TODO: 'ADD_TODO',\n  REMOVE_TODO: 'REMOVE_TODO',\n  TOGGLE_TODO: 'TOGGLE_TODO',\n  SET_FILTER: 'SET_FILTER'\n};\n\n// Использование в действиях\ndispatch({ type: actionTypes.ADD_TODO, payload: 'Новая задача' });"}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Работа с редьюсерами</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Редьюсеры должны быть чистыми функциями</span> — без побочных эффектов</li>
              <li><span className="font-medium">Всегда возвращайте новое состояние</span> — не мутируйте существующее</li>
              <li><span className="font-medium">Обрабатывайте неизвестные действия</span> — возвращайте текущее состояние</li>
              <li><span className="font-medium">Разделяйте сложные редьюсеры</span> на более простые, если возможно</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Play className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Производительность</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">useReducer</span> может быть более эффективным, чем useState для сложных состояний</li>
              <li><span className="font-medium">dispatch</span> стабильна между рендерами — можно использовать в зависимостях useEffect</li>
              <li><span className="font-medium">Избегайте создания новых объектов</span> в редьюсере без необходимости</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Shuffle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое хук <code className="bg-gray-700 px-1 rounded">useReducer</code> и когда его использовать вместо <code className="bg-gray-700 px-1 rounded">useState</code>. Вы освоили принцип работы редьюсера (action → reducer → новое состояние), научились создавать редьюсеры для различных сценариев, сравнили useState и useReducer, и изучили лучшие практики использования этого мощного инструмента. useReducer — это отличный выбор для управления сложным состоянием, централизации логики обновления и создания более предсказуемого кода. В следующих уроках мы рассмотрим продвинутые техники управления состоянием и изучим альтернативные решения для сложных приложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;