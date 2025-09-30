import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Rocket, Lightning } from 'phosphor-react';
const profileImage = '/lovable-uploads/27125ab9-93b2-4a2b-b5c1-e64e128e84fd.png';

gsap.registerPlugin(ScrollTrigger);

const FuturisticAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: Code, name: 'Frontend Development', level: '95%' },
    { icon: Palette, name: 'UI/UX Design', level: '90%' },
    { icon: Rocket, name: 'Mobile App Development', level: '92%' },
    { icon: Lightning, name: 'Java Development', level: '88%' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { 
          opacity: 0, 
          x: -100, 
          rotateY: -15,
          filter: 'blur(10px)' 
        },
        { 
          opacity: 1, 
          x: 0, 
          rotateY: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills stagger animation
      gsap.fromTo(skillsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-orb w-40 h-40 top-20 right-10 opacity-10"></div>
      <div className="floating-orb w-32 h-32 bottom-20 left-10 opacity-15"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                <div className="w-full h-full rounded-full bg-background"></div>
              </div>
              
              {/* Profile Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Vinay Kumar" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 glass-card flex items-center justify-center">
              <Code className="text-primary" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card flex items-center justify-center">
              <Palette className="text-accent" size={24} />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-light leading-relaxed">
                I'm a passionate Mobile app developer and UI/UX designer 
                creating immersive digital experiences. I specialize in modern mobile technologies, 
                intuitive user interfaces, and engaging user experiences.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                My approach combines technical expertise with creative vision to deliver 
                solutions that not only function flawlessly but also captivate and inspire users.
              </p>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="glass-card p-6 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-4">
                      <skill.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{skill.name}</h3>
                      <div className="w-24 h-2 bg-muted rounded-full mt-2">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 group-hover:shadow-glow"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-muted-foreground font-light">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2+</div>
                <div className="text-sm text-muted-foreground font-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-muted-foreground font-light">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticAbout;
