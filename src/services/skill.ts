export declare interface Skill {
    id: number;
    title: string;
    skills: string;
    icons: string | Array<string>;
}

export declare interface SkillTranslations {
    pt: Array<Skill>;
    en: Array<Skill>;
}
  
export const skills: SkillTranslations = {
    pt: [
        {
            id: 1,
            title: "Back-end",
            skills: "Python, Flask, C#, .NET, Node.js, APIs RESTful, JWT, Redis, Microsserviços",
            icons: "python,flask,csharp,dotnet,nodejs,redis"
        },
        {
            id: 2,
            title: "Front-end",
            skills: "TypeScript, JavaScript, React, Next.js, Angular, HTML5, CSS3, Tailwind CSS, Styled Components",
            icons: "typescript,javascript,react,nextjs,angular,html5,css3,tailwind,styledcomponents"
        },
        {
            id: 3,
            title: "Bancos de Dados",
            skills: "PostgreSQL, Supabase, SQL Server, MongoDB, MySQL, Firebase",
            icons: "postgresql,supabase,sqlserver,mongodb,mysql,firebase"
        },
        {
            id: 4,
            title: "Mobile",
            skills: "React Native, Expo",
            icons: "reactnative,expo"
        },
        {
            id: 5,
            title: "Testes & Qualidade",
            skills: "xUnit, Jest, Selenium (E2E / Automação), TDD, Testes Unitários e de Integração",
            icons: "selenium,jest,csharp,dotnet"
        },
        {
            id: 6,
            title: "DevOps & Ferramentas",
            skills: "Docker, Git, GitHub, GitHub Actions, Railway, Cloudflare R2, Postman, Vercel, Bash, Powershell, VS Code, Visual Studio",
            icons: "docker,git,github,githubactions,cloudflare,postman,vercel,bash,powershell,vscode,visualstudio"
        },
        {
            id: 7,
            title: "Agentes de IA & AI Coding",
            skills: "Claude (Anthropic / Claude Code), Antigravity (Google DeepMind), OpenAI Codex, Cursor, LLMs, MCP (Model Context Protocol), Agentes Autônomos, Prompt & Context Engineering",
            icons: "claude,cursor,openai,antigravity"
        }
    ],
    en: [
        {
            id: 1,
            title: "Back-end",
            skills: "Python, Flask, C#, .NET, Node.js, RESTful APIs, JWT, Redis, Microservices",
            icons: "python,flask,csharp,dotnet,nodejs,redis"
        },
        {
            id: 2,
            title: "Front-end",
            skills: "TypeScript, JavaScript, React, Next.js, Angular, HTML5, CSS3, Tailwind CSS, Styled Components",
            icons: "typescript,javascript,react,nextjs,angular,html5,css3,tailwind,styledcomponents"
        },
        {
            id: 3,
            title: "Databases",
            skills: "PostgreSQL, Supabase, SQL Server, MongoDB, MySQL, Firebase",
            icons: "postgresql,supabase,sqlserver,mongodb,mysql,firebase"
        },
        {
            id: 4,
            title: "Mobile",
            skills: "React Native, Expo",
            icons: "reactnative,expo"
        },
        {
            id: 5,
            title: "Testing & QA",
            skills: "xUnit, Jest, Selenium (E2E / Test Automation), TDD, Unit & Integration Testing",
            icons: "selenium,jest,csharp,dotnet"
        },
        {
            id: 6,
            title: "DevOps & Tools",
            skills: "Docker, Git, GitHub, GitHub Actions, Railway, Cloudflare R2, Postman, Vercel, Bash, Powershell, VS Code, Visual Studio",
            icons: "docker,git,github,githubactions,cloudflare,postman,vercel,bash,powershell,vscode,visualstudio"
        },
        {
            id: 7,
            title: "AI Agents & AI Coding",
            skills: "Claude (Anthropic / Claude Code), Antigravity (Google DeepMind), OpenAI Codex, Cursor, LLMs, MCP (Model Context Protocol), Autonomous Agents, Prompt & Context Engineering",
            icons: "claude,cursor,openai,antigravity"
        }
    ]
};