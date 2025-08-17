// src/data/courses/react/lesson5/part3.jsx
import React from 'react';
import { Edit3, FileText, ToggleLeft, Hash, Play, Terminal } from 'lucide-react';

const Part3 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">✏️ Практика: Управляемые формы</h1>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель:</span> Закрепить знания по созданию управляемых форм в React через практические задания с различными типами полей ввода.
            </p>
          </div>
        </div>
      </div>

      {/* Задание 1 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
          Простая регистрационная форма
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">RegistrationForm</code>, который реализует простую форму регистрации:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте <code className="bg-gray-700 px-1 rounded">useState</code> для хранения значений полей: имя, email, пароль.</li>
          <li>Добавьте три текстовых поля ввода с соответствующими метками (label).</li>
          <li>Свяжите каждое поле с соответствующим состоянием через атрибуты <code className="bg-gray-700 px-1 rounded">value</code> и обработчики <code className="bg-gray-700 px-1 rounded">onChange</code>.</li>
          <li>Добавьте кнопку "Зарегистрироваться" типа submit.</li>
          <li>Реализуйте обработчик отправки формы, который предотвращает стандартное поведение и выводит значения полей в консоль.</li>
          <li>После отправки формы очистите все поля ввода.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Используйте отдельные состояния для каждого поля: <code className="bg-gray-700 px-1 rounded">const [name, setName] = useState('');</code>. В обработчике отправки: <code className="bg-gray-700 px-1 rounded">e.preventDefault();</code></p>
          </div>
        </details>
      </div>

      {/* Задание 2 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
          Форма обратной связи с textarea и select
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">FeedbackForm</code>, который реализует форму обратной связи:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте объект состояния для хранения всех значений формы.</li>
          <li>Добавьте поля: имя (input type="text"), email (input type="email"), тип обращения (select) с опциями "Вопрос", "Жалоба", "Предложение", "Другое", сообщение (textarea).</li>
          <li>Свяжите все поля с состоянием, используя один обработчик <code className="bg-gray-700 px-1 rounded">onChange</code> для всех полей.</li>
          <li>Добавьте чекбокс "Согласен с условиями" и свяжите его с булевым значением в состоянии.</li>
          <li>Отобразите текущие значения всех полей под формой для проверки.</li>
          <li>Реализуйте валидацию: все поля обязательны, email должен содержать "@".</li>
          <li>При успешной отправке отобразите сообщение "Форма отправлена!".</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для универсального обработчика: <code className="bg-gray-700 px-1 rounded">const handleChange = (e) =&gt; {'{'}</code><br />
            <code className="bg-gray-700 px-1 rounded">const {'{'}name, value, type, checked{'}'} = e.target;</code><br />
            <code className="bg-gray-700 px-1 rounded">{`setFormData(prev =&gt; ({'...'}prev, [name]: type === 'checkbox' ? checked : value}));`}</code><br />
            <code className="bg-gray-700 px-1 rounded">{'}'};</code></p>
          </div>
        </details>
      </div>

      {/* Задание 3 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
          Форма профиля пользователя с radio buttons
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">UserProfileForm</code>, который реализует форму редактирования профиля:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте объект состояния для хранения данных профиля: имя, возраст, пол, биография, подписка на новости.</li>
          <li>Добавьте поля:
            <ul className="list-circle pl-5 mt-1">
              <li>Имя (input text)</li>
              <li>Возраст (input number)</li>
              <li>Пол (radio buttons: мужской, женский, другой)</li>
              <li>Биография (textarea)</li>
              <li>Подписка на новости (checkbox)</li>
            </ul>
          </li>
          <li>Свяжите все поля с состоянием.</li>
          <li>Реализуйте две кнопки: "Сохранить" (submit) и "Сбросить" (button), которая возвращает форму к исходному состоянию.</li>
          <li>Добавьте условный рендеринг: если возраст меньше 18, отображайте предупреждение.</li>
          <li>Отобразите превью профиля с введенными данными в реальном времени.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для radio buttons используйте одинаковое имя и разные значения: <code className="bg-gray-700 px-1 rounded">&lt;input type="radio" name="gender" value="male" checked={'{'}formData.gender === "male"{'}'} onChange={'{'}handleChange{'}'} /&gt;</code></p>
          </div>
        </details>
      </div>

      {/* Задание 4 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
          Сложная форма заказа с множественным выбором
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">OrderForm</code>, который реализует форму заказа товаров:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте объект состояния для хранения данных заказа: имя клиента, email, товар (select), количество (input number), опции (массив выбранных значений), комментарий (textarea).</li>
          <li>{`Создайте массив товаров: [{id: 1, name: "Товар 1", price: 100}, {id: 2, name: "Товар 2", price: 200}, ...].`}</li>
          <li>Реализуйте выбор товара через select.</li>
          <li>Добавьте чекбоксы для выбора опций товара (например, "Ускоренная доставка", "Подарочная упаковка", "Гарантия").</li>
          <li>Реализуйте управление массивом выбранных опций: при выборе чекбокса добавляйте его значение в массив, при снятии - удаляйте.</li>
          <li>Отобразите итоговую стоимость заказа (цена товара * количество + стоимость опций).</li>
          <li>Добавьте валидацию: имя и email обязательны, количество должно быть больше 0.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для управления массивом опций: <code className="bg-gray-700 px-1 rounded">const handleOptionChange = (option) =&gt; {'{'}</code><br />
            <code className="bg-gray-700 px-1 rounded">setFormData(prev =&gt; {'{'}</code><br />
            <code className="bg-gray-700 px-1 rounded">...prev,</code><br />
            <code className="bg-gray-700 px-1 rounded">options: prev.options.includes(option) </code><br />
            <code className="bg-gray-700 px-1 rounded">? prev.options.filter(o =&gt; o !== option)</code><br />
            <code className="bg-gray-700 px-1 rounded">: [...prev.options, option]</code><br />
            <code className="bg-gray-700 px-1 rounded">{'}'});</code><br />
            <code className="bg-gray-700 px-1 rounded">{'}'};</code></p>
          </div>
        </details>
      </div>

      {/* Задание 5 */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
          <span className="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
          Комплексная форма с динамическими полями
        </h3>
        <p className="text-gray-300 mb-3">
          Создайте компонент <code className="bg-gray-700 px-1 rounded">DynamicForm</code>, который реализует форму с динамически добавляемыми полями:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
          <li>Используйте объект состояния с вложенными объектами для хранения данных: основная информация (имя, email) и массив дополнительных контактов.</li>
          <li>Реализуйте основные поля: имя (input text), email (input email).</li>
          <li>Создайте возможность добавления/удаления дополнительных контактов (например, телефон, адрес).</li>
          <li>Каждый дополнительный контакт должен иметь тип (select: телефон, адрес, сайт) и значение (input text).</li>
          <li>Реализуйте кнопки "Добавить контакт" и "Удалить" для каждого контакта.</li>
          <li>Добавьте валидацию для всех полей: имя и email обязательны, каждый контакт должен иметь тип и значение.</li>
          <li>Отобразите сводную таблицу введенных данных под формой.</li>
          <li>Реализуйте кнопку "Отправить", которая выводит все данные в консоль в структурированном виде.</li>
        </ul>
        <details className="group">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 flex items-center gap-1">
            <span>Подсказка</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </summary>
          <div className="mt-2 p-3 bg-gray-900/50 rounded text-sm text-gray-300">
            <p>Для массива контактов используйте массив объектов: <code className="bg-gray-700 px-1 rounded">{`contacts: [{id: 1, type: 'phone', value: ''}]`}</code>.<br />
            Для добавления: <code className="bg-gray-700 px-1 rounded">{`setFormData(prev =&gt; ({'...'}prev, contacts: [...prev.contacts, {id: Date.now(), type: 'phone', value: ''}]));`}</code><br />
            Для удаления: <code className="bg-gray-700 px-1 rounded">setFormData(prev =&gt; ({'...'}prev, contacts: prev.contacts.filter(c =&gt; c.id !== id)));</code></p>
          </div>
        </details>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Edit3 className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Эти задания помогли вам закрепить навыки создания управляемых форм в React. Вы научились работать с различными типами полей ввода (input, textarea, select, checkbox, radio), управлять сложными состояниями форм с помощью объектов, реализовывать валидацию данных, создавать динамические формы с возможностью добавления/удаления полей и обрабатывать события изменения для всех типов элементов формы. Управляемые компоненты дают вам полный контроль над данными формы и позволяют создавать богатые пользовательские интерфейсы с мгновенной обратной связью. Эти навыки являются основой для создания любых форм в React-приложениях.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;