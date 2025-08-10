// src/data/courses/git/lesson20/part3.jsx
import React, { useState } from 'react';
import { Tag, Play, CheckCircle, Terminal, Package, Download, FileText } from 'lucide-react';

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
            <Tag className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Теги и релизы</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить создание, управление и публикацию тегов, а также создание релизов на GitHub.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание тегов и работа с ними */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создание и управление тегами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте тестовый репозиторий и поработайте с различными типами тегов.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Подготовка тестового репозитория
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новую директорию: <code className="bg-gray-700 px-1.5 py-0.5 rounded">mkdir tag-practice</code></li>
              <li>Перейдите в директорию: <code className="bg-gray-700 px-1.5 py-0.5 rounded">cd tag-practice</code></li>
              <li>Инициализируйте Git: <code className="bg-gray-700 px-1.5 py-0.5 rounded">git init</code></li>
              <li>Создайте несколько коммитов для истории:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`echo "# Мой проект" > README.md
git add README.md
git commit -m "Начальный коммит"

echo "Функция 1" > feature1.md
git add feature1.md
git commit -m "Добавил первую функцию"

echo "Функция 2" > feature2.md
git add feature2.md
git commit -m "Добавил вторую функцию"

echo "Исправление" > fix1.md
git add fix1.md
git commit -m "Исправил баг в функции 2"`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Создание легковесных тегов
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте легковесный тег для последнего коммита:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git tag v0.1.0-light</code>
              </div>
              <li>Создайте легковесный тег для коммита с первой функцией:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git log --oneline</code>
              </div>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git tag v0.0.1-light [хеш_первого_коммита]</code>
              </div>
              <li>Просмотрите список тегов:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-orange-300">git tag</code>
              </div>
              <li>Просмотрите информацию о легковесном теге:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-yellow-300">git show v0.1.0-light</code>
              </div>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Создание аннотированных тегов
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте аннотированный тег для текущего состояния:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git tag -a v0.1.0 -m "Бета-версия с двумя функциями"</code>
              </div>
              <li>Создайте аннотированный тег с расширенным описанием:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git tag -a v1.0.0 -m "Стабильный релиз" -m "Добавлены функции:" -m "- Функция 1" -m "- Функция 2"</code>
              </div>
              <li>Просмотрите список тегов с аннотациями:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git tag -n</code>
              </div>
              <li>Просмотрите подробную информацию об аннотированном теге:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-orange-300">git show v1.0.0</code>
              </div>
              <li>Отфильтруйте теги по шаблону:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-yellow-300">git tag -l "v1.*"</code>
              </div>
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
            Я создал и управлял различными типами тегов
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Публикация тегов и работа с удаленным репозиторием */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Download className="w-5 h-5 text-purple-400" />
          Задание 2: Публикация тегов и удаленная работа
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Опубликуйте теги в удаленный репозиторий и изучите команды управления.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создание удаленного репозитория
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый репозиторий на GitHub (или другом Git-хостинге)</li>
              <li>Свяжите локальный репозиторий с удаленным:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git remote add origin [URL_вашего_репозитория]</code>
              </div>
              <li>Отправьте коммиты в удаленный репозиторий:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git push -u origin main</code>
              </div>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Публикация отдельных тегов
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Опубликуйте один тег:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git push origin v1.0.0</code>
              </div>
              <li>Опубликуйте несколько тегов:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git push origin v0.1.0 v0.1.0-light</code>
              </div>
              <li>Проверьте опубликованные теги на GitHub</li>
              <li>Просмотрите список удаленных тегов:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git ls-remote --tags origin</code>
              </div>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Публикация всех тегов и управление
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Опубликуйте все локальные теги:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">git push origin --tags</code>
              </div>
              <li>Создайте дополнительный тег и опубликуйте его отдельно:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git tag -a v1.0.1 -m "Минорное обновление"</code>
              </div>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git push origin v1.0.1</code>
              </div>
              <li>Удалите локальный тег:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-orange-300">git tag -d v0.0.1-light</code>
              </div>
              <li>Удалите удаленный тег:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-yellow-300">git push origin :refs/tags/v0.0.1-light</code>
              </div>
              <li>Проверьте, что тег удален и локально, и удаленно</li>
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
            Я опубликовал теги и научился управлять ими
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Создание GitHub Release */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Package className="w-5 h-5 text-cyan-400" />
          Задание 3: Создание GitHub Release
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте полноценный релиз на GitHub с changelog и дополнительными файлами.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Подготовка к релизу:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте файл с информацией о проекте:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">{`echo "Это пример проекта для изучения тегов и релизов" > ABOUT.md`}</code>
              </div>
              <li>Добавьте коммит:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-blue-300">git add ABOUT.md && git commit -m "Добавил информацию о проекте"</code>
              </div>
              <li>Создайте аннотированный тег для релиза:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-purple-300">git tag -a v1.1.0 -m "Релиз версии 1.1.0"</code>
              </div>
              <li>Опубликуйте тег:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-orange-300">git push origin v1.1.0</code>
              </div>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Создание Release через интерфейс GitHub:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите в ваш репозиторий на GitHub</li>
              <li>Откройте вкладку "Releases"</li>
              <li>Нажмите "Draft a new release"</li>
              <li>Выберите тег <code className="bg-gray-700 px-1.5 py-0.5 rounded">v1.1.0</code></li>
              <li>Введите заголовок: <code className="bg-gray-700 px-1.5 py-0.5 rounded">Release v1.1.0 - Улучшенная версия</code></li>
              <li>Напишите подробное описание релиза (changelog):</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`## 🚀 Что нового в версии 1.1.0

### 📈 Улучшения
- Добавлена документация о проекте
- Улучшена структура репозитория
- Оптимизированы примеры кода

### 🐛 Исправления
- Исправлена ошибка в примерах
- Обновлены описания функций

### 📋 Изменения
- Обновлен README.md
- Добавлен файл ABOUT.md

## 📦 Как использовать
1. Клонируйте репозиторий
2. Изучите примеры
3. Примените знания в своих проектах`}</pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Добавление бинарных файлов и публикация:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте простой исполняемый файл или архив для примера:</li>
              <div className="ml-6 bg-gray-800 p-3 rounded my-2">
                <code className="text-sm text-green-300">{`echo "Пример бинарного файла" > example.bin`}</code>
              </div>
              <li>Добавьте файл как ассет к релизу (через интерфейс GitHub)</li>
              <li>Отметьте релиз как "Latest release"</li>
              <li>Опубликуйте релиз</li>
              <li>Проверьте, что релиз отображается корректно</li>
              <li>Изучите страницу релиза и скачайте добавленные файлы</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Дополнительные задания:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте pre-release версию (например, v2.0.0-beta.1)</li>
              <li>Настройте автоматическое создание релизов через GitHub Actions</li>
              <li>Изучите API GitHub Releases</li>
              <li>Создайте скрипт для автоматического создания тегов</li>
              <li>Добавьте в README.md раздел о версионировании проекта</li>
            </ul>
            
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-300 text-sm">
              ⚡ <span className="font-medium">Финальное задание:</span> Создайте в README.md таблицу с историей релизов вашего проекта.
            </div>
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
            Я создал GitHub Release и изучил дополнительные возможности
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
            <h3 className="font-bold text-white mb-2">Отличная работа! 🏷️</h3>
            <p className="text-gray-300">
              Теперь вы умеете создавать и управлять тегами в Git, публиковать их в удаленные репозитории и создавать профессиональные релизы на GitHub. Вы научились различать типы тегов и следовать лучшим практикам версионирования.
              В следующем уроке мы рассмотрим работу с Git hooks и автоматизацию задач.
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