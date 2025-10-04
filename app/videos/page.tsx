"use client";
import { useState } from "react";

import EmptyState from "../components/EmptyState";
import SectionHeader from "../components/SectionHeader";
import Modal from "../components/Modal";

export default function VideosPage() {
  const [open, setOpen] = useState(false);

  return (
    <section className="p-6 space-y-4">
      <SectionHeader
        title="Videos"
        description="Keep track of your recordings and clips."
      />
      {/* Example "video row" placeholder */}
      <div className="border rounded p-4 mb-4">
        <p className="mb-2">Sample Video #1 (placeholder)</p>
        <button
          onClick={() => setOpen(true)}
          className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Open Preview
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Video Preview">
        {/* Replace with real <video> later */}
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded mb-3" />
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Placeholder for a video player. Controls, keyboard shortcuts, and
          resume will come in later weeks.
        </p>
      </Modal>
      <EmptyState message="No videos yet." />
    </section>
  );
}
