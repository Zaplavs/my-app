// src/App.jsx
import React from 'react';

// Компоненты
import Header from './components/Header';
import Hero from './components/Hero';
import PresentationSection from './components/PresentationSection';
import FeaturesSection from './components/FeaturesSection';
import CoursesSection from './components/CoursesSection';
import CourseCollectionsSection from './components/CourseCollectionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import InterviewQuestionsSection from './components/InterviewQuestionsSection';
import QuizSection from './components/QuizSection';
import CodeChallengeSection from './components/CodeChallengeSection';
import Footer from './components/Footer';
import HelpButton from './components/HelpButton'; // Импортируем кнопку

export default function App() {
  return (
    <>
      <HelpButton /> {/* Кнопка справа */}
      <Header />
      <Hero />
      <PresentationSection />
      <FeaturesSection />
      <CoursesSection />
      <CourseCollectionsSection />
      <InterviewQuestionsSection />
      <QuizSection />
      <CodeChallengeSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}