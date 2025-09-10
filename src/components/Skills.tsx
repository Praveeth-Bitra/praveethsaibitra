import { useState } from 'react';
import { Award, Code, Users, Lightbulb, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  proof: string; // link or image
}

const technicalCategories = [
  {
    category: "Programming",
    skills: ["Python", "Java (familiar)"],
  },
  {
    category: "Development",
    skills: ["HTML", "CSS", "JavaScript", "Flask"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB (familiar)"],
  },
  {
    category: "CS Subjects",
    skills: ["Operating System", "Database Management System"],
  },
  {
    category: "Machine Learning",
    skills: ["TensorFlow (familiar)", "scikit-learn (familiar)", "Deep Learning models and concepts (familiar)"],
  },
];

const softSkills = [
  { name: 'Problem Solving', level: 95 },
  { name: 'Communication', level: 85 },
  { name: 'Teamwork', level: 90 },
  { name: 'Adaptability', level: 88 },
  { name: 'Critical Thinking', level: 92 },
];

const certifications: Certification[] = [
  { name: 'Machine Learning and Data Analytics', issuer: 'Infosys', year: '2025', proof: '/certificates/infosys.png' },
  { name: 'Artificial Intelligence', issuer: 'Infosys', year: '2025', proof: '/certificates/infoai.png' },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte Australia', year: '2025', proof: '/certificates/deloitte.png' },
  { name: 'Supervised Machine Learning: Regression & Classification', issuer: 'Coursera', year: '2025', proof: 'http://coursera.org/account/accomplishments/verify/JO37VHPFTKAU' },
  { name: 'Advanced Learning Algorithms', issuer: 'Coursera', year: '2025', proof: 'https://www.coursera.org/account/accomplishments/verify/O96W2A9A62K8' },
  { name: 'Introduction to Data Science', issuer: 'Cisco', year: '2025', proof: 'https://www.credly.com/badges/158bc6b6-f624-4258-a0d1-34c7c8a7508f/public_url' },
  { name: 'Python Essentials 1', issuer: 'Cisco', year: '2024', proof: 'https://www.credly.com/badges/5b947bd6-6ef0-4168-a164-f55682cc486b/public_url' },
  { name: 'Computer Networks & Internet Protocol', issuer: 'NPTEL', year: '2023', proof: '/certificates/nptel.jpeg' },
  { name: 'Data Analytics Essentials', issuer: 'Cisco', year: '2025', proof: 'https://www.credly.com/badges/503ceb42-cd54-4f59-af65-8476dbc85c84/public_url' },
];

const Skills = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <Card className="portfolio-card animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>

              <div className="space-y-6">
                {technicalCategories.map((group, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">{group.category}</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {group.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="portfolio-card animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary-glow h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="portfolio-card animate-fade-in">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Certifications & Training</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  onClick={() => {
                    if (cert.proof.startsWith('http')) {
                      window.open(cert.proof, '_blank');
                    } else {
                      setSelectedImage(cert.proof);
                    }
                  }}
                  className="cursor-pointer flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                    <Lightbulb className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm leading-tight mb-1">{cert.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">{cert.issuer}</span>
                      <span className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {[
            { label: 'Certifications', value: '10+', icon: Award },
            { label: 'Tech Skills', value: '15+', icon: Code },
            { label: 'Major Projects', value: '3', icon: Lightbulb },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-6 portfolio-card animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Certificates */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImage} alt="Certificate Proof" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
