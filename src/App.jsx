import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import CoursesSection from './components/CoursesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}