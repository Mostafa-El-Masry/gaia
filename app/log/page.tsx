// app/log/page.tsx

import { logData } from "@/data/logData";
import LogEntry from "../components/LogEntry";


const LogPage = () => {
  return (
    <main className="container max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">GAIA - Development Log</h1>
      {logData.map((log) => (
        <LogEntry
          key={log.id}
          title={log.title}
          date={log.date}
          content={log.content}
        />
      ))}
    </main>
  );
};

export default LogPage;