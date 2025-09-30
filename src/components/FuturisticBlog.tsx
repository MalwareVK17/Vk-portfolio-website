import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import blogHero from '@/assets/blog-hero.jpg';
import blogReact from '@/assets/blog-react.jpg';
import blogAi from '@/assets/blog-ai.jpg';
import blogDesign from '@/assets/blog-design.jpg';

const FuturisticBlog = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Apps with React & TypeScript',
      excerpt: 'Explore the power of type-safe development and how TypeScript enhances React applications with better developer experience and fewer bugs.',
      image: blogReact,
      category: 'Development',
      date: 'March 15, 2024',
      readTime: '8 min read',
      tags: ['React', 'TypeScript', 'Web Development']
    },
    {
      id: 2,
      title: 'The Future of AI in Web Development',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way we build and interact with web applications, from code generation to user experience.',
      image: blogAi,
      category: 'AI & ML',
      date: 'March 10, 2024',
      readTime: '12 min read',
      tags: ['AI', 'Machine Learning', 'Innovation']
    },
    {
      id: 3,
      title: 'UI/UX Design Principles for Modern Applications',
      excerpt: 'Learn the essential design principles that create intuitive, accessible, and beautiful user interfaces in contemporary web applications.',
      image: blogDesign,
      category: 'Design',
      date: 'March 5, 2024',
      readTime: '10 min read',
      tags: ['UI/UX', 'Design Systems', 'Best Practices']
    },
    {
      id: 4,
      title: 'Advanced React Patterns and Performance',
      excerpt: 'Deep dive into advanced React patterns, optimization techniques, and performance best practices for building scalable applications.',
      image: blogReact,
      category: 'Development',
      date: 'February 28, 2024',
      readTime: '15 min read',
      tags: ['React', 'Performance', 'Advanced']
    },
    {
      id: 5,
      title: 'Machine Learning Models in Production',
      excerpt: 'A comprehensive guide to deploying and maintaining machine learning models in production environments with real-world examples.',
      image: blogAi,
      category: 'AI & ML',
      date: 'February 20, 2024',
      readTime: '14 min read',
      tags: ['ML', 'DevOps', 'Production']
    },
    {
      id: 6,
      title: 'Accessibility in Modern Web Design',
      excerpt: 'Understanding WCAG guidelines and implementing accessible design patterns to create inclusive web experiences for all users.',
      image: blogDesign,
      category: 'Design',
      date: 'February 15, 2024',
      readTime: '9 min read',
      tags: ['Accessibility', 'WCAG', 'Inclusive Design']
    }
  ];

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 3.8, ease: "power2.out" }
    );

    // Cards stagger animation
    const cards = cardsRef.current?.querySelectorAll('.blog-card');
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          delay: 4,
          ease: "power2.out" 
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div ref={heroRef} className="mb-16 text-center">
          <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8 glass-card">
            <img 
              src={blogHero} 
              alt="Blog Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end justify-center pb-12">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Blog & Insights
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Exploring technology, design, and innovation through in-depth articles and tutorials
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="blog-card glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 glass-card rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, tutorials, and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
            <button className="glow-button px-8 py-3 rounded-full font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticBlog;
