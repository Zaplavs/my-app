import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LearnCoursePage from './pages/LearnCoursePage';
import LessonPage from './pages/LessonPage';
import CourseCollectionPage from './pages/CourseCollectionPage';
import HelpPage from './pages/HelpPage';
import InterviewQuestionsPage from './pages/InterviewQuestionsPage';
import QuizPage from './pages/QuizPage'; // Уже есть
import CodeChallengePage from './pages/CodeChallengePage'; // Новая страница
import GamePage from './pages/GamePage';
import MainLayout from './components/MainLayout'; // Импортируем ваш макет

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><App /></MainLayout>} />

        {/* Курсы */}
        <Route path="/course/:slug/learn" element={<MainLayout><LearnCoursePage /></MainLayout>} />
        <Route path="/course/:slug/learn/:lessonId" element={<MainLayout><LessonPage /></MainLayout>} />
        <Route path="/courses/:id" element={<MainLayout><CourseCollectionPage /></MainLayout>} />

        {/* Помощь и собеседования */}
        <Route path="/help" element={<MainLayout><HelpPage /></MainLayout>} />
        <Route path="/interview/:language/:level?" element={<MainLayout><InterviewQuestionsPage /></MainLayout>} />

        {/* Викторина */}
        <Route path="/quiz/:language" element={<MainLayout><QuizPage /></MainLayout>} />

        {/* Code Challenge */}
        <Route path="/code-challenge/:language" element={<MainLayout><CodeChallengePage /></MainLayout>} />
        {/* Игра */}
        <Route path="/game" element={<MainLayout><GamePage /></MainLayout>} />
      </Routes>
    </Router>
  </React.StrictMode>
);