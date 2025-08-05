// src/data/courses/css/lesson15/part1.jsx
import React, { useState } from 'react';
import { SquareMousePointer, CheckSquare, ToggleLeft, Palette, MousePointer, Sparkles } from 'lucide-react';

const Part1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isRadioChecked, setIsRadioChecked] = useState('option1');

  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <SquareMousePointer className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🖱️ Урок 15: Стилизация форм и кнопок</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание привлекательных и удобных элементов управления</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить техники стилизации HTML-форм и элементов управления для создания привлекательного и удобного пользовательского интерфейса.
            </p>
          </div>
        </div>
      </div>

      {/* Зачем стилизовать формы? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Sparkles className="w-5 h-5 text-green-400" />
          Зачем стилизовать формы?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Стилизация форм — важная часть создания современного веб-дизайна. Правильно оформленные формы:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Улучшают <span className="font-medium text-green-300">пользовательский опыт</span></li>
            <li>Создают <span className="font-medium text-blue-300">единый визуальный стиль</span> сайта</li>
            <li>Повышают <span className="font-medium text-purple-300">удобство использования</span> и доступность</li>
            <li>Делают интерфейс <span className="font-medium text-orange-300">более профессиональным</span></li>
          </ul>
          <p>
            Браузеры предоставляют стандартные стили для форм, но они часто выглядят несогласованно и не соответствуют дизайну сайта.
          </p>
        </div>
      </div>

      {/* Стилизация кнопок */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <MousePointer className="w-5 h-5 text-blue-400" />
          Стилизация кнопок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Кнопки — одни из самых важных интерактивных элементов. Хорошо стилизованная кнопка должна быть:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Кликабельной</span> — пользователь понимает, что это интерактивный элемент</li>
            <li><span className="font-medium">Понятной</span> — текст на кнопке ясно указывает, что она делает</li>
            <li><span className="font-medium">Визуально привлекательной</span> — соответствует общему дизайну сайта</li>
          </ul>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="text-lg font-bold text-blue-300 mb-3">Основные свойства для стилизации кнопок:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <Palette className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">background-color</span> — цвет фона
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Palette className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">color</span> — цвет текста
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Palette className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">border</span> — граница
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Palette className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">border-radius</span> — скругление углов
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <MousePointer className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">cursor: pointer</span> — изменение курсора
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">padding</span> — внутренние отступы
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">transition</span> — плавные переходы
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">box-shadow</span> — тени для глубины
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="text-lg font-bold text-green-300 mb-3">Пример стилизованной кнопки:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.custom-button {
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.custom-button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.custom-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <div className="bg-gray-800 p-3 rounded text-xs mb-3">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`<button class="custom-button">
  Отправить
</button>`}
                  </pre>
                </div>
                <div className="flex justify-center">
                  <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white border-none rounded px-6 py-3 font-medium cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
                    onClick={(e) => e.preventDefault()}
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Стилизация полей ввода */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <SquareMousePointer className="w-5 h-5 text-purple-400" />
          Стилизация полей ввода
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Поля ввода (input, textarea) требуют особого внимания к деталям для обеспечения хорошего пользовательского опыта.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <h3 className="text-lg font-bold text-purple-300 mb-3">Важные аспекты стилизации полей ввода:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <Palette className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">border</span> — стиль и цвет границы
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Palette className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">border-radius</span> — скругление углов
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Palette className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">padding</span> — внутренние отступы
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">outline: none</span> — убирает стандартное выделение
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">:focus</span> — стили для активного поля
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">transition</span> — плавные переходы
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <h3 className="text-lg font-bold text-cyan-300 mb-3">Пример стилизованного поля ввода:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.custom-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  font-size: 16px;
  background-color: #1f2937;
  color: #f9fafb;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.custom-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.custom-input::placeholder {
  color: #9ca3af;
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <div className="bg-gray-800 p-3 rounded text-xs mb-3">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`<input 
  type="text" 
  class="custom-input" 
  placeholder="Введите текст"
>`}
                  </pre>
                </div>
                <div className="flex justify-center">
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Введите текст" 
                    className="w-full px-4 py-3 border-2 border-gray-600 rounded-lg text-white bg-gray-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Стилизация чекбоксов и радиокнопок */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckSquare className="w-5 h-5 text-orange-400" />
          Стилизация чекбоксов и радиокнопок
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Чекбоксы и радиокнопки сложнее в стилизации, потому что их внешний вид часто определяется браузером. Для полной кастомизации используются различные техники.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <h3 className="text-lg font-bold text-orange-300 mb-3">Техника скрытия и замены:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.custom-checkbox {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #1f2937;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.custom-checkbox input:checked ~ .checkmark::after {
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
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <div className="bg-gray-800 p-3 rounded text-xs mb-3">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`<label class="custom-checkbox">
  <input type="checkbox">
  <span class="checkmark"></span>
  Согласен с условиями
</label>`}
                  </pre>
                </div>
                <div className="flex justify-center">
                  <label className="flex items-center cursor-pointer select-none">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="absolute opacity-0 w-0 h-0"
                        checked={isCheckboxChecked}
                        onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                      />
                      <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                        isCheckboxChecked 
                          ? 'bg-blue-500 border-blue-500' 
                          : 'bg-gray-800 border-gray-600'
                      }`}>
                        {isCheckboxChecked && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="ml-2 text-gray-300">Согласен с условиями</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
            <h3 className="text-lg font-bold text-yellow-300 mb-3">Пример стилизованных радиокнопок:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-white text-xs mb-1">CSS:</p>
                <div className="bg-gray-800 p-3 rounded text-xs">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`.custom-radio {
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
}

