import FuturisticNavigation from '@/components/FuturisticNavigation';
import FuturisticContact from '@/components/FuturisticContact';
import FuturisticFooter from '@/components/FuturisticFooter';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 text-foreground overflow-x-hidden">
      <FuturisticNavigation />
      <div className="pt-20">
        <FuturisticContact />
      </div>
      <FuturisticFooter />
    </div>
  );
};

export default Contact;
