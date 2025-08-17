// src/data/courses/react/lesson21/part1.jsx
import React from 'react';
import { Package, Zap, Layers, Database, Palette, FileText, CheckCircle, TestTube, Cpu, Wrench, BookOpen } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Wrench className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Урок 21: Популярные библиотеки React</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Инструменты, которые ускоряют и упрощают разработку</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Познакомиться с популярными библиотеками и инструментами в экосистеме React. Понять, для чего они нужны и как их использовать. Научиться выбирать подходящие библиотеки для решения типовых задач: управление состоянием (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">Zustand</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">Redux Toolkit</code>), работа с API (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">React Query</code>), стилизация (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">Tailwind CSS</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">Material UI</code>), работа с формами (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">Formik</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">React Hook Form</code>) и тестирование (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">Jest</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">React Testing Library</code>).
            </p>
          </div>
        </div>
      </div>

      {/* Введение в библиотеки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Почему нужны библиотеки?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хотя React предоставляет мощные возможности для создания пользовательских интерфейсов, для <span className="font-medium">реальных приложений</span> часто требуются <span className="font-medium">дополнительные инструменты</span>. Библиотеки помогают <span className="font-medium">решать типовые задачи</span>, <span className="font-medium">повышают продуктивность</span> разработчиков и <span className="font-medium">улучшают качество</span> кода.
          </p>
          <p>
            Использование библиотек позволяет <span className="font-medium">не изобретать велосипед</span>, а <span className="font-medium">использовать готовые</span>, <span className="font-medium">протестированные</span> и <span className="font-medium">оптимизированные</span> решения. Это <span className="font-medium">ускоряет</span> разработку, <span className="font-medium">уменьшает</span> количество ошибок и <span className="font-medium">улучшает</span> поддерживаемость проекта.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Без библиотек:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Сложное управление глобальным состоянием</li>
              <li>Ручная работа с API и кэшированием</li>
              <li>Создание стилей "с нуля"</li>
              <li>Сложная валидация форм</li>
              <li>Отсутствие автоматизированного тестирования</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ С библиотеками:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Простое управление состоянием</li>
              <li>Автоматическая работа с API и кэшированием</li>
              <li>Готовые компоненты и стили</li>
              <li>Простая валидация и управление формами</li>
              <li>Надежное тестирование кода</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Советы по выбору библиотек:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Оцените сложность задачи</span> — не все проекты нуждаются в Redux</li>
                <li><span className="font-medium">Изучите документацию</span> — хорошая документация = легче освоить</li>
                <li><span className="font-medium">Посмотрите на сообщество</span> — активное сообщество = больше поддержки</li>
                <li><span className="font-medium">Учитывайте размер</span> — большие библиотеки увеличивают размер бандла</li>
                <li><span className="font-medium">Проверьте производительность</span> — библиотека не должна тормозить приложение</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Управление состоянием */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Cpu className="w-5 h-5 text-yellow-400" />
          Управление состоянием: Zustand и Redux Toolkit
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">Управление состоянием</span> — это процесс <span className="font-medium">хранения</span> и <span className="font-medium">обновления</span> данных, которые <span className="font-medium">используются</span> различными частями приложения. По мере роста приложения управление состоянием становится <span className="font-medium">важной задачей</span>.
          </p>
          <p>
            React предоставляет <code className="bg-gray-700 px-1 rounded">useState</code> и <code className="bg-gray-700 px-1 rounded">useContext</code> для управления состоянием, но для <span className="font-medium">сложных приложений</span> этого может быть <span className="font-medium">недостаточно</span>. Библиотеки управления состоянием предлагают <span className="font-medium">более мощные</span> и <span className="font-medium">структурированные</span> способы работы с данными.
          </p>
        </div>

        {/* Zustand */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Zustand — простое и мощное управление состоянием</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Zustand — это <span className="font-medium">минималистичная</span> библиотека управления состоянием, которая <span className="font-medium">очень проста</span> в использовании и <span className="font-medium">не требует</span> много boilerplate-кода.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Установка:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-cyan-300 text-xs"><code>{`npm install zustand`}</code></pre>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Пример использования:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-cyan-300 text-xs"><code>{`// store/useCounterStore.js
import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;

// Component.jsx
import useCounterStore from './store/useCounterStore';

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};`}</code></pre>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            <span className="font-medium">Преимущества Zustand:</span> Простота, малый размер, не требует Provider, поддержка middleware (persist, immer и др.).
          </p>
        </div>

        {/* Redux Toolkit */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Layers className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">Redux Toolkit — стандарт для сложных приложений</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Redux Toolkit — это <span className="font-medium">официальный</span> и <span className="font-medium">рекомендуемый</span> способ использования Redux. Он <span className="font-medium">упрощает</span> работу с Redux и <span className="font-medium">включает</span> в себя лучшие практики.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Установка:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`npm install @reduxjs/toolkit react-redux`}</code></pre>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Пример использования:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// App.js
import { Provider } from 'react-redux';
import { store } from './store';
import CounterComponent from './CounterComponent';

function App() {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
}

// CounterComponent.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};`}</code></pre>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            <span className="font-medium">Преимущества Redux Toolkit:</span> Стандарт де-факто, мощные инструменты отладки, поддержка middleware, отличная документация.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Когда использовать Zustand:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Для <span className="font-medium">небольших и средних</span> приложений</li>
              <li>Когда нужна <span className="font-medium">максимальная простота</span></li>
              <li>Для <span className="font-medium">быстрого прототипирования</span></li>
              <li>Когда <span className="font-medium">не нужна</span> сложная архитектура</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Когда использовать Redux Toolkit:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Для <span className="font-medium">крупных и сложных</span> приложений</li>
              <li>Когда нужна <span className="font-medium">строгая архитектура</span></li>
              <li>Для <span className="font-medium">командной разработки</span></li>
              <li>Когда важна <span className="font-medium">масштабируемость</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Работа с API */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-green-400" />
          Работа с API: React Query
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">React Query</span> (теперь называется TanStack Query) — это <span className="font-medium">мощная библиотека</span> для <span className="font-medium">работы с серверными данными</span> в React-приложениях. Она <span className="font-medium">автоматизирует</span> множество задач: <span className="font-medium">загрузку</span> данных, <span className="font-medium">кеширование</span>, <span className="font-medium">синхронизацию</span> и <span className="font-medium">обновление</span> данных.
          </p>
          <p>
            Вместо того чтобы <span className="font-medium">вручную</span> управлять состоянием загрузки, ошибок и кэширования, React Query <span className="font-medium">делает это автоматически</span>, что <span className="font-medium">значительно упрощает</span> работу с API.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Database className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">React Query (TanStack Query)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Установка:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`npm install @tanstack/react-query`}</code></pre>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Настройка провайдера:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`// main.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);`}</code></pre>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-1">Пример использования:</p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-blue-300 text-xs"><code>{`// hooks/useUsers.js
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await fetch('/api/users');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5, // 5 минут
  });
};

// UsersList.jsx
import { useUsers } from '../hooks/useUsers';

const UsersList = () => {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};`}</code></pre>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            <span className="font-medium">Преимущества React Query:</span> Автоматическое кэширование, фоновое обновление, умная загрузка, встроенные инструменты отладки, поддержка optimistic updates.
          </p>
        </div>
      </div>

      {/* Стилизация */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Palette className="w-5 h-5 text-purple-400" />
          Стилизация: Tailwind CSS и Material UI
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">Стилизация</span> — важная часть любого веб-приложения. Современные библиотеки стилей предлагают <span className="font-medium">разные подходы</span> к созданию <span className="font-medium">красивых</span> и <span className="font-medium">адаптивных</span> интерфейсов.
          </p>
        </div>

        {/* Tailwind CSS */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Palette className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Tailwind CSS — утилитарный CSS-фреймворк</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Tailwind CSS — это <span className="font-medium">утилитарный CSS-фреймворк</span>, который предоставляет <span className="font-medium">низкоуровневые классы</span> для <span className="font-medium">быстрого</span> создания <span className="font-medium">кастомных</span> дизайнов <span className="font-medium">без написания CSS</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Установка и настройка:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-cyan-300 text-xs"><code>{`npm install -D tailwindcss
npx tailwindcss init

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;`}</code></pre>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Пример использования:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-cyan-300 text-xs"><code>{`// Button.jsx
const Button = ({ children, variant = 'primary' }) => {
  const baseClasses = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2";
  
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-300",
  };

  return (
    <button className={\`\${baseClasses} \${variants[variant]}\`}>
      {children}
    </button>
  );
};

// App.jsx
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome</h1>
        <p className="text-gray-600 mb-6">This is a Tailwind CSS example.</p>
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  );
};`}</code></pre>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            <span className="font-medium">Преимущества Tailwind CSS:</span> Высокая кастомизация, низкий порог входа, малый размер CSS, быстрая разработка, поддержка темизации.
          </p>
        </div>

        {/* Material UI */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Palette className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">Material UI (MUI) — библиотека компонентов</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Material UI — это <span className="font-medium">библиотека готовых React-компонентов</span>, реализующих <span className="font-medium">дизайн-систему Material Design</span> от Google.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Установка:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto // Для шрифтов`}</code></pre>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Пример использования:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`// App.jsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MUI Example
          </Typography>
          <TextField 
            label="Name" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
          />
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}`}</code></pre>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            <span className="font-medium">Преимущества Material UI:</span> Готовые компоненты, единый дизайн, темизация, доступность, большая экосистема.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Когда использовать Tailwind CSS:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Когда нужен <span className="font-medium">уникальный дизайн</span></li>
              <li>Для <span className="font-medium">максимальной гибкости</span></li>
              <li>Когда команда <span className="font-medium">знакома с CSS</span></li>
              <li>Для <span className="font-medium">низкого порога входа</span></li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Когда использовать Material UI:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Когда нужен <span className="font-medium">готовый дизайн</span></li>
              <li>Для <span className="font-medium">быстрого прототипирования</span></li>
              <li>Когда нужна <span className="font-medium">единая дизайн-система</span></li>
              <li>Для <span className="font-medium">крупных проектов</span> с требованиями к доступности</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Работа с формами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-orange-400" />
          Работа с формами: Formik и React Hook Form
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-orange-300">Работа с формами</span> — одна из <span className="font-medium">самых частых задач</span> в веб-разработке. Формы требуют <span className="font-medium">валидации</span>, <span className="font-medium">управления состоянием</span>, <span className="font-medium">обработки событий</span> и <span className="font-medium">отправки данных</span>. Библиотеки форм упрощают эти задачи.
          </p>
        </div>

        {/* Formik */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Formik — популярная библиотека форм</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Formik — это <span className="font-medium">одна из самых популярных</span> библиотек для работы с формами в React. Она предоставляет <span className="font-medium">простой API</span> для управления формами, валидации и отправки данных.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Установка:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-cyan-300 text-xs"><code>{`npm install formik yup`}</code></pre>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Пример использования:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-cyan-300 text-xs"><code>{`import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="First Name"
        />
        {formik.errors.firstName && formik.touched.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
      </div>
      
      <div>
        <input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};`}</code></pre>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            <span className="font-medium">Преимущества Formik:</span> Широкая экосистема, хорошая документация, поддержка Yup для валидации, удобный API.
          </p>
        </div>

        {/* React Hook Form */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">React Hook Form — производительные формы</h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            React Hook Form — это <span className="font-medium">производительная</span> и <span className="font-medium">гибкая</span> библиотека для работы с формами, которая <span className="font-medium">минимизирует количество повторных рендеров</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Установка:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`npm install react-hook-form`}</code></pre>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Пример использования:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('firstName', { 
          required: 'First name is required',
          minLength: {
            value: 2,
            message: 'First name must be at least 2 characters'
          }
        })}
        placeholder="First Name"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}
      
      <button type="submit">Submit</button>
    </form>
  );
};`}</code></pre>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            <span className="font-medium">Преимущества React Hook Form:</span> Высокая производительность, минимальное количество ререндеров, удобный API, поддержка валидации, хорошая документация.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Когда использовать Formik:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Для <span className="font-medium">сложных форм</span> с множеством полей</li>
              <li>Когда нужна <span className="font-medium">интеграция с Yup</span></li>
              <li>Для <span className="font-medium">крупных проектов</span> с требованиями к масштабируемости</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Когда использовать React Hook Form:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Для <span className="font-medium">простых и средних</span> форм</li>
              <li>Когда важна <span className="font-medium">производительность</span></li>
              <li>Для <span className="font-medium">быстрой разработки</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Тестирование */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <TestTube className="w-5 h-5 text-red-400" />
          Тестирование: Jest и React Testing Library
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-red-300">Тестирование</span> — важная часть процесса разработки, которая помогает <span className="font-medium">предотвратить ошибки</span>, <span className="font-medium">улучшить качество</span> кода и <span className="font-medium">обеспечить стабильность</span> приложения.
          </p>
          <p>
            <span className="font-medium">Jest</span> — это <span className="font-medium">фреймворк для тестирования</span> JavaScript, а <span className="font-medium">React Testing Library</span> — это <span className="font-medium">библиотека</span> для тестирования React-компонентов <span className="font-medium">с точки зрения пользователя</span>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <TestTube className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">Jest и React Testing Library</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Установка (обычно уже включена в CRA):</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`# Если не установлено
npm install --save-dev @testing-library/react @testing-library/jest-dom jest-environment-jsdom`}</code></pre>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Пример теста:</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`// src/components/Button.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when clicked', async () => {
  const handleClick = jest.fn();
  const user = userEvent.setup();
  
  render(<Button onClick={handleClick}>Click me</Button>);
  
  const buttonElement = screen.getByText(/click me/i);
  await user.click(buttonElement);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// src/components/Button.js
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;`}</code></pre>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            <span className="font-medium">Преимущества Jest и RTL:</span> Простота использования, фокус на пользовательском опыте, мощные инструменты для моков, хорошая документация.
          </p>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-xl border border-green-700/30">
          <p className="text-sm text-gray-400 mb-2">🧪 Типы тестов:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>
              <span className="font-medium">Unit-тесты</span> — тестируют отдельные функции и компоненты
            </li>
            <li>
              <span className="font-medium">Integration-тесты</span> — тестируют взаимодействие между компонентами
            </li>
            <li>
              <span className="font-medium">E2E-тесты</span> — тестируют приложение как пользователь (Cypress, Playwright)
            </li>
          </ul>
        </div>
      </div>

      {/* Другие полезные библиотеки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Package className="w-5 h-5 text-pink-400" />
          Другие полезные библиотеки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В экосистеме React существует множество других <span className="font-medium text-pink-300">полезных библиотек</span>, которые могут <span className="font-medium">решить специфические задачи</span> и <span className="font-medium">ускорить разработку</span>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">📊 Анимации</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium">Framer Motion</span> — продвинутые анимации</li>
              <li><span className="font-medium">React Spring</span> — физически реалистичные анимации</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">📅 Календари и даты</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium">date-fns</span> — работа с датами</li>
              <li><span className="font-medium">React DatePicker</span> — компоненты выбора дат</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">🧮 Утилиты</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium">Lodash</span> — полезные функции JavaScript</li>
              <li><span className="font-medium">clsx</span> — удобная работа с классами</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">📱 Мобильность</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium">React Native</span> — нативные мобильные приложения</li>
              <li><span className="font-medium">Capacitor</span> — кроссплатформенные приложения</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">🔍 Поиск и фильтрация</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium">Fuse.js</span> — библиотека нечеткого поиска</li>
              <li><span className="font-medium">Downshift</span> — компоненты автозаполнения</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2">🛡️ Безопасность</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium">Helmet</span> — управление тегами head</li>
              <li><span className="font-medium">CSP</span> — политики безопасности контента</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знакомы с популярными библиотеками React и понимаете, как они могут помочь в разработке. Вы узнали о библиотеках для управления состоянием (<code className="bg-gray-700 px-1 rounded">Zustand</code>, <code className="bg-gray-700 px-1 rounded">Redux Toolkit</code>), работы с API (<code className="bg-gray-700 px-1 rounded">React Query</code>), стилизации (<code className="bg-gray-700 px-1 rounded">Tailwind CSS</code>, <code className="bg-gray-700 px-1 rounded">Material UI</code>), работы с формами (<code className="bg-gray-700 px-1 rounded">Formik</code>, <code className="bg-gray-700 px-1 rounded">React Hook Form</code>) и тестирования (<code className="bg-gray-700 px-1 rounded">Jest</code>, <code className="bg-gray-700 px-1 rounded">React Testing Library</code>). Эти инструменты значительно ускоряют разработку и помогают создавать более качественные приложения. В следующих уроках мы рассмотрим продвинутые паттерны использования этих библиотек, лучшие практики и интеграцию между различными инструментами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;