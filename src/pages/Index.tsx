
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
