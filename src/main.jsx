import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Стили
import './index.css';
import './styles/cursor.css';

// Роуты
import AppRoutes from './routes';
import CustomCursor from './components/CustomCursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CustomCursor />
      <AppRoutes />
    </Router>
  </React.StrictMode>
);