// src/pages/Privacy.js
import React from 'react';
import { Helmet } from 'react-helmet'; // Установите: npm install react-helmet

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности — Красный код</title>
        <meta name="description" content="Политика конфиденциальности сайта Красный код" />
      </Helmet>

      <div className="min-h-screen bg-black text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-red-500">Политика конфиденциальности</h1>

          <p className="mb-4 opacity-90">
            Настоящая Политика конфиденциальности объясняет, как сайт <strong>Красный код</strong> 
            (далее — «сайт», «мы», «наш») относится к вашим персональным данным при использовании вами сайта.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-400">1. Общие положения</h2>
          <p className="mb-4">
            Сайт <strong>Красный код</strong> принадлежит физическому лицу и ведёт образовательную и просветительскую деятельность. 
            Мы уважаем ваше право на конфиденциальность и стремимся защищать ваши персональные данные.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-400">2. Какие данные мы собираем</h2>
          <p className="mb-4">
            На данный момент сайт <strong>не собирает</strong> ваши персональные данные (имя, email, телефон и т.д.) через формы, регистрации или комментарии.
          </p>
          <p className="mb-4">
            Единственная информация, которая может быть получена автоматически:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
            <li>IP-адрес и данные браузера (для работы сервера и анализа трафика)</li>
            <li>Информация из логов хостинга (время доступа, страница входа)</li>
          </ul>
          <p>
            Эти данные используются исключительно для технического обеспечения работы сайта и <strong>не передаются третьим лицам</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-400">3. Использование cookie и аналитики</h2>
          <p className="mb-4">
            На сайте <strong>временно отсутствуют</strong> системы аналитики (Google Analytics, Яндекс.Метрика) и рекламные пиксели. 
            Cookie используются только по технической необходимости (например, для сессий, если они появятся в будущем).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-400">4. Ваши права</h2>
          <p className="mb-4">
            Вы имеете право:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
            <li>На доступ к своим данным (если они будут собраны)</li>
            <li>На их исправление или удаление</li>
            <li>На отзыв согласия (если оно будет дано)</li>
          </ul>
          <p>
            По любым вопросам обращайтесь: <a href="Zaplavs@yandex.ru" className="text-red-400 hover:underline">Zaplavs@yandex.ru</a>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-400">5. Изменения в политике</h2>
          <p>
            Мы можем обновлять эту политику время от времени. Актуальная версия всегда будет размещена на этой странице. 
            Дата последнего обновления: <strong>1 апреля 2025 г.</strong>
          </p>

          <div className="mt-12 text-sm opacity-70">
            &copy; 2025 Красный код — Все знания — народу!
          </div>
        </div>
      </div>
    </>
  );
}

export default Privacy;