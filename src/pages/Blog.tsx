import FuturisticNavigation from "@/components/FuturisticNavigation";
import FuturisticBlog from "@/components/FuturisticBlog";
import FuturisticFooter from "@/components/FuturisticFooter";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 text-foreground overflow-x-hidden">
        <FuturisticNavigation />
        <FuturisticBlog />
        <FuturisticFooter />
      </div>
  );
};

export default Blog;
