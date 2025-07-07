import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-red-700 text-white p-4 shadow-lg sticky top-0 z-50 border-b border-black">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-wider">КРАСНЫЙ КОД</h1>

        <nav className="space-x-6 hidden md:flex text-sm uppercase tracking-widest">
          <a href="#features" className="hover:text-gray-300 transition">Особенности</a>
          <a href="#courses" className="hover:text-gray-300 transition">Курсы</a>
          <a href="#collections" className="hover:text-gray-300 transition">Бесплатные курсы</a> {/* Новая ссылка */}
          <a href="#testimonials" className="hover:text-gray-300 transition">Отзывы</a>
        </nav>

        <div className="flex space-x-4 text-sm uppercase">
          {/* <Link to="/register" className="bg-black px-4 py-2 rounded hover:bg-gray-800 transition">Зарегистрироваться</Link>
          <Link to="/login" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition">Войти</Link> */}
        </div>
      </div>
    </header>
  );
}