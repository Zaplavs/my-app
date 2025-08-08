// src/data/courses/markdown/lesson20/part1.jsx
import React from 'react';
import {Monitor, RefreshCw, Users, Check, Eye, MessageCircle, BookOpen, Zap, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Check className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✅ Урок 20: Лучшие практики оформления Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание читаемых и профессиональных документов</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить лучшие практики оформления Markdown-документов для обеспечения читаемости, структурированности и профессионального вида.
            </p>
          </div>
        </div>
      </div>

      {/* Важность читаемости */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-green-400" />
          Важность читаемости Markdown-документов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Читаемость</span> — ключевой фактор успешного Markdown-документа. 
            Даже самый информативный текст теряет свою ценность, если его сложно читать и понимать.
          </p>
          <p>
            Хорошо оформленный Markdown-документ:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <span className="bg-green-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Экономит время
            </h3>
            <p className="text-gray-300 text-sm">
              Читатель быстро находит нужную информацию
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <span className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Улучшает понимание
            </h3>
            <p className="text-gray-300 text-sm">
              Четкая структура помогает лучше усвоить материал
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <span className="bg-purple-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Повышает профессионализм
            </h3>
            <p className="text-gray-300 text-sm">
              Хорошо оформленный документ производит положительное впечатление
            </p>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Принципы читаемости:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Последовательное использование заголовков</li>
            <li>Правильные отступы и пустые строки</li>
            <li>Логическая структура документа</li>
            <li>Умеренное использование форматирования</li>
            <li>Четкое разделение логических блоков</li>
          </ul>
        </div>
      </div>

      {/* Отступы и пустые строки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          Отступы и пустые строки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Правильное использование <span className="font-medium text-purple-300">отступов</span> и <span className="font-medium text-purple-300">пустых строк</span> делает Markdown-код чище и понятнее.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Хорошо:</h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`# Заголовок документа

## Введение

Это первый абзац введения.

Это второй абзац введения.

## Основная часть

### Подраздел 1

Содержание подраздела 1.

### Подраздел 2

Содержание подраздела 2.`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Плохо:</h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`# Заголовок документа
## Введение
Это первый абзац введения.
Это второй абзац введения.
## Основная часть
### Подраздел 1
Содержание подраздела 1.
### Подраздел 2
Содержание подраздела 2.`}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Рекомендации:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Разделяйте заголовки пустой строкой сверху и снизу</li>
            <li>Разделяйте абзацы пустой строкой</li>
            <li>Используйте отступы для вложенных списков (2-4 пробела)</li>
            <li>Добавляйте пустые строки вокруг блочных элементов (таблиц, кодовых блоков)</li>
            <li>Соблюдайте единый стиль отступов во всем документе</li>
          </ul>
        </div>
      </div>

      {/* Последовательность заголовков */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          Последовательность заголовков
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Логическая иерархия заголовков</span> — основа структуры любого документа. 
            Она помогает читателю понять организацию информации и легко перемещаться по тексту.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Правильная иерархия:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`# Название документа (H1)

## Глава 1 (H2)

### Раздел 1.1 (H3)

#### Подраздел 1.1.1 (H4)

### Раздел 1.2 (H3)

## Глава 2 (H2)

### Раздел 2.1 (H3)`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Структура:</p>
              <div className="text-gray-300 text-sm space-y-1">
                <div className="pl-0 font-bold text-lg">Название документа (H1)</div>
                <div className="pl-4 font-bold text-md">Глава 1 (H2)</div>
                <div className="pl-8 font-semibold">Раздел 1.1 (H3)</div>
                <div className="pl-12 italic">Подраздел 1.1.1 (H4)</div>
                <div className="pl-8 font-semibold">Раздел 1.2 (H3)</div>
                <div className="pl-4 font-bold text-md">Глава 2 (H2)</div>
                <div className="pl-8 font-semibold">Раздел 2.1 (H3)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Что делать:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Начинайте документ с одного H1</li>
              <li>Соблюдайте последовательность уровней (H1 → H2 → H3, не H1 → H4)</li>
              <li>Используйте заголовки для структурирования, а не просто выделения</li>
              <li>Делайте заголовки информативными и уникальными</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2">Чего избегать:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Пропускать уровни заголовков</li>
              <li>Использовать несколько H1 в одном документе</li>
              <li>Делать заголовки слишком длинными</li>
              <li>Использовать заголовки только для стилизации текста</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Избегай перегруженности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-orange-400" />
          Избегай перегруженности
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-orange-300">Перегруженный текст</span> утомляет читателя и затрудняет восприятие информации. 
            Важно использовать форматирование умеренно и по назначению.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Правильное использование форматирования:</h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`## Важные принципы

**Жирный текст** используется для очень важных моментов.

*Курсив* подходит для акцентирования внимания.

\`Инлайновый код\` выделяет технические термины.

> Цитаты выделяют чужую речь или важные мысли.`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Перегруженный текст:</h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`## **Важные принципы**

**Жирный текст используется повсюду**, *курсив тоже*, 
и \`инлайновый код в каждой фразе\`.

> **_~~Каждый элемент выделен четырьмя способами~~_**`}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важное правило:
          </h4>
          <p className="text-gray-300 text-sm">
            Используйте каждый элемент форматирования с <span className="font-medium">определенной целью</span>. 
            Если всё выделено, ничто не выделено. Умеренность — ключ к эффективному форматированию.
          </p>
        </div>
      </div>

      {/* Использование комментариев */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MessageCircle className="w-5 h-5 text-blue-400" />
          Использование комментариев
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-blue-300">Комментарии</span> в Markdown (HTML-комментарии) — мощный инструмент для добавления заметок, 
            скрытия временного контента и пояснений для других авторов.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <h3 className="font-bold text-blue-300 mb-3">Примеры использования комментариев:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Личные заметки:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`# Руководство пользователя

<!-- TODO: Добавить раздел о безопасности -->

## Введение

<!-- ВАЖНО: Эта секция будет обновлена после релиза v2.0 -->
Основной текст введения...`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Скрытие контента:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`## Основной текст

Этот абзац виден всем.

<!-- 
## Черновик нового раздела
Этот текст еще не готов, 
поэтому временно скрыт.
-->`}</code></pre>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Когда использовать:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Для личных напоминаний и задач (TODO)</li>
              <li>Для временного скрытия незавершенного контента</li>
              <li>Для пояснений другим авторам документа</li>
              <li>Для указания планируемых изменений</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2">Важные замечания:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Комментарии видны в исходном коде документа</li>
              <li>Не храните конфиденциальную информацию в комментариях</li>
              <li>Используйте понятные и информативные комментарии</li>
              <li>Удаляйте устаревшие комментарии перед публикацией</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Пиши для других */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Users className="w-5 h-5 text-pink-400" />
          Пиши для других
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При написании Markdown-документа всегда имейте в виду своего <span className="font-medium text-pink-300">читателя</span>. 
            Это поможет создать более эффективный и понятный текст.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3">Принципы написания для других:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-pink-400 mt-1">✓</span>
                <span><span className="font-medium">Ясность:</span> Используйте простой и понятный язык</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-pink-400 mt-1">✓</span>
                <span><span className="font-medium">Полнота:</span> Предоставляйте всю необходимую информацию</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-pink-400 mt-1">✓</span>
                <span><span className="font-medium">Логика:</span> Следуйте четкой структуре изложения</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-pink-400 mt-1">✓</span>
                <span><span className="font-medium">Контекст:</span> Объясняйте термины и сокращения</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Антипаттерны:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">✗</span>
                <span><span className="font-medium">Избыточная сложность:</span> Использование сложных конструкций без необходимости</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">✗</span>
                <span><span className="font-medium">Недостаток контекста:</span> Предположение, что читатель знает всё</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">✗</span>
                <span><span className="font-medium">Непоследовательность:</span> Разный стиль написания в разных частях документа</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">✗</span>
                <span><span className="font-medium">Игнорирование аудитории:</span> Письмо "для себя" вместо "для читателя"</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по написанию:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Представьте, что объясняете материал человеку, который впервые с ним сталкивается</li>
            <li>Используйте конкретные примеры и пошаговые инструкции</li>
            <li>Добавляйте пояснения к техническим терминам</li>
            <li>Проверяйте документ с точки зрения "нового" читателя</li>
            <li>Получайте обратную связь от коллег и знакомых</li>
          </ul>
        </div>
      </div>

      {/* Проверка в предпросмотре */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-yellow-400" />
          Проверка в предпросмотре
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">Предпросмотр</span> — неотъемлемая часть процесса создания Markdown-документов. 
            Он позволяет увидеть, как будет выглядеть финальный результат, и вовремя исправить ошибки.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <Check className="w-5 h-5" />
              Что проверять:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Правильность заголовков</li>
              <li>Форматирование списков</li>
              <li>Работу ссылок</li>
              <li>Отображение изображений</li>
              <li>Корректность таблиц</li>
              <li>Читаемость кодовых блоков</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              Когда проверять:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>После написания крупных разделов</li>
              <li>Перед финальным сохранением</li>
              <li>После внесения изменений</li>
              <li>При сомнениях в оформлении</li>
              <li>Перед публикацией</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <Monitor className="w-5 h-5" />
              Инструменты:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Встроенный предпросмотр редактора</li>
              <li>Расширения браузеров</li>
              <li>Онлайн-сервисы предпросмотра</li>
              <li>Специализированные редакторы</li>
              <li>Генераторы статических сайтов</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Рекомендации:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Регулярно используйте предпросмотр во время написания</li>
            <li>Обращайте внимание на мобильную версию (если применимо)</li>
            <li>Проверяйте отображение в разных редакторах</li>
            <li>Тестируйте экспорт в различные форматы</li>
            <li>Просите других людей просмотреть ваш документ</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Check className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете лучшие практики оформления Markdown-документов. 
              Вы научились создавать читаемые и структурированные документы, использовать отступы и пустые строки, 
              соблюдать иерархию заголовков, избегать перегруженности, использовать комментарии и писать для других. 
              Эти навыки помогут вам создавать профессиональные и эффективные Markdown-документы. 
              В следующем уроке мы рассмотрим дополнительные возможности и расширения Markdown.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
