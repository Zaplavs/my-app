import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
  {
    id: 1,
    name: "Иван Петров",
    role: "Разработчик-начинающий",
    text: "Благодарю команду платформы за возможность учиться бесплатно. Уже пишу свои первые приложения!"
  },
  {
    id: 2,
    name: "Ольга Смирнова",
    role: "Разработчик-начинающий",
    text: "Обучение понятное и полностью бесплатное. Отличная платформа для старта в IT!"
  },
  {
    id: 3,
    name: "Николай Кузнецов",
    role: "Разработчик-начинающий",
    text: "Спасибо разработчикам за доступные курсы и поддержку новичков. Теперь я на пути в профессию мечты."
  },
];

  return (
    <section id="testimonials" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 uppercase">Что говорят товарищи</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}