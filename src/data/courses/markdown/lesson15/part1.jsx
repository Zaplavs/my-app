// src/data/courses/markdown/lesson15/part1.jsx
import React from 'react';
import { GitGraph, Share2, PieChart, Workflow, Code } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <GitGraph className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📊 Урок 15: Диаграммы с Mermaid</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание диаграмм и графиков прямо в Markdown</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование Mermaid для создания диаграмм в Markdown-документах, понять различные типы диаграмм и их применение.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Mermaid */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitGraph className="w-5 h-5 text-green-400" />
          Что такое Mermaid?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Mermaid</span> — это инструмент для создания диаграмм и визуализаций с использованием текстового описания. 
            Он позволяет создавать диаграммы прямо в Markdown-документах, используя простой и интуитивно понятный синтаксис.
          </p>
          <p>
            Mermaid поддерживается многими популярными платформами и редакторами, что делает его отличным выбором для технической документации, 
            планирования проектов и визуализации процессов.
          </p>
        </div>
      </div>

      {/* Основы синтаксиса Mermaid */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Основы синтаксиса Mermaid
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Диаграммы Mermaid создаются с использованием специального блока кода с указанием языка <code className="bg-gray-700 px-1.5 py-0.5 rounded">mermaid</code>:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Базовый синтаксис:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`\`\`\`mermaid
graph TD
    A[Начало] --> B[Процесс]
    B --> C[Конец]
\`\`\``}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300 bg-gray-800 p-4 rounded">
                <div className="text-center text-gray-500 italic">
                  [Диаграмма блок-схемы: Начало → Процесс → Конец]
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Важные моменты:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте тройные обратные апострофы (<code className="bg-gray-700 px-1.5 py-0.5 rounded">```</code>) для создания блока кода</li>
            <li>Укажите <code className="bg-gray-700 px-1.5 py-0.5 rounded">mermaid</code> как язык после открывающих апострофов</li>
            <li>Первая строка определяет тип диаграммы</li>
            <li>Следующие строки описывают элементы и связи</li>
            <li>Отступы не обязательны, но улучшают читаемость</li>
          </ul>
        </div>
      </div>

      {/* Типы диаграмм Mermaid */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Workflow className="w-5 h-5 text-cyan-400" />
          Типы диаграмм Mermaid
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Mermaid поддерживает множество типов диаграмм для различных целей:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              Блок-схемы (Flowcharts)
            </h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-3"><code>{`graph TD
    A[Начало] --> B[Действие 1]
    B --> C{Условие}
    C -->|Да| D[Действие 2]
    C -->|Нет| E[Действие 3]
    D --> F[Конец]
    E --> F`}</code></pre>
            <p className="text-gray-400 text-xs">
              Используются для визуализации алгоритмов, процессов и логических схем
            </p>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              Диаграммы последовательности (Sequence)
            </h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-3"><code>{`sequenceDiagram
    participant A as Клиент
    participant B as Сервер
    A->>B: Запрос
    B-->>A: Ответ`}</code></pre>
            <p className="text-gray-400 text-xs">
              Показывают взаимодействие между различными участниками во времени
            </p>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Круговые диаграммы (Pie)
            </h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-3"><code>{`pie
    title Доли рынка
    "Chrome" : 60
    "Firefox" : 20
    "Safari" : 15
    "Другие" : 5`}</code></pre>
            <p className="text-gray-400 text-xs">
              Используются для отображения пропорций и процентных соотношений
            </p>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-3 flex items-center gap-2">
              <GitGraph className="w-5 h-5" />
              Диаграммы классов (Class)
            </h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300 mb-3"><code>{`classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal: +int age
    Animal: +String gender
    Animal: +isMammal()`}</code></pre>
            <p className="text-gray-400 text-xs">
              Предназначены для визуализации объектно-ориентированного дизайна
            </p>
          </div>
        </div>
      </div>

      {/* Поддержка платформами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Workflow className="w-5 h-5 text-orange-400" />
          Поддержка Mermaid в различных платформах
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Поддержка Mermaid различается в зависимости от платформы:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <span className="bg-green-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
              Полная поддержка
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>GitHub (с 2022 года)</li>
              <li>GitLab</li>
              <li>Obsidian</li>
              <li>Typora</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
              <span className="bg-yellow-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">~</span>
              Частичная поддержка
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>VS Code (с расширениями)</li>
              <li>Jupyter Notebooks</li>
              <li>Notion (ограниченно)</li>
              <li>Docusaurus</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2 flex items-center gap-2">
              <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">✗</span>
              Нет поддержки
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Базовые редакторы</li>
              <li>Некоторые CMS</li>
              <li>Почтовые клиенты</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важное замечание:
          </h4>
          <p className="text-gray-300 text-sm">
            Всегда проверяйте отображение диаграмм в вашей целевой платформе. 
            Некоторые платформы могут требовать дополнительных расширений или настроек.
          </p>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitGraph className="w-5 h-5 text-pink-400" />
          Практические примеры использования диаграмм
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как можно использовать диаграммы Mermaid в реальных документах:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Архитектура системы:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Архитектура веб-приложения

\`\`\`mermaid
graph LR
    A[Пользователь] --> B[Браузер]
    B --> C[Веб-сервер]
    C --> D[(База данных)]
    C --> E[API-сервисы]
\`\`\``}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Процесс разработки:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# CI/CD Pipeline

\`\`\`mermaid
graph TD
    A[Код] --> B[Тестирование]
    B --> C{Тесты пройдены?}
    C -->|Да| D[Сборка]
    C -->|Нет| E[Исправление]
    D --> F[Деплой]
    E --> A
\`\`\``}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте осмысленные названия для элементов диаграмм</li>
            <li>Добавляйте комментарии для сложных диаграмм</li>
            <li>Разбивайте большие диаграммы на несколько меньших</li>
            <li>Используйте стили и классы для улучшения внешнего вида</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <GitGraph className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать Mermaid для создания диаграмм в Markdown-документах. 
              Вы научились создавать блок-схемы, диаграммы последовательности, круговые диаграммы и диаграммы классов. 
              Mermaid - мощный инструмент для визуализации информации и создания понятной документации. 
              В следующем уроке мы рассмотрим дополнительные возможности Markdown и его расширения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
