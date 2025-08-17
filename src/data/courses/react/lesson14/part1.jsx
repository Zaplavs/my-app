// src/data/courses/react/lesson14/part1.jsx
import React from 'react';
import { Layers, Code, Share2, Database, Layout, Puzzle } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Layers className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧩 Урок 14: Композиция компонентов</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Гибкость и переиспользуемость через children и render-пропсы</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять концепцию композиции компонентов в React, освоить передачу JSX через <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">children</code>, научиться создавать гибкие и переиспользуемые компоненты, изучить продвинутые техники композиции с render-пропсами и композицией через props.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое композиция компонентов? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Puzzle className="w-5 h-5 text-green-400" />
          Что такое композиция компонентов?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Композиция компонентов</span> — это <span className="font-medium">техника</span> в React, которая позволяет <span className="font-medium">создавать сложные компоненты</span> путем <span className="font-medium">объединения</span> более <span className="font-medium">простых компонентов</span>. Это <span className="font-medium">альтернатива</span> наследованию и <span className="font-medium">основной принцип</span> построения React-приложений.
          </p>
          <p>
            Вместо того чтобы создавать один огромный компонент со всей логикой, мы <span className="font-medium">разбиваем</span> его на <span className="font-medium">меньшие</span>, <span className="font-medium">специализированные</span> компоненты и <span className="font-medium">объединяем</span> их вместе, как <span className="font-medium">строительные блоки Lego</span>.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Без композиции (монолитный компонент):</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`function MonolithicCard() {\n  return (\n    <div className="card">\n      <div className="card-header\">\n        <h3>Заголовок карточки</h3>\n      </div>\n      <div className="card-body\">\n        <p>Содержимое карточки...</p>\n        <button>Действие 1</button>\n        <button>Действие 2</button>\n      </div>\n      <div className="card-footer\">\n        <small>Нижний колонтитул</small>\n      </div>\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ С композицией (гибкие компоненты):</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function FlexibleCard({ header, children, footer }) {\n  return (\n    <div className="card\">\n      {header && <div className="card-header">{header}</div>}\n      <div className="card-body">{children}</div>\n      {footer && <div className="card-footer">{footer}</div>}\n    </div>\n  );\n}\n\n// Использование\n<FlexibleCard \n  header={<h3>Заголовок карточки</h3>}\n  footer={<small>Нижний колонтитул</small>}\n>\n  <p>Содержимое карточки...</p>\n  <button>Действие 1</button>\n  <button>Действие 2</button>\n</FlexibleCard>`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Преимущества композиции:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Гибкость</span> — компоненты можно использовать с разным содержимым</li>
                <li><span className="font-medium">Переиспользуемость</span> — один компонент для множества сценариев</li>
                <li><span className="font-medium">Поддерживаемость</span> — проще тестировать и обновлять маленькие компоненты</li>
                <li><span className="font-medium">Читаемость</span> — структура кода становится понятнее</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Children пропс */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layout className="w-5 h-5 text-yellow-400" />
          Children пропс — основа композиции
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">children</code> — это <span className="font-medium">специальный пропс</span> в React, который <span className="font-medium">содержит</span> всё, что передается <span className="font-medium">между открывающим и закрывающим тегами</span> компонента.
          </p>
          <p>
            Это <span className="font-medium">основной механизм</span> композиции в React, позволяющий <span className="font-medium">передавать JSX</span> в компоненты и <span className="font-medium">рендерить его</span> в нужном месте.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Как работает children</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Родительский компонент:</p>
              <pre className="text-cyan-300 text-xs"><code>{`<Card>\n  <h1>Привет, мир!</h1>\n  <p>Это содержимое карточки</p>\n  <button>Нажми меня</button>\n</Card>`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Дочерний компонент Card:</p>
              <pre className="text-cyan-300 text-xs"><code>{`function Card({ children }) {\n  return (\n    <div className="card">\n      <div className="card-content">\n        {children}\n      </div>\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
          <p className="text-gray-400 text-xs">
            В <code className="bg-gray-700 px-1 rounded">children</code> попадает всё, что между <code className="bg-gray-700 px-1 rounded">{'<Card>'}</code> и <code className="bg-gray-700 px-1 rounded">{'</Card>'}</code> — в данном случае три элемента: <code className="bg-gray-700 px-1 rounded">h1</code>, <code className="bg-gray-700 px-1 rounded">p</code> и <code className="bg-gray-700 px-1 rounded">button</code>.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Модальное окно с children</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{`function Modal({ isOpen, onClose, children }) {\n  if (!isOpen) return null;\n  \n  return (\n    <div className="modal-overlay" onClick={onClose}>\n      <div className="modal-content" onClick={e => e.stopPropagation()}>\n        <button className="modal-close" onClick={onClose}>×</button>\n        {children}\n      </div>\n    </div>\n  );\n}\n\n// Использование\n<Modal isOpen={showModal} onClose={handleClose}>\n  <h2>Заголовок модального окна</h2>\n  <p>Содержимое модального окна...</p>\n  <button onClick={handleConfirm}>Подтвердить</button>\n</Modal>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Карточка с заголовком и содержимым</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function Card({ title, children }) {\n  return (\n    <div className="card">\n      {title && <div className="card-header\"><h3>{title}</h3></div>}\n      <div className="card-body">{children}</div>\n    </div>\n  );\n}\n\n// Использование\n<Card title="Профиль пользователя">\n  <p>Имя: Иван Иванов</p>\n  <p>Email: ivan@example.com</p>\n  <button>Редактировать</button>\n</Card>`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
          <p className="text-purple-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Полезные методы работы с children:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><code className="bg-gray-700 px-1 rounded">React.Children.map(children, fn)</code> — перебор children</li>
                <li><code className="bg-gray-700 px-1 rounded">React.Children.toArray(children)</code> — преобразование в массив</li>
                <li><code className="bg-gray-700 px-1 rounded">React.Children.count(children)</code> — подсчет количества</li>
                <li><code className="bg-gray-700 px-1 rounded">React.Children.only(children)</code> — проверка на единственный элемент</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Render-пропсы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Share2 className="w-5 h-5 text-cyan-400" />
          Render-пропсы — продвинутая композиция
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Render-пропсы (Render Props)</span> — это <span className="font-medium">техника</span> в React, при которой <span className="font-medium">компонент принимает функцию</span> в качестве <span className="font-medium">пропса</span> и <span className="font-medium">вызывает её</span> для определения того, <span className="font-medium">что рендерить</span>.
          </p>
          <p>
            Это позволяет <span className="font-medium">передавать логику</span> из одного компонента в другой, делая компоненты <span className="font-medium">ещё более гибкими</span>.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Database className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-orange-300">Синтаксис render-пропсов</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Компонент с render-пропсом:</p>
              <pre className="text-orange-300 text-xs"><code>{`function DataFetcher({ url, render }) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    fetch(url)\n      .then(res => res.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() => setLoading(false));\n  }, [url]);\n  \n  return render({ data, loading, error });\n}`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Использование с render-пропсом:</p>
              <pre className="text-orange-300 text-xs"><code>{`<DataFetcher \n  url="/api/users"\n  render={({ data, loading, error }) => {\n    if (loading) return <div>Загрузка...</div>;\n    if (error) return <div>Ошибка: {error.message}</div>;\n    return (\n      <ul>\n        {data.map(user => (\n          <li key={user.id}>{user.name}</li>\n        ))}\n      </ul>\n    );\n  }}\n/>`}</code></pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Таймер с render-пропсом</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{`function Timer({ render }) {\n  const [seconds, setSeconds] = useState(0);\n  \n  useEffect(() => {\n    const interval = setInterval(() => {\n      setSeconds(s => s + 1);\n    }, 1000);\n    \n    return () => clearInterval(interval);\n  }, []);\n  \n  return render(seconds);\n}\n\n// Использование\n<Timer \n  render={(seconds) => (\n    <div>\n      <p>Прошло секунд: {seconds}</p>\n      <p>В минутах: {Math.floor(seconds / 60)}</p>\n    </div>\n  )}\n/>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Toggle с render-пропсом</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function Toggle({ children }) {\n  const [isToggled, setIsToggled] = useState(false);\n  \n  const toggle = () => setIsToggled(!isToggled);\n  \n  return children({ isToggled, toggle });\n}\n\n// Использование\n<Toggle>\n  {({ isToggled, toggle }) => (\n    <div>\n      <button onClick={toggle}>\n        {isToggled ? 'Скрыть' : 'Показать'}\n      </button>\n      {isToggled && <p>Секретное содержимое!</p>}\n    </div>\n  )}\n</Toggle>`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Render-пропсы vs Children:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Children</span> — передача JSX напрямую между тегами</li>
                <li><span className="font-medium">Render-пропсы</span> — передача функции, которая получает данные и возвращает JSX</li>
                <li><span className="font-medium">Render-пропсы</span> дают больше контроля над логикой отображения</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Практические примеры композиции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layout className="w-5 h-5 text-purple-400" />
          Практические примеры композиции
        </h2>
        
        <div className="mt-6 space-y-6">
          {/* Layout компонент */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Layout className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Гибкий Layout компонент</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`function AppLayout({ header, sidebar, main, footer }) {\n  return (\n    <div className="app-layout">\n      <header className="app-header">{header}</header>\n      <div className="app-body">\n        <aside className="app-sidebar">{sidebar}</aside>\n        <main className="app-main">{main}</main>\n      </div>\n      <footer className="app-footer">{footer}</footer>\n    </div>\n  );\n}\n\n// Использование\n<AppLayout\n  header={<h1>Мой сайт</h1>}\n  sidebar={\n    <nav>\n      <a href="/">Главная</a>\n      <a href="/about">О нас</a>\n    </nav>\n  }\n  main={\n    <div>\n      <h2>Добро пожаловать!</h2>\n      <p>Содержимое страницы...</p>\n    </div>\n  }\n  footer={<p>© 2023 Мой сайт</p>}\n/>`}</code></pre>
            </div>
          </div>
          
          {/* Карточка с различными секциями */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Layers className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">Многофункциональная карточка</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-cyan-300 text-sm"><code>{`function AdvancedCard({ \n  media, \n  header, \n  subheader, \n  content, \n  actions, \n  footer \n}) {\n  return (\n    <div className="card\">\n      {media && <div className="card-media">{media}</div>}\n      <div className="card-content\">\n        {(header || subheader) && (\n          <div className="card-header-section">\n            {header && <h3 className="card-title">{header}</h3>}\n            {subheader && <p className="card-subtitle">{subheader}</p>}\n          </div>\n        )}\n        {content && <div className="card-body">{content}</div>}\n        {actions && <div className="card-actions">{actions}</div>}\n      </div>\n      {footer && <div className="card-footer">{footer}</div>}\n    </div>\n  );\n}\n\n// Использование\n<AdvancedCard\n  media={<img src="photo.jpg" alt="Фото" />}\n  header="Название карточки"\n  subheader="Подзаголовок"\n  content={<p>Основное содержимое карточки...</p>}\n  actions={\n    <>\n      <button className="btn-primary">Действие 1</button>\n      <button className="btn-secondary">Действие 2</button>\n    </>\n  }\n  footer={<small>Нижний колонтитул</small>}\n/>`}</code></pre>
            </div>
          </div>
          
          {/* Компонент с условной композицией */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Puzzle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-yellow-300">Условная композиция</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-yellow-300 text-sm"><code>{`function ConditionalWrapper({ condition, wrapper, children }) {\n  return condition ? wrapper(children) : children;\n}\n\n// Использование\n<ConditionalWrapper\n  condition={isLoggedIn}\n  wrapper={(children) => (\n    <div className="protected-content">\n      {children}\n      <button onClick={logout}>Выйти</button>\n    </div>\n  )}\n>\n  <p>Это содержимое доступно только авторизованным пользователям</p>\n</ConditionalWrapper>`}</code></pre>
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
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Layers className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Когда использовать каждый подход</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Children</span> — когда компонент должен <span className="font-medium">рендерить переданное содержимое</span> в определенном месте
              </li>
              <li>
                <span className="font-medium">Render-пропсы</span> — когда нужно <span className="font-medium">передать логику или данные</span> из одного компонента в другой
              </li>
              <li>
                <span className="font-medium">Props-композиция</span> — когда компонент принимает <span className="font-medium">различные части интерфейса</span> как отдельные пропсы
              </li>
              <li>
                <span className="font-medium">Специализированные компоненты</span> — когда компонент должен <span className="font-medium">решать конкретную задачу</span> с предопределенной структурой
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Share2 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Антипаттерны и ошибки</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Слишком абстрактные компоненты</span> — компоненты, которые пытаются решить все задачи сразу
              </li>
              <li>
                <span className="font-medium">Избыточная композиция</span> — когда компоненты становятся слишком гибкими и сложными в использовании
              </li>
              <li>
                <span className="font-medium">Нарушение принципа единственной ответственности</span> — компоненты с множеством разных функций
              </li>
              <li>
                <span className="font-medium">Отсутствие документации</span> — неясно, как использовать гибкий компонент
              </li>
            </ul>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">❌ Плохо (слишком абстрактно):</p>
                <pre className="text-red-300 text-xs"><code>{`// Слишком общий компонент\nfunction UniversalComponent({ type, props, children }) {\n  switch (type) {\n    case 'card': return <Card {...props}>{children}</Card>;\n    case 'modal': return <Modal {...props}>{children}</Modal>;\n    // ... еще 50 типов\n  }\n}`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">✅ Хорошо (специализировано):</p>
                <pre className="text-green-300 text-xs"><code>{`// Специализированные компоненты\nfunction Card({ title, children }) { /* ... */ }\nfunction Modal({ isOpen, children }) { /* ... */ }\nfunction Alert({ type, message }) { /* ... */ }`}</code></pre>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">Оптимизация производительности</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Используйте React.memo</span> для предотвращения ненужных перерендеров
              </li>
              <li>
                <span className="font-medium">Избегайте создания новых функций</span> в рендере при использовании render-пропсов
              </li>
              <li>
                <span className="font-medium">Используйте useCallback</span> для стабилизации функций, передаваемых как render-пропсы
              </li>
              <li>
                <span className="font-medium">Разделяйте тяжелые компоненты</span> на более мелкие для лучшей оптимизации
              </li>
            </ul>
            <div className="mt-3 bg-gray-800 p-3 rounded-lg">
              <pre className="text-purple-300 text-sm"><code>{`// Оптимизация render-пропса\nconst OptimizedComponent = React.memo(({ render }) => {\n  const [count, setCount] = useState(0);\n  \n  // Стабилизируем функцию render\n  const stableRender = useCallback(render, [render]);\n  \n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>\n        Счетчик: {count}\n      </button>\n      {stableRender({ count })}\n    </div>\n  );\n});`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Layers className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое композиция компонентов в React и как использовать различные техники для создания гибких и переиспользуемых компонентов. Вы научились передавать JSX через <code className="bg-gray-700 px-1 rounded">children</code>, создавать компоненты с render-пропсами, применять композицию через props и разрабатывать сложные интерфейсы из простых строительных блоков. Композиция — это фундаментальный принцип React, который позволяет создавать масштабируемые и поддерживаемые приложения. Владение этими техниками поможет вам писать чистый, понятный и эффективный код. В следующих уроках мы рассмотрим продвинутые паттерны проектирования в React и изучим современные подходы к управлению состоянием приложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;