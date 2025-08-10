// src/data/courses/git/lesson15/part3.jsx
import React, { useState } from 'react';
import { Github, Play, CheckCircle, Terminal, Eye, Plus, Settings } from 'lucide-react';

const Part3 = () => {
  const [completedTasks, setCompletedTasks] = useState({
    task1: false,
    task2: false,
    task3: false
  });

  const handleTaskComplete = (task) => {
    setCompletedTasks(prev => ({
      ...prev,
      [task]: !prev[task]
    }));
  };

  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Github className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Интерфейс GitHub и создание репозитория</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить регистрацию на GitHub, создание репозитория и настройку его компонентов.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Регистрация и настройка профиля */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Регистрация и настройка профиля на GitHub
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Выполните регистрацию на GitHub и настройте свой профиль.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Регистрация на GitHub
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите на сайт <code className="bg-gray-700 px-1.5 py-0.5 rounded">github.com</code>.</li>
              <li>Нажмите кнопку "Sign up" в правом верхнем углу.</li>
              <li>Заполните форму регистрации:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Введите уникальное имя пользователя</li>
                  <li>Укажите действующий email адрес</li>
                  <li>Создайте надежный пароль</li>
                </ul>
              </li>
              <li>Пройдите верификацию (решите капчу).</li>
              <li>Проверьте email и подтвердите регистрацию по ссылке.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Настройка профиля
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите в настройки профиля (нажмите на аватар → "Settings").</li>
              <li>Добавьте следующую информацию:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Загрузите аватар (можно использовать Gravatar)</li>
                  <li>Укажите свое имя и фамилию</li>
                  <li>Добавьте публичный email</li>
                  <li>Укажите биографию (о себе)</li>
                  <li>Добавьте ссылку на свой сайт или социальные сети (опционально)</li>
                </ul>
              </li>
              <li>Сохраните изменения.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Настройка безопасности
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>В настройках профиля перейдите в раздел "Password and authentication".</li>
              <li>Включите двухфакторную аутентификацию (Two-factor authentication).</li>
              <li>Сохраните recovery codes в безопасном месте.</li>
              <li>Изучите раздел "SSH and GPG keys" (настройка SSH ключей для следующих уроков).</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task1"
            checked={completedTasks.task1}
            onChange={() => handleTaskComplete('task1')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task1" className="ml-2 text-gray-300">
            Я зарегистрировался на GitHub и настроил профиль
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Создание репозитория с компонентами */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Создание репозитория с README, .gitignore и лицензией
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте новый репозиторий на GitHub с базовыми компонентами.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создание нового репозитория
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Нажмите на кнопку "+" в правом верхнем углу и выберите "New repository".</li>
              <li>Заполните форму создания репозитория:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><span className="font-medium">Repository name:</span> <code className="bg-gray-700 px-1.5 py-0.5 rounded">my-first-repo</code></li>
                  <li><span className="font-medium">Description:</span> "Мой первый репозиторий для изучения Git и GitHub"</li>
                  <li><span className="font-medium">Visibility:</span> Public (публичный)</li>
                </ul>
              </li>
              <li>Поставьте галочки для автоматической инициализации:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>✅ Add a README file</li>
                  <li>✅ Add .gitignore → выберите шаблон для вашего языка (например, Node, Python, или General)</li>
                  <li>✅ Choose a license → выберите MIT License</li>
                </ul>
              </li>
              <li>Нажмите кнопку "Create repository".</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Изучение созданного репозитория
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Изучите структуру созданного репозитория:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Обратите внимание на файл README.md - он отображается на главной странице</li>
                  <li>Найдите файл .gitignore и изучите его содержимое</li>
                  <li>Посмотрите на файл LICENSE и убедитесь, что это MIT лицензия</li>
                </ul>
              </li>
              <li>Изучите вкладки репозитория:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Code - файловая структура</li>
                  <li>Issues - система отслеживания задач</li>
                  <li>Pull requests - запросы на внесение изменений</li>
                  <li>Actions - автоматизация (CI/CD)</li>
                  <li>Projects - управление проектами</li>
                  <li>Wiki - вики документация</li>
                  <li>Security - настройки безопасности</li>
                  <li>Insights - статистика и анализ</li>
                  <li>Settings - настройки репозитория</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Редактирование README.md
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Нажмите на файл README.md в репозитории.</li>
              <li>Нажмите кнопку карандаша "Edit this file" для редактирования.</li>
              <li>Добавьте следующую информацию в README:
                <div className="bg-gray-800 p-3 rounded text-xs mt-2">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`# Мой первый репозиторий

Этот репозиторий создан для изучения Git и GitHub.

## Описание

Здесь я практикую различные команды Git и возможности GitHub.

## Установка

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/my-first-repo.git
cd my-first-repo
\`\`\`

## Лицензия

Этот проект лицензирован под MIT License - см. файл LICENSE для подробностей.`}
                  </pre>
                </div>
              </li>
              <li>Добавьте осмысленное сообщение коммита: "Update README with project description".</li>
              <li>Нажмите "Commit changes".</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task2"
            checked={completedTasks.task2}
            onChange={() => handleTaskComplete('task2')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task2" className="ml-2 text-gray-300">
            Я создал репозиторий с компонентами и отредактировал README
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Настройка репозитория и клонирование */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Настройка репозитория и работа с локальной копией
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Настройте дополнительные параметры репозитория и начните работать с локальной копией.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Расширенная настройка репозитория
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите в настройки репозитория (вкладка "Settings").</li>
              <li>В разделе "General" измените:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Website - добавьте ссылку на сайт (можно оставить пустым)</li>
                  <li>Social preview - загрузите изображение для предпросмотра</li>
                </ul>
              </li>
              <li>В разделе "Collaborators and teams" добавьте тестового соавтора (если есть):
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Нажмите "Add people"</li>
                  <li>Введите username другого пользователя GitHub</li>
                  <li>Выберите роль (например, Write access)</li>
                </ul>
              </li>
              <li>Изучите разделы "Webhooks" и "Deploy keys" (для будущего использования).</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Клонирование репозитория
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Убедитесь, что Git установлен на вашем компьютере.</li>
              <li>На странице репозитория нажмите зеленую кнопку "Code".</li>
              <li>Выберите HTTPS (или SSH, если настроили ключи) и скопируйте URL.</li>
              <li>Откройте терминал и выполните клонирование:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">git clone https://github.com/YOUR_USERNAME/my-first-repo.git
cd my-first-repo</pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Проверьте remote'ы:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">git remote -v</pre>
            </div>
          </div>
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Локальные изменения и синхронизация
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый файл в локальном репозитории:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">{`echo "# Команды, которые я выучил" > GIT_COMMANDS.md
echo "- git clone" >> GIT_COMMANDS.md
echo "- git add" >> GIT_COMMANDS.md
echo "- git commit" >> GIT_COMMANDS.md
echo "- git push" >> GIT_COMMANDS.md`}</pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Добавьте файл в индекс и сделайте коммит:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">git add GIT_COMMANDS.md
git commit -m "Add list of learned Git commands"</pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Отправьте изменения в удаленный репозиторий:</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">git push origin main</pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Проверьте, что файл появился в репозитории на GitHub.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="task3"
            checked={completedTasks.task3}
            onChange={() => handleTaskComplete('task3')}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="task3" className="ml-2 text-gray-300">
            Я настроил репозиторий и синхронизировал локальные изменения
          </label>
          {completedTasks.task3 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы умеете регистрироваться на GitHub, создавать репозитории и работать с ними! Вы настроили профиль, создали репозиторий с README, .gitignore и лицензией, а также научились синхронизировать локальные изменения с удаленным репозиторием. В следующем уроке мы рассмотрим работу с Pull Request'ами и code review.
            </p>
            {Object.values(completedTasks).every(task => task) && (
              <div className="mt-3 p-3 bg-green-900/20 border border-green-700/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-green-300">Все задания выполнены! Вы готовы к следующему уроку.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;