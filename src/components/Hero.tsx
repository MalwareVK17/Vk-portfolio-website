import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Creative workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Creative
              <span className="block text-accent font-display">Designer</span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <p className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Crafting digital experiences that inspire, engage, and transform brands through innovative design solutions.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Button 
              onClick={() => scrollToSection('work')}
              className="bg-gradient-accent text-white font-medium px-8 py-4 text-lg rounded-lg hover:shadow-accent transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-white/10 rounded-full animate-float delay-1000 hidden lg:block"></div>
    </section>
  );
};

export default Hero;