// src/components/CourseCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CourseCarousel({ collections, itemsPerSlide = 4 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerSlide);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Обновление количества отображаемых элементов при изменении размера окна
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1536) {
        setItemsToShow(5);
      } else if (window.innerWidth >= 1280) {
        setItemsToShow(4);
      } else if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsToShow < collections.length ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : collections.length - itemsToShow
    );
  };

  // Автоматическая прокрутка
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentIndex, itemsToShow, collections.length, isHovered]);

  return (
    <div 
      className="relative group py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Заголовок секции */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Популярные курсы
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
        </div>
        
        {/* Навигационные кнопки */}
        <div className="flex space-x-3">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/70 text-white backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Предыдущие курсы"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/70 text-white backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Следующие курсы"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Карусель */}
      <div 
        ref={containerRef}
        className="overflow-hidden rounded-2xl"
      >
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            width: `${(collections.length / itemsToShow) * 100}%`
          }}
        >
          {collections.map((item, index) => (
            <div 
              key={item.id}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <div className="group relative h-full">
                {/* Градиентный фон при наведении */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-700`}></div>
                <CollectionCard item={item} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Индикаторы */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(collections.length / itemsToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsToShow)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              Math.floor(currentIndex / itemsToShow) === index 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8' 
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function CollectionCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
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
    const maxRotate = 6;
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
    cardRef.current.style.transition = 'transform 500ms cubic-bezier(0.33,1,0.68,1)';
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    setTimeout(() => {
      if (cardRef.current) cardRef.current.style.transition = '';
    }, 500);
  };

  return (
    <div
      ref={containerRef}
      className="group relative rounded-3xl h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); handleMouseLeave(); }}
      style={{ perspective: '1000px' }}
    >
      {/* Shine effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
        style={{ background: 'radial-gradient(200px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.3), transparent 70%)' }}
        aria-hidden
      />
      
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border border-gray-700/40 shadow-2xl transition-all duration-500 will-change-transform h-full flex flex-col"
        style={{ 
          transformStyle: 'preserve-3d',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Изображение */}
        <div className="overflow-hidden h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] transform group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Иконка в углу */}
          <div className={`absolute top-4 right-4 p-3 rounded-2xl bg-gradient-to-r ${item.color} backdrop-blur-md shadow-xl z-20 transform transition-all duration-500 ${hovered ? 'scale-110 rotate-3' : ''}`}>
            {item.icon}
          </div>
          
          {/* Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-xs font-semibold text-white rounded-full border border-white/10">
              {item.category}
            </span>
          </div>
        </div>
        
        {/* Контент */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
          
          <div className="mt-auto pt-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-300"
                    >
                      {item.title.charAt(0)}
                    </div>
                  ))}
                </div>
                <span className="ml-2 text-gray-500 text-sm">+{Math.floor(Math.random() * 1000)}</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span className="ml-1 text-gray-400 text-sm">{item.rating}</span>
              </div>
            </div>
            
            {/* Кнопка действия */}
            <a
              href={`/courses/${item.id}`}
              className="group inline-flex items-center justify-center w-full font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-5 py-3 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-blue-500/30 relative overflow-hidden"
            >
              <span className="relative z-10">Перейти к курсам</span>
              <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
        
        {/* Градиентная рамка при наведении */}
        <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      </div>
    </div>
  );
}