// Mock data for Edmundo's portfolio
export const personalInfo = {
  name: "Edmundo Ângelo Siqueira dos Anjos",
  phone: "(75) 99157-3186",
  email: "edmundosiqueira06@gmail.com",
  location: "Sobradinho, Feira de Santana - BA",
  linkedin: "edmundosiqueira-0bb749234",
  github: "github.com/Ange-lo06",
  objective: "Estágio em programação para aplicar e aprimorar habilidades, contribuir em projetos inovadores e aprender novas tecnologias. Comprometido, colaborativo e pronto para enfrentar desafios em um ambiente dinâmico."
};

export const experiences = [
  {
    id: 1,
    title: "Estagiário em Desenvolvimento",
    company: "Softnew Informática",
    period: "Agosto 2023 - Atual",
    responsibilities: [
      "Desenvolvimento de sistemas utilizando Delphi e banco de dados Firebird",
      "Acompanhamento de demandas técnicas e correções",
      "Participação em processos de implantação de sistemas em clientes",
      "Prestação de suporte técnico a usuários",
      "Apoio na análise de melhorias e manutenção de sistemas legados"
    ]
  },
  {
    id: 2,
    title: "Jovem Aprendiz",
    company: "Hospital Ortopédico",
    period: "Junho 2022 - 2024",
    responsibilities: [
      "Atuação na recepção e atendimento ao público",
      "Organização de documentos e prontuários médicos"
    ]
  },
  {
    id: 3,
    title: "Estagiário",
    company: "Atacadão São Roque",
    period: "Dezembro 2021 - Junho 2023",
    responsibilities: [
      "Atividades operacionais nos setores de embalagem, estoque e notas fiscais"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Engenharia de Software (Bacharelado)",
    institution: "UNIFAN",
    period: "Jan 2023 - Dez 2027",
    status: "em andamento"
  },
  {
    id: 2,
    degree: "Técnico em Desenvolvimento de Sistemas",
    institution: "SENAI/Feira de Santana",
    period: "Jan 2022 - Jul 2023",
    status: "concluído"
  }
];

export const technicalSkills = {
  languages: ["Python", "Java", "Delphi"],
  databases: ["MySQL", "Firebird"],
  tools: ["Git", "GitHub"],
  methodologies: ["Metodologias Ágeis (Scrum, Kanban)"]
};

export const languages = [
  { language: "Português", level: "Nativo" },
  { language: "Inglês", level: "Básico" }
];

export const projects = [
  {
    id: 1,
    title: "Sistema de Agendamento",
    description: "Sistema com horários personalizados para gerenciamento de agendamentos",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    status: "Concluído",
    link: "https://github.com/Ange-lo06/Agendamento",
    hasDemo: false,
    hasGithub: true
  },
  {
    id: 2,
    title: "Sistema de Estoque",
    description: "Sistema de controle de estoque desenvolvido com Python Flask para gerenciamento de produtos e inventário",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    status: "Concluído",
    link: "https://github.com/Ange-lo06/Estoque_Flask",
    hasDemo: false,
    hasGithub: true
  },
  {
    id: 3,
    title: "To-Do List",
    description: "Ferramenta de produtividade para gerenciamento de tarefas",
    technologies: ["JavaScript", "HTML", "CSS"],
    status: "Concluído",
    link: "#",
    hasDemo: false,
    hasGithub: false
  }
];