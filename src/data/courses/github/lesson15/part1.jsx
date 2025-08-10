// src/data/courses/git/lesson15/part1.jsx
import React from 'react';
import { Github, User, Plus, Settings, FileText, Shield, Zap } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Github className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🌐 Урок 15: Интерфейс GitHub и создание репозитория</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Работа с веб-интерфейсом GitHub</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить регистрацию на GitHub, навигацию по интерфейсу и создание репозиториев с различными настройками.
            </p>
          </div>
        </div>
      </div>

      {/* Регистрация и профиль */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <User className="w-5 h-5 text-green-400" />
          Регистрация и настройка профиля
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            GitHub — крупнейшая платформа для хостинга Git-репозиториев и совместной разработки:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Бесплатный хостинг для публичных и приватных репозиториев</li>
            <li>Инструменты для code review и совместной работы</li>
            <li>Интеграция с CI/CD системами</li>
            <li>Социальные функции для разработчиков</li>
          </ul>
          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg flex items-start gap-2">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Альтернативы:</span> GitLab, Bitbucket, Azure DevOps
            </p>
          </div>
        </div>
      </div>

      {/* Процесс регистрации */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <User className="w-5 h-5 text-purple-400" />
          Процесс регистрации на GitHub
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-4">
          <p>
            Регистрация на GitHub проста и бесплатна для большинства пользователей:
          </p>
        </div>

        <div className="space-y-6 mt-6">
          {/* Этапы регистрации */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <User className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Этапы регистрации</h3>
            </div>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>
                <span className="font-medium">Переход на github.com</span>
                <p className="text-gray-400 text-sm ml-1">Откройте главную страницу GitHub в браузере</p>
              </li>
              <li>
                <span className="font-medium">Заполнение формы регистрации</span>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400 mt-1">
                  <li>Имя пользователя (username) - уникальное имя в системе</li>
                  <li>Email адрес - для подтверждения и уведомлений</li>
                  <li>Пароль - надежный пароль с цифрами и символами</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Подтверждение email</span>
                <p className="text-gray-400 text-sm ml-1">Проверьте почту и подтвердите адрес через ссылку</p>
              </li>
              <li>
                <span className="font-medium">Настройка профиля</span>
                <p className="text-gray-400 text-sm ml-1">Добавьте аватар, имя и информацию о себе</p>
              </li>
            </ol>
          </div>

          {/* Настройка профиля */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">Настройка профиля пользователя</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-blue-300 mb-2">Обязательные элементы</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">👤</span>
                    <span>Аватар профиля</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">📛</span>
                    <span>Имя и фамилия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">📧</span>
                    <span>Публичный email</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-300 mb-2">Дополнительные настройки</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">🔗</span>
                    <span>Ссылки на социальные сети</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">🏢</span>
                    <span>Организация и должность</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">📍</span>
                    <span>Местоположение</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-900/20 border border-green-700/30 rounded">
              <p className="text-green-300 text-sm">
                ⚡ <span className="font-medium">Совет:</span> Заполненный профиль повышает доверие в сообществе
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Создание репозитория */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Plus className="w-5 h-5 text-orange-400" />
          Создание нового репозитория
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создание репозитория на GitHub можно выполнить несколькими способами:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* Через кнопку "New" */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Plus className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-300">Создание через интерфейс</h3>
            </div>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>
                <span className="font-medium">Нажмите "New repository"</span>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400 mt-1">
                  <li>В правом верхнем углу нажмите на аватар → "Your repositories"</li>
                  <li>Или нажмите "+" → "New repository"</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Заполнение формы создания</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-orange-300 font-medium text-sm">Обязательные поля</p>
                    <ul className="list-disc pl-5 text-xs space-y-1 text-gray-300 mt-1">
                      <li>Repository name</li>
                      <li>Description (опционально)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <p className="text-blue-300 font-medium text-sm">Настройки видимости</p>
                    <ul className="list-disc pl-5 text-xs space-y-1 text-gray-300 mt-1">
                      <li>Public (публичный)</li>
                      <li>Private (приватный)</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-medium">Дополнительные опции</span>
                <div className="bg-gray-800 p-3 rounded mt-2">
                  <p className="text-purple-300 font-medium text-sm">Инициализация репозитория</p>
                  <ul className="list-disc pl-5 text-xs space-y-1 text-gray-300 mt-1">
                    <li>Add a README file - создает базовый файл документации</li>
                    <li>Add .gitignore - добавляет файл игнорирования</li>
                    <li>Choose a license - добавляет лицензию проекта</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>

          {/* Настройки репозитория */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-300">Настройки репозитория</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-300 mb-3">Основные настройки</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">📝</span>
                    <div>
                      <p className="font-medium">Описание и сайт</p>
                      <p className="text-gray-400 text-xs">Краткое описание и ссылка на сайт проекта</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">👁️</span>
                    <div>
                      <p className="font-medium">Видимость</p>
                      <p className="text-gray-400 text-xs">Публичный или приватный доступ</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">🔒</span>
                    <div>
                      <p className="font-medium">Защита веток</p>
                      <p className="text-gray-400 text-xs">Настройка правил мержа и защиты</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-300 mb-3">Дополнительные функции</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">🔄</span>
                    <div>
                      <p className="font-medium">Wiki и Issues</p>
                      <p className="text-gray-400 text-xs">Включение вики и системы отслеживания задач</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">🚀</span>
                    <div>
                      <p className="font-medium">GitHub Pages</p>
                      <p className="text-gray-400 text-xs">Хостинг статических сайтов</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">🤖</span>
                    <div>
                      <p className="font-medium">Webhooks</p>
                      <p className="text-gray-400 text-xs">Автоматизация и интеграции</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* README, .gitignore и лицензии */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-cyan-400" />
          README, .gitignore и лицензии
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При создании репозитория GitHub предлагает добавить три важных компонента:
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* README файл */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-cyan-300">README.md файл</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Автоматически отображается на главной странице репозитория</li>
              <li>Содержит описание проекта, инструкции по установке и использованию</li>
              <li>Написан в формате Markdown</li>
              <li>Является документацией проекта по умолчанию</li>
            </ul>
            <div className="mt-3 bg-gray-800 p-3 rounded">
              <p className="text-cyan-300 font-medium text-sm">Пример структуры README:</p>
              <pre className="whitespace-pre-wrap text-gray-300 text-xs mt-2">
{`# Название проекта

Краткое описание проекта

## Установка

\`\`\`bash
npm install
\`\`\`

## Использование

\`\`\`javascript
const result = myFunction();
\`\`\`

## Лицензия

MIT`}
              </pre>
            </div>
          </div>

          {/* .gitignore файл */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-300">.gitignore файл</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Определяет файлы и папки, которые Git должен игнорировать</li>
              <li>Предотвращает попадание временных файлов в репозиторий</li>
              <li>Можно выбрать шаблон для конкретного языка/фреймворка</li>
              <li>Можно редактировать вручную позже</li>
            </ul>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-green-300 font-medium text-sm">Типичные записи для Node.js:</p>
                <pre className="whitespace-pre-wrap text-gray-300 text-xs mt-1">
{`node_modules/
.env
*.log
dist/
*.tmp`}
                </pre>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-blue-300 font-medium text-sm">Типичные записи для Python:</p>
                <pre className="whitespace-pre-wrap text-gray-300 text-xs mt-1">
{`__pycache__/
*.pyc
.env
.venv/
*.log`}
                </pre>
              </div>
            </div>
          </div>

          {/* Лицензии */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-300">Лицензии</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-orange-300 mb-2">Популярные лицензии</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">MIT</span>
                    <span>Самая популярная, разрешает почти всё</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">Apache 2.0</span>
                    <span>Разрешает использование с патентной защитой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">GPL v3</span>
                    <span>Copyleft лицензия, требует открытия кода</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-300 mb-2">Зачем нужна лицензия</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">⚖️</span>
                    <span>Определяет права пользователей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">🛡️</span>
                    <span>Защищает авторские права</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">🤝</span>
                    <span>Упрощает использование проекта</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded">
              <p className="text-purple-300 text-sm">
                ⚡ <span className="font-medium">Важно:</span> Без лицензии проект имеет все права защищены по умолчанию
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Навигация по интерфейсу */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          Навигация по интерфейсу GitHub
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Основные элементы интерфейса GitHub для эффективной работы:
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <User className="w-4 h-4" />
              Панель пользователя
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">👤</span>
                <div>
                  <p className="font-medium">Профиль и настройки</p>
                  <p className="text-gray-400 text-xs">Управление аккаунтом, SSH ключами, уведомлениями</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">📂</span>
                <div>
                  <p className="font-medium">Ваши репозитории</p>
                  <p className="text-gray-400 text-xs">Список всех ваших репозиториев</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">⭐</span>
                <div>
                  <p className="font-medium">Звезды</p>
                  <p className="text-gray-400 text-xs">Отмеченные репозитории</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">👥</span>
                <div>
                  <p className="font-medium">Организации</p>
                  <p className="text-gray-400 text-xs">Группы и команды, в которых вы состоите</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Страница репозитория
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">📁</span>
                <div>
                  <p className="font-medium">Файловая структура</p>
                  <p className="text-gray-400 text-xs">Просмотр файлов и папок проекта</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">💬</span>
                <div>
                  <p className="font-medium">Issues и Pull Requests</p>
                  <p className="text-gray-400 text-xs">Система отслеживания задач и обсуждения изменений</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">📊</span>
                <div>
                  <p className="font-medium">Insights</p>
                  <p className="text-gray-400 text-xs">Статистика и графики активности</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">⚙️</span>
                <div>
                  <p className="font-medium">Settings</p>
                  <p className="text-gray-400 text-xs">Настройки репозитория и доступа</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
          <h3 className="font-bold text-green-300 mb-3">Полезные ярлыки и горячие клавиши</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-green-300 font-medium">Поиск</p>
              <p className="text-gray-400 text-xs mt-1">/ (слэш) - активирует поиск</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-blue-300 font-medium">Навигация</p>
              <p className="text-gray-400 text-xs mt-1">t - быстрый переход к файлу</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm">
              <p className="text-purple-300 font-medium">Коммиты</p>
              <p className="text-gray-400 text-xs mt-1">c - список коммитов</p>
            </div>
          </div>
        </div>
      </div>

      {/* Работа с репозиторием */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Github className="w-5 h-5 text-red-400" />
          Работа с созданным репозиторием
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            После создания репозитория доступны различные возможности для работы:
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-green-400">1</span>
            </div>
            <div>
              <h4 className="font-bold text-green-300">Клонирование и локальная работа</h4>
              <p className="text-gray-400 text-sm">
                Скопируйте URL репозитория и клонируйте его локально: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git clone URL</code>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-300">Настройка SSH ключей</h4>
              <p className="text-gray-400 text-sm">
                Для удобной работы настройте SSH ключи вместо HTTPS с паролями
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-purple-400">3</span>
            </div>
            <div>
              <h4 className="font-bold text-purple-300">Интеграция с CI/CD</h4>
              <p className="text-gray-400 text-sm">
                Настройте GitHub Actions для автоматической сборки и тестирования
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <div className="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
              <span className="font-bold text-orange-400">4</span>
            </div>
            <div>
              <h4 className="font-bold text-orange-300">Управление соавторами</h4>
              <p className="text-gray-400 text-sm">
                Добавьте соавторов через настройки репозитория или пригласите в организацию
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Github className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🎯</h3>
            <p className="text-gray-300">
              Теперь вы умеете регистрироваться на GitHub, создавать репозитории и настраивать их! Вы изучили интерфейс платформы, поняли назначение README, .gitignore и лицензий. В следующем уроке мы рассмотрим работу с Pull Request'ами и code review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;