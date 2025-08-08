// src/data/courses/markdown/lesson16/part3.jsx
import React from 'react';
import { MessageCircle, EyeOff, Edit3, Code, FileText } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Комментарии и скрытый текст в Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию HTML-комментариев в Markdown-документах для добавления заметок и временного скрытия контента.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Документация проекта с заметками
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ <code className="bg-gray-700 px-2 py-1 rounded">project-docs.md</code> - техническую документацию для вымышленного проекта. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Техническая документация проекта TaskMaster"</li>
          <li>Раздел "Архитектура" с заголовком 2 уровня</li>
          <li>Описание архитектуры с комментарием о предстоящих изменениях</li>
          <li>Раздел "API" с заголовком 2 уровня</li>
          <li>Описание основных endpoint'ов</li>
          <li>Комментарий с TODO-задачей по добавлению нового метода</li>
          <li>Раздел "Развертывание" с заголовком 2 уровня</li>
          <li>Инструкцию по развертыванию с комментарием о временно недоступной среде</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте комментарии для объяснения сложных решений и оставления заметок для себя или коллег. Пример: <code className="bg-gray-700 px-1 py-0.5 rounded">{`<!-- TODO: Добавить описание нового endpoint'а /api/v1/tasks/bulk -->`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          План работы с черновиками
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте файл <code className="bg-gray-700 px-2 py-1 rounded">work-plan.md</code> - ваш личный план работы на неделю с черновиками и скрытым контентом. Структура:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "План работы на неделю"</li>
          <li>Раздел "Понедельник" с заголовком 2 уровня</li>
          <li>Список задач на понедельник</li>
          <li>Комментарий с идеями для вторника (временно скрыты)</li>
          <li>Раздел "Вторник" с заголовком 2 уровня</li>
          <li>Список задач на вторник</li>
          <li>Комментарий с заметками о важной встрече</li>
          <li>Скрытый раздел "Среда" с черновиком плана на среду</li>
          <li>Раздел "Четверг" и "Пятница" с задачами</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте комментарии для временного скрытия незавершенных разделов. Пример скрытого раздела: <code className="bg-gray-700 px-1 py-0.5 rounded">{`<!-- ## Среда <br> - [ ] Задача 1 <br> - [ ] Задача 2 -->`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Анализ и исправление комментариев
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен Markdown-документ с ошибками в комментариях. Найдите и исправьте все ошибки:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`# Руководство пользователя

<!-- Это основной заголовок документа --

## Введение

Добро пожаловать в наше приложение!

<!-- 
В этом разделе нужно:
1. Добавить информацию о системных требованиях
2. Уточнить минимальную версию ОС
-->

## Начало работы

Следуйте этим простым шагам:

1. <!-- Скачайте приложение с нашего сайта downloads.example.com -->
2. Установите приложение
3. <!-- Запустите приложение и следуйте инструкциям на экране -->

## <!-- Устранение неполадок -->

Если у вас возникли проблемы, обратитесь в службу поддержки.`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте исправленную версию документа в новом файле <code className="bg-gray-700 px-2 py-1 rounded">corrected-comments.md</code> и объясните найденные ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на: правильное закрытие комментариев, синтаксис многострочных комментариев, использование комментариев внутри списков, комментарии в заголовках.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Коллаборативная документация
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">team-docs.md</code> - совместную документацию для команды разработчиков. Включите:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня "Документация для команды разработки"</li>
          <li>Раздел "Соглашения по коду" с заголовком 2 уровня</li>
          <li>Описание соглашений с комментариями о предстоящих обсуждениях</li>
          <li>Раздел "Инструменты" с заголовком 2 уровня</li>
          <li>Список используемых инструментов</li>
          <li>Комментарии с пояснениями для новых членов команды</li>
          <li>Раздел "Процесс разработки" с заголовком 2 уровня</li>
          <li>Описание процесса с комментариями о временных изменениях</li>
          <li>Скрытый раздел с черновиком нового процесса</li>
          <li>Раздел "Контакты" с контактной информацией и комментариями</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте комментарии для объяснения принятых решений и указания на области, требующие обсуждения. Пример: <code className="bg-gray-700 px-1 py-0.5 rounded">{`<!-- ВНИМАНИЕ: Этот процесс будет изменен с 1 июня. Смотрите RFC-123 -->`}</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с комментариями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">comment-experiment.md</code>, демонстрирующий различные способы использования комментариев:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Однострочные комментарии в разных частях документа</li>
          <li>Многострочные комментарии с разной длиной текста</li>
          <li>Комментарии внутри списков</li>
          <li>Комментарии внутри абзацев</li>
          <li>Комментарии с TODO-метками</li>
          <li>Комментарии с предупреждениями и важными замечаниями</li>
          <li>Скрытый контент различного типа</li>
          <li>Комментарии с различными уровнями вложенности</li>
        </ul>
        <p className="text-gray-300">
          Добавьте пояснения к каждому примеру, объясняя, когда и почему вы использовали тот или иной тип комментария.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <MessageCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования комментариев в Markdown-документах. 
              Вы научились добавлять личные заметки, временно скрывать контент и использовать комментарии для совместной работы. 
              Помните, что комментарии видны в исходном коде документа, поэтому не используйте их для скрытия конфиденциальной информации.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
