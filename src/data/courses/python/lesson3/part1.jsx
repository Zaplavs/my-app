// src/data/courses/python/lesson3/part1.jsx
import React, { useState } from 'react';
import { Youtube, Music } from 'lucide-react'; // Импортируем только нужные иконки

const Part1 = () => {
  // Состояние для управления активной вкладкой видео
  const [activeVideo, setActiveVideo] = useState('youtube'); // 'youtube' или 'vk'

  // --- Данные для видео ---
  // TODO: Замените эти ID/URL на реальные данные для Урока 3
  const youtubeVideoId = "VIDEO_ID_LESSON_3"; // <<<--- Замените VIDEO_ID_LESSON_3 на ID видео для урока 3 на YouTube
  
  // TODO: Замените этот URL на реальный URL для Урока 3 на VK
  const vkVideoEmbedUrl = "https://vkvideo.ru/video_ext.php?oid=YOUR_OID&id=YOUR_ID&hd=2&autoplay=1"; // <<<--- Замените параметры oid и id
  // -----------------------

  return (
    <div className="space-y-6">
      {/* Секция с видео */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">Видеоурок: Переменные и типы данных</h2> {/* Обновлен заголовок */}
        
        {/* Вкладки для переключения видео */}
        <div className="flex mb-4 border-b border-gray-700">
          <button
            onClick={() => setActiveVideo('youtube')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
              activeVideo === 'youtube'
                ? 'bg-gray-700 text-white border-b-2 border-yellow-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
            }`}
          >
            <Youtube className="w-4 h-4" />
            YouTube
          </button>
          <button
            onClick={() => setActiveVideo('vk')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
              activeVideo === 'vk'
                ? 'bg-gray-700 text-white border-b-2 border-yellow-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
            }`}
          >
            <Music className="w-4 h-4" />
            VK Видео
          </button>
        </div>

        {/* Контейнер для видео */}
        <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden bg-black"> {/* 16:9 Aspect Ratio */}
          {activeVideo === 'youtube' ? (
            // Исправлен src: убраны лишние пробелы
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`} // Убраны пробелы вокруг ${youtubeVideoId}
              title="Видеоурок на YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            // VK Video Embed с обновленным URL
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={vkVideoEmbedUrl} // Используется URL для урока 3
              title="Видеоурок на VK"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <p className="mt-3 text-sm text-gray-400">
          Если одно видео не загружается, попробуйте переключиться на другую вкладку.
        </p>
      </div>
    </div>
  );
};

export default Part1;