import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import CoursesSection from './components/CoursesSection';
import CourseCollectionsSection from './components/CourseCollectionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import PresentationSection from './components/PresentationSection'; // Новый компонент

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <PresentationSection /> {/* Новая секция с видео */}  
      <FeaturesSection />
      <CoursesSection />
      <CourseCollectionsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}