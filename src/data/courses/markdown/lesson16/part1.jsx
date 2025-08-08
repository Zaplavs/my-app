// src/data/courses/markdown/lesson16/part1.jsx
import React from 'react';
import { MessageCircle, EyeOff, Edit3, FileText, Code } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <MessageCircle className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💬 Урок 16: Комментарии и скрытый текст в Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Заметки для себя и временное скрытие контента</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование HTML-комментариев в Markdown-документах для добавления заметок и временного скрытия контента.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое комментарии в Markdown */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MessageCircle className="w-5 h-5 text-green-400" />
          Что такое комментарии в Markdown?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Комментарии</span> в Markdown — это специальные аннотации, которые не отображаются при рендеринге документа. 
            Они служат для добавления поясняющей информации, заметок или временного скрытия частей текста.
          </p>
          <p>
            Важно понимать, что <span className="font-medium">Markdown сам по себе не имеет встроенного синтаксиса для комментариев</span>. 
            Однако, поскольку Markdown позволяет вставлять HTML, мы можем использовать HTML-комментарии.
          </p>
        </div>
      </div>

      {/* Синтаксис HTML-комментариев */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Синтаксис HTML-комментариев
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            HTML-комментарии создаются с использованием специальной разметки:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Базовый синтаксис:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown с комментарием:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`Это видимый текст.
<!-- Это комментарий, он не будет отображаться -->
Это тоже видимый текст.`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <p>Это видимый текст.</p>
                <p className="mt-2">Это тоже видимый текст.</p>
                <p className="mt-4 text-gray-500 text-sm italic">
                  (Комментарий полностью скрыт при рендеринге)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Многострочные комментарии:</h3>
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`<!-- 
Это многострочный
комментарий
-->`}</code></pre>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300 text-center text-gray-500 italic">
                (Комментарий полностью скрыт)
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Комментарии в середине строки:</h3>
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`Текст до <!-- комментарий --> текст после`}</code></pre>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <p>Текст до текст после</p>
                <p className="mt-4 text-gray-500 text-sm italic">
                  (Комментарий в середине строки также скрыт)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Важные моменты:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Комментарии начинаются с <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<!--'}</code> и заканчиваются <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'-->'}</code></li>
            <li>Комментарии не отображаются в финальном отрендеренном документе</li>
            <li>Могут занимать одну или несколько строк</li>
            <li>Могут находиться в любом месте документа</li>
            <li>Поддерживаются большинством рендереров Markdown</li>
          </ul>
        </div>
      </div>

      {/* Применение комментариев */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-cyan-400" />
          Применение комментариев
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Комментарии находят широкое применение в различных сценариях:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Edit3 className="w-5 h-5" />
              Личные заметки
            </h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 mb-3"><code>{`# План проекта

## Цели
- Реализовать основной функционал
- <!-- TODO: Добавить раздел о безопасности -->
- Провести тестирование

<!-- ВАЖНО: Не забыть обновить зависимости перед релизом -->`}</code></pre>
            <p className="text-gray-400 text-xs">
              Комментарии помогают оставлять напоминания и задачи для себя
            </p>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <EyeOff className="w-5 h-5" />
              Временное скрытие контента
            </h3>
            <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 mb-3"><code>{`## Основной текст

Этот абзац виден всем.

<!-- 
## Черновик раздела
Этот текст еще не готов, 
поэтому временно скрыт.
-->`}</code></pre>
            <p className="text-gray-400 text-xs">
              Полезно для скрытия незавершенного или временного контента
            </p>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Пояснения для коллег
          </h3>
          <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 mb-3"><code>{`## Техническая документация

### API Endpoints

<!-- Следующий эндпоинт устарел и будет удален в v2.0 -->
~~DELETE /api/v1/users/{id}~~

POST /api/v2/users/delete
<!-- Новый эндпоинт для удаления пользователей -->`}</code></pre>
          <p className="text-gray-400 text-xs">
            Комментарии помогают объяснять изменения и решения другим разработчикам
          </p>
        </div>
      </div>

      {/* Ограничения и особенности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <EyeOff className="w-5 h-5 text-orange-400" />
          Ограничения и особенности комментариев
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При использовании комментариев важно учитывать следующие ограничения:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
              <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
              Безопасность
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-400 mt-1">•</span>
                <span><span className="font-medium">Комментарии видны в исходном коде</span> — не храните конфиденциальную информацию</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-400 mt-1">•</span>
                <span><span className="font-medium">Не все платформы</span> одинаково обрабатывают комментарии</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-400 mt-1">•</span>
                <span>Некоторые системы могут <span className="font-medium">удалять</span> или <span className="font-medium">изменять</span> комментарии</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <span className="bg-yellow-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
              Совместимость
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">•</span>
                <span><span className="font-medium">Не все редакторы</span> показывают комментарии одинаково в режиме редактирования</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">•</span>
                <span>Некоторые <span className="font-medium">упрощенные просмотрщики</span> могут игнорировать комментарии</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400 mt-1">•</span>
                <span>Комментарии увеличивают <span className="font-medium">размер файла</span>, хоть и незначительно</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важное предупреждение:
          </h4>
          <p className="text-gray-300 text-sm">
            Комментарии в Markdown - это HTML-комментарии, поэтому они будут видны любому, кто посмотрит исходный код документа. 
            Не используйте их для скрытия конфиденциальной информации!
          </p>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-pink-400" />
          Практические примеры использования
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как можно эффективно использовать комментарии в реальных документах:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Документация проекта:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Руководство разработчика

## Структура проекта

<!-- 
Структура может измениться в следующей версии
Следите за обновлениями в вики
-->

### Основные директории
- src/ - исходный код
- tests/ - unit-тесты
<!-- - docs/ - документация (временно отключена) -->

<!-- TODO: Добавить раздел о конфигурации -->`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">План работы:</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# План спринта

## Задачи на неделю

### Понедельник
- [x] Обзор требований
- [ ] Начало разработки <!-- Приоритет: высокий -->

### Вторник
<!-- 
На встрече с заказчиком уточнить:
1. Формат отчетов
2. Сроки сдачи
-->
- [ ] Продолжение разработки`}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Советы по использованию комментариев:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте комментарии для объяснения сложных решений</li>
            <li>Добавляйте TODO-метки для задач, которые нужно выполнить позже</li>
            <li>Скрывайте временный контент, а не удаляйте его полностью</li>
            <li>Пишите понятные и информативные комментарии</li>
            <li>Не злоупотребляйте комментариями - используйте их умеренно</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <MessageCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как использовать комментарии в Markdown-документах для добавления заметок и временного скрытия контента. 
              Комментарии - полезный инструмент для организации работы, планирования и совместной разработки. 
              Помните, что комментарии видны в исходном коде, поэтому не используйте их для скрытия конфиденциальной информации. 
              В следующем уроке мы рассмотрим дополнительные возможности Markdown и его расширения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
