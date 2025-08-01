// src/data/courses/html/lesson18/part1.jsx
import React from 'react';
import { Accessibility, Eye, Ear, User, Brain, Hash, FileText, Tag, Settings } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Accessibility className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">♿ Урок 18: Доступность (a11y) и ARIA</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание инклюзивных веб-сайтов</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить <span className="font-medium">основы веб-доступности</span> (Accessibility, a11y), научиться использовать атрибуты <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">alt</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">title</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">role</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">aria-label</code> и другие <span className="font-medium">ARIA-атрибуты</span> для создания <span className="font-medium">доступных</span> веб-сайтов, удобных для <span className="font-medium">людей с ограниченными возможностями</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое веб-доступность */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <User className="w-5 h-5 text-green-400" />
          Что такое веб-доступность (Accessibility)?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Веб-доступность</span> (или a11y, где 11 — количество букв между 'a' и 'y' в слове accessibility) — это практика создания веб-сайтов, которые <span className="font-medium">могут эффективно использовать</span> <span className="font-medium">все люди</span>, включая тех, у кого есть <span className="font-medium">ограниченные возможности</span>.
          </p>
          <p>
            Доступность важна, потому что:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Это <span className="font-medium">моральная обязанность</span> — обеспечить равный доступ к информации.</li>
            <li>Это <span className="font-medium">законодательное требование</span> во многих странах.</li>
            <li>Это <span className="font-medium">улучшает UX</span> для всех пользователей.</li>
            <li>Это <span className="font-medium">улучшает SEO</span> — поисковики лучше понимают структуру сайта.</li>
          </ul>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем это нужно?</span>
            <span>
              Представьте, что вы пытаетесь использовать сайт, но не можете видеть экран (используете скринридер), двигать мышью (управляете с клавиатуры) или различать цвета. Доступность — это как <span className="font-medium">пандус</span> для веба: она обеспечивает <span className="font-medium">равный доступ</span> к информации и функциональности для всех.
            </span>
          </p>
        </div>
      </div>

      {/* Кто такие пользователи с ограниченными возможностями */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Brain className="w-5 h-5 text-purple-400" />
          Кто такие пользователи с ограниченными возможностями?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">Нарушения зрения</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Слепота</span> — используют скринридеры (NVDA, JAWS, VoiceOver).</li>
              <li><span className="font-medium">Слабовидящие</span> — увеличивают шрифты, используют контрастные темы.</li>
              <li><span className="font-medium">Цветовая слепота</span> — не различают определенные цвета.</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Ear className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-bold text-orange-300">Нарушения слуха</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Глухота</span> — нуждаются в субтитрах к видео и аудио.</li>
              <li><span className="font-medium">Снижение слуха</span> — нуждаются в увеличенном громкости или визуальных сигналах.</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <User className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Нарушения моторики</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Невозможность использования мыши</span> — навигация только с клавиатуры.</li>
              <li><span className="font-medium">Тремор</span> — затруднено точное наведение курсора.</li>
              <li><span className="font-medium">Ограниченная подвижность</span> — использование специальных устройств ввода.</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-bold text-cyan-300">Когнитивные нарушения</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Дислексия</span> — затруднено чтение текста, нужен простой шрифт.</li>
              <li><span className="font-medium">СДВГ</span> — нужна четкая структура и минимизация отвлекающих факторов.</li>
              <li><span className="font-medium">Эпилепсия</span> — необходимо избегать мерцающих элементов.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Основные принципы доступности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-blue-400" />
          Основные принципы доступности (POUR)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Основные принципы доступности описываются аббревиатурой <span className="font-medium">POUR</span>:
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <span className="text-green-400 font-bold">P</span>
              </div>
              <h3 className="font-bold text-green-300">Perceivable (Воспринимаемость)</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Информация и пользовательский интерфейс должны быть <span className="font-medium">представлены</span> пользователям в <span className="font-medium">воспринимаемой форме</span>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mt-2">
              <li>Альтернативный текст для изображений</li>
              <li>Контрастные цвета</li>
              <li>Субтитры к видео</li>
              <li>Адаптивный дизайн</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <span className="text-orange-400 font-bold">O</span>
              </div>
              <h3 className="font-bold text-orange-300">Operable (Управляемость)</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Пользовательский интерфейс и навигация должны быть <span className="font-medium">управляемы</span>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mt-2">
              <li>Навигация с клавиатуры</li>
              <li>Достаточное время для чтения</li>
              <li>Отсутствие мерцающих элементов</li>
              <li>Понятная навигация</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <span className="text-purple-400 font-bold">U</span>
              </div>
              <h3 className="font-bold text-purple-300">Understandable (Понятность)</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Информация и управление сайтом должны быть <span className="font-medium">понятны</span>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mt-2">
              <li>Предсказуемая навигация</li>
              <li>Понятные инструкции</li>
              <li>Помощь при ошибках ввода</li>
              <li>Последовательная структура</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <span className="text-cyan-400 font-bold">R</span>
              </div>
              <h3 className="font-bold text-cyan-300">Robust (Надежность)</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Содержимое должно быть достаточно <span className="font-medium">надежным</span>, чтобы <span className="font-medium">поддерживаться</span> различными <span className="font-medium">вспомогательными технологиями</span>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mt-2">
              <li>Валидный HTML</li>
              <li>Совместимость с различными браузерами</li>
              <li>Правильное использование семантики</li>
              <li>Поддержка ARIA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Основные атрибуты доступности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Tag className="w-5 h-5 text-orange-400" />
          Основные атрибуты доступности
        </h2>
        
        {/* alt */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Hash className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-orange-300">alt</code> — Альтернативный текст
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Атрибут <code className="bg-gray-700 px-1 rounded text-orange-300">alt</code> предоставляет <span className="font-medium">текстовое описание</span> изображения для пользователей, которые не могут его видеть.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <p className="text-xs text-gray-400 mb-2">Правильное использование:</p>
              <pre className="text-orange-300 text-xs overflow-x-auto">
                <code>{`<!-- Информативное изображение -->
<img src="warning.png" alt="Предупреждение: высокое напряжение">

<!-- Декоративное изображение -->
<img src="decoration.jpg" alt="">

<!-- Изображение в ссылке -->
<a href="/products">
  <img src="product.jpg" alt="Ноутбук Dell XPS 13">
</a>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <p className="text-xs text-gray-400 mb-2">Почему это важно:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Скринридеры читают текст из <code className="bg-gray-700 px-1 rounded">alt</code></li>
                <li>Помогает при медленном интернете (изображения не загрузились)</li>
                <li>Улучшает SEO</li>
                <li>Для декоративных изображений используйте <code className="bg-gray-700 px-1 rounded">alt=""</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* title */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-green-300">title</code> — Всплывающая подсказка
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Атрибут <code className="bg-gray-700 px-1 rounded text-green-300">title</code> отображает <span className="font-medium">всплывающую подсказку</span> при наведении курсора. Не является основным средством доступности.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример использования:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`<a href="/help" title="Помощь и поддержка">
  <img src="help-icon.png" alt="Помощь">
</a>

<input type="text" title="Введите ваше имя" placeholder="Имя">`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <p className="text-xs text-gray-400 mb-2">Ограничения:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Не читается скринридерами в большинстве случаев</li>
                <li>Не видна при навигации с клавиатуры</li>
                <li>Не подходит для критической информации</li>
                <li>Используйте для дополнительной информации</li>
              </ul>
            </div>
          </div>
        </div>

        {/* aria-label */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Tag className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-purple-300">aria-label</code> — Доступная метка
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Атрибут <code className="bg-gray-700 px-1 rounded text-purple-300">aria-label</code> предоставляет <span className="font-medium">доступную метку</span> для элементов, которые не имеют видимого текста.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример использования:</p>
              <pre className="text-purple-300 text-xs overflow-x-auto">
                <code>{`<button aria-label="Закрыть окно">
  <img src="close-icon.png" alt="">
</button>

<nav aria-label="Основная навигация">
  <ul>
    <li><a href="/">Главная</a></li>
    <li><a href="/about">О нас</a></li>
  </ul>
</nav>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <p className="text-xs text-gray-400 mb-2">Когда использовать:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Для иконок без текста</li>
                <li>Для навигационных секций</li>
                <li>Когда видимый текст неясен</li>
                <li>Для кнопок с одними иконками</li>
              </ul>
            </div>
          </div>
        </div>

        {/* role */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Settings className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">role</code> — Роль элемента
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Атрибут <code className="bg-gray-700 px-1 rounded text-cyan-300">role</code> определяет <span className="font-medium">тип элемента</span> для вспомогательных технологий, когда HTML-семантика недостаточна.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример использования:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                <code>{`<div role="banner">
  <!-- Шапка сайта -->
</div>

<div role="navigation" aria-label="Основная навигация">
  <!-- Навигационное меню -->
</div>

<div role="main">
  <!-- Основное содержимое -->
</div>

<div role="complementary">
  <!-- Боковая панель -->
</div>

<div role="contentinfo">
  <!-- Подвал сайта -->
</div>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <p className="text-xs text-gray-400 mb-2">Когда использовать:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Когда семантические теги HTML недоступны</li>
                <li>Для кастомных компонентов</li>
                <li>Для уточнения роли элемента</li>
                <li>Не используйте, если есть подходящий HTML-тег</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Практические рекомендации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Accessibility className="w-5 h-5 text-green-400" />
          Практические рекомендации по доступности
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Accessibility className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">HTML и семантика</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Используйте семантические теги (<code className="bg-gray-700 px-1 rounded">{'<header>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<article>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>)</li>
              <li>Правильная иерархия заголовков (<code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> - <code className="bg-gray-700 px-1 rounded">{'<h6>'}</code>)</li>
              <li>Связывайте <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> с полями ввода через <code className="bg-gray-700 px-1 rounded">for</code> и <code className="bg-gray-700 px-1 rounded">id</code></li>
              <li>Добавляйте <code className="bg-gray-700 px-1 rounded">alt</code> ко всем информативным изображениям</li>
              <li>Используйте <code className="bg-gray-700 px-1 rounded">lang</code> в теге <code className="bg-gray-700 px-1 rounded">{'<html>'}</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold text-blue-300">ARIA и расширенная доступность</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Используйте <code className="bg-gray-700 px-1 rounded">aria-label</code> для элементов без текста</li>
              <li>Применяйте <code className="bg-gray-700 px-1 rounded">aria-describedby</code> для дополнительных описаний</li>
              <li>Используйте <code className="bg-gray-700 px-1 rounded">role</code> только когда HTML-семантика недостаточна</li>
              <li>Добавляйте <code className="bg-gray-700 px-1 rounded">aria-hidden="true"</code> для декоративных элементов</li>
              <li>Используйте <code className="bg-gray-700 px-1 rounded">aria-live</code> для динамически обновляемого контента</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Советы по тестированию:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Протестируйте навигацию с клавиатуры (Tab, Enter, Esc)</li>
                <li>Используйте скринридеры (NVDA, JAWS, VoiceOver)</li>
                <li>Проверьте контрастность цветов (минимум 4.5:1 для обычного текста)</li>
                <li>Отключите CSS и JavaScript — сайт должен оставаться понятным</li>
                <li>Используйте инструменты разработчика для проверки доступности</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Accessibility className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое <span className="font-medium text-purple-300">веб-доступность</span> (a11y) и почему она <span className="font-medium text-green-300">важна</span> для всех пользователей. Вы изучили <span className="font-medium text-orange-300">основные принципы</span> доступности (POUR), познакомились с <span className="font-medium text-cyan-300">различными типами</span> ограниченных возможностей, освоили ключевые <span className="font-medium text-blue-300">атрибуты доступности</span> (<code className="bg-gray-700 px-1 rounded">alt</code>, <code className="bg-gray-700 px-1 rounded">title</code>, <code className="bg-gray-700 px-1 rounded">aria-label</code>, <code className="bg-gray-700 px-1 rounded">role</code>) и получили <span className="font-medium text-yellow-300">практические рекомендации</span> по созданию инклюзивных веб-сайтов. Доступность — это не просто техническое требование, это <span className="font-medium text-red-300">моральная обязанность</span> и <span className="font-medium text-purple-300">профессиональный стандарт</span> современной веб-разработки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;