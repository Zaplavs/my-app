// src/data/courses/python/lesson3/part1.jsx
import React, { useState } from 'react';
import { Youtube, Music } from 'lucide-react';

const Part1 = () => {
  // Исправлено: деструктуризация обеих переменных
  const [activeVideo, setActiveVideo] = useState('youtube'); // 'youtube' или 'vk'

  // YouTube Video ID из ссылки: https://youtu.be/geuTKe00Vcs
  const youtubeVideoId = "geuTKe00Vcs";

  // Ссылка для встраивания видео с VK
  const vkVideoEmbedUrl = "https://vkvideo.ru/video_ext.php?oid=-185944841&id=456239030&hd=2&autoplay=1";

  return (
    <div className="space-y-6">
      {/* Секция с видео */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">Видеоурок: Переменные и типы данных</h2>

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

        {/* Контейнер для видео (16:9) */}
        <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden bg-black">
          {activeVideo === 'youtube' ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="Видеоурок на YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={vkVideoEmbedUrl}
              title="Видеоурок на VK"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
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