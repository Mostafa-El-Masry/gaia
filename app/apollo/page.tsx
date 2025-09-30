import EmptyState from "../components/EmptyState";
import SectionHeader from "../components/SectionHeader";

export default function ApolloPage() {
  return (
    <>
      <SectionHeader
        title="Apollo"
        description="Your knowledge hub for notes, links, and insights."
      />
      <EmptyState message="No notes yet." />
    </>
  );
}
