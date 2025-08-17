// src/data/courses/react/lesson7/part1.jsx
import React from 'react';
import { RefreshCw, Database, Timer, Download, Wifi, Power, Settings } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <RefreshCw className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🌀 Урок 7: Хук useEffect — побочные эффекты</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с побочными эффектами в React</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое побочные эффекты в React, научиться использовать хук <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useEffect</code> для выполнения побочных эффектов, освоить работу с массивом зависимостей и функцией очистки, применять useEffect для различных сценариев (загрузка данных, подписки, таймеры).
            </p>
          </div>
        </div>
      </div>

      {/* Что такое побочные эффекты? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-green-400" />
          Что такое побочные эффекты (side effects)?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Побочные эффекты (side effects)</span> — это <span className="font-medium">операции</span>, которые <span className="font-medium">взаимодействуют с внешним миром</span> или <span className="font-medium">выходят за рамки</span> чистого вычисления результата функции. В контексте React это операции, которые происходят <span className="font-medium">после</span> рендеринга компонента.
          </p>
          <p>
            Представьте чистую функцию как математическую операцию: <code className="bg-gray-700 px-1 rounded">2 + 2 = 4</code> — результат всегда одинаков и не зависит от внешних факторов. Побочный эффект — это когда функция кроме возврата значения еще <span className="font-medium">что-то делает</span> — например, изменяет DOM, отправляет HTTP-запрос, устанавливает таймер.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Чистая функция (без побочных эффектов):</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{"function add(a, b) {\n  return a + b;\n}"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Функция с побочным эффектом:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"function updateTitle(newTitle) {\n  document.title = newTitle; // Побочный эффект!\n  return newTitle;\n}"}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Типичные побочные эффекты в React:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Загрузка данных с сервера (HTTP-запросы)</li>
                <li>Подписка на события (addEventListener)</li>
                <li>Работа с API браузера (localStorage, document.title)</li>
                <li>Установка и очистка таймеров (setTimeout, setInterval)</li>
                <li>Подписка на WebSocket или другие потоки данных</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Что такое хук useEffect? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RefreshCw className="w-5 h-5 text-yellow-400" />
          Что такое хук useEffect?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">useEffect</code> — это <span className="font-medium">хук</span> в React, который позволяет выполнять побочные эффекты в функциональных компонентах. Он объединяет функциональность нескольких методов жизненного цикла из классовых компонентов.
          </p>
          <p>
            <code className="bg-gray-700 px-1 rounded">useEffect</code> принимает <span className="font-medium">две функции</span>:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><span className="font-medium">Функция эффекта</span> — содержит код побочного эффекта</li>
            <li><span className="font-medium">Массив зависимостей</span> — определяет, когда выполнять эффект</li>
          </ol>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Settings className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Синтаксис useEffect</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-purple-300 text-sm"><code>{"import { useEffect } from 'react';\n\nuseEffect(() => {\n  // Код побочного эффекта\n  return () => {\n    // Функция очистки (опционально)\n  };\n}, [/* массив зависимостей */]);"}</code></pre>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Простой пример:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{"import { useEffect } from 'react';\n\nfunction MyComponent() {\n  useEffect(() => {\n    console.log('Компонент смонтирован!');\n  }, []);\n  \n  return <div>Привет, useEffect!</div>;\n}"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример с очисткой:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{"import { useEffect } from 'react';\n\nfunction Timer() {\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log('Тик!');\n    }, 1000);\n    \n    return () => {\n      clearInterval(timer); // Очистка\n    };\n  }, []);\n  \n  return <div>Таймер работает...</div>;\n}"}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Массив зависимостей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Массив зависимостей в useEffect
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Массив зависимостей</span> — это <span className="font-medium">второй параметр</span> <code className="bg-gray-700 px-1 rounded">useEffect</code>, который определяет, <span className="font-medium">когда</span> должен выполняться эффект. От его содержимого зависит поведение хука.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Power className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Пустой массив зависимостей []</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Эффект выполняется <span className="font-medium">только один раз</span> после первого рендера компонента (аналог <code className="bg-gray-700 px-1 rounded">componentDidMount</code>).
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm"><code>{"useEffect(() => {\n  console.log('Выполняется один раз при монтировании');\n}, []);"}</code></pre>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              Используется для инициализации, загрузки данных, установки глобальных слушателей событий.
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <RefreshCw className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">Массив с зависимостями [value1, value2]</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Эффект выполняется <span className="font-medium">при первом рендере</span> и <span className="font-medium">каждый раз</span>, когда <span className="font-medium">хотя бы одна</span> из зависимостей изменяется.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-yellow-300 text-sm"><code>{"const [count, setCount] = useState(0);\n\nuseEffect(() => {\n  console.log('Count изменился:', count);\n}, [count]);"}</code></pre>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              Используется для реакции на изменения определенных значений.
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <Wifi className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">Без массива зависимостей</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Эффект выполняется <span className="font-medium">после каждого рендера</span> компонента (аналог <code className="bg-gray-700 px-1 rounded">componentDidMount</code> + <code className="bg-gray-700 px-1 rounded">componentDidUpdate</code>).
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-red-300 text-sm"><code>{"useEffect(() => {\n  console.log('Выполняется после каждого рендера');\n});"}</code></pre>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              Используется редко, так как может привести к проблемам производительности.
            </p>
          </div>
        </div>
      </div>

      {/* Функция очистки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Timer className="w-5 h-5 text-orange-400" />
          Функция очистки в useEffect
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-orange-300">Функция очистки</span> — это <span className="font-medium">функция, возвращаемая</span> из эффекта. Она выполняется <span className="font-medium">перед следующим запуском эффекта</span> или <span className="font-medium">при размонтировании</span> компонента.
          </p>
          <p>
            Функция очистки необходима для <span className="font-medium">освобождения ресурсов</span>, чтобы избежать утечек памяти и неожиданного поведения.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Power className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Когда вызывается функция очистки?</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li><span className="font-medium">Перед следующим выполнением эффекта</span> (если зависимости изменились)</li>
            <li><span className="font-medium">При размонтировании компонента</span> (когда компонент удаляется из DOM)</li>
          </ul>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример с таймером:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{"useEffect(() => {\n  const timer = setInterval(() => {\n    console.log('Тик!');\n  }, 1000);\n  \n  // Функция очистки\n  return () => {\n    clearInterval(timer);\n    console.log('Таймер очищен');\n  };\n}, []);"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример с подпиской на событие:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"useEffect(() => {\n  const handleResize = () => {\n    console.log('Размер окна изменился');\n  };\n  \n  window.addEventListener('resize', handleResize);\n  \n  // Функция очистки\n  return () => {\n    window.removeEventListener('resize', handleResize);\n  };\n}, []);"}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем нужна очистка?</span>
            <span>
              Без очистки могут возникнуть <span className="font-medium">утечки памяти</span> (таймеры продолжают работать), <span className="font-medium">дублированные события</span> (множественные подписки), <span className="font-medium">ошибки</span> (попытка обновить состояние размонтированного компонента).
            </span>
          </p>
        </div>
      </div>

      {/* Практические примеры использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-cyan-400" />
          Практические примеры использования useEffect
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Загрузка данных при монтировании</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{"import { useState, useEffect } from 'react';\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    const fetchUser = async () => {\n      try {\n        const response = await fetch(`/api/users/${userId}`);\n        const userData = await response.json();\n        setUser(userData);\n      } catch (error) {\n        console.error('Ошибка загрузки:', error);\n      } finally {\n        setLoading(false);\n      }\n    };\n    \n    fetchUser();\n  }, [userId]);\n  \n  if (loading) return <div>Загрузка...</div>;\n  if (!user) return <div>Пользователь не найден</div>;\n  \n  return (\n    <div>\n      <h1>{user.name}</h1>\n      <p>{user.email}</p>\n    </div>\n  );\n}"}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Timer className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Таймер с обновлением состояния</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{"import { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n  \n  useEffect(() => {\n    const interval = setInterval(() => {\n      setSeconds(prev => prev + 1);\n    }, 1000);\n    \n    return () => {\n      clearInterval(interval);\n    };\n  }, []);\n  \n  return (\n    <div>\n      <p>Прошло секунд: {seconds}</p>\n      <button onClick={() => setSeconds(0)}>\n        Сбросить\n      </button>\n    </div>\n  );\n}"}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Wifi className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">Подписка на события браузера</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-orange-300 text-sm"><code>{"import { useState, useEffect } from 'react';\n\nfunction WindowSize() {\n  const [windowSize, setWindowSize] = useState({\n    width: window.innerWidth,\n    height: window.innerHeight\n  });\n  \n  useEffect(() => {\n    const handleResize = () => {\n      setWindowSize({\n        width: window.innerWidth,\n        height: window.innerHeight\n      });\n    };\n    \n    window.addEventListener('resize', handleResize);\n    \n    return () => {\n      window.removeEventListener('resize', handleResize);\n    };\n  }, []);\n  \n  return (\n    <div>\n      <p>Ширина: {windowSize.width}px</p>\n      <p>Высота: {windowSize.height}px</p>\n    </div>\n  );\n}"}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">Работа с localStorage</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-purple-300 text-sm"><code>{"import { useState, useEffect } from 'react';\n\nfunction ThemeSwitcher() {\n  const [theme, setTheme] = useState('light');\n  \n  // Загрузка темы при монтировании\n  useEffect(() => {\n    const savedTheme = localStorage.getItem('theme');\n    if (savedTheme) {\n      setTheme(savedTheme);\n    }\n  }, []);\n  \n  // Сохранение темы при изменении\n  useEffect(() => {\n    localStorage.setItem('theme', theme);\n    document.body.className = theme;\n  }, [theme]);\n  \n  return (\n    <div>\n      <p>Текущая тема: {theme}</p>\n      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>\n        Переключить тему\n      </button>\n    </div>\n  );\n}"}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Распространенные ошибки и лучшие практике */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-red-400" />
          Распространенные ошибки и лучшие практики
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <RefreshCw className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">Ошибка: Забытый массив зависимостей</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">❌ Плохо:</p>
                <pre className="text-red-300 text-xs"><code>{"const [count, setCount] = useState(0);\n\n// Будет выполняться при каждом рендере!\nuseEffect(() => {\n  console.log('Count:', count);\n});"}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">✅ Хорошо:</p>
                <pre className="text-green-300 text-xs"><code>{"const [count, setCount] = useState(0);\n\n// Выполняется только при изменении count\nuseEffect(() => {\n  console.log('Count:', count);\n}, [count]);"}</code></pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Power className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">Ошибка: Мутация объектов в зависимостях</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">❌ Проблема:</p>
                <pre className="text-red-300 text-xs"><code>{"const [user, setUser] = useState({ name: 'Иван' });\n\n// Эффект может не сработать при изменении user\nuseEffect(() => {\n  console.log('User changed');\n}, [user]);"}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">✅ Решение:</p>
                <pre className="text-green-300 text-xs"><code>{"const [user, setUser] = useState({ name: 'Иван' });\n\n// Используем конкретное свойство\nuseEffect(() => {\n  console.log('User name changed');\n}, [user.name]);"}</code></pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Лучшие практики</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Всегда указывайте массив зависимостей</span> — даже если он пустой</li>
              <li><span className="font-medium">Используйте примитивы в зависимостях</span> вместо объектов, когда это возможно</li>
              <li><span className="font-medium">Разделяйте разные эффекты</span> на несколько <code className="bg-gray-700 px-1 rounded">useEffect</code>, если они независимы</li>
              <li><span className="font-medium">Всегда реализуйте очистку</span> для таймеров, подписок и слушателей событий</li>
              <li><span className="font-medium">Избегайте анонимных функций</span> внутри useEffect — выносите их в отдельные функции для лучшей читаемости</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <RefreshCw className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое побочные эффекты в React и как использовать хук <code className="bg-gray-700 px-1 rounded">useEffect</code> для их обработки. Вы научились управлять выполнением эффектов с помощью массива зависимостей, реализовывать функции очистки для предотвращения утечек памяти, работать с различными сценариями использования (загрузка данных, таймеры, события браузера). Хук <code className="bg-gray-700 px-1 rounded">useEffect</code> — это мощный инструмент, который позволяет функциональным компонентам выполнять сложные операции и взаимодействовать с внешним миром. Правильное использование useEffect является ключом к созданию надежных и эффективных React-приложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;