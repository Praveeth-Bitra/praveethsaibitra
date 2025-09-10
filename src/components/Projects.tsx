import { useState } from 'react';
import { ExternalLink, Github, Calendar, Target, Zap, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Project {
  id: string;
  title: string;
  dates: string;
  type: string;
  description: string;
  outcome: string;
  tech: string[];
  details: {
    problem: string;
    solution: string;
    results: string[];
    dataset?: string;
  };
}

const projects: Project[] = [
  {
    id: 'parkinsons',
    title: "Parkinson's Disease Prediction using Machine Learning",
    dates: 'Jul 2024 – Aug 2025',
    type: 'Machine Learning Project',
    description:
      "Predictive framework for early detection of Parkinson's using vocal biomarkers. Implemented and tuned Logistic Regression, Decision Tree, KNN, XGBoost.",
    outcome: 'Achieved up to 95% accuracy with KNN and 94.8% with XGBoost',
    tech: [
      'Python',
      'scikit-learn',
      'XGBoost',
      'Pandas',
      'Matplotlib',
      'Seaborn',
    ],
    details: {
      problem:
        "Early detection of Parkinson's disease is crucial for treatment effectiveness. Traditional diagnostic methods are often invasive and expensive.",
      solution:
        "Developed a machine learning pipeline using vocal biomarkers to predict Parkinson's disease. Compared multiple algorithms and optimized hyperparameters for maximum accuracy.",
      results: [
        '95% accuracy achieved with KNN algorithm',
        '94.8% accuracy with XGBoost model',
        'Non-invasive vocal biomarker analysis',
        'Comprehensive model comparison and validation',
      ],
      dataset: "UCI Parkinson's Dataset with vocal features",
    },
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    dates: 'Mar 2025 – Nov 2025',
    type: 'Flask Web App, Data Analysis & Visualization',
    description:
      'Flask app to digitalize hospital operations with RBAC aligned to HIPAA principles, dynamic patient records, and an interactive dashboard.',
    outcome:
      'Complete digitalization of hospital workflows with secure data management',
    tech: ['Python (Flask, Pandas)', 'HTML', 'CSS', 'JS (Chart.js)', 'CSV'],
    details: {
      problem:
        'Hospitals need efficient digital systems to manage patient records, appointments, and operations while maintaining data security and compliance.',
      solution:
        'Built a comprehensive Flask web application with role-based access control, patient record management, and interactive analytics dashboard.',
      results: [
        'HIPAA-compliant data management system',
        'Role-based access control implementation',
        'Interactive dashboard with real-time analytics',
        'Streamlined hospital operations workflow',
      ],
    },
  },
  {
    id: 'patient-segmentation',
    title: 'Patient Segmentation Using Clustering Algorithms',
    dates: 'Jun 2024 – Oct 2024',
    type: 'Data Analysis & ML',
    description:
      'K-Means clustering on MIMIC-III (100k+ records) to segment patients by clinical features for improved decision making; included feature engineering and visualization.',
    outcome: 'Improved patient care through data-driven segmentation insights',
    tech: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib'],
    details: {
      problem:
        'Healthcare providers need to understand patient populations to deliver personalized care and optimize resource allocation.',
      solution:
        'Applied K-Means clustering algorithm on MIMIC-III dataset to identify distinct patient groups based on clinical features and demographics.',
      results: [
        'Analyzed 100,000+ patient records',
        'Identified 5 distinct patient segments',
        'Comprehensive feature engineering pipeline',
        'Actionable insights for personalized care',
      ],
      dataset: 'MIMIC-III Critical Care Database',
    },
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work in machine learning, healthcare analytics,
            and data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="portfolio-card cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <Calendar className="w-4 h-4" />
                        {project.dates}
                      </div>
                      <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-medium text-accent">
                      {project.type}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-medium text-primary">
                        {project.outcome}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">
                        Tech Stack:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full font-medium">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <button className="text-primary font-medium hover:text-primary-glow transition-colors flex items-center gap-2">
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <div className="flex gap-2">
                      <Zap className="w-5 h-5 text-primary opacity-50" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-card border-border">
            {selectedProject && (
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.dates}
                    </div>
                    <h2 className="text-3xl font-bold">
                      {selectedProject.title}
                    </h2>
                    <div className="text-accent font-medium">
                      {selectedProject.type}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-muted/20 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Problem Statement */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold gradient-text">
                    Problem Statement
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.details.problem}
                  </p>
                </div>

                {/* Solution Approach */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold gradient-text">
                    Solution Approach
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.details.solution}
                  </p>
                </div>

                {/* Results & Impact */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold gradient-text">
                    Results & Impact
                  </h3>
                  <div className="grid gap-3">
                    {selectedProject.details.results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dataset Info */}
                {selectedProject.details.dataset && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold gradient-text">Dataset</h3>
                    <p className="text-muted-foreground">
                      {selectedProject.details.dataset}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold gradient-text">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-border/30">
                  {selectedProject.id === 'patient-segmentation' && (
                    <a
                      href="https://github.com/Praveeth-Bitra/Patient-Segmentation-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
