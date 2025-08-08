// src/data/courses/markdown/lesson5/part3.jsx
import React from 'react';
import { Hash, Minus, ListOrdered, BookOpen, Edit3 } from 'lucide-react';

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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Заголовки и навигация в Markdown</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по использованию заголовков и разделителей в Markdown, создавая структурированные документы.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Структура технической документации
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте Markdown-документ, представляющий собой руководство "Как начать работать с Markdown". Документ должен включать:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня - название руководства</li>
          <li>Раздел "Введение" с заголовком 2 уровня и абзацем описания</li>
          <li>Раздел "Основы" с заголовком 2 уровня</li>
          <li>Подразделы "Что такое Markdown" и "Преимущества" с заголовками 3 уровня</li>
          <li>Раздел "Начало работы" с заголовком 2 уровня</li>
          <li>Подраздел "Установка редактора" с заголовком 3 уровня</li>
          <li>Подраздел "Первые шаги" с заголовком 4 уровня</li>
          <li>Раздел "Заключение" с заголовком 2 уровня</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Следите за логической иерархией заголовков. После H2 должен идти H3, а не H4. Используйте только один заголовок H1 в документе.</p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Создание оглавления с разделителями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ "Мой учебный план", используя заголовки и разделители для структурирования:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня - "Учебный план на месяц"</li>
          <li>Раздел "Технологии" с заголовком 2 уровня</li>
          <li>Список курсов по изучению (HTML, CSS, JavaScript) с заголовками 3 уровня</li>
          <li>После каждого курса добавьте горизонтальный разделитель</li>
          <li>Раздел "Проекты" с заголовком 2 уровня</li>
          <li>Список планируемых проектов с заголовками 3 уровня</li>
          <li>Используйте разные способы создания разделителей (---, ***, ___)</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Разделители помогают визуально отделить логические блоки информации. Экспериментируйте с разными типами разделителей.</p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Анализ и исправление структуры
        </h3>
        <p className="text-gray-300 mb-3">
          Ниже приведен Markdown-документ с ошибками в структуре. Найдите и исправьте все ошибки:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg my-3">
          <pre className="text-red-300 text-sm">
            <code>{`# Добро пожаловать в мир программирования

## Основы

### Что такое программирование
Программирование - это процесс создания инструкций для компьютера.

##### Языки программирования
Существует множество языков программирования.

## Переменные и типы данных
----

### Что такое переменная
Переменная - это контейнер для хранения данных.

# Основы HTML
HTML - это язык разметки для создания веб-страниц.`}</code>
          </pre>
        </div>
        <p className="text-gray-300 mb-3">
          Создайте исправленную версию документа в новом файле <code className="bg-gray-700 px-2 py-1 rounded">corrected-structure.md</code> и объясните найденные ошибки.
        </p>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Обратите внимание на: количество заголовков H1, иерархию уровней заголовков, правильное использование разделителей.</p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Создание документа с навигацией
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ "Руководство по веб-разработке" с оглавлением и якорными ссылками:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Заголовок 1 уровня - название руководства</li>
          <li>Оглавление с ссылками на все разделы (используйте синтаксис <code className="bg-gray-700 px-1 py-0.5 rounded">[Текст](#якорь)</code>)</li>
          <li>Разделы: "Введение", "HTML", "CSS", "JavaScript", "Заключение" (все с заголовками 2 уровня)</li>
          <li>Каждый раздел должен содержать 2-3 абзаца текста</li>
          <li>Проверьте работу ссылок в предпросмотре</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Якоря создаются автоматически на основе текста заголовков (в нижнем регистре, пробелы заменяются дефисами). Например, для заголовка "## Введение" якорь будет "#введение".</p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Эксперимент с различными стилями заголовков
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте документ <code className="bg-gray-700 px-2 py-1 rounded">header-experiment.md</code>, демонстрирующий оба способа создания заголовков:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Создайте заголовки 1 и 2 уровней обоими способами (с решетками и с подчеркиванием)</li>
          <li>Добавьте пояснения к каждому способу</li>
          <li>Используйте все три типа разделителей (---, ***, ___) между примерами</li>
          <li>Сравните визуальный результат в предпросмотре</li>
        </ul>
        <p className="text-gray-300">
          Сделайте вывод о том, какой способ предпочтительнее и почему.
        </p>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Hash className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки использования заголовков и разделителей в Markdown. 
              Вы научились создавать логическую структуру документов, использовать якорные ссылки и правильно организовывать контент. 
              Эти навыки важны для создания читаемых и профессиональных документов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
