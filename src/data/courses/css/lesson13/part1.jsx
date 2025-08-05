// src/data/courses/css/lesson13/part1.jsx
import React from 'react';
import { Ruler, Square, Percent, Type, Monitor } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Ruler className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📏 Урок 13: Единицы измерения: px, em, rem, %, vw и др.</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Понимание и применение различных единиц измерения в CSS</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить основные единицы измерения CSS и понять, когда и какие использовать для создания гибких и адаптивных веб-дизайнов.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем нужны разные единицы измерения? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Ruler className="w-5 h-5 text-green-400" />
          Зачем нужны разные единицы измерения?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В CSS существует множество единиц измерения для задания размеров элементов, шрифтов, отступов и т.д. Выбор правильной единицы критически важен для:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Адаптивности:</span> Как элементы будут вести себя на экранах разного размера</li>
            <li><span className="font-medium">Доступности:</span> Как элементы будут масштабироваться при изменении настроек пользователя</li>
            <li><span className="font-medium">Поддержки:</span> Насколько легко будет управлять размерами в проекте</li>
          </ul>
        </div>
      </div>

      {/* Абсолютные единицы измерения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Square className="w-5 h-5 text-purple-400" />
          Абсолютные единицы измерения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">Абсолютные единицы</span> представляют фиксированные значения, которые не зависят от других элементов или настроек пользователя.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">px (пиксели)</h3>
            <p className="text-gray-300 text-sm mb-2">
              Самая распространенная абсолютная единица. Один пиксель соответствует одному "точечке" на экране.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-white text-xs mb-1">Когда использовать:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li>Для точного контроля размеров (границы, тени)</li>
                  <li>Для пиксель-perfect дизайна</li>
                  <li>Для фиксированных отступов</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`div {
  width: 200px;
  height: 100px;
  border: 2px solid black;
  margin: 20px;
}`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
              ⚠️ <span className="font-medium">Ограничение:</span> Не масштабируется при изменении настроек доступности пользователя.
            </div>
          </div>
        </div>
      </div>

      {/* Относительные единицы измерения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Percent className="w-5 h-5 text-orange-400" />
          Относительные единицы измерения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-orange-300">Относительные единицы</span> вычисляются относительно другого значения (родительского элемента, корня документа, размера экрана и т.д.).
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Проценты */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">%</h3>
            <p className="text-gray-300 text-sm mb-2">
              Процент от размера <span className="font-medium">родительского элемента</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-white text-xs mb-1">Когда использовать:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li>Для создания гибких макетов</li>
                  <li>Для задания размеров, зависящих от контейнера</li>
                  <li>Для адаптивных отступов</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.container {
  width: 500px;
}

.child {
  width: 50%; /* 250px */
  margin: 10%; /* 50px */
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* em */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">em</h3>
            <p className="text-gray-300 text-sm mb-2">
              Относительно <span className="font-medium">размера шрифта текущего элемента</span> (или родителя, если не задан).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-white text-xs mb-1">Когда использовать:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li>Для масштабируемых отступов и размеров шрифта</li>
                  <li>Для создания компонентов, масштабирующихся вместе с текстом</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.text {
  font-size: 16px;
  padding: 1em; /* 16px */
  margin: 0.5em; /* 8px */
}`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="mt-3 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
              ⚠️ <span className="font-medium">Важно:</span> Может накапливать значение при вложенности (эффект "пинг-понга").
            </div>
          </div>

          {/* rem */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">rem</h3>
            <p className="text-gray-300 text-sm mb-2">
              Относительно <span className="font-medium">размера шрифта корневого элемента</span> (<code className="bg-gray-700 px-1 rounded">html</code>).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-white text-xs mb-1">Когда использовать:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li>Для консистентных размеров шрифтов по всему сайту</li>
                  <li>Для отступов, которые масштабируются вместе с настройками пользователя</li>
                  <li>Как основную единицу для адаптивного дизайна</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`html {
  font-size: 16px; /* Базовый размер */
}

.title {
  font-size: 2rem; /* 32px */
  margin: 1rem; /* 16px */
}

.text {
  font-size: 1rem; /* 16px */
  padding: 0.5rem; /* 8px */
}`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="mt-3 p-2 bg-cyan-900/20 border border-cyan-700/30 rounded text-cyan-300 text-xs">
              💡 <span className="font-medium">Совет:</span> Установите <code className="bg-gray-700 px-1 rounded">font-size: 62.5%</code> для <code className="bg-gray-700 px-1 rounded">html</code>, чтобы 1rem = 10px (удобнее для расчетов).
            </div>
          </div>

          {/* vw и vh */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2">vw и vh</h3>
            <p className="text-gray-300 text-sm mb-2">
              <code className="bg-gray-700 px-1 rounded">vw</code> (viewport width) - 1% от ширины окна просмотра<br/>
              <code className="bg-gray-700 px-1 rounded">vh</code> (viewport height) - 1% от высоты окна просмотра
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-white text-xs mb-1">Когда использовать:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li>Для полноэкранных макетов</li>
                  <li>Для элементов, размер которых должен зависеть от размера экрана</li>
                  <li>Для создания адаптивных шрифтов</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">Пример:</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.hero {
  height: 100vh; /* Полная высота экрана */
  font-size: 4vw; /* Размер шрифта зависит от ширины экрана */
}

.full-width {
  width: 100vw; /* Полная ширина экрана */
}`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="mt-3 p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-xs">
              ⚠️ <span className="font-medium">Осторожно:</span> Может привести к слишком маленьким или большим размерам на экстремальных экранах. Используйте с медиазапросами или функцией clamp().
            </div>
          </div>
        </div>
      </div>

      {/* Практические рекомендации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-pink-400" />
          Практические рекомендации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот основные принципы выбора единиц измерения:
          </p>
        </div>

        <div className="mt-4 space-y-3">
          <div className="bg-gray-900/50 p-3 rounded-lg border border-green-700/30">
            <h3 className="font-bold text-green-300 text-sm mb-1">Для шрифтов:</h3>
            <p className="text-gray-300 text-xs">
              Используйте <code className="bg-gray-700 px-1 rounded">rem</code> как основную единицу. Это обеспечивает масштабируемость и консистентность.
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-3 rounded-lg border border-blue-700/30">
            <h3 className="font-bold text-blue-300 text-sm mb-1">Для отступов:</h3>
            <p className="text-gray-300 text-xs">
              Используйте <code className="bg-gray-700 px-1 rounded">rem</code> для вертикальных отступов между блоками и <code className="bg-gray-700 px-1 rounded">em</code> для горизонтальных отступов внутри компонентов.
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-3 rounded-lg border border-purple-700/30">
            <h3 className="font-bold text-purple-300 text-sm mb-1">Для макетов:</h3>
            <p className="text-gray-300 text-xs">
              Используйте <code className="bg-gray-700 px-1 rounded">%</code> для гибких контейнеров, <code className="bg-gray-700 px-1 rounded">fr</code> для Grid, и <code className="bg-gray-700 px-1 rounded">px</code> для фиксированных элементов (границы, тени).
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-3 rounded-lg border border-orange-700/30">
            <h3 className="font-bold text-orange-300 text-sm mb-1">Для адаптивных размеров:</h3>
            <p className="text-gray-300 text-xs">
              Используйте <code className="bg-gray-700 px-1 rounded">vw/vh</code> осторожно или предпочитайте функцию <code className="bg-gray-700 px-1 rounded">clamp()</code> для более контролируемого результата.
            </p>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Monitor className="w-5 h-5 text-indigo-400" />
          Практический пример
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Пример адаптивной карточки с использованием различных единиц измерения:
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-white mb-1">CSS:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`html {
  font-size: 62.5%; /* 1rem = 10px */
}

.card {
  width: 90%;           /* Процент от родителя */
  max-width: 40rem;     /* Максимальная ширина в rem */
  margin: 2rem auto;    /* Вертикальный отступ в rem */
  padding: 2em;         /* Внутренний отступ в em */
  border: 1px solid #ddd; /* Фиксированная граница */
  border-radius: 0.8rem; /* Радиус скругления в rem */
  font-size: 1.6rem;    /* Базовый размер шрифта */
}

.card__title {
  font-size: 2em;       /* Относительно родителя (.card) */
  margin-bottom: 1em;   /* Отступ в em */
}

.card__content {
  line-height: 1.6;     /* Безразмерное значение */
  margin-bottom: 1.5rem; /* Отступ в rem */
}`}
            </pre>
          </div>
          <div>
            <p className="font-medium text-white mb-1">HTML:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`<div class="card">
  <h2 class="card__title">Заголовок карточки</h2>
  <p class="card__content">
    Это пример текста внутри карточки с 
    правильно подобранными единицами измерения.
  </p>
</div>`}
            </pre>
            <div className="mt-3 p-4 bg-gray-900 rounded border border-gray-700">
              <h2 className="text-xl font-bold mb-2">Заголовок карточки</h2>
              <p className="mb-3">
                Это пример текста внутри карточки с правильно подобранными единицами измерения.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Ruler className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 📏</h3>
            <p className="text-gray-300">
              Теперь вы понимаете разницу между различными единицами измерения CSS и знаете, когда какую использовать. Эти знания позволят вам создавать более гибкие, доступные и адаптивные веб-дизайны. В следующем уроке мы рассмотрим продвинутые техники работы с единицами измерения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;