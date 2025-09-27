"use client";

import { logData } from "@/data/logData";
import { useState } from "react";
import LogEntry from "@/app/components/LogEntry";


type SortOrder = "Newest" | "Oldest";

export default function LogPage() {
  // Search term (controlled input)
  const [searchTerm, setSearchTerm] = useState("");
  // Date-only sort order
  const [sortOrder, setSortOrder] = useState<SortOrder>("Newest");

  // Normalize search once (trim + lowercase)
  const normalized = searchTerm.trim().toLowerCase();

  // Filter first (case-insensitive, title + content)
  const filteredLogs = normalized
    ? logData.filter((entry) => {
        const haystack = (entry.title + " " + entry.content).toLowerCase();
        return haystack.includes(normalized);
      })
    : logData;

  // Safe date → number (ms). Handles ISO and "September/Sept" formats.
  const toTime = (d: string) => {
    const t = new Date(d).getTime();
    if (!Number.isNaN(t)) return t;
    // Fallback for uncommon "Sept" abbreviation
    return new Date(d.replace("Sept ", "Sep ")).getTime();
  };

  // Sort after filtering (Newest/Oldest)
  const sortedLogs = [...filteredLogs].sort((a, b) => {
    const da = toTime(a.date);
    const db = toTime(b.date);
    return sortOrder === "Newest" ? db - da : da - db;
  });

  // const total = logData.length;
  const count = sortedLogs.length;



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

     {/* (D) NEW: sort dropdown */}
      <div className="mb-4 flex items-center gap-3">
        <label htmlFor="sort" className="text-sm text-gray-600">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          className="border p-2 rounded"
        >
          <option value="Newest">Newest first</option>
          <option value="Oldest">Oldest first</option>
        </select>
        <span className="text-sm text-gray-500 ml-auto">
          {normalized ? `Showing ${count} result${count !== 1 ? "s" : ""}` : ""}
        </span>
      </div>

      {/* 6) Empty state vs. list */}
      {count === 0 ? (
        <div className="rounded-lg border p-6 text-gray-700 bg-white">
          <p className="font-medium mb-1">No log entries found matching your search terms</p>
          <p className="text-sm">
            Try a different search term {searchTerm}. 
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
          {sortedLogs.map((entry) => (
            <LogEntry key={entry.id} {...entry} />
          ))}
        </section>
      )}
    </main>
  );
}