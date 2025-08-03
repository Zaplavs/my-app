import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Стили
import './index.css';

// Загрузчик
import PageLoader from './components/PageLoader';

// Маршруты
import publicRoutes from './routes/publicRoutes';
import adminRoutes from './routes/adminRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {publicRoutes}
          {adminRoutes}
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);