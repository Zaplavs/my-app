// src/data/courses/react/lesson20/part1.jsx
import React from 'react';
import {Braces, FileText, Code, Settings, Zap, Shield, Palette, Cpu } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">⚡ Урок 20: TypeScript с React</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Типизация для надежных React-приложений</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое TypeScript и зачем он нужен в React. Освоить основы типизации компонентов, пропсов, состояния и событий. Научиться использовать интерфейсы и типы для повышения надежности кода и улучшения разработки.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое TypeScript? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-green-400" />
          Что такое TypeScript?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">TypeScript</span> — это <span className="font-medium">надмножество JavaScript</span>, которое добавляет <span className="font-medium">статическую типизацию</span>. Это означает, что вы можете описывать типы переменных, параметров функций, возвращаемых значений и многое другое.
          </p>
          <p>
            Хотя JavaScript является <span className="font-medium">динамически типизированным</span> языком (тип переменной определяется во время выполнения), TypeScript позволяет определять типы <span className="font-medium">во время написания кода</span>. Это помогает <span className="font-medium">предотвратить множество ошибок</span> еще на этапе разработки.
          </p>
          <p>
            TypeScript <span className="font-medium">компилируется</span> в обычный JavaScript, который понимают браузеры и Node.js. Таким образом, он не заменяет JavaScript, а <span className="font-medium">расширяет</span> его возможности.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Без TypeScript (JavaScript):</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`function greetUser(user) {
  // Что если user будет undefined?
  // Что если у user нет свойства name?
  console.log("Hello, " + user.name.toUpperCase());
  // Возможна ошибка TypeError во время выполнения!
}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ С TypeScript:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`interface User {
  name: string;
  age?: number; // Необязательное свойство
}

function greetUser(user: User) {
  // TypeScript проверит, что user соответствует типу User
  // и подскажет доступные свойства.
  console.log("Hello, " + user.name.toUpperCase());
  // Ошибка будет выявлена до запуска приложения!
}`}</code>
            </pre>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Преимущества TypeScript:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Раннее обнаружение ошибок</span> — ошибки типов выявляются на этапе написания кода</li>
                <li><span className="font-medium">Улучшенное автодополнение</span> — редакторы кода лучше понимают структуру данных</li>
                <li><span className="font-medium">Улучшенная читаемость</span> — типы документируют код</li>
                <li><span className="font-medium">Безопасный рефакторинг</span> — изменения в коде легче отслеживать</li>
                <li><span className="font-medium">Масштабируемость</span> — проще управлять большими проектами</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Основы типизации в React */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-yellow-400" />
          Основы типизации React-компонентов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В React с TypeScript вы <span className="font-medium">описываете типы</span> для <span className="font-medium">пропсов</span> компонентов, <span className="font-medium">состояния</span>, <span className="font-medium">событий</span> и <span className="font-medium">возвращаемых значений</span>. Это делает компоненты более <span className="font-medium">предсказуемыми</span> и <span className="font-medium">надежными</span>.
          </p>
        </div>

        {/* Типизация функциональных компонентов */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Типизация функциональных компонентов</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Существует несколько способов типизировать функциональные компоненты в React с TypeScript.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Способ 1: Тип для пропсов</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-cyan-300 text-xs"><code>{`import React from 'react';

interface UserCardProps {
  name: string;
  email: string;
  isActive?: boolean; // Необязательный пропс
}

