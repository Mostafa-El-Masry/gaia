import EmptyState from "../components/EmptyState";
import SectionHeader from "../components/SectionHeader";

export default function VideosPage() {
  return (
    <section className="p-6 space-y-4">
      <SectionHeader
        title="Videos"
        description="Keep track of your recordings and clips."
      />
      <EmptyState message="No videos yet." />
    </section>
  );
}
