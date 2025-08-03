import React from 'react';
import { Route } from 'react-router-dom';

// Макет
import MainLayout from '../components/MainLayout';

// Страницы
const App = React.lazy(() => import('../App'));
const LearnCoursePage = React.lazy(() => import('../pages/LearnCoursePage'));
const LessonPage = React.lazy(() => import('../pages/LessonPage'));
const CourseCollectionPage = React.lazy(() => import('../pages/CourseCollectionPage'));
const HelpPage = React.lazy(() => import('../pages/HelpPage'));
const InterviewQuestionsPage = React.lazy(() => import('../pages/InterviewQuestionsPage'));
const QuizPage = React.lazy(() => import('../pages/QuizPage'));
const CodeChallengePage = React.lazy(() => import('../pages/CodeChallengePage'));
const GamePage = React.lazy(() => import('../pages/GamePage'));
const Privacy = React.lazy(() => import('../pages/privacy'));
const Terms = React.lazy(() => import('../pages/terms'));

const publicRoutes = (
  <>
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
  </>
);

export default publicRoutes;