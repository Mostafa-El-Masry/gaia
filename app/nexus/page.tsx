import EmptyState from "../components/EmptyState";
import SectionHeader from "../components/SectionHeader";

export default function CorePage() {
  return (
    <>
      <SectionHeader
        title="Nexus"
        description="The central hub linking all GAIA modules."
      />
      <EmptyState message="No links yet." />
    </>
  );
}
