// src/data/courses/javascript/lesson23/part1.jsx
import React from 'react';
import { Database, Save, RefreshCw, Shield, AlertTriangle, HardDrive } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-500/20 p-3 rounded-lg">
            <Database className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📚 Урок 23: Улучшение проекта: сохранение в localStorage</h1>
            <h2 className="text-xl font-semibold text-indigo-300 mb-3">Сохранение данных между перезагрузками страницы</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Улучшить To-Do List, добавив сохранение данных в localStorage и изучить особенности работы с Web Storage API.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое Web Storage */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <HardDrive className="w-5 h-5 text-blue-400" />
          Что такое Web Storage?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-blue-300">Web Storage API</span> предоставляет <span className="font-medium text-yellow-300">механизмы хранения данных</span> в браузере без истечения срока действия.
          </p>
          <p>
            В отличие от cookies, Web Storage <span className="font-medium">не отправляется</span> на сервер при каждом запросе.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-2">localStorage vs sessionStorage:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-medium text-indigo-300">localStorage</div>
                  <ul className="list-disc pl-5 text-sm text-gray-300 mt-1">
                    <li>Данные сохраняются между сессиями</li>
                    <li>Не имеют срока истечения</li>
                    <li>Общий объем ~5-10MB</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-medium text-purple-300">sessionStorage</div>
                  <ul className="list-disc pl-5 text-sm text-gray-300 mt-1">
                    <li>Данные удаляются при закрытии вкладки</li>
                    <li>Ограничен текущей сессией</li>
                    <li>Отдельное хранилище для каждой вкладки</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">Аналогия:</h3>
              <p className="text-sm text-gray-300">
                Web Storage как <span className="font-medium">личный сейф</span> в браузере — ваши данные <span className="font-medium">остаются там</span> между посещениями сайта, пока вы их <span className="font-medium">сами не удалите</span>.
              </p>
              
              <div className="mt-4 bg-gray-800 p-3 rounded">
                <h4 className="font-medium text-cyan-300 mb-2">Основные методы:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li><code className="bg-gray-700 px-1 rounded">setItem(key, value)</code> — сохранение данных</li>
                  <li><code className="bg-gray-700 px-1 rounded">getItem(key)</code> — получение данных</li>
                  <li><code className="bg-gray-700 px-1 rounded">removeItem(key)</code> — удаление данных</li>
                  <li><code className="bg-gray-700 px-1 rounded">clear()</code> — очистка всего хранилища</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Основы работы с localStorage */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Save className="w-5 h-5 text-green-400" />
          Основы работы с localStorage
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-800 px-1 rounded text-green-300">localStorage</code> позволяет <span className="font-medium text-yellow-300">сохранять данные</span> в формате ключ-значение между сессиями браузера.
          </p>
          <p>
            Все данные хранятся в <span className="font-medium">строковом формате</span>, поэтому для сложных объектов требуется сериализация.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Базовые операции:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">Сохранение данных:</div>
                  <pre className="text-xs text-gray-300">
{`// Простые значения
localStorage.setItem('имя', 'Иван');
localStorage.setItem('возраст', '25');

// Объекты (требуется сериализация)
const пользователь = { имя: 'Мария', email: 'maria@example.com' };
localStorage.setItem('пользователь', JSON.stringify(пользователь));

// Массивы
const задачи = ['Купить хлеб', 'Позвонить другу'];
localStorage.setItem('задачи', JSON.stringify(задачи));`}
                  </pre>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">Получение данных:</div>
                  <pre className="text-xs text-gray-300">
{`// Простые значения
const имя = localStorage.getItem('имя'); // 'Иван'
const возраст = localStorage.getItem('возраст'); // '25'

// Объекты (требуется десериализация)
const пользователь = JSON.parse(localStorage.getItem('пользователь'));
console.log(пользователь.имя); // 'Мария'

// Проверка существования
if (localStorage.getItem('ключ') !== null) {
  // данные существуют
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Управление данными:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">Удаление данных:</div>
                  <pre className="text-xs text-gray-300">
{`// Удаление конкретного элемента
localStorage.removeItem('имя');

// Очистка всего хранилища
localStorage.clear();

// Проверка количества элементов
console.log(localStorage.length);`}
                  </pre>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">Перебор элементов:</div>
                  <pre className="text-xs text-gray-300">
{`// Перебор всех ключей
for (let i = 0; i < localStorage.length; i++) {
  const ключ = localStorage.key(i);
  const значение = localStorage.getItem(ключ);
  console.log(\`\${ключ}: \${значение}\`);
}

// Или через Object.keys
Object.keys(localStorage).forEach(ключ => {
  console.log(\`\${ключ}: \${localStorage.getItem(ключ)}\`);
});`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Практический пример:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// Функция для безопасного сохранения объектов
function сохранитьОбъект(ключ, объект) {
  try {
    localStorage.setItem(ключ, JSON.stringify(объект));
    return true;
  } catch (error) {
    console.error('Ошибка сохранения:', error);
    return false;
  }
}

// Функция для безопасного получения объектов
function получитьОбъект(ключ, поумолчанию = null) {
  try {
    const данные = localStorage.getItem(ключ);
    return данные ? JSON.parse(данные) : поумолчанию;
  } catch (error) {
    console.error('Ошибка получения:', error);
    return поумолчанию;
  }
}

// Использование
const задачи = получитьОбъект('todoTasks', []);
задачи.push({ id: 1, текст: 'Новая задача', выполнена: false });
сохранитьОбъект('todoTasks', задачи);`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Интеграция с To-Do List */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <RefreshCw className="w-5 h-5 text-cyan-400" />
          Интеграция localStorage с To-Do List
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Улучшим наш предыдущий To-Do List, добавив <span className="font-medium text-cyan-300">сохранение данных</span> между перезагрузками страницы.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-3">Улучшенная архитектура данных:</h3>
              <div className="bg-gray-800 p-4 rounded">
                <pre className="text-sm text-gray-300">
{`// Улучшенная структура задачи
const задачаПример = {
  id: 'unique-id-123',
  текст: 'Изучить localStorage',
  выполнена: false,
  датаСоздания: '2024-01-15T10:30:00.000Z',
  датаИзменения: '2024-01-15T10:30:00.000Z',
  приоритет: 'medium', // low, medium, high
  категория: 'учеба',
  теги: ['javascript', 'web-storage']
};

// Конфигурация приложения
const конфигурация = {
  текущийФильтр: 'all',
  текущаяТема: 'light',
  сортировкаПоДате: true,
  показыватьВыполненные: true
};`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Управление хранилищем:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="text-xs text-gray-400 mb-1">Класс для работы с хранилищем:</div>
                  <pre className="text-xs text-gray-300">
{`class ХранилищеЗадач {
  constructor(ключ = 'todoTasks') {
    this.ключ = ключ;
  }
  
  сохранить(задачи) {
    try {
      localStorage.setItem(this.ключ, JSON.stringify(задачи));
      return true;
    } catch (error) {
      this.обработатьОшибку(error);
      return false;
    }
  }
  
  загрузить() {
    try {
      const данные = localStorage.getItem(this.ключ);
      return данные ? JSON.parse(данные) : [];
    } catch (error) {
      this.обработатьОшибку(error);
      return [];
    }
  }
  
  обработатьОшибку(error) {
    if (error.name === 'QuotaExceededError') {
      alert('Хранилище переполнено! Удалите некоторые задачи.');
    } else {
      console.error('Ошибка работы с хранилищем:', error);
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3">Улучшенные функции To-Do List:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Инициализация с сохранением:</div>
                <pre className="text-sm text-gray-300">
{`// Инициализация приложения с восстановлением данных
function инициализироватьПриложение() {
  // Загрузка задач
  const сохраненныеЗадачи = хранилищеЗадач.загрузить();
  задачи = Array.isArray(сохраненныеЗадачи) ? сохраненныеЗадачи : [];
  
  // Загрузка конфигурации
  const сохраненнаяКонфигурация = получитьОбъект('todoConfig', {});
  Object.assign(конфигурация, сохраненнаяКонфигурация);
  
  // Применение настроек
  применитьКонфигурацию();
  
  // Отображение данных
  отобразитьЗадачи();
  обновитьСтатистику();
  обновитьИнтерфейс();
}

// Автоматическое сохранение при изменениях
function обновитьХранилище() {
  хранилищеЗадач.сохранить(задачи);
  сохранитьОбъект('todoConfig', конфигурация);
  обновитьСтатистику();
}`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Миграция данных:</div>
                <pre className="text-sm text-gray-300">
{`// Функция миграции для новых версий структуры данных
function мигрироватьДанные(старыеДанные) {
  return старыеДанные.map(задача => ({
    ...задача,
    id: задача.id || generateId(),
    датаСоздания: задача.датаСоздания || new Date().toISOString(),
    датаИзменения: задача.датаИзменения || new Date().toISOString(),
    приоритет: задача.приоритет || 'medium',
    категория: задача.категория || 'general',
    теги: Array.isArray(задача.теги) ? задача.теги : []
  }));
}

// Использование при загрузке
const данные = хранилищеЗадач.загрузить();
задачи = мигрироватьДанные(Array.isArray(данные) ? данные : []);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ограничения и ограничения_quota */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          Ограничения и квоты localStorage
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <code className="bg-gray-800 px-1 rounded text-orange-300">localStorage</code> имеет <span className="font-medium text-yellow-300">ограничения</span> по объему и безопасности, которые важно учитывать при разработке.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <h3 className="font-bold text-orange-300 mb-3">Технические ограничения:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Объем памяти</span> — обычно 5-10MB на домен</li>
                <li><span className="font-medium">Синхронные операции</span> — могут блокировать UI</li>
                <li><span className="font-medium">Только строки</span> — требуются JSON.stringify/parse</li>
                <li><span className="font-medium">Один поток</span> — не потокобезопасно</li>
                <li><span className="font-medium">Нет истечения</span> — данные хранятся вечно</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <h3 className="font-bold text-red-300 mb-3">Ошибки и исключения:</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-medium text-red-300">QuotaExceededError</div>
                  <p className="text-xs text-gray-300 mt-1">
                    Возникает при превышении квоты хранения
                  </p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-medium text-orange-300">SecurityError</div>
                  <p className="text-xs text-gray-300 mt-1">
                    Возникает в приватном режиме или при ограничениях
                  </p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <div className="font-medium text-yellow-300">SyntaxError</div>
                  <p className="text-xs text-gray-300 mt-1">
                    Возникает при некорректном JSON
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Обработка ошибок:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Безопасные операции:</div>
                <pre className="text-sm text-gray-300">
{`// Безопасное сохранение данных
function безопасноеСохранение(ключ, данные) {
  try {
    const сериализованныеДанные = JSON.stringify(данные);
    
    // Проверка размера данных
    if (new Blob([сериализованныеДанные]).size > 1024 * 1024) {
      throw new Error('Данные слишком большие для сохранения');
    }
    
    localStorage.setItem(ключ, сериализованныеДанные);
    return { успех: true };
  } catch (error) {
    return { 
      успех: false, 
      ошибка: error.name,
      сообщение: error.message 
    };
  }
}

// Безопасное получение данных
function безопасноеПолучение(ключ, поумолчанию = null) {
  try {
    const данные = localStorage.getItem(ключ);
    return данные ? JSON.parse(данные) : поумолчанию;
  } catch (error) {
    console.warn(\`Ошибка получения данных по ключу \${ключ}:\`, error);
    return поумолчанию;
  }
}`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Управление квотой:</div>
                <pre className="text-sm text-gray-300">
{`// Проверка доступного места
function проверитьКвоту() {
  try {
    const тестовыйКлюч = '__storage_test__';
    const тестовыеДанные = 'x'.repeat(1024); // 1KB
    
    localStorage.setItem(тестовыйКлюч, тестовыеДанные);
    localStorage.removeItem(тестовыйКлюч);
    
    return { доступно: true };
  } catch (error) {
    return { 
      доступно: false, 
      ошибка: error.name 
    };
  }
}

// Очистка старых данных
function очиститьСтарыеДанные() {
  const ключиДляУдаления = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const ключ = localStorage.key(i);
    if (ключ.startsWith('todo_old_')) {
      ключиДляУдаления.push(ключ);
    }
  }
  
  ключиДляУдаления.forEach(ключ => {
    localStorage.removeItem(ключ);
  });
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Безопасность и лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-green-400" />
          Безопасность и лучшие практики
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При работе с <code className="bg-gray-800 px-1 rounded text-green-300">localStorage</code> важно соблюдать <span className="font-medium text-yellow-300">принципы безопасности</span> и следовать <span className="font-medium text-blue-300">лучшим практикам</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-3">Принципы безопасности:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Не храните конфиденциальные данные</span> — пароли, токены, ПИН-коды</li>
                <li><span className="font-medium">Валидируйте данные</span> — проверяйте типы и формат</li>
                <li><span className="font-medium">Избегайте XSS</span> — не сохраняйте HTML/JS код</li>
                <li><span className="font-medium">Используйте уникальные ключи</span> — избегайте конфликтов</li>
                <li><span className="font-medium">Шифруйте чувствительные данные</span> — если необходимо хранить</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <h3 className="font-bold text-blue-300 mb-3">Лучшие практики:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li><span className="font-medium">Используйте префиксы</span> — для группировки данных</li>
                <li><span className="font-medium">Обрабатывайте ошибки</span> — try/catch для всех операций</li>
                <li><span className="font-medium">Ограничивайте размер</span> — удаляйте старые данные</li>
                <li><span className="font-medium">Используйте классы</span> — для инкапсуляции логики</li>
                <li><span className="font-medium">Тестируйте</span> — в разных браузерах и режимах</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-3">Продвинутые техники:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Шаблон синглтон для хранилища:</div>
                <pre className="text-sm text-gray-300">
{`class ХранилищеДанных {
  constructor() {
    if (ХранилищеДанных.instance) {
      return ХранилищеДанных.instance;
    }
    
    this.префикс = 'todo_app_';
    this.версия = '1.0';
    ХранилищеДанных.instance = this;
  }
  
  ключ(имя) {
    return \`\${this.префикс}\${имя}_v\${this.версия}\`;
  }
  
  сохранить(ключ, данные) {
    return безопасноеСохранение(this.ключ(ключ), данные);
  }
  
  получить(ключ, поумолчанию = null) {
    return безопасноеПолучение(this.ключ(ключ), поумолчанию);
  }
  
  удалить(ключ) {
    localStorage.removeItem(this.ключ(ключ));
  }
}

// Использование
const хранилище = new ХранилищеДанных();
хранилище.сохранить('tasks', задачи);
const загруженныеЗадачи = хранилище.получить('tasks', []);`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Автоматическая синхронизация:</div>
                <pre className="text-sm text-gray-300">
{`// Слушатель изменений в других вкладках
window.addEventListener('storage', (e) => {
  if (e.key === 'todo_app_tasks_v1.0') {
    // Данные изменены в другой вкладке
    const новые задачи = безопасноеПолучение('todo_app_tasks_v1.0', []);
    синхронизироватьЗадачи(новыеЗадачи);
    отобразитьЗадачи();
    обновитьСтатистику();
  }
});

// Функция синхронизации
function синхронизироватьЗадачи(новыеЗадачи) {
  // Объединение задач без дубликатов
  const idMap = new Map();
  [...задачи, ...новыеЗадачи].forEach(задача => {
    if (!idMap.has(задача.id) || 
        new Date(задача.датаИзменения) > new Date(idMap.get(задача.id).датаИзменения)) {
      idMap.set(задача.id, задача);
    }
  });
  
  задачи = Array.from(idMap.values());
  хранилище.сохранить('tasks', задачи);
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Альтернативы и расширения */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-blue-400" />
          Альтернативы и расширения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Хотя <code className="bg-gray-800 px-1 rounded text-blue-300">localStorage</code> отлично подходит для простых задач, существуют <span className="font-medium text-yellow-300">альтернативы</span> для более сложных сценариев.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <h3 className="font-bold text-cyan-300 mb-2">IndexedDB</h3>
              <p className="text-sm text-gray-300">
                Мощная клиентская база данных для больших объемов структурированных данных с индексами и транзакциями.
              </p>
              <div className="mt-2 text-xs text-gray-400">
                Подходит для: сложных приложений, офлайн-режима, больших данных
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <h3 className="font-bold text-green-300 mb-2">sessionStorage</h3>
              <p className="text-sm text-gray-300">
                Аналог localStorage, но данные удаляются при закрытии вкладки.
              </p>
              <div className="mt-2 text-xs text-gray-400">
                Подходит для: временных данных, сессионного состояния
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <h3 className="font-bold text-purple-300 mb-2">Cookies</h3>
              <p className="text-sm text-gray-300">
                Небольшие данные, отправляемые на сервер при каждом запросе.
              </p>
              <div className="mt-2 text-xs text-gray-400">
                Подходит для: аутентификации, отслеживания, небольших данных
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-3">Улучшения для To-Do List:</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Экспорт/импорт данных:</div>
                <pre className="text-sm text-gray-300">
{`// Экспорт задач в файл
function экспортироватьЗадачи() {
  const данные = {
    задачи: задачи,
    конфигурация: конфигурация,
    экспорт: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(данные, null, 2)], {
    type: 'application/json'
  });
  
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = \`todo_backup_\${Date.now()}.json\`;
  a.click();
  URL.revokeObjectURL(url);
}

// Импорт задач из файла
function импортироватьЗадачи(event) {
  const файл = event.target.files[0];
  if (!файл) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const данные = JSON.parse(e.target.result);
      задачи = данные.задачи || [];
      Object.assign(конфигурация, данные.конфигурация || {});
      
      хранилище.сохранить('tasks', задачи);
      хранилище.сохранить('config', конфигурация);
      
      инициализироватьПриложение();
      alert('Данные успешно импортированы!');
    } catch (error) {
      alert('Ошибка импорта данных: ' + error.message);
    }
  };
  reader.readAsText(файл);
}`}
                </pre>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="text-xs text-gray-400 mb-2">Автоматическое резервное копирование:</div>
                <pre className="text-sm text-gray-300">
{`// Автоматическое резервное копирование
function создатьРезервнуюКопию() {
  const backupKey = \`todo_backup_\${Date.now()}\`;
  const backupData = {
    задачи: [...задачи],
    timestamp: Date.now(),
    version: '1.0'
  };
  
  localStorage.setItem(backupKey, JSON.stringify(backupData));
  
  // Удаление старых резервных копий (оставляем последние 5)
  const backupKeys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('todo_backup_')) {
      backupKeys.push(key);
    }
  }
  
  if (backupKeys.length > 5) {
    backupKeys
      .sort()
      .slice(0, backupKeys.length - 5)
      .forEach(key => localStorage.removeItem(key));
  }
}

// Планирование резервного копирования
setInterval(создатьРезервнуюКопию, 5 * 60 * 1000); // Каждые 5 минут`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практическая реализация */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Save className="w-5 h-5 text-green-400" />
          Практическая реализация улучшений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">Улучшенный To-Do List с localStorage:</h3>
            <div className="bg-gray-800 p-4 rounded">
              <pre className="text-sm text-gray-300">
{`// ====================
// Улучшенный To-Do List
// ====================

class TodoApp {
  constructor() {
    this.tasks = [];
    this.config = {
      currentFilter: 'all',
      theme: 'light',
      sortByDate: true
    };
    this.storage = new TodoStorage();
    this.init();
  }
  
  init() {
    this.loadFromStorage();
    this.setupEventListeners();
    this.render();
  }
  
  loadFromStorage() {
    this.tasks = this.storage.loadTasks();
    this.config = { ...this.config, ...this.storage.loadConfig() };
  }
  
  saveToStorage() {
    this.storage.saveTasks(this.tasks);
    this.storage.saveConfig(this.config);
  }
  
  addTask(text) {
    if (!text.trim()) return;
    
    const task = {
      id: this.generateId(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      priority: 'medium',
      category: 'general'
    };
    
    this.tasks.push(task);
    this.saveToStorage();
    this.render();
  }
  
  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      task.updatedAt = new Date().toISOString();
      this.saveToStorage();
      this.render();
    }
  }
  
  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveToStorage();
    this.render();
  }
  
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  
  render() {
    // Обновление UI
    this.updateTaskList();
    this.updateStats();
  }
  
  // ... остальные методы
}

class TodoStorage {
  constructor() {
    this.prefix = 'todo_app_';
    this.version = '1.0';
  }
  
  getKey(name) {
    return \`\${this.prefix}\${name}_v\${this.version}\`;
  }
  
  saveTasks(tasks) {
    try {
      localStorage.setItem(this.getKey('tasks'), JSON.stringify(tasks));
      return true;
    } catch (error) {
      this.handleError(error);
      return false;
    }
  }
  
  loadTasks() {
    try {
      const data = localStorage.getItem(this.getKey('tasks'));
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Ошибка загрузки задач:', error);
      return [];
    }
  }
  
  saveConfig(config) {
    try {
      localStorage.setItem(this.getKey('config'), JSON.stringify(config));
    } catch (error) {
      this.handleError(error);
    }
  }
  
  loadConfig() {
    try {
      const data = localStorage.getItem(this.getKey('config'));
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error('Ошибка загрузки конфигурации:', error);
      return {};
    }
  }
  
  handleError(error) {
    if (error.name === 'QuotaExceededError') {
      alert('Хранилище переполнено! Пожалуйста, удалите некоторые задачи.');
    } else {
      console.error('Ошибка хранилища:', error);
    }
  }
}

// Инициализация приложения
const app = new TodoApp();`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-indigo-500/20 p-2 rounded-lg flex-shrink-0">
            <Database className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь ваш To-Do List может сохранять данные между перезагрузками страницы! Вы изучили localStorage, его ограничения, безопасность и лучшие практики. Эти знания помогут вам создавать более надежные веб-приложения!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;