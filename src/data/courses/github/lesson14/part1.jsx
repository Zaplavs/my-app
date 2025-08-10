// src/data/courses/git/lesson14/part1.jsx
import React from 'react';
import { GitFork, GitBranch, RefreshCw, Users, Zap, Server } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <GitFork className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🍴 Урок 14: Работа с Fork и Upstream</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Синхронизация форков с оригинальными репозиториями</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять концепцию fork'ов, научиться синхронизировать их с upstream репозиториями и эффективно участвовать в open-source проектах.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Fork */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitFork className="w-5 h-5 text-green-400" />
          Что такое Fork?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Fork (<span className="font-medium text-green-300">форк</span>) — это полная копия чужого репозитория, созданная на вашем аккаунте в Git-сервисе (GitHub, GitLab и т.д.):
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Позволяет вносить изменения без влияния на оригинальный проект</li>
            <li>Служит отправной точкой для внесения вклада в open-source проекты</li>
            <li>Создает независимую ветку развития кода</li>
            <li>Позволяет экспериментировать без риска повредить оригинал</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Использование:</span> Fork'и широко используются в open-source сообществе для внесения вклада в проекты
            </p>
          </div>
        </div>
      </div>

      {/* Основные понятия: Origin и Upstream */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-purple-400" />
          Origin и Upstream: ключевые понятия
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            При работе с fork'ами важно понимать разницу между двумя типами remote'ов:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Origin */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitFork className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Origin</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Ваш fork репозитория на GitHub/GitLab</li>
              <li>Куда вы отправляете свои изменения (<code className="bg-gray-700 px-1.5 py-0.5 rounded">git push origin main</code>)</li>
              <li>Откуда вы получаете свои изменения (<code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull origin main</code>)</li>
              <li>По умолчанию создается при клонировании</li>
            </ul>
            <div className="mt-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded">
              <p className="text-purple-300 text-sm">
                ⚡ <span className="font-medium">Назначение:</span> Ваша рабочая копия проекта
              </p>
            </div>
          </div>

          {/* Upstream */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Upstream</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Оригинальный репозиторий, который вы форкнули</li>
              <li>Откуда вы получаете обновления оригинального проекта</li>
              <li>Не используется для отправки изменений (нет прав)</li>
              <li>Добавляется вручную после клонирования fork'а</li>
            </ul>
            <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded">
              <p className="text-green-300 text-sm">
                ⚡ <span className="font-medium">Назначение:</span> Источник обновлений оригинального проекта
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Создание и настройка Fork */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Users className="w-5 h-5 text-orange-400" />
          Создание и настройка Fork
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Процесс работы с fork'ом включает несколько этапов:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Этап 1: Создание Fork */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitFork className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">Этап 1: Создание Fork'а</h3>
            </div>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li>Перейдите на страницу репозитория, который хотите форкнуть</li>
              <li>Нажмите кнопку "Fork" в правом верхнем углу</li>
              <li>Выберите свой аккаунт в качестве владельца fork'а</li>
              <li>Дождитесь завершения процесса создания fork'а</li>
            </ol>
            <div className="mt-3 bg-gray-800 p-3 rounded">
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Результат:</span> Копия репозитория теперь находится на вашем аккаунте
              </p>
            </div>
          </div>

          {/* Этап 2: Клонирование Fork */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">Этап 2: Клонирование Fork'а</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Перейдите в ваш fork репозитория</li>
              <li>Скопируйте URL для клонирования (HTTPS или SSH)</li>
              <li>Клонируйте репозиторий локально:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-sm mt-3">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`git clone https://github.com/YOUR_USERNAME/original-repo.git
cd original-repo`}</code></pre>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-3">
              <li>Проверьте существующие remote'ы:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-sm mt-3">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`git remote -v`}</code></pre>
            </div>
          </div>

          {/* Этап 3: Добавление Upstream */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <RefreshCw className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Этап 3: Добавление Upstream</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Добавьте upstream remote, указывающий на оригинальный репозиторий:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-sm mt-3">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`git remote add upstream https://github.com/ORIGINAL_OWNER/original-repo.git`}</code></pre>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-3">
              <li>Проверьте все remote'ы:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-sm mt-3">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`git remote -v`}</code></pre>
            </div>
            <div className="mt-3 bg-green-900/20 p-3 rounded">
              <p className="text-green-300 text-sm">
                <span className="font-medium">Вывод должен содержать:</span>
                <br />
                origin (ваш fork) и upstream (оригинальный репозиторий)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Синхронизация с Upstream */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RefreshCw className="w-5 h-5 text-cyan-400" />
          Синхронизация Fork'а с Upstream
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Регулярная синхронизация с upstream необходима для поддержания актуальности вашего fork'а:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Получение изменений */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Download className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-cyan-300">Получение изменений из Upstream</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Получение всех изменений из upstream
git fetch upstream

# Получение изменений из конкретной ветки upstream
git fetch upstream main

# Получение и удаление удаленных веток
git fetch --prune upstream`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch</code> для безопасного получения изменений</li>
              <li>Изменения скачиваются в tracking ветки (<code className="bg-gray-700 px-1.5 py-0.5 rounded">upstream/main</code>)</li>
              <li>Ваша рабочая ветка остается без изменений</li>
            </ul>
          </div>

          {/* Интеграция изменений */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitMerge className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Интеграция изменений в ваш Fork</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Переключение на вашу основную ветку
git checkout main

# Интеграция изменений с merge
git merge upstream/main

# Или интеграция с rebase (для линейной истории)
git rebase upstream/main

# Отправка обновлений в ваш fork
git push origin main`}</code></pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-purple-300 font-medium text-sm">Merge подход</p>
                <ul className="list-disc pl-5 text-xs space-y-1 text-gray-300 mt-2">
                  <li>Создает коммит слияния</li>
                  <li>Сохраняет полную историю</li>
                  <li>Безопасен для сложных изменений</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-blue-300 font-medium text-sm">Rebase подход</p>
                <ul className="list-disc pl-5 text-xs space-y-1 text-gray-300 mt-2">
                  <li>Создает линейную историю</li>
                  <li>Более чистая история коммитов</li>
                  <li>Подходит для регулярных обновлений</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Автоматическая синхронизация */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Автоматическая синхронизация</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Настройте регулярную синхронизацию (например, еженедельно)</li>
              <li>Используйте скрипты для автоматизации процесса:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-sm mt-3">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`#!/bin/bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main`}</code></pre>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-3">
              <li>Некоторые Git-сервисы предлагают автоматическую синхронизацию через веб-интерфейс</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Работа с Feature Branches */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-yellow-400" />
          Работа с Feature Branches в Fork'е
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При внесении вклада в open-source проекты рекомендуется использовать feature ветки:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Создание Feature Branch */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-3">
              <GitBranch className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-300">Создание Feature Branch'а</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Убедитесь, что основная ветка актуальна
git checkout main
git fetch upstream
git merge upstream/main

# Создайте feature ветку
git checkout -b feature/fix-bug-description`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li>Всегда начинайте с актуальной основной ветки</li>
              <li>Используйте описательные имена для веток</li>
              <li>Одна ветка — одна функция или исправление</li>
            </ul>
          </div>

          {/* Отправка изменений и Pull Request */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">Отправка изменений и создание Pull Request</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Отправка feature ветки в ваш fork
git push -u origin feature/fix-bug-description

# После создания Pull Request продолжайте работу
git checkout feature/fix-bug-description
# ... внесите изменения ...
git add .
git commit -m "Improve bug fix implementation"
git push origin feature/fix-bug-description`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">-u</code> для установки upstream tracking</li>
              <li>Можете продолжать отправлять изменения в ветку после создания PR</li>
              <li>Каждый push автоматически обновляет Pull Request</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Лучшие практики и советы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-green-400" />
          Лучшие практики работы с Fork'ами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Следование лучшим практикам поможет эффективно работать с fork'ами:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Регулярная синхронизация
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>Синхронизируйте fork еженедельно или перед началом работы</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>Проверяйте наличие обновлений перед созданием Pull Request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch --prune</code> для очистки</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              Управление ветками
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✅</span>
                <span>Используйте feature ветки для каждой задачи</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✅</span>
                <span>Удаляйте использованные ветки после мержа</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✅</span>
                <span>Держите main ветку чистой и синхронизированной</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Внесение вклада
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✅</span>
                <span>Читайте CONTRIBUTING.md перед началом работы</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✅</span>
                <span>Следуйте стилю кода проекта</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">✅</span>
                <span>Пишите понятные сообщения коммитов</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Безопасность и чистота
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">✅</span>
                <span>Никогда не отправляйте изменения напрямую в upstream</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">✅</span>
                <span>Не храните секреты в fork'ах</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">✅</span>
                <span>Регулярно обновляйте локальные копии</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Распространенные ошибки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          Распространенные ошибки и их решение
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Частые проблемы при работе с fork'ами и их решения:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-red-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-red-300">Забыл добавить upstream remote</h4>
              <p className="text-gray-400 text-sm">
                Решение: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git remote add upstream URL</code>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-orange-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-orange-300">Попытка push в upstream без прав</h4>
              <p className="text-gray-400 text-sm">
                Решение: Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push origin</code>, не <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push upstream</code>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Конфликты при синхронизации</h4>
              <p className="text-gray-400 text-sm">
                Решение: Используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch</code> + ручное слияние или <code className="bg-gray-700 px-1.5 py-0.5 rounded">git rebase</code>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Устаревший fork</h4>
              <p className="text-gray-400 text-sm">
                Решение: Регулярно синхронизируйте с upstream: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git fetch upstream && git merge upstream/main</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <GitFork className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎯</h3>
            <p className="text-gray-300">
              Теперь вы умеете работать с fork'ами и синхронизировать их с upstream! Вы научились создавать fork'и, настраивать remote'ы, синхронизировать изменения и эффективно участвовать в open-source проектах. В следующем уроке мы рассмотрим работу с тегами в Git.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;