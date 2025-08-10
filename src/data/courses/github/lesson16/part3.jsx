// src/data/courses/git/lesson16/part3.jsx
import React, { useState } from 'react';
import { GitPullRequest, Play, CheckCircle, Terminal, Eye, GitBranch, FileText } from 'lucide-react';

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
            <GitPullRequest className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Работа с Pull Request</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить полный цикл работы с Pull Request: от создания до мержа.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание feature-ветки и изменений */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте feature-ветку и внесите изменения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте новую feature-ветку, внесите изменения в код и подготовьте их к Pull Request.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Подготовьте рабочий репозиторий
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый репозиторий на GitHub или используйте существующий</li>
              <li>Клонируйте репозиторий локально: <code className="bg-gray-700 px-1.5 py-0.5 rounded">{`git clone <url>`}</code></li>
              <li>Убедитесь, что вы находитесь в основной ветке (main/master)</li>
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">README.md</code> с базовым содержимым, если его нет</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`# Мой проект
Это пример проекта для изучения работы с Pull Request.`}
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Создайте feature-ветку и внесите изменения
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новую ветку для вашей функции: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout -b feature/add-user-authentication</code></li>
              <li>Создайте файл <code className="bg-gray-700 px-1.5 py-0.5 rounded">user.py</code> с простым классом пользователя:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email
        self.is_active = True
    
    def deactivate(self):
        self.is_active = False
    
    def __str__(self):
        return f"User({self.username}, {self.email})"`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Обновите <code className="bg-gray-700 px-1.5 py-0.5 rounded">README.md</code>, добавив раздел о пользователях:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`# Мой проект
Это пример проекта для изучения работы с Pull Request.

## Пользователи
Проект поддерживает работу с пользователями через класс User.`}
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Зафиксируйте изменения
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте изменения в индекс: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git add .</code></li>
              <li>Создайте коммит с описательным сообщением: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git commit -m "Добавил класс User и обновил README"</code></li>
              <li>Отправьте изменения на удаленный репозиторий: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push origin feature/add-user-authentication</code></li>
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
            Я создал feature-ветку, внес изменения и отправил их на GitHub
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Создание Pull Request */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Terminal className="w-5 h-5 text-purple-400" />
          Задание 2: Создайте и оформите Pull Request
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте Pull Request через интерфейс GitHub и правильно его оформите.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте Pull Request через GitHub
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте ваш репозиторий на GitHub</li>
              <li>Вы увидите предложение создать Pull Request для вашей ветки</li>
              <li>Нажмите кнопку "Compare & pull request"</li>
              <li>Или перейдите во вкладку "Pull requests" и нажмите "New pull request"</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Оформите Pull Request
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Заголовок: <code className="bg-gray-700 px-1.5 py-0.5 rounded">Добавил класс User для управления пользователями</code></li>
              <li>Описание:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`## Описание изменений
Добавлен класс User для управления пользователями в системе. Класс включает базовые методы для работы с пользовательскими данными.

## Что сделано
- Создан класс User с полями username, email и is_active
- Добавлены методы для активации/деактивации пользователя
- Обновлена документация в README.md

## Как проверить
1. Проверить корректность реализации класса User
2. Убедиться, что README.md корректно отображает информацию
3. Протестировать создание экземпляров класса`}
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Настройте параметры PR
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Выберите ветку назначения: <code className="bg-gray-700 px-1.5 py-0.5 rounded">main</code></li>
              <li>Выберите ветку источника: <code className="bg-gray-700 px-1.5 py-0.5 rounded">feature/add-user-authentication</code></li>
              <li>Добавьте метки: <span className="bg-green-500/20 px-2 py-1 rounded text-xs">feature</span> <span className="bg-blue-500/20 px-2 py-1 rounded text-xs">documentation</span></li>
              <li>Назначьте ревьюера (если есть коллега) или оставьте без ревьюера для учебного примера</li>
              <li>Нажмите "Create pull request"</li>
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
            Я создал и оформил Pull Request с описанием и метками
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Имитация ревью и мерж */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Eye className="w-5 h-5 text-cyan-400" />
          Задание 3: Проведите имитацию ревью и мерж изменений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Имитируйте процесс ревью, внесения правок и мержа Pull Request.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Имитация комментариев ревьюера:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте ваш Pull Request на GitHub</li>
              <li>Перейдите на вкладку "Files changed"</li>
              <li>Наведите курсор на строку с классом User и нажмите "+" для добавления комментария</li>
              <li>Добавьте комментарий: "Рассмотрите возможность добавления валидации email при создании пользователя"</li>
              <li>{`Добавьте общий комментарий через "Review changes" -> "Comment"`}</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`Отличная реализация! Предлагаю несколько улучшений:
1. Добавить валидацию email
2. Добавить docstring к классу
3. Рассмотреть возможность добавления уникального ID`}
              </pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Внесение правок:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Вернитесь в локальный репозиторий в feature-ветку: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git checkout feature/add-user-authentication</code></li>
              <li>Внесите улучшения в <code className="bg-gray-700 px-1.5 py-0.5 rounded">user.py</code>:</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg mt-3 text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`class User:
    """Класс для представления пользователя в системе."""
    
    def __init__(self, username, email):
        self.username = username
        self.email = self._validate_email(email)
        self.is_active = True
        self.id = self._generate_id()
    
    def _validate_email(self, email):
        """Проверяет корректность email адреса."""
        if "@" not in email:
            raise ValueError("Некорректный email адрес")
        return email
    
    def _generate_id(self):
        """Генерирует уникальный ID для пользователя."""
        import uuid
        return str(uuid.uuid4())
    
    def deactivate(self):
        """Деактивирует пользователя."""
        self.is_active = False
    
    def __str__(self):
        return f"User({self.username}, {self.email})"`}
              </pre>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Зафиксируйте изменения: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git add . && git commit -m "Улучшил класс User: добавил валидацию, ID и документацию"</code></li>
              <li>Отправьте обновления: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git push origin feature/add-user-authentication</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Завершение ревью и мерж:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Вернитесь к Pull Request на GitHub</li>
              <li>Добавьте комментарий к предыдущему замечанию: "Добавил валидацию email и уникальные ID"</li>
              <li>Нажмите "Resolve conversation" для закрытия обсуждения</li>
              <li>Если бы это был реальный проект, вы бы дождались Approve от ревьюера</li>
              <li>{`Для учебного примера нажмите "Merge pull request" -> "Confirm merge"`}</li>
              <li>Удалите feature-ветку через интерфейс GitHub</li>
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
            Я провел имитацию ревью, внес правки и смержил Pull Request
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
            <h3 className="font-bold text-white mb-2">Отличная работа! 🔄</h3>
            <p className="text-gray-300">
              Теперь вы умеете работать с полным циклом Pull Request! Вы создали feature-ветку, внесли изменения, оформили Pull Request, провели имитацию ревью и успешно смержили изменения.
              В следующем уроке мы рассмотрим работу с конфликтами слияния.
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