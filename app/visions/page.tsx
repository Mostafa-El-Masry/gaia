import EmptyState from "../components/EmptyState";
import SectionHeader from "../components/SectionHeader";

export default function CorePage() {
  return (
    <>
      <SectionHeader
        title="Vision"
        description="This is the Visions page of GAIA."
      />
      <EmptyState message="No visions saved yet." />
    </>
  );
}
