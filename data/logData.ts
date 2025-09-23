// /app/data/logdata.tsx

export interface LogEntry {
  day: number;
  date: string;
  title: string;
  content: string;
}

export const logData: LogEntry[] = [
  {
    day: 1,
    date: "Sept 12, 2025",
    title: "🌱 Day 1 – GAIA Begins",
    content:
      "Today I created the foundation for GAIA in Next.js. I used npx create-next-app@latest to scaffold the project. I chose TypeScript, ESLint, and TailwindCSS as the core tools. After some initial errors, I got the app running successfully and deployed a demo version to Vercel. GAIA officially has a heartbeat.",
  },
  {
    day: 2,
    date: "Sept 13, 2025",
    title: "⚡ Day 2 – Logging the Journey",
    content:
      "I focused on creating a Log system for GAIA. I set up a logdata.tsx file to hold entries like this one, which will document every step of the journey. I also discussed whether to keep log data inside the same app or in a separate database. For now, I chose to keep it separate for clarity.",
  },
  {
    day: 3,
    date: "Sept 14, 2025",
    title: "📂 Day 3 – The Loader Idea",
    content:
      "I asked about building a Loader system like the one I had in vanilla JavaScript, where components load dynamically into the main page. We discovered that in Next.js this can be done differently, using layouts and components instead of manual loaders. I left styling (hamburger menu and mobile-friendly UI) for later steps.",
  },
  {
    day: 4,
    date: "Sept 15, 2025",
    title: "🧩 Day 4 – First React Hurdles",
    content:
      "I experimented with loading components (like the Log) in Next.js. At first I struggled with React concepts (useState, useEffect) and got errors. Instead of forcing it, I decided to keep it simple and continue with the Log as it is now. The goal became: get something working, refine later. I also confirmed that I want to document each day as a narrative in the Log.",
  },
  {
    day: 5,
    date: "Sept 16, 2025",
    title: "🌐 Day 5 – Navbar Added",
    content:
      "Today I built the Navbar for GAIA. I created a Navbar.tsx component, added navigation links for Home, Log, Money, Photos, and Videos. Then I included it in the layout.tsx file so it appears on all pages. The Navbar is styled with TailwindCSS (dark background, white text) and uses Next.js <Link> for smooth, instant navigation. GAIA now feels more like a real application.",
  },
  {
  day: 6,
  date: "2025-09-17",
  title: "Mobile-Friendly Navbar",
  content: "Added a responsive navbar that now works on both desktop and mobile. Implemented a hamburger menu using useState to toggle visibility of navigation links. On desktop, links are always visible, while on mobile, they are hidden until the hamburger button is clicked. This makes GAIA easier to use on smaller screens.",
},
{
  day: 7,
  date: "2025-09-18",
  title: "Placeholder Pages Created",
  content: "Set up three simple placeholder pages for Money, Photos, and Videos. Linked them from the Navbar so navigation is now functional. Each page currently shows only a title and short description, ready to expand later. No client-side logic yet, keeping everything simple."
},

];