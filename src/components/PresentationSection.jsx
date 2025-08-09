import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, SkipForward } from 'lucide-react';
import presentationVideo from '/videos/Hello_1_V.mp4';

export default function PresentationSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverX, setHoverX] = useState(0);
  const [captionsEnabled, setCaptionsEnabled] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const sectionRef = useRef(null);
  const tiltRef = useRef(null);
  const bgBlob1Ref = useRef(null);
  const bgBlob2Ref = useRef(null);
  const rafRef = useRef(null);
  const playerContainerRef = useRef(null);
  const timeSaveKey = 'presentationVideo:time';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      const pct = (video.currentTime / (video.duration || 1)) * 100;
      setProgress(isNaN(pct) ? 0 : pct);
      setCurrentTime(video.currentTime || 0);
      try {
        localStorage.setItem(timeSaveKey, String(video.currentTime || 0));
      } catch {}
    };

    const onLoadedMetadata = () => {
      setDuration(video.duration || 0);
      try {
        const saved = parseFloat(localStorage.getItem(timeSaveKey) || '0');
        if (!isNaN(saved) && saved > 0 && saved < (video.duration || 0)) {
          video.currentTime = saved;
        }
      } catch {}
    };

    const onProgress = () => {
      try {
        if (video.buffered && video.buffered.length) {
          const end = video.buffered.end(video.buffered.length - 1);
          const pct = (end / (video.duration || 1)) * 100;
          setBuffered(isNaN(pct) ? 0 : Math.min(100, pct));
        }
      } catch {}
    };

    const onEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('progress', onProgress);
    video.addEventListener('ended', onEnded);

    video.muted = isMuted;
    video.volume = volume;
    video.playbackRate = playbackRate;

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('progress', onProgress);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    const io = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        if (!userPaused) {
          video.play().catch(() => {});
          setIsPlaying(true);
        }
      } else {
        if (!video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      }
    }, { threshold: [0, 0.6, 1] });
    io.observe(el);
    return () => io.disconnect();
  }, [userPaused]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
      if (!isPlaying) setUserPaused(false);
      if (isPlaying) setUserPaused(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const next = !isMuted;
      video.muted = next;
      setIsMuted(next);
    }
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    const progressContainer = progressRef.current;
    if (video && progressContainer) {
      const rect = progressContainer.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      video.currentTime = pos * video.duration;
    }
  };

  const handleProgressMouseDown = (e) => {
    setIsScrubbing(true);
    handleProgressClick(e);
    document.addEventListener('mousemove', handleProgressMouseMove);
    document.addEventListener('mouseup', handleProgressMouseUp);
  };

  const handleProgressMouseMove = (e) => {
    if (!isScrubbing) return;
    handleProgressClick(e);
  };

  const handleProgressMouseUp = () => {
    setIsScrubbing(false);
    document.removeEventListener('mousemove', handleProgressMouseMove);
    document.removeEventListener('mouseup', handleProgressMouseUp);
  };

  const handleProgressHover = (e) => {
    const video = videoRef.current;
    const el = progressRef.current;
    if (!video || !el) return;
    const rect = el.getBoundingClientRect();
    const pos = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    setHoverX(pos * rect.width);
    setHoverTime(pos * (video.duration || 0));
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const resetVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      if (!isPlaying) {
        video.play();
        setIsPlaying(true);
        setUserPaused(false);
      }
    }
  };

  const skipForward = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = Math.min(video.currentTime + 10, video.duration);
    }
  };

  const changeVolume = (next) => {
    const video = videoRef.current;
    if (!video) return;
    const clamped = Math.max(0, Math.min(1, next));
    video.volume = clamped;
    video.muted = clamped === 0 ? true : false;
    setIsMuted(video.muted);
    setVolume(clamped);
  };

  const handleWheelVolume = (e) => {
    if (!e.ctrlKey && !e.shiftKey && !e.altKey) {
      const delta = e.deltaY > 0 ? -0.05 : 0.05;
      changeVolume(volume + delta);
    }
  };

  const toggleFullscreen = async () => {
    const container = playerContainerRef.current;
    if (!container) return;
    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {}
  };

  const togglePiP = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled) {
        await video.requestPictureInPicture();
      }
    } catch {}
  };

  const toggleCaptions = () => {
    const video = videoRef.current;
    if (!video) return;
    const tracks = video.textTracks;
    if (!tracks || !tracks[0]) return;
    const next = !captionsEnabled;
    tracks[0].mode = next ? 'showing' : 'hidden';
    setCaptionsEnabled(next);
  };

  const changePlaybackRate = (rate) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const handleKeyDown = (e) => {
    const key = e.key.toLowerCase();
    if ([' ', 'k', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'm', 'f', 'c'].includes(key)) {
      e.preventDefault();
    }
    if (key === ' ' || key === 'k') togglePlay();
    if (key === 'm') toggleMute();
    if (key === 'f') toggleFullscreen();
    if (key === 'c') toggleCaptions();
    if (key === 'arrowleft') {
      const v = videoRef.current; if (v) v.currentTime = Math.max(0, v.currentTime - 5);
    }
    if (key === 'arrowright') {
      const v = videoRef.current; if (v) v.currentTime = Math.min(v.duration || Infinity, v.currentTime + 5);
    }
    if (key === 'arrowup') changeVolume(volume + 0.05);
    if (key === 'arrowdown') changeVolume(volume - 0.05);
    if (/^[0-9]$/.test(key)) {
      const v = videoRef.current; if (v && v.duration) v.currentTime = (parseInt(key, 10) / 10) * v.duration;
    }
  };

  // 3D/параллакс эффекты
  const handleMouseMove = (e) => {
    if (!sectionRef.current || !tiltRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const maxRotate = 8;
    const rotateY = px * maxRotate;
    const rotateX = -py * maxRotate;

    const animate = () => {
      tiltRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      if (bgBlob1Ref.current) bgBlob1Ref.current.style.transform = `translate3d(${px * 30}px, ${py * 30}px, 0)`;
      if (bgBlob2Ref.current) bgBlob2Ref.current.style.transform = `translate3d(${px * -40}px, ${py * -40}px, 0)`;
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
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gradient-to-br from-gray-950 via-black to-red-950 text-white py-20 px-4 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 via-transparent to-yellow-500/20"></div>
      </div>

      <div
        ref={bgBlob1Ref}
        className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"
        aria-hidden
      ></div>
      <div
        ref={bgBlob2Ref}
        className="pointer-events-none absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse [animation-delay:1.2s]"
        aria-hidden
      ></div>

      {/* Лёгкая 3D-сетка */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 60%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 44px 44px, 44px 44px',
          backgroundPosition: 'center, center, center',
          transform: 'translateZ(-200px)'
        }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Заголовок секции */}
        <div className="mb-12 will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
          <div className="inline-flex items-center gap-2 bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-300 font-medium uppercase tracking-wider">Революционное образование</span>
          </div>
          
          <h2
            className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-orange-500 uppercase tracking-wide drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            style={{ transform: 'translateZ(60px)' }}
          >
            Платформа на благо трудящихся
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed" style={{ transform: 'translateZ(40px)' }}>
            Бесплатные знания для пролетариата
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto" style={{ transform: 'translateZ(30px)' }}>
            Присоединяйся к технологической революции уже сегодня
          </p>
        </div>

        {/* Видео контейнер */}
        <div className="relative max-w-5xl mx-auto group will-change-transform" ref={tiltRef} style={{ transformStyle: 'preserve-3d' }}>
          {/* Внешняя рамка с градиентом */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" style={{ transform: 'translateZ(10px)' }}></div>
          
          {/* Основной контейнер видео */}
          <div
            ref={playerContainerRef}
            className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800"
            style={{ transform: 'translateZ(35px)' }}
            onWheel={handleWheelVolume}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Соотношение сторон 16:9 */}
            <div className="relative pb-[56.25%] h-0">
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                poster="/placeholder-video-poster.jpg"
                playsInline
                onClick={togglePlay}
                onDoubleClick={toggleFullscreen}
              >
                <source src={presentationVideo} type="video/mp4" />
                <track kind="subtitles" src="/captions/presentation.vtt" srcLang="ru" label="Русские субтитры" />
                Ваш браузер не поддерживает воспроизведение видео.
              </video>
              
              {/* Оверлей с большой кнопкой воспроизведения */}
              <div 
                className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={togglePlay}
              >
                <button 
                  className="w-24 h-24 bg-red-600/80 hover:bg-red-600 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl border-2 border-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-white" />
                  ) : (
                    <Play className="w-10 h-10 text-white ml-1" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Улучшенная панель управления */}
            <div className="bg-gradient-to-t from-gray-900 to-black/80 p-4">
              {/* Прогресс бар */}
              <div 
                ref={progressRef}
                className="w-full h-2 bg-gray-700 rounded-full mb-4 cursor-pointer group relative"
                onClick={handleProgressClick}
                onMouseMove={handleProgressHover}
                onMouseEnter={handleProgressHover}
                onMouseDown={handleProgressMouseDown}
                onMouseLeave={() => setHoverTime(null)}
              >
                <div
                  className="absolute top-0 left-0 h-full bg-gray-500/50 rounded-full"
                  style={{ width: `${buffered}%` }}
                />
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-yellow-500 rounded-full relative transition-all duration-100"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
                {hoverTime !== null && (
                  <div
                    className="absolute -top-8 z-10 px-2 py-1 text-xs rounded bg-black/80 text-white border border-white/10 pointer-events-none"
                    style={{ left: hoverX, transform: 'translateX(-50%)' }}
                  >
                    {formatTime(hoverTime)}
                  </div>
                )}
              </div>
              
              {/* Контролы */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Кнопка воспроизведения/паузы */}
                  <button 
                    className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                    onClick={togglePlay}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    )}
                  </button>
                  
                  {/* Кнопки пропуска и сброса */}
                  <button 
                    className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                    onClick={skipForward}
                    title="Пропустить 10 секунд"
                  >
                    <SkipForward className="w-5 h-5" />
                  </button>
                  
                  <button 
                    className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                    onClick={resetVideo}
                    title="Начать сначала"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                  
                  {/* Кнопка звука */}
                  <button 
                    className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                    onClick={toggleMute}
                    title={isMuted ? "Включить звук" : "Выключить звук"}
                  >
                    {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  {/* Громкость */}
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => changeVolume(parseFloat(e.target.value))}
                    className="w-24 accent-red-500 cursor-pointer"
                    aria-label="Громкость"
                  />
                  
                  {/* Тайминг */}
                  <div className="text-sm text-gray-400 ml-2">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Скорость воспроизведения */}
                  <div className="relative">
                    <select
                      value={playbackRate}
                      onChange={(e) => changePlaybackRate(parseFloat(e.target.value))}
                      className="bg-white/5 text-gray-200 text-sm rounded px-2 py-1 border border-white/10 hover:border-white/20 focus:outline-none"
                      aria-label="Скорость"
                      title="Скорость"
                    >
                      <option value={0.5}>0.5x</option>
                      <option value={0.75}>0.75x</option>
                      <option value={1}>1x</option>
                      <option value={1.25}>1.25x</option>
                      <option value={1.5}>1.5x</option>
                      <option value={2}>2x</option>
                    </select>
                  </div>

                  {/* Субтитры */}
                  <button
                    className={`text-gray-300 transition-colors duration-200 p-2 rounded hover:bg-white/10 ${captionsEnabled ? 'text-white' : 'hover:text-white'}`}
                    onClick={toggleCaptions}
                    title="Субтитры"
                    aria-pressed={captionsEnabled}
                  >
                    CC
                  </button>

                  {/* PiP */}
                  <button
                    className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded hover:bg-white/10"
                    onClick={togglePiP}
                    title="Картинка-в-картинке"
                  >
                    PiP
                  </button>

                  {/* Полноэкранный режим */}
                  <button 
                    className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                    onClick={toggleFullscreen}
                    title={isFullscreen ? 'Выйти из полноэкранного' : 'Полноэкранный режим'}
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Цитата */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-0 w-16 h-16 text-red-600/20">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-200 italic leading-relaxed pl-20 pr-10">
              "Образование — мощь пролетариата. Да здравствует бесплатное обучение!"
            </blockquote>
            
            <div className="absolute bottom-0 right-0 w-16 h-16 text-red-600/20 transform rotate-180">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <span className="text-red-400 font-medium uppercase tracking-wider text-sm">
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}