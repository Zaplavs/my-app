// src/data/courses/css/lesson17/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, Eye, CheckCircle, FolderTree, Tag, Layers } from 'lucide-react';

const Part3 = () => {
  const [completedTasks, setCompletedTasks] = useState({
    task1: false,
    task2: false,
    task3: false
  });

  const handleTaskComplete = (task) => {
    setCompletedTasks(prev => ({
      ...prev,
      [task]: !prev[task]
    }));
  };

  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Monitor className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Организация CSS-кода</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Потренироваться применять методологии и подходы для организации CSS-кода.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Применение методологии BEM */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-green-400" />
          Задание 1: Именование классов по методологии BEM
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Перепишите приведенный ниже HTML-код, применив методологию именования классов BEM:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Исходный HTML (без BEM):</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`<div class="news-card">
  <img class="image" src="news.jpg" alt="Новость">
  <h3 class="title">Заголовок новости</h3>
  <p class="text">Текст новости...</p>
  <a class="read-more button primary" href="#">Читать далее</a>
</div>`}
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Задание:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Определите, что является <span className="font-medium">блоком</span> (например, news-card)</li>
              <li>Определите, какие элементы принадлежат этому блоку (например, image, title, text, button)</li>
              <li>Определите, какие модификаторы используются (например, primary для кнопки)</li>
              <li>Перепишите классы в соответствии с BEM</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`<div class="news-card">
  <img class="news-card__image" src="news.jpg" alt="Новость">
  <h3 class="news-card__title">Заголовок новости</h3>
  <p class="news-card__text">Текст новости...</p>
  <a class="news-card__button news-card__button--primary" href="#">Читать далее</a>
</div>`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task1"
            checked={completedTasks.task1}
            onChange={() => handleTaskComplete('task1')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task1" className="ml-2 text-gray-300">
            Я применил методологию BEM для именования классов
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Структурирование CSS по SMACSS */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-purple-400" />
          Задание 2: Организация стилей по методологии SMACSS
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Разделите приведенный ниже CSS-код на логические категории согласно методологии SMACSS:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Исходный CSS:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`/* Стили сброса */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* Основные стили тегов */
body { font-family: Arial, sans-serif; line-height: 1.6; }

/* Макет */
.header { background: #333; color: white; padding: 1rem; }
.sidebar { width: 250px; float: left; }
.main-content { margin-left: 270px; }

/* Компоненты */
.button { display: inline-block; padding: 0.5rem 1rem; border: none; }
.card { background: white; border: 1px solid #ddd; padding: 1rem; margin-bottom: 1rem; }

/* Состояния */
.is-hidden { display: none; }
.is-active { background: #007bff; }

/* Утилиты */
.text-center { text-align: center; }
.mt-20 { margin-top: 20px; }`}
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Задание:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Разделите код на 5 категорий SMACSS: Base, Layout, Module, State, Utility</li>
              <li>Создайте комментарии-разделители для каждой категории</li>
              <li>Укажите, какие стили к какой категории относятся</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`/* ========================================
   BASE - Базовые стили
   ======================================== */

* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; line-height: 1.6; }


/* ========================================
   LAYOUT - Макет
   ======================================== */

.header { background: #333; color: white; padding: 1rem; }
.sidebar { width: 250px; float: left; }
.main-content { margin-left: 270px; }


/* ========================================
   MODULE - Компоненты
   ======================================== */

.button { display: inline-block; padding: 0.5rem 1rem; border: none; }
.card { background: white; border: 1px solid #ddd; padding: 1rem; margin-bottom: 1rem; }


/* ========================================
   STATE - Состояния
   ======================================== */

.is-hidden { display: none; }
.is-active { background: #007bff; }


/* ========================================
   UTILITY - Утилиты
   ======================================== */

.text-center { text-align: center; }
.mt-20 { margin-top: 20px; }`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task2"
            checked={completedTasks.task2}
            onChange={() => handleTaskComplete('task2')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task2" className="ml-2 text-gray-300">
            Я организовал CSS по методологии SMACSS
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Разделение на файлы */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FolderTree className="w-5 h-5 text-cyan-400" />
          Задание 3: Структура проекта с разделением CSS-файлов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте структуру папок и файлов для CSS-проекта с разделением на логические части:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Задание:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте структуру папок для проекта со следующими категориями: base, layout, components, utilities</li>
              <li>В каждой папке создайте по 2-3 соответствующих файла .css</li>
              <li>Создайте главный файл main.css, который будет импортировать все части</li>
              <li>Используйте префикс подчеркивания (_) для файлов-частей</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`styles/
├── base/
│   ├── _reset.css
│   ├── _typography.css
│   └── _variables.css
├── layout/
│   ├── _header.css
│   ├── _sidebar.css
│   └── _footer.css
├── components/
│   ├── _buttons.css
│   ├── _cards.css
│   └── _forms.css
├── utilities/
│   ├── _helpers.css
│   └── _spacing.css
└── main.css`}
              </pre>
            </div>
            <div className="mt-3 bg-indigo-900/20 p-3 rounded border border-indigo-700/30">
              <p className="text-indigo-300 text-xs">
                💡 <span className="font-medium">Содержимое main.css:</span>
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded mt-1 text-xs">
{`@import 'base/reset';
@import 'base/typography';
@import 'base/variables';
@import 'layout/header';
@import 'layout/sidebar';
@import 'layout/footer';
@import 'components/buttons';
@import 'components/cards';
@import 'components/forms';
@import 'utilities/helpers';
@import 'utilities/spacing';`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task3"
            checked={completedTasks.task3}
            onChange={() => handleTaskComplete('task3')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task3" className="ml-2 text-gray-300">
            Я создал структуру проекта с разделением CSS-файлов
          </label>
          {completedTasks.task3 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
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
              Теперь вы потренировались применять различные методы организации CSS-кода. Эти навыки необходимы для создания чистых, масштабируемых и легко поддерживаемых стилей в проектах любого размера. В следующем уроке мы рассмотрим инструменты сборки CSS и препроцессоры.
            </p>
            {Object.values(completedTasks).every(task => task) && (
              <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-green-300">Все задания выполнены! Вы готовы к следующему уроку.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;