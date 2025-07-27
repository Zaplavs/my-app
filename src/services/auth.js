// src/services/auth.js

// Используем относительный путь, так как фронтенд и бэкенд served через один домен Nginx
// Nginx проксирует /api/* к FastAPI на localhost:8000
const API_BASE_URL = '/api';
const ADMIN_TOKEN_KEY = 'admin_token';

/**
 * Выполняет вход администратора.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} Данные ответа, включая access_token.
 */
export const loginAdmin = async (email, password) => {
  // Создаем FormData, как того требует OAuth2PasswordRequestForm в FastAPI
  const formData = new FormData();
  formData.append('username', email); // В OAuth2 стандарт имя поля 'username'
  formData.append('password', password);
  formData.append('grant_type', 'password'); // Явно указываем grant_type

  try {
    console.log(`[Auth] Attempting login for ${email}`);
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      // Не устанавливаем Content-Type header для FormData!
      // Браузер сам установит правильный boundary.
      body: formData,
    });

    console.log(`[Auth] Login response status: ${response.status}`);

    if (!response.ok) {
      let errorMessage = 'Ошибка входа';
      try {
        // Пытаемся получить детали ошибки от сервера
        const errorData = await response.json();
        errorMessage = errorData.detail || errorMessage;
        console.error(`[Auth] Login error from server:`, errorData);
      } catch (parseError) {
        // Если не JSON, попробуем получить текст
        const errorText = await response.text();
        errorMessage = errorText || errorMessage;
        console.error(`[Auth] Login error text:`, errorText);
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log(`[Auth] Login successful for ${email}`);
    
    // Сохраняем токен в localStorage
    localStorage.setItem(ADMIN_TOKEN_KEY, data.access_token);
    return data;
  } catch (error) {
    console.error('[Auth] Fetch error during login:', error);
    // Улучшенная обработка сетевых ошибок
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Не удалось подключиться к серверу. Проверьте соединение и работу бэкенда.');
    }
    // Перебрасываем любую другую ошибку (включая те, что мы сами создали с сообщением)
    throw error;
  }
};

/**
 * Выполняет выход администратора.
 */
export const logoutAdmin = () => {
  console.log('[Auth] Logging out');
  localStorage.removeItem(ADMIN_TOKEN_KEY);
};

/**
 * Проверяет, аутентифицирован ли пользователь (проверяет наличие токена).
 * @returns {boolean}
 */
export const isAdminAuthenticated = () => {
  return !!getAdminToken();
};

/**
 * Получает токен доступа из localStorage.
 * @returns {string|null}
 */
export const getAdminToken = () => {
  return localStorage.getItem(ADMIN_TOKEN_KEY);
};

/**
 * Получает информацию о текущем администраторе, используя сохраненный токен.
 * @returns {Promise<Object>} Данные администратора.
 */
export const getCurrentAdmin = async () => {
  const token = getAdminToken();

  if (!token) {
    console.warn('[Auth] No token found when trying to get current admin');
    throw new Error('Токен аутентификации не найден. Пожалуйста, войдите снова.');
  }

  try {
    console.log('[Auth] Fetching current admin info');
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        // Не устанавливаем Content-Type для GET запроса
      },
    });

    console.log(`[Auth] Current admin response status: ${response.status}`);

    if (!response.ok) {
      let errorMessage = 'Ошибка аутентификации';
      if (response.status === 401) {
        // Если 401 Unauthorized, токен недействителен или истек
        console.warn('[Auth] Token invalid or expired, removing it');
        localStorage.removeItem(ADMIN_TOKEN_KEY);
        errorMessage = 'Сессия истекла. Пожалуйста, войдите снова.';
      } else {
        try {
          const errorData = await response.json();
          errorMessage = errorData.detail || errorMessage;
          console.error(`[Auth] Error fetching admin info:`, errorData);
        } catch (parseError) {
          const errorText = await response.text();
          errorMessage = errorText || errorMessage;
          console.error(`[Auth] Error text:`, errorText);
        }
      }
      throw new Error(errorMessage);
    }

    const adminData = await response.json();
    console.log('[Auth] Successfully fetched current admin info');
    return adminData;
  } catch (error) {
    console.error('[Auth] Fetch error in getCurrentAdmin:', error);
    // Улучшенная обработка сетевых ошибок
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Не удалось подключиться к серверу для проверки сессии.');
    }
    // Перебрасываем любую другую ошибку
    throw error;
  }
};