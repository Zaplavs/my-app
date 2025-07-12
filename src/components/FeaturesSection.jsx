import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-transparent bg-clip-text">
          Товарищи, почему мы?
        </h3>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Наши преимущества, которые помогут вам стать частью технологического будущего.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <svg className="w-12 h-12 text-yellow-400" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                   strokeLinejoin="round">
                <path d="M12 6v6l4 2"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            }
            title="Бесплатно"
            description="Все курсы доступны бесплатно, как и положено в справедливом обществе."
          />
          <FeatureCard
            icon={
              <svg className="w-12 h-12 text-yellow-400" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                   strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="3" x2="16" y2="21"></line>
              </svg>
            }
            title="Практика"
            description="Учись решать задачи и создавать приложения для блага народа."
          />
          <FeatureCard
            icon={
              <svg className="w-12 h-12 text-yellow-400" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                   strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
            title="Единство"
            description="Объединяйся с товарищами в борьбе за знания и развитие технологий!"
          />
        </div>
      </div>
    </section>
  );
}