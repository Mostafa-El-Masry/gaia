import SectionHeader from "../components/SectionHeader";
import SimpleAccordion from "../components/SimpleAccordion";

export default function CorePage() {
  return (
    <>
      <SectionHeader
        title="Welcome"
        description="Introduction to GAIA, your personal assistant."
      />

      <SimpleAccordion
        title="Read a welcome note"
        content="GAIA is your personal hub. Explore each page to see how it grows step by step."
      />
    </>
  );
}
