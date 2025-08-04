import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-commerce Platform Redesign",
      category: "UI/UX Design",
      description: "Complete redesign of a major e-commerce platform resulting in 40% increase in conversions.",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "Brand Identity System",
      category: "Branding",
      description: "Comprehensive brand identity for a tech startup including logo, guidelines, and marketing materials.",
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "Mobile App Interface",
      category: "Mobile Design",
      description: "Intuitive mobile app design for a fitness platform with seamless user experience.",
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      title: "Web Application Dashboard",
      category: "Dashboard Design",
      description: "Complex data visualization dashboard for enterprise analytics platform.",
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="work" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-display text-5xl font-bold text-primary mb-6">
            Featured Work
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent projects showcasing my expertise in digital design and creative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transition-all duration-700 hover:shadow-elegant hover:-translate-y-2 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-0 overflow-hidden rounded-lg">
                <div className={`h-64 ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="font-body text-sm uppercase tracking-wider opacity-90">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;