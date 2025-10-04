"use client";
import { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null; // not rendered when closed

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose} // click backdrop to close (simple behavior for today)
      />

      {/* Panel */}
      <div className="relative mx-auto mt-24 max-w-lg rounded bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">{title ?? "Preview"}</h2>
          <button
            onClick={onClose}
            className="px-2 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Close
          </button>
        </div>
        <div className="text-gray-800 dark:text-gray-200">{children}</div>
      </div>
    </div>
  );
}
