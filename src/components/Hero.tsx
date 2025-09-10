import { ArrowRight, ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary-glow/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Bitra Praveeth Sai</span>
              </h1>
              <div className="text-xl lg:text-2xl text-primary font-medium">
                Aspiring Data Analyst • ML for Healthcare
              </div>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Final-year B.Tech (CSE, Big Data Analytics) with a Diploma in Biomedical Instrumentation. 
                I build ML systems and analytics solutions that solve real-world problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProjects}
                className="btn-primary flex items-center gap-2 justify-center"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={downloadResume}
                className="btn-secondary flex items-center gap-2 justify-center"
              >
                Download Resume
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100k+</div>
                <div className="text-sm text-muted-foreground">Records Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full blur-2xl transform scale-110" />
              <img 
                src={profilePhoto}
                alt="Bitra Praveeth Sai - Professional Portrait"
                className="relative z-10 w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-2xl animate-glow-pulse"
              />
              <div className="absolute -inset-4 border border-primary/30 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;