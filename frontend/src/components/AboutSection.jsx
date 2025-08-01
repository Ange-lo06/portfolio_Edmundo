import React from 'react';
import { personalInfo } from '../data/mock';
import { MapPin, Phone, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in stagger-1">
            <div className="label mb-4">SOBRE MIM</div>
            <h2 className="section-title mb-8">
              Técnico em Desenvolvimento com Foco em <span className="text-accent">Soluções Back-End</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="fade-in stagger-2">
              <p className="text-body mb-6 leading-relaxed">
                Sou técnico em desenvolvimento de sistemas pelo SENAI e atualmente curso Engenharia de Software pela UNIFAN. 
                Atuei por mais de <strong>um ano e quatro meses como estagiário na área de desenvolvimento</strong>, período em que tive a 
                oportunidade de trabalhar com Delphi e banco de dados Firebird.
              </p>
              
              <p className="text-body mb-6 leading-relaxed">
                Durante esse tempo, desenvolvi funcionalidades completas, realizei ajustes em sistemas legados, criei CRUDs, 
                realizei testes e ofereci apoio direto aos usuários finais. Essas experiências reforçaram minha capacidade de 
                aprender de forma autônoma, resolver problemas e entregar soluções funcionais.
              </p>

              <div className="accent-line mb-6"></div>

              <h3 className="text-large font-semibold mb-4">Principais Soft Skills</h3>
              <ul className="text-body space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Comunicação clara</strong>, tanto com times técnicos quanto com usuários finais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Proatividade</strong>, sempre buscando antecipar problemas e propor melhorias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Trabalho em equipe</strong>, valorizando a colaboração e o aprendizado mútuo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Resiliência e adaptação</strong>, essenciais para lidar com mudanças e imprevistos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span><strong>Organização e foco</strong>, para entregar soluções dentro do prazo e com qualidade</span>
                </li>
              </ul>
            </div>

            <div className="fade-in stagger-3">
              <div className="card-minimal">
                <h3 className="text-large font-semibold mb-6">Informações de Contato</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-accent" size={20} />
                    <span className="text-body">{personalInfo.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-accent" size={20} />
                    <span className="text-body">{personalInfo.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-accent" size={20} />
                    <span className="text-body">{personalInfo.email}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="label mb-4">IDIOMAS</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-body">Português</span>
                      <span className="label text-accent">NATIVO</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-body">Inglês</span>
                      <span className="label text-accent">BÁSICO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;