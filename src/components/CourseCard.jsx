import { Link } from 'react-router-dom';

export default function CourseCard({ title, description, level, slug }) {
  return (
    <Link
      to={`/course/${slug}`}
      className="block bg-gray-800 border border-red-700 rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <img src="https://placehold.co/400x200?text=Курс" alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <span className="inline-block bg-red-900 text-red-100 text-xs px-2 py-1 rounded-full mb-2 uppercase">{level}</span>
        <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">{title}</h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </Link>
  );
}