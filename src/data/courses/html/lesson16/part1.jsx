// src/data/courses/html/lesson16/part1.jsx
import React from 'react';
import { Search, Code, Smartphone, Eye, Hash, FileText, Settings, Globe } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Search className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🔍 Урок 16: Метатеги и SEO-основы</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Оптимизация для поисковых систем и устройств</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование <span className="font-medium">метатегов</span> в секции <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<head>'}</code> для улучшения <span className="font-medium">SEO</span> (поисковой оптимизации) и <span className="font-medium">адаптивности</span> веб-страниц. Изучить ключевые метатеги: <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">description</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">keywords</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">viewport</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">charset</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое метатеги и зачем они нужны */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Settings className="w-5 h-5 text-green-400" />
          Что такое метатеги и зачем они нужны?
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            <span className="font-medium">Метатеги</span> — это специальные теги в секции <code className="bg-gray-700 px-1.5 py-0.5 rounded">{'<head>'}</code> HTML-документа, которые <span className="font-medium">не отображаются</span> на странице, но содержат важную <span className="font-medium">метаинформацию</span> о документе.
          </p>
          <p>
            Метатеги играют ключевую роль в:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Поисковой оптимизации (SEO)</span> — помогают поисковым системам понимать содержание страницы.</li>
            <li><span className="font-medium">Адаптивности</span> — управляют отображением на мобильных устройствах.</li>
            <li><span className="font-medium">Кодировке</span> — обеспечивают корректное отображение текста.</li>
            <li><span className="font-medium">Социальных сетях</span> — определяют, как страница будет выглядеть при шаринге.</li>
          </ul>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем это нужно?</span>
            <span>
              Представьте, что ваш сайт — это книга. Метатеги — это обложка, аннотация и содержание на обратной стороне обложки. Они помогают поисковым системам и пользователям понять, <span className="font-medium">о чём ваш сайт</span>, <span className="font-medium">как он должен отображаться</span> и <span className="font-medium">почему его стоит посетить</span>. Без правильных метатегов ваш сайт может быть "непонятным" для поисковиков и некорректно отображаться на мобильных устройствах.
            </span>
          </p>
        </div>
      </div>

      {/* Основные метатеги */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          Основные метатеги в {'<head>'}
        </h2>
        
        {/* charset */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Hash className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-purple-300">{'<meta charset="...">'}</code> — Кодировка документа
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Определяет <span className="font-medium">кодировку символов</span> для HTML-документа. Для современных сайтов рекомендуется использовать <code className="bg-gray-700 px-1 rounded">UTF-8</code>, которая поддерживает <span className="font-medium">все языки мира</span>.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-purple-300 text-xs overflow-x-auto">
                <code>{`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Мой сайт</title>
</head>
<body>
  <!-- Содержимое страницы -->
</body>
</html>`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <p className="text-xs text-gray-400 mb-2">Почему это важно:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Предотвращает "кракозябры" в тексте</li>
                <li>Обеспечивает корректное отображение кириллицы</li>
                <li>Является стандартом W3C</li>
                <li>Должен быть первым метатегом в <code className="bg-gray-700 px-1 rounded">{'<head>'}</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* viewport */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <Smartphone className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">{'<meta name="viewport" ...>'}</code> — Адаптивность
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Управляет <span className="font-medium">отображением</span> страницы на мобильных устройствах. Позволяет управлять <span className="font-medium">масштабированием</span> и <span className="font-medium">размером области просмотра</span>.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                <code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <p className="text-xs text-gray-400 mb-2">Что означают параметры:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li><code className="bg-gray-700 px-1 rounded">width=device-width</code> — ширина страницы равна ширине устройства</li>
                <li><code className="bg-gray-700 px-1 rounded">initial-scale=1.0</code> — начальный масштаб 100%</li>
                <li>Обязателен для адаптивного дизайна</li>
                <li>Размещается после <code className="bg-gray-700 px-1 rounded">charset</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-green-300">{'<meta name="description" ...>'}</code> — Описание страницы
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Предоставляет <span className="font-medium">краткое описание</span> содержания страницы. Используется поисковыми системами в <span className="font-medium">результатах поиска</span> (snippet).
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-green-300 text-xs overflow-x-auto">
                <code>{`<meta name="description" content="Полный курс по HTML для начинающих. Научитесь создавать современные веб-страницы с нуля.">`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
              <p className="text-xs text-gray-400 mb-2">Рекомендации:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Длина 120-160 символов</li>
                <li>Уникальное для каждой страницы</li>
                <li>Содержит ключевые слова</li>
                <li>Пишется для человека, а не для робота</li>
              </ul>
            </div>
          </div>
        </div>

        {/* keywords */}
        <div className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Search className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white">
              <code className="bg-gray-700 px-2 py-1 rounded text-orange-300">{'<meta name="keywords" ...>'}</code> — Ключевые слова
            </h3>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed pl-11">
            <p>
              Содержит список <span className="font-medium">ключевых слов</span>, связанных с содержанием страницы. <span className="font-medium">Современные поисковики</span> (Google, Яндекс) <span className="font-medium">не учитывают</span> этот метатег при ранжировании.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
              <p className="text-xs text-gray-400 mb-2">Пример кода:</p>
              <pre className="text-orange-300 text-xs overflow-x-auto">
                <code>{`<meta name="keywords" content="HTML, веб-разработка, курс, обучение, семантика">`}</code>
              </pre>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl border border-red-700/30">
              <p className="text-xs text-gray-400 mb-2">Современная реальность:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300 text-xs">
                <li>Не влияет на ранжирование Google</li>
                <li>Может использоваться другими системами</li>
                <li>Не обязателен для современного SEO</li>
                <li>Лучше сосредоточиться на качественном контенте</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Влияние метатегов на SEO */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Search className="w-5 h-5 text-blue-400" />
          Влияние метатегов на SEO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Влияние на отображение в поиске</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Title</span> отображается как заголовок сниппета</li>
              <li><span className="font-medium">Description</span> используется как текст сниппета</li>
              <li>Правильный <span className="font-medium">charset</span> предотвращает искажения текста</li>
              <li>Отсутствие description = автоматическая генерация поисковиком</li>
              <li>Качественные метатеги <span className="font-medium">повышают кликабельность</span> (CTR)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Globe className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">Влияние на индексацию</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Корректная кодировка</span> позволяет поисковикам правильно прочитать контент</li>
              <li><span className="font-medium">Адаптивность</span> улучшает пользовательский опыт и ранжирование</li>
              <li><span className="font-medium">Уникальные</span> title и description для каждой страницы</li>
              <li>Правильная структура <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> упрощает анализ страницы</li>
              <li>Метатеги — <span className="font-medium">первое впечатление</span> поисковика о вашем сайте</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 SEO-совет:</span>
            <span>
              Хотя <code className="bg-gray-700 px-1 rounded">keywords</code> не влияют на ранжирование в Google, качественные <code className="bg-gray-700 px-1 rounded">title</code> и <code className="bg-gray-700 px-1 rounded">description</code> — <span className="font-medium">одни из самых важных</span> факторов SEO. Они напрямую влияют на <span className="font-medium">кликабельность</span> вашего сайта в результатах поиска. Пишите их <span className="font-medium">для человека</span>, а не для поисковых роботов.
            </span>
          </p>
        </div>
      </div>

      {/* Влияние viewport на мобильные устройства */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Smartphone className="w-5 h-5 text-cyan-400" />
          Влияние viewport на мобильные устройства
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Метатег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">viewport</code> играет <span className="font-medium">ключевую роль</span> в создании адаптивных веб-страниц. Без него мобильные браузеры будут отображать страницу так, как если бы она просматривалась на <span className="font-medium">десктопе</span>, что приведет к:
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-red-700/30">
            <h3 className="font-bold text-red-300 mb-3">Без viewport (проблемы):</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Страница отображается в масштабе ~980px</li>
              <li>Текст становится <span className="font-medium">очень мелким</span></li>
              <li>Пользователю нужно <span className="font-medium">постоянно масштабировать</span></li>
              <li>Элементы интерфейса <span className="font-medium">труднодоступны</span></li>
              <li>Плохой пользовательский опыт</li>
              <li>Негативно влияет на SEO (мобильная дружелюбность)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3">С viewport (решения):</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Страница адаптируется под <span className="font-medium">ширину экрана</span></li>
              <li>Текст отображается в <span className="font-medium">удобочитаемом</span> размере</li>
              <li>Используется <span className="font-medium">адаптивный дизайн</span></li>
              <li>Улучшается <span className="font-medium">навигация</span> на сенсорных устройствах</li>
              <li>Отличный пользовательский опыт</li>
              <li>Положительно влияет на SEO и Core Web Vitals</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
          <h3 className="font-bold text-cyan-300 mb-3">Примеры viewport для разных случаев:</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Стандартный адаптивный:</p>
              <pre className="text-cyan-300 text-xs overflow-x-auto">
                <code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Запрет масштабирования (не рекомендуется):</p>
              <pre className="text-orange-300 text-xs overflow-x-auto">
                <code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">`}</code>
              </pre>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Фиксированная ширина (редко используется):</p>
              <pre className="text-purple-300 text-xs overflow-x-auto">
                <code>{`<meta name="viewport" content="width=600">`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Пример полной структуры <head> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Code className="w-5 h-5 text-green-400" />
          Пример полной структуры {'<head>'} с метатегами
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот как может выглядеть <span className="font-medium">правильно структурированный</span> блок <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> современной веб-страницы:
          </p>
        </div>
        <div className="mt-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример HTML-кода:</p>
            <pre className="text-green-300 text-sm overflow-x-auto">
              <code>{`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Полный курс по HTML для начинающих. Научитесь создавать современные веб-страницы с нуля.">
  <meta name="keywords" content="HTML, веб-разработка, курс, обучение, семантика">
  <title>Курс по HTML для начинающих</title>
  
  <!-- Дополнительные метатеги -->
  <meta name="author" content="Иван Иванов">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph для социальных сетей -->
  <meta property="og:title" content="Курс по HTML для начинающих">
  <meta property="og:description" content="Полный курс по HTML для начинающих...">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com">
  
  <!-- Favicons -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
</head>
<body>
  <!-- Содержимое страницы -->
</body>
</html>`}</code>
            </pre>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Что здесь хорошо:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li><code className="bg-gray-700 px-1 rounded">charset</code> — первым делом определяем кодировку</li>
                <li><code className="bg-gray-700 px-1 rounded">viewport</code> — обеспечиваем адаптивность</li>
                <li><code className="bg-gray-700 px-1 rounded">description</code> — качественное описание для SEO</li>
                <li><code className="bg-gray-700 px-1 rounded">title</code> — содержательный заголовок страницы</li>
                <li>Дополнительные метатеги для расширенной функциональности</li>
                <li>Open Graph для правильного отображения в соцсетях</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Search className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как <span className="font-medium text-purple-300">правильно использовать метатеги</span> в секции <code className="bg-gray-700 px-1 rounded">{'<head>'}</code> для улучшения <span className="font-medium text-green-300">SEO</span> и <span className="font-medium text-cyan-300">адаптивности</span> ваших веб-страниц. Вы изучили ключевые метатеги: <code className="bg-gray-700 px-1 rounded">charset</code> для <span className="font-medium text-orange-300">кодировки</span>, <code className="bg-gray-700 px-1 rounded">viewport</code> для <span className="font-medium text-blue-300">мобильной адаптации</span>, <code className="bg-gray-700 px-1 rounded">description</code> для <span className="font-medium text-green-300">SEO-описания</span> и <code className="bg-gray-700 px-1 rounded">keywords</code> (хотя он и не так важен в наше время). Эти знания делают ваши веб-страницы не только <span className="font-medium text-yellow-300">понятнее</span> для поисковых систем, но и <span className="font-medium text-red-300">удобнее</span> для пользователей на всех устройствах. Это <span className="font-medium text-purple-300">важный шаг</span> к созданию современного, профессионального и успешного веб-сайта.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;