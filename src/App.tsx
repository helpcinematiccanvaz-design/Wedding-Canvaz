import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FeaturedWork from './components/FeaturedWork';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [galleryCategory, setGalleryCategory] = useState('All');

  const handleServiceClick = (category: string) => {
    setGalleryCategory(category);
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-x-hidden selection:bg-brand-gold selection:text-brand-maroon">
      <Navbar />
      <main className="space-y-4 md:space-y-6 bg-brand-ivory p-4 md:p-6">
        <Hero />
        <About />
        <Services onServiceClick={handleServiceClick} />
        <Gallery activeCategory={galleryCategory} onCategoryChange={setGalleryCategory} />
        <FeaturedWork />
        <Testimonials />
        <Process />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
