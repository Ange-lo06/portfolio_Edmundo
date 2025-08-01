import React from "react";
import "./App.css";
import "./styles/portfolio.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { Toaster } from "./components/ui/toaster";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="section-spacing bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center">
            <div className="header-logo mb-4">EDMUNDO ANGELO</div>
            <p className="text-body text-secondary mb-4">
              Desenvolvedor Back-End | Técnico em Desenvolvimento de Sistemas
            </p>
            <div className="accent-line mx-auto mb-4"></div>
            <p className="label text-xs">
              © 2024 Edmundo Ângelo Siqueira dos Anjos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
