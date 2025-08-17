// src/data/courses/react/lesson5/part1.jsx
import React from 'react';
import { Edit3, ToggleLeft, Hash, FileText, CheckSquare, AlignLeft } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Edit3 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📋 Урок 5: Управляемые формы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Синхронизация формы с состоянием React</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять концепцию управляемых компонентов в React, научиться создавать формы с синхронизацией значений полей ввода со state, освоить работу с различными типами полей формы (input, textarea, select, checkbox) и реализовать валидацию данных.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое управляемые компоненты? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-green-400" />
          Что такое управляемые компоненты?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Управляемые компоненты (Controlled Components)</span> — это подход в React, при котором <span className="font-medium">значение элемента формы</span> (input, textarea, select и т.д.) <span className="font-medium">контролируется</span> состоянием React.
          </p>
          <p>
            В отличие от <span className="font-medium">неуправляемых компонентов</span> (где браузер управляет состоянием формы), в управляемых компонентах <span className="font-medium">React является "единственным источником истины"</span> для значений полей ввода.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Неуправляемый компонент:</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`function UncontrolledForm() {\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    // Получаем значение через DOM\n    const name = e.target.name.value;\n    console.log(name);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="name" type="text" />\n      <button type="submit">Отправить</button>\n    </form>\n  );\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Управляемый компонент:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function ControlledForm() {\n  const [name, setName] = useState('');\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(name);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input \n        type="text" \n        value={name} \n        onChange={(e) => setName(e.target.value)} \n      />\n      <button type="submit">Отправить</button>\n    </form>\n  );\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Преимущества управляемых компонентов:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Значения полей всегда синхронизированы с состоянием</li>
                <li>Легко реализовать валидацию и мгновенную обратную связь</li>
                <li>Возможность условного рендеринга на основе значений формы</li>
                <li>Программное изменение значений полей</li>
                <li>Единый источник истины для данных формы</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Основной принцип работы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-yellow-400" />
          Основной принцип работы управляемых форм
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для создания управляемого компонента необходимо выполнить <span className="font-medium">два ключевых шага</span>:
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Edit3 className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">1. Связать значение элемента с состоянием</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Атрибут <code className="bg-gray-700 px-1 rounded">value</code> (или <code className="bg-gray-700 px-1 rounded">checked</code> для checkbox/radio) элемента формы должен быть привязан к переменной состояния.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-blue-300 text-sm"><code>{`const [value, setValue] = useState('');\n\n<input value={value} />`}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Edit3 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">2. Обработать изменения через обработчик события</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Необходимо добавить обработчик события <code className="bg-gray-700 px-1 rounded">onChange</code>, который будет обновлять состояние при каждом изменении значения.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm"><code>{`<input \n  value={value} \n  onChange={(e) => setValue(e.target.value)} \n/>`}</code></pre>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Полный пример простой управляемой формы</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <pre className="text-purple-300 text-sm"><code>{`import { useState } from 'react';\n\nfunction SimpleForm() {\n  const [name, setName] = useState('');\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log('Отправлено:', name);\n    setName(''); // Очищаем форму после отправки\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Имя:\n        <input \n          type="text" \n          value={name} \n          onChange={(e) => setName(e.target.value)} \n        />\n      </label>\n      <button type="submit">Отправить</button>\n      <p>Текущее значение: {name}</p>\n    </form>\n  );\n}`}</code></pre>
          </div>
        </div>
      </div>

      {/* Работа с различными типами полей */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-cyan-400" />
          Работа с различными типами полей формы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Разные типы полей формы требуют немного разного подхода при создании управляемых компонентов. Давайте рассмотрим основные типы.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          {/* Text Input */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Edit3 className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Текстовое поле (input type="text")</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{`const [text, setText] = useState('');\n\n<input \n  type="text" \n  value={text} \n  onChange={(e) => setText(e.target.value)} \n/>`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Стандартный подход: value - строка, onChange получает значение через e.target.value
            </p>
          </div>
          
          {/* Textarea */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <AlignLeft className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Многострочное поле (textarea)</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`const [message, setMessage] = useState('');\n\n<textarea \n  value={message} \n  onChange={(e) => setMessage(e.target.value)} \n/>`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              В отличие от HTML, в React textarea использует атрибут value, а не children
            </p>
          </div>
          
          {/* Select */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Hash className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">Выпадающий список (select)</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-orange-300 text-sm"><code>{`const [selectedOption, setSelectedOption] = useState('');\n\n<select \n  value={selectedOption} \n  onChange={(e) => setSelectedOption(e.target.value)}\n>\n  <option value="">Выберите опцию</option>\n  <option value="option1">Опция 1</option>\n  <option value="option2">Опция 2</option>\n</select>`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              value select равен значению выбранной option. Для множественного выбора используйте массив значений
            </p>
          </div>
          
          {/* Checkbox */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <CheckSquare className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">Чекбокс (input type="checkbox")</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-purple-300 text-sm"><code>{`const [isChecked, setIsChecked] = useState(false);\n\n<input \n  type="checkbox" \n  checked={isChecked} \n  onChange={(e) => setIsChecked(e.target.checked)} \n/>`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Для checkbox используем атрибут checked вместо value, и получаем значение через e.target.checked
            </p>
          </div>
          
          {/* Radio */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <ToggleLeft className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">Радио-кнопки (input type="radio")</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-cyan-300 text-sm"><code>{`const [selectedValue, setSelectedValue] = useState('');\n\n<div>\n  <label>\n    <input \n      type="radio" \n      value="option1" \n      checked={selectedValue === 'option1'} \n      onChange={(e) => setSelectedValue(e.target.value)} \n    />\n    Опция 1\n  </label>\n  <label>\n    <input \n      type="radio" \n      value="option2" \n      checked={selectedValue === 'option2'} \n      onChange={(e) => setSelectedValue(e.target.value)} \n    />\n    Опция 2\n  </label>\n</div>`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Каждая радио-кнопка имеет value, а checked определяется сравнением с общим состоянием
            </p>
          </div>
        </div>
      </div>

      {/* Сложные формы и объекты состояния */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-orange-400" />
          Сложные формы и объекты состояния
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для форм с множеством полей удобно использовать <span className="font-medium">один объект состояния</span>, содержащий все значения полей. Это упрощает управление и масштабирование формы.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-yellow-300">Форма с объектом состояния</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-yellow-300 text-sm"><code>{`import { useState } from 'react';\n\nfunction UserProfileForm() {\n  const [formData, setFormData] = useState({\n    name: '',\n    email: '',\n    age: '',\n    bio: ''\n  });\n  \n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: value\n    }));\n  };\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log('Данные формы:', formData);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input \n        type="text" \n        name="name" \n        value={formData.name} \n        onChange={handleChange} \n        placeholder="Имя"\n      />\n      <input \n        type="email" \n        name="email" \n        value={formData.email} \n        onChange={handleChange} \n        placeholder="Email"\n      />\n      <input \n        type="number" \n        name="age" \n        value={formData.age} \n        onChange={handleChange} \n        placeholder="Возраст"\n      />\n      <textarea \n        name="bio" \n        value={formData.bio} \n        onChange={handleChange} \n        placeholder="Биография"\n      />\n      <button type="submit">Сохранить</button>\n    </form>\n  );\n}`}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            Используем вычисляемые свойства объекта <code className="bg-gray-700 px-1 rounded">{'[name]: value'}</code> для обновления конкретного поля
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
                <Edit3 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Форма с валидацией</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`import { useState } from 'react';\n\nfunction ValidatedForm() {\n  const [formData, setFormData] = useState({\n    email: '',\n    password: ''\n  });\n  const [errors, setErrors] = useState({});\n  \n  const validate = () => {\n    const newErrors = {};\n    if (!formData.email) {\n      newErrors.email = 'Email обязателен';\n    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n      newErrors.email = 'Некорректный email';\n    }\n    if (!formData.password) {\n      newErrors.password = 'Пароль обязателен';\n    } else if (formData.password.length < 6) {\n      newErrors.password = 'Пароль должен быть не менее 6 символов';\n    }\n    return newErrors;\n  };\n  \n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: value\n    }));\n    // Очищаем ошибку при изменении поля\n    if (errors[name]) {\n      setErrors(prev => ({\n        ...prev,\n        [name]: ''\n      }));\n    }\n  };\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    const formErrors = validate();\n    if (Object.keys(formErrors).length === 0) {\n      console.log('Форма валидна:', formData);\n      // Отправка данных\n    } else {\n      setErrors(formErrors);\n    }\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <div>\n        <input \n          type="email" \n          name="email" \n          value={formData.email} \n          onChange={handleChange} \n          placeholder="Email"\n        />\n        {errors.email && <span className="error">{errors.email}</span>}\n      </div>\n      <div>\n        <input \n          type="password" \n          name="password" \n          value={formData.password} \n          onChange={handleChange} \n          placeholder="Пароль"\n        />\n        {errors.password && <span className="error">{errors.password}</span>}\n      </div>\n      <button type="submit">Войти</button>\n    </form>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Разделяем состояние формы и состояние ошибок для лучшей организации кода
            </p>
          </div>
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
              Теперь вы понимаете, что такое управляемые компоненты в React и как создавать формы с синхронизацией значений полей со state. Вы научились работать с различными типами полей формы (input, textarea, select, checkbox, radio) и реализовывать сложные формы с объектами состояния. Управляемые компоненты обеспечивают предсказуемость и контроль над данными формы, что делает их предпочтительным подходом в большинстве случаев. В следующих уроках мы рассмотрим неуправляемые компоненты, продвинутую валидацию форм и использование библиотек для управления формами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;