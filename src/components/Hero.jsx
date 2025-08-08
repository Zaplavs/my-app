import React, { useEffect, useRef } from 'react';
import { ArrowRight, Users, Code, Zap } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef(null);
  const tiltRef = useRef(null);
  const bgBlob1Ref = useRef(null);
  const bgBlob2Ref = useRef(null);
  const floatIconRef = useRef(null);
  const ctaRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current || !tiltRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5; // -0.5..0.5
    const py = y / rect.height - 0.5;

    const maxRotate = 10; // deg
    const rotateY = px * maxRotate;
    const rotateX = -py * maxRotate;

    const animate = () => {
      // Tilt main card
      tiltRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Parallax background blobs
      if (bgBlob1Ref.current) {
        bgBlob1Ref.current.style.transform = `translate3d(${px * 40}px, ${py * 40}px, 0)`;
      }
      if (bgBlob2Ref.current) {
        bgBlob2Ref.current.style.transform = `translate3d(${px * -50}px, ${py * -50}px, 0)`;
      }

      // Floating icon depth
      if (floatIconRef.current) {
        floatIconRef.current.style.transform = `translate3d(${px * 30}px, ${py * -30}px, 60px)`;
      }

      // CTA shine follows cursor
      if (ctaRef.current) {
        ctaRef.current.style.setProperty('--mx', `${x}px`);
        ctaRef.current.style.setProperty('--my', `${y}px`);
      }
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transition = 'transform 400ms ease';
    tiltRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    setTimeout(() => {
      if (tiltRef.current) tiltRef.current.style.transition = '';
    }, 400);

    if (bgBlob1Ref.current) bgBlob1Ref.current.style.transform = '';
    if (bgBlob2Ref.current) bgBlob2Ref.current.style.transform = '';
    if (floatIconRef.current) floatIconRef.current.style.transform = 'translate3d(0,0,60px)';
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gradient-to-br from-gray-950 via-red-950 to-black text-white overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Анимированные фоновые элементы + параллакс */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/30 via-transparent to-yellow-500/30"></div>
      </div>

      <div
        ref={bgBlob1Ref}
        className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
        aria-hidden
      />
      <div
        ref={bgBlob2Ref}
        className="pointer-events-none absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1.2s]"
        aria-hidden
      />

      {/* Лёгкая 3D-сетка для глубины */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 60%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          backgroundPosition: 'center, center, center',
          transform: 'translateZ(-200px)'
        }}
        aria-hidden
      />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div
          ref={tiltRef}
          className="max-w-4xl mx-auto text-center will-change-transform"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Бейдж статуса */}
          <div
            className="inline-flex items-center gap-2 bg-red-900/30 backdrop-blur-sm border border-red-800/50 rounded-full px-6 py-2 mb-8 shadow-[0_10px_30px_rgba(239,68,68,0.15)]"
            style={{ transform: 'translateZ(40px)' }}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-300 font-medium uppercase tracking-wider">Бесплатное обучение</span>
          </div>

          {/* Заголовок */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            style={{ transform: 'translateZ(60px)' }}
          >
            Программирование — <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              для всех!
            </span>
          </h1>

          {/* Подзаголовок */}
          <p
            className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed"
            style={{ transform: 'translateZ(50px)' }}
          >
            Обучайся бесплатно, стань разработчиком и создавай технологии будущего
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto" style={{ transform: 'translateZ(45px)' }}>
            Присоединяйся к сообществу программистов уже сегодня
          </p>

          {/* Плавающая иконка кода на «поверхности» */}
          <div
            ref={floatIconRef}
            className="hidden md:flex items-center justify-center mx-auto mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            style={{ transform: 'translate3d(0,0,60px)', transformStyle: 'preserve-3d' }}
            aria-hidden
          >
            <Code className="w-7 h-7 text-yellow-400 drop-shadow-[0_6px_20px_rgba(250,204,21,0.35)]" />
          </div>

          {/* Кнопка действия (CTA) с shine-эффектом */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ transform: 'translateZ(65px)' }}>
            <a
              ref={ctaRef}
              href="https://t.me/+zfZu_RsO_skwMTAy"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-yellow-500/30 w-full sm:w-auto justify-center"
              style={{
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {/* Shine overlay */}
              <span
                className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
                style={{
                  background: 'radial-gradient(120px 120px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.6), transparent 60%)'
                }}
                aria-hidden
              />
              <span>Вступить в сообщество</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Статистика */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400" style={{ transform: 'translateZ(30px)' }}>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-yellow-500" />
              <span><span className="font-bold text-white">2,500+</span> участников</span>
            </div>
            <div className="h-4 w-px bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500" />
              <span><span className="font-bold text-white">100%</span> бесплатно</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}