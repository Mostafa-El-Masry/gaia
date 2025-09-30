import SectionHeader from "../components/SectionHeader";

export default function GalleryPage() {
  return (
    <section className="p-6 space-y-4">
      <SectionHeader
        title="Gallery"
        description="Your visual library. Store images, artwork, and memories."
      />
      <button className="border px-4 py-2 rounded">Add Image</button>
    </section>
  );
}
