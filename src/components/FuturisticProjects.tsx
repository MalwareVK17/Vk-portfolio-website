import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Globe, DeviceMobile, Palette, Database, Sparkle, Lightning } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const FuturisticProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
   {
      title: "Unversity Portfolio App",
      category: "Mobile App",
      description: "About the App The GGU Experience App (GGU Expo) is a cutting-edge, cross-platform mobile application meticulously crafted with Flutter and Dart. Designed to revolutionize the student journey at Godavari Global University, this app provides an intuitive and user-friendly platform, putting essential university resources and services right at students' fingertips. It's built to enhance daily campus life, streamline access to information, and foster a more connected university community.",
      tech: ["Flutter", "Dart", "Firebase", "Android Studio"],
      icon: Globe,
      gradient: "from-blue-500 to-purple-600",
      glow: "shadow-blue-500/30"
    },
    {
      title: "Portfolio App",
      category: "Mobile App & UI/UX Design",
      description: "Portfolio App is a modern and responsive portfolio website built with Flutter and Dart. It features a clean and minimalist design, with smooth animations and transitions. The app is designed to be easy to navigate and provides a seamless user experience.",
      tech: ["Flutter", "Dart", "Animated", "Android Studio"],
      icon: DeviceMobile,
      gradient: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/30"
    },
    {
      title: "Music Player App",
      category: "UI/UX Design",
      description: "Complete visual identity for music player app with new features and modern design.",
      tech: ["Adobe XD", "Figma", "Principle"],
      icon: Palette,
      gradient: "from-pink-500 to-rose-600",
      glow: "shadow-pink-500/30"
    },
    {
      title: "AI Dashboard",
      category: "Data Visualization",
      description: "Advanced analytics dashboard with real-time data processing and interactive 3D visualizations.",
      tech: ["Three.js", "D3.js", "Python", "TensorFlow"],
      icon: Database,
      gradient: "from-orange-500 to-red-600",
      glow: "shadow-orange-500/30"
    },
    {
      title: "Backend Development",
      category: "Product based website",
      description: "Implementation of backend development for a product based website.",
      tech: ["Node.js", "javascript", "Supabase", "vercel"],
      icon: Lightning,
      gradient: "from-cyan-500 to-blue-600",
      glow: "shadow-cyan-500/30"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Projects stagger animation
      gsap.fromTo(projectsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 100, 
          scale: 0.8,
          rotateX: 45 
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-orb w-36 h-36 top-10 left-20 opacity-10"></div>
      <div className="floating-orb w-28 h-28 bottom-20 right-32 opacity-15"></div>

      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            A showcase of my latest work in web development, mobile apps, and digital experiences
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center ${project.glow} shadow-lg`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <ArrowUpRight className="text-primary" size={18} />
                  </div>
                </div>

                {/* Category */}
                <div className="text-sm text-accent font-medium mb-2 tracking-wider uppercase">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FuturisticProjects;
