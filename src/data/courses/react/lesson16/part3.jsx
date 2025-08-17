// src/data/courses/react/lesson16/part3.jsx
import React from 'react';
import { Navigation, Route, Link, Play, Terminal } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: React Router — навигация по страницам</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию React Router через практические задания различной сложности.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Базовое приложение с навигацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте простое React-приложение с навигацией между страницами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Установите <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">react-router-dom</code> в ваш проект.</li>
          <li>Настройте <code className="bg-gray-700 px-1 rounded">BrowserRouter</code> в корневом файле приложения (<code className="bg-gray-700 px-1 rounded">index.js</code> или <code className="bg-gray-700 px-1 rounded">main.jsx</code>).</li>
          <li>Создайте компоненты для основных страниц: <code className="bg-gray-700 px-1 rounded">Home</code>, <code className="bg-gray-700 px-1 rounded">About</code>, <code className="bg-gray-700 px-1 rounded">Services</code>, <code className="bg-gray-700 px-1 rounded">Contact</code>.</li>
          <li>Создайте компонент навигационного меню <code className="bg-gray-700 px-1 rounded">Navigation</code> с использованием компонента <code className="bg-gray-700 px-1 rounded">Link</code>.</li>
          <li>Определите маршруты в основном компоненте <code className="bg-gray-700 px-1 rounded">App</code> с использованием <code className="bg-gray-700 px-1 rounded">Routes</code> и <code className="bg-gray-700 px-1 rounded">Route</code>.</li>
          <li>Добавьте обработку несуществующих маршрутов (страница 404).</li>
          <li>Каждая страница должна содержать уникальный контент и заголовок.</li>
          <li>Добавьте базовую стилизацию для улучшения внешнего вида.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Импортируйте необходимые компоненты: <code className="bg-gray-700 px-1 rounded">import {'{'} BrowserRouter as Router, Routes, Route, Link {'}'}</code> from <code className="bg-gray-700 px-1 rounded">'react-router-dom'</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Блог с динамическими маршрутами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте приложение блога с использованием динамических маршрутов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Blog</code>, который отображает список статей с использованием данных из <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/posts</code>.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">PostDetail</code> для отображения деталей отдельной статьи.</li>
          <li>Реализуйте динамический маршрут <code className="bg-gray-700 px-1 rounded">/blog/:postId</code> для страницы деталей статьи.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useParams()</code> для получения ID статьи в компоненте <code className="bg-gray-700 px-1 rounded">PostDetail</code>.</li>
          <li>Загрузите данные статьи с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/posts/{'{postId}'}</code>.</li>
          <li>Добавьте отображение имени автора статьи, получив данные пользователя с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users/{'{userId}'}</code>.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">PostList</code> для отображения списка статей с ссылками на детали.</li>
          <li>Добавьте навигационные ссылки: "Главная", "Блог", "Контакты".</li>
          <li>Реализуйте обработку ошибок загрузки данных.</li>
          <li>Добавьте индикаторы загрузки во время получения данных.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для получения параметров маршрута: <code className="bg-gray-700 px-1 rounded">const {'{'} postId {'}'} = useParams();</code>. Используйте <code className="bg-gray-700 px-1 rounded">useEffect</code> для загрузки данных при монтировании компонента.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Приложение с пользователями и профилями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте приложение для управления пользователями с вложенными маршрутами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Users</code>, который загружает список пользователей с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users</code>.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">UserDetail</code> для отображения профиля отдельного пользователя с динамическим маршрутом <code className="bg-gray-700 px-1 rounded">/users/:userId</code>.</li>
          <li>Реализуйте вложенные маршруты для страницы пользователя:
            <ul className="list-circle pl-5 mt-1">
              <li><code className="bg-gray-700 px-1 rounded">/users/{'{userId}'}</code> — основная информация о пользователе</li>
              <li><code className="bg-gray-700 px-1 rounded">/users/{'{userId}'}/posts</code> — список постов пользователя</li>
              <li><code className="bg-gray-700 px-1 rounded">/users/{'{userId}'}/albums</code> — список альбомов пользователя</li>
            </ul>
          </li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">Outlet</code> для отображения вложенных маршрутов в компоненте профиля пользователя.</li>
          <li>Создайте компонент навигации внутри профиля пользователя для переключения между разделами.</li>
          <li>Загрузите данные для каждого раздела:
            <ul className="list-circle pl-5 mt-1">
              <li>Основная информация пользователя</li>
              <li>Посты пользователя с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/posts?userId={'{userId}'}</code></li>
              <li>Альбомы пользователя с <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/albums?userId={'{userId}'}</code></li>
            </ul>
          </li>
          <li>Добавьте отображение фотографий из альбомов (первые 3 фото из каждого альбома).</li>
          <li>Реализуйте обработку ошибок и индикаторы загрузки.</li>
          <li>Добавьте кнопку "Назад к списку пользователей".</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для вложенных маршрутов используйте: <code className="bg-gray-700 px-1 rounded">{'<Route path="/users/:userId" element={<UserDetail />}>...</Route>'}</code>. Для получения фотографий используйте <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/photos?albumId={'{albumId}'}</code> и ограничьте количество с помощью <code className="bg-gray-700 px-1 rounded">.slice(0, 3)</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Комплексное приложение с программной навигацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте комплексное приложение с использованием программной навигации и параметров поиска:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Dashboard</code> как главную страницу приложения.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Login</code> для аутентификации пользователей.</li>
          <li>Реализуйте имитацию аутентификации с сохранением состояния в <code className="bg-gray-700 px-1 rounded">localStorage</code>.</li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useNavigate()</code> для программной навигации после успешного входа/выхода.</li>
          <li>Создайте защищенные маршруты, которые доступны только авторизованным пользователям.</li>
          <li>Реализуйте компонент <code className="bg-gray-700 px-1 rounded">ProtectedRoute</code>, который проверяет авторизацию пользователя.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Search</code> с параметрами поиска:
            <ul className="list-circle pl-5 mt-1">
              <li>Поле ввода для поискового запроса</li>
              <li>Выпадающий список для выбора категории поиска</li>
              <li>Пагинация результатов поиска</li>
            </ul>
          </li>
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useSearchParams()</code> для управления параметрами поиска в URL.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">SearchResults</code>, который отображает результаты поиска на основе параметров URL.</li>
          <li>Реализуйте обновление URL при изменении параметров поиска.</li>
          <li>Добавьте компонент <code className="bg-gray-700 px-1 rounded">UserProfile</code> с настройками пользователя.</li>
          <li>Создайте навигационное меню с активными ссылками, используя <code className="bg-gray-700 px-1 rounded">NavLink</code>.</li>
          <li>Добавьте возможность смены темы приложения с сохранением выбора.</li>
          <li>Реализуйте функцию "Вернуться назад" с использованием <code className="bg-gray-700 px-1 rounded">navigate(-1)</code>.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для <code className="bg-gray-700 px-1 rounded">ProtectedRoute</code> проверяйте наличие токена в <code className="bg-gray-700 px-1 rounded">localStorage</code>. Для <code className="bg-gray-700 px-1 rounded">useSearchParams</code>: <code className="bg-gray-700 px-1 rounded">const [searchParams, setSearchParams] = useSearchParams();</code> и <code className="bg-gray-700 px-1 rounded">searchParams.get('query')</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          E-commerce приложение с корзиной и заказами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте приложение интернет-магазина с корзиной и управлением заказами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Products</code> для отображения списка продуктов (используйте <code className="bg-gray-700 px-1 rounded">https://jsonplaceholder.typicode.com/users</code> как источник данных).</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">ProductDetail</code> с динамическим маршрутом <code className="bg-gray-700 px-1 rounded">/products/:productId</code>.</li>
          <li>Реализуйте корзину покупок с использованием <code className="bg-gray-700 px-1 rounded">useContext</code> или <code className="bg-gray-700 px-1 rounded">useState</code> для управления состоянием.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Cart</code> для отображения содержимого корзины с возможностью изменения количества и удаления товаров.</li>
          <li>Реализуйте маршруты:
            <ul className="list-circle pl-5 mt-1">
              <li><code className="bg-gray-700 px-1 rounded">/</code> — главная страница</li>
              <li><code className="bg-gray-700 px-1 rounded">/products</code> — список продуктов</li>
              <li><code className="bg-gray-700 px-1 rounded">/products/:productId</code> — детали продукта</li>
              <li><code className="bg-gray-700 px-1 rounded">/cart</code> — корзина</li>
              <li><code className="bg-gray-700 px-1 rounded">/checkout</code> — оформление заказа</li>
              <li><code className="bg-gray-700 px-1 rounded">/orders</code> — список заказов</li>
              <li><code className="bg-gray-700 px-1 rounded">/orders/:orderId</code> — детали заказа</li>
            </ul>
          </li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">Checkout</code> с формой оформления заказа.</li>
          <li>Реализуйте валидацию формы checkout с отображением ошибок.</li>
          <li>После успешного оформления заказа используйте <code className="bg-gray-700 px-1 rounded">navigate()</code> для перехода к странице подтверждения заказа.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">OrderConfirmation</code> с деталями оформленного заказа.</li>
          <li>Реализуйте список заказов <code className="bg-gray-700 px-1 rounded">OrdersList</code> с возможностью просмотра деталей каждого заказа.</li>
          <li>Добавьте индикатор количества товаров в корзине в навигационном меню.</li>
          <li>Реализуйте фильтрацию и сортировку продуктов на странице <code className="bg-gray-700 px-1 rounded">Products</code>.</li>
          <li>Добавьте возможность поиска продуктов по названию.</li>
          <li>Создайте компонент <code className="bg-gray-700 px-1 rounded">OrderDetail</code> для отображения деталей конкретного заказа.</li>
          <li>Реализуйте обработку ошибок и индикаторы загрузки для всех асинхронных операций.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для корзины создайте контекст <code className="bg-gray-700 px-1 rounded">CartContext</code> с функциями: <code className="bg-gray-700 px-1 rounded">addToCart</code>, <code className="bg-gray-700 px-1 rounded">removeFromCart</code>, <code className="bg-gray-700 px-1 rounded">updateQuantity</code>, <code className="bg-gray-700 px-1 rounded">clearCart</code>. Для имитации заказов храните их в <code className="bg-gray-700 px-1 rounded">localStorage</code>.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Navigation className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования React Router для создания навигации в React-приложениях. Вы научились устанавливать и настраивать <code className="bg-gray-700 px-1 rounded">react-router-dom</code>, определять маршруты с помощью <code className="bg-gray-700 px-1 rounded">Routes</code> и <code className="bg-gray-700 px-1 rounded">Route</code>, создавать навигацию с <code className="bg-gray-700 px-1 rounded">Link</code> и <code className="bg-gray-700 px-1 rounded">NavLink</code>, работать с динамическими маршрутами и параметрами через <code className="bg-gray-700 px-1 rounded">useParams()</code>, использовать программную навигацию с <code className="bg-gray-700 px-1 rounded">useNavigate()</code>, реализовывать вложенные маршруты с <code className="bg-gray-700 px-1 rounded">Outlet</code>, управлять параметрами поиска с <code className="bg-gray-700 px-1 rounded">useSearchParams()</code>, создавать защищенные маршруты и интегрировать маршрутизацию с глобальным состоянием приложения. Понимание и умение применять React Router является ключевым навыком для создания современных одностраничных приложений (SPA) с плавной навигацией и богатым пользовательским интерфейсом.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;