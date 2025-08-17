// src/data/courses/react/lesson3/part1.jsx
import React from 'react';
import { Puzzle, Settings, ArrowRight, Code, Box, Send, Download, Play } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Puzzle className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🧩 Урок 3: Компоненты и пропсы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Основы повторного использования кода</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое компоненты в React, научиться создавать функциональные компоненты, освоить работу с пропсами (props) как способом передачи данных, и применять деструктуризацию для чистоты кода.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое компонент? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Box className="w-5 h-5 text-green-400" />
          Что такое компонент в React?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">Компонент</span> в React — это <span className="font-medium">строительный блок</span> пользовательского интерфейса. Представьте компонент как <span className="font-medium">кусочек Lego</span> — вы можете создавать из него разные конструкции, комбинируя с другими кусочками.
          </p>
          <p>
            В контексте React, компонент — это <span className="font-medium">функция</span> (или класс), которая <span className="font-medium">возвращает JSX</span> (HTML-подобный код). Этот JSX описывает, как должен выглядеть определенный участок интерфейса.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Простой компонент:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`function Welcome() {\n  return <h1>Добро пожаловать в React!</h1>;\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как использовать компонент:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{`function App() {\n  return (\n    <div>\n      <Welcome />\n      <p>Это основное приложение.</p>\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Settings className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Типы компонентов</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <h4 className="font-medium text-blue-300 mb-2">Функциональные компоненты</h4>
              <p className="text-gray-300 text-xs">
                Современный способ создания компонентов. Это обычные JavaScript-функции, которые возвращают JSX. Именно их мы будем использовать в этом курсе.
              </p>
              <pre className="text-blue-300 text-xs mt-2"><code>{`function MyComponent() {\n  return <div>Привет!</div>;\n}`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <h4 className="font-medium text-orange-300 mb-2">Классовые компоненты</h4>
              <p className="text-gray-300 text-xs">
                Старый способ, основанный на ES6-классах. Все еще поддерживаются, но в современной разработке используются редко. В этом курсе мы их не будем рассматривать.
              </p>
              <pre className="text-orange-300 text-xs mt-2"><code>{`class MyComponent extends React.Component {\n  render() {\n    return <div>Привет!</div>;\n  }\n}`}</code></pre>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Преимущества компонентов:</span>
            <span>
              Компоненты делают код <span className="font-medium">модульным</span>, <span className="font-medium">повторно используемым</span> и <span className="font-medium">легко поддерживаемым</span>. Вы можете создать компонент один раз и использовать его в разных частях приложения.
            </span>
          </p>
        </div>
      </div>

      {/* Что такое пропсы? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-yellow-400" />
          Что такое пропсы (props)?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-yellow-300">Пропсы (properties)</span> — это <span className="font-medium">способ передачи данных</span> от родительского компонента к дочернему. Представьте пропсы как <span className="font-medium">параметры функции</span> — они позволяют настраивать поведение и внешний вид компонента.
          </p>
          <p>
            Пропсы — это <span className="font-medium">объект</span>, который автоматически передается в компонент. Каждое свойство этого объекта становится доступным внутри компонента.
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <p className="text-sm text-gray-400 mb-2">Компонент с пропсами:</p>
            <pre className="text-yellow-300 text-sm overflow-x-auto">
              <code>{`function Greeting(props) {\n  return <h1>Привет, {props.name}!</h1>;\n}`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Использование с передачей пропсов:</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{`function App() {\n  return (\n    <div>\n      <Greeting name="Анна" />\n      <Greeting name="Иван" />\n    </div>\n  );\n}`}</code>
            </pre>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-red-500/20 p-2 rounded-lg">
              <ArrowRight className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-red-300">Важное правило: Пропсы Read-Only</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Компонент <span className="font-medium">никогда не должен изменять</span> свои пропсы. Это фундаментальное правило React, известное как <span className="font-medium">"однонаправленный поток данных"</span>. Пропсы передаются <span className="font-medium">сверху вниз</span> и являются <span className="font-medium">неизменяемыми</span> (immutable).
          </p>
          <div className="mt-3 bg-gray-800 p-3 rounded-lg">
            <pre className="text-red-300 text-xs"><code>{`// ❌ НЕПРАВИЛЬНО - нельзя изменять пропсы!\nfunction BadComponent(props) {\n  props.name = "Новое имя"; // ОШИБКА!\n  return <h1>Привет, {props.name}!</h1>;\n}\n\n// ✅ ПРАВИЛЬНО - только читаем пропсы\nfunction GoodComponent(props) {\n  return <h1>Привет, {props.name}!</h1>;\n}`}</code></pre>
          </div>
        </div>
      </div>

      {/* Деструктуризация пропсов */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-cyan-400" />
          Деструктуризация пропсов
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-cyan-300">Деструктуризация</span> — это современный синтаксис JavaScript, который позволяет <span className="font-medium">извлекать свойства</span> из объектов и массивов. В контексте пропсов это делает код <span className="font-medium">чище</span> и <span className="font-medium">более читаемым</span>.
          </p>
        </div>
        
        <div className="mt-6 space-y-6">
          {/* Без деструктуризации */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-gray-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gray-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-300">Без деструктуризации</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-gray-300 text-sm"><code>{`function UserProfile(props) {\n  return (\n    <div>\n      <h2>{props.name}</h2>\n      <p>Возраст: {props.age}</p>\n      <p>Email: {props.email}</p>\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              Приходится много раз писать <code className="bg-gray-700 px-1 rounded">props.</code>
            </p>
          </div>
          
          {/* С деструктуризацией */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">С деструктуризацией</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-cyan-300 text-sm"><code>{`function UserProfile({ name, age, email }) {\n  return (\n    <div>\n      <h2>{name}</h2>\n      <p>Возраст: {age}</p>\n      <p>Email: {email}</p>\n    </div>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              Код стал чище и читабельнее!
            </p>
          </div>
          
          {/* Деструктуризация с значениями по умолчанию */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">Значения по умолчанию</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-green-300 text-sm"><code>{`function Button({ text = "Нажми меня", onClick }) {\n  return (\n    <button onClick={onClick}>\n      {text}\n    </button>\n  );\n}`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              Если пропс <code className="bg-gray-700 px-1 rounded">text</code> не передан, будет использовано значение по умолчанию.
            </p>
          </div>
        </div>
      </div>

      {/* Практические примеры */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Play className="w-5 h-5 text-purple-400" />
          Практические примеры компонентов с пропсами
        </h2>
        
        <div className="mt-6 space-y-6">
          {/* Пример 1: Компонент кнопки */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Send className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">Компонент кнопки</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-blue-300 text-sm"><code>{`function CustomButton({ text, variant, onClick }) {\n  const buttonClass = variant === 'primary' \n    ? 'bg-blue-600 hover:bg-blue-700' \n    : 'bg-gray-600 hover:bg-gray-700';\n  \n  return (\n    <button \n      className={"px-4 py-2 rounded text-white " + buttonClass}\n      onClick={onClick}\n    >\n      {text}\n    </button>\n  );\n}\n\n// Использование:\n<CustomButton \n  text="Отправить" \n  variant="primary" \n  onClick={() => console.log('Отправлено!')}\n/>`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Этот компонент принимает текст, вариант стиля и функцию обработчика клика.
            </p>
          </div>
          
          {/* Пример 2: Компонент карточки */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Download className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-orange-300">Компонент карточки продукта</h3>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <pre className="text-orange-300 text-sm"><code>{`function ProductCard({ title, price, description, imageUrl }) {\n  return (\n    <div className="border rounded-lg p-4 shadow-sm">\n      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />\n      <h3 className="text-xl font-bold mt-2">{title}</h3>\n      <p className="text-gray-600">{description}</p>\n      <div className="mt-2 font-bold text-lg">{price} ₽</div>\n      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">\n        Добавить в корзину\n      </button>\n    </div>\n  );\n}\n\n// Использование:\n<ProductCard \n  title="Смартфон"\n  price={25000}\n  description="Новейший смартфон с отличной камерой"\n  imageUrl="https://example.com/phone.jpg"\n/>`}</code></pre>
            </div>
            <p className="text-gray-400 text-xs">
              Компонент карточки принимает все необходимые данные для отображения продукта.
            </p>
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Puzzle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы понимаете, что такое компоненты в React — это функции, возвращающие JSX. Вы научились передавать данные в компоненты с помощью пропсов и поняли важное правило их неизменяемости (read-only). Деструктуризация пропсов делает ваш код чище и более читаемым. Компоненты и пропсы — это фундаментальные концепции React, которые позволяют создавать модульные, повторно используемые и легко поддерживаемые пользовательские интерфейсы. В следующих уроках мы научимся управлять состоянием компонентов и создавать интерактивные приложения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;