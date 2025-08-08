// src/data/courses/markdown/lesson6/part1.jsx
import React from 'react';
import { Italic, Bold, Strikethrough, Type, Layers } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Type className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✍️ Урок 6: Выделение текста в Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Курсив, жирный, зачёркнутый текст и их комбинации</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить синтаксис выделения текста в Markdown: курсив, жирный шрифт, зачёркивание и их комбинации.
            </p>
          </div>
        </div>
      </div>

      {/* Основы выделения текста */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-green-400" />
          Основы выделения текста в Markdown
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Выделение текста — один из самых часто используемых элементов форматирования в Markdown. 
            Оно позволяет акцентировать внимание на важной информации, выделять ключевые термины и улучшать читаемость документа.
          </p>
          <p>
            В Markdown для выделения текста используются специальные символы, которые интуитивно понятны и легко запоминаются. 
            Основные виды выделения: <em>курсив</em>, <strong>жирный</strong> и <del>зачёркнутый</del> текст.
          </p>
        </div>
      </div>

      {/* Курсив */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Italic className="w-5 h-5 text-cyan-400" />
          Курсив
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Курсив используется для выделения текста, обозначения названий, иностранных слов, мыслей персонажей и других акцентов.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Способ 1: Звездочки (*)</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>*Этот текст будет курсивом*</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <p className="text-gray-300"><em>Этот текст будет курсивом</em></p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Способ 2: Подчеркивания (_)</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>_Этот текст тоже будет курсивом_</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <p className="text-gray-300"><em>Этот текст тоже будет курсивом</em></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию курсива:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте курсив для выделения названий книг, фильмов, кораблей</li>
            <li>Курсив подходит для иностранных слов и фраз</li>
            <li>Не злоупотребляйте курсивом — используйте его умеренно</li>
            <li>Оба способа (* и _) дают одинаковый результат</li>
          </ul>
        </div>
      </div>

      {/* Жирный текст */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Bold className="w-5 h-5 text-orange-400" />
          Жирный текст
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Жирный текст используется для выделения очень важной информации, заголовков внутри текста, ключевых терминов и предупреждений.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Способ 1: Двойные звездочки (**)</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>**Этот текст будет жирным**</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <p className="text-gray-300"><strong>Этот текст будет жирным</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Способ 2: Двойные подчеркивания (__)</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>__Этот текст тоже будет жирным__</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <p className="text-gray-300"><strong>Этот текст тоже будет жирным</strong></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию жирного текста:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте жирный текст для очень важных моментов</li>
            <li>Подходит для выделения предупреждений и ошибок</li>
            <li>Не используйте жирный текст для больших объемов текста</li>
            <li>Оба способа (** и __) дают одинаковый результат</li>
          </ul>
        </div>
      </div>

      {/* Зачёркнутый текст */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Strikethrough className="w-5 h-5 text-red-400" />
          Зачёркнутый текст
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Зачёркнутый текст используется для обозначения удаленной информации, исправлений или устаревших данных.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
          <h3 className="font-bold text-red-300 mb-3">Способ: Двойные тильды (~~)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>~~Этот текст будет зачёркнут~~</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <p className="text-gray-300"><del>Этот текст будет зачёркнут</del></p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию зачёркнутого текста:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте для показа исправлений в тексте</li>
            <li>Подходит для обозначения устаревшей информации</li>
            <li>Полезен в списках задач для отметки выполненных пунктов</li>
            <li>Не все редакторы поддерживают зачёркнутый текст</li>
          </ul>
        </div>
      </div>

      {/* Комбинации выделений */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Layers className="w-5 h-5 text-purple-400" />
          Комбинации выделений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Markdown позволяет комбинировать различные виды выделения текста для создания более сложного форматирования.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Жирный курсив</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>***Этот текст будет жирным курсивом***
___Этот текст тоже будет жирным курсивом___
**_Этот текст тоже будет жирным курсивом_**
__*Этот текст тоже будет жирным курсивом*__</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="space-y-2">
                  <p className="text-gray-300"><strong><em>Этот текст будет жирным курсивом</em></strong></p>
                  <p className="text-gray-300"><strong><em>Этот текст тоже будет жирным курсивом</em></strong></p>
                  <p className="text-gray-300"><strong><em>Этот текст тоже будет жирным курсивом</em></strong></p>
                  <p className="text-gray-300"><strong><em>Этот текст тоже будет жирным курсивом</em></strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3">Другие комбинации</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>Этот текст содержит **жирное**, *курсивное* и ~~зачёркнутое~~ выделение.

Можно комбинировать ~~**зачёркнутое жирное**~~ и ~~*зачёркнутое курсивное*~~.</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    Этот текст содержит <strong>жирное</strong>, <em>курсивное</em> и <del>зачёркнутое</del> выделение.
                  </p>
                  <p className="text-gray-300">
                    Можно комбинировать <del><strong>зачёркнутое жирное</strong></del> и <del><em>зачёркнутое курсивное</em></del>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важные замечания:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Не все комбинации поддерживаются всеми редакторами</li>
            <li>Избегайте избыточного использования комбинаций</li>
            <li>Убедитесь, что комбинации не мешают читаемости текста</li>
            <li>Проверяйте результат в предпросмотре вашего редактора</li>
          </ul>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Type className="w-5 h-5 text-green-400" />
          Практические примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот несколько примеров, как можно использовать выделение текста в реальных документах:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Техническая документация</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Руководство по API

## **Важные изменения**

В версии 2.0.0 были внесены ***критические изменения***:

- ~~Удален метод \`oldFunction()\`~~
- **Добавлен новый метод** \`newFunction()\`
- *Изменен формат ответа* для всех endpoint'ов`}</code></pre>
            <div className="mt-3 p-3 bg-gray-800/50 rounded text-sm text-gray-300">
              <p><strong>Результат:</strong> Акцент на важных изменениях и устаревшей информации</p>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Список задач</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Список задач на неделю

## **Срочные задачи**
- [x] ~~Подготовить отчет~~
- [ ] **Завершить проект** до пятницы
- [ ] *Созвониться с клиентом*

## Обычные задачи
- [x] ~~Обновить документацию~~
- [ ] Написать тесты`}</code></pre>
            <div className="mt-3 p-3 bg-gray-800/50 rounded text-sm text-gray-300">
              <p><strong>Результат:</strong> Четкое визуальное разделение задач по приоритетам</p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Type className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать курсив, жирный и зачёркнутый текст в Markdown, а также их комбинации. 
              Эти навыки помогут вам создавать более выразительные и структурированные документы. 
              В следующем уроке мы рассмотрим списки и другие элементы форматирования.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
