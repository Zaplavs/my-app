// src/data/courses/react/lesson22/part1.jsx
import React from 'react';
import { FolderTree, FileText, Wrench, Users, BookOpen, CheckCircle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FolderTree className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🏗️ Урок 22: Архитектура и Best Practices</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Как организовать проект для долгосрочной поддержки</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Научиться применять лучшие практики архитектуры и организации кода в React-проектах. Понять принципы структурирования папок (<code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">components/</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">pages/</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">hooks/</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">services/</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">utils/</code>), следовать правилам именования (<span className="font-medium">PascalCase</span> для компонентов, <span className="font-medium">camelCase</span> для файлов), использовать кастомные хуки для повторяющейся логики и соблюдать принцип разделения ответственности. Понять важность изучения официальной документации React и анализа примеров из сообщества.
            </p>
          </div>
        </div>
      </div>

      {/* Введение в архитектуру и best practices */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Зачем нужна архитектура и лучшие практики?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            По мере роста React-приложения, <span className="font-medium">хорошо продуманная архитектура</span> становится <span className="font-medium">критически важной</span>. Она влияет на <span className="font-medium">читаемость</span>, <span className="font-medium">поддерживаемость</span>, <span className="font-medium">масштабируемость</span> и <span className="font-medium">скорость разработки</span>.
          </p>
          <p>
            <span className="font-medium text-green-300">Best Practices (лучшие практики)</span> — это <span className="font-medium">проверенные подходы</span> и <span className="font-medium">соглашения</span>, которые помогают писать <span className="font-medium">чистый</span>, <span className="font-medium">понятный</span> и <span className="font-medium">эффективный</span> код. Следование им упрощает <span className="font-medium">работу в команде</span>, <span className="font-medium">снижает количество ошибок</span> и <span className="font-medium">улучшает общее качество</span> проекта.
          </p>
          <p>
            Цель этого урока — познакомить вас с <span className="font-medium">основными принципами</span> организации React-проекта, чтобы вы могли применять их в своих будущих разработках.
          </p>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Почему это важно?</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Для вас:</span> Легче читать и понимать свой старый код, быстрее находить ошибки.</li>
                <li><span className="font-medium">Для команды:</span> Единый стиль и структура упрощают совместную работу.</li>
                <li><span className="font-medium">Для проекта:</span> Упрощается масштабирование, добавление новых функций и рефакторинг.</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Структура проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FolderTree className="w-5 h-5 text-yellow-400" />
          Организация структуры проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хорошая структура папок — это <span className="font-medium">фундамент</span> любого проекта. Она помогает быстро ориентироваться в коде и понимать, где что находится.
          </p>
          <p>
            Существует множество подходов, но ниже приведена <span className="font-medium">распространенная</span> и <span className="font-medium">понятная</span> структура, подходящая для большинства приложений:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* components */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-2 mb-2">
              <FolderTree className="w-4 h-4 text-cyan-400" />
              <h3 className="font-bold text-cyan-300">components/</h3>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Здесь хранятся <span className="font-medium">переиспользуемые</span> UI-компоненты, которые <span className="font-medium">не зависят</span> от конкретной страницы или бизнес-логики.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
              <li>Кнопки, поля ввода, карточки, модальные окна и т.д.</li>
              <li>Обычно не содержат сложной логики получения данных.</li>
              <li>Могут быть разбиты на подпапки по категориям (например, <code className="bg-gray-700 px-1 rounded">ui/</code>, <code className="bg-gray-700 px-1 rounded">layout/</code>).</li>
            </ul>
          </div>

          {/* pages */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <h3 className="font-bold text-blue-300">pages/ (или views/)</h3>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Здесь находятся <span className="font-medium">компоненты страниц</span>, которые соответствуют <span className="font-medium">маршрутам</span> приложения.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
              <li>Каждая страница обычно объединяет несколько компонентов из <code className="bg-gray-700 px-1 rounded">components/</code>.</li>
              <li>Могут содержать логику получения данных и управления состоянием страницы.</li>
            </ul>
          </div>

          {/* hooks */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Wrench className="w-4 h-4 text-green-400" />
              <h3 className="font-bold text-green-300">hooks/</h3>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Здесь размещаются <span className="font-medium">кастомные хуки</span> для <span className="font-medium">инкапсуляции</span> повторяющейся логики.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
              <li>Например, <code className="bg-gray-700 px-1 rounded">useApi</code>, <code className="bg-gray-700 px-1 rounded">useLocalStorage</code>, <code className="bg-gray-700 px-1 rounded">useFormValidation</code>.</li>
              <li>Позволяет следовать принципу DRY (Don't Repeat Yourself).</li>
            </ul>
          </div>

          {/* services */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-purple-400" />
              <h3 className="font-bold text-purple-300">services/</h3>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Здесь находятся <span className="font-medium">модули</span>, отвечающие за <span className="font-medium">взаимодействие</span> с внешними ресурсами (например, API).
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
              <li>Например, <code className="bg-gray-700 px-1 rounded">api.js</code>, <code className="bg-gray-700 px-1 rounded">authService.js</code>, <code className="bg-gray-700 px-1 rounded">userService.js</code>.</li>
              <li>Изолирует сетевые запросы от компонентов и хуков.</li>
            </ul>
          </div>

          {/* utils */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Wrench className="w-4 h-4 text-orange-400" />
              <h3 className="font-bold text-orange-300">utils/</h3>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Здесь лежат <span className="font-medium">вспомогательные функции</span> и <span className="font-medium">константы</span>, не связанные напрямую с React или бизнес-логикой.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
              <li>Например, функции форматирования дат, хелперы для работы со строками, математические утилиты.</li>
              <li>Могут быть чистыми функциями без побочных эффектов.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-xl border border-green-700/30">
          <p className="text-sm text-gray-400 mb-2">📁 Пример структуры проекта:</p>
          <pre className="text-gray-300 text-xs bg-gray-800 p-3 rounded-lg overflow-x-auto">
            {`src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── Modal.jsx
│   └── layout/
│       ├── Header.jsx
│       └── Footer.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── UserPage.jsx
│   └── NotFoundPage.jsx
├── hooks/
│   ├── useApi.js
│   └── useFormValidation.js
├── services/
│   ├── api.js
│   └── authService.js
├── utils/
│   ├── formatDate.js
│   └── constants.js
├── App.jsx
└── main.jsx`}
          </pre>
        </div>
      </div>

      {/* Именование */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          Соглашения об именовании
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Единый стиль именования файлов и переменных <span className="font-medium">улучшает читаемость</span> кода и <span className="font-medium">снижает когнитивную нагрузку</span>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Рекомендуется:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">PascalCase</span> для имен <span className="font-medium">React-компонентов</span> и файлов компонентов.
                <ul className="list-disc pl-5 mt-1 text-gray-400">
                  <li><code className="bg-gray-700 px-1 rounded">UserProfile.jsx</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">{`const UserProfile = () => {'{...}'}`}</code></li>
                </ul>
              </li>
              <li><span className="font-medium">camelCase</span> для имен <span className="font-medium">файлов</span> с хуками, утилитами, сервисами.
                <ul className="list-disc pl-5 mt-1 text-gray-400">
                  <li><code className="bg-gray-700 px-1 rounded">useApi.js</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">formatDate.js</code></li>
                </ul>
              </li>
              <li><span className="font-medium">camelCase</span> для имен <span className="font-medium">переменных</span> и <span className="font-medium">функций</span>.
                <ul className="list-disc pl-5 mt-1 text-gray-400">
                  <li><code className="bg-gray-700 px-1 rounded">const userData = ...</code></li>
                  <li><code className="bg-gray-700 px-1 rounded">function fetchUserData() {'{...}'}</code></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Избегайте:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">snake_case</span> или <span className="font-medium">kebab-case</span> для имен компонентов и файлов компонентов.
                <ul className="list-disc pl-5 mt-1 text-gray-400">
                  <li><code className="bg-gray-700 px-1 rounded line-through">user_profile.jsx</code></li>
                  <li><code className="bg-gray-700 px-1 rounded line-through">user-profile.jsx</code></li>
                </ul>
              </li>
              <li>Смешивания стилей в одном проекте.</li>
              <li>Использования зарезервированных слов JavaScript/React.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Кастомные хуки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Wrench className="w-5 h-5 text-cyan-400" />
          Кастомные хуки для повторяющейся логики
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Одним из ключевых принципов React является <span className="font-medium">повторное использование кода</span>. Кастомные хуки позволяют <span className="font-medium">инкапсулировать</span> и <span className="font-medium">повторно использовать</span> логику состояния и побочных эффектов.
          </p>
          <p>
            Если вы замечаете, что один и тот же код (например, вызов API, управление формой, подписка на события) используется в нескольких компонентах, <span className="font-medium">выносите</span> его в <span className="font-medium">кастомный хук</span>.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Wrench className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-blue-300">Пример: Кастомный хук для API</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">hooks/useApi.js</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`import { useState, useEffect } from 'react';

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};`}</code></pre>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Использование в компоненте</p>
              <div className="bg-gray-800 p-3 rounded-lg">
                <pre className="text-blue-300 text-xs"><code>{`// components/UserList.jsx
import { useApi } from '../hooks/useApi';

const UserList = () => {
  const { data: users, loading, error } = useApi('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;`}</code></pre>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            <span className="font-medium">Преимущества:</span> Логика извлечена, легко тестируется, повторно используется, компонент становится "чище".
          </p>
        </div>
      </div>

      {/* Разделение ответственности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Users className="w-5 h-5 text-orange-400" />
          Разделение ответственности (Separation of Concerns)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Разделение ответственности</span> — это принцип, согласно которому <span className="font-medium">каждая часть</span> приложения должна иметь <span className="font-medium">одну четко определенную</span> задачу.
          </p>
          <p>
            В контексте React это означает, что <span className="font-medium">компоненты</span> должны отвечать <span className="font-medium">только за отображение</span> UI и обработку <span className="font-medium">пользовательских взаимодействий</span>. Логика получения данных, бизнес-логика и утилиты должны находиться <span className="font-medium">отдельно</span>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Плохо (всё в одном компоненте):</p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-red-300 text-xs"><code>{`// BadComponent.jsx
const BadComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Логика получения данных внутри компонента
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        // Бизнес-логика внутри компонента
        const activeUsers = data.filter(user => user.isActive);
        setUsers(activeUsers);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Логика форматирования внутри компонента
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - Joined: {formatDate(user.joinDate)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};`}</code></pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Хорошо (логика разделена):</p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-xs"><code>{`// services/userService.js
export const fetchUsers = async () => {
  const response = await fetch('https://api.example.com/users');
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};

// utils/dateUtils.js
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

// hooks/useUsers.js
import { useState, useEffect } from 'react';
import { fetchUsers } from '../services/userService';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUsers();
        const activeUsers = data.filter(user => user.isActive);
        setUsers(activeUsers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  return { users, loading, error };
};

// components/UserList.jsx
import { useUsers } from '../hooks/useUsers';
import { formatDate } from '../utils/dateUtils';

const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - Joined: {formatDate(user.joinDate)}
        </li>
      ))}
    </ul>
  );
};

export default UserList;`}</code></pre>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Принципы SoC:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Компоненты:</span> Отображение UI и обработка событий.</li>
                <li><span className="font-medium">Хуки:</span> Управление состоянием и побочными эффектами.</li>
                <li><span className="font-medium">Сервисы:</span> Взаимодействие с API и внешними ресурсами.</li>
                <li><span className="font-medium">Утилиты:</span> Вспомогательные чистые функции.</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Изучение документации и сообщества */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-pink-400" />
          Изучение документации и сообщества
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Экосистема React <span className="font-medium">постоянно развивается</span>. Чтобы писать современный и эффективный код, <span className="font-medium">необходимо</span> регулярно <span className="font-medium">обращаться к официальным источникам</span>.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">📚 Официальная документация React</h3>
            <p className="text-gray-400 text-sm mb-2">
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://react.dev/</a> — основной источник знаний. Здесь вы найдете руководства, API-документацию, примеры и лучшие практики от создателей React.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
              <li>Изучайте новые функции (например, Server Components).</li>
              <li>Читайте разделы "Learn" и "API".</li>
              <li>Следите за обновлениями в блоге.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">🌐 Сообщество и примеры</h3>
            <p className="text-gray-400 text-sm mb-2">
              Активное сообщество — отличный способ учиться у других, находить решения и быть в курсе трендов.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
              <li><span className="font-medium">GitHub:</span> Изучайте исходный код популярных библиотек и проектов с открытым исходным кодом.</li>
              <li><span className="font-medium">Stack Overflow:</span> Ищите решения проблем и задавайте свои вопросы.</li>
              <li><span className="font-medium">Блоги и статьи:</span> Dev.to, Medium, Хабр и другие платформы.</li>
              <li><span className="font-medium">YouTube и подкасты:</span> Видеолекции и интервью с экспертами.</li>
              <li><span className="font-medium">Конференции и митапы:</span> React Conf, local meetups.</li>
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
              Теперь вы знакомы с ключевыми принципами архитектуры и лучшими практиками в React. Вы узнали, как организовать структуру проекта (<code className="bg-gray-700 px-1 rounded">components/</code>, <code className="bg-gray-700 px-1 rounded">pages/</code>, <code className="bg-gray-700 px-1 rounded">hooks/</code>, <code className="bg-gray-700 px-1 rounded">services/</code>, <code className="bg-gray-700 px-1 rounded">utils/</code>), следовать правилам именования (<span className="font-medium">PascalCase</span> для компонентов, <span className="font-medium">camelCase</span> для файлов), использовать кастомные хуки для повторяющейся логики и соблюдать принцип разделения ответственности. Помните, что хорошая архитектура — это не разовая задача, а <span className="font-medium">непрерывный процесс</span>. Продолжайте изучать официальную документацию React и смотрите примеры из сообщества, чтобы оставаться в курсе лучших практик и новых возможностей. Эти навыки сделают вас более профессиональным разработчиком и значительно упростят работу над любыми проектами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
