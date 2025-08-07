import { useEffect, useRef, useState } from 'react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Java Development", level: 90 },
    { name: "Web Design", level: 88 },
    { name: "Mobile Design", level: 85 },
    { name: "Prototyping", level: 92 },
    { name: "Design Systems", level: 89 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setProgressValues(prev => {
                const newValues = [...prev];
                newValues[index] = skill.level;
                return newValues;
              });
            }, index * 200);
          });
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
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-display text-5xl font-bold text-primary mb-6">
            Skills & Expertise
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Years of experience have shaped my expertise across multiple design disciplines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-body font-medium text-lg text-foreground">
                    {skill.name}
                  </h3>
                  <span className="font-body text-sm text-muted-foreground">
                    {progressValues[index]}%
                  </span>
                </div>
                <div className="relative">
                  <Progress 
                    value={progressValues[index]} 
                    className="h-3"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="bg-card rounded-3xl p-8 shadow-elegant">
              <h3 className="font-display text-3xl font-semibold text-primary mb-6">
                Tools & Technologies
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-body font-medium text-foreground">Design</h4>
                  <div className="space-y-2">
                    {['Figma', 'Adobe Creative Suite', 'Sketch', 'Principle'].map((tool, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="font-body text-muted-foreground">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-body font-medium text-foreground">Development</h4>
                  <div className="space-y-2">
                    {['HTML/CSS', 'JavaScript', 'React', 'Framer'].map((tool, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="font-body text-muted-foreground">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
