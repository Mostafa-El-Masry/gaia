"use client";

import { logData } from "@/data/logData";
import { useState } from "react";
import LogEntry from "../components/LogEntry";


export default function LogPage() {
  // 1) Search state (same as Day 12)
  const [searchTerm, setSearchTerm] = useState("");

  // 2) Normalize the search string once (trim + lowercase)
  const normalized = searchTerm.trim().toLowerCase();

  // 3) Derive the filtered list from data (no extra state needed)
  const filteredLogs = normalized 
  ? logData.filter((entry) => {
    const filting = (entry.title + "  " + entry.date + " " + entry.content)
    return filting.includes(normalized);
  })
  : logData;

  // 4) Small derived numbers for the 
  const total = logData.length
  const count = filteredLogs.length


  return (
    <main className="max-w-3xl mx-auto p-6">
       <h1 className="text-3xl font-bold mb-6 text-center">
        GAIA - Development Log
      </h1>

      {/* Search box (controlled input) */}
      <input
        type="text"
        placeholder="Search logs…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md block mx-auto mb-4 px-4 py-2 border border-gray-300 rounded-lg text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
        aria-label="Search logs"
      />

      {/* 5) Result info line */}
      <div className="text-sm text-gray-500 mb-4">
        {normalized
        ? `Showing ${count} results${count !== 1 ? "s" : ""} for "${searchTerm}"`: ""}

      </div>

      {/* 6) Empty state vs. list */}
      {count === 0 ? (
        <div className="rounded-lg border p-6 text-gray-700 bg-white">
          <p className="font-medium mb-1">No log entries found matching your search terms</p>
          <p className="text-sm">
            Try a different search term "{searchTerm}". 
            {/* (Optional) small quality-of-life: clear search */}
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="underline px-3"
            >
             Clear The Search Bar
            </button>
          </p>
        </div>
      ) : (
        <section>
          {filteredLogs.map((entry) => (
            <LogEntry key={entry.id} {...entry} />
          ))}
        </section>
      )}
    </main>
  );
}