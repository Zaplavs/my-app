export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-red-700">
      <div className="container mx-auto px-6 text-center">
        <p className="uppercase">&copy; 2025 Красный код — Все знания — народу!</p>
        <div className="mt-4 space-x-4 text-sm">
          <a href="#" className="hover:text-red-500 transition">Политика конфиденциальности</a>
          <a href="#" className="hover:text-red-500 transition">Условия использования</a>
        </div>
      </div>
    </footer>
  );
}