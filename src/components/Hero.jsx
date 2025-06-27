export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-red-900 via-black to-red-900 text-white py-20 px-6 text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Программирование — <span className="text-yellow-400">для всех!</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Обучайся бесплатно, стань разработчиком и служи прогрессу!
        </p>
        <a
          href="https://t.me/+zfZu_RsO_skwMTAy "
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-semibold uppercase tracking-wider transition transform hover:scale-105"
        >
          Вступайте в сообщество программистов
        </a>
      </div>
    </section>
  );
}