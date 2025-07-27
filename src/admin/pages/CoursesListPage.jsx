// admin/pages/CoursesListPage.jsx
import React, { useEffect, useState } from 'react';
import { fetchAllCoursesWithCategories } from '../../services/courseService';

const CoursesListPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCoursesWithCategories();
        setCategories(data);
      } catch (error) {
        console.error("Ошибка загрузки курсов:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) {
    return <div>Загрузка курсов...</div>;
  }

  return (
    <div>
      <h1>Список курсов</h1>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.title}</h2>
          <ul>
            {category.courses.map((course) => (
              <li key={course.id}>{course.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CoursesListPage;