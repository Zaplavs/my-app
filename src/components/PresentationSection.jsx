export default function PresentationSection() {
  return (
    <section className="bg-black text-red-600 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 tracking-wide uppercase">Платформа на благо трудящихся</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Бесплатные знания для пролетариата.
        </p>

        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-2xl border-4 border-red-700">
          {/* Замените VIDEO_ID на ваш ID видео из ВК */}
          <iframe
            className="w-full h-[500px] border-none"
            src="https://vk.com/video_ext.php?oid=VIDEIO_ID&id=VIDEO_ID&hash=HASH&hd=2"
            title="Презентация платформы"
            allowFullScreen
          ></iframe>
        </div>

        <p className="mt-10 italic text-red-500 text-lg">
          "Образование — мощь пролетариата. Да здравствует бесплатное обучение!"
        </p>
      </div>
    </section>
  );
}