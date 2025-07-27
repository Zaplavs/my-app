// src/services/courseService.js
import { getAdminToken } from './auth'; // Импортируем для получения токена в защищенных запросах

// Используем относительный путь, так как фронтенд и бэкенд served через один домен Nginx
const API_BASE_URL = '/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    let errorMessage = `Ошибка HTTP: ${response.status}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.detail || errorMessage;
    } catch (e) {
      // Игнорируем ошибку парсинга, если тело не JSON
    }
    throw new Error(errorMessage);
  }
  // Для DELETE с 204 No Content
  if (response.status === 204) {
    return null;
  }
  return await response.json();
};

// --- Категории курсов ---

/**
 * Получить список всех категорий
 * @returns {Promise<Array>}
 */
export const fetchCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/courses/categories/`);
  return handleResponse(response);
};

/**
 * Создать новую категорию
 * @param {Object} categoryData - Данные категории {title: string}
 * @returns {Promise<Object>}
 */
export const createCategory = async (categoryData) => {
  const token = getAdminToken();
  if (!token) {
    throw new Error('Пользователь не аутентифицирован');
  }

  const response = await fetch(`${API_BASE_URL}/courses/categories/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(categoryData),
  });
  return handleResponse(response);
};

/**
 * Обновить категорию
 * @param {number} categoryId - ID категории
 * @param {Object} categoryData - Новые данные {title: string}
 * @returns {Promise<Object>}
 */
export const updateCategory = async (categoryId, categoryData) => {
  const token = getAdminToken();
  if (!token) {
    throw new Error('Пользователь не аутентифицирован');
  }

  const response = await fetch(`${API_BASE_URL}/courses/categories/${categoryId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(categoryData),
  });
  return handleResponse(response);
};

/**
 * Удалить категорию
 * @param {number} categoryId - ID категории
 */
export const deleteCategory = async (categoryId) => {
  const token = getAdminToken();
  if (!token) {
    throw new Error('Пользователь не аутентифицирован');
  }

  const response = await fetch(`${API_BASE_URL}/courses/categories/${categoryId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return handleResponse(response);
};

// --- Курсы ---

/**
 * Получить все категории курсов с курсами внутри (для отображения на главной)
 * @returns {Promise<Array>}
 */
export const fetchAllCoursesWithCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/courses/with-courses/`);
  return handleResponse(response);
};

/**
 * Получить список всех курсов
 * @returns {Promise<Array>}
 */
export const fetchCourses = async () => {
  const response = await fetch(`${API_BASE_URL}/courses/`);
  return handleResponse(response);
};

/**
 * Создать новый курс
 * @param {number} categoryId - ID категории, к которой принадлежит курс
 * @param {Object} courseData - Данные курса {name, link, description, image}
 * @returns {Promise<Object>}
 */
export const createCourse = async (categoryId, courseData) => {
  const token = getAdminToken();
  if (!token) {
    throw new Error('Пользователь не аутентифицирован');
  }

  const response = await fetch(`${API_BASE_URL}/courses/?category_id=${categoryId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(courseData),
  });
  return handleResponse(response);
};

/**
 * Обновить курс
 * @param {number} courseId - ID курса
 * @param {Object} courseData - Новые данные курса
 * @returns {Promise<Object>}
 */
export const updateCourse = async (courseId, courseData) => {
  const token = getAdminToken();
  if (!token) {
    throw new Error('Пользователь не аутентифицирован');
  }

  const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(courseData),
  });
  return handleResponse(response);
};

/**
 * Удалить курс
 * @param {number} courseId - ID курса
 */
export const deleteCourse = async (courseId) => {
  const token = getAdminToken();
  if (!token) {
    throw new Error('Пользователь не аутентифицирован');
  }

  const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return handleResponse(response);
};