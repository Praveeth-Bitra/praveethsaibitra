import { Heart, Download, Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:praveethbitra@gmail.com',
      icon: Mail,
      label: 'Send me an email'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/praveeth-bitra',
      icon: Linkedin,
      label: 'Connect on LinkedIn'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Praveeth-Bitra',
      icon: Github,
      label: 'View my code'
    }
  ];

  return (
    <footer className="bg-card border-t border-border/50 relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Bitra Praveeth Sai</h3>
            <p className="text-muted-foreground">
              Aspiring Data Analyst specializing in ML for Healthcare
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and lots of ☕
            </div>
          </div>

          {/* Center - Quick Actions */}
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={downloadResume}
              className="btn-primary flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Back to Top */}
          <div className="flex flex-col items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </button>
            <div className="text-right text-sm text-muted-foreground">
              <p>Portfolio © {currentYear}</p>
              <p>Built with React & Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Bitra Praveeth Sai. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
};

export default Footer;
