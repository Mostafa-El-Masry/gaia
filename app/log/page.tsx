// app/log/page.tsx
import { logData } from "../../data/logData"; // relative path from app/log to project-root/data

export default function LogPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">GAIA — Development Log</h1>

      <section className="space-y-6">
        {logData.map((entry) => (
          <article
            key={entry.day}
            className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
          >
            <div className="flex justify-between items-baseline">
              <h2 className="font-semibold text-lg">{entry.title}</h2>
              <span className="text-sm text-gray-500">{entry.date}</span>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{entry.content}</p>
          </article>
        ))}
      </section>

      <p className="mt-8 text-sm text-gray-500">
        To add an entry: edit <code>data/logData.ts</code> and add an object to the top of the array.
      </p>
    </main>
  );
}