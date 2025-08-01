import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="grid-background"></div>
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="header-logo">
              EDMUNDO ANGELO
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="nav-link"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="nav-link"
              >
                Experiência
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="nav-link"
              >
                Formação
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="nav-link"
              >
                Habilidades
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="nav-link"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-accent"
              >
                Contato
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="nav-link text-left"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="nav-link text-left"
                >
                  Experiência
                </button>
                <button 
                  onClick={() => scrollToSection('education')}
                  className="nav-link text-left"
                >
                  Formação
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="nav-link text-left"
                >
                  Habilidades
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="nav-link text-left"
                >
                  Projetos
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-accent"
                >
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;