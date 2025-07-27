// src/admin/pages/CoursesListPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
// Импортируем функцию удаления
import { fetchAllCoursesWithCategories, deleteCourse } from '../../services/courseService';

const CoursesListPage = () => {
  const [categoriesWithCourses, setCategoriesWithCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Состояние для отслеживания ID курса, который удаляется
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchAllCoursesWithCategories();
        setCategoriesWithCourses(data);
      } catch (err) {
        console.error("Ошибка загрузки курсов:", err);
        setError("Не удалось загрузить курсы. Пожалуйста, попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  // Функция для обработки удаления курса
  const handleDeleteCourse = async (courseId, courseName) => {
    // Подтверждение действия
    const isConfirmed = window.confirm(`Вы уверены, что хотите удалить курс "${courseName}"? Это действие нельзя отменить.`);
    
    if (isConfirmed) {
      try {
        // Устанавливаем ID удаляемого курса для отображения состояния "удаление"
        setDeletingId(courseId);
        
        // Выполняем запрос на удаление
        await deleteCourse(courseId);
        
        // Обновляем локальное состояние, убирая удаленный курс
        // Это делает UI отзывчивым без необходимости перезагружать все данные
        setCategoriesWithCourses(prevCategories =>
          prevCategories.map(category => ({
            ...category,
            courses: category.courses.filter(course => course.id !== courseId)
          })).filter(category => category.courses.length > 0 || category.title) // Оставляем категории, даже если они пустые
        );
        
        // Показываем сообщение об успешном удалении (опционально)
        // alert('Курс успешно удален!');
        
      } catch (err) {
        console.error('Ошибка удаления курса:', err);
        // Отображаем пользователю ошибку
        alert(`Ошибка при удалении курса: ${err.message || 'Неизвестная ошибка'}`);
      } finally {
        // Сбрасываем состояние удаления
        setDeletingId(null);
      }
    }
  };

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

  if (error) {
    return (
      <AdminLayout>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                {error}
              </p>
            </div>
          </div>
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

        {categoriesWithCourses.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Курсы пока не добавлены.</p>
            <Link to="/admin/courses/create" className="mt-2 text-blue-600 hover:text-blue-800 inline-block">
              Создать первый курс
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {categoriesWithCourses.map((category) => (
              <div key={category.id} className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">{category.title}</h2>
                  <div className="flex space-x-2">
                    {/* Кнопки редактирования/удаления категории можно добавить здесь */}
                    {/* <button className="text-blue-600 hover:text-blue-800 text-sm">Редактировать</button> */}
                    {/* <button className="text-red-600 hover:text-red-800 text-sm">Удалить</button> */}
                  </div>
                </div>
                {category.courses && category.courses.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {category.courses.map((course) => (
                      <li key={course.id} className="p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 truncate">{course.name}</h3>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{course.description}</p>
                          </div>
                          <div className="flex space-x-2 ml-4 flex-shrink-0">
                            <Link
                              to={`/admin/courses/edit/${course.id}`}
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              Редактировать
                            </Link>
                            {/* Кнопка удаления курса */}
                            <button
                              onClick={() => handleDeleteCourse(course.id, course.name)}
                              disabled={deletingId === course.id}
                              className={`text-sm ${
                                deletingId === course.id
                                  ? 'text-gray-400 cursor-not-allowed'
                                  : 'text-red-600 hover:text-red-800'
                              }`}
                            >
                              {deletingId === course.id ? 'Удаление...' : 'Удалить'}
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    В этой категории пока нет курсов.
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default CoursesListPage;