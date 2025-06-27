import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CoursePage from './pages/CoursePage'; // 👈 импортируем новую страницу
import LearnCoursePage from './pages/LearnCoursePage';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/course/:slug" element={<CoursePage />} /> {/* 👈 маршрут с параметром */}
        <Route path="/course/:slug/learn" element={<LearnCoursePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);