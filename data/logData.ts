// /app/data/logdata.tsx

export type LogEntry = {
  id: number;
  date: string;
  title: string;
  content: string;
};

export const logData: LogEntry[] = [
  {
    id: 13,
    date: "Sept 24, 2025",
    title: "Day 13 – Log Filtering and Normalizing",
    content:
      "Added the ability to filter log entries by search terms. Implemented normalization (trimming spaces and making text lowercase) so searches are case-insensitive. Learned how conditional rendering works to show filtered results or a 'no results' message. Today’s focus is not coding new features, but taking time to carefully review and understand the flow: state → normalize → filter → render.",
  },
  {
    id: 12,
    date: "Sept 23, 2025",
    title: "Day 12 – Adding a Search Filter to the Log",
    content:
      "Today I added a search bar to the Log page. I learned how React state can store the current search term and update it whenever the user types. The input is controlled by state, meaning the text in the input box always matches what React is holding in memory. I also practiced using the .filter() method to only show log entries where the title or content includes the search term. At first, I didn’t fully understand how useState and controlled inputs worked, but after experimenting I built a clearer mental model. Now I can type into the search bar and instantly filter my log history.",
  },
  {
    id: 11,
    date: "sept 22, 2025",
    title: "Day 11 – Refactoring the Log with Components",
    content:
      "Today I refactored the Log page to use a reusable 'LogEntry' component. Instead of writing the markup for each log item directly inside the Log page, I created a component that accepts props: id, date, title, and content. This makes the code cleaner and more maintainable. If I ever change the layout of a log entry (for example, how the date looks), I only need to update it once inside the LogEntry component instead of updating every entry manually. I also practiced passing props and destructuring them inside the component. This improved my understanding of how data flows between components in React/Next.js.",
  },
  {
    id: 10,
    date: "Sept 21, 2025",
    title: "Day 10 - Understanding and Simplifying Props",
    content:
      "Today I worked on improving my understanding of how props work in React with TypeScript. Initially, I tried using React.FC with typed props, but it was giving errors in VS Code. After some clarification, I switched to a simpler option: defining the props type and directly annotating the function arguments. This made the component easier to read and avoided unnecessary complexity. The LogEntry component now takes id, date, title, and content props cleanly, without relying on React.FC. This step helped me feel more confident about handling props and simplifying code when needed.",
  },
  {
    id: 9,
    date: "Sept 20,2025",
    title: "Day 9 - Building the Log Page UI",
    content:
      "Today I created the first version of the Log page in Gaia. I set up a centered layout with a clean container using TailwindCSS, added a main heading, and built placeholder cards for daily log entries. Each card has a title (e.g., “Day 1 – Project Setup”) and a short description. The entries are static for now, but this page is now ready to later connect with logdata.tsx so the content can be updated automatically.",
  },
  {
    id: 8,
    date: "Sept 19, 2025",
    title: "Day 8 – Styling the Navbar",
    content:
      "Today I focused on making the Navbar look professional using TailwindCSS.  I added clean spacing between the links, hover effects to make the navigation more interactive, and adjusted font sizes and weights for readability. I also set up responsive behavior: on desktop the full navigation is visible, while on smaller screens it collapses into a hamburger menu placeholder. This made the navigation feel polished and user-friendly.",
  },
  {
    id: 7,
    date: "Sept 18, 2025",
    title: "Day 7 – Placeholder Pages Created",
    content:
      "Set up three simple placeholder pages for Money, Photos, and Videos. Linked them from the Navbar so navigation is now functional. Each page currently shows only a title and short description, ready to expand later. No client-side logic yet, keeping everything simple.",
  },
  {
    id: 6,
    date: "Sept 17, 2025",
    title: "Day 6 – Mobile-Friendly Navbar",
    content:
      "Added a responsive navbar that now works on both desktop and mobile. Implemented a hamburger menu using useState to toggle visibility of navigation links. On desktop, links are always visible, while on mobile, they are hidden until the hamburger button is clicked. This makes GAIA easier to use on smaller screens.",
  },
  {
    id: 5,
    date: "Sept 16, 2025",
    title: "Day 5 – Navbar Added",
    content:
      "Today I built the Navbar for GAIA. I created a Navbar.tsx component, added navigation links for Home, Log, Money, Photos, and Videos. Then I included it in the layout.tsx file so it appears on all pages. The Navbar is styled with TailwindCSS (dark background, white text) and uses Next.js <Link> for smooth, instant navigation. GAIA now feels more like a real application.",
  },
  {
    id: 4,
    date: "Sept 15, 2025",
    title: "Day 4 – First React Hurdles",
    content:
      "I experimented with loading components (like the Log) in Next.js. At first I struggled with React concepts (useState, useEffect) and got errors. Instead of forcing it, I decided to keep it simple and continue with the Log as it is now. The goal became: get something working, refine later. I also confirmed that I want to document each day as a narrative in the Log.",
  },
  {
    id: 3,
    date: "Sept 14, 2025",
    title: "Day 3 – The Loader Idea",
    content:
      "I asked about building a Loader system like the one I had in vanilla JavaScript, where components load dynamically into the main page. We discovered that in Next.js this can be done differently, using layouts and components instead of manual loaders. I left styling (hamburger menu and mobile-friendly UI) for later steps.",
  },
  {
    id: 2,
    date: "Sept 13, 2025",
    title: "Day 2 – Logging the Journey",
    content:
      "I focused on creating a Log system for GAIA. I set up a logdata.tsx file to hold entries like this one, which will document every step of the journey. I also discussed whether to keep log data inside the same app or in a separate database. For now, I chose to keep it separate for clarity.",
  },
  {
    id: 1,
    date: "Sept 12, 2025",
    title: "Day 1 – GAIA Begins",
    content:
      "Today I created the foundation for GAIA in Next.js. I used npx create-next-app@latest to scaffold the project. I chose TypeScript, ESLint, and TailwindCSS as the core tools. After some initial errors, I got the app running successfully and deployed a demo version to Vercel. GAIA officially has a heartbeat.",
  },
];