.custom-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-mark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #1f2937;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.custom-radio input:checked ~ .radio-mark {
  background-color: #1f2937;
  border-color: #3b82f6;
}

.custom-radio input:checked ~ .radio-mark::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3b82f6;
}`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="font-medium text-white text-xs mb-1">HTML:</p>
                <div className="bg-gray-800 p-3 rounded text-xs mb-3">
                  <pre className="whitespace-pre-wrap text-gray-300">
{`<label class="custom-radio">
  <input type="radio" name="radio" value="option1">
  <span class="radio-mark"></span>
  Вариант 1
</label>
<label class="custom-radio">
  <input type="radio" name="radio" value="option2">
  <span class="radio-mark"></span>
  Вариант 2
</label>`}
                  </pre>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <label className="flex items-center cursor-pointer select-none">
                    <div className="relative">
                      <input 
                        type="radio" 
                        name="radio" 
                        value="option1"
                        className="absolute opacity-0 w-0 h-0"
                        checked={isRadioChecked === 'option1'}
                        onChange={(e) => setIsRadioChecked(e.target.value)}
                      />
                      <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isRadioChecked === 'option1' 
                          ? 'border-blue-500' 
                          : 'border-gray-600'
                      }`}>
                        {isRadioChecked === 'option1' && (
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-2 text-gray-300">Вариант 1</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <div className="relative">
                      <input 
                        type="radio" 
                        name="radio" 
                        value="option2"
                        className="absolute opacity-0 w-0 h-0"
                        checked={isRadioChecked === 'option2'}
                        onChange={(e) => setIsRadioChecked(e.target.value)}
                      />
                      <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isRadioChecked === 'option2' 
                          ? 'border-blue-500' 
                          : 'border-gray-600'
                      }`}>
                        {isRadioChecked === 'option2' && (
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-2 text-gray-300">Вариант 2</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Практические советы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Palette className="w-5 h-5 text-pink-400" />
          Практические советы по стилизации форм
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Palette className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-green-300">Сохраняйте доступность:</span> Убедитесь, что ваши стилизованные элементы остаются доступными для пользователей с ограниченными возможностями. Используйте достаточный контраст цветов и не убирайте фокусные состояния без замены.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MousePointer className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-blue-300">Обратная связь:</span> Предоставляйте визуальную обратную связь при взаимодействии (hover, focus, active состояния).
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-purple-300">Консистентность:</span> Используйте одинаковые стили для однотипных элементов по всему сайту.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ToggleLeft className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-orange-300">Тестирование:</span> Тщательно тестируйте формы на разных устройствах и браузерах.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <SquareMousePointer className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отлично! 🖱️</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как стилизовать формы и элементы управления для создания профессионального пользовательского интерфейса. Эти навыки помогут вам создавать более привлекательные и удобные веб-формы. В следующем уроке мы рассмотрим анимации и переходы в CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;