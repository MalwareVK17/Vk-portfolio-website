import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, GithubLogo, Globe, DeviceMobile, Palette, Database, Lightning } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import FuturisticNavigation from '@/components/FuturisticNavigation';
import FuturisticFooter from '@/components/FuturisticFooter';
import universityAppImg from '@/assets/project-university-app.jpg';
import portfolioAppImg from '@/assets/project-portfolio-app.jpg';
import musicPlayerImg from '@/assets/project-music-player.jpg';
import aiDashboardImg from '@/assets/project-ai-dashboard.jpg';
import backendImg from '@/assets/project-backend.jpg';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: "university-portfolio-app",
      title: "University Portfolio App",
      category: "Mobile App",
      fullDescription: "The GGU Experience App (GGU Expo) is a cutting-edge, cross-platform mobile application meticulously crafted with Flutter and Dart. Designed to revolutionize the student journey at Godavari Global University, this app provides an intuitive and user-friendly platform, putting essential university resources and services right at students' fingertips. It's built to enhance daily campus life, streamline access to information, and foster a more connected university community.",
      tech: ["Flutter", "Dart", "Firebase", "Android Studio"],
      icon: Globe,
      gradient: "from-blue-500 to-purple-600",
      glow: "shadow-blue-500/30",
      image: universityAppImg,
      githubUrl: "https://github.com/yourusername/university-app",
      features: [
        "Real-time campus updates and notifications",
        "Interactive campus map with location services",
        "Course management and timetable integration",
        "Student portal with grades and attendance",
        "Event calendar and registration system",
        "Social features for student networking"
      ],
      challenges: "The main challenge was creating a seamless cross-platform experience while maintaining native performance. We implemented custom animations and optimized API calls to ensure smooth operation even on lower-end devices.",
      outcome: "Successfully deployed to 5000+ students with a 4.8-star rating on both app stores. The app reduced administrative queries by 60% and improved student engagement significantly."
    },
    {
      id: "portfolio-app",
      title: "Portfolio App",
      category: "Mobile App & UI/UX Design",
      fullDescription: "Portfolio App is a modern and responsive portfolio website built with Flutter and Dart. It features a clean and minimalist design, with smooth animations and transitions. The app is designed to be easy to navigate and provides a seamless user experience. Built with performance in mind, it showcases projects, skills, and experience in an elegant and professional manner.",
      tech: ["Flutter", "Dart", "Animated", "Android Studio"],
      icon: DeviceMobile,
      gradient: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/30",
      image: portfolioAppImg,
      githubUrl: "https://github.com/yourusername/portfolio-app",
      features: [
        "Responsive design for all device sizes",
        "Smooth page transitions and micro-interactions",
        "Project showcase with filtering capabilities",
        "Skills visualization with progress indicators",
        "Contact form with email integration",
        "Dark/Light mode toggle"
      ],
      challenges: "Creating fluid animations that don't compromise performance was crucial. We used Flutter's animation controllers efficiently and implemented lazy loading for images.",
      outcome: "The portfolio app helped increase client inquiries by 200% and provided a professional platform to showcase work. Average session duration is 3.5 minutes with low bounce rate."
    },
    {
      id: "music-player-app",
      title: "Music Player App",
      category: "UI/UX Design",
      fullDescription: "Complete visual identity for music player app with new features and modern design. This project showcases a beautiful interface with intuitive controls, seamless playlist management, and stunning album artwork display. The design focuses on user experience with smooth transitions and a modern aesthetic that appeals to music lovers.",
      tech: ["Adobe XD", "Figma", "Principle"],
      icon: Palette,
      gradient: "from-pink-500 to-rose-600",
      glow: "shadow-pink-500/30",
      image: musicPlayerImg,
      githubUrl: "https://github.com/yourusername/music-player",
      features: [
        "Minimalist interface with focus on album art",
        "Gesture-based controls for intuitive navigation",
        "Smart playlist creation with AI suggestions",
        "Lyrics synchronization and display",
        "Equalizer with custom presets",
        "Social sharing and collaborative playlists"
      ],
      challenges: "Balancing aesthetics with functionality was key. We conducted extensive user testing to ensure the interface was both beautiful and practical for daily use.",
      outcome: "The design received positive feedback from 1000+ beta testers, with 92% rating the interface as 'excellent' or 'very good'. The modern aesthetic helped differentiate the app in a crowded market."
    },
    {
      id: "ai-dashboard",
      title: "AI Dashboard",
      category: "Data Visualization",
      fullDescription: "Advanced analytics dashboard with real-time data processing and interactive 3D visualizations. This project combines cutting-edge AI technology with stunning data visualization to provide actionable insights. Features include real-time data updates, predictive analytics, customizable widgets, and interactive charts that help users make data-driven decisions.",
      tech: ["Three.js", "D3.js", "Python", "TensorFlow"],
      icon: Database,
      gradient: "from-orange-500 to-red-600",
      glow: "shadow-orange-500/30",
      image: aiDashboardImg,
      githubUrl: "https://github.com/yourusername/ai-dashboard",
      features: [
        "Real-time data visualization with WebSocket integration",
        "Interactive 3D charts and graphs",
        "Machine learning predictions and insights",
        "Customizable dashboard layouts",
        "Export functionality for reports",
        "Multi-user collaboration features"
      ],
      challenges: "Rendering complex 3D visualizations while maintaining 60fps performance required optimization of Three.js rendering pipelines and efficient data streaming.",
      outcome: "The dashboard processes 1M+ data points in real-time and is used by enterprise clients for critical business intelligence. It reduced decision-making time by 40%."
    },
    {
      id: "backend-development",
      title: "Backend Development",
      category: "Product based website",
      fullDescription: "Implementation of backend development for a product based website. This comprehensive backend solution includes RESTful API development, database architecture, authentication systems, and deployment infrastructure. Built with scalability and security in mind, it handles high traffic loads while maintaining optimal performance.",
      tech: ["Node.js", "JavaScript", "Supabase", "Vercel"],
      icon: Lightning,
      gradient: "from-cyan-500 to-blue-600",
      glow: "shadow-cyan-500/30",
      image: backendImg,
      githubUrl: "https://github.com/yourusername/backend-project",
      features: [
        "RESTful API with comprehensive documentation",
        "JWT-based authentication and authorization",
        "PostgreSQL database with optimized queries",
        "Real-time updates with WebSocket support",
        "Automated testing and CI/CD pipeline",
        "Monitoring and logging infrastructure"
      ],
      challenges: "Architecting a scalable system that could handle sudden traffic spikes required implementing caching strategies, database indexing, and load balancing.",
      outcome: "The backend successfully handles 100K+ daily active users with 99.9% uptime. API response times average under 100ms, ensuring a smooth user experience."
    }
  ];

  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(contentRef.current?.children || [],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.3 }
      );
    });

    return () => ctx.revert();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/projects')} className="glow-button">
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 text-foreground">
      <FuturisticNavigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Button 
            onClick={() => navigate('/projects')}
            variant="ghost"
            className="mb-8 group"
          >
            <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" size={20} />
            Back to Projects
          </Button>

          {/* Hero Image */}
          <div ref={imageRef} className="relative h-[60vh] rounded-2xl overflow-hidden mb-12 glass-card">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}></div>
            
            {/* Floating Icon */}
            <div className={`absolute bottom-8 right-8 w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center ${project.glow} shadow-2xl`}>
              <project.icon className="text-white" size={40} />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div ref={contentRef} className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="text-sm text-accent font-medium mb-2 tracking-wider uppercase">
                  {project.category}
                </div>
                <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${project.gradient}`}></div>
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.gradient} mt-2 flex-shrink-0`}></div>
                      <p className="text-muted-foreground font-light">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${project.gradient}`}></div>
                  Challenges & Solutions
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              {/* Outcome */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${project.gradient}`}></div>
                  Outcome & Impact
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 text-sm bg-primary/10 text-primary rounded-lg border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full glow-button group">
                    <GithubLogo className="mr-2 transition-transform group-hover:scale-110" size={20} />
                    View on GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FuturisticFooter />
    </div>
  );
};

export default ProjectDetail;