import React, { useEffect, useRef, useState } from 'react';

function isInteractiveElement(element) {
  if (!element) return false;
  const interactiveSelector = 'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';
  return Boolean(element.closest(interactiveSelector));
}

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const animationFrameRef = useRef(0);

  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);

  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  
  const isClickedRef = useRef(false);
  const isInteractiveRef = useRef(false);
  const isVisibleRef = useRef(false);

  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(pointer: fine)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setIsFinePointer(mq.matches);
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;
    
    const handleMouseMove = (e) => {
      targetXRef.current = e.clientX;
      targetYRef.current = e.clientY;
      
      if (!isVisibleRef.current) {
        setIsVisible(true);
        isVisibleRef.current = true;
        currentXRef.current = e.clientX;
        currentYRef.current = e.clientY;
      }
      
      const interactive = isInteractiveElement(e.target);
      if (interactive !== isInteractiveRef.current) {
        setIsInteractive(interactive);
        isInteractiveRef.current = interactive;
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      isClickedRef.current = true;
    };

    const handleMouseUp = () => {
      setIsClicked(false);
      isClickedRef.current = false;
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      isVisibleRef.current = true;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      isVisibleRef.current = false;
    };

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
    
    const cursorEl = cursorRef.current;
    const dotEl = dotRef.current;
    if (!cursorEl || !dotEl) return;

    const animate = () => {
      // Быстрое следование без интерполяции
      currentXRef.current = targetXRef.current;
      currentYRef.current = targetYRef.current;

      const rotation = isInteractiveRef.current ? 30 : 0;
      const scale = isClickedRef.current ? 0.7 : 1;

      cursorEl.style.transform = `translate3d(${currentXRef.current - 2}px, ${currentYRef.current - 2}px, 0) rotate(${rotation}deg) scale(${scale})`;
      dotEl.style.transform = `translate3d(${currentXRef.current - 1}px, ${currentYRef.current - 1}px, 0)`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Стрелка курсора - более светлая */}
      <div
        ref={cursorRef}
        aria-hidden
        style={{
          willChange: 'transform',
          transition: 'none',
          opacity: isVisible ? 1 : 0,
        }}
        className="fixed top-0 left-0 pointer-events-none"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L14 9L2 16L6 9L2 2Z"
            fill={isInteractive ? '#FFD700' : '#FFFFFF'}
            stroke={isInteractive ? '#FFD700' : '#CCCCCC'}
            strokeWidth="0.5"
            style={{
              filter: isInteractive 
                ? 'drop-shadow(0 0 2px rgba(255, 215, 0, 0.5))'
                : 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.8))',
            }}
          />
        </svg>
      </div>
      
      {/* Светлая точка для точности */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          width: '3px',
          height: '3px',
          background: isInteractive ? '#FFD700' : '#FFFFFF',
          opacity: isVisible ? 1 : 0,
          borderRadius: '50%',
          boxShadow: isInteractive 
            ? '0 0 4px rgba(255, 215, 0, 0.9)'
            : '0 0 2px rgba(255, 255, 255, 0.9)',
        }}
        className="fixed top-0 left-0 pointer-events-none"
      />
    </div>
  );
}