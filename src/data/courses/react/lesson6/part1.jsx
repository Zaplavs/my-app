// src/data/courses/react/lesson6/part1.jsx
import React from 'react';
import { Hash, List, Key, Database, RefreshCw, AlertTriangle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <List className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📋 Урок 6: Работа со списками и ключи</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Эффективный рендеринг списков в React</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как правильно отображать списки элементов в React с помощью метода <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">.map()</code>, освоить концепцию ключей (<code className="bg-gray-700 px-1 rounded">key</code>) и их важность для оптимизации производительности, научиться выбирать правильные значения для ключей.
            </p>
          </div>
        </div>
      </div>

      {/* Рендеринг списков в React */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-green-400" />
          Рендеринг списков в React
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В React для отображения списков элементов используется метод массива <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">.map()</code>. Это <span className="font-medium">функциональный подход</span> к созданию множества однотипных элементов интерфейса.
          </p>
          <p>
            В отличие от традиционного JavaScript, где мы могли бы использовать циклы (<code className="bg-gray-700 px-1 rounded">for</code>, <code className="bg-gray-700 px-1 rounded">while</code>), в JSX мы используем <code className="bg-gray-700 px-1 rounded">.map()</code>, потому что он <span className="font-medium">возвращает новый массив</span>, который может быть встроен в JSX.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Неправильный подход (циклы не работают в JSX):</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`// Это НЕ будет работать в JSX!\nfunction BadList() {\n  const items = ['Яблоко', 'Банан', 'Апельсин'];\n  \n  for (let i = 0; i < items.length; i++) {\n    <li>{items[i]}</li> // Никакого эффекта!\n  }\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Правильный подход (использование .map()):</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function GoodList() {\n  const items = ['Яблоко', 'Банан', 'Апельсин'];\n  \n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Как работает .map() в React:</span>
            <span>
              <code className="bg-gray-700 px-1 rounded">.map()</code> перебирает каждый элемент массива, преобразует его в JSX-элемент и возвращает <span className="font-medium">новый массив</span> из этих элементов. Этот массив автоматически "разворачивается" в JSX, создавая список элементов.
            </span>
          </p>
        </div>
      </div>

      {/* Базовый синтаксис рендеринга списков */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <List className="w-5 h-5 text-yellow-400" />
          Базовый синтаксис рендеринга списков
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Синтаксис рендеринга списков в React следует определенному шаблону. Давайте рассмотрим его по частям.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Hash className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Структура рендеринга списка</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-cyan-300 text-sm"><code>{`{array.map((item, index) => (\n  <Component />\n))}`}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>
              <code className="bg-gray-700 px-1 rounded">array</code> — исходный массив данных.
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">.map()</code> — метод массива для преобразования каждого элемента.
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">item</code> — текущий элемент массива (можно назвать как угодно).
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">index</code> — индекс текущего элемента (необязательный параметр).
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">{'<Component />'}</code> — JSX-элемент, который будет создан для каждого элемента массива.
            </li>
          </ul>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример с массивом строк:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{`function FruitList() {\n  const fruits = ['Яблоко', 'Банан', 'Апельсин'];\n  \n  return (\n    <ul>\n      {fruits.map((fruit, index) => (\n        <li key={index}>{fruit}</li>\n      ))}\n    </ul>\n  );\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример с массивом объектов:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function UserList() {\n  const users = [\n    { id: 1, name: 'Анна', age: 25 },\n    { id: 2, name: 'Иван', age: 30 },\n    { id: 3, name: 'Мария', age: 28 }\n  ];\n  \n  return (\n    <div>\n      {users.map((user) => (\n        <div key={user.id}>\n          <h3>{user.name}</h3>\n          <p>Возраст: {user.age}</p>\n        </div>\n      ))}\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Что такое ключи (keys) и зачем они нужны? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Key className="w-5 h-5 text-purple-400" />
          Что такое ключи (keys) и зачем они нужны?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">Ключи (keys)</span> — это <span className="font-medium">специальные атрибуты</span>, которые вы должны включать при создании списков элементов в React. Ключи <span className="font-medium">помогают React определять</span>, какие элементы были изменены, добавлены или удалены.
          </p>
          <p>
            Ключи дают <span className="font-medium">стабильную идентичность</span> элементам списка, что позволяет React <span className="font-medium">эффективно обновлять</span> интерфейс при изменениях данных.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-orange-300">Предупреждение в консоли без ключей</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-orange-300 text-sm"><code>{`Warning: Each child in a list should have a unique "key" prop.`}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            React выдает это предупреждение, когда в списке отсутствуют ключи или они не уникальны.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Без ключей (вызовет предупреждение):</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`{items.map((item) => (\n  <li>{item}</li> // Нет key!\n))}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ С ключами (правильный подход):</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`{items.map((item) => (\n  <li key={item.id}>{item}</li>\n))}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Как React использует ключи:</span>
            <span>
              Когда состояние списка меняется, React сравнивает ключи нового дерева элементов с предыдущим. Ключи позволяют React <span className="font-medium">минимизировать изменения</span> в DOM, обновляя только те элементы, которые действительно изменились.
            </span>
          </p>
        </div>
      </div>

      {/* Выбор правильных ключей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Выбор правильных ключей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Выбор правильных значений для ключей — <span className="font-medium">критически важная</span> часть эффективной работы со списками в React. Правильные ключи обеспечивают <span className="font-medium">стабильность</span> и <span className="font-medium">производительность</span>.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Key className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Лучший выбор: Уникальные ID</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Идеальный вариант</span> — использовать уникальные идентификаторы, которые поставляются с вашими данными (например, из базы данных).
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`const users = [\n  { id: '123', name: 'Анна' },\n  { id: '456', name: 'Иван' },\n  { id: '789', name: 'Мария' }\n];\n\n{users.map((user) => (\n  <div key={user.id}>\n    <h3>{user.name}</h3>\n  </div>\n))}`}</code></pre>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs">
              <li>Ключи стабильны между рендерами</li>
              <li>Ключи уникальны для каждого элемента</li>
              <li>Ключи не изменяются при добавлении/удалении элементов</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">Приемлемый выбор: Индекс массива</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Можно использовать</span> в определенных случаях, но с осторожностью. Индекс передается как второй параметр в <code className="bg-gray-700 px-1 rounded">.map()</code>.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-yellow-300 text-sm"><code>{`const items = ['Яблоко', 'Банан', 'Апельсин'];\n\n{items.map((item, index) => (\n  <li key={index}>{item}</li>\n))}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Используйте индекс <span className="font-medium">только</span> если:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs mt-2">
              <li>Элементы списка не изменяют свой порядок</li>
              <li>Элементы списка не добавляются/удаляются из середины</li>
              <li>Элементы списка не имеют уникальных ID</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">Никогда не используйте: Случайные значения</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Никогда не используйте</span> <code className="bg-gray-700 px-1 rounded">Math.random()</code> или другие случайные значения в качестве ключей!
            </p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-red-300 text-sm"><code>{`// ❌ НИКОГДА ТАК НЕ ДЕЛАЙТЕ!\n{items.map((item) => (\n  <li key={Math.random()}>{item}</li>\n))}`}</code></pre>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs">
              <li>Ключи будут разными при каждом рендере</li>
              <li>React не сможет отследить изменения элементов</li>
              <li>Производительность будет ухудшаться</li>
              <li>Могут возникнуть проблемы с состоянием компонентов</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Практические примеры и проблемы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RefreshCw className="w-5 h-5 text-orange-400" />
          Практические примеры и проблемы с ключами
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <List className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Пример: Список задач с чекбоксами</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{`import { useState } from 'react';\n\nfunction TodoList() {\n  const [todos, setTodos] = useState([\n    { id: 1, text: 'Купить молоко', completed: false },\n    { id: 2, text: 'Погулять с собакой', completed: true },\n    { id: 3, text: 'Закончить проект', completed: false }\n  ]);\n  \n  const toggleTodo = (id) => {\n    setTodos(todos.map(todo => \n      todo.id === id \n        ? { ...todo, completed: !todo.completed }\n        : todo\n    ));\n  };\n  \n  return (\n    <ul>\n      {todos.map((todo) => (\n        <li key={todo.id}>\n          <label>\n            <input \n              type="checkbox" \n              checked={todo.completed}\n              onChange={() => toggleTodo(todo.id)}\n            />\n            {todo.text}\n          </label>\n        </li>\n      ))}\n    </ul>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Использование <code className="bg-gray-700 px-1 rounded">todo.id</code> как ключа позволяет React правильно отслеживать состояние каждого чекбокса.
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">Проблема: Использование индекса при изменении порядка</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-purple-300 text-sm"><code>{`// ❌ Проблема: при сортировке состояние компонентов может "перепрыгнуть"\nfunction ProblematicList() {\n  const [items, setItems] = useState(['A', 'B', 'C']);\n  \n  const sortItems = () => {\n    setItems([...items].sort());\n  };\n  \n  return (\n    <div>\n      <button onClick={sortItems}>Сортировать</button>\n      <ul>\n        {items.map((item, index) => (\n          <li key={index}>\n            <input type="text" defaultValue={item} />\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              При сортировке элементов, их индексы меняются, но React думает, что элементы остались на своих местах, поэтому состояние input может "перепрыгнуть" к другим элементам.
            </p>
          </div>
        </div>
      </div>

      {/* Продвинутые сценарии */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-cyan-400" />
          Продвинутые сценарии работы со списками
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <RefreshCw className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Фильтрация и рендеринг списков</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`function FilterableList() {\n  const [items] = useState([\n    { id: 1, name: 'Яблоко', category: 'фрукты' },\n    { id: 2, name: 'Морковь', category: 'овощи' },\n    { id: 3, name: 'Банан', category: 'фрукты' }\n  ]);\n  const [filter, setFilter] = useState('все');\n  \n  const filteredItems = items.filter(item => \n    filter === 'все' || item.category === filter\n  );\n  \n  return (\n    <div>\n      <select onChange={(e) => setFilter(e.target.value)}>\n        <option value="все">Все</option>\n        <option value="фрукты">Фрукты</option>\n        <option value="овощи">Овощи</option>\n      </select>\n      \n      <ul>\n        {filteredItems.map((item) => (\n          <li key={item.id}>\n            {item.name} ({item.category})\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Важно применять фильтрацию <span className="font-medium">до</span> рендеринга списка, а не внутри <code className="bg-gray-700 px-1 rounded">.map()</code>.
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <List className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">Списки с различными типами компонентов</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-orange-300 text-sm"><code>{`function MixedList() {\n  const [items] = useState([\n    { id: 1, type: 'header', text: 'Заголовок' },\n    { id: 2, type: 'text', content: 'Текстовый абзац' },\n    { id: 3, type: 'image', src: 'image.jpg', alt: 'Изображение' }\n  ]);\n  \n  const renderItem = (item) => {\n    switch (item.type) {\n      case 'header':\n        return <h2 key={item.id}>{item.text}</h2>;\n      case 'text':\n        return <p key={item.id}>{item.content}</p>;\n      case 'image':\n        return <img key={item.id} src={item.src} alt={item.alt} />;\n      default:\n        return null;\n    }\n  };\n  \n  return (\n    <div>\n      {items.map(renderItem)}\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Ключи должны быть уникальны в пределах <span className="font-medium">всего списка</span>, даже если используются разные типы компонентов.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <List className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как правильно работать со списками в React. Вы научились использовать метод <code className="bg-gray-700 px-1 rounded">.map()</code> для рендеринга списков элементов, поняли важность и назначение ключей (<code className="bg-gray-700 px-1 rounded">key</code>) для оптимизации производительности, освоили выбор правильных значений для ключей (предпочтительно уникальные ID, индекс только в определенных случаях) и узнали о проблемах, которые могут возникнуть при неправильном использовании ключей. Правильная работа со списками и ключами — это фундамент для создания эффективных и масштабируемых React-приложений. В следующих уроках мы рассмотрим более сложные сценарии управления списками и оптимизацию производительности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;