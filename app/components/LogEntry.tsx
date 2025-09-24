// components/LogEntry.tsx
import React from "react";

interface LogEntryProps {
  id: number;
  date: string;
  title: string;
  content: string;
}

const LogEntry: React.FC<LogEntryProps> = ({ id, date, title, content }) => {
  return (
    <div className="mb-4 max-w-3xl mx-auto p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <span className="block text-sm text-gray-500">{id}{date}</span>
      <p className="mt-2 text-gray-700">{content}</p>
    </div>
  );
};

export default LogEntry;