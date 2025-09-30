import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Globe, DeviceMobile, Palette, Database, Lightning } from 'phosphor-react';
import universityAppImg from '@/assets/project-university-app.jpg';
import portfolioAppImg from '@/assets/project-portfolio-app.jpg';
import musicPlayerImg from '@/assets/project-music-player.jpg';
import aiDashboardImg from '@/assets/project-ai-dashboard.jpg';
import backendImg from '@/assets/project-backend.jpg';

gsap.registerPlugin(ScrollTrigger);

const FuturisticProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const projects = [
   {
      id: "university-portfolio-app",
      title: "University Portfolio App",
      category: "Mobile App",
      description: "About the App The GGU Experience App (GGU Expo) is a cutting-edge, cross-platform mobile application meticulously crafted with Flutter and Dart.",
      fullDescription: "The GGU Experience App (GGU Expo) is a cutting-edge, cross-platform mobile application meticulously crafted with Flutter and Dart. Designed to revolutionize the student journey at Godavari Global University, this app provides an intuitive and user-friendly platform, putting essential university resources and services right at students' fingertips. It's built to enhance daily campus life, streamline access to information, and foster a more connected university community.",
      tech: ["Flutter", "Dart", "Firebase", "Android Studio"],
      icon: Globe,
      gradient: "from-blue-500 to-purple-600",
      glow: "shadow-blue-500/30",
      image: universityAppImg,
      githubUrl: "https://github.com/yourusername/university-app"
    },
    {
      id: "portfolio-app",
      title: "Portfolio App",
      category: "Mobile App & UI/UX Design",
      description: "Portfolio App is a modern and responsive portfolio website built with Flutter and Dart.",
      fullDescription: "Portfolio App is a modern and responsive portfolio website built with Flutter and Dart. It features a clean and minimalist design, with smooth animations and transitions. The app is designed to be easy to navigate and provides a seamless user experience. Built with performance in mind, it showcases projects, skills, and experience in an elegant and professional manner.",
      tech: ["Flutter", "Dart", "Animated", "Android Studio"],
      icon: DeviceMobile,
      gradient: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/30",
      image: portfolioAppImg,
      githubUrl: "https://github.com/yourusername/portfolio-app"
    },
    {
      id: "music-player-app",
      title: "Music Player App",
      category: "UI/UX Design",
      description: "Complete visual identity for music player app with new features and modern design.",
      fullDescription: "Complete visual identity for music player app with new features and modern design. This project showcases a beautiful interface with intuitive controls, seamless playlist management, and stunning album artwork display. The design focuses on user experience with smooth transitions and a modern aesthetic that appeals to music lovers.",
      tech: ["Adobe XD", "Figma", "Principle"],
      icon: Palette,
      gradient: "from-pink-500 to-rose-600",
      glow: "shadow-pink-500/30",
      image: musicPlayerImg,
      githubUrl: "https://github.com/yourusername/music-player"
    },
    {
      id: "ai-dashboard",
      title: "AI Dashboard",
      category: "Data Visualization",
      description: "Advanced analytics dashboard with real-time data processing and interactive 3D visualizations.",
      fullDescription: "Advanced analytics dashboard with real-time data processing and interactive 3D visualizations. This project combines cutting-edge AI technology with stunning data visualization to provide actionable insights. Features include real-time data updates, predictive analytics, customizable widgets, and interactive charts that help users make data-driven decisions.",
      tech: ["Three.js", "D3.js", "Python", "TensorFlow"],
      icon: Database,
      gradient: "from-orange-500 to-red-600",
      glow: "shadow-orange-500/30",
      image: aiDashboardImg,
      githubUrl: "https://github.com/yourusername/ai-dashboard"
    },
    {
      id: "backend-development",
      title: "Backend Development",
      category: "Product based website",
      description: "Implementation of backend development for a product based website.",
      fullDescription: "Implementation of backend development for a product based website. This comprehensive backend solution includes RESTful API development, database architecture, authentication systems, and deployment infrastructure. Built with scalability and security in mind, it handles high traffic loads while maintaining optimal performance.",
      tech: ["Node.js", "JavaScript", "Supabase", "Vercel"],
      icon: Lightning,
      gradient: "from-cyan-500 to-blue-600",
      glow: "shadow-cyan-500/30",
      image: backendImg,
      githubUrl: "https://github.com/yourusername/backend-project"
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
              onClick={() => navigate(`/projects/${project.id}`)}
              className="glass-card group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                  <project.icon className="text-primary" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  {/* Category */}
                  <div className="text-xs text-accent font-medium tracking-wider uppercase">
                    {project.category}
                  </div>
                  
                  <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <ArrowUpRight className="text-primary" size={16} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 text-xs text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
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
