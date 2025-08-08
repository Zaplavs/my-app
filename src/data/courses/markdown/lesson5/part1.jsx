// src/data/courses/markdown/lesson5/part1.jsx
import React from 'react';
import { Hash, ListOrdered, Minus, Split, BookOpen, Zap } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Hash className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔖 Урок 5: Заголовки и навигация по документу</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Структурирование контента с помощью заголовков и разделителей</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить синтаксис заголовков в Markdown, понять принципы логической иерархии и научиться использовать визуальные разделители для структурирования документа.
            </p>
          </div>
        </div>
      </div>

      {/* Синтаксис заголовков */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-green-400" />
          Синтаксис заголовков в Markdown
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Заголовки — один из ключевых элементов структурирования документа. В Markdown существует 6 уровней заголовков, аналогичных тегам <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<h1>'}–{'<h6>'}</code> в HTML.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Способ 1: Символы решетки (#)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Заголовок 1 уровня
## Заголовок 2 уровня
### Заголовок 3 уровня
#### Заголовок 4 уровня
##### Заголовок 5 уровня
###### Заголовок 6 уровня`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">Заголовок 1 уровня</h1>
                  <h2 className="text-xl font-bold">Заголовок 2 уровня</h2>
                  <h3 className="text-lg font-bold">Заголовок 3 уровня</h3>
                  <h4 className="text-base font-bold">Заголовок 4 уровня</h4>
                  <h5 className="text-sm font-bold">Заголовок 5 уровня</h5>
                  <h6 className="text-xs font-bold">Заголовок 6 уровня</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Способ 2: Подчеркивание (только для H1 и H2)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`Заголовок 1 уровня
=================

Заголовок 2 уровня
------------------`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="space-y-4">
                  <div>
                    <h1 className="text-2xl font-bold border-b-2 border-gray-600 pb-1">Заголовок 1 уровня</h1>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold border-b border-gray-700 pb-1">Заголовок 2 уровня</h2>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              <span className="font-medium">Примечание:</span> Этот способ менее распространен, так как требует больше символов и подходит только для двух уровней заголовков.
            </p>
          </div>
        </div>
      </div>

      {/* Рекомендации по использованию заголовков */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-purple-400" />
          Рекомендации по использованию заголовков
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Правильное использование заголовков не только улучшает визуальную структуру документа, но и важно для:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <ListOrdered className="w-5 h-5" />
              Структура документа
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">✓</span>
                <span><span className="font-medium">Один H1 на документ</span> — это основной заголовок всей страницы</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">✓</span>
                <span><span className="font-medium">Логическая иерархия</span> — не пропускайте уровни (например, после H2 должен идти H3, а не H5)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">✓</span>
                <span><span className="font-medium">Семантическая разметка</span> — заголовки помогают поисковым системам и экранным читателям</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Практические советы
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">💡</span>
                <span>Используйте заголовки для создания <span className="font-medium">оглавления</span> в больших документах</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">💡</span>
                <span>Заголовки должны быть <span className="font-medium">информативными</span> и отражать содержание раздела</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">💡</span>
                <span>Избегайте <span className="font-medium">переиспользования одного заголовка</span> в разных разделах</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Распространенные ошибки:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Использование нескольких H1 в одном документе</li>
            <li>Пропуск уровней заголовков (например, H1 → H4)</li>
            <li>Использование заголовков только для стилизации текста (лучше использовать другие элементы)</li>
            <li>Слишком длинные заголовки, теряющие смысл</li>
          </ul>
        </div>
      </div>

      {/* Визуальные разделители */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Split className="w-5 h-5 text-cyan-400" />
          Визуальные разделители секций
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Разделители помогают визуально отделить логические части документа. В Markdown для этого используются три символа, которые дают одинаковый результат:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-3">Три дефиса</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-3"><code>{`Текст до разделителя

---

Текст после разделителя`}</code></pre>
            <div className="pt-3 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Результат:</p>
              <p className="text-gray-300 text-sm mt-2">Текст после разделителя</p>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-3">Три звездочки</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-3"><code>{`Текст до разделителя

***

Текст после разделителя`}</code></pre>
            <div className="pt-3 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Результат:</p>
              <p className="text-gray-300 text-sm mt-2">Текст после разделителя</p>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-3">Три подчеркивания</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-3"><code>{`Текст до разделителя

___

Текст после разделителя`}</code></pre>
            <div className="pt-3 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Результат:</p>
              <p className="text-gray-300 text-sm mt-2">Текст после разделителя</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Когда использовать разделители:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Для отделения логических разделов в длинных документах</li>
            <li>Перед переходом к новой теме</li>
            <li>Для визуального отделения заключения от основного текста</li>
            <li>Между секциями в списках или инструкциях</li>
          </ul>
        </div>
      </div>

      {/* Навигация по документу */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ListOrdered className="w-5 h-5 text-orange-400" />
          Навигация по документу
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Правильно структурированные заголовки позволяют создавать удобную навигацию:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Автоматическое оглавление</h3>
            <p className="text-gray-300 text-sm mb-3">
              Многие редакторы Markdown автоматически генерируют оглавление на основе заголовков:
            </p>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <div className="text-blue-400 mb-1">Оглавление:</div>
              <div className="text-gray-400 space-y-1">
                <div>1. Введение</div>
                <div className="ml-4">1.1. Цели документа</div>
                <div>2. Основная часть</div>
                <div className="ml-4">2.1. Подраздел 1</div>
                <div className="ml-4">2.2. Подраздел 2</div>
                <div>3. Заключение</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Якорные ссылки</h3>
            <p className="text-gray-300 text-sm mb-3">
              Заголовки автоматически создают якоря, на которые можно ссылаться:
            </p>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-3"><code>{`[Перейти к заключению](#заключение)

# Заключение
Текст заключения...`}</code></pre>
            <p className="text-gray-400 text-xs">
              Примечание: Якоря создаются автоматически на основе текста заголовка (в нижнем регистре, пробелы заменяются дефисами)
            </p>
          </div>
        </div>
      </div>

      {/* Практический пример */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-pink-400" />
          Практический пример структурированного документа
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как может выглядеть правильно структурированный документ:
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Markdown:</p>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 overflow-x-auto"><code>{`# Руководство по Markdown

## Введение
Краткое описание Markdown и его преимуществ.

## Основы синтаксиса

### Заголовки
Как создавать заголовки разных уровней.

### Списки
---

#### Маркированные списки
- Элемент 1
- Элемент 2

#### Нумерованные списки
1. Первый пункт
2. Второй пункт

## Заключение
Основные выводы и рекомендации.`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Структура документа:</p>
            <div className="bg-gray-800 p-3 rounded text-sm text-gray-300">
              <div className="space-y-1">
                <div className="font-bold text-lg">Руководство по Markdown (H1)</div>
                <div className="ml-4 font-semibold">Введение (H2)</div>
                <div className="ml-4 font-semibold">Основы синтаксиса (H2)</div>
                <div className="ml-8 font-medium">Заголовки (H3)</div>
                <div className="ml-8 font-medium">Списки (H3)</div>
                <div className="ml-12">Маркированные списки (H4)</div>
                <div className="ml-12">Нумерованные списки (H4)</div>
                <div className="ml-4 font-semibold">Заключение (H2)</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-800/50 rounded border border-gray-700">
              <p className="text-gray-400 text-xs">
                Обратите внимание на логическую иерархию и использование разделителя между подразделами.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Hash className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как правильно использовать заголовки и визуальные разделители в Markdown. 
              Эти навыки помогут вам создавать четкую структуру документов, улучшать навигацию и делать текст более читаемым. 
              В следующем уроке мы рассмотрим списки и другие элементы форматирования текста.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
