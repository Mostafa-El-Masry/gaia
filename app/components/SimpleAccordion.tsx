"use client";
import React, { useState } from "react";

export default function SimpleAccordion({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-gray-300 dark:border-gray-600 rounded">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 text-left text-sm font-medium bg-gray-100 dark:bg-gray-700"
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-gray-700 dark:text-gray-300">
          {content}
        </div>
      )}
    </div>
  );
}
