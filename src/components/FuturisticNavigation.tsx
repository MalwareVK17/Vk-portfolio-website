import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';

const FuturisticNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3.5, ease: "power2.out" }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.to(menuRef.current, {
        right: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to(menuRef.current, {
        right: "-100%",
        duration: 0.5,
        ease: "power2.in"
      });
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    gsap.to(menuRef.current, {
      right: "-100%",
      duration: 0.5,
      ease: "power2.in"
    });
  };

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 nav-glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VK
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-light tracking-wide"
                >
                  {item.label}
                </button>
              ))}
              <button className="glow-button px-6 py-2 rounded-full text-sm font-medium">
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              <List size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div ref={menuRef} className="mobile-menu">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VK
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-8 px-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-3xl font-light text-foreground/80 hover:text-primary transition-colors duration-300 text-left"
              >
                {item.label}
              </button>
            ))}
            <button className="glow-button px-8 py-4 rounded-full text-lg font-medium mt-8 self-start">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FuturisticNavigation;