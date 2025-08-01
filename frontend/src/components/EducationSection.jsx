import React from 'react';
import { education } from '../data/mock';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const EducationSection = () => {
  return (
    <section id="education" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in stagger-1">
            <div className="label mb-4">FORMAÇÃO ACADÊMICA</div>
            <h2 className="section-title mb-12">
              Educação e <span className="text-accent">Qualificações</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={edu.id} className={`fade-in stagger-${index + 2}`}>
                <Card className="card-minimal border-0 shadow-none h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <GraduationCap className="text-accent mt-1" size={24} />
                      <Badge 
                        variant={edu.status === 'em andamento' ? 'default' : 'secondary'}
                        className={`
                          ${edu.status === 'em andamento' 
                            ? 'bg-red-600 hover:bg-red-700 text-white' 
                            : 'bg-gray-200 text-gray-800'
                          } 
                          rounded-none uppercase font-medium text-xs px-3 py-1
                        `}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-large font-semibold mb-2 leading-tight">
                      {edu.degree}
                    </CardTitle>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Award className="text-accent" size={16} />
                        <span className="text-body font-medium">{edu.institution}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-accent" size={16} />
                        <span className="label">{edu.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="accent-line mb-4"></div>
                    <p className="text-body text-secondary">
                      {edu.id === 1 
                        ? "Formação em andamento focada no desenvolvimento de software com metodologias modernas, arquitetura de sistemas e gestão de projetos."
                        : "Formação técnica completa em desenvolvimento de sistemas, com foco em programação, banco de dados e análise de sistemas."
                      }
                    </p>
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

export default EducationSection;