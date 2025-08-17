// src/data/courses/react/lesson10/part1.jsx
import React from 'react';
import { Share2, Globe, Database, Settings, Palette, Code } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Share2 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🌍 Урок 10: Хук useContext — глобальное состояние</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Управление глобальным состоянием без "пропс-дрейлинга"</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять проблему "пропс-дрейлинга", освоить использование контекста и хука <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useContext</code> для передачи данных через компонентное дерево, научиться создавать и использовать контекст для управления глобальным состоянием приложения.
            </p>
          </div>
        </div>
      </div>

      {/* Проблема "пропс-дрейлинга" */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Share2 className="w-5 h-5 text-red-400" />
          Проблема "пропс-дрейлинга" (Props Drilling)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-red-300">"Пропс-дрейлинг"</span> — это <span className="font-medium">проблема</span> в React, когда <span className="font-medium">данные передаются</span> через множество <span className="font-medium">промежуточных компонентов</span>, которые <span className="font-medium">не используют</span> эти данные, а лишь <span className="font-medium">передают их дальше</span> по иерархии.
          </p>
          <p>
            Это делает код <span className="font-medium">громоздким</span>, <span className="font-medium">трудным для поддержки</span> и <span className="font-medium">нарушает принцип единственной ответственности</span> компонентов.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Проблема "пропс-дрейлинга":</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{"// App.js - передаем тему через все уровни\n<App>\n  <Header theme={theme} />\n  <Main theme={theme}>\n    <Sidebar theme={theme}>\n      <UserProfile theme={theme} />\n    </Sidebar>\n    <Content theme={theme}>\n      <Article theme={theme}>\n        <Comments theme={theme}>\n          <Comment theme={theme} />\n        </Comments>\n      </Article>\n    </Content>\n  </Main>\n</App>"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Решение с контекстом:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"// App.js - оборачиваем в Provider\n<ThemeContext.Provider value={theme}>\n  <App>\n    <Header />\n    <Main>\n      <Sidebar>\n        <UserProfile />\n      </Sidebar>\n      <Content>\n        <Article>\n          <Comments>\n            <Comment />\n          </Comments>\n        </Article>\n      </Content>\n    </Main>\n  </App>\n</ThemeContext.Provider>"}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Когда возникает "пропс-дрейлинг":</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Когда данные нужны в <span className="font-medium">глубоко вложенных</span> компонентах</li>
                <li>Когда <span className="font-medium">много промежуточных</span> компонентов передают одни и те же пропсы</li>
                <li>Когда <span className="font-medium">структура приложения</span> сложная и иерархическая</li>
                <li>Когда нужно передавать <span className="font-medium">глобальные настройки</span> (тема, язык, пользователь)</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Что такое контекст в React? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-yellow-400" />
          Что такое контекст в React?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">Контекст (Context)</span> в React — это <span className="font-medium">способ передачи данных</span> через дерево компонентов <span className="font-medium">без необходимости</span> передавать пропсы на каждом уровне вручную.
          </p>
          <p>
            Контекст разработан для <span className="font-medium">передачи данных</span>, которые можно считать <span className="font-medium">"глобальными"</span> для дерева компонентов React, таких как <span className="font-medium">текущая тема</span>, <span className="font-medium">пользователь</span>, <span className="font-medium">язык</span> и т.д.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Database className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Основные компоненты контекста</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>
              <code className="bg-gray-700 px-1 rounded">React.createContext()</code> — создает объект контекста
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">Context.Provider</code> — компонент, который предоставляет значение контекста
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">Context.Consumer</code> — компонент, который подписывается на изменения контекста (устаревший способ)
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">useContext()</code> — хук для использования контекста в функциональных компонентах
            </li>
          </ul>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Создание контекста:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{"import { createContext } from 'react';\n\n// Создаем контекст с начальным значением\nconst ThemeContext = createContext('light');\n\n// Экспортируем для использования в других файлах\nexport { ThemeContext };"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Провайдер контекста:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{"import { ThemeContext } from './ThemeContext';\n\nfunction App() {\n  const [theme, setTheme] = useState('dark');\n  \n  return (\n    <ThemeContext.Provider value={theme}>\n      <Main />\n    </ThemeContext.Provider>\n  );\n}"}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Хук useContext подробно */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-cyan-400" />
          Хук useContext подробно
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">useContext</code> — это <span className="font-medium">хук</span>, который позволяет <span className="font-medium">подписаться</span> на контекст React. Он принимает объект контекста (значение, возвращённое из <code className="bg-gray-700 px-1 rounded">React.createContext</code>) и возвращает текущее значение контекста для этого контекста.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-green-300">Синтаксис useContext</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-green-300 text-sm"><code>{"import { useContext } from 'react';\nimport { SomeContext } from './SomeContext';\n\nfunction MyComponent() {\n  const value = useContext(SomeContext);\n  \n  return <div>{value}</div>;\n}"}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-xs mt-3">
            <li>
              <code className="bg-gray-700 px-1 rounded">useContext</code> принимает объект контекста, <span className="font-medium">не</span> значение провайдера!
            </li>
            <li>
              Вызов <code className="bg-gray-700 px-1 rounded">useContext</code> всегда должен быть внутри функционального компонента
            </li>
            <li>
              Компонент, вызывающий <code className="bg-gray-700 px-1 rounded">useContext</code>, будет <span className="font-medium">перерендерен</span> при изменении значения контекста
            </li>
          </ul>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Неправильное использование:</p>
            <pre className="text-orange-300 text-sm overflow-x-auto">
              <code>{"// НЕПРАВИЛЬНО - передаем значение, а не контекст\nconst theme = useContext('dark');\n\n// НЕПРАВИЛЬНО - вызов вне компонента\nconst theme = useContext(ThemeContext);\nfunction MyComponent() {\n  // ...\n}"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Правильное использование:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{"// ПРАВИЛЬНО - импортируем контекст\nimport { ThemeContext } from './ThemeContext';\n\nfunction MyComponent() {\n  // ПРАВИЛЬНО - вызываем внутри компонента\n  const theme = useContext(ThemeContext);\n  \n  return <div className={theme}>Контент</div>;\n}"}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Практический пример: Темизация */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Palette className="w-5 h-5 text-purple-400" />
          Практический пример: Темизация приложения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Давайте рассмотрим полный пример создания системы темизации с помощью контекста и <code className="bg-gray-700 px-1 rounded">useContext</code>.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          {/* Создание контекста темы */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Palette className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">1. Создание контекста темы</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-blue-300 text-sm"><code>{"// ThemeContext.js\nimport { createContext, useState } from 'react';\n\n// Создаем контекст с начальным значением\nconst ThemeContext = createContext();\n\n// Создаем провайдер темы\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  \n  const toggleTheme = () => {\n    setTheme(prev => prev === 'light' ? 'dark' : 'light');\n  };\n  \n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nexport { ThemeContext };"}</code></pre>
            </div>
          </div>
          
          {/* Использование контекста в компоненте */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">2. Использование контекста в компоненте</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm"><code>{"// ThemeButton.js\nimport { useContext } from 'react';\nimport { ThemeContext } from './ThemeContext';\n\nfunction ThemeButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  \n  return (\n    <button \n      onClick={toggleTheme}\n      className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}\n    >\n      Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему\n    </button>\n  );\n}\n\nexport default ThemeButton;"}</code></pre>
            </div>
          </div>
          
          {/* Оборачивание приложения в провайдер */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Globe className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">3. Оборачивание приложения в провайдер</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-orange-300 text-sm"><code>{"// App.js\nimport { ThemeProvider } from './ThemeContext';\nimport ThemeButton from './ThemeButton';\nimport Header from './Header';\nimport Content from './Content';\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <div className=\"app\">\n        <Header />\n        <Content />\n        <ThemeButton />\n      </div>\n    </ThemeProvider>\n  );\n}\n\nexport default App;"}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Передача объектов и функций через контекст */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Передача объектов и функций через контекст
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Контекст может передавать <span className="font-medium">любые типы данных</span> — строки, числа, объекты, функции, массивы. Это делает его мощным инструментом для создания <span className="font-medium">глобального состояния</span> и <span className="font-medium">глобальных методов</span>.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Settings className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-yellow-300">Контекст с комплексным состоянием</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-yellow-300 text-sm"><code>{"// UserContext.js\nimport { createContext, useState } from 'react';\n\nconst UserContext = createContext();\n\nexport function UserProvider({ children }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n  \n  const login = async (credentials) => {\n    setLoading(true);\n    setError(null);\n    try {\n      const userData = await api.login(credentials);\n      setUser(userData);\n    } catch (err) {\n      setError(err.message);\n    } finally {\n      setLoading(false);\n    }\n  };\n  \n  const logout = () => {\n    setUser(null);\n    // Очистка токенов, данных и т.д.\n  };\n  \n  const value = {\n    user,\n    loading,\n    error,\n    login,\n    logout\n  };\n  \n  return (\n    <UserContext.Provider value={value}>\n      {children}\n    </UserContext.Provider>\n  );\n}\n\nexport { UserContext };"}</code></pre>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Использование в компоненте:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{"// LoginForm.js\nimport { useContext } from 'react';\nimport { UserContext } from './UserContext';\n\nfunction LoginForm() {\n  const { login, loading, error } = useContext(UserContext);\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    login({ email, password });\n  };\n  \n  if (loading) return <div>Вход...</div>;\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      {error && <div className=\"error\">{error}</div>}\n      <input \n        type=\"email\" \n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n      <input \n        type=\"password\" \n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n      />\n      <button type=\"submit\">Войти</button>\n    </form>\n  );\n}"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Использование в другом компоненте:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"// UserProfile.js\nimport { useContext } from 'react';\nimport { UserContext } from './UserContext';\n\nfunction UserProfile() {\n  const { user, logout } = useContext(UserContext);\n  \n  if (!user) return <div>Пользователь не авторизован</div>;\n  \n  return (\n    <div>\n      <h1>Привет, {user.name}!</h1>\n      <p>Email: {user.email}</p>\n      <button onClick={logout}>Выйти</button>\n    </div>\n  );\n}"}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Оптимизация и лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-orange-400" />
          Оптимизация и лучшие практики
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Share2 className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">Избегайте создания нового объекта в value</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">❌ Плохо (вызывает лишние перерендеры):</p>
                <pre className="text-red-300 text-xs"><code>{"function App() {\n  const [theme, setTheme] = useState('light');\n  \n  // ПЛОХО - создается новый объект при каждом рендере\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Child />\n    </ThemeContext.Provider>\n  );\n}"}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">✅ Хорошо (стабильное значение):</p>
                <pre className="text-green-300 text-xs"><code>{"function App() {\n  const [theme, setTheme] = useState('light');\n  \n  // ХОРОШО - создаем стабильный объект\n  const contextValue = useMemo(() => ({\n    theme,\n    setTheme\n  }), [theme]);\n  \n  return (\n    <ThemeContext.Provider value={contextValue}>\n      <Child />\n    </ThemeContext.Provider>\n  );\n}"}</code></pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Разделение контекстов</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{"// ПЛОХО - один контекст для всего\nconst AppContext = createContext();\n\n// ХОРОШО - разделенные контексты\nconst ThemeContext = createContext();\nconst UserContext = createContext();\nconst LanguageContext = createContext();\n\n// Каждый провайдер отвечает за свою область\nfunction AppProviders({ children }) {\n  return (\n    <ThemeProvider>\n      <UserProvider>\n        <LanguageProvider>\n          {children}\n        </LanguageProvider>\n      </UserProvider>\n    </ThemeProvider>\n  );\n}"}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Разделение контекстов позволяет избежать ненужных перерендеров компонентов, которые зависят только от части данных.
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Лучшие практики</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Используйте контекст</span> только для действительно глобальных данных</li>
              <li><span className="font-medium">Создавайте отдельные файлы</span> для каждого контекста</li>
              <li><span className="font-medium">Используйте useMemo</span> для стабилизации значения value</li>
              <li><span className="font-medium">Разделяйте контексты</span> по функциональным областям</li>
              <li><span className="font-medium">Экспортируйте провайдер</span> и контекст отдельно</li>
              <li><span className="font-medium">Добавляйте начальные значения</span> при создании контекста</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Когда использовать useContext, а когда нет */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-purple-400" />
          Когда использовать useContext, а когда нет?
        </h2>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Share2 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Когда ИСПОЛЬЗОВАТЬ useContext:</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Данные нужны во <span className="font-medium">многих компонентах</span> на разных уровнях</li>
              <li>Данные <span className="font-medium">не меняются часто</span> или меняются предсказуемо</li>
              <li>Нужно избежать <span className="font-medium">"пропс-дрейлинга"</span></li>
              <li>Данные касаются <span className="font-medium">глобального состояния</span> (тема, пользователь, язык)</li>
              <li>Нужно передавать <span className="font-medium">функции и методы</span> глобально</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Share2 className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">Когда НЕ использовать useContext:</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Данные используются <span className="font-medium">только в 1-2 компонентах</span></li>
              <li>Данные <span className="font-medium">часто меняются</span> и вызывают частые перерендеры</li>
              <li>Можно решить проблему <span className="font-medium">подъемом состояния</span></li>
              <li>Данные <span className="font-medium">локальны</span> для конкретного компонента</li>
              <li>Нужно оптимизировать <span className="font-medium">производительность</span> (лучше использовать Redux/MobX)</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Альтернативы useContext:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Подъем состояния</span> — когда данные можно разместить в ближайшем общем родителе</li>
                <li><span className="font-medium">Redux/Zustand</span> — для сложного глобального состояния с оптимизацией</li>
                <li><span className="font-medium">Props drilling</span> — когда уровень вложенности небольшой (1-2 уровня)</li>
                <li><span className="font-medium">Custom hooks</span> — для переиспользуемой логики без глобального состояния</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Share2 className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое контекст в React и как использовать хук <code className="bg-gray-700 px-1 rounded">useContext</code> для решения проблемы "пропс-дрейлинга". Вы научились создавать контекст с помощью <code className="bg-gray-700 px-1 rounded">React.createContext()</code>, оборачивать приложение в провайдер, использовать контекст в компонентах, передавать сложные объекты и функции через контекст, а также применять лучшие практики оптимизации. Контекст — это мощный инструмент для управления глобальным состоянием приложения, который помогает создавать более чистый и поддерживаемый код. В следующих уроках мы рассмотрим более продвинутые техники управления состоянием и изучим альтернативные решения для сложных приложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;