import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