const UserCard: React.FC<UserCardProps> = ({ name, email, isActive = false }) => {
  return (
    <div className={\`user-card \${isActive ? 'active' : ''}\`}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;`}</code></pre>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Способ 2: Тип для функции</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-cyan-300 text-xs"><code>{`import React from 'react';

interface UserCardProps {
  name: string;
  email: string;
  isActive?: boolean;
}

const UserCard = ({ name, email, isActive = false }: UserCardProps) => {
  return (
    <div className={\`user-card \${isActive ? 'active' : ''}\`}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;`}</code></pre>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                <span className="font-medium">Совет:</span> В современном React часто используется второй способ, так как <code className="bg-gray-700 px-1 rounded text-xs">React.FC</code> может иметь некоторые ограничения.
              </p>
            </div>
          </div>
        </div>

        {/* Типизация пропсов */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">Типизация пропсов</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Для описания структуры пропсов используются <code className="bg-gray-700 px-1 rounded text-xs">interface</code> или <code className="bg-gray-700 px-1 rounded text-xs">type</code>. Интерфейсы более распространены и гибкие.
          </p>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-blue-300 text-xs"><code>{`// Использование interface (рекомендуется)
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary'; // Union тип
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode; // Любой React элемент
}

// Использование type
type ButtonPropsAlt = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};`}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            <span className="font-medium">Union типы</span> (<code className="bg-gray-700 px-1 rounded text-xs">|</code>) позволяют указать, что значение может быть одним из нескольких типов. <span className="font-medium">Необязательные свойства</span> помечаются знаком <code className="bg-gray-700 px-1 rounded text-xs">?</code>.
          </p>
        </div>

        {/* Типизация состояния */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Cpu className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-green-300">Типизация состояния (useState)</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            При использовании хука <code className="bg-gray-700 px-1 rounded text-xs">useState</code> можно явно указать тип состояния. Часто TypeScript может вывести тип автоматически, но явное указание делает код понятнее.
          </p>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-green-300 text-xs"><code>{`import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  // Явная типизация состояния
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>(''); // Тип можно опустить, TS выведет string
  const [isLoading, setIsLoading] = useState<boolean>(false); // Тип можно опустить, TS выведет boolean

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;`}</code></pre>
          </div>
        </div>

        {/* Типизация событий */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Palette className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-orange-300">Типизация событий (onChange, onClick и т.д.)</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Обработчики событий в React получают объект события. TypeScript предоставляет встроенные типы для этих событий, например, <code className="bg-gray-700 px-1 rounded text-xs">React.ChangeEvent</code>, <code className="bg-gray-700 px-1 rounded text-xs">React.MouseEvent</code> и другие.
          </p>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-orange-300 text-xs"><code>{`import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>(''); // Число или пустая строка

  // Типизация события изменения input
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Типизация события изменения input типа number
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Преобразуем в число или оставляем пустую строку
    setAge(value === '' ? '' : Number(value));
  };

  // Типизация события клика
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Name:', name, 'Age:', age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <input
        type="number"
        value={age}
        onChange={handleAgeChange}
        placeholder="Enter your age"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;`}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            <span className="font-medium">Совет:</span> Часто используемые типы событий: <code className="bg-gray-700 px-1 rounded text-xs">{`React.ChangeEvent<HTMLInputElement>`}</code>, <code className="bg-gray-700 px-1 rounded text-xs">{`React.MouseEvent<HTMLButtonElement>`}</code>, <code className="bg-gray-700 px-1 rounded text-xs">{`React.FormEvent<HTMLFormElement>`}</code>.
          </p>
        </div>
      </div>

      {/* Полезные типы и советы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Braces className="w-5 h-5 text-purple-400" />
          Полезные типы и советы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            TypeScript предоставляет множество встроенных типов и утилит, которые упрощают типизацию React-приложений.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">🔧 Встроенные утилиты TypeScript:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <code className="bg-gray-700 px-1 rounded text-xs">{`Partial<T>`}</code> — делает все свойства типа <code className="bg-gray-700 px-1 rounded text-xs">T</code> необязательными.
                <pre className="bg-gray-800 p-2 rounded mt-1 text-xs text-green-300"><code>{`interface User {
  id: number;
  name: string;
  email: string;
}

// Partial<User> эквивалентно:
// { id?: number; name?: string; email?: string; }`}</code></pre>
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded text-xs">{`Pick<T, K>`}</code> — выбирает только указанные свойства <code className="bg-gray-700 px-1 rounded text-xs">K</code> из типа <code className="bg-gray-700 px-1 rounded text-xs">T</code>.
                <pre className="bg-gray-800 p-2 rounded mt-1 text-xs text-green-300"><code>{`// Pick<User, 'name' | 'email'> эквивалентно:
// { name: string; email: string; }`}</code></pre>
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded text-xs">{`Omit<T, K>`}</code> — исключает указанные свойства <code className="bg-gray-700 px-1 rounded text-xs">K</code> из типа <code className="bg-gray-700 px-1 rounded text-xs">T</code>.
                <pre className="bg-gray-800 p-2 rounded mt-1 text-xs text-green-300"><code>{`// Omit<User, 'id'> эквивалентно:
// { name: string; email: string; }`}</code></pre>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">💡 Практические советы:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Используйте interface для объектов:</span> Они лучше работают с расширением (extends).
              </li>
              <li>
                <span className="font-medium">Используйте type для примитивов, union/intersection типов:</span>
                <pre className="bg-gray-800 p-2 rounded mt-1 text-xs text-cyan-300"><code>{`type Status = 'loading' | 'success' | 'error';
type ID = string | number;`}</code></pre>
              </li>
              <li>
                <span className="font-medium">Не бойтесь начинать постепенно:</span> Можно добавлять типы по мере развития проекта.
              </li>
              <li>
                <span className="font-medium">Используйте any как крайнюю меру:</span> Лучше потратить время на правильную типизацию.
              </li>
              <li>
                <span className="font-medium">Типизируйте API-ответы:</span> Создавайте интерфейсы для данных, получаемых от сервера.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Palette className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое TypeScript и как его использовать с React. Вы научились типизировать компоненты, пропсы, состояние и события. TypeScript помогает писать более надежный и поддерживаемый код, предотвращая множество ошибок еще на этапе разработки. В следующих уроках мы рассмотрим более продвинутые концепции TypeScript, его интеграцию с React Router, работу с асинхронными данными и лучшие практики типизации больших приложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;