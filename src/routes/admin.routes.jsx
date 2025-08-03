import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';

// Админка
const AdminLoginPage = React.lazy(() => import('../admin/pages/AdminLoginPage'));
const AdminDashboard = React.lazy(() => import('../admin/pages/AdminDashboard'));
const CoursesListPage = React.lazy(() => import('../admin/pages/CoursesListPage'));
const CourseCreatePage = React.lazy(() => import('../admin/pages/CourseCreatePage'));
const CourseEditPage = React.lazy(() => import('../admin/pages/CourseEditPage'));

export const adminRoutes = [
  { path: "/admin/login", element: <AdminLoginPage /> },
  { path: "/admin/dashboard", element: (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  ) },
  { path: "/admin/courses", element: (
    <ProtectedRoute>
      <CoursesListPage />
    </ProtectedRoute>
  ) },
  { path: "/admin/courses/create", element: (
    <ProtectedRoute>
      <CourseCreatePage />
    </ProtectedRoute>
  ) },
  { path: "/admin/courses/edit/:courseId", element: (
    <ProtectedRoute>
      <CourseEditPage />
    </ProtectedRoute>
  ) },
];

export const renderAdminRoutes = () => (
  <>
    {adminRoutes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
  </>
);