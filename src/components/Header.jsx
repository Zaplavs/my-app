import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Zap, BookOpen, HelpCircle, Code, Gamepad2 } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState(null);
  const [isHidden, setIsHidden] = React.useState(false);
  const [hasShadow, setHasShadow] = React.useState(false);
  
  const headerRef = React.useRef(null);
  const mobileMenuRef = React.useRef(null);
  const burgerButtonRef = React.useRef(null);
  const prevScrollYRef = React.useRef(window.scrollY || 0);

  const navItems = [
    { name: "Особенности", id: "features", icon: <Zap className="w-4 h-4" /> },
    { name: "Курсы", id: "courses", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Подборки курсов", id: "collections", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Собеседования", id: "interview", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "Игры", id: "game", icon: <Gamepad2 className="w-4 h-4" /> },
  ];

  // Hide-on-scroll and shadow
  React.useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY || 0;
      setHasShadow(current > 4);
      const prev = prevScrollYRef.current;
      const isScrollingDown = current > prev && current > 80;
      setIsHidden(isScrollingDown && !isMenuOpen);
      prevScrollYRef.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMenuOpen]);

  // Active section highlight
  React.useEffect(() => {
    const sectionIds = navItems.map(n => n.id);
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return;
    const io = new IntersectionObserver((entries) => {
      let best = { id: null, ratio: 0 };
      entries.forEach(en => {
        const id = en.target.id;
        const ratio = en.intersectionRatio;
        if (ratio > best.ratio) best = { id, ratio };
      });
      if (best.id) setActiveId(best.id);
    }, { rootMargin: '0px 0px -60% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
    elements.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Close menu on outside click & ESC, lock body scroll
  React.useEffect(() => {
    const onDocMouseDown = (e) => {
      if (!isMenuOpen) return;
      const menuEl = mobileMenuRef.current;
      const burgerEl = burgerButtonRef.current;
      if (menuEl && !menuEl.contains(e.target) && burgerEl && !burgerEl.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onKey);
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // focus first item
      setTimeout(() => {
        const first = mobileMenuRef.current?.querySelector('a, button');
        if (first) first.focus();
      }, 0);
      return () => {
        document.removeEventListener('mousedown', onDocMouseDown);
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = prev;
      };
    }
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  const handleNavClick = (id, e) => {
    e?.preventDefault?.();
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  

  return (
    <header
      ref={headerRef}
      className={`bg-gradient-to-r from-gray-900/90 via-red-900/90 to-black/90 text-white ${hasShadow ? 'shadow-2xl border-b border-red-800/30' : 'shadow-lg border-b border-transparent'} sticky top-0 z-50 backdrop-blur-lg transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded">Пропустить к контенту</a>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl md:text-2xl font-black tracking-wider uppercase transform hover:scale-105 transition-transform duration-300 group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
              КРАСНЫЙ КОД
            </span>
          </Link>

          {/* Навигация (десктоп) - ЦЕНТРИРОВАНА */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8" role="navigation" aria-label="Главная навигация">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 group focus:outline-none focus-visible:ring-2 ring-red-500/60 ${activeId === item.id ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                aria-current={activeId === item.id ? 'page' : undefined}
              >
                <span className={`transition-opacity duration-300 ${activeId === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  {item.icon}
                </span>
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Пустой элемент для баланса (десктоп) */}
          <div className="hidden lg:block w-32"></div>

          

          {/* Бургер-иконка */}
          <button
            ref={burgerButtonRef}
            className="lg:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus-visible:ring-2 ring-red-500/60"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню (полностью раскрывающееся) */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out lg:hidden absolute left-0 right-0 bg-red-900/95 backdrop-blur-lg shadow-2xl`}
        style={{ top: '100%' }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="space-y-2">
            <Link
              to="/"
              className="flex items-center gap-3 py-3 px-4 rounded-xl text-lg font-medium text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-5 h-5" />
              Главная
            </Link>
            
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl text-lg font-medium transition-colors duration-200 ${activeId === item.id ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            
            {/* Мобильные кнопки аккаунта */}
            <div className="pt-4 mt-4 border-t border-red-700/50 space-y-3">
              <Link
                to="/login"
                className="block w-full py-3 px-4 rounded-xl text-center font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Войти
              </Link>
              <Link
                to="/register"
                className="block w-full py-3 px-4 rounded-xl text-center font-medium bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Регистрация
              </Link>
              
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}