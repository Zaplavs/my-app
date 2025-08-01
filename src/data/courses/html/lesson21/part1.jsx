// src/data/courses/html/lesson21/part1.jsx
import React from 'react';
import { Code, FileText, Terminal, CheckCircle, Settings, Hash, Trophy } from 'lucide-react';

const Part1 = () => {
  return (
    <div className="space-y-8 text-gray-200">
      {/* Вступление */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Trophy className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🏆 Урок 21: Итоговый проект - Персональная страница</h1>
            <h2 className="text-xl font-semibold text-blue-300 mb-3">Создание полноценной веб-страницы</h2>
            <p className="text-gray-300">
              <span className="font-medium text-yellow-400">🎯 Цель урока:</span> Применить <span className="font-medium text-green-300">все изученные</span> темы HTML для создания <span className="font-medium text-cyan-300">персональной веб-страницы</span>. Проект будет включать <span className="font-medium text-purple-300">навигацию</span>, <span className="font-medium text-orange-300">формы</span>, <span className="font-medium text-red-300">медиа</span>, <span className="font-medium text-blue-300">таблицы</span>, <span className="font-medium text-yellow-300">семантические теги</span> и другие элементы.
            </p>
          </div>
        </div>
      </div>

      {/* Описание проекта */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <FileText className="w-5 h-5 text-green-400" />
          Описание итогового проекта
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            В этом заключительном проекте курса вы создадите <span className="font-medium">свою персональную веб-страницу</span> - портфолио, которое продемонстрирует все ваши знания по HTML.
          </p>
          <p>
            Этот проект объединит все темы, которые вы изучили:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><span className="font-medium">Структура документа</span> и базовые теги</li>
            <li><span className="font-medium">Семантические теги</span> HTML5</li>
            <li><span className="font-medium">Навигация</span> и ссылки</li>
            <li><span className="font-medium">Формы</span> и их элементы</li>
            <li><span className="font-medium">Медиа</span> (изображения, аудио, видео)</li>
            <li><span className="font-medium">Таблицы</span></li>
            <li><span className="font-medium">Цитаты и код</span></li>
            <li><span className="font-medium">Метатеги</span> и SEO</li>
            <li><span className="font-medium">Доступность</span> и лучшие практики</li>
          </ul>
        </div>
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Зачем это нужно?</span>
            <span>
              Этот проект станет <span className="font-medium">демонстрацией</span> ваших навыков и может служить <span className="font-medium">реальным портфолио</span> при поиске работы или учебы. Вы создадите <span className="font-medium">живую веб-страницу</span>, которую можно показать другим и которая будет <span className="font-medium">валидной</span>, <span className="font-medium">доступной</span> и <span className="font-medium">семантически правильной</span>.
            </span>
          </p>
        </div>
      </div>

      {/* Требования к проекту */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <CheckCircle className="w-5 h-5 text-purple-400" />
          Требования к персональной странице
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-purple-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Code className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-purple-300">Структура и семантика</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Корректный DOCTYPE и структура документа</li>
              <li>Семантические теги: <code className="bg-gray-700 px-1 rounded">{'<header>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<nav>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<main>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<section>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<article>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>, <code className="bg-gray-700 px-1 rounded">{'<footer>'}</code></li>
              <li>Правильная иерархия заголовков (<code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> - <code className="bg-gray-700 px-1 rounded">{'<h6>'}</code>)</li>
              <li>Атрибут <code className="bg-gray-700 px-1 rounded">lang="ru"</code> у тега <code className="bg-gray-700 px-1 rounded">{'<html>'}</code></li>
              <li>Необходимые мета-теги: charset, viewport, description</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Навигация и ссылки</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Навигационное меню с внутренними ссылками</li>
              <li>Ссылки на внешние ресурсы (социальные сети, GitHub)</li>
              <li>Якорные ссылки для навигации по странице</li>
              <li>Контактная информация с mailto и tel ссылками</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-bold text-cyan-300">Контент и медиа</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Персональная информация и биография</li>
              <li>Фотография профиля с содержательным <code className="bg-gray-700 px-1 rounded">alt</code></li>
              <li>Раздел с навыками (в виде списка или таблицы)</li>
              <li>Примеры работ или проектов (с описаниями)</li>
              <li>Изображения, аудио или видео (по желанию)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-orange-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <Terminal className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-bold text-orange-300">Формы и интерактивность</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Форма обратной связи с полями: имя, email, тема, сообщение</li>
              <li>Правильная связь <code className="bg-gray-700 px-1 rounded">{'<label>'}</code> с полями через <code className="bg-gray-700 px-1 rounded">for/id</code></li>
              <li>Использование различных типов полей ввода</li>
              <li>Кнопка отправки формы</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
          <h3 className="font-bold text-blue-300 mb-3">Дополнительные требования:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Все теги должны быть написаны <span className="font-medium">строчными буквами</span></li>
            <li>Все теги должны быть <span className="font-medium">правильно закрыты</span></li>
            <li>Использовать <span className="font-medium">осмысленные комментарии</span> для разделения секций</li>
            <li>Код должен <span className="font-medium">проходить валидацию</span> в W3C без ошибок</li>
            <li>Страница должна быть <span className="font-medium">доступной</span> (правильные alt, структура заголовков и т.д.)</li>
            <li>Использовать <span className="font-medium">data-атрибуты</span> для хранения пользовательских данных (по желанию)</li>
          </ul>
        </div>
      </div>

      {/* Структура страницы */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Hash className="w-5 h-5 text-orange-400" />
          Рекомендуемая структура страницы
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p>
            Вот пример структуры, которую может иметь ваша персональная страница:
          </p>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-700/30">
            <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
              <span className="bg-purple-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
              Шапка сайта (<code className="bg-gray-700 px-1 rounded">{'<header>'}</code>)
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm ml-8">
              <li>Заголовок <code className="bg-gray-700 px-1 rounded">{'<h1>'}</code> с вашим именем</li>
              <li>Краткое приветствие или девиз</li>
              <li>Навигационное меню <code className="bg-gray-700 px-1 rounded">{'<nav>'}</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-green-700/30">
            <h3 className="font-bold text-green-300 mb-2 flex items-center gap-2">
              <span className="bg-green-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
              Основной контент (<code className="bg-gray-700 px-1 rounded">{'<main>'}</code>)
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm ml-8">
              <li>Секция "Обо мне" <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> с биографией</li>
              <li>Секция "Навыки" <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> (список или таблица)</li>
              <li>Секция "Проекты" <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> с примерами работ</li>
              <li>Секция "Контакты" <code className="bg-gray-700 px-1 rounded">{'<section>'}</code> с формой обратной связи</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-700/30">
            <h3 className="font-bold text-cyan-300 mb-2 flex items-center gap-2">
              <span className="bg-cyan-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
              Боковая панель (<code className="bg-gray-700 px-1 rounded">{'<aside>'}</code>) (по желанию)
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm ml-8">
              <li>Дополнительная информация</li>
              <li>Ссылки на социальные сети</li>
              <li>Интересные факты</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-700/30">
            <h3 className="font-bold text-orange-300 mb-2 flex items-center gap-2">
              <span className="bg-orange-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">4</span>
              Подвал сайта (<code className="bg-gray-700 px-1 rounded">{'<footer>'}</code>)
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm ml-8">
              <li>Информация об авторском праве</li>
              <li>Ссылки на внешние ресурсы</li>
              <li>Дата последнего обновления</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Критерии оценки */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <Trophy className="w-5 h-5 text-yellow-400" />
          Критерии оценки проекта
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-5 rounded-xl border border-green-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-green-300">Обязательные элементы</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Правильная структура HTML-документа</li>
              <li>Использование всех основных семантических тегов</li>
              <li>Работающая навигация</li>
              <li>Форма обратной связи</li>
              <li>Метатеги и SEO</li>
              <li>Доступность (alt, заголовки, labels)</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-5 rounded-xl border border-blue-700/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Trophy className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold text-blue-300">Дополнительные баллы</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Использование data-атрибутов</li>
              <li>Цитаты и примеры кода</li>
              <li>Медиа-элементы (аудио, видео)</li>
              <li>Таблицы с данными</li>
              <li>Креативный дизайн и оригинальность</li>
              <li>Качественные комментарии и форматирование</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <p className="text-blue-300 text-sm flex items-start gap-2">
            <span className="font-medium">💡 Советы по выполнению:</span>
            <span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Начните с создания каркаса страницы с основными семантическими тегами</li>
                <li>Постепенно добавляйте контент в каждую секцию</li>
                <li>Регулярно проверяйте код валидатором W3C</li>
                <li>Тестируйте навигацию и форму в браузере</li>
                <li>Не забывайте про доступность и семантику</li>
                <li>Добавьте личный стиль и креативность!</li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      {/* Заключение */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
            <Trophy className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Поздравляем! 🎉</h3>
            <p className="text-gray-300">
              Этот итоговый проект станет <span className="font-medium text-green-300">кульминацией</span> вашего обучения HTML. Вы создадите <span className="font-medium text-purple-300">реальную веб-страницу</span>, которая объединит все знания, полученные в этом курсе. Этот проект не только продемонстрирует ваше <span className="font-medium text-cyan-300">мастерство</span>, но и станет <span className="font-medium text-orange-300">полезным инструментом</span> для вашей профессиональной деятельности. Удачи в создании вашей персональной страницы!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;