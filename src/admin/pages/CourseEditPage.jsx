// src/admin/pages/CourseEditPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import { updateCourse, fetchCourses, fetchCategories } from '../../services/courseService'; // Предполагаемые сервисы

const CourseEditPage = () => {
  const { courseId } = useParams(); // Получаем ID курса из URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    description: '',
    image: '',
    category_id: '',
  });
  const [originalCourse, setOriginalCourse] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Для начальной загрузки
  const [saving, setSaving] = useState(false); // Для сохранения
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Загружаем список категорий
        const cats = await fetchCategories();
        setCategories(cats);

        // Загружаем данные курса
        const allCourses = await fetchCourses(); // Предполагаем, что fetchCourses возвращает все курсы
        // Или можно создать отдельный сервис fetchCourseById
        const courseToEdit = allCourses.find(course => course.id === parseInt(courseId, 10));

        if (!courseToEdit) {
          throw new Error("Курс не найден.");
        }

        setOriginalCourse(courseToEdit);
        // Заполняем форму данными курса
        setFormData({
          name: courseToEdit.name,
          link: courseToEdit.link,
          description: courseToEdit.description,
          image: courseToEdit.image || '', // Убедимся, что null становится ''
          category_id: courseToEdit.category_id.toString(), // Преобразуем в строку для select
        });
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
        setError(err.message || "Не удалось загрузить данные курса.");
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      loadData();
    } else {
      setError("ID курса не указан.");
      setLoading(false);
    }
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      // Проверим, изменились ли данные
      const isChanged = Object.keys(formData).some(key => formData[key] !== (originalCourse[key]?.toString() || ''));
      if (!isChanged) {
        setSuccess(true);
        setSaving(false);
        return; // Нет изменений, ничего не делаем
      }

      // Подготовим данные курса
      const courseDataToUpdate = { ...formData };
      // Убедимся, что category_id - это число
      courseDataToUpdate.category_id = parseInt(courseDataToUpdate.category_id, 10);

      await updateCourse(parseInt(courseId, 10), courseDataToUpdate);
      setSuccess(true);
      // Можно обновить originalCourse или просто перенаправить
      // navigate('/admin/courses'); // Перенаправляем на список курсов
    } catch (err) {
      console.error('Ошибка обновления курса:', err);
      setError(err.message || 'Не удалось обновить курс.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Загрузка данных курса...</p>
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
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Редактировать курс</h1>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
            Курс успешно обновлен!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Название курса *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="category_id" className="block text-sm font-medium text-gray-700 mb-1">
              Категория *
            </label>
            <select
              id="category_id"
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Выберите категорию</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">
              Ссылка на курс *
            </label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
              placeholder="https://example.com/course"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Описание *
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              URL изображения (опционально)
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => navigate('/admin/courses')}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Отмена
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {saving ? 'Сохранение...' : 'Сохранить изменения'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CourseEditPage;