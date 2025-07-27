// admin/pages/CourseCreatePage.jsx
import React, { useState } from 'react';
import { createCourse } from '../../services/courseService';

const CourseCreatePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const categoryId = 1; // Пример ID категории (замените на реальный)
      await createCourse(categoryId, formData);
      alert('Курс успешно создан!');
    } catch (error) {
      console.error('Ошибка создания курса:', error);
      alert('Ошибка при создании курса.');
    }
  };

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
      <button type="submit">Создать курс</button>
    </form>
  );
};

export default CourseCreatePage;