import React from 'react';
import { experiences } from '../data/mock';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-spacing">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in stagger-1">
            <div className="label mb-4">EXPERIÊNCIA PROFISSIONAL</div>
            <h2 className="section-title mb-12">
              Trajetória <span className="text-accent">Profissional</span>
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`fade-in stagger-${index + 2}`}>
                <Card className="card-minimal border-0 shadow-none">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <CardTitle className="text-large font-semibold mb-2 md:mb-0">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-accent">
                        <Calendar size={16} />
                        <span className="label">{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="text-accent" size={18} />
                      <span className="text-body font-medium">{exp.company}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="accent-line mb-4"></div>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start text-body">
                          <span className="text-accent mr-3 mt-1 flex-shrink-0">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;