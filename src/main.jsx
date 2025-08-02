import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Стили
import './index.css';

// Макет и загрузчик
import MainLayout from './components/MainLayout';
import PageLoader from './components/PageLoader';

// Админка
const AdminLoginPage = React.lazy(() => import('./admin/pages/AdminLoginPage'));
const AdminDashboard = React.lazy(() => import('./admin/pages/AdminDashboard'));
const CoursesListPage = React.lazy(() => import('./admin/pages/CoursesListPage'));
const CourseCreatePage = React.lazy(() => import('./admin/pages/CourseCreatePage'));
const CourseEditPage = React.lazy(() => import('./admin/pages/CourseEditPage'));

// Основные страницы
const App = React.lazy(() => import('./App'));
const LearnCoursePage = React.lazy(() => import('./pages/LearnCoursePage'));
const LessonPage = React.lazy(() => import('./pages/LessonPage'));
const CourseCollectionPage = React.lazy(() => import('./pages/CourseCollectionPage'));
const HelpPage = React.lazy(() => import('./pages/HelpPage'));
const InterviewQuestionsPage = React.lazy(() => import('./pages/InterviewQuestionsPage'));
const QuizPage = React.lazy(() => import('./pages/QuizPage'));
const CodeChallengePage = React.lazy(() => import('./pages/CodeChallengePage'));
const GamePage = React.lazy(() => import('./pages/GamePage'));

// Политика и условия
const Privacy = React.lazy(() => import('./pages/privacy'));
const Terms = React.lazy(() => import('./pages/terms'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Публичные страницы */}
          <Route path="/" element={<MainLayout><App /></MainLayout>} />
          <Route path="/course/:slug/learn" element={<MainLayout><LearnCoursePage /></MainLayout>} />
          <Route path="/course/:slug/learn/:lessonId" element={<MainLayout><LessonPage /></MainLayout>} />
          <Route path="/courses/:id" element={<MainLayout><CourseCollectionPage /></MainLayout>} />
          <Route path="/help" element={<MainLayout><HelpPage /></MainLayout>} />
          <Route path="/interview/:language/:level?" element={<MainLayout><InterviewQuestionsPage /></MainLayout>} />
          <Route path="/quiz/:language" element={<MainLayout><QuizPage /></MainLayout>} />
          <Route path="/code-challenge/:language" element={<MainLayout><CodeChallengePage /></MainLayout>} />
          <Route path="/game" element={<MainLayout><GamePage /></MainLayout>} />
          <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
          <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />

          {/* Админка */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/courses" element={<CoursesListPage />} />
          <Route path="/admin/courses/create" element={<CourseCreatePage />} />
          <Route path="/admin/courses/edit/:courseId" element={<CourseEditPage />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);