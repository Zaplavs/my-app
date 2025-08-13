// src/data/courses/javascript/lesson2/part3.jsx
import React from 'react';
import { Code, FileCode, Eye, Globe, Zap, Terminal } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Подключение JavaScript к HTML</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по подключению JavaScript к HTML различными способами.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Внутренний скрипт
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с заголовком "Мой первый скрипт". В теле документа добавьте <span className="font-medium">внутренний JavaScript</span> с помощью тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">{'<script>'}</code>. Используйте готовый скрипт:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-yellow-300 text-sm overflow-x-auto">
            <code>{`<script>
  alert("Привет из внутреннего скрипта!");
</script>`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Поместите этот скрипт перед закрывающим тегом <code className="bg-gray-700 px-1 rounded">{'</body>'}</code>.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Функция <code className="bg-gray-700 px-1 rounded">alert()</code> показывает всплывающее окно с сообщением.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Внешний файл скрипта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с заголовком "Внешний скрипт". Создайте отдельный файл <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">script.js</code>. Вставьте в него следующий код:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-green-300 text-sm overflow-x-auto">
            <code>{`alert("Привет из внешнего файла!");`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Подключите внешний файл к HTML-документу с помощью:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-gray-300 text-sm overflow-x-auto">
            <code>{`<script src="script.js"></script>`}</code>
          </pre>
        </div>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Убедитесь, что файл <code className="bg-gray-700 px-1 rounded">script.js</code> находится в той же папке, что и HTML-файл.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Атрибуты HTML
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-фрагмент с кнопкой. Добавьте обработчик события через атрибут HTML. Используйте готовый код:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-blue-300 text-sm overflow-x-auto">
            <code>{`<button onclick="alert('Кнопка нажата!')">Нажми меня</button>`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          При клике на кнопку должно появиться всплывающее окно.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Атрибут <code className="bg-gray-700 px-1 rounded">onclick</code> выполняет JavaScript код при клике на элемент.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Размещение скрипта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-документ с заголовком "Тест размещения скрипта". Используйте следующий скрипт:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-purple-300 text-sm overflow-x-auto">
            <code>{`<script>
  alert("Скрипт выполнен!");
</script>`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Попробуйте поместить этот скрипт в два разных места:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Перед закрывающим тегом <code className="bg-gray-700 px-1 rounded">{'</body>'}</code></li>
          <li>Внутри тега <code className="bg-gray-700 px-1 rounded">{'<head>'}</code></li>
        </ul>
        <p className="text-gray-300 mb-3">
          Откройте HTML-файл в браузере и посмотрите, когда появляется всплывающее окно.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание, когда именно появляется окно - до загрузки страницы или после.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комбинированное задание
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте HTML-страницу с заголовком "Все способы подключения". Используйте все три способа одновременно:
        </p>
        
        <div className="space-y-4 my-4">
          <div>
            <p className="text-gray-300 text-sm mb-1">1. Внутренний скрипт:</p>
            <div className="bg-gray-900 p-3 rounded">
              <pre className="text-yellow-300 text-xs overflow-x-auto">
                <code>{`<script>
  alert("Внутренний скрипт");
</script>`}</code>
              </pre>
            </div>
          </div>
          
          <div>
            <p className="text-gray-300 text-sm mb-1">2. Внешний файл script.js с содержимым:</p>
            <div className="bg-gray-900 p-3 rounded">
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`alert("Внешний файл");`}</code>
              </pre>
            </div>
          </div>
          
          <div>
            <p className="text-gray-300 text-sm mb-1">3. Кнопка с атрибутом:</p>
            <div className="bg-gray-900 p-3 rounded">
              <pre className="text-blue-300 text-xs overflow-x-auto">
                <code>{`<button onclick="alert('Атрибут HTML')">Кнопка</button>`}</code>
              </pre>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 mb-3">
          При открытии страницы должны появиться все три всплывающих окна по очереди.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Убедитесь, что все три способа подключения работают корректно и в правильном порядке.</p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки подключения JavaScript к HTML различными способами. Вы научились использовать внутренние и внешние скрипты, работать с атрибутами HTML и правильно размещать скрипты на странице. Это важные базовые навыки для дальнейшего изучения JavaScript!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;