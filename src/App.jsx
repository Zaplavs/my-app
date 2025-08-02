// src/App.jsx
import React from 'react';

// Компоненты
import Header from './components/Header';
import Hero from './components/Hero';
import PresentationSection from './components/PresentationSection';
import FeaturesSection from './components/FeaturesSection';
import CoursesSection from './components/CoursesSection';
import CourseCollectionsSection from './components/CourseCollectionsSection';
import InterviewQuestionsSection from './components/InterviewQuestionsSection';
import Footer from './components/Footer';
import HelpButton from './components/HelpButton'; // Импортируем кнопку
import GameSection from './components/GameSection';

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
      <GameSection />
      <Footer />
    </>
  );
}