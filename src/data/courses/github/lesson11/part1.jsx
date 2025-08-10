// src/data/courses/git/lesson11/part1.jsx
import React from 'react';
import { Server, Plus, Eye, Edit3, GitBranch, Zap, Cloud } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Server className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🌐 Урок 11: Работа с удаленными репозиториями</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Команда git remote</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое удаленные репозитории, и научиться управлять ими с помощью команды git remote.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое удаленный репозиторий */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Cloud className="w-5 h-5 text-green-400" />
          Что такое удаленный репозиторий?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Удаленный репозиторий (<span className="font-medium text-green-300">remote repository</span>) — это версия вашего проекта, хранящаяся на удаленном сервере:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Позволяет синхронизировать код между разработчиками</li>
            <li>Служит резервной копией проекта</li>
            <li>Обеспечивает централизованное хранение истории</li>
            <li>Позволяет сотрудничать над проектом</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Популярные сервисы:</span> GitHub, GitLab, Bitbucket, Azure DevOps
            </p>
          </div>
        </div>
      </div>

      {/* Команда git remote */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-purple-400" />
          Команда git remote
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git remote</code> используется для управления подключениями к удаленным репозиториям.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Просмотр удаленных репозиториев */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Просмотр удаленных репозиториев</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Просмотр имен удаленных репозиториев
git remote

# Просмотр имен с URL
git remote -v

# Подробная информация о конкретном remote
git remote show origin`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git remote</code> — показывает список имен remote'ов</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git remote -v</code> — показывает имена и URL (verbose)</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">git remote show [name]</code> — подробная информация</li>
            </ul>
            <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded">
              <p className="text-purple-300 text-sm">
                ⚡ <span className="font-medium">Совет:</span> По умолчанию первый remote называют <code className="bg-gray-700 px-1.5 py-0.5 rounded">origin</code>
              </p>
            </div>
          </div>

          {/* Добавление удаленного репозитория */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Plus className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Добавление удаленного репозитория</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Добавление remote с именем origin
git remote add origin https://github.com/username/repository.git

# Добавление нескольких remote'ов
git remote add upstream https://github.com/original/repository.git
git remote add backup git@backup-server.com:repo.git`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">origin</code> — стандартное имя основного remote</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">upstream</code> — часто используется для upstream репозитория</li>
              <li>Можно добавлять несколько remote'ов для одного локального репозитория</li>
            </ul>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-green-300 font-medium text-sm">HTTPS URL</p>
                <p className="text-gray-400 text-xs mt-1">https://github.com/user/repo.git</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-blue-300 font-medium text-sm">SSH URL</p>
                <p className="text-gray-400 text-xs mt-1">git@github.com:user/repo.git</p>
              </div>
            </div>
          </div>

          {/* Переименование и удаление */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Edit3 className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">Переименование и удаление remote</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Переименование remote
git remote rename old-name new-name

# Удаление remote
git remote remove remote-name

# Изменение URL существующего remote
git remote set-url origin new-url.git`}</code></pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-bold text-blue-300 mb-2">Переименование</h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                  <li>Изменяет имя remote в локальной конфигурации</li>
                  <li>Не влияет на сам удаленный репозиторий</li>
                  <li>Полезно для лучшей читаемости</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-300 mb-2">Удаление</h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                  <li>Удаляет ссылку на remote из локальной конфигурации</li>
                  <li>Не удаляет сам удаленный репозиторий</li>
                  <li>Удаляет все связанные настройки</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Server className="w-5 h-5 text-blue-400" />
          Практические примеры работы с remote
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Рассмотрим типичные сценарии работы с удаленными репозиториями:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Сценарий 1: Новый проект */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создание нового проекта с remote
            </h3>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# 1. Создаем локальный репозиторий
mkdir my-project
cd my-project
git init

# 2. Создаем файлы проекта
echo "# My Project" > README.md
git add README.md
git commit -m "Initial commit"

# 3. Создаем удаленный репозиторий на GitHub (вручную или через API)
# 4. Добавляем remote
git remote add origin https://github.com/username/my-project.git

# 5. Пушим код в удаленный репозиторий
git push -u origin main`}</code></pre>
            </div>
          </div>

          {/* Сценарий 2: Клонирование существующего проекта */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Работа с клонированным проектом
            </h3>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# 1. Клонируем существующий репозиторий
git clone https://github.com/username/existing-project.git
cd existing-project

# 2. Просматриваем remote'ы (уже настроены)
git remote -v

# Вывод:
# origin  https://github.com/username/existing-project.git (fetch)
# origin  https://github.com/username/existing-project.git (push)

# 3. Добавляем дополнительный remote (например, upstream)
git remote add upstream https://github.com/original/existing-project.git`}</code></pre>
            </div>
          </div>

          {/* Сценарий 3: Работа с несколькими remote */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Много remote сценариев
            </h3>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Просмотр всех remote'ов
git remote -v

# Добавляем backup remote
git remote add backup git@backup-server.com:my-project.git

# Пушим во все remote'ы
git push origin main
git push backup main

# Получаем изменения только с определенного remote
git fetch upstream

# Мержим изменения из upstream
git merge upstream/main`}</code></pre>
            </div>
            <div className="mt-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded text-sm">
              <p className="text-purple-300">
                💡 <span className="font-medium">Использование:</span> Много remote полезно для зеркалирования, backup'ов и работы с форками
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Настройка аутентификации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Аутентификация с удаленными репозиториями
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для работы с приватными репозиториями и выполнения push операций требуется аутентификация:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Cloud className="w-4 h-4" />
              HTTPS аутентификация
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Легко настраивается</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Работает через прокси</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Использует токены доступа</span>
              </li>
            </ul>
            <div className="mt-3 bg-gray-800 p-3 rounded text-xs">
              <p className="text-gray-300">Пример URL: https://username:token@github.com/user/repo.git</p>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Server className="w-4 h-4" />
              SSH аутентификация
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Более безопасна</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Не требует ввода пароля каждый раз</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Использует SSH ключи</span>
              </li>
            </ul>
            <div className="mt-3 bg-gray-800 p-3 rounded text-xs">
              <p className="text-gray-300">Пример URL: git@github.com:user/repo.git</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Управление учетными данными</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-orange-300 font-medium">Git Credential Helper</p>
              <p className="text-gray-400 text-xs mt-1">git config --global credential.helper store</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-orange-300 font-medium">SSH Agent</p>
              <p className="text-gray-400 text-xs mt-1">ssh-add ~/.ssh/id_rsa</p>
            </div>
          </div>
        </div>
      </div>

      {/* Распространенные ошибки и решения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-red-400" />
          Распространенные ошибки и их решения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Частые проблемы при работе с удаленными репозиториями:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-red-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-red-300">fatal: remote origin already exists</h4>
              <p className="text-gray-400 text-sm">Решение: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git remote set-url origin new-url.git</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded">git remote remove origin</code> затем <code className="bg-gray-700 px-1.5 py-0.5 rounded">git remote add origin url.git</code></p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-orange-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-orange-300">Permission denied (publickey)</h4>
              <p className="text-gray-400 text-sm">Решение: Проверьте SSH ключи, добавьте их в ssh-agent: <code className="bg-gray-700 px-1.5 py-0.5 rounded">ssh-add ~/.ssh/id_rsa</code></p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-yellow-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300">Authentication failed</h4>
              <p className="text-gray-400 text-sm">Решение: Проверьте учетные данные, используйте персональные токены вместо паролей для HTTPS</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Repository not found</h4>
              <p className="text-gray-400 text-sm">Решение: Проверьте URL репозитория, права доступа, существование репозитория</p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Server className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎯</h3>
            <p className="text-gray-300">
              Теперь вы умеете управлять удаленными репозиториями в Git! Вы научились добавлять, просматривать, переименовывать и удалять remote'ы, а также разобрались с аутентификацией и типичными ошибками. В следующем уроке мы рассмотрим синхронизацию с удаленными репозиториями (fetch, pull, push).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;