// src/data/courses/git/lesson22/part1.jsx
import React from 'react';
import { Shield, Key, Lock, Users, GitBranch, Zap, CheckCircle, Award } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Shield className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔒 Урок 22: Безопасность и итоговый проект</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Защита репозиториев и вклад в open-source</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить основы безопасности в Git и GitHub, а также применить полученные знания на практике.
            </p>
          </div>
        </div>
      </div>

      {/* SSH-ключи */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Key className="w-5 h-5 text-green-400" />
          SSH-ключи вместо паролей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">SSH-ключи</span> — это более безопасный способ аутентификации по сравнению с паролями.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                <Key className="w-5 h-5" />
                Преимущества SSH-ключей
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Криптографически безопасная аутентификация</li>
                <li>Не нужно вводить пароль при каждом push/pull</li>
                <li>Защита от брутфорса атак</li>
                <li>Поддержка passphrase для дополнительной защиты</li>
                <li>Автоматизация без хранения паролей</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Типы SSH-ключей
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li><span className="font-medium">RSA:</span> Традиционный алгоритм (минимум 2048 бит)</li>
                <li><span className="font-medium">Ed25519:</span> Современный, более безопасный</li>
                <li><span className="font-medium">ECDSA:</span> Эллиптическая криптография</li>
                <li>Ed25519 рекомендуется для новых ключей</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Пример:</span> Вместо ввода пароля GitHub при каждом пуше, SSH-ключ автоматически аутентифицирует вас.
            </p>
          </div>
        </div>
      </div>

      {/* Создание и использование SSH-ключей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Lock className="w-5 h-5 text-purple-400" />
          Создание и использование SSH-ключей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Процесс генерации SSH-ключей и их настройки для работы с GitHub.
          </p>
        </div>

        <div className="space-y-6 mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Key className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">1. Генерация SSH-ключа</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Создание новой пары SSH-ключей:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Генерация Ed25519 ключа (рекомендуется)
ssh-keygen -t ed25519 -C "ваш_email@example.com"

# Или RSA ключ (если Ed25519 не поддерживается)
ssh-keygen -t rsa -b 4096 -C "ваш_email@example.com"

# При генерации будет предложено:
# 1. Указать путь к файлу ключа (по умолчанию ~/.ssh/id_ed25519)
# 2. Ввести passphrase (опционально, но рекомендуется)`}</pre>
            </div>
            
            <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-sm">
              ⚡ <span className="font-medium">Совет:</span> Используйте надежную passphrase для защиты приватного ключа.
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">2. Добавление ключа в ssh-agent</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Настройка ssh-agent для автоматической аутентификации:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Запуск ssh-agent (если не запущен)
eval "$(ssh-agent -s)"

# Добавление ключа в агент
ssh-add ~/.ssh/id_ed25519

# Для macOS может потребоваться дополнительная настройка
ssh-add -K ~/.ssh/id_ed25519`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">3. Добавление публичного ключа в GitHub</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Настройка ключа в вашем GitHub аккаунте:
            </p>
            
            <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-300">
              <li>Скопируйте публичный ключ:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded">
                <code className="text-sm text-green-300">cat ~/.ssh/id_ed25519.pub</code>
              </div>
              <li>Перейдите в Settings → SSH and GPG keys → New SSH key</li>
              <li>Вставьте содержимое ключа в поле Key</li>
              <li>Укажите название ключа (например, "Мой ноутбук")</li>
              <li>Нажмите "Add SSH key"</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Personal Access Tokens */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-cyan-400" />
          Personal Access Tokens
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Personal Access Tokens (PAT)</span> — это альтернатива паролям для аутентификации в API и командной строке.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Когда использовать PAT
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">🔑</span>
                <span>Аутентификация в Git по HTTPS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">🔧</span>
                <span>Доступ к GitHub API</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">🤖</span>
                <span>Автоматизация CI/CD</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">📦</span>
                <span>Публикация пакетов</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Key className="w-5 h-5" />
              Создание Fine-grained PAT
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">1️⃣</span>
                <span>Settings → Developer settings → Personal access tokens → Fine-grained tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">2️⃣</span>
                <span>Укажите имя и срок действия</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">3️⃣</span>
                <span>Выберите репозитории и права доступа</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">4️⃣</span>
                <span>Сгенерируйте и сохраните токен</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Использование PAT:</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`# Клонирование с использованием PAT
git clone https://USERNAME:TOKEN@github.com/USERNAME/REPO.git

# Или при запросе аутентификации ввести:
# Username: ваш_логин
# Password: ваш_PAT_токен

# Для хранения учетных данных
git config --global credential.helper store`}</pre>
          </div>
          
          <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded text-orange-300 text-sm">
            ⚠️ <span className="font-medium">Важно:</span> Никогда не публикуйте PAT в коде или репозиториях!
          </div>
        </div>
      </div>

      {/* Двухфакторная аутентификация */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Lock className="w-5 h-5 text-yellow-400" />
          Двухфакторная аутентификация (2FA)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">2FA</span> добавляет дополнительный уровень безопасности к вашему аккаунту.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Методы 2FA
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">📱</span>
                <div>
                  <div className="font-medium">Authenticator приложения</div>
                  <div className="text-gray-400 text-xs">Google Authenticator, Authy, и т.д.</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">📧</span>
                <div>
                  <div className="font-medium">SMS коды</div>
                  <div className="text-gray-400 text-xs">Коды, отправляемые по SMS</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">🔑</span>
                <div>
                  <div className="font-medium">Физические ключи</div>
                  <div className="text-gray-400 text-xs">YubiKey, Titan Security Key</div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Настройка 2FA на GitHub
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300 text-sm">
              <li>Settings → Password and authentication → Two-factor authentication</li>
              <li>Выберите метод (рекомендуется Authenticator app)</li>
              <li>Отсканируйте QR-код в приложении</li>
              <li>Введите код из приложения</li>
              <li>Сохраните recovery codes</li>
              <li>Активируйте 2FA</li>
            </ol>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-lg border border-orange-700/30">
          <h4 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
            <Key className="w-5 h-5" />
            Recovery codes и резервные методы
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-800 p-3 rounded text-center">
              <div className="font-medium text-white">Recovery codes</div>
              <div className="text-xs text-gray-400 mt-1">10 одноразовых кодов</div>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <div className="font-medium text-white">Резервный номер</div>
              <div className="text-xs text-gray-400 mt-1">Для SMS восстановления</div>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <div className="font-medium text-white">Физический ключ</div>
              <div className="text-xs text-gray-400 mt-1">Для hardware 2FA</div>
            </div>
          </div>
          
          <div className="mt-3 p-3 bg-red-900/20 border border-red-700/30 rounded text-red-300 text-sm">
            ⚠️ <span className="font-medium">Важно:</span> Храните recovery codes в безопасном месте!
          </div>
        </div>
      </div>

      {/* Итоговый проект: вклад в open-source */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <GitBranch className="w-5 h-5 text-green-400" />
          Итоговый проект: вклад в open-source
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Примените все полученные знания для реального вклада в open-source проект.
          </p>
        </div>

        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <h3 className="font-bold text-purple-300 mb-3">Полный цикл участия в open-source:</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
              <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-blue-400">1</span>
              </div>
              <div>
                <h4 className="font-bold text-blue-300">Найдите подходящий проект</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                  <li>Ищите проекты с тегами "good first issue" или "help wanted"</li>
                  <li>Выберите проект, который вам интересен</li>
                  <li>Изучите документацию и код стайл</li>
                  <li>Проверьте активность проекта</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
              <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-green-400">2</span>
              </div>
              <div>
                <h4 className="font-bold text-green-300">Создайте Issue</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                  <li>Проверьте, не существует ли уже подобного issue</li>
                  <li>Опишите проблему или предложение четко и подробно</li>
                  <li>Следуйте шаблону issue, если он есть</li>
                  <li>Добавьте метки и assignees при необходимости</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
              <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-yellow-400">3</span>
              </div>
              <div>
                <h4 className="font-bold text-yellow-300">Fork и локальная настройка</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                  <li>Создайте fork проекта в вашем аккаунте</li>
                  <li>Клонируйте свой fork локально с использованием SSH</li>
                  <li>Настройте upstream remote для синхронизации</li>
                  <li>Создайте feature-ветку для работы</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
              <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-purple-400">4</span>
              </div>
              <div>
                <h4 className="font-bold text-purple-300">Реализация и тестирование</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                  <li>Внесите необходимые изменения</li>
                  <li>Напишите тесты, если это необходимо</li>
                  <li>Проверьте соответствие код стайлу проекта</li>
                  <li>Запустите существующие тесты</li>
                  <li>Зафиксируйте изменения с осмысленными коммитами</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
              <div className="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-red-400">5</span>
              </div>
              <div>
                <h4 className="font-bold text-red-300">Создание Pull Request</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                  <li>Синхронизируйте изменения с upstream</li>
                  <li>Отправьте изменения в ваш fork</li>
                  <li>Создайте Pull Request через интерфейс GitHub</li>
                  <li>Опишите внесенные изменения</li>
                  <li>Следуйте шаблону PR, если он есть</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
              <div className="bg-cyan-500/20 p-2 rounded-lg flex-shrink-0">
                <span className="font-bold text-cyan-400">6</span>
              </div>
              <div>
                <h4 className="font-bold text-cyan-300">Участие в обсуждении</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                  <li>Отвечайте на комментарии мейнтейнеров</li>
                  <li>Вносите правки при необходимости</li>
                  <li>Участвуйте в конструктивном диалоге</li>
                  <li>Будьте терпеливы и уважительны</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Рекомендации по безопасности */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-red-400" />
          Рекомендации по безопасности
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Лучшие практики безопасности для работы с Git и GitHub.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Защита учетных данных
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>Используйте SSH-ключи вместо паролей</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>Включите двухфакторную аутентификацию</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>Используйте Personal Access Tokens с ограниченными правами</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✅</span>
                <span>Регулярно обновляйте и ротируйте токены</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Защита репозиториев
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✅</span>
                <span>Используйте .gitignore для конфиденциальных данных</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✅</span>
                <span>Не коммитьте API ключи и пароли</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✅</span>
                <span>Настройте branch protection rules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✅</span>
                <span>Используйте signed commits для важных изменений</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-orange-700/30">
          <h4 className="font-bold text-orange-300 mb-3">Что делать при компрометации:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-800 p-3 rounded">
              <div className="font-medium text-red-300">🚨 Немедленные действия</div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-xs">
                <li>Отключить скомпрометированные ключи/токены</li>
                <li>Сменить пароли</li>
                <li>Проверить активность аккаунта</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <div className="font-medium text-yellow-300">🔧 Профилактика</div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-xs">
                <li>Регулярный аудит доступа</li>
                <li>Мониторинг активности</li>
                <li>Обновление ключей и токенов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение и сертификат */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Award className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Вы успешно завершили курс по Git и GitHub! Теперь вы знаете, как безопасно работать с репозиториями, использовать современные методы аутентификации и вносить вклад в open-source проекты.
            </p>
            <div className="mt-4 p-4 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg border border-green-700/30">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-gray-300 text-sm mt-2">
                Поздравляем с освоением всех тем курса! Вы научились:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                <li>Работать с основами Git и GitHub</li>
                <li>Управлять ветками и конфликтами</li>
                <li>Создавать Pull Request и участвовать в code review</li>
                <li>Использовать Issues и проектные доски</li>
                <li>Настраивать CI/CD и автоматизацию</li>
                <li>Обеспечивать безопасность репозиториев</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <h4 className="font-bold text-blue-300 mb-2">Следующие шаги:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                <li>Примените знания в реальных проектах</li>
                <li>Продолжайте изучать advanced Git техники</li>
                <li>Участвуйте в open-source сообществе</li>
                <li>Делитесь знаниями с другими разработчиками</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;