import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { renderPublicRoutes } from './public.routes';
import { renderAdminRoutes } from './admin.routes';
import PageLoader from '../components/PageLoader';

export default function AppRoutes() {
  return (
    <React.Suspense fallback={<PageLoader />}>
      <Routes>
        {renderPublicRoutes()}
        {renderAdminRoutes()}
      </Routes>
    </React.Suspense>
  );
}