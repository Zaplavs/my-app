export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-red-700">
      <div className="container mx-auto px-6 text-center">
        {/* Копирайт */}
        <p className="uppercase text-sm md:text-base opacity-90">
          &copy; 2025 Красный код — Все знания — народу!
        </p>

        {/* Ссылки */}
        <div className="mt-4 space-x-6 text-sm">
          <a
            href="/privacy"
            className="hover:text-red-500 transition-colors duration-300 ease-in-out"
          >
            Политика конфиденциальности
          </a>
          <span className="text-red-700">|</span>
          <a
            href="/terms"
            className="hover:text-red-500 transition-colors duration-300 ease-in-out"
          >
            Условия использования
          </a>
        </div>

        {/* Опционально: дополнительная строка (можно раскомментировать) */}
        {/* <p className="mt-4 text-xs opacity-70">
          Сайт создан в образовательных целях
        </p> */}
      </div>
    </footer>
  );
}