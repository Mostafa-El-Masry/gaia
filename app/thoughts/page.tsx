import EmptyState from "../components/EmptyState";
import SectionHeader from "../components/SectionHeader";

export default function CorePage() {
  return (
    <>
      <SectionHeader
        title="Thoughts"
        description="Quick jot-down notes and ideas."
      />
      <EmptyState message="No thoughts captured yet." />
    </>
  );
}
