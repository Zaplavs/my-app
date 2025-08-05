// src/data/courses/css/lesson12/part1.jsx
import React from 'react';
import { Smartphone, Tablet, Monitor, Move, Filter } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Move className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📱 Урок 12: Адаптивный дизайн: медиазапросы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание сайтов для всех устройств</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить медиазапросы CSS (@media) для создания адаптивного дизайна, который отлично выглядит на устройствах с любым размером экрана.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое адаптивный дизайн? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Move className="w-5 h-5 text-green-400" />
          Что такое адаптивный дизайн?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Адаптивный дизайн (Responsive Design)</span> — это подход к веб-дизайну, при котором веб-страница корректно отображается и удобна для использования на устройствах с разными размерами экранов: от мобильных телефонов до больших десктопов.
          </p>
          <p>
            Основная цель адаптивного дизайна — обеспечить <span className="font-medium">оптимальный пользовательский опыт</span> независимо от устройства.
          </p>
        </div>
      </div>

      {/* Медиазапросы @media */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Filter className="w-5 h-5 text-purple-400" />
          Медиазапросы @media
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">Медиазапросы (@media)</span> — это CSS-правила, которые позволяют применять стили только при выполнении определенных условий (например, при определенной ширине экрана).
          </p>
          <p>
            Синтаксис медиазапроса:
          </p>
        </div>
        <div className="mt-4 bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
          <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`@media условие {
  /* CSS-правила, применяемые при выполнении условия */
}`}
          </pre>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Пример:</h3>
            <p className="text-gray-300 text-sm mb-3">
              Изменение стилей при ширине экрана менее 768px:
            </p>
            <div className="bg-gray-800 p-3 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`@media (max-width: 767px) {
  .header {
    font-size: 18px;
  }
  
  .navigation {
    flex-direction: column;
  }
}`}
              </pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Объяснение:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">max-width: 767px</code> — условие "максимальная ширина 767px"</li>
              <li>Стили внутри блока применятся только если ширина экрана <span className="font-medium">меньше или равна</span> 767px</li>
              <li>Это идеально подходит для мобильных устройств</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Типы условий в медиазапросах */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Filter className="w-5 h-5 text-yellow-400" />
          Типы условий в медиазапросах
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Медиазапросы поддерживают различные типы условий:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Ширина экрана:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-white text-xs mb-1">min-width (минимальная ширина)</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`@media (min-width: 1024px) {
  /* Стили для экранов шире 1024px */
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="text-white text-xs mb-1">max-width (максимальная ширина)</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`@media (max-width: 767px) {
  /* Стили для экранов уже 767px */
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Высота экрана:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-white text-xs mb-1">min-height (минимальная высота)</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`@media (min-height: 600px) {
  /* Стили для экранов выше 600px */
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="text-white text-xs mb-1">max-height (максимальная высота)</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`@media (max-height: 500px) {
  /* Стили для экранов ниже 500px */
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Комбинирование условий:</h3>
            <div className="space-y-3">
              <div>
                <p className="text-white text-xs mb-1">AND (все условия должны выполняться)</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`@media (min-width: 768px) and (max-width: 1023px) {
  /* Стили для планшетов */
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="text-white text-xs mb-1">OR (для этого используют несколько @media блоков)</p>
                <div className="bg-gray-800 p-2 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`@media (max-width: 767px), (min-width: 1200px) {
  /* Стили для мобильных ИЛИ очень широких экранов */
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Брейкпоинты (точки перехода) */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Move className="w-5 h-5 text-orange-400" />
          Брейкпоинты (точки перехода)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-orange-300">Брейкпоинты</span> — это определенные значения ширины экрана, при которых дизайн сайта изменяется. Это ключевые точки адаптации.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30 text-center">
            <Smartphone className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h3 className="font-bold text-green-300 mb-1">Мобильные</h3>
            <p className="text-sm text-gray-400 mb-2">до 768px</p>
            <p className="text-xs text-gray-300">Вертикальная навигация, крупные кнопки</p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30 text-center">
            <Tablet className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h3 className="font-bold text-blue-300 mb-1">Планшеты</h3>
            <p className="text-sm text-gray-400 mb-2">768px - 1023px</p>
            <p className="text-xs text-gray-300">Комбинированная навигация, 2-3 колонки</p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30 text-center">
            <Monitor className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h3 className="font-bold text-purple-300 mb-1">Десктопы</h3>
            <p className="text-sm text-gray-400 mb-2">от 1024px</p>
            <p className="text-xs text-gray-300">Полноценная навигация, многоколоночные макеты</p>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
          <h3 className="font-bold text-yellow-300 mb-2">Пример комплексного использования брейкпоинтов:</h3>
          <div className="bg-gray-800 p-3 rounded text-xs mt-2">
            <pre className="whitespace-pre-wrap text-gray-300">
{`/* Мобильные устройства */
@media (max-width: 767px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}

/* Планшеты */
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Десктопы */
@media (min-width: 1024px) {
  .container {
    width: 1000px;
    margin: 0 auto;
  }
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Подход Mobile First */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Smartphone className="w-5 h-5 text-cyan-400" />
          Подход Mobile First
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Mobile First</span> — это философия разработки, при которой сначала создаются стили для мобильных устройств, а затем добавляются стили для более крупных экранов.
          </p>
          <p>
            Преимущества подхода Mobile First:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Улучшенная производительность на мобильных устройствах</li>
            <li>Более чистая и организованная структура CSS</li>
            <li>Упрощенная отладка и тестирование</li>
            <li>Лучшая индексация мобильных версий поисковиками</li>
          </ul>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Традиционный подход:</h3>
            <div className="bg-gray-800 p-2 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`/* Стили для десктопа */
.header {
  font-size: 24px;
}

/* Адаптация для мобильных */
@media (max-width: 767px) {
  .header {
    font-size: 18px;
  }
}`}
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Mobile First:</h3>
            <div className="bg-gray-800 p-2 rounded text-xs">
              <pre className="whitespace-pre-wrap text-gray-300">
{`/* Базовые стили для мобильных */
.header {
  font-size: 18px;
}

/* Улучшения для десктопов */
@media (min-width: 1024px) {
  .header {
    font-size: 24px;
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Monitor className="w-5 h-5 text-pink-400" />
          Практический пример
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Адаптивная сетка с тремя колонками, которая становится одной колонкой на мобильных устройствах:
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-white mb-1">CSS:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`.grid-container {
  display: grid;
  gap: 20px;
}

/* Мобильные устройства - одна колонка */
.grid-container {
  grid-template-columns: 1fr;
}

/* Планшеты и выше - три колонки */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.grid-item {
  background-color: #3b82f6;
  padding: 20px;
  text-align: center;
  color: white;
  border-radius: 5px;
}`}
            </pre>
          </div>
          <div>
            <p className="font-medium text-white mb-1">HTML:</p>
            <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-3 rounded text-sm">
{`<div class="grid-container">
  <div class="grid-item">Колонка 1</div>
  <div class="grid-item">Колонка 2</div>
  <div class="grid-item">Колонка 3</div>
</div>`}
            </pre>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="bg-blue-500 p-3 text-center text-white text-xs rounded">Колонка 1</div>
              <div className="bg-blue-500 p-3 text-center text-white text-xs rounded">Колонка 2</div>
              <div className="bg-blue-500 p-3 text-center text-white text-xs rounded">Колонка 3</div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Move className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 📱</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как использовать медиазапросы для создания адаптивного дизайна. Эти знания позволяют создавать сайты, которые отлично выглядят и функционируют на устройствах с любым размером экрана. В следующем уроке мы рассмотрим продвинутые техники адаптивного дизайна.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;