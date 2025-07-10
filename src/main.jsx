import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LearnCoursePage from './pages/LearnCoursePage';
import LessonPage from './pages/LessonPage';
import CourseCollectionPage from './pages/CourseCollectionPage';
import HelpPage from './pages/HelpPage';
import InterviewQuestionsPage from './pages/InterviewQuestionsPage';
import QuizPage from './pages/QuizPage'; // Импорт нового компонента

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />

        {/* Курсы */}
        <Route path="/course/:slug/learn" element={<LearnCoursePage />} />
        <Route path="/course/:slug/learn/:lessonId" element={<LessonPage />} />
        <Route path="/courses/:id" element={<CourseCollectionPage />} />

        {/* Помощь и собеседования */}
        <Route path="/help" element={<HelpPage />} />
        <Route path="/interview/:language" element={<InterviewQuestionsPage />} />

        {/* Викторина */}
        <Route path="/quiz/:language" element={<QuizPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);