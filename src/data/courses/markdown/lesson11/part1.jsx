// src/data/courses/markdown/lesson11/part1.jsx
import React from 'react';
import { CheckSquare, Square, ListChecks, Target, Calendar } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <ListChecks className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✅ Урок 11: Todo-списки (чекбоксы) в Markdown</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Планирование задач и отслеживание прогресса с помощью интерактивных списков</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить синтаксис создания todo-списков в Markdown, понять их применение для планирования и отслеживания выполнения задач.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое todo-списки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-green-400" />
          Что такое todo-списки в Markdown?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Todo-списки (списки задач) — это специальный тип маркированных списков в Markdown, который позволяет создавать интерактивные чекбоксы. 
            Они идеально подходят для планирования, составления списков дел, отслеживания прогресса и управления задачами.
          </p>
          <p>
            В отличие от обычных списков, todo-списки поддерживают визуальное отображение состояния задачи — выполнена или нет.
          </p>
        </div>
      </div>

      {/* Синтаксис todo-списков */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckSquare className="w-5 h-5 text-purple-400" />
          Синтаксис todo-списков
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Todo-списки создаются с использованием специального синтаксиса внутри маркированных списков:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Невыполненные задачи:</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`- [ ] Задача 1
- [ ] Задача 2
- [ ] Задача 3`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300 space-y-1">
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-gray-500" />
                    <span>Задача 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-gray-500" />
                    <span>Задача 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-gray-500" />
                    <span>Задача 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Выполненные задачи:</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Markdown:</p>
                <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`- [x] Выполненная задача 1
- [x] Выполненная задача 2
- [X] Выполненная задача 3`}</code></pre>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Результат:</p>
                <div className="text-gray-300 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-green-500" />
                    <span className="line-through">Выполненная задача 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-green-500" />
                    <span className="line-through">Выполненная задача 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-green-500" />
                    <span className="line-through">Выполненная задача 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Важные моменты:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">- [ ]</code> для невыполненных задач</li>
            <li>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">- [x]</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded">- [X]</code> для выполненных задач</li>
            <li>Между квадратными скобками должен быть один пробел (для невыполненных) или <code className="bg-gray-700 px-1.5 py-0.5 rounded">x</code>/<code className="bg-gray-700 px-1.5 py-0.5 rounded">X</code> (для выполненных)</li>
            <li>Между закрывающей скобкой и текстом задачи должен быть один пробел</li>
            <li>Можно использовать как дефис <code className="bg-gray-700 px-1.5 py-0.5 rounded">-</code>, так и звездочку <code className="bg-gray-700 px-1.5 py-0.5 rounded">*</code> в качестве маркера списка</li>
          </ul>
        </div>
      </div>

      {/* Смешанные списки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <ListChecks className="w-5 h-5 text-cyan-400" />
          Смешанные todo-списки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Todo-списки можно комбинировать с обычными маркированными и нумерованными списками для создания сложных структур:
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Комбинированный список:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Markdown:</p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300"><code>{`# План проекта

## Основные задачи
- [x] Подготовить техническое задание
- [ ] Разработать архитектуру
- [ ] Написать документацию

## Дополнительные задачи
- [x] Провести исследование рынка
  - [x] Анализ конкурентов
  - [ ] Опросы пользователей
- [ ] Подготовить презентацию
  - [ ] Создать слайды
  - [ ] Подготовить демонстрацию`}</code></pre>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Результат:</p>
              <div className="text-gray-300">
                <h3 className="font-bold text-lg mb-2">План проекта</h3>
                <h4 className="font-semibold mb-2">Основные задачи</h4>
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-green-500" />
                    <span className="line-through">Подготовить техническое задание</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-gray-500" />
                    <span>Разработать архитектуру</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-gray-500" />
                    <span>Написать документацию</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Дополнительные задачи</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-green-500" />
                    <span className="line-through">Провести исследование рынка</span>
                    <div className="ml-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-green-500" />
                        <span className="line-through">Анализ конкурентов</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Square className="w-4 h-4 text-gray-500" />
                        <span>Опросы пользователей</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-gray-500" />
                    <span>Подготовить презентацию</span>
                    <div className="ml-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <Square className="w-4 h-4 text-gray-500" />
                        <span>Создать слайды</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Square className="w-4 h-4 text-gray-500" />
                        <span>Подготовить демонстрацию</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Поддержка платформами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Target className="w-5 h-5 text-orange-400" />
          Поддержка todo-списков платформами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Todo-списки поддерживаются большинством современных платформ и редакторов Markdown:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <span className="bg-green-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
              GitHub
            </h3>
            <p className="text-gray-300 text-sm">
              Полная поддержка в README.md, issues, pull requests. Можно интерактивно отмечать задачи.
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
              <span className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
              GitLab
            </h3>
            <p className="text-gray-300 text-sm">
              Поддержка в issues, merge requests и wiki. Работает аналогично GitHub.
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <span className="bg-purple-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
              Obsidian
            </h3>
            <p className="text-gray-300 text-sm">
              Отличная поддержка с возможностью автоматического подсчета прогресса.
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
              <span className="bg-yellow-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
              VS Code
            </h3>
            <p className="text-gray-300 text-sm">
              Поддержка в предпросмотре. Некоторые расширения позволяют интерактивную работу.
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-700/30">
            <h3 className="font-bold text-pink-300 mb-2 flex items-center gap-2">
              <span className="bg-pink-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
              Typora
            </h3>
            <p className="text-gray-300 text-sm">
              Визуальное отображение чекбоксов с возможностью интерактивного переключения.
            </p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-2 flex items-center gap-2">
              <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">!</span>
              Обычные редакторы
            </h3>
            <p className="text-gray-300 text-sm">
              Могут не отображать чекбоксы визуально, но синтаксис остается читаемым.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
          <h4 className="font-bold text-red-300 mb-2 flex items-center gap-2">
            <span className="bg-red-500/20 w-6 h-6 rounded-full flex items-center justify-center text-sm">!</span>
            Важное замечание:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Не все редакторы поддерживают интерактивное переключение чекбоксов</li>
            <li>В некоторых системах todo-списки могут отображаться как обычный текст</li>
            <li>Всегда проверяйте отображение в вашей целевой платформе</li>
          </ul>
        </div>
      </div>

      {/* Практическое применение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Calendar className="w-5 h-5 text-pink-400" />
          Практическое применение todo-списков
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Todo-списки находят применение в различных сценариях:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Планирование проекта</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Разработка веб-приложения

## Этапы разработки
- [x] Анализ требований
- [x] Проектирование архитектуры
- [ ] Разработка frontend
  - [x] Верстка главной страницы
  - [ ] Реализация форм
  - [ ] Интеграция с API
- [ ] Разработка backend
  - [x] Настройка сервера
  - [ ] Создание API endpoints
  - [ ] Подключение базы данных
- [ ] Тестирование
- [ ] Деплой`}</code></pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Личные задачи</h3>
            <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300"><code>{`# Список дел на неделю

## Работа
- [x] Отправить отчет
- [ ] Подготовить презентацию
- [ ] Провести встречу с командой

## Личное
- [ ] Записаться к врачу
- [x] Купить продукты
- [ ] Заняться спортом
  - [x] Утренняя пробежка
  - [ ] Тренировка в зале`}</code></pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold text-white mb-2">Преимущества todo-списков:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Визуальное отслеживание прогресса</li>
            <li>Простота использования и понимания</li>
            <li>Интеграция с системами управления проектами</li>
            <li>Возможность структурирования сложных задач</li>
            <li>Поддержка в популярных платформах разработки</li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckSquare className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как создавать todo-списки в Markdown и использовать их для планирования задач и отслеживания прогресса. 
              Todo-списки — мощный инструмент для организации работы и личных дел, особенно в среде разработки программного обеспечения. 
              В следующем уроке мы рассмотрим дополнительные возможности Markdown и его расширения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
