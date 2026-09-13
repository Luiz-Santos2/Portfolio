export declare interface Project {
    id: number;
    Title: string;
    Description: string;
    RepositoryURL?: string;
    ProjectURL?: string;
    DemoURL?: string;
    ArchitectureURL?: string;
    Tags: Array<string>;
    SkillsIcons: string | Array<string>;
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
            Description: "Sistema corporativo enterprise para controle de conformidade e entrega de EPIs com autenticação biométrica digital via hardware. Desenvolvido com .NET 8, Clean Architecture, CQRS, WPF (MVVM), SQL Server 2022, relatórios automatizados (QuestPDF/ClosedXML) e auditoria de segurança rigorosa em conformidade com as normas regulamentadoras NR-6.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: [".NET 8", "C#", "Clean Architecture", "CQRS", "WPF", "SQL Server", "Biometria", "Entity Framework"],
            SkillsIcons: "csharp,dotnet,sqlserver,windows",
            Private: true
        },
        {
            id: 2,
            Title: "PJControl",
            Description: "Plataforma SaaS corporativa para gestão financeira, conciliação e conformidade fiscal de MEI, Microempresas e Prestadores de Serviços PJ. Processamento assíncrono e parsing inteligente de notas fiscais (XML NF-e/NFS-e SPED, PDF DANFSE e CSV), cálculo automatizado de faturamento acumulado, projeção fiscal e controle de teto anual em tempo real com PostgreSQL e Supabase RLS.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: ["Next.js 14", "React", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS", "Regras Fiscais"],
            SkillsIcons: "nextjs,react,supabase,postgresql,typescript,tailwind",
            Private: true
        },
        {
            id: 3,
            Title: "PipoFinance",
            Description: "Plataforma avançada de inteligência e gestão financeira pessoal. Arquitetura moderna e reativa construída com Next.js 15 (App Router), React 19, TypeScript e Supabase (PostgreSQL), com autenticação segura Google OAuth, controle de contas, cartões de crédito parcelados, recorrências e indicadores econômicos.",
            RepositoryURL: undefined,
            ProjectURL: "https://pipofinance.vercel.app/",
            Tags: ["Next.js 15", "React 19", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS"],
            SkillsIcons: "nextjs,react,supabase,postgresql,typescript,tailwind",
            Private: true
        },
        {
            id: 4,
            Title: "SaasOficina",
            Description: "Solução ERP SaaS multi-tenant para gestão completa de oficinas mecânicas e centros automotivos. Backend robusto em Node.js com PostgreSQL, painel web em Next.js, aplicação desktop com Electron e aplicativo móvel com React Native Expo para mecânicos e clientes em tempo real.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: ["Node.js", "TypeScript", "PostgreSQL", "Next.js", "Electron", "React Native", "Expo"],
            SkillsIcons: "nodejs,typescript,postgresql,nextjs,electron,reactnative,expo",
            Private: true
        },
        {
            id: 5,
            Title: "IA Aplicada — Guia Interativo",
            Description: "Plataforma interativa de capacitação e estudos avançados em Inteligência Artificial Aplicada. Trilha estruturada em 15 módulos práticos abrangendo LLMs, RAG (Retrieval-Augmented Generation), MCP (Model Context Protocol), Agentes Autônomos, Orquestração Multi-Agente, Function Calling, Embeddings, Observabilidade, Guardrails e IA em Produtos.",
            RepositoryURL: undefined,
            ProjectURL: "https://mini-curso-ai.vercel.app/",
            Tags: ["React 19", "TypeScript", "Vite", "IA Aplicada", "LLMs", "RAG", "MCP", "Multi-Agentes"],
            SkillsIcons: "react,typescript,vite,claude,openai",
            Private: true
        },
        {
            id: 6,
            Title: "Minha Gravidez / Meu Parto (App Mobile)",
            Description: "Aplicativo móvel multiplataforma focado em acompanhamento gestacional, saúde materno-infantil, parto e pós-parto. Desenvolvido com interface intuitiva, suporte offline, notificações e integração com serviços em nuvem.",
            RepositoryURL: "https://github.com/Luiz-Santos2/meu-parto/tree/firebase",
            ProjectURL: "https://expo.dev/preview/update?message=Realizado%20ajuste%20em%20todo%20o%20app%20e%20retirado%20o%20build%20do%20github%20actions&updateRuntimeVersion=1.0.0&createdAt=2024-06-01T01%3A04%3A24.744Z&slug=exp&projectId=a8cd90a2-b424-415a-bab0-e60a456b8363&group=5f531c2a-bc70-4225-9d1a-a66fa729a513",
            Tags: ["React Native", "TypeScript", "Expo", "Firebase", "CI/CD"],
            SkillsIcons: "reactnative,typescript,expo,firebase,githubactions",
            Private: false
        },
        {
            id: 7,
            Title: "Gerenciador Minha Gravidez (Web Portal)",
            Description: "Painel web administrativo e de backoffice construído em Next.js para gerenciamento centralizado de conteúdos, dados médicos e recursos informativos consumidos pelo aplicativo mobile.",
            RepositoryURL: "https://github.com/Luiz-Santos2/gerenciador-meu-parto",
            ProjectURL: "https://gerenciador-meu-parto.vercel.app/",
            Tags: ["Next.js", "TypeScript", "React", "GitHub Actions", "Vercel"],
            SkillsIcons: "nextjs,typescript,react,githubactions,vercel",
            Private: false
        },
        {
            id: 8,
            Title: "Equipamentos Florestais",
            Description: "Dashboard analítico para monitoramento de telemetria e coleta de dados operacionais de frotas e maquinários florestais em tempo real (Operando, Parado ou Em Manutenção) com posicionamento geográfico.",
            RepositoryURL: "https://github.com/Luiz-Santos2/forest-equipment",
            ProjectURL: "https://forest-equipment.vercel.app/",
            Tags: ["React", "TypeScript", "Vercel", "GitHub Actions"],
            SkillsIcons: "react,typescript,vercel,githubactions",
            Private: false
        }
    ],
    en: [
        {
            id: 1,
            Title: "EPI Management Biometric",
            Description: "Enterprise PPE compliance and distribution management system with digital hardware biometric authentication. Engineered with .NET 8, Clean Architecture, CQRS, WPF (MVVM), SQL Server 2022, automated reporting (QuestPDF/ClosedXML), and strict security auditing fully compliant with NR-6 regulatory safety standards.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: [".NET 8", "C#", "Clean Architecture", "CQRS", "WPF", "SQL Server", "Biometrics", "Entity Framework"],
            SkillsIcons: "csharp,dotnet,sqlserver,windows",
            Private: true
        },
        {
            id: 2,
            Title: "PJControl",
            Description: "Enterprise SaaS platform for financial management, invoice reconciliation, and tax compliance for freelancers and SMBs (MEI/ME/PJ). Features asynchronous processing and intelligent parsing of tax invoices (XML NF-e/NFS-e SPED, PDF DANFSE, and CSV), cumulative revenue tracking, predictive tax modeling, and real-time annual ceiling monitoring with PostgreSQL and Supabase RLS.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: ["Next.js 14", "React", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS", "Fiscal Rules"],
            SkillsIcons: "nextjs,react,supabase,postgresql,typescript,tailwind",
            Private: true
        },
        {
            id: 3,
            Title: "PipoFinance",
            Description: "Advanced personal financial intelligence and management platform. Modern reactive architecture built with Next.js 15 (App Router), React 19, TypeScript, and Supabase (PostgreSQL), featuring Google OAuth authentication, account management, installment tracking, and live market indicators.",
            RepositoryURL: undefined,
            ProjectURL: "https://pipofinance.vercel.app/",
            Tags: ["Next.js 15", "React 19", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS"],
            SkillsIcons: "nextjs,react,supabase,postgresql,typescript,tailwind",
            Private: true
        },
        {
            id: 4,
            Title: "SaasOficina",
            Description: "Multi-tenant SaaS ERP solution for auto repair shops and automotive service centers. Resilient Node.js and PostgreSQL backend, Next.js web portal, Electron desktop app, and React Native Expo mobile app for mechanics and real-time customer tracking.",
            RepositoryURL: undefined,
            ProjectURL: undefined,
            Tags: ["Node.js", "TypeScript", "PostgreSQL", "Next.js", "Electron", "React Native", "Expo"],
            SkillsIcons: "nodejs,typescript,postgresql,nextjs,electron,reactnative,expo",
            Private: true
        },
        {
            id: 5,
            Title: "Applied AI — Interactive Guide",
            Description: "Interactive platform for training and advanced studies in Applied Artificial Intelligence. Structured curriculum across 15 practical modules covering LLMs, RAG (Retrieval-Augmented Generation), MCP (Model Context Protocol), Autonomous Agents, Multi-Agent Orchestration, Function Calling, Embeddings, Observability, Guardrails, and AI in Products.",
            RepositoryURL: undefined,
            ProjectURL: "https://mini-curso-ai.vercel.app/",
            Tags: ["React 19", "TypeScript", "Vite", "Applied AI", "LLMs", "RAG", "MCP", "Multi-Agent"],
            SkillsIcons: "react,typescript,vite,claude,openai",
            Private: true
        },
        {
            id: 6,
            Title: "My Pregnancy / Childbirth (Mobile App)",
            Description: "Cross-platform mobile application specialized in prenatal care, maternal health, childbirth, and postpartum support. Engineered with an intuitive interface, offline capabilities, push notifications, and cloud integration.",
            RepositoryURL: "https://github.com/Luiz-Santos2/meu-parto/tree/firebase",
            ProjectURL: "https://expo.dev/preview/update?message=Realizado%20ajuste%20em%20todo%20o%20app%20e%20retirado%20o%20build%20do%20github%20actions&updateRuntimeVersion=1.0.0&createdAt=2024-06-01T01%3A04%3A24.744Z&slug=exp&projectId=a8cd90a2-b424-415a-bab0-e60a456b8363&group=5f531c2a-bc70-4225-9d1a-a66fa729a513",
            Tags: ["React Native", "TypeScript", "Expo", "Firebase", "CI/CD"],
            SkillsIcons: "reactnative,typescript,expo,firebase,githubactions",
            Private: false
        },
        {
            id: 7,
            Title: "My Pregnancy Manager (Web Portal)",
            Description: "Administrative web portal and backoffice built with Next.js for centralized content management, medical information updates, and resources consumed by the mobile application.",
            RepositoryURL: "https://github.com/Luiz-Santos2/gerenciador-meu-parto",
            ProjectURL: "https://gerenciador-meu-parto.vercel.app/",
            Tags: ["Next.js", "TypeScript", "React", "GitHub Actions", "Vercel"],
            SkillsIcons: "nextjs,typescript,react,githubactions,vercel",
            Private: false
        },
        {
            id: 8,
            Title: "Forest Equipment",
            Description: "Analytical telemetry and operational monitoring dashboard for forestry machinery and fleets in real-time (Operating, Stopped, or In Maintenance) with geographic tracking.",
            RepositoryURL: "https://github.com/Luiz-Santos2/forest-equipment",
            ProjectURL: "https://forest-equipment.vercel.app/",
            Tags: ["React", "TypeScript", "Vercel", "GitHub Actions"],
            SkillsIcons: "react,typescript,vercel,githubactions",
            Private: false
        }
    ]
};