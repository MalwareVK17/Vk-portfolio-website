import FuturisticNavigation from '@/components/FuturisticNavigation';
import FuturisticHero from '@/components/FuturisticHero';
import FuturisticAbout from '@/components/FuturisticAbout';
import FuturisticProjects from '@/components/FuturisticProjects';
import FuturisticContact from '@/components/FuturisticContact';
import FuturisticFooter from '@/components/FuturisticFooter';

const FuturisticIndex = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 text-foreground overflow-x-hidden">
        <FuturisticNavigation />
        <FuturisticHero />
        <FuturisticAbout />
        <FuturisticProjects />
        <FuturisticContact />
        <FuturisticFooter />
      </div>
  );
};

export default FuturisticIndex;