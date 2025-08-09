import React from 'react';
import { Route } from 'react-router-dom';

// Макет и загрузчик
import MainLayout from '../components/MainLayout';
import PageLoader from '../components/PageLoader';

// Основные страницы
const App = React.lazy(() => import('../App'));
const RoadmapPage = React.lazy(() => import('../pages/RoadmapPage'));
const LearnCoursePage = React.lazy(() => import('../pages/LearnCoursePage'));
const LessonPage = React.lazy(() => import('../pages/LessonPage'));
const CourseCollectionPage = React.lazy(() => import('../pages/CourseCollectionPage'));
const HelpPage = React.lazy(() => import('../pages/HelpPage'));
const InterviewQuestionsPage = React.lazy(() => import('../pages/InterviewQuestionsPage'));
const QuizPage = React.lazy(() => import('../pages/QuizPage'));
const CodeChallengePage = React.lazy(() => import('../pages/CodeChallengePage'));
const GamePage = React.lazy(() => import('../pages/GamePage'));
const BugHuntGame = React.lazy(() => import('../pages/BugHuntGamePage'));

// Политика и условия
const Privacy = React.lazy(() => import('../pages/privacy'));
const Terms = React.lazy(() => import('../pages/terms'));

export const publicRoutes = [
  { path: "/", element: <MainLayout><App /></MainLayout> },
  { path: "/roadmap/:tech", element: <MainLayout><RoadmapPage /></MainLayout> },
  { path: "/course/:slug/learn", element: <MainLayout><LearnCoursePage /></MainLayout> },
  { path: "/course/:slug/learn/:lessonId", element: <MainLayout><LessonPage /></MainLayout> },
  { path: "/courses/:id", element: <MainLayout><CourseCollectionPage /></MainLayout> },
  { path: "/help", element: <MainLayout><HelpPage /></MainLayout> },
  { path: "/interview/:language/:level?", element: <MainLayout><InterviewQuestionsPage /></MainLayout> },
  { path: "/quiz/:language", element: <MainLayout><QuizPage /></MainLayout> },
  { path: "/code-challenge/:language", element: <MainLayout><CodeChallengePage /></MainLayout> },
  { path: "/game", element: <MainLayout><GamePage /></MainLayout> },
  { path: "/privacy", element: <MainLayout><Privacy /></MainLayout> },
  { path: "/terms", element: <MainLayout><Terms /></MainLayout> },
  { path: "game/bug-hunt/:language", element: <MainLayout><BugHuntGame /></MainLayout> },
];

export const renderPublicRoutes = () => (
  <>
    {publicRoutes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
  </>
);