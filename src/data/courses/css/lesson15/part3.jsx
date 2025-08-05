// src/data/courses/css/lesson15/part3.jsx
import React, { useState } from 'react';
import { Monitor, FileText, Play, Code, Download, Edit3, Eye, CheckCircle, SquareMousePointer, MousePointer } from 'lucide-react';

const Part3 = () => {
  const [completedTasks, setCompletedTasks] = useState({
    task1: false,
    task2: false,
    task3: false
  });

  const [inputValue, setInputValue] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isRadioChecked, setIsRadioChecked] = useState('option1');

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
            <Monitor className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">💻 Практическое задание: Стилизация форм и кнопок</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Потренироваться стилизовать различные элементы форм с помощью CSS.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1: Стилизация кнопок */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task1 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MousePointer className="w-5 h-5 text-green-400" />
          Задание 1: Создание стилизованной кнопки
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-класс для стилизации кнопки с современным дизайном:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">Требуется создать класс:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.modern-button</code> - кнопка с синим градиентным фоном</li>
              <li>Скругленные углы (border-radius: 8px)</li>
              <li>Белый цвет текста и отсутствие границы</li>
              <li>Внутренние отступы 12px по вертикали и 24px по горизонтали</li>
              <li>Изменение курсора на pointer при наведении</li>
              <li>Плавный переход (transition) для всех свойств на 0.3 секунды</li>
              <li>Эффект наведения: немного темнее фон и тень (box-shadow)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.modern-button {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
}

.modern-button:hover {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  transform: translateY(-2px);
}`}
              </pre>
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
            Я создал CSS-класс для стилизованной кнопки
          </label>
          {completedTasks.task1 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 2: Стилизация полей ввода */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task2 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <SquareMousePointer className="w-5 h-5 text-purple-400" />
          Задание 2: Стилизация поля ввода
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-класс для стилизации поля ввода с современным дизайном:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2">Требуется создать класс:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.modern-input</code> - поле ввода с серой границей</li>
              <li>Скругленные углы (border-radius: 6px)</li>
              <li>Темный фон (#1f2937) и светлый текст (#f9fafb)</li>
              <li>Внутренние отступы 12px по вертикали и 16px по горизонтали</li>
              <li>Плавный переход для границы и тени на 0.3 секунды</li>
              <li>Стили при фокусе: синяя граница и голубая тень</li>
              <li>Убрать стандартное outline при фокусе</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.modern-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #4b5563;
  border-radius: 6px;
  background-color: #1f2937;
  color: #f9fafb;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.modern-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.modern-input::placeholder {
  color: #9ca3af;
}`}
              </pre>
            </div>
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
            Я создал CSS-класс для стилизованного поля ввода
          </label>
          {completedTasks.task2 && <CheckCircle className="ml-2 w-5 h-5 text-green-400" />}
        </div>
      </div>

      {/* Задание 3: Стилизация чекбокса */}
      <div className={`bg-gray-800/40 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${completedTasks.task3 ? 'border-green-700/50' : 'border-gray-700/50'}`}>
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-cyan-400" />
          Задание 3: Стилизация чекбокса
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Создайте CSS-классы для стилизации кастомного чекбокса:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2">Требуется создать классы:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.custom-checkbox-container</code> - контейнер для чекбокса с отступом слева</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.custom-checkbox</code> - скрытый оригинальный чекбокс</li>
              <li><code className="bg-gray-700 px-1.5 py-0.5 rounded">.checkmark</code> - стилизованный индикатор чекбокса (квадрат)</li>
              <li>При отмеченном состоянии: синий фон и белая галочка</li>
              <li>Плавные переходы при изменении состояния</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-indigo-700/30">
            <h3 className="font-bold text-indigo-300 mb-2">Пример решения:</h3>
            <div className="bg-gray-800 p-3 rounded-lg text-sm">
              <pre className="whitespace-pre-wrap text-gray-300">
{`.custom-checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 12px;
}

.custom-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  height: 20px;
  width: 20px;
  background-color: #1f2937;
  border: 2px solid #4b5563;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.custom-checkbox-container:hover .checkmark {
  border-color: #3b82f6;
}

.custom-checkbox:checked ~ .checkmark {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.custom-checkbox:checked ~ .checkmark::after {
  content: "";
  position: absolute;
  display: block;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}`}
              </pre>
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
            Я создал CSS-классы для стилизованного чекбокса
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
              Теперь вы потренировались стилизовать различные элементы форм. Эти навыки необходимы для создания современных и привлекательных веб-интерфейсов. В следующем уроке мы рассмотрим анимации и переходы в CSS.
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