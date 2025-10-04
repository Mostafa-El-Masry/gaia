"use client";
import { useState } from "react";
import EmptyState from "../components/EmptyState";
import Modal from "../components/Modal";
import SectionHeader from "../components/SectionHeader";
import { useLocalStorage } from "../components/useLocalStorage";

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [dense, setDense] = useLocalStorage<boolean>("galleryDense", false);

  return (
    <>
      <SectionHeader
        title="Gallery"
        description="This is the where all images will exist."
      />
      <EmptyState message="No images yet." />

      {/* Example "image card" placeholder */}
      <div className="border rounded p-4 mb-4">
        <p className="mb-2">Sample Image #1 (placeholder)</p>
        <button
          onClick={() => setOpen(true)}
          className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Open Preview
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Image Preview">
        {/* Replace with real image later */}
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <p className="text-sm text-gray-600 dark:text-gray-300">
          This is a placeholder for an image preview. Real media + metadata will
          come in Media/DB weeks.
        </p>
      </Modal>
      <main
        className={`max-w-2xl mx-auto py-10 px-4 ${
          dense ? "space-y-1" : "space-y-4"
        }`}
      >
        <button
          onClick={() => setDense(!dense)}
          className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 mb-4"
        >
          {dense ? "Switch to Comfy" : "Switch to Dense"}
        </button>

        <div className="border rounded p-2">Item 1</div>
        <div className="border rounded p-2">Item 2</div>
        <div className="border rounded p-2">Item 3</div>
      </main>
    </>
  );
}
