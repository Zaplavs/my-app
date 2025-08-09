// src/App.jsx
import React from 'react';

// Компоненты
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import PresentationSection from './components/PresentationSection';
import RoadmapSection from './components/RoadmapSection';
import CoursesSection from './components/CoursesSection';
import CourseCollectionsSection from './components/CourseCollectionsSection';
import InterviewQuestionsSection from './components/InterviewQuestionsSection';
import Footer from './components/Footer';
import HelpButton from './components/HelpButton'; // Импортируем кнопку
import GameSection from './components/GameSection';

export default function App() {
  return (
    <>
      <CustomCursor />
      <HelpButton /> {/* Кнопка справа */}
      <Header />
      <Hero />
      <PresentationSection />
      <RoadmapSection />
      <CoursesSection />
      <CourseCollectionsSection />
      <InterviewQuestionsSection />
      <GameSection />
      <Footer />
    </>
  );
}