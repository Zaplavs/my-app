// src/components/GameSection.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GameSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const tiltRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const ctaRef = useRef(null);
  const rafRef = useRef(null);

  const handlePlayClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
    navigate('/game');
  };

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const maxRotate = 8;
    const rotateY = px * maxRotate;
    const rotateX = -py * maxRotate;

    const animate = () => {
      if (tiltRef.current) {
        tiltRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
      if (blob1Ref.current) blob1Ref.current.style.transform = `translate3d(${px * 30}px, ${py * 30}px, 0)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translate3d(${px * -35}px, ${py * -35}px, 0)`;
      if (blob3Ref.current) blob3Ref.current.style.transform = `translate3d(${px * 20}px, ${py * -20}px, 0)`;
      if (ctaRef.current) {
        ctaRef.current.style.setProperty('--mx', `${x}px`);
        ctaRef.current.style.setProperty('--my', `${y}px`);
      }
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transition = 'transform 400ms ease';
      tiltRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
      setTimeout(() => {
        if (tiltRef.current) tiltRef.current.style.transition = '';
      }, 400);
    }
    if (blob1Ref.current) blob1Ref.current.style.transform = '';
    if (blob2Ref.current) blob2Ref.current.style.transform = '';
    if (blob3Ref.current) blob3Ref.current.style.transform = '';
  };

  // Централизованные интерактивные токены кода
  const codeTokens = ['<>', '{}', '[]', '()', '++', '==', '=>'];
  const handleTokenMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-20 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Декоративные элементы */}
      <div ref={blob1Ref} className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" id='game'></div>
      <div ref={blob2Ref} className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div ref={blob3Ref} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      {/* Лёгкая 3D-сетка */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 60%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 44px 44px, 44px 44px',
          backgroundPosition: 'center, center, center',
          transform: 'translateZ(-250px)'
        }}
        aria-hidden
      />
      
      <div className="container mx-auto px-6 relative">
        <div ref={tiltRef} className="text-center max-w-4xl mx-auto will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
          <div className="inline-flex items-center gap-2 bg-purple-600/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 font-medium text-sm">Игровой режим активирован</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]" style={{ transform: 'translateZ(60px)' }}>
            Поиграйте в{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              игры
            </span>
            {' '}связанные с IT
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed" style={{ transform: 'translateZ(40px)' }}>
            Проверьте свои навыки программирования в увлекательных интерактивных играх. 
            Улучшайте свои знания в мире IT и становитесь настоящим профессионалом!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button 
              onClick={handlePlayClick}
              ref={ctaRef}
              className={`group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${isAnimating ? 'animate-pulse scale-105' : ''}`}
              style={{ WebkitTapHighlightColor: 'transparent', transform: 'translateZ(50px)' }}
            >
              <span className="relative z-10">Выбрать игру</span>
              {/* Shine */}
              <span
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
                style={{ background: 'radial-gradient(160px 160px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.5), transparent 60%)' }}
                aria-hidden
              />
            </button>
            
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Готов к вызову</span>
            </div>
          </div>
          
          {/* Центрированные интерактивные токены кода */}
          <div className="mt-16" style={{ transform: 'translateZ(30px)' }}>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {codeTokens.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Символ ${t}`}
                  onMouseMove={handleTokenMove}
                  className="group relative select-none text-4xl md:text-5xl font-mono px-4 py-2 rounded-xl transition-transform duration-300 hover:scale-125 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
                  style={{
                    WebkitTapHighlightColor: 'transparent'
                  }}
                >
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]">
                    {t}
                  </span>
                  {/* Shine */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
                    style={{ background: 'radial-gradient(120px 120px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.5), transparent 60%)' }}
                    aria-hidden
                  />
                  {/* Glow ring */}
                  <span className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500/25 via-pink-500/25 to-cyan-500/25 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}