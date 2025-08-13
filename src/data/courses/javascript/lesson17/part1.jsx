// src/data/courses/git/lesson17/part1.jsx
import React from 'react';
import { Bug, Users, Calendar, Tag, Kanban, Zap, Settings, CheckCircle, FileText, MessageSquare } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Kanban className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📋 Урок 17: Issues и проектные доски</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Управление задачами и проектами в GitHub</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить работу с Issues для управления задачами и GitHub Projects для визуализации рабочего процесса.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Issues */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Что такое Issues?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Issues</span> — это инструмент GitHub для отслеживания задач, ошибок, улучшений и других элементов работы над проектом.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Основные функции Issues
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Отслеживание багов и ошибок</li>
                <li>Планирование новых функций</li>
                <li>Обсуждение улучшений</li>
                <li>Управление задачами команды</li>
                <li>Обратная связь от пользователей</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Особенности Issues
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Поддержка Markdown</li>
                <li>Комментарии и обсуждения</li>
                <li>Ссылки на коммиты и PR</li>
                <li>Уведомления и подписки</li>
                <li>Интеграция с проектами</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Вместо использования внешних трекеров задач, команда может создавать Issues для каждой найденной ошибки, нового функционала или задачи по улучшению документации.
            </p>
          </div>
        </div>
      </div>

      {/* Создание и управление Issues */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-purple-400" />
          Создание и управление Issues
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Эффективное использование Issues требует правильного оформления, назначения и организации.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Создание Issue */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Создание Issue</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Процесс создания качественного Issue:
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-300">
              <li>Перейдите во вкладку "Issues" в репозитории</li>
              <li>Нажмите кнопку "New issue"</li>
              <li>Заполните заголовок (ясно и кратко)</li>
              <li>Напишите подробное описание проблемы или задачи</li>
              <li>Добавьте необходимые элементы (шаблоны, скриншоты)</li>
              <li>Нажмите "Submit new issue"</li>
            </ol>
            
            <div className="mt-4 bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-blue-300 mb-2">Шаблон хорошего Issue:</h4>
              <div className="text-sm">
                <div className="mb-2">
                  <span className="font-medium text-white">Заголовок:</span>
                  <div className="text-gray-300 mt-1">[BUG] Приложение падает при попытке загрузки больших файлов</div>
                </div>
                <div className="mb-2">
                  <span className="font-medium text-white">Описание:</span>
                  <div className="text-gray-300 mt-1">
                    При попытке загрузить файл размером более 100MB приложение аварийно завершает работу.
                  </div>
                </div>
                <div className="mb-2">
                  <span className="font-medium text-white">Шаги для воспроизведения:</span>
                  <ol className="list-decimal pl-5 text-gray-300 mt-1">
                    <li>Открыть приложение</li>
                    <li>Выбрать файл размером более 100MB</li>
                    <li>Нажать кнопку "Загрузить"</li>
                    <li>Наблюдать падение приложения</li>
                  </ol>
                </div>
                <div>
                  <span className="font-medium text-white">Ожидаемое поведение:</span>
                  <div className="text-gray-300 mt-1">
                    Файл должен загружаться или отображаться сообщение об ограничении размера.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Назначение и метки */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Назначение и метки</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Организация Issues с помощью назначений и меток:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Назначение (Assignees)
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Назначайте конкретных исполнителей</li>
                  <li>Можно назначить нескольких человек</li>
                  <li>Используйте для распределения задач</li>
                  <li>Позволяет отслеживать загрузку команды</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Метки (Labels)
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-500/20 px-2 py-1 rounded text-xs">bug</span>
                    <span className="text-gray-400 text-xs">Ошибки и баги</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-500/20 px-2 py-1 rounded text-xs">feature</span>
                    <span className="text-gray-400 text-xs">Новый функционал</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-500/20 px-2 py-1 rounded text-xs">documentation</span>
                    <span className="text-gray-400 text-xs">Документация</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-yellow-500/20 px-2 py-1 rounded text-xs">enhancement</span>
                    <span className="text-gray-400 text-xs">Улучшения</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Milestones */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">3. Milestones</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Использование Milestones для планирования и отслеживания прогресса:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-300 mb-2">Что такое Milestone?</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Коллекция связанных Issues</li>
                  <li>Представляет собой цель или релиз</li>
                  <li>Имеет дату завершения</li>
                  <li>Показывает прогресс выполнения</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-blue-300 mb-2">Примеры Milestones</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>v1.0.0 - Первый релиз</li>
                  <li>v1.1.0 - Добавление авторизации</li>
                  <li>Q1 2024 - Планы на квартал</li>
                  <li>Bug Fixes - Исправление критических ошибок</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-sm">
              ⚡ <span className="font-medium">Совет:</span> Создавайте Milestones для каждого спринта или релиза, чтобы лучше планировать и отслеживать прогресс команды.
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Projects и Kanban доски */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Kanban className="w-5 h-5 text-cyan-400" />
          GitHub Projects и Kanban доски
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            GitHub Projects — это инструмент для визуального управления задачами с помощью Kanban-досок.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Kanban className="w-5 h-5" />
              Основы Kanban
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">📋</span>
                <span>Визуализация рабочего процесса</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">📊</span>
                <span>Ограничение количества задач в работе</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">🔄</span>
                <span>Управление потоком задач</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">📈</span>
                <span>Измерение производительности</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Стандартные колонки
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="bg-gray-700 px-2 py-1 rounded text-xs">To Do</span>
                <span>Планируемые задачи</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-700/30 px-2 py-1 rounded text-xs">In Progress</span>
                <span>Задачи в работе</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-yellow-700/30 px-2 py-1 rounded text-xs">Review</span>
                <span>На проверке</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-green-700/30 px-2 py-1 rounded text-xs">Done</span>
                <span>Завершенные задачи</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Создание GitHub Project:</h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-300">
            <li>Перейдите во вкладку "Projects" в репозитории</li>
            <li>Нажмите "New project"</li>
            <li>Выберите шаблон (Basic kanban, Automated kanban и т.д.)</li>
            <li>Введите название проекта (например, "Разработка v1.0")</li>
            <li>Нажмите "Create project"</li>
          </ol>
          
          <div className="mt-4 bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-cyan-300 mb-2">Пример структуры проекта:</h4>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-gray-700 p-3 rounded">
                <div className="font-bold text-white">To Do</div>
                <div className="text-xs text-gray-400 mt-1">12 задач</div>
              </div>
              <div className="bg-blue-900/30 p-3 rounded">
                <div className="font-bold text-blue-300">In Progress</div>
                <div className="text-xs text-gray-400 mt-1">5 задач</div>
              </div>
              <div className="bg-yellow-900/30 p-3 rounded">
                <div className="font-bold text-yellow-300">Review</div>
                <div className="text-xs text-gray-400 mt-1">3 задачи</div>
              </div>
              <div className="bg-green-900/30 p-3 rounded">
                <div className="font-bold text-green-300">Done</div>
                <div className="text-xs text-gray-400 mt-1">24 задачи</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Автоматизация и интеграции */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Автоматизация и интеграции
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Автоматизация рабочих процессов помогает сэкономить время и избежать ошибок.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Автоматические переходы</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>При создании Issue → To Do</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>При назначении → In Progress</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>При создании PR → Review</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>При мерже PR → Done</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Интеграция с Issues</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">#</span>
                <span>Автоматическое добавление Issues в проект</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">#</span>
                <span>Синхронизация статусов</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">#</span>
                <span>Обновление при закрытии Issue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">#</span>
                <span>Связывание с Pull Request</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg border border-yellow-700/30">
          <h4 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Пример автоматизации через шаблоны
          </h4>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-gray-300"><code>{`# .github/ISSUE_TEMPLATE/bug_report.md

name: Bug Report
about: Создать отчет об ошибке
title: '[BUG] '
labels: bug
assignees: ''

body:
  - type: textarea
    attributes:
      label: Описание ошибки
      description: Четкое и краткое описание ошибки
    validations:
      required: true
      
  - type: textarea
    attributes:
      label: Шаги для воспроизведения
      description: Шаги для воспроизведения поведения
      placeholder: |
        1. Перейти к '...'
        2. Нажать на '....'
        3. Прокрутить вниз до '....'
        4. Увидеть ошибку
    validations:
      required: true
      
  - type: textarea
    attributes:
      label: Ожидаемое поведение
      description: Четкое и краткое описание ожидаемого результата
    validations:
      required: true`}</code></pre>
          </div>
        </div>
      </div>

      {/* Лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-green-400" />
          Лучшие практики использования Issues и Projects
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Следование лучшим практикам помогает эффективно управлять проектами и задачами.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Для Issues
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Используйте понятные заголовки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Добавляйте подробные описания</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Назначайте ответственных</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Используйте метки последовательно</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Связывайте с Milestones</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Kanban className="w-5 h-5" />
              Для Projects
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Создавайте отдельные доски для разных целей</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Настройте автоматические переходы</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Регулярно обновляйте статусы</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Используйте фильтры и сортировку</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Проводите ретроспективы</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-purple-700/30">
          <h4 className="font-bold text-purple-300 mb-3">Полезные команды в комментариях:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-green-300">/assign @username</code>
              <div className="text-xs text-gray-400 mt-1">Назначить исполнителя</div>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-blue-300">/label bug</code>
              <div className="text-xs text-gray-400 mt-1">Добавить метку</div>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-yellow-300">/milestone v1.0</code>
              <div className="text-xs text-gray-400 mt-1">Добавить к Milestone</div>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-sm text-purple-300">Closes #123</code>
              <div className="text-xs text-gray-400 mt-1">Закрыть Issue через PR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 📋</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как эффективно использовать Issues для управления задачами и GitHub Projects для визуализации рабочего процесса. Вы научились создавать и организовывать Issues, использовать метки и Milestones, а также работать с Kanban-досками.
              В следующем уроке мы рассмотрим работу с конфликтами слияния.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;