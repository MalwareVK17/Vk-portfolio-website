import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';
import logo from '@/assets/logo.png';

const FuturisticNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
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

  const closeMenu = () => {
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
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`transition-colors duration-300 font-light tracking-wide ${
                    location.pathname === item.href 
                      ? 'text-primary' 
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
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
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-8 px-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={closeMenu}
                className={`text-3xl font-light transition-colors duration-300 text-left ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FuturisticNavigation;