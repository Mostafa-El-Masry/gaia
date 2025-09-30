import EmptyState from "../components/EmptyState";
import SectionHeader from "../components/SectionHeader";

export default function GalleryPage() {
  return (
    <>
      <SectionHeader
        title="Gallery"
        description="This is the where all images will exist."
      />
      <EmptyState message="No images yet." />
    </>
  );
}
