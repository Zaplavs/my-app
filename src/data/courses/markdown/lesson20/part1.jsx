// src/data/courses/markdown/lesson20/part1.jsx
import React from 'react';
import { Database, PenTool, BookOpen, Zap, GitBranch, Check } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Database className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🗄️ Урок 20: Markdown в CMS (Notion, Ghost, Docusaurus)</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Использование Markdown в популярных системах управления контентом</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование Markdown в различных CMS: Notion, Ghost и Docusaurus, понять преимущества этого подхода.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое CMS и Markdown */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-green-400" />
          Что такое CMS и почему Markdown в них важен?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">CMS (Content Management System)</span> — система управления контентом, которая позволяет создавать, редактировать и публиковать цифровой контент без глубоких технических знаний.
          </p>
          <p>
            Использование Markdown в CMS предоставляет уникальные преимущества:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Скорость
            </h3>
            <p className="text-gray-300 text-sm">
              Быстрое написание и форматирование без отвлечения на интерфейс
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <GitBranch className="w-5 h-5" />
              Контроль версий
            </h3>
            <p className="text-gray-300 text-sm">
              Возможность отслеживания изменений и совместной работы
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <Check className="w-5 h-5" />
              Простота
            </h3>
            <p className="text-gray-300 text-sm">
              Универсальный формат, понятный большинству пользователей
            </p>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Преимущества Markdown в CMS:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Портативность между различными платформами</li>
            <li>Фокус на содержании, а не на форматировании</li>
            <li>Легкость обучения и использования</li>
            <li>Совместимость с системами контроля версий (Git)</li>
            <li>Чистота и читаемость исходного кода</li>
          </ul>
        </div>
      </div>

      {/* Markdown в Notion */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <PenTool className="w-5 h-5 text-purple-400" />
          Markdown в Notion
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-purple-300">Notion</span> — мощная система для ведения заметок, планирования и совместной работы. 
            Хотя Notion имеет собственный блочный редактор, он также поддерживает импорт и экспорт Markdown-файлов.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Импорт Markdown в Notion:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-400 mt-1">•</span>
                <span><span className="font-medium">Поддержка форматов:</span> Notion может импортировать <code className="bg-gray-700 px-1.5 py-0.5 rounded">.md</code> файлы</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-400 mt-1">•</span>
                <span><span className="font-medium">Сохранение структуры:</span> Заголовки, списки, ссылки и изображения преобразуются в соответствующие блоки Notion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-400 mt-1">•</span>
                <span><span className="font-medium">Массовый импорт:</span> Возможность импортировать целые папки с Markdown-файлами</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Экспорт из Notion в Markdown:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Экспорт страниц:</span> Отдельные страницы или целые рабочие области можно экспортировать как Markdown</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Сохранение связей:</span> Ссылки между страницами Notion преобразуются в Markdown-ссылки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400 mt-1">•</span>
                <span><span className="font-medium">Форматирование:</span> Таблицы, списки и форматирование сохраняются</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Практическое применение:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Перенос документации из внешних источников в Notion</li>
            <li>Резервное копирование заметок в универсальном формате</li>
            <li>Совместная работа с пользователями вне экосистемы Notion</li>
            <li>Интеграция с системами контроля версий для документации</li>
          </ul>
        </div>
      </div>

      {/* Markdown в Ghost */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <PenTool className="w-5 h-5 text-orange-400" />
          Markdown в Ghost
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-orange-300">Ghost</span> — современная платформа для публикации контента, созданная с учетом Markdown как основного способа написания постов.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Ghost Editor:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Особенности редактора:</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-400 mt-1">✓</span>
                  <span><span className="font-medium">Чистый Markdown:</span> Полная поддержка синтаксиса Markdown</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-400 mt-1">✓</span>
                  <span><span className="font-medium">Предпросмотр:</span> Одновременный просмотр кода и результата</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-400 mt-1">✓</span>
                  <span><span className="font-medium">Горячие клавиши:</span> Быстрое форматирование с помощью Markdown-синтаксиса</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Поддерживаемые элементы:</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-400 mt-1">•</span>
                  <span>Заголовки, списки, ссылки, изображения</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-400 mt-1">•</span>
                  <span>Кодовые блоки с подсветкой синтаксиса</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-400 mt-1">•</span>
                  <span>Таблицы и горизонтальные линии</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Преимущества Markdown в Ghost:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">+</span>
                <span>Фокус на написании, а не на форматировании</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">+</span>
                <span>Переносимость контента между платформами</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">+</span>
                <span>Интеграция с системами контроля версий</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">+</span>
                <span>Поддержка технического контента (код, формулы)</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Интеграции Ghost:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">⇄</span>
                <span>Экспорт в JSON для миграции</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">⇄</span>
                <span>Импорт из WordPress и других платформ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">⇄</span>
                <span>API для программного управления контентом</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Markdown в Docusaurus */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          Markdown в Docusaurus
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Docusaurus</span> — статический генератор сайтов, специально созданный для создания документации. 
            Он использует Markdown как основной формат написания контента.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Особенности Markdown в Docusaurus:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Расширения Markdown:</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-400 mt-1">•</span>
                  <span><span className="font-medium">Front Matter:</span> YAML-метаданные в начале файла</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-400 mt-1">•</span>
                  <span><span className="font-medium">MDX:</span> Комбинация Markdown и React-компонентов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-400 mt-1">•</span>
                  <span><span className="font-medium">Admonitions:</span> Специальные блоки предупреждений и примечаний</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Функции документации:</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-400 mt-1">•</span>
                  <span><span className="font-medium">Оглавление:</span> Автоматическая генерация из заголовков</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-400 mt-1">•</span>
                  <span><span className="font-medium">Навигация:</span> Ссылки между страницами документации</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-400 mt-1">•</span>
                  <span><span className="font-medium">Поиск:</span> Индексация Markdown-контента для поиска</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Пример структуры документа:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`---
title: Начало работы
sidebar_label: Начало
---

# Начало работы с Docusaurus

## Установка

\`\`\`bash
npm install docusaurus
\`\`\`

:::note Примечание
Это специальный блок примечания в Docusaurus
:::

[Следующий шаг](getting-started/next-step)`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Преимущества для документации:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">✓</span>
                <span>Простота написания технической документации</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">✓</span>
                <span>Интеграция с системами контроля версий</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">✓</span>
                <span>Поддержка совместной работы через Git</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400 mt-1">✓</span>
                <span>Автоматическая генерация оглавления</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Сравнение платформ */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-pink-400" />
          Сравнение Markdown в различных CMS
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Каждая CMS по-своему использует Markdown:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <PenTool className="w-5 h-5" />
              Notion
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Импорт/экспорт .md файлов</li>
              <li>Преобразование в блочную структуру</li>
              <li>Ограниченная поддержка сложных элементов</li>
              <li>Идеален для персонального использования</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2 flex items-center gap-2">
              <PenTool className="w-5 h-5" />
              Ghost
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Нативная поддержка Markdown в редакторе</li>
              <li>Фокус на блоги и публикации</li>
              <li>Предпросмотр в реальном времени</li>
              <li>Идеален для блогеров и издателей</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Docusaurus
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Markdown как основной формат</li>
              <li>Расширения для технической документации</li>
              <li>Интеграция с React и Git</li>
              <li>Идеален для технической документации</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Общие преимущества:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Универсальность и переносимость контента</li>
            <li>Фокус на содержании, а не на форматировании</li>
            <li>Интеграция с системами контроля версий</li>
            <li>Поддержка совместной работы</li>
            <li>Простота автоматизации и обработки</li>
          </ul>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-green-400" />
          Практические примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как можно использовать Markdown в различных CMS:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Миграция документации:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Миграция из Notion в Docusaurus

## Экспорт из Notion
- Выбрать страницы для экспорта
- Формат: Markdown + вложения
- Структура файлов сохраняется

## Подготовка контента
- Проверка ссылок и изображений
- Адаптация под формат Docusaurus
- Добавление Front Matter

## Импорт в Docusaurus
- Размещение файлов в docs/
- Настройка боковой панели
- Проверка навигации`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Публикация в Ghost:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Публикация технической статьи в Ghost

## Введение
Эта статья расскажет о...

## Пример кода
\`\`\`javascript
function hello() {
  console.log('Hello, World!');
}
\`\`\`

## Заключение
Важно помнить, что...

*Опубликовано: {{date}}*`}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте Markdown для унификации документооборота</li>
            <li>Создавайте шаблоны для повторяющихся типов контента</li>
            <li>Интегрируйте Markdown с системами контроля версий</li>
            <li>Обучайте команду основам Markdown для совместной работы</li>
            <li>Используйте инструменты для проверки и форматирования Markdown</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать Markdown в различных CMS. Вы научились работать с Notion, Ghost и Docusaurus, 
              поняли преимущества Markdown-подхода и научились эффективно использовать эти платформы для различных задач. 
              Markdown в CMS — это мощный инструмент для создания, управления и переноса контента. 
              Эти навыки важны для современного контент-менеджмента и технической документации.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
