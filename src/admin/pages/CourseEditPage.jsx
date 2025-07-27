// admin/pages/CourseEditPage.jsx
import React, { useState, useEffect } from 'react';
import { getCourseById, updateCourse } from '../../services/courseService';

const CourseEditPage = ({ courseId }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const course = await getCourseById(courseId);
        setFormData(course);
      } catch (error) {
        console.error('Ошибка получения курса:', error);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCourse(courseId, formData);
      alert('Курс успешно обновлен!');
    } catch (error) {
      console.error('Ошибка обновления курса:', error);
      alert('Ошибка при обновлении курса.');
    }
  };

  if (!formData) {
    return <div>Загрузка курса...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Название:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Ссылка:
        <input type="text" name="link" value={formData.link} onChange={handleChange} />
      </label>
      <label>
        Описание:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Изображение:
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
      </label>
      <button type="submit">Обновить курс</button>
    </form>
  );
};

export default CourseEditPage;