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
        const haystack = (entry.title + " " + entry.content).toLowerCase();
        return haystack.includes(normalized);
      })
    : logData;

  // 4) Small derived numbers for the UI
  const total = logData.length;
  const count = filteredLogs.length;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">GAIA - Project Log</h1>

      {/* Search box (controlled input) */}
      <input
        type="text"
        placeholder="Search logs…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-3 w-full"
        aria-label="Search logs"
      />

      {/* 5) Result info line */}
      <div className="text-sm text-gray-500 mb-4">
        {normalized
          ? `Showing ${count} result${count !== 1 ? "s" : ""} for "${searchTerm}".`
          : `Showing all ${total} entries.`}
      </div>

      {/* 6) Empty state vs. list */}
      {count === 0 ? (
        <div className="rounded-lg border p-6 text-gray-700 bg-white">
          <p className="font-medium mb-1">No log entries found</p>
          <p className="text-sm">
            Try a different search term{" "}
            {/* (Optional) small quality-of-life: clear search */}
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="underline"
            >
              or clear the search
            </button>
            .
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