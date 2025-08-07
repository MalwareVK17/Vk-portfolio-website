import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PaperPlaneTilt, Envelope, Phone, MapPin, GithubLogo, LinkedinLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const FuturisticContact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form animation
      gsap.fromTo(formRef.current, {
        opacity: 0,
        x: -100,
        filter: 'blur(10px)'
      }, {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Info animation
      gsap.fromTo(infoRef.current, {
        opacity: 0,
        x: 100
      }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Input focus effects
      const inputs = formRef.current?.querySelectorAll('input, textarea');
      inputs?.forEach(input => {
        input.addEventListener('focus', () => {
          gsap.to(input, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        input.addEventListener('blur', () => {
          gsap.to(input, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Animate submit button
    gsap.to(e.currentTarget.querySelector('button'), {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });
    console.log('Form submitted:', formData);
  };

  // Social links with proper URLs
  const socialLinks = [{
    icon: GithubLogo,
    name: 'GitHub',
    url: 'https://github.com/MalwareVK17'
  }, {
    icon: LinkedinLogo,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vinay-kumar-mvk/' // Add your actual LinkedIn URL
  }, {
    icon: InstagramLogo,
    name: 'Instagram',
    url: 'https://www.instagram.com/yourusername/' // Add your actual Instagram URL
  }, {
    icon: TwitterLogo,
    name: 'Twitter',
    url: 'https://twitter.com/yourusername' // Add your actual Twitter URL
  }];

  // Contact info with clickable actions
  const contactInfo = [{
    icon: Envelope,
    label: 'Email',
    value: 'vinaykumarmvk17@gmail.com',
    action: () => window.open('mailto:vinaykumarmvk17@gmail.com', '_blank')
  }, {
    icon: Phone,
    label: 'Phone',
    value: '+91 7569356522',
    action: () => window.open('tel:+917569356522', '_blank')
  }, {
    icon: MapPin,
    label: 'Location',
    value: 'Andhra Pradesh, India',
    action: () => window.open('https://www.google.com/maps/place/Andhra+Pradesh,+India/', '_blank')
  }];

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-orb w-32 h-32 top-20 right-20 opacity-15"></div>
      <div className="floating-orb w-24 h-24 bottom-32 left-20 opacity-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent md:text-6xl font-bold">
            Let's Contact Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Ready to bring your ideas to life? Let's create something....
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div ref={formRef} className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full glow-button px-8 py-4 rounded-xl text-lg font-medium flex items-center justify-center space-x-2"
              >
                <PaperPlaneTilt size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need a website, mobile app, or just want to chat about tech, feel free to reach out!
              </p>
            </div>

            {/* Contact Details - Now Clickable */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group cursor-pointer hover:bg-white/5 p-3 rounded-xl transition-all duration-300"
                  onClick={info.action}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <info.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <div className="text-sm text-accent font-medium uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-lg text-foreground font-light group-hover:text-primary transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-card flex items-center justify-center rounded-xl hover:bg-primary/20 transition-all duration-300 group hover:scale-110"
                    title={`Visit my ${social.name}`}
                  >
                    <social.icon
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                      size={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticContact;
