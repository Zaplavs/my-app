import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import CoursesSection from './components/CoursesSection';
import CourseCollectionsSection from './components/CourseCollectionsSection'; // Новый компонент
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <CoursesSection />
      <CourseCollectionsSection /> {/* Новый раздел */}
      <TestimonialsSection />
      <Footer />
    </>
  );
}