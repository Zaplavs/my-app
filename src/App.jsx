import React from 'react';

// Компоненты из папок
import Header from './components/Header';
import Hero from './components/Hero';
import PresentationSection from './components/PresentationSection';
import FeaturesSection from './components/FeaturesSection';
import CoursesSection from './components/CoursesSection';
import CourseCollectionsSection from './components/CourseCollectionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import InterviewQuestionsSection from './components/InterviewQuestionsSection';
import QuizSection from './components/QuizSection'; // Новая секция
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <PresentationSection />
      <FeaturesSection />
      <CoursesSection />
      <CourseCollectionsSection />
      <InterviewQuestionsSection />
      <QuizSection /> {/* Викторина */}
      <TestimonialsSection />
      <Footer />
    </>
  );
}