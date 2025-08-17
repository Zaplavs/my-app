// src/data/courses/react/lesson17/part1.jsx
import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Edit3, Database, Code, Shield } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">📝 Урок 17: Формы: валидация и управление</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Управление состоянием форм и валидация данных</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, как управлять состоянием форм в React, освоить различные подходы к валидации данных (при вводе, при потере фокуса), научиться отображать сообщения об ошибках, изучить управление несколькими полями ввода через объект состояния, познакомиться с библиотеками для работы с формами (Formik, React Hook Form).
            </p>
          </div>
        </div>
      </div>

      {/* Управление состоянием форм */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Edit3 className="w-5 h-5 text-green-400" />
          Управление состоянием форм в React
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В React <span className="font-medium text-green-300">управление формами</span> осуществляется через <span className="font-medium">состояние компонента</span>. Это означает, что <span className="font-medium">значение каждого поля ввода</span> хранится в <code className="bg-gray-700 px-1 rounded">state</code>, и <span className="font-medium">обновляется</span> при каждом изменении пользователем.
          </p>
          <p>
            Такой подход называется <span className="font-medium">"контролируемыми компонентами"</span> — React <span className="font-medium">контролирует</span> значение поля ввода, а не браузер.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
            <p className="text-sm text-gray-400 mb-2">❌ Неконтролируемая форма (без состояния):</p>
            <pre className="text-red-300 text-sm overflow-x-auto">
              <code>{`// Значение поля ввода управляется браузером\nfunction UncontrolledForm() {\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    // Получаем значение через DOM\n    const name = e.target.name.value;\n    console.log(name);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="name" type="text" />\n      <button type="submit">Отправить</button>\n    </form>\n  );\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">✅ Контролируемая форма (со состоянием):</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`import { useState } from 'react';\n\nfunction ControlledForm() {\n  const [name, setName] = useState('');\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(name);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input \n        type="text" \n        value={name} \n        onChange={(e) => setName(e.target.value)} \n      />\n      <button type="submit">Отправить</button>\n    </form>\n  );\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Преимущества контролируемых форм:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Мгновенная валидация</span> при вводе данных</li>
                <li><span className="font-medium">Легкий доступ</span> к значениям полей</li>
                <li><span className="font-medium">Возможность условного рендеринга</span> на основе значений формы</li>
                <li><span className="font-medium">Программное изменение</span> значений полей</li>
                <li><span className="font-medium">Единый источник истины</span> для данных формы</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Управление несколькими полями */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-yellow-400" />
          Управление несколькими полями через объект состояния
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            При работе с <span className="font-medium">формами, содержащими множество полей</span>, создание отдельного <code className="bg-gray-700 px-1 rounded">useState</code> для каждого поля становится <span className="font-medium">неудобным</span>. В таких случаях лучше использовать <span className="font-medium">один объект состояния</span>, содержащий все значения полей.
          </p>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Database className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Форма с объектом состояния</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-cyan-300 text-sm"><code>{`import { useState } from 'react';\n\nfunction RegistrationForm() {\n  const [formData, setFormData] = useState({\n    name: '',\n    email: '',\n    password: '',\n    confirmPassword: '',\n    age: ''\n  });\n  \n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: value\n    }));\n  };\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log('Данные формы:', formData);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input \n        type="text" \n        name="name" \n        value={formData.name} \n        onChange={handleChange} \n        placeholder="Имя"\n      />\n      <input \n        type="email" \n        name="email" \n        value={formData.email} \n        onChange={handleChange} \n        placeholder="Email"\n      />\n      <input \n        type="password" \n        name="password" \n        value={formData.password} \n        onChange={handleChange} \n        placeholder="Пароль"\n      />\n      <input \n        type="password" \n        name="confirmPassword" \n        value={formData.confirmPassword} \n        onChange={handleChange} \n        placeholder="Подтвердите пароль"\n      />\n      <input \n        type="number" \n        name="age" \n        value={formData.age} \n        onChange={handleChange} \n        placeholder="Возраст"\n      />\n      <button type="submit">Зарегистрироваться</button>\n    </form>\n  );\n}`}</code></pre>
          </div>
          <p className="text-gray-400 text-xs">
            Используем <span className="font-medium">вычисляемые свойства объекта</span> <code className="bg-gray-700 px-1 rounded">{'[name]: value'}</code> для обновления конкретного поля. Атрибут <code className="bg-gray-700 px-1 rounded">name</code> каждого поля должен <span className="font-medium">соответствовать</span> ключу в объекте состояния.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Обработчик изменений для всех типов полей:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{`const handleChange = (e) => {\n  const { name, value, type, checked } = e.target;\n  \n  setFormData(prev => ({\n    ...prev,\n    [name]: type === 'checkbox' ? checked : value\n  }));\n};\n\n// Использование в полях\n<input \n  type="checkbox" \n  name="agreeToTerms" \n  checked={formData.agreeToTerms}\n  onChange={handleChange}\n/>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Сброс формы к начальному состоянию:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`const initialFormData = {\n  name: '',\n  email: '',\n  password: '',\n  confirmPassword: '',\n  age: ''\n};\n\nconst handleReset = () => {\n  setFormData(initialFormData);\n};\n\n// Кнопка сброса\n<button type="button" onClick={handleReset}>\n  Сбросить форму\n</button>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Валидация форм */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Shield className="w-5 h-5 text-cyan-400" />
          Валидация форм в React
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Валидация форм</span> — это <span className="font-medium">процесс проверки</span> корректности введенных пользователем данных <span className="font-medium">до отправки</span> формы на сервер. В React существует <span className="font-medium">несколько подходов</span> к валидации форм.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">Состояние ошибок</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-orange-300 text-sm"><code>{`const [errors, setErrors] = useState({});\n\n// Функция валидации\nconst validate = (formData) => {\n  const newErrors = {};\n  \n  if (!formData.name.trim()) {\n    newErrors.name = 'Имя обязательно для заполнения';\n  }\n  \n  if (!formData.email) {\n    newErrors.email = 'Email обязателен';\n  } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n    newErrors.email = 'Некорректный формат email';\n  }\n  \n  if (formData.password.length < 6) {\n    newErrors.password = 'Пароль должен содержать минимум 6 символов';\n  }\n  \n  if (formData.password !== formData.confirmPassword) {\n    newErrors.confirmPassword = 'Пароли не совпадают';\n  }\n  \n  return newErrors;\n};\n\n// Использование в обработчике отправки\nconst handleSubmit = (e) => {\n  e.preventDefault();\n  const formErrors = validate(formData);\n  \n  if (Object.keys(formErrors).length === 0) {\n    // Форма валидна, можно отправлять\n    console.log('Форма валидна:', formData);\n  } else {\n    // Отображаем ошибки\n    setErrors(formErrors);\n  }\n};`}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">Валидация при изменении (onChange)</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-purple-300 text-sm"><code>{`const [formData, setFormData] = useState({ name: '', email: '' });\nconst [errors, setErrors] = useState({ name: '', email: '' });\n\nconst validateField = (name, value) => {\n  switch (name) {\n    case 'name':\n      return value.trim() ? '' : 'Имя обязательно';\n    case 'email':\n      return /\\S+@\\S+\\.\\S+/.test(value) ? '' : 'Некорректный email';\n    default:\n      return '';\n  }\n};\n\nconst handleChange = (e) => {\n  const { name, value } = e.target;\n  \n  setFormData(prev => ({ ...prev, [name]: value }));\n  \n  // Валидация при изменении\n  const error = validateField(name, value);\n  setErrors(prev => ({ ...prev, [name]: error }));\n};`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Валидация при каждом изменении <span className="font-medium">обеспечивает мгновенную обратную связь</span>, но может <span className="font-medium">замедлить</span> ввод при сложных проверках.
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Edit3 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Валидация при потере фокуса (onBlur)</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`const handleBlur = (e) => {\n  const { name, value } = e.target;\n  const error = validateField(name, value);\n  setErrors(prev => ({ ...prev, [name]: error }));\n};\n\n// Использование в поле ввода\n<input \n  type="text"\n  name="email"\n  value={formData.email}\n  onChange={handleChange}\n  onBlur={handleBlur}\n  className={errors.email ? 'error' : ''}\n/>\n{errors.email && <span className="error-message">{errors.email}</span>}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Валидация при потере фокуса <span className="font-medium">менее навязчива</span>, чем при каждом изменении, и <span className="font-medium">подходит</span> для большинства сценариев.
            </p>
          </div>
        </div>
      </div>

      {/* Отображение ошибок */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          Отображение сообщений об ошибках
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-red-300">Эффективное отображение ошибок</span> — ключевой аспект <span className="font-medium">удобства пользовательского интерфейса</span>. Сообщения об ошибках должны быть <span className="font-medium">понятными</span>, <span className="font-medium">конкретными</span> и <span className="font-medium">видимыми</span> в нужный момент.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <p className="text-sm text-gray-400 mb-2">Базовое отображение ошибок:</p>
            <pre className="text-blue-300 text-sm overflow-x-auto">
              <code>{`function FormField({ label, name, value, onChange, error, ...props }) {\n  return (\n    <div className="form-field\">\n      <label htmlFor={name}>{label}</label>\n      <input \n        id={name}\n        name={name}\n        value={value}\n        onChange={onChange}\n        className={error ? 'input-error' : ''}\n        {...props}\n      />\n      {error && <span className="error-message">{error}</span>}\n    </div>\n  );\n}\n\n// Использование\n<FormField\n  label="Email"\n  name="email"\n  type="email"\n  value={formData.email}\n  onChange={handleChange}\n  error={errors.email}\n/>`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Стилизация полей с ошибками:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{`/* CSS для полей с ошибками */\n.input-error {\n  border-color: #e53e3e;\n  box-shadow: 0 0 0 1px #e53e3e;\n}\n\n.input-error:focus {\n  outline: none;\n  border-color: #e53e3e;\n  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.2);\n}\n\n.error-message {\n  color: #e53e3e;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n  display: block;\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-orange-300">Группировка ошибок и общий статус</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-orange-300 text-sm"><code>{`function FormWithValidation() {\n  const [formData, setFormData] = useState({ name: '', email: '' });\n  const [errors, setErrors] = useState({});\n  const [isSubmitting, setIsSubmitting] = useState(false);\n  const [submitError, setSubmitError] = useState('');\n  \n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    \n    // Очищаем предыдущие ошибки\n    setErrors({});\n    setSubmitError('');\n    setIsSubmitting(true);\n    \n    try {\n      const validationErrors = validateForm(formData);\n      \n      if (Object.keys(validationErrors).length > 0) {\n        setErrors(validationErrors);\n        return;\n      }\n      \n      // Отправка данных\n      await submitFormData(formData);\n      \n      // Успех - сброс формы\n      setFormData({ name: '', email: '' });\n      \n    } catch (error) {\n      setSubmitError('Произошла ошибка при отправке формы');\n    } finally {\n      setIsSubmitting(false);\n    }\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Поля формы */}\n      \n      {/* Общее сообщение об ошибке */}\n      {submitError && (\n        <div className="alert alert-error\">\n          {submitError}\n        </div>\n      )}\n      \n      <button \n        type="submit\" \n        disabled={isSubmitting}\n        className="btn btn-primary\"\n      >\n        {isSubmitting ? 'Отправка...' : 'Отправить'}\n      </button>\n    </form>\n  );\n}`}</code></pre>
          </div>
        </div>
      </div>

      {/* Практический пример полной формы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-purple-400" />
          Практический пример: Полная форма регистрации
        </h2>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-green-300">Комплексная форма с валидацией</h3>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-green-300 text-sm"><code>{`import { useState, useEffect } from 'react';\n\nfunction RegistrationForm() {\n  const [formData, setFormData] = useState({\n    firstName: '',\n    lastName: '',\n    email: '',\n    password: '',\n    confirmPassword: '',\n    birthDate: '',\n    gender: '',\n    agreeToTerms: false\n  });\n  \n  const [errors, setErrors] = useState({});\n  const [touched, setTouched] = useState({});\n  const [isSubmitting, setIsSubmitting] = useState(false);\n  \n  // Валидация поля\n  const validateField = (name, value) => {\n    switch (name) {\n      case 'firstName':\n        return value.trim() ? '' : 'Имя обязательно';\n      case 'lastName':\n        return value.trim() ? '' : 'Фамилия обязательна';\n      case 'email':\n        return /\\S+@\\S+\\.\\S+/.test(value) ? '' : 'Некорректный email';\n      case 'password':\n        return value.length >= 6 ? '' : 'Пароль должен содержать минимум 6 символов';\n      case 'confirmPassword':\n        return value === formData.password ? '' : 'Пароли не совпадают';\n      case 'birthDate':\n        return value ? '' : 'Дата рождения обязательна';\n      case 'gender':\n        return value ? '' : 'Пол обязателен';\n      case 'agreeToTerms':\n        return value ? '' : 'Необходимо согласие с условиями';\n      default:\n        return '';\n    }\n  };\n  \n  // Валидация всей формы\n  const validateForm = (data) => {\n    const newErrors = {};\n    Object.keys(data).forEach(key => {\n      const error = validateField(key, data[key]);\n      if (error) newErrors[key] = error;\n    });\n    return newErrors;\n  };\n  \n  // Обработчик изменений\n  const handleChange = (e) => {\n    const { name, value, type, checked } = e.target;\n    const newValue = type === 'checkbox' ? checked : value;\n    \n    setFormData(prev => ({\n      ...prev,\n      [name]: newValue\n    }));\n    \n    // Очищаем ошибку при изменении поля\n    if (touched[name]) {\n      const error = validateField(name, newValue);\n      setErrors(prev => ({\n        ...prev,\n        [name]: error\n      }));\n    }\n  };\n  \n  // Обработчик потери фокуса\n  const handleBlur = (e) => {\n    const { name } = e.target;\n    \n    setTouched(prev => ({\n      ...prev,\n      [name]: true\n    }));\n    \n    const error = validateField(name, formData[name]);\n    setErrors(prev => ({\n      ...prev,\n      [name]: error\n    }));\n  };\n  \n  // Обработчик отправки\n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    \n    // Помечаем все поля как затронутые\n    const allTouched = {};\n    Object.keys(formData).forEach(key => {\n      allTouched[key] = true;\n    });\n    setTouched(allTouched);\n    \n    // Валидация\n    const formErrors = validateForm(formData);\n    setErrors(formErrors);\n    \n    if (Object.keys(formErrors).length === 0) {\n      setIsSubmitting(true);\n      try {\n        // Отправка данных\n        await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация API\n        console.log('Форма отправлена:', formData);\n        // Сброс формы\n        setFormData({\n          firstName: '',\n          lastName: '',\n          email: '',\n          password: '',\n          confirmPassword: '',\n          birthDate: '',\n          gender: '',\n          agreeToTerms: false\n        });\n        setTouched({});\n        setErrors({});\n      } catch (error) {\n        console.error('Ошибка отправки:', error);\n      } finally {\n        setIsSubmitting(false);\n      }\n    }\n  };\n  \n  return (\n    <form onSubmit={handleSubmit} className=\"registration-form\">\n      <div className=\"form-row\">\n        <FormField\n          label=\"Имя *\"\n          name=\"firstName\"\n          type=\"text\"\n          value={formData.firstName}\n          onChange={handleChange}\n          onBlur={handleBlur}\n          error={touched.firstName ? errors.firstName : ''}\n        />\n        \n        <FormField\n          label=\"Фамилия *\"\n          name=\"lastName\"\n          type=\"text\"\n          value={formData.lastName}\n          onChange={handleChange}\n          onBlur={handleBlur}\n          error={touched.lastName ? errors.lastName : ''}\n        />\n      </div>\n      \n      <FormField\n        label=\"Email *\"\n        name=\"email\"\n        type=\"email\"\n        value={formData.email}\n        onChange={handleChange}\n        onBlur={handleBlur}\n        error={touched.email ? errors.email : ''}\n      />\n      \n      <div className=\"form-row\">\n        <FormField\n          label=\"Пароль *\"\n          name=\"password\"\n          type=\"password\"\n          value={formData.password}\n          onChange={handleChange}\n          onBlur={handleBlur}\n          error={touched.password ? errors.password : ''}\n        />\n        \n        <FormField\n          label=\"Подтвердите пароль *\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          value={formData.confirmPassword}\n          onChange={handleChange}\n          onBlur={handleBlur}\n          error={touched.confirmPassword ? errors.confirmPassword : ''}\n        />\n      </div>\n      \n      <FormField\n        label=\"Дата рождения *\"\n        name=\"birthDate\"\n        type=\"date\"\n        value={formData.birthDate}\n        onChange={handleChange}\n        onBlur={handleBlur}\n        error={touched.birthDate ? errors.birthDate : ''}\n      />\n      \n      <div className=\"form-group\">\n        <label>Пол *</label>\n        <div className=\"radio-group\">\n          <label>\n            <input\n              type=\"radio\"\n              name=\"gender\"\n              value=\"male\"\n              checked={formData.gender === 'male'}\n              onChange={handleChange}\n              onBlur={handleBlur}\n            />\n            Мужской\n          </label>\n          <label>\n            <input\n              type=\"radio\"\n              name=\"gender\"\n              value=\"female\"\n              checked={formData.gender === 'female'}\n              onChange={handleChange}\n              onBlur={handleBlur}\n            />\n            Женский\n          </label>\n        </div>\n        {touched.gender && errors.gender && (\n          <span className=\"error-message\">{errors.gender}</span>\n        )}\n      </div>\n      \n      <div className=\"form-group checkbox-group\">\n        <label>\n          <input\n            type=\"checkbox\"\n            name=\"agreeToTerms\"\n            checked={formData.agreeToTerms}\n            onChange={handleChange}\n            onBlur={handleBlur}\n          />\n          Я согласен с условиями *\n        </label>\n        {touched.agreeToTerms && errors.agreeToTerms && (\n          <span className=\"error-message\">{errors.agreeToTerms}</span>\n        )}\n      </div>\n      \n      <button \n        type=\"submit\" \n        disabled={isSubmitting}\n        className=\"submit-button\"\n      >\n        {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}\n      </button>\n    </form>\n  );\n}\n\n// Компонент поля формы\nfunction FormField({ label, error, ...props }) {\n  return (\n    <div className=\"form-field\">\n      <label>{label}</label>\n      <input {...props} />\n      {error && <span className=\"error-message\">{error}</span>}\n    </div>\n  );\n}`}</code></pre>
          </div>
        </div>
      </div>

      {/* Библиотеки для работы с формами */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Database className="w-5 h-5 text-blue-400" />
          Библиотеки для работы с формами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Для <span className="font-medium">сложных форм</span> с множеством полей, валидацией и бизнес-логикой, часто используются <span className="font-medium">специализированные библиотеки</span>, которые <span className="font-medium">упрощают</span> и <span className="font-medium">стандартизируют</span> работу с формами.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Formik — популярная библиотека для форм</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-green-300 text-sm"><code>{`import { Formik, Form, Field, ErrorMessage } from 'formik';\nimport * as Yup from 'yup';\n\n// Схема валидации\nconst validationSchema = Yup.object({\n  firstName: Yup.string()\n    .max(15, 'Должно быть 15 символов или меньше')\n    .required('Обязательное поле'),\n  lastName: Yup.string()\n    .max(20, 'Должно быть 20 символов или меньше')\n    .required('Обязательное поле'),\n  email: Yup.string()\n    .email('Некорректный email')\n    .required('Обязательное поле'),\n});\n\nfunction FormikExample() {\n  return (\n    <Formik\n      initialValues={{ firstName: '', lastName: '', email: '' }}\n      validationSchema={validationSchema}\n      onSubmit={(values, { setSubmitting }) => {\n        setTimeout(() => {\n          alert(JSON.stringify(values, null, 2));\n          setSubmitting(false);\n        }, 400);\n      }}\n    >\n      <Form>\n        <div>\n          <label htmlFor=\"firstName\">Имя</label>\n          <Field name=\"firstName\" type=\"text\" />\n          <ErrorMessage name=\"firstName\" component=\"div\" className=\"error\" />\n        </div>\n        \n        <div>\n          <label htmlFor=\"lastName\">Фамилия</label>\n          <Field name=\"lastName\" type=\"text\" />\n          <ErrorMessage name=\"lastName\" component=\"div\" className=\"error\" />\n        </div>\n        \n        <div>\n          <label htmlFor=\"email\">Email</label>\n          <Field name=\"email\" type=\"email\" />\n          <ErrorMessage name=\"email\" component=\"div\" className=\"error\" />\n        </div>\n        \n        <button type=\"submit\">Отправить</button>\n      </Form>\n    </Formik>\n  );\n}`}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">React Hook Form — современный подход</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-cyan-300 text-sm"><code>{`import { useForm } from 'react-hook-form';\nimport { yupResolver } from '@hookform/resolvers/yup';\nimport * as Yup from 'yup';\n\n// Схема валидации\nconst schema = Yup.object({\n  firstName: Yup.string().required('Имя обязательно'),\n  lastName: Yup.string().required('Фамилия обязательна'),\n  email: Yup.string().email('Некорректный email').required('Email обязателен'),\n});\n\nfunction ReactHookFormExample() {\n  const { register, handleSubmit, formState: { errors } } = useForm({\n    resolver: yupResolver(schema)\n  });\n  \n  const onSubmit = (data) => {\n    console.log(data);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <div>\n        <input \n          {...register('firstName')} \n          placeholder=\"Имя\" \n        />\n        {errors.firstName && <p>{errors.firstName.message}</p>}\n      </div>\n      \n      <div>\n        <input \n          {...register('lastName')} \n          placeholder=\"Фамилия\" \n        />\n        {errors.lastName && <p>{errors.lastName.message}</p>}\n      </div>\n      \n      <div>\n        <input \n          {...register('email')} \n          placeholder=\"Email\" \n        />\n        {errors.email && <p>{errors.email.message}</p>}\n      </div>\n      \n      <input type=\"submit\" />\n    </form>\n  );\n}`}</code></pre>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Когда использовать библиотеки:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Сложные формы</span> с множеством полей и валидацией</li>
                <li><span className="font-medium">Повторное использование</span> логики форм в разных компонентах</li>
                <li><span className="font-medium">Сложная бизнес-логика</span> валидации</li>
                <li><span className="font-medium">Интеграция</span> с существующими системами валидации</li>
                <li><span className="font-medium">Улучшенный DX</span> (Developer Experience) и меньше boilerplate-кода</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Лучшие практики */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-orange-400" />
          Лучшие практики работы с формами
        </h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Доступность форм</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Связывайте метки с полями</span> через <code className="bg-gray-700 px-1 rounded">htmlFor</code> и <code className="bg-gray-700 px-1 rounded">id</code>
              </li>
              <li>
                <span className="font-medium">Используйте ARIA-атрибуты</span> для сообщений об ошибках
              </li>
              <li>
                <span className="font-medium">Обеспечьте навигацию с клавиатуры</span> и фокусировку на ошибках
              </li>
              <li>
                <span className="font-medium">Добавляйте aria-invalid</span> для полей с ошибками
              </li>
            </ul>
            <div className="mt-3 bg-gray-800 p-3 rounded-lg">
              <pre className="text-blue-300 text-xs"><code>{`<div>\n  <label htmlFor="email-input">Email *</label>\n  <input \n    id="email-input\"\n    type="email\"\n    name="email\"\n    value={formData.email}\n    onChange={handleChange}\n    aria-describedby="email-error\"\n    aria-invalid={!!errors.email}\n  />\n  {errors.email && (\n    <span id="email-error\" role="alert\" className="error-message\">\n      {errors.email}\n    </span>\n  )}\n</div>`}</code></pre>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Edit3 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Производительность и UX</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Используйте debounce</span> для тяжелых валидаций при вводе
              </li>
              <li>
                <span className="font-medium">Ограничивайте количество одновременных проверок</span> (например, при AJAX-валидации)
              </li>
              <li>
                <span className="font-medium">Показывайте индикаторы загрузки</span> при асинхронных операциях
              </li>
              <li>
                <span className="font-medium">Используйте визуальную обратную связь</span> для успешных действий
              </li>
              <li>
                <span className="font-medium">Реализуйте автосохранение</span> черновиков форм
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">Безопасность форм</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium">Всегда валидируйте данные</span> на сервере, даже если они валидированы на клиенте
              </li>
              <li>
                <span className="font-medium">Используйте CSRF-токены</span> для защиты от межсайтовой подделки запроса
              </li>
              <li>
                <span className="font-medium">Экранируйте специальные символы</span> в пользовательском вводе
              </li>
              <li>
                <span className="font-medium">Ограничивайте размер</span> загружаемых файлов и вводимых данных
              </li>
              <li>
                <span className="font-medium">Используйте rate limiting</span> для предотвращения злоупотреблений
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <FileText className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, как управлять формами в React, используя контролируемые компоненты и состояние. Вы научились управлять несколькими полями через объект состояния, реализовывать валидацию при изменении и потере фокуса, отображать сообщения об ошибках и создавать доступные формы. Вы также познакомились с популярными библиотеками для работы с формами, такими как Formik и React Hook Form, которые упрощают разработку сложных форм. Понимание и умение применять эти концепции является ключевым навыком для создания качественных пользовательских интерфейсов с формами. В следующих уроках мы рассмотрим продвинутые техники управления формами, интеграцию с API и создание кастомных хуков для повторного использования логики форм.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;