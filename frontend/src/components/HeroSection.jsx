import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/mock';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 section-spacing">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="hero-title mb-6">
              Desenvolvedor<br />
              <span className="text-accent">Back-End</span>
            </h1>
            
            <div className="accent-line mx-auto mb-8"></div>
            
            <p className="text-large mb-8 max-w-2xl mx-auto text-secondary">
              {personalInfo.objective}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('about')}
                className="btn-accent"
              >
                Ver Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Entre em Contato
              </button>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <a 
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 nav-link"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 nav-link"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 text-accent"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;