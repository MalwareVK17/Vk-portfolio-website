import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import FuturisticNavigation from '@/components/FuturisticNavigation';
import FuturisticHero from '@/components/FuturisticHero';
import FuturisticAbout from '@/components/FuturisticAbout';
import FuturisticProjects from '@/components/FuturisticProjects';
import FuturisticContact from '@/components/FuturisticContact';
import FuturisticFooter from '@/components/FuturisticFooter';

const FuturisticIndex = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 text-foreground overflow-x-hidden">
        <FuturisticNavigation />
        <FuturisticHero />
        <FuturisticAbout />
        <FuturisticProjects />
        <FuturisticContact />
        <FuturisticFooter />
      </div>
    </>
  );
};

export default FuturisticIndex;