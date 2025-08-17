// src/data/courses/react/lesson2/part1.jsx
import React from 'react';
import { Code, Braces, Palette, Hash, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🎨 Урок 2: JSX — HTML в JavaScript</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Синтаксис и особенности использования</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Понять, что такое JSX, научиться использовать его для описания интерфейса в React, освоить основные особенности синтаксиса (атрибуты, стили, встраивание выражений) и отличия от обычного HTML.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое JSX? */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Braces className="w-5 h-5 text-green-400" />
          Что такое JSX?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium text-green-300">JSX (JavaScript Syntax Extension)</span> — это <span className="font-medium">синтаксическое расширение</span> JavaScript, которое позволяет писать HTML-подобный код прямо внутри JS-файлов.
          </p>
          <p>
            Это <span className="font-medium">не</span> отдельный язык, и это <span className="font-medium">не</span> строка. JSX — это просто <span className="font-medium">синтаксический сахар</span>, который в итоге преобразуется в обычный JavaScript (обычно с помощью Babel).
          </p>
          <p>
            JSX делает код React более <span className="font-medium">читаемым</span> и <span className="font-medium">интуитивным</span>, так как он визуально похож на HTML.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример JSX-кода:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`const element = <h1>Привет, мир!</h1>;`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Во что это преобразуется (Babel):</p>
            <pre className="text-cyan-300 text-sm overflow-x-auto">
              <code>{`const element = React.createElement('h1', null, 'Привет, мир!');`}</code>
            </pre>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Почему JSX?</span>
            <span>
              JSX позволяет разработчикам описывать UI (пользовательский интерфейс) декларативно, используя знакомый синтаксис, близкий к HTML. Это делает код более понятным и уменьшает вероятность ошибок.
            </span>
          </p>
        </div>
      </div>

      {/* Основной синтаксис JSX */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-yellow-400" />
          Основной синтаксис JSX
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            JSX во многом похож на HTML, но имеет свои особенности. Давайте рассмотрим основные правила.
          </p>
        </div>

        {/* Теги */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Hash className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-yellow-300">Теги</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Как и в HTML, в JSX есть <span className="font-medium">открывающие</span> и <span className="font-medium">закрывающие</span> теги, а также <span className="font-medium">самозакрывающиеся</span> теги.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Парный тег:</p>
              <pre className="text-yellow-300 text-xs"><code>{`<div>Содержимое</div>`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Самозакрывающийся тег:</p>
              <pre className="text-yellow-300 text-xs"><code>{`<img src="photo.jpg" alt="Фото" />`}</code></pre>
            </div>
          </div>
          <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-xs flex items-start gap-2">
              <span className="font-medium">⚠️ Важно:</span>
              <span>
                В JSX <span className="font-medium">все</span> теги должны быть корректно закрыты, даже те, которые в HTML не требуют закрытия (например, <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<br>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<input>'}</code>). Используйте <code className="bg-gray-700 px-1 rounded">{'/>'}</code> в конце.
              </span>
            </p>
          </div>
        </div>

        {/* Атрибуты */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-purple-300">Атрибуты</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Атрибуты в JSX похожи на атрибуты в HTML, но с некоторыми отличиями в названиях и синтаксисе.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">HTML:</p>
              <pre className="text-purple-300 text-xs"><code>{`<div class="container" tabindex="0">`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">JSX:</p>
              <pre className="text-purple-300 text-xs"><code>{`<div className="container" tabIndex="0">`}</code></pre>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-xs">
            <li>
              <span className="font-medium">className</span> вместо <code className="bg-gray-700 px-1 rounded">class</code> — потому что <code className="bg-gray-700 px-1 rounded">class</code> является зарезервированным словом в JavaScript.
            </li>
            <li>
              <span className="font-medium">htmlFor</span> вместо <code className="bg-gray-700 px-1 rounded">for</code> — по той же причине.
            </li>
            <li>
              Атрибуты с именами из нескольких слов пишутся в <span className="font-medium">camelCase</span>: <code className="bg-gray-700 px-1 rounded">tabIndex</code>, <code className="bg-gray-700 px-1 rounded">onClick</code>, <code className="bg-gray-700 px-1 rounded">onMouseOver</code>.
            </li>
          </ul>
        </div>

        {/* Встраивание выражений */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Braces className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Встраивание выражений</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            В JSX можно вставлять <span className="font-medium">JavaScript-выражения</span> с помощью <span className="font-medium">фигурных скобок</span> <code className="bg-gray-700 px-1 rounded">{'{ }'}</code>.
          </p>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-cyan-300 text-xs"><code>{`const name = 'Анна';\nconst element = <h1>Привет, {name}!</h1>;`}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-xs">
            <li>
              В фигурные скобки можно помещать <span className="font-medium">переменные</span>, <span className="font-medium">выражения</span>, <span className="font-medium">вызовы функций</span> и <span className="font-medium">любой другой корректный JS-код</span>.
            </li>
            <li>
              Внутри атрибутов фигурные скобки также используются для передачи <span className="font-medium">динамических значений</span> (не строки).
            </li>
          </ul>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Статическое значение (строка):</p>
              <pre className="text-cyan-300 text-xs"><code>{`<img src="photo.jpg" alt="Фото" />`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Динамическое значение (переменная):</p>
              <pre className="text-cyan-300 text-xs"><code>{`<img src={photoUrl} alt={imageAlt} />`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Стилизация в JSX */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Palette className="w-5 h-5 text-orange-400" />
          Стилизация в JSX
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В JSX есть несколько способов задать стили элементам. Давайте рассмотрим основные.
          </p>
        </div>

        {/* className */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-green-300">CSS-классы (className)</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Самый распространенный способ — использовать внешние CSS-файлы и применять классы через атрибут <code className="bg-gray-700 px-1 rounded">className</code>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">App.js:</p>
              <pre className="text-green-300 text-xs"><code>{`import './App.css';\n\nfunction App() {\n  return <div className="container">Привет!</div>;\n}`}</code></pre>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">App.css:</p>
              <pre className="text-green-300 text-xs"><code>{`.container {\n  color: blue;\n  font-size: 20px;\n}`}</code></pre>
            </div>
          </div>
        </div>

        {/* Inline Styles */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Palette className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-orange-300">Встроенные стили (Inline Styles)</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Стили можно задавать <span className="font-medium">напрямую</span> в JSX с помощью атрибута <code className="bg-gray-700 px-1 rounded">style</code>. Значением должен быть <span className="font-medium">объект</span>, где ключи — это CSS-свойства в camelCase.
          </p>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-orange-300 text-xs"><code>{`const element = (\n  <h1 style={{ color: 'red', fontSize: '24px' }}>\n    Заголовок\n  </h1>\n);`}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-xs">
            <li>
              Обратите внимание на <span className="font-medium">двойные фигурные скобки</span>: внешние — для встраивания JS-выражения, внутренние — для определения объекта.
            </li>
            <li>
              CSS-свойства с дефисами пишутся в <span className="font-medium">camelCase</span>: <code className="bg-gray-700 px-1 rounded">fontSize</code> вместо <code className="bg-gray-700 px-1 rounded">font-size</code>, <code className="bg-gray-700 px-1 rounded">backgroundColor</code> вместо <code className="bg-gray-700 px-1 rounded">background-color</code>.
            </li>
            <li>
              Значения свойств, которые не являются числами, <span className="font-medium">должны быть строками</span>: <code className="bg-gray-700 px-1 rounded">{'{ color: "red" }'}</code>, <code className="bg-gray-700 px-1 rounded">{'{ fontSize: "24px" }'}</code>.
            </li>
          </ul>
          <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <p className="text-blue-300 text-xs flex items-start gap-2">
              <span className="font-medium">💡 Когда использовать:</span>
              <span>
                Inline styles удобны для <span className="font-medium">динамических стилей</span>, зависящих от состояния компонента, или для <span className="font-medium">одноразовых</span> стилей. Для общих стилей предпочтительнее использовать CSS-классы.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Выражения и логика в JSX */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Braces className="w-5 h-5 text-purple-400" />
          Выражения и логика в JSX
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В фигурных скобках можно не только выводить переменные, но и выполнять различные логические операции и условия.
          </p>
        </div>

        {/* Условный рендеринг */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-cyan-300">Условный рендеринг</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            JSX позволяет условно отображать элементы с помощью JavaScript.
          </p>
          
          {/* && Оператор */}
          <div className="mb-4">
            <p className="text-gray-300 text-xs mb-2">
              <span className="font-medium">Логическое И (&&):</span> Если условие истинно, отображается элемент справа.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-cyan-300 text-xs"><code>{`const isLoggedIn = true;\n\nfunction App() {\n  return (\n    <div>\n      <h1>Добро пожаловать!</h1>\n      {isLoggedIn && <p>Вы вошли в систему.</p>}\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>

          {/* Тернарный оператор */}
          <div className="mb-4">
            <p className="text-gray-300 text-xs mb-2">
              <span className="font-medium">Тернарный оператор:</span> Позволяет выбрать между двумя вариантами.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-cyan-300 text-xs"><code>{`const isLoggedIn = false;\n\nfunction App() {\n  return (\n    <div>\n      <h1>Добро пожаловать!</h1>\n      {isLoggedIn ? <p>Вы вошли в систему.</p> : <p>Пожалуйста, войдите.</p>}\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>

          {/* if/else вне JSX */}
          <div>
            <p className="text-gray-300 text-xs mb-2">
              <span className="font-medium">if/else вне JSX:</span> Для более сложной логики можно использовать условные конструкции вне возвращаемого JSX.
            </p>
            <div className="bg-gray-800 p-3 rounded-lg">
              <pre className="text-cyan-300 text-xs"><code>{`function App() {\n  const isLoggedIn = true;\n  let content;\n  \n  if (isLoggedIn) {\n    content = <p>Вы вошли в систему.</p>;\n  } else {\n    content = <p>Пожалуйста, войдите.</p>;\n  }\n  \n  return (\n    <div>\n      <h1>Добро пожаловать!</h1>\n      {content}\n    </div>\n  );\n}`}</code></pre>
            </div>
          </div>
        </div>

        {/* Рендеринг списков */}
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-yellow-700/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Hash className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-yellow-300">Рендеринг списков</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Для отображения списков элементов используется метод массива <code className="bg-gray-700 px-1 rounded">.map()</code>.
          </p>
          <div className="bg-gray-800 p-3 rounded-lg mb-3">
            <pre className="text-yellow-300 text-xs"><code>{`const fruits = ['Яблоко', 'Банан', 'Апельсин'];\n\nfunction App() {\n  return (\n    <ul>\n      {fruits.map((fruit, index) => (\n        <li key={index}>{fruit}</li>\n      ))}\n    </ul>\n  );\n}`}</code></pre>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-xs">
            <li>
              Каждый элемент в списке должен иметь <span className="font-medium">уникальный ключ</span> (<code className="bg-gray-700 px-1 rounded">key</code>). Это помогает React эффективно обновлять список.
            </li>
            <li>
              В простых случаях можно использовать <span className="font-medium">индекс</span> как ключ (<code className="bg-gray-700 px-1 rounded">key={'{index}'}</code>), но лучше использовать <span className="font-medium">уникальные ID</span> элементов, если они есть.
            </li>
          </ul>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Code className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, что такое JSX и как его использовать в React. Вы научились писать HTML-подобный синтаксис в JavaScript, поняли особенности атрибутов (<code className="bg-gray-700 px-1 rounded">className</code> вместо <code className="bg-gray-700 px-1 rounded">class</code>), освоили встраивание JavaScript-выражений в фигурных скобках, работу со стилями (через <code className="bg-gray-700 px-1 rounded">className</code> и inline <code className="bg-gray-700 px-1 rounded">style</code>), а также реализовали условный рендеринг и рендеринг списков. JSX — это мощный инструмент, который делает написание React-компонентов интуитивным и удобным.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;