export declare interface Project {
    id: number;
    Title: string;
    Description: string;
    RepositoryURL?: string;
    ProjectURL?: string;
    Tags: Array<string>;
    SkillsIcons: string;
    Private?: boolean;
}

export declare interface ProjectTranslations {
    pt: Array<Project>;
    en: Array<Project>;
}

export const projects: ProjectTranslations = {
    pt: [
        {
            id: 1,
            Title: "EPI Management Biometric",
            Description: "Sistema corporativo de gestão de entrega e conformidade de EPIs com autenticação biométrica digital por hardware. Arquitetura limpa (Clean Architecture), CQRS, MVVM no frontend desktop WPF, SQL Server, auditoria de segurança e suporte a Dark/Light Mode. Totalmente em conformidade com as normas regulamentadoras NR-6.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: [".NET 8", "C#", "WPF", "SQL Server", "Biometria", "Clean Architecture", "Entity Framework"],
            SkillsIcons: "cs,dotnet,windows",
            Private: true
        },
        {
            id: 2,
            Title: "PipoFinance",
            Description: "Plataforma avançada de gestão e inteligência financeira pessoal. Arquitetura moderna de microsserviços em .NET 8, banco de dados NoSQL MongoDB, frontend reativo em Next.js e TypeScript, proporcionando controle orçamentário automatizado, relatórios de fluxo de caixa e alta escalabilidade.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: [".NET 8", "C#", "Next.js", "MongoDB", "TypeScript", "Docker"],
            SkillsIcons: "dotnet,cs,nextjs,mongodb,ts,docker",
            Private: true
        },
        {
            id: 3,
            Title: "SaasOficina",
            Description: "Solução ERP SaaS multi-tenant para gestão completa de oficinas mecânicas e centros automotivos. Backend robusto em Node.js com PostgreSQL, painel web em Next.js, aplicação desktop com Electron e aplicativo móvel com React Native Expo para mecânicos e clientes em tempo real.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: ["Node.js", "TypeScript", "PostgreSQL", "Next.js", "Electron", "React Native", "Expo"],
            SkillsIcons: "nodejs,ts,postgres,nextjs,react,electron",
            Private: true
        },
        {
            id: 4,
            Title: "Minha Gravidez / Meu Parto (App Mobile)",
            Description: "Aplicativo móvel multiplataforma focado em acompanhamento gestacional, saúde materno-infantil, parto e pós-parto. Desenvolvido com interface intuitiva, suporte offline, notificações e integração com serviços em nuvem.",
            RepositoryURL: "https://github.com/Luiz-Santos2/meu-parto/tree/firebase",
            ProjectURL: "https://expo.dev/preview/update?message=Realizado%20ajuste%20em%20todo%20o%20app%20e%20retirado%20o%20build%20do%20github%20actions&updateRuntimeVersion=1.0.0&createdAt=2024-06-01T01%3A04%3A24.744Z&slug=exp&projectId=a8cd90a2-b424-415a-bab0-e60a456b8363&group=5f531c2a-bc70-4225-9d1a-a66fa729a513",
            Tags: ["React Native", "TypeScript", "Expo", "Firebase", "CI/CD"],
            SkillsIcons: "react,ts,firebase,githubactions",
            Private: false
        },
        {
            id: 5,
            Title: "Gerenciador Minha Gravidez (Web Portal)",
            Description: "Painel web administrativo e de backoffice construído em Next.js para gerenciamento centralizado de conteúdos, dados médicos e recursos informativos consumidos pelo aplicativo mobile.",
            RepositoryURL: "https://github.com/Luiz-Santos2/gerenciador-meu-parto",
            ProjectURL: "https://gerenciador-meu-parto.vercel.app/",
            Tags: ["Next.js", "TypeScript", "React", "GitHub Actions", "Vercel"],
            SkillsIcons: "nextjs,ts,githubactions,vercel",
            Private: false
        },
        {
            id: 6,
            Title: "Equipamentos Florestais",
            Description: "Dashboard analítico para monitoramento de telemetria e coleta de dados operacionais de frotas e maquinários florestais em tempo real (Operando, Parado ou Em Manutenção) com posicionamento geográfico.",
            RepositoryURL: "https://github.com/Luiz-Santos2/forest-equipment",
            ProjectURL: "https://forest-equipment.vercel.app/",
            Tags: ["React", "TypeScript", "Vercel", "GitHub Actions"],
            SkillsIcons: "react,ts,vercel,githubactions",
            Private: false
        }
    ],
    en: [
        {
            id: 1,
            Title: "EPI Management Biometric",
            Description: "Enterprise PPE management and compliance system with hardware biometric authentication. Engineered with Clean Architecture, CQRS, MVVM in WPF desktop, SQL Server, security auditing, and Dark/Light mode support. Fully compliant with NR-6 regulatory safety standards.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: [".NET 8", "C#", "WPF", "SQL Server", "Biometrics", "Clean Architecture", "Entity Framework"],
            SkillsIcons: "cs,dotnet,windows",
            Private: true
        },
        {
            id: 2,
            Title: "PipoFinance",
            Description: "Advanced personal financial intelligence and management platform. Modern microservices architecture built with .NET 8, MongoDB NoSQL database, reactive frontend in Next.js and TypeScript, offering automated budgeting, cash flow insights, and high scalability.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: [".NET 8", "C#", "Next.js", "MongoDB", "TypeScript", "Docker"],
            SkillsIcons: "dotnet,cs,nextjs,mongodb,ts,docker",
            Private: true
        },
        {
            id: 3,
            Title: "SaasOficina",
            Description: "Multi-tenant SaaS ERP solution for auto repair shops and automotive service centers. Resilient Node.js and PostgreSQL backend, Next.js web portal, Electron desktop app, and React Native Expo mobile app for mechanics and real-time customer tracking.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: ["Node.js", "TypeScript", "PostgreSQL", "Next.js", "Electron", "React Native", "Expo"],
            SkillsIcons: "nodejs,ts,postgres,nextjs,react,electron",
            Private: true
        },
        {
            id: 4,
            Title: "My Pregnancy / Childbirth (Mobile App)",
            Description: "Cross-platform mobile application specialized in prenatal care, maternal health, childbirth, and postpartum support. Engineered with an intuitive interface, offline capabilities, push notifications, and cloud integration.",
            RepositoryURL: "https://github.com/Luiz-Santos2/meu-parto/tree/firebase",
            ProjectURL: "https://expo.dev/preview/update?message=Realizado%20ajuste%20em%20todo%20o%20app%20e%20retirado%20o%20build%20do%20github%20actions&updateRuntimeVersion=1.0.0&createdAt=2024-06-01T01%3A04%3A24.744Z&slug=exp&projectId=a8cd90a2-b424-415a-bab0-e60a456b8363&group=5f531c2a-bc70-4225-9d1a-a66fa729a513",
            Tags: ["React Native", "TypeScript", "Expo", "Firebase", "CI/CD"],
            SkillsIcons: "react,ts,firebase,githubactions",
            Private: false
        },
        {
            id: 5,
            Title: "My Pregnancy Manager (Web Portal)",
            Description: "Administrative web portal and backoffice built with Next.js for centralized content management, medical information updates, and resources consumed by the mobile application.",
            RepositoryURL: "https://github.com/Luiz-Santos2/gerenciador-meu-parto",
            ProjectURL: "https://gerenciador-meu-parto.vercel.app/",
            Tags: ["Next.js", "TypeScript", "React", "GitHub Actions", "Vercel"],
            SkillsIcons: "nextjs,ts,githubactions,vercel",
            Private: false
        },
        {
            id: 6,
            Title: "Forest Equipment",
            Description: "Analytical telemetry and operational monitoring dashboard for forestry machinery and fleets in real-time (Operating, Stopped, or In Maintenance) with geographic tracking.",
            RepositoryURL: "https://github.com/Luiz-Santos2/forest-equipment",
            ProjectURL: "https://forest-equipment.vercel.app/",
            Tags: ["React", "TypeScript", "Vercel", "GitHub Actions"],
            SkillsIcons: "react,ts,vercel,githubactions",
            Private: false
        }
    ]
};