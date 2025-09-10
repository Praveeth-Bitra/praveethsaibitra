import { GraduationCap, Calendar, MapPin, Star, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface EducationItem {
  degree: string;
  specialization?: string;
  institution?: string;
  duration: string;
  status: 'completed' | 'current';
  description: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  type: 'internship' | 'job' ;
  description: string;
  status: 'current' | 'completed';
}

const educationData: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    specialization: 'Big Data Analytics',
    duration: '2022–2026',
    status: 'current',
    description: 'Specializing in machine learning, data analytics, and big data processing technologies. Coursework includes advanced algorithms, database systems, and AI applications.'
  },
  {
    degree: 'Diploma in Biomedical Instrumentation',
    duration: 'Completed',
    status: 'completed',
    description: 'Comprehensive study of healthcare technology, medical devices, and biomedical signal processing. Bridging the gap between technology and healthcare.'
  }
];

const experienceData: ExperienceItem[] = [
  {
    title: 'AI Virtual Intern',
    company: 'Infosys Springboard',
    duration: 'Current',
    type: 'internship',
    status: 'current',
    description: 'Working on AI and machine learning projects. Project details restricted by company policy.'
  },
  {
    title: 'Hiring Assistant (Remote)',
    company: 'Team Bulgogi',
    duration: '2 months',
    type: 'freelance',
    status: 'completed',
    description: 'Assisted with online recruitment processes, candidate evaluation, and hiring workflows. Worked remotely with international team.'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional experiences in the field of data science and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card key={index} className="portfolio-card animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            {edu.status === 'current' ? (
                              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                            ) : (
                              <div className="w-3 h-3 bg-primary-glow rounded-full" />
                            )}
                            <span className="text-sm font-medium text-primary uppercase">
                              {edu.status === 'current' ? 'In Progress' : 'Completed'}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold">{edu.degree}</h4>
                          {edu.specialization && (
                            <p className="text-primary font-medium">Specialization: {edu.specialization}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

                      <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="font-medium">Academic Excellence</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <Card key={index} className="portfolio-card animate-scale-in" style={{ animationDelay: `${(index + 2) * 200}ms` }}>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            {exp.status === 'current' ? (
                              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                            ) : (
                              <div className="w-3 h-3 bg-primary-glow rounded-full" />
                            )}
                            <span className="text-sm font-medium text-primary uppercase">
                              {exp.type} • {exp.status === 'current' ? 'Current' : 'Completed'}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold">{exp.title}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="font-medium">Remote</span>
                        </div>
                        {exp.type === 'internship' && (
                          <div className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Virtual Internship
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;