"use client";
// app/log/page.tsx

import { logData } from "@/data/logData";
import LogEntry from "../components/LogEntry";
import { useState } from "react";

const LogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLogs = logData.filter(entry => 
    entry.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    entry.content.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    entry.date.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )
  return (
    <main className="container max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        GAIA - Development Log
      </h1>
      <div className="w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search Logs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md block mx-auto mb-4 px-4 py-2 border border-gray-300 rounded-lg text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
        />
      </div>

      
      {filteredLogs.map((log) => (
        <LogEntry
          key={log.id}
          id={log.id}
          title={log.title}
          date={log.date}
          content={log.content}
        />
      ))}
    </main>
  );
};

export default LogPage;

