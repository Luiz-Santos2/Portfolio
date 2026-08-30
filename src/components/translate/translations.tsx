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
    description: "Sou Luiz Clovis, Desenvolvedor Full Stack com sólida vivência na construção de ecossistemas de software escaláveis, modernos e de missão crítica. Minha trajetória une visão de processos operacionais e análise de dados à engenharia de software de alta maturidade — desenvolvendo desde plataformas em nuvem e BI de alta performance (Python/Flask, PostgreSQL, Redis) até sistemas empresariais complexos, ERPs e aplicações desktop e móveis (.NET 8, C#, Node.js, Next.js e React Native). Especialista em transformar regras de negócio desafiadoras em arquiteturas limpas, código resiliente e interfaces fluidas, atuo com foco em entrega contínua de valor, segurança, performance e experiência do usuário.",
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
    description: "I'm Luiz Clovis, a Full Stack Developer with solid experience in designing and building scalable, modern, mission-critical software ecosystems. My background bridges operational insight and data analysis with high-maturity software engineering — delivering everything from high-performance cloud platforms and BI solutions (Python/Flask, PostgreSQL, Redis) to enterprise ERPs, desktop and mobile systems (.NET 8, C#, Node.js, Next.js, and React Native). Specialized in turning complex business logic into clean architecture, resilient code, and seamless interfaces, I am driven by delivering continuous value, performance, security, and exceptional user experiences.",
    githubRepo: "GitHub Repository",
    webAccess: "Web Access",
    privateRepo: "Private Repository"
  }
};
