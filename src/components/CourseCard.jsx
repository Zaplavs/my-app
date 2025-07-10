import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseCard({ title, description, level, slug, icon }) {
  return (
    <Link
      to={`/course/${slug}/learn`}
      className="block group rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl border border-red-700"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-red-700 p-3 rounded-full text-white">{icon}</div>
          <h4 className="text-xl font-bold text-white">{title}</h4>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <span className="inline-block mt-2 text-sm text-red-500 font-semibold uppercase tracking-wide">
          Уровень: {level}
        </span>
      </div>
    </Link>
  );
}