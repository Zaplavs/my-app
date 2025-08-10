// src/data/courses/git/lesson4/part1.jsx
import React from 'react';
import { Archive, Save, FileText, MessageSquare, CheckCircle, GitCommit } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Save className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💾 Урок 4: Добавление и коммит</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Сохранение изменений в Git</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять три состояния файлов в Git, научиться использовать команды <code className="bg-gray-700 px-1.5 py-0.5 rounded">git add</code> и <code className="bg-gray-700 px-1.5 py-0.5 rounded">git commit</code>, а также писать хорошие сообщения коммитов.
            </p>
          </div>
        </div>
      </div>

      {/* Три состояния файла */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Три состояния файла в Git
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В Git каждый файл может находиться в одном из трех состояний:
          </p>

          <div className="space-y-6 mt-6">
            {/* Неотслеживаемый */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-bold text-red-300">1. Неотслеживаемый (Untracked)</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Файлы, которые существуют в рабочей директории, но еще не добавлены в систему контроля версий.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Git не отслеживает изменения в этих файлах</li>
                <li>Появляются в <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git status</code> как "Untracked files"</li>
                <li>Обычно новые файлы, только что созданные в проекте</li>
              </ul>
            </div>

            {/* Измененный */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Save className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-bold text-yellow-300">2. Измененный (Modified)</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Файлы, которые были изменены после последнего коммита, но еще не добавлены в staging area.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Git отслеживает эти файлы, но текущие изменения еще не подготовлены</li>
                <li>Появляются в <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git status</code> как "Changes not staged for commit"</li>
                <li>Состояние между коммитами</li>
              </ul>
            </div>

            {/* Подготовленный */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Archive className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">3. Подготовленный (Staged)</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Файлы, изменения в которых добавлены в staging area и готовы к коммиту.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                <li>Изменения находятся в индексе (staging area)</li>
                <li>Появляются в <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git status</code> как "Changes to be committed"</li>
                <li>Готовы к сохранению в истории репозитория</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-blue-700/30">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-blue-400" />
              Жизненный цикл файла
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300 text-sm">
              <li>Файл создается → Неотслеживаемый</li>
              <li>Выполняется <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git add</code> → Подготовленный</li>
              <li>Выполняется <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git commit</code> → Файл сохраняется в истории</li>
              <li>Файл изменяется → Измененный</li>
              <li>Цикл повторяется</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Команда git add */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Archive className="w-5 h-5 text-purple-400" />
          Команда git add
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git add</code> перемещает изменения из рабочей директории в staging area.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Синтаксис команды:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>{`git add <файл>`}</code></pre>
          </div>

          <div className="space-y-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Добавление конкретного файла</h3>
              <p className="text-sm text-gray-300">
                Добавляет только указанный файл в staging area:
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs mt-2"><code>git add README.md</code></pre>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">Добавление всех файлов</h3>
              <p className="text-sm text-gray-300">
                Добавляет все измененные и новые файлы:
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs mt-2"><code>git add .</code></pre>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
              <h3 className="font-bold text-yellow-300 mb-2">Добавление по шаблону</h3>
              <p className="text-sm text-gray-300">
                Добавляет файлы по определенному шаблону:
              </p>
              <pre className="whitespace-pre-wrap text-gray-300 bg-gray-800 p-2 rounded text-xs mt-2"><code>git add *.txt
git add docs/*.md</code></pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
            <p className="text-purple-300 text-sm">
              💡 После выполнения <code className="text-purple-200">git add</code> файлы будут отображаться как "Changes to be committed" в <code className="text-purple-200">git status</code>
            </p>
          </div>
        </div>
      </div>

      {/* Команда git commit */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-cyan-400" />
          Команда git commit
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Команда <code className="bg-gray-700 px-1.5 py-0.5 rounded">git commit</code> сохраняет изменения из staging area в историю репозитория.
          </p>
          
          <div className="mt-4 bg-gray-900 p-4 rounded-lg">
            <p className="font-medium text-white mb-2">Синтаксис команды:</p>
            <pre className="whitespace-pre-wrap text-green-300"><code>git commit -m "сообщение коммита"</code></pre>
          </div>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">Коммит с сообщением</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Используйте флаг <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">-m</code> для указания сообщения коммита прямо в командной строке:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300"><code>git commit -m "Добавил файл README.md"</code></pre>
              </div>
              <div className="mt-3 p-2 bg-green-900/20 border border-green-700/30 rounded text-green-300 text-xs">
                ✅ После выполнения вы увидите информацию о коммите: количество файлов, изменения и ID коммита
              </div>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">Коммит без флага -m</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Если выполнить <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">git commit</code> без флага <code className="bg-gray-700 px-1.5 py-0.5 rounded text-xs">-m</code>, Git откроет редактор для ввода сообщения:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-gray-300"><code>git commit</code></pre>
              </div>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm mt-3">
                <li>В первой строке введите краткое описание (не более 50 символов)</li>
                <li>Отступите одну строку</li>
                <li>Добавьте подробное описание, если необходимо</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Правила хороших сообщений коммитов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MessageSquare className="w-5 h-5 text-yellow-400" />
          Правила хороших сообщений коммитов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хорошо написанные сообщения коммитов помогают другим разработчикам (и вам в будущем) понимать историю изменений.
          </p>

          <div className="space-y-6 mt-6">
            {/* Императивное наклонение */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-green-300">1. Императивное наклонение</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Пишите сообщения так, как если бы вы отдавали команду.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-900/20 p-3 rounded">
                  <p className="text-red-300 text-sm font-medium mb-1">❌ Плохо:</p>
                  <ul className="list-disc pl-5 space-y-1 text-red-300 text-xs">
                    <li>"Исправлен баг с авторизацией"</li>
                    <li>"Добавлены новые функции"</li>
                    <li>"Обновлен файл README"</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 p-3 rounded">
                  <p className="text-green-300 text-sm font-medium mb-1">✅ Хорошо:</p>
                  <ul className="list-disc pl-5 space-y-1 text-green-300 text-xs">
                    <li>"Исправить баг с авторизацией"</li>
                    <li>"Добавить новые функции"</li>
                    <li>"Обновить файл README"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Краткость */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Save className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300">2. Краткость</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Первая строка сообщения должна быть краткой (до 50-72 символов).
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-white text-sm font-medium mb-2">Хорошие примеры:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                  <li>"Добавить валидацию email в форму регистрации"</li>
                  <li>"Исправить ошибку деления на ноль"</li>
                  <li>"Обновить зависимости до последних версий"</li>
                  <li>"Оптимизировать загрузку изображений"</li>
                </ul>
              </div>
            </div>

            {/* Ясность */}
            <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">3. Ясность и конкретика</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Сообщение должно четко описывать, что именно было сделано.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-900/20 p-3 rounded">
                  <p className="text-red-300 text-sm font-medium mb-1">❌ Неинформативно:</p>
                  <ul className="list-disc pl-5 space-y-1 text-red-300 text-xs">
                    <li>"Исправления"</li>
                    <li>"Обновление"</li>
                    <li>"Работа над проектом"</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 p-3 rounded">
                  <p className="text-green-300 text-sm font-medium mb-1">✅ Конкретно:</p>
                  <ul className="list-disc pl-5 space-y-1 text-green-300 text-xs">
                    <li>"Исправить опечатку в заголовке страницы контактов"</li>
                    <li>"Обновить версию библиотеки lodash с 4.17.20 до 4.17.21"</li>
                    <li>"Добавить страницу с политикой конфиденциальности"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-yellow-700/30">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-yellow-400" />
              Примеры хороших сообщений коммитов
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm">
              <li>"Добавить форму обратной связи на главную страницу"</li>
              <li>"Рефакторинг функции расчета налогов"</li>
              <li>"Исправить утечку памяти в модуле загрузки изображений"</li>
              <li>"Добавить unit-тесты для API endpoints"</li>
              <li>"Настроить CI/CD pipeline для автоматического деплоя"</li>
            </ul>
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
            <h3 className="font-bold text-white mb-2">Отлично! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете три состояния файлов в Git, умеете добавлять изменения с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">git add</code> и сохранять их с помощью <code className="bg-gray-700 px-1.5 py-0.5 rounded">git commit</code>. 
              Вы также освоили правила написания хороших сообщений коммитов. В следующем уроке мы научимся просматривать историю коммитов!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;