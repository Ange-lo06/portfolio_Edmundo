import React from 'react';
import { technicalSkills } from '../data/mock';
import { Code, Database, GitBranch, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: <Code className="text-accent" size={24} />,
      skills: technicalSkills.languages,
      description: "Linguagens com as quais tenho experiência prática"
    },
    {
      title: "Banco de Dados",
      icon: <Database className="text-accent" size={24} />,
      skills: technicalSkills.databases,
      description: "Sistemas de gerenciamento de banco de dados"
    },
    {
      title: "Ferramentas",
      icon: <GitBranch className="text-accent" size={24} />,
      skills: technicalSkills.tools,
      description: "Controle de versão e colaboração"
    },
    {
      title: "Metodologias",
      icon: <Zap className="text-accent" size={24} />,
      skills: technicalSkills.methodologies,
      description: "Práticas de desenvolvimento ágil"
    }
  ];

  return (
    <section id="skills" className="section-spacing">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in stagger-1">
            <div className="label mb-4">CONHECIMENTOS TÉCNICOS</div>
            <h2 className="section-title mb-12">
              Habilidades e <span className="text-accent">Tecnologias</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`fade-in stagger-${index + 2}`}>
                <Card className="card-minimal border-0 shadow-none h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      {category.icon}
                      <CardTitle className="text-large font-semibold">
                        {category.title}
                      </CardTitle>
                    </div>
                    <p className="text-body text-secondary">
                      {category.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="accent-line mb-4"></div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="outline"
                          className="
                            bg-white border-gray-300 text-gray-800 hover:bg-red-50 hover:border-red-300 hover:text-red-700
                            rounded-none font-medium px-3 py-1 transition-colors duration-200
                          "
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16 fade-in stagger-6">
            <div className="card-minimal">
              <div className="text-center">
                <h3 className="text-large font-semibold mb-4">
                  Sempre Aprendendo
                </h3>
                <p className="text-body text-secondary max-w-2xl mx-auto">
                  Estou em constante evolução e tenho entusiasmo por contribuir com projetos que gerem impacto real. 
                  Vejo cada oportunidade como uma chance de crescer junto com a equipe e aplicar meus conhecimentos 
                  em um ambiente desafiador e inovador.
                </p>
                <div className="accent-line mx-auto mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;