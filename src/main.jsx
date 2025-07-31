import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Основные страницы
import App from './App';
import LearnCoursePage from './pages/LearnCoursePage';
import LessonPage from './pages/LessonPage';
import CourseCollectionPage from './pages/CourseCollectionPage';
import HelpPage from './pages/HelpPage';
import InterviewQuestionsPage from './pages/InterviewQuestionsPage';
import QuizPage from './pages/QuizPage';
import CodeChallengePage from './pages/CodeChallengePage';
import GamePage from './pages/GamePage';

// Политика и условия
import Privacy from './pages/Privacy'; // ← Новая страница
import Terms from './pages/Terms';     // ← Новая страница

// Макет
import MainLayout from './components/MainLayout';

// Админка
import AdminLoginPage from './admin/pages/AdminLoginPage';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminProtectedRoute from './admin/pages/AdminProtectedRoute';
import CoursesListPage from './admin/pages/CoursesListPage';
import CourseCreatePage from './admin/pages/CourseCreatePage';
import CourseEditPage from './admin/pages/CourseEditPage';

// Стили
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Публичные страницы с общей обёрткой MainLayout */}
        <Route path="/" element={<MainLayout><App /></MainLayout>} />
        
        {/* Курсы */}
        <Route path="/course/:slug/learn" element={<MainLayout><LearnCoursePage /></MainLayout>} />
        <Route path="/course/:slug/learn/:lessonId" element={<MainLayout><LessonPage /></MainLayout>} />
        <Route path="/courses/:id" element={<MainLayout><CourseCollectionPage /></MainLayout>} />

        {/* Поддержка и собеседования */}
        <Route path="/help" element={<MainLayout><HelpPage /></MainLayout>} />
        <Route path="/interview/:language/:level?" element={<MainLayout><InterviewQuestionsPage /></MainLayout>} />

        {/* Интерактив */}
        <Route path="/quiz/:language" element={<MainLayout><QuizPage /></MainLayout>} />
        <Route path="/code-challenge/:language" element={<MainLayout><CodeChallengePage /></MainLayout>} />
        <Route path="/game" element={<MainLayout><GamePage /></MainLayout>} />

        {/* Политика и условия */}
        <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />

        {/* Админка — без MainLayout */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          } 
        />
        <Route 
          path="/admin/courses" 
          element={
            <AdminProtectedRoute>
              <CoursesListPage />
            </AdminProtectedRoute>
          } 
        />
        <Route 
          path="/admin/courses/create" 
          element={
            <AdminProtectedRoute>
              <CourseCreatePage />
            </AdminProtectedRoute>
          } 
        />
        <Route 
          path="/admin/courses/edit/:courseId" 
          element={
            <AdminProtectedRoute>
              <CourseEditPage />
            </AdminProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  </React.StrictMode>
);