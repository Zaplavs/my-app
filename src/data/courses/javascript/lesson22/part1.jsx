// src/data/courses/javascript/lesson22/part1.jsx
import React from 'react';
import { CheckSquare, Square, Plus, Trash2, Edit3, Save, X, List } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <List className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 22: Создание To-Do List (список дел)</h1>
            <h2 className="text-xl font-semibold text-green-300 mb-3">Комплексный проект с использованием всех изученных концепций</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Создать полнофункциональный список дел, объединяющий работу с массивами, DOM, событиями и функциями.
            </p>
          </div>
        </div>
      </div>

      {/* Планирование проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-blue-400" />
          Планирование проекта To-Do List
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Перед началом разработки важно <span className="font-medium text-yellow-300">спланировать</span> структуру проекта и определить <span className="font-medium text-blue-300">основные функции</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Основные функции списка дел:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><Plus className="w-4 h-4 inline mr-1" /> Добавление новых задач</li>
                <li><CheckSquare className="w-4 h-4 inline mr-1" /> Отметка задач как выполненных</li>
                <li><Trash2 className="w-4 h-4 inline mr-1" /> Удаление задач</li>
                <li><Edit3 className="w-4 h-4 inline mr-1" /> Редактирование задач</li>
                <li><List className="w-4 h-4 inline mr-1" /> Фильтрация задач (все/активные/выполненные)</li>
                <li>Сохранение задач в localStorage</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Структура данных:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Массив задач
let задачи = [
  {
    id: 1,
    текст: "Изучить JavaScript",
    выполнена: false,
    датаСоздания: "2024-01-15"
  },
  {
    id: 2,
    текст: "Создать To-Do List",
    выполнена: true,
    датаСоздания: "2024-01-16"
  }
];`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Архитектура приложения:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-2">Модель (Данные):</div>
                <ul className="list-disc pl-5 text-sm text-gray-300">
                  <li>Массив задач</li>
                  <li>Функции работы с данными</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-2">Представление (UI):</div>
                <ul className="list-disc pl-5 text-sm text-gray-300">
                  <li>HTML разметка</li>
                  <li>Функции отображения</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-xs text-gray-400 mb-2">Контроллер (Логика):</div>
                <ul className="list-disc pl-5 text-sm text-gray-300">
                  <li>Обработка событий</li>
                  <li>Связь модели и представления</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Создание HTML-структуры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-green-400" />
          Шаг 1: Создание HTML-структуры
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Начнем с создания <span className="font-medium text-green-300">базовой HTML-разметки</span> для нашего списка дел.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">HTML разметка:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
    
    <!-- Форма добавления задачи -->
    <div class="add-task">
      <input type="text" id="taskInput" placeholder="Введите новую задачу...">
      <button id="addTaskBtn">
        <Plus className="w-4 h-4" />
        Добавить
      </button>
    </div>
    
    <!-- Фильтры -->
    <div class="filters">
      <button class="filter-btn active" data-filter="all">Все</button>
      <button class="filter-btn" data-filter="active">Активные</button>
      <button class="filter-btn" data-filter="completed">Выполненные</button>
    </div>
    
    <!-- Список задач -->
    <ul id="taskList" class="task-list"></ul>
    
    <!-- Статистика -->
    <div class="stats">
      <span id="taskCount">0 задач</span>
      <button id="clearCompleted">Очистить выполненные</button>
    </div>
  </div>
  
  <script src="script.js"></script>
</body>
</html>`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Используйте семантические теги и добавьте ID для элементов, с которыми будете работать в JavaScript.
            </p>
          </div>
        </div>
      </div>

      {/* Инициализация данных и функций */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <List className="w-5 h-5 text-yellow-400" />
          Шаг 2: Инициализация данных и базовых функций
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создадим <span className="font-medium text-yellow-300">массив задач</span> и <span className="font-medium text-blue-300">базовые функции</span> для работы с данными.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="font-bold text-yellow-300 mb-3">Базовая структура JavaScript:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Массив задач (модель данных)
let задачи = [];

// Получение элементов DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const clearCompletedBtn = document.getElementById('clearCompleted');
const filterButtons = document.querySelectorAll('.filter-btn');

// Текущий фильтр
let текущийФильтр = 'all';

// Генерация уникального ID
function generateId() {
  return Date.now() + Math.random();
}

// Сохранение задач в localStorage
function сохранитьЗадачи() {
  localStorage.setItem('todoTasks', JSON.stringify(задачи));
}

// Загрузка задач из localStorage
function загрузитьЗадачи() {
  const сохраненныеЗадачи = localStorage.getItem('todoTasks');
  if (сохраненныеЗадачи) {
    задачи = JSON.parse(сохраненныеЗадачи);
  }
}

// Инициализация приложения
function инициализация() {
  загрузитьЗадачи();
  отобразитьЗадачи();
  обновитьСтатистику();
}

// Запуск при инициализации
инициализация();`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-700/30 rounded-lg">
            <p className="text-purple-300 text-sm">
              <span className="font-medium">💡 Совет:</span> Используйте localStorage для сохранения задач между сессиями. JSON.stringify и JSON.parse помогут в сериализации данных.
            </p>
          </div>
        </div>
      </div>

      {/* Добавление задач */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Plus className="w-5 h-5 text-green-400" />
          Шаг 3: Добавление задач
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Реализуем <span className="font-medium text-green-300">функциональность добавления</span> новых задач в список.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Функция добавления задачи:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Добавление новой задачи
function добавитьЗадачу(текст) {
  if (!текст.trim()) return;
  
  const новаяЗадача = {
    id: generateId(),
    текст: текст.trim(),
    выполнена: false,
    датаСоздания: new Date().toISOString()
  };
  
  задачи.push(новаяЗадача);
  сохранитьЗадачи();
  отобразитьЗадачи();
  обновитьСтатистику();
  
  // Очистка поля ввода
  taskInput.value = '';
  taskInput.focus();
}

// Обработчик события добавления
addTaskBtn.addEventListener('click', () => {
  добавитьЗадачу(taskInput.value);
});

// Добавление по Enter
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    добавитьЗадачу(taskInput.value);
  }
});`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Теоретическая помощь:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Валидация ввода</span> — проверяйте пустые строки</li>
                <li><span className="font-medium">Уникальные ID</span> — используйте Date.now() + Math.random()</li>
                <li><span className="font-medium">Фокусировка</span> — возвращайте фокус на поле ввода</li>
                <li><span className="font-medium">Удобство использования</span> — добавление по Enter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Отображение задач */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <List className="w-5 h-5 text-cyan-400" />
          Шаг 4: Отображение задач
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создадим <span className="font-medium text-cyan-300">функцию отображения</span> задач с учетом текущего фильтра.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-3">Функция отображения задач:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Фильтрация задач по текущему фильтру
function отфильтроватьЗадачи() {
  switch(текущийФильтр) {
    case 'active':
      return задачи.filter(задача => !задача.выполнена);
    case 'completed':
      return задачи.filter(задача => задача.выполнена);
    default:
      return задачи;
  }
}

// Отображение задач в списке
function отобразитьЗадачи() {
  const отфильтрованныеЗадачи = отфильтроватьЗадачи();
  
  taskList.innerHTML = '';
  
  отфильтрованныеЗадачи.forEach(задача => {
    const li = document.createElement('li');
    li.className = \`task-item \${задача.выполнена ? 'completed' : ''}\`;
    li.dataset.id = задача.id;
    
    li.innerHTML = \`
      <div class="task-content">
        <button class="toggle-btn" data-action="toggle">
          \${задача.выполнена ? 
            '<CheckSquare className="w-5 h-5 text-green-500" />' : 
            '<Square className="w-5 h-5 text-gray-400" />'}
        </button>
        <span class="task-text">\${задача.текст}</span>
      </div>
      <div class="task-actions">
        <button class="edit-btn" data-action="edit">
          <Edit3 className="w-4 h-4" />
        </button>
        <button class="delete-btn" data-action="delete">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    \`;
    
    taskList.appendChild(li);
  });
}

// Делегирование событий для задач
taskList.addEventListener('click', (e) => {
  const taskItem = e.target.closest('.task-item');
  if (!taskItem) return;
  
  const taskId = taskItem.dataset.id;
  const action = e.target.closest('[data-action]')?.dataset.action;
  
  switch(action) {
    case 'toggle':
      переключитьЗадачу(taskId);
      break;
    case 'edit':
      редактироватьЗадачу(taskId);
      break;
    case 'delete':
      удалитьЗадачу(taskId);
      break;
  }
});`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-orange-900/20 border border-orange-700/30 rounded-lg">
            <p className="text-orange-300 text-sm">
              <span className="font-medium">💡 Теоретическая помощь:</span> Используйте делегирование событий для динамически созданных элементов. Это более эффективно, чем добавлять обработчики к каждому элементу.
            </p>
          </div>
        </div>
      </div>

      {/* Управление задачами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckSquare className="w-5 h-5 text-purple-400" />
          <Trash2 className="w-5 h-5 text-red-400" />
          Шаг 5: Управление задачами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Реализуем <span className="font-medium text-purple-300">основные операции</span> с задачами: переключение, редактирование и удаление.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-3">Переключение статуса:</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`function переключитьЗадачу(id) {
  const задача = задачи.find(з => з.id == id);
  if (задача) {
    задача.выполнена = !задача.выполнена;
    сохранитьЗадачи();
    отобразитьЗадачи();
    обновитьСтатистику();
  }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Редактирование задачи:</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`function редактироватьЗадачу(id) {
  const задача = задачи.find(з => з.id == id);
  if (!задача) return;
  
  const новоеЗначение = prompt('Редактировать задачу:', задача.текст);
  if (новоеЗначение !== null && новоеЗначение.trim()) {
    задача.текст = новоеЗначение.trim();
    сохранитьЗадачи();
    отобразитьЗадачи();
  }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3">Удаление задачи:</h3>
              <div className="bg-gray-800 p-3 rounded">
                <pre className="text-xs text-gray-300">
{`function удалитьЗадачу(id) {
  if (confirm('Удалить задачу?')) {
    задачи = задачи.filter(з => з.id != id);
    сохранитьЗадачи();
    отобразитьЗадачи();
    обновитьСтатистику();
  }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Фильтрация и очистка:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Фильтрация задач:</div>
                <pre className="text-sm text-gray-300">
{`// Обработчики фильтров
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    текущийФильтр = button.dataset.filter;
    отобразитьЗадачи();
  });
});`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Очистка выполненных:</div>
                <pre className="text-sm text-gray-300">
{`// Очистка выполненных задач
clearCompletedBtn.addEventListener('click', () => {
  if (confirm('Удалить все выполненные задачи?')) {
    задачи = задачи.filter(задача => !задача.выполнена);
    сохранитьЗадачи();
    отобразитьЗадачи();
    обновитьСтатистику();
  }
});`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Обновление статистики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <List className="w-5 h-5 text-orange-400" />
          Шаг 6: Обновление статистики
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создадим <span className="font-medium text-orange-300">функцию обновления статистики</span> для отображения количества задач.
          </p>

          <div className="mt-4 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Функция обновления статистики:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Обновление статистики задач
function обновитьСтатистику() {
  const всегоЗадач = задачи.length;
  const активныеЗадачи = задачи.filter(з => !з.выполнена).length;
  const выполненныеЗадачи = задачи.filter(з => з.выполнена).length;
  
  // Обновление счетчика задач
  if (всегоЗадач === 0) {
    taskCount.textContent = 'Нет задач';
  } else if (активныеЗадачи === 0) {
    taskCount.textContent = 'Все задачи выполнены! 🎉';
  } else {
    taskCount.textContent = \`\${активныеЗадачи} \${склонениеЗадач(активныеЗадачи)} осталось\`;
  }
  
  // Управление видимостью кнопки очистки
  clearCompletedBtn.style.display = выполненныеЗадачи > 0 ? 'inline-block' : 'none';
}

// Функция склонения слова "задача"
function склонениеЗадач(число) {
  const последние2Цифры = число % 100;
  const последняяЦифра = число % 10;
  
  if (последние2Цифры >= 11 && последние2Цифры <= 19) {
    return 'задач';
  }
  
  switch (последняяЦифра) {
    case 1: return 'задача';
    case 2:
    case 3:
    case 4: return 'задачи';
    default: return 'задач';
  }
}

// Вызов обновления статистики при изменении задач
// (уже интегрировано в функции добавления, удаления и переключения)`}
              </pre>
            </div>
          </div>

          <div className="mt-4 p-3 bg-cyan-900/20 border border-cyan-700/30 rounded-lg">
            <p className="text-cyan-300 text-sm">
              <span className="font-medium">💡 Теоретическая помощь:</span> Используйте правильное склонение слов в зависимости от числа. Это улучшает пользовательский опыт.
            </p>
          </div>
        </div>
      </div>

      {/* Полный пример кода */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Save className="w-5 h-5 text-green-400" />
          Полный пример реализации
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">script.js (основной файл):</h3>
            <div className="bg-gray-800 p-4 rounded max-h-96 overflow-y-auto">
              <pre className="text-xs text-gray-300">
{`// Массив задач (модель данных)
let задачи = [];
let текущийФильтр = 'all';

// Получение элементов DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const clearCompletedBtn = document.getElementById('clearCompleted');
const filterButtons = document.querySelectorAll('.filter-btn');

// Генерация уникального ID
function generateId() {
  return Date.now() + Math.random();
}

// Сохранение задач в localStorage
function сохранитьЗадачи() {
  localStorage.setItem('todoTasks', JSON.stringify(задачи));
}

// Загрузка задач из localStorage
function загрузитьЗадачи() {
  const сохраненныеЗадачи = localStorage.getItem('todoTasks');
  if (сохраненныеЗадачи) {
    задачи = JSON.parse(сохраненныеЗадачи);
  }
}

// Фильтрация задач
function отфильтроватьЗадачи() {
  switch(текущийФильтр) {
    case 'active':
      return задачи.filter(задача => !задача.выполнена);
    case 'completed':
      return задачи.filter(задача => задача.выполнена);
    default:
      return задачи;
  }
}

// Отображение задач
function отобразитьЗадачи() {
  const отфильтрованныеЗадачи = отфильтроватьЗадачи();
  taskList.innerHTML = '';
  
  отфильтрованныеЗадачи.forEach(задача => {
    const li = document.createElement('li');
    li.className = \`task-item \${задача.выполнена ? 'completed' : ''}\`;
    li.dataset.id = задача.id;
    
    li.innerHTML = \`
      <div class="task-content">
        <button class="toggle-btn" data-action="toggle">
          \${задача.выполнена ? 
            '<svg class="w-5 h-5 text-green-500"><use href="#check-square"></use></svg>' : 
            '<svg class="w-5 h-5 text-gray-400"><use href="#square"></use></svg>'}
        </button>
        <span class="task-text">\${задача.текст}</span>
      </div>
      <div class="task-actions">
        <button class="edit-btn" data-action="edit">
          <svg class="w-4 h-4"><use href="#edit"></use></svg>
        </button>
        <button class="delete-btn" data-action="delete">
          <svg class="w-4 h-4"><use href="#trash"></use></svg>
        </button>
      </div>
    \`;
    
    taskList.appendChild(li);
  });
}

// Добавление задачи
function добавитьЗадачу(текст) {
  if (!текст.trim()) return;
  
  const новаяЗадача = {
    id: generateId(),
    текст: текст.trim(),
    выполнена: false,
    датаСоздания: new Date().toISOString()
  };
  
  задачи.push(новаяЗадача);
  сохранитьЗадачи();
  отобразитьЗадачи();
  обновитьСтатистику();
  taskInput.value = '';
  taskInput.focus();
}

// Переключение статуса задачи
function переключитьЗадачу(id) {
  const задача = задачи.find(з => з.id == id);
  if (задача) {
    задача.выполнена = !задача.выполнена;
    сохранитьЗадачи();
    отобразитьЗадачи();
    обновитьСтатистику();
  }
}

// Редактирование задачи
function редактироватьЗадачу(id) {
  const задача = задачи.find(з => з.id == id);
  if (!задача) return;
  
  const новоеЗначение = prompt('Редактировать задачу:', задача.текст);
  if (новоеЗначение !== null && новоеЗначение.trim()) {
    задача.текст = новоеЗначение.trim();
    сохранитьЗадачи();
    отобразитьЗадачи();
  }
}

// Удаление задачи
function удалитьЗадачу(id) {
  if (confirm('Удалить задачу?')) {
    задачи = задачи.filter(з => з.id != id);
    сохранитьЗадачи();
    отобразитьЗадачи();
    обновитьСтатистику();
  }
}

// Обновление статистики
function обновитьСтатистику() {
  const всегоЗадач = задачи.length;
  const активныеЗадачи = задачи.filter(з => !з.выполнена).length;
  const выполненныеЗадачи = задачи.filter(з => з.выполнена).length;
  
  if (всегоЗадач === 0) {
    taskCount.textContent = 'Нет задач';
  } else if (активныеЗадачи === 0) {
    taskCount.textContent = 'Все задачи выполнены! 🎉';
  } else {
    taskCount.textContent = \`\${активныеЗадачи} \${склонениеЗадач(активныеЗадачи)} осталось\`;
  }
  
  clearCompletedBtn.style.display = выполненныеЗадачи > 0 ? 'inline-block' : 'none';
}

// Склонение слова "задача"
function склонениеЗадач(число) {
  const последние2Цифры = число % 100;
  const последняяЦифра = число % 10;
  
  if (последние2Цифры >= 11 && последние2Цифры <= 19) {
    return 'задач';
  }
  
  switch (последняяЦифра) {
    case 1: return 'задача';
    case 2:
    case 3:
    case 4: return 'задачи';
    default: return 'задач';
  }
}

// Инициализация приложения
function инициализация() {
  загрузитьЗадачи();
  отобразитьЗадачи();
  обновитьСтатистику();
  
  // Обработчики событий
  addTaskBtn.addEventListener('click', () => {
    добавитьЗадачу(taskInput.value);
  });
  
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      добавитьЗадачу(taskInput.value);
    }
  });
  
  taskList.addEventListener('click', (e) => {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;
    
    const taskId = taskItem.dataset.id;
    const action = e.target.closest('[data-action]')?.dataset.action;
    
    switch(action) {
      case 'toggle':
        переключитьЗадачу(taskId);
        break;
      case 'edit':
        редактироватьЗадачу(taskId);
        break;
      case 'delete':
        удалитьЗадачу(taskId);
        break;
    }
  });
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      текущийФильтр = button.dataset.filter;
      отобразитьЗадачи();
    });
  });
  
  clearCompletedBtn.addEventListener('click', () => {
    if (confirm('Удалить все выполненные задачи?')) {
      задачи = задачи.filter(задача => !задача.выполнена);
      сохранитьЗадачи();
      отобразитьЗадачи();
      обновитьСтатистику();
    }
  });
}

// Запуск приложения
инициализация();`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <List className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы создали полнофункциональный To-Do List, который объединяет все изученные концепции: работу с массивами, DOM, событиями и функциями. Этот проект можно использовать как основу для более сложных приложений!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;