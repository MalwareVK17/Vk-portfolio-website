import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Calendar, Clock, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FuturisticNavigation from '@/components/FuturisticNavigation';
import FuturisticFooter from '@/components/FuturisticFooter';
import blogReact from '@/assets/blog-react.jpg';
import blogAi from '@/assets/blog-ai.jpg';
import blogDesign from '@/assets/blog-design.jpg';
import blogHero from '@/assets/blog-hero.jpg';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Apps with React & TypeScript',
      excerpt: 'Explore the power of type-safe development and how TypeScript enhances React applications with better developer experience and fewer bugs.',
      images: [blogReact, blogHero, blogDesign, blogAi],
      category: 'Development',
      date: 'March 15, 2024',
      readTime: '8 min read',
      tags: ['React', 'TypeScript', 'Web Development'],
      content: `
        <h2>Introduction to React and TypeScript</h2>
        <p>React has become the go-to library for building modern web applications, and when combined with TypeScript, it provides an unmatched developer experience. TypeScript adds static typing to JavaScript, catching errors at compile-time rather than runtime.</p>
        
        <h2>Why TypeScript?</h2>
        <p>TypeScript brings several key advantages to React development:</p>
        <ul>
          <li><strong>Type Safety:</strong> Catch errors before they reach production</li>
          <li><strong>Better IDE Support:</strong> Intelligent code completion and refactoring</li>
          <li><strong>Self-Documenting Code:</strong> Types serve as inline documentation</li>
          <li><strong>Easier Refactoring:</strong> Confidence when making changes</li>
        </ul>
        
        <h2>Setting Up Your Project</h2>
        <p>Getting started with React and TypeScript is easier than ever. Modern build tools like Vite provide excellent TypeScript support out of the box. You can create a new project with a simple command and start building type-safe applications immediately.</p>
        
        <h2>Best Practices</h2>
        <p>When working with React and TypeScript, follow these best practices:</p>
        <ul>
          <li>Define proper interfaces for your props and state</li>
          <li>Use generics for reusable components</li>
          <li>Leverage utility types like Partial, Pick, and Omit</li>
          <li>Keep your type definitions close to where they're used</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>React and TypeScript together provide a powerful foundation for building scalable, maintainable web applications. The initial learning curve pays off with improved code quality and developer productivity.</p>
      `
    },
    {
      id: 2,
      title: 'The Future of AI in Web Development',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way we build and interact with web applications, from code generation to user experience.',
      images: [blogAi, blogReact, blogHero, blogDesign],
      category: 'AI & ML',
      date: 'March 10, 2024',
      readTime: '12 min read',
      tags: ['AI', 'Machine Learning', 'Innovation'],
      content: `
        <h2>AI-Powered Development</h2>
        <p>Artificial Intelligence is transforming web development in unprecedented ways. From intelligent code completion to automated testing, AI tools are becoming essential parts of the modern developer's toolkit.</p>
        
        <h2>Code Generation and Assistance</h2>
        <p>Modern AI-powered tools can understand context and generate relevant code snippets, helping developers work faster and more efficiently. These tools learn from millions of code examples to provide intelligent suggestions.</p>
        
        <h2>Enhanced User Experiences</h2>
        <p>AI enables personalized user experiences through:</p>
        <ul>
          <li>Smart recommendations based on user behavior</li>
          <li>Natural language processing for better search</li>
          <li>Chatbots and virtual assistants</li>
          <li>Predictive analytics for user needs</li>
        </ul>
        
        <h2>The Road Ahead</h2>
        <p>As AI technology continues to evolve, we can expect even more innovative applications in web development. The key is to embrace these tools while maintaining focus on creating valuable user experiences.</p>
      `
    },
    {
      id: 3,
      title: 'UI/UX Design Principles for Modern Applications',
      excerpt: 'Learn the essential design principles that create intuitive, accessible, and beautiful user interfaces in contemporary web applications.',
      images: [blogDesign, blogAi, blogReact, blogHero],
      category: 'Design',
      date: 'March 5, 2024',
      readTime: '10 min read',
      tags: ['UI/UX', 'Design Systems', 'Best Practices'],
      content: `
        <h2>The Foundation of Good Design</h2>
        <p>Great user interface design is both an art and a science. It requires understanding user psychology, visual hierarchy, and interaction patterns while creating aesthetically pleasing experiences.</p>
        
        <h2>Core Principles</h2>
        <ul>
          <li><strong>Consistency:</strong> Maintain uniform design patterns throughout</li>
          <li><strong>Clarity:</strong> Make interfaces intuitive and self-explanatory</li>
          <li><strong>Feedback:</strong> Provide clear responses to user actions</li>
          <li><strong>Accessibility:</strong> Design for all users, regardless of abilities</li>
        </ul>
        
        <h2>Visual Hierarchy</h2>
        <p>Effective visual hierarchy guides users through your interface naturally. Use size, color, contrast, and spacing to establish importance and create flow.</p>
        
        <h2>Design Systems</h2>
        <p>Modern applications benefit from comprehensive design systems that ensure consistency and scalability. A good design system includes components, patterns, and guidelines that help teams build cohesive experiences.</p>
      `
    },
    {
      id: 4,
      title: 'Advanced React Patterns and Performance',
      excerpt: 'Deep dive into advanced React patterns, optimization techniques, and performance best practices for building scalable applications.',
      images: [blogReact, blogDesign, blogAi, blogHero],
      category: 'Development',
      date: 'February 28, 2024',
      readTime: '15 min read',
      tags: ['React', 'Performance', 'Advanced'],
      content: `
        <h2>Optimizing React Performance</h2>
        <p>As applications grow, performance becomes critical. React provides several tools and patterns to keep your apps fast and responsive.</p>
        
        <h2>Key Optimization Techniques</h2>
        <ul>
          <li>Memoization with useMemo and useCallback</li>
          <li>Code splitting and lazy loading</li>
          <li>Virtual scrolling for large lists</li>
          <li>Proper key usage in lists</li>
        </ul>
        
        <h2>Advanced Patterns</h2>
        <p>Compound components, render props, and custom hooks provide powerful ways to structure reusable logic and create flexible component APIs.</p>
        
        <h2>Monitoring and Profiling</h2>
        <p>Use React DevTools Profiler to identify performance bottlenecks and optimize render cycles. Continuous monitoring helps maintain optimal performance as your application evolves.</p>
      `
    },
    {
      id: 5,
      title: 'Machine Learning Models in Production',
      excerpt: 'A comprehensive guide to deploying and maintaining machine learning models in production environments with real-world examples.',
      images: [blogAi, blogHero, blogDesign, blogReact],
      category: 'AI & ML',
      date: 'February 20, 2024',
      readTime: '14 min read',
      tags: ['ML', 'DevOps', 'Production'],
      content: `
        <h2>From Development to Production</h2>
        <p>Deploying machine learning models to production requires careful consideration of scalability, monitoring, and maintenance.</p>
        
        <h2>Deployment Strategies</h2>
        <ul>
          <li>Containerization with Docker</li>
          <li>API design for ML services</li>
          <li>Load balancing and scaling</li>
          <li>Version control for models</li>
        </ul>
        
        <h2>Monitoring and Maintenance</h2>
        <p>Production ML systems require continuous monitoring of model performance, data drift, and system health. Implement comprehensive logging and alerting to catch issues early.</p>
        
        <h2>Best Practices</h2>
        <p>Follow MLOps principles to ensure reliable, reproducible deployments. Automate testing, validation, and deployment processes to maintain high quality standards.</p>
      `
    },
    {
      id: 6,
      title: 'Accessibility in Modern Web Design',
      excerpt: 'Understanding WCAG guidelines and implementing accessible design patterns to create inclusive web experiences for all users.',
      images: [blogDesign, blogReact, blogAi, blogHero],
      category: 'Design',
      date: 'February 15, 2024',
      readTime: '9 min read',
      tags: ['Accessibility', 'WCAG', 'Inclusive Design'],
      content: `
        <h2>Why Accessibility Matters</h2>
        <p>Accessible design ensures everyone can use your application, regardless of their abilities. It's not just ethical—it's good business and often legally required.</p>
        
        <h2>WCAG Guidelines</h2>
        <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for accessible design:</p>
        <ul>
          <li>Perceivable: Information must be presentable to users</li>
          <li>Operable: Interface components must be operable</li>
          <li>Understandable: Information and operation must be understandable</li>
          <li>Robust: Content must be robust enough for various technologies</li>
        </ul>
        
        <h2>Practical Implementation</h2>
        <p>Use semantic HTML, provide proper ARIA labels, ensure keyboard navigation, and maintain sufficient color contrast. Test with screen readers and automated tools.</p>
        
        <h2>Inclusive Design</h2>
        <p>Accessibility improvements often benefit all users. Clear navigation, readable fonts, and logical structure create better experiences for everyone.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === Number(id));

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }

    gsap.fromTo('.blog-detail-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
    );
  }, [post, navigate]);

  // Auto-play slides
  useEffect(() => {
    if (!post) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % post.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [post]);

  const nextSlide = useCallback(() => {
    if (!post) return;
    setCurrentSlide((prev) => (prev + 1) % post.images.length);
  }, [post]);

  const prevSlide = useCallback(() => {
    if (!post) return;
    setCurrentSlide((prev) => (prev - 1 + post.images.length) % post.images.length);
  }, [post]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 text-foreground">
      <FuturisticNavigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/blog')}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Blog
          </Button>

          <article className="blog-detail-content">
            {/* Image Carousel */}
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-8 glass-card">
              {/* Images */}
              {post.images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${post.title} - Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/30 backdrop-blur-md border border-white/10 hover:bg-background/50 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/30 backdrop-blur-md border border-white/10 hover:bg-background/50 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {post.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-primary w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 text-sm font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-md">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Post Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 text-sm bg-muted/50 text-foreground rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Content */}
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Navigation to Other Posts */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-2xl font-semibold mb-6">Continue Reading</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(p => p.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <div
                      key={relatedPost.id}
                      onClick={() => navigate(`/blog/${relatedPost.id}`)}
                      className="glass-card rounded-2xl p-6 cursor-pointer hover:scale-[1.02] transition-all group"
                    >
                      <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                        <img 
                          src={relatedPost.images[0]} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </main>

      <FuturisticFooter />
    </div>
  );
};

export default BlogDetail;