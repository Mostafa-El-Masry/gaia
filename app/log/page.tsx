import { logEntries } from "@/data/logData";

export default function LogPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">GAIA Development Log</h1>

      <section className="space-y-6">
        {logEntries.map((entry) => (
          <article
            key={entry.day}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <h2 className="font-semibold text-lg">
              Day {entry.day} – {entry.date}
            </h2>
            <p className="text-gray-600">{entry.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}