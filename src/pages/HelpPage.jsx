import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpCircle, MessageSquare, Users, ArrowRight, Shield } from 'lucide-react';

export default function HelpPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-900/30 to-blue-900/30 backdrop-blur-sm border border-red-800/30 rounded-full px-6 py-2 mb-8">
              <HelpCircle className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-medium uppercase tracking-wider">Поддержка пользователей</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 uppercase tracking-wider">
              Как получить помощь
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Если у вас возникли трудности — не волнуйтесь. Помощь всегда рядом.
              Следуйте этим простым указаниям и вы получите поддержку.
            </p>
          </div>

          {/* Шаги получения помощи */}
          <div className="space-y-6 mb-16">
            {[
              {
                step: 1,
                title: "Перейдите в Telegram группу",
                description: "Присоединяйтесь к нашему сообществу для получения помощи",
                icon: <Users className="w-6 h-6" />,
                link: "https://t.me/+zfZu_RsO_skwMTAy",
                linkText: "Telegram группа \"Коммунист Этичный Хакер\""
              },
              {
                step: 2,
                title: "Найдите кнопку обсуждения",
                description: "Войдите в канал и нажмите на три точки (⋮) в правом верхнем углу",
                icon: <MessageSquare className="w-6 h-6" />
              },
              {
                step: 3,
                title: "Откройте чат канала",
                description: "Выберите пункт \"Обсуждение\" или \"Чат канала\"",
                icon: <Shield className="w-6 h-6" />
              },
              {
                step: 4,
                title: "Задайте свой вопрос",
                description: "Подробно опишите проблему. Вам обязательно ответят в кратчайшие сроки",
                icon: <HelpCircle className="w-6 h-6" />
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-red-600/20 rounded-lg text-red-400">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors duration-200 group"
                      >
                        {item.linkText}
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Призыв к действию */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Готовы получить помощь?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Присоединяйтесь к нашему сообществу из 2,500+ участников и получите поддержку от опытных разработчиков
              </p>
              
              <a
                href="https://t.me/+zfZu_RsO_skwMTAy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/30"
              >
                <span>Перейти в Telegram группу</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            {/* Информация о поддержке */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">Безопасность</h3>
                <p className="text-gray-400 text-sm">Все обращения обрабатываются конфиденциально</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">Быстрый отклик</h3>
                <p className="text-gray-400 text-sm">Среднее время ответа - менее 2 часов</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">Сообщество</h3>
                <p className="text-gray-400 text-sm">Помощь от опытных разработчиков</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}