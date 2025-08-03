import React from 'react';
import { Route } from 'react-router-dom';

// Компоненты
import AdminLayout from '../admin/layouts/AdminLayout';
import AdminProtectedRoute from '../components/AdminProtectedRoute';

// Админ-страницы
const AdminLoginPage = React.lazy(() => import('../admin/pages/AdminLoginPage'));
const AdminDashboard = React.lazy(() => import('../admin/pages/AdminDashboard'));
const CoursesListPage = React.lazy(() => import('../admin/pages/CoursesListPage'));
const CourseCreatePage = React.lazy(() => import('../admin/pages/CourseCreatePage'));
const CourseEditPage = React.lazy(() => import('../admin/pages/CourseEditPage'));

const adminRoutes = (
  <>
    {/* Публичные админские маршруты */}
    <Route path="/admin/login" element={<AdminLoginPage />} />
    
    {/* Защищённые админские маршруты с вложенной структурой */}
    <Route 
      path="/admin" 
      element={
        <AdminProtectedRoute>
          <AdminLayout />
        </AdminProtectedRoute>
      }
    >
      <Route index element={<AdminDashboard />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="courses" element={<CoursesListPage />} />
      <Route path="courses/create" element={<CourseCreatePage />} />
      <Route path="courses/edit/:courseId" element={<CourseEditPage />} />
    </Route>
  </>
);

export default adminRoutes;