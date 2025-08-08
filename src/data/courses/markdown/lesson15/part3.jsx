// src/data/courses/markdown/lesson15/part3.jsx
import React from 'react';
import { GitGraph, Share2, PieChart, Edit3 } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Edit3 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Диаграммы с Mermaid</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию диаграмм в Markdown с использованием Mermaid.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Процесс регистрации пользователя
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">user-registration.md</code> с блок-схемой процесса регистрации пользователя. Схема должна включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Начало процесса</li>
          <li>Ввод данных пользователя (имя, email, пароль)</li>
          <li>Проверка валидности данных</li>
          <li>Условие: данные корректны?</li>
          <li>Если нет - возврат к вводу данных</li>
          <li>Если да - отправка данных на сервер</li>
          <li>Получение ответа от сервера</li>
          <li>Условие: регистрация успешна?</li>
          <li>Если да - переход на главную страницу</li>
          <li>Если нет - показ ошибки</li>
          <li>Конец процесса</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 py-0.5 rounded">graph TD</code> для вертикальной блок-схемы. Для условий используйте синтаксис <code className="bg-gray-700 px-1 py-0.5 rounded">C{'{Условие}'}</code> и <code className="bg-gray-700 px-1 py-0.5 rounded">C --|Да|--> D</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Взааимодействие компонентов веб-приложения
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">web-app-architecture.md</code> с диаграммой последовательности взаимодействия компонентов веб-приложения. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Пользователь (User)</li>
          <li>Браузер (Browser)</li>
          <li>Веб-сервер (Web Server)</li>
          <li>База данных (Database)</li>
          <li>API-сервис (API Service)</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Покажите последовательность действий при загрузке главной страницы сайта:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Пользователь запрашивает главную страницу</li>
          <li>Браузер отправляет HTTP-запрос</li>
          <li>Веб-сервер получает запрос</li>
          <li>Веб-сервер запрашивает данные у API-сервиса</li>
          <li>API-сервис запрашивает данные из базы данных</li>
          <li>Данные возвращаются в API-сервис</li>
          <li>API-сервис возвращает данные веб-серверу</li>
          <li>Веб-сервер формирует HTML-страницу</li>
          <li>Веб-сервер отправляет страницу браузеру</li>
          <li>Браузер отображает страницу пользователю</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 py-0.5 rounded">sequenceDiagram</code>. Определите участников с помощью <code className="bg-gray-700 px-1 py-0.5 rounded">participant</code>. Для сообщений используйте <code className="bg-gray-700 px-1 py-0.5 rounded">A->>B: Сообщение</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Статистика посещений сайта
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">website-analytics.md</code> с круговой диаграммой статистики посещений сайта по источникам трафика. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Прямые переходы - 35%</li>
          <li>Поисковые системы - 40%</li>
          <li>Социальные сети - 15%</li>
          <li>Email-рассылки - 7%</li>
          <li>Другие источники - 3%</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Добавьте заголовок диаграммы "Источники трафика сайта".
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 py-0.5 rounded">pie</code>. Добавьте заголовок с помощью <code className="bg-gray-700 px-1 py-0.5 rounded">title</code>. Для каждого сектора используйте формат <code className="bg-gray-700 px-1 py-0.5 rounded">"Название" : значение</code>.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Структура классов в приложении
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">class-diagram.md</code> с диаграммой классов для простой системы управления задачами. Включите следующие классы:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li><strong>User</strong> с полями: id, name, email</li>
          <li><strong>Task</strong> с полями: id, title, description, status, userId</li>
          <li><strong>Project</strong> с полями: id, name, description</li>
        </ul>
        <p className="text-gray-300 mb-3">
          Добавьте связи:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>User может иметь много Task (1 к многим)</li>
          <li>Project может содержать много Task (1 к многим)</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте <code className="bg-gray-700 px-1 py-0.5 rounded">classDiagram</code>. Определите классы с помощью <code className="bg-gray-700 px-1 py-0.5 rounded">class ClassName</code>. Добавьте поля внутри класса. Для связей используйте <code className="bg-gray-700 px-1 py-0.5 rounded">ClassA --|> ClassB</code> для наследования или <code className="bg-gray-700 px-1 py-0.5 rounded">ClassA -- ClassB</code> для ассоциаций.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с диаграммами
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">mermaid-experiment.md</code>, демонстрирующий различные типы диаграмм Mermaid:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Простая горизонтальная блок-схема (<code className="bg-gray-700 px-1 py-0.5 rounded">graph LR</code>)</li>
          <li>Диаграмма Ганта (<code className="bg-gray-700 px-1 py-0.5 rounded">gantt</code>) с простым проектом из 3 задач</li>
          <li>Диаграмма состояний (<code className="bg-gray-700 px-1 py-0.5 rounded">stateDiagram</code>) для простого устройства (например, светофора)</li>
          <li>Диаграмма сущность-связь (<code className="bg-gray-700 px-1 py-0.5 rounded">erDiagram</code>) для базы данных библиотеки</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждой диаграмме, объясняя, что она демонстрирует и где может применяться.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <GitGraph className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания диаграмм в Markdown с использованием Mermaid. 
              Вы научились создавать блок-схемы, диаграммы последовательности, круговые диаграммы и диаграммы классов. 
              Mermaid - мощный инструмент для визуализации информации и создания понятной документации. 
              Эти навыки важны для технической документации, планирования проектов и объяснения архитектуры систем.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
