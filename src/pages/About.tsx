import FuturisticNavigation from '@/components/FuturisticNavigation';
import FuturisticAbout from '@/components/FuturisticAbout';
import FuturisticFooter from '@/components/FuturisticFooter';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 text-foreground overflow-x-hidden">
      <FuturisticNavigation />
      <div className="pt-20">
        <FuturisticAbout />
      </div>
      <FuturisticFooter />
    </div>
  );
};

export default About;
