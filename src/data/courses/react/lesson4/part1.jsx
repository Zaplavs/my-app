// src/data/courses/react/lesson4/part1.jsx
import React from 'react';
import { Database, RefreshCw, Edit3, ToggleLeft, Hash, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Database className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📊 Урок 4: Хук useState — управление состоянием</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с изменяемыми данными в React</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое состояние (state) в React, научиться использовать хук <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">useState</code> для управления изменяемыми данными, освоить обновление состояния через сеттер-функцию и применять его для создания интерактивных компонентов.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое состояние в React? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-green-400" />
          Что такое состояние (state) в React?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Состояние (state)</span> в React — это <span className="font-medium">данные</span>, которые <span className="font-medium">изменяются</span> со временем и <span className="font-medium">влияют</span> на отображение компонента. Когда состояние изменяется, React <span className="font-medium">автоматически перерисовывает</span> (ререндерит) компонент, чтобы отразить новые данные.
          </p>
          <p>
            Представьте состояние как <span className="font-medium">память</span> компонента. В отличие от обычных переменных, которые исчезают при каждом ререндере, состояние <span className="font-medium">сохраняется</span> между рендерами компонента.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">Обычная переменная (не сохраняется):</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`function Counter() {\n  let count = 0; // Обычная переменная\n  \n  const handleClick = () => {\n    count++; // Изменение не отразится в UI\n    console.log(count); // В консоли будет новое значение\n  };\n  \n  return (\n    <div>\n      <p>Счетчик: {count}</p> {/* Всегда будет 0 */}\n      <button onClick={handleClick}>Увеличить</button>\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Состояние (сохраняется и обновляет UI):</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function Counter() {\n  const [count, setCount] = useState(0); // Состояние\n  \n  const handleClick = () => {\n    setCount(count + 1); // Обновление состояния\n  };\n  \n  return (\n    <div>\n      <p>Счетчик: {count}</p> {/* Автоматически обновляется */}\n      <button onClick={handleClick}>Увеличить</button>\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Ключевые особенности состояния:</span>
            <span>
              Состояние <span className="font-medium">изолировано</span> внутри компонента, <span className="font-medium">сохраняется</span> между рендерами и <span className="font-medium">вызывает ререндер</span> при изменении. Это делает интерфейс <span className="font-medium">интерактивным</span>.
            </span>
          </p>
        </div>
      </div>

      {/* Что такое хуки? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RefreshCw className="w-5 h-5 text-yellow-400" />
          Что такое хуки (hooks)?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">Хуки</span> — это <span className="font-medium">специальные функции</span> в React, которые позволяют <span className="font-medium">"подцепиться"</span> к возможностям React из функциональных компонентов. До появления хуков такие возможности были доступны только в классовых компонентах.
          </p>
          <p>
            Хуки позволяют использовать состояние, эффекты и другие возможности React без написания классов. Они <span className="font-medium">начинаются с "use"</span> (например, <code className="bg-gray-700 px-1 rounded">useState</code>, <code className="bg-gray-700 px-1 rounded">useEffect</code>) и <span className="font-medium">должны вызываться</span> на <span className="font-medium">верхнем уровне</span> компонента или других хуков.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Edit3 className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Правила использования хуков</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>
              <span className="font-medium">Вызывайте хуки только на верхнем уровне</span> — не внутри циклов, условий или вложенных функций.
            </li>
            <li>
              <span className="font-medium">Вызывайте хуки только из функциональных компонентов</span> или пользовательских хуков.
            </li>
            <li>
              <span className="font-medium">Названия хуков должны начинаться с "use"</span> — это помогает React правильно их обрабатывать.
            </li>
          </ul>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">✅ Правильно:</p>
              <pre className="text-green-300 text-xs"><code>{`function MyComponent() {\n  const [count, setCount] = useState(0);\n  \n  if (count > 10) {\n    // Условие внутри, но хук на верхнем уровне\n  }\n}`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">❌ Неправильно:</p>
              <pre className="text-red-300 text-xs"><code>{`function MyComponent() {\n  if (condition) {\n    const [count, setCount] = useState(0); // ОШИБКА!\n  }\n}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Хук useState подробно */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-cyan-400" />
          Хук useState — подробное изучение
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">useState</code> — это самый базовый и часто используемый хук в React. Он позволяет добавить <span className="font-medium">состояние</span> в функциональный компонент.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          {/* Импорт */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Импорт useState</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-blue-300 text-sm"><code>{`import { useState } from 'react';`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              useState импортируется из библиотеки react.
            </p>
          </div>
          
          {/* Синтаксис */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Hash className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Синтаксис useState</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm"><code>{`const [state, setState] = useState(initialValue);`}</code></pre>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-xs mt-3">
              <li>
                <code className="bg-gray-700 px-1 rounded">state</code> — <span className="font-medium">переменная состояния</span>, содержащая текущее значение.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">setState</code> — <span className="font-medium">функция обновления состояния</span> (сеттер).
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">initialValue</code> — <span className="font-medium">начальное значение</span> состояния.
              </li>
              <li>
                Используется <span className="font-medium">деструктуризация массива</span> для получения двух значений.
              </li>
            </ul>
          </div>
          
          {/* Примеры начальных значений */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Edit3 className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">Примеры начальных значений</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Число:</p>
                <pre className="text-orange-300 text-xs"><code>{`const [count, setCount] = useState(0);`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Строка:</p>
                <pre className="text-orange-300 text-xs"><code>{`const [name, setName] = useState('');`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Булево значение:</p>
                <pre className="text-orange-300 text-xs"><code>{`const [isVisible, setIsVisible] = useState(true);`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Объект:</p>
                <pre className="text-orange-300 text-xs"><code>{`const [user, setUser] = useState({ name: '', age: 0 });`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Обновление состояния */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RefreshCw className="w-5 h-5 text-purple-400" />
          Обновление состояния через сеттер-функцию
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для <span className="font-medium">обновления состояния</span> необходимо использовать <span className="font-medium">сеттер-функцию</span> (<code className="bg-gray-700 px-1 rounded">setState</code>), возвращаемую <code className="bg-gray-700 px-1 rounded">useState</code>. <span className="font-medium">Прямое изменение</span> переменной состояния <span className="font-medium">не работает</span> и не вызывает ререндер.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Неправильно — прямое изменение:</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`const [count, setCount] = useState(0);\n\n// Так делать нельзя!\ncount = count + 1; // НЕ ВЫЗОВЕТ РЕРЕНДЕР!\ncount++; // ТОЖЕ НЕ ВЫЗОВЕТ РЕРЕНДЕР!`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Правильно — через сеттер:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`const [count, setCount] = useState(0);\n\n// Так правильно:\nsetCount(count + 1); // ВЫЗОВЕТ РЕРЕНДЕР!`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-6 space-y-6">
          {/* Простое обновление */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Edit3 className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">Простое обновление значения</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-cyan-300 text-sm"><code>{`function Counter() {\n  const [count, setCount] = useState(0);\n  \n  const increment = () => setCount(count + 1);\n  const decrement = () => setCount(count - 1);\n  const reset = () => setCount(0);\n  \n  return (\n    <div>\n      <p>Счетчик: {count}</p>\n      <button onClick={increment}>+</button>\n      <button onClick={decrement}>-</button>\n      <button onClick={reset}>Сброс</button>\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Передаем новое значение напрямую в сеттер-функцию.
            </p>
          </div>
          
          {/* Функциональное обновление */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <RefreshCw className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">Функциональное обновление</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-yellow-300 text-sm"><code>{`function Counter() {\n  const [count, setCount] = useState(0);\n  \n  const increment = () => setCount(prevCount => prevCount + 1);\n  const decrement = () => setCount(prevCount => prevCount - 1);\n  \n  return (\n    <div>\n      <p>Счетчик: {count}</p>\n      <button onClick={increment}>+</button>\n      <button onClick={decrement}>-</button>\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Передаем функцию в сеттер, которая получает предыдущее значение и возвращает новое. Используется, когда новое значение зависит от предыдущего.
            </p>
          </div>
        </div>
      </div>

      {/* Практические примеры использования */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ToggleLeft className="w-5 h-5 text-orange-400" />
          Практические примеры использования useState
        </h2>
        
        <div className="mt-6 space-y-6">
          {/* Переключатель */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <ToggleLeft className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Переключатель (Toggle)</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{`function Toggle() {\n  const [isOn, setIsOn] = useState(false);\n  \n  const toggle = () => setIsOn(!isOn);\n  \n  return (\n    <div>\n      <p>Состояние: {isOn ? 'ВКЛ' : 'ВЫКЛ'}</p>\n      <button onClick={toggle}>\n        {isOn ? 'Выключить' : 'Включить'}\n      </button>\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Используется для переключения между двумя состояниями.
            </p>
          </div>
          
          {/* Форма ввода */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Edit3 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Форма ввода текста</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`function TextInput() {\n  const [text, setText] = useState('');\n  \n  const handleChange = (e) => setText(e.target.value);\n  \n  return (\n    <div>\n      <input \n        type="text" \n        value={text} \n        onChange={handleChange} \n        placeholder="Введите текст"\n      />\n      <p>Вы ввели: {text}</p>\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Связываем состояние с полем ввода для создания контролируемого компонента.
            </p>
          </div>
          
          {/* Список элементов */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Hash className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">Список элементов</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-purple-300 text-sm"><code>{`function TodoList() {\n  const [todos, setTodos] = useState([]);\n  const [inputValue, setInputValue] = useState('');\n  \n  const addTodo = () => {\n    if (inputValue.trim()) {\n      setTodos([...todos, inputValue]);\n      setInputValue('');\n    }\n  };\n  \n  const removeTodo = (index) => {\n    setTodos(todos.filter((_, i) => i !== index));\n  };\n  \n  return (\n    <div>\n      <input \n        type="text" \n        value={inputValue} \n        onChange={(e) => setInputValue(e.target.value)}\n      />\n      <button onClick={addTodo}>Добавить</button>\n      <ul>\n        {todos.map((todo, index) => (\n          <li key={index}>\n            {todo} \n            <button onClick={() => removeTodo(index)}>Удалить</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Управление массивами состояния для создания динамических списков.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое состояние в React и как использовать хук <code className="bg-gray-700 px-1 rounded">useState</code> для управления изменяемыми данными. Вы узнали, что состояние сохраняется между рендерами и вызывает автоматический ререндер при изменении. Научились правильно обновлять состояние через сеттер-функцию и избегать прямой мутации. Хук <code className="bg-gray-700 px-1 rounded">useState</code> — это фундаментальный инструмент для создания интерактивных React-приложений, который вы будете использовать постоянно. В следующих уроках мы изучим другие хуки и более сложные сценарии управления состоянием.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;