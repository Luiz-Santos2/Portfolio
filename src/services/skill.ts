export declare interface Skill {
    id: number;
    title: string;
    skills: string;
    icons: string;
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
            icons: "py,flask,cs,dotnet,nodejs,redis"
        },
        {
            id: 2,
            title: "Front-end",
            skills: "TypeScript, JavaScript, React, Next.js, Angular, HTML5, CSS3, Tailwind CSS, Styled Components, Selenium",
            icons: "typescript,js,react,nextjs,angular,html,css,tailwind,styledcomponents,selenium"
        },
        {
            id: 3,
            title: "Bancos de Dados",
            skills: "PostgreSQL, SQL Server, MongoDB, MySQL, Firebase",
            icons: "postgresql,mongodb,mysql,firebase"
        },
        {
            id: 4,
            title: "Mobile",
            skills: "React Native, Expo",
            icons: "react"
        },
        {
            id: 5,
            title: "DevOps & Ferramentas",
            skills: "Docker, Git, GitHub, GitLab, GitHub Actions, Railway, Cloudflare R2, Postman, Vercel, Bash, Powershell, VS Code, Visual Studio",
            icons: "docker,git,github,gitlab,githubactions,cloudflare,postman,vercel,bash,powershell,vscode,visualstudio"
        }
    ],
    en: [
        {
            id: 1,
            title: "Back-end",
            skills: "Python, Flask, C#, .NET, Node.js, RESTful APIs, JWT, Redis, Microservices",
            icons: "py,flask,cs,dotnet,nodejs,redis"
        },
        {
            id: 2,
            title: "Front-end",
            skills: "TypeScript, JavaScript, React, Next.js, Angular, HTML5, CSS3, Tailwind CSS, Styled Components, Selenium",
            icons: "typescript,js,react,nextjs,angular,html,css,tailwind,styledcomponents,selenium"
        },
        {
            id: 3,
            title: "Databases",
            skills: "PostgreSQL, SQL Server, MongoDB, MySQL, Firebase",
            icons: "postgresql,mongodb,mysql,firebase"
        },
        {
            id: 4,
            title: "Mobile",
            skills: "React Native, Expo",
            icons: "react"
        },
        {
            id: 5,
            title: "DevOps & Tools",
            skills: "Docker, Git, GitHub, GitLab, GitHub Actions, Railway, Cloudflare R2, Postman, Vercel, Bash, Powershell, VS Code, Visual Studio",
            icons: "docker,git,github,gitlab,githubactions,cloudflare,postman,vercel,bash,powershell,vscode,visualstudio"
        }
    ]
};