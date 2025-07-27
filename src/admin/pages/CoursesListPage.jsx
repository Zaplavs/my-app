// src/admin/pages/CoursesListPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';

const CoursesListPage = () => {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Пока заглушка - позже заменим на API вызов
    const mockCourses = {
      "1": {
        title: "Python",
        courses: [
          { name: "Курс 1", description: "Описание курса 1" },
          { name: "Курс 2", description: "Описание курса 2" }
        ]
      },
      "2": {
        title: "JavaScript",
        courses: [
          { name: "Курс 3", description: "Описание курса 3" }
        ]
      }
    };
    
    setCourses(mockCourses);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Загрузка курсов...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Управление курсами</h1>
          <Link
            to="/admin/courses/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Добавить курс
          </Link>
        </div>

        <div className="space-y-6">
          {Object.entries(courses).map(([id, category]) => (
            <div key={id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{category.title}</h2>
                <div className="space-x-2">
                  <Link
                    to={`/admin/courses/${id}/edit`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Редактировать
                  </Link>
                  <button
                    onClick={() => {
                      if (window.confirm('Вы уверены, что хотите удалить эту категорию?')) {
                        // Здесь будет логика удаления
                        console.log('Delete category', id);
                      }
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    Удалить
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.courses.map((course, index) => (
                  <div key={index} className="border rounded p-3">
                    <h3 className="font-medium">{course.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default CoursesListPage;