// src/data/courses/git/lesson2/part1.jsx
import React from 'react';
import { Download, Settings, Monitor, Apple, Terminal, User, Mail, FileEdit } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Download className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">⚙️ Урок 2: Установка и настройка Git</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Начало работы с системой контроля версий</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Установить Git на вашу операционную систему, выполнить базовую настройку и проверить работоспособность.
            </p>
          </div>
        </div>
      </div>

      {/* Установка Git */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-green-400" />
          Установка Git
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Перед началом работы с Git его необходимо установить. Процесс установки отличается в зависимости от операционной системы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Windows */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">Windows</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                1. Перейдите на официальный сайт: <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">git-scm.com/download/win</a>
              </p>
              <p className="text-sm text-gray-300">
                2. Скачайте установочный файл (обычно выбирается автоматически)
              </p>
              <p className="text-sm text-gray-300">
                3. Запустите установщик и следуйте инструкциям мастера
              </p>
              <p className="text-sm text-gray-300">
                4. Рекомендуется оставить настройки по умолчанию
              </p>
              <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
                💡 После установки у вас появятся: Git Bash, Git CMD и интеграция в проводник Windows
              </div>
            </div>
          </div>

          {/* macOS */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <div className="flex items-center gap-3 mb-4">
              <Apple className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-bold text-yellow-300">macOS</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                <span className="font-medium">Способ 1 (Homebrew):</span>
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs"><code>brew install git</code></pre>
              <p className="text-sm text-gray-300 mt-3">
                <span className="font-medium">Способ 2:</span> Скачайте установщик с <a href="https://git-scm.com/download/mac" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">git-scm.com/download/mac</a>
              </p>
              <div className="mt-3 p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-xs">
                ⚠️ Если Git уже установлен через Xcode, его версия может быть устаревшей
              </div>
            </div>
          </div>

          {/* Linux */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Linux</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                <span className="font-medium">Ubuntu/Debian:</span>
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs"><code>sudo apt update
sudo apt install git</code></pre>
              <p className="text-sm text-gray-300 mt-3">
                <span className="font-medium">Fedora:</span>
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs"><code>sudo dnf install git</code></pre>
              <p className="text-sm text-gray-300 mt-3">
                <span className="font-medium">Arch Linux:</span>
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs"><code>sudo pacman -S git</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Проверка установки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Monitor className="w-5 h-5 text-purple-400" />
          Проверка установки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После установки проверим, что Git успешно установлен и доступен в системе.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Откройте терминал и выполните команду:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>git --version</code></pre>
            <p className="mt-3 text-gray-300">
              Если установка прошла успешно, вы увидите что-то подобное:
            </p>
            <pre className="whitespace-pre-wrap text-gray-300 mt-2"><code>git version 2.40.1</code></pre>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Settings className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Примечание:</span> Номер версии может отличаться. Главное, чтобы команда выполнилась без ошибок.
            </p>
          </div>
        </div>
      </div>

      {/* Базовая настройка Git */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-yellow-400" />
          Базовая настройка Git
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Перед началом работы с Git необходимо выполнить базовую настройку. Это нужно сделать только один раз.
          </p>

          <div className="space-y-6 mt-6">
            {/* Имя пользователя */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <User className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">1. Установка имени пользователя</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Это имя будет отображаться в истории коммитов.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="whitespace-pre-wrap text-green-300"><code>git config --global user.name "Ваше Имя"</code></pre>
              </div>
              <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
                ✅ Пример: <code className="text-green-200">git config --global user.name "Ivan Petrov"</code>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">2. Установка email</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Этот email будет связан с вашими коммитами.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="whitespace-pre-wrap text-green-300"><code>git config --global user.email "ваш@email.com"</code></pre>
              </div>
              <div className="mt-3 p-2 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-xs">
                ✅ Пример: <code className="text-blue-200">git config --global user.email "ivan.petrov@example.com"</code>
              </div>
            </div>

            {/* Выбор редактора */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <div className="flex items-center gap-3 mb-3">
                <FileEdit className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">3. Выбор редактора</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Git будет использовать этот редактор для ввода сообщений коммитов и других операций.
              </p>
              
              <div className="space-y-3">
                <p className="text-sm text-gray-300">
                  <span className="font-medium">Для VS Code:</span>
                </p>
                <div className="bg-gray-800 p-3 rounded">
                  <pre className="whitespace-pre-wrap text-green-300"><code>git config --global core.editor "code --wait"</code></pre>
                </div>
                
                <p className="text-sm text-gray-300 mt-3">
                  <span className="font-medium">Для Nano (по умолчанию на Linux/macOS):</span>
                </p>
                <div className="bg-gray-800 p-3 rounded">
                  <pre className="whitespace-pre-wrap text-green-300"><code>git config --global core.editor "nano"</code></pre>
                </div>
                
                <p className="text-sm text-gray-300 mt-3">
                  <span className="font-medium">Для Vim:</span>
                </p>
                <div className="bg-gray-800 p-3 rounded">
                  <pre className="whitespace-pre-wrap text-green-300"><code>git config --global core.editor "vim"</code></pre>
                </div>
              </div>
              
              <div className="mt-3 p-2 bg-purple-900/20 border border-purple-700/30 rounded text-purple-300 text-xs">
                💡 Убедитесь, что выбранный редактор установлен в вашей системе
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Проверка конфигурации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-blue-400" />
          Проверка конфигурации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После настройки проверим, что все параметры установлены корректно.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Просмотр всех настроек:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>git config --list</code></pre>
            <p className="mt-3 text-gray-300">
              Вы должны увидеть примерно следующее:
            </p>
            <pre className="whitespace-pre-wrap text-gray-300 mt-2"><code>user.name=Ivan Petrov
user.email=ivan.petrov@example.com
core.editor=code --wait
...</code></pre>
          </div>

          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Просмотр конкретных настроек:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>git config user.name
git config user.email</code></pre>
          </div>

          <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded-lg flex items-start gap-2">
            <Settings className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-green-300 text-sm">
              <span className="font-medium">✅ Поздравляем!</span> Теперь Git установлен и настроен. Вы готовы к работе с репозиториями.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Settings className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как установить Git на разные операционные системы, выполнить базовую настройку и проверить конфигурацию. 
              В следующем уроке мы создадим наш первый Git-репозиторий и сделаем первые коммиты!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;