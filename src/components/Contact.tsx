import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-display text-5xl font-bold text-primary mb-6">
            Let's Work Together
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <Card className="p-8 shadow-elegant">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" className="font-body" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="font-body" />
                  </div>
                </div>
                
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" className="font-body" />
                </div>
                
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Project Type
                  </label>
                  <Input placeholder="Brand Identity, Web Design, etc." className="font-body" />
                </div>
                
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    className="font-body min-h-32"
                  />
                </div>
                
                <Button className="w-full bg-gradient-accent text-white font-medium py-3 text-lg rounded-lg hover:shadow-accent transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div>
              <h3 className="font-display text-3xl font-semibold text-primary mb-6">
                Get In Touch
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need a complete brand overhaul or a simple design consultation, 
                I'm here to help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">Email</h4>
                  <p className="font-body text-muted-foreground">alex@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">Phone</h4>
                  <p className="font-body text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">Location</h4>
                  <p className="font-body text-muted-foreground">New York, NY</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-body font-medium text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {['Dribbble', 'Behance', 'LinkedIn', 'Instagram'].map((social, index) => (
                  <div 
                    key={index} 
                    className="w-12 h-12 bg-secondary hover:bg-gradient-accent rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:text-white group"
                  >
                    <span className="font-body text-sm font-medium group-hover:text-white">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;