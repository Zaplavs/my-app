import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HelpPage() {
  return (
    <div className="bg-black text-red-600 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold uppercase tracking-wider mb-8">Как получить помощь</h1>
          <p className="text-xl mb-10 leading-relaxed">
            Товарищ, если у вас возникли трудности — не волнуйтесь. Помощь всегда рядом.
            Следуйте этим простым указаниям и вы получите поддержку от братских рядов.
          </p>

          <ol className="text-left space-y-6 text-lg">
            <li className="flex items-start">
              <span className="inline-block bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <span>Перейдите по ссылке в нашу группу поддержки: <br /><a href="https://t.me/+zfZu_RsO_skwMTAy " target="_blank" rel="noopener noreferrer" className="underline hover:text-red-400 transition">Telegram группа "Коммунист Этичный Хакер"</a></span>
            </li>

            <li className="flex items-start">
              <span className="inline-block bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <span>Войдите в канал и нажмите на три точки (⋮) в правом верхнем углу.</span>
            </li>

            <li className="flex items-start">
              <span className="inline-block bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <span>Выберите пункт <strong>"Обсуждение"</strong> или <strong>"Чат канала"</strong>.</span>
            </li>

            <li className="flex items-start">
              <span className="inline-block bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <span>Задайте свой вопрос. Вам обязательно ответят в кратчайшие сроки.</span>
            </li>
          </ol>

          <div className="mt-12">
            <a
              href="https://t.me/+zfZu_RsO_skwMTAy "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 hover:bg-red-900 text-white font-bold py-3 px-8 rounded shadow-lg transform transition hover:scale-105"
            >
              Перейти в Telegram группу
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}