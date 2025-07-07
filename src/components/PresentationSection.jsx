import presentationVideo from '/videos/Hello_1_V.mp4';

export default function PresentationSection() {
  return (
    <section className="bg-black text-red-600 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 tracking-wide uppercase">Платформа на благо трудящихся</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Бесплатные знания для пролетариата.
        </p>

        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl border-4 border-red-700 max-w-4xl mx-auto">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover bg-black"
            controls
            // poster={require('../assets/preview.jpg')} // опционально
          >
            <source src={presentationVideo} type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </div>

        <p className="mt-10 italic text-red-500 text-lg">
          "Образование — мощь пролетариата. Да здравствует бесплатное обучение!"
        </p>
      </div>
    </section>
  );
}