'use client';

import React, { useState, useEffect } from 'react';

type LogEntry = {
  id: number;
  title: string;
  content: string;
  date: string;
};

export default function Log() {
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Load saved logs from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('gaia-log');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem('gaia-log', JSON.stringify(entries));
  }, [entries]);

  function addEntry() {
    if (!title || !content) return;
    const newEntry: LogEntry = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    setEntries([newEntry, ...entries]);
    setTitle('');
    setContent('');
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Project GAIA Log</h2>

      {/* Form to add new log entry */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mr-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="What did you do today?"
          className="border p-2 w-full my-2 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={addEntry}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Entry
        </button>
      </div>

      {/* Show saved log entries */}
      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="p-4 border rounded bg-white shadow-sm dark:bg-gray-800"
          >
            <h3 className="font-semibold">{entry.title}</h3>
            <p className="text-sm text-gray-500">{entry.date}</p>
            <p className="mt-2">{entry.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}