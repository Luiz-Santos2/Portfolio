export interface TechIconMeta {
  key: string;
  label: string;
  iconUrl: string;
}

const ICONIFY_BASE_URL = 'https://api.iconify.design';

const TECH_ICON_MAP: Record<string, { label: string; iconName: string }> = {
  // Linguagens & Runtimes
  python: { label: 'Python', iconName: 'logos:python' },
  py: { label: 'Python', iconName: 'logos:python' },
  csharp: { label: 'C#', iconName: 'logos:c-sharp' },
  cs: { label: 'C#', iconName: 'logos:c-sharp' },
  dotnet: { label: '.NET', iconName: 'logos:dotnet' },
  dotnetcore: { label: '.NET Core', iconName: 'devicon:dotnetcore' },
  nodejs: { label: 'Node.js', iconName: 'logos:nodejs-icon' },
  typescript: { label: 'TypeScript', iconName: 'logos:typescript-icon' },
  ts: { label: 'TypeScript', iconName: 'logos:typescript-icon' },
  javascript: { label: 'JavaScript', iconName: 'logos:javascript' },
  js: { label: 'JavaScript', iconName: 'logos:javascript' },
  html: { label: 'HTML5', iconName: 'logos:html-5' },
  html5: { label: 'HTML5', iconName: 'logos:html-5' },
  css: { label: 'CSS3', iconName: 'logos:css-3' },
  css3: { label: 'CSS3', iconName: 'logos:css-3' },
  bash: { label: 'Bash', iconName: 'devicon:bash' },
  powershell: { label: 'PowerShell', iconName: 'devicon:powershell' },

  // Frameworks & Bibliotecas Front-end
  react: { label: 'React', iconName: 'logos:react' },
  reactnative: { label: 'React Native', iconName: 'logos:react' },
  nextjs: { label: 'Next.js', iconName: 'logos:nextjs-icon' },
  angular: { label: 'Angular', iconName: 'logos:angular-icon' },
  vite: { label: 'Vite', iconName: 'logos:vitejs' },
  vitejs: { label: 'Vite', iconName: 'logos:vitejs' },
  expo: { label: 'Expo', iconName: 'logos:expo-icon' },
  electron: { label: 'Electron', iconName: 'logos:electron' },
  tailwind: { label: 'Tailwind CSS', iconName: 'logos:tailwindcss-icon' },
  tailwindcss: { label: 'Tailwind CSS', iconName: 'logos:tailwindcss-icon' },
  styledcomponents: { label: 'Styled Components', iconName: 'devicon:styledcomponents' },

  // Testes & Qualidade
  selenium: { label: 'Selenium', iconName: 'logos:selenium' },
  jest: { label: 'Jest', iconName: 'logos:jest' },
  cypress: { label: 'Cypress', iconName: 'logos:cypress-icon' },
  playwright: { label: 'Playwright', iconName: 'logos:playwright' },

  // Frameworks Back-end
  flask: { label: 'Flask', iconName: 'logos:flask' },

  // Bancos de Dados & BaaS
  postgresql: { label: 'PostgreSQL', iconName: 'logos:postgresql' },
  postgres: { label: 'PostgreSQL', iconName: 'logos:postgresql' },
  sqlserver: { label: 'SQL Server', iconName: 'devicon:microsoftsqlserver' },
  mongodb: { label: 'MongoDB', iconName: 'logos:mongodb-icon' },
  mysql: { label: 'MySQL', iconName: 'logos:mysql' },
  redis: { label: 'Redis', iconName: 'logos:redis' },
  firebase: { label: 'Firebase', iconName: 'logos:firebase' },
  supabase: { label: 'Supabase', iconName: 'logos:supabase-icon' },

  // DevOps, Cloud & Ferramentas
  docker: { label: 'Docker', iconName: 'logos:docker-icon' },
  git: { label: 'Git', iconName: 'logos:git-icon' },
  github: { label: 'GitHub', iconName: 'devicon:github' },
  gitlab: { label: 'GitLab', iconName: 'logos:gitlab' },
  githubactions: { label: 'GitHub Actions', iconName: 'devicon:githubactions' },
  cloudflare: { label: 'Cloudflare', iconName: 'logos:cloudflare-icon' },
  postman: { label: 'Postman', iconName: 'logos:postman-icon' },
  vercel: { label: 'Vercel', iconName: 'devicon:vercel' },
  vscode: { label: 'VS Code', iconName: 'devicon:vscode' },
  visualstudio: { label: 'Visual Studio', iconName: 'devicon:visualstudio' },
  windows: { label: 'Windows', iconName: 'devicon:windows8' },

  // Agentes de IA & AI Coding
  claude: { label: 'Claude (Anthropic)', iconName: 'simple-icons:anthropic' },
  anthropic: { label: 'Anthropic', iconName: 'simple-icons:anthropic' },
  cursor: { label: 'Cursor AI', iconName: 'simple-icons:cursor' },
  openai: { label: 'OpenAI / Codex', iconName: 'simple-icons:openai' },
  codex: { label: 'OpenAI Codex', iconName: 'simple-icons:openai' },
  antigravity: { label: 'Antigravity (Google DeepMind)', iconName: 'logos:google-icon' },
  google: { label: 'Google DeepMind', iconName: 'logos:google-icon' },
  deepmind: { label: 'DeepMind', iconName: 'logos:google-icon' },
  probot: { label: 'AI Agent', iconName: 'simple-icons:probot' }
};

export function getTechIcon(key: string): TechIconMeta | null {
  const normalizedKey = key.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  const entry = TECH_ICON_MAP[normalizedKey] || TECH_ICON_MAP[key.trim().toLowerCase()];

  if (!entry) {
    return null;
  }

  return {
    key: normalizedKey,
    label: entry.label,
    iconUrl: `${ICONIFY_BASE_URL}/${entry.iconName}.svg`
  };
}

export function parseTechIcons(icons: string | Array<string>): Array<TechIconMeta> {
  const keys = Array.isArray(icons)
    ? icons
    : icons.split(',').map((s) => s.trim()).filter(Boolean);

  const results: Array<TechIconMeta> = [];
  for (const k of keys) {
    const icon = getTechIcon(k);
    if (icon) {
      results.push(icon);
    }
  }

  return results;
}
