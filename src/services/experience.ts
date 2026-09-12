export declare interface Experience {
    id: number;
    title: string;
    description: string;
    date: string;
}

export declare interface ExperienceTranslations {
    pt: Array<Experience>;
    en: Array<Experience>;
}
  
export const experience: ExperienceTranslations = {
    pt: [
        {
            id: 1,
            title: "Desenvolvedor Full Stack — StintEdu",
            description: "Arquitetura e desenvolvimento da plataforma educacional e soluções analíticas de Business Intelligence. Construção de APIs RESTful com Python e Flask, autenticação segura com JWT e processamento assíncrono. Modelagem e otimização de banco de dados relacional com PostgreSQL, gestão de cache e filas distribuídas com Redis e armazenamento escalável com Cloudflare R2. Orquestração e deploy contínuo em nuvem com Railway e Docker.",
            date: "Agosto 2026 - Presente"
        },
        {
            id: 2,
            title: "Desenvolvedor Full Stack — Joya Solutions",
            description: "Desenvolvimento e sustentação de sistemas corporativos de alta disponibilidade. Criação de APIs robustas e microsserviços com C# / .NET 8 e Node.js, interfaces dinâmicas com Angular e soluções serverless no Azure Functions. Otimização de consultas e procedimentos em SQL Server, conteinerização com Docker e atuação em times ágeis com foco em entrega contínua.",
            date: "Setembro 2024 - Presente"
        },
        {
            id: 3,
            title: "Engenheiro Front-end & Mobile",
            description: "Engenharia de aplicativos móveis multiplataforma com React Native e TypeScript. Criação de interfaces responsivas, arquitetura modular, suporte offline, gerenciamento de estado global e integração com serviços em nuvem, garantindo alta fluidez e excelente experiência do usuário.",
            date: "2024"
        },
        {
            id: 4,
            title: "Engenheiro Full Stack — Produtos Web",
            description: "Desenvolvimento de produtos digitais de ponta a ponta, incluindo painéis administrativos (backoffice) em Next.js e React. Modelagem de dados, implementação de fluxos de autenticação, APIs escaláveis, integração de serviços de terceiros e automação de pipelines de CI/CD.",
            date: "2024"
        }
    ],
    en: [
        {
            id: 1,
            title: "Full Stack Developer — StintEdu",
            description: "Architecture and engineering of educational platforms and analytical Business Intelligence solutions. Development of RESTful APIs with Python and Flask, secure JWT authentication, and asynchronous task processing. Database modeling and optimization with PostgreSQL, distributed caching and queues with Redis, and scalable object storage with Cloudflare R2. Cloud orchestration and continuous deployment via Railway and Docker.",
            date: "August 2026 - Present"
        },
        {
            id: 2,
            title: "Full Stack Developer — Joya Solutions",
            description: "Engineering and maintenance of high-availability enterprise systems. Development of robust APIs and microservices with C# / .NET 8 and Node.js, dynamic user interfaces with Angular, and serverless architectures using Azure Functions. Database query and procedure optimization in SQL Server, containerization with Docker, and active participation in agile sprints with continuous delivery.",
            date: "September 2024 - Present"
        },
        {
            id: 3,
            title: "Front-end & Mobile Engineer",
            description: "Cross-platform mobile application engineering with React Native and TypeScript. Development of responsive user interfaces, modular architecture, offline capabilities, state management, and cloud integrations, prioritizing seamless UX and high performance.",
            date: "2024"
        },
        {
            id: 4,
            title: "Full Stack Engineer — Web Products",
            description: "End-to-end digital product engineering, including administrative web portals and backoffice systems with Next.js and React. Data modeling, secure authentication, scalable APIs, third-party integrations, and automated CI/CD deployment pipelines.",
            date: "2024"
        }
    ]
};