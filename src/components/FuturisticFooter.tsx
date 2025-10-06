import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'phosphor-react';
import { Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const FuturisticFooter = () => {
  const footerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating particles animation
      gsap.to(".footer-particle", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3
      });
    });

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <footer ref={footerRef} className="relative py-16 bg-gradient-to-t from-background to-muted/20 border-t border-white/10">
      {/* Background Particles */}
      <div className="footer-particle absolute top-10 left-20 w-2 h-2 bg-primary/30 rounded-full"></div>
      <div className="footer-particle absolute top-20 right-32 w-3 h-3 bg-accent/30 rounded-full"></div>
      <div className="footer-particle absolute bottom-16 left-40 w-2 h-2 bg-secondary/30 rounded-full"></div>
      <div className="footer-particle absolute bottom-20 right-20 w-3 h-3 bg-primary/20 rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              VK
            </div>
            <p className="text-muted-foreground font-light leading-relaxed">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 text-muted-foreground">
              <span className="font-light">Made with</span>
              <Heart className="text-red-500 animate-pulse" size={16} />
              <span className="font-light">by Vinay Kumar</span>
            </div>
            <div className="text-sm text-muted-foreground/60 mt-2 font-light">
              © 2025 All rights reserved
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Links & Contact */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media Icons - Left */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Center Text */}
            <div className="text-sm text-muted-foreground/60 font-light text-center">
              Designed & Developed with Animation technologies
            </div>

            {/* Contact Info - Right */}
            <div className="flex flex-col gap-2 text-right">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-end gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+123 456 7890</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center justify-end gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>your.email@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;
