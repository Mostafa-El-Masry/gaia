"use client";
import { useState } from "react";

type LogEntryProps = {
  day: number;
  date: string; // ISO format
  week: string;
  task: string;
  whatIDid: string;
  filesTouched: string[];
  link?: string;
  learned: string[];
  status?: "done" | "in-progress" | "holded";
};

export default function LogEntry({
  day,
  date,
  week,
  task,
  whatIDid,
  filesTouched,
  link,
  learned,
  status
}: LogEntryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 mb-3">
      {/* Header (always visible) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 text-left focus:outline-none"
      >
        <div className="flex flex-col items-start">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Day {day} — {week}
            {status && (
  <span
    className={`text-xs px-2 py-1 rounded ${
      status === "done"
        ? "bg-green-100 text-green-800"
        : status === "in-progress"
        ? "bg-yellow-100 text-yellow-800"
        : "bg-red-100 text-red-800"
    }`}
  >
    {status === "done"
      ? "✅ Done"
      : status === "in-progress"
      ? "🕓 In Progress"
      : "⚠️ Holded"}
  </span>
)}

          </span>
          <span className="text-md max-w-xl text-blue-600 dark:text-emerald-500">
            {task}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {date}
          </p>
          <span className="text-gray-500 dark:text-gray-400 text-base">
            {isOpen ? "▲" : "▼"}
          </span>
        </div>
      </button>

      {/* Collapsible content */}
      {isOpen && (
        <div className="px-6 pb-6 space-y-4">
          {/* What I did */}
          <p className="text-gray-700 dark:text-gray-300">{whatIDid}</p>

          {/* Files touched */}
          {filesTouched.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                Files Touched:
              </h5>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                {filesTouched.map((file, index) => (
                  <li key={index}>{file}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
            >
              View Deployment
            </a>
          )}

          {/* Learned */}
          <div>
            <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Learned:
            </h5>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
              {learned.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
