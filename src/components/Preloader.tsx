import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the logo/text
    tl.fromTo(textRef.current, 
      { 
        opacity: 0, 
        scale: 0.5, 
        filter: 'blur(10px)' 
      },
      { 
        opacity: 1, 
        scale: 1, 
        filter: 'blur(0px)',
        duration: 1,
        ease: "power2.out"
      }
    );

    // Animate progress bar
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out",
    }, "-=0.5");

    // Hide preloader
    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    }, "+=0.5");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="floating-orb w-32 h-32 -top-16 -left-16 opacity-30"></div>
      <div className="floating-orb w-24 h-24 -bottom-12 -right-12 opacity-20"></div>
      
      <div ref={textRef} className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          VK
        </h1>
        <p className="text-xl text-muted-foreground font-light tracking-wider">
          Loading Experience...
        </p>
      </div>

      <div className="progress-container">
        <div ref={progressBarRef} className="progress-bar"></div>
      </div>

      <div className="mt-8 text-sm text-muted-foreground/60 font-light">
        Crafting Digital Experiences
      </div>
    </div>
  );
};

export default Preloader;