// src/data/courses/css/lesson17/part1.jsx
import React from 'react';
import { FolderTree, Archive, FileText, Package, Tag, Layers } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FolderTree className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🗄️ Урок 17: Как организовать CSS-код</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Структура и организация CSS для больших проектов</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить методы организации CSS-кода для поддержания чистоты, масштабируемости и удобства сопровождения в проектах любого размера.
            </p>
          </div>
        </div>
      </div>

      {/* Проблема неорганизованного CSS */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Archive className="w-5 h-5 text-red-400" />
          Проблема неорганизованного CSS
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            По мере роста веб-проекта CSS-файл может разрастись до тысячи строк кода. Без четкой структуры это приводит к множеству проблем:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li><span className="font-medium text-red-300">Сложность поиска:</span> Трудно найти нужные стили среди хаоса</li>
            <li><span className="font-medium text-orange-300">Конфликты стилей:</span> Непредсказуемое поведение из-за каскада</li>
            <li><span className="font-medium text-yellow-300">Дублирование кода:</span> Один и тот же стиль повторяется в разных местах</li>
            <li><span className="font-medium text-green-300">Сложность командной работы:</span> Коллеги не понимают чужой код</li>
            <li><span className="font-medium text-blue-300">Трудности сопровождения:</span> Внесение изменений становится рискованным</li>
          </ul>
        </div>
        <div className="mt-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
          <p className="text-red-300 text-sm flex items-start gap-2">
            <span className="font-medium">⚠️ Симптомы проблемы:</span>
            <span>
              "Я боюсь изменить этот CSS, потому что не знаю, что сломается", "Где вообще используется этот класс?", "Почему мой стиль не применяется?".
            </span>
          </p>
        </div>
      </div>

      {/* Методология BEM */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-green-400" />
          Методология BEM (Block Element Modifier)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">BEM</span> (Block Element Modifier) — это популярная методология именования CSS-классов, разработанная в Яндексе. Она помогает создавать понятный и масштабируемый CSS.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <Package className="w-4 h-4 text-green-400" />
              Блок (Block)
            </h3>
            <p className="text-gray-300 text-sm">
              Независимая часть страницы или переиспользуемый компонент.
            </p>
            <div className="mt-2 bg-gray-800 p-2 rounded text-xs">
              <code className="text-gray-300">.header</code>, <code className="text-gray-300">.menu</code>, <code className="text-gray-300">.button</code>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              Элемент (Element)
            </h3>
            <p className="text-gray-300 text-sm">
              Часть блока, которая не может существовать отдельно от него.
            </p>
            <div className="mt-2 bg-gray-800 p-2 rounded text-xs">
              <code className="text-gray-300">.header__logo</code>, <code className="text-gray-300">.menu__item</code>, <code className="text-gray-300">.button__icon</code>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <Tag className="w-4 h-4 text-purple-400" />
              Модификатор (Modifier)
            </h3>
            <p className="text-gray-300 text-sm">
              Свойство блока или элемента, меняющее его внешний вид или поведение.
            </p>
            <div className="mt-2 bg-gray-800 p-2 rounded text-xs">
              <code className="text-gray-300">.button--primary</code>, <code className="text-gray-300">.menu__item--active</code>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Синтаксис BEM:</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`/* Блок */
.block {}

/* Элемент */
.block__element {}

/* Модификатор */
.block--modifier {}
.block__element--modifier {}`}
            </pre>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Преимущества BEM:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Понятная структура именования</li>
              <li>Уменьшение конфликтов стилей</li>
              <li>Легкость чтения и понимания кода</li>
              <li>Простота реиспользования компонентов</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример использования:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.card { /* Блок карточки */ }
.card__title { /* Элемент: заголовок карточки */ }
.card__content { /* Элемент: содержимое карточки */ }
.card--featured { /* Модификатор: выделенная карточка */ }
.card__title--large { /* Модификатор: большой заголовок */ }`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Архитектурные подходы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-purple-400" />
          Архитектурные подходы к организации CSS
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Существуют различные архитектурные методологии для структурирования CSS-кода:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* SMACSS */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              SMACSS (Scalable and Modular Architecture for CSS)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Методология, предлагающая разделение стилей на 5 категорий:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="font-medium text-white text-xs mb-1">Base</p>
                <p className="text-gray-400 text-xs">Базовые стили (reset, typography)</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="font-medium text-white text-xs mb-1">Layout</p>
                <p className="text-gray-400 text-xs">Стили макета (.header, .sidebar)</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="font-medium text-white text-xs mb-1">Module</p>
                <p className="text-gray-400 text-xs">Компоненты (.card, .button)</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="font-medium text-white text-xs mb-1">State</p>
                <p className="text-gray-400 text-xs">Состояния (.is-hidden, .is-active)</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="font-medium text-white text-xs mb-1">Theme</p>
                <p className="text-gray-400 text-xs">Темы оформления</p>
              </div>
            </div>
          </div>

          {/* ITCSS */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3 flex items-center gap-2">
              <FolderTree className="w-5 h-5 text-green-400" />
              ITCSS (Inverted Triangle CSS)
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Архитектура, организующая CSS в форме перевернутого треугольника по принципу_specificity_:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Settings (переменные)</li>
                  <li>Tools (миксины, функции)</li>
                  <li>Generic (normalize, reset)</li>
                  <li>Elements (базовые стили тегов)</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Objects (OOCSS-объекты)</li>
                  <li>Components (компоненты интерфейса)</li>
                  <li>Utilities (утилиты, переопределяющие всё)</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
              💡 <span className="font-medium">Принцип:</span> От общего к частному, от низкой специфичности к высокой.
            </div>
          </div>
        </div>
      </div>

      {/* Практические методы организации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          Практические методы организации CSS
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Независимо от выбранной методологии, существуют универсальные практики, которые помогут поддерживать порядок в CSS:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Комментарии и разделение */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="text-lg font-bold text-orange-300 mb-3">1. Комментарии и разделение кода</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Хорошо:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`/* ================================
   ОСНОВНЫЕ СТИЛИ СТРАНИЦЫ
   ================================ */

/* --- Шапка сайта --- */
.header {
  /* стили шапки */
}

/* --- Навигация --- */
.navigation {
  /* стили навигации */
}

/* ================================
   КОМПОНЕНТЫ
   ================================ */

/* --- Кнопки --- */
.btn {
  /* базовые стили кнопки */
}

.btn--primary {
  /* стили основной кнопки */
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Плохо:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.header { /* без комментариев */ }
.navigation { }
.btn { }
.btn--primary { }
.some-class { }
.random-selector { }`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Разделение на файлы */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3">2. Разделение на файлы</h3>
            <p className="text-gray-300 text-sm mb-3">
              Для больших проектов CSS разбивается на несколько файлов:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Структура проекта:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`styles/
├── base/
│   ├── _reset.css
│   └── _typography.css
├── components/
│   ├── _buttons.css
│   ├── _cards.css
│   └── _forms.css
├── layout/
│   ├── _header.css
│   ├── _sidebar.css
│   └── _footer.css
├── utilities/
│   ├── _helpers.css
│   └── _variables.css
└── main.css`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Сборка (main.css):</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`/* Главный файл, собирающий все стили */
@import 'base/reset';
@import 'base/typography';
@import 'utilities/variables';
@import 'layout/header';
@import 'components/buttons';
/* ... остальные импорты ... */`}
                  </pre>
                </div>
                <div className="mt-3 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
                  💡 <span className="font-medium">Совет:</span> Используйте префиксы "_" для файлов-частей, чтобы отличать их от основных файлов.
                </div>
              </div>
            </div>
          </div>

          {/* Группировка по функциональности */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-indigo-700/30">
            <h3 className="text-lg font-bold text-indigo-300 mb-3">3. Группировка по функциональности</h3>
            <p className="text-gray-300 text-sm mb-3">
              Организуйте CSS по логическим блокам, а не по типам свойств:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">Лучше (по компонентам):</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`/* Карточка продукта */
.product-card {
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.product-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-card__title {
  font-size: 1.2em;
  margin: 10px;
}

.product-card__price {
  font-weight: bold;
  color: #e74c3c;
  margin: 0 10px 10px;
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Хуже (по свойствам):</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`/* Смешанные стили */
.flex-column { display: flex; flex-direction: column; }
.white-bg { background: white; }
.rounded-8 { border-radius: 8px; }
.font-large { font-size: 1.2em; }
.bold-red { font-weight: bold; color: #e74c3c; }`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <FolderTree className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🗄️</h3>
            <p className="text-gray-300">
              Теперь вы знаете основные методы организации CSS-кода. Эти подходы помогут вам создавать чистые, масштабируемые и легко поддерживаемые стили даже в самых больших проектах. В следующем уроке мы рассмотрим инструменты сборки CSS и препроцессоры.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;