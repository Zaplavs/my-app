// src/data/courses/markdown/lesson7/part1.jsx
import React from 'react';
import { Pilcrow, CornerDownLeft, List, Hash, AlignLeft } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <AlignLeft className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📝 Урок 7: Параграфы, переносы и списки в Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Структурирование текста с помощью абзацев, переносов и списков</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить создание абзацев, управление переносами строк и формирование списков (маркированных, нумерованных, вложенных) в Markdown.
            </p>
          </div>
        </div>
      </div>

      {/* Абзацы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Pilcrow className="w-5 h-5 text-green-400" />
          Абзацы (Paragraphs)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Абзацы — это основные блоки текста в Markdown. Они автоматически создаются при разделении строк пустой строкой.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <h3 className="font-bold text-green-300 mb-3">Как создать абзацы:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`Это первый абзац.
Он может содержать несколько строк,
но будет отображаться как один абзац.

Это второй абзац.

А это третий абзац.`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="space-y-4 text-gray-300">
                <p>Это первый абзац. Он может содержать несколько строк, но будет отображаться как один абзац.</p>
                <p>Это второй абзац.</p>
                <p>А это третий абзац.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Важные моменты:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Одиночный перевод строки в Markdown <span className="font-medium">не создает</span> новый абзац</li>
            <li>Для создания нового абзаца необходима <span className="font-medium">пустая строка</span> между блоками текста</li>
            <li>Несколько пустых строк между абзацами в исходном коде будут преобразованы в один отступ</li>
          </ul>
        </div>
      </div>

      {/* Переносы строк */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CornerDownLeft className="w-5 h-5 text-blue-400" />
          Переносы строк (Line Breaks)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Иногда необходимо вставить разрыв строки внутри абзаца, не создавая новый абзац. В Markdown есть два способа сделать это:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Способ 1: Два пробела в конце строки</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`Это первая строка с двумя пробелами в конце.  
Это вторая строка.  
А это третья строка.`}</code></pre>
                <p className="text-gray-400 text-xs mt-2">
                  Обратите внимание на два пробела после "конце." и "строка."
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300">
                  <p>Это первая строка с двумя пробелами в конце.<br />
                  Это вторая строка.<br />
                  А это третья строка.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Способ 2: Обратная косая черта (\)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`Это первая строка с обратной косой чертой в конце.\
Это вторая строка.\
А это третья строка.`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300">
                  <p>Это первая строка с обратной косой чертой в конце.<br />
                  Это вторая строка.<br />
                  А это третья строка.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важное замечание:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Два пробела в конце строки могут быть незаметны при просмотре исходного кода</li>
            <li>Обратная косая черта более явно показывает намерение сделать перенос</li>
            <li>Не все редакторы одинаково поддерживают оба способа</li>
          </ul>
        </div>
      </div>

      {/* Маркированные списки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <List className="w-5 h-5 text-yellow-400" />
          Маркированные списки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Маркированные списки используются для перечисления элементов без определенного порядка. В Markdown для этого можно использовать три символа:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-3">Звездочка (*)</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`* Элемент 1
* Элемент 2
* Элемент 3`}</code></pre>
            <div className="mt-3 pt-3 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Результат:</p>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>Элемент 1</li>
                <li>Элемент 2</li>
                <li>Элемент 3</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-3">Дефис (-)</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`- Элемент 1
- Элемент 2
- Элемент 3`}</code></pre>
            <div className="mt-3 pt-3 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Результат:</p>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>Элемент 1</li>
                <li>Элемент 2</li>
                <li>Элемент 3</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <h3 className="font-bold text-white mb-3">Плюс (+)</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`+ Элемент 1
+ Элемент 2
+ Элемент 3`}</code></pre>
            <div className="mt-3 pt-3 border-t border-gray-700">
              <p className="text-gray-400 text-sm">Результат:</p>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                <li>Элемент 1</li>
                <li>Элемент 2</li>
                <li>Элемент 3</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию маркированных списков:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Все три символа дают одинаковый результат</li>
            <li>Рекомендуется придерживаться одного стиля в пределах одного документа</li>
            <li>Дефис (-) является наиболее популярным выбором</li>
            <li>Между символом и текстом должен быть один пробел</li>
          </ul>
        </div>
      </div>

      {/* Нумерованные списки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-orange-400" />
          Нумерованные списки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Нумерованные списки используются, когда важен порядок элементов. В Markdown они создаются с помощью чисел с точкой:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Базовый синтаксис:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`1. Первый элемент
2. Второй элемент
3. Третий элемент`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Первый элемент</li>
                  <li>Второй элемент</li>
                  <li>Третий элемент</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <h3 className="font-bold text-yellow-300 mb-3">Автоматическая нумерация:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`1. Первый элемент
1. Второй элемент
1. Третий элемент`}</code></pre>
              <p className="text-gray-400 text-xs mt-2">
                Все элементы помечены как "1.", но Markdown автоматически пронумерует их
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Первый элемент</li>
                  <li>Второй элемент</li>
                  <li>Третий элемент</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию нумерованных списков:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте автоматическую нумерацию (все "1.") для удобства редактирования</li>
            <li>Markdown сам рассчитает правильную нумерацию при преобразовании</li>
            <li>Полезно при частом изменении порядка элементов</li>
            <li>Между числом и текстом должен быть один пробел</li>
          </ul>
        </div>
      </div>

      {/* Вложенные списки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <List className="w-5 h-5 text-purple-400" />
          Вложенные списки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Списки могут быть вложенными для создания иерархической структуры. Для этого используется отступ из 2 или более пробелов:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Вложенные маркированные списки:</h3>
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`- Основной элемент 1
  - Вложенный элемент 1.1
  - Вложенный элемент 1.2
    - Вложенный элемент 1.2.1
- Основной элемент 2
  - Вложенный элемент 2.1`}</code></pre>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Основной элемент 1
                  <ul className="list-disc pl-5 mt-1">
                    <li>Вложенный элемент 1.1</li>
                    <li>Вложенный элемент 1.2
                      <ul className="list-disc pl-5 mt-1">
                        <li>Вложенный элемент 1.2.1</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Основной элемент 2
                  <ul className="list-disc pl-5 mt-1">
                    <li>Вложенный элемент 2.1</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Комбинированные списки:</h3>
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`1. Нумерованный элемент
   - Маркированный подэлемент
   - Еще один маркированный подэлемент
2. Другой нумерованный элемент
   1. Вложенный нумерованный элемент
   2. Еще один вложенный элемент`}</code></pre>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <ol className="list-decimal pl-5 space-y-1 text-gray-300">
                <li>Нумерованный элемент
                  <ul className="list-disc pl-5 mt-1">
                    <li>Маркированный подэлемент</li>
                    <li>Еще один маркированный подэлемент</li>
                  </ul>
                </li>
                <li>Другой нумерованный элемент
                  <ol className="list-decimal pl-5 mt-1">
                    <li>Вложенный нумерованный элемент</li>
                    <li>Еще один вложенный элемент</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по созданию вложенных списков:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте отступ из 2 пробелов для каждого уровня вложенности</li>
            <li>Можно комбинировать маркированные и нумерованные списки</li>
            <li>Следите за согласованностью отступов</li>
            <li>Не используйте табуляцию — она может работать непредсказуемо</li>
          </ul>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlignLeft className="w-5 h-5 text-green-400" />
          Практические примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как можно комбинировать все изученные элементы для создания структурированных документов:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Инструкция по установке</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Установка приложения

Перед началом установки убедитесь, что у вас установлены:

- Node.js (версия 14 или выше)
- npm (обычно поставляется с Node.js)
- Git

## Шаги установки:

1. Клонируйте репозиторий:
   \`\`\`
   git clone https://github.com/user/repo.git
   \`\`\`
2. Перейдите в директорию проекта:
   \`\`\`
   cd repo
   \`\`\`
3. Установите зависимости:
   \`\`\`
   npm install
   \`\`\`

## Возможные проблемы:

- **Ошибка прав доступа**:  
  Запустите команду с sudo (на Linux/Mac)
- **Проблемы с сетью**:  
  Проверьте подключение к интернету`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">План проекта</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# План разработки веб-приложения

## Этапы разработки

### 1. Подготовка
   1. Анализ требований
   2. Создание технического задания
   3. Выбор технологий

### 2. Дизайн
   - Создание макетов
   - Разработка UI/UX
   - Утверждение дизайна

### 3. Разработка
   1. Frontend
      - Верстка страниц
      - Реализация интерактивности
   2. Backend
      - Разработка API
      - Настройка базы данных

## Контрольные точки

- [ ] Завершение анализа требований
- [ ] Утверждение дизайна  
- [ ] Тестирование MVP`}</code></pre>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <AlignLeft className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать абзацы, управлять переносами строк и формировать списки в Markdown. 
              Эти навыки позволят вам создавать четко структурированные и легко читаемые документы. 
              В следующем уроке мы рассмотрим работу с ссылками и изображениями.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
