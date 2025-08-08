// src/data/courses/markdown/lesson12/part3.jsx
import React from 'react';
import { Anchor, Hash, Link, BookOpen, Edit3 } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Якорные ссылки в Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию якорных ссылок внутри Markdown-документов, освоить преобразование заголовков в якоря и применять для навигации.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Создание документации с оглавлением
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">documentation.md</code> - руководство пользователя для вымышленного приложения. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Руководство пользователя приложения TaskMaster"</li>
          <li>Раздел "Оглавление" с заголовком 2 уровня</li>
          <li>Список ссылок на все основные разделы документа</li>
          <li>Разделы: "Введение", "Установка", "Основные функции", "Расширенные возможности", "Устранение неполадок", "Часто задаваемые вопросы", "Заключение"</li>
          <li>Каждый раздел должен иметь заголовок 2 уровня</li>
          <li>Используйте якорные ссылки для навигации из оглавления</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример оглавления: - [Введение](#введение). Убедитесь, что якоря соответствуют заголовкам с точностью до регистра и символов.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Создание технической статьи с навигацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">tech-article.md</code> - техническую статью "Современные подходы к веб-разработке". Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня с названием статьи</li>
          <li>Краткое введение с навигационными ссылками: "Перейти к: [Фронтенд](#фронтенд) | [Бэкенд](#бэкенд) | [Инструменты](#инструменты)"</li>
          <li>Разделы: "Фронтенд", "Бэкенд", "Инструменты разработки", "Тренды 2024 года"</li>
          <li>Каждый раздел должен иметь заголовок 2 уровня</li>
          <li>Внутри разделов создайте подразделы с заголовками 3 уровня</li>
          <li>Добавьте ссылки на подразделы внутри основных разделов</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте якорные ссылки для создания внутренней навигации. Пример: [React](#react-и-его-особенности)</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Анализ и исправление якорных ссылок
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен Markdown-документ с ошибками в якорных ссылках. Найдите и исправьте все ошибки:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`# Руководство по Markdown

## Оглавление
- [Введение](#Введение)
- [Основы](#основы)
- [Продвинутые возможности](#advanced-features)
- [Заключение](#заключение-2024)

## Введение
Текст введения...

## Основы
Основной текст...

## Продвинутые возможности
Продвинутый текст...

## Заключение 2024
Заключительный текст...`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте исправленную версию документа в новом файле <code className="bg-gray-700 px-2 py-1 rounded">corrected-anchors.md</code> и объясните найденные ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на: соответствие регистра в якорях, правильное преобразование специальных символов, пробелы в заголовках.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Создание многоуровневой навигации
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">multi-level-nav.md</code> - подробное руководство по программированию с многоуровневой навигацией. Требования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Полное руководство по программированию"</li>
          <li>Главное оглавление с ссылками на разделы 1-4 уровня</li>
          <li>Разделы: "Начало работы", "Основы языка", "Продвинутые концепции", "Практические проекты"</li>
          <li>Каждый раздел должен иметь подразделы (заголовки 3 уровня)</li>
          <li>Добавьте навигацию "Наверх" в конце каждого основного раздела</li>
          <li>Создайте перекрестные ссылки между связанными разделами</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Пример навигации "Наверх": [↑ К оглавлению](#Оглавление). Используйте якоря для создания связей между разделами.</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с якорными ссылками
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">anchor-experiment.md</code>, демонстрирующий различные аспекты работы якорных ссылок:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовки с различными символами (русские, английские, цифры, специальные символы)</li>
          <li>Заголовки с несколькими пробелами подряд</li>
          <li>Заголовки с кодом внутри (`функция`)</li>
          <li>Заголовки с одинаковыми названиями (посмотрите, как обрабатываются дубликаты)</li>
          <li>Якорные ссылки на все эти заголовки</li>
          <li>Примеры правильных и неправильных якорных ссылок</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждому примеру, объясняя, как происходит преобразование заголовков в якоря.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Anchor className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания якорных ссылок в Markdown. 
              Вы научились преобразовывать заголовки в якоря, создавать навигацию по документам и использовать якорные ссылки для улучшения пользовательского опыта. 
              Якорные ссылки - важный инструмент для структурирования длинных документов и создания удобной навигации.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
