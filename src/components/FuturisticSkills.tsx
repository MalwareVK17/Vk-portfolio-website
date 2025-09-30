import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Layers,
  Terminal,
  Cpu,
  Zap,
  Box,
  Sparkles
} from 'lucide-react';

const FuturisticSkills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'Animation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Code Review'],
      color: 'from-gray-500 to-slate-500'
    }
  ];

  const techStack = [
    { icon: Terminal, name: 'CLI Tools' },
    { icon: Cpu, name: 'Performance' },
    { icon: Zap, name: 'Optimization' },
    { icon: Box, name: '3D Graphics' },
    { icon: Layers, name: 'Architecture' },
    { icon: Sparkles, name: 'Innovation' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards
            const cards = cardsRef.current?.querySelectorAll('.skill-card');
            if (cards) {
              gsap.fromTo(cards,
                { opacity: 0, y: 50, scale: 0.9 },
                { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  duration: 0.6, 
                  stagger: 0.1,
                  ease: "power2.out" 
                }
              );
            }

            // Animate tech icons
            const techIcons = sectionRef.current?.querySelectorAll('.tech-icon');
            if (techIcons) {
              gsap.fromTo(techIcons,
                { opacity: 0, scale: 0 },
                { 
                  opacity: 1, 
                  scale: 1,
                  duration: 0.5, 
                  stagger: 0.08,
                  ease: "back.out(1.7)" 
                }
              );
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting exceptional digital experiences with cutting-edge technologies and design principles
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="skill-card glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-300"
              >
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${category.color} transform origin-left group-hover:scale-x-100 scale-x-75 transition-transform duration-500`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Icons */}
        <div className="glass-card rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="tech-icon flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Projects Completed', value: '50+' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Happy Clients', value: '40+' },
            { label: 'Technologies', value: '30+' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FuturisticSkills;
