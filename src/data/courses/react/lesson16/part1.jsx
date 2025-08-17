// src/data/courses/react/lesson16/part1.jsx
import React from 'react';
import { Navigation, Route, Link, MapPin, Hash, Code, Globe } from 'lucide-react';

const Part1 = () => {
  return (<>
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Navigation className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧭 Урок 16: React Router — навигация по страницам</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание SPA с клиентской маршрутизацией</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое React Router и клиентская маршрутизация, освоить установку и настройку <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">react-router-dom</code>, научиться использовать основные компоненты (<code className="bg-gray-700 px-1 rounded">&#123;BrowserRouter&#125;</code>, <code className="bg-gray-700 px-1 rounded">&#123;Routes&#125;</code>, <code className="bg-gray-700 px-1 rounded">&#123;Route&#125;</code>, <code className="bg-gray-700 px-1 rounded">&#123;Link&#125;</code>), освоить динамические маршруты и параметры, научиться создавать полноценные одностраничные приложения (SPA) с навигацией без перезагрузки страниц.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое React Router? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MapPin className="w-5 h-5 text-green-400" />
          Что такое React Router?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">React Router</span> — это <span className="font-medium">библиотека маршрутизации</span> для React-приложений, которая позволяет <span className="font-medium">создавать навигацию</span> между <span className="font-medium">разными "страницами"</span> или <span className="font-medium">разделами</span> приложения <span className="font-medium">без перезагрузки</span> всей страницы.
          </p>
          <p>
            В традиционных веб-сайтах <span className="font-medium">каждая ссылка</span> ведет на <span className="font-medium">новую HTML-страницу</span>, что требует <span className="font-medium">полной перезагрузки</span> страницы с сервера. React Router позволяет создавать <span className="font-medium">одностраничные приложения (SPA)</span>, где <span className="font-medium">навигация</span> происходит <span className="font-medium">клиентским кодом</span>, что делает приложение <span className="font-medium">быстрее</span> и <span className="font-medium">плавнее</span>.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Традиционный сайт (MPA):</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{"<!-- При переходе по ссылке загружается новая страница -->\n<a href=\"/about\">О нас</a> <!-- Перезагрузка всей страницы -->\n<a href=\"/contact\">Контакты</a> <!-- Перезагрузка всей страницы -->\n<a href=\"/products\">Продукты</a> <!-- Перезагрузка всей страницы -->"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ React Router (SPA):</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"import { Link } from 'react-router-dom';\n\n{/* Навигация без перезагрузки страницы */}\n<Link to=\"/about\">О нас</Link>\n<Link to=\"/contact\">Контакты</Link>\n<Link to=\"/products\">Продукты</Link>"}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Преимущества React Router:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Быстрая навигация</span> без перезагрузки страницы</li>
                <li><span className="font-medium">Сохранение состояния</span> приложения при переходах</li>
                <li><span className="font-medium">Поддержка истории браузера</span> (назад/вперед)</li>
                <li><span className="font-medium">Динамические маршруты</span> с параметрами</li>
                <li><span className="font-medium">Вложенные маршруты</span> для сложных интерфейсов</li>
                <li><span className="font-medium">Программная навигация</span> через JavaScript</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Установка и настройка */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-yellow-400" />
          Установка и настройка React Router
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для использования React Router в вашем React-приложении необходимо <span className="font-medium">установить</span> соответствующий пакет и <span className="font-medium">настроить</span> маршрутизацию.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Navigation className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Установка react-router-dom</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-cyan-300 text-sm"><code>{"# Установка с помощью npm\nnpm install react-router-dom\n\n# Установка с помощью yarn\nyarn add react-router-dom\n\n# Установка с помощью pnpm\npnpm add react-router-dom"}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            React Router v6 — это <span className="font-medium">актуальная версия</span> библиотеки, которая предлагает <span className="font-medium">улучшенный API</span> и <span className="font-medium">лучшую производительность</span> по сравнению с предыдущими версиями.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Globe className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Настройка BrowserRouter</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-purple-300 text-sm"><code>{"// src/index.js или src/main.jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { BrowserRouter } from 'react-router-dom';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <BrowserRouter>\n      <App />\n    </BrowserRouter>\n  </React.StrictMode>\n);"}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            <code className="bg-gray-700 px-1 rounded">BrowserRouter</code> — это <span className="font-medium">провайдер</span>, который <span className="font-medium">включает</span> маршрутизацию в вашем приложении. Он <span className="font-medium">использует History API</span> браузера для управления историей навигации.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Альтернатива: HashRouter</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{"// Используется, когда нельзя настроить сервер для SPA\nimport { HashRouter } from 'react-router-dom';\n\n<HashRouter>\n  <App />\n</HashRouter>"}</code>
            </pre>
            <p className="text-gray-400 text-xs mt-2">
              Использует <code className="bg-gray-700 px-1 rounded">#</code> в URL для маршрутизации: <code className="bg-gray-700 px-1 rounded">example.com/#/about</code>
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <p className="text-sm text-gray-400 mb-2">Альтернатива: MemoryRouter</p>
            <pre className="text-orange-300 text-sm overflow-x-auto">
              <code>{"// Используется для тестирования или не-браузерных сред\nimport { MemoryRouter } from 'react-router-dom';\n\n<MemoryRouter>\n  <App />\n</MemoryRouter>"}</code>
            </pre>
            <p className="text-gray-400 text-xs mt-2">
              Хранит историю в памяти, не взаимодействует с адресной строкой браузера.
            </p>
          </div>
        </div>
      </div>

      {/* Основные компоненты React Router */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Route className="w-5 h-5 text-cyan-400" />
          Основные компоненты React Router
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            React Router предоставляет <span className="font-medium">набор компонентов</span>, которые позволяют <span className="font-medium">определять маршруты</span>, <span className="font-medium">создавать навигацию</span> и <span className="font-medium">управлять отображением</span> компонентов в зависимости от текущего URL.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Route className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Routes и Route</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{"import { Routes, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <div>\n      <nav>\n        {/* Навигационное меню */}\n      </nav>\n      \n      <main>\n        {/* Определение маршрутов */}\n        <Routes>\n          <Route path=\"/\" element={<Home />} />\n          <Route path=\"/about\" element={<About />} />\n          <Route path=\"/contact\" element={<Contact />} />\n          <Route path=\"/products\" element={<Products />} />\n          {/* Страница 404 для несуществующих маршрутов */}\n          <Route path=\"*\" element={<NotFound />} />\n        </Routes>\n      </main>\n      \n      <footer>\n        {/* Подвал */}\n      </footer>\n    </div>\n  );\n}"}</code></pre>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <code className="bg-gray-700 px-1 rounded">Routes</code> — <span className="font-medium">контейнер</span> для всех маршрутов. Он <span className="font-medium">просматривает</span> все дочерние <code className="bg-gray-700 px-1 rounded">Route</code> и <span className="font-medium">отображает</span> первый, <span className="font-medium">который совпадает</span> с текущим URL.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">Route</code> — <span className="font-medium">определяет</span> маршрут. Атрибут <code className="bg-gray-700 px-1 rounded">path</code> указывает <span className="font-medium">путь URL</span>, а атрибут <code className="bg-gray-700 px-1 rounded">element</code> — <span className="font-medium">компонент</span>, который должен быть отображен.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">path="*"</code> — <span className="font-medium">универсальный маршрут</span>, который срабатывает, если <span className="font-medium">ни один другой маршрут</span> не совпал (страница 404).
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Link className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Link и NavLink</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{"import { Link, NavLink } from 'react-router-dom';\n\nfunction Navigation() {\n  return (\n    <nav>\n      {/* Обычная ссылка без стилей */}\n      <Link to=\"/\">Главная</Link>\n      <Link to=\"/about\">О нас</Link>\n      <Link to=\"/contact\">Контакты</Link>\n      \n      {/* Ссылка с активными стилями */}\n      <NavLink \n        to=\"/products\" \n        className={({ isActive }) => isActive ? 'active-link' : 'normal-link'}\n      >\n        Продукты\n      </NavLink>\n      \n      {/* Ссылка с активным классом */}\n      <NavLink \n        to=\"/services\" \n        activeClassName=\"current-page\"\n      >\n        Услуги\n      </NavLink>\n    </nav>\n  );\n}"}</code></pre>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <code className="bg-gray-700 px-1 rounded">Link</code> — <span className="font-medium">заменяет</span> традиционный тег <code className="bg-gray-700 px-1 rounded">{'<a>'}</code>. Предотвращает <span className="font-medium">перезагрузку страницы</span> и <span className="font-medium">изменяет</span> URL с помощью клиентской навигации.
              </li>
              <li>
                <code className="bg-gray-700 px-1 rounded">NavLink</code> — <span className="font-medium">расширенная версия</span> <code className="bg-gray-700 px-1 rounded">Link</code>, которая <span className="font-medium">добавляет</span> специальные стили, когда <span className="font-medium">маршрут активен</span>.
              </li>
              <li>
                Атрибут <code className="bg-gray-700 px-1 rounded">to</code> указывает <span className="font-medium">целевой путь</span> для навигации.
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Hash className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">Outlet для вложенных маршрутов</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-orange-300 text-sm"><code>{"// Компонент макета с вложенными маршрутами\nfunction DashboardLayout() {\n  return (\n    <div>\n      <h1>Панель управления</h1>\n      <nav>\n        <Link to=\"/dashboard/profile\">Профиль</Link>\n        <Link to=\"/dashboard/settings\">Настройки</Link>\n        <Link to=\"/dashboard/analytics\">Аналитика</Link>\n      </nav>\n      \n      {/* Место для отображения вложенных маршрутов */}\n      <div className=\"dashboard-content\">\n        <Outlet />\n      </div>\n    </div>\n  );\n}\n\n// Определение вложенных маршрутов\n<Routes>\n  <Route path=\"/dashboard\" element={<DashboardLayout />}>\n    <Route index element={<DashboardHome />} />\n    <Route path=\"profile\" element={<Profile />} />\n    <Route path=\"settings\" element={<Settings />} />\n    <Route path=\"analytics\" element={<Analytics />} />\n  </Route>\n</Routes>"}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              <code className="bg-gray-700 px-1 rounded">Outlet</code> — это <span className="font-medium">компонент-заполнитель</span>, который <span className="font-medium">отображает</span> содержимое <span className="font-medium">вложенных маршрутов</span> внутри родительского компонента.
            </p>
          </div>
        </div>
      </div>

      {/* Динамические маршруты и параметры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          Динамические маршруты и параметры
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">Динамические маршруты</span> позволяют <span className="font-medium">создавать</span> маршруты, которые <span className="font-medium">соответствуют</span> различным URL с <span className="font-medium">одинаковой структурой</span>, но <span className="font-medium">разными параметрами</span>.
          </p>
          <p>
            Например, маршрут <code className="bg-gray-700 px-1 rounded">/user/123</code> и <code className="bg-gray-700 px-1 rounded">/user/456</code> имеют <span className="font-medium">одинаковую структуру</span>, но <span className="font-medium">разные ID пользователей</span>. Динамические маршруты позволяют <span className="font-medium">обрабатывать</span> такие случаи <span className="font-medium">одним</span> компонентом.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Hash className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-yellow-300">Создание динамических маршрутов</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-yellow-300 text-sm"><code>{"import { Routes, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path=\"/\" element={<Home />} />\n      <Route path=\"/users\" element={<Users />} />\n      {/* Динамический маршрут с параметром id */}\n      <Route path=\"/user/:id\" element={<UserDetail />} />\n      <Route path=\"/posts/:postId\" element={<PostDetail />} />\n      <Route path=\"/category/:categoryName\" element={<Category />} />\n      <Route path=\"*\" element={<NotFound />} />\n    </Routes>\n  );\n}"}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            Двоеточие <code className="bg-gray-700 px-1 rounded">:</code> перед именем указывает, что это <span className="font-medium">динамический параметр</span>. Например, <code className="bg-gray-700 px-1 rounded">:id</code> будет содержать значение ID из URL.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Доступ к параметрам маршрута</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-cyan-300 text-sm"><code>{"import { useParams } from 'react-router-dom';\n\nfunction UserDetail() {\n  // Получаем параметры из URL\n  const { id } = useParams();\n  \n  // Загружаем данные пользователя по ID\n  const user = fetchUserById(id);\n  \n  return (\n    <div>\n      <h1>Профиль пользователя #{id}</h1>\n      {user ? (\n        <div>\n          <p>Имя: {user.name}</p>\n          <p>Email: {user.email}</p>\n        </div>\n      ) : (\n        <p>Пользователь не найден</p>\n      )}\n    </div>\n  );\n}\n\nfunction PostDetail() {\n  // Можно получить несколько параметров\n  const { postId } = useParams();\n  \n  const post = fetchPostById(postId);\n  \n  return (\n    <div>\n      <h1>{post?.title}</h1>\n      <div dangerouslySetInnerHTML={{ __html: post?.content }} />\n    </div>\n  );\n}"}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            <code className="bg-gray-700 px-1 rounded">useParams()</code> возвращает <span className="font-medium">объект</span> с <span className="font-medium">параметрами маршрута</span>. Имена свойств соответствуют именам параметров в определении маршрута.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Список пользователей с динамическими ссылками</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"import { Link } from 'react-router-dom';\n\nfunction UsersList() {\n  const users = [\n    { id: 1, name: 'Иван Иванов' },\n    { id: 2, name: 'Мария Петрова' },\n    { id: 3, name: 'Алексей Сидоров' }\n  ];\n  \n  return (\n    <div>\n      <h1>Список пользователей</h1>\n      <ul>\n        {users.map(user => (\n          <li key={user.id}>\n            {/* Создаем динамические ссылки */}\n            <Link to={`/user/${user.id}`}>\n              {user.name}\n            </Link>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример: Маршрут с несколькими параметрами</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{"// Определение маршрута с несколькими параметрами\n<Route path=\"/category/:categoryName/subcategory/:subcategoryId\" element={<Subcategory />} />\n\n// Компонент, использующий несколько параметров\nfunction Subcategory() {\n  const { categoryName, subcategoryId } = useParams();\n  \n  return (\n    <div>\n      <h1>Категория: {categoryName}</h1>\n      <p>Подкатегория ID: {subcategoryId}</p>\n      {/* Загрузка и отображение содержимого подкатегории */}\n    </div>\n  );\n}"}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Программная навигация */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Navigation className="w-5 h-5 text-orange-400" />
          Программная навигация
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Помимо <span className="font-medium">навигации через ссылки</span>, React Router позволяет <span className="font-medium">программно</span> управлять <span className="font-medium">навигацией</span> с помощью <span className="font-medium">хуков</span>.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">useNavigate для программной навигации</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-purple-300 text-sm"><code>{"import { useNavigate } from 'react-router-dom';\n\nfunction LoginForm() {\n  const navigate = useNavigate();\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  \n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    \n    try {\n      const user = await authenticate(email, password);\n      if (user) {\n        // Программный переход после успешной авторизации\n        navigate('/dashboard');\n      }\n    } catch (error) {\n      console.error('Ошибка авторизации:', error);\n    }\n  };\n  \n  const handleGoBack = () => {\n    // Переход назад в истории браузера\n    navigate(-1);\n  };\n  \n  const handleGoForward = () => {\n    // Переход вперед в истории браузера\n    navigate(1);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Поля формы */}\n      <button type=\"submit\">Войти</button>\n      <button type=\"button\" onClick={handleGoBack}>\n        Назад\n      </button>\n    </form>\n  );\n}"}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>
              <code className="bg-gray-700 px-1 rounded">navigate(path)</code> — <span className="font-medium">переход</span> по указанному пути
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">navigate(-1)</code> — <span className="font-medium">переход назад</span> в истории браузера
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">navigate(1)</code> — <span className="font-medium">переход вперед</span> в истории браузера
            </li>
            <li>
              <code className="bg-gray-700 px-1 rounded">navigate(path, &#123; replace: true &#125;)</code> — <span className="font-medium">замена</span> текущей записи в истории
            </li>
          </ul>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">useLocation для получения информации о текущем URL</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{"import { useLocation } from 'react-router-dom';\n\nfunction PageTracker() {\n  const location = useLocation();\n  \n  useEffect(() => {\n    // Отслеживание изменения страниц\n    console.log('Текущий путь:', location.pathname);\n    console.log('Параметры поиска:', location.search);\n    console.log('Состояние:', location.state);\n  }, [location]);\n  \n  return (\n    <div>\n      <p>Текущая страница: {location.pathname}</p>\n      <p>Полный URL: {location.pathname}{location.search}</p>\n    </div>\n  );\n}"}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">useSearchParams для работы с параметрами поиска</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{"import { useSearchParams } from 'react-router-dom';\n\nfunction SearchResults() {\n  const [searchParams, setSearchParams] = useSearchParams();\n  \n  // Получение значения параметра\n  const query = searchParams.get('q') || '';\n  const page = parseInt(searchParams.get('page')) || 1;\n  \n  const handleSearch = (newQuery) => {\n    // Обновление параметров поиска\n    setSearchParams({ q: newQuery, page: 1 });\n  };\n  \n  return (\n    <div>\n      <input \n        value={query}\n        onChange={(e) => handleSearch(e.target.value)}\n        placeholder=\"Поиск...\"\n      />\n      <p>Результаты для: {query}</p>\n      <p>Страница: {page}</p>\n    </div>\n  );\n}"}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Globe className="w-5 h-5 text-cyan-400" />
          Практический пример: Блог с навигацией
        </h2>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Navigation className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-green-300">Полный пример приложения блога</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-green-300 text-sm"><code>{"// src/App.js\nimport { Routes, Route, Link, Outlet } from 'react-router-dom';\nimport { Home, About, Blog, Contact } from './pages';\n\nfunction App() {\n  return (\n    <div className=\"app\">\n      <Header />\n      <main>\n        <Routes>\n          <Route path=\"/\" element={<Home />} />\n          <Route path=\"/about\" element={<About />} />\n          <Route path=\"/blog\" element={<BlogLayout />}>\n            <Route index element={<Blog />} />\n            <Route path=\":postId\" element={<Post />} />\n            <Route path=\"category/:category\" element={<CategoryPosts />} />\n          </Route>\n          <Route path=\"/contact\" element={<Contact />} />\n          <Route path=\"*\" element={<NotFound />} />\n        </Routes>\n      </main>\n      <Footer />\n    </div>\n  );\n}\n\nfunction Header() {\n  return (\n    <header>\n      <nav>\n        <Link to=\"/\">Главная</Link>\n        <Link to=\"/about\">О нас</Link>\n        <Link to=\"/blog\">Блог</Link>\n        <Link to=\"/contact\">Контакты</Link>\n      </nav>\n    </header>\n  );\n}\n\nfunction BlogLayout() {\n  return (\n    <div className=\"blog-layout\">\n      <aside>\n        <h3>Категории</h3>\n        <Link to=\"/blog/category/technology\">Технологии</Link>\n        <Link to=\"/blog/category/design\">Дизайн</Link>\n        <Link to=\"/blog/category/business\">Бизнес</Link>\n      </aside>\n      <div className=\"blog-content\">\n        <Outlet />\n      </div>\n    </div>\n  );\n}\n\n// src/pages/Blog.js\nimport { Link } from 'react-router-dom';\n\nconst posts = [\n  { id: 1, title: 'Введение в React', category: 'technology' },\n  { id: 2, title: 'Дизайн систем', category: 'design' },\n  { id: 3, title: 'Стартапы 2023', category: 'business' }\n];\n\nexport function Blog() {\n  return (\n    <div>\n      <h1>Блог</h1>\n      <ul>\n        {posts.map(post => (\n          <li key={post.id}>\n            <Link to={`/blog/${post.id}`}>\n              {post.title}\n            </Link>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\n// src/pages/Post.js\nimport { useParams } from 'react-router-dom';\n\nconst postData = {\n  1: { title: 'Введение в React', content: 'React - это библиотека...' },\n  2: { title: 'Дизайн систем', content: 'Дизайн система - это...' },\n  3: { title: 'Стартапы 2023', content: 'Тренды стартапов...' }\n};\n\nexport function Post() {\n  const { postId } = useParams();\n  const post = postData[postId];\n  \n  if (!post) {\n    return <div>Пост не найден</div>;\n  }\n  \n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <div>{post.content}</div>\n    </div>\n  );\n}"}</code></pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Советы по использованию React Router:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Всегда оборачивайте приложение в <code className="bg-gray-700 px-1 rounded">BrowserRouter</code></li>
                <li>Используйте <code className="bg-gray-700 px-1 rounded">Link</code> вместо <code className="bg-gray-700 px-1 rounded">{'<a>'}</code> для внутренней навигации</li>
                <li>Используйте <code className="bg-gray-700 px-1 rounded">NavLink</code> для активных ссылок в навигации</li>
                <li>Добавляйте маршрут <code className="bg-gray-700 px-1 rounded">path="*"</code> для обработки 404-ошибок</li>
                <li>Используйте <code className="bg-gray-700 px-1 rounded">useParams()</code> для доступа к динамическим параметрам</li>
                <li>Используйте <code className="bg-gray-700 px-1 rounded">useNavigate()</code> для программной навигации</li>
              </ul>
            </span>
          </p>
        </div>
      </div>
      
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Navigation className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое React Router и как использовать его для создания навигации в React-приложениях. Вы научились устанавливать <code className="bg-gray-700 px-1 rounded">react-router-dom</code>, настраивать <code className="bg-gray-700 px-1 rounded">BrowserRouter</code>, определять маршруты с помощью <code className="bg-gray-700 px-1 rounded">Routes</code> и <code className="bg-gray-700 px-1 rounded">Route</code>, создавать навигацию с <code className="bg-gray-700 px-1 rounded">Link</code> и <code className="bg-gray-700 px-1 rounded">NavLink</code>, работать с динамическими маршрутами и параметрами через <code className="bg-gray-700 px-1 rounded">useParams()</code>, а также использовать программную навигацию с <code className="bg-gray-700 px-1 rounded">useNavigate()</code>. React Router — это мощный инструмент для создания современных одностраничных приложений (SPA) с плавной навигацией и сохранением состояния. В следующих уроках мы рассмотрим продвинутые возможности маршрутизации, защиту маршрутов, ленивую загрузку компонентов и интеграцию с глобальным состоянием приложения.
            </p>
          </div>
        </div>
      </div>
        
      </>
  );
};

export default Part1;