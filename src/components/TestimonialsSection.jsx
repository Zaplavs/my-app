import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    { id: 1, name: "Иван Петров", role: "Программист-первостроитель", text: "Здесь я научился кодить. Теперь пишу программы для заводов." },
    { id: 2, name: "Ольга Смирнова", role: "Студентка МГУ", text: "Обучение бесплатное и доступное всем. Как и должно быть!" },
    { id: 3, name: "Николай Кузнецов", role: "Инженер", text: "Программирую на JavaScript, поддерживаю технический прогресс." },
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