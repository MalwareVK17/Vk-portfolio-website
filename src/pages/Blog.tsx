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
      
      <div className="min-h-screen bg-background text-foreground">
        <FuturisticNavigation />
        <FuturisticBlog />
        <FuturisticFooter />
      </div>
    </>
  );
};

export default Blog;
