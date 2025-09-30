import FuturisticNavigation from '@/components/FuturisticNavigation';
import FuturisticProjects from '@/components/FuturisticProjects';
import FuturisticFooter from '@/components/FuturisticFooter';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 text-foreground overflow-x-hidden">
      <FuturisticNavigation />
      <div className="pt-20">
        <FuturisticProjects />
      </div>
      <FuturisticFooter />
    </div>
  );
};

export default Projects;
