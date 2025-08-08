// src/data/courses/markdown/lesson12/part1.jsx
import React from 'react';
import { Hash, Link, Anchor, ListOrdered, BookOpen } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Anchor className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">⚓ Урок 12: Якорные ссылки внутри документа</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Навигация по длинным документам с помощью внутренних ссылок</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить создание якорных ссылок внутри Markdown-документа для удобной навигации по разделам.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое якорные ссылки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Anchor className="w-5 h-5 text-green-400" />
          Что такое якорные ссылки?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Якорные ссылки (или внутренние ссылки) — это специальные гиперссылки, которые позволяют перемещаться к определенным частям одного и того же документа. 
            Они особенно полезны в длинных документах, таких как руководства, документация или статьи.
          </p>
          <p>
            В Markdown якорные ссылки создаются автоматически для всех заголовков, что делает навигацию интуитивно понятной и простой в реализации.
          </p>
        </div>
      </div>

      {/* Как работают якоря в Markdown */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          Как работают якоря в Markdown?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Markdown якоря создаются автоматически для каждого заголовка. Процесс преобразования заголовка в якорь происходит следующим образом:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Преобразование заголовков в якоря:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Заголовок Markdown:</p>
              <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>## Как создать якорь</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Автоматический якорь:</p>
              <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>#как-создать-якорь</code></pre>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Правила преобразования:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Все буквы преобразуются в <span className="font-medium">нижний регистр</span></li>
            <li><span className="font-medium">Пробелы</span> заменяются на <span className="font-medium">дефисы</span> (<code className="bg-gray-700 px-1.5 py-0.5 rounded">-</code>)</li>
            <li><span className="font-medium">Специальные символы</span> удаляются или заменяются (например, <code className="bg-gray-700 px-1.5 py-0.5 rounded">?</code> → <code className="bg-gray-700 px-1.5 py-0.5 rounded"></code>)</li>
            <li>Русские буквы остаются как есть (в большинстве реализаций)</li>
            <li>Начальный символ <code className="bg-gray-700 px-1.5 py-0.5 rounded">#</code> добавляется для обозначения якоря</li>
          </ul>
        </div>
      </div>

      {/* Создание якорных ссылок */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Link className="w-5 h-5 text-orange-400" />
          Создание якорных ссылок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Чтобы создать ссылку на заголовок внутри документа, используйте стандартный синтаксис Markdown для ссылок, но в качестве URL укажите якорь с решеткой:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Синтаксис якорных ссылок:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`[Перейти к началу](#введение)
[Ссылка на раздел](#основы-работы)
[К заключению](#заключение)`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300 space-y-2">
                <div>
                  <a href="#введение" className="text-blue-400 hover:underline">Перейти к началу</a>
                </div>
                <div>
                  <a href="#основы-работы" className="text-blue-400 hover:underline">Ссылка на раздел</a>
                </div>
                <div>
                  <a href="#заключение" className="text-blue-400 hover:underline">К заключению</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Пример с русскими заголовками:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Введение
## Основы работы
## Продвинутые техники
# Заключение

[К началу](#введение)
[К основам](#основы-работы)
[К техникам](#продвинутые-техники)
[В конец](#заключение)`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Пример с английскими заголовками:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Introduction
## Getting Started
## Advanced Features
# Conclusion

[To Start](#introduction)
[To Basics](#getting-started)
[To Features](#advanced-features)
[To End](#conclusion)`}</code></pre>
          </div>
        </div>
      </div>

      {/* Особенности и нюансы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ListOrdered className="w-5 h-5 text-cyan-400" />
          Особенности и нюансы якорных ссылок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При работе с якорными ссылками важно учитывать несколько важных моментов:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Особенности заголовков:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">•</span>
                <span><span className="font-medium">Специальные символы:</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">## Что делать?</code> → <code className="bg-gray-700 px-1.5 py-0.5 rounded">#что-делать</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">•</span>
                <span><span className="font-medium">Несколько пробелов:</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">## Очень    длинный   заголовок</code> → <code className="bg-gray-700 px-1.5 py-0.5 rounded">#очень-длинный-заголовок</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-cyan-400 mt-1">•</span>
                <span><span className="font-medium">Заголовки с кодом:</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">## Метод `map()`</code> → <code className="bg-gray-700 px-1.5 py-0.5 rounded">#метод-map</code></span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Платформы и совместимость:</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">•</span>
                <span><span className="font-medium">GitHub:</span> Полная поддержка стандартных якорей</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">•</span>
                <span><span className="font-medium">GitLab:</span> Работает аналогично GitHub</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">•</span>
                <span><span className="font-medium">Obsidian:</span> Поддержка с автоматическим оглавлением</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">•</span>
                <span><span className="font-medium">Статические сайты:</span> Зависит от генератора (Jekyll, Hugo и др.)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важные замечания:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Якоря чувствительны к регистру в некоторых системах</li>
            <li>Идентичные заголовки могут создавать конфликты якорей</li>
            <li>Не все редакторы одинаково обрабатывают специальные символы</li>
            <li>Всегда проверяйте работу якорей в целевой платформе</li>
          </ul>
        </div>
      </div>

      {/* Практическое применение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <BookOpen className="w-5 h-5 text-pink-400" />
          Практическое применение якорных ссылок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Якорные ссылки находят применение в различных сценариях:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Оглавление документа</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Руководство по Markdown

## Оглавление
- [Введение](#введение)
- [Основы](#основы)
- [Продвинутые возможности](#продвинутые-возможности)
- [Заключение](#заключение)

## Введение
Текст введения...

## Основы
Основной текст...

## Продвинутые возможности
Продвинутый текст...

## Заключение
Заключительный текст...`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Навигация в документации</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# API Documentation

Перейти к: [Аутентификация](#аутентификация) | [Методы](#методы) | [Ошибки](#ошибки)

## Аутентификация
Описание аутентификации...

## Методы
Список методов API...

## Ошибки
Описание возможных ошибок...`}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Преимущества якорных ссылок:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Улучшают навигацию по длинным документам</li>
            <li>Повышают удобство использования документации</li>
            <li>Автоматически создаются для заголовков</li>
            <li>Работают во всех современных платформах Markdown</li>
            <li>Позволяют делиться ссылками на конкретные разделы</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Anchor className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать якорные ссылки внутри Markdown-документов для удобной навигации. 
              Якорные ссылки — мощный инструмент для структурирования длинных документов и улучшения пользовательского опыта. 
              В следующем уроке мы рассмотрим дополнительные возможности Markdown и его расширения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
