// data/logData.ts

export type LogEntry = {
  day: number;
  date: string; // ISO format
  week: string;
  task: string;
  whatIDid: string;
  filesTouched: string[];
  link?: string;
  learned: string[];
};

export const logData: LogEntry[] = [
  {
    day: 14,
    date: "2025-09-25",
    week: "Foundations II",
    task: "Review & deploy",
    whatIDid:
      "Tested all routes, verified Navbar links, checked accessibility, ensured Tailwind polish is consistent, deployed to Vercel.",
    filesTouched: [
      "components/Header.tsx",
      "app/layout.tsx",
      "components/SectionHeader.tsx",
      "components/EmptyState.tsx",
    ],
    link: "https://your-vercel-url.vercel.app",
    learned: [
      "How review days consolidate weekly progress",
      "Importance of catching small consistency issues",
      "How to reflect on friction points for later refactor weeks",
    ],
  },
  {
    day: 13,
    date: "2025-09-24",
    week: "Foundations II",
    task: "Add empty states for all pages",
    whatIDid:
      "Created EmptyState component and added to every page with unique messages.",
    filesTouched: ["components/EmptyState.tsx", "all page.tsx files"],
    learned: [
      "What empty states are and why they matter",
      "How reusable components simplify design",
      "How subtle styling communicates context",
    ],
  },
  {
    day: 12,
    date: "2025-09-23",
    week: "Foundations II",
    task: "Add loading placeholders for Gallery and Videos",
    whatIDid:
      "Created loading.tsx in Gallery and Videos to show skeleton UI during data fetch delays.",
    filesTouched: ["app/gallery/loading.tsx", "app/videos/loading.tsx"],
    learned: [
      "How Next.js automatically uses loading.tsx",
      "Why skeleton UIs improve UX",
      "How to simulate delay with setTimeout in async pages",
    ],
  },
  {
    day: 11,
    date: "2025-09-22",
    week: "Foundations II",
    task: "Add shared SectionHeader component",
    whatIDid:
      "Created SectionHeader.tsx and replaced duplicated headings in all pages with reusable component.",
    filesTouched: ["components/SectionHeader.tsx", "all page.tsx files"],
    learned: [
      "How props pass data to components",
      "Why DRY code matters for maintainability",
      "How semantic HTML improves accessibility",
    ],
  },
  {
    day: 10,
    date: "2025-09-21",
    week: "Foundations II",
    task: "Wire Navbar links to all pages",
    whatIDid:
      "Expanded navLinks in Header.tsx to include all 11 routes. Used usePathname to highlight active link.",
    filesTouched: ["components/Header.tsx"],
    learned: [
      "Difference between <a> and <Link> in Next.js",
      "How to conditionally style active links",
      "Why aria-current helps accessibility",
    ],
  },
  {
    day: 9,
    date: "2025-09-20",
    week: "Foundations II",
    task: "Add minimal content blocks",
    whatIDid:
      "Expanded placeholders with unique titles, descriptions, and stub buttons for each page.",
    filesTouched: ["all new page.tsx files"],
    learned: [
      "How to make each page unique with minimal content",
      "Why placeholder text helps navigation feel alive",
      "Stub actions give visual anchors for later features",
    ],
  },
  {
    day: 8,
    date: "2025-09-19",
    week: "Foundations II",
    task: "Scaffold all pages (Welcome, Core, Gallery, Videos, Wealth, Abollo, Nexus, Thoughts, Visions, Vault, About)",
    whatIDid:
      "Created folders and page.tsx files for 10 new routes, each with a heading, paragraph, and stub button.",
    filesTouched: [
      "app/welcome/page.tsx",
      "app/core/page.tsx",
      "app/gallery/page.tsx",
      "app/videos/page.tsx",
      "app/wealth/page.tsx",
      "app/abollo/page.tsx",
      "app/nexus/page.tsx",
      "app/thoughts/page.tsx",
      "app/visions/page.tsx",
      "app/vault/page.tsx",
      "app/about/page.tsx",
    ],
    learned: [
      "How Next.js App Router maps folders to routes",
      "Why scaffolding early prevents forgetting sections",
      "Difference between Home route and other pages",
    ],
  },
  {
    day: 7,
    date: "2025-09-18",
    week: "Foundations I",
    task: "Review & deploy",
    whatIDid:
      "Cleaned up Navbar and Footer, confirmed theme toggle works, tested accessibility, deployed to Vercel.",
    filesTouched: [
      "app/layout.tsx",
      "components/Header.tsx",
      "components/Footer.tsx",
    ],
    learned: [
      "How to reflect at the end of a dev cycle",
      "How small review days prevent big problems later",
      "That deploy tests real-world performance",
    ],
  },
  {
    day: 6,
    date: "2025-09-17",
    week: "Foundations I",
    task: "Light Tailwind polish for header/footer",
    whatIDid:
      "Added responsive spacing, typography tweaks, and hover effects for Navbar and Footer.",
    filesTouched: ["components/Header.tsx", "components/Footer.tsx"],
    learned: [
      "How Tailwind utility classes style components fast",
      "Why consistent spacing makes UI feel polished",
      "That small hover animations improve UX",
    ],
  },
  {
    day: 5,
    date: "2025-09-16",
    week: "Foundations I",
    task: "Accessibility pass",
    whatIDid:
      "Added skip link, aria-current for nav, focus states, and screen reader labels.",
    filesTouched: ["components/Header.tsx", "app/layout.tsx"],
    learned: [
      "What accessibility means in practice",
      "How aria attributes help screen readers",
      "Why keyboard navigation must be tested early",
    ],
  },
  {
    day: 4,
    date: "2025-09-15",
    week: "Foundations I",
    task: "Persist theme choice in localStorage",
    whatIDid:
      "Added a simple theme toggle that saves light/dark preference locally.",
    filesTouched: ["components/Header.tsx"],
    learned: [
      "How to use localStorage in Next.js",
      "What hydration errors are and how to avoid them",
      "That persistence improves UX by remembering settings",
    ],
  },
  {
    day: 3,
    date: "2025-09-14",
    week: "Foundations I",
    task: "Client interactivity on Navbar",
    whatIDid:
      "Made Navbar highlight active route with usePathname, added hover/tap interactivity.",
    filesTouched: ["components/Header.tsx"],
    learned: [
      "What hooks are in React",
      "How usePathname works in Next.js",
      "Difference between static vs. interactive components",
    ],
  },
  {
    day: 2,
    date: "2025-09-13",
    week: "Foundations I",
    task: "Add shared Header and Footer",
    whatIDid:
      "Created Header.tsx with Navbar and Footer.tsx with basic layout. Added to root layout.",
    filesTouched: [
      "components/Header.tsx",
      "components/Footer.tsx",
      "app/layout.tsx",
    ],
    learned: [
      "What a shared layout is in Next.js",
      "How children get injected into layout",
      "That components keep code reusable",
    ],
  },
  {
    day: 1,
    date: "2025-09-12",
    week: "Foundations I",
    task: "Create Next app, Git + Vercel",
    whatIDid:
      "Initialized Next.js app, pushed to GitHub, linked with Vercel, confirmed deployment works.",
    filesTouched: ["package.json", "app/layout.tsx", "app/page.tsx"],
    learned: [
      "How to bootstrap a Next.js project",
      "Why Git is needed for version control",
      "How Vercel auto-deploy works with GitHub",
    ],
  },
];
