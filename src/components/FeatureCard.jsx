import React, { useRef, useEffect } from 'react';

export default function FeatureCard({ icon, title, description, className = '', iconClassName = '' }) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

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

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative ${className}`}
      style={{ perspective: '900px' }}
    >
      {/* Градиентная кайма/сияние */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
        background: 'linear-gradient(135deg, rgba(250,204,21,0.35), rgba(249,115,22,0.35))'
      }} />

      {/* Shine, реагирующий на курсор */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
        style={{
          background: 'radial-gradient(140px 140px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.5), transparent 60%)'
        }}
        aria-hidden
      />

      {/* Карточка */}
      <div
        ref={cardRef}
        className="relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/60 rounded-2xl p-8 shadow-xl transition-transform will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className={`mb-5 inline-flex ${iconClassName} shadow-[0_10px_30px_rgba(0,0,0,0.35)]`}
          style={{ transform: 'translateZ(50px)' }}
        >
          {icon}
        </div>
        <h4
          className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          style={{ transform: 'translateZ(40px)' }}
        >
          {title}
        </h4>
        <p className="text-gray-300 leading-relaxed" style={{ transform: 'translateZ(30px)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}