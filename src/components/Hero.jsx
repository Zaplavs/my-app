import { ArrowRight, Users, Code, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-black text-white overflow-hidden">
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/30 via-transparent to-yellow-500/30"></div>
      </div>
      
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Бейдж статуса */}
          <div className="inline-flex items-center gap-2 bg-red-900/30 backdrop-blur-sm border border-red-800/50 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-300 font-medium uppercase tracking-wider">Бесплатное обучение</span>
          </div>
          
          {/* Заголовок */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            Программирование — <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              для всех!
            </span>
          </h1>
          
          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Обучайся бесплатно, стань разработчиком и создавай технологии будущего
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Присоединяйся к сообществу программистов уже сегодня
          </p>
          
          {/* Кнопка действия (только вступить в сообщество) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/+zfZu_RsO_skwMTAy"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30 w-full sm:w-auto justify-center"
            >
              <span>Вступить в сообщество</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Убрал блок с донатами и уведомление о пожертвованиях */}
          
          {/* Статистика */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400">
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