import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, SkipForward } from 'lucide-react';
import presentationVideo from '/videos/Hello_1_V.mp4';

export default function PresentationSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateProgress = () => {
        const progress = (video.currentTime / video.duration) * 100;
        setProgress(isNaN(progress) ? 0 : progress);
        setCurrentTime(video.currentTime);
      };

      const setVideoDuration = () => {
        setDuration(video.duration);
      };

      video.addEventListener('timeupdate', updateProgress);
      video.addEventListener('loadedmetadata', setVideoDuration);
      video.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        video.removeEventListener('timeupdate', updateProgress);
        video.removeEventListener('loadedmetadata', setVideoDuration);
        video.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
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
      }
    }
  };

  const skipForward = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = Math.min(video.currentTime + 10, video.duration);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-red-950 text-white py-20 px-4 overflow-hidden">
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 via-transparent to-yellow-500/20"></div>
      </div>
      
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Заголовок секции */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-300 font-medium uppercase tracking-wider">Революционное образование</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-orange-500 uppercase tracking-wide">
            Платформа на благо трудящихся
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            Бесплатные знания для пролетариата
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Присоединяйся к технологической революции уже сегодня
          </p>
        </div>

        {/* Видео контейнер */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Внешняя рамка с градиентом */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          
          {/* Основной контейнер видео */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800">
            {/* Соотношение сторон 16:9 */}
            <div className="relative pb-[56.25%] h-0">
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                poster="/placeholder-video-poster.jpg"
              >
                <source src={presentationVideo} type="video/mp4" />
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
                className="w-full h-2 bg-gray-700 rounded-full mb-4 cursor-pointer group"
                onClick={handleProgressClick}
              >
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-yellow-500 rounded-full relative transition-all duration-100"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
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
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  
                  {/* Тайминг */}
                  <div className="text-sm text-gray-400 ml-2">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>
                
                {/* Кнопка полноэкранного режима */}
                <button 
                  className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                  title="Полноэкранный режим"
                >
                  <Maximize className="w-5 h-5" />
                </button>
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