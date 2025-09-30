import EmptyState from "../components/EmptyState";
import SectionHeader from "../components/SectionHeader";

export default function CorePage() {
  return (
    <>
      <SectionHeader
        title="Vault"
        description="Secure, private storage area."
      />
      <EmptyState message="No files yet." />
    </>
  );
}
