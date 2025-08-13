// src/data/courses/javascript/lesson17/part3.jsx
import React from 'react';
import { Terminal, Bug, AlertCircle, Edit3, Zap, Database, Key, Plus, Edit3 as EditIcon } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Объекты: хранение данных с ключами</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по работе с объектами, освоить создание, доступ к свойствам, методы и динамическую работу с объектами.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание и базовая работа с объектами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с внутренним скриптом. Реализуйте следующие операции с объектами:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте объекты разными способами: литералом, конструктором Object</li>
          <li>Создайте объекты с разными типами данных в свойствах</li>
          <li>Создайте объекты со вложенными объектами и массивами</li>
          <li>Экспериментируйте с различными типами ключей (строки, числа, символы)</li>
          <li>Создайте объекты с методами и используйте this для доступа к свойствам</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Выведите все объекты и их свойства в консоль. Продемонстрируйте различия между способами создания.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте: <code className="bg-gray-700 px-1 rounded">console.log(объект, Object.keys(объект))</code> для отслеживания свойств</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Доступ к свойствам объектов
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для демонстрации различных способов доступа к свойствам:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-purple-300 mb-2">Доступ через точку:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте объект с обычными именами свойств</li>
              <li>Реализуйте чтение и изменение свойств через точку</li>
              <li>Создайте объект с методами и вызовите их</li>
              <li>Реализуйте цепочку вызовов методов</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-3 rounded">
            <div className="text-sm text-cyan-300 mb-2">Доступ через скобки:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте объект с ключами, содержащими пробелы и спецсимволы</li>
              <li>Реализуйте динамический доступ к свойствам через переменные</li>
              <li>Создайте функцию для безопасного получения значений</li>
              <li>Реализуйте обработку несуществующих свойств</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Сравните удобство использования разных способов доступа в различных сценариях.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">obj[переменная] = значение;</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Динамическая работа со свойствами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для динамического управления свойствами объектов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Реализуйте функции добавления, изменения и удаления свойств</li>
          <li>Создайте универсальную функцию для установки свойств по пути (например, "адрес.город")</li>
          <li>Реализуйте функцию для клонирования объектов с сохранением структуры</li>
          <li>Создайте функцию для объединения нескольких объектов</li>
          <li>Реализуйте систему настроек с возможностью сброса к значениям по умолчанию</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Протестируйте все функции с различными сценариями использования.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">delete объект.свойство;</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Проверка и перебор свойств
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт для проверки существования и перебора свойств объектов:
        </p>
        <div className="space-y-4 mb-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-orange-300 mb-2">Проверка свойств:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Реализуйте функции проверки существования свойств через оператор in</li>
              <li>Создайте функции для различения undefined значений и отсутствующих свойств</li>
              <li>Реализуйте функцию для получения всех собственных свойств объекта</li>
              <li>Создайте функцию для проверки, является ли свойство перечисляемым</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <div className="text-sm text-green-300 mb-2">Перебор свойств:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Создайте функцию для перебора всех свойств объекта с помощью for...in</li>
              <li>Реализуйте функцию для фильтрации свойств по типу значений</li>
              <li>Создайте функцию для преобразования объекта в массив пар [ключ, значение]</li>
              <li>Реализуйте функцию для создания объекта из массива пар</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-3">
          Убедитесь, что ваши функции корректно работают с вложенными объектами.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7- Bruce"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{"for (let ключ in объект) { console.log(ключ, объект[ключ]); }"}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексные объекты и практические приложения
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте скрипт, демонстрирующий комплексное использование объектов:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте систему управления пользовательским профилем с валидацией данных</li>
          <li>Реализуйте корзину покупок с методами добавления, удаления и подсчета итога</li>
          <li>Создайте конфигурационный объект с методами сохранения и загрузки настроек</li>
          <li>Реализуйте систему логирования с различными уровнями важности</li>
          <li>Создайте объект для работы с географическими данными (координаты, расстояния)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Используйте комбинации свойств, методов, вложенных объектов и динамического управления свойствами.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример: <code className="bg-gray-700 px-1 rounded">{"профиль.установитьEmail('user@example.com') && профиль.сохранить();"}</code></p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам освоить работу с объектами, доступ к свойствам, методы и научиться применять их в реальных сценариях!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;