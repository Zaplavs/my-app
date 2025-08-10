// src/data/courses/git/lesson17/part3.jsx
import React, { useState } from 'react';
import { FileText, Play, CheckCircle, Terminal, Eye, Kanban, Users, Tag, Calendar } from 'lucide-react';

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
            <Kanban className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Работа с Issues и проектными досками</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Практически освоить создание Issues, работу с метками, Milestones и GitHub Projects.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Создание Issues и настройка меток */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-green-400" />
          Задание 1: Создайте Issues и настройте метки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте несколько Issues для проекта и настройте систему меток для эффективной организации задач.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Подготовьте репозиторий
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый репозиторий на GitHub или используйте существующий</li>
              <li>Убедитесь, что у вас есть права на создание Issues</li>
              <li>Откройте вкладку "Issues" в вашем репозитории</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Создайте систему меток
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите в раздел "Labels" (кнопка "Labels" рядом с "New issue")</li>
              <li>Создайте следующие метки:</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="bg-red-500/20 px-2 py-1 rounded text-xs">bug</span>
                  <span className="text-gray-300 text-sm">Ошибки и баги</span>
                </div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="bg-green-500/20 px-2 py-1 rounded text-xs">feature</span>
                  <span className="text-gray-300 text-sm">Новый функционал</span>
                </div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-500/20 px-2 py-1 rounded text-xs">documentation</span>
                  <span className="text-gray-300 text-sm">Документация</span>
                </div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-500/20 px-2 py-1 rounded text-xs">enhancement</span>
                  <span className="text-gray-300 text-sm">Улучшения</span>
                </div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="bg-purple-500/20 px-2 py-1 rounded text-xs">help wanted</span>
                  <span className="text-gray-300 text-sm">Нужна помощь</span>
                </div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-500/20 px-2 py-1 rounded text-xs">good first issue</span>
                  <span className="text-gray-300 text-sm">Для новичков</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Создайте Issues
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте как минимум 3 Issues с разными метками:</li>
            </ul>
            
            <div className="mt-3 space-y-3">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-red-400" />
                  <span className="font-bold text-red-300">Bug Issue</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-white">Заголовок:</div>
                  <div className="text-gray-300">[BUG] Приложение падает при загрузке больших файлов</div>
                  <div className="font-medium text-white mt-2">Описание:</div>
                  <div className="text-gray-300">При попытке загрузить файл размером более 100MB приложение аварийно завершает работу. Необходимо добавить проверку размера файла и отображать соответствующее сообщение.</div>
                  <div className="mt-2">
                    <span className="bg-red-500/20 px-2 py-1 rounded text-xs">bug</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-green-400" />
                  <span className="font-bold text-green-300">Feature Issue</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-white">Заголовок:</div>
                  <div className="text-gray-300">[FEATURE] Добавить темную тему</div>
                  <div className="font-medium text-white mt-2">Описание:</div>
                  <div className="text-gray-300">Реализовать возможность переключения между светлой и темной темой интерфейса. Добавить настройку в профиль пользователя.</div>
                  <div className="mt-2">
                    <span className="bg-green-500/20 px-2 py-1 rounded text-xs">feature</span>
                    <span className="bg-purple-500/20 px-2 py-1 rounded text-xs ml-1">help wanted</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-blue-400" />
                  <span className="font-bold text-blue-300">Documentation Issue</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-white">Заголовок:</div>
                  <div className="text-gray-300">[DOCS] Обновить README с примерами использования API</div>
                  <div className="font-medium text-white mt-2">Описание:</div>
                  <div className="text-gray-300">Добавить в README.md примеры вызовов API с различными параметрами и ожидаемыми результатами.</div>
                  <div className="mt-2">
                    <span className="bg-blue-500/20 px-2 py-1 rounded text-xs">documentation</span>
                    <span className="bg-gray-500/20 px-2 py-1 rounded text-xs ml-1">good first issue</span>
                  </div>
                </div>
              </div>
            </div>
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
            Я создал Issues и настроил систему меток
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Создание Milestones и назначение исполнителей */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Users className="w-5 h-5 text-purple-400" />
          Задание 2: Создайте Milestones и назначьте исполнителей
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте Milestones для планирования работы и назначьте исполнителей на задачи.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Создайте Milestones
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите во вкладку "Issues" → "Milestones"</li>
              <li>Создайте следующие Milestones:</li>
            </ul>
            
            <div className="mt-3 space-y-3">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span className="font-bold text-green-300">v1.0 Release</span>
                </div>
                <div className="text-sm text-gray-300">
                  <div><strong>Описание:</strong> Первый стабильный релиз приложения</div>
                  <div><strong>Дата завершения:</strong> Через 2 недели от текущей даты</div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="font-bold text-blue-300">Q1 Improvements</span>
                </div>
                <div className="text-sm text-gray-300">
                  <div><strong>Описание:</strong> Улучшения и исправления в первом квартале</div>
                  <div><strong>Дата завершения:</strong> Через 1 месяц от текущей даты</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Назначьте исполнителей и свяжите с Milestones
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Откройте созданные ранее Issues</li>
              <li>Назначьте себя как исполнителя на все Issues</li>
              <li>Свяжите Issues с соответствующими Milestones:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-white mb-2">Связывание Issues с Milestones:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                <li>Bug Issue → v1.0 Release</li>
                <li>Feature Issue → Q1 Improvements</li>
                <li>Documentation Issue → v1.0 Release</li>
              </ul>
            </div>
            
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded text-blue-300 text-sm">
              ⚡ <span className="font-medium">Совет:</span> Используйте правую боковую панель Issue для назначения исполнителей и Milestones.
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
              <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              Используйте команды в комментариях
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Добавьте комментарий к одному из Issues со следующими командами:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-300 text-sm">
{`/assign @ваш_логин
/label enhancement
/milestone "v1.0 Release"`}
              </pre>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>Наблюдайте, как команды автоматически применяются к Issue</li>
              <li>Проверьте, что Issue появился в соответствующем Milestone</li>
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
            Я создал Milestones, назначил исполнителей и использовал команды
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Создание GitHub Project и автоматизация */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Kanban className="w-5 h-5 text-cyan-400" />
          Задание 3: Создайте GitHub Project и настройте автоматизацию
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте проектную доску и настройте автоматические переходы задач.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Создайте GitHub Project:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Перейдите во вкладку "Projects" в вашем репозитории</li>
              <li>Нажмите "New project"</li>
              <li>Выберите шаблон "Automated kanban"</li>
              <li>Введите название: "Разработка приложения"</li>
              <li>Нажмите "Create project"</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Настройте автоматические переходы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Нажмите на шестеренку в правом верхнем углу доски</li>
              <li>Выберите "Settings"</li>
              <li>В разделе "Automation" настройте следующие правила:</li>
            </ul>
            
            <div className="mt-3 bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-white mb-2">Правила автоматизации:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>When an issue is opened → Move to "To do"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span>When an issue is assigned → Move to "In progress"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">→</span>
                  <span>When a pull request is opened → Move to "Review"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span>When an issue is closed → Move to "Done"</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Проверьте автоматизацию:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Создайте новый Issue через интерфейс доски (кнопка "+" в колонке "To do")</li>
              <li>Убедитесь, что Issue автоматически появился в колонке "To do"</li>
              <li>Назначьте себя как исполнителя на этот Issue</li>
              <li>Проверьте, что Issue автоматически переместился в "In progress"</li>
              <li>Добавьте комментарий: "Closes #[номер_этого_issue]" в любой коммит или PR</li>
              <li>Закройте Issue и проверьте автоматический переход в "Done"</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Используйте фильтры и сортировку:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Попробуйте фильтровать задачи по меткам (например, только "bug")</li>
              <li>Отсортируйте задачи по дате создания</li>
              <li>Создайте пользовательский фильтр для задач без исполнителя</li>
              <li>Используйте поиск по названию и описанию задач</li>
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
            Я создал GitHub Project, настроил автоматизацию и проверил фильтры
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
            <h3 className="font-bold text-white mb-2">Отличная работа! 📋</h3>
            <p className="text-gray-300">
              Теперь вы умеете эффективно использовать Issues для управления задачами, создавать и настраивать Milestones, работать с метками и использовать GitHub Projects для визуализации рабочего процесса.
              В следующем уроке мы рассмотрим работу с GitHub Actions для автоматизации CI/CD.
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