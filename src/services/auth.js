// src/services/auth.js
const API_BASE_URL = '/api'; // Используем относительный путь
const ADMIN_TOKEN_KEY = 'admin_token';

export const loginAdmin = async (email, password) => {
  const formData = new FormData();
  formData.append('username', email);
  formData.append('password', password);
  formData.append('grant_type', 'password');

  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { detail: errorText || 'Ошибка входа' };
      }
      throw new Error(errorData.detail || 'Ошибка входа');
    }

    const data = await response.json();
    localStorage.setItem(ADMIN_TOKEN_KEY, data.access_token);
    console.log('Token saved to localStorage:', data.access_token);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Не удалось подключиться к серверу. Проверьте, запущен ли бэкенд.');
    }
    throw error;
  }
};

export const logoutAdmin = () => {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
};

export const isAdminAuthenticated = () => {
  return !!getAdminToken();
};

export const getAdminToken = () => {
  return localStorage.getItem(ADMIN_TOKEN_KEY);
};

// Исправленная функция getCurrentAdmin
export const getCurrentAdmin = async () => {
  const token = getAdminToken();
  console.log('Retrieved token from localStorage:', token);
  
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      }
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', [...response.headers.entries()]);
    
    if (!response.ok) {
      // Если токен недействителен, удаляем его
      if (response.status === 401) {
        localStorage.removeItem(ADMIN_TOKEN_KEY);
      }
      const errorText = await response.text().catch(() => 'Unauthorized');
      console.error('Auth error response:', errorText);
      throw new Error(errorText || 'Invalid token');
    }

    const result = await response.json();
    console.log('Admin data received:', result);
    return result;
  } catch (error) {
    console.error('Fetch error in getCurrentAdmin:', error);
    throw error;
  }
};