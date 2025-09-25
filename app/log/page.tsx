"use client";
// app/log/page.tsx

import { logData } from "@/data/logData";
import LogEntry from "../components/LogEntry";
import { useState } from "react";
import { Enriqueta } from "next/font/google";

const LogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLogs = logData.filter(entry => 
    entry.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    entry.content.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )
  return (
    <main className="container max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        GAIA - Development Log
      </h1>
      <input
        type="text"
        placeholder="Search Logs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />

      
      {filteredLogs.map((log) => (
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
