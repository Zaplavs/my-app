import CourseCard from './CourseCard';

export default function CoursesSection() {
  const courses = [
    { id: 1, title: "HTML", description: "Основы создания сайтов для пролетариата.", level: "Начальный", slug: "html" },
    { id: 2, title: "CSS", description: "Изучи язык для динамических интерфейсов.", level: "Средний", slug: "css" },
    { id: 3, title: "GITHUB", description: "Фронтенд-революция начинается здесь.", level: "Продвинутый", slug: "github" },
  ];

  return (
    <section id="courses" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 uppercase">Наши курсы</h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}