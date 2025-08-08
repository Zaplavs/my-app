// src/components/CourseCard.jsx
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CourseCard({
  title,
  description,
  level,
  slug,
  icon,
  color = 'from-red-600 to-red-700',
  className = '',
  children
}) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const getLevelStyle = (levelText) => {
    if (!levelText) return 'bg-gray-900/30 text-gray-300 border border-gray-800/50';
    if (levelText.includes('Начальный')) return 'bg-green-900/30 text-green-400 border border-green-800/50';
    if (levelText.includes('Средний')) return 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50';
    return 'bg-red-900/30 text-red-400 border border-red-800/50';
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current || !cardRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    const maxRotate = 10;
    const rotateY = px * maxRotate;
    const rotateX = -py * maxRotate;

    const animate = () => {
      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      containerRef.current.style.setProperty('--mx', `${x}px`);
      containerRef.current.style.setProperty('--my', `${y}px`);
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 400ms ease';
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    setTimeout(() => {
      if (cardRef.current) cardRef.current.style.transition = '';
    }, 400);
  };

  const defaultInner = (
    <>
      {/* Заголовок с иконкой */}
      <div className="flex items-start space-x-4 mb-4" style={{ transform: 'translateZ(40px)' }}>
        <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-3 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
          <div className="text-white drop-shadow-md">{icon}</div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">{title}</h4>
        </div>
      </div>
      {/* Описание */}
      <p className="text-gray-300/90 mb-6 flex-grow leading-relaxed" style={{ transform: 'translateZ(30px)' }}>
        {description}
      </p>
      {/* Бейдж уровня */}
      {level && (
        <div className="mt-auto" style={{ transform: 'translateZ(20px)' }}>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getLevelStyle(level)}`}>{level}</span>
        </div>
      )}
      {/* Анимированная линия прогресса при наведении */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50 overflow-hidden">
        <div className={`absolute top-0 left-0 h-full bg-gradient-to-r ${color} w-0 group-hover:w-full transition-all duration-700 ease-out`}></div>
      </div>
    </>
  );

  return (
    <Link
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      to={`/course/${slug}/learn`}
      className={`block group relative rounded-3xl overflow-hidden ${className}`}
      style={{ perspective: '900px' }}
    >
      {/* Сияние фона на hover */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

      {/* Shine */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
        style={{ background: 'radial-gradient(160px 160px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.45), transparent 60%)' }}
        aria-hidden
      />

      {/* Внутренняя карточка */}
      <div
        ref={cardRef}
        className="relative h-full flex flex-col bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-6 shadow-xl transition-transform will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children ? children : defaultInner}
      </div>
    </Link>
  );
}