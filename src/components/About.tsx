import { Mail, Phone, Linkedin, MapPin, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="gradient-text">Myself</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full mb-8" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a final-year Bachelor of Technology (Computer Science & Engineering) 
                specializing in Big Data Analytics (2022–2026). I also hold a one-year 
                Diploma in Biomedical Instrumentation.
              </p>
              <p>
                My goal is to become a data analyst; I build AI and data-driven solutions 
                focused on real-world impact in healthcare and beyond. I'm passionate about 
                everything that has to do with Digital Design and Art Direction.
              </p>
              <p>
                I enjoy working with agencies and enthusiastic people who want to solve 
                problems through beautiful design and experiences.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              <a 
                href="mailto:praveethbitra@gmail.com" 
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-card/50 transition-colors group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">praveethbitra@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/praveeth-bitra" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-card/50 transition-colors group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">Connect with me</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Quick Facts & Education */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="portfolio-card p-8 animate-scale-in">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>B.Tech CSE, Big Data Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Graduation: 2022–2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Vadodara, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>+91 9110778023</span>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full" />
                  <div className="absolute left-1.5 top-5 w-0.5 h-12 bg-primary/30" />
                  <div>
                    <h4 className="font-semibold text-lg">B.Tech in CSE — Big Data Analytics</h4>
                    <p className="text-primary font-medium">2022–2026</p>
                    <p className="text-muted-foreground">Specializing in machine learning and data analytics</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-primary-glow rounded-full" />
                  <div>
                    <h4 className="font-semibold text-lg">Diploma in Biomedical Instrumentation</h4>
                    <p className="text-primary font-medium">Completed</p>
                    <p className="text-muted-foreground">Healthcare technology and medical devices</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Infosys Springboard — Virtual Internship (AI)</h4>
                  <p className="text-primary font-medium">Current</p>
                  <p className="text-sm text-muted-foreground">Project details restricted by company policy</p>
                </div>
                <div>
                  <h4 className="font-semibold">Team Bulgogi — Hiring Assistant</h4>
                  <p className="text-primary font-medium">2 months (Online)</p>
                  <p className="text-sm text-muted-foreground">Assisted with recruitment processes and candidate evaluation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;