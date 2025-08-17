// src/data/courses/react/lesson12/part1.jsx
import React from 'react';
import { Eye, Code, Database, Timer, Link, Settings } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">👁️ Урок 12: Хук useRef — доступ к DOM и сохранение значений</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с ссылками и сохранение изменяемых значений</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое хук <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useRef</code>, освоить его использование для доступа к DOM-элементам, сохранения значений между рендерами без вызова обновления, управления фокусом, таймерами и другими императивными операциями.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое useRef? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Link className="w-5 h-5 text-green-400" />
          Что такое useRef?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">useRef</code> — это <span className="font-medium">хук</span> в React, который возвращает <span className="font-medium">изменяемый объект</span> с единственным свойством <code className="bg-gray-700 px-1 rounded">.current</code>. Значение этого свойства <span className="font-medium">сохраняется между рендерами</span> компонента.
          </p>
          <p>
            Основное отличие <code className="bg-gray-700 px-1 rounded">useRef</code> от <code className="bg-gray-700 px-1 rounded">useState</code> в том, что <span className="font-medium">изменение</span> значения <code className="bg-gray-700 px-1 rounded">.current</code> <span className="font-medium">не вызывает</span> перерендер компонента. Это делает <code className="bg-gray-700 px-1 rounded">useRef</code> идеальным инструментом для хранения значений, которые должны сохраняться между рендерами, но не влияют на отображение компонента.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Синтаксис useRef:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{`import { useRef } from 'react';\n\nconst refContainer = useRef(initialValue);`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Структура объекта useRef:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{`// После вызова useRef(initialValue)\n{\n  current: initialValue // Значение сохраняется между рендерами\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Ключевые особенности useRef:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Возвращает <span className="font-medium">изменяемый объект</span> с свойством <code className="bg-gray-700 px-1 rounded">.current</code></li>
                <li><span className="font-medium">Сохраняет значение</span> между рендерами компонента</li>
                <li><span className="font-medium">Не вызывает</span> перерендер при изменении значения</li>
                <li>Значение <span className="font-medium">сохраняется</span> при обновлениях компонента</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Доступ к DOM-элементам */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-yellow-400" />
          Доступ к DOM-элементам
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Один из самых распространенных случаев использования <code className="bg-gray-700 px-1 rounded">useRef</code> — это <span className="font-medium">получение прямого доступа</span> к DOM-элементам. Это позволяет выполнять <span className="font-medium">императивные операции</span> с элементами, такие как фокусировка, выделение текста, измерение размеров и т.д.
          </p>
          <p>
            Для этого мы передаем <span className="font-medium">ref-объект</span> в <span className="font-medium">атрибут ref</span> JSX-элемента. После монтирования компонента свойство <code className="bg-gray-700 px-1 rounded">.current</code> будет содержать <span className="font-medium">ссылку на DOM-элемент</span>.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Eye className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Работа с ref для доступа к DOM</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-purple-300 text-sm"><code>{`import { useRef } from 'react';\n\nfunction FocusInput() {\n  const inputRef = useRef(null);\n  \n  const focusInput = () => {\n    // inputRef.current содержит ссылку на DOM-элемент input\n    inputRef.current.focus();\n  };\n  \n  return (\n    <div>\n      <input ref={inputRef} type="text" placeholder="Введите текст" />\n      <button onClick={focusInput}>Фокус на поле ввода</button>\n    </div>\n  );\n}`}</code></pre>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример с выделением текста:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function SelectText() {\n  const textRef = useRef(null);\n  \n  const selectText = () => {\n    const textElement = textRef.current;\n    const range = document.createRange();\n    range.selectNodeContents(textElement);\n    const selection = window.getSelection();\n    selection.removeAllRanges();\n    selection.addRange(range);\n  };\n  \n  return (\n    <div>\n      <p ref={textRef}>Выделите этот текст</p>\n      <button onClick={selectText}>Выделить текст</button>\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример с измерением размеров:</p>
            <pre className="text-orange-300 text-sm overflow-x-auto">
              <code>{`function MeasureElement() {\n  const divRef = useRef(null);\n  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });\n  \n  const measure = () => {\n    const { offsetWidth, offsetHeight } = divRef.current;\n    setDimensions({ width: offsetWidth, height: offsetHeight });\n  };\n  \n  return (\n    <div>\n      <div ref={divRef} style={{ border: '1px solid black', padding: '20px' }}>\n        Измеряемый элемент\n      </div>\n      <p>Размеры: {dimensions.width} x {dimensions.height}</p>\n      <button onClick={measure}>Измерить</button>\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Сохранение значений между рендерами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Сохранение значений между рендерами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1 rounded">useRef</code> также используется для <span className="font-medium">сохранения значений</span>, которые должны <span className="font-medium">сохраняться между рендерами</span> компонента, но <span className="font-medium">не вызывают перерендер</span> при изменении.
          </p>
          <p>
            Это полезно для хранения <span className="font-medium">предыдущих значений</span> пропсов или состояния, <span className="font-medium">таймеров</span>, <span className="font-medium">интервалов</span>, <span className="font-medium">идентификаторов</span> и других данных, которые не влияют на отображение компонента.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Timer className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Хранение предыдущих значений</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-blue-300 text-sm"><code>{`import { useState, useRef, useEffect } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const prevCountRef = useRef();\n  \n  useEffect(() => {\n    // Сохраняем предыдущее значение после рендера\n    prevCountRef.current = count;\n  });\n  \n  const prevCount = prevCountRef.current;\n  \n  return (\n    <div>\n      <p>Текущее значение: {count}</p>\n      <p>Предыдущее значение: {prevCount}</p>\n      <button onClick={() => setCount(count + 1)}>Увеличить</button>\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Хранение таймеров и интервалов</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm"><code>{`import { useState, useRef } from 'react';\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n  const intervalRef = useRef(null);\n  \n  const startTimer = () => {\n    if (intervalRef.current) return; // Уже запущен\n    \n    intervalRef.current = setInterval(() => {\n      setSeconds(prev => prev + 1);\n    }, 1000);\n  };\n  \n  const stopTimer = () => {\n    if (intervalRef.current) {\n      clearInterval(intervalRef.current);\n      intervalRef.current = null;\n    }\n  };\n  \n  const resetTimer = () => {\n    stopTimer();\n    setSeconds(0);\n  };\n  \n  return (\n    <div>\n      <p>Прошло секунд: {seconds}</p>\n      <button onClick={startTimer}>Старт</button>\n      <button onClick={stopTimer}>Стоп</button>\n      <button onClick={resetTimer}>Сброс</button>\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Отличия useRef от useState */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-orange-400" />
          Отличия useRef от useState
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Важно понимать ключевые <span className="font-medium">отличия</span> между <code className="bg-gray-700 px-1 rounded">useRef</code> и <code className="bg-gray-700 px-1 rounded">useState</code>, чтобы правильно выбирать подходящий хук для каждой задачи.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">useRef</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Возвращает объект</span> с изменяемым свойством <code className="bg-gray-700 px-1 rounded">.current</code></li>
              <li><span className="font-medium">Не вызывает перерендер</span> при изменении значения</li>
              <li><span className="font-medium">Значение сохраняется</span> между рендерами</li>
              <li><span className="font-medium">Используется для:</span> доступа к DOM, хранения значений между рендерами, таймеров</li>
              <li><span className="font-medium">Для чтения:</span> <code className="bg-gray-700 px-1 rounded">ref.current</code></li>
              <li><span className="font-medium">Для записи:</span> <code className="bg-gray-700 px-1 rounded">ref.current = value</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">useState</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Возвращает массив</span> [значение, функция установки]</li>
              <li><span className="font-medium">Вызывает перерендер</span> при изменении значения</li>
              <li><span className="font-medium">Значение сохраняется</span> между рендерами</li>
              <li><span className="font-medium">Используется для:</span> управления состоянием компонента</li>
              <li><span className="font-medium">Для чтения:</span> <code className="bg-gray-700 px-1 rounded">value</code></li>
              <li><span className="font-medium">Для записи:</span> <code className="bg-gray-700 px-1 rounded">setValue(newValue)</code></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-yellow-300">Практическое сравнение</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">С useRef (не вызывает перерендер):</p>
              <pre className="text-yellow-300 text-xs"><code>{`const renderCountRef = useRef(0);\nrenderCountRef.current += 1;\n// Компонент НЕ перерендерится\nconsole.log(renderCountRef.current); // 1, 2, 3...`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">С useState (вызывает перерендер):</p>
              <pre className="text-yellow-300 text-xs"><code>{`const [renderCount, setRenderCount] = useState(0);\nsetRenderCount(renderCount + 1);\n// Компонент перерендерится\nconsole.log(renderCount); // Всегда 0 (старое значение)`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-purple-400" />
          Практические примеры использования useRef
        </h2>
        
        <div className="mt-6 space-y-6">
          {/* Автофокус при монтировании */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Автофокус при монтировании</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-blue-300 text-sm"><code>{`import { useRef, useEffect } from 'react';\n\nfunction AutoFocusInput() {\n  const inputRef = useRef(null);\n  \n  useEffect(() => {\n    // Фокус на поле ввода при монтировании\n    inputRef.current?.focus();\n  }, []);\n  \n  return (\n    <input \n      ref={inputRef} \n      type="text" \n      placeholder="Я автоматически в фокусе!" \n    />\n  );\n}`}</code></pre>
            </div>
          </div>
          
          {/* Отслеживание кликов вне элемента */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Отслеживание кликов вне элемента</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm"><code>{`import { useRef, useEffect, useState } from 'react';\n\nfunction Dropdown() {\n  const [isOpen, setIsOpen] = useState(false);\n  const dropdownRef = useRef(null);\n  \n  useEffect(() => {\n    const handleClickOutside = (event) => {\n      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n        setIsOpen(false);\n      }\n    };\n    \n    document.addEventListener('mousedown', handleClickOutside);\n    return () => {\n      document.removeEventListener('mousedown', handleClickOutside);\n    };\n  }, []);\n  \n  return (\n    <div ref={dropdownRef} className="dropdown">\n      <button onClick={() => setIsOpen(!isOpen)}>\n        Меню {isOpen ? '▲' : '▼'}\n      </button>\n      {isOpen && (\n        <div className="dropdown-menu">\n          <div>Пункт 1</div>\n          <div>Пункт 2</div>\n          <div>Пункт 3</div>\n        </div>\n      )}\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
          
          {/* Создание уникального ID для элементов */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">Создание уникального ID</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-orange-300 text-sm"><code>{`import { useRef } from 'react';\n\nfunction useUniqueId() {\n  const idRef = useRef(null);\n  if (idRef.current === null) {\n    idRef.current = 'id-' + Math.random().toString(36).substr(2, 9);\n  }\n  return idRef.current;\n}\n\nfunction FormField({ label, ...props }) {\n  const id = useUniqueId();\n  \n  return (\n    <div>\n      <label htmlFor={id}>{label}</label>\n      <input id={id} {...props} />\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Передача ref в дочерние компоненты */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Link className="w-5 h-5 text-cyan-400" />
          Передача ref в дочерние компоненты
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            По умолчанию <span className="font-medium">ref нельзя передать</span> в дочерний компонент как обычный пропс, потому что <code className="bg-gray-700 px-1 rounded">ref</code> — это <span className="font-medium">зарезервированный атрибут</span> React. Для передачи ref в дочерние компоненты используются специальные техники.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">forwardRef для функциональных компонентов</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-yellow-300 text-sm"><code>{`import { forwardRef } from 'react';\n\n// Компонент, который принимает ref\nconst CustomInput = forwardRef((props, ref) => (\n  <input \n    ref={ref} \n    {...props} \n    style={{ border: '2px solid blue', padding: '8px' }} \n  />\n));\n\n// Использование компонента\nfunction ParentComponent() {\n  const inputRef = useRef(null);\n  \n  const focusInput = () => {\n    inputRef.current?.focus();\n  };\n  \n  return (\n    <div>\n      <CustomInput ref={inputRef} placeholder="Кастомный input" />\n      <button onClick={focusInput}>Фокус на кастомный input</button>\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">useImperativeHandle для кастомных методов</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-purple-300 text-sm"><code>{`import { useRef, forwardRef, useImperativeHandle } from 'react';\n\nconst FancyInput = forwardRef((props, ref) => {\n  const inputRef = useRef();\n  \n  useImperativeHandle(ref, () => ({\n    focus: () => {\n      inputRef.current.focus();\n    },\n    select: () => {\n      inputRef.current.select();\n    },\n    getValue: () => {\n      return inputRef.current.value;\n    }\n  }));\n  \n  return <input ref={inputRef} {...props} />;\n});\n\nfunction Parent() {\n  const fancyInputRef = useRef();\n  \n  const handleFocus = () => {\n    fancyInputRef.current.focus();\n  };\n  \n  const handleSelect = () => {\n    fancyInputRef.current.select();\n  };\n  \n  return (\n    <div>\n      <FancyInput ref={fancyInputRef} />\n      <button onClick={handleFocus}>Фокус</button>\n      <button onClick={handleSelect}>Выделить</button>\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Лучшие практики и советы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Лучшие практики и советы
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Когда использовать useRef</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Для <span className="font-medium">доступа к DOM-элементам</span> и выполнения императивных операций</li>
              <li>Для <span className="font-medium">сохранения значений</span> между рендерами без вызова перерендера</li>
              <li>Для <span className="font-medium">хранения таймеров</span> и интервалов</li>
              <li>Для <span className="font-medium">отслеживания предыдущих значений</span> пропсов или состояния</li>
              <li>Для <span className="font-medium">хранения идентификаторов</span> и других мутабельных данных</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">Когда НЕ использовать useRef</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Для <span className="font-medium">хранения данных</span>, которые влияют на отображение компонента (используйте useState)</li>
              <li>Для <span className="font-medium">управления состоянием</span> компонента (используйте useState или useReducer)</li>
              <li>Для <span className="font-medium">выполнения побочных эффектов</span> (используйте useEffect)</li>
              <li>Для <span className="font-medium">передачи данных</span> между компонентами (используйте пропсы или контекст)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Важные советы</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Проверяйте существование</span> ref перед использованием: <code className="bg-gray-700 px-1 rounded">ref.current?.method()</code></li>
              <li><span className="font-medium">Очищайте таймеры</span> и интервалы в useEffect cleanup функции</li>
              <li><span className="font-medium">Не мутируйте</span> DOM-элементы напрямую, кроме как через ref</li>
              <li><span className="font-medium">Используйте forwardRef</span> для передачи ref в дочерние компоненты</li>
              <li><span className="font-medium">Избегайте чтения ref в рендере</span> — это может привести к непредсказуемому поведению</li>
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
              Теперь вы понимаете, что такое хук <code className="bg-gray-700 px-1 rounded">useRef</code> и как его использовать для доступа к DOM-элементам и сохранения значений между рендерами. Вы научились различать useRef и useState, освоили передачу ref в дочерние компоненты с помощью forwardRef, и изучили лучшие практики использования этого мощного инструмента. useRef — это отличный выбор для императивных операций, управления фокусом, хранения таймеров и других задач, которые не требуют перерендера компонента. В следующих уроках мы рассмотрим продвинутые техники работы с DOM и изучим другие хуки для управления побочными эффектами и оптимизации производительности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;