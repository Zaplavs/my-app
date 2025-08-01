// src/data/courses/html/lesson6/part1.jsx
import React from 'react';
import { Image, Accessibility, FileImage, FileText } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Image className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🖼️ Урок 6: Изображения в HTML</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Тег {'<img>'} и его атрибуты</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Освоить использование тега <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">{'<img>'}</code> для вставки изображений на веб-страницы, понять назначение ключевых атрибутов (<code className="bg-gray-700 px-1 rounded">src</code>, <code className="bg-gray-700 px-1 rounded">alt</code>, <code className="bg-gray-700 px-1 rounded">width</code>, <code className="bg-gray-700 px-1 rounded">height</code>) и разобраться с основными форматами изображений.
            </p>
          </div>
        </div>
      </div>

      {/* Роль изображений в вебе */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileImage className="w-5 h-5 text-green-400" />
          Роль изображений в вебе
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Изображения играют <span className="font-medium text-green-300">ключевую роль</span> в современном веб-дизайне и контенте:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Визуальное оформление</span> — делают страницы привлекательными и интересными.</li>
            <li><span className="font-medium">Передача информации</span> — часто эффективнее текста (диаграммы, фотографии, иллюстрации).</li>
            <li><span className="font-medium">Улучшение UX/UI</span> — иконки, логотипы, кнопки с картинками упрощают навигацию.</li>
            <li><span className="font-medium">Маркетинг</span> — используются в рекламе, баннерах, товарных карточках.</li>
          </ul>
          <p className="mt-3">
            HTML предоставляет простой и эффективный способ вставки изображений — тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">{'<img>'}</code>.
          </p>
        </div>
      </div>

      {/* Тег <img> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Image className="w-5 h-5 text-yellow-400" />
          Тег {'<img>'} — Вставка изображения
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Тег <code className="bg-gray-700 px-1.5 py-0.5 rounded text-yellow-300">{'<img>'}</code> (от <em>image</em> — изображение) используется для <span className="font-medium">вставки изображений</span> на веб-страницу.
          </p>
          <p>
            Это <span className="font-medium">самозакрывающийся</span> (void) тег, то есть он <span className="font-medium">не требует</span> закрывающего тега (<code className="bg-gray-700 px-1 rounded">{'</img>'}</code>).
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-700/30">
            <p className="text-sm text-gray-400 mb-2">Пример использования:</p>
            <pre className="text-yellow-300 text-sm overflow-x-auto">
              <code>{`<img src="photo.jpg" alt="Фотография пользователя">`}</code>
            </pre>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <p className="text-sm text-gray-400 mb-2">Как отображается в браузере:</p>
            <div className="flex items-center justify-center h-32 bg-gray-800 rounded-lg border-2 border-dashed border-gray-600">
              <span className="text-gray-500 text-sm">[Изображение: photo.jpg]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Основные атрибуты <img> */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-purple-400" />
          Основные атрибуты тега {'<img>'}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Атрибуты тега <code className="bg-gray-700 px-1 rounded">{'<img>'}</code> определяют <span className="font-medium">источник</span> изображения, его <span className="font-medium">описание</span> и <span className="font-medium">размеры</span>.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {/* src */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <FileImage className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-blue-300">src (source)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              <span className="font-medium">Обязательный</span> атрибут. Указывает <span className="font-medium">путь</span> или <span className="font-medium">URL</span> к файлу изображения.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Путь к файлу на сервере:</p>
                <pre className="text-blue-300 text-xs"><code>{`src="images/logo.png"`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Полный URL в интернете:</p>
                <pre className="text-blue-300 text-xs"><code>{`src="https://example.com/photo.jpg"`}</code></pre>
              </div>
            </div>
            <div className="mt-3 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
              <p className="text-red-300 text-sm flex items-start gap-2">
                <span className="font-medium">⚠️ Важно:</span>
                <span>
                  Если путь в атрибуте <code className="bg-gray-700 px-1 rounded">src</code> неверен или файл изображения отсутствует, браузер не сможет отобразить картинку. Вместо неё может отображаться пустое место или значок "изображение не найдено".
                </span>
              </p>
            </div>
          </div>

          {/* alt */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Accessibility className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-green-300">alt (alternative text)</h3>
            </div>
            <p className="text-gray-300 mb-3">
              <span className="font-medium">Обязательный</span> атрибут. Предоставляет <span className="font-medium">альтернативный текст</span> для изображения.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-3">
              <li>Отображается, если изображение не загрузилось.</li>
              <li>Используется <span className="font-medium">скринридерами</span> для озвучки содержания изображения пользователям с ограниченными возможностями зрения.</li>
              <li>Индексируется <span className="font-medium">поисковыми системами</span> для лучшего понимания контента страницы.</li>
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Пример:</p>
              <pre className="text-green-300 text-xs"><code>{`<img src="dog.jpg" alt="Золотистый ретривер бежит по пляжу">`}</code></pre>
            </div>
            <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm flex items-start gap-2">
                <span className="font-medium">💡 Совет:</span>
                <span>
                  Альтернативный текст должен быть <span className="font-medium">кратким, точным и описательным</span>. Не используйте фразы вроде "картинка" или "изображение" — скринридеры и так знают, что это картинка.
                </span>
              </p>
            </div>
          </div>

          {/* width и height */}
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-purple-300">width и height</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Атрибуты <code className="bg-gray-700 px-1 rounded">width</code> (ширина) и <code className="bg-gray-700 px-1 rounded">height</code> (высота) задают <span className="font-medium">размеры</span> изображения в пикселях.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">С числовыми значениями:</p>
                <pre className="text-purple-300 text-xs"><code>{`<img src="photo.jpg" alt="Фото" width="300" height="200">`}</code></pre>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">С процентами (относительно контейнера):</p>
                <pre className="text-purple-300 text-xs"><code>{`<img src="photo.jpg" alt="Фото" width="50%" height="auto">`}</code></pre>
              </div>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300 text-sm flex items-start gap-2">
                <span className="font-medium">💡 Совет:</span>
                <span>
                  Указание <code className="bg-gray-700 px-1 rounded">width</code> и <code className="bg-gray-700 px-1 rounded">height</code> помогает браузеру заранее <span className="font-medium">зарезервировать место</span> для изображения, предотвращая "прыжки" контента во время загрузки страницы. Если задать только один размер, изображение может исказиться. Для сохранения пропорций лучше использовать CSS.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Форматы изображений */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileImage className="w-5 h-5 text-cyan-400" />
          Форматы изображений
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Существует множество форматов файлов изображений, каждый из которых имеет свои особенности. Выбор правильного формата влияет на <span className="font-medium">качество</span>, <span className="font-medium">размер файла</span> и <span className="font-medium">совместимость</span>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* JPEG */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2">JPEG (.jpg, .jpeg)</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Сжатие с <span className="font-medium">потерями</span>.</li>
              <li>Хорош для <span className="font-medium">фотографий</span>.</li>
              <li>Маленький размер файла.</li>
              <li><span className="font-medium">Нет прозрачности</span>.</li>
            </ul>
          </div>

          {/* PNG */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-2">PNG (.png)</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Сжатие <span className="font-medium">без потерь</span>.</li>
              <li>Поддерживает <span className="font-medium">прозрачность</span>.</li>
              <li>Хорош для <span className="font-medium">графики</span>, скриншотов, иконок.</li>
              <li>Больше размер файла, чем у JPEG.</li>
            </ul>
          </div>

          {/* SVG */}
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2">SVG (.svg)</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              <li>Векторный формат (на основе XML).</li>
              <li>Масштабируется <span className="font-medium">без потери качества</span>.</li>
              <li>Идеален для <span className="font-medium">логотипов</span>, иконок, простых графиков.</li>
              <li>Может быть вставлен как код HTML.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
          <h4 className="font-bold text-white mb-2">Как выбрать формат?</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
            <li><span className="font-medium">Фотографии:</span> Используйте <code className="bg-gray-700 px-1 rounded">JPEG</code>.</li>
            <li><span className="font-medium">Графика с прозрачностью:</span> Используйте <code className="bg-gray-700 px-1 rounded">PNG</code>.</li>
            <li><span className="font-medium">Логотипы, иконки:</span> Используйте <code className="bg-gray-700 px-1 rounded">SVG</code> (если возможно).</li>
            <li><span className="font-medium">Простая графика без фото:</span> <code className="bg-gray-700 px-1 rounded">PNG</code> или <code className="bg-gray-700 px-1 rounded">SVG</code>.</li>
          </ul>
        </div>
      </div>

      {/* Доступность и SEO */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Accessibility className="w-5 h-5 text-green-400" />
          Важность альтернативного текста (alt)
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Атрибут <code className="bg-gray-700 px-1 rounded">alt</code> имеет <span className="font-medium">критически важное значение</span> не только для отображения, но и для <span className="font-medium">доступности</span> и <span className="font-medium">SEO</span>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-3 flex items-center gap-2">
              <Accessibility className="w-4 h-4" />
              Доступность (Accessibility)
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Скринридеры:</span> Читают вслух текст из атрибута <code className="bg-gray-700 px-1 rounded">alt</code>, позволяя незрячим пользователям "увидеть" изображение.</li>
              <li><span className="font-medium">Проблемы с сетью:</span> Если изображение не загрузилось, пользователь увидит альтернативный текст.</li>
              <li><span className="font-medium">Разные устройства:</span> Пользователи с медленным интернетом могут отключить загрузку изображений — альтернативный текст поможет понять контент.</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <h3 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Поисковая оптимизация (SEO)
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li><span className="font-medium">Индексация:</span> Поисковые системы (Google, Yandex) используют текст <code className="bg-gray-700 px-1 rounded">alt</code> для понимания содержания изображения и всей страницы.</li>
              <li><span className="font-medium">Поиск по картинкам:</span> Хороший <code className="bg-gray-700 px-1 rounded">alt</code> помогает вашему изображению появиться в результатах поиска картинок.</li>
              <li><span className="font-medium">Рейтинг:</span> Страницы с правильно описанными изображениями могут иметь лучший рейтинг.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-red-900/20 border border-red-700/30 rounded-lg">
          <p className="text-red-300 text-sm flex items-start gap-2">
            <span className="font-medium">⚠️ Никогда не оставляйте <code className="bg-gray-700 px-1 rounded">alt</code> пустым</span>
            <span>
              (<code className="bg-gray-700 px-1 rounded">{'alt=""'}</code>) для декоративных изображений. Для информативных изображений <span className="font-medium">всегда</span> пишите содержательный текст.
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Image className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Отличная работа! 🎉</h3>
            <p className="text-gray-300">
              Теперь вы знаете, как вставлять изображения на веб-страницы с помощью тега <code className="bg-gray-700 px-1 rounded">{'<img>'}</code>, какие обязательные атрибуты (<code className="bg-gray-700 px-1 rounded">src</code>, <code className="bg-gray-700 px-1 rounded">alt</code>) и дополнительные (<code className="bg-gray-700 px-1 rounded">width</code>, <code className="bg-gray-700 px-1 rounded">height</code>) нужно использовать. Вы также разобрались с основными форматами изображений (JPEG, PNG, SVG) и поняли, почему альтернативный текст так важен для доступности и SEO. Это важный шаг к созданию полноценных и профессиональных веб-страниц.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;