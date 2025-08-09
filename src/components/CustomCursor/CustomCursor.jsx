import React, { useEffect, useRef, useState } from 'react';

function isInteractiveElement(element) {
  if (!element) return false;
  const interactiveSelector = 'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';
  return Boolean(element.closest(interactiveSelector));
}

export default function CustomCursor() {
  const ringRef = useRef(null);
  const animationFrameRef = useRef(0);

  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const ringXRef = useRef(0);
  const ringYRef = useRef(0);

  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const isClickedRef = useRef(false);
  const isInteractiveRef = useRef(false);
  const isVisibleRef = useRef(false);
  const rippleRef = useRef(null);
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(pointer: fine)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setIsFinePointer(mq.matches);
    mq.addEventListener?.('change', update);
    update();
    return () => mq.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;
    const handleMouseMove = (e) => {
      targetXRef.current = e.clientX;
      targetYRef.current = e.clientY;
      if (!isVisibleRef.current) { setIsVisible(true); isVisibleRef.current = true; }
      const interactive = isInteractiveElement(e.target);
      if (interactive !== isInteractiveRef.current) {
        setIsInteractive(interactive);
        isInteractiveRef.current = interactive;
      }
    };
    const handleMouseDown = () => {
      setIsClicked(true); isClickedRef.current = true;
      const ripple = rippleRef.current;
      if (ripple) {
        ripple.classList.remove('cursor-ripple');
        // force reflow to restart animation
        // eslint-disable-next-line no-unused-expressions
        ripple.offsetWidth;
        ripple.classList.add('cursor-ripple');
      }
    };
    const handleMouseUp = () => { setIsClicked(false); isClickedRef.current = false; };
    const handleMouseEnter = () => { setIsVisible(true); isVisibleRef.current = true; };
    const handleMouseLeave = () => { setIsVisible(false); isVisibleRef.current = false; };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isFinePointer]);

  useEffect(() => {
    if (!isFinePointer) return;
    const ringEl = ringRef.current;
    if (!ringEl) return;

    const animate = () => {
      const lerpFactor = 0.2;
      ringXRef.current += (targetXRef.current - ringXRef.current) * lerpFactor;
      ringYRef.current += (targetYRef.current - ringYRef.current) * lerpFactor;

      const ringScale = isClickedRef.current ? 0.9 : (isInteractiveRef.current ? 1.2 : 1);
      ringEl.style.transform = `translate3d(${ringXRef.current - 16}px, ${ringYRef.current - 16}px, 0) scale(${ringScale})`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  const baseVisibility = isVisible ? 1 : 0;
  const ringOpacity = isInteractive ? 0.28 : 0.18;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Neon ring with dashed border */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          willChange: 'transform, opacity',
          transition: 'opacity 150ms ease, background 200ms ease, border-color 200ms ease',
          opacity: baseVisibility,
          borderColor: isInteractive ? 'rgba(255, 196, 0, 0.6)' : 'rgba(255,255,255,0.35)',
          boxShadow: isInteractive ? '0 0 22px rgba(255,196,0,0.55), inset 0 0 10px rgba(255,196,0,0.2)' : '0 0 26px rgba(255,255,255,0.25)'
        }}
        className={`w-10 h-10 rounded-full mix-blend-screen backdrop-blur-[1.5px] border-2 border-dashed ${isInteractive ? 'bg-yellow-400/10' : 'bg-white/5'}`}
      />
      {/* Inner dot removed by request */}
      {/* click ripple */}
      <div ref={rippleRef} className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden />
      <style>{`
        .cursor-ripple {
          position: absolute;
          left: ${targetXRef.current}px;
          top: ${targetYRef.current}px;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(255,196,0,0.8) 0%, rgba(255,196,0,0.0) 70%);
          animation: cursor-ripple-anim 450ms ease-out forwards;
          filter: blur(0.6px);
        }
        @keyframes cursor-ripple-anim {
          from { transform: translate(-50%, -50%) scale(0.6); opacity: 0.9; }
          to { transform: translate(-50%, -50%) scale(8); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
