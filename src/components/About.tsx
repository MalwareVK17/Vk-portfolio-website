import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h2 className="font-display text-5xl font-bold text-primary mb-8">
              About Me
            </h2>
            <p className="font-body text-lg text-foreground/80 mb-6 leading-relaxed">
              I’m a versatile Mobile App Developer, UI/UX Designer, and Backend Web Developer, passionate about building complete digital solutions — from clean,
              user-friendly interfaces to robust backend systems.With a strong foundation in app development and backend technologies, 
              I help businesses and startups turn ideas into functional, modern, and scalable applications. As a freelancer, I provide end-to-end services: from designing the user experience, 
              to developing the app or website, and deploying the backend infrastructure.
            </p>
            <p className="font-body text-lg text-foreground/80 mb-8 leading-relaxed">
              I believe great design is not just about making things look beautiful—it's about 
              solving problems, creating connections, and driving meaningful impact for businesses 
              and their audiences.To deliver high-quality digital products that not only work great but also look and feel amazing. 
              I aim to help clients succeed by providing reliable, efficient, and creative tech solutions — all under one roof.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-3">5+</h3>
                <p className="font-body text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-3">5+</h3>
                <p className="font-body text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-primary rounded-3xl shadow-elegant relative overflow-hidden">
                <div className="absolute inset-4 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">Design Excellence</h3>
                    <p className="font-body text-sm opacity-90">Award-winning creative solutions</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-10 animate-float delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
