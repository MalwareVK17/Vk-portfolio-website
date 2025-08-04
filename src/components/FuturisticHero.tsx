import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FuturisticHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 });

    // Animate spline container first
    tl.fromTo(splineRef.current,
      { opacity: 0, x: 100 },
      { opacity: 0.8, x: 0, duration: 1.5, ease: "power2.out" }
    );

    // Animate headline with blur effect
    tl.fromTo(headlineRef.current,
      { 
        opacity: 0, 
        y: 50, 
        filter: 'blur(10px)' 
      },
      { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        duration: 1.2,
        ease: "power2.out"
      }, "-=1"
    );

    // Animate subtitle
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.8"
    );

    // Animate CTA button
    tl.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5"
    );

    // Floating background elements
    gsap.to(".floating-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div ref={splineRef} className="spline-container">
        <iframe 
          src='https://my.spline.design/particlenebula-6fwFvOK5FbuBmOGq16jVSOG8/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>

      {/* Floating Orbs */}
      <div className="floating-orb w-32 h-32 top-20 left-20 opacity-30"></div>
      <div className="floating-orb w-24 h-24 top-40 right-32 opacity-20"></div>
      <div className="floating-orb w-20 h-20 bottom-32 left-40 opacity-25"></div>
      <div className="floating-orb w-28 h-28 bottom-20 right-20 opacity-15"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={headlineRef} 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight blur-in"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Vinay Kumar
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground/80">
              Designer & Developer
            </span>
          </h1>

          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Crafting immersive digital experiences with cutting-edge technology and creative innovation
          </p>

          <button 
            ref={ctaRef}
            onClick={scrollToProjects}
            className="glow-button px-12 py-4 rounded-full text-lg font-medium bg-gradient-to-r from-primary to-accent text-white"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero;