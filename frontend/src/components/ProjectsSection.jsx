import React from 'react';
import { projects } from '../data/mock';
import { ExternalLink, Github, Folder, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in stagger-1">
            <div className="label mb-4">PROJETOS DESENVOLVIDOS</div>
            <h2 className="section-title mb-8">
              Trabalhos e <span className="text-accent">Projetos</span>
            </h2>
            <p className="text-body text-secondary mb-12 max-w-2xl">
              Projetos pessoais que demonstram meu interesse contínuo em tecnologia e minha capacidade 
              de aprender de forma autônoma, resolver problemas e entregar soluções funcionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className={`fade-in stagger-${index + 2}`}>
                <Card className="card-minimal border-0 shadow-none">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Folder className="text-accent" size={24} />
                        <CardTitle className="text-large font-semibold">
                          {project.title}
                        </CardTitle>
                      </div>
                      <Badge 
                        variant="outline"
                        className="bg-green-50 border-green-200 text-green-700 rounded-none font-medium px-3 py-1"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-body text-secondary mb-4">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="accent-line mb-4"></div>
                    
                    <div className="mb-6">
                      <h4 className="label mb-3">TECNOLOGIAS UTILIZADAS</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="
                              bg-white border-gray-300 text-gray-800 hover:bg-red-50 hover:border-red-300 hover:text-red-700
                              rounded-none font-medium px-3 py-1 transition-colors duration-200
                            "
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="outline" 
                        className="btn-primary flex items-center space-x-2"
                        disabled={!project.hasDemo}
                      >
                        <ExternalLink size={16} />
                        <span>Ver Demo</span>
                      </Button>
                      {project.hasGithub ? (
                        <Button 
                          variant="outline" 
                          className="btn-primary flex items-center space-x-2"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <Github size={16} />
                          <span>Ver Código</span>
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          className="btn-primary flex items-center space-x-2"
                          disabled={true}
                        >
                          <Github size={16} />
                          <span>Ver Código</span>
                        </Button>
                      )}
                    </div>

                    {!project.hasGithub && (
                      <p className="text-xs text-secondary mt-3 flex items-center">
                        <Settings size={14} className="mr-1" />
                        Link será adicionado em breve
                      </p>
                    )}
                    
                    {project.hasDemo === false && project.hasGithub && (
                      <p className="text-xs text-secondary mt-3 flex items-center">
                        <Settings size={14} className="mr-1" />
                        Demo não disponível - Repositório disponível no GitHub
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-12 fade-in stagger-5">
            <div className="card-minimal text-center">
              <h3 className="text-large font-semibold mb-4">
                Mais Projetos em Desenvolvimento
              </h3>
              <p className="text-body text-secondary mb-6">
                Estou sempre trabalhando em novos projetos e aprimorando minhas habilidades. 
                Em breve, mais trabalhos serão adicionados ao portfólio.
              </p>
              <Button className="btn-accent">
                Ver Repositório GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;