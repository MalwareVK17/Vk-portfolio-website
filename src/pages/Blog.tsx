import { useState, useEffect } from 'react';
import FuturisticNavigation from "@/components/FuturisticNavigation";
import FuturisticBlog from "@/components/FuturisticBlog";
import FuturisticFooter from "@/components/FuturisticFooter";
import Preloader from "@/components/Preloader";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
        <FuturisticBlog />
        <FuturisticFooter />
      </div>
    </>
  );
};

export default Blog;
