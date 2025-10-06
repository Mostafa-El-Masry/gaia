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
  status?: "done" | "in-progress" | "blocked";
};

export const logData: LogEntry[] = [
  // Week 3 — Foundations III
  {
    day: 21,
    date: "2025-10-01",
    week: "Foundations III",
    task: "Weekly review and add status tags to logs",
    whatIDid: "Reviewed all progress for Week 3 and added a new status badge feature in the LogEntry component to mark tasks as Done, In Progress, or Blocked.",
    filesTouched: ["components/LogEntry.tsx", "data/logData.ts"],
    learned: [
      "How to extend components with new props",
      "How to use Tailwind conditional classes for dynamic UI"
    ],
    status: "done"
  },
  {
    day: 20,
    date: "2025-09-31",
    week: "Foundations III",
    task: "Add a simple form that submits data to a mock API route",
    whatIDid: "Built a POST API route at /api/feedback and added a form to the About page. Used fetch() to send and handle success/failure messages.",
    filesTouched: ["app/api/feedback/route.ts", "app/about/page.tsx"],
    learned: [
      "How to send form data to an API route",
      "How to handle client-side responses and display messages"
    ],
    status: "done"
  },
  {
    day: 19,
    date: "2025-09-30",
    week: "Foundations III",
    task: "Add error boundaries for friendly error UI",
    whatIDid: "Created an ErrorBoundary component to catch runtime errors and display a friendly fallback instead of a crash.",
    filesTouched: ["components/ErrorBoundary.tsx", "app/layout.tsx"],
    learned: [
      "How React Error Boundaries work",
      "How to show fallback UIs safely"
    ],
    status: "done"
  },
  {
    day: 18,
    date: "2025-09-29",
    week: "Foundations III",
    task: "Persist one trivial preference per page in localStorage",
    whatIDid: "Added a useLocalStorage hook to remember page layout preferences (dense/comfy). Applied it across several pages for persistence.",
    filesTouched: ["components/useLocalStorage.ts", "app/gallery/page.tsx", "app/videos/page.tsx", "app/core/page.tsx", "app/wealth/page.tsx"],
    learned: [
      "How to manage persistent data in localStorage",
      "How to write reusable hooks"
    ],
    status: "done"
  },
  {
    day: 17,
    date: "2025-09-28",
    week: "Foundations III",
    task: "Add keyboard support for modals (Esc + Tab loop)",
    whatIDid: "Improved modal accessibility with Esc-to-close, focus trapping, and returning focus to the opener.",
    filesTouched: ["components/Modal.tsx", "app/gallery/page.tsx", "app/videos/page.tsx"],
    learned: [
      "How to listen for keyboard events with useEffect",
      "How to trap focus in modals"
    ],
    status: "done"
  },
  {
    day: 16,
    date: "2025-09-27",
    week: "Foundations III",
    task: "Add simple modals for Gallery and Videos previews",
    whatIDid: "Built a reusable Modal component and used it for Gallery and Videos previews with click and backdrop close.",
    filesTouched: ["components/Modal.tsx", "app/gallery/page.tsx", "app/videos/page.tsx"],
    learned: [
      "How to build controlled modals",
      "How to pass dynamic children for flexibility"
    ],
    status: "done"
  },
  {
    day: 15,
    date: "2025-09-26",
    week: "Foundations III",
    task: "Add small interactivity per page (accordion/toggle)",
    whatIDid: "Added SimpleAccordion component with toggles on all pages using useState for basic interactivity.",
    filesTouched: ["components/SimpleAccordion.tsx", "app/welcome/page.tsx", "app/core/page.tsx", "app/gallery/page.tsx", "app/videos/page.tsx", "app/wealth/page.tsx", "app/abollo/page.tsx", "app/nexus/page.tsx", "app/thoughts/page.tsx", "app/visions/page.tsx", "app/vault/page.tsx", "app/about/page.tsx"],
    learned: [
      "How to manage UI state with useState",
      "How to apply interaction patterns across pages"
    ],
    status: "done"
  },

  // Week 2 — Foundations II
  {
    day: 14,
    date: "2025-09-25",
    week: "Foundations II",
    task: "Review and polish Week 2 work",
    whatIDid: "Reviewed all new pages, fixed spacing, added consistent empty states and deployment verification.",
    filesTouched: ["app/layout.tsx", "app/*/page.tsx"],
    learned: [
      "How to review UI consistency",
      "How to deploy with confidence"
    ],
    status: "done"
  },
  {
    day: 13,
    date: "2025-09-24",
    week: "Foundations II",
    task: "Empty states for each page",
    whatIDid: "Added placeholder text and empty-state components across all main pages.",
    filesTouched: ["components/EmptyState.tsx", "app/*/page.tsx"],
    learned: [
      "How to show empty state messages cleanly",
      "How to improve UX when no data is present"
    ],
    status: "done"
  },
  {
    day: 12,
    date: "2025-09-23",
    week: "Foundations II",
    task: "Local loading placeholders",
    whatIDid: "Created simple loading placeholders for Gallery and Videos pages to simulate content loading.",
    filesTouched: ["app/gallery/page.tsx", "app/videos/page.tsx"],
    learned: [
      "How to use suspense-like placeholders",
      "How to structure loading UX"
    ],
    status: "done"
  },
  {
    day: 11,
    date: "2025-09-22",
    week: "Foundations II",
    task: "Add shared section headers and components",
    whatIDid: "Created SectionHeader component to unify layout of titles and descriptions across all pages.",
    filesTouched: ["components/SectionHeader.tsx", "app/*/page.tsx"],
    learned: [
      "How to reuse components for consistency",
      "How to use props to control appearance"
    ],
    status: "done"
  },
  {
    day: 10,
    date: "2025-09-21",
    week: "Foundations II",
    task: "Wire navigation links to all pages",
    whatIDid: "Connected Navbar links to their routes and verified navigation flow.",
    filesTouched: ["components/Navbar.tsx"],
    learned: [
      "How to handle active routes with usePathname",
      "How to structure navigation"
    ],
    status: "done"
  },
  {
    day: 9,
    date: "2025-09-20",
    week: "Foundations II",
    task: "Add minimal content to each page",
    whatIDid: "Populated each new page with simple headings and placeholder paragraphs.",
    filesTouched: ["app/*/page.tsx"],
    learned: [
      "How to scaffold multiple pages quickly",
      "How to ensure route consistency"
    ],
    status: "done"
  },
  {
    day: 8,
    date: "2025-09-19",
    week: "Foundations II",
    task: "Create core page structure for all sections",
    whatIDid: "Created pages for Welcome, Core, Gallery, Videos, Wealth, Abollo, Nexus, Thoughts, Visions, Vault, and About.",
    filesTouched: ["app/*/page.tsx"],
    learned: [
      "How to scaffold pages in Next.js",
      "How to define route-based page files"
    ],
    status: "done"
  },

  // Week 1 — Foundations I
  {
    day: 7,
    date: "2025-09-18",
    week: "Foundations I",
    task: "Review & deploy first build",
    whatIDid: "Reviewed layout, cleaned small issues, deployed to Vercel, verified build and links.",
    filesTouched: ["layout.tsx", "components/Navbar.tsx", "Footer.tsx"],
    learned: [
      "How to deploy Next.js apps to Vercel",
      "How to verify layouts and responsive behavior"
    ],
    status: "done"
  },
  {
    day: 6,
    date: "2025-09-17",
    week: "Foundations I",
    task: "Light Tailwind polish for header and footer",
    whatIDid: "Applied Tailwind styling to Navbar and Footer, ensuring color consistency and responsive spacing.",
    filesTouched: ["components/Navbar.tsx", "components/Footer.tsx"],
    learned: [
      "How to use Tailwind utility classes effectively",
      "How to style components responsively"
    ],
    status: "done"
  },
  {
    day: 5,
    date: "2025-09-16",
    week: "Foundations I",
    task: "Add accessibility basics (skip links, ARIA, focus states)",
    whatIDid: "Implemented skip-to-content link, added ARIA labels to nav links, verified focus visibility.",
    filesTouched: ["components/Navbar.tsx", "layout.tsx"],
    learned: [
      "How to improve accessibility using ARIA roles",
      "How to design for keyboard navigation"
    ],
    status: "done"
  },
  {
    day: 4,
    date: "2025-09-15",
    week: "Foundations I",
    task: "Persist theme choice in localStorage",
    whatIDid: "Implemented ThemeToggle component that stores the theme (light/dark) in localStorage and applies it to <body>.",
    filesTouched: ["components/ThemeToggle.tsx", "layout.tsx"],
    learned: [
      "How to use useEffect for side effects",
      "How to persist state in localStorage"
    ],
    status: "done"
  },
  {
    day: 3,
    date: "2025-09-14",
    week: "Foundations I",
    task: "Add interactivity to Navbar",
    whatIDid: "Made Navbar interactive with hover and active link indicators using usePathname.",
    filesTouched: ["components/Navbar.tsx"],
    learned: [
      "How to detect the active route in Next.js",
      "How to add basic interactivity with hooks"
    ],
    status: "done"
  },
  {
    day: 2,
    date: "2025-09-13",
    week: "Foundations I",
    task: "Add shared layout with Navbar and Footer",
    whatIDid: "Created global layout file and added Navbar and Footer to wrap around page content.",
    filesTouched: ["layout.tsx", "components/Navbar.tsx", "components/Footer.tsx"],
    learned: [
      "How Next.js layouts work",
      "How to compose reusable page structure"
    ],
    status: "done"
  },
  {
    day: 1,
    date: "2025-09-12",
    week: "Foundations I",
    task: "Initialize Next.js app and push to Vercel",
    whatIDid: "Created new Next.js project, initialized GitHub repo, deployed initial version to Vercel.",
    filesTouched: ["package.json", "next.config.ts", "README.md"],
    learned: [
      "How to set up a Next.js app from scratch",
      "How to deploy to Vercel"
    ],
    status: "done"
  }
];
