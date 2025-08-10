// src/data/courses/git/lesson12/part1.jsx
import React from 'react';
import { Upload, Shield, AlertTriangle, GitBranch, Zap, Server } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Upload className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📤 Урок 12: Отправка изменений в удаленный репозиторий</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Команда git push</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как отправлять изменения в удаленный репозиторий и разобраться с возможными ошибками.
            </p>
          </div>
        </div>
      </div>

      {/* Основы git push */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Upload className="w-5 h-5 text-green-400" />
          Основы команды git push
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push</code> используется для отправки локальных коммитов в удаленный репозиторий:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Передает новые коммиты из локальной ветки в удаленную</li>
            <li>Обновляет указатели веток на удаленном репозитории</li>
            <li>Синхронизирует локальную историю с удаленной</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Формат:</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push [remote] [branch]</code>
            </p>
          </div>
        </div>
      </div>

      {/* Первая отправка с -u */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-purple-400" />
          Первая отправка и установка upstream
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            При первой отправке ветки в удаленный репозиторий важно установить связь upstream:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Первая отправка */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Upload className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Первая отправка новой ветки</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Первая отправка с установкой upstream
git push -u origin main

# Альтернативный синтаксис
git push --set-upstream origin main

# После установки upstream можно использовать просто
git push`}</code></pre>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">-u</code> или <code className="bg-gray-700 px-1.5 py-0.5 rounded">--set-upstream</code> — устанавливает связь между локальной и удаленной веткой</li>
              <li>После установки upstream можно использовать <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push</code> без указания remote и branch</li>
              <li>Git запомнит, в какую ветку отправлять изменения</li>
            </ul>
            <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded">
              <p className="text-purple-300 text-sm">
                ⚡ <span className="font-medium">Совет:</span> Всегда используйте <code className="bg-gray-700 px-1.5 py-0.5 rounded">-u</code> при первой отправке новой ветки
              </p>
            </div>
          </div>

          {/* Что такое upstream */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Что такое upstream ветка?</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Upstream ветка — это удаленная ветка, связанная с локальной</li>
              <li>Позволяет Git автоматически определять, куда отправлять изменения</li>
              <li>Используется командами <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git pull</code> без параметров</li>
              <li>Просмотр upstream веток: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git branch -vv</code></li>
            </ul>
            <div className="bg-gray-800 p-3 rounded text-sm mt-3">
              <pre className="whitespace-pre-wrap text-gray-300"><code>{`# Просмотр локальных веток с их upstream'ами
git branch -vv

# Пример вывода:
# * main    abc1234 [origin/main] Latest commit
#   feature def5678 [origin/feature] Feature commit`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Защита веток */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-orange-400" />
          Защита веток (Protected Branches)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Многие Git-сервисы (GitHub, GitLab, Bitbucket) предоставляют механизм защиты веток:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Типы защиты веток
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-400">🔒</span>
                <span>Запрет прямого push'а (только через Pull Request)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✅</span>
                <span>Требование прохождения тестов перед мержем</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">👥</span>
                <span>Требование code review от определенного числа участников</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">🏷️</span>
                <span>Требование статусных проверок и подписей</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Работа с защищенными ветками
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">1.</span>
                <span>Создавайте feature ветки для разработки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">2.</span>
                <span>Отправляйте feature ветки в удаленный репозиторий</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">3.</span>
                <span>Создавайте Pull Request через веб-интерфейс</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">4.</span>
                <span>Проходите code review и тестирование</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
          <h3 className="font-bold text-orange-300 mb-3">Пример ошибки при push в защищенную ветку</h3>
          <div className="bg-gray-800 p-3 rounded text-sm">
            <pre className="whitespace-pre-wrap text-red-300"><code>{`remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: At least 1 approving review is required by reviewers with write access.`}</code></pre>
          </div>
          <p className="text-gray-300 text-sm mt-2">
            Решение: Используйте Pull Request вместо прямого push'а в защищенные ветки
          </p>
        </div>
      </div>

      {/* Ошибки push и их решение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          Распространенные ошибки push и их решения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При работе с <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push</code> могут возникать различные ошибки:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Non-fast-forward ошибка */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-300">Ошибка: non-fast-forward</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <pre className="whitespace-pre-wrap text-red-300"><code>{`! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/user/repo.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.`}</code></pre>
            </div>
            <div className="mt-3">
              <h4 className="font-bold text-orange-300 mb-2">Причины:</h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                <li>Удаленная ветка содержит коммиты, которых нет в локальной</li>
                <li>Кто-то другой запушил изменения в ту же ветку</li>
                <li>История разошлась (нужно интегрировать изменения)</li>
              </ul>
            </div>
            <div className="mt-3">
              <h4 className="font-bold text-green-300 mb-2">Решения:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-green-300 font-medium text-sm">Pull и merge</p>
                  <pre className="whitespace-pre-wrap text-gray-300 text-xs mt-1"><code>{`git pull origin main
git push origin main`}</code></pre>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-blue-300 font-medium text-sm">Rebase</p>
                  <pre className="whitespace-pre-wrap text-gray-300 text-xs mt-1"><code>{`git pull --rebase origin main
git push origin main`}</code></pre>
                </div>
              </div>
            </div>
          </div>

          {/* Другие ошибки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h4 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Permission denied
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                <li>Проверьте права доступа к репозиторию</li>
                <li>Убедитесь в правильности учетных данных</li>
                <li>Проверьте SSH ключи или токены доступа</li>
              </ul>
              <div className="mt-2 bg-gray-800 p-2 rounded text-xs">
                <pre className="whitespace-pre-wrap text-red-300">fatal: Authentication failed</pre>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h4 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Repository not found
              </h4>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                <li>Проверьте правильность URL репозитория</li>
                <li>Убедитесь, что репозиторий существует</li>
                <li>Проверьте права доступа</li>
              </ul>
              <div className="mt-2 bg-gray-800 p-2 rounded text-xs">
                <pre className="whitespace-pre-wrap text-red-300">fatal: repository not found</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Продвинутые опции push */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-cyan-400" />
          Продвинутые опции git push
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push</code> имеет множество полезных опций:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">--force и --force-with-lease</h4>
              <p className="text-gray-400 text-sm">
                <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push --force</code> — принудительный push (опасно!)
                <br />
                <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push --force-with-lease</code> — безопасный force push
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">--tags</h4>
              <p className="text-gray-400 text-sm">
                <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push --tags</code> — отправка всех тегов
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">--dry-run</h4>
              <p className="text-gray-400 text-sm">
                <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push --dry-run</code> — симуляция push без реальных изменений
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-orange-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-orange-300">--delete</h4>
              <p className="text-gray-400 text-sm">
                <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push --delete origin branch-name</code> — удаление удаленной ветки
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Полезные конфигурации</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-cyan-300 font-medium">Push по умолчанию</p>
              <pre className="whitespace-pre-wrap text-gray-300 text-xs mt-1"><code>{`git config --global push.default simple`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-cyan-300 font-medium">Автоматический setup upstream</p>
              <pre className="whitespace-pre-wrap text-gray-300 text-xs mt-1"><code>{`git config --global push.autoSetupRemote true`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Upload className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎯</h3>
            <p className="text-gray-300">
              Теперь вы умеете отправлять изменения в удаленный репозиторий! Вы научились использовать <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push</code> с различными опциями, разобрались с ошибками non-fast-forward и защитой веток. В следующем уроке мы рассмотрим получение изменений из удаленного репозитория (fetch и pull).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;