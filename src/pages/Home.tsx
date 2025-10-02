import FuturisticNavigation from '@/components/FuturisticNavigation';
import FuturisticHero from '@/components/FuturisticHero';
import FuturisticSkills from '@/components/FuturisticSkills';
import FuturisticFooter from '@/components/FuturisticFooter';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 text-foreground overflow-x-hidden">
        <FuturisticNavigation />
        <FuturisticHero />
        <FuturisticSkills />
        <FuturisticFooter />
      </div>
  );
};

export default Home;
