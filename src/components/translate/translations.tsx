export type Translations = {
  pt: {
    description: string;
    iam: string;
    about: string;
    skills: string;
    experiences: string;
    projects: string;
    contact: string;
    githubRepo: string;
    webAccess: string;
    privateRepo: string;
  };
  en: {
    about: string;
    skills: string;
    experiences: string;
    projects: string;
    contact: string;
    iam: string;
    description: string;
    githubRepo: string;
    webAccess: string;
    privateRepo: string;
  };
};

export const translations: Translations = {
  pt: {
    about: "Sobre",
    skills: "Habilidades",
    experiences: "Experiências",
    projects: "Projetos",
    contact: "Contatos",
    iam: "Eu sou",
    description: "Sou Luiz Clovis, Desenvolvedor Full Stack especializado na criação de ecossistemas de software escaláveis, modernos e de alta performance. Atuo no ciclo completo de engenharia — desde a arquitetura de back-ends robustos e bancos de dados relacionais e distribuídos (.NET 8, C#, Node.js, Python, PostgreSQL, SQL Server e Supabase) até interfaces fluidas e intuitivas com Next.js, React e React Native. Aplico práticas consolidadas de Clean Architecture, metodologias ágeis e desenvolvimento assistido por IA (SDD), com foco contínuo em qualidade de código, segurança, escalabilidade e impacto real de negócio.",
    githubRepo: "Repositório GitHub",
    webAccess: "Acesso Web",
    privateRepo: "Repositório Privado"
  },
  en: {
    about: "About",
    skills: "Skills",
    experiences: "Experiences",
    projects: "Projects",
    contact: "Contacts",
    iam: "I'm",
    description: "I'm Luiz Clovis, a Full Stack Developer specialized in building scalable, modern, and high-performance software ecosystems. I cover the entire engineering lifecycle — from designing resilient back-ends and robust relational and distributed databases (.NET 8, C#, Node.js, Python, PostgreSQL, SQL Server, and Supabase) to crafting responsive, intuitive interfaces with Next.js, React, and React Native. I leverage Clean Architecture, agile practices, and AI-assisted development (SDD), focusing on code quality, security, scalability, and measurable business impact.",
    githubRepo: "GitHub Repository",
    webAccess: "Web Access",
    privateRepo: "Private Repository"
  }
};
